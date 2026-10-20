import * as THREE from 'three';
import {createFuzzyCreature,CREATURE_PALETTES} from './fuzzy-creature.js';
export const COLOR_SKETCHES=Object.entries(CREATURE_PALETTES).map(([id,p])=>({id,name:p.name,existing:true,coat:p.coat,root:p.root,tip:p.tip,iris:p.iris,face:'#ffe5bd',cheeks:'#e69b88',antenna:'#ffe5bd',accent:p.coat,pattern:'solid'}));
for(const [id,name,coat,root,tip,iris,face,cheeks,antenna,accent,pattern]of [
 ['pistachio','Pistazie','#a4b875','#81915a','#e8edbd','#82633e','#fff0c9','#d8a28b','#f0d99f','#eee6bd','belly'],
 ['honey','Honig','#dcb16b','#b68b49','#ffe9b5','#598b91','#fff0d5','#e8a18c','#fff1ce','#f4dfb4','belly'],
 ['berry','Waldbeere','#ae809e','#875e7d','#edd0df','#7b9d8b','#f6e4d2','#d5979c','#e5c6d5','#d9aec1','belly'],
 ['moon','Mondblau','#819fb9','#607a97','#d3e6ee','#b88e54','#f1e8d7','#d5a7a1','#e5e6c9','#b8d1db','belly'],
 ['mocha','Mokka','#9b7961','#77543f','#e2c4a1','#729c91','#f5e2bd','#d39780','#e6cd9e','#634b45','saddle'],
 ['peach','Pfirsichblüte','#e4ae9e','#bc8b82','#ffe4cf','#749c9e','#fff1da','#d78989','#f5d898','#f6d6bd','belly'],
 ['polar','Wolkenfell','#c1c9ce','#98a8b4','#f8f1df','#788fbe','#fff4dc','#d9b0a8','#ead8b0','#dce4e1','belly'],
 ['dusk','Abendrot','#a99ab7','#83748e','#e7d9df','#bc985e','#f7e5ca','#d5a0a1','#eac58a','#e1b98c','saddle']
])COLOR_SKETCHES.push({id,name,coat,root,tip,iris,face,cheeks,antenna,accent,pattern});
export function createColorStudyModel(){
 const model=createFuzzyCreature(),fur=model.group.getObjectByName('curved-soft-fur'),geometry=fur.geometry,original=geometry.attributes.color.array.slice(),base=new THREE.Color('#d5a078'),tip=new THREE.Color('#ffe2b9'),blends=new Float32Array(original.length/3),bodies=[],materials={};
 for(let i=0;i<blends.length;i++)blends[i]=(original[i*3]-base.r)/(tip.r-base.r);
 model.group.traverse(o=>{if(!o.isMesh)return;const hex='#'+o.material.color.getHexString();if(hex==='#dfa578')materials.coat=o.material;if(hex==='#428f8d')materials.iris=o.material;if(hex==='#ffe5bd')materials.face=o.material;if(hex==='#e69b88')materials.cheeks=o.material;if(o.parent.name==='soft-curved-antenna'&&hex==='#ffe5bd'){o.material=o.material.clone();materials.antenna=o.material}if(o.name==='original-body-part'){o.material=o.material.clone();o.material.color.set('#ffffff');o.material.vertexColors=true;o.geometry.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(o.geometry.attributes.position.count*3),3));bodies.push(o)}});
 // Each antenna has its own tip material; collect both without touching shared game palettes.
 const antennaTips=[];model.group.traverse(o=>{if(o.isMesh&&o.parent.name==='soft-curved-antenna'&&o.material!==materials.coat)antennaTips.push(o.material)});
 function mask(p,x,y,z){if(p.pattern==='belly'){const head=THREE.MathUtils.smoothstep(-y,11,19)*(1-THREE.MathUtils.smoothstep(z,18,23)),belly=(1-THREE.MathUtils.smoothstep(z,7,13))*THREE.MathUtils.smoothstep(y,-4,4);return Math.max(head,belly)*.82}if(p.pattern==='saddle')return (1-THREE.MathUtils.smoothstep(Math.abs(x),3,8))*THREE.MathUtils.smoothstep(y,-1,9)*THREE.MathUtils.smoothstep(z,9,17)*.85;return 0}
 function apply(p){for(const k of ['coat','iris','face','cheeks'])materials[k].color.set(p[k]);antennaTips.forEach(m=>m.color.set(p.antenna));const root=new THREE.Color(p.root),tip=new THREE.Color(p.tip),accent=new THREE.Color(p.accent),coat=new THREE.Color(p.coat),color=new THREE.Color(),position=geometry.attributes.position,attribute=geometry.attributes.color;for(let i=0;i<position.count;i++){color.copy(root).lerp(tip,blends[i]).lerp(accent,mask(p,position.getX(i),position.getY(i),position.getZ(i)));attribute.setXYZ(i,color.r,color.g,color.b)}attribute.needsUpdate=true;for(const body of bodies){const pos=body.geometry.attributes.position,col=body.geometry.attributes.color;for(let i=0;i<pos.count;i++){color.copy(coat).lerp(accent,mask(p,pos.getX(i)*body.scale.x+body.position.x,pos.getY(i)*body.scale.y+body.position.y,pos.getZ(i)*body.scale.z+body.position.z));col.setXYZ(i,color.r,color.g,color.b)}col.needsUpdate=true}}
 return {...model,apply};
}
