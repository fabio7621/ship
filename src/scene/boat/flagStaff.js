/* =========================================================
   船尾旗桿:錐形鋼管 + 頂球 + 固定在艉板舷牆的夾具
   旗子用套管縫在桿上(整條旗邊都固定),布料本身在 scene/flag 模擬
   ========================================================= */
import * as THREE from 'three';
import { deckAt } from './hullProfile.js';
import { mesh, rod } from '../parts.js';

const POLE_X = -5.0;
const POLE_TOP = 4.78;
const STERN_RAIL_X = -5.24;

/* 旗子尺寸:圖檔 972×2160 → 寬高比 0.45;縫邊(hoist)沿旗桿 */
export const FLAG_SIZE = { hoist: 1.7, fly: 0.765, top: 4.6 };

/** 每一列掛點在船身座標的位置(從旗頂往下),rows × 3 */
export function flagPinsLocal(rows) {
  const pins = new Float64Array(rows * 3);
  for (let r = 0; r < rows; r++) {
    pins.set([POLE_X, FLAG_SIZE.top - (FLAG_SIZE.hoist * r) / (rows - 1), 0], r * 3);
  }
  return pins;
}

export function buildFlagStaff(mats) {
  const g = new THREE.Group();
  const base = deckAt(POLE_X);
  const h = POLE_TOP - base.y;
  g.add(mesh(new THREE.CylinderGeometry(0.026, 0.042, h, 12), mats.white, POLE_X, base.y + h / 2, 0));
  g.add(mesh(new THREE.SphereGeometry(0.05, 12, 10), mats.brass, POLE_X, POLE_TOP + 0.03, 0));
  // 腳座 + 舷牆夾具
  g.add(mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.08, 12), mats.steel, POLE_X, base.y + 0.04, 0));
  const clampY = base.rail - 0.03;
  g.add(rod([POLE_X, clampY, 0], [STERN_RAIL_X, clampY, 0], 0.02, mats.steel));
  // 夾環 + 旗子套管上下端的束環
  for (const [y, r] of [[clampY, 0.045], [FLAG_SIZE.top + 0.02, 0.038], [FLAG_SIZE.top - FLAG_SIZE.hoist - 0.02, 0.038]]) {
    const ring = mesh(new THREE.TorusGeometry(r, 0.011, 6, 16), mats.steel, POLE_X, y, 0);
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
  }
  return g;
}
