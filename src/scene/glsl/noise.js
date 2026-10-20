/* 共用 GLSL 雜訊(海面白沫、天空雲層) */
export const NOISE_GLSL = /* glsl */`
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
               mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm4(vec2 p) {
    float sum = 0.0, amp = 0.5;
    mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 4; i++) { sum += amp * vnoise(p); p = rot * p; amp *= 0.5; }
    return sum / 0.9375;
  }
  float fbm6(vec2 p) {
    float sum = 0.0, amp = 0.5;
    mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 6; i++) { sum += amp * vnoise(p); p = rot * p; amp *= 0.5; }
    return sum / 0.984375;
  }
`;
