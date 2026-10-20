/* =========================================================
   燈塔與山崖的材質
   遠景物件霧氣減半:150m 外照真實霧濃度會整個消失,只剩燈光
   ========================================================= */
import * as THREE from 'three';

const FOG_SCALE = 0.55;

/* 把 three 內建的指數霧換成「密度 × scale」版本 */
function withFogScale(material, scale = FOG_SCALE) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uFogScale = { value: scale };
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <fog_pars_fragment>', '#include <fog_pars_fragment>\nuniform float uFogScale;')
      .replace('#include <fog_fragment>', `
        #ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogD = fogDensity * uFogScale * vFogDepth;
            float fogFactor = 1.0 - exp(-fogD * fogD);
          #else
            float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
          #endif
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
        #endif`);
  };
  material.customProgramCacheKey = () => `fogscale-${scale}`;
  return material;
}

const hdr = (hex, k) => new THREE.Color(hex).multiplyScalar(k);

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

/* 塔身:白漆 + 紅色帶 + 雨漬 + 小窗(Lathe 的 u=0 朝 +z,也就是朝鏡頭) */
function makeTowerTexture() {
  const W = 512, H = 1024;
  const [c, g] = makeCanvas(W, H);
  g.fillStyle = '#d8d4c8'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#9a2620';
  g.fillRect(0, H * (1 - 0.86), W, H * 0.16);   // 上段紅帶(塔頂下方)
  g.fillRect(0, H * (1 - 0.12), W, H * 0.12);   // 塔基紅帶
  for (let i = 0; i < 160; i++) {
    const x = Math.random() * W, len = 60 + Math.random() * 400;
    const grad = g.createLinearGradient(0, 0, 0, len);
    grad.addColorStop(0, `rgba(70,60,45,${0.06 + Math.random() * 0.12})`);
    grad.addColorStop(1, 'rgba(70,60,45,0)');
    g.fillStyle = grad;
    g.fillRect(x, Math.random() * H * 0.5, 2 + Math.random() * 5, len);
  }
  const windows = [[0.03, 0.3, false], [0.53, 0.45, false], [0.03, 0.58, true], [0.53, 0.72, false]];
  for (const [u, v, lit] of windows) {
    const x = u * W, y = (1 - v) * H;
    g.fillStyle = '#b9b4a8'; g.fillRect(x - 13, y - 26, 26, 52);
    g.fillStyle = lit ? '#e8a656' : '#0c0e11'; g.fillRect(x - 9, y - 21, 18, 42);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/* 菲涅耳透鏡牛眼面板:同心圓稜鏡環 */
function makeBullseyeTexture() {
  const S = 256;
  const [c, g] = makeCanvas(S, S);
  const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grad.addColorStop(0, '#ffffff'); grad.addColorStop(0.25, '#fff2d0'); grad.addColorStop(1, '#a86a2a');
  g.fillStyle = grad; g.fillRect(0, 0, S, S);
  g.strokeStyle = 'rgba(80,40,10,0.55)';
  for (let r = 14; r < S / 2; r += 11) {
    g.lineWidth = 2;
    g.beginPath(); g.arc(S / 2, S / 2, r, 0, Math.PI * 2); g.stroke();
  }
  g.strokeStyle = '#2a1d12'; g.lineWidth = 10;
  g.strokeRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createLighthouseMaterials() {
  const std = (opts) => withFogScale(new THREE.MeshStandardMaterial(opts));
  return {
    rock: std({ vertexColors: true, roughness: 0.62, metalness: 0.0, flatShading: true }),
    boulder: std({ color: 0x2a2c2e, roughness: 0.45, flatShading: true }),
    concrete: std({ color: 0x8d8b85, roughness: 0.85 }),
    tower: std({ map: makeTowerTexture(), roughness: 0.55 }),
    whitePaint: std({ color: 0xd2cec2, roughness: 0.5 }),
    redPaint: std({ color: 0x8a231d, roughness: 0.45, metalness: 0.1 }),
    iron: std({ color: 0x1b1d1f, roughness: 0.45, metalness: 0.7 }),
    copper: std({ color: 0x2d4a40, roughness: 0.4, metalness: 0.65 }),
    brass: std({ color: 0x9a7a3a, roughness: 0.3, metalness: 0.9 }),
    roofTile: std({ color: 0x3a1c18, roughness: 0.7 }),
    glass: withFogScale(new THREE.MeshPhysicalMaterial({
      color: 0xdfe8ee, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.18,
      side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.5
    })),
    lens: withFogScale(new THREE.MeshStandardMaterial({
      color: 0x6a5a40, emissive: 0xffd9a0, emissiveIntensity: 1.6, roughness: 0.1,
      metalness: 0.2, transparent: true, opacity: 0.9, flatShading: true
    })),
    bullseye: new THREE.MeshBasicMaterial({ map: makeBullseyeTexture(), color: hdr(0xffffff, 3), side: THREE.DoubleSide }),
    lampCore: new THREE.MeshBasicMaterial({ color: hdr(0xfff1d0, 18), fog: false }),
    windowLit: new THREE.MeshBasicMaterial({ color: hdr(0xffb060, 1.6) }),
    doorLamp: new THREE.MeshBasicMaterial({ color: hdr(0xffc070, 5), fog: false })
  };
}
