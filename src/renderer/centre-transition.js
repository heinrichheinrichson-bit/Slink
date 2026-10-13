/** Short visual transition, replaceable immediately; never queues input. */
export class CentreTransition{
 constructor(x=0,y=0){this.reset(x,y)}
 reset(x,y){this.x=x;this.y=y;this.toX=x;this.toY=y;this.start=0;this.duration=0;this.fromX=x;this.fromY=y;this.lastTarget=null}
 sample(now){const u=this.duration?Math.max(0,Math.min(1,(now-this.start)/this.duration)):1,s=u*u*(3-2*u);this.x=this.fromX+(this.toX-this.fromX)*s;this.y=this.fromY+(this.toY-this.fromY)*s;if(u===1){this.x=this.toX;this.y=this.toY}return {x:this.x,y:this.y,moving:u<1}}
 target(x,y,now){if(x===this.toX&&y===this.toY)return;const p=this.sample(now);this.fromX=p.x;this.fromY=p.y;this.toX=x;this.toY=y;this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,now-this.lastTarget));this.lastTarget=now;this.start=now}
}
