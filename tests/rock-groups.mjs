import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createRockGroup} from '../src/renderer/rock-groups.js';
for(const cells of [[[0,0],[1,0]],[[0,0],[1,0],[0,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[1,2],[2,2]]])for(const style of ['plain','vein','leaf']){
 const rock=createRockGroup({cells,style});rock.group.updateMatrixWorld(true);assert.equal(rock.group.children.length,1,'Must be a single rock mesh');
 const box=new THREE.Box3().setFromObject(rock.group);assert(Math.abs(box.min.z+6.5)<.001);assert(box.min.x>=6.99&&box.min.y>=-(Math.max(...cells.map(p=>p[1]))+1)*80+6.99);assert(box.max.x<=(Math.max(...cells.map(p=>p[0]))+1)*80-6.99&&box.max.y<=-6.99);
 const ray=new THREE.Raycaster(),height=(x,y)=>{ray.set(new THREE.Vector3(x,y,100),new THREE.Vector3(0,0,-1));return ray.intersectObject(rock.group,true)[0]?.point.z};
 for(const [x,y]of cells)assert(height(x*80+40,-y*80-40)>23,'Missing rock surface');
 for(const x of [79.5,80,80.5])assert(height(x,-40)>26,'Seam at shared cell boundary');
 if(cells.length===3||cells.length===8)assert.equal(height(120,-120),undefined,'Rock covers absent inner cell');
 for(const a of ['position','normal'])assert([...rock.group.children[0].geometry.attributes[a].array].every(Number.isFinite));rock.dispose();
}
assert.throws(()=>createRockGroup({cells:[[0,0],[1,1]]}),/connected/);
assert.throws(()=>createRockGroup({cells:[[0,0],[0,0]]}),/Invalid/);
console.log('PASS: fused rock pairs, L shapes, blocks and rings; three materials; shared edges solid, empty cells clear, footprint and normals valid.');
