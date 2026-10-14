import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createFuzzyCreature} from '../src/renderer/fuzzy-creature.js';
const c=createFuzzyCreature({presentation:'peek'}),paws=[];c.group.traverse(o=>{if(o.name==='soft-paw')paws.push(o)});
let reference;
for(const t of [0,.2,.7,1.2,4.95,5.25,7,20]){
 c.update(t,0,{active:false,peekGreetingAge:t<1.3?t:-1});c.group.updateMatrixWorld(true);
 assert.equal(paws.filter(p=>p.visible).length,2);
 const positions=paws.slice(0,2).map(p=>p.position.toArray());if(reference)assert.deepEqual(positions,reference,'Greeting must not move planted paws');reference=positions;
 c.group.traverse(o=>{if(o.name==='embedded-eye'){assert.deepEqual(o.scale.toArray(),[1,1,1]);assert.deepEqual(o.position.toArray(),[0,0,0]);}});
 const bounds=new THREE.Box3().setFromObject(c.group);assert(bounds.min.toArray().every(Number.isFinite)&&bounds.max.toArray().every(Number.isFinite));
}
c.dispose();console.log('PASS: peeking portrait preserves fitted eyes, two planted paws and finite geometry through idle/blink/greeting.');
