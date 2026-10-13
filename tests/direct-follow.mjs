import assert from 'node:assert/strict';
import {DirectGridFollower} from '../src/renderer/direct-grid-follow.js';
const f=new DirectGridFollower();const at=i=>f.move(i%3,Math.floor(i/3));
let p=f.move(1.4,1.2);assert.deepEqual([p.cell,p.x,p.y,p.heading,p.travel],[4,1,1,0,0]);
assert.deepEqual(at(2).entered,[],'diagonal entry rejected');assert.deepEqual(at(0).entered,[],'remote entry rejected');
at(5);at(2);at(1);const before=[...f.path];p=at(4);assert.deepEqual(p.path,before,'visited side neighbour cannot erase loop');p=at(5);assert.deepEqual(p.path,before,'older field cannot erase route');
p=at(2);assert.deepEqual(p.removed,[1]);assert.deepEqual(p.path,[4,5,2]);assert.equal(p.heading,Math.PI/2);p=at(5);assert.deepEqual(p.removed,[2]);assert.deepEqual(p.path,[4,5]);p=at(4);assert.deepEqual(p.removed,[5]);
let count=0;const route=[4,5,2,1,0,3,6,7,8];for(let k=0;k<1000;k++){f.reset();for(const i of route.slice(1)){const prev=f.cell,p=at(i);assert.equal(p.cell,i);assert.equal(Math.abs(i%3-prev%3)+Math.abs(Math.floor(i/3)-Math.floor(prev/3)),1);count++}for(const i of route.slice(0,-1).reverse()){const p=at(i);assert.equal(p.cell,i);assert.equal(p.removed.length,1);count++}assert.deepEqual(f.path,[4]);assert.equal(f.x,1);assert.equal(f.y,1)}
console.log('PASS: '+count+' side-adjacent entries and single-step reversals, no diagonal/far/visited shortcuts.');
