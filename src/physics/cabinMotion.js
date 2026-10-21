/* =========================================================
   艙內物品跟著船晃:全部在「船身座標」裡算
   船一傾斜,重力在船身座標裡的方向就跟著變 → 擺錘、液面、滾動物各自去追
   ========================================================= */

const SUBSTEP = 1 / 240;   // 固定子步長:60/144Hz 手感一致,也不怕彈簧太硬而發散
const MAX_DT = 0.1;        // 分頁切回來時的超大 dt 直接截斷

/**
 * 重力在船身座標的單位方向。boat.rotation 為 Euler XYZ:x = roll、z = pitch
 * @returns {{x: number, y: number, z: number}}
 */
export function localGravity(pitch, roll) {
  const cr = Math.cos(roll);
  return { x: -cr * Math.sin(pitch), y: -cr * Math.cos(pitch), z: Math.sin(roll) };
}

/**
 * 二維彈簧阻尼(擺錘偏角、液面傾角都用它)
 * @param {{freq: number, damping: number}} opts freq = 自然頻率 Hz、damping = 阻尼比(1 = 臨界阻尼)
 */
export function createSway({ freq, damping }) {
  return { x: 0, z: 0, vx: 0, vz: 0, omega: 2 * Math.PI * freq, damping };
}

export function stepSway(s, targetX, targetZ, dt) {
  const k = s.omega * s.omega, c = 2 * s.damping * s.omega;
  let left = Math.min(dt, MAX_DT);
  while (left > 1e-9) {
    const h = Math.min(SUBSTEP, left);
    s.vx += (-k * (s.x - targetX) - c * s.vx) * h;
    s.vz += (-k * (s.z - targetZ) - c * s.vz) * h;
    s.x += s.vx * h;
    s.z += s.vz * h;
    left -= h;
  }
  return s;
}

/**
 * 一維滾動物(海圖桌上的鉛筆):被兩側擋條限制
 * @param {{min: number, max: number, friction?: number, restitution?: number}} opts
 *   friction = 滾動摩擦減速度 m/s²、restitution = 撞擋條後保留的速度比例
 */
export function createRoller({ min, max, friction = 0.3, restitution = 0.35 }) {
  return { p: (min + max) / 2, v: 0, min, max, friction, restitution };
}

/** @param {number} accel 沿滾動方向的重力分量 m/s² */
export function stepRoller(r, accel, dt) {
  let left = Math.min(dt, MAX_DT);
  while (left > 1e-9) {
    const h = Math.min(SUBSTEP, left);
    const drag = r.friction * h;
    if (r.v === 0 && Math.abs(accel) <= r.friction) {
      left -= h;
      continue;                      // 靜摩擦撐得住
    }
    r.v += accel * h;
    r.v = Math.abs(r.v) <= drag ? 0 : r.v - Math.sign(r.v) * drag;
    r.p += r.v * h;
    if (r.p > r.max) { r.p = r.max; r.v = -r.v * r.restitution; }
    if (r.p < r.min) { r.p = r.min; r.v = -r.v * r.restitution; }
    left -= h;
  }
  return r;
}
