import * as THREE from 'three';
import {createIvoryFrame} from './ivory-frame.js';
import {createMeadowTile} from './meadow-variants.js';
import {createTile} from './growth-modules.js';
import {createLivingLiquid} from './living-liquid.js';
import {createStoneTile} from './stone-modules.js';
import {createWoodFence} from './wood-fence.js';
import {createFlowerGoal} from './flower-goals.js';
export const CHAPTER_LANDSCAPES=[
 {id:'fenceGarden',cells:[2,3,7,8,9,10,12,13,14,15,16,17,19,20,21,22,26,27],water:[],stones:[],earth:[14,20,21],walls:[[8,14],[9,15],[15,16],[21,22]],flowers:[7,10,12,17,19,22,26,27],species:['daisy','poppy']},
 {id:'riverGarden',cells:[1,2,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,26,27,28,29,33,34],water:[8,14,20,21,27],stones:[],earth:[],walls:[],flowers:[1,6,9,12,16,18,23,26,29,34],species:['daisy','buttercup']},
 {id:'stoneGarden',cells:[1,2,3,7,8,9,13,14,15,16,19,20,21,22,25,26,27,31,32,33],water:[],stones:[1,3,7,9,13,16,19,22,25,27,31,33],earth:[14,20],walls:[],flowers:[2,8,15,21,26,32],species:['meadow','buttercup']}
];

export function createChapterLandscape(index,growth=.5){
 const types=[0,0,0,0,2,1,1,2,0,2,0,2,1,2,1];
 const d=structuredClone(CHAPTER_LANDSCAPES[types[index%15]]);
 if(index===0||index===2){d.walls=[];d.earth=index===0?[14]:[14,20];}
 if(index===3)d.walls=[[8,14],[14,15],[20,21]];
 if(index===4)d.stones=d.stones.filter((_,i)=>i%3!==0);
 if(index===5)d.walls=[[6,7],[16,17],[22,23]];
 if(index===8)d.walls=[[8,14],[9,15],[15,21],[20,21]];
 if(index===9)d.stones=d.stones.filter((_,i)=>i%2===0);
 if(index===10)d.walls=[[8,14],[9,15],[15,16],[20,21],[21,22]];
 if(index===12)d.species=['meadow','daisy'];
 if(index===14)d.species=['poppy','meadow'];
 const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fff6dc','#a28d6c',1.65));const sun=new THREE.DirectionalLight('#fff4dc',3.3);sun.position.set(-180,360,800);sun.target.position.set(240,-240,0);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-500,right:500,top:500,bottom:-500,near:1,far:1800});sun.shadow.bias=-.0003;sun.shadow.normalBias=.4;scene.add(sun,sun.target);const fill=new THREE.DirectionalLight('#d4e8ff',.4);fill.position.set(600,-200,500);scene.add(fill);
 const land=new THREE.Group();scene.add(land);const frame=createIvoryFrame({n:6,cells:d.cells,water:d.water,lava:[],stones:d.stones,style:'soft'});land.add(frame.group);const updates=[],flowers=[];
 for(const i of d.cells.filter(i=>!d.water.includes(i)&&!d.stones.includes(i))){const tile=d.earth.includes(i)?{group:createTile('earth-loam',{seed:600+i}),update(){}}:createMeadowTile(['classic','rich','tuft','flowers'][i%4],{seed:600+i*17});tile.group.position.set(i%6*80+40,-Math.floor(i/6)*80-40,0);land.add(tile.group);updates.push(tile)}
 for(const [k,i]of d.stones.entries()){const stone=createStoneTile(k%4===0?'fossil':k%4===1?'plain':'pebble',{seed:300+i});stone.group.position.set(i%6*80+40,-Math.floor(i/6)*80-40,0);land.add(stone.group)}
 if(d.walls.length){const fence=createWoodFence({n:6,walls:d.walls,style:'honey',design:'picket'});land.add(fence.group)}
 for(const op of frame.openings){const liquid=createLivingLiquid('water',{style:'sway',center:[240,-240]});const m=new THREE.Mesh(new THREE.ExtrudeGeometry(op.shape,{depth:2,bevelEnabled:false,curveSegments:24}),liquid.material);m.position.z=op.surfaceZ-2;land.add(m);updates.push(liquid)}
 for(const [k,i]of d.flowers.entries()){const flower=createFlowerGoal({species:d.species[k%2],state:'bloom',insects:false});flower.group.rotation.x=Math.PI/2;flower.group.position.set(i%6*80+40+(k%2?8:-8),-Math.floor(i/6)*80-40,12);flower.group.scale.setScalar(1.1);land.add(flower.group);flowers.push(flower);updates.push(flower)}

 // Rotate the later gardens as whole compositions, retaining module fits.
 if(index>2&&![6,7].includes(index))land.rotation.z=[0,Math.PI/2,-Math.PI/2,Math.PI][index%4];
 const shift=new THREE.Vector3(240,-240,0).applyAxisAngle(new THREE.Vector3(0,0,1),land.rotation.z);land.position.set(240-shift.x,-240-shift.y,0);
 flowers.forEach((f,k)=>{f.group.visible=k<Math.round(flowers.length*(.15+Math.max(0,Math.min(1,growth))*.85));f.update(0,1)});
 updates.forEach(a=>a.update(0,1));
 const bounds=new THREE.Box3().setFromObject(land);
 return {scene,land,bounds,dispose(){const gs=new Set(),ms=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:o.material?[o.material]:[])ms.add(m)});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());scene.children.filter(o=>o.isLight).forEach(l=>l.dispose?.());}};
}
export function fitChapterCamera(bounds,aspect){const camera=new THREE.OrthographicCamera(-300,300,250,-250,1,2000);camera.up.set(0,0,1);const c=bounds.getCenter(new THREE.Vector3());camera.position.set(c.x+270,c.y-500,c.z+1050);camera.lookAt(c.x,c.y,0);camera.updateMatrixWorld();const lo=new THREE.Vector2(Infinity,Infinity),hi=new THREE.Vector2(-Infinity,-Infinity);for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);lo.min(p);hi.max(p)}const x=(lo.x+hi.x)/2,y=(lo.y+hi.y)/2,h=Math.max((hi.x-lo.x)/2/aspect,(hi.y-lo.y)/2)*1.12;camera.left=x-h*aspect;camera.right=x+h*aspect;camera.top=y+h;camera.bottom=y-h;camera.updateProjectionMatrix();return camera;}
