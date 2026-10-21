/* =========================================================
   旗布:XPBD 質點布料(Macklin 2019「small steps」:多子步、每步少量迭代)
   - 網格:rows 沿旗桿(hoist)、cols 往旗尾(fly);c = 0 那一欄縫在旗桿套管上
   - 約束:結構(幾乎不可伸長)、剪切、隔一格的彎曲(柔軟,數值調參)
   - 世界座標模擬:掛點跟著船的橫搖/縱搖/起伏移動,慣性效果自然出現
   ========================================================= */
import { applyAeroForces, createAeroState, updateFlutterControl } from './flagAero.js';

const GRAVITY = 9.81;
const MAX_SUBSTEP = 1 / 480;
const MAX_SUBSTEPS = 32;
const ITERATIONS = 2;
const AIR_SAMPLE_EVERY = 4;   // 風場每 4 個子步取樣一次(最小渦旋 0.5m,約 20ms 才掃過旗面)
// m/N。布的經緯向幾乎不伸長,斜紋方向(bias)很容易變形 → 剪切放鬆
const COMPLIANCE = { stretch: 0, shear: 0.05, bend: 0.04 };
const POLE_RADIUS = 0.045;

function buildConstraints(rows, cols, dw, dh) {
  const list = [];
  const idx = (r, c) => r * cols + c;
  const add = (a, b, rest, compliance, structural = false) => list.push({ a, b, rest, compliance, structural });
  const diag = Math.hypot(dw, dh);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (c + 1 < cols) add(idx(r, c), idx(r, c + 1), dw, COMPLIANCE.stretch, true);
      if (r + 1 < rows) add(idx(r, c), idx(r + 1, c), dh, COMPLIANCE.stretch, true);
      if (r + 1 < rows && c + 1 < cols) {
        add(idx(r, c), idx(r + 1, c + 1), diag, COMPLIANCE.shear);
        add(idx(r, c + 1), idx(r + 1, c), diag, COMPLIANCE.shear);
      }
      if (c + 2 < cols) add(idx(r, c), idx(r, c + 2), dw * 2, COMPLIANCE.bend);
      if (r + 2 < rows) add(idx(r, c), idx(r + 2, c), dh * 2, COMPLIANCE.bend);
    }
  }
  return {
    a: Uint32Array.from(list, (k) => k.a),
    b: Uint32Array.from(list, (k) => k.b),
    rest: Float64Array.from(list, (k) => k.rest),
    compliance: Float64Array.from(list, (k) => k.compliance),
    structural: Uint8Array.from(list, (k) => (k.structural ? 1 : 0))
  };
}

/* 正面朝向:旗尾往 -x、列往下時法線朝 +z(鏡頭那一側看到正的圖) */
function buildTriangles(rows, cols) {
  const tris = [];
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const i = r * cols + c;
      tris.push(i, i + 1, i + cols, i + 1, i + cols + 1, i + cols);
    }
  }
  return Uint32Array.from(tris);
}

/**
 * @param {{ hoist: number, fly: number, rows: number, cols: number, arealDensity: number,
 *           pins: Float64Array, flyDir: number[] }} opts  pins:每一列掛點的世界座標(rows × 3)
 */
export function createCloth({ hoist, fly, rows, cols, arealDensity, pins, flyDir }) {
  const n = rows * cols;
  const dw = fly / (cols - 1), dh = hoist / (rows - 1);
  const pos = new Float64Array(n * 3);
  const arc = new Float64Array(n);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      for (let k = 0; k < 3; k++) pos[i * 3 + k] = pins[r * 3 + k] + flyDir[k] * c * dw;
      arc[i] = c * dw;
    }
  }
  const tris = buildTriangles(rows, cols);
  const mass = new Float64Array(n);
  const triMass = (arealDensity * dw * dh) / 2 / 3;
  for (const v of tris) mass[v] += triMass;
  const invMass = mass.map((m, i) => (i % cols === 0 ? 0 : 1 / m));

  return {
    rows, cols, hoist, fly, pos, arc, tris, invMass,
    prev: pos.slice(), vel: new Float64Array(n * 3), air: new Float64Array(n * 3), force: new Float64Array(n * 3),
    pins: Float64Array.from(pins),
    constraints: buildConstraints(rows, cols, dw, dh),
    tipIndex: Math.floor(rows / 2) * cols + cols - 1,
    poleMid: Math.floor(rows / 2) * cols,
    aero: createAeroState(),
    airAge: 0,
    diag: { tipLateral: 0, ampRatio: 0, dragCoeff: 0, gain: 0, substeps: 0 }
  };
}

function solveConstraints(cloth, h) {
  const { pos, invMass } = cloth;
  const { a, b, rest, compliance } = cloth.constraints;
  const ih2 = 1 / (h * h);
  for (let i = 0; i < a.length; i++) {
    const ia = a[i] * 3, ib = b[i] * 3;
    const wa = invMass[a[i]], wb = invMass[b[i]];
    const w = wa + wb;
    if (w === 0) continue;
    const dx = pos[ia] - pos[ib], dy = pos[ia + 1] - pos[ib + 1], dz = pos[ia + 2] - pos[ib + 2];
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (len < 1e-9) continue;
    const s = -(len - rest[i]) / (w + compliance[i] * ih2) / len;
    pos[ia] += wa * s * dx; pos[ia + 1] += wa * s * dy; pos[ia + 2] += wa * s * dz;
    pos[ib] -= wb * s * dx; pos[ib + 1] -= wb * s * dy; pos[ib + 2] -= wb * s * dz;
  }
}

/* 布不能穿過旗桿:把落在桿子圓柱內的質點沿徑向推出 */
function collidePole(cloth) {
  const { pos, pins, invMass, rows } = cloth;
  const last = (rows - 1) * 3;
  let ax = pins[0] - pins[last], ay = pins[1] - pins[last + 1], az = pins[2] - pins[last + 2];
  const al = Math.sqrt(ax * ax + ay * ay + az * az);
  ax /= al; ay /= al; az /= al;
  for (let i = 0; i < invMass.length; i++) {
    if (invMass[i] === 0) continue;
    const o = i * 3;
    const px = pos[o] - pins[last], py = pos[o + 1] - pins[last + 1], pz = pos[o + 2] - pins[last + 2];
    const along = px * ax + py * ay + pz * az;
    const rx = px - along * ax, ry = py - along * ay, rz = pz - along * az;
    const d = Math.sqrt(rx * rx + ry * ry + rz * rz);
    if (d >= POLE_RADIUS || d < 1e-9) continue;
    const push = POLE_RADIUS / d - 1;
    pos[o] += rx * push; pos[o + 1] += ry * push; pos[o + 2] += rz * push;
  }
}

function sampleAir(cloth, air, t) {
  const { pos } = cloth;
  const out = [0, 0, 0];
  for (let i = 0; i < pos.length; i += 3) {
    air(pos[i], pos[i + 1], pos[i + 2], t, out);
    cloth.air[i] = out[0]; cloth.air[i + 1] = out[1]; cloth.air[i + 2] = out[2];
  }
}

function substep(cloth, h, t, frac, env) {
  const { pos, prev, vel, force, invMass, pins, cols } = cloth;
  const { pinFrom, pinTo, air, flutter } = env;
  for (let k = 0; k < pins.length; k++) pins[k] = pinFrom[k] + (pinTo[k] - pinFrom[k]) * frac;

  if (cloth.airAge++ % AIR_SAMPLE_EVERY === 0) sampleAir(cloth, air, t);
  applyAeroForces(cloth, cloth.aero, h, flutter);

  for (let i = 0; i < invMass.length; i++) {
    const o = i * 3;
    prev[o] = pos[o]; prev[o + 1] = pos[o + 1]; prev[o + 2] = pos[o + 2];
    const w = invMass[i];
    if (w === 0) {
      const p = (i / cols) * 3;
      pos[o] = pins[p]; pos[o + 1] = pins[p + 1]; pos[o + 2] = pins[p + 2];
      continue;
    }
    vel[o] += h * force[o] * w;
    vel[o + 1] += h * (force[o + 1] * w - GRAVITY);
    vel[o + 2] += h * force[o + 2] * w;
    pos[o] += h * vel[o]; pos[o + 1] += h * vel[o + 1]; pos[o + 2] += h * vel[o + 2];
  }

  for (let it = 0; it < ITERATIONS; it++) solveConstraints(cloth, h);
  collidePole(cloth);
  for (let k = 0; k < pos.length; k++) vel[k] = (pos[k] - prev[k]) / h;

  return updateFlutterControl(cloth, cloth.aero, h, flutter);
}

/**
 * 前進一幀
 * @param {object} cloth createCloth() 的結果
 * @param {number} dt 幀時間 (s)
 * @param {{ t: number, pinFrom: Float64Array, pinTo: Float64Array,
 *           air: (x: number, y: number, z: number, t: number, out: number[]) => number[],
 *           flutter?: boolean }} env  t:這一幀結束的時間;pinFrom/pinTo:幀頭/幀尾的掛點
 */
export function stepCloth(cloth, dt, env) {
  if (dt <= 0) return cloth;
  const n = Math.min(MAX_SUBSTEPS, Math.ceil(dt / MAX_SUBSTEP));
  const h = dt / n;
  const opts = { flutter: true, ...env };
  let stat = { lateral: 0, ampRatio: 0 };
  for (let s = 1; s <= n; s++) stat = substep(cloth, h, env.t - dt + s * h, s / n, opts);

  cloth.diag = {
    tipLateral: stat.lateral, ampRatio: stat.ampRatio,
    dragCoeff: cloth.aero.drag, gain: cloth.aero.gain, substeps: n
  };
  return cloth;
}

/** 結構約束的平均伸長率(布料品質檢查) */
export function structuralStretch(cloth) {
  const { pos } = cloth;
  const { a, b, rest, structural } = cloth.constraints;
  let sum = 0, count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!structural[i]) continue;
    const ia = a[i] * 3, ib = b[i] * 3;
    const dx = pos[ia] - pos[ib], dy = pos[ia + 1] - pos[ib + 1], dz = pos[ia + 2] - pos[ib + 2];
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    sum += Math.abs(len - rest[i]) / rest[i];
    count++;
  }
  return sum / count;
}
