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
let context={};vm.createContext(context);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+';this.data=LEVELS',context);
for(let l of context.data){let cells=[...l.solution,...l.water,...l.lava,...l.stones],frame=createIvoryFrame({n:l.n,cells,water:l.water,lava:l.lava,stones:l.stones,style:'soft'});frame.group.updateMatrixWorld(true);frame.group.traverse(o=>{if(o.geometry){for(let v of o.geometry.attributes.position.array)assert(Number.isFinite(v),'Non-finite frame vertex')}});let ray=new THREE.Raycaster();for(let i of l.solution){ray.set(new THREE.Vector3(i%l.n*80+40,-(Math.floor(i/l.n)*80+40),100),new THREE.Vector3(0,0,-1));let hit=ray.intersectObject(frame.group,true)[0];assert(!hit||hit.point.z<8.5,'Frame covers earth centre '+l.id)}for(let i of [...l.water,...l.lava]){ray.set(new THREE.Vector3(i%l.n*80+40,-(Math.floor(i/l.n)*80+40),100),new THREE.Vector3(0,0,-1));let hit=ray.intersectObject(frame.group,true)[0];assert(!hit||hit.point.z< -10,'Frame closes liquid centre '+l.id)}frame.dispose()}
console.log('PASS: ivory frame topology, merged pools, ring islands, disconnected components and all 500 catalogue layouts; earth/liquid centres remain clear.');
