import * as THREE from 'three';
/** Local origin = terrain top. Footprint < 74x74, all states share the same anchor.
 * createGardenGoal({number,state:'closed'|'next'|'bloom'}) returns group/setState/update/dispose.
 * Decorative only: terrain remains the input target. */
export function createGardenGoal({number=1,state='closed'}={}){
 const group=new THREE.Group(),flower=new THREE.Group();group.add(flower);flower.position.z=-13;
 const geo=new THREE.SphereGeometry(1,20,14),mats=[];
 const mat=(color,roughness=.48)=>{let m=new THREE.MeshStandardMaterial({color,roughness});mats.push(m);return m};
 const gold=mat('#ffd05a'),light=mat('#ffeaa2'),green=mat('#538b2c'),heart=mat('#e5a32a');
 function shape(parent,m,x,y,z,sx,sy,sz){let a=new THREE.Mesh(geo,m);a.position.set(x,y,z);a.scale.set(sx,sy,sz);a.castShadow=true;a.receiveShadow=true;parent.add(a);return a}
 shape(flower,green,0,5,0,2.2,7,2.2);
 for(let side of [-1,1]){let leaf=shape(flower,green,side*7,4,1,9,1.7,4);leaf.rotation.z=side*.27;leaf.rotation.y=side*.3}
 let petals=[];for(let i=0;i<6;i++){let pivot=new THREE.Group();pivot.rotation.y=i*Math.PI/3;flower.add(pivot);let p=shape(pivot,i%2?gold:light,0,12,0,5,9,4);petals.push(p)}
 const center=shape(flower,heart,0,12,0,5,3.5,5);
 // Flat painted numeral: no disk, rim, stem or separate support.
 let c=document.createElement('canvas');c.width=c.height=128;let ctx=c.getContext('2d');ctx.fillStyle='#542e16';ctx.strokeStyle='#fff2ce';ctx.lineWidth=9;ctx.lineJoin='round';ctx.font='bold 100px Trebuchet MS';ctx.textAlign='center';ctx.textBaseline='middle';ctx.strokeText(String(number),64,69);ctx.fillText(String(number),64,69);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;const labelMat=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}),labelGeo=new THREE.PlaneGeometry(26,26),label=new THREE.Mesh(labelGeo,labelMat);label.rotation.x=-Math.PI/2;label.position.set(0,.3,20);group.add(label);
 let openness=0,target=0,current='';function setState(s){if(!['closed','next','bloom'].includes(s))throw Error('Unknown goal state');current=s;target=s==='bloom'?1:s==='next'?.16:0;group.userData.state=s;}
 function update(time,delta=.016){openness+= (target-openness)*Math.min(1,delta*7);let o=openness;for(let p of petals){p.position.set(0,13-o*3,2+o*10);p.scale.set(5+o*1.5,9-o*6,4+o*4);p.rotation.x=o*-.25}center.visible=o>.4;center.position.y=11.4;let pulse=current==='next'?1+Math.sin(time*2.8)*.035:1;flower.scale.setScalar(pulse);gold.emissive.set('#ffc33e');gold.emissiveIntensity=current==='next'?.08+Math.sin(time*2.8)*.04:0;}
 setState(state);openness=target;update(0,1);group.userData.goalNumber=number;
 return{group,setState,update,dispose(){geo.dispose();labelGeo.dispose();texture.dispose();labelMat.dispose();mats.forEach(m=>m.dispose())}};
}
