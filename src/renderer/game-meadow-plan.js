import {planMeadowStudy} from './meadow-distribution-study.js';
import {createMeadowTile,MEADOW_VARIANTS} from './meadow-variants.js';
import {createMeadowExtra} from './meadow-extra.js';
const cache=new WeakMap();
export function gardenMeadowPlan(level){if(cache.has(level))return cache.get(level);const cells=level.solution.filter(i=>!level.marks.includes(i)).sort((a,b)=>a-b);const seed=level.meadowSeed||[...(level.id||'garden')].reduce((s,c)=>(s*31+c.charCodeAt(0))>>>0,73);const plan=planMeadowStudy({n:level.n,seed,cells,flowerShare:40,clustering:75});for(const i of level.marks)plan[i]='calm';cache.set(level,plan);return plan;}
export function createGameMeadow(level,i){const id=gardenMeadowPlan(level)[i]||'classic',seed=(level.meadowSeed||73)+i*19,tile=MEADOW_VARIANTS[id]?createMeadowTile(id,{seed}):createMeadowExtra(id,{seed});if(['flowers','visitors'].includes(id)){const angle=(seed%4)*Math.PI/2;for(const part of tile.group.children)if(!part.userData.surface){const x=part.position.x,y=part.position.y;part.position.set(x*Math.cos(angle)-y*Math.sin(angle),x*Math.sin(angle)+y*Math.cos(angle),part.position.z);part.rotation.z+=angle}}return tile;}
