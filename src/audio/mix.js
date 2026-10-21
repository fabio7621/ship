/* =========================================================
   音效的「物理 → 參數」換算(純函式,不碰 Web Audio,方便測試)
   - 雷聲:距離 → 延遲(音速)、高頻衰減(空氣吸收)、近雷才有撕裂聲
   - 風切聲:索具的風鳴是渦街脫落,頻率 f = St·U/d(St ≈ 0.2,圓柱)
   - 艙內:外面的聲音穿過玻璃與艙壁 → 低通 + 衰減
   ========================================================= */

export const SOUND_SPEED = 343;        // m/s,約 10°C 空氣
export const STROUHAL = 0.2;           // 圓柱渦街,Re 1e3~1e5 幾乎是常數
/* 畫面裡的閃電被壓在 50~110m 的霧裡(看起來在海平線上),聲學上放大成 0.6~1.3km 的真實距離 */
export const ACOUSTIC_SCALE = 12;
const NEAR_FULL = 500, NEAR_ZERO = 1500;   // m:近雷特徵(撕裂聲、高頻)從滿到無

const MUFFLE_OPEN = 18000, MUFFLE_CABIN = 650;   // Hz:室外 / 艙內聽到的外部聲音上限

const clamp01 = (x) => Math.min(1, Math.max(0, x));

/**
 * @param {number} distance 閃電到聽者的場景距離
 * @param {number} power 0~1,回擊次數越多越響
 * @returns {{ delay: number, gain: number, crack: number, cutoff: number, duration: number }}
 */
export function thunderProfile(distance, power) {
  const d = distance * ACOUSTIC_SCALE;
  const near = clamp01((NEAR_ZERO - d) / (NEAR_ZERO - NEAR_FULL));
  const p = clamp01(power);
  return {
    delay: d / SOUND_SPEED,
    gain: p * (0.5 + 0.5 * near),
    crack: p * near * near,
    cutoff: 240 + 1500 * near,
    duration: 3.5 + (1 - near) * 3      // 遠雷滾得久:整條閃電路徑的聲音陸續到達
  };
}

/** 索具風鳴頻率 (Hz) @param {number} speed 風速 m/s @param {number} diameter 鋼索直徑 m */
export function aeolianTone(speed, diameter) {
  return (STROUHAL * speed) / diameter;
}

/** 陣風程度 0~1:0.5 = 平均風速,±3σ 到兩端 */
export function gustLevel(speed, mean, sigma) {
  if (!(sigma > 0)) return 0.5;
  return clamp01(0.5 + (speed - mean) / (6 * sigma));
}

/** 浪聲強度 0~1,依船的升沉速度 (m/s) */
export function seaLevel(heaveSpeed) {
  return clamp01(Math.abs(heaveSpeed) / 4);
}

/**
 * 進艙程度 → 外部聲音的低通截止頻率與音量、艙內聲音音量
 * 截止頻率用對數插值,聽起來才是均勻地「越來越悶」
 * @param {number} inside 0 = 室外,1 = 艙內
 */
export function cabinMix(inside) {
  const s = clamp01(inside);
  return {
    muffle: MUFFLE_OPEN * Math.pow(MUFFLE_CABIN / MUFFLE_OPEN, s),
    outside: 1 - 0.4 * s,
    inside: s
  };
}

/* 船尾翹出水面 → 螺旋槳負載變小、轉速往上衝;船尾壓深 → 稍微被拖慢(調速器再慢慢拉回) */
const ENGINE_RACE = { gain: 0.4, min: 0.97, max: 1.06 };

/** 引擎轉速倍率 @param {number} pitch 縱搖角 (rad),正 = 船頭抬起 */
export function engineRate(pitch) {
  return Math.min(ENGINE_RACE.max, Math.max(ENGINE_RACE.min, 1 - pitch * ENGINE_RACE.gain));
}

/**
 * 遲滯觸發:值越過 on 觸發一次,要掉回 off 以下才重新上膛(避免一個浪觸發好幾次)
 * @returns {(value: number) => boolean}
 */
export function createThresholdTrigger({ on, off }) {
  let armed = true;
  return (value) => {
    if (armed && value > on) { armed = false; return true; }
    if (!armed && value < off) armed = true;
    return false;
  };
}

/**
 * 擺盪折返偵測:速度換號 = 船擺到最邊,結構受力最大(木頭、繩索吱嘎響的時刻)
 * 回傳這一擺的峰值速度,沒觸發回傳 0
 * @returns {(velocity: number, t: number) => number}
 */
export function createTurnTrigger({ minPeak, cooldown }) {
  let peak = 0, sign = 0, last = -Infinity;
  return (velocity, t) => {
    const s = Math.sign(velocity);
    peak = Math.max(peak, Math.abs(velocity));
    if (s === 0 || s === sign) return 0;
    const hit = sign !== 0 && peak >= minPeak && t - last >= cooldown ? peak : 0;
    sign = s; peak = Math.abs(velocity);
    if (hit) last = t;
    return hit;
  };
}
