/* =========================================================
   上層建築:下層居住艙 + 駕駛台(前窗外傾,北海漁船的標誌)
   駕駛台是「有窗洞的薄牆」:平常窗洞被亮窗貼片蓋住,進艙過場時貼片淡出才看得到艙內
   ========================================================= */
import * as THREE from 'three';
import { mesh, roundedBox, rod, polyRod, drumZ } from '../parts.js';
import {
  LOWER, BRIDGE, ROOF_Y, RAKE, WALL, WINDOW_Y, OUTER, HOLE_INSET,
  FRONT_WINDOWS, SIDE_WINDOWS, REAR_WINDOWS, frontOuterX
} from '../cabin/layout.js';

const BASE_Y = 0.6;           // 埋進甲板一點,避免舷弧造成縫隙
const EDGE = 0.012;           // 牆板倒角

function rectPath(cx, cy, w, h) {
  const p = new THREE.Path();
  p.moveTo(cx - w / 2, cy - h / 2);
  p.lineTo(cx + w / 2, cy - h / 2);
  p.lineTo(cx + w / 2, cy + h / 2);
  p.lineTo(cx - w / 2, cy + h / 2);
  p.closePath();
  return p;
}

/**
 * 一片有窗洞的牆:shape 畫在 (X, Y) 平面,往 Z 擠出 WALL 厚(Z 指向艙內)
 * @param {THREE.Vector3[]} basis [X, Y, Z] 在船身座標的方向
 */
function wallPanel(outline, holes, mat, basis, origin) {
  const s = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(x, y)));
  s.holes = holes.map(([cx, cy, w, h]) => rectPath(cx, cy, w, h));
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: WALL - EDGE * 2, bevelEnabled: true,
    bevelThickness: EDGE, bevelSize: EDGE, bevelOffset: -EDGE, bevelSegments: 2
  });
  geo.translate(0, 0, EDGE);
  geo.applyMatrix4(new THREE.Matrix4().makeBasis(...basis).setPosition(origin));
  return new THREE.Mesh(geo, mat);
}

function bridgeShell(mat) {
  const g = new THREE.Group();
  const { rear, halfW, bottom, top } = OUTER;
  const xf0 = frontOuterX(bottom), xf1 = frontOuterX(top);
  const cosR = Math.cos(RAKE), sinR = Math.sin(RAKE);
  const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0);

  // 左右舷牆:basis 要維持右手系(不然面會翻過來被剔除),右舷的 shape x 因此是 -x
  for (const side of [1, -1]) {
    const flip = -side;
    const outline = [[rear, bottom], [xf0, bottom], [xf1, top], [rear, top]].map(([x, y]) => [x * flip, y]);
    const holes = SIDE_WINDOWS.x.map((x) => [x * flip, WINDOW_Y, SIDE_WINDOWS.w - HOLE_INSET * 2, SIDE_WINDOWS.h - HOLE_INSET * 2]);
    const basis = [new THREE.Vector3(flip, 0, 0), Y, new THREE.Vector3(0, 0, -side)];
    g.add(wallPanel(outline, holes, mat, basis, new THREE.Vector3(0, 0, side * halfW)));
  }

  // 外傾前牆:shape 的 x = 船身 z、y = 沿斜面往上的距離
  const slopeLen = (top - bottom) / cosR;
  const frontHoles = FRONT_WINDOWS.z.map((z) => [
    z, (WINDOW_Y - bottom) / cosR, FRONT_WINDOWS.w - HOLE_INSET * 2, FRONT_WINDOWS.h / cosR - HOLE_INSET * 2
  ]);
  g.add(wallPanel([[-halfW, 0], [halfW, 0], [halfW, slopeLen], [-halfW, slopeLen]], frontHoles, mat,
    [new THREE.Vector3(0, 0, 1), new THREE.Vector3(sinR, cosR, 0), new THREE.Vector3(-cosR, sinR, 0)],
    new THREE.Vector3(xf0, bottom, 0)));

  // 後牆:shape 的 x = 船身 -z
  const rearHoles = REAR_WINDOWS.z.map((z) => [-z, REAR_WINDOWS.y, REAR_WINDOWS.w - HOLE_INSET * 2, REAR_WINDOWS.h - HOLE_INSET * 2]);
  g.add(wallPanel([[-halfW, bottom], [halfW, bottom], [halfW, top], [-halfW, top]], rearHoles, mat,
    [new THREE.Vector3(0, 0, -1), Y, X], new THREE.Vector3(rear, 0, 0)));
  return g;
}

/* 駕駛台窗片:亮窗貼圖。另外 clone 一份材質,進艙過場時才能單獨淡出 */
function bridgeGlass(mats) {
  const fade = (m) => Object.assign(m.clone(), { transparent: true, depthWrite: true });
  return { lit: fade(mats.glassLit), dim: fade(mats.glassDim) };
}

/* 前窗:放在外傾的斜面上 */
function frontWindows(glass) {
  const g = new THREE.Group();
  g.position.set(frontOuterX(WINDOW_Y) + 0.008, WINDOW_Y, 0);
  g.rotation.z = -RAKE;
  for (const z of FRONT_WINDOWS.z) {
    const pane = mesh(new THREE.PlaneGeometry(FRONT_WINDOWS.w, FRONT_WINDOWS.h / Math.cos(RAKE)), glass.lit, 0, 0, z);
    pane.rotation.y = Math.PI / 2;
    g.add(pane);
  }
  return g;
}

function sideWindows(glass) {
  const g = new THREE.Group();
  const zFace = OUTER.halfW + 0.008;
  for (const side of [1, -1]) {
    for (const x of SIDE_WINDOWS.x) {
      const pane = mesh(new THREE.PlaneGeometry(SIDE_WINDOWS.w, SIDE_WINDOWS.h), glass.lit, x, WINDOW_Y, side * zFace);
      if (side < 0) pane.rotation.y = Math.PI;
      g.add(pane);
    }
  }
  for (const z of REAR_WINDOWS.z) {
    const pane = mesh(new THREE.PlaneGeometry(REAR_WINDOWS.w, REAR_WINDOWS.h), glass.dim, OUTER.rear - 0.008, REAR_WINDOWS.y, z);
    pane.rotation.y = -Math.PI / 2;
    g.add(pane);
  }
  return g;
}

function porthole(mats, lit, x, y, z, rotY) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CircleGeometry(0.115, 24), lit ? mats.glassLit : mats.glassDark));
  g.add(mesh(new THREE.TorusGeometry(0.125, 0.022, 8, 24), mats.brass));
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  return g;
}

function lowerHouse(mats) {
  const g = new THREE.Group();
  const len = LOWER.x1 - LOWER.x0;
  // 獨立材質:艙內模式要用 clipping 把穿進下沉艙內的那塊頂面裁掉
  const body = roundedBox(len, LOWER.top - BASE_Y, LOWER.halfW * 2, 0.06, mats.white.clone(),
    (LOWER.x0 + LOWER.x1) / 2, (LOWER.top + BASE_Y) / 2, 0);
  g.add(body);
  const zf = LOWER.halfW + 0.012;
  [[-3.3, true], [-2.8, false], [-1.65, true]].forEach(([x, lit]) => {
    g.add(porthole(mats, lit, x, 1.38, zf, 0));
    g.add(porthole(mats, !lit, x, 1.38, -zf, Math.PI));
  });
  for (const z of [-0.6, 0.6]) g.add(porthole(mats, z > 0, LOWER.x1 + 0.012, 1.4, z, Math.PI / 2));

  // 右舷艙門(含小圓窗、把手)
  g.add(roundedBox(0.64, 1.02, 0.05, 0.02, mats.steel, -2.2, 0.72 + 0.51, LOWER.halfW + 0.02));
  g.add(porthole(mats, true, -2.2, 1.45, LOWER.halfW + 0.05, 0));
  g.add(mesh(new THREE.BoxGeometry(0.1, 0.03, 0.04), mats.brass, -1.98, 1.12, LOWER.halfW + 0.06));

  // 艙壁扶手
  for (const side of [1, -1]) {
    const z = side * (LOWER.halfW + 0.07);
    g.add(rod([LOWER.x0 + 0.15, 1.62, z], [LOWER.x1 - 0.15, 1.62, z], 0.018, mats.steel));
    for (const x of [LOWER.x0 + 0.2, -2.6, LOWER.x1 - 0.2]) g.add(rod([x, 1.62, z], [x, 1.62, z * 0.95], 0.012, mats.steel));
  }

  // 後側直梯
  const lx = LOWER.x0 - 0.04;
  g.add(rod([lx, 0.8, 0.3], [lx, 2.2, 0.3], 0.018, mats.steel));
  g.add(rod([lx, 0.8, 0.65], [lx, 2.2, 0.65], 0.018, mats.steel));
  for (let y = 1.0; y < 2.0; y += 0.25) g.add(rod([lx, y, 0.3], [lx, y, 0.65], 0.012, mats.steel));

  // 救生圈
  const ring = mesh(new THREE.TorusGeometry(0.26, 0.055, 12, 32), mats.ring, -3.86, 1.24, LOWER.halfW + 0.07);
  g.add(ring);
  return { group: g, body };
}

function roof(mats) {
  const g = new THREE.Group();
  const x0 = BRIDGE.rear - 0.15, x1 = BRIDGE.front + BRIDGE.rake + 0.2;
  g.add(roundedBox(x1 - x0, 0.09, BRIDGE.halfW * 2 + 0.2, 0.03, mats.white, (x0 + x1) / 2, ROOF_Y - 0.045, 0));
  const visor = mesh(new THREE.BoxGeometry(0.34, 0.025, BRIDGE.halfW * 2 + 0.1), mats.white, x1 + 0.12, ROOF_Y - 0.12, 0);
  visor.rotation.z = -0.35;
  g.add(visor);

  // 頂部護欄
  const rx0 = x0 + 0.08, rx1 = x1 - 0.1, rz = BRIDGE.halfW;
  const top = ROOF_Y + 0.38;
  g.add(polyRod([[rx0, top, -rz], [rx1, top, -rz], [rx1, top, rz], [rx0, top, rz], [rx0, top, -rz]], 0.016, mats.steel));
  for (const x of [rx0, (rx0 + rx1) / 2, rx1]) {
    for (const z of [-rz, rz]) g.add(rod([x, ROOF_Y, z], [x, top, z], 0.014, mats.steel));
  }
  return g;
}

function roofGear(mats) {
  const g = new THREE.Group();
  // 雷達:桅柱 + 旋轉天線
  g.add(rod([-3.0, ROOF_Y, 0], [-3.0, ROOF_Y + 0.6, 0], 0.06, mats.white, 12));
  g.add(roundedBox(0.28, 0.18, 0.26, 0.03, mats.white, -3.0, ROOF_Y + 0.68, 0));
  const scanner = new THREE.Group();
  scanner.position.set(-3.0, ROOF_Y + 0.8, 0);
  scanner.add(roundedBox(1.7, 0.1, 0.15, 0.04, mats.white, 0, 0, 0));
  scanner.add(mesh(new THREE.BoxGeometry(1.6, 0.04, 0.02), mats.steel, 0, 0, 0.075));
  g.add(scanner);

  // 衛星天線罩
  g.add(rod([-3.4, ROOF_Y, -0.72], [-3.4, ROOF_Y + 0.28, -0.72], 0.05, mats.steel));
  g.add(mesh(new THREE.SphereGeometry(0.2, 20, 14), mats.white, -3.4, ROOF_Y + 0.44, -0.72));

  // 鞭狀天線(略往後仰)
  g.add(rod([-3.5, ROOF_Y, 0.95], [-3.72, ROOF_Y + 2.4, 1.0], 0.014, mats.rigging));
  g.add(rod([-3.5, ROOF_Y, -0.95], [-3.8, ROOF_Y + 1.9, -1.0], 0.012, mats.rigging));

  // 探照燈
  const lamp = drumZ(0.1, 0.24, mats.steel, -1.5, ROOF_Y + 0.18, 0.78);
  lamp.rotation.set(0, 0, Math.PI / 2);
  g.add(lamp);
  g.add(rod([-1.5, ROOF_Y, 0.78], [-1.5, ROOF_Y + 0.1, 0.78], 0.03, mats.steel));
  const lens = mesh(new THREE.CircleGeometry(0.085, 18), mats.glassDim, -1.375, ROOF_Y + 0.18, 0.78);
  lens.rotation.y = Math.PI / 2;
  g.add(lens);

  return { group: g, scanner };
}

/* 舷燈:右舷綠、左舷紅(國際避碰規則) */
function sidelights(mats) {
  const g = new THREE.Group();
  for (const [side, lampMat] of [[1, mats.lampGreen], [-1, mats.lampRed]]) {
    const z = side * (BRIDGE.halfW + 0.12);
    g.add(roundedBox(0.26, 0.18, 0.05, 0.01, mats.steel, -1.85, LOWER.top + 1.0, z + side * 0.06));
    g.add(roundedBox(0.16, 0.12, 0.09, 0.02, mats.steel, -1.78, LOWER.top + 1.0, z));
    g.add(mesh(new THREE.BoxGeometry(0.06, 0.08, 0.08), lampMat, -1.69, LOWER.top + 1.0, z));
  }
  return g;
}

function funnelAndRaft(mats) {
  const g = new THREE.Group();
  const funnel = new THREE.Group();
  funnel.position.set(-3.95, LOWER.top, -0.6);
  funnel.rotation.z = 0.08;
  funnel.add(mesh(new THREE.CylinderGeometry(0.17, 0.22, 1.35, 24), mats.hullPlain, 0, 0.675, 0));
  funnel.add(mesh(new THREE.CylinderGeometry(0.175, 0.178, 0.2, 24), mats.rubber, 0, 1.28, 0));
  g.add(funnel);

  const raft = drumZ(0.21, 0.75, mats.white, -3.95, LOWER.top + 0.27, 0.62, 20);
  raft.rotation.set(0, 0, Math.PI / 2);
  g.add(raft);
  for (const x of [-4.2, -3.7]) g.add(rod([x, LOWER.top, 0.62], [x, LOWER.top + 0.1, 0.62], 0.03, mats.steel));
  return g;
}

export function buildWheelhouse(mats) {
  const group = new THREE.Group();
  const lower = lowerHouse(mats);
  const glass = bridgeGlass(mats);
  group.add(lower.group);
  group.add(bridgeShell(mats.white));
  group.add(frontWindows(glass));
  group.add(sideWindows(glass));
  group.add(roof(mats));
  const gear = roofGear(mats);
  group.add(gear.group);
  group.add(sidelights(mats));
  group.add(funnelAndRaft(mats));

  // 駕駛台燈光從前窗溢出,照亮前甲板與水面
  const cabinLight = new THREE.PointLight(0xffa45c, 18, 38, 2);
  cabinLight.position.set(-1.15, 2.35, 0);
  group.add(cabinLight);

  return { group, cabinLight, radar: gear.scanner, glass, lowerBody: lower.body };
}
