import * as THREE from 'three';
/** Local origin = terrain top. Footprint < 74x74, all states share the same anchor.
 * createGardenGoal({number,state:'closed'|'next'|'bloom'}) returns group/setState/update/dispose.
 * Decorative only: terrain remains the input target. */
export const MARKER_LAYOUTS={
 front:{name:'Vorne · mittel',radius:13,x:0,z:22,fx:0,fz:-13},
 diagonal:{name:'Rechts vorne',radius:13,x:19,z:19,fx:-8,fz:-12},
 compact:{name:'Rechts vorne · klein',radius:10.5,x:19,z:19,fx:-8,fz:-12},
 left:{name:'Links vorne',radius:13,x:-19,z:19,fx:8,fz:-12},
 side:{name:'Seitlich',radius:13,x:22,z:0,fx:-15,fz:0},
 large:{name:'Vorne · groß',radius:16,x:0,z:21,fx:0,fz:-15}
};
export function createGardenGoal({number=1,state='closed',layout=new URLSearchParams(location.search).get('marke')||'front'}={}){
 const config=MARKER_LAYOUTS[layout]||MARKER_LAYOUTS.front,r=config.radius,tx=config.x,tz=config.z;
 const group=new THREE.Group(),flower=new THREE.Group();group.add(flower);flower.position.set(config.fx,0,config.fz);
 const geo=new THREE.SphereGeometry(1,20,14),mats=[];
 const mat=(color,roughness=.48)=>{let m=new THREE.MeshStandardMaterial({color,roughness});mats.push(m);return m};
 const gold=mat('#ffd05a'),light=mat('#ffeaa2'),green=mat('#538b2c'),heart=mat('#e5a32a');
 function shape(parent,m,x,y,z,sx,sy,sz){let a=new THREE.Mesh(geo,m);a.position.set(x,y,z);a.scale.set(sx,sy,sz);a.castShadow=true;a.receiveShadow=true;parent.add(a);return a}
 shape(flower,green,0,5,0,2.2,7,2.2);
 for(let side of [-1,1]){let leaf=shape(flower,green,side*7,4,1,9,1.7,4);leaf.rotation.z=side*.27;leaf.rotation.y=side*.3}
 let petals=[];for(let i=0;i<6;i++){let pivot=new THREE.Group();pivot.rotation.y=i*Math.PI/3;flower.add(pivot);let p=shape(pivot,i%2?gold:light,0,12,0,5,9,4);petals.push(p)}
 const center=shape(flower,heart,0,12,0,5,3.5,5);
 // Number sits on an independent cream seed-tag, never inside the petals.
 const rimMat=mat('#c5a777'),rimGeo=new THREE.CylinderGeometry(r+1.6,r+1.6,2.6,40),rim=new THREE.Mesh(rimGeo,rimMat);rim.position.set(tx,3,tz);rim.castShadow=true;group.add(rim);const diskGeo=new THREE.CylinderGeometry(r,r,2.2,40),tag=new THREE.Mesh(diskGeo,mat('#fff4da'));tag.position.set(tx,3.6,tz);tag.castShadow=true;group.add(tag);
 let c=document.createElement('canvas');c.width=c.height=128;let ctx=c.getContext('2d');ctx.fillStyle='#4b2a15';ctx.font='bold 100px Trebuchet MS';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(number),64,69);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.userData.transient=true;const labelMat=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}),labelGeo=new THREE.PlaneGeometry(r*1.72,r*1.72),label=new THREE.Mesh(labelGeo,labelMat);label.rotation.x=-Math.PI/2;label.position.set(tx,4.74,tz);group.add(label);
 let openness=0,target=0,current='';function setState(s){if(!['closed','next','bloom'].includes(s))throw Error('Unknown goal state');current=s;target=s==='bloom'?1:s==='next'?.16:0;group.userData.state=s;rimMat.color.set(s==='next'?'#f9bf39':'#c5a777');rimMat.emissive.set(s==='next'?'#d89514':'#000000');rimMat.emissiveIntensity=s==='next'?.15:0;}
 function update(time,delta=.016){openness+= (target-openness)*Math.min(1,delta*7);let o=openness;for(let p of petals){p.position.set(0,13-o*3,2+o*10);p.scale.set(5+o*1.5,9-o*6,4+o*4);p.rotation.x=o*-.25}center.visible=o>.4;center.position.y=11.4;let pulse=current==='next'?1+Math.sin(time*2.8)*.035:1;flower.scale.setScalar(pulse);gold.emissive.set('#ffc33e');gold.emissiveIntensity=current==='next'?.08+Math.sin(time*2.8)*.04:0;}
 setState(state);openness=target;update(0,1);group.userData.goalNumber=number;
 function setSize(percent){let radius=percent===33?13:percent===40?15.7:10.5;rim.scale.set((radius+1.6)/(r+1.6),1,(radius+1.6)/(r+1.6));tag.scale.set(radius/r,1,radius/r);label.scale.setScalar(radius/r);group.userData.markerSize=percent}
 return{group,setState,setSize,update,dispose(){geo.dispose();diskGeo.dispose();rimGeo.dispose();labelGeo.dispose();texture.dispose();labelMat.dispose();mats.forEach(m=>m.dispose())}};
}

