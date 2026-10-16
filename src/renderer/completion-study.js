import * as THREE from 'three';
import {createFuzzyCreature} from './fuzzy-creature.js';
import {createIvoryFrame} from './ivory-frame.js';
import {createMeadowTile} from './meadow-variants.js';
import {createFlowerGoal} from './flower-goals.js';
// Native modules; a complete living scene, not a detached portrait or progress-writing game.
export function createCompletionScene(canvas){
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fff5dc','#9a8961',1.8));const sun=new THREE.DirectionalLight('#fff1da',3.2);sun.position.set(-120,-180,400);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-220,right:220,top:220,bottom:-220,near:1,far:1000});sun.target.position.set(120,-80,0);sun.shadow.normalBias=.3;scene.add(sun,sun.target);
 const frame=createIvoryFrame({n:3,cells:[0,1,2,4],water:[],lava:[],stones:[],style:'soft'});scene.add(frame.group);const flowers=[];
 for(const i of [0,1,2,4]){const tile=createMeadowTile(i===4?'classic':'rich',{seed:103+i});tile.group.position.set(i%3*80+40,-Math.floor(i/3)*80-40,0);scene.add(tile.group)}
 for(const [x,y,species]of [[38,-42,'daisy'],[202,-45,'poppy'],[65,-65,'buttercup']]){const f=createFlowerGoal({species,state:'bloom',insects:false});f.group.rotation.x=Math.PI/2;f.group.position.set(x,y,12);f.setSize(27);for(const tag of f.group.children.slice(1,4))tag.visible=false;scene.add(f.group);flowers.push(f)}
 const friend=createFuzzyCreature();friend.setPalette('lavender');friend.group.scale.setScalar(1.75);friend.group.position.set(120,-119,8);scene.add(friend.group);
 const camera=new THREE.OrthographicCamera(-155,155,150,-150,1,1200);camera.up.set(0,0,1);camera.position.set(-100,-360,230);camera.lookAt(120,-65,5);
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);const half=142;camera.left=-half*w/h;camera.right=half*w/h;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix()}const observer=new ResizeObserver(resize);observer.observe(canvas);resize();let started=performance.now(),last=0,raf;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function tick(ms){raf=requestAnimationFrame(tick);if(document.hidden||ms-last<50)return;const dt=Math.min(.05,(ms-last)/1000);last=ms;const t=ms/1000;friend.update(reduced?0:t,0,{active:false,celebrationAge:reduced?-1:(ms-started)/1000,celebrationStyle:'gentle'});flowers.forEach(f=>f.update(reduced?0:t,dt));renderer.render(scene,camera)}raf=requestAnimationFrame(tick);
 return {replay(){started=performance.now()},setPalette:id=>friend.setPalette(id),dispose(){cancelAnimationFrame(raf);observer.disconnect();friend.dispose();renderer.dispose();renderer.forceContextLoss()}};
}
const view=createCompletionScene(document.getElementById('completionScene'));document.getElementById('friendPalette').onchange=e=>view.setPalette(e.target.value);for(const id of ['rejoice','nextPreview','againPreview'])document.getElementById(id).onclick=()=>view.replay();
