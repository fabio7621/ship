/* =========================================================
   長湧浪(Gerstner):只負責 > 30m 的大浪,GPU/CPU 共用
   - 中短波交給 FFT 頻譜海洋(scene/ocean/fft),那部分船不需要跟隨
   - steep = 此波分到的尖銳度 Q·k·A;總和 < 1 才不會讓波峰自我穿插
   - DRIFT:水相對船往後流(船在前進),GPU 與 CPU 用同一個偏移
   ========================================================= */
export const STORM = 1.0;
const TAU = Math.PI * 2;
const G = 9.81;

// 主風向:浪往 -x 推進(船頭朝 +x 迎浪)
export const WIND_DIR = [-1, 0.12];
export const WIND_ANGLE = Math.atan2(WIND_DIR[1], WIND_DIR[0]);
export const DRIFT = [-3.2, 0];   // m/s

const SPEC = [
  { angle:  0.10, len: 64, amp: 1.60, steep: 0.14 },
  { angle: -0.35, len: 43, amp: 0.95, steep: 0.14 },
  { angle:  0.45, len: 31, amp: 0.50, steep: 0.12 }
];

export const WAVES = SPEC.map((s, i) => {
  const a = WIND_ANGLE + s.angle;
  const k = TAU / s.len;
  const A = s.amp * STORM;
  return {
    dx: Math.cos(a), dz: Math.sin(a),
    k, om: Math.sqrt(G * k), A,
    Q: (s.steep * STORM) / (k * A),
    phase: i * 1.731,
    len: s.len
  };
});

export const AMP_SUM = WAVES.reduce((sum, w) => sum + w.A, 0);

const steepSum = WAVES.reduce((sum, w) => sum + w.Q * w.k * w.A, 0);
if (steepSum > 0.95) {
  console.warn(`[waves] Gerstner 尖銳度總和 ${steepSum.toFixed(2)} 過高,波峰可能打結`);
}

/* GLSL:p 為「已扣除漂移」的波空間座標;輸出解析法線與 Jacobian */
export function buildGerstnerGLSL() {
  const f = (v) => v.toFixed(5);
  let body = '';
  for (const w of WAVES) body += `
    {
      vec2 D = vec2(${f(w.dx)}, ${f(w.dz)});
      float k = ${f(w.k)};
      float A = ${f(w.A)};
      float Q = ${f(w.Q)};
      float ph = k * dot(D, p) - ${f(w.om)} * t + ${f(w.phase)};
      float C = cos(ph), S = sin(ph);
      float kA = k * A, QkA = Q * kA;
      d  += vec3(Q * A * D.x * C, A * S, Q * A * D.y * C);
      tx += vec3(-QkA * D.x * D.x * S, kA * D.x * C, -QkA * D.x * D.y * S);
      tz += vec3(-QkA * D.x * D.y * S, kA * D.y * C, -QkA * D.y * D.y * S);
    }`;
  return `
  vec3 gerstner(vec2 p, float t, out vec3 nrm, out float jac) {
    vec3 d  = vec3(0.0);
    vec3 tx = vec3(1.0, 0.0, 0.0);   // ∂S/∂x
    vec3 tz = vec3(0.0, 0.0, 1.0);   // ∂S/∂z
    ${body}
    nrm = normalize(cross(tz, tx));
    jac = tx.x * tz.z - tz.x * tx.z;
    return d;
  }`;
}

/* CPU 端完整位移(輸入為波空間座標,結果寫入 out) */
function displaceWaveSpace(px, pz, t, out) {
  let dx = 0, dy = 0, dz = 0;
  for (const w of WAVES) {
    const ph = w.k * (w.dx * px + w.dz * pz) - w.om * t + w.phase;
    const C = Math.cos(ph);
    dx += w.Q * w.A * w.dx * C;
    dz += w.Q * w.A * w.dz * C;
    dy += w.A * Math.sin(ph);
  }
  out.x = dx; out.y = dy; out.z = dz;
  return out;
}

const _d = { x: 0, y: 0, z: 0 };

/* 世界座標 (x, z) 上那顆水粒子的波空間座標(已扣漂移)
   Gerstner 會把水粒子水平推擠,所以反向迭代找出「被推到 (x,z)」的那顆粒子 */
function waveSpaceAt(x, z, t) {
  const wx = x - DRIFT[0] * t, wz = z - DRIFT[1] * t;
  let px = wx, pz = wz;
  for (let i = 0; i < 3; i++) {
    displaceWaveSpace(px, pz, t, _d);
    px = wx - _d.x;
    pz = wz - _d.z;
  }
  return { x: px, z: pz };
}

/* 世界座標 (x, z) 正上方的湧浪高度 */
export function seaHeightWorld(x, z, t) {
  const p = waveSpaceAt(x, z, t);
  return displaceWaveSpace(p.x, p.z, t, _d).y;
}
