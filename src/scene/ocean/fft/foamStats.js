/* =========================================================
   白沫覆蓋率回授控制(全在 GPU)
   每 0.25 秒:白沫貼圖 → 64² 統計圖 → 1×1 控制貼圖(門檻、平滑覆蓋率)
   白沫 pass 直接讀控制貼圖,讓白沫面積貼近 Monahan 經驗值
   不讀回 CPU:Chrome 的 GPU 在另一個行程,任何讀回(含 PBO + fence)都要等它把佇列消化完,
   GPU 忙時實測會卡 30–200 ms
   ========================================================= */
import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { fullscreenVertex, foamStatsFragment, foamControlFragment } from './fftShaders.js';
import { whitecapCoverage, FOAM_CONTROL } from '../../../physics/whitecap.js';

const CELLS = 64;
const FFT_N = 256;
const INTERVAL = 0.25;   // s

function floatTarget(size) {
  return new THREE.WebGLRenderTarget(size, size, {
    type: THREE.FloatType, format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
    depthBuffer: false, generateMipmaps: false
  });
}

function passMaterial(fragmentShader, uniforms, defines) {
  return new THREE.ShaderMaterial({
    vertexShader: fullscreenVertex, fragmentShader, uniforms, defines,
    depthTest: false, depthWrite: false
  });
}

/**
 * @param {THREE.WebGLRenderer} renderer
 * @param {{ windSpeed: number, foamThreshold: number, cascadeSizes: number[] }} opts
 */
export function createFoamStats(renderer, { windSpeed, foamThreshold, cascadeSizes }) {
  const target = whitecapCoverage(windSpeed);
  const statsTarget = floatTarget(CELLS);
  const control = [floatTarget(1), floatTarget(1)];
  let controlIndex = 0;

  const statsUniforms = {
    uFoam0: { value: null }, uFoam1: { value: null },
    uRatio: { value: cascadeSizes[0] / cascadeSizes[1] },
    uCells: { value: CELLS }
  };
  const controlUniforms = {
    uStats: { value: statsTarget.texture }, uPrev: { value: null },
    uInit: { value: 1 }, uInitThreshold: { value: foamThreshold }, uTarget: { value: target },
    uGain: { value: new THREE.Vector4(FOAM_CONTROL.gain, FOAM_CONTROL.smoothing, FOAM_CONTROL.min, FOAM_CONTROL.max) }
  };
  const statsMat = passMaterial(foamStatsFragment, statsUniforms, { TEXELS: FFT_N / CELLS });
  const controlMat = passMaterial(foamControlFragment, controlUniforms, { CELLS });
  const quad = new FullScreenQuad();

  function draw(material, renderTarget) {
    quad.material = material;
    renderer.setRenderTarget(renderTarget);
    quad.render(renderer);
  }

  function step() {
    controlUniforms.uPrev.value = control[controlIndex].texture;
    controlIndex = 1 - controlIndex;
    draw(controlMat, control[controlIndex]);
  }

  // 第一次:寫入起始門檻
  const prevTarget = renderer.getRenderTarget();
  step();
  controlUniforms.uInit.value = 0;
  renderer.setRenderTarget(prevTarget);

  let elapsed = 0;

  function update(dt, foamTextures) {
    elapsed += dt;
    if (elapsed < INTERVAL || !foamTextures[0] || !foamTextures[1]) return;
    elapsed = 0;
    statsUniforms.uFoam0.value = foamTextures[0];
    statsUniforms.uFoam1.value = foamTextures[1];
    const prev = renderer.getRenderTarget();
    draw(statsMat, statsTarget);
    step();
    renderer.setRenderTarget(prev);
  }

  const texture = () => control[controlIndex].texture;

  /* 除錯用:同步讀回 1×1 控制值(會卡一下,只在手動呼叫時) */
  function info() {
    const px = new Float32Array(4);
    renderer.readRenderTargetPixels(control[controlIndex], 0, 0, 1, 1, px);
    return { target, threshold: px[0], coverage: px[1], measured: px[2], residual: px[3] };
  }

  return { update, texture, info };
}
