import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createTile,disposeTile} from '../src/renderer/growth-modules.js';
import {batchTerrainTile} from '../src/renderer/batch-terrain.js';
globalThis.document={createElement(){return{width:0,height:0,getContext(){return{createImageData(w,h){return{data:new Uint8ClampedArray(w*h*4)}},putImageData(){}}}}}};
for(const seed of [73,211,935]){const tile=createTile('earth-loam',{seed});const bounds=new THREE.Box3().setFromObject(tile),count=tile.children.reduce((s,m)=>s+(m.geometry.index?.count??m.geometry.attributes.position.count),0),materials=new Set(tile.children.map(m=>m.material));batchTerrainTile(tile);assert.equal(tile.children.length,4);const after=new THREE.Box3().setFromObject(tile);assert(bounds.min.distanceTo(after.min)<.00001&&bounds.max.distanceTo(after.max)<.00001);assert.equal(tile.children.reduce((s,m)=>s+m.geometry.attributes.position.count,0),count);assert(tile.children.every(m=>materials.has(m.material)));assert(tile.children.some(m=>m.userData.surface));disposeTile(tile)}console.log('PASS earth batching32→4 meshes, same triangle count, material references and world bounds');
