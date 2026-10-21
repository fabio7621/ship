/* 攝影機:側面跟拍 + 手持感 */
import * as THREE from 'three';

/** 外部跟拍的鏡頭位置與注視點(世界座標) */
export function exteriorPose(t, heaveX) {
  return {
    pos: new THREE.Vector3(
      6 + Math.sin(t*0.31)*0.8,
      4.6 + Math.sin(t*0.47)*0.5 + heaveX*0.25,
      17.5 + Math.sin(t*0.21)*0.6
    ),
    look: new THREE.Vector3(1.5, 1.0 + heaveX*0.5, 0)
  };
}
