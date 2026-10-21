/* =========================================================
   一次性的聲音:雷、船頭撞浪、艙內船殼悶響、結構吱嘎
   每次都建一組短命的節點,播完自己斷開
   ========================================================= */

const THUNDER_LEVEL = 3.2;      // 雷是全場最大的聲音;總線上的壓縮器會順便把風雨壓下去一點
const THUNDER_TAIL_HZ = 200;    // 尾巴悶到這裡就好,再低一般喇叭就放不出來了

function oneShot(ctx, buffer, when, offset, duration) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;                       // 雜訊緩衝只有幾秒,長雷聲要循環
  src.start(when, offset % buffer.duration);
  src.stop(when + duration);
  return src;
}

function cleanup(src, nodes) {
  src.onended = () => nodes.forEach((n) => n.disconnect());
}

/* 雷聲的「滾動」:主峰之後隨機冒出幾個小峰(聲音從閃電不同段陸續到達) */
function rumbleEnvelope(param, t0, peak, duration) {
  param.setValueAtTime(0, t0);
  param.linearRampToValueAtTime(peak, t0 + 0.08 + Math.random() * 0.15);
  let t = t0 + 0.4;
  let level = peak * 0.7;
  while (t < t0 + duration * 0.75) {
    param.exponentialRampToValueAtTime(Math.max(1e-4, level * (0.35 + Math.random() * 0.3)), t);
    t += 0.15 + Math.random() * 0.35;
    param.linearRampToValueAtTime(level * (0.6 + Math.random() * 0.5), t);
    level *= 0.72;
    t += 0.2 + Math.random() * 0.6;
  }
  param.exponentialRampToValueAtTime(1e-4, t0 + duration);
}

/**
 * @param {{ delay: number, gain: number, crack: number, cutoff: number, duration: number }} profile
 */
export function playThunder(ctx, out, buffers, profile) {
  if (profile.gain <= 0) return;
  const t0 = ctx.currentTime + profile.delay;
  const { duration } = profile;

  // 滾動的主體:粉紅噪音(中頻夠,筆電喇叭也聽得到)+ 棕噪音打底(耳機 / 重低音才有的重量)
  const g = ctx.createGain();
  rumbleEnvelope(g.gain, t0, profile.gain * THUNDER_LEVEL, duration);
  g.connect(out);
  const roll = oneShot(ctx, buffers.pink, t0, Math.random() * 10, duration);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass'; lp.Q.value = 0.6;
  lp.frequency.setValueAtTime(profile.cutoff, t0);
  lp.frequency.exponentialRampToValueAtTime(THUNDER_TAIL_HZ, t0 + duration);
  roll.connect(lp).connect(g);
  const floor = oneShot(ctx, buffers.brown, t0, Math.random() * 10, duration);
  const floorLp = ctx.createBiquadFilter();
  floorLp.type = 'lowpass'; floorLp.frequency.value = 320;
  const floorGain = ctx.createGain();
  floorGain.gain.value = 0.7;
  floor.connect(floorLp).connect(floorGain).connect(g);
  cleanup(roll, [roll, lp]);
  cleanup(floor, [floor, floorLp, floorGain, g]);

  // 很低的轟聲,給雷一點重量(喇叭小也聽得到上面的泛音)
  const boom = ctx.createOscillator();
  boom.frequency.setValueAtTime(52, t0);
  boom.frequency.exponentialRampToValueAtTime(30, t0 + 1.6);
  const bg = ctx.createGain();
  bg.gain.setValueAtTime(0, t0);
  bg.gain.linearRampToValueAtTime(profile.gain * 0.45, t0 + 0.06);
  bg.gain.exponentialRampToValueAtTime(1e-4, t0 + 1.8);
  boom.connect(bg).connect(out);
  boom.start(t0); boom.stop(t0 + 1.9);
  cleanup(boom, [boom, bg]);

  if (profile.crack > 0.02) {
    const crack = oneShot(ctx, buffers.white, t0, Math.random() * 3, 0.5);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 1500;
    const cg = ctx.createGain();
    cg.gain.setValueAtTime(0, t0);
    cg.gain.linearRampToValueAtTime(profile.crack * 0.8, t0 + 0.01);
    cg.gain.exponentialRampToValueAtTime(1e-4, t0 + 0.45);
    crack.connect(hp).connect(cg).connect(out);
    cleanup(crack, [crack, hp, cg]);
  }
}

/** 船頭插進浪裡:水花往下掃的嘩啦聲(外面) */
export function playSplash(ctx, out, buffers, strength) {
  const t0 = ctx.currentTime;
  const len = 0.9 + strength * 0.6;
  const src = oneShot(ctx, buffers.white, t0, Math.random() * 3, len);
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass'; bp.Q.value = 0.8;
  bp.frequency.setValueAtTime(2200, t0);
  bp.frequency.exponentialRampToValueAtTime(500, t0 + len);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(0.35 * strength, t0 + 0.06);
  g.gain.exponentialRampToValueAtTime(1e-4, t0 + len);
  src.connect(bp).connect(g).connect(out);
  cleanup(src, [src, bp, g]);
}

/** 同一個浪在艙內:船殼被拍的一聲悶響 */
export function playHullThud(ctx, inside, buffers, strength) {
  const t0 = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(75, t0);
  osc.frequency.exponentialRampToValueAtTime(38, t0 + 0.35);
  const og = ctx.createGain();
  og.gain.setValueAtTime(0, t0);
  og.gain.linearRampToValueAtTime(0.55 * strength, t0 + 0.015);
  og.gain.exponentialRampToValueAtTime(1e-4, t0 + 0.5);
  osc.connect(og).connect(inside);
  osc.start(t0); osc.stop(t0 + 0.55);
  cleanup(osc, [osc, og]);

  const src = oneShot(ctx, buffers.brown, t0, Math.random() * 3, 0.7);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass'; lp.frequency.value = 300;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.5 * strength, t0);
  g.gain.exponentialRampToValueAtTime(1e-4, t0 + 0.7);
  src.connect(lp).connect(g).connect(inside);
  cleanup(src, [src, lp, g]);
}

/** 船擺到最邊時的木頭 / 繩索吱嘎(艙內) */
export function playCreak(ctx, inside, creaks, strength) {
  const src = ctx.createBufferSource();
  src.buffer = creaks[Math.floor(Math.random() * creaks.length)];
  src.playbackRate.value = 0.8 + Math.random() * 0.45;
  const g = ctx.createGain();
  g.gain.value = 0.18 * strength;
  src.connect(g).connect(inside);
  src.start();
  cleanup(src, [src, g]);
}
