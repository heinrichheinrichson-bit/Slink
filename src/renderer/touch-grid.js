/** Grid-space hit testing. Only the actual side neighbour may be selected. */
export function resolveTouchCell(n,path,x,y,{threshold=5,tolerance=20}={}){
 const col=Math.floor((x-20)/80),row=Math.floor((-y-20)/80);
 if(col<0||row<0||col>=n||row>=n)return -1;
 const candidate=row*n+col,last=path.at(-1);if(last===undefined||candidate===last)return candidate;
 const dx=col-last%n,dy=row-Math.floor(last/n);if(Math.abs(dx)+Math.abs(dy)!==1)return -1;
 const cx=last%n*80+60,cy=-(Math.floor(last/n)*80+60),along=dx?(x-cx)*dx:-(y-cy)*dy,across=dx?Math.abs(y-cy):Math.abs(x-cx);
 return along>=40+80*threshold/100&&across<=Math.min(40,22+80*tolerance/100)?candidate:last;
}
