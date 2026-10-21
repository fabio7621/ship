/* =========================================================
   桌面上的生活痕跡:用紙膠帶貼住的海圖、喝到一半的琺瑯咖啡杯(液面會晃、冒熱氣)、
   望遠鏡、保溫瓶、打火機、揉爛的紙、靠在窗邊的家人照片
   ========================================================= */
import * as THREE from 'three';
import { mesh, roundedBox, drumZ } from '../parts.js';
import { DESK_Y } from './console.js';
import { RAKE } from './layout.js';
import { makeRingStainTexture, makeSoftDotTexture, seeded } from './textures.js';

const TOP = DESK_Y + 0.022;                     // 木桌面上緣
const MUG = { x: -1.6, z: -0.8, r: 0.041, h: 0.088, level: 0.042 };
const STEAM_N = 70;
const STEAM_LIFE = 2.6;

/* 海圖:微微捲邊(紙放久會翹),四角貼紙膠帶 */
function chart(mats) {
  const g = new THREE.Group();
  g.position.set(-1.7, TOP + 0.001, -0.42);
  g.rotation.y = 0.07;
  const W = 0.3, H = 0.225;
  const geo = new THREE.PlaneGeometry(W, H, 16, 12);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    const ex = Math.max(0, Math.abs(x) / (W / 2) - 0.75) * 4, ey = Math.max(0, Math.abs(y) / (H / 2) - 0.8) * 5;
    const curl = Math.max(ex, ey) ** 2 * 0.006;
    const taped = Math.abs(Math.abs(x) - W / 2) < 0.03 && Math.abs(Math.abs(y) - H / 2) < 0.03;
    pos.setZ(i, taped ? 0 : curl + Math.sin(x * 30) * 0.0006);
  }
  geo.computeVertexNormals();
  const sheet = new THREE.Mesh(geo, mats.chart);
  sheet.rotation.x = -Math.PI / 2;
  sheet.rotation.z = Math.PI / 2;            // 海圖的北朝船頭
  g.add(sheet);
  for (const [x, z, a] of [[1, 1, 0.7], [1, -1, -0.8], [-1, 1, -0.6], [-1, -1, 0.75]]) {
    const tape = mesh(new THREE.BoxGeometry(0.055, 0.0006, 0.018), mats.tape, x * (H / 2 - 0.004), 0.0012, z * (W / 2 - 0.004));
    tape.rotation.y = a;
    g.add(tape);
  }
  // 壓在海圖上的鉛筆
  const pencil = new THREE.Group();
  pencil.position.set(0.03, 0.005, 0.05);
  pencil.rotation.set(0, 0.9, Math.PI / 2);
  pencil.add(mesh(new THREE.CylinderGeometry(0.0035, 0.0035, 0.14, 6), mats.oilskin));
  pencil.add(mesh(new THREE.ConeGeometry(0.0035, 0.012, 6), mats.paper, 0, 0.076, 0));
  g.add(pencil);
  return g;
}

/* 琺瑯咖啡杯:杯身、內壁、深藍捲邊杯緣、把手、會保持水平的咖啡液面 */
function mug(mats) {
  const g = new THREE.Group();
  g.position.set(MUG.x, TOP, MUG.z);
  g.rotation.y = 2.3;
  const outer = new THREE.CylinderGeometry(MUG.r, MUG.r * 0.96, MUG.h, 32, 1, true);
  g.add(mesh(outer, mats.enamel, 0, MUG.h / 2, 0));
  g.add(mesh(new THREE.CylinderGeometry(MUG.r - 0.002, MUG.r * 0.96 - 0.002, MUG.h, 32, 1, true),
    Object.assign(mats.enamelInside.clone(), { side: THREE.BackSide }), 0, MUG.h / 2, 0));
  g.add(mesh(new THREE.CircleGeometry(MUG.r * 0.96, 32), mats.enamelInside, 0, 0.002, 0).rotateX(-Math.PI / 2));
  g.add(mesh(new THREE.TorusGeometry(MUG.r - 0.001, 0.0022, 8, 40), mats.knob, 0, MUG.h, 0).rotateX(Math.PI / 2));
  const handle = mesh(new THREE.TorusGeometry(0.024, 0.005, 8, 20, Math.PI * 1.1), mats.enamel, MUG.r + 0.008, MUG.h * 0.52, 0);
  handle.rotation.z = -Math.PI * 0.55;
  g.add(handle);

  // 液面:pivot 在液面中心,傾角由 index.js 依「船身座標的重力」+ 晃動彈簧決定
  const liquid = new THREE.Group();
  liquid.position.y = MUG.level;
  liquid.add(mesh(new THREE.CircleGeometry(MUG.r - 0.0035, 32), mats.coffee).rotateX(-Math.PI / 2));
  // 杯壁上的咖啡殘線(喝掉的那一半留下來的)
  g.add(mesh(new THREE.CylinderGeometry(MUG.r - 0.0021, MUG.r - 0.0021, 0.004, 32, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x5a3416, roughness: 0.5, side: THREE.BackSide, transparent: true, opacity: 0.6 }), 0, MUG.h * 0.8, 0));
  g.add(liquid);
  return { group: g, liquid };
}

/* 熱氣:粒子在船身座標往「真正的上方」飄,加法混合、顏色漸暗 = 淡出 */
function steam() {
  const pos = new Float32Array(STEAM_N * 3);
  const col = new Float32Array(STEAM_N * 3);
  const age = new Float32Array(STEAM_N);
  const seed = new Float32Array(STEAM_N);
  for (let i = 0; i < STEAM_N; i++) { age[i] = (i / STEAM_N) * STEAM_LIFE; seed[i] = Math.random() * 100; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const points = new THREE.Points(geo, new THREE.PointsMaterial({
    map: makeSoftDotTexture(), size: 0.08, sizeAttenuation: true, vertexColors: true,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  points.position.set(MUG.x, TOP + MUG.level, MUG.z);
  points.frustumCulled = false;

  /** @param {{x:number,y:number,z:number}} up 船身座標中的「上」 */
  function update(t, dt, up) {
    for (let i = 0; i < STEAM_N; i++) {
      age[i] += dt;
      if (age[i] > STEAM_LIFE) { age[i] -= STEAM_LIFE; seed[i] = Math.random() * 100; }
      const a = age[i], k = a / STEAM_LIFE, s = seed[i];
      const rise = 0.07 * a + 0.02 * a * a;
      const curl = 0.012 * a;
      const ox = Math.sin(s + t * 1.3 + a * 2.1) * curl + (Math.sin(s * 3.1) * 0.012);
      const oz = Math.cos(s * 1.7 + t * 1.1 + a * 1.7) * curl + (Math.cos(s * 2.3) * 0.012);
      pos[i * 3] = up.x * rise + ox;
      pos[i * 3 + 1] = up.y * rise;
      pos[i * 3 + 2] = up.z * rise + oz;
      const fade = Math.sin(Math.min(1, k * 1.15) * Math.PI) * 0.045;
      col[i * 3] = fade; col[i * 3 + 1] = fade * 0.97; col[i * 3 + 2] = fade * 0.93;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
  }
  return { points, update };
}

function stains() {
  const mat = new THREE.MeshStandardMaterial({ map: makeRingStainTexture(), transparent: true, depthWrite: false, roughness: 0.6 });
  const g = new THREE.Group();
  for (const [x, z, r, a] of [[-1.62, -0.66, 0.05, 0.3], [-1.76, -0.88, 0.046, 2.1], [-1.58, -0.18, 0.045, 1.2]]) {
    const m = mesh(new THREE.PlaneGeometry(r * 2, r * 2), mat, x, TOP + 0.0004, z);
    m.rotation.set(-Math.PI / 2, 0, a);
    g.add(m);
  }
  return g;
}

function binoculars(mats) {
  const g = new THREE.Group();
  g.position.set(-1.77, TOP + 0.024, -0.13);
  g.rotation.y = 0.5;
  for (const z of [-0.03, 0.03]) {
    const barrel = drumZ(0.022, 0.12, mats.rubber, 0, 0, z, 18);
    barrel.rotation.set(0, 0, Math.PI / 2);
    g.add(barrel);
    const eye = drumZ(0.016, 0.03, mats.knob, -0.07, 0, z, 14);
    eye.rotation.set(0, 0, Math.PI / 2);
    g.add(eye);
    const lens = mesh(new THREE.CircleGeometry(0.019, 18), mats.glassLens, 0.061, 0, z);
    lens.rotation.y = Math.PI / 2;
    g.add(lens);
  }
  g.add(roundedBox(0.05, 0.016, 0.05, 0.006, mats.knob, -0.01, 0.006, 0));
  return g;
}

function thermos(mats) {
  const g = new THREE.Group();
  g.position.set(-1.62, TOP, -0.93);
  g.add(mesh(new THREE.CylinderGeometry(0.038, 0.04, 0.22, 24), mats.thermos, 0, 0.11, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.042, 0.041, 0.06, 24), mats.steel, 0, 0.25, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.041, 0.041, 0.012, 24), mats.steel, 0, 0.006, 0));
  return g;
}

/* 揉爛的紙團:二十面體加亂數凹凸 */
function crumpledPaper(mats) {
  const geo = new THREE.IcosahedronGeometry(0.022, 2);
  const rand = seeded(91);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = 0.75 + rand() * 0.45;
    p.setXYZ(i, p.getX(i) * k, p.getY(i) * k * 0.8, p.getZ(i) * k);
  }
  geo.computeVertexNormals();
  return mesh(geo, mats.paper, -1.8, TOP + 0.016, -0.6);
}

function lighter(mats) {
  const g = new THREE.Group();
  g.position.set(-1.82, TOP + 0.006, -0.27);
  g.rotation.y = 0.4;
  g.add(roundedBox(0.025, 0.012, 0.06, 0.004, mats.red, 0, 0, 0));
  g.add(roundedBox(0.026, 0.013, 0.014, 0.003, mats.steel, 0, 0, 0.035));
  return g;
}

/* 家人照片:斜靠在前窗下緣 */
function photo(mats) {
  const m = mesh(new THREE.PlaneGeometry(0.1, 0.075), mats.photo, -1.556, TOP + 0.04, -0.6);
  m.rotation.set(0, -Math.PI / 2, 0);
  m.rotateX(-(RAKE + 0.12));
  return m;
}

export function buildClutter(mats) {
  const group = new THREE.Group();
  const m = mug(mats);
  const st = steam();
  group.add(chart(mats), m.group, st.points, stains(), binoculars(mats), thermos(mats),
    crumpledPaper(mats), lighter(mats), photo(mats));
  return { group, liquid: m.liquid, mugGroup: m.group, steam: st };
}
