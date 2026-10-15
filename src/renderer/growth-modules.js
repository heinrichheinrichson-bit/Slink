import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export const TILE_SPEC=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5});
export const VARIANTS={
 'earth-loam':{name:'Warme Gartenerde',color:'#a66a3e',height:8.5,kind:'earth',grain:1.0,pebbles:9},
 'earth-humus':{name:'Dunkler Humus',color:'#745035',height:8.5,kind:'earth',grain:1.5,pebbles:6},
 'earth-clay':{name:'Goldene Lehmerde',color:'#bd8750',height:8.5,kind:'earth',grain:.65,pebbles:5},
 'grass-velvet':{name:'Samtwiese',color:'#b6dd35',height:18,kind:'grass',tufts:14,bladeHeight:4.5},
 'grass-sprouts':{name:'Frisches Wiesengras',color:'#9bd32b',height:18,kind:'grass',tufts:20,bladeHeight:8},
 'grass-clover':{name:'Kleewiese',color:'#a4d536',height:18,kind:'clover',tufts:10,bladeHeight:5},
 'reference':{name:'Bestehende Wiese',color:'#a9cc3e',height:13.5,kind:'reference'}
};
function noise(seed,contrast){let c=document.createElement('canvas');c.width=c.height=128;let ctx=c.getContext('2d'),d=ctx.createImageData(128,128);for(let i=0;i<d.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;let v=128+((seed>>>24)-128)*contrast;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}ctx.putImageData(d,0,0);return new THREE.CanvasTexture(c)}
/** Returns a real THREE.Group, centered at (0,0), Z up. Same 80-unit grid as SLINK. */
export function createTile(id,{seed=73,surfaceOnly=false}={}){
 const v=VARIANTS[id];if(!v)throw Error('Unknown tile '+id);let group=new THREE.Group(),rng=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
 const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.75,...extra});
 const add=(geometry,material,x=0,y=0,z=0)=>{let m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;group.add(m);return m};
 let surface=mat(v.color,{bumpMap:noise(73,v.kind==='earth'?.65:.12),bumpScale:v.grain||.18,roughness:v.kind==='earth'?.95:.65});
 // Bottom matches the approved tile exactly; only the top changes height.
 let depth=v.height+3.5,geometry,baseZ;
 if(v.kind==='earth'){let w=73.5,r=5,a=-w/2,b=w/2,s=new THREE.Shape();s.moveTo(a+r,a);s.lineTo(b-r,a);s.quadraticCurveTo(b,a,b,a+r);s.lineTo(b,b-r);s.quadraticCurveTo(b,b,b-r,b);s.lineTo(a+r,b);s.quadraticCurveTo(a,b,a,b-r);s.lineTo(a,a+r);s.quadraticCurveTo(a,a,a+r,a);s.closePath();geometry=new THREE.ExtrudeGeometry(s,{depth:v.height-1.5,bevelEnabled:true,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1});baseZ=-1;}
 else {geometry=new RoundedBoxGeometry(78.5,78.5,depth,4,7.5);baseZ=(v.height-3.5)/2;}
 let base=add(geometry,surface,0,0,baseZ);base.userData.surface=true;
 if(!surfaceOnly){if(v.kind==='earth'){
  let pebbleMats=[mat('#c59b6b'),mat('#98714c'),mat('#dbb78a')];
  for(let j=0;j<v.pebbles;j++){let x=(rng()-.5)*59,y=(rng()-.5)*59,size=.8+rng()*1.2,m=add(new THREE.SphereGeometry(1,9,6),pebbleMats[j%3],x,y,v.height-.25);m.scale.set(size*1.6,size,size*.55);m.rotation.z=rng()*6;}
  // Shallow clods catch the shared light; no painted tile border or fake shadow.
  for(let j=0;j<22;j++){let m=add(new THREE.SphereGeometry(1,8,6),surface,(rng()-.5)*62,(rng()-.5)*62,v.height-.35);let s=1+rng()*1.5;m.scale.set(s*1.6,s,.5);}
 }else if(v.kind!=='reference'){
  let leafMats=[mat('#d3f471'),mat('#b1e443'),mat('#87bf24')];
  const blade=(height,bend,width)=>{let s=new THREE.Shape();s.moveTo(-width,0);s.quadraticCurveTo(-width*.8,height*.6,bend,height);s.quadraticCurveTo(width*1.1,height*.45,width,0);s.closePath();return new THREE.ExtrudeGeometry(s,{depth:.6,bevelEnabled:true,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};
  for(let j=0;j<v.tufts;j++){
   let x=(rng()-.5)*59,y=(rng()-.5)*59;
   for(let k=0;k<3;k++){let h=v.bladeHeight*(.6+rng()*.4),m=add(blade(h,(k-1)*h*.4,v.kind==='grass'&&id==='grass-velvet'?1.6:1.1),leafMats[k],x+(k-1)*1.8,y,v.height-.15);m.rotation.x=Math.PI/2;m.rotateOnWorldAxis(new THREE.Vector3(0,0,1),rng()*Math.PI*2);}
  }
  if(v.kind==='clover')for(let j=0;j<6;j++){let x=(rng()-.5)*50,y=(rng()-.5)*50;for(let k=0;k<3;k++){let a=k*Math.PI*2/3,m=add(new THREE.SphereGeometry(1,12,8),leafMats[j%2],x+Math.cos(a)*2.3,y+Math.sin(a)*2.3,v.height+1.7);m.scale.set(3.3,2.6,.9);m.rotation.z=a;}}
  // Gentle warm highlights preserve material appearance instead of a neon overlay.
  surface.emissive.set('#4c790c');surface.emissiveIntensity=.055;
 }else{
  let leaf=mat('#9fc53b');for(let k=0;k<4;k++){let a=k*Math.PI/2+.3,m=add(new THREE.SphereGeometry(1,12,8),leaf,21+Math.cos(a)*4,-20+Math.sin(a)*4,13.7);m.scale.set(4.4,2.6,.65);m.rotation.z=a;}
 }
 }if(v.kind!=='earth'&&v.kind!=='reference'){surface.emissive.set('#4c790c');surface.emissiveIntensity=.055;}
 group.userData={variant:id,top:v.height,walkable:true,footprint:TILE_SPEC};return group;
}
export function disposeTile(group){let gs=new Set(),ms=new Set(),ts=new Set();group.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(let m of [].concat(o.material||[])){ms.add(m);if(m.bumpMap)ts.add(m.bumpMap)}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose())}

