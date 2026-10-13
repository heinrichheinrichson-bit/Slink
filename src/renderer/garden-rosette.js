import * as THREE from 'three';
/** One centred goal: Y-up, origin at terrain top, footprint <= 54x54.
 * Decorative meshes never replace the terrain hit target. */
export function createGardenGoal({number=1,state='closed'}={}){
 const group=new THREE.Group(),petals=[],materials=[];
 const sphere=new THREE.SphereGeometry(1,24,16);
 const mat=color=>{let m=new THREE.MeshStandardMaterial({color,roughness:.65});materials.push(m);return m};
 const petalA=mat('#f4cf7b'),petalB=mat('#ffe5a1'),centreMat=mat('#fff0c2');
 function mesh(material,x,y,z,sx,sy,sz,parent=group){let m=new THREE.Mesh(sphere,material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
 for(let i=0;i<8;i++){let pivot=new THREE.Group();pivot.rotation.y=i*Math.PI/4;group.add(pivot);petals.push(mesh(i%2?petalA:petalB,0,3,11,5,2.8,6,pivot))}
 mesh(centreMat,0,4.8,0,14,3.2,14);
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#542e16';ctx.font='bold 200px Trebuchet MS';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(number),128,138);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const labelGeo=new THREE.PlaneGeometry(26,26),labelMat=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}),label=new THREE.Mesh(labelGeo,labelMat);label.rotation.x=-Math.PI/2;label.position.y=8.05;group.add(label);
 let openness=0,target=0,current='closed';
 function setState(s){if(!['closed','next','bloom'].includes(s))throw Error('Unknown goal state');current=s;target=s==='bloom'?1:s==='next'?.18:0;group.userData.state=s;centreMat.color.set(s==='next'?'#ffe49a':'#fff0c2')}
 function update(time,delta=.016){openness+=(target-openness)*Math.min(1,delta*7);for(let p of petals){p.position.set(0,3+openness*.3,11+openness*6);p.scale.set(5+openness*1.1,2.8,6+openness*3)}let glow=current==='next'?.07+Math.sin(time*2.8)*.035:0;petalA.emissive.set('#f4b93c');petalA.emissiveIntensity=glow;petalB.emissive.set('#f4b93c');petalB.emissiveIntensity=glow;}
 setState(state);openness=target;update(0,1);group.userData.goalNumber=number;
 return{group,setState,update,dispose(){sphere.dispose();labelGeo.dispose();labelMat.dispose();texture.dispose();materials.forEach(m=>m.dispose())}};
}
