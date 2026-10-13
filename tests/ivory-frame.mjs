import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {createIvoryFrame,IVORY_STYLES} from '../src/renderer/ivory-frame.js';
for(let style of Object.keys(IVORY_STYLES)){
 let frame=createIvoryFrame({n:3,cells:[0,1,2,3,4,5,6,7,8],water:[0,1],lava:[7],stones:[5],style});assert.equal(frame.openings.filter(o=>o.type==='water').length,1);assert.equal(frame.openings.find(o=>o.type==='water').cells.length,2);assert.equal(frame.group.userData.walkable,false);frame.dispose();
 let ring=createIvoryFrame({n:3,cells:[0,1,2,3,4,5,6,7,8],water:[0,1,2,3,5,6,7,8],style});assert.equal(ring.openings[0].shape.holes.length,1);let ray=new THREE.Raycaster(new THREE.Vector3(120,-120,100),new THREE.Vector3(0,0,-1));ring.group.updateMatrixWorld(true);assert(ray.intersectObject(ring.group,true).length,'Missing cream support inside liquid ring');ring.dispose();
 let separate=createIvoryFrame({n:2,cells:[0,3],style});assert(separate.group.children.length>=2);separate.dispose();
}
// Changing the exterior style must never shrink the liquid footprint.
let reference=null;
for(const style of Object.keys(IVORY_STYLES)){
 const frame=createIvoryFrame({n:3,cells:[0,1,2,3,4,5,6,7,8],water:[0],lava:[8],stones:[5],style});
 const footprints=frame.openings.map(o=>({type:o.type,rim:o.rimShape.getPoints(16).map(p=>[p.x,p.y]),floor:o.shape.getPoints(16).map(p=>[p.x,p.y])}));
 if(reference)assert.deepEqual(footprints,reference,'Style changes liquid dimensions');else reference=footprints;
 frame.group.updateMatrixWorld(true);
 const support=new THREE.Raycaster(new THREE.Vector3(200,-120,100),new THREE.Vector3(0,0,-1)).intersectObject(frame.group,true)[0];
 assert(support&&support.point.z>1&&support.point.z<5,'Stone must have closed cream support');
 const wall=new THREE.Raycaster(new THREE.Vector3(40,-40,-12),new THREE.Vector3(1,0,0)).intersectObject(frame.group,true)[0];
 assert(wall&&wall.distance>25&&wall.distance<45,'Missing recessed pool wall');
 assert(frame.openings.every(o=>o.surfaceZ===-20),'Inconsistent liquid depth');
 assert.equal(frame.openings.length,2,'Stone must not create a liquid opening');
 frame.dispose();
}
let context={};vm.createContext(context);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+';this.data=LEVELS',context);
for(let l of context.data){let cells=[...l.solution,...l.water,...l.lava,...l.stones],frame=createIvoryFrame({n:l.n,cells,water:l.water,lava:l.lava,stones:l.stones,style:'soft'});frame.group.updateMatrixWorld(true);frame.group.traverse(o=>{if(o.geometry){for(let v of o.geometry.attributes.position.array)assert(Number.isFinite(v),'Non-finite frame vertex')}});let ray=new THREE.Raycaster();for(let i of l.solution){ray.set(new THREE.Vector3(i%l.n*80+40,-(Math.floor(i/l.n)*80+40),100),new THREE.Vector3(0,0,-1));let hit=ray.intersectObject(frame.group,true)[0];assert(!hit||hit.point.z<8.5,'Frame covers earth centre '+l.id)}for(let i of [...l.water,...l.lava]){ray.set(new THREE.Vector3(i%l.n*80+40,-(Math.floor(i/l.n)*80+40),100),new THREE.Vector3(0,0,-1));let hit=ray.intersectObject(frame.group,true)[0];assert(!hit||hit.point.z< -10,'Frame closes liquid centre '+l.id)}frame.dispose()}
console.log('PASS: ivory frame topology, merged pools, ring islands, disconnected components and all 500 catalogue layouts; earth/liquid centres remain clear.');
