/* 攝影機:側面跟拍 + 手持感 */
export function updateCamera(camera, t, heaveX) {
  camera.position.set(
    6 + Math.sin(t*0.31)*0.8,
    4.6 + Math.sin(t*0.47)*0.5 + heaveX*0.25,
    17.5 + Math.sin(t*0.21)*0.6
  );
  camera.lookAt(1.5, 1.0 + heaveX*0.5, 0);
}
