/* =========================================================
   北歐舷拖網漁船(side trawler):組裝各部件
   ========================================================= */
import * as THREE from 'three';
import { createMaterials } from './materials.js';
import { buildHull } from './hull.js';
import { buildWheelhouse } from './wheelhouse.js';
import { buildRigging } from './rigging.js';
import { buildDeckGear } from './deckGear.js';
import { mesh } from '../parts.js';
import { buildHullClipTexture, HULL_CLIP_RANGE } from './hullClip.js';
import { railY, stationX, heightParam } from './hullProfile.js';

const RADAR_SPEED = 2.4;    // rad/s,約 23 rpm
const CABIN_INTENSITY = 18;

function sternLight(mats) {
  const y = railY(0) + 0.1;
  return mesh(new THREE.SphereGeometry(0.05, 10, 8), mats.lampWhite, stationX(0, heightParam(0, y)) - 0.03, y, 0);
}

export function createBoat(scene) {
  const boat = new THREE.Group();
  const mats = createMaterials();
  const wheelhouse = buildWheelhouse(mats);
  const rigging = buildRigging(mats);

  boat.add(buildHull(mats), wheelhouse.group, rigging.group, buildDeckGear(mats), sternLight(mats));
  scene.add(boat);

  const { cabinLight } = wheelhouse;
  const lamps = [cabinLight, rigging.lampLight, rigging.floodLight];

  function update(t) {
    wheelhouse.radar.rotation.y = t * RADAR_SPEED;
    cabinLight.intensity = CABIN_INTENSITY * (0.85 + 0.10 * Math.sin(t * 9.3) + 0.05 * Math.sin(t * 23.7));
  }

  return { boat, lamps, update, hullClip: { texture: buildHullClipTexture(), range: HULL_CLIP_RANGE } };
}
