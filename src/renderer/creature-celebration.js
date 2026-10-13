/** Short characterful joy gesture; age is seconds since centred arrival. */
export function sampleCelebration(age=-1){
 const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*x*(x*(x*6-15)+10)};
 const zero={active:false,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0};if(age<0||age>3.7)return zero;
 const hop=(start,duration,height)=>{const u=(age-start)/duration;return u>0&&u<1?Math.sin(Math.PI*u)**2*height:0};
 const lift=hop(.38,.56,2.8)+hop(1.02,.88,6.2),happy=smooth((age-.12)/.22)*(1-smooth((age-3.05)/.55));
 const pulse=(start,duration)=>{const u=(age-start)/duration;return u>0&&u<1?Math.sin(u*Math.PI)**2:0};
 const settle=age>1.9?Math.sin((age-1.9)*10)*Math.exp(-(age-1.9)*3.5):0;
 const anticipation=pulse(.12,.4),secondLoad=pulse(.82,.32),landing=pulse(.84,.3)+pulse(1.8,.4);
 return {active:true,lift,tuck:Math.min(1,lift/3.5)*1.7,happy,look:smooth(age/1.05),squash:anticipation*.055+secondLoad*.035+landing*.065,pollen:smooth((age-1.9)/.3)*(1-smooth((age-2.9)/.7)),antenna:settle*.65+lift*.045,pitch:anticipation*.035-lift*.007-settle*.013,roll:lift*.005*Math.sin(age*3+.6)+settle*.012};
}
