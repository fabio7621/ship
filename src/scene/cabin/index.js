/* =========================================================
   駕駛艙內部:組裝 + 每幀更新
   平常整組隱藏(外部視角零成本),進艙過場開始才顯示;
   reveal 0→1:亮窗貼片淡出、艙內燈亮起、下層艙頂面與雨滴被裁掉
   ========================================================= */
import * as THREE from 'three';
import { createCabinMaterials } from './materials.js';
import { createScreens } from './screens.js';
import { buildShell } from './shell.js';
import { buildConsole } from './console.js';
import { buildClutter } from './clutter.js';
import { buildAft, PENCIL_RANGE, PENCIL_REST_Y, LOGBOOK_SPAN } from './aft.js';
import { CABIN, LOWER, frontInnerX } from './layout.js';
import {
  localGravity, createSway, stepSway, createRoller, stepRoller
} from '../../physics/cabinMotion.js';

const G = 9.81;
const LAMP_INTENSITY = 1.2;
const CEILING_INTENSITY = 1.6;
const LAMP_MAX_SWING = 0.4;       // 吊燈最大偏角(水平分量 ≈ sin 24°)
const HAT_MAX_SWING = 0.1;        // 掛在木釘上的帽子只會輕輕晃(≈ 6°)
const SPILL_DIM = 1;
const ITEM_HEIGHT = 1.9;          // 艙內物品離船身原點的高度(算轉動造成的側向加速度)
const INERTIA = 0.35;             // 浮力彈簧的角加速度很尖,全量算進來吊燈會甩到 50°
const MAX_ALPHA = 3;               // rad/s²
const MUG_YAW = 2.3;
const PENCIL_R = 0.0038;
const DOWN = new THREE.Vector3(0, -1, 0);
const NO_CLIP_NORMAL = new THREE.Vector3(1, 0, 0);
const UP = new THREE.Vector3(0, 1, 0);
const _v = new THREE.Vector3();
const _n = new THREE.Vector3();

/* 裁切盒:平面的負側 = 盒內,clipIntersection 讓「所有平面的負側交集」才被裁掉 */
function boxPlanes({ x0, x1, y0, z0, z1, y1 = Infinity }) {
  const planes = [
    new THREE.Plane(new THREE.Vector3(-1, 0, 0), x0),
    new THREE.Plane(new THREE.Vector3(1, 0, 0), -x1),
    new THREE.Plane(new THREE.Vector3(0, 0, -1), z0),
    new THREE.Plane(new THREE.Vector3(0, 0, 1), -z1),
    new THREE.Plane(new THREE.Vector3(0, -1, 0), y0)
  ];
  if (Number.isFinite(y1)) planes.push(new THREE.Plane(new THREE.Vector3(0, 1, 0), -y1));
  return planes;
}

function createClipper(materials, localPlanes) {
  const world = localPlanes.map((p) => p.clone());
  for (const m of materials) {
    m.clippingPlanes = world;
    m.clipIntersection = true;
  }
  return function sync(active, matrixWorld) {
    world.forEach((p, i) => p.copy(localPlanes[i]).applyMatrix4(matrixWorld));
    if (!active) world[0].set(NO_CLIP_NORMAL, 1e9);   // 交集為空 = 不裁任何東西
  };
}

/* 船晃造成的「感受到的重力」:重力 + 轉動角加速度的慣性力(船身座標) */
function createFeltGravity() {
  const prev = { p: 0, r: 0 };
  const alpha = { p: 0, r: 0 };
  const felt = new THREE.Vector3(0, -1, 0);
  let seeded = false;
  /** 艙內隱藏時也要呼叫(只記錄角速度),進艙第一幀才不會算出一個假的角加速度把吊燈甩出去 */
  function track(floater) {
    prev.p = floater.pitch.v * 60; prev.r = floater.roll.v * 60;
    alpha.p = alpha.r = 0;
    seeded = true;
  }
  function update(boat, floater, dt) {
    if (!seeded) track(floater);
    const wp = floater.pitch.v * 60, wr = floater.roll.v * 60;      // floater 的速度單位是「每 1/60 秒」
    if (dt > 0) {
      const k = Math.min(1, dt * 8);
      alpha.p += ((wp - prev.p) / dt - alpha.p) * k;
      alpha.r += ((wr - prev.r) / dt - alpha.r) * k;
    }
    prev.p = wp; prev.r = wr;
    const g = localGravity(boat.rotation.z, boat.rotation.x);
    const ap = THREE.MathUtils.clamp(alpha.p, -MAX_ALPHA, MAX_ALPHA) * INERTIA;
    const ar = THREE.MathUtils.clamp(alpha.r, -MAX_ALPHA, MAX_ALPHA) * INERTIA;
    felt.set(g.x * G + ap * ITEM_HEIGHT, g.y * G, g.z * G - ar * ITEM_HEIGHT);
    return felt;
  }
  return { update, track };
}

/** 鉛筆滾上日誌時墊高一本書的厚度(書緣用一小段斜坡,不會瞬間跳上去) */
function pencilLift(z) {
  const { z0, z1, lift, ramp } = LOGBOOK_SPAN;
  const up = THREE.MathUtils.smoothstep(z, z0 - ramp, z0) * (1 - THREE.MathUtils.smoothstep(z, z1, z1 + ramp));
  return up * lift;
}

/** 擺幅上限:超過就貼在邊界、速度削掉(像撞到限位) */
function clampSway(s, max) {
  const h = Math.hypot(s.x, s.z);
  if (h <= max) return;
  s.x *= max / h; s.z *= max / h;
  s.vx *= 0.5; s.vz *= 0.5;
}

/** 擺錘/液面:彈簧狀態的水平分量 → 完整方向向量 */
function directionFrom(s, y) {
  const h = Math.min(0.95, s.x * s.x + s.z * s.z);
  return _n.set(s.x, y * Math.sqrt(1 - h), s.z);
}

/* 預先編譯 shader + 上傳貼圖,第一次進艙才不會卡將近一秒
   要綁一個 render target 再編譯:後製管線畫進 render target(線性、不做 tone mapping),
   直接編譯會得到「輸出到螢幕」的版本,實際用不到。
   compile() 不會設定 local clipping,所以再對著駕駛台真的畫一張(裁切版的下層艙材質才會編到) */
function prewarm(renderer, scene, camera, group) {
  const rt = new THREE.WebGLRenderTarget(1, 1);
  const prevTarget = renderer.getRenderTarget();
  const prevPos = camera.position.clone(), prevQuat = camera.quaternion.clone();
  group.visible = true;
  renderer.setRenderTarget(rt);
  renderer.compile(scene, camera);
  camera.position.set(4, 4, 12);
  camera.lookAt(group.getWorldPosition(new THREE.Vector3()));
  camera.updateMatrixWorld();
  renderer.render(scene, camera);
  camera.position.copy(prevPos);
  camera.quaternion.copy(prevQuat);
  renderer.setRenderTarget(prevTarget);
  group.visible = false;
  rt.dispose();
  group.traverse((o) => {
    if (!o.material) return;
    for (const value of Object.values(o.material)) if (value?.isTexture) renderer.initTexture(value);
  });
}

export function createCabin({ boat, wheelhouse, rainMaterial, scene, renderer, camera }) {
  const mats = createCabinMaterials();
  const screens = createScreens();
  const shell = buildShell(mats);
  const desk = buildConsole(mats, screens);
  const clutter = buildClutter(mats);
  const aft = buildAft(mats);

  const group = new THREE.Group();
  group.add(shell.group, desk.group, clutter.group, aft.group);
  group.visible = false;
  wheelhouse.group.add(group);

  renderer.localClippingEnabled = true;
  const syncLowerClip = createClipper([wheelhouse.lowerBody.material], boxPlanes({
    x0: CABIN.rear - 0.01, x1: frontInnerX(LOWER.top) - 0.004, y0: CABIN.floor - 0.01,
    z0: -CABIN.halfW, z1: CABIN.halfW
  }));
  const syncRainClip = createClipper([rainMaterial], boxPlanes({
    x0: CABIN.rear, x1: frontInnerX(CABIN.ceil), y0: CABIN.floor, y1: CABIN.ceil,
    z0: -CABIN.halfW, z1: CABIN.halfW
  }));

  const feltGravity = createFeltGravity();
  const motion = {
    liquid: createSway({ freq: 2.6, damping: 0.06 }),
    lamp: createSway({ freq: 0.78, damping: 0.3 }),
    hat: createSway({ freq: 1.1, damping: 0.35 }),
    pencil: createRoller({ min: PENCIL_RANGE.min, max: PENCIL_RANGE.max, friction: 0.08, restitution: 0.3 })
  };
  let reveal = 0;

  prewarm(renderer, scene, camera, group);

  /** @param {number} r 0 = 在外面(艙內隱藏)、1 = 完全在艙內 */
  function setReveal(r) {
    reveal = THREE.MathUtils.clamp(r, 0, 1);
    group.visible = reveal > 0;
    for (const m of [wheelhouse.glass.lit, wheelhouse.glass.dim]) {
      m.opacity = 1 - reveal;
      m.visible = m.opacity > 0.01;
    }
  }

  function updateMotion(t, dt, floater) {
    const felt = feltGravity.update(boat, floater, dt);
    const down = _v.copy(felt).normalize();

    stepSway(motion.liquid, -down.x, -down.z, dt);
    const n = directionFrom(motion.liquid, 1).applyAxisAngle(UP, -MUG_YAW);
    clutter.liquid.quaternion.setFromUnitVectors(UP, n);

    stepSway(motion.lamp, down.x, down.z, dt);
    clampSway(motion.lamp, LAMP_MAX_SWING);
    aft.lamp.swing.quaternion.setFromUnitVectors(DOWN, directionFrom(motion.lamp, -1));

    stepSway(motion.hat, down.x, down.z, dt);
    clampSway(motion.hat, HAT_MAX_SWING);
    aft.hat.swing.quaternion.setFromUnitVectors(DOWN, directionFrom(motion.hat, -1));

    stepRoller(motion.pencil, felt.z * 0.67, dt);                       // 實心圓柱滾動:2/3 g sinθ
    aft.pencil.group.position.z = motion.pencil.p;
    aft.pencil.group.position.y = PENCIL_REST_Y + pencilLift(motion.pencil.p);
    aft.pencil.body.rotation.x = -motion.pencil.p / PENCIL_R;

    clutter.steam.update(t, dt, _v.copy(down).negate());
  }

  function updateInstruments(t, dt, flash) {
    screens.update(t, wheelhouse.radar.rotation.y);
    const helm = 0.22 * Math.sin(t * 0.37) + 0.08 * Math.sin(t * 1.13);     // 自動舵在修正航向
    desk.wheel.rotation.z = helm * 2.4;
    const dial = (v, max) => Math.PI * 0.75 - (v / max) * Math.PI * 1.5;
    desk.needles.rudder.rotation.z = dial(35 - helm * 60, 70);
    desk.needles.rpm.rotation.z = dial(12.5 + Math.sin(t * 7.3) * 0.15 + Math.sin(t * 0.5) * 0.4, 20);
    desk.needles.oil.rotation.z = dial(4.1 + Math.sin(t * 5.1) * 0.03, 6);
    desk.needles.wind.rotation.z = dial(22 + Math.sin(t * 0.9) * 3 + Math.sin(t * 2.7) * 1.5, 40);
    desk.compassCard.rotation.z = 0.012 * Math.sin(t * 0.21 + 0.5);              // 羅經卡只會極慢地飄一點點

    const now = new Date();
    const sec = now.getSeconds() + now.getMilliseconds() / 1000, min = now.getMinutes() + sec / 60;
    aft.clock.second.rotation.z = -sec / 60 * Math.PI * 2;
    aft.clock.minute.rotation.z = -min / 60 * Math.PI * 2;
    aft.clock.hour.rotation.z = -((now.getHours() % 12) + min / 60) / 12 * Math.PI * 2;
    aft.barometer.needle.rotation.z = aft.barometer.base + Math.sin(t * 3.1) * 0.004;   // 氣壓計指針被浪震得微抖

    shell.clearViewDisc.rotation.z -= dt * 30;
    shell.wiperArms.forEach((arm, i) => { arm.rotation.z = Math.sin(t * 2.3 + i * 0.4) * 0.85; });
    mats.streaks.map.offset.y += dt * 0.06;
    mats.droplets.opacity = mats.dropletsClear.opacity = 0.3 + flash * 0.6;
    const flicker = 0.96 + 0.04 * Math.sin(t * 13.1);                          // 發電機電壓不穩
    aft.lamp.light.intensity = LAMP_INTENSITY * reveal * flicker;
    shell.ceilingLight.intensity = CEILING_INTENSITY * reveal * flicker;
  }

  function update(t, dt, floater, flash) {
    boat.updateMatrixWorld();
    syncLowerClip(reveal > 0, boat.matrixWorld);
    syncRainClip(reveal > 0, boat.matrixWorld);
    if (reveal <= 0) { feltGravity.track(floater); return; }
    // 外部那盞「從前窗溢出」的燈就在窗外 30cm:艙內會過曝,儀器玻璃與鍍鉻件還會出現怪異的亮點 → 進艙時關掉
    wheelhouse.cabinLight.intensity *= 1 - SPILL_DIM * reveal;
    updateMotion(t, dt, floater);
    updateInstruments(t, dt, flash);
  }

  return { group, setReveal, update };
}
