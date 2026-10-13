/** Local foot pose. During stance, +Y cancels the body's -Y travel. */
export function samplePawGait(progress,index,{distance=80,scale=1,cycles=8}={}){
 const duty=.66,phase=(progress*cycles+([0,3].includes(index)?.18:.68))%1;
 const span=distance/scale/cycles*duty,stance=phase<duty;
 let y,z=0,pitch=0;
 if(stance){y=-span/2+phase/duty*span;pitch=phase/duty>.82?(phase/duty-.82)*.5:0}
 else{const u=(phase-duty)/(1-duty),s=u*u*(3-2*u);y=span/2-span*s;z=Math.sin(u*Math.PI)**1.25*2.5;pitch=-Math.sin(u*Math.PI)*.28}
 const a=Math.min(1,progress/.08,(1-progress)/.08),fade=Math.max(0,a*a*(3-2*a));
 return {y:y*fade,z:z*fade,pitch:pitch*fade,stance,phase,fade};
}
