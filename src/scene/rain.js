/* 雨 */
import * as THREE from 'three';

const RAIN_N = 600, WIND_X = -7;

export function createRain(scene) {
  const pos = new Float32Array(RAIN_N * 6);
  const sp = new Float32Array(RAIN_N);
  for (let i = 0; i < RAIN_N; i++) {
    pos[i*6]   = (Math.random()-0.5)*110;
    pos[i*6+1] = Math.random()*42;
    pos[i*6+2] = (Math.random()-0.5)*70;
    sp[i] = 26 + Math.random()*16;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const material = new THREE.LineBasicMaterial({
    color: 0x9db4cf, transparent: true, opacity: 0.28, depthWrite: false
  });
  scene.add(new THREE.LineSegments(geo, material));

  function update(dt) {
    for (let i = 0; i < RAIN_N; i++) {
      let x = pos[i*6], y = pos[i*6+1], z = pos[i*6+2];
      y -= sp[i]*dt; x += WIND_X*dt;
      if (y < -2) { y = 36 + Math.random()*8; x = (Math.random()-0.5)*110 + 20; z = (Math.random()-0.5)*70; }
      pos[i*6] = x; pos[i*6+1] = y; pos[i*6+2] = z;
      pos[i*6+3] = x + WIND_X/sp[i]*1.4; pos[i*6+4] = y + 1.4; pos[i*6+5] = z;
    }
    geo.attributes.position.needsUpdate = true;
  }

  return { update, material };
}
