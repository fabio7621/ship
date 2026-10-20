/* =========================================================
   海面:Gerstner 長湧浪 + GPU FFT 頻譜海洋 + 平面鏡即時反射
   網格中央密、外圍疏(近處 ~0.2m 一格,遠處交給霧)
   ========================================================= */
import * as THREE from 'three';
import { AMP_SUM, WIND_ANGLE, DRIFT, seaHeightWorld } from '../../physics/waves.js';
import { createMirror } from './mirror.js';
import { createFFTOcean } from './fft/fftOcean.js';
import { createFoamStats } from './fft/foamStats.js';
import { oceanVertexShader, oceanFragmentShader, LAMP_COUNT } from './oceanShader.js';

const GRID_HALF = 260;
const GRID_SEGMENTS = 480;
const GRID_LINEAR = 0.2;            // 越小 → 中央越密
const SPOT_SPILL = 0.1;
const BUOYANCY_MIN_WAVELENGTH = 10;   // CPU 鏡像只算比這更長的 FFT 波(約等於船長)
const TAU = Math.PI * 2;

/* 頻譜參數:風速 20 m/s(8 級大風)、吹風距離 200 km
   cascade 尺寸互不整除,避免重複圖樣對齊;各自只負責一段波長
   白沫:foamThreshold 只是起始值,執行時由 foamStats 依 Monahan 覆蓋率(8 級 ≈ 10%)自動調
   - foamDecay 0.5/s:破浪白水約 1.4 秒減半
   - residualDecay 0.06/s:殘留薄沫約 12 秒減半,拉出沿風向的長條紋
   - foamDrift:表層風吹流 ≈ 3% 風速 */
const FFT_SETTINGS = {
  windSpeed: 20,
  fetch: 200_000,
  windAngle: WIND_ANGLE,
  spread: 6,
  scale: 1,
  choppiness: 0.9,
  foamThreshold: 0.85,
  foamDecay: 0.5,
  residualDecay: 0.06,
  foamDrift: 0.6,
  cascades: [
    { size: 251, kMin: TAU / 48, kMax: TAU / 6, seed: 11, scale: 0.7, foam: true },
    { size: 37.3, kMin: TAU / 6, kMax: TAU / 0.9, seed: 23, scale: 0.45, foam: true },
    { size: 7.1, kMin: TAU / 0.9, kMax: Infinity, seed: 37, scale: 0.25, foam: false }
  ]
};

function createGradedGrid(half, segments, linear) {
  const n = segments + 1;
  const remap = (s) => Math.sign(s) * (linear * Math.abs(s) + (1 - linear) * Math.abs(s) ** 3) * half;
  const positions = new Float32Array(n * n * 3);
  for (let j = 0; j < n; j++) {
    const z = remap(-1 + (2 * j) / segments);
    for (let i = 0; i < n; i++) {
      const o = (j * n + i) * 3;
      positions[o] = remap(-1 + (2 * i) / segments);
      positions[o + 2] = z;
    }
  }
  const indices = new Uint32Array(segments * segments * 6);
  let k = 0;
  for (let j = 0; j < segments; j++) {
    for (let i = 0; i < segments; i++) {
      const a = j * n + i, b = a + 1, c = a + n, d = c + 1;
      indices.set([a, c, b, b, c, d], k);
      k += 6;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  return geo;
}

export function createOcean(scene, renderer, { moonDir, moonColor, hullClip, shore }) {
  const mesh = new THREE.Mesh(createGradedGrid(GRID_HALF, GRID_SEGMENTS, GRID_LINEAR));
  mesh.frustumCulled = false;       // 頂點在 shader 裡位移,包圍球不準
  const mirror = createMirror(mesh, { resolutionScale: 0.5 });
  const fft = createFFTOcean(renderer, FFT_SETTINGS);
  const fftSampler = fft.createSampler(BUOYANCY_MIN_WAVELENGTH);
  const foamStats = createFoamStats(renderer, {
    windSpeed: FFT_SETTINGS.windSpeed,
    foamThreshold: FFT_SETTINGS.foamThreshold,
    cascadeSizes: FFT_SETTINGS.cascades.map((c) => c.size)
  });
  fft.setFoamControl(foamStats.texture());

  const uniforms = THREE.UniformsUtils.merge([
    THREE.UniformsLib.fog,
    {
      mirrorSampler: { value: null },
      textureMatrix: { value: null },
      uDisp0: { value: null }, uDisp1: { value: null }, uDisp2: { value: null },
      uDeriv0: { value: null }, uDeriv1: { value: null }, uDeriv2: { value: null },
      uFoam0: { value: null }, uFoam1: { value: null },
      uCascade: { value: new THREE.Vector3(...FFT_SETTINGS.cascades.map((c) => c.size)) },
      uDrift: { value: new THREE.Vector2() },
      uWindDir: { value: new THREE.Vector2(Math.cos(WIND_ANGLE), Math.sin(WIND_ANGLE)) },
      uTime: { value: 0 },
      uFlash: { value: 0 },
      uDistortion: { value: 2.4 },
      uAmpSum: { value: AMP_SUM + 1.2 },
      uEye: { value: null },
      uMoonDir: { value: moonDir.clone() },
      uMoonColor: { value: moonColor.clone() },
      uFlashDir: { value: new THREE.Vector3(0, 0.5, -1).normalize() },
      uDeep: { value: new THREE.Color(0x01070b) },
      uScatter: { value: new THREE.Color(0x0a3a40).multiplyScalar(0.12) },
      uFoam: { value: new THREE.Color(0xdde6ee) },
      uAmbient: { value: new THREE.Color(0x24324e).multiplyScalar(0.6) },
      uBoatPos: { value: new THREE.Vector3() },
      uBoatFwd: { value: new THREE.Vector2(1, 0) },
      uBoatInv: { value: new THREE.Matrix4() },
      uBowWave: { value: 1 },
      uHullClip: { value: null },
      uShoreMap: { value: null },
      uShoreInv: { value: new THREE.Matrix4() },
      uShoreRange: { value: new THREE.Vector4() },
      uHullRange: { value: new THREE.Vector4(hullClip.range.xMin, hullClip.range.xMax, hullClip.range.yMin, hullClip.range.yMax) },
      uLampPos: { value: Array.from({ length: LAMP_COUNT }, () => new THREE.Vector3(0, -100, 0)) },
      uLampColor: { value: Array.from({ length: LAMP_COUNT }, () => new THREE.Color(0, 0, 0)) }
    }
  ]);
  // merge 會 clone,共用物件要在 merge 之後再指定
  uniforms.mirrorSampler.value = mirror.texture;
  uniforms.textureMatrix.value = mirror.textureMatrix;
  uniforms.uEye.value = mirror.eye;
  uniforms.uHullClip.value = hullClip.texture;
  uniforms.uShoreMap.value = shore.texture;
  uniforms.uShoreInv.value.copy(shore.worldToLocal);
  uniforms.uShoreRange.value.copy(shore.range);

  mesh.material = new THREE.ShaderMaterial({
    name: 'StormOcean',
    uniforms,
    vertexShader: oceanVertexShader,
    fragmentShader: oceanFragmentShader,
    fog: true
  });
  scene.add(mesh);

  const _fwd = new THREE.Vector3();

  function bindFFTTextures() {
    fft.textures().forEach((c, i) => {
      uniforms[`uDisp${i}`].value = c.disp;
      uniforms[`uDeriv${i}`].value = c.deriv;
      if (c.foam) uniforms[`uFoam${i}`].value = c.foam;
    });
  }

  function update(t, dt, boat, lamps, flash, flashDir, bowWave) {
    fft.update(t, dt);
    bindFFTTextures();   // 白沫是 ping-pong,每幀指向最新那張
    foamStats.update(dt, [uniforms.uFoam0.value, uniforms.uFoam1.value]);
    fft.setFoamControl(foamStats.texture());   // 下一幀的白沫 pass 用最新門檻
    uniforms.uTime.value = t;
    uniforms.uDrift.value.set(DRIFT[0] * t, DRIFT[1] * t);
    uniforms.uFlash.value = flash;
    uniforms.uFlashDir.value.copy(flashDir);
    uniforms.uBoatPos.value.copy(boat.position);
    uniforms.uBoatInv.value.copy(boat.matrixWorld).invert();
    uniforms.uBowWave.value = bowWave;
    _fwd.set(1, 0, 0).applyQuaternion(boat.quaternion);
    uniforms.uBoatFwd.value.set(_fwd.x, _fwd.z).normalize();
    lamps.slice(0, LAMP_COUNT).forEach((light, i) => {
      light.getWorldPosition(uniforms.uLampPos.value[i]);
      // shader 把燈當點光源;聚光燈大部分光打在甲板上,只算一小部分溢到水面
      const spill = light.isSpotLight ? SPOT_SPILL : 1;
      uniforms.uLampColor.value[i].copy(light.color).multiplyScalar(light.intensity * spill);
    });
  }

  /* 完整海面高度(世界座標):湧浪 + FFT 長波,給浮力與水花判斷用 */
  function heightAt(x, z, t) {
    return seaHeightWorld(x, z, t) + fftSampler.heightAt(x - DRIFT[0] * t, z - DRIFT[1] * t, t);
  }

  /* 給 GPU 浪峰水霧:cascade 0 的位移與白沫貼圖(白沫是 ping-pong,每幀要重新取) */
  const surfaceTextures = () => ({
    disp0: uniforms.uDisp0.value, foam0: uniforms.uFoam0.value, size0: FFT_SETTINGS.cascades[0].size
  });

  return { mesh, update, heightAt, surfaceTextures, foamInfo: foamStats.info, setSize: mirror.setSize };
}
