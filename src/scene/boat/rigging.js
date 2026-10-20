/* =========================================================
   前桅、吊桿、支索與桅燈
   拖網作業中的漁船依規定掛「上綠下白」環照燈
   ========================================================= */
import * as THREE from 'three';
import { deckAt, railY, stationX, heightParam } from './hullProfile.js';
import { mesh, roundedBox, rod, drumZ } from '../parts.js';

const MAST_X = 1.5;
const MAST_TOP = 6.3;
const SPREADER_Y = 4.9;
const SPREADER_HALF = 0.85;

function mast(mats, footY) {
  const g = new THREE.Group();
  const h = MAST_TOP - footY;
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.1, h, 16), mats.white, MAST_X, footY + h / 2, 0));
  g.add(rod([MAST_X, SPREADER_Y, -SPREADER_HALF], [MAST_X, SPREADER_Y, SPREADER_HALF], 0.035, mats.white));
  g.add(roundedBox(0.4, 0.04, 0.4, 0.01, mats.steel, MAST_X, SPREADER_Y - 0.06, 0));
  g.add(rod([MAST_X, MAST_TOP, 0], [MAST_X - 0.05, MAST_TOP + 0.7, 0], 0.012, mats.rigging));
  return g;
}

function mastLights(mats) {
  const g = new THREE.Group();
  const front = MAST_X + 0.11;
  g.add(roundedBox(0.14, 0.18, 0.14, 0.02, mats.steel, front, 6.0, 0));
  g.add(mesh(new THREE.BoxGeometry(0.03, 0.1, 0.08), mats.lampWhite, front + 0.07, 6.0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.12, 12), mats.lampGreen, front, 5.55, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.12, 12), mats.lampWhite, front, 5.15, 0));

  const lampLight = new THREE.PointLight(0xfff0c8, 4, 16, 2);
  lampLight.position.set(front + 0.1, 6.0, 0);
  g.add(lampLight);
  return { group: g, lampLight };
}

/* 桅桁下的甲板工作燈:暴風雨夜裡唯一照亮甲板的光 */
function floodlights(mats) {
  const g = new THREE.Group();
  for (const z of [-0.45, 0.45]) {
    const box = new THREE.Group();
    box.position.set(MAST_X - 0.12, SPREADER_Y - 0.18, z);
    box.rotation.z = -0.9;   // 燈面朝後下方,照向艙口與絞機
    box.add(roundedBox(0.2, 0.14, 0.24, 0.02, mats.steel, 0, 0, 0));
    const face = mesh(new THREE.PlaneGeometry(0.2, 0.17), mats.flood, 0, -0.072, 0);
    face.rotation.x = Math.PI / 2;
    box.add(face);
    g.add(box);
  }
  const spot = new THREE.SpotLight(0xffe2b8, 16, 16, 0.85, 0.75, 2);
  spot.position.set(MAST_X - 0.2, SPREADER_Y - 0.25, 0);
  spot.target.position.set(-0.4, 0.7, 0.2);
  g.add(spot, spot.target);
  return { group: g, spot };
}

function derrick(mats, footY) {
  const g = new THREE.Group();
  const tip = [-0.45, 3.35, 0.25];
  g.add(rod([MAST_X - 0.05, footY + 1.0, 0], tip, 0.05, mats.steel, 10));
  g.add(rod(tip, [MAST_X, SPREADER_Y - 0.1, 0], 0.01, mats.rigging));
  g.add(rod(tip, [tip[0], 2.45, tip[2]], 0.01, mats.rigging));
  g.add(drumZ(0.07, 0.04, mats.steel, tip[0], 2.4, tip[2]));
  g.add(mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12, Math.PI * 1.4), mats.steel, tip[0], 2.3, tip[2]));
  return g;
}

/* 支索:前支索到艏柱頂、後支索到駕駛台頂、側支索到舷牆 */
function stays(mats) {
  const g = new THREE.Group();
  const stemY = railY(1) + 0.03;
  g.add(rod([MAST_X, MAST_TOP - 0.05, 0], [stationX(1, heightParam(1, stemY)) - 0.05, stemY, 0], 0.012, mats.rigging));
  g.add(rod([MAST_X, MAST_TOP - 0.05, 0], [-1.35, 3.12, 0], 0.012, mats.rigging));
  const chain = deckAt(MAST_X - 0.25);
  for (const side of [1, -1]) {
    g.add(rod([MAST_X, SPREADER_Y, side * SPREADER_HALF], [MAST_X - 0.25, chain.rail, side * (chain.railHalfWidth - 0.04)], 0.01, mats.rigging));
    g.add(rod([MAST_X, MAST_TOP - 0.3, 0], [MAST_X, SPREADER_Y, side * SPREADER_HALF], 0.01, mats.rigging));
  }
  return g;
}

export function buildRigging(mats) {
  const group = new THREE.Group();
  const footY = deckAt(MAST_X).y - 0.05;
  group.add(mast(mats, footY));
  const lights = mastLights(mats);
  const flood = floodlights(mats);
  group.add(lights.group, flood.group, derrick(mats, footY), stays(mats));
  return { group, lampLight: lights.lampLight, floodLight: flood.spot };
}
