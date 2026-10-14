import * as THREE from 'three';
// Reusable, scene-native cue. Connect only consecutive accepted steps.
export function routeDots(level,path){
 const dots=[];
 for(let k=1;k<path.length;k++){
  const a=path[k-1],b=path[k],ax=a%level.n,ay=Math.floor(a/level.n),bx=b%level.n,by=Math.floor(b/level.n);
  if(Math.abs(ax-bx)+Math.abs(ay-by)!==1)continue;
  for(let t=1;t<=8;t++)dots.push({x:60+80*(ax+(bx-ax)*t/9),y:-60-80*(ay+(by-ay)*t/9),last:k===path.length-1});
 }
 return dots;
}
export function createRouteCue(){
 const group=new THREE.Group();group.name='route-cue';let signature='';
 const geometry=new THREE.CircleGeometry(1.9,12),material=new THREE.MeshBasicMaterial({color:'#fff1b2',transparent:true,opacity:.83,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
 function dot(x,y,r=1){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,18.7);mesh.scale.setScalar(r);mesh.renderOrder=3;group.add(mesh)}
 return {group,update(level,path,mode,touching,time){
  const key=level.n+':'+path.join(',')+':'+mode;
  if(key!==signature){signature=key;group.clear();
   if(mode!=='previous')for(const p of routeDots(level,path))dot(p.x,p.y,p.last?1.2:.83);
   if(path.length>1){const previous=path.at(-2),x=60+previous%level.n*80,y=-60-Math.floor(previous/level.n)*80;for(const [dx,dy]of [[-23,0],[23,0],[0,-23],[0,23]])dot(x+dx,y+dy,1.45)}
  }
  group.visible=mode!=='touch'||touching;material.opacity=.78+.08*Math.sin(time*2);
 },dispose(){geometry.dispose();material.dispose();group.clear()}};
}
