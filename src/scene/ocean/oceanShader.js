/* =========================================================
   海面 shader
   幾何:3 道 Gerstner 長湧浪 + FFT cascade 0/1 位移(頂點)
   法線:FFT 3 個 cascade 的斜率逐像素取樣 → 細節不再受網格密度限制
   擬真重點:
   1. 頻譜海洋:上萬個不同尺度的波疊加,浪不會黏成一團圓滑的大塊
   2. Fresnel(水 F0≈0.02):俯看透出深色水體,遠處掠射角幾乎全反射天空
   3. 次表面散射:浪峰薄處透出青綠光,閃電時整排浪會亮起來
   4. 白沫:FFT Jacobian 破浪白水 + 沿風向的殘留薄沫條紋 + 船身破浪/航跡
   ========================================================= */
import { buildGerstnerGLSL } from '../../physics/waves.js';
import { NOISE_GLSL } from '../glsl/noise.js';

export const LAMP_COUNT = 4;   // 駕駛台、桅燈、甲板燈、燈塔

export const oceanVertexShader = /* glsl */`
  uniform float uTime;
  uniform vec3 uEye;
  uniform mat4 textureMatrix;
  uniform vec2 uDrift;
  uniform sampler2D uDisp0;
  uniform sampler2D uDisp1;
  uniform vec3 uCascade;        // 三個 cascade 的貼圖尺寸 (m)
  uniform vec3 uBoatPos;
  uniform vec2 uBoatFwd;
  uniform float uBowWave;       // 船頭推浪強度(基礎航速 + 插進浪裡時加強)
  uniform sampler2D uHullClip;
  uniform vec4 uHullRange;      // xMin, xMax, yMin, yMax(船身座標)

  varying vec3 vWorld;
  varying vec2 vP;               // 未位移、已扣漂移的波空間座標:FFT 貼圖查詢用
  varying vec3 vNrm;
  varying float vJac;
  varying float vH;
  varying vec4 vMirror;

  #include <common>
  #include <fog_pars_vertex>
  ${buildGerstnerGLSL()}

  // 依距離挑 mip,遠處網格稀疏時不會取到高頻造成閃爍
  float lodFor(float camDist, float size) {
    return max(0.0, log2(camDist * 0.012 / (size / 256.0)));
  }

  // 船身推出來的浪:艏前堆高、往後散開的 V 形分歧波、船肩凹陷、艉浪
  float boatWave(vec2 xz) {
    vec2 q = xz - uBoatPos.xz;
    vec2 side = vec2(-uBoatFwd.y, uBoatFwd.x);
    float a = dot(q, uBoatFwd);
    float b = abs(dot(q, side));
    float ux = (a - uHullRange.x) / (uHullRange.y - uHullRange.x);
    float uw = (-0.15 - uHullRange.z) / (uHullRange.w - uHullRange.z);
    float hw = ux > 0.0 && ux < 1.0 ? textureLod(uHullClip, vec2(ux, uw), 0.0).r : 0.0;
    float off = max(b - hw, 0.0);

    float bow = exp(-pow((a - 4.7) / 1.2, 2.0)) * exp(-off * off * 1.4);
    float armPos = max(5.7 - a, 0.0) * 0.36;
    float arm = exp(-pow((off - armPos) / 0.5, 2.0)) * smoothstep(6.0, 4.8, a) * exp(-max(5.7 - a, 0.0) * 0.07);
    float shoulder = exp(-pow(a / 2.4, 2.0)) * exp(-off * off * 0.7);
    float stern = exp(-pow((a + 5.7) / 1.1, 2.0)) * exp(-off * off * 0.9);
    return uBowWave * (0.6 * bow + 0.32 * arm - 0.28 * shoulder + 0.18 * stern);
  }

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    float camDist = distance(wp.xz, uEye.xz);
    vec2 p = wp.xz - uDrift;

    vec3 n; float j;
    vec3 d = gerstner(p, uTime, n, j);
    vec3 f = textureLod(uDisp0, p / uCascade.x, lodFor(camDist, uCascade.x)).xyz;
    f += textureLod(uDisp1, p / uCascade.y, lodFor(camDist, uCascade.y)).xyz
       * (1.0 - smoothstep(60.0, 140.0, camDist));
    wp.xyz += d + f;
    wp.y += boatWave(wp.xz);

    vWorld = wp.xyz;
    vP = p;
    vNrm = n;
    vJac = j;
    vH = d.y + f.y;
    vMirror = textureMatrix * wp;

    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

export const oceanFragmentShader = /* glsl */`
  #define LAMP_COUNT ${LAMP_COUNT}
  uniform sampler2D mirrorSampler;
  uniform sampler2D uDisp0;
  uniform sampler2D uDisp1;
  uniform sampler2D uDisp2;
  uniform sampler2D uDeriv0;
  uniform sampler2D uDeriv1;
  uniform sampler2D uDeriv2;
  uniform sampler2D uFoam0;
  uniform sampler2D uFoam1;
  uniform vec3 uCascade;
  uniform float uTime;
  uniform float uFlash;
  uniform float uDistortion;
  uniform float uAmpSum;
  uniform vec3 uEye;
  uniform vec3 uMoonDir;
  uniform vec3 uMoonColor;
  uniform vec3 uFlashDir;
  uniform vec3 uDeep;
  uniform vec3 uScatter;
  uniform vec3 uFoam;
  uniform vec2 uWindDir;
  uniform vec3 uAmbient;
  uniform vec3 uBoatPos;
  uniform vec2 uBoatFwd;
  uniform float uBowWave;
  uniform mat4 uBoatInv;
  uniform sampler2D uHullClip;
  uniform vec4 uHullRange;
  uniform sampler2D uShoreMap;
  uniform mat4 uShoreInv;
  uniform vec4 uShoreRange;     // xMin, xMax, zMin, zMax(海岬區域座標)
  uniform vec3 uLampPos[LAMP_COUNT];
  uniform vec3 uLampColor[LAMP_COUNT];

  varying vec3 vWorld;
  varying vec2 vP;
  varying vec3 vNrm;
  varying float vJac;
  varying float vH;
  varying vec4 vMirror;

  #include <common>
  #include <fog_pars_fragment>
  ${NOISE_GLSL}

  // 雨滴漣漪:每格一顆雨滴,各自錯開生命週期,往外擴散一圈
  vec2 rainRipples(vec2 p, float t) {
    vec2 cell = floor(p), f = fract(p);
    vec2 acc = vec2(0.0);
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 o = vec2(float(i), float(j));
        vec2 h = hash22(cell + o);
        float life = fract(t * 1.1 + h.x * 7.0 + h.y * 3.0);
        vec2 c = o + h - f;
        float r = length(c);
        float ring = r - life * 0.85;
        float w = sin(ring * 34.0) * smoothstep(0.11, 0.0, abs(ring)) * (1.0 - life) * (1.0 - life);
        acc += c / (r + 1e-3) * w;
      }
    }
    return acc;
  }

  // 船身周圍被推開的白水、船頭 V 形破浪、船尾航跡
  float boatFoamMask(vec2 p) {
    vec2 q = p - uBoatPos.xz;
    vec2 side = vec2(-uBoatFwd.y, uBoatFwd.x);
    float a = dot(q, uBoatFwd) - 0.4;
    float b = abs(dot(q, side));

    float e = length(vec2(a / 6.1, b / 2.05));
    float hull = smoothstep(1.22, 0.98, e) * 0.7;

    float armDist = b - (1.3 + max(5.8 - a, 0.0) * 0.36);
    float arms = exp(-armDist * armDist * 3.0) * smoothstep(6.4, 5.2, a) * exp(-max(5.8 - a, 0.0) * 0.045);

    float w = 1.2 + max(-5.0 - a, 0.0) * 0.13;
    float wake = smoothstep(w, w * 0.25, b) * smoothstep(-4.4, -6.0, a) * exp((a + 5.0) * 0.035);

    return clamp(max(hull, max(arms * 0.75, wake * 0.9)), 0.0, 1.0);
  }

  // 崖腳拍岸白沫:離岸越近越白,並有一道道往岸邊推進的碎浪線
  float shoreFoamMask(vec3 world) {
    vec3 lp = (uShoreInv * vec4(world, 1.0)).xyz;
    vec2 suv = (lp.xz - uShoreRange.xz) / (uShoreRange.yw - uShoreRange.xz);
    if (suv.x <= 0.0 || suv.x >= 1.0 || suv.y <= 0.0 || suv.y >= 1.0) return 0.0;
    float d = texture2D(uShoreMap, suv).r;
    float surge = 0.55 + 0.45 * sin(d * 1.3 + uTime * 1.7 + fbm4(lp.xz * 0.15) * 4.0);
    return smoothstep(9.0, 0.5, d) * surge;
  }

  // 落在船殼內部(且低於甲板上方一點)的水不畫:浪不會穿過船身、甲板下不會看到水
  void clipInsideHull() {
    vec3 lp = (uBoatInv * vec4(vWorld, 1.0)).xyz;
    vec2 huv = (lp.xy - uHullRange.xz) / (uHullRange.yw - uHullRange.xz);
    if (huv.x <= 0.0 || huv.x >= 1.0 || huv.y <= 0.0 || huv.y >= 1.0) return;
    vec2 hc = texture2D(uHullClip, huv).rg;
    if (abs(lp.z) < hc.x - 0.02 && lp.y < hc.y) discard;
  }

  void main() {
    clipInsideHull();
    vec3 toEye = uEye - vWorld;
    float dist = length(toEye);
    vec3 V = toEye / dist;
    vec3 Ng = normalize(vNrm);

    // ---- FFT 斜率與 Jacobian(三個 cascade 相加)----
    vec2 uv0 = vP / uCascade.x, uv1 = vP / uCascade.y, uv2 = vP / uCascade.z;
    vec4 dr = texture2D(uDeriv0, uv0) + texture2D(uDeriv1, uv1);
    float dxz = texture2D(uDisp0, uv0).a + texture2D(uDisp1, uv1).a;
    float detailFade = 1.0 - smoothstep(30.0, 90.0, dist);
    dr += texture2D(uDeriv2, uv2) * detailFade;
    dxz += texture2D(uDisp2, uv2).a * detailFade;

    vec2 jDiag = max(vec2(1.0) + dr.zw, vec2(0.25));
    vec2 slope = dr.xy / jDiag - Ng.xz / Ng.y;
    vec2 rs = rainRipples(vWorld.xz * 2.4, uTime) * (1.0 - smoothstep(5.0, 30.0, dist)) * 0.22;
    vec3 N = normalize(vec3(-slope.x + rs.x, 1.0, -slope.y + rs.y));
    float J = (1.0 + dr.z) * (1.0 + dr.w) - dxz * dxz + (vJac - 1.0);
    vec3 L = uMoonDir;

    // ---- Fresnel ----
    float cosT = clamp(dot(N, V), 0.0, 1.0);
    float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
    F = mix(F, 1.0, smoothstep(60.0, 220.0, dist) * 0.5);

    // ---- 反射:平面鏡 + 法線扭曲 ----
    vec2 distortion = clamp(N.xz, -0.6, 0.6) * uDistortion / (dist + 4.0);
    vec3 refl = texture2D(mirrorSampler, vMirror.xy / vMirror.w + distortion).rgb;

    // ---- 水體:浪谷深暗,浪峰透光 ----
    float hN = clamp(vH / uAmpSum * 0.5 + 0.5, 0.0, 1.0);
    float backLit = pow(clamp(dot(V, -L), 0.0, 1.0), 3.0);
    float thin = pow(hN, 2.2) * (1.0 - cosT * 0.5);
    vec3 body = uDeep * (0.55 + 0.45 * hN) + uAmbient * max(N.y, 0.0) * 0.03;
    body += uScatter * thin * (0.3 + 0.7 * backLit);
    body += uScatter * uFlash * (thin * 9.0 + max(dot(N, uFlashDir), 0.0) * 1.5);

    // ---- 船上燈光:照進水裡的暖光 + 波面上的反光碎點 ----
    vec3 lampSpec = vec3(0.0);
    vec3 lampDiff = vec3(0.0);
    for (int i = 0; i < LAMP_COUNT; i++) {
      vec3 Lv = uLampPos[i] - vWorld;
      float d2 = max(dot(Lv, Lv), 1.0);
      Lv *= inversesqrt(d2);
      vec3 E = uLampColor[i] / d2;
      vec3 H = normalize(Lv + V);
      float fh = 0.02 + 0.98 * pow(1.0 - max(dot(V, H), 0.0), 5.0);
      lampSpec += E * fh * pow(max(dot(N, H), 0.0), 220.0) * 9.0;
      lampDiff += E * max(dot(N, Lv), 0.0);
    }
    body += lampDiff * uScatter * 1.5;

    // ---- 月光碎波光帶 ----
    vec3 Hm = normalize(L + V);
    float nh = max(dot(N, Hm), 0.0);
    vec3 moonSpec = uMoonColor * (pow(nh, 900.0) * 18.0 + pow(nh, 60.0) * 0.35) * (0.3 + F);
    vec3 Hf = normalize(uFlashDir + V);
    vec3 flashSpec = vec3(0.8, 0.86, 1.0) * uFlash * pow(max(dot(N, Hf), 0.0), 120.0) * 6.0;

    vec3 col = mix(body, refl, F) + moonSpec + lampSpec + flashSpec;

    // ---- 白沫:破浪白水 + 即時壓縮 + 殘留條紋 + 船身 ----
    vec2 f0 = texture2D(uFoam0, uv0).rg, f1 = texture2D(uFoam1, uv1).rg;
    float accum = f0.r * 0.7 + f1.r;
    float residual = clamp(f0.g * 0.7 + f1.g, 0.0, 1.0);
    float live = smoothstep(0.6, 0.0, J);
    float mask = clamp(max(accum, live), 0.0, 1.0);

    // 風向座標(x 沿風、y 橫風):雜訊沿風拉長 → 白沫被吹成一條條
    vec2 wq = vec2(dot(vP, uWindDir), dot(vP, vec2(-uWindDir.y, uWindDir.x)));
    float farF = smoothstep(50.0, 180.0, dist);
    float foamTex = fbm4(wq * vec2(0.55, 1.1)) * 0.55 + fbm4(wq * vec2(1.8, 4.0) + 7.0) * 0.5;
    foamTex = mix(foamTex, 0.55, farF);
    // 船身白水被碎浪打散:用水面壓縮量調制,不會是一圈均勻的白裙邊
    float boatFoam = boatFoamMask(vWorld.xz) * (0.45 + 0.55 * smoothstep(1.1, 0.5, J))
                   * clamp(0.35 + 0.55 * uBowWave, 0.0, 1.4);
    mask = max(mask, boatFoam);
    mask = max(mask, shoreFoamMask(vWorld));
    float foam = clamp((foamTex - (1.0 - mask)) / 0.18, 0.0, 1.0);

    // 殘留薄沫:雜訊等值線沿風向拉成細長線(8 級風的招牌條紋),遠處平均成一層淡白
    float streakN = fbm4(wq * vec2(0.05, 0.55) + vec2(0.0, fbm4(wq * 0.04) * 2.5));
    float streak = smoothstep(0.82, 0.97, 1.0 - abs(streakN * 2.0 - 1.0));
    float lace = smoothstep(0.3, 0.75, fbm4(wq * vec2(0.9, 2.6) + 3.0) + residual * 0.25);
    float streakFar = smoothstep(30.0, 110.0, dist);
    float thinFoam = residual * mix(streak * lace, 0.1, streakFar);
    foam = max(foam, thinFoam * 0.6);

    // Lambert 漫射要除以 π,否則靠近燈的白沫會整圈發亮
    vec3 foamLight = uAmbient * 0.7
                   + uMoonColor * max(dot(N, L), 0.0) * 0.6
                   + lampDiff * (0.8 / PI)
                   + vec3(0.6, 0.66, 0.8) * uFlash * 1.6;
    col = mix(col, uFoam * foamLight, foam * 0.92);

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;
