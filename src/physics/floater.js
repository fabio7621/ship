/* =========================================================
   浮力:四點取樣 + 彈簧阻尼
   seaHeight 為完整海面(Gerstner 湧浪 + FFT 長波鏡像),船才不會被浪穿過
   另外追蹤「船頭入水深度」與其變化率 → 驅動船頭破浪的水花與波高
   ========================================================= */
import * as THREE from 'three';

const BOW_LOCAL = new THREE.Vector3(5.45, -0.15, 0);  // 艏柱水線處
const _bow = new THREE.Vector3();

function spring(s, target, k, d, dt) {
  const kk = k * dt * 60, dd = Math.pow(d, dt * 60);
  s.v += (target - s.x) * kk; s.v *= dd; s.x += s.v * dt * 60;
}

export function createFloater(opts = {}) {
  return {
    heave: { v: 0, x: 0 }, pitch: { v: 0, x: 0 }, roll: { v: 0, x: 0 },
    halfL: opts.halfL ?? 3.8, halfW: opts.halfW ?? 1.5, draft: opts.draft ?? 0.55,
    stiff: opts.stiff ?? 0.06, dampY: opts.dampY ?? 0.90, dampR: opts.dampR ?? 0.86,
    bowImmersion: 0,
    bowRate: 0
  };
}

/**
 * @param {(x: number, z: number, t: number) => number} seaHeight 世界座標的水面高度
 */
export function updateFloater(f, boat, t, dt, seaHeight) {
  const bx = boat.position.x, bz = boat.position.z;
  const hB = seaHeight(bx + f.halfL, bz, t);
  const hS = seaHeight(bx - f.halfL, bz, t);
  const hP = seaHeight(bx, bz + f.halfW, t);
  const hQ = seaHeight(bx, bz - f.halfW, t);
  const targetY = (hB + hS + hP + hQ) / 4 - f.draft + 0.7;
  spring(f.heave, targetY, f.stiff, f.dampY, dt);
  spring(f.pitch, Math.atan2(hB - hS, f.halfL * 2) * 0.9, f.stiff, f.dampR, dt);
  spring(f.roll,  Math.atan2(hQ - hP, f.halfW * 2) * 0.7, f.stiff, f.dampR, dt);
  boat.position.y = f.heave.x;
  boat.rotation.z = f.pitch.x;
  boat.rotation.x = f.roll.x;

  // 船頭入水:> 0 代表艏柱水線被浪淹過;變化率 > 0 代表正往浪裡插
  boat.updateMatrixWorld();
  boat.localToWorld(_bow.copy(BOW_LOCAL));
  const immersion = seaHeight(_bow.x, _bow.z, t) - _bow.y;
  const rate = dt > 0 ? (immersion - f.bowImmersion) / dt : 0;
  f.bowRate += (rate - f.bowRate) * Math.min(1, dt * 12);   // 平滑,避免單幀雜訊觸發水花
  f.bowImmersion = immersion;
}

/* 船身推浪強度:平穩航行約 0.85~1,船頭插進浪裡時加強(驅動海面 shader 的艏浪高度) */
export function bowWaveStrength(f) {
  const push = Math.max(0, f.bowImmersion + 0.2) * 0.6;
  const plunge = Math.max(0, f.bowRate) * 0.3;
  return 0.85 + Math.min(1.4, push + plunge);
}
