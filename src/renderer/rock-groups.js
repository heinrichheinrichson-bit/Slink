import * as THREE from 'three';
import {TessellateModifier} from 'three/addons/modifiers/TessellateModifier.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
function contours(cells,pitch){
 const set=new Set(cells.map(([x,y])=>`${x},${y}`)),edges=[];
 for(const [x,y]of cells){const a=x*pitch,b=y*pitch;for(const [dx,dy,p,q]of [[0,-1,[a,b],[a+pitch,b]],[1,0,[a+pitch,b],[a+pitch,b+pitch]],[0,1,[a+pitch,b+pitch],[a,b+pitch]],[-1,0,[a,b+pitch],[a,b]]])if(!set.has(`${x+dx},${y+dy}`))edges.push([p,q])}
 const loops=[];while(edges.length){const [first,next]=edges.shift(),loop=[first];let at=next;while(at[0]!==first[0]||at[1]!==first[1]){loop.push(at);const k=edges.findIndex(e=>e[0][0]===at[0]&&e[0][1]===at[1]);if(k<0)throw Error('Open rock contour');at=edges.splice(k,1)[0][1]}loops.push(loop.filter((b,k)=>{const a=loop[(k+loop.length-1)%loop.length],c=loop[(k+1)%loop.length];return !((a[0]===b[0]&&b[0]===c[0])||(a[1]===b[1]&&b[1]===c[1]))}).map(([x,y])=>new THREE.Vector2(x,-y)))}
 return loops.sort((a,b)=>Math.abs(THREE.ShapeUtils.area(b))-Math.abs(THREE.ShapeUtils.area(a)));
}
function shape(points){
 const sign=THREE.ShapeUtils.area(points)>0?1:-1;
 const inset=points.map((p,k)=>{const a=points[(k+points.length-1)%points.length],b=points[(k+1)%points.length],u=p.clone().sub(a).normalize(),v=b.clone().sub(p).normalize(),n1=new THREE.Vector2(u.y,-u.x).multiplyScalar(sign),n2=new THREE.Vector2(v.y,-v.x).multiplyScalar(sign);return p.clone().add(n1.add(n2).multiplyScalar(sign>0?15:-15))});
 const s=new THREE.Shape();inset.forEach((p,k)=>{const a=inset[(k+inset.length-1)%inset.length],b=inset[(k+1)%inset.length],r=Math.min(12,p.distanceTo(a)*.4,p.distanceTo(b)*.4),u=p.clone().add(a.clone().sub(p).normalize().multiplyScalar(r)),v=p.clone().add(b.clone().sub(p).normalize().multiplyScalar(r));if(k)s.lineTo(u.x,u.y);else s.moveTo(u.x,u.y);s.quadraticCurveTo(p.x,p.y,v.x,v.y)});s.closePath();return s;
}
/** Prototype for one four-connected rock group, Z up. Grid corners at (col*80,-row*80).
 * One mesh, no internal cell borders. Study only, not yet the catalogue renderer. */
export function createRockGroup({cells,style='vein',pitch=80}={}){
 if(!cells?.length||new Set(cells.map(p=>p.join(','))).size!==cells.length||cells.some(p=>p.length!==2||p.some(v=>!Number.isInteger(v))))throw Error('Invalid rock cells');
 if(!['plain','vein','leaf'].includes(style))throw Error('Unknown group style');
 const remaining=new Set(cells.map(p=>p.join(','))),queue=[cells[0]];remaining.delete(cells[0].join(','));for(let k=0;k<queue.length;k++){const [x,y]=queue[k];for(const p of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]])if(remaining.delete(p.join(',')))queue.push(p)}if(remaining.size)throw Error('Rock cells must be four-connected');
 const loops=contours(cells,pitch),body=shape(loops[0]);for(const hole of loops.slice(1))body.holes.push(shape(hole));
 let geometry=new THREE.ExtrudeGeometry(body,{depth:17,bevelEnabled:true,bevelSize:8,bevelThickness:8,bevelSegments:8,curveSegments:16});
 const detailed=new TessellateModifier(5,10).modify(geometry);geometry.dispose();geometry=detailed;geometry.translate(0,0,1.5);
 const anchor=new THREE.Vector2(cells[0][0]*pitch+40,-cells[0][1]*pitch-40),pos=geometry.attributes.position;
 for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i),w=THREE.MathUtils.clamp((z-10)/16.5,0,1);let cut=0;if(style==='leaf')for(let k=0;k<4;k++){const a=.25+k*Math.PI/2,dx=x-anchor.x,dy=y-anchor.y,u=dx*Math.cos(a)+dy*Math.sin(a),v=-dx*Math.sin(a)+dy*Math.cos(a),r=((u-10)/8.5)**2+(v/4.7)**2;cut=Math.max(cut,THREE.MathUtils.clamp((1-r)*2,0,1)*2.4)}pos.setZ(i,z+w*(.7+Math.sin(x*.024+y*.017)*.4-cut))}
 geometry.deleteAttribute('normal');geometry.deleteAttribute('uv');const welded=mergeVertices(geometry,1e-4);geometry.dispose();geometry=welded;geometry.computeVertexNormals();
 const material=new THREE.MeshStandardMaterial({color:'#9e9688',roughness:.86});
 material.onBeforeCompile=shader=>{
 shader.vertexShader='varying vec3 rockP;varying float rockTop;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nrockP=position;rockTop=smoothstep(.25,.85,normal.z);');
 shader.fragmentShader='varying vec3 rockP;varying float rockTop;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float vein=exp(-pow((rockP.y+40.0+sin(rockP.x*.045)*7.0)/1.1,2.0));
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.72,.70,.65),vein*rockTop*${style==='vein'?'.6':'0.0'});
 ${style==='leaf'?`float carved=0.0;vec2 leafP=rockP.xy-vec2(${anchor.x.toFixed(1)},${anchor.y.toFixed(1)});for(int k=0;k<4;k++){float a=.25+float(k)*1.5707963;vec2 q=vec2(dot(leafP,vec2(cos(a),sin(a))),dot(leafP,vec2(-sin(a),cos(a))));float r=pow((q.x-10.0)/8.5,2.0)+pow(q.y/4.7,2.0);carved=max(carved,clamp((1.0-r)*2.0,0.0,1.0));}diffuseColor.rgb*=1.0-carved*.22*rockTop;`:''}
 float grain=fract(sin(dot(rockP.xy,vec2(127.1,311.7)))*43758.5453);diffuseColor.rgb*=.993+.014*grain;
 `);
 };material.customProgramCacheKey=()=>`fused-rock-${style}`;
 const group=new THREE.Group(),mesh=new THREE.Mesh(geometry,material);mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);group.userData={cells,style,walkable:false};return{group,dispose(){geometry.dispose();material.dispose()}};
}
