/* =========================================================
   鏡頭模式:外部跟拍 → 進艙過場 → 艙內固定位置 → 出艙過場
   所有艙內位置都是船身座標,鏡頭跟著船一起晃(頭部會稍微自動扶正)
   ========================================================= */
import * as THREE from 'three';
import { exteriorPose } from './camera.js';
import { createCabinHud } from './ui/cabinHud.js';
import { createLookAround } from './lookAround.js';
import { createWheelZoom, liftAboveSea } from './cameraZoom.js';

export const STATIONS = [
  { key: 'helm', label: '駕駛座', pos: [-2.74, 2.52, 0], look: [-1.0, 2.04, 0] },
  { key: 'desk', label: '儀表板', pos: [-2.2, 2.6, -0.4], look: [-1.66, 2.06, -0.64] },
  { key: 'window', label: '窗邊', pos: [-2.6, 2.6, -0.62], look: [-6.6, 2.55, -5.0] },
  { key: 'chart', label: '海圖桌', pos: [-2.6, 2.72, 0.4], look: [-3.3, 2.0, 0.62] }
];

/* 進艙路線:繞到右舷 → 對準右舷中間那扇窗 → 穿過玻璃 → 轉頭看駕駛台 */
const ENTRY_PATH = [[-2.6, 3.05, 4.4], [-2.6, 2.53, 1.6], [-2.6, 2.51, 0.82]];
const ENTRY_LOOK = [[-2.6, 2.45, 0], [-2.6, 2.48, -1.2], [-2.3, 2.45, -1.0]];
const ENTER_TIME = 4.2;
const EXIT_TIME = 3.6;
const MOVE_TIME = 1.5;
const STILL_OUTSIDE = 0.45;      // 進艙過場走到這之前取消 → 直接退回,不穿窗
const HEAD_LEVEL = 0.4;          // 頭部自動扶正的比例:0 = 完全跟船、1 = 完全水平
const NEAR_OUTSIDE = 0.1, NEAR_INSIDE = 0.04;
const WORLD_UP = new THREE.Vector3(0, 1, 0);

const v3 = (a) => new THREE.Vector3(...a);
const ease = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
const smooth = (a, b, x) => THREE.MathUtils.smoothstep(x, a, b);

function stationPose(i) {
  return { pos: v3(STATIONS[i].pos), look: v3(STATIONS[i].look) };
}

/* 過場曲線只在開始時建一次;外部端點是同一個 Vector3,每幀原地更新(跟拍鏡頭一直在動) */
function makeCurves(points, looks) {
  return {
    pos: new THREE.CatmullRomCurve3(points, false, 'centripetal'),
    look: new THREE.CatmullRomCurve3(looks, false, 'centripetal')
  };
}

/* 滑鼠 / 觸控 / 鍵盤:只負責把輸入翻成動作 */
function bindInput({ dom, pointer, hud, pick, actions }) {
  dom.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / innerHeight) * 2 + 1;
    pointer.fresh = true;
    hud.moveHint(e.clientX, e.clientY);
  });
  // 點擊當下直接 raycast:觸控點一下沒有先前的 pointermove 也能進艙
  dom.addEventListener('click', (e) => { if (pick(e.clientX, e.clientY)) actions.enter(); });
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
    if (e.key === 'Escape') actions.exit();
    else if (e.key === 'e' || e.key === 'E') actions.enter();
    else {
      const n = Number(e.key);
      if (n >= 1 && n <= STATIONS.length) actions.goStation(n - 1);
    }
  });
}

/**
 * @param {{ camera: THREE.PerspectiveCamera, boat: THREE.Object3D, wheelhouse: object, cabin: object,
 *           dom: HTMLElement, seaHeight: (x: number, z: number, t: number) => number }} opts
 */
export function createCabinView({ camera, boat, wheelhouse, cabin, dom, seaHeight }) {
  const state = { mode: 'outside', u: 0, station: 0, from: null, to: null, curves: null, reveal: 0, revealFrom: 1, inside: 0 };
  const pointer = { x: 0, y: 0, fresh: false };
  const ext = { pos: new THREE.Vector3(), look: new THREE.Vector3() };   // 外部鏡頭(船身座標),每幀更新
  let current = stationPose(0);                                           // 上一幀的鏡頭(船身座標)
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pickables = [];
  wheelhouse.group.traverse((o) => { if (o.isMesh && !isInside(o, cabin.group)) pickables.push(o); });

  const hud = createCabinHud({ stations: STATIONS, onStation: (i) => goStation(i), onExit: () => exit() });
  const lookAround = createLookAround(dom, () => state.mode === 'inside' || state.mode === 'moving');
  const zoom = createWheelZoom(dom, () => state.mode === 'outside');
  let lookHintShown = false;

  function pick(clientX, clientY) {
    if (state.mode !== 'outside') return false;
    camera.updateMatrixWorld();
    ndc.set((clientX / innerWidth) * 2 - 1, -(clientY / innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    return raycaster.intersectObjects(pickables, false).length > 0;
  }

  function setHover(on) {
    dom.style.cursor = on ? 'pointer' : '';
    hud.setHover(on);
  }

  function setReveal(r) {
    state.reveal = r;
    cabin.setReveal(r);
  }

  /* ---------- 狀態切換 ---------- */
  function enter() {
    if (state.mode !== 'outside') return;
    state.mode = 'entering'; state.u = 0; state.station = 0;
    const helm = stationPose(0);
    state.curves = makeCurves([ext.pos, ...ENTRY_PATH.map(v3), helm.pos], [ext.look, ...ENTRY_LOOK.map(v3), helm.look]);
    setHover(false);
  }

  /* 艙內任何時候都能離開(包括進艙過場途中、換位置途中):從「現在的鏡頭」出發 */
  function exit() {
    if (state.mode === 'outside' || state.mode === 'exiting') return;
    const aborted = state.mode === 'entering' && ease(state.u) < STILL_OUTSIDE;
    const from = { pos: current.pos.clone(), look: current.look.clone() };
    state.curves = aborted
      ? makeCurves([from.pos, ext.pos], [from.look, ext.look])
      : makeCurves([from.pos, ...ENTRY_PATH.map(v3).reverse(), ext.pos], [from.look, ...ENTRY_LOOK.map(v3).reverse(), ext.look]);
    state.mode = 'exiting'; state.u = 0; state.revealFrom = state.reveal;
    lookAround.reset();
    dom.style.cursor = '';
    hud.showBar(false);
  }

  function goStation(i) {
    if ((state.mode !== 'inside' && state.mode !== 'moving') || i === state.station || !STATIONS[i]) return;
    state.mode = 'moving'; state.u = 0;
    state.from = { pos: current.pos.clone(), look: current.look.clone() };
    state.to = stationPose(i);
    state.station = i;
    lookAround.reset();
    hud.setActive(i);
  }

  bindInput({ dom, pointer, hud, pick, actions: { enter, exit, goStation } });

  function arrive() {
    state.mode = 'inside';
    hud.showBar(true);
    hud.setActive(0);
    if (!lookAround.dragging) dom.style.cursor = 'grab';
    if (!lookHintShown) { hud.toast('按住拖曳可以環顧四周(方向鍵也可以)'); lookHintShown = true; }
  }

  /* ---------- 每幀:船身座標的 pos / look ---------- */
  function step(dt, duration) {
    state.u = Math.min(1, state.u + dt / duration);
    return ease(state.u);
  }

  function curvePose(s) {
    return { pos: state.curves.pos.getPointAt(s), look: state.curves.look.getPointAt(s) };
  }

  function entering(dt) {
    const s = step(dt, ENTER_TIME);
    setReveal(smooth(0.04, 0.4, s));
    if (state.u >= 1) arrive();
    return { pose: curvePose(s), inside: smooth(0, 0.5, s) };
  }

  function exiting(dt) {
    const s = step(dt, EXIT_TIME);
    setReveal(state.revealFrom * (1 - smooth(0.6, 0.96, s)));
    const inside = state.revealFrom * (1 - smooth(0.5, 1, s));
    if (state.u >= 1) { state.mode = 'outside'; pointer.fresh = true; }
    return { pose: curvePose(s), inside };
  }

  function moving(dt) {
    const s = step(dt, MOVE_TIME);
    const pos = state.from.pos.clone().lerp(state.to.pos, s);
    pos.y += Math.sin(Math.PI * s) * 0.05;                 // 走動時頭會微微起伏
    if (state.u >= 1) state.mode = 'inside';
    return { pose: { pos, look: state.from.look.clone().lerp(state.to.look, s) }, inside: 1 };
  }

  function apply(pos, lookAt, inside) {
    const up = WORLD_UP.clone().applyQuaternion(boat.quaternion).lerp(WORLD_UP, HEAD_LEVEL).normalize();
    camera.up.copy(WORLD_UP).lerp(up, inside).normalize();
    camera.position.copy(pos).applyMatrix4(boat.matrixWorld);
    camera.lookAt(lookAt.applyMatrix4(boat.matrixWorld));
    const near = THREE.MathUtils.lerp(NEAR_OUTSIDE, NEAR_INSIDE, inside);
    if (Math.abs(camera.near - near) > 1e-5) { camera.near = near; camera.updateProjectionMatrix(); }
  }

  function update(t, dt, heaveX) {
    boat.updateMatrixWorld();
    const p = exteriorPose(t, heaveX, zoom.update(dt));
    p.pos.y = liftAboveSea(p.pos.y, seaHeight(p.pos.x, p.pos.z, t));
    ext.pos.copy(boat.worldToLocal(p.pos));
    ext.look.copy(boat.worldToLocal(p.look));

    if (state.mode === 'outside') {
      state.inside = 0;
      current = { pos: ext.pos.clone(), look: ext.look.clone() };
      apply(ext.pos.clone(), ext.look.clone(), 0);
      if (pointer.fresh) {
        pointer.fresh = false;
        setHover(pick((pointer.x + 1) / 2 * innerWidth, (1 - pointer.y) / 2 * innerHeight));
      }
      return;
    }
    let frame;
    if (state.mode === 'entering') frame = entering(dt);
    else if (state.mode === 'exiting') frame = exiting(dt);
    else if (state.mode === 'moving') frame = moving(dt);
    else frame = { pose: stationPose(state.station), inside: 1 };
    const lookAt = lookAround.apply(frame.pose.pos, frame.pose.look, dt);
    current = { pos: frame.pose.pos, look: lookAt.clone() };          // 含轉頭角度:離開/換位置從實際視線出發
    state.inside = frame.inside;
    apply(frame.pose.pos.clone(), lookAt, frame.inside);
  }

  /* inside:0 = 室外、1 = 艙內,過場中連續變化(音效用來決定外面的聲音有多悶) */
  return { update, get mode() { return state.mode; }, get inside() { return state.inside; } };
}

function isInside(o, root) {
  for (let p = o; p; p = p.parent) if (p === root) return true;
  return false;
}
