/* =========================================================
   GPU FFT 海洋(3 個 cascade,每個 256²)
   每幀每個 cascade:2 次頻譜 + 2×16 次 butterfly + 3 次整理 ≈ 37 個 256² 全螢幕 pass
   中間結果用 Float 精度;輸出貼圖用 HalfFloat + mipmap(遠處自動平均,不閃爍)
   ========================================================= */
import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { buildInitialSpectrum } from '../../../physics/spectrum.js';
import { createSurfaceSampler } from '../../../physics/fftSampler.js';
import {
  fullscreenVertex, spectrumFragment, butterflyFragment,
  displacementFragment, derivativeFragment, foamFragment
} from './fftShaders.js';

const N = 256;
const LOG2_N = Math.log2(N);

function scratchTarget() {
  return new THREE.WebGLRenderTarget(N, N, {
    type: THREE.FloatType, format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
    depthBuffer: false, generateMipmaps: false
  });
}

function outputTarget() {
  const rt = new THREE.WebGLRenderTarget(N, N, {
    type: THREE.HalfFloatType, format: THREE.RGBAFormat,
    minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter,
    wrapS: THREE.RepeatWrapping, wrapT: THREE.RepeatWrapping,
    depthBuffer: false, generateMipmaps: true
  });
  rt.texture.anisotropy = 8;
  return rt;
}

function passMaterial(fragmentShader, uniforms, defines = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: fullscreenVertex, fragmentShader, uniforms, defines,
    depthTest: false, depthWrite: false
  });
}

function spectrumTexture(data) {
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}

/**
 * @param {THREE.WebGLRenderer} renderer
 * @param {{ cascades: Array<{size:number,kMin:number,kMax:number,seed:number,foam:boolean}>,
 *           windSpeed:number, fetch:number, windAngle:number, spread:number, scale:number,
 *           choppiness:number, foamDecay:number, residualDecay:number,
 *           foamDrift:number }} opts
 */
export function createFFTOcean(renderer, opts) {
  const quad = new FullScreenQuad();
  const scratch = { a: [scratchTarget(), scratchTarget()], b: [scratchTarget(), scratchTarget()] };

  const specUniforms = { uH0: { value: null }, uTime: { value: 0 }, uSize: { value: 1 }, uN: { value: N } };
  const specA = passMaterial(spectrumFragment, specUniforms, { PASS_A: '' });
  const specB = passMaterial(spectrumFragment, specUniforms);
  const bfUniforms = { uInput: { value: null }, uN: { value: N }, uSubSize: { value: 2 } };
  const bfH = passMaterial(butterflyFragment, bfUniforms, { HORIZONTAL: '' });
  const bfV = passMaterial(butterflyFragment, bfUniforms);
  const outUniforms = { uA: { value: null }, uB: { value: null }, uChop: { value: opts.choppiness } };
  const dispMat = passMaterial(displacementFragment, outUniforms);
  const derivMat = passMaterial(derivativeFragment, outUniforms);
  const foamUniforms = {
    uPrev: { value: null }, uDisp: { value: null }, uDeriv: { value: null },
    uDecay: { value: new THREE.Vector2(1, 1) }, uControl: { value: null },
    uAdvect: { value: new THREE.Vector2() }
  };
  const windDir = new THREE.Vector2(Math.cos(opts.windAngle), Math.sin(opts.windAngle));
  const foamMat = passMaterial(foamFragment, foamUniforms);

  const cascades = opts.cascades.map((spec) => {
    const data = buildInitialSpectrum({ ...opts, ...spec, N });
    return {
      size: spec.size,
      data,
      h0: spectrumTexture(data),
      disp: outputTarget(),
      deriv: outputTarget(),
      foam: spec.foam ? [outputTarget(), outputTarget()] : null,
      foamIndex: 0
    };
  });

  function draw(material, target) {
    quad.material = material;
    renderer.setRenderTarget(target);
    quad.render(renderer);
  }

  /* 原地逆 FFT:2·log2N 次(偶數)ping-pong 後結果回到 pair[0] */
  function inverseFFT(pair) {
    let src = 0;
    for (const material of [bfH, bfV]) {
      for (let stage = 1; stage <= LOG2_N; stage++) {
        bfUniforms.uInput.value = pair[src].texture;
        bfUniforms.uSubSize.value = 2 ** stage;
        draw(material, pair[1 - src]);
        src = 1 - src;
      }
    }
  }

  function updateCascade(c, t, dt) {
    specUniforms.uH0.value = c.h0;
    specUniforms.uTime.value = t;
    specUniforms.uSize.value = c.size;
    draw(specA, scratch.a[0]);
    draw(specB, scratch.b[0]);
    inverseFFT(scratch.a);
    inverseFFT(scratch.b);

    outUniforms.uA.value = scratch.a[0].texture;
    outUniforms.uB.value = scratch.b[0].texture;
    draw(dispMat, c.disp);
    draw(derivMat, c.deriv);

    if (c.foam) {
      const prev = c.foam[c.foamIndex];
      c.foamIndex = 1 - c.foamIndex;
      foamUniforms.uPrev.value = prev.texture;
      foamUniforms.uDisp.value = c.disp.texture;
      foamUniforms.uDeriv.value = c.deriv.texture;
      foamUniforms.uAdvect.value.copy(windDir).multiplyScalar((opts.foamDrift * dt) / c.size);
      draw(foamMat, c.foam[c.foamIndex]);
    }
  }

  function update(t, dt) {
    const prevTarget = renderer.getRenderTarget();
    foamUniforms.uDecay.value.set(Math.exp(-dt * opts.foamDecay), Math.exp(-dt * opts.residualDecay));
    for (const c of cascades) updateCascade(c, t, dt);
    renderer.setRenderTarget(prevTarget);
  }

  const textures = () => cascades.map((c) => ({
    size: c.size,
    disp: c.disp.texture,
    deriv: c.deriv.texture,
    foam: c.foam ? c.foam[c.foamIndex].texture : null
  }));

  /* CPU 鏡像:只鏡像最大的 cascade,且只取波長 > minWavelength 的成分 */
  const createSampler = (minWavelength) => createSurfaceSampler({
    data: cascades[0].data, N, size: cascades[0].size,
    kMax: (Math.PI * 2) / minWavelength, choppiness: opts.choppiness
  });

  /* 1×1 門檻貼圖(foamStats 在 GPU 上依實測覆蓋率調整);門檻越高 → 越多地方算破浪 */
  const setFoamControl = (texture) => { foamUniforms.uControl.value = texture; };

  return { update, textures, createSampler, setFoamControl };
}
