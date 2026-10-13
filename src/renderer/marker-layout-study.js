import * as THREE from 'three';
import {createGardenGoal,MARKER_LAYOUTS} from './garden-marker-goals.js';
import {createTile} from './growth-modules.js';
import {createMeadowTile} from './meadow-variants.js';
const views=[];
for(let [id,config]of Object.entries(MARKER_LAYOUTS)){
 let card=document.createElement('article');card.innerHTML=`<h2>${String.fromCharCode(65+views.length)} · ${config.name}</h2><canvas aria-label="${config.name}: Knospe auf Erde und Blüte auf Wiese"></canvas><p>Marke: ${Math.round(config.radius*2/78.5*100)} % der Feldbreite</p><a href="bluetentest.html?marke=${id}">Im Testrätsel ausprobieren →</a>`;document.getElementById('layouts').append(card);
 const canvas=card.querySelector('canvas'),renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.88;
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-95,95,75,-75,.1,1500);camera.position.set(0,400,140);camera.lookAt(0,0,0);scene.add(new THREE.HemisphereLight('#fff6dc','#a28d6c',1.65));let sun=new THREE.DirectionalLight('#fff4dc',3.3);sun.position.set(-200,500,250);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-150,right:150,top:120,bottom:-120,near:1,far:1200});sun.shadow.bias=-.0003;scene.add(sun);let goals=[];
 for(let i=0;i<2;i++){let tile=i?createMeadowTile('calm',{seed:73}).group:createTile('earth-loam',{seed:73});tile.rotation.x=-Math.PI/2;tile.position.x=i?45:-45;scene.add(tile);let goal=createGardenGoal({number:i+1,state:i?'bloom':'next',layout:id});goal.group.position.set(i?45:-45,i?18:8.5,0);scene.add(goal.group);goals.push(goal)}
 function resize(){let w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.top=95*h/w;camera.bottom=-camera.top;camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(canvas);resize();views.push({renderer,scene,camera,goals});
}
let last=0;function tick(ms){requestAnimationFrame(tick);if(document.hidden||ms-last<33)return;last=ms;for(let v of views){v.goals.forEach(g=>g.update(ms/1000,.033));v.renderer.render(v.scene,v.camera)}}requestAnimationFrame(tick);
