/* =========================================================
   旋轉光束 + 掃到鏡頭時的眩光
   - 光束:錐體,沿長度衰減、邊緣柔化(視角越正對中心越亮),加法混合
   - 眩光:光束方向與「燈 → 鏡頭」夾角越小越亮,模擬每次掃過時的一閃
   兩者都放在 NO_REFLECTION_LAYER:水面反射一道倒立光柱看起來很假
   ========================================================= */
import * as THREE from 'three';
import { NO_REFLECTION_LAYER } from '../layers.js';

const BEAM_LENGTH = 170;
const BEAM_R0 = 0.35;
const BEAM_R1 = 11;
const BEAM_TILT = -0.012;   // 略往下,打向海平面

const beamVertex = /* glsl */`
  varying float vAlong;
  varying vec3 vNormalW;
  varying vec3 vViewW;
  void main() {
    vAlong = 1.0 - uv.y;                       // 0 = 燈、1 = 光束末端
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewW = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const beamFragment = /* glsl */`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying float vAlong;
  varying vec3 vNormalW;
  varying vec3 vViewW;
  void main() {
    float facing = abs(dot(normalize(vNormalW), normalize(vViewW)));
    float edge = pow(facing, 2.2);
    float fall = pow(1.0 - vAlong, 2.4) * smoothstep(0.0, 0.03, vAlong);
    float a = uIntensity * edge * fall;
    gl_FragColor = vec4(uColor * a, 1.0);
  }
`;

function makeGlareTexture() {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grad.addColorStop(0, 'rgba(255,248,230,1)');
  grad.addColorStop(0.08, 'rgba(255,236,200,0.85)');
  grad.addColorStop(0.3, 'rgba(255,220,170,0.18)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, S, S);
  // 星芒:鏡頭光圈造成的十字光
  g.globalCompositeOperation = 'lighter';
  for (const [w, h] of [[S, 3], [3, S]]) {
    const lg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    lg.addColorStop(0, 'rgba(255,240,210,0.5)');
    lg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = lg;
    g.fillRect((S - w) / 2, (S - h) / 2, w, h);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function beamCone(material, side) {
  const geo = new THREE.CylinderGeometry(BEAM_R0, BEAM_R1, BEAM_LENGTH, 32, 1, true);
  geo.translate(0, -BEAM_LENGTH / 2, 0);   // 窄端移到原點
  geo.rotateZ(Math.PI / 2);                 // 沿 +x 延伸
  const m = new THREE.Mesh(geo, material);
  // Euler XYZ 先轉 Z 再轉 Y:先往下傾,再翻到另一側,兩道光束都朝下
  m.rotation.set(0, side > 0 ? 0 : Math.PI, BEAM_TILT);
  m.layers.set(NO_REFLECTION_LAYER);
  m.frustumCulled = false;
  m.renderOrder = 2;
  return m;
}

export function buildBeams() {
  const material = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(0xfff0d0) }, uIntensity: { value: 0.11 } },
    vertexShader: beamVertex, fragmentShader: beamFragment,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide, fog: false
  });
  const group = new THREE.Group();
  group.add(beamCone(material, 1), beamCone(material, -1));

  const glare = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlareTexture(), color: new THREE.Color(0xffffff), transparent: true,
    depthWrite: false, blending: THREE.AdditiveBlending, fog: false
  }));
  glare.layers.set(NO_REFLECTION_LAYER);
  glare.renderOrder = 3;

  const _lamp = new THREE.Vector3();
  const _toCam = new THREE.Vector3();
  const _beamDir = new THREE.Vector3();

  /* 回傳 0~1:光束正對鏡頭的程度(也給海面反光用) */
  function update(camera) {
    group.getWorldPosition(_lamp);
    _toCam.subVectors(camera.position, _lamp).normalize();
    let best = 0;
    for (const side of [1, -1]) {
      _beamDir.set(side, 0, 0).transformDirection(group.matrixWorld);
      best = Math.max(best, Math.max(0, _beamDir.dot(_toCam)));
    }
    const flash = Math.pow(best, 60);
    // 往鏡頭方向挪出燈室,才不會被透鏡/窗格的深度擋住,但仍會被船身正常遮擋
    glare.position.copy(_lamp).addScaledVector(_toCam, 2.5);
    const dist = camera.position.distanceTo(_lamp);
    glare.scale.setScalar(dist * (0.03 + 0.22 * flash));
    glare.material.opacity = 0.35 + 0.65 * flash;
    return flash;
  }

  return { group, glare, update };
}
