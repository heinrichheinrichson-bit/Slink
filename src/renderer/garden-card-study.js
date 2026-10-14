import * as THREE from 'three';
import {createIvoryFrame} from './ivory-frame.js';
import {createMeadowTile} from './meadow-variants.js';
import {createTile} from './growth-modules.js';
import {createLivingLiquid} from './living-liquid.js';
import {createStoneTile} from './stone-modules.js';
import {createWoodFence} from './wood-fence.js';
import {createFlowerGoal} from './flower-goals.js';
const definitions=[
 {id:'fenceGarden',cells:[2,3,7,8,9,10,12,13,14,15,16,17,19,20,21,22,26,27],water:[],stones:[],earth:[14,20,21],walls:[[8,14],[9,15],[15,16],[21,22]],flowers:[7,10,12,17,19,22,26,27],species:['daisy','poppy']},
 {id:'riverGarden',cells:[1,2,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,26,27,28,29,33,34],water:[8,14,20,21,27],stones:[],earth:[],walls:[],flowers:[1,6,9,12,16,18,23,26,29,34],species:['daisy','buttercup']},
 {id:'stoneGarden',cells:[1,2,3,7,8,9,13,14,15,16,19,20,21,22,25,26,27,31,32,33],water:[],stones:[1,3,7,9,13,16,19,22,25,27,31,33],earth:[14,20],walls:[],flowers:[2,8,15,21,26,32],species:['meadow','buttercup']}
];
let growth=.5;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,views=[];
for(const [index,d]of definitions.entries()){
 const canvas=document.getElementById(d.id),renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.88;
 const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fff6dc','#a28d6c',1.65));const sun=new THREE.DirectionalLight('#fff4dc',3.3);sun.position.set(-180,360,800);sun.target.position.set(240,-240,0);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-500,right:500,top:500,bottom:-500,near:1,far:1800});sun.shadow.bias=-.0003;sun.shadow.normalBias=.4;scene.add(sun,sun.target);const fill=new THREE.DirectionalLight('#d4e8ff',.4);fill.position.set(600,-200,500);scene.add(fill);
 const land=new THREE.Group();scene.add(land);const frame=createIvoryFrame({n:6,cells:d.cells,water:d.water,lava:[],stones:d.stones,style:'soft'});land.add(frame.group);const updates=[],flowers=[];
 for(const i of d.cells.filter(i=>!d.water.includes(i)&&!d.stones.includes(i))){const tile=d.earth.includes(i)?{group:createTile('earth-loam',{seed:600+i}),update(){}}:createMeadowTile(['classic','rich','tuft','flowers'][i%4],{seed:600+i*17});tile.group.position.set(i%6*80+40,-Math.floor(i/6)*80-40,0);land.add(tile.group);updates.push(tile)}
 for(const [k,i]of d.stones.entries()){const stone=createStoneTile(k%4===0?'fossil':k%4===1?'plain':'pebble',{seed:300+i});stone.group.position.set(i%6*80+40,-Math.floor(i/6)*80-40,0);land.add(stone.group)}
 if(d.walls.length){const fence=createWoodFence({n:6,walls:d.walls,style:'honey',design:'picket'});land.add(fence.group)}
 for(const op of frame.openings){const liquid=createLivingLiquid('water',{style:'sway',center:[240,-240]});const m=new THREE.Mesh(new THREE.ExtrudeGeometry(op.shape,{depth:2,bevelEnabled:false,curveSegments:24}),liquid.material);m.position.z=op.surfaceZ-2;land.add(m);updates.push(liquid)}
 for(const [k,i]of d.flowers.entries()){const flower=createFlowerGoal({species:d.species[k%2],state:'bloom',insects:false});flower.group.rotation.x=Math.PI/2;flower.group.position.set(i%6*80+40+(k%2?8:-8),-Math.floor(i/6)*80-40,12);flower.group.scale.setScalar(1.1);land.add(flower.group);flowers.push(flower);updates.push(flower)}
 const camera=new THREE.OrthographicCamera(-300,300,250,-250,1,2000);camera.up.set(0,0,1);const bounds=new THREE.Box3().setFromObject(land),center=bounds.getCenter(new THREE.Vector3());camera.position.set(center.x+270,center.y-500,center.z+1050);camera.lookAt(center.x,center.y,0);camera.updateMatrixWorld();
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);const lo=new THREE.Vector2(Infinity,Infinity),hi=new THREE.Vector2(-Infinity,-Infinity);for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);lo.min(p);hi.max(p)}const cx=(lo.x+hi.x)/2,cy=(lo.y+hi.y)/2,half=Math.max((hi.x-lo.x)/2/(w/h),(hi.y-lo.y)/2)*1.12;camera.left=cx-half*w/h;camera.right=cx+half*w/h;camera.top=cy+half;camera.bottom=cy-half;camera.updateProjectionMatrix()}
 new ResizeObserver(resize).observe(canvas);resize();views.push({renderer,scene,camera,updates,flowers,canvas,onscreen:true});
}
function applyGrowth(){for(const v of views)v.flowers.forEach((f,k)=>{f.group.visible=k<Math.round(v.flowers.length*(.15+growth*.85));f.setState('bloom')});document.querySelectorAll('.bloom-count').forEach(e=>e.textContent=growth===0?'Ein Garten wartet':growth===1?'Alles blüht':'Der Garten erwacht')}
for(const b of document.querySelectorAll('[data-growth]'))b.onclick=()=>{growth=Number(b.dataset.growth);document.querySelectorAll('[data-growth]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));applyGrowth()};applyGrowth();
const visibility=new IntersectionObserver(entries=>{for(const e of entries){const v=views.find(v=>v.canvas===e.target);if(v)v.onscreen=e.isIntersecting}},{rootMargin:'100px'});views.forEach(v=>visibility.observe(v.canvas));let last=0;
function tick(ms){requestAnimationFrame(tick);if(document.hidden||ms-last<40)return;const delta=Math.min(.05,(ms-last)/1000);last=ms;for(const v of views)if(v.onscreen){v.updates.forEach(o=>o.update(reduce?0:ms/1000,delta));v.renderer.render(v.scene,v.camera)}}requestAnimationFrame(tick);
for(const b of document.querySelectorAll('[data-garden]'))b.onclick=()=>{document.getElementById('gardenName').textContent=b.dataset.garden;document.getElementById('gardenInfo').showModal()};document.getElementById('close').onclick=()=>document.getElementById('gardenInfo').close();
