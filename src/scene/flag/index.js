/* =========================================================
   船尾的「洋流」旗:在暴風雨裡被視風扯得筆直、尾端狂甩
   - 布料在世界座標模擬(physics/flagCloth),掛點每幀跟著船的姿態移動
   - 風:與海面頻譜同一組 U10 / 風向 / 船速,加上海面紊流
   - 單層印刷旗:背面看到的是透過來的反向圖案(DoubleSide 同一張貼圖剛好就是這樣)
   ========================================================= */
import * as THREE from 'three';
import flagUrl from '../../assets/flag-yangliu.webp';
import { createCloth, stepCloth } from '../../physics/flagCloth.js';
import { FABRIC_DRY_DENSITY, WET_UPTAKE, wetArealDensity } from '../../physics/flagAero.js';
import { createWindField, WIND_SPEED_10M } from '../../physics/wind.js';
import { WIND_DIR, DRIFT } from '../../physics/waves.js';
import { FLAG_SIZE, flagPinsLocal } from '../boat/flagStaff.js';
import { createFlagDroplets } from './droplets.js';

const ROWS = 24, COLS = 11;   // 格距約 7.5cm
const WET_DARKEN = 0.72;      // 濕布:水填滿纖維間隙、散射變少 → 顏色變深

const _v = new THREE.Vector3();

function toWorld(boat, local, out) {
  const v = _v;
  for (let i = 0; i < local.length; i += 3) {
    v.set(local[i], local[i + 1], local[i + 2]).applyMatrix4(boat.matrixWorld);
    out[i] = v.x; out[i + 1] = v.y; out[i + 2] = v.z;
  }
  return out;
}

function buildGeometry(cloth) {
  const geo = new THREE.BufferGeometry();
  const uv = new Float32Array(ROWS * COLS * 2);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      // 旗桿在圖的右緣:從右舷(鏡頭)看,旗尾往左飄,字是正的
      uv.set([1 - c / (COLS - 1), 1 - r / (ROWS - 1)], (r * COLS + c) * 2);
    }
  }
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cloth.pos), 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(new THREE.BufferAttribute(cloth.tris, 1));
  geo.computeVertexNormals();
  return geo;
}

function buildMaterial(renderer) {
  const map = new THREE.TextureLoader().load(flagUrl);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return new THREE.MeshPhysicalMaterial({
    map, color: new THREE.Color(WET_DARKEN, WET_DARKEN, WET_DARKEN),
    roughness: 0.55, clearcoat: 0.35, clearcoatRoughness: 0.35,   // 表面一層水膜
    sheen: 0.4, sheenRoughness: 0.6, sheenColor: new THREE.Color(0x8899aa),
    envMapIntensity: 0.6, side: THREE.DoubleSide
  });
}

/** @param {THREE.Scene} scene @param {{ boat: THREE.Object3D, renderer: THREE.WebGLRenderer, fogDensity: number }} opts */
export function createFlag(scene, { boat, renderer, fogDensity }) {
  const local = flagPinsLocal(ROWS);
  boat.updateMatrixWorld();
  const pinTo = toWorld(boat, local, new Float64Array(local.length));
  const pinFrom = pinTo.slice();
  const cloth = createCloth({
    ...FLAG_SIZE, rows: ROWS, cols: COLS, pins: pinTo, flyDir: [-1, 0, 0],
    arealDensity: wetArealDensity(FABRIC_DRY_DENSITY, WET_UPTAKE)
  });
  const field = createWindField({ u10: WIND_SPEED_10M, dir: WIND_DIR, drift: DRIFT, seed: 11 });

  const geometry = buildGeometry(cloth);
  const flag = new THREE.Mesh(geometry, buildMaterial(renderer));
  flag.frustumCulled = false;   // 頂點每幀在世界座標更新
  scene.add(flag);

  const droplets = createFlagDroplets(scene, { fogDensity, area: FLAG_SIZE.hoist * FLAG_SIZE.fly });
  const position = geometry.attributes.position;

  /** 在 updateFloater 之後呼叫(船的 matrixWorld 已更新) */
  function update(t, dt, flash) {
    pinFrom.set(pinTo);
    toWorld(boat, local, pinTo);
    stepCloth(cloth, dt, { t, pinFrom, pinTo, air: field.sample });
    position.array.set(cloth.pos);
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    droplets.update(dt, cloth, field, flash);
  }

  return { update, setSize: droplets.setSize, cloth, mesh: flag, wind: field };
}
