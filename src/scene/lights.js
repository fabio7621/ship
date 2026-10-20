import * as THREE from 'three';

// 低角度月亮(約 11° 仰角),在畫面左上,海面才會拉出一道朝向鏡頭的月光帶
export const MOON_DIR = new THREE.Vector3(-0.42, 0.19, -0.89).normalize();
export const MOON_COLOR = new THREE.Color(0x7e93b8);
const MOON_INTENSITY = 0.6;

export function createLights(scene) {
  const moonLight = new THREE.DirectionalLight(MOON_COLOR, MOON_INTENSITY);
  moonLight.position.copy(MOON_DIR).multiplyScalar(100);
  scene.add(moonLight);
  scene.add(new THREE.HemisphereLight(0x22304c, 0x020507, 0.9));
  const boltLight = new THREE.DirectionalLight(0xbcd0ff, 0);
  boltLight.position.set(10, 50, -20);
  scene.add(boltLight);
  return {
    moonLight, boltLight,
    moonDir: MOON_DIR,
    moonColor: MOON_COLOR.clone().multiplyScalar(MOON_INTENSITY)
  };
}
