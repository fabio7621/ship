/* =========================================================
   艙內 UI:滑鼠移到駕駛台時的提示、艙內底部的位置切換列
   純 DOM,樣式注入一次;配色取自艙內的暖色燈光
   ========================================================= */

const CSS = `
.cabin-hint {
  position: fixed; pointer-events: none; z-index: 10;
  padding: 6px 10px; border-radius: 6px;
  font: 500 13px/1.2 system-ui, -apple-system, "PingFang TC", sans-serif; letter-spacing: 0.04em;
  color: #ffe2b8; background: rgba(12, 10, 8, 0.72); border: 1px solid rgba(255, 196, 120, 0.35);
  transform: translate(14px, 14px); opacity: 0; transition: opacity 0.18s;
}
.cabin-hint.on { opacity: 1; }
.cabin-bar {
  position: fixed; left: 50%; bottom: 22px; z-index: 10;
  display: flex; gap: 6px; padding: 6px; border-radius: 12px;
  background: rgba(10, 9, 8, 0.66); border: 1px solid rgba(255, 196, 120, 0.22);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  transform: translate(-50%, 16px); opacity: 0; pointer-events: none;
  transition: opacity 0.35s, transform 0.35s;
  max-width: calc(100vw - 32px); flex-wrap: wrap; justify-content: center;
}
.cabin-bar.on { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
.cabin-bar button {
  display: flex; align-items: center; gap: 6px; padding: 8px 12px; border-radius: 8px;
  font: 500 14px/1 system-ui, -apple-system, "PingFang TC", sans-serif; color: #e9dcc7;
  background: transparent; border: 1px solid transparent; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.cabin-bar button:hover { background: rgba(255, 196, 120, 0.1); }
.cabin-bar button:focus-visible { outline: 2px solid #ffb35c; outline-offset: 1px; }
.cabin-bar button.active { color: #1a1206; background: #f2b468; }
.cabin-bar kbd {
  font: 600 11px/1 ui-monospace, Menlo, monospace; padding: 2px 5px; border-radius: 4px;
  background: rgba(255, 255, 255, 0.1); color: inherit; opacity: 0.8;
}
.cabin-bar button.active kbd { background: rgba(0, 0, 0, 0.15); }
.cabin-bar .sep { width: 1px; margin: 4px 2px; background: rgba(255, 196, 120, 0.2); }
.cabin-bar .exit { color: #c9bfb0; }
.cabin-toast {
  position: fixed; left: 50%; bottom: 84px; z-index: 10; pointer-events: none;
  padding: 7px 12px; border-radius: 8px; transform: translateX(-50%);
  font: 500 13px/1.3 system-ui, -apple-system, "PingFang TC", sans-serif; letter-spacing: 0.03em;
  color: #ffe2b8; background: rgba(12, 10, 8, 0.66); border: 1px solid rgba(255, 196, 120, 0.25);
  opacity: 0; transition: opacity 0.5s; max-width: calc(100vw - 32px); text-align: center;
}
.cabin-toast.on { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .cabin-bar, .cabin-hint, .cabin-toast { transition: none; } }
`;

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function button(label, key, onClick, extraClass = '') {
  const b = el('button', extraClass);
  b.type = 'button';
  b.append(el('kbd', '', key), el('span', '', label));
  b.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
  return b;
}

/**
 * @param {{stations: {label: string}[], onStation: (i: number) => void, onExit: () => void}} opts
 */
export function createCabinHud({ stations, onStation, onExit }) {
  const style = el('style');
  style.textContent = CSS;
  document.head.append(style);

  const hint = el('div', 'cabin-hint', '點擊進入駕駛艙(或按 E)');
  const bar = el('nav', 'cabin-bar');
  bar.setAttribute('aria-label', '駕駛艙視角');
  const buttons = stations.map((s, i) => button(s.label, String(i + 1), () => onStation(i)));
  bar.append(...buttons, el('div', 'sep'), button('離開', 'Esc', onExit, 'exit'));
  const toast = el('div', 'cabin-toast');
  toast.setAttribute('role', 'status');
  document.body.append(hint, bar, toast);
  let toastTimer = 0;

  return {
    setHover: (on) => hint.classList.toggle('on', on),
    moveHint: (x, y) => { hint.style.left = `${x}px`; hint.style.top = `${y}px`; },
    showBar: (on) => bar.classList.toggle('on', on),
    setActive: (i) => buttons.forEach((b, k) => b.classList.toggle('active', k === i)),
    toast: (text, ms = 4500) => {
      toast.textContent = text;
      toast.classList.add('on');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('on'), ms);
    }
  };
}
