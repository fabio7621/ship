/* =========================================================
   FFT 海面的 CPU 鏡像(給浮力用)
   GPU 的位移貼圖 JS 讀不到,所以直接用「同一份 h0 頻譜 + 同一套時間演化」
   在 CPU 端對指定點做 DFT 加總。只取波長 > 8m 的成分(約 3000 個):
   船長 11m,更短的碎浪對船身姿態影響很小,但成本會暴增。
   ========================================================= */
const G = 9.81;
const TAU = Math.PI * 2;

/**
 * @param {{ data: Float32Array, N: number, size: number, kMax: number, choppiness: number }} opts
 * @returns {{ heightAt: (px: number, pz: number, t: number) => number, count: number }}
 *   px/pz 為波空間座標(已扣除漂移)
 */
export function createSurfaceSampler({ data, N, size, kMax, choppiness }) {
  const list = [];
  const dk = TAU / size;
  for (let y = 0; y < N; y++) {
    const nz = y < N / 2 ? y : y - N;
    for (let x = 0; x < N; x++) {
      const nx = x < N / 2 ? x : x - N;
      const kx = nx * dk, kz = nz * dk;
      const k = Math.hypot(kx, kz);
      if (k === 0 || k >= kMax) continue;
      const p = (y * N + x) * 4;
      if (data[p] === 0 && data[p + 1] === 0 && data[p + 2] === 0 && data[p + 3] === 0) continue;
      list.push([kx, kz, k, data[p], data[p + 1], data[p + 2], data[p + 3]]);
    }
  }

  const M = list.length;
  const KX = new Float64Array(M), KZ = new Float64Array(M), OM = new Float64Array(M);
  const KXN = new Float64Array(M), KZN = new Float64Array(M);
  const H0 = new Float64Array(M * 4);
  list.forEach(([kx, kz, k, a, b, c, d], i) => {
    KX[i] = kx; KZ[i] = kz; KXN[i] = kx / k; KZN[i] = kz / k;
    OM[i] = Math.sqrt(G * k);
    H0.set([a, b, c, d], i * 4);
  });

  const RE = new Float64Array(M), IM = new Float64Array(M);
  let evolvedAt = NaN;

  // 與 spectrumFragment 相同:h = h0·e^{-iωt} + conj(h0(-k))·e^{iωt}
  function evolve(t) {
    if (t === evolvedAt) return;
    evolvedAt = t;
    for (let i = 0; i < M; i++) {
      const w = OM[i] * t, cw = Math.cos(w), sw = Math.sin(w);
      const o = i * 4, a = H0[o], b = H0[o + 1], c = H0[o + 2], d = H0[o + 3];
      RE[i] = a * cw + b * sw + c * cw + d * sw;
      IM[i] = b * cw - a * sw + c * sw - d * cw;
    }
  }

  // GPU 貼圖第 j 格的中心在 (j + 0.5)·L/N,存的卻是 x_j = j·L/N 的值 → 要扣半格
  const halfTexel = (0.5 * size) / N;
  const out = { x: 0, y: 0, z: 0 };

  function displace(px, pz) {
    const x = px - halfTexel, z = pz - halfTexel;
    let h = 0, dx = 0, dz = 0;
    for (let i = 0; i < M; i++) {
      const th = KX[i] * x + KZ[i] * z;
      const cs = Math.cos(th), sn = Math.sin(th);
      const cim = RE[i] * sn + IM[i] * cs;
      h += RE[i] * cs - IM[i] * sn;
      dx += KXN[i] * cim;
      dz += KZN[i] * cim;
    }
    out.x = -choppiness * dx;
    out.y = h;
    out.z = -choppiness * dz;
    return out;
  }

  function heightAt(px, pz, t) {
    evolve(t);
    // 水平位移反向修正一次:找出被推到 (px, pz) 的那一點
    const d = displace(px, pz);
    return displace(px - d.x, pz - d.z).y;
  }

  return { heightAt, count: M };
}
