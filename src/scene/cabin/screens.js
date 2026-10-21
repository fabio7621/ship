/* =========================================================
   儀器螢幕 shader:雷達 PPI(掃描線 + 餘暉)、魚探(彩色捲動回波)
   全部在 GPU 上算,每幀只更新時間 uniform
   ========================================================= */
import * as THREE from 'three';

const NOISE = /* glsl */`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { return vnoise(p) * 0.55 + vnoise(p * 2.1) * 0.3 + vnoise(p * 4.3) * 0.15; }
`;

const VERT = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

/* 燈塔在船身座標的方位(從船頭順時針):左後方約 222°、距離約 130m */
const LIGHTHOUSE_BEARING = 222 * Math.PI / 180;
const LIGHTHOUSE_RANGE = 0.32;   // 雷達量程 0.25 nm 下的半徑比例

const RADAR_FRAG = /* glsl */`
  varying vec2 vUv;
  uniform float uSweep, uTime, uGain;
  uniform vec2 uLight;
  ${NOISE}
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    if (r > 1.0) { gl_FragColor = vec4(vec3(0.004, 0.012, 0.008), 1.0); return; }
    float a = atan(p.x, p.y);
    float since = mod(uSweep - a, 6.2831853);
    float trail = exp(-since * 0.9);

    // 海面雜波(近處強)、雨區、海岸線(燈塔那側一大片陸地)
    vec2 pol = vec2(a * 6.0, r * 22.0);
    float sea = smoothstep(0.42, 0.0, r) * smoothstep(0.55, 0.85, fbm(pol + floor(uTime * 0.5)));
    float rain = smoothstep(0.62, 0.8, fbm(p * 3.0 + vec2(uTime * 0.02, 0.0))) * 0.35;
    vec2 toLand = p - uLight;
    float landSide = dot(normalize(uLight), toLand) + 0.06 * fbm(p * 9.0);
    float land = smoothstep(-0.02, 0.03, landSide) * smoothstep(0.42, 0.6, fbm(p * 7.0) + 0.25);
    float beacon = smoothstep(0.035, 0.0, length(toLand));
    float echo = max(max(sea, rain), max(land, beacon));

    vec3 phosphor = vec3(0.25, 1.0, 0.45);
    vec3 col = phosphor * (echo * trail * 1.3 + exp(-since * 60.0) * 0.5);
    float rings = 0.0;
    for (int i = 1; i <= 3; i++) rings += smoothstep(0.006, 0.0, abs(r - float(i) * 0.25));
    rings += smoothstep(0.004, 0.0, abs(p.x)) * step(0.0, p.y);
    col += phosphor * rings * 0.18;
    col += phosphor * smoothstep(0.05, 0.0, r) * 0.4;                // 本船
    col += phosphor * 0.025;
    col *= 0.85 + 0.15 * sin(vUv.y * 900.0);                         // 掃描線
    col *= smoothstep(1.0, 0.94, r);
    gl_FragColor = vec4(col * uGain, 1.0);
  }
`;

const SOUNDER_FRAG = /* glsl */`
  varying vec2 vUv;
  uniform float uTime, uGain;
  ${NOISE}
  vec3 palette(float v) {
    vec3 c = mix(vec3(0.0, 0.05, 0.35), vec3(0.0, 0.6, 1.0), smoothstep(0.0, 0.25, v));
    c = mix(c, vec3(0.1, 0.9, 0.2), smoothstep(0.25, 0.5, v));
    c = mix(c, vec3(1.0, 0.9, 0.1), smoothstep(0.5, 0.75, v));
    return mix(c, vec3(1.0, 0.15, 0.05), smoothstep(0.75, 1.0, v));
  }
  void main() {
    float x = vUv.x * 2.0 + uTime * 0.06;
    float depth = 1.0 - vUv.y;
    float bottom = 0.7 + 0.07 * sin(x * 5.0) + 0.05 * fbm(vec2(x * 6.0, 1.0));
    float v = 0.0;
    float below = depth - bottom;
    if (below > 0.0) v = max(0.25, 1.0 - below * 3.0) * (0.8 + 0.2 * vnoise(vec2(x * 40.0, depth * 30.0)));
    // 魚群:一團團的回波
    float school = smoothstep(0.72, 0.9, fbm(vec2(x * 3.0, depth * 9.0)));
    v = max(v, school * 0.85 * step(0.25, depth) * step(depth, bottom - 0.05));
    v = max(v, smoothstep(0.05, 0.0, depth) * vnoise(vec2(x * 60.0, depth * 80.0)));   // 表層氣泡
    vec3 col = v > 0.02 ? palette(v) : vec3(0.0, 0.02, 0.12);
    float grid = smoothstep(0.003, 0.0, abs(fract(depth * 4.0) - 0.5) - 0.497);
    col += vec3(0.25) * grid;
    col *= smoothstep(0.0, 0.02, vUv.x) * smoothstep(1.0, 0.98, vUv.x);
    gl_FragColor = vec4(col * uGain, 1.0);
  }
`;

export function createScreens() {
  const radar = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: RADAR_FRAG,
    uniforms: {
      uSweep: { value: 0 }, uTime: { value: 0 }, uGain: { value: 1.25 },
      uLight: { value: new THREE.Vector2(Math.sin(LIGHTHOUSE_BEARING), Math.cos(LIGHTHOUSE_BEARING)).multiplyScalar(LIGHTHOUSE_RANGE) }
    }
  });
  const sounder = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: SOUNDER_FRAG,
    uniforms: { uTime: { value: 0 }, uGain: { value: 1.0 } }
  });

  /** @param {number} sweep 雷達天線角度(與屋頂天線同步) */
  function update(t, sweep) {
    radar.uniforms.uSweep.value = sweep % (Math.PI * 2);
    radar.uniforms.uTime.value = t;
    sounder.uniforms.uTime.value = t;
  }

  return { radar, sounder, update };
}
