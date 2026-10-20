/* =========================================================
   海岬山崖:從畫面左側伸進來,尖端平台上放燈塔
   區域座標:燈塔在原點、+z 朝海(朝鏡頭)、陸地往 -x(左)與 -z(後)延伸
   ========================================================= */
import * as THREE from 'three';
import { fbm2 } from './noise.js';
import { mesh } from '../parts.js';

export const CLIFF_TOP = 10;   // 太高的話燈塔頂會頂到畫面上緣
const SIZE_X = 240, SIZE_Z = 170;
const X0 = -170, Z0 = -120;            // 地形左下角(陸地主要在燈塔左後方)
const SEG = 1.2;                        // 網格間距 (m)
const PLATEAU_R = 9;                    // 燈塔周圍整平半徑

/* 崖邊線:左側沿海岸起伏,過了燈塔往右快速收成岬角尖端 */
export function edgeZ(x) {
  const wiggle = 5 * fbm2(x * 0.025, 3.1) + 2 * fbm2(x * 0.09, 7.7);
  return x <= 0 ? 8 + wiggle : 8 + wiggle - 0.03 * x * x;
}

/* 陸地深度(> 0 在陸上)→ 高度:5m 內陡升成崖,頂部緩坡起伏、往內陸略升 */
export function terrainHeight(x, z) {
  const depth = edgeZ(x) - z;
  if (depth < 0) return Math.max(-14, -3 + depth * 0.6);
  const cliff = Math.min(1, depth / 5) ** 0.55;
  // 岬角尖端(燈塔右側)往海裡斜降,不會像刀切的一面牆
  const tip = Math.max(0, x - 6) * 0.28;
  const top = CLIFF_TOP + 2 * fbm2(x * 0.02, z * 0.02) + Math.max(0, -x) * 0.03 + Math.max(0, -z) * 0.02 - tip;
  const crag = 3 * fbm2(x * 0.15, z * 0.15) * cliff * (1 - cliff) * 4;
  let h = -3 + (top + 3) * cliff + crag;
  const r = Math.hypot(x, z);
  if (r < PLATEAU_R + 4) {
    // 只整平陸地上的部分;崖邊外的海不能被抬起來
    const w = Math.min(1, (PLATEAU_R + 4 - r) / 4) * Math.min(1, depth / 1.5);
    h += (CLIFF_TOP - h) * w;
  }
  return h;
}

function buildTerrain(mat) {
  const nx = Math.round(SIZE_X / SEG), nz = Math.round(SIZE_Z / SEG);
  const geo = new THREE.PlaneGeometry(SIZE_X, SIZE_Z, nx, nz);
  geo.rotateX(-Math.PI / 2);
  geo.translate(X0 + SIZE_X / 2, 0, Z0 + SIZE_Z / 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const h = terrainHeight(x, z);
    // 崖面加一點水平推擠,避免像被刀切的整齊斜面
    const steep = Math.abs(terrainHeight(x, z + 1) - h);
    const push = Math.min(1, steep / 4) * 1.4;
    p.setXYZ(i, x + fbm2(x * 0.2, z * 0.2 + 5) * push, h, z + fbm2(x * 0.2 + 9, z * 0.2) * push);
  }
  geo.computeVertexNormals();

  // 依坡度上色:平坦處是濕草/苔,陡處是岩壁,水線附近深色濕岩
  const n = geo.attributes.normal;
  const colors = new Float32Array(p.count * 3);
  const grass = new THREE.Color(0x232a1c), rock = new THREE.Color(0x45464a), wet = new THREE.Color(0x17181a);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const flat = THREE.MathUtils.smoothstep(n.getY(i), 0.72, 0.9);
    c.copy(rock).lerp(grass, flat);
    c.lerp(wet, THREE.MathUtils.smoothstep(p.getY(i), 3, -1) * 0.8);
    c.multiplyScalar(0.85 + 0.3 * (fbm2(p.getX(i) * 0.3, p.getZ(i) * 0.3) * 0.5 + 0.5));
    colors.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return new THREE.Mesh(geo, mat);
}

/* 崖腳散落的巨石 */
function buildBoulders(mat) {
  const g = new THREE.Group();
  for (let i = 0; i < 14; i++) {
    const x = -60 + i * 6.5 + fbm2(i, 1) * 4;
    if (x > 14) break;
    const z = edgeZ(x) + 1.5 + Math.abs(fbm2(i, 4)) * 5;
    const r = 1.2 + Math.abs(fbm2(i, 8)) * 2.5;
    const geo = new THREE.IcosahedronGeometry(r, 1);
    const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) {
      const s = 0.75 + 0.45 * (fbm2(p.getX(k) + i * 3, p.getZ(k) + p.getY(k)) * 0.5 + 0.5);
      p.setXYZ(k, p.getX(k) * s, p.getY(k) * s * 0.7, p.getZ(k) * s);
    }
    geo.computeVertexNormals();
    g.add(mesh(geo, mat, x, -0.4, z));
  }
  return g;
}

/* 離岸距離貼圖(R = 到最近陸地的距離 m,0 = 岸邊;海面 shader 用來畫拍岸白沫) */
function buildShoreMap() {
  const RES = 1.5, W = Math.round(SIZE_X / RES), H = Math.round(SIZE_Z / RES);
  const land = new Uint8Array(W * H);
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      land[j * W + i] = terrainHeight(X0 + (i + 0.5) * RES, Z0 + (j + 0.5) * RES) > 0 ? 1 : 0;
    }
  }
  const MAX = 10, R = Math.ceil(MAX / RES);
  const data = new Float32Array(W * H * 4).fill(MAX);
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      if (land[j * W + i]) { data[(j * W + i) * 4] = 0; continue; }
      let best = MAX;
      for (let dj = -R; dj <= R; dj++) {
        const jj = j + dj;
        if (jj < 0 || jj >= H) continue;
        for (let di = -R; di <= R; di++) {
          const ii = i + di;
          if (ii < 0 || ii >= W || !land[jj * W + ii]) continue;
          best = Math.min(best, Math.hypot(di, dj) * RES);
        }
      }
      data[(j * W + i) * 4] = best;
    }
  }
  const tex = new THREE.DataTexture(data, W, H, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return { texture: tex, range: new THREE.Vector4(X0, X0 + SIZE_X, Z0, Z0 + SIZE_Z) };
}

export function buildHeadland(mats) {
  const group = new THREE.Group();
  group.add(buildTerrain(mats.rock), buildBoulders(mats.boulder));
  return { group, shore: buildShoreMap() };
}
