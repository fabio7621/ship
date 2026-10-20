/* =========================================================
   白頭浪覆蓋率(依風速)+ 白沫門檻回授控制
   - Monahan & O'Muircheartaigh (1980):W = 3.84e-6 · U10^3.41
     蒲福 3 級(~4 m/s)零星白浪 0.04%;8 級(20 m/s)約 10%
   - FFT 海面的 Jacobian 門檻跟「實際白沫面積」的關係受頻譜、衰減、cascade 影響,
     很難事先算準 → 量測畫面上的覆蓋率,慢慢把門檻推到目標值
   - 實際執行在 GPU(scene/ocean/fft/foamStats.js,避免讀回卡頓);
     這裡的 JS 版是同一套公式的參考實作,給單元測試驗證收斂行為
   ========================================================= */
const MONAHAN_A = 3.84e-6;
const MONAHAN_B = 3.41;

/** @param {number} windSpeed 10m 高風速 (m/s) @returns {number} 0~1 */
export function whitecapCoverage(windSpeed) {
  if (windSpeed <= 0) return 0;
  return Math.min(1, MONAHAN_A * windSpeed ** MONAHAN_B);
}

/* GPU 與 JS 共用的控制參數 */
export const FOAM_CONTROL = Object.freeze({ gain: 0.25, smoothing: 0.3, min: 0.2, max: 1.2 });

/**
 * 積分控制:覆蓋率不足 → 提高門檻(更多地方算破浪)
 * 量測值先做指數平滑,避免浪群經過時門檻跟著抖
 * @param {{ target: number, initialThreshold: number, gain?: number, smoothing?: number,
 *           min?: number, max?: number }} opts
 */
export function createFoamController({
  target, initialThreshold,
  gain = FOAM_CONTROL.gain, smoothing = FOAM_CONTROL.smoothing, min = FOAM_CONTROL.min, max = FOAM_CONTROL.max
}) {
  const clamp = (v) => Math.min(max, Math.max(min, v));
  const initial = Object.freeze({ threshold: clamp(initialThreshold), coverage: target });

  /** @param {{threshold:number, coverage:number}} state @param {number} measured */
  function step(state, measured) {
    const coverage = state.coverage + (measured - state.coverage) * smoothing;
    return Object.freeze({ threshold: clamp(state.threshold + gain * (target - coverage)), coverage });
  }

  return { initial, step, target };
}
