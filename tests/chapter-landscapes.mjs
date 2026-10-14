import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createChapterLandscape,fitChapterCamera} from '../src/renderer/chapter-landscapes.js';
globalThis.document={createElement(){return{width:0,height:0,getContext(){return{fillText(){},createImageData(w,h){return{data:new Uint8ClampedArray(w*h*4)}},putImageData(){}}}}}};
for(let i=0;i<15;i++){
 const scene=createChapterLandscape(i,i/14);
 assert(!scene.bounds.isEmpty());
 for(const aspect of [.8,680/460,2]){
  const c=fitChapterCamera(scene.bounds,aspect);c.updateMatrixWorld();
  for(const x of [scene.bounds.min.x,scene.bounds.max.x])for(const y of [scene.bounds.min.y,scene.bounds.max.y])for(const z of [scene.bounds.min.z,scene.bounds.max.z]){
   const p=new THREE.Vector3(x,y,z).project(c);assert(Number.isFinite(p.x)&&Number.isFinite(p.y));assert(Math.abs(p.x)<1&&Math.abs(p.y)<1,'Chapter '+i+' clips at aspect '+aspect);
  }
 }
 scene.dispose();
}
console.log('PASS: all15 chapter landscapes build/dispose and fit inside portrait, card and wide camera bounds.');
