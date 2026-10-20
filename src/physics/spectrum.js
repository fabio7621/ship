/* =========================================================
   海浪頻譜(Tessendorf 2001 + JONSWAP)
   產生初始頻譜 h0(k),之後由 GPU 每幀做時間演化與逆 FFT
   - JONSWAP:北海實測的風浪能量分布(有明顯峰值的 Pierson-Moskowitz)
   - 方向分布:半角 cos^2s,s 越大浪越整齊朝風向
   - 每個 cascade 只取自己負責的波數區間 [kMin, kMax),避免重複疊加能量
   ========================================================= */
const G = 9.81;
const TAU = Math.PI * 2;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussianPair(rand) {
  const u1 = Math.max(rand(), 1e-9), u2 = rand();
  const r = Math.sqrt(-2 * Math.log(u1));
  return [r * Math.cos(TAU * u2), r * Math.sin(TAU * u2)];
}

/* JONSWAP S(ω),U:10m 高風速 (m/s),F:吹風距離 (m) */
function jonswap(omega, windSpeed, fetch) {
  const alpha = 0.076 * Math.pow((windSpeed * windSpeed) / (fetch * G), 0.22);
  const omegaP = 22 * Math.cbrt((G * G) / (windSpeed * fetch));
  const sigma = omega <= omegaP ? 0.07 : 0.09;
  const r = Math.exp(-((omega - omegaP) ** 2) / (2 * sigma * sigma * omegaP * omegaP));
  return (alpha * G * G) / omega ** 5 * Math.exp(-1.25 * (omegaP / omega) ** 4) * Math.pow(3.3, r);
}

function makeSpreading(s) {
  const raw = (theta) => Math.pow(Math.abs(Math.cos(theta / 2)), 2 * s);
  const steps = 720;
  let integral = 0;
  for (let i = 0; i < steps; i++) integral += raw(-Math.PI + ((i + 0.5) / steps) * TAU) * (TAU / steps);
  return (theta) => raw(theta) / integral;
}

/**
 * @param {{ N: number, size: number, kMin: number, kMax: number, windSpeed: number,
 *           fetch: number, windAngle: number, spread: number, scale: number, seed: number }} opts
 * @returns {Float32Array} RGBA:h0(k).re, h0(k).im, h0(-k).re, h0(-k).im
 */
export function buildInitialSpectrum(opts) {
  const { N, size, kMin, kMax, windSpeed, fetch, windAngle, spread, scale, seed } = opts;
  const rand = mulberry32(seed);
  const spreading = makeSpreading(spread);
  const dk = TAU / size;
  const h0 = new Float32Array(N * N * 2);

  for (let y = 0; y < N; y++) {
    const nz = y < N / 2 ? y : y - N;
    for (let x = 0; x < N; x++) {
      const nx = x < N / 2 ? x : x - N;
      const kx = nx * dk, kz = nz * dk;
      const k = Math.hypot(kx, kz);
      const [gr, gi] = gaussianPair(rand);   // 每格都抽,讓不同參數下的亂數序列一致
      // Nyquist 行列沒有對應的 -k,會破壞 Hermitian 對稱 → 打包的實數場互相滲漏
      if (x === N / 2 || y === N / 2) continue;
      if (k < kMin || k >= kMax || k === 0) continue;
      const omega = Math.sqrt(G * k);
      const dOmegaDk = G / (2 * omega);
      const psi = jonswap(omega, windSpeed, fetch) * spreading(Math.atan2(kz, kx) - windAngle) * dOmegaDk / k;
      // h0 = (ξr + iξi)/√2 · √(2Ψ)·Δk = (ξr + iξi)·√Ψ·Δk → 高度變異數 = ∫Ψ dk
      const amp = Math.sqrt(psi * scale) * dk;
      const o = (y * N + x) * 2;
      h0[o] = gr * amp;
      h0[o + 1] = gi * amp;
    }
  }

  const out = new Float32Array(N * N * 4);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const o = (y * N + x) * 2;
      const m = (((N - y) % N) * N + ((N - x) % N)) * 2;
      const p = (y * N + x) * 4;
      out[p] = h0[o];
      out[p + 1] = h0[o + 1];
      out[p + 2] = h0[m];
      out[p + 3] = h0[m + 1];
    }
  }
  return out;
}
