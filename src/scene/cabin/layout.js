/* =========================================================
   駕駛台尺寸與窗戶位置:外觀(wheelhouse.js)與艙內(cabin/)的唯一來源
   座標為船身座標:x 往船頭、y 往上、z 往右舷
   ========================================================= */

export const LOWER = { x0: -4.25, x1: -1.3, top: 1.85, halfW: 1.2 };
export const BRIDGE = { rear: -3.55, front: -1.55, rake: 0.25, h: 1.15, halfW: 1.1, bevel: 0.04 };
export const ROOF_Y = LOWER.top + BRIDGE.h + 0.13;
export const RAKE = Math.atan(BRIDGE.rake / BRIDGE.h);
export const WALL = 0.06;                       // 駕駛台牆厚

export const WINDOW_Y = LOWER.top + 0.66;
export const FRONT_WINDOWS = { z: [-0.84, -0.42, 0, 0.42, 0.84], w: 0.36, h: 0.56 };   // h = 垂直高度
export const SIDE_WINDOWS = { x: [-3.15, -2.6, -2.05], w: 0.42, h: 0.5 };
export const REAR_WINDOWS = { z: [-0.5, 0.5], w: 0.5, h: 0.42, y: LOWER.top + 0.7 };
export const HOLE_INSET = 0.012;                // 牆上窗洞比窗片小一圈,窗片才蓋得住

/* 外殼(含原本的倒角厚度) */
export const OUTER = {
  rear: BRIDGE.rear - BRIDGE.bevel,
  halfW: BRIDGE.halfW,
  bottom: LOWER.top,
  top: LOWER.top + BRIDGE.h + BRIDGE.bevel
};

/** 前窗外傾斜面在高度 y 的 x(外表面) */
export function frontOuterX(y) {
  return BRIDGE.front + BRIDGE.rake * (y - LOWER.top) / BRIDGE.h + BRIDGE.bevel / Math.cos(RAKE);
}

/* 艙內:地板下沉到下層居住艙裡,淨高才夠站人 */
export const CABIN = {
  floor: 1.2,
  ceil: OUTER.top - WALL,
  rear: OUTER.rear + WALL,
  halfW: BRIDGE.halfW - WALL
};

/** 艙內前牆(斜面)在高度 y 的 x */
export function frontInnerX(y) {
  return frontOuterX(y) - WALL / Math.cos(RAKE);
}
