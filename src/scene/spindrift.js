/* =========================================================
   遠處浪峰水霧(spindrift):8 級風把正在破浪的浪峰削成水霧往下風吹
   全在 GPU、沒有 CPU 狀態(不讀回白沫貼圖 → 不卡頓):
   - 粒子分成一撮撮(cluster),每撮按自己的週期重生,重生時在鏡頭視野內等面積挑一個點
   - 該點那團水(波空間座標)上有破浪白水才顯示 → 水霧只出現在真的有白頭浪的浪峰
   - 位置用解析解:水平往空氣速度指數趨近,垂直有阻力 + 重力
   - 每撮前幾顆是被風拖長的淡水霧,其餘是貼著浪峰飛出的細水滴
   ========================================================= */
import * as THREE from 'three';
import { WIND_DIR, DRIFT, buildGerstnerGLSL } from '../physics/waves.js';
import { NOISE_GLSL } from './glsl/noise.js';
import { SPRITE_PARS, createSpriteMaterial, setSpriteSize, addSprites } from './sprayPoints.js';

const CLUSTER = 16;                    // 每撮幾顆
const MIST_SLOTS = 3;                  // 每撮前幾顆是水霧
const CLUSTERS = 1200;
const WIND_SPEED = 20;                 // m/s,與海面頻譜一致
const RANGE = [14, 150];               // 離鏡頭的距離 (m)
const BOAT_CLEAR = [8, 4];             // 船身附近不發射(半長、半寬)

/* 這個座標系是「跟著船」的:水以 DRIFT 往後流,空氣 = 水 + 相對水的風 */
const windLen = Math.hypot(WIND_DIR[0], WIND_DIR[1]);
const AIR_VEL = [WIND_DIR[0] / windLen * WIND_SPEED + DRIFT[0], WIND_DIR[1] / windLen * WIND_SPEED + DRIFT[1]];

const vertexShader = /* glsl */`
  #define CLUSTER ${CLUSTER}.0
  #define MIST_SLOTS ${MIST_SLOTS}.0
  attribute float aId;
  uniform float uTime;
  uniform vec3 uCamPos;
  uniform float uHeading;
  uniform float uHalfFov;
  uniform vec2 uRange;
  uniform vec3 uBoatPos;
  uniform vec2 uBoatClear;
  uniform sampler2D uFoam0;
  uniform sampler2D uDisp0;
  uniform float uSize0;
  uniform vec2 uDriftVel;
  uniform vec2 uAirVel;
  ${SPRITE_PARS}
  ${NOISE_GLSL}
  ${buildGerstnerGLSL()}

  float rnd(float a, float b) { return hash12(vec2(a * 0.618 + 3.1, b * 1.37 + 7.7)); }

  void main() {
    float cluster = floor(aId / CLUSTER);
    float slot = aId - cluster * CLUSTER;
    bool isMist = slot < MIST_SLOTS;

    // 這撮的週期與目前是第幾輪
    float period = mix(1.8, 3.0, rnd(cluster, 1.0));
    float offset = rnd(cluster, 2.0) * period;
    float cyc = floor((uTime + offset) / period);
    float tSpawn = cyc * period - offset;
    float age = uTime - tSpawn;
    float life = isMist ? mix(1.4, 2.8, rnd(aId, cyc + 3.0)) : mix(0.5, 1.1, rnd(aId, cyc + 3.0));
    life = min(life, period);
    if (age > life) { hideSprite(); return; }

    // 發射點:鏡頭水平視野內等面積隨機
    float ang = uHeading + (rnd(cluster, cyc + 11.0) * 2.0 - 1.0) * uHalfFov;
    float dist = sqrt(mix(uRange.x * uRange.x, uRange.y * uRange.y, rnd(cluster, cyc + 12.0)));
    vec2 W = uCamPos.xz + vec2(cos(ang), sin(ang)) * dist;
    vec2 q = abs(W - uBoatPos.xz);
    if (q.x < uBoatClear.x && q.y < uBoatClear.y) { hideSprite(); return; }

    // 那團水上有沒有破浪白水(白沫跟著水走,所以用發射當下的波空間座標)
    vec2 p = W - uDriftVel * tSpawn;
    float gate = smoothstep(0.5, 0.9, textureLod(uFoam0, p / uSize0, 0.0).r);
    if (gate <= 0.0) { hideSprite(); return; }

    vec3 n; float jac;
    vec3 base = vec3(W.x, 0.0, W.y) + gerstner(p, tSpawn, n, jac) + textureLod(uDisp0, p / uSize0, 0.0).xyz;
    base.xz += vec2(rnd(aId, cyc + 4.0), rnd(aId, cyc + 5.0)) * 2.0 - 1.0;
    base.y += rnd(aId, cyc + 6.0) * 0.4;

    // 解析軌跡:水平 v → 空氣速度(速率 k),垂直 dv/dt = -c·v - g
    float blow = mix(0.2, 0.5, rnd(aId, cyc + 7.0)) * (isMist ? 1.2 : 1.0);
    vec2 v0 = uAirVel * blow;
    float vy0 = mix(0.8, 2.6, rnd(aId, cyc + 8.0)) * (isMist ? 0.6 : 1.0);
    float k = isMist ? 1.4 : 0.6;
    float c = isMist ? 1.6 : 0.3;
    float g = 9.8 * (isMist ? 0.1 : 1.0);
    vec2 xz = base.xz + uAirVel * age + (v0 - uAirVel) * (1.0 - exp(-k * age)) / k;
    float y = base.y + (vy0 + g / c) * (1.0 - exp(-c * age)) / c - g / c * age;
    if (y < base.y - 1.2) { hideSprite(); return; }

    float baseAlpha = isMist ? mix(0.05, 0.1, rnd(aId, cyc + 9.0)) : mix(0.5, 0.9, rnd(aId, cyc + 9.0));
    float size = isMist ? mix(1.2, 3.0, rnd(aId, cyc + 10.0)) : mix(0.06, 0.14, rnd(aId, cyc + 10.0));
    float fadeIn = min(1.0, age * 6.0);
    float alpha = baseAlpha * gate * fadeIn * pow(max(0.0, 1.0 - age / life), 0.7);
    projectSprite(vec3(xz.x, y, xz.y), size, alpha);
  }
`;

/**
 * @param {THREE.Scene} scene
 * @param {{ fogDensity: number,
 *           surfaceTextures: () => { disp0: THREE.Texture, foam0: THREE.Texture, size0: number } }} opts
 */
export function createSpindrift(scene, { fogDensity, surfaceTextures }) {
  const count = CLUSTERS * CLUSTER;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute('aId', new THREE.BufferAttribute(Float32Array.from({ length: count }, (_, i) => i), 1));

  const material = createSpriteMaterial(vertexShader, {
    color: new THREE.Color(0x9fb0c0).multiplyScalar(0.45),
    fogDensity,
    uniforms: {
      uTime: { value: 0 },
      uCamPos: { value: new THREE.Vector3() },
      uHeading: { value: 0 },
      uHalfFov: { value: 1 },
      uRange: { value: new THREE.Vector2(...RANGE) },
      uBoatPos: { value: new THREE.Vector3() },
      uBoatClear: { value: new THREE.Vector2(...BOAT_CLEAR) },
      uFoam0: { value: null },
      uDisp0: { value: null },
      uSize0: { value: 1 },
      uDriftVel: { value: new THREE.Vector2(...DRIFT) },
      uAirVel: { value: new THREE.Vector2(...AIR_VEL) }
    }
  });
  addSprites(scene, geo, material);

  const u = material.uniforms;
  const _fwd = new THREE.Vector3();

  function update(t, camera, boat, flash) {
    const { disp0, foam0, size0 } = surfaceTextures();
    u.uFoam0.value = foam0;
    u.uDisp0.value = disp0;
    u.uSize0.value = size0;
    u.uTime.value = t;
    u.uFlash.value = flash;
    u.uCamPos.value.copy(camera.position);
    camera.getWorldDirection(_fwd);
    u.uHeading.value = Math.atan2(_fwd.z, _fwd.x);
    u.uHalfFov.value = Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect) + 0.1;
    u.uBoatPos.value.copy(boat.position);
  }

  const setSize = (heightPx, fovDeg) => setSpriteSize(material, heightPx, fovDeg);

  return { update, setSize };
}
