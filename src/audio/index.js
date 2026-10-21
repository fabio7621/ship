/* =========================================================
   暴風雨音效:全部用 Web Audio 即時合成,不載入音檔
   訊號流:
     外部聲層 → outside → 低通(進艙越悶)→ master
     艙內聲層 → inside(進艙程度)       → master
     master → 壓縮器 → 喇叭
   瀏覽器要求使用者互動後才能出聲:第一次點擊 / 按鍵時才建立 AudioContext
   ========================================================= */
import { windAtHeight, WIND_SPEED_10M } from '../physics/wind.js';
import { cabinMix, gustLevel, seaLevel, thunderProfile, createThresholdTrigger, createTurnTrigger } from './mix.js';
import { fillNoise, fillRain, fillCreak, createEngineSamples, toBuffer } from './buffers.js';
import { createAmbience } from './ambience.js';
import { playThunder, playSplash, playHullThud, playCreak } from './events.js';
import { createSoundToggle } from '../ui/soundToggle.js';

const MASTER = 0.8;
const FADE_IN = 2.5, FADE_OUT = 0.3;       // s
const SMOOTH = 0.12;
const WIND_PROBE = [-3, 5, 0];             // 船身座標:駕駛艙頂上方,聽風的位置
const NOISE_SECONDS = 4, CREAK_VARIANTS = 4;
/* 雨:艙頂鐵皮密而悶;玻璃疏而脆,還會帶一點窗板的共振 */
const ROOF_RAIN = { seconds: 5.3, rate: 520, decayMs: [2, 9], cutoff: [500, 2200], sizePower: 2.5, spread: 0.9 };
const GLASS_RAIN = {
  seconds: 7.7, rate: 70, decayMs: [0.8, 3], cutoff: [1800, 5000], sizePower: 3, spread: 0.7,
  body: { modes: [[650, 220], [1650, 400]], mix: 0.25 }
};
/* 六缸四行程柴油機 900 rpm:點火頻率 = 900/60 × 6/2 = 45 Hz */
const ENGINE = { firingHz: 45, cylinders: 6, cycles: 15 };
const SPLASH = { on: 0.9, off: 0.25 };     // floater.bowRate:船頭往浪裡插的速度
const CREAK = { minPeak: 0.06, cooldown: 1.4, full: 0.15 };   // 橫搖角速度 rad/s
const PREF_KEY = 'storm-sound';

const warn = (err) => console.warn('[audio]', err);
const isToggleKey = (e) => (e.key === 'm' || e.key === 'M') && !e.ctrlKey && !e.metaKey && !e.altKey;

function readPref() {
  try { return localStorage.getItem(PREF_KEY) !== 'off'; } catch { return true; }
}

function writePref(on) {
  try { localStorage.setItem(PREF_KEY, on ? 'on' : 'off'); } catch { /* 無痕模式:不記也沒關係 */ }
}

function buildBuffers(ctx) {
  const sr = ctx.sampleRate;
  const noise = (color) => toBuffer(ctx, fillNoise(new Float32Array(sr * NOISE_SECONDS), color));
  const rain = (spec) => {
    const len = Math.round(sr * spec.seconds);
    return toBuffer(ctx, ...fillRain(new Float32Array(len), new Float32Array(len), sr, spec));
  };
  return {
    white: noise('white'), pink: noise('pink'), brown: noise('brown'),
    roofRain: rain(ROOF_RAIN), glassRain: rain(GLASS_RAIN),
    engine: toBuffer(ctx, createEngineSamples(sr, ENGINE)),
    creaks: Array.from({ length: CREAK_VARIANTS }, () =>
      toBuffer(ctx, fillCreak(new Float32Array(Math.round(sr * (0.5 + Math.random() * 0.5))), sr)))
  };
}

function buildGraph(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.01; comp.release.value = 0.3;
  master.connect(comp).connect(ctx.destination);
  const muffle = ctx.createBiquadFilter();
  muffle.type = 'lowpass'; muffle.Q.value = 0.5;
  const outside = ctx.createGain();
  outside.connect(muffle).connect(master);
  const inside = ctx.createGain();
  inside.gain.value = 0;
  inside.connect(master);
  return { master, muffle, outside, inside };
}

/**
 * @param {{ wind: { sample: Function, meanAt: Function, intensity: number } }} opts 與旗子同一個風場
 */
export function createStormAudio({ wind }) {
  let ctx = null, graph = null, buffers = null, ambience = null;
  let enabled = readPref();
  const splash = createThresholdTrigger(SPLASH);
  const creak = createTurnTrigger(CREAK);
  const probe = [0, 0, 0], mean = [0, 0, 0];
  const listener = { x: 0, y: 0, z: 0 };
  const sigma = wind.intensity * windAtHeight(WIND_SPEED_10M, WIND_PROBE[1]);

  const ui = createSoundToggle({ on: false, hint: enabled, onToggle: () => toggle() });

  function start() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { ui.unsupported(); return; }
      ctx = new AC();
      graph = buildGraph(ctx);
      buffers = buildBuffers(ctx);
      ambience = createAmbience(ctx, { outside: graph.outside, inside: graph.inside, buffers });
    }
    ctx.resume().catch(warn);
    graph.master.gain.cancelScheduledValues(ctx.currentTime);
    graph.master.gain.setTargetAtTime(MASTER, ctx.currentTime, FADE_IN / 3);
    ui.set(true);
  }

  function stop() {
    if (!ctx) return;
    graph.master.gain.cancelScheduledValues(ctx.currentTime);
    graph.master.gain.setTargetAtTime(0, ctx.currentTime, FADE_OUT / 3);
    ui.set(false);
  }

  const running = () => ctx && ctx.state === 'running' && ui.on;

  function toggle() {
    enabled = !running();
    writePref(enabled);
    if (enabled) start(); else stop();
  }

  /* 第一次互動就開聲音(除非上次自己關掉);按鈕和 M 鍵自己處理,這裡略過 */
  function unlock(e) {
    if (ui.owns(e.target) || isToggleKey(e)) return;
    removeEventListener('pointerdown', unlock, true);
    removeEventListener('keydown', unlock, true);
    if (enabled) start();
  }
  addEventListener('pointerdown', unlock, true);
  addEventListener('keydown', unlock, true);
  addEventListener('keydown', (e) => { if (isToggleKey(e) && !e.repeat) toggle(); });
  document.addEventListener('visibilitychange', () => {
    if (!ctx || !ui.on) return;
    (document.hidden ? ctx.suspend() : ctx.resume()).catch(warn);
  });

  /** 閃電落下的瞬間呼叫;雷聲依距離延遲 */
  function strike({ x, y, z, power }) {
    if (!running()) return;
    const d = Math.hypot(x - listener.x, y - listener.y, z - listener.z);
    playThunder(ctx, graph.outside, buffers, thunderProfile(d, power));
  }

  /**
   * @param {number} t
   * @param {{ boat: import('three').Object3D, floater: object, inside: number, listener: import('three').Vector3 }} s
   */
  function update(t, { boat, floater, inside, listener: ear }) {
    listener.x = ear.x; listener.y = ear.y; listener.z = ear.z;
    const bowHit = splash(floater.bowRate);
    const turn = creak(floater.roll.v * 60, t);
    if (!running()) return;
    const now = ctx.currentTime;

    const px = boat.position.x + WIND_PROBE[0], pz = boat.position.z + WIND_PROBE[2];
    wind.sample(px, WIND_PROBE[1], pz, t, probe);
    wind.meanAt(WIND_PROBE[1], mean);
    const speed = Math.hypot(probe[0], probe[1], probe[2]);
    const gust = gustLevel(speed, Math.hypot(mean[0], mean[2]), sigma);
    ambience.update(now, { speed, gust, sea: seaLevel(floater.heave.v * 60), pitch: floater.pitch.x });

    if (bowHit) {
      const s = Math.min(1, floater.bowRate / 2.5);
      playSplash(ctx, graph.outside, buffers, s);
      playHullThud(ctx, graph.inside, buffers, s);
    }
    if (turn) playCreak(ctx, graph.inside, buffers.creaks, Math.min(1, turn / CREAK.full));

    const mix = cabinMix(inside);
    graph.muffle.frequency.setTargetAtTime(mix.muffle, now, SMOOTH);
    graph.outside.gain.setTargetAtTime(mix.outside, now, SMOOTH);
    graph.inside.gain.setTargetAtTime(mix.inside, now, SMOOTH);
  }

  return {
    update, strike,
    /* 除錯用(?debug):__storm.audio.debug() 拿到 context 與總線,可以自己接 AnalyserNode 量音量 */
    debug: () => ({ ctx, ...graph })
  };
}
