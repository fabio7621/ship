/* =========================================================
   艙體:內牆襯板(含窗洞)、地板(含樓梯口)、天花板、窗框、玻璃上的雨
   每面牆都描述成「平面座標 (u, v) + 往艙內的法線」,襯板/玻璃/窗框共用同一套座標
   ========================================================= */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mesh, rod, rods, drumZ } from '../parts.js';
import {
  RAKE, WALL, WINDOW_Y, OUTER, CABIN, HOLE_INSET,
  FRONT_WINDOWS, SIDE_WINDOWS, REAR_WINDOWS, frontOuterX, frontInnerX
} from './layout.js';

const COS = Math.cos(RAKE), SIN = Math.sin(RAKE);
export const STAIRS = { x0: -3.48, x1: -3.02, z0: -1.0, z1: -0.52 };
const BEAMS_X = [-3.3, -2.85, -2.4, -1.95];

/* 四面牆:basis = [u 方向, v 方向, 往艙內法線],origin = 外表面上的 (u,v)=(0,0) */
function wallDefs() {
  const sides = [1, -1].map((side) => ({
    basis: [new THREE.Vector3(-side, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -side)],
    origin: new THREE.Vector3(0, 0, side * OUTER.halfW),
    outline: [[CABIN.rear, CABIN.floor], [frontInnerX(CABIN.floor), CABIN.floor], [frontInnerX(CABIN.ceil), CABIN.ceil], [CABIN.rear, CABIN.ceil]]
      .map(([x, y]) => [-side * x, y]),
    holes: SIDE_WINDOWS.x.map((x) => [-side * x, WINDOW_Y, SIDE_WINDOWS.w, SIDE_WINDOWS.h])
  }));
  const vSpan = (CABIN.ceil - CABIN.floor) / COS;
  const front = {
    basis: [new THREE.Vector3(0, 0, 1), new THREE.Vector3(SIN, COS, 0), new THREE.Vector3(-COS, SIN, 0)],
    origin: new THREE.Vector3(frontOuterX(CABIN.floor), CABIN.floor, 0),
    outline: [[-CABIN.halfW, 0], [CABIN.halfW, 0], [CABIN.halfW, vSpan], [-CABIN.halfW, vSpan]],
    holes: FRONT_WINDOWS.z.map((z) => [z, (WINDOW_Y - CABIN.floor) / COS, FRONT_WINDOWS.w, FRONT_WINDOWS.h / COS]),
    front: true
  };
  const rear = {
    basis: [new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0)],
    origin: new THREE.Vector3(OUTER.rear, 0, 0),
    outline: [[-CABIN.halfW, CABIN.floor], [CABIN.halfW, CABIN.floor], [CABIN.halfW, CABIN.ceil], [-CABIN.halfW, CABIN.ceil]],
    holes: REAR_WINDOWS.z.map((z) => [-z, REAR_WINDOWS.y, REAR_WINDOWS.w, REAR_WINDOWS.h])
  };
  return [...sides, front, rear];
}

/** 平面座標 → 船身座標,depth = 從外表面往內的距離 */
function wallMatrix(def, depth) {
  const [u, v, n] = def.basis;
  const o = def.origin.clone().addScaledVector(n, depth);
  return new THREE.Matrix4().makeBasis(u, v, n).setPosition(o);
}

function rectPath(cx, cy, w, h) {
  return new THREE.Path([
    new THREE.Vector2(cx - w / 2, cy - h / 2), new THREE.Vector2(cx + w / 2, cy - h / 2),
    new THREE.Vector2(cx + w / 2, cy + h / 2), new THREE.Vector2(cx - w / 2, cy + h / 2)
  ]);
}

function holeSize(w, h) {
  return [w - HOLE_INSET * 2, h - HOLE_INSET * 2];
}

function lining(defs, mat) {
  const geos = defs.map((d) => {
    const s = new THREE.Shape(d.outline.map(([x, y]) => new THREE.Vector2(x, y)));
    s.holes = d.holes.map(([cx, cy, w, h]) => rectPath(cx, cy, ...holeSize(w, h)));
    return new THREE.ShapeGeometry(s).applyMatrix4(wallMatrix(d, WALL + 0.002));
  });
  return new THREE.Mesh(mergeGeometries(geos), mat);
}

/* 窗框:四根木條圍住窗洞,往艙內凸出 */
function windowFrames(defs, mat) {
  const T = 0.028, D = 0.03;
  const geos = [];
  for (const d of defs) {
    const m = wallMatrix(d, WALL + D / 2);
    for (const [cx, cy, w0, h0] of d.holes) {
      const [w, h] = holeSize(w0, h0);
      for (const [x, y, bw, bh] of [[cx, cy + h / 2 + T / 2, w + T * 2, T], [cx, cy - h / 2 - T / 2, w + T * 2, T * 1.6],
        [cx - w / 2 - T / 2, cy, T, h], [cx + w / 2 + T / 2, cy, T, h]]) {
        geos.push(new THREE.BoxGeometry(bw, bh, D).translate(x, y, 0).applyMatrix4(m));
      }
    }
  }
  return new THREE.Mesh(mergeGeometries(geos), mat);
}

/* 玻璃:雨滴層 + 往下流的水痕層(各合併成一個 draw call);中間前窗是清視窗,另用中間淨空的雨滴 */
function glass(defs, mats) {
  const drops = [], clear = [], streaks = [];
  for (const d of defs) {
    const m = wallMatrix(d, WALL / 2);
    d.holes.forEach(([cx, cy, w, h], i) => {
      const plane = () => new THREE.PlaneGeometry(w, h).translate(cx, cy, 0).applyMatrix4(m);
      (d.front && i === 2 ? clear : drops).push(plane());
      streaks.push(plane());
    });
  }
  const g = new THREE.Group();
  g.add(new THREE.Mesh(mergeGeometries(drops), mats.droplets));
  g.add(new THREE.Mesh(mergeGeometries(clear), mats.dropletsClear));
  g.add(new THREE.Mesh(mergeGeometries(streaks), mats.streaks));
  return g;
}

/* 旋轉清視窗(Kent clear-view screen):北海漁船的招牌,玻璃圓盤高速旋轉甩掉雨水 */
function clearView(front, mats) {
  const holder = new THREE.Group();
  holder.applyMatrix4(wallMatrix(front, WALL / 2 - 0.006));
  holder.position.add(new THREE.Vector3(SIN, COS, 0).multiplyScalar((WINDOW_Y - CABIN.floor) / COS));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.13, 40), mats.streaks.clone());
  disc.material.opacity = 0.12;
  holder.add(disc);
  const inner = new THREE.Group();
  inner.position.z = WALL / 2 + 0.006;
  inner.add(mesh(new THREE.TorusGeometry(0.135, 0.008, 8, 40), mats.panel));
  const motor = mesh(new THREE.CylinderGeometry(0.032, 0.036, 0.06, 18), mats.panel, 0, 0, 0.03);
  motor.rotation.x = Math.PI / 2;
  inner.add(motor);
  inner.add(mesh(new THREE.SphereGeometry(0.012, 10, 8), mats.chrome, 0, 0, 0.062));
  holder.add(inner);
  return { group: holder, disc };
}

/* 兩側前窗的雨刷:馬達在窗內上緣,刷臂在窗外擺動 */
function wipers(front, mats) {
  const g = new THREE.Group();
  const arms = [];
  for (const z of [FRONT_WINDOWS.z[1], FRONT_WINDOWS.z[3]]) {
    const vTop = (WINDOW_Y - CABIN.floor) / COS + FRONT_WINDOWS.h / COS / 2;
    const motor = new THREE.Group();
    motor.applyMatrix4(wallMatrix(front, WALL + 0.02));
    motor.position.add(new THREE.Vector3(SIN, COS, 0).multiplyScalar(vTop + 0.035)).add(new THREE.Vector3(0, 0, z));
    motor.add(drumZ(0.022, 0.05, mats.panel, 0, 0, 0));
    g.add(motor);

    const pivot = new THREE.Group();
    pivot.applyMatrix4(wallMatrix(front, -0.014));
    pivot.position.add(new THREE.Vector3(SIN, COS, 0).multiplyScalar(vTop - 0.01)).add(new THREE.Vector3(0, 0, z));
    const arm = new THREE.Group();
    arm.add(mesh(new THREE.BoxGeometry(0.008, 0.34, 0.006), mats.rubber, 0, -0.17, 0));
    arm.add(mesh(new THREE.BoxGeometry(0.014, 0.3, 0.01), mats.rubber, 0, -0.2, -0.004));
    pivot.add(arm);
    g.add(pivot);
    arms.push(arm);
  }
  return { group: g, arms };
}

function floor(mats) {
  const xf = frontInnerX(CABIN.floor);
  const s = new THREE.Shape([
    new THREE.Vector2(CABIN.rear, -CABIN.halfW), new THREE.Vector2(xf, -CABIN.halfW),
    new THREE.Vector2(xf, CABIN.halfW), new THREE.Vector2(CABIN.rear, CABIN.halfW)
  ]);
  s.holes = [rectPath((STAIRS.x0 + STAIRS.x1) / 2, -(STAIRS.z0 + STAIRS.z1) / 2, STAIRS.x1 - STAIRS.x0, STAIRS.z1 - STAIRS.z0)];
  const geo = new THREE.ShapeGeometry(s);
  geo.rotateX(-Math.PI / 2).translate(0, CABIN.floor, 0);
  return new THREE.Mesh(geo, mats.floor);
}

/* 通往下層居住艙的樓梯口:往下看是暗的,只看得到前幾階 */
function stairwell(mats) {
  const g = new THREE.Group();
  const { x0, x1, z0, z1 } = STAIRS;
  const depth = 1.1, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
  const well = new THREE.Mesh(new THREE.BoxGeometry(w, depth, d), new THREE.MeshStandardMaterial({ color: 0x0b0a09, side: THREE.BackSide }));
  well.position.set(cx, CABIN.floor - depth / 2, cz);
  g.add(well);
  for (let i = 0; i < 4; i++) {
    const y = CABIN.floor - 0.22 * (i + 1), x = x1 - 0.06 - i * 0.12;
    g.add(mesh(new THREE.BoxGeometry(0.16, 0.03, d - 0.02), mats.woodDark, x, y, cz));
    g.add(mesh(new THREE.BoxGeometry(0.02, 0.012, d - 0.04), mats.steel, x + 0.07, y + 0.02, cz));
  }
  // 洞口包邊 + 扶手
  g.add(rods([
    [[x0, CABIN.floor + 0.006, z1], [x1, CABIN.floor + 0.006, z1]],
    [[x1, CABIN.floor + 0.006, z0], [x1, CABIN.floor + 0.006, z1]]
  ], 0.012, mats.brass));
  const hx = x1 + 0.03, hz = z1 + 0.04;
  g.add(rod([x0 + 0.05, CABIN.floor, hz], [x0 + 0.05, CABIN.floor + 0.85, hz], 0.016, mats.chrome, 10));
  g.add(rod([x0 + 0.05, CABIN.floor + 0.85, hz], [hx, CABIN.floor + 0.85, hz], 0.016, mats.chrome, 10));
  g.add(rod([hx, CABIN.floor + 0.85, hz], [hx, CABIN.floor, hz], 0.016, mats.chrome, 10));
  return g;
}

function ceiling(mats) {
  const g = new THREE.Group();
  const xf = frontInnerX(CABIN.ceil);
  const geo = new THREE.PlaneGeometry(xf - CABIN.rear, CABIN.halfW * 2);
  geo.rotateX(Math.PI / 2).translate((xf + CABIN.rear) / 2, CABIN.ceil - 0.002, 0);
  g.add(new THREE.Mesh(geo, mats.paint));
  const beams = BEAMS_X.map((x) => new THREE.BoxGeometry(0.05, 0.05, CABIN.halfW * 2).translate(x, CABIN.ceil - 0.025, 0));
  g.add(new THREE.Mesh(mergeGeometries(beams), mats.woodDark));
  // 電線管 + 天花板扶把(大浪時抓的)
  g.add(rod([CABIN.rear, CABIN.ceil - 0.07, 0.62], [xf - 0.05, CABIN.ceil - 0.07, 0.62], 0.016, mats.paint, 8));
  g.add(rod([CABIN.rear + 0.3, CABIN.ceil - 0.1, -0.35], [-1.9, CABIN.ceil - 0.1, -0.35], 0.014, mats.chrome, 10));
  for (const x of [CABIN.rear + 0.3, -2.6, -1.9]) g.add(rod([x, CABIN.ceil - 0.05, -0.35], [x, CABIN.ceil - 0.1, -0.35], 0.01, mats.chrome));
  // 天花板中間的黃光吸頂燈:乳白燈罩 + 艙內主要光源(調得很暗,只是讓艙裡有一層暖暖的微光)
  const dome = mesh(new THREE.SphereGeometry(0.075, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2), mats.domeLamp, -2.5, CABIN.ceil - 0.02, 0.1);
  dome.rotation.x = Math.PI;
  g.add(dome);
  g.add(mesh(new THREE.TorusGeometry(0.078, 0.008, 8, 28), mats.brass, -2.5, CABIN.ceil - 0.02, 0.1).rotateX(Math.PI / 2));
  const light = new THREE.PointLight(0xffc56b, 0, 5, 1.4);
  light.position.set(-2.5, CABIN.ceil - 0.14, 0.1);
  g.add(light);
  return { group: g, light };
}

/* 下層艙壁頂端到襯板之間的踢腳板,遮住地板邊緣 */
function skirting(mats) {
  const y = CABIN.floor + 0.05, h = 0.1, hw = CABIN.halfW - 0.008;
  const xf = frontInnerX(y) - 0.01;
  const geos = [
    new THREE.BoxGeometry(xf - CABIN.rear, h, 0.016).translate((xf + CABIN.rear) / 2, y, hw),
    new THREE.BoxGeometry(xf - STAIRS.x1, h, 0.016).translate((xf + STAIRS.x1) / 2, y, -hw),
    new THREE.BoxGeometry(0.016, h, CABIN.halfW * 2).translate(CABIN.rear + 0.008, y, 0)
  ];
  return new THREE.Mesh(mergeGeometries(geos), mats.woodDark);
}

export function buildShell(mats) {
  const group = new THREE.Group();
  const defs = wallDefs();
  const front = defs.find((d) => d.front);
  group.add(lining(defs, mats.wood), windowFrames(defs, mats.woodDark), glass(defs, mats),
    floor(mats), stairwell(mats), skirting(mats));
  const ceil = ceiling(mats);
  group.add(ceil.group);
  const cv = clearView(front, mats);
  const wp = wipers(front, mats);
  group.add(cv.group, wp.group);
  return { group, clearViewDisc: cv.disc, wiperArms: wp.arms, ceilingLight: ceil.light };
}
