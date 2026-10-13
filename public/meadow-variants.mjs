import * as THREE from 'three';
import {createTile,disposeTile} from './growth-modules.js';
export const MEADOW_VARIANTS={
 calm:{name:'Wenig Klee',clover:3,tufts:3},
 classic:{name:'Kleine Kleewiese',clover:6,tufts:5},
 rich:{name:'Mehr Klee',clover:10,tufts:4},
 tuft:{name:'Ein höheres Büschel',clover:5,tufts:3,tall:true},
 flowers:{name:'Kleine Blümchen',clover:5,tufts:4,flowers:2},
 visitors:{name:'Blumenbesuch',clover:5,tufts:4,flowers:1,insects:2}
};
/** All variants retain the exact approved grass-clover surface, material and dimensions. */
export function createMeadowTile(id,{seed=73}={}){
 let v=MEADOW_VARIANTS[id];if(!v)throw Error('Unknown meadow '+id);let group=createTile('grass-clover',{seed}),base=group.children.find(o=>o.userData.surface),discard=new THREE.Group();for(let child of [...group.children])if(child!==base)discard.add(child);disposeTile(discard);
 let rnd=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296),sphere=new THREE.SphereGeometry(1,12,8),mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.75}),leaves=[mat('#d3f471'),mat('#b1e443'),mat('#87bf24')],animations=[];
 const add=(geo,m,x,y,z)=>{let o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;group.add(o);return o};
 function leaf(x,y,z,angle,length=3.3,width=2.6){let o=add(sphere,leaves[1],x,y,z);o.scale.set(length,width,.85);o.rotation.z=angle;return o}
 for(let j=0;j<v.clover;j++){let x=(rnd()-.5)*52,y=(rnd()-.5)*52;for(let k=0;k<3;k++){let a=k*Math.PI*2/3+rnd()*.12;leaf(x+Math.cos(a)*2.3,y+Math.sin(a)*2.3,19.7,a)}}
 function tuft(x,y,h){for(let k=0;k<3;k++){let shape=new THREE.Shape(),bend=(k-1)*h*.35;shape.moveTo(-1,0);shape.quadraticCurveTo(-.8,h*.65,bend,h);shape.quadraticCurveTo(1,h*.45,1,0);shape.closePath();let geo=new THREE.ExtrudeGeometry(shape,{depth:.65,bevelEnabled:true,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),o=add(geo,leaves[k],x+(k-1)*1.6,y,17.8);o.rotation.x=Math.PI/2;o.rotateOnWorldAxis(new THREE.Vector3(0,0,1),.6);}}
 for(let j=0;j<v.tufts;j++)tuft((rnd()-.5)*50,(rnd()-.5)*50,3.5+rnd()*1.8);
 if(v.tall)tuft(20,-19,10);
 let petal=mat('#fff3c4'),pink=mat('#f6b7a0'),gold=mat('#efb52e'),stem=mat('#709e29'),bodies=mat('#edbd43'),heads=mat('#63502a'),wingMat=new THREE.MeshStandardMaterial({color:'#fff7d9',transparent:true,opacity:.78,roughness:.45,depthWrite:false});
 for(let j=0;j<(v.flowers||0);j++){let x=j? -16:16,y=j? -14:12,height=j?24:25.5;let stalk=add(new THREE.CylinderGeometry(.6,.85,height-18,8),stem,x,y,(18+height)/2);stalk.rotation.x=Math.PI/2;for(let k=0;k<5;k++){let a=k*Math.PI*2/5,o=add(sphere,j?pink:petal,x+Math.cos(a)*3,y+Math.sin(a)*3,height);o.scale.set(3.2,1.8,.8);o.rotation.z=a;}let center=add(sphere,gold,x,y,height+.7);center.scale.set(1.9,1.9,1.2);leaf(x-2,y,20.5,-.5,3.2,1.4);
 if(v.insects)for(let k=0;k<v.insects;k++){let insect=new THREE.Group();group.add(insect);let body=new THREE.Mesh(sphere,bodies);body.scale.set(.85,1.3,.8);insect.add(body);let head=new THREE.Mesh(sphere,heads);head.position.y=1.2;head.scale.setScalar(.6);insect.add(head);let wings=[];for(let sign of [-1,1]){let wing=new THREE.Mesh(sphere,wingMat);wing.position.set(sign*1,0,.5);wing.scale.set(1.8,.75,.25);wing.rotation.z=sign*.35;insect.add(wing);wings.push(wing)}animations.push({insect,wings,x,y,phase:k*3.14,radius:8+k*2,z:height+5+k});}
 }
 group.userData={...group.userData,meadowVariant:id,animated:animations.length>0};function update(seconds){for(let a of animations){let angle=seconds*.85+a.phase;a.insect.position.set(a.x+Math.cos(angle)*a.radius,a.y+Math.sin(angle)*a.radius*.65,a.z+Math.sin(seconds*1.8+a.phase)*1.2);a.insect.rotation.z=angle;a.wings.forEach((w,k)=>w.rotation.y=Math.sin(seconds*28)*(k?1:-1)*.45)}}update(0);
 return {group,update,dispose(){disposeTile(group)}};
}
