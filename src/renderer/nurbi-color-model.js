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
export const FUR_PATTERNS=['solid','belly','saddle','stripes','spots','speckles','mask','tail'];
export function furPatternMask(p,x,y,z){
 const size=p.patternSize??1,strength=p.patternStrength??1,smooth=THREE.MathUtils.smoothstep;
 let amount=0;
 if(p.pattern==='belly'){const head=smooth(-y,11/size,19/size)*(1-smooth(z,18*size,23*size)),belly=(1-smooth(z,7*size,13*size))*smooth(y,-4,4);amount=Math.max(head,belly)*.82}
 if(p.pattern==='saddle')amount=(1-smooth(Math.abs(x),3*size,8*size))*smooth(y,-1,9)*smooth(z,9,17)*.85;
 if(p.pattern==='stripes')amount=(1-smooth(Math.abs(Math.sin((y-3)/ (3.3*size)+x*.025)),.3,.6))*smooth(y,-4,5)*smooth(z,5,12);
 if(p.pattern==='spots'||p.pattern==='speckles'){
  const fine=p.pattern==='speckles',spacing=fine?5.2:11,radius=(fine?1.25:3.8)*size;
  // Stable staggered patches projected onto the coat; no random redraw or moving markings.
  const row=Math.round(y/spacing),cx=Math.round((x-(row%2)*spacing*.5)/spacing)*spacing+(row%2)*spacing*.5;
  const cy=row*spacing+Math.sin(row*2.7+cx)*spacing*.12;
  const distance=Math.hypot(x-cx,y-cy);
  amount=(1-smooth(distance,radius*.5,radius))*smooth(y,-5,3)*smooth(z,6,13);
 }
 if(p.pattern==='mask')amount=smooth(-y,11,16)*(1-smooth(Math.abs(x),8*size,13*size))*smooth(z,15,21);
 if(p.pattern==='tail')amount=smooth(y,31-7*size,34-3*size);
 return Math.max(0,Math.min(1,amount*strength));
}
export function createColorStudyModel(){
 const model=createFuzzyCreature(),fur=model.group.getObjectByName('curved-soft-fur'),geometry=fur.geometry,original=geometry.attributes.color.array.slice(),base=new THREE.Color('#d5a078'),tip=new THREE.Color('#ffe2b9'),blends=new Float32Array(original.length/3),bodies=[],paws=[],materials={};
 for(let i=0;i<blends.length;i++)blends[i]=(original[i*3]-base.r)/(tip.r-base.r);
 model.group.traverse(o=>{if(!o.isMesh)return;const hex='#'+o.material.color.getHexString();if(hex==='#dfa578')materials.coat=o.material;if(hex==='#428f8d')materials.iris=o.material;if(hex==='#ffe5bd')materials.face=o.material;if(hex==='#e69b88')materials.cheeks=o.material;if(o.parent.name==='soft-curved-antenna'&&hex==='#ffe5bd'){o.material=o.material.clone();materials.antenna=o.material}if(o.name==='original-body-part'){o.material=o.material.clone();o.material.color.set('#ffffff');o.material.vertexColors=true;o.geometry.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(o.geometry.attributes.position.count*3),3));bodies.push(o)}});
 // Each antenna has its own tip material; collect both without touching shared game palettes.
 model.group.traverse(o=>{if(o.isMesh&&o.parent.name==='soft-paw'){o.material=o.material.clone();paws.push(o.material)}});
 const antennaTips=[];model.group.traverse(o=>{if(o.isMesh&&o.parent.name==='soft-curved-antenna'&&o.material!==materials.coat)antennaTips.push(o.material)});
 function apply(p){paws.forEach(m=>m.color.set(p.paws||p.coat));for(const k of ['coat','iris','face','cheeks'])materials[k].color.set(p[k]);antennaTips.forEach(m=>m.color.set(p.antenna));const root=new THREE.Color(p.root),tip=new THREE.Color(p.tip),accent=new THREE.Color(p.accent),coat=new THREE.Color(p.coat),color=new THREE.Color(),position=geometry.attributes.position,attribute=geometry.attributes.color;for(let i=0;i<position.count;i++){color.copy(root).lerp(tip,blends[i]).lerp(accent,furPatternMask(p,position.getX(i),position.getY(i),position.getZ(i)));attribute.setXYZ(i,color.r,color.g,color.b)}attribute.needsUpdate=true;for(const body of bodies){const pos=body.geometry.attributes.position,col=body.geometry.attributes.color;for(let i=0;i<pos.count;i++){color.copy(coat).lerp(accent,furPatternMask(p,pos.getX(i)*body.scale.x+body.position.x,pos.getY(i)*body.scale.y+body.position.y,pos.getZ(i)*body.scale.z+body.position.z));col.setXYZ(i,color.r,color.g,color.b)}col.needsUpdate=true}}
 return {...model,apply};
}
