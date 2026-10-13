/** Synchronous field-centred following. Heading changes only on a cell step. */
export class DirectGridFollower {
 constructor(n=3){this.n=n;this.reset()}
 reset(){const c=Math.floor(this.n/2);this.cell=c*this.n+c;this.x=c;this.y=c;this.travel=0;this.heading=0}
 move(x,y){
  const entered=[];
  if(Number.isFinite(x)&&Number.isFinite(y)){
   const tx=Math.round(Math.max(0,Math.min(this.n-1,x))),ty=Math.round(Math.max(0,Math.min(this.n-1,y)));
   let col=this.x,row=this.y;
   while(col!==tx||row!==ty){
    const dx=tx-col,dy=ty-row;let sx=0,sy=0;
    if(Math.abs(dx)>=Math.abs(dy))sx=Math.sign(dx);else sy=Math.sign(dy);
    col+=sx;row+=sy;this.heading=Math.atan2(sx,sy);this.travel+=80;
    this.cell=row*this.n+col;entered.push(this.cell);
   }
   this.x=col;this.y=row;
  }
  return {cell:this.cell,x:this.x,y:this.y,entered,travel:this.travel,heading:this.heading};
 }
}
