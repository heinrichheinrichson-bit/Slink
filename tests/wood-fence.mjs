import assert from 'node:assert/strict';import fs from 'node:fs';import * as THREE from 'three';
import {createWoodFence,fenceEdges,fenceBlocks,FENCE_STYLES} from '../src/renderer/wood-fence.js';
for(const style of Object.keys(FENCE_STYLES))for(const walls of [[[0,1]],[[0,2]],[[0,1],[0,2]],[[0,1],[1,0]]]){
 const fence=createWoodFence({n:2,walls,style});fence.group.updateMatrixWorld(true);
 assert.deepEqual(fence.group.userData.occupiedCells,[]);
 const posts=fence.group.children.filter(o=>o.name==='fence-post');assert.equal(posts.length,walls.length===2&&walls[1][1]===2?3:2);
 fence.group.traverse(o=>{if(o.geometry)for(const key of ['position','normal'])for(const v of o.geometry.attributes[key].array)assert.ok(Number.isFinite(v));});
 const bounds=new THREE.Box3().setFromObject(fence.group);assert.ok(bounds.min.z>=6.49);assert.ok(bounds.max.z<45);
 for(const edge of fence.edges){assert.ok(fenceBlocks(fence.group.userData.walls,edge.a,edge.b));assert.ok(fenceBlocks(fence.group.userData.walls,edge.b,edge.a));assert.equal(Math.hypot(edge.ends[0][0]-edge.ends[1][0],edge.ends[0][1]-edge.ends[1][1]),80)}
 for(const span of fence.group.children.filter(o=>o.name==='fence-span'))for(const rail of span.children.filter(o=>o.geometry?.type==='RoundedBoxGeometry'))assert.ok(new THREE.Box3().setFromObject(rail).min.z>18,'rails stay above grown grass');
 fence.dispose();
}
assert.deepEqual(fenceEdges(2,[[0,1]])[0].center,[80,-40]);assert.deepEqual(fenceEdges(2,[[0,2]])[0].center,[40,-80]);assert.throws(()=>fenceEdges(2,[[0,3]]));assert.throws(()=>fenceEdges(2,[[1,2]]));
const source=fs.readFileSync('src/renderer/fence-study.js','utf8'),route=JSON.parse(source.match(/TEST_ROUTE=(\[[^;]+\])/)[1]),walls=JSON.parse(source.match(/const walls=(\[\[.*?\]\])/)[1]);
assert.equal(new Set(route).size,16);assert.equal(route[0],0);assert.equal(route.at(-1),3);
route.slice(1).forEach((b,i)=>{const a=route[i];assert.equal(Math.abs(a%4-b%4)+Math.abs(Math.floor(a/4)-Math.floor(b/4)),1);assert.equal(fenceBlocks(walls,a,b),false)});
console.log('PASS: fence boundary centres, both directions, deduplication/shared corner posts, finite geometry, unchanged cell occupancy and legal 16-cell test solution.');
