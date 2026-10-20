/* =========================================================
   船體裁切體積:海面 shader 用它把「落在船殼內部」的水丟掉
   (Crest、Sea of Thieves 等遊戲處理船艙進水穿模的標準做法)
   貼圖:x = 船長方向、y = 高度;R = 該處船殼半寬、G = 裁切上限(甲板上方一點)
   ========================================================= */
import * as THREE from 'three';
import {
  halfBeam, keelY, railY, deckY, sectionExp, halfWidthAt, uAtX, CHINE_Y
} from './hullProfile.js';

const NX = 160;
const NY = 64;
export const HULL_CLIP_RANGE = { xMin: -5.4, xMax: 6.5, yMin: -1.3, yMax: 2.4 };
const CEILING_ABOVE_DECK = 0.3;

/* 船殼在 (u, y) 的半寬:舭部以下反解超橢圓,以上是外飄的舷側 */
function hullHalfWidth(u, y) {
  const K = keelY(u);
  if (y <= K) return 0;
  if (y >= CHINE_Y) return halfWidthAt(u, Math.min(y, railY(u)));
  const n = sectionExp(u);
  const sinTh = Math.pow((CHINE_Y - y) / (CHINE_Y - K), n / 2);
  const cosTh = Math.sqrt(Math.max(0, 1 - sinTh * sinTh));
  return halfBeam(u) * Math.pow(cosTh, 2 / n);
}

export function buildHullClipTexture() {
  const { xMin, xMax, yMin, yMax } = HULL_CLIP_RANGE;
  const data = new Float32Array(NX * NY * 4);
  for (let j = 0; j < NY; j++) {
    const y = yMin + ((j + 0.5) / NY) * (yMax - yMin);
    for (let i = 0; i < NX; i++) {
      const x = xMin + ((i + 0.5) / NX) * (xMax - xMin);
      const u = uAtX(x, () => y);
      const o = (j * NX + i) * 4;
      if (u < 0 || u > 1) continue;
      data[o] = hullHalfWidth(u, y);
      data[o + 1] = deckY(u) + CEILING_ABOVE_DECK;
    }
  }
  const tex = new THREE.DataTexture(data, NX, NY, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}
