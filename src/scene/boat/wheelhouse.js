/* =========================================================
   上層建築:下層居住艙 + 駕駛台(前窗外傾,北海漁船的標誌)
   ========================================================= */
import * as THREE from 'three';
import { mesh, roundedBox, rod, polyRod, drumZ } from '../parts.js';

const BASE_Y = 0.6;           // 埋進甲板一點,避免舷弧造成縫隙
const LOWER = { x0: -4.25, x1: -1.3, top: 1.85, halfW: 1.2 };
const BRIDGE = { rear: -3.55, front: -1.55, rake: 0.25, h: 1.15, halfW: 1.1, bevel: 0.04 };
const ROOF_Y = LOWER.top + BRIDGE.h + 0.13;
const RAKE = Math.atan(BRIDGE.rake / BRIDGE.h);

function bridgeShell(mat) {
  const s = new THREE.Shape();
  s.moveTo(BRIDGE.rear, 0);
  s.lineTo(BRIDGE.front, 0);
  s.lineTo(BRIDGE.front + BRIDGE.rake, BRIDGE.h);
  s.lineTo(BRIDGE.rear, BRIDGE.h);
  s.closePath();
  const depth = BRIDGE.halfW * 2 - BRIDGE.bevel * 2;
  const geo = new THREE.ExtrudeGeometry(s, {
    depth, bevelEnabled: true, bevelThickness: BRIDGE.bevel, bevelSize: BRIDGE.bevel, bevelSegments: 3
  });
  geo.translate(0, LOWER.top, -depth / 2);
  return new THREE.Mesh(geo, mat);
}

/* 前窗:放在外傾的斜面上 */
function frontWindows(mats) {
  const g = new THREE.Group();
  const yc = LOWER.top + 0.66;
  const t = (yc - LOWER.top) / BRIDGE.h;
  g.position.set(BRIDGE.front + BRIDGE.rake * t + BRIDGE.bevel / Math.cos(RAKE) + 0.008, yc, 0);
  g.rotation.z = -RAKE;
  for (const z of [-0.84, -0.42, 0, 0.42, 0.84]) {
    const pane = mesh(new THREE.PlaneGeometry(0.36, 0.56 / Math.cos(RAKE)), mats.glassLit, 0, 0, z);
    pane.rotation.y = Math.PI / 2;
    g.add(pane);
  }
  return g;
}

function sideWindows(mats) {
  const g = new THREE.Group();
  const zFace = BRIDGE.halfW + 0.008;
  for (const side of [1, -1]) {
    for (const x of [-3.15, -2.6, -2.05]) {
      const pane = mesh(new THREE.PlaneGeometry(0.42, 0.5), mats.glassLit, x, LOWER.top + 0.66, side * zFace);
      if (side < 0) pane.rotation.y = Math.PI;
      g.add(pane);
    }
  }
  for (const z of [-0.5, 0.5]) {
    const pane = mesh(new THREE.PlaneGeometry(0.5, 0.42), mats.glassDim, BRIDGE.rear - BRIDGE.bevel - 0.008, LOWER.top + 0.7, z);
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
  g.add(roundedBox(len, LOWER.top - BASE_Y, LOWER.halfW * 2, 0.06, mats.white,
    (LOWER.x0 + LOWER.x1) / 2, (LOWER.top + BASE_Y) / 2, 0));
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
  return g;
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
  group.add(lowerHouse(mats));
  group.add(bridgeShell(mats.white));
  group.add(frontWindows(mats));
  group.add(sideWindows(mats));
  group.add(roof(mats));
  const gear = roofGear(mats);
  group.add(gear.group);
  group.add(sidelights(mats));
  group.add(funnelAndRaft(mats));

  // 駕駛台燈光從前窗溢出,照亮前甲板與水面
  const cabinLight = new THREE.PointLight(0xffa45c, 18, 38, 2);
  cabinLight.position.set(-1.15, 2.35, 0);
  group.add(cabinLight);

  return { group, cabinLight, radar: gear.scanner };
}
