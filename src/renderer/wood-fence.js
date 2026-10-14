import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export const FENCE_STYLES={honey:{name:'Honigholz',wood:'#bd8046',end:'#e7b77a',grain:'#8b572e'},chestnut:{name:'Kastanie',wood:'#96603b',end:'#cf9a63',grain:'#714528'}};
export function fenceEdges(n,walls,{pitch=80,origin=[40,-40]}={}){
 if(!Number.isInteger(n)||n<1)throw Error('Invalid grid size');
 const seen=new Set();return walls.map(([a,b])=>{
  if(!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<0||a>=n*n||b>=n*n||Math.abs(a%n-b%n)+Math.abs(Math.floor(a/n)-Math.floor(b/n))!==1)throw Error('Fence requires side-adjacent cells');
  const key=[a,b].sort((x,y)=>x-y).join(':');if(seen.has(key))return null;seen.add(key);
  const x=origin[0]+(a%n+b%n)*pitch/2,y=origin[1]-(Math.floor(a/n)+Math.floor(b/n))*pitch/2;
  return {a,b,center:[x,y],ends:a%n===b%n?[[x-pitch/2,y],[x+pitch/2,y]]:[[x,y-pitch/2],[x,y+pitch/2]]};
 }).filter(Boolean);
}
export function fenceBlocks(walls,a,b){return walls.some(([x,y])=>x===a&&y===b||x===b&&y===a)}
/** Z-up, exact grid boundary placement, shared posts at joined corners. No occupied cell. */
export function createWoodFence({n,walls,pitch=80,origin=[40,-40],baseZ=8.5,style='honey'}={}){
 const spec=FENCE_STYLES[style];if(!spec)throw Error('Unknown fence style');
 const group=new THREE.Group();group.name='wood-fence';const edges=fenceEdges(n,walls,{pitch,origin});
 group.userData={walls:edges.map(e=>[e.a,e.b]),occupiedCells:[],style,pitch,baseZ};
 const wood=new THREE.MeshStandardMaterial({color:spec.wood,roughness:.83}),end=new THREE.MeshStandardMaterial({color:spec.end,roughness:.8}),grain=new THREE.MeshStandardMaterial({color:spec.grain,roughness:.95}),iron=new THREE.MeshStandardMaterial({color:'#665341',roughness:.7});
 const box=(parent,w,d,h,r,mat,x,y,z)=>{const m=new THREE.Mesh(new RoundedBoxGeometry(w,d,h,3,r),mat);m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;parent.add(m);return m};
 const line=(parent,points,r=.12)=>{const m=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),16,r,4,false),grain);parent.add(m)};
 const posts=new Map();
 for(const e of edges){for(const [x,y]of e.ends){const key=x+':'+y;if(posts.has(key))continue;const post=new THREE.Group();post.name='fence-post';post.position.set(x,y,baseZ-2);group.add(post);posts.set(key,post);box(post,6.3,6.3,34,1.05,wood,0,0,17);box(post,7.4,7.4,3.1,1.25,end,0,0,34);
  for(const side of [-1,1])for(let k=0;k<2;k++){const points=[];for(let j=0;j<=9;j++)points.push(new THREE.Vector3(-1.7+k*2.5+Math.sin(j*.6+k)*.22,side*3.16,3+j*2.2));line(post,points,.1)}
 }
 const rail=new THREE.Group();rail.name='fence-span';rail.position.set(...e.center,baseZ);if(e.a%n!==e.b%n)rail.rotation.z=Math.PI/2;rail.userData.cells=[e.a,e.b];group.add(rail);
 for(const z of [16,24]){box(rail,pitch-4.5,4.2,5.1,.95,wood,0,0,z);for(const face of [-1,1]){
  for(let k=0;k<2;k++){const points=[];for(let j=0;j<=12;j++){const x=-pitch/2+5+j*(pitch-10)/12;points.push(new THREE.Vector3(x,face*2.12,z-.9+k*1.7+Math.sin(j*.65+z)*.2))}line(rail,points,.1)}
  for(const x of [-pitch/2+5.8,pitch/2-5.8]){const nail=new THREE.Mesh(new THREE.SphereGeometry(.56,8,6),iron);nail.scale.y=.3;nail.position.set(x,face*2.28,z);rail.add(nail)}
  const points=[];for(let j=0;j<=24;j++){const a=j/24*Math.PI*2;points.push(new THREE.Vector3(11+Math.cos(a)*1.6,face*2.14,z+Math.sin(a)*.65))}line(rail,points,.1);
 }}
 }
 return {group,edges,dispose(){const gs=new Set(),ms=new Set();group.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material)});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose())}};
}
