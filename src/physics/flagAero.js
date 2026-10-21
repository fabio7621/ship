/* =========================================================
   旗面受力:材料數據 + 每個三角面的空氣動力
   - 法向壓力:準穩態平板 ½ρ·C_N·|vn|·vn·A,C_N ≈ 1.17(垂直氣流的平板,Hoerner)
   - 切向摩擦:紊流平板 Cf = 0.074·Re^(-1/5)(Prandtl),兩面都算
   - 拍動:準穩態面板抓不到尾流渦旋的「記憶」,真實旗幟的自激拍動補成一道沿旗面往下風走的側向壓力波,
     頻率/波速/振幅取自旗幟風洞實驗(Raynaud & Mulleners 2026, arXiv:2602.06237):
       St_L = f·L/U ≈ 0.40~0.55(展弦比 H/L 越大越高)、c/U ≈ 0.6~1.07、尾端振幅 A/L ≈ 0.28~0.35
     → 壓力大小由回授控制器調整,讓旗尾振幅收斂到 A/L ≈ 0.3
   - 雨:淋濕增重(主要效應);雨滴撞擊壓力 ρw·R·Vt 只有約 0.1 Pa,相對風壓幾百 Pa 可忽略但仍計入
   ========================================================= */
import { AIR_DENSITY, AIR_VISCOSITY } from './wind.js';

export const FABRIC_DRY_DENSITY = 0.136;  // kg/m²:200D 尼龍旗布 4 oz/yd²(SolarMax 規格)
export const WET_UPTAKE = 0.5;            // 吸水 + 表面水膜,約增重 50%(估計值)
export const RAIN_RATE = 50;              // mm/h:「暴雨」等級下限
export const RAIN_FALL_SPEED = 9;         // m/s:2~3mm 雨滴終端速度(Gunn & Kinzer 1949)
export const WATER_DENSITY = 1000;
export const SURFACE_TENSION = 0.072;     // N/m,水 @ ~10°C
export const C_NORMAL = 1.17;
export const FLUTTER = { strouhalL: 0.55, waveSpeed: 1.0, ampRatio: 0.3 };

const CONTROL_RATE = 0.6;   // 1/s,拍動壓力增益的調整速度
const STAT_TAU = 1.0;       // s,振幅統計的時間常數
const GAIN_RANGE = [0.01, 2];

export const wetArealDensity = (dry, uptake) => dry * (1 + uptake);

/** 雨滴撞擊造成的壓力 (Pa) = 質量通量 × 終端速度 */
export const rainPressure = (rateMmH, fallSpeed) => WATER_DENSITY * (rateMmH / 1000 / 3600) * fallSpeed;

/** 紊流平板摩擦係數(單面) */
export const skinFriction = (re) => 0.074 * Math.pow(Math.max(re, 1e4), -0.2);

/** 掛在布上的水滴被甩掉所需加速度:表面張力 σ·πd 對抗 m·a(m = ρw·πd³/6)→ a = 6σ/(ρw·d²) */
export const waterDetachAccel = (d) => (6 * SURFACE_TENSION) / (WATER_DENSITY * d * d);

export function createAeroState() {
  return {
    theta: 0, gain: 0.3,
    flow: [-1, 0, 0], speed: 0,
    latMean: 0, latVar: 0,
    drag: 0
  };
}

const RAIN_P = rainPressure(RAIN_RATE, RAIN_FALL_SPEED);

/* 參考氣流:旗桿中段的相對風,同時用 EMA 平滑出平均流向 */
function updateFlow(cloth, aero, h) {
  const i = cloth.poleMid * 3;
  const rx = cloth.air[i] - cloth.vel[i], ry = cloth.air[i + 1] - cloth.vel[i + 1], rz = cloth.air[i + 2] - cloth.vel[i + 2];
  const speed = Math.sqrt(rx * rx + ry * ry + rz * rz);
  aero.speed = speed;
  if (speed < 1e-6) return;
  const k = Math.min(1, h / 0.5);
  const f = aero.flow;
  f[0] += (rx / speed - f[0]) * k; f[1] += (ry / speed - f[1]) * k; f[2] += (rz / speed - f[2]) * k;
  const len = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2]);
  f[0] /= len; f[1] /= len; f[2] /= len;
}

/**
 * 累加每個頂點的氣動力到 cloth.force(不含重力)
 * @param {object} cloth  flagCloth 的布料狀態(air 已取樣)
 * @param {object} aero   createAeroState()
 * @param {number} h      子步長 (s)
 * @param {boolean} flutter 是否加入拍動壓力波
 */
export function applyAeroForces(cloth, aero, h, flutter) {
  const { pos, vel, air, force, tris, arc } = cloth;
  force.fill(0);
  updateFlow(cloth, aero, h);
  const U = aero.speed;
  aero.theta += 2 * Math.PI * (FLUTTER.strouhalL * U / cloth.fly) * h;
  const wavelength = (FLUTTER.waveSpeed * cloth.fly) / FLUTTER.strouhalL;   // λ = c/f ≈ 1.8L(實驗 1.87L)
  const cf2 = 2 * skinFriction((U * cloth.fly) / AIR_VISCOSITY);
  const halfRho = 0.5 * AIR_DENSITY;
  const fl = aero.flow;
  let drag = 0;

  for (let t = 0; t < tris.length; t += 3) {
    const a = tris[t] * 3, b = tris[t + 1] * 3, c = tris[t + 2] * 3;
    const e1x = pos[b] - pos[a], e1y = pos[b + 1] - pos[a + 1], e1z = pos[b + 2] - pos[a + 2];
    const e2x = pos[c] - pos[a], e2y = pos[c + 1] - pos[a + 1], e2z = pos[c + 2] - pos[a + 2];
    let nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (len < 1e-12) continue;
    const area = len / 2;
    nx /= len; ny /= len; nz /= len;

    const rx = (air[a] + air[b] + air[c] - vel[a] - vel[b] - vel[c]) / 3;
    const ry = (air[a + 1] + air[b + 1] + air[c + 1] - vel[a + 1] - vel[b + 1] - vel[c + 1]) / 3;
    const rz = (air[a + 2] + air[b + 2] + air[c + 2] - vel[a + 2] - vel[b + 2] - vel[c + 2]) / 3;
    const vn = rx * nx + ry * ny + rz * nz;
    const tx = rx - vn * nx, ty = ry - vn * ny, tz = rz - vn * nz;
    const vt = Math.sqrt(tx * tx + ty * ty + tz * tz);

    let pn = halfRho * C_NORMAL * Math.abs(vn) * vn;   // 法向壓力 (Pa)
    if (flutter) {
      const s = (arc[tris[t]] + arc[tris[t + 1]] + arc[tris[t + 2]]) / 3;
      const q = halfRho * (rx * rx + ry * ry + rz * rz);
      pn += aero.gain * q * Math.sin(aero.theta - (2 * Math.PI * s) / wavelength);
    }
    const ft = halfRho * cf2 * vt;                      // × 切向速度向量 = 摩擦應力
    const fx = (pn * nx + ft * tx) * area;
    const fy = (pn * ny + ft * ty) * area - RAIN_P * Math.abs(ny) * area;
    const fz = (pn * nz + ft * tz) * area;
    drag += fx * fl[0] + fy * fl[1] + fz * fl[2];

    const gx = fx / 3, gy = fy / 3, gz = fz / 3;
    force[a] += gx; force[a + 1] += gy; force[a + 2] += gz;
    force[b] += gx; force[b + 1] += gy; force[b + 2] += gz;
    force[c] += gx; force[c + 1] += gy; force[c + 2] += gz;
  }

  const q = halfRho * U * U * cloth.hoist * cloth.fly;
  if (q > 1e-6) aero.drag += (drag / q - aero.drag) * Math.min(1, h / STAT_TAU);
}

/* 量旗尾的側向位移(垂直於旗桿與平均流向),回授調整拍動壓力增益 */
export function updateFlutterControl(cloth, aero, h, flutter) {
  const { pos, pins } = cloth;
  const last = (cloth.rows - 1) * 3;
  const ax = pins[0] - pins[last], ay = pins[1] - pins[last + 1], az = pins[2] - pins[last + 2];
  const fl = aero.flow;
  let lx = ay * fl[2] - az * fl[1], ly = az * fl[0] - ax * fl[2], lz = ax * fl[1] - ay * fl[0];
  const len = Math.sqrt(lx * lx + ly * ly + lz * lz) || 1;
  lx /= len; ly /= len; lz /= len;
  const tip = cloth.tipIndex * 3, mid = cloth.poleMid * 3;
  const lateral = (pos[tip] - pos[mid]) * lx + (pos[tip + 1] - pos[mid + 1]) * ly + (pos[tip + 2] - pos[mid + 2]) * lz;

  const k = Math.min(1, h / STAT_TAU);
  aero.latMean += (lateral - aero.latMean) * k;
  aero.latVar += ((lateral - aero.latMean) ** 2 - aero.latVar) * k;
  const amp = Math.sqrt(2 * aero.latVar);
  if (flutter) {
    const err = 1 - amp / (FLUTTER.ampRatio * cloth.fly);
    aero.gain = Math.min(GAIN_RANGE[1], Math.max(GAIN_RANGE[0], aero.gain * Math.exp(h * CONTROL_RATE * err)));
  }
  return { lateral, ampRatio: amp / cloth.fly };
}
