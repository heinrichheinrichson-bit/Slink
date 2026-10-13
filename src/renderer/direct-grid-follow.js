/** Only actual side-adjacent field entries; backtracking removes one tail step. */
export class DirectGridFollower{
 constructor(n=3){this.n=n;this.reset()}
 reset(){const c=Math.floor(this.n/2);this.cell=c*this.n+c;this.x=c;this.y=c;this.travel=0;this.heading=0;this.path=[this.cell]}
 move(x,y){const entered=[],removed=[];if(Number.isFinite(x)&&Number.isFinite(y)&&x>=-.5&&y>=-.5&&x<this.n-.5&&y<this.n-.5){const tx=Math.round(x),ty=Math.round(y),next=ty*this.n+tx,dx=tx-this.x,dy=ty-this.y;if(Math.abs(dx)+Math.abs(dy)===1){const at=this.path.indexOf(next);if(at<0||at===this.path.length-2){if(at<0)this.path.push(next);else removed.push(this.path.pop());this.x=tx;this.y=ty;this.cell=next;this.heading=Math.atan2(dx,dy);this.travel+=80;entered.push(next)}}}return {cell:this.cell,x:this.x,y:this.y,entered,removed,path:[...this.path],travel:this.travel,heading:this.heading}}
}
