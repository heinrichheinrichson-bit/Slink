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
 const bladeGeometry=new THREE.SphereGeometry(1,8,6),grassMaterials=['#9bbd43','#b1d34f','#8eae3c'].map(color=>new THREE.MeshStandardMaterial({color,roughness:.92}));
 let rising=[];
 function blade(x,y,angle,length,width,index,z=18.55){const b=new THREE.Mesh(bladeGeometry,grassMaterials[index%3]);b.position.set(x,y,z);b.rotation.z=angle;b.scale.set(length,width,.3);b.receiveShadow=true;b.castShadow=true;group.add(b);return b}
 function grassTrail(level,path){
  // Seeded, irregular pairs of laid-down blades. No painted line or luminous overlay.
  for(let k=1;k<path.length;k++){
   const a=path[k-1],b=path[k],dx=b%level.n-a%level.n,dy=-(Math.floor(b/level.n)-Math.floor(a/level.n));
   if(Math.abs(dx)+Math.abs(dy)!==1)continue;
   const angle=Math.atan2(dy,dx),nx=-dy,ny=dx;
   for(let j=0;j<12;j++)for(let side of [-1,1]){
    const seed=((a*97+b*31+j*71+side*17)>>>0),t=(j+.2+(seed%11)/18)/12,offset=side*(.8+seed%17*.38);
    blade(60+a%level.n*80+dx*80*t+nx*offset,-60-Math.floor(a/level.n)*80+dy*80*t+ny*offset,angle+(seed%13-6)*.095,2.8+seed%5*.3,.5+seed%3*.1,seed);
   }
  }
  if(path.length>1){const i=path.at(-2),x=60+i%level.n*80,y=-60-Math.floor(i/level.n)*80;
   for(let j=0;j<7;j++){const angle=j*2.399,b=blade(x+Math.cos(angle)*12,y+Math.sin(angle)*12,angle,2.8,.8,j);rising.push(b)}
  }
 }
 function dot(x,y,r=1){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,18.7);mesh.scale.setScalar(r);mesh.renderOrder=3;group.add(mesh)}
 return {group,update(level,path,mode,touching,time){
  const key=level.n+':'+path.join(',')+':'+mode;
  if(key!==signature){signature=key;group.clear();rising=[];
   if(mode==='grass')grassTrail(level,path);
   if(mode!=='previous'&&mode!=='grass')for(const p of routeDots(level,path))dot(p.x,p.y,p.last?1.2:.83);
   if(mode!=='grass'&&path.length>1){const previous=path.at(-2),x=60+previous%level.n*80,y=-60-Math.floor(previous/level.n)*80;for(const [dx,dy]of [[-23,0],[23,0],[0,-23],[0,23]])dot(x+dx,y+dy,1.45)}
  }
  for(let j=0;j<rising.length;j++){const b=rising[j],lift=.45+.25*Math.sin(time*1.25+j*.3);b.rotation.y=lift;b.position.z=19.1+lift*.6;}
  group.visible=mode!=='touch'||touching;material.opacity=.78+.08*Math.sin(time*2);
 },dispose(){geometry.dispose();material.dispose();bladeGeometry.dispose();grassMaterials.forEach(m=>m.dispose());group.clear()}};
}
