/* =========================================================
   GPU FFT 海洋的各個 pass
   1. spectrum:h(k,t) 時間演化,一次打包 8 個實數場(4 個複數訊號 × 2 張貼圖)
   2. butterfly:Stockham radix-2 逆 FFT(水平 log2N 次 + 垂直 log2N 次)
   3. combine:整理成位移貼圖 / 斜率貼圖
   4. foam:Jacobian < 門檻處注入白沫,分兩階段衰減並隨表層流往下風漂
   5. foamStats / foamControl:白沫覆蓋率統計 → GPU 上的門檻回授控制(不讀回 CPU)
   打包技巧:實數場 f、g 的頻譜 F、G,逆變換 (F + iG) = f + i·g
   ========================================================= */

export const fullscreenVertex = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const COMPLEX = /* glsl */`
  vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
  vec2 imul(vec2 a) { return vec2(-a.y, a.x); }
`;

/* PASS_A:(高度 + i·Dx, Dz + i·∂h/∂x);PASS_B:(∂h/∂z + i·∂Dx/∂x, ∂Dz/∂z + i·∂Dx/∂z) */
export const spectrumFragment = /* glsl */`
  uniform sampler2D uH0;
  uniform float uTime;
  uniform float uSize;
  uniform float uN;
  ${COMPLEX}

  void main() {
    vec2 c = gl_FragCoord.xy - 0.5;
    vec2 n = vec2(c.x < uN * 0.5 ? c.x : c.x - uN, c.y < uN * 0.5 ? c.y : c.y - uN);
    vec2 K = 6.28318530718 * n / uSize;
    float k = length(K);
    float invK = k > 1e-6 ? 1.0 / k : 0.0;

    vec4 h0 = texture2D(uH0, (c + 0.5) / uN);
    float w = sqrt(9.81 * k) * uTime;
    vec2 e = vec2(cos(w), sin(w));
    // h0(k)·e^{-iωt} 沿 +k 前進;共軛項保證結果為實數場
    vec2 h = cmul(h0.xy, vec2(e.x, -e.y)) + cmul(vec2(h0.z, -h0.w), e);
    vec2 ih = imul(h);

  #ifdef PASS_A
    vec2 dx = -ih * K.x * invK;
    vec2 dz = -ih * K.y * invK;
    vec2 hx = ih * K.x;
    gl_FragColor = vec4(h + imul(dx), dz + imul(hx));
  #else
    vec2 hz = ih * K.y;
    vec2 dxx = h * K.x * K.x * invK;
    vec2 dzz = h * K.y * K.y * invK;
    vec2 dxz = h * K.x * K.y * invK;
    gl_FragColor = vec4(hz + imul(dxx), dzz + imul(dxz));
  #endif
  }
`;

export const butterflyFragment = /* glsl */`
  uniform sampler2D uInput;
  uniform float uN;
  uniform float uSubSize;
  ${COMPLEX}

  void main() {
  #ifdef HORIZONTAL
    float index = gl_FragCoord.x - 0.5;
  #else
    float index = gl_FragCoord.y - 0.5;
  #endif
    float half_ = uSubSize * 0.5;
    float evenIndex = floor(index / uSubSize) * half_ + mod(index, half_);
  #ifdef HORIZONTAL
    vec4 even = texture2D(uInput, vec2(evenIndex + 0.5, gl_FragCoord.y) / uN);
    vec4 odd  = texture2D(uInput, vec2(evenIndex + uN * 0.5 + 0.5, gl_FragCoord.y) / uN);
  #else
    vec4 even = texture2D(uInput, vec2(gl_FragCoord.x, evenIndex + 0.5) / uN);
    vec4 odd  = texture2D(uInput, vec2(gl_FragCoord.x, evenIndex + uN * 0.5 + 0.5) / uN);
  #endif
    float arg = 6.28318530718 * (index / uSubSize);   // 正號 = 逆變換
    vec2 tw = vec2(cos(arg), sin(arg));
    gl_FragColor = vec4(even.xy + cmul(tw, odd.xy), even.zw + cmul(tw, odd.zw));
  }
`;

/* 位移貼圖:(Dx, 高度, Dz, ∂Dx/∂z)
   負號:讓水平位移往浪峰擠 → 尖浪峰、平浪谷(與 Gerstner 同方向) */
export const displacementFragment = /* glsl */`
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uChop;
  varying vec2 vUv;
  void main() {
    vec4 a = texture2D(uA, vUv);
    vec4 b = texture2D(uB, vUv);
    gl_FragColor = vec4(-uChop * a.g, a.r, -uChop * a.b, -uChop * b.a);
  }
`;

/* 斜率貼圖:(∂h/∂x, ∂h/∂z, ∂Dx/∂x, ∂Dz/∂z) */
export const derivativeFragment = /* glsl */`
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uChop;
  varying vec2 vUv;
  void main() {
    vec4 a = texture2D(uA, vUv);
    vec4 b = texture2D(uB, vUv);
    gl_FragColor = vec4(a.a, b.r, -uChop * b.g, -uChop * b.b);
  }
`;

/* 白沫貼圖:(破浪白水, 殘留薄沫, 這一幀正在破浪, 1)
   - 破浪白水(stage A/B):幾秒內消散
   - 殘留薄沫:衰減慢得多,浪峰一道道經過後在身後留下沿風向的長條紋
   - uAdvect:表層風吹流(約 3% 風速)這一幀造成的 uv 位移,白沫跟著水往下風漂 */
export const foamFragment = /* glsl */`
  uniform sampler2D uPrev;
  uniform sampler2D uDisp;
  uniform sampler2D uDeriv;
  uniform vec2 uDecay;          // x:破浪白水, y:殘留薄沫(每幀乘數)
  uniform sampler2D uControl;   // 1×1:r = Jacobian 門檻(foamControlFragment 維護)
  uniform vec2 uAdvect;
  varying vec2 vUv;
  void main() {
    vec4 d = texture2D(uDeriv, vUv);
    float dxz = texture2D(uDisp, vUv).a;
    float J = (1.0 + d.z) * (1.0 + d.w) - dxz * dxz;
    float threshold = texture2D(uControl, vec2(0.5)).r;
    float inject = clamp((threshold - J) * 2.5, 0.0, 1.0);
    vec2 prev = texture2D(uPrev, vUv - uAdvect).rg;
    float whitewater = max(prev.r * uDecay.x, inject);   // 'active' 是 GLSL 保留字
    float residual = max(prev.g * uDecay.y, whitewater * 0.8);
    gl_FragColor = vec4(whitewater, residual, inject, 1.0);
  }
`;

/* 統計圖:每格涵蓋 cascade 0 的 TEXELS² 個 texel,逐 texel 疊上 cascade 1 的白沫
   R:看得到的破浪白沫比例(對應海面 shader 的遮罩 → 雜訊門檻)
   G:這格裡最強的「正在破浪」量
   B:殘留薄沫比例 */
export const foamStatsFragment = /* glsl */`
  uniform sampler2D uFoam0;
  uniform sampler2D uFoam1;
  uniform float uRatio;         // cascade0 尺寸 / cascade1 尺寸
  uniform float uCells;
  varying vec2 vUv;
  void main() {
    vec2 cell = floor(vUv * uCells);
    float visible = 0.0, breaking = 0.0, residual = 0.0;
    for (int j = 0; j < TEXELS; j++) {
      for (int i = 0; i < TEXELS; i++) {
        vec2 uv = (cell + (vec2(float(i), float(j)) + 0.5) / float(TEXELS)) / uCells;
        vec3 f0 = textureLod(uFoam0, uv, 0.0).rgb;
        vec2 f1 = textureLod(uFoam1, uv * uRatio, 0.0).rg;
        visible += smoothstep(0.3, 0.65, clamp(f0.r * 0.7 + f1.r, 0.0, 1.0));
        residual += smoothstep(0.3, 0.65, clamp(f0.g * 0.7 + f1.g, 0.0, 1.0));
        breaking = max(breaking, f0.b);
      }
    }
    float n = float(TEXELS * TEXELS);
    gl_FragColor = vec4(visible / n, breaking, residual / n, 1.0);
  }
`;

/* 門檻回授控制(1×1,ping-pong):與 physics/whitecap.js 的 createFoamController 同一套公式
   輸出 (門檻, 平滑後覆蓋率, 這次量到的覆蓋率, 殘留薄沫比例) */
export const foamControlFragment = /* glsl */`
  uniform sampler2D uStats;
  uniform sampler2D uPrev;
  uniform float uInit;
  uniform float uInitThreshold;
  uniform float uTarget;
  uniform vec4 uGain;           // gain, smoothing, min, max
  void main() {
    if (uInit > 0.5) {
      gl_FragColor = vec4(uInitThreshold, uTarget, uTarget, 0.0);
      return;
    }
    vec2 sum = vec2(0.0);
    for (int j = 0; j < CELLS; j++) {
      for (int i = 0; i < CELLS; i++) sum += texelFetch(uStats, ivec2(i, j), 0).rb;
    }
    vec2 measured = sum / float(CELLS * CELLS);
    vec4 prev = texture2D(uPrev, vec2(0.5));
    float coverage = prev.g + (measured.x - prev.g) * uGain.y;
    float threshold = clamp(prev.r + uGain.x * (uTarget - coverage), uGain.z, uGain.w);
    gl_FragColor = vec4(threshold, coverage, measured);
  }
`;
