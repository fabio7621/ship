/* =========================================================
   暴風雨天空:流動的厚雲、雲隙透出的月亮、閃電在雲層內部打亮
   海面的質感大多來自「反射了什麼」,天空不能只是一個純色背景
   ========================================================= */
import * as THREE from 'three';
import { NOISE_GLSL } from './glsl/noise.js';

const SKY_RADIUS = 450;

const vertexShader = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;   // 永遠在最遠處,不受鏡面相機的斜投影裁切影響
  }
`;

const fragmentShader = /* glsl */`
  uniform float uTime;
  uniform float uFlash;
  uniform vec3 uMoonDir;
  uniform vec3 uFlashDir;
  uniform vec3 uFogColor;
  varying vec3 vDir;
  ${NOISE_GLSL}

  void main() {
    vec3 d = normalize(vDir);
    float el = d.y;

    // 雲層投影到天幕平面,越靠近地平線越壓縮(透視感)
    vec2 uv = d.xz / (max(el, 0.0) + 0.09);
    vec2 drift = vec2(-uTime * 0.018, uTime * 0.005);
    vec2 q = uv * 0.42 + drift;
    float warp = fbm4(q * 0.8 + uTime * 0.008);
    float c = fbm6(q + vec2(warp * 1.7, -warp * 1.2));
    float dens = smoothstep(0.38, 0.72, c);

    // 月亮與光暈
    float md = max(dot(d, uMoonDir), 0.0);
    float disk = smoothstep(0.99950, 0.99972, md);
    float halo = pow(md, 1200.0) * 1.5 + pow(md, 90.0) * 0.18 + pow(md, 10.0) * 0.035;
    vec3 moonCol = vec3(0.72, 0.80, 0.95);

    // 雲隙:深藍夜空 + 月亮;雲:背光,邊緣(較薄處)被月光鑲銀邊
    vec3 gap = vec3(0.0018, 0.0026, 0.0048) + moonCol * (disk * 4.0 + halo);
    float rim = dens * (1.0 - dens) * 4.0;
    vec3 cloud = vec3(0.0045, 0.0060, 0.0090)
               + moonCol * (pow(md, 7.0) * 0.045 + rim * pow(md, 24.0) * 0.16 + halo * 0.25);
    vec3 col = mix(gap, cloud, dens * 0.94);

    // 閃電:照亮雲層內部,雲越厚散射越強
    float fd = max(dot(d, uFlashDir), 0.0);
    col += vec3(0.55, 0.62, 0.85) * uFlash * (pow(fd, 7.0) * 2.2 + 0.1) * (0.35 + 0.65 * dens);

    // 地平線融進霧色(海面遠處同一個霧色,接縫才看不出來)
    col = mix(uFogColor, col, smoothstep(-0.02, 0.24, el));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createSky(scene, { moonDir }) {
  const material = new THREE.ShaderMaterial({
    name: 'StormSky',
    uniforms: {
      uTime: { value: 0 },
      uFlash: { value: 0 },
      uMoonDir: { value: moonDir.clone() },
      uFlashDir: { value: new THREE.Vector3(0, 0.5, -1).normalize() },
      uFogColor: { value: scene.fog.color }   // 直接引用霧色,閃電改霧色時天空同步
    },
    vertexShader,
    fragmentShader,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(SKY_RADIUS, 48, 24), material);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1;
  scene.add(mesh);

  function update(t, flash, flashDir) {
    material.uniforms.uTime.value = t;
    material.uniforms.uFlash.value = flash;
    material.uniforms.uFlashDir.value.copy(flashDir);
  }

  return { mesh, material, update };
}
