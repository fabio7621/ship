/* =========================================================
   駕駛台:儀表板本體、舵輪、儀錶、開關、油門、自動舵、雷達、魚探、羅經、
   天花板吊掛的儀器板(VHF、舵角、風速)、駕駛座
   斜面儀表板用自己的座標 (u = 往右舷, v = 沿斜面往上, w = 朝駕駛者)
   ========================================================= */
import * as THREE from 'three';
import { mesh, roundedBox, rod, rods, tube } from '../parts.js';
import { CABIN, frontInnerX } from './layout.js';
import { makeDialTexture, makeLabelTexture, makeCompassCardTexture } from './textures.js';

export const DESK_Y = 2.05;
const PANEL_FOOT = new THREE.Vector2(-2.02, 1.78);     // 斜面板下緣
const PANEL_TOP = new THREE.Vector2(-1.86, DESK_Y);    // 斜面板上緣 = 桌面後緣
const HALF = CABIN.halfW - 0.06;

function slopeBasis(foot, top) {
  const dir = new THREE.Vector3(top.x - foot.x, top.y - foot.y, 0).normalize();
  const right = new THREE.Vector3(0, 0, 1);
  return { right, up: dir, out: new THREE.Vector3().crossVectors(right, dir) };
}

function panelGroup() {
  const { right, up, out } = slopeBasis(PANEL_FOOT, PANEL_TOP);
  const g = new THREE.Group();
  g.applyMatrix4(new THREE.Matrix4().makeBasis(right, up, out).setPosition(PANEL_FOOT.x, PANEL_FOOT.y, 0));
  return g;
}

function body(mats) {
  const xWall = (y) => frontInnerX(y) - 0.004;
  const s = new THREE.Shape([
    new THREE.Vector2(xWall(CABIN.floor), CABIN.floor), new THREE.Vector2(PANEL_FOOT.x, CABIN.floor),
    PANEL_FOOT, PANEL_TOP, new THREE.Vector2(xWall(DESK_Y), DESK_Y)
  ]);
  const geo = new THREE.ExtrudeGeometry(s, { depth: HALF * 2, bevelEnabled: false });
  geo.translate(0, 0, -HALF);
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, mats.console));

  // 木桌面 + 後緣擋條(fiddle rail:東西才不會滑下來)
  const deskD = xWall(DESK_Y) - PANEL_TOP.x;
  g.add(roundedBox(deskD + 0.03, 0.022, HALF * 2 + 0.03, 0.006, mats.woodDark, PANEL_TOP.x + deskD / 2 - 0.01, DESK_Y + 0.011, 0));
  g.add(roundedBox(0.018, 0.03, HALF * 2, 0.006, mats.woodDark, PANEL_TOP.x - 0.016, DESK_Y + 0.03, 0));

  // 下方櫃門 + 把手 + 踢腳
  for (const z of [-0.62, -0.2, 0.2, 0.62]) {
    g.add(roundedBox(0.012, 0.42, 0.38, 0.004, mats.wood, PANEL_FOOT.x - 0.006, 1.5, z));
    g.add(mesh(new THREE.BoxGeometry(0.02, 0.012, 0.08), mats.brass, PANEL_FOOT.x - 0.018, 1.66, z));
  }
  g.add(mesh(new THREE.BoxGeometry(0.02, 0.08, HALF * 2), mats.rubber, PANEL_FOOT.x - 0.01, CABIN.floor + 0.04, 0));
  return g;
}

/* 木製舵輪:8 根輪輻 + 握把,黃銅輪轂。回傳可轉的部分 */
function wheel(mats) {
  const g = new THREE.Group();
  g.position.set(0, 0.12, 0.13);
  g.add(mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.13, 12), mats.steel, 0, 0, -0.065).rotateX(Math.PI / 2));
  const rotor = new THREE.Group();
  rotor.add(mesh(new THREE.TorusGeometry(0.16, 0.013, 10, 48), mats.woodDark));
  const spokes = [];
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    spokes.push([[c * 0.03, s * 0.03, 0], [c * 0.19, s * 0.19, 0]]);
    const grip = mesh(new THREE.CapsuleGeometry(0.011, 0.045, 4, 10), mats.woodDark, c * 0.215, s * 0.215, 0);
    grip.rotation.z = a - Math.PI / 2;
    rotor.add(grip);
  }
  rotor.add(rods(spokes, 0.007, mats.woodDark, 8));
  rotor.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.035, 20), mats.brass).rotateX(Math.PI / 2));
  rotor.add(mesh(new THREE.TorusGeometry(0.02, 0.004, 6, 20), mats.woodDark, 0.16, 0, 0.012));  // 正舵標記
  g.add(rotor);
  return { group: g, rotor };
}

/* 圓形指針錶:錶圈、錶面、指針、玻璃 */
function gauge(mats, dial, r = 0.05) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.TorusGeometry(r, r * 0.12, 8, 32), mats.chrome, 0, 0, 0.004));
  g.add(mesh(new THREE.CylinderGeometry(r * 1.05, r * 1.05, 0.02, 32), mats.bezel, 0, 0, -0.008).rotateX(Math.PI / 2));
  g.add(mesh(new THREE.CircleGeometry(r * 0.95, 32), new THREE.MeshStandardMaterial({ map: dial, roughness: 0.6 }), 0, 0, 0.003));
  const needle = new THREE.Group();
  needle.position.z = 0.006;
  needle.add(mesh(new THREE.BoxGeometry(r * 0.05, r * 0.8, 0.002), mats.knobRed, 0, r * 0.35, 0));
  g.add(needle, mesh(new THREE.CircleGeometry(r * 0.1, 12), mats.knob, 0, 0, 0.008));
  g.add(mesh(new THREE.CircleGeometry(r * 0.96, 32), mats.glassLens, 0, 0, 0.011));
  return { group: g, needle };
}

function switches(mats) {
  const g = new THREE.Group();
  const labels = ['NAV', 'DEKK', 'SØK', 'PUMPE', 'VISK', 'HORN', 'VIFTE', 'INST'];
  g.add(roundedBox(0.4, 0.1, 0.012, 0.004, mats.panel, 0, 0, 0));
  const strip = mesh(new THREE.PlaneGeometry(0.38, 0.022), new THREE.MeshBasicMaterial({ map: makeLabelTexture(labels) }), 0, -0.032, 0.007);
  g.add(strip);
  labels.forEach((_, i) => {
    const x = -0.165 + i * 0.047, on = i !== 2 && i !== 5;
    g.add(mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.008, 12), mats.chrome, x, 0, 0.009).rotateX(Math.PI / 2));
    const lever = mesh(new THREE.CylinderGeometry(0.0025, 0.004, 0.026, 8), mats.chrome, x, on ? 0.008 : -0.008, 0.02);
    lever.rotation.x = on ? -0.5 + Math.PI / 2 : 0.5 + Math.PI / 2;
    g.add(lever);
    g.add(mesh(new THREE.CircleGeometry(0.0045, 10), on ? mats.ledGreen : mats.ledRed, x, 0.032, 0.007));
  });
  return g;
}

/* 油門:兩支拉桿(主機黑、離合紅),會隨船晃微微抖 */
function throttle(mats) {
  const g = new THREE.Group();
  g.add(roundedBox(0.12, 0.1, 0.05, 0.012, mats.panel, 0, 0, 0.025));
  for (const [x, knob, tilt] of [[-0.025, mats.knob, -0.35], [0.025, mats.knobRed, 0.1]]) {
    const lever = new THREE.Group();
    lever.position.set(x, 0, 0.05);
    lever.rotation.x = tilt;
    lever.add(mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.11, 8), mats.chrome, 0, 0, 0.055).rotateX(Math.PI / 2));
    lever.add(mesh(new THREE.SphereGeometry(0.016, 14, 10), knob, 0, 0, 0.115));
    g.add(lever);
  }
  return g;
}

/* 自動舵控制盒:琥珀色 LCD 顯示設定航向 */
function autopilot(mats) {
  const g = new THREE.Group();
  g.add(roundedBox(0.2, 0.12, 0.03, 0.008, mats.bezel, 0, 0, 0.015));
  const lcd = new THREE.MeshBasicMaterial({ map: makeLabelTexture(['AUTO   284°'], { w: 256, h: 64, bg: '#2a1400', fg: '#ffb43a' }), color: new THREE.Color(1.6, 1.6, 1.6) });
  g.add(mesh(new THREE.PlaneGeometry(0.14, 0.035), lcd, 0, 0.022, 0.031));
  for (const x of [-0.06, -0.02, 0.02, 0.06]) g.add(roundedBox(0.03, 0.02, 0.008, 0.003, mats.rubber, x, -0.03, 0.032));
  return g;
}

/* 桌面上的儀器箱:斜放的螢幕 + 遮光罩 + 旋鈕 */
function displayUnit(mats, screenMat, { w, h, d, screenW, screenH, x, z, tilt }) {
  const g = new THREE.Group();
  g.position.set(x, DESK_Y + 0.022, z);
  g.rotation.z = -tilt;
  g.add(roundedBox(d, h, w, 0.015, mats.bezel, 0, h / 2, 0));
  const face = mesh(new THREE.PlaneGeometry(screenW, screenH), screenMat, -d / 2 - 0.002, h * 0.56, 0);
  face.rotation.y = -Math.PI / 2;
  g.add(face);
  const hood = [[-d / 2 - 0.03, h - 0.005, 0, 0.06, 0.008, w], [-d / 2 - 0.03, h * 0.56, w / 2 - 0.004, 0.06, screenH + 0.03, 0.008],
    [-d / 2 - 0.03, h * 0.56, -w / 2 + 0.004, 0.06, screenH + 0.03, 0.008]];
  for (const [hx, hy, hz, bx, by, bz] of hood) g.add(mesh(new THREE.BoxGeometry(bx, by, bz), mats.bezel, hx, hy, hz));
  for (let i = 0; i < 3; i++) {
    const k = mesh(new THREE.CylinderGeometry(0.009, 0.01, 0.012, 14), mats.knob, -d / 2 - 0.006, h * 0.12, (i - 1) * w * 0.25);
    k.rotation.z = Math.PI / 2;
    g.add(k);
  }
  return g;
}

/* 羅經:黃銅底座 + 玻璃罩 + 羅經卡 */
function compass(mats) {
  const g = new THREE.Group();
  g.position.set(-1.66, DESK_Y + 0.022, 0);
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.05, 28), mats.brass, 0, 0.025, 0));
  const card = mesh(new THREE.CircleGeometry(0.048, 32), new THREE.MeshBasicMaterial({ map: makeCompassCardTexture(), color: new THREE.Color(0.55, 0.55, 0.55) }), 0, 0.075, 0);
  card.rotation.x = -Math.PI / 2;
  g.add(card);
  g.add(mesh(new THREE.SphereGeometry(0.058, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), mats.glassLens, 0, 0.05, 0));
  g.add(mesh(new THREE.TorusGeometry(0.058, 0.006, 8, 28), mats.brass, 0, 0.05, 0).rotateX(Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(0.004, 0.012, 0.004), mats.ledRed, 0.05, 0.085, 0));    // 船首基線
  return { group: g, card };
}

/* 天花板吊掛儀器板:朝下斜向駕駛者 */
function overhead(mats) {
  const g = new THREE.Group();
  g.position.set(-1.52, CABIN.ceil - 0.075, 0);
  g.rotation.z = 0.55;                      // 面板朝下、朝駕駛者
  g.add(roundedBox(0.06, 0.15, 1.5, 0.01, mats.console, 0.03, 0, 0));
  const face = new THREE.Group();
  face.rotation.y = -Math.PI / 2;
  g.add(face);

  // VHF 無線電
  const vhf = new THREE.Group();
  vhf.position.set(-0.45, 0, 0.005);
  vhf.add(roundedBox(0.2, 0.1, 0.03, 0.008, mats.bezel, 0, 0, 0));
  const lcd = new THREE.MeshBasicMaterial({ map: makeLabelTexture(['CH 16   25W'], { w: 256, h: 64, bg: '#0d1a0a', fg: '#9dff7a' }), color: new THREE.Color(1.5, 1.5, 1.5) });
  vhf.add(mesh(new THREE.PlaneGeometry(0.1, 0.03), lcd, -0.02, 0.02, 0.016));
  vhf.add(mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.012, 16), mats.knob, 0.07, 0.01, 0.02).rotateX(Math.PI / 2));
  vhf.add(roundedBox(0.03, 0.02, 0.008, 0.004, mats.knobRed, 0.07, -0.03, 0.017));      // DISTRESS 鍵
  face.add(vhf);

  const rudder = gauge(mats, makeDialTexture({ label: 'ROR', max: 70, step: 10, unit: 'B ← → S' }), 0.045);
  rudder.group.position.set(0.05, 0, 0.012);
  const wind = gauge(mats, makeDialTexture({ label: 'VIND', max: 40, step: 10, red: 25, unit: 'm/s' }), 0.045);
  wind.group.position.set(0.2, 0, 0.012);
  const gpsFace = mesh(new THREE.PlaneGeometry(0.14, 0.088), mats.gps, 0.42, 0, 0.018);
  face.add(rudder.group, wind.group, roundedBox(0.17, 0.11, 0.03, 0.008, mats.bezel, 0.42, 0, 0), gpsFace);
  return { group: g, rudderNeedle: rudder.needle, windNeedle: wind.needle };
}

/* VHF 話筒:掛在左舷牆上,捲曲電話線一路接到天花板的無線電 */
function handset(mats) {
  const g = new THREE.Group();
  const hx = -1.72, hy = 2.3, hz = -CABIN.halfW + 0.03;
  g.add(roundedBox(0.04, 0.06, 0.012, 0.004, mats.bezel, hx, hy + 0.02, hz - 0.012));
  const body = roundedBox(0.05, 0.12, 0.03, 0.012, mats.bezel, hx, hy, hz + 0.008);
  body.rotation.z = 0.08;
  g.add(body);
  const pts = [];
  for (let i = 0; i <= 260; i++) {
    const t = i / 260, a = t * Math.PI * 2 * 26;
    const cx = THREE.MathUtils.lerp(hx, -1.6, t), cy = THREE.MathUtils.lerp(hy - 0.07, CABIN.ceil - 0.12, t) - Math.sin(t * Math.PI) * 0.18;
    const cz = THREE.MathUtils.lerp(hz + 0.02, -0.45, t);
    pts.push([cx + Math.cos(a) * 0.008, cy + Math.sin(a) * 0.008, cz + Math.sin(a + 1) * 0.006]);
  }
  g.add(tube(pts, 0.0025, mats.rubber, { segments: 900, radial: 5 }));
  return g;
}

function helmChair(mats) {
  const g = new THREE.Group();
  g.position.set(-2.74, CABIN.floor, 0);
  g.add(mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.025, 32), mats.chrome, 0, 0.012, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.55, 16), mats.chrome, 0, 0.3, 0));
  g.add(mesh(new THREE.TorusGeometry(0.16, 0.01, 8, 32), mats.chrome, 0, 0.3, 0).rotateX(Math.PI / 2));     // 腳踏環
  g.add(roundedBox(0.44, 0.08, 0.46, 0.035, mats.leather, 0, 0.6, 0));
  g.add(roundedBox(0.08, 0.5, 0.44, 0.035, mats.leather, -0.22, 0.92, 0));
  for (const z of [-0.25, 0.25]) {
    g.add(roundedBox(0.32, 0.04, 0.06, 0.015, mats.leather, -0.03, 0.82, z));
    g.add(rod([-0.15, 0.62, z], [-0.15, 0.81, z], 0.012, mats.chrome));
  }
  return g;
}

export function buildConsole(mats, screens) {
  const group = new THREE.Group();
  group.add(body(mats));

  const panel = panelGroup();
  const w = wheel(mats);
  panel.add(w.group);
  const rpm = gauge(mats, makeDialTexture({ label: 'O/MIN', max: 20, step: 5, red: 16, unit: 'x100' }));
  rpm.group.position.set(-0.3, 0.2, 0.012);
  const oil = gauge(mats, makeDialTexture({ label: 'OLJE', max: 6, step: 1, red: 5, unit: 'bar' }), 0.04);
  oil.group.position.set(-0.43, 0.2, 0.012);
  const sw = switches(mats);
  sw.position.set(0.55, 0.1, 0.008);
  const thr = throttle(mats);
  thr.position.set(0.32, 0.17, 0.005);
  const ap = autopilot(mats);
  ap.position.set(-0.62, 0.11, 0.005);
  panel.add(rpm.group, oil.group, sw, thr, ap);
  group.add(panel);

  group.add(displayUnit(mats, screens.radar, { w: 0.36, h: 0.32, d: 0.24, screenW: 0.25, screenH: 0.25, x: -1.69, z: 0.42, tilt: 0.22 }));
  group.add(displayUnit(mats, screens.sounder, { w: 0.24, h: 0.2, d: 0.18, screenW: 0.19, screenH: 0.12, x: -1.66, z: 0.82, tilt: 0.25 }));
  const cmp = compass(mats);
  const oh = overhead(mats);
  group.add(cmp.group, oh.group, handset(mats), helmChair(mats));

  return {
    group,
    wheel: w.rotor,
    needles: { rpm: rpm.needle, oil: oil.needle, rudder: oh.rudderNeedle, wind: oh.windNeedle },
    compassCard: cmp.card
  };
}
