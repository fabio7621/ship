/* 艙內材質:乾燥、室內(粗糙度比甲板高),發光儀器用 >1 的顏色觸發 Bloom */
import * as THREE from 'three';
import {
  makeWoodTexture, makeFloorTexture, makeChartTexture, makeLogbookTexture, makePhotoTexture,
  makeDropletTexture, makeStreakTexture, makeEnamelTexture, makeGpsTexture
} from './textures.js';

const hdr = (hex, k) => new THREE.Color(hex).multiplyScalar(k);

function repeated(tex, x, y) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(x, y);
  return tex;
}

export function createCabinMaterials() {
  const std = (opts) => new THREE.MeshStandardMaterial({ envMapIntensity: 0.25, ...opts });
  const wood = makeWoodTexture();
  return {
    wood: std({ map: repeated(wood, 2.5, 1.2), roughness: 0.42, metalness: 0.05 }),
    woodDark: std({ map: wood, color: 0x8a6a55, roughness: 0.5 }),
    paint: std({ color: 0xc9c2ae, roughness: 0.7 }),
    floor: std({ map: repeated(makeFloorTexture(), 6, 6), roughness: 0.9 }),
    console: std({ color: 0x3c4448, roughness: 0.55, metalness: 0.25 }),
    panel: std({ color: 0x1d2124, roughness: 0.45, metalness: 0.3 }),
    bezel: std({ color: 0x0d0f10, roughness: 0.35, metalness: 0.4 }),
    steel: std({ color: 0x8d9296, roughness: 0.35, metalness: 0.85 }),
    chrome: std({ color: 0xcfd3d6, roughness: 0.15, metalness: 1.0 }),
    brass: std({ color: 0xa47a38, roughness: 0.28, metalness: 0.95 }),
    rubber: std({ color: 0x111111, roughness: 0.85 }),
    leather: std({ color: 0x2a1a12, roughness: 0.62 }),
    red: std({ color: 0xa3221a, roughness: 0.4 }),
    oilskin: std({ color: 0xd9a400, roughness: 0.38 }),
    oilskinDark: std({ color: 0x8a6a00, roughness: 0.45 }),
    paper: std({ color: 0xf2ecdc, roughness: 0.9 }),
    tape: std({ color: 0xe6d9a8, roughness: 0.8, transparent: true, opacity: 0.85 }),
    chart: std({ map: makeChartTexture(), roughness: 0.85, side: THREE.DoubleSide }),
    logbook: std({ map: makeLogbookTexture(), roughness: 0.85 }),
    photo: std({ map: makePhotoTexture(), roughness: 0.5 }),
    enamel: new THREE.MeshPhysicalMaterial({ map: makeEnamelTexture(), roughness: 0.25, clearcoat: 0.8, envMapIntensity: 0.3 }),
    enamelInside: std({ color: 0xe6e1d4, roughness: 0.3 }),
    coffee: new THREE.MeshPhysicalMaterial({ color: 0x1a0c05, roughness: 0.08, clearcoat: 1, envMapIntensity: 0.6 }),
    thermos: std({ color: 0x2d5a3c, roughness: 0.4, metalness: 0.3 }),
    knob: std({ color: 0x0b0b0b, roughness: 0.3 }),
    knobRed: std({ color: 0x8c1410, roughness: 0.3 }),
    glassLens: new THREE.MeshPhysicalMaterial({
      color: 0x0c1214, roughness: 0.05, metalness: 0, clearcoat: 1, transparent: true, opacity: 0.35, envMapIntensity: 1
    }),
    bulb: new THREE.MeshBasicMaterial({ color: hdr(0xffd9a0, 4) }),
    domeLamp: new THREE.MeshBasicMaterial({ color: hdr(0xffd58a, 1.6) }),
    ledGreen: new THREE.MeshBasicMaterial({ color: hdr(0x40ff70, 3) }),
    ledAmber: new THREE.MeshBasicMaterial({ color: hdr(0xffa020, 3) }),
    ledRed: new THREE.MeshBasicMaterial({ color: hdr(0xff2a1a, 3) }),
    gps: new THREE.MeshBasicMaterial({ map: makeGpsTexture(), color: hdr(0xffffff, 1.4) }),
    droplets: new THREE.MeshBasicMaterial({
      map: repeated(makeDropletTexture(7), 1.6, 1.6), transparent: true, opacity: 0.55, depthWrite: false,
      blending: THREE.AdditiveBlending, side: THREE.DoubleSide
    }),
    dropletsClear: new THREE.MeshBasicMaterial({
      map: makeDropletTexture(8, { clearCircle: true }), transparent: true, opacity: 0.55, depthWrite: false,
      blending: THREE.AdditiveBlending, side: THREE.DoubleSide
    }),
    streaks: new THREE.MeshBasicMaterial({
      map: repeated(makeStreakTexture(), 2, 1), transparent: true, opacity: 0.14, depthWrite: false,
      blending: THREE.AdditiveBlending, side: THREE.DoubleSide
    })
  };
}
