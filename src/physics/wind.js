/* =========================================================
   海面上的風:平均風速剖面 + 凍結紊流
   - 剖面:冪次律 U(z) = U10·(z/10)^α,開闊海面 α ≈ 0.11
   - 陣風:海上(離岸 > 20km)3 秒陣風 / 10 分鐘平均 ≈ 1.23(WMO 換算表,Harper et al. 2010)
     G = 1 + g·I,峰值因子 g ≈ 3 → 紊流強度 I ≈ 7.7%
   - 紊流:Kolmogorov 慣性子區 E(k) ∝ k^(-5/3) 的隨機傅立葉模態,
     依 Taylor 凍結紊流假設整團以平均風速平移(渦旋被風「帶著走」)
   - 船身座標系:船不動、水往後流(DRIFT),所以視風 = 真風 + DRIFT
   ========================================================= */

export const WIND_SPEED_10M = 20;     // m/s,與海面 FFT 頻譜一致(8 級風)
export const SEA_SHEAR_EXPONENT = 0.11;
export const GUST_FACTOR_AT_SEA = 1.23;
export const PEAK_FACTOR = 3;
export const AIR_DENSITY = 1.25;      // kg/m³,約 8°C 的暴風雨空氣
export const AIR_VISCOSITY = 1.4e-5;  // m²/s,運動黏滯係數

const MIN_HEIGHT = 0.5;               // 剖面在浪溝裡不再往下外插
const ADVECT_HEIGHT = 4;              // 紊流整團用這個高度的風速平移
const ANISOTROPY = [1, 0.5, 0.8];     // σu : σw : σv(順風 : 垂直 : 側向),近地表典型比例

/** @param {number} u10 10m 高風速 (m/s) @param {number} z 離海面高度 (m) @returns {number} */
export function windAtHeight(u10, z) {
  return u10 * Math.pow(Math.max(z, MIN_HEIGHT) / 10, SEA_SHEAR_EXPONENT);
}

/** 由陣風係數反推紊流強度 I = (G − 1) / g */
export function turbulenceIntensity(gust = GUST_FACTOR_AT_SEA, peak = PEAK_FACTOR) {
  return (gust - 1) / peak;
}

function seeded(seed) {
  let s = (seed * 2654435761) % 2147483647 || 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function randomUnit(rand) {
  const z = rand() * 2 - 1, a = rand() * Math.PI * 2, r = Math.sqrt(1 - z * z);
  return [r * Math.cos(a), z, r * Math.sin(a)];
}

/* 隨機模態:波向量 k、速度方向 e(與 k 垂直 → 近似不可壓縮)、相位 */
function buildModes(count, lMin, lMax, wind, rand) {
  const side = [-wind[1], wind[0]];
  const kx = new Float64Array(count), ky = new Float64Array(count), kz = new Float64Array(count);
  const ex = new Float64Array(count), ey = new Float64Array(count), ez = new Float64Array(count);
  const phase = new Float64Array(count);
  let varAlong = 0;
  for (let i = 0; i < count; i++) {
    const k = (2 * Math.PI) / (lMax * Math.pow(lMin / lMax, i / (count - 1)));
    const kd = randomUnit(rand);
    let e = randomUnit(rand);
    const dot = e[0] * kd[0] + e[1] * kd[1] + e[2] * kd[2];
    e = [e[0] - dot * kd[0], e[1] - dot * kd[1], e[2] - dot * kd[2]];
    // 轉到風向座標套異向性,再轉回世界座標
    const along = (e[0] * wind[0] + e[2] * wind[1]) * ANISOTROPY[0];
    const cross = (e[0] * side[0] + e[2] * side[1]) * ANISOTROPY[2];
    const amp = Math.pow(k, -1 / 3) / Math.max(1e-6, Math.hypot(...e));
    kx[i] = k * kd[0]; ky[i] = k * kd[1]; kz[i] = k * kd[2];
    ex[i] = amp * (along * wind[0] + cross * side[0]);
    ey[i] = amp * e[1] * ANISOTROPY[1];
    ez[i] = amp * (along * wind[1] + cross * side[1]);
    phase[i] = rand() * Math.PI * 2;
    varAlong += (amp * along) ** 2 / 2;
  }
  // 正規化:順風分量的變異數 = 1,取樣時再乘上 σu(z)
  const norm = 1 / Math.sqrt(varAlong);
  for (let i = 0; i < count; i++) { ex[i] *= norm; ey[i] *= norm; ez[i] *= norm; }
  return { count, kx, ky, kz, ex, ey, ez, phase };
}

/**
 * @param {{ u10: number, dir: number[], drift: number[], seed?: number,
 *           modes?: number, lMin?: number, lMax?: number }} opts
 *   dir:真風往哪吹(x, z);drift:水相對船的流速(m/s)
 */
export function createWindField({ u10, dir, drift, seed = 1, modes = 24, lMin = 0.5, lMax = 120 }) {
  const len = Math.hypot(dir[0], dir[1]);
  const wind = [dir[0] / len, dir[1] / len];
  const intensity = turbulenceIntensity();
  const m = buildModes(modes, lMin, lMax, wind, seeded(seed));

  /** 平均視風 @param {number} y @param {number[]} out */
  function meanAt(y, out) {
    const s = windAtHeight(u10, y);
    out[0] = wind[0] * s + drift[0];
    out[1] = 0;
    out[2] = wind[1] * s + drift[1];
    return out;
  }

  const adv = meanAt(ADVECT_HEIGHT, [0, 0, 0]);

  /** 某點某時刻的視風速度 (m/s),寫進 out */
  function sample(x, y, z, t, out) {
    meanAt(y, out);
    const sigma = intensity * windAtHeight(u10, y);
    const px = x - adv[0] * t, pz = z - adv[2] * t;
    let ux = 0, uy = 0, uz = 0;
    for (let i = 0; i < m.count; i++) {
      const s = Math.sin(m.kx[i] * px + m.ky[i] * y + m.kz[i] * pz + m.phase[i]);
      ux += m.ex[i] * s; uy += m.ey[i] * s; uz += m.ez[i] * s;
    }
    out[0] += sigma * ux; out[1] += sigma * uy; out[2] += sigma * uz;
    return out;
  }

  return { meanAt, sample, intensity };
}
