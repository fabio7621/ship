/* =========================================================
   艙內後段:海圖桌(日誌、平行尺、分規、會滾的鉛筆)、吊燈(會擺,附艙內光源)、
   牆上的時鐘(現在時間)/氣壓計/月曆、滅火器、掛鉤上的黃色雨衣(會擺)
   ========================================================= */
import * as THREE from 'three';
import { mesh, roundedBox, rod, rods } from '../parts.js';
import { CABIN } from './layout.js';
import { makeClockTexture, makeBarometerTexture, makeCalendarTexture } from './textures.js';
import { buildWallGear } from './wallGear.js';

export const TABLE = { x0: CABIN.rear, x1: -3.0, z0: 0.12, z1: CABIN.halfW, top: 2.0 };
/* 海圖桌擺設(船身座標)。鉛筆沿 z 滾,路線會越過攤開的日誌,其他東西都放在路線外 */
const PENCIL_X = -3.27;
export const PENCIL_RANGE = { min: 0.3, max: 0.75 };      // 一端是分規、一端是平行尺,滾到就停
export const PENCIL_REST_Y = TABLE.top + 0.004;           // 鉛筆半徑 0.0038,剛好躺在桌面上
export const LOGBOOK_SPAN = { z0: 0.335, z1: 0.665, lift: 0.0085, ramp: 0.012 };   // 滾到日誌上要墊高一本書的厚度
const LAMP_PIVOT = new THREE.Vector3(-3.24, CABIN.ceil - 0.01, 0.62);
const LAMP_CORD = 0.4;
const BARO_HPA = 966;
const BARO_SET_HPA = 987;      // 黃銅參考指針:上次調整時的氣壓 → 一看就知道掉了多少

function chartTable(mats) {
  const g = new THREE.Group();
  const { x0, x1, z0, z1, top } = TABLE;
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
  g.add(mesh(new THREE.BoxGeometry(w - 0.02, top - CABIN.floor - 0.03, d - 0.01), mats.wood, cx - 0.01, (top + CABIN.floor) / 2 - 0.015, cz));
  g.add(roundedBox(w + 0.02, 0.03, d, 0.006, mats.woodDark, cx, top - 0.015, cz));
  g.add(rods([
    [[x1 + 0.005, top + 0.018, z0], [x1 + 0.005, top + 0.018, z1]],
    [[x0, top + 0.018, z0 + 0.005], [x1, top + 0.018, z0 + 0.005]]
  ], 0.01, mats.woodDark, 8));
  for (let i = 0; i < 3; i++) {
    const y = top - 0.16 - i * 0.22;
    g.add(roundedBox(0.012, 0.18, d - 0.08, 0.004, mats.woodDark, x1 + 0.002, y, cz));
    g.add(mesh(new THREE.BoxGeometry(0.02, 0.014, 0.09), mats.brass, x1 + 0.014, y + 0.03, cz));
  }
  return g;
}

/* 攤開的日誌:兩頁微微 V 形 */
function logbook(mats) {
  const g = new THREE.Group();
  g.position.set(-3.27, TABLE.top + 0.006, 0.5);
  g.rotation.y = Math.PI / 2;
  const tex = mats.logbook.map;
  for (const side of [-1, 1]) {
    const geo = new THREE.PlaneGeometry(0.16, 0.2);
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, side < 0 ? uv.getX(i) * 0.5 : 0.5 + uv.getX(i) * 0.5);
    const page = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }));
    page.rotation.set(-Math.PI / 2, side * 0.06, 0);
    page.position.set(side * 0.08, 0.004, 0);
    g.add(page);
  }
  g.add(roundedBox(0.34, 0.006, 0.21, 0.002, mats.red, 0, -0.001, 0));
  return g;
}

function instruments(mats) {
  const g = new THREE.Group();
  const y = TABLE.top + 0.004;
  // 平行尺:兩條透明壓克力 + 黃銅連桿
  const acrylic = new THREE.MeshPhysicalMaterial({ color: 0xaad0d8, transparent: true, opacity: 0.35, roughness: 0.1 });
  const ruler = new THREE.Group();
  ruler.position.set(-3.18, y, 0.89);
  ruler.rotation.y = 0.35;
  for (const z of [-0.025, 0.025]) ruler.add(mesh(new THREE.BoxGeometry(0.3, 0.005, 0.035), acrylic, 0, 0.003, z));
  for (const x of [-0.08, 0.08]) ruler.add(rod([x - 0.01, 0.007, -0.025], [x + 0.01, 0.007, 0.025], 0.003, mats.brass));
  g.add(ruler);
  // 分規
  const div = new THREE.Group();
  div.position.set(-3.43, y + 0.004, 0.2);
  div.add(rod([0, 0, 0], [0.11, 0, 0.025], 0.0025, mats.chrome), rod([0, 0, 0], [0.11, 0, -0.02], 0.0025, mats.chrome));
  div.add(mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.008, 12), mats.brass));
  g.add(div);
  // 手電筒
  const torch = new THREE.Group();
  torch.position.set(-3.1, y + 0.016, 0.2);
  torch.rotation.set(0, 0.25, Math.PI / 2);
  torch.add(mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.15, 14), mats.oilskin));
  torch.add(mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.035, 14), mats.knob, 0, 0.09, 0));
  g.add(torch);
  return g;
}

/* 會滾的鉛筆:軸向沿 x,在 z 方向滾,被桌緣擋條擋住 */
function pencil(mats) {
  const g = new THREE.Group();
  g.position.set(PENCIL_X, PENCIL_REST_Y, 0.6);
  const body = new THREE.Group();
  body.add(mesh(new THREE.CylinderGeometry(0.0038, 0.0038, 0.15, 6), mats.oilskin).rotateZ(Math.PI / 2));
  body.add(mesh(new THREE.ConeGeometry(0.0038, 0.014, 6), mats.paper, 0.082, 0, 0).rotateZ(-Math.PI / 2));
  body.add(mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.012, 8), mats.red, -0.08, 0, 0).rotateZ(Math.PI / 2));
  g.add(body);
  return { group: g, body };
}

/* 海圖桌吊燈:綠色琺瑯燈罩,燈泡下面掛著艙內唯一的光源 */
function hangingLamp(mats) {
  const pivot = new THREE.Group();
  pivot.position.copy(LAMP_PIVOT);
  const swing = new THREE.Group();
  pivot.add(swing);
  swing.add(rod([0, 0, 0], [0, -LAMP_CORD, 0], 0.003, mats.rubber));
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0x1f4a32, roughness: 0.35, metalness: 0.2, side: THREE.DoubleSide });
  swing.add(mesh(new THREE.ConeGeometry(0.09, 0.08, 28, 1, true), shadeMat, 0, -LAMP_CORD - 0.02, 0));
  swing.add(mesh(new THREE.SphereGeometry(0.022, 14, 10), mats.bulb, 0, -LAMP_CORD - 0.045, 0));
  const light = new THREE.PointLight(0xffc27a, 0, 4.5, 1.6);
  light.position.set(0, -LAMP_CORD - 0.07, 0);
  swing.add(light);
  pivot.add(mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.015, 16), mats.steel));
  return { group: pivot, swing, light };
}

function wallDial(mats, tex, z) {
  const g = new THREE.Group();
  g.position.set(CABIN.rear + 0.004, 2.56, z);
  g.rotation.y = Math.PI / 2;
  g.add(mesh(new THREE.CylinderGeometry(0.084, 0.084, 0.03, 36), mats.brass, 0, 0, 0.015).rotateX(Math.PI / 2));
  g.add(mesh(new THREE.TorusGeometry(0.076, 0.008, 10, 36), mats.brass, 0, 0, 0.03));
  g.add(mesh(new THREE.CircleGeometry(0.072, 36), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }), 0, 0, 0.031));
  g.add(mesh(new THREE.CircleGeometry(0.073, 36), mats.glassLens, 0, 0, 0.038));
  return g;
}

function hand(mat, length, width, z) {
  const pivot = new THREE.Group();
  pivot.position.z = z;
  pivot.add(mesh(new THREE.BoxGeometry(width, length, 0.0015), mat, 0, length * 0.4, 0));
  return pivot;
}

function clock(mats) {
  const g = wallDial(mats, makeClockTexture(), -0.1);
  const hour = hand(mats.knob, 0.042, 0.005, 0.033);
  const minute = hand(mats.knob, 0.06, 0.0035, 0.034);
  const second = hand(mats.knobRed, 0.064, 0.0015, 0.035);
  g.add(hour, minute, second);
  return { group: g, hour, minute, second };
}

function barometer(mats) {
  const g = wallDial(mats, makeBarometerTexture(), 0.1);
  const ang = (hpa) => -Math.PI * 0.75 + ((hpa - 950) / 100) * Math.PI * 1.5;
  const needle = hand(mats.knob, 0.062, 0.003, 0.033);
  needle.rotation.z = -ang(BARO_HPA);
  const set = hand(mats.brass, 0.05, 0.004, 0.036);
  set.rotation.z = -ang(BARO_SET_HPA);
  g.add(needle, set);
  return { group: g, needle, base: needle.rotation.z };
}

function calendar() {
  const m = mesh(new THREE.PlaneGeometry(0.15, 0.206), new THREE.MeshStandardMaterial({ map: makeCalendarTexture(), roughness: 0.85 }),
    -2.6, 1.98, CABIN.halfW - 0.003);
  m.rotation.y = Math.PI;
  return m;
}

function extinguisher(mats) {
  const g = new THREE.Group();
  g.position.set(-2.78, CABIN.floor + 0.32, -CABIN.halfW + 0.09);
  g.add(mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.42, 24), mats.red, 0, 0, 0));
  g.add(mesh(new THREE.SphereGeometry(0.065, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), mats.red, 0, 0.21, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.06, 12), mats.steel, 0, 0.29, 0));
  g.add(roundedBox(0.09, 0.012, 0.025, 0.004, mats.knob, 0.03, 0.32, 0));
  g.add(rod([0.01, 0.3, 0.012], [0.05, 0.05, 0.07], 0.007, mats.rubber));
  g.add(roundedBox(0.04, 0.3, 0.01, 0.004, mats.steel, 0, 0.02, -0.07));
  for (const y of [-0.1, 0.12]) g.add(mesh(new THREE.TorusGeometry(0.068, 0.006, 6, 24), mats.steel, 0, y, 0).rotateX(Math.PI / 2));
  return g;
}

export function buildAft(mats) {
  const group = new THREE.Group();
  const p = pencil(mats);
  const lamp = hangingLamp(mats);
  const clk = clock(mats);
  const baro = barometer(mats);
  const gear = buildWallGear(mats);
  group.add(chartTable(mats), logbook(mats), instruments(mats), p.group, lamp.group,
    clk.group, baro.group, calendar(), extinguisher(mats), gear.group);
  return { group, pencil: p, lamp, clock: clk, barometer: baro, hat: gear };
}
