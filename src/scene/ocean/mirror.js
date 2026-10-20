/* =========================================================
   平面鏡反射(改寫自官方 Water 的 onBeforeRender)
   - 鏡面固定為世界 y = 0、法線朝上
   - HalfFloat 渲染目標:夜景暗部在 8-bit 線性空間會嚴重色階斷層
   ========================================================= */
import * as THREE from 'three';

export function createMirror(mesh, { resolutionScale = 0.5, clipBias = 0.0 } = {}) {
  const renderTarget = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  const textureMatrix = new THREE.Matrix4();
  const mirrorCamera = new THREE.PerspectiveCamera();
  const eye = new THREE.Vector3();

  const normal = new THREE.Vector3(0, 1, 0);
  const mirrorPos = new THREE.Vector3(0, 0, 0);
  const mirrorPlane = new THREE.Plane();
  const cameraPos = new THREE.Vector3();
  const rotation = new THREE.Matrix4();
  const lookAt = new THREE.Vector3();
  const view = new THREE.Vector3();
  const target = new THREE.Vector3();
  const clipPlane = new THREE.Vector4();
  const q = new THREE.Vector4();

  function placeMirrorCamera(camera) {
    cameraPos.setFromMatrixPosition(camera.matrixWorld);
    view.subVectors(mirrorPos, cameraPos);
    if (view.dot(normal) > 0) return false;   // 相機在水面下:不需反射

    view.reflect(normal).negate().add(mirrorPos);
    rotation.extractRotation(camera.matrixWorld);
    lookAt.set(0, 0, -1).applyMatrix4(rotation).add(cameraPos);
    target.subVectors(mirrorPos, lookAt).reflect(normal).negate().add(mirrorPos);

    mirrorCamera.position.copy(view);
    mirrorCamera.up.set(0, 1, 0).applyMatrix4(rotation).reflect(normal);
    mirrorCamera.lookAt(target);
    mirrorCamera.far = camera.far;
    mirrorCamera.updateMatrixWorld();
    mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);

    textureMatrix.set(
      0.5, 0.0, 0.0, 0.5,
      0.0, 0.5, 0.0, 0.5,
      0.0, 0.0, 0.5, 0.5,
      0.0, 0.0, 0.0, 1.0
    );
    textureMatrix.multiply(mirrorCamera.projectionMatrix);
    textureMatrix.multiply(mirrorCamera.matrixWorldInverse);
    applyObliqueClip();
    eye.copy(cameraPos);
    return true;
  }

  // 斜投影近裁切面:只留下水面以上的東西(Lengyel, Oblique View Frustum)
  function applyObliqueClip() {
    mirrorPlane.setFromNormalAndCoplanarPoint(normal, mirrorPos);
    mirrorPlane.applyMatrix4(mirrorCamera.matrixWorldInverse);
    clipPlane.set(mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant);
    const p = mirrorCamera.projectionMatrix.elements;
    q.x = (Math.sign(clipPlane.x) + p[8]) / p[0];
    q.y = (Math.sign(clipPlane.y) + p[9]) / p[5];
    q.z = -1.0;
    q.w = (1.0 + p[10]) / p[14];
    clipPlane.multiplyScalar(2.0 / clipPlane.dot(q));
    p[2] = clipPlane.x;
    p[6] = clipPlane.y;
    p[10] = clipPlane.z + 1.0 - clipBias;
    p[14] = clipPlane.w;
  }

  mesh.onBeforeRender = (renderer, scene, camera) => {
    if (!placeMirrorCamera(camera)) return;
    const prevTarget = renderer.getRenderTarget();
    const prevXr = renderer.xr.enabled;
    const prevShadow = renderer.shadowMap.autoUpdate;

    mesh.visible = false;
    renderer.xr.enabled = false;
    renderer.shadowMap.autoUpdate = false;
    renderer.setRenderTarget(renderTarget);
    renderer.state.buffers.depth.setMask(true);
    if (renderer.autoClear === false) renderer.clear();
    renderer.render(scene, mirrorCamera);

    mesh.visible = true;
    renderer.xr.enabled = prevXr;
    renderer.shadowMap.autoUpdate = prevShadow;
    renderer.setRenderTarget(prevTarget);
    if (camera.viewport !== undefined) renderer.state.viewport(camera.viewport);
  };

  function setSize(width, height) {
    renderTarget.setSize(
      Math.max(1, Math.round(width * resolutionScale)),
      Math.max(1, Math.round(height * resolutionScale))
    );
  }

  return { texture: renderTarget.texture, textureMatrix, eye, setSize };
}
