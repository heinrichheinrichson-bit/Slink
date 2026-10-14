import assert from 'node:assert/strict';
import {routeDots,createRouteCue} from '../src/renderer/route-cue.js';
const l={n:4},p=[0,1,5,4,8];
assert.equal(routeDots(l,p).length,32);
assert.equal(routeDots(l,[0,5]).length,0,'No diagonal shortcuts');
assert.equal(routeDots(l,[3,4]).length,0,'No row wrap');
assert.equal(routeDots(l,p.slice(0,-1)).length,24,'Undo removes last connection');
const cue=createRouteCue();cue.update(l,p,'always',false,0);assert.equal(cue.group.children.length,36);assert.equal(cue.group.visible,true);
cue.update(l,p,'touch',false,0);assert.equal(cue.group.visible,false);cue.update(l,p,'touch',true,0);assert.equal(cue.group.visible,true);
cue.update(l,p,'previous',false,0);assert.equal(cue.group.children.length,4);assert.equal(cue.group.visible,true);cue.dispose();
console.log('Route cues: ordered adjacency, undo, touch visibility and predecessor-only PASS');

const grass=createRouteCue();grass.update(l,p,'grass',false,0);assert.equal(grass.group.children.length,103);assert(grass.group.children.every(m=>m.material.isMeshStandardMaterial));const before=grass.group.children.at(-1).rotation.y;grass.update(l,p,'grass',false,1);assert.notEqual(grass.group.children.at(-1).rotation.y,before);grass.update(l,p.slice(0,-1),'grass',false,1);assert.equal(grass.group.children.length,79);grass.dispose();console.log('Grass trail: physical materials, ordered segments, animated predecessor and undo PASS');
