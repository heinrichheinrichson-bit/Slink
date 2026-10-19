import {CentreTransition} from './centre-transition.js';
import {sampleCelebration} from './creature-celebration.js';
/** Consumes accepted game paths only; does not decide or alter puzzle rules. */
export class GameCreatureMotion{
 constructor(){this.transition=new CentreTransition();this.level=null;this.path=[];this.heading=0;this.joyStarted=-1;this.joyFacing=0;this.complete=false;this.travel=0;this.lastTime=null;this.lastPoint=null;}
 sync(level,path,now){
  const xy=i=>[i%level.n*80+60,-(Math.floor(i/level.n)*80+60)];
  const changedLevel=this.level!==level,reset=changedLevel||!path.length;
  if(reset){const [x,y]=xy(level.marks[0]);this.transition.reset(x,y);this.path=[];this.heading=0;this.joyStarted=-1;this.complete=false;this.travel=0;this.lastPoint=[x,y];this.lastTime=now;this.level=level;}
  let shared=0;while(shared<this.path.length&&shared<path.length&&this.path[shared]===path[shared])shared++;
  const changed=shared!==this.path.length||shared!==path.length;
  if(changed){
   let previous=this.path.at(-1);
   const route=this.path.length?[...this.path.slice(Math.max(0,shared-1),-1).reverse(),...path.slice(shared)]:[...path];
   for(const cell of route){
    const [x,y]=xy(cell);
    if(previous===undefined)this.transition.reset(x,y);
    else{const [a,b]=xy(previous);this.heading=Math.atan2(x-a,-(y-b));this.transition.target(x,y,now);}
    previous=cell;
   }
   this.joyStarted=-1;
  }
  this.path=[...path];this.complete=path.length===level.solution.length;
 }
 sample(now){
  const p=this.transition.sample(now),dt=this.lastTime===null?0:Math.max(0,Math.min(.1,now-this.lastTime));
  if(this.lastPoint)this.travel+=Math.min(Math.hypot(p.x-this.lastPoint[0],p.y-this.lastPoint[1]),dt*36);
  this.lastPoint=[p.x,p.y];this.lastTime=now;
  if(this.complete&&!p.moving&&this.joyStarted<0){this.joyStarted=now;this.joyFacing=this.heading;}
  const age=this.joyStarted<0?-1:now-this.joyStarted,joy=sampleCelebration(age,'gentle'),turn=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));
  return {...p,heading:this.joyStarted<0?this.heading:joy.active?this.joyFacing+turn*joy.look:0,celebrationAge:age,celebrationTurn:turn,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]};
 }
}
