/* =========================================================
   右上角的聲音開關:配色跟艙內 HUD 一致
   還沒出聲前旁邊會有一行提示(瀏覽器要求互動後才能播放)
   ========================================================= */

const CSS = `
.sound-toggle {
  position: fixed; top: 16px; right: 16px; z-index: 11;
  display: flex; align-items: center; gap: 8px; padding: 8px 12px 8px 10px; border-radius: 10px;
  font: 500 13px/1 system-ui, -apple-system, "PingFang TC", sans-serif; letter-spacing: 0.03em;
  color: #e9dcc7; background: rgba(10, 9, 8, 0.6); border: 1px solid rgba(255, 196, 120, 0.22);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  cursor: pointer; transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.sound-toggle:hover { background: rgba(30, 24, 16, 0.72); border-color: rgba(255, 196, 120, 0.4); }
.sound-toggle:focus-visible { outline: 2px solid #ffb35c; outline-offset: 2px; }
.sound-toggle svg { width: 18px; height: 18px; flex: none; }
.sound-toggle .waves { transition: opacity 0.2s; }
.sound-toggle[aria-pressed="false"] .waves { opacity: 0; }
.sound-toggle[aria-pressed="true"] .slash { opacity: 0; }
.sound-toggle[aria-pressed="true"] { color: #ffe2b8; }
.sound-toggle kbd {
  font: 600 11px/1 ui-monospace, Menlo, monospace; padding: 2px 5px; border-radius: 4px;
  background: rgba(255, 255, 255, 0.1); opacity: 0.75;
}
@media (prefers-reduced-motion: reduce) { .sound-toggle, .sound-toggle .waves { transition: none; } }
`;

const ICON = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z" fill="currentColor" fill-opacity="0.18"/>
  <path class="waves" d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.4a8 8 0 0 1 0 11.2"/>
  <path class="slash" d="M16 9.5l5 5M21 9.5l-5 5"/>
</svg>`;

const LABEL_OFF = '點任意處開啟聲音', LABEL_ON = '聲音', LABEL_MUTED = '已靜音';

/**
 * @param {{ on: boolean, hint?: boolean, onToggle: () => void }} opts hint:顯示「點任意處開啟」提示
 */
export function createSoundToggle({ on, hint = true, onToggle }) {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.append(style);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'sound-toggle';
  btn.innerHTML = ICON;
  const label = document.createElement('span');
  const kbd = document.createElement('kbd');
  kbd.textContent = 'M';
  btn.append(label, kbd);
  btn.addEventListener('click', (e) => { e.stopPropagation(); onToggle(); });
  document.body.append(btn);

  const state = { on, touched: !hint };
  function render() {
    btn.setAttribute('aria-pressed', String(state.on));
    btn.setAttribute('aria-label', state.on ? '關閉聲音' : '開啟聲音');
    label.textContent = state.on ? LABEL_ON : state.touched ? LABEL_MUTED : LABEL_OFF;
  }
  render();

  return {
    get on() { return state.on; },
    set(v) { state.on = v; state.touched = true; render(); },
    owns: (target) => btn.contains(target),
    unsupported() { btn.remove(); }
  };
}
