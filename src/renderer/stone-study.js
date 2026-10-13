import * as THREE from 'three';
import {createStoneTile,STONE_STYLES} from './stone-modules.js';
import {createIvoryFrame} from './ivory-frame.js';
import {createMeadowTile} from './meadow-variants.js';
import {createTile} from './growth-modules.js';
import {createLivingLiquid} from './living-liquid.js';
const views=[];
for(const [style,spec]of Object.entries(STONE_STYLES)){
 const card=document.createElement('article');card.innerHTML=`<h2>${spec.name}</h2><canvas aria-label="${spec.name} im Gelände"></canvas><p>${spec.description}</p><small>Oben: Detailansicht · unten: im 80er Spielraster</small>`;document.querySelector('#variants').append(card);
 const canvas=card.querySelector('canvas'),renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.88;
 const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fff6dc','#a28d6c',1.65));const sun=new THREE.DirectionalLight('#fff4dc',3.3);sun.position.set(-160,220,480);sun.target.position.set(120,-90,0);scene.add(sun.target);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-400,right:400,top:400,bottom:-400,near:1,far:1400});sun.shadow.bias=-.0003;sun.shadow.normalBias=.4;scene.add(sun);const fill=new THREE.DirectionalLight('#d4e8ff',.4);fill.position.set(450,-120,350);scene.add(fill);
 const specimen=createStoneTile(style);specimen.group.position.set(120,80,8);specimen.group.scale.setScalar(1.8);scene.add(specimen.group);
 const map={n:3,cells:[0,1,2,3,4,5],water:[2],lava:[],stones:[1,4]},frame=createIvoryFrame({...map,style:'soft'});frame.group.position.y=-65;scene.add(frame.group);
 for(const shape of frame.walkableShapes){const m=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshStandardMaterial({color:'#87623d',roughness:.8}));m.position.set(0,-65,3.5);m.receiveShadow=true;scene.add(m)}
 for(const i of [0,3,5]){const tile=i===0?createTile('earth-loam',{seed:73}):createMeadowTile(i===3?'flowers':'classic',{seed:73+i}).group;tile.position.set(i%3*80+40,-Math.floor(i/3)*80-40-65,0);scene.add(tile)}
 for(const i of map.stones){const tile=createStoneTile(style,{seed:73+i});tile.group.position.set(i%3*80+40,-Math.floor(i/3)*80-40-65,0);scene.add(tile.group)}
 const liquids=[];for(const opening of frame.openings){const liquid=createLivingLiquid('water',{style:'sway',center:[200,-40]});liquids.push(liquid);const m=new THREE.Mesh(new THREE.ExtrudeGeometry(opening.shape,{depth:2,bevelEnabled:false,curveSegments:24}),liquid.material);m.position.set(0,-65,opening.surfaceZ-2);m.receiveShadow=true;scene.add(m)}
 const plane=new THREE.Mesh(new THREE.PlaneGeometry(320,220),new THREE.ShadowMaterial({opacity:.17}));plane.position.set(120,-145,-36);plane.receiveShadow=true;scene.add(plane);
 const specimenShadow=new THREE.Mesh(new THREE.PlaneGeometry(180,160),new THREE.ShadowMaterial({opacity:.17}));specimenShadow.position.set(120,80,-4);specimenShadow.receiveShadow=true;scene.add(specimenShadow);
 const camera=new THREE.OrthographicCamera(-160,160,250,-250,1,1800);camera.position.set(120,-460,1000);camera.lookAt(120,-60,0);
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.left=-155;camera.right=155;camera.top=155*h/w;camera.bottom=-camera.top;camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(canvas);resize();views.push({renderer,scene,camera,liquids});
}
let last=0;function tick(ms){requestAnimationFrame(tick);if(document.hidden||ms-last<33)return;last=ms;for(const v of views){v.liquids.forEach(l=>l.update(ms/1000));v.renderer.render(v.scene,v.camera)}}requestAnimationFrame(tick);
