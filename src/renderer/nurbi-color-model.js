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
// Achievement directions remain study proposals, not game unlock requirements.
for(const [id,name,coat,root,tip,iris,face,cheeks,antenna,accent,paws,pattern,patternSize,patternStrength]of [
 ['stardew','Sternentau','#384663','#253149','#7886a5','#cfaa63','#f3dfbe','#c2999c','#d9ba78','#edc66c','#d8c6a6','speckles',.65,.9],
 ['cloverluck','Kleeglück','#829867','#61764e','#c2d2a0','#a1844d','#ede4c4','#cd9f85','#e2d39a','#4d6945','#e5d7b5','spots',.8,.55],
 ['wildberry','Wildbeere','#78516c','#55394f','#b78ba4','#8eae99','#ebd5c6','#ce8f9c','#d9b8c9','#c6a2b3','#493c4e','mask',1,.8],
 ['honeypaw','Honigpfote','#ca9b59','#a5743d','#efd09a','#6f9696','#f3e2bf','#d69b7e','#e7c77d','#775339','#71513e','tail',1,.9],
 ['moonflower','Mondblüte','#d5cddc','#aea4bf','#f6eeda','#83a9bb','#fff0d7','#d6b0b7','#e7d2a7','#ece1ce','#b2a6c2','belly',1,.75],
 ['eveningfox','Abendfuchs','#c37e52','#985634','#edb77d','#759783','#f6dfb7','#d3947d','#e0be86','#f0d6aa','#58463b','mask',1,.9],
 ['fern','Farnschatten','#617c73','#405d58','#a9c2ab','#c29a60','#e9dfbf','#bc9d8b','#dac995','#344f4a','#455a50','stripes',1.2,.65],
 ['rosequartz','Rosenquarz','#cda9b2','#aa8296','#f2d9d1','#819c9e','#fae9d7','#ce959e','#ead3b2','#f1dfc8','#ab879c','tail',1.3,.7],
 ['amber','Bernstein','#b98543','#8c5a2f','#ebc783','#799b8c','#f4e2bb','#d79d7b','#e8c77d','#6b4d38','#694b37','spots',.7,.7],
 ['iceclover','Eisklee','#a5c4c1','#7faaa9','#e0eee0','#8e7aa8','#f7edda','#d5b5af','#e7d4aa','#e9e5c9','#7d9fa1','speckles',.75,.6],
 ['plum','Pflaumenblüte','#796780','#58475f','#b4a2b8','#b7a071','#f0e2d1','#c398a6','#ddc6a4','#cfb4c3','#57455d','saddle',1.15,.65],
 ['dandelion','Löwenzahn','#c6bc79','#99935e','#ede4ac','#7c9d94','#f6e8c4','#d3a48d','#e8ce7d','#f1e8ce','#8a8160','belly',1.1,.8]
])COLOR_SKETCHES.push({id:'reward-'+id,name,coat,root,tip,iris,face,cheeks,antenna,accent,paws,pattern,patternSize,patternStrength,rewardStudy:true});
COLOR_SKETCHES.push({id:'tiger-study',name:'Tigerpfote',coat:'#cd9656',root:'#a5733f',tip:'#ecc38b',iris:'#8b9c71',face:'#f8e6c4',cheeks:'#cc9c89',antenna:'#e3c894',accent:'#49382e',paws:'#edddbf',pattern:'tiger',patternSize:1,patternStrength:.9});
COLOR_SKETCHES.push({id:'leopard-study',name:'Leopardenpfote',coat:'#ccab70',root:'#a88750',tip:'#edd3a0',iris:'#8a9a68',face:'#f4e6cb',cheeks:'#c59c86',antenna:'#d9c18d',accent:'#48372b',paws:'#e6d4ae',pattern:'leopard',patternSize:1,patternStrength:.95});
// Fixed staggered rosettes with individual proportions, rotations and broken arcs.
const LEOPARD_ROSETTES=[];
for(let row=0;row<4;row++)for(let col=0;col<5;col++){
 const n=row*5+col,noise=Math.sin(n*13.13+2.1);
 LEOPARD_ROSETTES.push({u:(col-2)*5.5+(row%2)*1.8+noise*.75,v:4+row*7+Math.cos(n*7.7)*1.1,rx:1.85+(Math.sin(n*5.1)+1)*.38,ry:1.65+(Math.cos(n*4.3)+1)*.5,angle:noise*.8,phase:n*2.37,gap:.3+(Math.sin(n*3.7)+1)*.18});
}
// Three designed dorsal-to-flank marks, placed in body-relative angular coordinates.
const TIGER_BANDS=[[5.8,2.7,1.95,1.25],[15.8,2.25,-2.1,1.6],[25.1,1.9,1.15,1.38]];
export const FUR_PATTERNS=['solid','belly','saddle','stripes','tiger','leopard','spots','speckles','mask','tail'];
export function furPatternMask(p,x,y,z){
 const size=p.patternSize??1,strength=p.patternStrength??1,smooth=THREE.MathUtils.smoothstep;
 let amount=0;
 if(p.pattern==='belly'){const head=smooth(-y,11/size,19/size)*(1-smooth(z,18*size,23*size)),belly=(1-smooth(z,7*size,13*size))*smooth(y,-4,4);amount=Math.max(head,belly)*.82}
 if(p.pattern==='saddle')amount=(1-smooth(Math.abs(x),3*size,8*size))*smooth(y,-1,9)*smooth(z,9,17)*.85;
 if(p.pattern==='stripes')amount=(1-smooth(Math.abs(Math.sin((y-3)/ (3.3*size)+x*.025)),.3,.6))*smooth(y,-4,5)*smooth(z,5,12);
 if(p.pattern==='tiger'){
  const side=x<0?-1:1;
  // Follow the rounded body's upper surface; theta advances from spine to flank.
  const centerZ=9-4*smooth(y,12,29);
  const theta=Math.atan2(Math.abs(x),(z-centerZ)*1.12);
  for(let i=0;i<TIGER_BANDS.length;i++){
   const [center,width,bend,reach]=TIGER_BANDS[i];
   const end=reach+(side<0?[.15,-.12,.18][i]:0),u=theta/end;
   if(u>=1)continue;
   const drift=side<0?[-.15,.25,-.1][i]:0;
   const curve=center+drift*Math.sin(theta)+bend*(.2*u+.8*u*u);
   const half=width*size*Math.pow(1-u*u,.7);
   const edge=1-smooth(Math.abs(y-curve),half*.67,half);
   amount=Math.max(amount,edge*(1-smooth(u,.8,1)));
  }
  amount*=smooth(y,2,4)*smooth(z,5,9);
  // Short cheek sweeps and a compact forehead chevron, kept outside expression patches.
  const ax=Math.abs(x),front=1-smooth(y,-2,1);
  const cheekSide=smooth(ax,8.7,11)*(1-smooth(ax,14,16));
  const along=(y+15)/12,ends=smooth(along,0,.2)*(1-smooth(along,.78,1));
  let cheek=0;
  for(const height of [18.8,23.8]){
   const curve=height+.9*Math.sin(along*2.4)+(x<0?.2:0);
   const half=.8*size*(.5+.5*Math.sin(Math.max(0,Math.min(1,along))*Math.PI));
   cheek=Math.max(cheek,(1-smooth(Math.abs(z-curve),half*.5,half))*ends*cheekSide);
  }
  const browZ=30.2+ax*.4,forehead=(1-smooth(ax,3.2,4.6))*(1-smooth(Math.abs(z-browZ),.5*size,1.15*size))*(1-smooth(y,-9,-5));
  const muzzle=smooth((x/6.5)**2+((z-16.5)/3.8)**2,1,1.25);
  const eyeDistance=Math.min(((x-5.6)/5)**2+((z-23.4)/5.6)**2,((x+5.6)/5)**2+((z-23.4)/5.6)**2);
  const clearEyes=y<-10?smooth(eyeDistance,1,1.2):1;
  amount=Math.max(amount,Math.max(cheek,forehead)*front*muzzle*clearEyes*.9);

 }
 if(p.pattern==='leopard'){
  const centerZ=9-4*smooth(y,12,29),u=Math.atan2(x,(z-centerZ)*1.12)*9;
  if(y>0&&z>5){
   const scale=size*(1-.25*smooth(y,21,29));
   for(const spot of LEOPARD_ROSETTES){
    const dx=u-spot.u,dy=y-spot.v;
    if(Math.abs(dx)>spot.rx*scale*1.7||Math.abs(dy)>spot.ry*scale*1.7)continue;
    const c=Math.cos(spot.angle),s=Math.sin(spot.angle),a=(dx*c-dy*s)/(spot.rx*scale),b=(dx*s+dy*c)/(spot.ry*scale),theta=Math.atan2(b,a);
    const r=Math.hypot(a,b)/(1+.12*Math.sin(theta*3+spot.phase)+.065*Math.cos(theta*5-spot.phase));
    const ring=smooth(r,.51,.69)*(1-smooth(r,1,1.17));
    const opening=Math.abs(Math.atan2(Math.sin(theta-spot.phase),Math.cos(theta-spot.phase)));
    const broken=smooth(opening,spot.gap,spot.gap+.24);
    amount=Math.max(amount,Math.max(ring*broken,(1-smooth(r,.3,.62))*.12));
   }
   amount*=smooth(y,0,3)*smooth(z,5,9);
  }
  if(y<-3){
   let dots=0;
   for(const [cx,cz,r]of [[-3.3,30.7,.7],[1.1,31.5,.65],[4.4,29.8,.8],[-9.8,28.2,.85],[10.1,28.7,.75],[-12,23,.9],[12.5,23.8,1],[-11.1,18.7,.7],[11.6,19.2,.85]]){
    const sideDepth=Math.abs(cx)>11?-8:Math.abs(cx)>8?-13:-14;
    const d=Math.hypot((x-cx)/1.1,z-cz,(y-sideDepth)*.65);dots=Math.max(dots,1-smooth(d,r*size*.5,r*size));
   }
   const eyeDistance=Math.min(((x-5.6)/5)**2+((z-23.4)/5.6)**2,((x+5.6)/5)**2+((z-23.4)/5.6)**2);
   const eyes=y<-10?smooth(eyeDistance,1,1.2):1;
   amount=Math.max(amount,dots*eyes*(1-smooth(y,-4,-2)));
  }
 }
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
