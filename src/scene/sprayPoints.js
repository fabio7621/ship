/* =========================================================
   水花/水霧共用的點精靈:依距離縮放、截斷過大的點、閃電打亮、指數平方霧
   - createSprayPoints:CPU 模擬的粒子(船頭水花 spray.js)
   - SPRITE_PARS + createSpriteMaterial:GPU 自己算位置的粒子(浪峰水霧 spindrift.js)
   ========================================================= */
import * as THREE from 'three';
import { NO_REFLECTION_LAYER } from './layers.js';

/* vertex shader 用:算好世界座標、尺寸、透明度後呼叫 projectSprite */
export const SPRITE_PARS = /* glsl */`
  uniform float uScale;
  uniform float uMaxPx;
  uniform float uFogDensity;
  varying float vAlpha;
  void projectSprite(vec3 world, float size, float alpha) {
    vec4 mv = viewMatrix * vec4(world, 1.0);
    float depth = max(-mv.z, 0.1);
    float px = size * uScale / depth;
    gl_PointSize = min(px, uMaxPx);
    // 被截斷的大顆水霧把透明度按面積補回,避免靠近鏡頭時一大片白
    float fogT = uFogDensity * depth;
    vAlpha = alpha * min(1.0, uMaxPx * uMaxPx / max(px * px, 1.0) * 4.0) * exp(-fogT * fogT);
    gl_Position = projectionMatrix * mv;
  }
  void hideSprite() {
    gl_PointSize = 0.0;
    vAlpha = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`;

const cpuVertexShader = /* glsl */`
  attribute float aSize;
  attribute float aAlpha;
  ${SPRITE_PARS}
  void main() {
    projectSprite(position, aSize, aAlpha);
  }
`;

const fragmentShader = /* glsl */`
  uniform vec3 uColor;
  uniform float uFlash;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vAlpha;
    if (a < 0.002) discard;
    gl_FragColor = vec4(uColor * (1.0 + uFlash * 4.0), a);
  }
`;

/**
 * @param {string} vertexShader 需包含 SPRITE_PARS
 * @param {{ color: THREE.Color, fogDensity: number, uniforms?: object }} opts
 */
export function createSpriteMaterial(vertexShader, { color, fogDensity, uniforms = {} }) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uScale: { value: 600 },
      uMaxPx: { value: 96 },
      uFogDensity: { value: fogDensity },
      uColor: { value: color.clone() },
      uFlash: { value: 0 },
      ...uniforms
    },
    vertexShader, fragmentShader,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  });
}

/* 世界尺寸 1m、距離 1m 的點在螢幕上的像素數 */
export function setSpriteSize(material, heightPx, fovDeg) {
  material.uniforms.uScale.value = heightPx / (2 * Math.tan(THREE.MathUtils.degToRad(fovDeg) / 2));
  material.uniforms.uMaxPx.value = heightPx * 0.07;
}

/** 加進場景:不剔除(位置在 shader/每幀更新)、不進水面反射(省一半填充率) */
export function addSprites(scene, geometry, material) {
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  points.layers.set(NO_REFLECTION_LAYER);
  scene.add(points);
  return points;
}

/**
 * @param {THREE.Scene} scene
 * @param {number} max 粒子上限
 * @param {{ color: THREE.Color, fogDensity: number }} opts
 */
export function createSprayPoints(scene, max, { color, fogDensity }) {
  const pos = new Float32Array(max * 3).fill(-999);
  const size = new Float32Array(max);
  const alpha = new Float32Array(max);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
  const material = createSpriteMaterial(cpuVertexShader, { color, fogDensity });
  addSprites(scene, geo, material);

  function commit(flash) {
    material.uniforms.uFlash.value = flash;
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aSize.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;
  }

  const setSize = (heightPx, fovDeg) => setSpriteSize(material, heightPx, fovDeg);

  return { pos, size, alpha, commit, setSize };
}
