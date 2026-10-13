import * as THREE from 'three';
import {createGardenGoal} from './garden-marker-goals.js';
import {createVisitorMotion} from './visitor-motion.js';
export const FLOWER_SPECIES={
 daisy:{name:'Gänseblümchen',petals:10,colors:['#fff6dc','#ffffff'],center:'#edb62c',width:2.9,length:7.8,radius:10.8,heart:4.5},
 buttercup:{name:'Butterblume',petals:5,colors:['#ffd133','#ffe567'],center:'#dca119',width:6.5,length:8,radius:9.2,heart:3.3},
 meadow:{name:'Wiesenblüte',petals:5,colors:['#df68bf','#ed8cd1'],center:'#ffdc63',width:6.8,length:8.1,radius:9.4,heart:3.5},
 poppy:{name:'Kleiner Mohn',petals:4,colors:['#f16d51','#ff8a68'],center:'#50343c',width:8.7,length:9.2,radius:8.8,heart:4.1}
};
const flightHash=(step,seed)=>THREE.MathUtils.euclideanModulo(Math.sin(step*127.1+seed*311.7)*43758.5453,1);
/** Continuous cubic B-spline through seeded controls: curved, C2 continuous and bounded.
 * A monotone time warp varies speed without stop/go waypoint motion. */
export function sampleVisitorFlight(time,seed,out=new THREE.Vector3()){
 const clock=Math.max(0,time),phase=flightHash(0,seed)*6.28,t=clock*.52+.6*Math.sin(clock*.43+phase)+.18*Math.sin(clock*.97+phase*1.7)+2,step=Math.floor(t),u=t-step;
 const weights=[(1-u)**3/6,(3*u**3-6*u*u+4)/6,(-3*u**3+3*u*u+3*u+1)/6,u**3/6];out.set(0,0,0);
 for(let j=0;j<4;j++){
  const k=Math.floor((step+j-1)/2),w=weights[j];let x=-16+flightHash(k*3+1,seed)*40,z=-14+flightHash(k*3+3,seed)*36;
  // A convex flight area covers more of the tile while excluding the front-right tag.
  const excess=Math.max(0,(x+z-14)/2);x-=excess;z-=excess;
  out.x+=x*w;out.y+=(21.5+flightHash(k*3+2,seed)*5)*w;out.z+=z*w;
 }
 out.y+=Math.sin(clock*3.3+phase)*.18;return out;
}
/** Same Y-up anchor, states, marker sizes and API as createGardenGoal.
 * Rotate group.x by PI/2 in the Z-up terrain renderer. Decorative, no input targets.
 * Existing cream numbered tag is reused; the existing golden bud stays identical. */
export function createFlowerGoal({species='daisy',number=1,state='closed',layout='compact',insects=true}={}){
 const spec=FLOWER_SPECIES[species];if(!spec)throw Error('Unknown flower species '+species);
 const marker=createGardenGoal({number,state,layout}),group=marker.group,bud=group.children[0],blossom=new THREE.Group();
 blossom.position.copy(bud.position);group.add(blossom);const geometries=[],materials=[];
 const material=color=>{const m=new THREE.MeshStandardMaterial({color,roughness:.56});materials.push(m);return m};
 const green=material('#538b2c'),petalMats=spec.colors.map(material),heartMat=material(spec.center),sphere=new THREE.SphereGeometry(1,20,12);geometries.push(sphere);
 function ball(parent,mat,x,y,z,sx,sy,sz){const m=new THREE.Mesh(sphere,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=m.receiveShadow=true;parent.add(m);return m}
 ball(blossom,green,0,5,0,1.8,6,1.8);for(const side of [-1,1]){const leaf=ball(blossom,green,side*6,3,0,8,1.4,3);leaf.rotation.z=side*.25}
 const petals=[];
 for(let k=0;k<spec.petals;k++){
  const pivot=new THREE.Group();pivot.position.y=12;pivot.rotation.y=k*Math.PI*2/spec.petals;blossom.add(pivot);const hinge=new THREE.Group();pivot.add(hinge);
  let geo=sphere;if(species==='poppy'){
   geo=sphere.clone();const p=geo.attributes.position;for(let j=0;j<p.count;j++){const x=p.getX(j),z=p.getZ(j);p.setY(j,p.getY(j)+Math.sin(Math.atan2(z,x)*5)*.26*Math.hypot(x,z))}geo.computeVertexNormals();geometries.push(geo);
  }
  const petal=new THREE.Mesh(geo,petalMats[k%2]);petal.position.z=spec.radius;petal.scale.set(spec.width,species==='poppy'?1.5:1.2,spec.length);petal.castShadow=petal.receiveShadow=true;hinge.add(petal);petals.push(hinge);
 }
 const heart=ball(blossom,heartMat,0,13.8,0,spec.heart,2.7,spec.heart);
 // Tiny stamens give the open centre depth, without extra symbols or particles.
 for(let k=0;k<(species==='poppy'?9:7);k++){const a=k*Math.PI*2/(species==='poppy'?9:7);ball(blossom,heartMat,Math.cos(a)*spec.heart*.7,16,Math.sin(a)*spec.heart*.7,.65,.6,.65)}
 const visitors=new THREE.Group();visitors.name='flower-visitors';blossom.add(visitors);
 const honey=material('#e9ad32'),fluff=material('#d6af50'),dark=material('#60452b'),wingMat=material('#fff6df');fluff.roughness=.95;wingMat.transparent=true;wingMat.opacity=.72;wingMat.depthWrite=false;
 const flights=[];for(let k=0;k<2;k++){
  const insect=new THREE.Group();insect.name=k?'bumblebee':'bee';insect.scale.setScalar(1.8);visitors.add(insect);const width=k?1.08:.7,height=k?.98:.65;ball(insect,k?fluff:honey,0,0,0,width,height,1.2);ball(insect,dark,0,0,1.05,k?.56:.48,k?.54:.48,.48);for(const z of [-.55,.15])ball(insect,dark,0,0,z,width*1.02,height*1.02,.18);
  if(k){
   const cream=material('#f4e4b9');cream.roughness=1;ball(insect,cream,0,0,-.98,.72,.65,.38);
   const positions=[],colors=[],count=260;
   for(let j=0;j<count;j++){
    const y=1-2*(j+.5)/count,r=Math.sqrt(1-y*y),a=j*2.39996323,x=Math.cos(a)*r,z=Math.sin(a)*r;
    const root=new THREE.Vector3(x*width*1.015,y*height*1.015,z*1.215),normal=new THREE.Vector3(x/width,y/height,z/1.2).normalize(),length=.12+flightHash(j,91)*.12;
    const tip=root.clone().addScaledVector(normal,length);tip.z-=.045;positions.push(...root.toArray(),...tip.toArray());
    const c=new THREE.Color(z<-.72?'#f4e4b9':Math.abs(z+.46)<.18||Math.abs(z-.12)<.17?'#635238':j%3?'#d6af50':'#e7c776');colors.push(...c.toArray(),...c.toArray());
   }
   const hairGeo=new THREE.BufferGeometry();hairGeo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));hairGeo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometries.push(hairGeo);
   const hairMat=new THREE.LineBasicMaterial({vertexColors:true,transparent:true,opacity:.82,depthWrite:false});materials.push(hairMat);const fur=new THREE.LineSegments(hairGeo,hairMat);fur.name='bumblebee-fur';insect.add(fur);
  }
  const wings=[];for(const side of [-1,1]){const wing=ball(insect,wingMat,side*.95,.5,-.1,1.5,.16,.65);wing.castShadow=false;wings.push(wing)}flights.push({insect,wings,seed:number*17+k*31+Object.keys(FLOWER_SPECIES).indexOf(species)*7,phase:k*2.7,a:new THREE.Vector3(),b:new THREE.Vector3()});
 }
 let insectsEnabled=Boolean(insects);function setInsects(enabled){insectsEnabled=Boolean(enabled);group.userData.insects=insectsEnabled}
 const motion=createVisitorMotion(number*17+Object.keys(FLOWER_SPECIES).indexOf(species)*7);
 group.userData.visitorSizes={bee:100,bumblebee:100};
 function setVisitorSize(kind,percent=100){
  if(!['bee','bumblebee'].includes(kind))throw Error('Unknown flower visitor');
  if(!Number.isFinite(percent)||percent<50||percent>300)throw RangeError('Visitor size must be between 50 and 300 percent');
  flights.find(f=>f.insect.name===kind).insect.scale.setScalar(1.8*percent/100);group.userData.visitorSizes[kind]=percent;
 }
 let current=state,target=state==='bloom'?1:0,openness=target;
 function setState(s){marker.setState(s);current=s;target=s==='bloom'?1:0}
 function update(time,delta=.016){
  marker.update(time,delta);openness+=(target-openness)*Math.min(1,delta*7);const o=openness;
  bud.scale.multiplyScalar(1-o);bud.visible=o<.999;
  blossom.visible=o>.001;blossom.scale.setScalar(o);for(const hinge of petals)hinge.rotation.x=-(1-o)*1.1;heart.scale.y=2.7*(.8+.2*o);
  visitors.visible=insectsEnabled&&current==='bloom'&&o>.94;
  const agents=motion.update(delta);
  for(let i=0;i<flights.length;i++){const f=flights[i],a=agents[i];f.insect.position.copy(a.position);const vx=a.velocity.x,vz=a.velocity.z,speed=Math.hypot(vx,vz);if(speed>.5){const heading=Math.atan2(vx,vz),turn=Math.atan2(Math.sin(heading-f.insect.rotation.y),Math.cos(heading-f.insect.rotation.y));f.insect.rotation.y+=turn*Math.min(1,delta*9);f.insect.rotation.z=THREE.MathUtils.clamp(-turn*.22,-.24,.24)}else f.insect.rotation.z*=Math.max(0,1-delta*6);f.insect.rotation.x=-Math.min(.16,speed*.009);f.wings.forEach((w,k)=>w.rotation.z=Math.sin(time*30+f.phase)*(k?1:-1)*.5)}
 }
 setInsects(insects);update(0,1);group.userData.species=species;group.userData.decorative=true;
 return{group,setState,setInsects,setVisitorSize,setSize:marker.setSize,update,get state(){return current},dispose(){marker.dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose())}};
}
