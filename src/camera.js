/* 攝影機:側面跟拍 + 手持感 */
import * as THREE from 'three';
import { ZOOM } from './cameraZoom.js';

/**
 * 外部跟拍的鏡頭位置與注視點(世界座標)
 * @param {number} zoom 鏡頭到注視點距離的倍率(滾輪控制)
 */
export function exteriorPose(t, heaveX, zoom = ZOOM.initial) {
  const look = new THREE.Vector3(1.5, 1.0 + heaveX*0.5, 0);
  const pos = new THREE.Vector3(
    6 + Math.sin(t*0.31)*0.8,
    4.6 + Math.sin(t*0.47)*0.5 + heaveX*0.25,
    17.5 + Math.sin(t*0.21)*0.6
  );
  return { pos: pos.sub(look).multiplyScalar(zoom).add(look), look };
}
