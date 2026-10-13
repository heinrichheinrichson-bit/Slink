import * as THREE from 'three';
const hash=(n,seed)=>THREE.MathUtils.euclideanModulo(Math.sin(n*127.1+seed*311.7)*43758.5453,1);
const stations=[[-13,-9],[20,-10],[8,4],[-11,18]];
function bound(p){p.x=THREE.MathUtils.clamp(p.x,-16,24);p.z=THREE.MathUtils.clamp(p.z,-14,22);const excess=Math.max(0,(p.x+p.z-14)/2);p.x-=excess;p.z-=excess;return p}
/** Two independent steering agents: wider, brisk bee trips; slower bumblebee visits.
 * Local flower coordinates, Y up. Fixed substeps, bounded space and mutual avoidance. */
export function createVisitorMotion(seed=73){
 const agents=[{kind:'bee',position:new THREE.Vector3(-12,25,10),velocity:new THREE.Vector3(),speed:19,leg:0,wait:0,station:-1},{kind:'bumblebee',position:new THREE.Vector3(3,21.5,-7),velocity:new THREE.Vector3(),speed:9,leg:0,wait:0,station:-1}];
 let time=0;
 function choose(a,index){
  a.leg++;a.age=0;const key=seed+index*113,visiting=a.kind==='bumblebee'?a.leg%2===1:a.leg%5===0;
  if(visiting){a.target=new THREE.Vector3((hash(a.leg+1,key)-.5)*5,20.5,(hash(a.leg+3,key)-.5)*5);a.visiting=true}
  else{let station=Math.floor(hash(a.leg,key)*4);if(station===a.station)station=(station+1+Math.floor(hash(a.leg+9,key)*2))%4;a.station=station;const [x,z]=stations[station];a.target=bound(new THREE.Vector3(x+(hash(a.leg+2,key)-.5)*3,a.kind==='bee'?24.5:23,z+(hash(a.leg+4,key)-.5)*3));a.visiting=false}
  // Do not choose a destination already occupied by the other visitor.
  const other=agents[1-index],flatDistance=(p,q)=>Math.hypot(p.x-q.x,p.z-q.z);
  if(flatDistance(a.target,other.position)<13||(other.target&&flatDistance(a.target,other.target)<13)){
   let best=-1;for(let k=0;k<stations.length;k++){const [x,z]=stations[k],p=new THREE.Vector3(x,24,z),score=flatDistance(p,other.position)+(other.target?flatDistance(p,other.target):0);if(score>best){best=score;a.target=p;a.station=k}}a.visiting=false;
  }
 }
 agents.forEach(choose);
 function step(dt){
  time+=dt;const separation=agents[0].position.clone().sub(agents[1].position);separation.y=0;const distance=separation.length();
  for(let index=0;index<2;index++){
   const a=agents[index];a.age+=dt;
   // Avoid a stationary equilibrium when mutual avoidance prevents arrival.
   if(a.wait<=0&&a.age>(a.kind==='bee'?4.2:6.2)+hash(a.leg,seed+index)*1.3)choose(a,index);
   const d=a.target.clone().sub(a.position),flat=Math.hypot(d.x,d.z);
   if(a.wait>0){a.wait-=dt;if(a.wait<=0)choose(a,index)}
   else if(flat<1&&a.velocity.length()<2){a.wait=a.visiting?(a.kind==='bumblebee'?1.2: .45)+hash(a.leg,seed+index)*1.3:.12+hash(a.leg,seed+index)*.3}
   const desired=d.clone();desired.y=0;if(desired.lengthSq()>0)desired.normalize().multiplyScalar(a.speed*Math.min(1,flat/8));
   const acceleration=desired.sub(new THREE.Vector3(a.velocity.x,0,a.velocity.z)).multiplyScalar(5.5);
   if(distance<16&&distance>.001)acceleration.addScaledVector(separation,(index?-1:1)*(16-distance)*11/distance);
   acceleration.y=(a.target.y+Math.sin(time*4.1+index*2.3)*.16-a.position.y)*16-a.velocity.y*7;
   acceleration.clampLength(0,95);a.velocity.addScaledVector(acceleration,dt);a.velocity.clampLength(0,a.speed*1.1);a.position.addScaledVector(a.velocity,dt);bound(a.position);
  }
 }
 return{agents,update(delta){let remaining=THREE.MathUtils.clamp(delta,0,.1);while(remaining>1e-8){const dt=Math.min(1/120,remaining);step(dt);remaining-=dt}return agents}};
}
