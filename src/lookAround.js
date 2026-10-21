/* =========================================================
   艙內環顧:按住拖曳(滑鼠/觸控)或方向鍵轉頭
   「抓住畫面」的手感:往右拖 = 畫面跟著往右走 = 頭往左轉(同 Google 街景)
   轉頭角度疊在固定位置的視線上,放開後停在原地;換位置或離開時歸零
   ========================================================= */
import * as THREE from 'three';

const DRAG_SPEED = 0.0045;        // rad / px
const KEY_SPEED = 1.4;            // rad / s
const YAW_LIMIT = 1.5;            // 左右各約 85°
const PITCH_UP = 0.9, PITCH_DOWN = -1.15;   // 疊加後的仰角上限(約 50° 往上、65° 往下)
const SMOOTH = 12;                // 越大越跟手
const KEYS = { ArrowLeft: [1, 0], ArrowRight: [-1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };

/**
 * @param {HTMLElement} dom
 * @param {() => boolean} isActive 目前是否允許環顧(艙內固定位置或換位置途中)
 */
export function createLookAround(dom, isActive) {
  const s = { yaw: 0, pitch: 0, tYaw: 0, tPitch: 0, drag: null, keys: new Set() };
  dom.style.touchAction = 'none';                 // 觸控拖曳不要捲動頁面

  const clampTargets = () => {
    s.tYaw = THREE.MathUtils.clamp(s.tYaw, -YAW_LIMIT, YAW_LIMIT);
    s.tPitch = THREE.MathUtils.clamp(s.tPitch, PITCH_DOWN, PITCH_UP);
  };

  dom.addEventListener('pointerdown', (e) => {
    if (!isActive()) return;
    s.drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
    dom.setPointerCapture(e.pointerId);
    dom.style.cursor = 'grabbing';
  });
  dom.addEventListener('pointermove', (e) => {
    if (!s.drag || e.pointerId !== s.drag.id) return;
    s.tYaw += (e.clientX - s.drag.x) * DRAG_SPEED;
    s.tPitch += (e.clientY - s.drag.y) * DRAG_SPEED;
    s.drag.x = e.clientX; s.drag.y = e.clientY;
    clampTargets();
  });
  const endDrag = (e) => {
    if (!s.drag || e.pointerId !== s.drag.id) return;
    s.drag = null;
    dom.style.cursor = isActive() ? 'grab' : '';
  };
  dom.addEventListener('pointerup', endDrag);
  dom.addEventListener('pointercancel', endDrag);
  window.addEventListener('keydown', (e) => { if (KEYS[e.key] && isActive()) { s.keys.add(e.key); e.preventDefault(); } });
  window.addEventListener('keyup', (e) => s.keys.delete(e.key));
  window.addEventListener('blur', () => s.keys.clear());

  /** 立刻歸零(呼叫端的起點已經包含目前的轉頭角度,所以不會跳) */
  function reset() {
    s.yaw = s.pitch = s.tYaw = s.tPitch = 0;
  }

  /**
   * 把轉頭角度疊到視線上(船身座標)
   * @returns {THREE.Vector3} 新的注視點
   */
  function apply(pos, look, dt) {
    for (const k of s.keys) { s.tYaw += KEYS[k][0] * KEY_SPEED * dt; s.tPitch += KEYS[k][1] * KEY_SPEED * dt; }
    clampTargets();
    const k = 1 - Math.exp(-SMOOTH * dt);
    s.yaw += (s.tYaw - s.yaw) * k;
    s.pitch += (s.tPitch - s.pitch) * k;

    const dir = look.clone().sub(pos);
    const len = dir.length();
    const heading = Math.atan2(dir.z, dir.x) - s.yaw;
    const elev = THREE.MathUtils.clamp(Math.atan2(dir.y, Math.hypot(dir.x, dir.z)) + s.pitch, -1.35, 1.25);
    return new THREE.Vector3(Math.cos(elev) * Math.cos(heading), Math.sin(elev), Math.cos(elev) * Math.sin(heading))
      .multiplyScalar(len).add(pos);
  }

  return { apply, reset, get dragging() { return s.drag !== null; } };
}
