/** Synchronous grid-constrained pointer following. No animation queue or clock. */
export class DirectGridFollower{
 constructor(n=3){this.n=n;this.reset()}
 reset(){this.cell=4;this.x=1;this.y=1;this.travel=0;this.heading=0}
 move(x,y){x=Math.max(0,Math.min(this.n-1,x));y=Math.max(0,Math.min(this.n-1,y));const entered=[];let col=this.cell%this.n,row=Math.floor(this.cell/this.n);for(let i=0;i<this.n*2;i++){const dx=x-col,dy=y-row;if(Math.max(Math.abs(dx),Math.abs(dy))<=.5)break;if(Math.abs(dx)>=Math.abs(dy))col+=Math.sign(dx);else row+=Math.sign(dy);this.cell=row*this.n+col;entered.push(this.cell)}const dx=x-col,dy=y-row;let nx=col,ny=row;if(Math.abs(dx)>=Math.abs(dy))nx+=dx;else ny+=dy;const ax=nx-this.x,ay=ny-this.y,d=Math.hypot(ax,ay);if(d>1e-8)this.heading=Math.atan2(ax,ay);this.travel+=d*80;this.x=nx;this.y=ny;return {cell:this.cell,x:nx,y:ny,entered,travel:this.travel,heading:this.heading}}
}
