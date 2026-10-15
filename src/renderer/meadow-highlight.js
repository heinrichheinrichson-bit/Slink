import * as THREE from 'three';
const state=new WeakMap(),original=new WeakMap(),light=new THREE.Color('#edf4b1');
// Change existing meadow material only: no overlays, meshes, paths or extra shadows.
export function highlightMeadow(group,active,strength=.24){
 if(!group)return;const key=active?strength:0;if(state.get(group)===key)return;state.set(group,key);
 group.traverse(o=>{if(!o.isMesh)return;for(const m of [].concat(o.material||[])){
  if(!m.color)continue;if(!original.has(m))original.set(m,m.color.clone());
  m.color.copy(original.get(m));if(active)m.color.lerp(light,strength);
 }});
}
