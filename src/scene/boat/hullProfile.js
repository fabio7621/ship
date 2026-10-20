/* =========================================================
   船體線型(Lines plan):所有船體尺寸的唯一來源
   u:船尾 0 → 船頭 1;h:龍骨 0 → 舷牆頂 1
   船身座標:+x 船頭、+y 上、+z 右舷(鏡頭看到的那一側)
   ========================================================= */
export const BEAM = 1.78;          // 最大半寬
export const WATERLINE_Y = -0.15;  // 設計水線(對應 floater 的吃水設定)
export const CHINE_Y = -0.02;      // 舭部轉為舷側的高度
export const S_BILGE = 0.6;        // 斷面參數中屬於船底圓舭的比例
export const V_RANGE = { min: -1.3, max: 2.4 }; // 船殼貼圖的垂直對應範圍

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/* 水線附近的半寬:船尾方艉、船中最寬、船頭收尖 */
export function halfBeam(u) {
  const uMax = 0.42;
  if (u < uMax) return BEAM * (0.78 + 0.22 * Math.sin((u / uMax) * Math.PI / 2));
  const t = (u - uMax) / (1 - uMax);
  return Math.max(0.015, BEAM * (1 - t ** 2.2));
}

/* 舷牆頂高度(舷弧):船中最低,船頭高高翹起擋浪 */
export function railY(u) {
  if (u < 0.38) return 1.18 + 0.22 * (1 - u / 0.38) ** 2;
  const t = (u - 0.38) / 0.62;
  return 1.18 + 1.05 * t * t;
}

/* 龍骨底:船頭前腳往上收、船尾略收 */
export function keelY(u) {
  return -1.25 + 0.35 * smooth(0.18, 0, u) + 1.0 * smooth(0.72, 1.0, u) ** 1.6;
}

export function bulwarkH(u) {
  return 0.5 + 0.12 * smooth(0.6, 1, u);
}

export function deckY(u) {
  return railY(u) - bulwarkH(u);
}

/* 舷側外飄:船頭甲板比水線寬很多(典型北海拖網漁船) */
export function flare(u) {
  return 0.06 + 0.5 * smooth(0.55, 1, u);
}

/* 斷面超橢圓指數:船中飽滿圓舭、船頭 V 形 */
export function sectionExp(u) {
  if (u < 0.5) return 2.6 + 0.6 * (u / 0.5);
  return 3.2 - 1.9 * smooth(0.5, 1, u);
}

/* 艏柱前傾、艉板略後傾:同一個 u 在不同高度的 x 不同 */
function stationEnds(h) {
  return [-5.05 - 0.22 * h, 5.35 + 1.0 * Math.pow(Math.max(h, 0), 0.85)];
}

export function stationX(u, h) {
  const [xs, xb] = stationEnds(h);
  return xs + (xb - xs) * u;
}

export function heightParam(u, y) {
  return (y - keelY(u)) / (railY(u) - keelY(u));
}

/* 斷面上一點(右舷,z ≥ 0)。s:龍骨 0 → 舷牆頂 1 */
export function sidePoint(u, s) {
  const B = halfBeam(u), K = keelY(u), R = railY(u), n = sectionExp(u);
  let y, z;
  if (s < S_BILGE) {
    const th = (1 - s / S_BILGE) * Math.PI / 2;
    z = B * Math.pow(Math.max(Math.cos(th), 0), 2 / n);
    y = CHINE_Y - (CHINE_Y - K) * Math.pow(Math.max(Math.sin(th), 0), 2 / n);
  } else {
    const k = (s - S_BILGE) / (1 - S_BILGE);
    y = CHINE_Y + (R - CHINE_Y) * k;
    z = B * (1 + flare(u) * k);
  }
  return { x: stationX(u, heightParam(u, y)), y, z };
}

/* 舷側(舭部以上)在高度 y 的半寬 */
export function halfWidthAt(u, y) {
  const k = (y - CHINE_Y) / (railY(u) - CHINE_Y);
  return halfBeam(u) * (1 + flare(u) * k);
}

/* 反求 u:給定 x 與高度函式 yOf(u)(固定高度或沿甲板),固定點迭代
   回傳值可能 < 0 或 > 1,代表該點在船艉之後 / 船艏之前 */
export function uAtX(x, yOf) {
  let u = 0.5;
  for (let i = 0; i < 6; i++) {
    const uc = Math.min(1, Math.max(0, u));
    const [xs, xb] = stationEnds(heightParam(uc, yOf(uc)));
    u = (x - xs) / (xb - xs);
  }
  return u;
}

export function uAtDeckX(x) {
  return Math.min(1, Math.max(0, uAtX(x, deckY)));
}

/* 甲板上某個 x 的資訊:甲板高度、舷牆內側半寬、舷牆頂高度 */
export function deckAt(x) {
  const u = uAtDeckX(x);
  const y = deckY(u);
  return { u, y, rail: railY(u), halfWidth: halfWidthAt(u, y), railHalfWidth: halfWidthAt(u, railY(u)) };
}
