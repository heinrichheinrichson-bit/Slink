const FLOWERS=['daisy','buttercup','meadow','poppy'];
const SINGLE_STONES=['plain','pebble','plain','strata','plain','dimples','fossil','split','rosette','reference'];
const hash=text=>{let h=2166136261;for(const c of String(text)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
export function stoneComponents(cells,n){const left=new Set(cells),result=[];while(left.size){const q=[Math.min(...left)];left.delete(q[0]);for(let k=0;k<q.length;k++){const i=q[k];for(const j of [i-n,i+n,i%n?i-1:-1,i%n<n-1?i+1:-1])if(left.delete(j))q.push(j)}result.push(q.sort((a,b)=>a-b))}return result}
/** Decoration only: never changes IDs, geometry, walkability, goals or solutions. */
export function createGardenDecorationPlan(level){
 const seed=hash(level.id||JSON.stringify([level.n,level.solution,level.marks])),primary=FLOWERS[seed%4],flowers=level.marks.map(()=>primary),stones={};
 if(flowers.length>=4&&seed%3===0)flowers[flowers.length-2]=FLOWERS[(seed%4+1)%4];
 for(const part of stoneComponents(level.stones||[],level.n)){
  const key=hash(seed+':'+part.join(','));
  if(part.length===1){stones[part[0]]=SINGLE_STONES[key%SINGLE_STONES.length];continue}
  // One coherent Findling family per touching group, with at most one accent.
  for(const cell of part)stones[cell]='plain';
  if(key%4!==0){const accent=['pebble','strata','dimples','rosette'][key%4];stones[part[key%part.length]]=accent}
 }
 return{seed,flowers,stones};
}
