/* 船的材質:暴風雨中所有表面都是濕的 → 粗糙度偏低、白漆加 clearcoat */
import * as THREE from 'three';
import {
  makeHullTexture, makeDeckTexture, makeGrimeTexture, makeWindowTexture,
  makeRingTexture, makeNetTexture, makeRoughnessTexture
} from './textures.js';

const hdr = (hex, k) => new THREE.Color(hex).multiplyScalar(k); // >1 才會觸發 Bloom

export function createMaterials() {
  const rough = makeRoughnessTexture();
  const std = (opts) => new THREE.MeshStandardMaterial({ roughnessMap: rough, envMapIntensity: 0.7, ...opts });

  return {
    hull: std({ map: makeHullTexture(), roughness: 0.48, metalness: 0.15, side: THREE.DoubleSide }),
    hullPlain: std({ color: 0x4a1512, roughness: 0.5, metalness: 0.15 }),
    deck: std({ map: makeDeckTexture(), roughness: 0.55 }),
    white: new THREE.MeshPhysicalMaterial({
      color: 0xd2cec2, map: makeGrimeTexture(), roughness: 0.5, roughnessMap: rough,
      clearcoat: 0.6, clearcoatRoughness: 0.25, envMapIntensity: 0.7
    }),
    steel: std({ color: 0x2a2e31, roughness: 0.45, metalness: 0.6 }),
    rust: std({ color: 0x4a2c1e, roughness: 0.85, metalness: 0.35 }),
    machinery: std({ color: 0x2c4639, roughness: 0.5, metalness: 0.3 }),
    rubber: std({ color: 0x0d0d0d, roughness: 0.8 }),
    rope: std({ color: 0x7d6e52, roughness: 0.95 }),
    rigging: std({ color: 0x1e1e1e, roughness: 0.6, metalness: 0.5 }),
    brass: std({ color: 0x8c6a32, roughness: 0.3, metalness: 0.9 }),
    ring: std({ map: makeRingTexture(), roughness: 0.5 }),
    net: std({ map: makeNetTexture(), roughness: 1.0 }),
    float: std({ color: 0xe0581f, roughness: 0.45 }),
    crateBlue: std({ color: 0x24548c, roughness: 0.5 }),
    crateRed: std({ color: 0x9a3328, roughness: 0.5 }),
    glassLit: new THREE.MeshBasicMaterial({ map: makeWindowTexture(), color: hdr(0xffffff, 2.2) }),
    glassDim: new THREE.MeshBasicMaterial({ map: makeWindowTexture(), color: hdr(0xffffff, 0.7) }),
    glassDark: new THREE.MeshPhysicalMaterial({ color: 0x04070a, roughness: 0.05, clearcoat: 1, envMapIntensity: 1.2 }),
    lampWhite: new THREE.MeshBasicMaterial({ color: hdr(0xfff3d6, 6) }),
    lampRed: new THREE.MeshBasicMaterial({ color: hdr(0xff2a1a, 5) }),
    lampGreen: new THREE.MeshBasicMaterial({ color: hdr(0x1aff66, 4) }),
    flood: new THREE.MeshBasicMaterial({ color: hdr(0xffe9c4, 5) })
  };
}
