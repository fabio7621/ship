/* =========================================================
   外部鏡頭縮放:滾輪 / 觸控板捏合把鏡頭沿視線推近拉遠
   zoom = 鏡頭到注視點距離的倍率(1 = 原本約 18m 的構圖)
   指數縮放:每一格滾輪改變同樣的「比例」,近距離時不會一下衝過頭
   ========================================================= */
export const ZOOM = {
  initial: 0.72,        // 預設比原本近一些(約 13m)
  min: 0.3,             // 約 5.5m:整艘船仍在畫面內
  max: 1.4,             // 約 26m
  sensitivity: 0.0015,  // 每像素滾動量的 log 倍率,一格滾輪(100px)約 16%
  pinchBoost: 6,        // 觸控板捏合的 deltaY 很小,放大一些
  smooth: 8,            // 1/s,越大越跟手
  seaClearance: 1.2     // m,鏡頭至少高出腳下海面這麼多
};

const LINE_PX = 16;

/** 把 WheelEvent 的 deltaY 換成像素(deltaMode 1 = 行、2 = 頁) */
export function wheelDeltaPx({ deltaY, deltaMode }, pagePx = 800) {
  if (deltaMode === 1) return deltaY * LINE_PX;
  if (deltaMode === 2) return deltaY * pagePx;
  return deltaY;
}

/** 新的目標倍率:往前滾(deltaY < 0)拉近 */
export function wheelZoomTarget(zoom, deltaPx) {
  const z = zoom * Math.exp(deltaPx * ZOOM.sensitivity);
  return Math.min(ZOOM.max, Math.max(ZOOM.min, z));
}

/** 鏡頭高度不低於海面 + 間隙(拉近時鏡頭會變低,大浪可能淹過) */
export function liftAboveSea(y, seaY) {
  return Math.max(y, seaY + ZOOM.seaClearance);
}

/**
 * @param {HTMLElement} dom
 * @param {() => boolean} isActive 只有外部鏡頭時才接收滾輪
 */
export function createWheelZoom(dom, isActive) {
  const s = { value: ZOOM.initial, target: ZOOM.initial };
  dom.addEventListener('wheel', (e) => {
    if (!isActive()) return;
    e.preventDefault();   // 觸控板捏合會帶 ctrlKey,不攔的話整頁會被瀏覽器放大
    const px = wheelDeltaPx(e, innerHeight) * (e.ctrlKey ? ZOOM.pinchBoost : 1);
    s.target = wheelZoomTarget(s.target, px);
  }, { passive: false });

  return {
    get value() { return s.value; },
    update(dt) {
      s.value += (s.target - s.value) * (1 - Math.exp(-ZOOM.smooth * dt));
      return s.value;
    }
  };
}
