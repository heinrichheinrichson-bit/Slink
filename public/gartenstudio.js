(()=>{var eh=0,dc=1,th=2;var fc=1,ma=2,vn=3,In=0,Dt=1,$t=2,Un=0,ui=1,pc=2,mc=3,gc=4,nh=5,Zn=100,ih=101,sh=102,rh=103,ah=104,oh=200,ch=201,lh=202,hh=203,Hr=204,Vr=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=211,_h=212,xh=213,vh=214,ga=0,_a=1,xa=2,di=3,va=4,ya=5,Ma=6,Sa=7,_c=0,yh=1,Mh=2,Nn=0,Sh=1,bh=2,Eh=3,ba=4,wh=5,Th=6,Ah=7;var xc=300,Si=301,bi=302,Ea=303,wa=304,sr=306,Ji=1e3,Yn=1001,Gr=1002,Ft=1003,Rh=1004;var rr=1005;var Et=1006,Ta=1007;var Qn=1008;var un=1009,vc=1010,yc=1011,as=1012,Aa=1013,ei=1014,yn=1015,os=1016,Ra=1017,Ca=1018,cs=1020,Mc=35902,Sc=35899,bc=1021,Ec=1022,Kt=1023,$i=1026,ls=1027,wc=1028,Ia=1029,Tc=1030,Pa=1031;var La=1033,ar=33776,or=33777,cr=33778,lr=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,Ja=37817,$a=37818,Ka=37819,ja=37820,Qa=37821,eo=36492,to=36494,no=36495,io=36283,so=36284,ro=36285,ao=36286;var Ls=2300,Wr=2301,kr=2302,tc=2400,nc=2401,ic=2402;var Ch=3200,Ih=3201;var Ac=0,Ph=1,Fn="",bt="srgb",fi="srgb-linear",Ds="linear",st="srgb";var hi=7680;var sc=519,Lh=512,Dh=513,Uh=514,Rc=515,Nh=516,Fh=517,Oh=518,Bh=519,rc=35044;var Cc="300 es",sn=2e3,Us=2001;var Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=1234567,Rs=Math.PI/180,Ki=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Ic(i,e){return(i%e+e)%e}function ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dd(i,e,t){return i!==e?(t-i)/(e-i):0}function Cs(i,e,t){return(1-t)*i+t*e}function fd(i,e,t,n){return Cs(i,e,1-Math.exp(-t*n))}function pd(i,e=1){return e-Math.abs(Ic(i,e*2)-e)}function md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xd(i,e){return i+Math.random()*(e-i)}function vd(i){return i*(.5-Math.random())}function yd(i){i!==void 0&&(Tl=i);let e=Tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Md(i){return i*Rs}function Sd(i){return i*Ki}function bd(i){return(i&i-1)===0&&i!==0}function Ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Td(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt={DEG2RAD:Rs,RAD2DEG:Ki,generateUUID:Ei,clamp:je,euclideanModulo:Ic,mapLinear:ud,inverseLerp:dd,lerp:Cs,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:vd,seededRandom:yd,degToRad:Md,radToDeg:Sd,isPowerOfTwo:bd,ceilPowerOfTwo:Ed,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Td,normalize:Pt,denormalize:Yi},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==p||c!==d||h!==g){let m=1-o,f=l*p+c*d+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let C=Math.sqrt(y),b=Math.atan2(C,f*E);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}let x=o*E;if(l=l*m+p*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*p,e[t+1]=l*g+h*p+c*u-o*d,e[t+2]=c*g+h*d+o*p-l*u,e[t+3]=h*g-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new P,Al=new Ln,Je=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],y=s[4],x=s[7],C=s[2],b=s[5],T=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*m+o*y+l*b,r[6]=a*f+o*x+l*T,r[1]=c*_+h*E+u*C,r[4]=c*m+h*y+u*b,r[7]=c*f+h*x+u*T,r[2]=p*_+d*E+g*C,r[5]=p*m+d*y+g*b,r[8]=p*f+d*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,d=c*r-a*l,g=t*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Io=new Je;function Pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zh(){let i=Ns("canvas");return i.style.display="block",i}var Rl={};function ji(i){i in Rl||(Rl[i]=!0,console.warn(i))}function kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){let i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var et=Ad();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,Xr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Ns("canvas")),Ni.width=e.width,Ni.height=e.height;let s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rd=0,Qi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cd=0,Lo=new P,Lt=class i extends Pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Et,a=Qn,o=Kt,l=un,c=i.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ei(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=xc;Lt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(d+1)/2,C=(f+1)/2,b=(h+p)/4,T=(u+_)/4,I=(g+m)/4;return y>x&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=T/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(p-h)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qr=class extends Pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yr=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),xr.subVectors(this.max,Ss),Fi.subVectors(e.a,Ss),Oi.subVectors(e.b,Ss),Bi.subVectors(e.c,Ss),kn.subVectors(Oi,Fi),Hn.subVectors(Bi,Oi),ai.subVectors(Fi,Bi);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!Do(t,Fi,Oi,Bi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Fi,Oi,Bi,xr))?!1:(vr.crossVectors(kn,Hn),t=[vr.x,vr.y,vr.z],Do(t,Fi,Oi,Bi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new P,new P,new P,new P,new P,new P,new P,new P],en=new P,_r=new Jt,Fi=new P,Oi=new P,Bi=new P,kn=new P,Hn=new P,ai=new P,Ss=new P,xr=new P,vr=new P,oi=new P;function Do(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Id=new Jt,bs=new P,Uo=new P,pi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Id.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Uo)),this.expandByPoint(bs.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wn=new P,No=new P,yr=new P,Vn=new P,Fo=new P,Mr=new P,Oo=new P,Os=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){No.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(No);let r=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Vn.dot(this.direction),l=-Vn.dot(yr),c=Vn.lengthSq(),h=Math.abs(1-a*a),u,p,d,g;if(h>0)if(u=a*l-o,p=a*o-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(No).addScaledVector(yr,p),d}intersectSphere(e,t){wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){Fo.subVectors(t,e),Mr.subVectors(n,e),Oo.crossVectors(Fo,Mr);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);let l=o*this.direction.dot(Mr.crossVectors(Vn,Mr));if(l<0)return null;let c=o*this.direction.dot(Fo.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(Oo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,p,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,p,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,p,d,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){let p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Ld)}lookAt(e,t,n){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gn.crossVectors(n,zt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gn.crossVectors(n,zt)),Gn.normalize(),Sr.crossVectors(zt,Gn),s[0]=Gn.x,s[4]=Sr.x,s[8]=zt.x,s[1]=Gn.y,s[5]=Sr.y,s[9]=zt.y,s[2]=Gn.z,s[6]=Sr.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],y=n[7],x=n[11],C=n[15],b=s[0],T=s[4],I=s[8],S=s[12],M=s[1],L=s[5],D=s[9],F=s[13],V=s[2],k=s[6],W=s[10],re=s[14],q=s[3],ee=s[7],Z=s[11],oe=s[15];return r[0]=a*b+o*M+l*V+c*q,r[4]=a*T+o*L+l*k+c*ee,r[8]=a*I+o*D+l*W+c*Z,r[12]=a*S+o*F+l*re+c*oe,r[1]=h*b+u*M+p*V+d*q,r[5]=h*T+u*L+p*k+d*ee,r[9]=h*I+u*D+p*W+d*Z,r[13]=h*S+u*F+p*re+d*oe,r[2]=g*b+_*M+m*V+f*q,r[6]=g*T+_*L+m*k+f*ee,r[10]=g*I+_*D+m*W+f*Z,r[14]=g*S+_*F+m*re+f*oe,r[3]=E*b+y*M+x*V+C*q,r[7]=E*T+y*L+x*k+C*ee,r[11]=E*I+y*D+x*W+C*Z,r[15]=E*S+y*F+x*re+C*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*d-n*l*d)+_*(+t*l*d-t*c*p+r*a*p-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*c-_*p*c+_*l*d-o*m*d-u*l*f+o*p*f,y=g*p*c-h*m*c-g*l*d+a*m*d+h*l*f-a*p*f,x=h*_*c-g*u*c+g*o*d-a*_*d-h*o*f+a*u*f,C=g*u*l-h*_*l-g*o*p+a*_*p+h*o*m-a*u*m,b=t*E+n*y+s*x+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=E*T,e[1]=(_*p*r-u*m*r-_*s*d+n*m*d+u*s*f-n*p*f)*T,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*T,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*d-n*l*d)*T,e[4]=y*T,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*f+t*p*f)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*T,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*d+t*l*d)*T,e[8]=x*T,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*f-t*u*f)*T,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*T,e[12]=C*T,e[13]=(h*_*s-g*u*s+g*n*p-t*_*p-h*n*m+t*u*m)*T,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*p+t*o*p)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,d=r*h,g=r*u,_=a*h,m=a*u,f=o*u,E=l*c,y=l*h,x=l*u,C=n.x,b=n.y,T=n.z;return s[0]=(1-(_+f))*C,s[1]=(d+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(p+f))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(g+y)*T,s[9]=(m-E)*T,s[10]=(1-(p+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);let c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===sn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Us)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),d=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===sn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Us)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new P,tn=new pt,Pd=new P(0,0,0),Ld=new P(1,1,1),Gn=new P,Sr=new P,zt=new P,Pl=new pt,Ll=new Ln,an=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dd=0,Dl=new P,ki=new Ln,Tn=new pt,br=new P,Es=new P,Ud=new P,Nd=new Ln,Ul=new P(1,0,0),Nl=new P(0,1,0),Fl=new P(0,0,1),Ol={type:"added"},Fd={type:"removed"},Hi={type:"childadded",child:null},Bo={type:"childremoved",child:null},wt=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new an,n=new Ln,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Je}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Es,br,this.up):Tn.lookAt(br,Es,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new P,An=new P,zo=new P,Rn=new P,Vi=new P,Gi=new P,Bl=new P,ko=new P,Ho=new P,Vo=new P,Go=new ht,Wo=new ht,Xo=new ht,qn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),An.subVectors(n,t),zo.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(An),l=nn.dot(zo),c=An.dot(An),h=An.dot(zo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),An.subVectors(e,t),nn.cross(An).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),nn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),ko.subVectors(e,n);let l=Vi.dot(ko),c=Gi.dot(ko);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,s);let h=Vi.dot(Ho),u=Gi.dot(Ho);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vi,a);Vo.subVectors(e,r);let d=Vi.dot(Vo),g=Gi.dot(Vo);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Bl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Bl,o);let f=1/(m+_+p);return a=_*f,o=p*f,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Ic(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qo(a,r,e+1/3),this.g=qo(a,r,e),this.b=qo(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return et.workingToColorSpace(At.copy(this),e),Math.round(je(At.r*255,0,255))*65536+Math.round(je(At.g*255,0,255))*256+Math.round(je(At.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(At.copy(this),t);let n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=bt){et.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,s=At.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Er);let n=Cs(Wn.h,Er.h,t),s=Cs(Wn.s,Er.s,t),r=Cs(Wn.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new ze;ze.NAMES=Hh;var Od=0,Dn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ui,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Vr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mi=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new P,wr=new he,Bd=0,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}};var zs=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ks=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},zd=0,Zt=new pt,Yo=new wt,Wi=new P,kt=new Jt,ws=new Jt,St=new P,_t=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?ks:zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(kt.min,ws.min),kt.expandByPoint(St),St.addVectors(kt.max,ws.max),kt.expandByPoint(St)):(kt.expandByPoint(ws.min),kt.expandByPoint(ws.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),St.add(Wi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,p=new he,d=new he,g=new he,_=new P,m=new P;function f(I,S,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),p.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(p),g.sub(p);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[I].add(_),o[S].add(_),o[M].add(_),l[I].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,S=E.length;I<S;++I){let M=E[I],L=M.start,D=M.count;for(let F=L,V=L+D;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new P,x=new P,C=new P,b=new P;function T(I){C.fromBufferAttribute(s,I),b.copy(C);let S=o[I];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(b,S);let L=x.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,S=E.length;I<S;++I){let M=E[I],L=M.start,D=M.count;for(let F=L,V=L+D;F<V;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new vt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zl=new pt,ci=new Os,Tr=new pi,kl=new P,Ar=new P,Rr=new P,Cr=new P,Zo=new P,Ir=new P,Hl=new P,Pr=new P,Be=class extends wt{constructor(e=new _t,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Zo.fromBufferAttribute(u,e),a?Ir.addScaledVector(Zo,h):Ir.addScaledVector(Zo.sub(t),h))}t.add(Ir)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(Tr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Tr,kl)===null||ci.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(zl.copy(r).invert(),ci.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=y;x<C;x+=3){let b=o.getX(x),T=o.getX(x+1),I=o.getX(x+2);s=Lr(this,f,e,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){let E=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Lr(this,a,e,n,c,h,u,E,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,C=y;x<C;x+=3){let b=x,T=x+1,I=x+2;s=Lr(this,f,e,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){let E=m,y=m+1,x=m+2;s=Lr(this,a,e,n,c,h,u,E,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function kd(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===In,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);let h=kd(i,e,t,n,Ar,Rr,Cr,Hl);if(h){let u=new P;qn.getBarycoord(Hl,Ar,Rr,Cr,u),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};qn.getNormal(Ar,Rr,Cr,p.normal),h.face=p,h.barycoord=u}return h}var Jn=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,f,E,y,x,C,b,T,I,S){let M=x/T,L=C/I,D=x/2,F=C/2,V=b/2,k=T+1,W=I+1,re=0,q=0,ee=new P;for(let Z=0;Z<W;Z++){let oe=Z*L-F;for(let ge=0;ge<k;ge++){let Pe=ge*M-D;ee[_]=Pe*E,ee[m]=oe*y,ee[f]=V,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ge/T),u.push(1-Z/I),re+=1}}for(let Z=0;Z<I;Z++)for(let oe=0;oe<T;oe++){let ge=p+oe+k*Z,Pe=p+oe+k*(Z+1),Ee=p+(oe+1)+k*(Z+1),Ie=p+(oe+1)+k*Z;l.push(ge,Pe,Ie),l.push(Pe,Ee,Ie),q+=6}o.addGroup(d,q,S),d+=q,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=wi(i[t]);for(let s in n)e[s]=n[s]}return e}function Hd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Vh={clone:wi,merge:Ct},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hs=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new P,Vl=new he,Gl=new he,Nt=class extends Hs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Gl),t.subVectors(Gl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=-90,qi=1,Zr=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Xi,qi,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Xi,qi,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Xi,qi,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Xi,qi,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Xi,qi,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vs=class extends Lt{constructor(e=[],t=Si,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jr=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jn(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Un});r.uniforms.tEquirect.value=t;let a=new Be(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Et),new Zr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ze=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wd={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var gi=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var _n=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,h=Ft,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=new P,Xd=new P,qd=new Je,mn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Jo.subVectors(n,t).cross(Xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qd.getNormalMatrix(e),s=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new pi,Yd=new he(.5,.5),Dr=new P,ts=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],y=r[13],x=r[14],C=r[15];if(s[0].setComponents(c-a,d-h,f-g,C-E).normalize(),s[1].setComponents(c+a,d+h,f+g,C+E).normalize(),s[2].setComponents(c+o,d+u,f+_,C+y).normalize(),s[3].setComponents(c-o,d-u,f-_,C-y).normalize(),n)s[4].setComponents(l,p,m,x).normalize(),s[5].setComponents(c-l,d-p,f-m,C-x).normalize();else if(s[4].setComponents(c-l,d-p,f-m,C-x).normalize(),t===sn)s[5].setComponents(c+l,d+p,f+m,C+x).normalize();else if(t===Us)s[5].setComponents(l,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=Yd.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$r=new P,Kr=new P,Wl=new pt,Ts=new Os,Ur=new pi,$o=new P,Xl=new P,jr=class extends wt{constructor(e=new _t,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$r.fromBufferAttribute(t,s-1),Kr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$r.distanceTo(Kr);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;Wl.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(Wl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let f=h.getX(_),E=h.getX(_+1),y=Nr(this,e,Ts,l,f,E,_);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),f=Nr(this,e,Ts,l,_,m,g-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let f=Nr(this,e,Ts,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Nr(this,e,Ts,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($r.fromBufferAttribute(o,s),Kr.fromBufferAttribute(o,r),t.distanceSqToSegment($r,Kr,$o,Xl)>n)return;$o.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($o);if(!(c<e.near||c>e.far))return{distance:c,point:Xl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ql=new P,Yl=new P,Gs=class extends jr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ql.fromBufferAttribute(t,s),Yl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ql.distanceTo(Yl);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _i=class extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ws=class extends Lt{constructor(e,t,n=ei,s,r,a,o=Ft,l=Ft,c,h=$i,u=1){if(h!==$i&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xs=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var qs=class i extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],g=0,_=[],m=n/2,f=0;E(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function E(){let x=new P,C=new P,b=0,T=(t-e)/n;for(let I=0;I<=r;I++){let S=[],M=I/r,L=M*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,V=F*l+o,k=Math.sin(V),W=Math.cos(V);C.x=L*k,C.y=-M*n+m,C.z=L*W,u.push(C.x,C.y,C.z),x.set(k,T,W).normalize(),p.push(x.x,x.y,x.z),d.push(F,1-M),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let M=_[S][I],L=_[S+1][I],D=_[S+1][I+1],F=_[S][I+1];(e>0||S!==0)&&(h.push(M,L,F),b+=3),(t>0||S!==r-1)&&(h.push(L,D,F),b+=3)}c.addGroup(f,b,0),f+=b}function y(x){let C=g,b=new he,T=new P,I=0,S=x===!0?e:t,M=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let V=D/s*l+o,k=Math.cos(V),W=Math.sin(V);T.x=S*W,T.y=m*M,T.z=S*k,u.push(T.x,T.y,T.z),p.push(0,M,0),b.x=k*.5+.5,b.y=W*.5*M+.5,d.push(b.x,b.y),g++}for(let D=0;D<s;D++){let F=C+D,V=L+D;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),I+=3}c.addGroup(f,I,x===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ht=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,d=(a-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new pt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(je(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends Ht{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qr=class extends is{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Fr=new P,Ko=new Dc,jo=new Dc,Qo=new Dc,ln=class extends Ht{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ko.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,_,m),jo.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,_,m),Qo.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),jo.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Qo.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Ko.calc(l),jo.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Zd(i,e){let t=1-i;return t*t*e}function Jd(i,e){return 2*(1-i)*i*e}function $d(i,e){return i*i*e}function Is(i,e,t,n){return Zd(i,e)+Jd(i,t)+$d(i,n)}function Kd(i,e){let t=1-i;return t*t*t*e}function jd(i,e){let t=1-i;return 3*t*t*i*e}function Qd(i,e){return 3*(1-i)*i*i*e}function ef(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return Kd(i,e)+jd(i,t)+Qd(i,n)+ef(i,s)}var Ys=class extends Ht{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ss=class extends Ht{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y),Ps(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zs=class extends Ht{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Ht{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Ht{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends Ht{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y),Is(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ks=class extends Ht{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Zl(o,l.x,c.x,h.x,u.x),Zl(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},ta=Object.freeze({__proto__:null,ArcCurve:Qr,CatmullRomCurve3:ln,CubicBezierCurve:Ys,CubicBezierCurve3:ss,EllipseCurve:is,LineCurve:Zs,LineCurve3:ea,QuadraticBezierCurve:Js,QuadraticBezierCurve3:$s,SplineCurve:Ks}),na=class extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ta[s.type]().fromJSON(s))}return this}},js=class extends na{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zs(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Js(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ys(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ks(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new is(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vt=class extends js{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}};function tf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=of(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){let d=i[p],g=i[p+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qs(r,a,t,o,l,c,0),a}function Gh(i,e,t,n,s){let r;if(s===xf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jl(a/n|0,i[a],i[a+1],r);return r&&rs(r,r.next)&&(tr(r),r=r.next),r}function xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rs(t,t.next)||ft(t.prev,t,t.next)===0)){if(tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&df(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sf(i,n,s,r):nf(i)){e.push(l.i,i.i,c.i),tr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rf(xi(i),e),Qs(i,e,t,n,s,r,2)):a===2&&af(i,e,t,n,s,r):Qs(xi(i),e,t,n,s,r,1);break}}}function nf(i){let e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),p=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&As(s,o,r,l,a,c,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,d=Math.min(o,l,c),g=Math.min(h,u,p),_=Math.max(o,l,c),m=Math.max(h,u,p),f=ac(d,g,e,t,n),E=ac(_,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=f&&x&&x.z<=E;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,u,c,p,y.x,y.y)&&ft(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&As(o,h,l,u,c,p,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,u,c,p,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&As(o,h,l,u,c,p,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!rs(n,s)&&Xh(n,t,t.next,s)&&er(n,s)&&er(s,n)&&(e.push(n.i,t.i,s.i),tr(t),tr(t.next),t=i=s),t=t.next}while(t!==i);return xi(t)}function af(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mf(a,o)){let l=qh(a,o);a=xi(a,a.next),l=xi(l,l.next),Qs(a,e,t,n,s,r,0),Qs(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function of(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Gh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pf(c))}s.sort(cf);for(let r=0;r<s.length;r++)t=lf(s[r],t);return t}function cf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function lf(i,e){let t=hf(i,e);if(!t)return e;let n=qh(t,i);return xi(n,n.next),xi(t,t.next)}function hf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(rs(i,t))return t;do{if(rs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);er(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&uf(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function uf(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function df(i,e,t,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ff(s)}function ff(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function As(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Wh(i,e,t,n,s,r,a,o)}function mf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gf(i,e)&&(er(i,e)&&er(e,i)&&_f(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||rs(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rs(i,e){return i.x===e.x&&i.y===e.y}function Xh(i,e,t,n){let s=Br(ft(i,e,t)),r=Br(ft(i,e,n)),a=Br(ft(t,n,i)),o=Br(ft(t,n,e));return!!(s!==r&&a!==o||s===0&&Or(i,t,e)||r===0&&Or(i,n,e)||a===0&&Or(t,i,n)||o===0&&Or(t,e,n))}function Or(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Br(i){return i>0?1:i<0?-1:0}function gf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function er(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function _f(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qh(i,e){let t=oc(i.i,i.x,i.y),n=oc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jl(i,e,t,n){let s=oc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cc=class{static triangulate(e,t,n=2){return tf(e,t,n)}},rn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];$l(e),Kl(n,e);let a=e.length;t.forEach($l);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Kl(n,t[l]);let o=cc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $l(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rt=class i extends _t{constructor(e=new Vt([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:vf,y,x=!1,C,b,T,I;f&&(y=f.getSpacedPoints(h),x=!0,p=!1,C=f.computeFrenetFrames(h,!1),b=new P,T=new P,I=new P),p||(m=0,d=0,g=0,_=0);let S=o.extractPoints(c),M=S.shape,L=S.holes;if(!rn.isClockWise(M)){M=M.reverse();for(let O=0,B=L.length;O<B;O++){let X=L[O];rn.isClockWise(X)&&(L[O]=X.reverse())}}function F(O){let X=10000000000000001e-36,G=O[0];for(let j=1;j<=O.length;j++){let J=j%O.length,ne=O[J],Ne=ne.x-G.x,Se=ne.y-G.y,R=Ne*Ne+Se*Se,v=Math.max(Math.abs(ne.x),Math.abs(ne.y),Math.abs(G.x),Math.abs(G.y)),U=X*v*v;if(R<=U){O.splice(J,1),j--;continue}G=ne}}F(M),L.forEach(F);let V=L.length,k=M;for(let O=0;O<V;O++){let B=L[O];M=M.concat(B)}function W(O,B,X){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(B,X)}let re=M.length;function q(O,B,X){let G,j,J,ne=O.x-B.x,Ne=O.y-B.y,Se=X.x-O.x,R=X.y-O.y,v=ne*ne+Ne*Ne,U=ne*R-Ne*Se;if(Math.abs(U)>Number.EPSILON){let Y=Math.sqrt(v),se=Math.sqrt(Se*Se+R*R),$=B.x-Ne/Y,Ae=B.y+ne/Y,de=X.x-R/se,Ce=X.y+Se/se,we=((de-$)*R-(Ce-Ae)*Se)/(ne*R-Ne*Se);G=$+ne*we-O.x,j=Ae+Ne*we-O.y;let le=G*G+j*j;if(le<=2)return new he(G,j);J=Math.sqrt(le/2)}else{let Y=!1;ne>Number.EPSILON?Se>Number.EPSILON&&(Y=!0):ne<-Number.EPSILON?Se<-Number.EPSILON&&(Y=!0):Math.sign(Ne)===Math.sign(R)&&(Y=!0),Y?(G=-Ne,j=ne,J=Math.sqrt(v)):(G=ne,j=Ne,J=Math.sqrt(v/2))}return new he(G/J,j/J)}let ee=[];for(let O=0,B=k.length,X=B-1,G=O+1;O<B;O++,X++,G++)X===B&&(X=0),G===B&&(G=0),ee[O]=q(k[O],k[X],k[G]);let Z=[],oe,ge=ee.concat();for(let O=0,B=V;O<B;O++){let X=L[O];oe=[];for(let G=0,j=X.length,J=j-1,ne=G+1;G<j;G++,J++,ne++)J===j&&(J=0),ne===j&&(ne=0),oe[G]=q(X[G],X[J],X[ne]);Z.push(oe),ge=ge.concat(oe)}let Pe;if(m===0)Pe=rn.triangulateShape(k,L);else{let O=[],B=[];for(let X=0;X<m;X++){let G=X/m,j=d*Math.cos(G*Math.PI/2),J=g*Math.sin(G*Math.PI/2)+_;for(let ne=0,Ne=k.length;ne<Ne;ne++){let Se=W(k[ne],ee[ne],J);Re(Se.x,Se.y,-j),G===0&&O.push(Se)}for(let ne=0,Ne=V;ne<Ne;ne++){let Se=L[ne];oe=Z[ne];let R=[];for(let v=0,U=Se.length;v<U;v++){let Y=W(Se[v],oe[v],J);Re(Y.x,Y.y,-j),G===0&&R.push(Y)}G===0&&B.push(R)}}Pe=rn.triangulateShape(O,B)}let Ee=Pe.length,Ie=g+_;for(let O=0;O<re;O++){let B=p?W(M[O],ge[O],Ie):M[O];x?(T.copy(C.normals[0]).multiplyScalar(B.x),b.copy(C.binormals[0]).multiplyScalar(B.y),I.copy(y[0]).add(T).add(b),Re(I.x,I.y,I.z)):Re(B.x,B.y,0)}for(let O=1;O<=h;O++)for(let B=0;B<re;B++){let X=p?W(M[B],ge[B],Ie):M[B];x?(T.copy(C.normals[O]).multiplyScalar(X.x),b.copy(C.binormals[O]).multiplyScalar(X.y),I.copy(y[O]).add(T).add(b),Re(I.x,I.y,I.z)):Re(X.x,X.y,u/h*O)}for(let O=m-1;O>=0;O--){let B=O/m,X=d*Math.cos(B*Math.PI/2),G=g*Math.sin(B*Math.PI/2)+_;for(let j=0,J=k.length;j<J;j++){let ne=W(k[j],ee[j],G);Re(ne.x,ne.y,u+X)}for(let j=0,J=L.length;j<J;j++){let ne=L[j];oe=Z[j];for(let Ne=0,Se=ne.length;Ne<Se;Ne++){let R=W(ne[Ne],oe[Ne],G);x?Re(R.x,R.y+y[h-1].y,y[h-1].x+X):Re(R.x,R.y,u+X)}}}te(),ie();function te(){let O=s.length/3;if(p){let B=0,X=re*B;for(let G=0;G<Ee;G++){let j=Pe[G];_e(j[2]+X,j[1]+X,j[0]+X)}B=h+m*2,X=re*B;for(let G=0;G<Ee;G++){let j=Pe[G];_e(j[0]+X,j[1]+X,j[2]+X)}}else{for(let B=0;B<Ee;B++){let X=Pe[B];_e(X[2],X[1],X[0])}for(let B=0;B<Ee;B++){let X=Pe[B];_e(X[0]+re*h,X[1]+re*h,X[2]+re*h)}}n.addGroup(O,s.length/3-O,0)}function ie(){let O=s.length/3,B=0;me(k,B),B+=k.length;for(let X=0,G=L.length;X<G;X++){let j=L[X];me(j,B),B+=j.length}n.addGroup(O,s.length/3-O,1)}function me(O,B){let X=O.length;for(;--X>=0;){let G=X,j=X-1;j<0&&(j=O.length-1);for(let J=0,ne=h+m*2;J<ne;J++){let Ne=re*J,Se=re*(J+1),R=B+G+Ne,v=B+j+Ne,U=B+j+Se,Y=B+G+Se;Ve(R,v,U,Y)}}}function Re(O,B,X){l.push(O),l.push(B),l.push(X)}function _e(O,B,X){ae(O),ae(B),ae(X);let G=s.length/3,j=E.generateTopUV(n,s,G-3,G-2,G-1);A(j[0]),A(j[1]),A(j[2])}function Ve(O,B,X,G){ae(O),ae(B),ae(G),ae(B),ae(X),ae(G);let j=s.length/3,J=E.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);A(J[0]),A(J[1]),A(J[3]),A(J[1]),A(J[2]),A(J[3])}function ae(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function A(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ta[s.type]().fromJSON(s)),new i(n,e.options)}},vf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(p,1-g),new he(_,1-f)]:[new he(o,1-l),new he(h,1-u),new he(d,1-g),new he(m,1-f)]}};function yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vi=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*p-a;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let y=E+c*f,x=E+c*(f+1),C=E+1+c*(f+1),b=E+1+c*f;d.push(y,x,b),d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mt=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,p=new P,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let E=[],y=f/n,x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let b=C/t;u.x=-e*Math.cos(s+b*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+b*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(b+x,1-y),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){let y=h[f][E+1],x=h[f][E],C=h[f+1][E],b=h[f+1][E+1];(f!==0||a>0)&&d.push(y,x,b),(f!==n-1||l<Math.PI)&&d.push(x,C,b)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hn=class i extends _t{constructor(e=new $s(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new he,h=new P,u=[],p=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),E(),f()}function m(y){h=e.getPointAt(y/t,h);let x=a.normals[y],C=a.binormals[y];for(let b=0;b<=s;b++){let T=b/s*Math.PI*2,I=Math.sin(T),S=-Math.cos(T);l.x=S*x.x+I*C.x,l.y=S*x.y+I*C.y,l.z=S*x.z+I*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){let C=(s+1)*(y-1)+(x-1),b=(s+1)*y+(x-1),T=(s+1)*y+x,I=(s+1)*(y-1)+x;g.push(C,b,I),g.push(b,T,I)}}function E(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)c.x=y/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var it=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ia=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sa=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ra=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:r=e,o=2*t-n;break;case ic:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=e,l=2*n-t;break;case ic:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-p*m+2*p*_-p*g,E=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+E*a[c+C]+y*a[l+C]+x*a[u+C];return r}},aa=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},oa=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ra(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Mf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,p=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[p+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Wr;var $n=class extends Gt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ls;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var la=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="number";var ha=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},nr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Ls;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Yh=new da,fa=class{constructor(e){this.manager=e!==void 0?e:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mi=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ec=new pt,jl=new P,Ql=new P,lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xn=class extends Hs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hc=class extends lc{constructor(){super(new xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pa=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Uc="\\[\\]\\.:\\/",Sf=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",bf="[^"+Uc.replace("\\.","")+"]",Ef=/((?:WC+[\/:])*)/.source.replace("WC",Nc),wf=/(WCOD+)?/.source.replace("WCOD",bf),Tf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Rf=new RegExp("^"+Ef+wf+Tf+Af+"$"),Cf=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sf,"")}static parseTrackName(e){let t=Rf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=uc;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);function Fc(i,e,t,n){let s=If(n);switch(t){case bc:return i*e;case wc:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case Pa:return i*e*2/s.components*s.byteLength;case Ec:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case so:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function If(i){switch(i){case un:case vc:return{byteLength:1,components:1};case as:case yc:case os:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case ei:case Aa:case yn:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){let g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Ff,alphatest_fragment:Of,alphatest_pars_fragment:Bf,aomap_fragment:zf,aomap_pars_fragment:kf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Kf,color_fragment:jf,color_pars_fragment:Qf,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:cp,colorspace_fragment:lp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:wp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:xp,fog_pars_fragment:vp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:Ep,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Up,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Jp,normal_fragment_begin:$p,normal_fragment_maps:Kp,normal_pars_fragment:jp,normal_pars_vertex:Qp,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:cm,project_vertex:lm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:xm,skinning_pars_vertex:vm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Im,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:Zm,meshlambert_frag:Jm,meshmatcap_vert:$m,meshmatcap_frag:Km,meshnormal_vert:jm,meshnormal_frag:Qm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:ag,points_frag:og,shadow_vert:cg,shadow_frag:lg,sprite_vert:hg,sprite_frag:ug},Me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Mn={basic:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ct([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ct([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ct([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ct([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ct([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ct([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ct([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ct([Me.lights,Me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Mn.physical={uniforms:Ct([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var oo={r:0,b:0,g:0},Ti=new an,dg=new pt;function fg(i,e,t,n,s,r,a){let o=new ze(0),l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,C=g(y);C===null?f(o,l):C&&C.isColor&&(f(C,1),x=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let C=g(x);C&&(C.isCubeTexture||C.mapping===sr)?(h===void 0&&(h=new Be(new Jn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:wi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Ti)),h.material.toneMapped=et.getTransfer(C.colorSpace)!==st,(u!==C||p!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,p=C.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Be(new vi(2,2),new on({name:"BackgroundMaterial",uniforms:wi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,p=C.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(oo,Lc(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:E}}function pg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(M,L,D,F,V){let k=!1,W=u(F,D,L);r!==W&&(r=W,c(r.object)),k=d(M,F,D,V),k&&g(M,F,D,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(M,L,D,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,D){let F=D.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let k=V[L.id];k===void 0&&(k={},V[L.id]=k);let W=k[F];return W===void 0&&(W=p(l()),k[F]=W),W}function p(M){let L=[],D=[],F=[];for(let V=0;V<t;V++)L[V]=0,D[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,D,F){let V=r.attributes,k=L.attributes,W=0,re=D.getAttributes();for(let q in re)if(re[q].location>=0){let Z=V[q],oe=k[q];if(oe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,L,D,F){let V={},k=L.attributes,W=0,re=D.getAttributes();for(let q in re)if(re[q].location>=0){let Z=k[q];Z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));let oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),V[q]=oe,W++}r.attributes=V,r.attributesNum=W,r.index=F}function _(){let M=r.newAttributes;for(let L=0,D=M.length;L<D;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){let D=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;D[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==L&&(i.vertexAttribDivisor(M,L),V[M]=L)}function E(){let M=r.newAttributes,L=r.enabledAttributes;for(let D=0,F=L.length;D<F;D++)L[D]!==M[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function y(M,L,D,F,V,k,W){W===!0?i.vertexAttribIPointer(M,L,D,V,k):i.vertexAttribPointer(M,L,D,F,V,k)}function x(M,L,D,F){_();let V=F.attributes,k=D.getAttributes(),W=L.defaultAttributeValues;for(let re in k){let q=k[re];if(q.location>=0){let ee=V[re];if(ee===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let Z=ee.normalized,oe=ee.itemSize,ge=e.get(ee);if(ge===void 0)continue;let Pe=ge.buffer,Ee=ge.type,Ie=ge.bytesPerElement,te=Ee===i.INT||Ee===i.UNSIGNED_INT||ee.gpuType===Aa;if(ee.isInterleavedBufferAttribute){let ie=ee.data,me=ie.stride,Re=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)f(q.location+_e,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let _e=0;_e<q.locationSize;_e++)y(q.location+_e,oe/q.locationSize,Ee,Z,me*Ie,(Re+oe/q.locationSize*_e)*Ie,te)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)f(q.location+ie,ee.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ie=0;ie<q.locationSize;ie++)y(q.location+ie,oe/q.locationSize,Ee,Z,oe*Ie,oe/q.locationSize*ie*Ie,te)}}else if(W!==void 0){let Z=W[re];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(q.location,Z);break;case 3:i.vertexAttrib3fv(q.location,Z);break;case 4:i.vertexAttrib4fv(q.location,Z);break;default:i.vertexAttrib1fv(q.location,Z)}}}}E()}function C(){I();for(let M in n){let L=n[M];for(let D in L){let F=L[D];for(let V in F)h(F[V].object),delete F[V];delete L[D]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let D in L){let F=L[D];for(let V in F)h(F[V].object),delete F[V];delete L[D]}delete n[M.id]}function T(M){for(let L in n){let D=n[L];if(D[M.id]===void 0)continue;let F=D[M.id];for(let V in F)h(F[V].object),delete F[V];delete D[M.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function mg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,p){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Kt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function _g(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,y=E*4,x=f.clippingState||null;l.value=x,x=h(g,p,y,d);for(let C=0;C!==y;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=d+_*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=d;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xg(i){let e=new WeakMap;function t(a,o){return o===Ea?a.mapping=Si:o===wa&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ea||o===wa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var us=4,Zh=[.125,.215,.35,.446,.526,.582],Ci=20,Oc=new xn,Jh=new ze,Bc=null,zc=0,kc=0,Hc=!1,Ri=(1+Math.sqrt(5))/2,hs=1/Ri,$h=[new P(-Ri,hs,0),new P(Ri,hs,0),new P(-hs,0,Ri),new P(hs,0,Ri),new P(0,Ri,-hs),new P(0,Ri,hs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],vg=new P,ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vg}=r;Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,zc,kc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:os,format:Kt,colorSpace:fi,depthBuffer:!1},s=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=Mg(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new mi({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new Be(new Jn,_),f=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,f=!0):(_.color.copy(Jh),f=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let C=this._cubeSize;co(s,x*C,y>2?C:0,C,C),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Si||e.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$h[(s-r-1)%$h.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);let f=[],E=0;for(let T=0;T<Ci;++T){let I=T/_,S=Math.exp(-I*I/2);f.push(S),T===0?E+=S:T<m&&(E+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;let x=this._sizeLods[s],C=3*x*(s>y-us?s-y+us:0),b=4*(this._cubeSize-x);co(t,C,b,3*x,2*x),l.setRenderTarget(t),l.render(u,Oc)}};function yg(i){let e=[],t=[],n=[],s=i,r=i-us+1+Zh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-us?l=Zh[a-i+us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,I=b>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];E.set(S,_*g*b),y.set(p,m*g*b);let M=[b,b,b,b,b,b];x.set(M,f*g*b)}let C=new _t;C.setAttribute("position",new vt(E,_)),C.setAttribute("uv",new vt(y,m)),C.setAttribute("faceIndex",new vt(x,f)),e.push(C),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kh(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mg(i,e,t){let n=new Float32Array(Ci),s=new P(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function jh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Qh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ea||l===wa,h=l===Si||l===bi;if(c||h){let u=e.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new ho(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new ho(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,e,t,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let d in p)e.update(p[d],i.ARRAY_BUFFER)}function c(u){let p=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let E=d.array;_=d.version;for(let y=0,x=E.length;y<x;y+=3){let C=E[y+0],b=E[y+1],T=E[y+2];p.push(C,b,b,T,T,C)}}else if(g!==void 0){let E=g.array;_=g.version;for(let y=0,x=E.length/3-1;y<x;y+=3){let C=y+0,b=y+1,T=y+2;p.push(C,b,b,T,T,C)}}else return;let m=new(Pc(p)?ks:zs)(p,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wg(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*a,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=d[E]*_[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==u){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*C*4*u),T=new Fs(b,x,C,u);T.type=yn,T.needsUpdate=!0;let I=y*4;for(let M=0;M<u;M++){let L=m[M],D=f[M],F=E[M],V=x*C*4*M;for(let k=0;k<L.count;k++){let W=k*I;d===!0&&(s.fromBufferAttribute(L,k),b[V+W+0]=s.x,b[V+W+1]=s.y,b[V+W+2]=s.z,b[V+W+3]=0),g===!0&&(s.fromBufferAttribute(D,k),b[V+W+4]=s.x,b[V+W+5]=s.y,b[V+W+6]=s.z,b[V+W+7]=0),_===!0&&(s.fromBufferAttribute(F,k),b[V+W+8]=s.x,b[V+W+9]=s.y,b[V+W+10]=s.z,b[V+W+11]=F.itemSize===4?s.w:1)}}p={count:u,texture:T,size:new he(x,C)},n.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Rg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var xu=new Lt,eu=new Ws(1,1),vu=new Fs,yu=new Yr,Mu=new Vs,tu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Mt(t,n)}}function Ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Mt(t,n)}}function Ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Mt(t,n)}}function Fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=Rc,r=eu):r=xu,t.setTexture2D(e||r,s)}function Xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mu,s)}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vu,s)}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Jg(i,e){i.uniform1fv(this.addr,e)}function $g(i,e){let t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Kg(i,e){let t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function jg(i,e){let t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function Qg(i,e){let t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e0(i,e){let t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t0(i,e){let t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n0(i,e){i.uniform1iv(this.addr,e)}function i0(i,e){i.uniform2iv(this.addr,e)}function s0(i,e){i.uniform3iv(this.addr,e)}function r0(i,e){i.uniform4iv(this.addr,e)}function a0(i,e){i.uniform1uiv(this.addr,e)}function o0(i,e){i.uniform2uiv(this.addr,e)}function c0(i,e){i.uniform3uiv(this.addr,e)}function l0(i,e){i.uniform4uiv(this.addr,e)}function h0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xu,r[a])}function u0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function d0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mu,r[a])}function f0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vu,r[a])}function p0(i){switch(i){case 5126:return Jg;case 35664:return $g;case 35665:return Kg;case 35666:return jg;case 35674:return Qg;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}var Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}},Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function au(i,e){i.seq.push(e),i.map[e.id]=e}function m0(i,e,t){let n=i.name,s=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),a=Vc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){au(t,c===void 0?new Gc(o,i,e):new Wc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Xc(o),au(t,u)),t=u}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);m0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ou(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var g0=37297,_0=0;function x0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var cu=new Je;function v0(i){et._getMatrix(cu,et.workingColorSpace,i);let e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+x0(i.getShaderSource(e),o)}else return r}function y0(i,e){let t=v0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M0(i,e){let t;switch(e){case Sh:t="Linear";break;case bh:t="Reinhard";break;case Eh:t="Cineon";break;case ba:t="ACESFilmic";break;case Th:t="AgX";break;case Ah:t="Neutral";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lo=new P;function S0(){et.getLuminanceCoefficients(lo);let i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function E0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hr(i){return i!==""}function hu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(T0,R0)}var A0=new Map;function R0(i,e){let t=$e[e];if(t===void 0){let n=A0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}var C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(C0,I0)}function I0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ma?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case bi:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function U0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function N0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function F0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=P0(t),c=L0(t),h=D0(t),u=U0(t),p=N0(t),d=b0(t),g=E0(r),_=s.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),f.length>0&&(f+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),f=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Nn?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,y0("linearToOutputTexel",t.outputColorSpace),S0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=qc(a),a=hu(a,t),a=uu(a,t),o=qc(o),o=hu(o,t),o=uu(o,t),a=du(a),o=du(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=E+m+a,x=E+f+o,C=ou(s,s.VERTEX_SHADER,y),b=ou(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(C)||"",V=s.getShaderInfoLog(b)||"",k=D.trim(),W=F.trim(),re=V.trim(),q=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,b);else{let Z=lu(s,C,"vertex"),oe=lu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Z+`
`+oe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||re==="")&&(ee=!1);ee&&(L.diagnostics={runnable:q,programLog:k,vertexShader:{log:W,prefix:m},fragmentShader:{log:re,prefix:f}})}s.deleteShader(C),s.deleteShader(b),I=new ds(s,_),S=w0(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,g0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}var O0=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}};function B0(i,e,t,n,s,r,a){let o=new Bs,l=new Yc,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,D,F){let V=D.fog,k=F.geometry,W=S.isMeshStandardMaterial?D.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),q=re&&re.mapping===sr?re.image.height:null,ee=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=Z!==void 0?Z.length:0,ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let Pe,Ee,Ie,te;if(ee){let nt=Mn[ee];Pe=nt.vertexShader,Ee=nt.fragmentShader}else Pe=S.vertexShader,Ee=S.fragmentShader,l.update(S),Ie=l.getVertexShaderID(S),te=l.getFragmentShaderID(S);let ie=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Ve=!!S.map,ae=!!S.matcap,A=!!re,O=!!S.aoMap,B=!!S.lightMap,X=!!S.bumpMap,G=!!S.normalMap,j=!!S.displacementMap,J=!!S.emissiveMap,ne=!!S.metalnessMap,Ne=!!S.roughnessMap,Se=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,U=S.iridescence>0,Y=S.sheen>0,se=S.transmission>0,$=Se&&!!S.anisotropyMap,Ae=R&&!!S.clearcoatMap,de=R&&!!S.clearcoatNormalMap,Ce=R&&!!S.clearcoatRoughnessMap,we=U&&!!S.iridescenceMap,le=U&&!!S.iridescenceThicknessMap,xe=Y&&!!S.sheenColorMap,Fe=Y&&!!S.sheenRoughnessMap,be=!!S.specularMap,ye=!!S.specularColorMap,Xe=!!S.specularIntensityMap,N=se&&!!S.transmissionMap,fe=se&&!!S.thicknessMap,ve=!!S.gradientMap,Le=!!S.alphaMap,ue=S.alphaTest>0,ce=!!S.alphaHash,Ue=!!S.extensions,Ye=Nn;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let ot={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Ee,defines:S.defines,customVertexShaderID:Ie,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:ae,envMap:A,envMapMode:A&&re.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:B,bumpMap:X,normalMap:G,displacementMap:p&&j,emissiveMap:J,normalMapObjectSpace:G&&S.normalMapType===Ph,normalMapTangentSpace:G&&S.normalMapType===Ac,metalnessMap:ne,roughnessMap:Ne,anisotropy:Se,anisotropyMap:$,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:de,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:U,iridescenceMap:we,iridescenceThicknessMap:le,sheen:Y,sheenColorMap:xe,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:ye,specularIntensityMap:Xe,transmission:se,transmissionMap:N,thicknessMap:fe,gradientMap:ve,opaque:S.transparent===!1&&S.blending===ui&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:ue,alphaHash:ce,combine:S.combine,mapUv:Ve&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:B&&_(S.lightMap.channel),bumpMapUv:X&&_(S.bumpMap.channel),normalMapUv:G&&_(S.normalMap.channel),displacementMapUv:j&&_(S.displacementMap.channel),emissiveMapUv:J&&_(S.emissiveMap.channel),metalnessMapUv:ne&&_(S.metalnessMap.channel),roughnessMapUv:Ne&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:Ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(S.sheenRoughnessMap.channel),specularMapUv:be&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:Xe&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:fe&&_(S.thicknessMap.channel),alphaMapUv:Le&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(G||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Ve||Le),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:J&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$t,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let M=g[S.type],L;if(M){let D=Mn[M];L=Vh.clone(D.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let D=0,F=h.length;D<F;D++){let V=h[D];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new F0(i,M,S,r),h.push(L)),L}function b(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:I}}function z0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,d,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,p,d,g,_,m){let f=a(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(u,p,d,g,_,m){let f=a(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||k0),n.length>1&&n.sort(p||pu),s.length>1&&s.sort(p||pu)}function h(){for(let u=e,p=i.length;u<p;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function H0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new mu,i.set(n,[a])):s>=r.length?(a=new mu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function V0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function G0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var W0=0;function X0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q0(i){let e=new V0,t=G0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new pt,a=new pt;function o(c){let h=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,E=0,y=0,x=0,C=0,b=0,T=0;c.sort(X0);for(let S=0,M=c.length;S<M;S++){let L=c[S],D=L.color,F=L.intensity,V=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*F,u+=D.g*F,p+=D.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],F);T++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let re=L.shadow,q=t.get(L);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=L.shadow.matrix,E++}n.directional[d]=W,d++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(D).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;let re=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,re.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[_]=re.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=k,x++}_++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(D).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let re=L.shadow,q=t.get(L);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=W,g++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=T,n.version=W0++)}function l(c,h){let u=0,p=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let y=c[f];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function gu(i){let e=new q0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Y0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gu(i),e.set(s,[o])):r>=a.length?(o=new gu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $0(i,e,t){let n=new ts,s=new he,r=new he,a=new ht,o=new ia({depthPacking:Ih}),l=new sa,c={},h=t.maxTextureSize,u={[In]:Dt,[Dt]:In,[$t]:$t},p=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Z0,fragmentShader:J0}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Be(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(b,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=f!==vn&&this.type===vn,V=f===vn&&this.type!==vn;for(let k=0,W=b.length;k<W;k++){let re=b[k],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ee=q.getFrameExtents();if(s.multiply(ee),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,q.mapSize.y=r.y)),q.map===null||F===!0||V===!0){let oe=this.type!==vn?{minFilter:Ft,magFilter:Ft}:{};q.map!==null&&q.map.dispose(),q.map=new gn(s.x,s.y,oe),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let Z=q.getViewportCount();for(let oe=0;oe<Z;oe++){let ge=q.getViewport(oe);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),D.viewport(a),q.updateMatrices(re,oe),n=q.getFrustum(),x(T,I,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===vn&&E(q,I),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function E(b,T){let I=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,p,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,d,_,null)}function y(b,T,I,S){let M=null,L=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=M.uuid,F=T.uuid,V=c[D];V===void 0&&(V={},c[D]=V);let k=V[F];k===void 0&&(k=M.clone(),V[F]=k,T.addEventListener("dispose",C)),M=k}if(M.visible=T.visible,M.wireframe=T.wireframe,S===vn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=i.properties.get(M);D.light=I}return M}function x(b,T,I,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let F=e.update(b),V=b.material;if(Array.isArray(V)){let k=F.groups;for(let W=0,re=k.length;W<re;W++){let q=k[W],ee=V[q.materialIndex];if(ee&&ee.visible){let Z=y(b,ee,S,M);b.onBeforeShadow(i,b,T,I,F,Z,q),i.renderBufferDirect(I,null,F,Z,b,q),b.onAfterShadow(i,b,T,I,F,Z,q)}}}else if(V.visible){let k=y(b,V,S,M);b.onBeforeShadow(i,b,T,I,F,k,null),i.renderBufferDirect(I,null,F,k,b,null),b.onAfterShadow(i,b,T,I,F,k,null)}}let D=b.children;for(let F=0,V=D.length;F<V;F++)x(D[F],T,I,S,M)}function C(b){b.target.removeEventListener("dispose",C);for(let I in c){let S=c[I],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var K0={[ga]:_a,[xa]:Ma,[va]:Sa,[di]:ya,[_a]:ga,[Ma]:xa,[Sa]:va,[ya]:di};function j0(i,e){function t(){let N=!1,fe=new ht,ve=null,Le=new ht(0,0,0,0);return{setMask:function(ue){ve!==ue&&!N&&(i.colorMask(ue,ue,ue,ue),ve=ue)},setLocked:function(ue){N=ue},setClear:function(ue,ce,Ue,Ye,ot){ot===!0&&(ue*=Ye,ce*=Ye,Ue*=Ye),fe.set(ue,ce,Ue,Ye),Le.equals(fe)===!1&&(i.clearColor(ue,ce,Ue,Ye),Le.copy(fe))},reset:function(){N=!1,ve=null,Le.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,ve=null,Le=null,ue=null;return{setReversed:function(ce){if(fe!==ce){let Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=ce;let Ye=ue;ue=null,this.setClear(Ye)}},getReversed:function(){return fe},setTest:function(ce){ce?ie(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ce){ve!==ce&&!N&&(i.depthMask(ce),ve=ce)},setFunc:function(ce){if(fe&&(ce=K0[ce]),Le!==ce){switch(ce){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ce}},setLocked:function(ce){N=ce},setClear:function(ce){ue!==ce&&(fe&&(ce=1-ce),i.clearDepth(ce),ue=ce)},reset:function(){N=!1,ve=null,Le=null,ue=null,fe=!1}}}function s(){let N=!1,fe=null,ve=null,Le=null,ue=null,ce=null,Ue=null,Ye=null,ot=null;return{setTest:function(nt){N||(nt?ie(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!N&&(i.stencilMask(nt),fe=nt)},setFunc:function(nt,bn,pn){(ve!==nt||Le!==bn||ue!==pn)&&(i.stencilFunc(nt,bn,pn),ve=nt,Le=bn,ue=pn)},setOp:function(nt,bn,pn){(ce!==nt||Ue!==bn||Ye!==pn)&&(i.stencilOp(nt,bn,pn),ce=nt,Ue=bn,Ye=pn)},setLocked:function(nt){N=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){N=!1,fe=null,ve=null,Le=null,ue=null,ce=null,Ue=null,Ye=null,ot=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,E=null,y=null,x=null,C=null,b=null,T=new ze(0,0,0),I=0,S=!1,M=null,L=null,D=null,F=null,V=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=re>=2);let ee=null,Z={},oe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Pe=new ht().fromArray(oe),Ee=new ht().fromArray(ge);function Ie(N,fe,ve,Le){let ue=new Uint8Array(4),ce=i.createTexture();i.bindTexture(N,ce),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ve;Ue++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(fe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ce}let te={};te[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(di),X(!1),G(dc),ie(i.CULL_FACE),O(Un);function ie(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function me(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Re(N,fe){return u[N]!==fe?(i.bindFramebuffer(N,fe),u[N]=fe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(N,fe){let ve=d,Le=!1;if(N){ve=p.get(fe),ve===void 0&&(ve=[],p.set(fe,ve));let ue=N.textures;if(ve.length!==ue.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ue=ue.length;ce<Ue;ce++)ve[ce]=i.COLOR_ATTACHMENT0+ce;ve.length=ue.length,Le=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Le=!0);Le&&i.drawBuffers(ve)}function Ve(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let ae={[Zn]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};ae[rh]=i.MIN,ae[ah]=i.MAX;let A={[oh]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[Hr]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,fe,ve,Le,ue,ce,Ue,Ye,ot,nt){if(N===Un){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),N!==nh){if(N!==m||nt!==S){if((f!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,x=Zn),nt)switch(N){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,y=null,C=null,b=null,T.set(0,0,0),I=0,m=N,S=nt}return}ue=ue||fe,ce=ce||ve,Ue=Ue||Le,(fe!==f||ue!==x)&&(i.blendEquationSeparate(ae[fe],ae[ue]),f=fe,x=ue),(ve!==E||Le!==y||ce!==C||Ue!==b)&&(i.blendFuncSeparate(A[ve],A[Le],A[ce],A[Ue]),E=ve,y=Le,C=ce,b=Ue),(Ye.equals(T)===!1||ot!==I)&&(i.blendColor(Ye.r,Ye.g,Ye.b,ot),T.copy(Ye),I=ot),m=N,S=!1}function B(N,fe){N.side===$t?me(i.CULL_FACE):ie(i.CULL_FACE);let ve=N.side===Dt;fe&&(ve=!ve),X(ve),N.blending===ui&&N.transparent===!1?O(Un):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Le=N.stencilWrite;o.setTest(Le),Le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),J(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function G(N){N!==eh?(ie(i.CULL_FACE),N!==L&&(N===dc?i.cullFace(i.BACK):N===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=N}function j(N){N!==D&&(W&&i.lineWidth(N),D=N)}function J(N,fe,ve){N?(ie(i.POLYGON_OFFSET_FILL),(F!==fe||V!==ve)&&(i.polygonOffset(fe,ve),F=fe,V=ve)):me(i.POLYGON_OFFSET_FILL)}function ne(N){N?ie(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Ne(N){N===void 0&&(N=i.TEXTURE0+k-1),ee!==N&&(i.activeTexture(N),ee=N)}function Se(N,fe,ve){ve===void 0&&(ee===null?ve=i.TEXTURE0+k-1:ve=ee);let Le=Z[ve];Le===void 0&&(Le={type:void 0,texture:void 0},Z[ve]=Le),(Le.type!==N||Le.texture!==fe)&&(ee!==ve&&(i.activeTexture(ve),ee=ve),i.bindTexture(N,fe||te[N]),Le.type=N,Le.texture=fe)}function R(){let N=Z[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(N){Pe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Pe.copy(N))}function Fe(N){Ee.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function be(N,fe){let ve=c.get(fe);ve===void 0&&(ve=new WeakMap,c.set(fe,ve));let Le=ve.get(N);Le===void 0&&(Le=i.getUniformBlockIndex(fe,N.name),ve.set(N,Le))}function ye(N,fe){let Le=c.get(fe).get(N);l.get(fe)!==Le&&(i.uniformBlockBinding(fe,Le,N.__bindingPointIndex),l.set(fe,Le))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,Z={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,E=null,y=null,x=null,C=null,b=null,T=new ze(0,0,0),I=0,S=!1,M=null,L=null,D=null,F=null,V=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:me,bindFramebuffer:Re,drawBuffers:_e,useProgram:Ve,setBlending:O,setMaterial:B,setFlipSided:X,setCullFace:G,setLineWidth:j,setPolygonOffset:J,setScissorTest:ne,activeTexture:Ne,bindTexture:Se,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:we,texImage3D:le,updateUBOMapping:be,uniformBlockBinding:ye,texStorage2D:de,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:xe,viewport:Fe,reset:Xe}}function Q0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):Ns("canvas")}function _(R,v,U){let Y=1,se=Se(R);if((se.width>U||se.height>U)&&(Y=U/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Y*se.width),Ae=Math.floor(Y*se.height);u===void 0&&(u=g($,Ae));let de=v?g($,Ae):u;return de.width=$,de.height=Ae,de.getContext("2d").drawImage(R,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+Ae+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,v,U,Y,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=v;if(v===i.RED&&(U===i.FLOAT&&($=i.R32F),U===i.HALF_FLOAT&&($=i.R16F),U===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.R8UI),U===i.UNSIGNED_SHORT&&($=i.R16UI),U===i.UNSIGNED_INT&&($=i.R32UI),U===i.BYTE&&($=i.R8I),U===i.SHORT&&($=i.R16I),U===i.INT&&($=i.R32I)),v===i.RG&&(U===i.FLOAT&&($=i.RG32F),U===i.HALF_FLOAT&&($=i.RG16F),U===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RG8UI),U===i.UNSIGNED_SHORT&&($=i.RG16UI),U===i.UNSIGNED_INT&&($=i.RG32UI),U===i.BYTE&&($=i.RG8I),U===i.SHORT&&($=i.RG16I),U===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGB8UI),U===i.UNSIGNED_SHORT&&($=i.RGB16UI),U===i.UNSIGNED_INT&&($=i.RGB32UI),U===i.BYTE&&($=i.RGB8I),U===i.SHORT&&($=i.RGB16I),U===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGBA8UI),U===i.UNSIGNED_SHORT&&($=i.RGBA16UI),U===i.UNSIGNED_INT&&($=i.RGBA32UI),U===i.BYTE&&($=i.RGBA8I),U===i.SHORT&&($=i.RGBA16I),U===i.INT&&($=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){let Ae=se?Ds:et.getTransfer(Y);U===i.FLOAT&&($=i.RGBA32F),U===i.HALF_FLOAT&&($=i.RGBA16F),U===i.UNSIGNED_BYTE&&($=Ae===st?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,v){let U;return R?v===null||v===ei||v===cs?U=i.DEPTH24_STENCIL8:v===yn?U=i.DEPTH32F_STENCIL8:v===as&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===cs?U=i.DEPTH_COMPONENT24:v===yn?U=i.DEPTH_COMPONENT32F:v===as&&(U=i.DEPTH_COMPONENT16),U}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function b(R){let v=R.target;v.removeEventListener("dispose",b),I(v),v.isVideoTexture&&h.delete(v)}function T(R){let v=R.target;v.removeEventListener("dispose",T),M(v)}function I(R){let v=n.get(R);if(v.__webglInit===void 0)return;let U=R.source,Y=p.get(U);if(Y){let se=Y[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(R),Object.keys(Y).length===0&&p.delete(U)}n.remove(R)}function S(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let U=R.source,Y=p.get(U);delete Y[v.__cacheKey],a.memory.textures--}function M(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let se=0;se<v.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=R.textures;for(let Y=0,se=U.length;Y<se;Y++){let $=n.get(U[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(R)}let L=0;function D(){L=0}function F(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function V(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function k(R,v){let U=n.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function W(R,v){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){te(U,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function re(R,v){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){te(U,R,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function q(R,v){let U=n.get(R);if(R.version>0&&U.__version!==R.version){ie(U,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let ee={[Ji]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},Z={[Ft]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},oe={[Lh]:i.NEVER,[Bh]:i.ALWAYS,[Dh]:i.LESS,[Rc]:i.LEQUAL,[Uh]:i.EQUAL,[Oh]:i.GEQUAL,[Nh]:i.GREATER,[Fh]:i.NOTEQUAL};function ge(R,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===Ta||v.magFilter===rr||v.magFilter===Qn||v.minFilter===Et||v.minFilter===Ta||v.minFilter===rr||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ee[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==rr&&v.minFilter!==Qn||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",b));let Y=v.source,se=p.get(Y);se===void 0&&(se={},p.set(Y,se));let $=V(v);if($!==R.__cacheKey){se[$]===void 0&&(se[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),se[$].usedTimes++;let Ae=se[R.__cacheKey];Ae!==void 0&&(se[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(v)),R.__cacheKey=$,R.__webglTexture=se[$].texture}return U}function Ee(R,v,U){return Math.floor(Math.floor(R/U)/v)}function Ie(R,v,U,Y){let $=R.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,Y,v.data);else{$.sort((le,xe)=>le.start-xe.start);let Ae=0;for(let le=1;le<$.length;le++){let xe=$[Ae],Fe=$[le],be=xe.start+xe.count,ye=Ee(Fe.start,v.width,4),Xe=Ee(xe.start,v.width,4);Fe.start<=be+1&&ye===Xe&&Ee(Fe.start+Fe.count-1,v.width,4)===ye?xe.count=Math.max(xe.count,Fe.start+Fe.count-xe.start):(++Ae,$[Ae]=Fe)}$.length=Ae+1;let de=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let le=0,xe=$.length;le<xe;le++){let Fe=$[le],be=Math.floor(Fe.start/4),ye=Math.ceil(Fe.count/4),Xe=be%v.width,N=Math.floor(be/v.width),fe=ye,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Xe,N,fe,ve,U,Y,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function te(R,v,U){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let se=Pe(R,v),$=v.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+U);let Ae=n.get($);if($.version!==Ae.__version||se===!0){t.activeTexture(i.TEXTURE0+U);let de=et.getPrimaries(et.workingColorSpace),Ce=v.colorSpace===Fn?null:et.getPrimaries(v.colorSpace),we=v.colorSpace===Fn||de===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let le=_(v.image,!1,s.maxTextureSize);le=Ne(v,le);let xe=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),be=y(v.internalFormat,xe,Fe,v.colorSpace,v.isVideoTexture);ge(Y,v);let ye,Xe=v.mipmaps,N=v.isVideoTexture!==!0,fe=Ae.__version===void 0||se===!0,ve=$.dataReady,Le=C(v,le);if(v.isDepthTexture)be=x(v.format===ls,v.type),fe&&(N?t.texStorage2D(i.TEXTURE_2D,1,be,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,be,le.width,le.height,0,xe,Fe,null));else if(v.isDataTexture)if(Xe.length>0){N&&fe&&t.texStorage2D(i.TEXTURE_2D,Le,be,Xe[0].width,Xe[0].height);for(let ue=0,ce=Xe.length;ue<ce;ue++)ye=Xe[ue],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,xe,Fe,ye.data):t.texImage2D(i.TEXTURE_2D,ue,be,ye.width,ye.height,0,xe,Fe,ye.data);v.generateMipmaps=!1}else N?(fe&&t.texStorage2D(i.TEXTURE_2D,Le,be,le.width,le.height),ve&&Ie(v,le,xe,Fe)):t.texImage2D(i.TEXTURE_2D,0,be,le.width,le.height,0,xe,Fe,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,be,Xe[0].width,Xe[0].height,le.depth);for(let ue=0,ce=Xe.length;ue<ce;ue++)if(ye=Xe[ue],v.format!==Kt)if(xe!==null)if(N){if(ve)if(v.layerUpdates.size>0){let Ue=Fc(ye.width,ye.height,v.format,v.type);for(let Ye of v.layerUpdates){let ot=ye.data.subarray(Ye*Ue/ye.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ye,ye.width,ye.height,1,xe,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,le.depth,xe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,be,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,le.depth,xe,Fe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,be,ye.width,ye.height,le.depth,0,xe,Fe,ye.data)}else{N&&fe&&t.texStorage2D(i.TEXTURE_2D,Le,be,Xe[0].width,Xe[0].height);for(let ue=0,ce=Xe.length;ue<ce;ue++)ye=Xe[ue],v.format!==Kt?xe!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,xe,Fe,ye.data):t.texImage2D(i.TEXTURE_2D,ue,be,ye.width,ye.height,0,xe,Fe,ye.data)}else if(v.isDataArrayTexture)if(N){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,be,le.width,le.height,le.depth),ve)if(v.layerUpdates.size>0){let ue=Fc(le.width,le.height,v.format,v.type);for(let ce of v.layerUpdates){let Ue=le.data.subarray(ce*ue/le.data.BYTES_PER_ELEMENT,(ce+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,le.width,le.height,1,xe,Fe,Ue)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Fe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,xe,Fe,le.data);else if(v.isData3DTexture)N?(fe&&t.texStorage3D(i.TEXTURE_3D,Le,be,le.width,le.height,le.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Fe,le.data)):t.texImage3D(i.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,xe,Fe,le.data);else if(v.isFramebufferTexture){if(fe)if(N)t.texStorage2D(i.TEXTURE_2D,Le,be,le.width,le.height);else{let ue=le.width,ce=le.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,be,ue,ce,0,xe,Fe,null),ue>>=1,ce>>=1}}else if(Xe.length>0){if(N&&fe){let ue=Se(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Le,be,ue.width,ue.height)}for(let ue=0,ce=Xe.length;ue<ce;ue++)ye=Xe[ue],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,xe,Fe,ye):t.texImage2D(i.TEXTURE_2D,ue,be,xe,Fe,ye);v.generateMipmaps=!1}else if(N){if(fe){let ue=Se(le);t.texStorage2D(i.TEXTURE_2D,Le,be,ue.width,ue.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Fe,le)}else t.texImage2D(i.TEXTURE_2D,0,be,xe,Fe,le);m(v)&&f(Y),Ae.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ie(R,v,U){if(v.image.length!==6)return;let Y=Pe(R,v),se=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);let $=n.get(se);if(se.version!==$.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);let Ae=et.getPrimaries(et.workingColorSpace),de=v.colorSpace===Fn?null:et.getPrimaries(v.colorSpace),Ce=v.colorSpace===Fn||Ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let ce=0;ce<6;ce++)!we&&!le?xe[ce]=_(v.image[ce],!0,s.maxCubemapSize):xe[ce]=le?v.image[ce].image:v.image[ce],xe[ce]=Ne(v,xe[ce]);let Fe=xe[0],be=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Xe=y(v.internalFormat,be,ye,v.colorSpace),N=v.isVideoTexture!==!0,fe=$.__version===void 0||Y===!0,ve=se.dataReady,Le=C(v,Fe);ge(i.TEXTURE_CUBE_MAP,v);let ue;if(we){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Xe,Fe.width,Fe.height);for(let ce=0;ce<6;ce++){ue=xe[ce].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){let Ye=ue[Ue];v.format!==Kt?be!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Ye.width,Ye.height,be,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Xe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Ye.width,Ye.height,be,ye,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Xe,Ye.width,Ye.height,0,be,ye,Ye.data)}}}else{if(ue=v.mipmaps,N&&fe){ue.length>0&&Le++;let ce=Se(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Xe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(le){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,xe[ce].width,xe[ce].height,be,ye,xe[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,xe[ce].width,xe[ce].height,0,be,ye,xe[ce].data);for(let Ue=0;Ue<ue.length;Ue++){let ot=ue[Ue].image[ce].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,ot.width,ot.height,be,ye,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Xe,ot.width,ot.height,0,be,ye,ot.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be,ye,xe[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Xe,be,ye,xe[ce]);for(let Ue=0;Ue<ue.length;Ue++){let Ye=ue[Ue];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,be,ye,Ye.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Xe,be,ye,Ye.image[ce])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),$.__version=se.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,U,Y,se,$){let Ae=r.convert(U.format,U.colorSpace),de=r.convert(U.type),Ce=y(U.internalFormat,Ae,de,U.colorSpace),we=n.get(v),le=n.get(U);if(le.__renderTarget=v,!we.__hasExternalTextures){let xe=Math.max(1,v.width>>$),Fe=Math.max(1,v.height>>$);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,$,Ce,xe,Fe,v.depth,0,Ae,de,null):t.texImage2D(se,$,Ce,xe,Fe,0,Ae,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),J(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,le.__webglTexture,0,j(v)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,le.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(R,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let Y=v.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,$=x(v.stencilBuffer,se),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=j(v);J(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,$,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{let Y=v.textures;for(let se=0;se<Y.length;se++){let $=Y[se],Ae=r.convert($.format,$.colorSpace),de=r.convert($.type),Ce=y($.internalFormat,Ae,de,$.colorSpace),we=j(v);U&&J(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ce,v.width,v.height):J(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let se=Y.__webglTexture,$=j(v);if(v.depthTexture.format===$i)J(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(v.depthTexture.format===ls)J(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(R){let v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?_e(v.__webglFramebuffer[0],R):_e(v.__webglFramebuffer,R)}else if(U){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),Re(v.__webglDepthbuffer[Y],R,!1);else{let se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Re(v.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,v,U){let Y=n.get(R);v!==void 0&&me(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ve(R)}function A(R){let v=R.texture,U=n.get(R),Y=n.get(v);R.addEventListener("dispose",T);let se=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ae=se.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),$){U.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[de]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)U.__webglFramebuffer[de][Ce]=i.createFramebuffer()}else U.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)U.__webglFramebuffer[de]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let de=0,Ce=se.length;de<Ce;de++){let we=n.get(se[de]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&J(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){let Ce=se[de];U.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[de]);let we=r.convert(Ce.format,Ce.colorSpace),le=r.convert(Ce.type),xe=y(Ce.internalFormat,we,le,Ce.colorSpace,R.isXRRenderTarget===!0),Fe=j(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,U.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)me(U.__webglFramebuffer[de][Ce],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else me(U.__webglFramebuffer[de],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let de=0,Ce=se.length;de<Ce;de++){let we=se[de],le=n.get(we),xe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),ge(xe,we),me(U.__webglFramebuffer,R,we,i.COLOR_ATTACHMENT0+de,xe,0),m(we)&&f(xe)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),ge(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)me(U.__webglFramebuffer[Ce],R,v,i.COLOR_ATTACHMENT0,de,Ce);else me(U.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,de,0);m(v)&&f(de),t.unbindTexture()}R.depthBuffer&&Ve(R)}function O(R){let v=R.textures;for(let U=0,Y=v.length;U<Y;U++){let se=v[U];if(m(se)){let $=E(R),Ae=n.get(se).__webglTexture;t.bindTexture($,Ae),f($),t.unbindTexture()}}}let B=[],X=[];function G(R){if(R.samples>0){if(J(R)===!1){let v=R.textures,U=R.width,Y=R.height,se=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),de=v.length>1;if(de)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<v.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let le=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,se,i.NEAREST),l===!0&&(B.length=0,X.length=0,B.push(i.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(B.push($),X.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let le=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function j(R){return Math.min(s.maxSamples,R.samples)}function J(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ne(R,v){let U=R.colorSpace,Y=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==fi&&U!==Fn&&(et.getTransfer(U)===st?(Y!==Kt||se!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=ae,this.setupRenderTarget=A,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=me,this.useMultisampledRTT=J}function e_(i,e){function t(n,s=Fn){let r,a=et.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return i.BYTE;if(n===yc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===bc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===Kt)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Tc)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===ar||n===or||n===cr||n===lr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Pn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Jc,f={},E=t.getContextAttributes(),y=null,x=null,C=[],b=[],T=new he,I=null,S=new Nt;S.viewport=new ht;let M=new Nt;M.viewport=new ht;let L=[S,M],D=new pa,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=C[te];return ie===void 0&&(ie=new es,C[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=C[te];return ie===void 0&&(ie=new es,C[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=C[te];return ie===void 0&&(ie=new es,C[te]=ie),ie.getHandSpace()};function k(te){let ie=b.indexOf(te.inputSource);if(ie===-1)return;let me=C[ie];me!==void 0&&(me.update(te.inputSource,te.frame,c||a),me.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",re);for(let te=0;te<C.length;te++){let ie=b[te];ie!==null&&(b[te]=null,C[te].disconnect(ie))}F=null,V=null,m.reset();for(let te in f)delete f[te];e.setRenderTarget(y),d=null,p=null,u=null,s=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",re),E.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Re=null,_e=null;E.depth&&(_e=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=E.stencil?ls:$i,Re=E.stencil?cs:ei);let Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new gn(p.textureWidth,p.textureHeight,{format:Kt,type:un,depthTexture:new Ws(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let me={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new gn(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(te){for(let ie=0;ie<te.removed.length;ie++){let me=te.removed[ie],Re=b.indexOf(me);Re>=0&&(b[Re]=null,C[Re].disconnect(me))}for(let ie=0;ie<te.added.length;ie++){let me=te.added[ie],Re=b.indexOf(me);if(Re===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=b.length){b.push(me),Re=Ve;break}else if(b[Ve]===null){b[Ve]=me,Re=Ve;break}if(Re===-1)break}let _e=C[Re];_e&&_e.connect(me)}}let q=new P,ee=new P;function Z(te,ie,me){q.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);let Re=q.distanceTo(ee),_e=ie.projectionMatrix.elements,Ve=me.projectionMatrix.elements,ae=_e[14]/(_e[10]-1),A=_e[14]/(_e[10]+1),O=(_e[9]+1)/_e[5],B=(_e[9]-1)/_e[5],X=(_e[8]-1)/_e[0],G=(Ve[8]+1)/Ve[0],j=ae*X,J=ae*G,ne=Re/(-X+G),Ne=ne*-X;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ne),te.translateZ(ne),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),_e[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Se=ae+ne,R=A+ne,v=j-Ne,U=J+(Re-Ne),Y=O*A/R*Se,se=B*A/R*Se;te.projectionMatrix.makePerspective(v,U,Y,se,Se,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ie=te.near,me=te.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(me=m.depthFar)),D.near=M.near=S.near=ie,D.far=M.far=S.far=me,(F!==D.near||V!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,V=D.far),D.layers.mask=te.layers.mask|6,S.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let Re=te.parent,_e=D.cameras;oe(D,Re);for(let Ve=0;Ve<_e.length;Ve++)oe(_e[Ve],Re);_e.length===2?Z(D,S,M):D.projectionMatrix.copy(S.projectionMatrix),ge(te,D,Re)};function ge(te,ie,me){me===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ki*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(te){l=te,p!==null&&(p.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(te){return f[te]};let Pe=null;function Ee(te,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let me=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Re=!1;me.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let A=0;A<me.length;A++){let O=me[A],B=null;if(d!==null)B=d.getViewport(O);else{let G=u.getViewSubImage(p,O);B=G.viewport,A===0&&(e.setRenderTargetTextures(x,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(x))}let X=L[A];X===void 0&&(X=new Nt,X.layers.enable(A),X.viewport=new ht,L[A]=X),X.matrix.fromArray(O.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(O.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(B.x,B.y,B.width,B.height),A===0&&(D.matrix.copy(X.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(X)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let A=u.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<me.length;A++){let O=me[A].camera;if(O){let B=f[O];B||(B=new Xs,f[O]=B);let X=u.getCameraImage(O);B.sourceTexture=X}}}}for(let me=0;me<C.length;me++){let Re=b[me],_e=C[me];Re!==null&&_e!==void 0&&_e.update(Re,ie,c||a)}Pe&&Pe(te,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ie=new _u;Ie.setAnimationLoop(Ee),this.setAnimationLoop=function(te){Pe=te},this.dispose=function(){}}},Ai=new an,i_=new pt;function s_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),y=E.envMap,x=E.envMapRotation;y&&(m.envMap.value=y,Ai.copy(x),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){let x=y.program;n.uniformBlockBinding(E,x)}function c(E,y){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(E,C);let b=e.render.frame;r[E.id]!==b&&(p(E),r[E.id]=b)}function h(E){let y=u();E.__bindingPointIndex=y;let x=i.createBuffer(),C=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let y=s[E.id],x=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,T=x.length;b<T;b++){let I=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=I.length;S<M;S++){let L=I[S];if(d(L,b,S,C)===!0){let D=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],V=0;for(let k=0;k<F.length;k++){let W=F[k],re=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+V,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,V),V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,x,C){let b=E.value,T=y+"_"+x;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{let I=C[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return C[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(E){let y=E.uniforms,x=0,C=16;for(let T=0,I=y.length;T<I;T++){let S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,L=S.length;M<L;M++){let D=S[M],F=Array.isArray(D.value)?D.value:[D.value];for(let V=0,k=F.length;V<k;V++){let W=F[V],re=_(W),q=x%C,ee=q%re.boundary,Z=q+ee;x+=ee,Z!==0&&C-Z<re.storage&&(x+=C-Z),D.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=re.storage}}}let b=x%C;return b>0&&(x+=C-b),E.__size=x,E.__cache={},this}function _(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var uo=class{constructor(e={}){let{canvas:t=zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=bt;let b=0,T=0,I=null,S=-1,M=null,L=new ht,D=new ht,F=null,V=new ze(0),k=0,W=t.width,re=t.height,q=1,ee=null,Z=null,oe=new ht(0,0,W,re),ge=new ht(0,0,W,re),Pe=!1,Ee=new ts,Ie=!1,te=!1,ie=new pt,me=new P,Re=new ht,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function ae(){return I===null?q:1}let A=n;function O(w,z){return t.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ue,!1),A===null){let z="webgl2";if(A=O(z,w),A===null)throw O(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let B,X,G,j,J,ne,Ne,Se,R,v,U,Y,se,$,Ae,de,Ce,we,le,xe,Fe,be,ye,Xe;function N(){B=new bg(A),B.init(),be=new e_(A,B),X=new gg(A,B,e,be),G=new j0(A,B),X.reversedDepthBuffer&&p&&G.buffers.depth.setReversed(!0),j=new Tg(A),J=new z0,ne=new Q0(A,B,G,J,X,be,j),Ne=new xg(x),Se=new Sg(x),R=new Lf(A),ye=new pg(A,R),v=new Eg(A,R,j,ye),U=new Rg(A,v,R,j),le=new Ag(A,X,ne),de=new _g(J),Y=new B0(x,Ne,Se,B,X,ye,de),se=new s_(x,J),$=new H0,Ae=new Y0(B),we=new fg(x,Ne,Se,G,U,d,l),Ce=new $0(x,U,X),Xe=new r_(A,j,X,G),xe=new mg(A,B,j),Fe=new wg(A,B,j),j.programs=Y.programs,x.capabilities=X,x.extensions=B,x.properties=J,x.renderLists=$,x.shadowMap=Ce,x.state=G,x.info=j}N();let fe=new $c(x,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let w=B.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=B.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(W,re,!1))},this.getSize=function(w){return w.set(W,re)},this.setSize=function(w,z,K=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,re=z,t.width=Math.floor(w*q),t.height=Math.floor(z*q),K===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(W*q,re*q).floor()},this.setDrawingBufferSize=function(w,z,K){W=w,re=z,q=K,t.width=Math.floor(w*K),t.height=Math.floor(z*K),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,z,K,Q){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,z,K,Q),G.viewport(L.copy(oe).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,z,K,Q){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,z,K,Q),G.scissor(D.copy(ge).multiplyScalar(q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){G.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,K=!0){let Q=0;if(w){let H=!1;if(I!==null){let pe=I.texture.format;H=pe===La||pe===Pa||pe===Ia}if(H){let pe=I.texture.type,Te=pe===un||pe===ei||pe===as||pe===cs||pe===Ra||pe===Ca,Oe=we.getClearColor(),De=we.getClearAlpha(),We=Oe.r,qe=Oe.g,ke=Oe.b;Te?(g[0]=We,g[1]=qe,g[2]=ke,g[3]=De,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=We,_[1]=qe,_[2]=ke,_[3]=De,A.clearBufferiv(A.COLOR,0,_))}else Q|=A.COLOR_BUFFER_BIT}z&&(Q|=A.DEPTH_BUFFER_BIT),K&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),we.dispose(),$.dispose(),Ae.dispose(),J.dispose(),Ne.dispose(),Se.dispose(),U.dispose(),ye.dispose(),Xe.dispose(),Y.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",pn),fe.removeEventListener("sessionend",yl),si.stop()};function ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=j.autoReset,z=Ce.enabled,K=Ce.autoUpdate,Q=Ce.needsUpdate,H=Ce.type;N(),j.autoReset=w,Ce.enabled=z,Ce.autoUpdate=K,Ce.needsUpdate=Q,Ce.type=H}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let z=w.target;z.removeEventListener("dispose",ce),Ue(z)}function Ue(w){Ye(w),J.remove(w)}function Ye(w){let z=J.get(w).programs;z!==void 0&&(z.forEach(function(K){Y.releaseProgram(K)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,K,Q,H,pe){z===null&&(z=_e);let Te=H.isMesh&&H.matrixWorld.determinant()<0,Oe=rd(w,z,K,Q,H);G.setMaterial(Q,Te);let De=K.index,We=1;if(Q.wireframe===!0){if(De=v.getWireframeAttribute(K),De===void 0)return;We=2}let qe=K.drawRange,ke=K.attributes.position,Qe=qe.start*We,rt=(qe.start+qe.count)*We;pe!==null&&(Qe=Math.max(Qe,pe.start*We),rt=Math.min(rt,(pe.start+pe.count)*We)),De!==null?(Qe=Math.max(Qe,0),rt=Math.min(rt,De.count)):ke!=null&&(Qe=Math.max(Qe,0),rt=Math.min(rt,ke.count));let gt=rt-Qe;if(gt<0||gt===1/0)return;ye.setup(H,Q,Oe,K,De);let ct,at=xe;if(De!==null&&(ct=R.get(De),at=Fe,at.setIndex(ct)),H.isMesh)Q.wireframe===!0?(G.setLineWidth(Q.wireframeLinewidth*ae()),at.setMode(A.LINES)):at.setMode(A.TRIANGLES);else if(H.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),G.setLineWidth(Ge*ae()),H.isLineSegments?at.setMode(A.LINES):H.isLineLoop?at.setMode(A.LINE_LOOP):at.setMode(A.LINE_STRIP)}else H.isPoints?at.setMode(A.POINTS):H.isSprite&&at.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ge=H._multiDrawStarts,ut=H._multiDrawCounts,tt=H._multiDrawCount,Ot=De?R.get(De).bytesPerElement:1,Ui=J.get(Q).currentProgram.getUniforms();for(let Bt=0;Bt<tt;Bt++)Ui.setValue(A,"_gl_DrawID",Bt),at.render(Ge[Bt]/Ot,ut[Bt])}else if(H.isInstancedMesh)at.renderInstances(Qe,gt,H.count);else if(K.isInstancedBufferGeometry){let Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ut=Math.min(K.instanceCount,Ge);at.renderInstances(Qe,gt,ut)}else at.render(Qe,gt)};function ot(w,z,K){w.transparent===!0&&w.side===$t&&w.forceSinglePass===!1?(w.side=Dt,w.needsUpdate=!0,gr(w,z,K),w.side=In,w.needsUpdate=!0,gr(w,z,K),w.side=$t):gr(w,z,K)}this.compile=function(w,z,K=null){K===null&&(K=w),f=Ae.get(K),f.init(z),y.push(f),K.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),w!==K&&w.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();let Q=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){let Oe=pe[Te];ot(Oe,K,H),Q.add(Oe)}else ot(pe,K,H),Q.add(pe)}),f=y.pop(),Q},this.compileAsync=function(w,z,K=null){let Q=this.compile(w,z,K);return new Promise(H=>{function pe(){if(Q.forEach(function(Te){J.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){H(w);return}setTimeout(pe,10)}B.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let nt=null;function bn(w){nt&&nt(w)}function pn(){si.stop()}function yl(){si.start()}let si=new _u;si.setAnimationLoop(bn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(w){nt=w,fe.setAnimationLoop(w),w===null?si.stop():si.start()},fe.addEventListener("sessionstart",pn),fe.addEventListener("sessionend",yl),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,z,I),f=Ae.get(w,y.length),f.init(z),y.push(f),ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ee.setFromProjectionMatrix(ie,sn,z.reversedDepth),te=this.localClippingEnabled,Ie=de.init(this.clippingPlanes,te),m=$.get(w,E.length),m.init(),E.push(m),fe.enabled===!0&&fe.isPresenting===!0){let pe=x.xr.getDepthSensingMesh();pe!==null&&Ao(pe,z,-1/0,x.sortObjects)}Ao(w,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ee,Z),Ve=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ve&&we.addToRenderList(m,w),this.info.render.frame++,Ie===!0&&de.beginShadows();let K=f.state.shadowsArray;Ce.render(K,w,z),Ie===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,H=m.transmissive;if(f.setupLights(),z.isArrayCamera){let pe=z.cameras;if(H.length>0)for(let Te=0,Oe=pe.length;Te<Oe;Te++){let De=pe[Te];Sl(Q,H,w,De)}Ve&&we.render(w);for(let Te=0,Oe=pe.length;Te<Oe;Te++){let De=pe[Te];Ml(m,w,De,De.viewport)}}else H.length>0&&Sl(Q,H,w,z),Ve&&we.render(w),Ml(m,w,z);I!==null&&T===0&&(ne.updateMultisampleRenderTarget(I),ne.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,z),ye.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Ie===!0&&de.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ao(w,z,K,Q){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ee.intersectsSprite(w)){Q&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);let Te=U.update(w),Oe=w.material;Oe.visible&&m.push(w,Te,Oe,K,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ee.intersectsObject(w))){let Te=U.update(w),Oe=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Re.copy(Te.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Oe)){let De=Te.groups;for(let We=0,qe=De.length;We<qe;We++){let ke=De[We],Qe=Oe[ke.materialIndex];Qe&&Qe.visible&&m.push(w,Te,Qe,K,Re.z,ke)}}else Oe.visible&&m.push(w,Te,Oe,K,Re.z,null)}}let pe=w.children;for(let Te=0,Oe=pe.length;Te<Oe;Te++)Ao(pe[Te],z,K,Q)}function Ml(w,z,K,Q){let H=w.opaque,pe=w.transmissive,Te=w.transparent;f.setupLightsView(K),Ie===!0&&de.setGlobalState(x.clippingPlanes,K),Q&&G.viewport(L.copy(Q)),H.length>0&&mr(H,z,K),pe.length>0&&mr(pe,z,K),Te.length>0&&mr(Te,z,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Sl(w,z,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new gn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?os:un,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let pe=f.state.transmissionRenderTarget[Q.id],Te=Q.viewport||L;pe.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);let Oe=x.getRenderTarget(),De=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(pe),x.getClearColor(V),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&we.render(K);let qe=x.toneMapping;x.toneMapping=Nn;let ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),Ie===!0&&de.setGlobalState(x.clippingPlanes,Q),mr(w,K,Q),ne.updateMultisampleRenderTarget(pe),ne.updateRenderTargetMipmap(pe),B.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let rt=0,gt=z.length;rt<gt;rt++){let ct=z[rt],at=ct.object,Ge=ct.geometry,ut=ct.material,tt=ct.group;if(ut.side===$t&&at.layers.test(Q.layers)){let Ot=ut.side;ut.side=Dt,ut.needsUpdate=!0,bl(at,K,Q,Ge,ut,tt),ut.side=Ot,ut.needsUpdate=!0,Qe=!0}}Qe===!0&&(ne.updateMultisampleRenderTarget(pe),ne.updateRenderTargetMipmap(pe))}x.setRenderTarget(Oe,De,We),x.setClearColor(V,k),ke!==void 0&&(Q.viewport=ke),x.toneMapping=qe}function mr(w,z,K){let Q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,pe=w.length;H<pe;H++){let Te=w[H],Oe=Te.object,De=Te.geometry,We=Te.group,qe=Te.material;qe.allowOverride===!0&&Q!==null&&(qe=Q),Oe.layers.test(K.layers)&&bl(Oe,z,K,De,qe,We)}}function bl(w,z,K,Q,H,pe){w.onBeforeRender(x,z,K,Q,H,pe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,z,K,Q,w,pe),H.transparent===!0&&H.side===$t&&H.forceSinglePass===!1?(H.side=Dt,H.needsUpdate=!0,x.renderBufferDirect(K,z,Q,H,w,pe),H.side=In,H.needsUpdate=!0,x.renderBufferDirect(K,z,Q,H,w,pe),H.side=$t):x.renderBufferDirect(K,z,Q,H,w,pe),w.onAfterRender(x,z,K,Q,H,pe)}function gr(w,z,K){z.isScene!==!0&&(z=_e);let Q=J.get(w),H=f.state.lights,pe=f.state.shadowsArray,Te=H.state.version,Oe=Y.getParameters(w,H.state,pe,z,K),De=Y.getProgramCacheKey(Oe),We=Q.programs;Q.environment=w.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(w.isMeshStandardMaterial?Se:Ne).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",ce),We=new Map,Q.programs=We);let qe=We.get(De);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===Te)return wl(w,Oe),qe}else Oe.uniforms=Y.getUniforms(w),w.onBeforeCompile(Oe,x),qe=Y.acquireProgram(Oe,De),We.set(De,qe),Q.uniforms=Oe.uniforms;let ke=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=de.uniform),wl(w,Oe),Q.needsLights=od(w),Q.lightsStateVersion=Te,Q.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function El(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=ds.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function wl(w,z){let K=J.get(w);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function rd(w,z,K,Q,H){z.isScene!==!0&&(z=_e),ne.resetTextureUnits();let pe=z.fog,Te=Q.isMeshStandardMaterial?z.environment:null,Oe=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fi,De=(Q.isMeshStandardMaterial?Se:Ne).get(Q.envMap||Te),We=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,rt=!!K.morphAttributes.color,gt=Nn;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=x.toneMapping);let ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,at=ct!==void 0?ct.length:0,Ge=J.get(Q),ut=f.state.lights;if(Ie===!0&&(te===!0||w!==M)){let It=w===M&&Q.id===S;de.setState(Q,w,It)}let tt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ut.state.version||Ge.outputColorSpace!==Oe||H.isBatchedMesh&&Ge.batching===!1||!H.isBatchedMesh&&Ge.batching===!0||H.isBatchedMesh&&Ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ge.instancing===!1||!H.isInstancedMesh&&Ge.instancing===!0||H.isSkinnedMesh&&Ge.skinning===!1||!H.isSkinnedMesh&&Ge.skinning===!0||H.isInstancedMesh&&Ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ge.instancingMorph===!1&&H.morphTexture!==null||Ge.envMap!==De||Q.fog===!0&&Ge.fog!==pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==de.numPlanes||Ge.numIntersection!==de.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==qe||Ge.morphTargets!==ke||Ge.morphNormals!==Qe||Ge.morphColors!==rt||Ge.toneMapping!==gt||Ge.morphTargetsCount!==at)&&(tt=!0):(tt=!0,Ge.__version=Q.version);let Ot=Ge.currentProgram;tt===!0&&(Ot=gr(Q,z,H));let Ui=!1,Bt=!1,Ms=!1,dt=Ot.getUniforms(),qt=Ge.uniforms;if(G.useProgram(Ot.program)&&(Ui=!0,Bt=!0,Ms=!0),Q.id!==S&&(S=Q.id,Bt=!0),Ui||M!==w){G.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",w.projectionMatrix),dt.setValue(A,"viewMatrix",w.matrixWorldInverse);let Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,me.setFromMatrixPosition(w.matrixWorld)),X.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&dt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Bt=!0,Ms=!0)}if(H.isSkinnedMesh){dt.setOptional(A,H,"bindMatrix"),dt.setOptional(A,H,"bindMatrixInverse");let It=H.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(A,"boneTexture",It.boneTexture,ne))}H.isBatchedMesh&&(dt.setOptional(A,H,"batchingTexture"),dt.setValue(A,"batchingTexture",H._matricesTexture,ne),dt.setOptional(A,H,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",H._indirectTexture,ne),dt.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",H._colorsTexture,ne));let Yt=K.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&le.update(H,K,Ot),(Bt||Ge.receiveShadow!==H.receiveShadow)&&(Ge.receiveShadow=H.receiveShadow,dt.setValue(A,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(qt.envMap.value=De,qt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(qt.envMapIntensity.value=z.environmentIntensity),Bt&&(dt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&ad(qt,Ms),pe&&Q.fog===!0&&se.refreshFogUniforms(qt,pe),se.refreshMaterialUniforms(qt,Q,q,re,f.state.transmissionRenderTarget[w.id]),ds.upload(A,El(Ge),qt,ne)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ds.upload(A,El(Ge),qt,ne),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&dt.setValue(A,"center",H.center),dt.setValue(A,"modelViewMatrix",H.modelViewMatrix),dt.setValue(A,"normalMatrix",H.normalMatrix),dt.setValue(A,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let It=Q.uniformsGroups;for(let Ut=0,Ro=It.length;Ut<Ro;Ut++){let ri=It[Ut];Xe.update(ri,Ot),Xe.bind(ri,Ot)}}return Ot}function ad(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function od(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,z,K){let Q=J.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=z,J.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let K=J.get(w);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};let cd=A.createFramebuffer();this.setRenderTarget=function(w,z=0,K=0){I=w,b=z,T=K;let Q=!0,H=null,pe=!1,Te=!1;if(w){let De=J.get(w);if(De.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(A.FRAMEBUFFER,null),Q=!1;else if(De.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(De.__hasExternalTextures)ne.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ke=w.depthTexture;if(De.__boundDepthTexture!==ke){if(ke!==null&&J.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);let qe=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?H=qe[z][K]:H=qe[z],pe=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?H=J.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[K]:H=qe,L.copy(w.viewport),D.copy(w.scissor),F=w.scissorTest}else L.copy(oe).multiplyScalar(q).floor(),D.copy(ge).multiplyScalar(q).floor(),F=Pe;if(K!==0&&(H=cd),G.bindFramebuffer(A.FRAMEBUFFER,H)&&Q&&G.drawBuffers(w,H),G.viewport(L),G.scissor(D),G.setScissorTest(F),pe){let De=J.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,K)}else if(Te){let De=z;for(let We=0;We<w.textures.length;We++){let qe=J.get(w.textures[We]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+We,qe.__webglTexture,K,De)}}else if(w!==null&&K!==0){let De=J.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,De.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(w,z,K,Q,H,pe,Te,Oe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){G.bindFramebuffer(A.FRAMEBUFFER,De);try{let We=w.textures[Oe],qe=We.format,ke=We.type;if(!X.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Q&&K>=0&&K<=w.height-H&&(w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Oe),A.readPixels(z,K,Q,H,be.convert(qe),be.convert(ke),pe))}finally{let We=I!==null?J.get(I).__webglFramebuffer:null;G.bindFramebuffer(A.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,z,K,Q,H,pe,Te,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De)if(z>=0&&z<=w.width-Q&&K>=0&&K<=w.height-H){G.bindFramebuffer(A.FRAMEBUFFER,De);let We=w.textures[Oe],qe=We.format,ke=We.type;if(!X.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.bufferData(A.PIXEL_PACK_BUFFER,pe.byteLength,A.STREAM_READ),w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Oe),A.readPixels(z,K,Q,H,be.convert(qe),be.convert(ke),0);let rt=I!==null?J.get(I).__webglFramebuffer:null;G.bindFramebuffer(A.FRAMEBUFFER,rt);let gt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await kh(A,gt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Qe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pe),A.deleteBuffer(Qe),A.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,K=0){let Q=Math.pow(2,-K),H=Math.floor(w.image.width*Q),pe=Math.floor(w.image.height*Q),Te=z!==null?z.x:0,Oe=z!==null?z.y:0;ne.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,K,0,0,Te,Oe,H,pe),G.unbindTexture()};let ld=A.createFramebuffer(),hd=A.createFramebuffer();this.copyTextureToTexture=function(w,z,K=null,Q=null,H=0,pe=null){pe===null&&(H!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=H,H=0):pe=0);let Te,Oe,De,We,qe,ke,Qe,rt,gt,ct=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(K!==null)Te=K.max.x-K.min.x,Oe=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,qe=K.min.y,ke=K.isBox3?K.min.z:0;else{let Yt=Math.pow(2,-H);Te=Math.floor(ct.width*Yt),Oe=Math.floor(ct.height*Yt),w.isDataArrayTexture?De=ct.depth:w.isData3DTexture?De=Math.floor(ct.depth*Yt):De=1,We=0,qe=0,ke=0}Q!==null?(Qe=Q.x,rt=Q.y,gt=Q.z):(Qe=0,rt=0,gt=0);let at=be.convert(z.format),Ge=be.convert(z.type),ut;z.isData3DTexture?(ne.setTexture3D(z,0),ut=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ne.setTexture2DArray(z,0),ut=A.TEXTURE_2D_ARRAY):(ne.setTexture2D(z,0),ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);let tt=A.getParameter(A.UNPACK_ROW_LENGTH),Ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ui=A.getParameter(A.UNPACK_SKIP_PIXELS),Bt=A.getParameter(A.UNPACK_SKIP_ROWS),Ms=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke);let dt=w.isDataArrayTexture||w.isData3DTexture,qt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Yt=J.get(w),It=J.get(z),Ut=J.get(Yt.__renderTarget),Ro=J.get(It.__renderTarget);G.bindFramebuffer(A.READ_FRAMEBUFFER,Ut.__webglFramebuffer),G.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let ri=0;ri<De;ri++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,J.get(w).__webglTexture,H,ke+ri),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,J.get(z).__webglTexture,pe,gt+ri)),A.blitFramebuffer(We,qe,Te,Oe,Qe,rt,Te,Oe,A.DEPTH_BUFFER_BIT,A.NEAREST);G.bindFramebuffer(A.READ_FRAMEBUFFER,null),G.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||J.has(w)){let Yt=J.get(w),It=J.get(z);G.bindFramebuffer(A.READ_FRAMEBUFFER,ld),G.bindFramebuffer(A.DRAW_FRAMEBUFFER,hd);for(let Ut=0;Ut<De;Ut++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Yt.__webglTexture,H,ke+Ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Yt.__webglTexture,H),qt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,pe,gt+Ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,pe),H!==0?A.blitFramebuffer(We,qe,Te,Oe,Qe,rt,Te,Oe,A.COLOR_BUFFER_BIT,A.NEAREST):qt?A.copyTexSubImage3D(ut,pe,Qe,rt,gt+Ut,We,qe,Te,Oe):A.copyTexSubImage2D(ut,pe,Qe,rt,We,qe,Te,Oe);G.bindFramebuffer(A.READ_FRAMEBUFFER,null),G.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qt?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(ut,pe,Qe,rt,gt,Te,Oe,De,at,Ge,ct.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(ut,pe,Qe,rt,gt,Te,Oe,De,at,ct.data):A.texSubImage3D(ut,pe,Qe,rt,gt,Te,Oe,De,at,Ge,ct):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pe,Qe,rt,Te,Oe,at,Ge,ct.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pe,Qe,rt,ct.width,ct.height,at,ct.data):A.texSubImage2D(A.TEXTURE_2D,pe,Qe,rt,Te,Oe,at,Ge,ct);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ui),A.pixelStorei(A.UNPACK_SKIP_ROWS,Bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ms),pe===0&&z.generateMipmaps&&A.generateMipmap(ut),G.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),G.unbindTexture()},this.resetState=function(){b=0,T=0,I=null,G.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function po(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let E=0,y=o.length;E<y;E++){let x=o[E],C=i.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let b=i.morphAttributes[x];b&&(c[x]||(c[x]=[]),b.forEach((T,I)=>{let S=new T.array.constructor(T.count*T.itemSize);c[x][I]=new T.constructor(S,T.itemSize,T.normalized)}))}let d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let E=0;E<r;E++){let y=n?n.getX(E):E,x="";for(let C=0,b=o.length;C<b;C++){let T=o[C],I=i.getAttribute(T),S=I.itemSize;for(let M=0;M<S;M++)x+=`${~~(I[u[M]](y)*_+m)},`}if(x in t)h.push(t[x]);else{for(let C=0,b=o.length;C<b;C++){let T=o[C],I=i.getAttribute(T),S=i.morphAttributes[T],M=I.itemSize,L=l[T],D=c[T];for(let F=0;F<M;F++){let V=u[F],k=p[F];if(L[k](a,I[V](y)),S)for(let W=0,re=S.length;W<re;W++)D[W][k](a,S[W][V](y))}}t[x]=a,h.push(a),a++}}let f=i.clone();for(let E in i.attributes){let y=l[E];if(f.setAttribute(E,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),E in c)for(let x=0;x<c[E].length;x++){let C=c[E][x];f.morphAttributes[E][x]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(h),f}var a_={current:{name:"A \xB7 Schlanker Vergleich",outer:8,inset:6,corner:10,bevel:5,depth:22},soft:{name:"B \xB7 Modelliertes Elfenbein",outer:11,inset:6,corner:23,bevel:5,depth:26},plush:{name:"C \xB7 Warmer Formguss",outer:13,inset:6,corner:27,bevel:5,depth:28}},o_=(i,e)=>[i-e,i+e,i%e?i-1:-1,i%e<e-1?i+1:-1].filter(t=>t>=0&&t<e*e);function jc(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[t.values().next().value];t.delete(s[0]);for(let r=0;r<s.length;r++)for(let a of o_(s[r],e))t.delete(a)&&s.push(a);n.push(s)}return n}function Qc(i,e,t){let n=new Set(i),s=[],r=(o,l)=>o>=0&&o<e&&l>=0&&l<e&&n.has(l*e+o);for(let o of n){let l=o%e,c=o/e|0,h=l*t,u=c*t;r(l,c-1)||s.push([[h,u],[h+t,u]]),r(l+1,c)||s.push([[h+t,u],[h+t,u+t]]),r(l,c+1)||s.push([[h+t,u+t],[h,u+t]]),r(l-1,c)||s.push([[h,u+t],[h,u]])}let a=[];for(;s.length;){let o=s.shift(),l=o[0],c=o[1],h=l,u=[l];for(;c[0]!==l[0]||c[1]!==l[1];){u.push(c);let p=[];for(let d=0;d<s.length;d++)if(s[d][0][0]===c[0]&&s[d][0][1]===c[1]){let g=c[0]-h[0],_=c[1]-h[1],m=s[d][1][0]-c[0],f=s[d][1][1]-c[1],E=g*f-_*m,y=g*m+_*f;p.push({k:d,rank:E>0?0:y>0?1:E<0?2:3})}if(!p.length)throw Error("Open frame contour");p.sort((d,g)=>d.rank-g.rank),h=c,c=s.splice(p[0].k,1)[0][1]}u=u.filter((p,d)=>{let g=u[(d+u.length-1)%u.length],_=u[(d+1)%u.length];return!(g[0]===p[0]&&p[0]===_[0]||g[1]===p[1]&&p[1]===_[1])}),a.push(u.map(([p,d])=>new he(p,-d)))}return a.sort((o,l)=>Math.abs(rn.area(l))-Math.abs(rn.area(o)))}function ps(i,e){let t=rn.area(i)>0?1:-1;return i.map((n,s)=>{let r=i[(s+i.length-1)%i.length],a=i[(s+1)%i.length],o=n.clone().sub(r).normalize(),l=a.clone().sub(n).normalize(),c=new he(o.y,-o.x).add(new he(l.y,-l.x)).multiplyScalar(t).normalize(),h=new he(o.y,-o.x).multiplyScalar(t);return n.clone().add(c.multiplyScalar(e/Math.max(.25,c.dot(h))))})}function ti(i,e){let t=new Vt;return i.forEach((n,s)=>{let r=i[(s+i.length-1)%i.length],a=i[(s+1)%i.length],o=Math.min(e,n.distanceTo(r)*.45,n.distanceTo(a)*.45),l=n.clone().add(r.clone().sub(n).normalize().multiplyScalar(o)),c=n.clone().add(a.clone().sub(n).normalize().multiplyScalar(o));s?t.lineTo(l.x,l.y):t.moveTo(l.x,l.y),t.quadraticCurveTo(n.x,n.y,c.x,c.y)}),t.closePath(),t}function Su(i,e,t,n){i.color.set("#ffffff"),i.onBeforeCompile=s=>{s.uniforms.ivoryPits={value:n},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 ivoryPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
ivoryPosition = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 ivoryPosition;
 ${n.length?`uniform vec4 ivoryPits[${n.length}];`:""}
 float ivoryNoise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ivorySoftNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(ivoryNoise(i),ivoryNoise(i+vec2(1,0)),f.x),mix(ivoryNoise(i+vec2(0,1)),ivoryNoise(i+vec2(1,1)),f.x),f.y);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
 float heightTone=smoothstep(${-e.depth-e.bevel}.0, 3.0, ivoryPosition.z);
 float shoulderTone=smoothstep(${-e.bevel+3}.0, 3.0, ivoryPosition.z);
 vec3 warmBase=mix(vec3(0.62,0.44,0.26),vec3(0.82,0.67,0.46),heightTone);
 vec3 ivoryTop=${t==="plush"?"vec3(0.92,0.79,0.58)":"vec3(0.95,0.84,0.65)"};
 vec3 casting=mix(warmBase,ivoryTop,shoulderTone);
 float pitDistance=10000.0;
 ${n.length?`for(int i=0;i<${n.length};i++){vec2 q=abs(ivoryPosition.xy-ivoryPits[i].xy)-ivoryPits[i].zw+vec2(12.0);float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-12.0;pitDistance=min(pitDistance,d);}`:""}
 float recess=(1.0-smoothstep(-2.0,17.0,pitDistance))*shoulderTone;
 casting=mix(casting,vec3(.72,.55,.33),recess*.25);
 float clouds=ivorySoftNoise(ivoryPosition.xy*.035)*.65+ivorySoftNoise(ivoryPosition.xy*.12)*.35;
 casting*=mix(.92,1.04,clouds);
 float pores=ivorySoftNoise(ivoryPosition.xy*1.8);
 casting*=1.0-${t==="plush"?".075":".045"}*pores;
 diffuseColor.rgb*=casting;
 `)},i.customProgramCacheKey=()=>`ivory-casting-${t}-${e.depth}-${e.bevel}-${n.length}`}function mo({n:i,cells:e,water:t=[],lava:n=[],stones:s=[],style:r="soft",pitch:a=80}={}){let o=a_[r];if(!o)throw Error("Unknown ivory style");let l=new Set(e);if(!Number.isInteger(i)||i<1||!e.length||e.some(x=>!Number.isInteger(x)||x<0||x>=i*i))throw Error("Invalid frame cells");let c=[...t,...n,...s];if(new Set(c).size!==c.length||c.some(x=>!l.has(x)))throw Error("Invalid obstacle cells");let h=new Uint8Array(16384*4),u=375;for(let x=0;x<16384;x++){u=u*1664525+1013904223>>>0;let C=110+(u>>>24)*.16;h.set([C,C,C,255],x*4)}let p=new _n(h,128,128);p.wrapS=p.wrapT=Ji,p.magFilter=p.minFilter=Et,p.needsUpdate=!0;let d=new Ze,g=[],_=[],m=new it({color:r==="plush"?"#f3dcb3":"#f7e5c3",roughness:.88,bumpMap:p,bumpScale:r==="current"?.12:.65}),f=new it({color:"#d4ad7d",roughness:.9,bumpMap:p,bumpScale:.45});if(r!=="current"){let x=c.map(C=>new ht(C%i*a+a/2,-(Math.floor(C/i)*a+a/2),a/2-o.inset,a/2-o.inset));Su(m,o,r,x),Su(f,o,r,x)}for(let x of jc(e,i)){let C=new Set(x),b=Qc(x,i,a),T=[],I=ti(ps(b[0],o.outer),o.corner);for(let S of b.slice(1))I.holes.push(ti(ps(S,-o.outer),o.corner));for(let[S,M]of[["water",t],["lava",n]])for(let L of jc(M.filter(D=>C.has(D)),i)){let D=Qc(L,i,a),F=ti(ps(D[0],-o.inset).reverse(),16);I.holes.push(F);for(let k of D.slice(1))T.push(ti(ps(k,o.inset),16));let V=ti(ps(D[0],-o.inset+o.bevel),16+o.bevel);for(let k of D.slice(1))V.holes.push(ti(ps(k,o.inset-o.bevel),16+o.bevel));g.push({type:S,cells:L,shape:V,rimShape:F,surfaceZ:-20})}for(let S of[I,...T]){let M=new Rt(S,{depth:o.depth,bevelEnabled:!0,bevelThickness:o.bevel,bevelSize:o.bevel,bevelSegments:16,curveSegments:24,steps:1});M.translate(0,0,-o.depth-o.bevel+3);let L=M.attributes.position,D=M.attributes.uv;for(let k=0;k<L.count;k++){let W=L.getX(k),re=L.getY(k),q=L.getZ(k),ee=r==="current"?0:Math.sin(W*.043+re*.017)*.55+Math.sin(re*.067-W*.023)*.38;L.setZ(k,q+ee),D.setXY(k,W/90,re/90)}M.deleteAttribute("normal");let F=po(M,.001);M.dispose(),M=F,M.computeVertexNormals(),_.push(M);let V=new Be(M,[m,f]);V.castShadow=V.receiveShadow=!0,d.add(V)}}let E=new Set(c),y=jc(e.filter(x=>!E.has(x)),i).map(x=>{let C=Qc(x,i,a),b=ti(C[0],10);for(let T of C.slice(1))b.holes.push(ti(T,10));return b});return d.userData={style:r,pitch:a,walkable:!1,spec:{...o}},{group:d,openings:g,walkableShapes:y,spec:o,dispose(){_.forEach(x=>x.dispose()),m.dispose(),f.dispose(),p.dispose()}}}var ur=new P;function jt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ur.copy(e),ur[n]=0,ur.normalize();let c=.5*a/(a+o),h=1-ur.angleTo(i)/l;return Math.sign(ur[t])===1?h*c:o/(a+o)+c+c*(1-h)}var ni=class i extends Jn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new P,m=.5/a;for(let f=0,E=0;f<u.length;f+=3,E+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),d[E+0]=jt(_,c,"z","y",r,n),d[E+1]=1-jt(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[E+0]=1-jt(_,c,"z","y",r,n),d[E+1]=1-jt(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[E+0]=1-jt(_,c,"x","z",r,e),d[E+1]=jt(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[E+0]=1-jt(_,c,"x","z",r,e),d[E+1]=1-jt(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[E+0]=1-jt(_,c,"x","y",r,e),d[E+1]=1-jt(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[E+0]=jt(_,c,"x","y",r,e),d[E+1]=1-jt(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var c_=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),l_={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function h_(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let a=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=a,s.data[r+3]=255}return n.putImageData(s,0,0),new _i(t)}function go(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=l_[i];if(!n)throw Error("Unknown tile "+i);let s=new Ze,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=(d,g={})=>new it({color:d,roughness:.75,...g}),o=(d,g,_=0,m=0,f=0)=>{let E=new Be(d,g);return E.position.set(_,m,f),E.castShadow=E.receiveShadow=!0,s.add(E),E},l=a(n.color,{bumpMap:h_(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),c=n.height+3.5,h,u;if(n.kind==="earth"){let d=73.5,g=5,_=-d/2,m=d/2,f=new Vt;f.moveTo(_+g,_),f.lineTo(m-g,_),f.quadraticCurveTo(m,_,m,_+g),f.lineTo(m,m-g),f.quadraticCurveTo(m,m,m-g,m),f.lineTo(_+g,m),f.quadraticCurveTo(_,m,_,m-g),f.lineTo(_,_+g),f.quadraticCurveTo(_,_,_+g,_),f.closePath(),h=new Rt(f,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else h=new ni(78.5,78.5,c,4,7.5),u=(n.height-3.5)/2;let p=o(h,l,0,0,u);if(p.userData.surface=!0,!t)if(n.kind==="earth"){let d=[a("#c59b6b"),a("#98714c"),a("#dbb78a")];for(let g=0;g<n.pebbles;g++){let _=(r()-.5)*59,m=(r()-.5)*59,f=.8+r()*1.2,E=o(new mt(1,9,6),d[g%3],_,m,n.height-.25);E.scale.set(f*1.6,f,f*.55),E.rotation.z=r()*6}for(let g=0;g<22;g++){let _=o(new mt(1,8,6),l,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;_.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let d=[a("#d3f471"),a("#b1e443"),a("#87bf24")],g=(_,m,f)=>{let E=new Vt;return E.moveTo(-f,0),E.quadraticCurveTo(-f*.8,_*.6,m,_),E.quadraticCurveTo(f*1.1,_*.45,f,0),E.closePath(),new Rt(E,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let _=0;_<n.tufts;_++){let m=(r()-.5)*59,f=(r()-.5)*59;for(let E=0;E<3;E++){let y=n.bladeHeight*(.6+r()*.4),x=o(g(y,(E-1)*y*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),d[E],m+(E-1)*1.8,f,n.height-.15);x.rotation.x=Math.PI/2,x.rotateOnWorldAxis(new P(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let _=0;_<6;_++){let m=(r()-.5)*50,f=(r()-.5)*50;for(let E=0;E<3;E++){let y=E*Math.PI*2/3,x=o(new mt(1,12,8),d[_%2],m+Math.cos(y)*2.3,f+Math.sin(y)*2.3,n.height+1.7);x.scale.set(3.3,2.6,.9),x.rotation.z=y}}l.emissive.set("#4c790c"),l.emissiveIntensity=.055}else{let d=a("#9fc53b");for(let g=0;g<4;g++){let _=g*Math.PI/2+.3,m=o(new mt(1,12,8),d,21+Math.cos(_)*4,-20+Math.sin(_)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=_}}return n.kind!=="earth"&&n.kind!=="reference"&&(l.emissive.set("#4c790c"),l.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:c_},s}function el(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var u_={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function _o(i,{seed:e=73}={}){let t=u_[i];if(!t)throw Error("Unknown meadow "+i);let n=go("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(b=>b.userData.surface),r=new Ze;for(let b of[...n.children])b!==s&&r.add(b);el(r);let a=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=new mt(1,12,8),l=b=>new it({color:b,roughness:.75}),c=[l("#d3f471"),l("#b1e443"),l("#87bf24")],h=[],u=(b,T,I,S,M)=>{let L=new Be(b,T);return L.position.set(I,S,M),L.castShadow=L.receiveShadow=!0,n.add(L),L};function p(b,T,I,S,M=3.3,L=2.6){let D=u(o,c[1],b,T,I);return D.scale.set(M,L,.85),D.rotation.z=S,D}for(let b=0;b<t.clover;b++){let T=(a()-.5)*52,I=(a()-.5)*52;for(let S=0;S<3;S++){let M=S*Math.PI*2/3+a()*.12;p(T+Math.cos(M)*2.3,I+Math.sin(M)*2.3,19.7,M)}}function d(b,T,I){for(let S=0;S<3;S++){let M=new Vt,L=(S-1)*I*.35;M.moveTo(-1,0),M.quadraticCurveTo(-.8,I*.65,L,I),M.quadraticCurveTo(1,I*.45,1,0),M.closePath();let D=new Rt(M,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),F=u(D,c[S],b+(S-1)*1.6,T,17.8);F.rotation.x=Math.PI/2,F.rotateOnWorldAxis(new P(0,0,1),.6)}}for(let b=0;b<t.tufts;b++)d((a()-.5)*50,(a()-.5)*50,3.5+a()*1.8);t.tall&&d(20,-19,10);let g=l("#fff3c4"),_=l("#f6b7a0"),m=l("#efb52e"),f=l("#709e29"),E=l("#edbd43"),y=l("#63502a"),x=new it({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let b=0;b<(t.flowers||0);b++){let T=b?-16:16,I=b?-14:12,S=b?24:25.5,M=u(new cn(.6,.85,S-18,8),f,T,I,(18+S)/2);M.rotation.x=Math.PI/2;for(let D=0;D<5;D++){let F=D*Math.PI*2/5,V=u(o,b?_:g,T+Math.cos(F)*3,I+Math.sin(F)*3,S);V.scale.set(3.2,1.8,.8),V.rotation.z=F}if(u(o,m,T,I,S+.7).scale.set(1.9,1.9,1.2),p(T-2,I,20.5,-.5,3.2,1.4),t.insects)for(let D=0;D<t.insects;D++){let F=new Ze;n.add(F);let V=new Be(o,E);V.scale.set(.85,1.3,.8),F.add(V);let k=new Be(o,y);k.position.y=1.2,k.scale.setScalar(.6),F.add(k);let W=[];for(let re of[-1,1]){let q=new Be(o,x);q.position.set(re*1,0,.5),q.scale.set(1.8,.75,.25),q.rotation.z=re*.35,F.add(q),W.push(q)}h.push({insect:F,wings:W,x:T,y:I,phase:D*3.14,radius:8+D*2,z:S+5+D})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function C(b){for(let T of h){let I=b*.85+T.phase;T.insect.position.set(T.x+Math.cos(I)*T.radius,T.y+Math.sin(I)*T.radius*.65,T.z+Math.sin(b*1.8+T.phase)*1.2),T.insect.rotation.z=I,T.wings.forEach((S,M)=>S.rotation.y=Math.sin(b*28)*(M?1:-1)*.45)}}return C(0),{group:n,update:C,dispose(){el(n)}}}var bu={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function xo(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},a=new it({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),o=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",l=bu[i]?.[n]||o;return a.onBeforeCompile=c=>{c.uniforms.uLiquidTime=r,c.uniforms.uLiquidCenter={value:new he(...t)},c.vertexShader=`varying vec2 vLiquidXY;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),c.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${l}`)},a.customProgramCacheKey=()=>i+"-"+n+"-2",{material:a,update(c){r.value=e?c:0},dispose(){a.dispose()},type:i}}var vo=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new P,r=new P,a=new P,o=new P,l=[s,r,a,o],c=new P,h=new P,u=new P,p=new P,d=[c,h,u,p],g=new ze,_=new ze,m=new ze,f=new ze,E=[g,_,m,f],y=new he,x=new he,C=new he,b=new he,T=[y,x,C,b],I=new he,S=new he,M=new he,L=new he,D=[I,S,M,L],F=e.attributes,V=F.normal!==void 0,k=F.color!==void 0,W=F.uv!==void 0,re=F.uv1!==void 0,q=F.position.array,ee=V?F.normal.array:null,Z=k?F.color.array:null,oe=W?F.uv.array:null,ge=re?F.uv1.array:null,Pe=q,Ee=ee,Ie=Z,te=oe,ie=ge,me=0,Re=!0;function _e(ae,A,O){let B=l[ae],X=l[A],G=l[O];if(Pe.push(B.x,B.y,B.z),Pe.push(X.x,X.y,X.z),Pe.push(G.x,G.y,G.z),V){let j=d[ae],J=d[A],ne=d[O];Ee.push(j.x,j.y,j.z),Ee.push(J.x,J.y,J.z),Ee.push(ne.x,ne.y,ne.z)}if(k){let j=E[ae],J=E[A],ne=E[O];Ie.push(j.r,j.g,j.b),Ie.push(J.r,J.g,J.b),Ie.push(ne.r,ne.g,ne.b)}if(W){let j=T[ae],J=T[A],ne=T[O];te.push(j.x,j.y),te.push(J.x,J.y),te.push(ne.x,ne.y)}if(re){let j=D[ae],J=D[A],ne=D[O];ie.push(j.x,j.y),ie.push(J.x,J.y),ie.push(ne.x,ne.y)}}for(;Re&&me<t;){me++,Re=!1,q=Pe,Pe=[],V&&(ee=Ee,Ee=[]),k&&(Z=Ie,Ie=[]),W&&(oe=te,te=[]),re&&(ge=ie,ie=[]);for(let ae=0,A=0,O=q.length;ae<O;ae+=9,A+=6){s.fromArray(q,ae+0),r.fromArray(q,ae+3),a.fromArray(q,ae+6),V&&(c.fromArray(ee,ae+0),h.fromArray(ee,ae+3),u.fromArray(ee,ae+6)),k&&(g.fromArray(Z,ae+0),_.fromArray(Z,ae+3),m.fromArray(Z,ae+6)),W&&(y.fromArray(oe,A+0),x.fromArray(oe,A+2),C.fromArray(oe,A+4)),re&&(I.fromArray(ge,A+0),S.fromArray(ge,A+2),M.fromArray(ge,A+4));let B=s.distanceToSquared(r),X=r.distanceToSquared(a),G=s.distanceToSquared(a);B>n||X>n||G>n?(Re=!0,B>=X&&B>=G?(o.lerpVectors(s,r,.5),V&&p.lerpVectors(c,h,.5),k&&f.lerpColors(g,_,.5),W&&b.lerpVectors(y,x,.5),re&&L.lerpVectors(I,S,.5),_e(0,3,2),_e(3,1,2)):X>=B&&X>=G?(o.lerpVectors(r,a,.5),V&&p.lerpVectors(h,u,.5),k&&f.lerpColors(_,m,.5),W&&b.lerpVectors(x,C,.5),re&&L.lerpVectors(S,M,.5),_e(0,1,3),_e(3,2,0)):(o.lerpVectors(s,a,.5),V&&p.lerpVectors(c,u,.5),k&&f.lerpColors(g,m,.5),W&&b.lerpVectors(y,C,.5),re&&L.lerpVectors(I,M,.5),_e(0,1,3),_e(3,1,2))):_e(0,1,2)}}let Ve=new _t;return Ve.setAttribute("position",new Ke(Pe,3)),V&&Ve.setAttribute("normal",new Ke(Ee,3)),k&&Ve.setAttribute("color",new Ke(Ie,3)),W&&Ve.setAttribute("uv",new Ke(te,2)),re&&Ve.setAttribute("uv1",new Ke(ie,2)),Ve}};var d_={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},dr=Wt.clamp;function f_(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],a=dr(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*a,e-t[1]-r*a)}var p_=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function Eu(i,e,t){if(i==="split"){let n=Math.min(...p_.map(([s,r])=>f_(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let a=0;a<s;a++){let o=.25+a*Math.PI*2/s,l=e*Math.cos(o)+t*Math.sin(o),c=-e*Math.sin(o)+t*Math.cos(o),h=((l-10)/8.5)**2+(c/(s===6?3.2:4.7))**2;n=Math.max(n,dr((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,a]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let o=Math.hypot(e-s,t-r)/a;n=Math.max(n,Math.max(0,1-o*o)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function wu(i="fossil",{seed:e=73}={}){if(!d_[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Ze,s=256,r=new Uint8Array(s*s*4),a=new Uint8Array(s*s*4),o=e>>>0,l=()=>(o=o*1664525+1013904223>>>0)/4294967296;for(let f=0;f<s;f++)for(let E=0;E<s;E++){let y=(E/(s-1)-.5)*66,x=(f/(s-1)-.5)*66,C=Eu(i,y,x),b=Math.sin(y*.18+x*.11)*Math.sin(x*.21-y*.07),T=l()-.5,I=1+b*(t?.004:.015)+T*(t?.025:.065)-C.ink,S=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],M=(f*s+E)*4;for(let D=0;D<3;D++)r[M+D]=dr(S[D]*I+(220-S[D])*C.vein,0,255);r[M+3]=255;let L=dr(138+T*(t?4:12)+b-C.cut*28,0,255);a.set([L,L,L,255],M)}let c=new _n(r,s,s);c.colorSpace=bt;let h=new _n(a,s,s);for(let f of[c,h])f.magFilter=f.minFilter=Et,f.needsUpdate=!0;let u=new it({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:c,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(u.onBeforeCompile=f=>{let E=new ze(t?"#9e9688":i==="split"?"#978f80":"#999182");f.vertexShader=`varying float stoneTop;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),f.fragmentShader=`varying float stoneTop;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${E.r},${E.g},${E.b}),diffuseColor.rgb,stoneTop);`)}),u.customProgramCacheKey=()=>`slink-stone-top-${i}`;let p=new ni(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let f=new vo(3.5,10).modify(p);p.dispose(),p=f}p.translate(0,0,10);let d=p.attributes.position,g=p.attributes.uv;for(let f=0;f<d.count;f++){let E=d.getX(f),y=d.getY(f),x=d.getZ(f),C=dr((x-10)/16.5,0,1);if(i!=="reference"){let b=Math.max(0,1-(E*E+y*y)/1800),T=Math.sin(E*.13+y*.035)*Math.cos(y*.1)*(t?.12:.7),I=t?b*5:i==="split"?b*1.3-Math.max(0,E*.17+y*.09-2)*.6:b*.6;x+=(I+T-Eu(i,E,y).cut)*C}d.setZ(f,x),g.setXY(f,E/66+.5,y/66+.5)}p.deleteAttribute("normal");let _=po(p,1e-4);p.dispose(),p=_,p.computeVertexNormals();let m=new Be(p,u);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){p.dispose(),u.dispose(),c.dispose(),h.dispose()}}}var m_={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},g_={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function __(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,a])=>{if(!Number.isInteger(r)||!Number.isInteger(a)||r<0||a<0||r>=i*i||a>=i*i||Math.abs(r%i-a%i)+Math.abs(Math.floor(r/i)-Math.floor(a/i))!==1)throw Error("Fence requires side-adjacent cells");let o=[r,a].sort((h,u)=>h-u).join(":");if(s.has(o))return null;s.add(o);let l=n[0]+(r%i+a%i)*t/2,c=n[1]-(Math.floor(r/i)+Math.floor(a/i))*t/2;return{a:r,b:a,center:[l,c],ends:r%i===a%i?[[l-t/2,c],[l+t/2,c]]:[[l,c-t/2],[l,c+t/2]]}}).filter(Boolean)}function Tu({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:a="rails"}={}){if(!g_[a])throw Error("Unknown fence design");let o=m_[r];if(!o)throw Error("Unknown fence style");let l=new Ze;l.name="wood-fence";let c=__(i,e,{pitch:t,origin:n});l.userData={walls:c.map(f=>[f.a,f.b]),occupiedCells:[],style:r,design:a,pitch:t,baseZ:s};let h=new it({color:o.wood,roughness:.83}),u=new it({color:o.end,roughness:.8}),p=new it({color:o.grain,roughness:.95}),d=new it({color:"#665341",roughness:.7}),g=(f,E,y,x,C,b,T,I,S)=>{let M=new Be(new ni(E,y,x,3,C),b);return M.position.set(T,I,S),M.castShadow=M.receiveShadow=!0,f.add(M),M},_=(f,E,y=.12)=>{let x=new Be(new hn(new ln(E),16,y,4,!1),p);f.add(x)},m=new Map;for(let f of c){for(let[y,x]of f.ends){let C=y+":"+x;if(m.has(C))continue;let b=new Ze;if(b.name="fence-post",b.position.set(y,x,s-2),l.add(b),m.set(C,b),a==="logs"){let T=new Be(new cn(3.25,3.65,34,18),h);T.rotation.x=Math.PI/2,T.position.z=17,T.castShadow=T.receiveShadow=!0,b.add(T);let I=new Be(new mt(3.65,18,10),u);I.scale.z=.35,I.position.z=34,I.castShadow=!0,b.add(I)}else g(b,6.3,6.3,34,1.05,h,0,0,17),g(b,7.4,7.4,3.1,1.25,u,0,0,34);for(let T of[-1,1])for(let I=0;I<2;I++){let S=[];for(let M=0;M<=9;M++)S.push(new P(-1.7+I*2.5+Math.sin(M*.6+I)*.22,T*3.16,3+M*2.2));_(b,S,.1)}}let E=new Ze;if(E.name="fence-span",E.position.set(...f.center,s),f.a%i!==f.b%i&&(E.rotation.z=Math.PI/2),E.userData.cells=[f.a,f.b],l.add(E),a==="rails")for(let y of[16,24]){g(E,t-4.5,4.2,5.1,.95,h,0,0,y);for(let x of[-1,1]){for(let b=0;b<2;b++){let T=[];for(let I=0;I<=12;I++){let S=-t/2+5+I*(t-10)/12;T.push(new P(S,x*2.12,y-.9+b*1.7+Math.sin(I*.65+y)*.2))}_(E,T,.1)}for(let b of[-t/2+5.8,t/2-5.8]){let T=new Be(new mt(.56,8,6),d);T.scale.y=.3,T.position.set(b,x*2.28,y),E.add(T)}let C=[];for(let b=0;b<=24;b++){let T=b/24*Math.PI*2;C.push(new P(11+Math.cos(T)*1.6,x*2.14,y+Math.sin(T)*.65))}_(E,C,.1)}}else if(a==="picket"){for(let y of[15,25])g(E,t-4.5,3.2,3.6,.8,h,0,1.2,y);for(let y=0;y<5;y++){let x=(y-2)*(t-14)/5,C=7.2,b=new Vt;b.moveTo(-C/2,11),b.lineTo(C/2,11),b.lineTo(C/2,27),b.bezierCurveTo(C/2,32,-C/2,32,-C/2,27),b.closePath();let T=new Be(new Rt(b,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),y%2?u:h);T.rotation.x=Math.PI/2,T.position.set(x,-.7,0),T.castShadow=T.receiveShadow=!0,E.add(T);for(let I of[15,25]){let S=new Be(new mt(.48,8,6),d);S.scale.y=.3,S.position.set(x,-3.65,I),E.add(S)}_(E,[new P(x-1.2,-3.91,13),new P(x-1,-3.91,21),new P(x-1.4,-3.91,27)],.095)}}else if(a==="cross"){for(let b of[13,29])g(E,t-4.5,4,3.6,.8,h,0,0,b);let y=t-12,x=Math.atan2(16,y),C=Math.hypot(y,16);for(let b of[-1,1]){let T=new Ze;T.position.set(0,b*1.35,21),T.rotation.y=b*x,E.add(T),g(T,C,2.5,3.6,.75,u,0,0,0);for(let I of[-1,1])_(T,[new P(-C/2+2,I*1.27,-.5),new P(0,I*1.27,-.25),new P(C/2-2,I*1.27,-.55)],.1)}for(let b of[-1,1]){let T=new Be(new mt(.65,10,8),d);T.scale.y=.3,T.position.set(0,b*2.75,21),E.add(T)}}else for(let y of[16,26]){let x=new Be(new cn(2.3,2.3,t-4.5,18),h);x.rotation.z=Math.PI/2,x.position.z=y,x.castShadow=x.receiveShadow=!0,E.add(x);for(let C of[-1,1])for(let b of[-.9,.9]){let T=[];for(let I=0;I<=12;I++)T.push(new P(-t/2+4+I*(t-8)/12,C*Math.sqrt(2.3**2-b**2),y+b+Math.sin(I*.7)*.1));_(E,T,.1)}}}return{group:l,edges:c,dispose(){let f=new Set,E=new Set;l.traverse(y=>{y.geometry&&f.add(y.geometry),y.material&&E.add(y.material)}),f.forEach(y=>y.dispose()),E.forEach(y=>y.dispose())}}}var Au={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Ru({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=Au[t]||Au.front,s=n.radius,r=n.x,a=n.z,o=new Ze,l=new Ze;o.add(l),l.position.set(n.fx,0,n.fz);let c=new mt(1,20,14),h=[],u=(Z,oe=.48)=>{let ge=new it({color:Z,roughness:oe});return h.push(ge),ge},p=u("#ffd05a"),d=u("#ffeaa2"),g=u("#538b2c"),_=u("#e5a32a");function m(Z,oe,ge,Pe,Ee,Ie,te,ie){let me=new Be(c,oe);return me.position.set(ge,Pe,Ee),me.scale.set(Ie,te,ie),me.castShadow=!0,me.receiveShadow=!0,Z.add(me),me}m(l,g,0,5,0,2.2,7,2.2);for(let Z of[-1,1]){let oe=m(l,g,Z*7,4,1,9,1.7,4);oe.rotation.z=Z*.27,oe.rotation.y=Z*.3}let f=[];for(let Z=0;Z<6;Z++){let oe=new Ze;oe.rotation.y=Z*Math.PI/3,l.add(oe);let ge=m(oe,Z%2?p:d,0,12,0,5,9,4);f.push(ge)}let E=m(l,_,0,12,0,5,3.5,5),y=u("#c5a777"),x=new cn(s+1.6,s+1.6,2.6,40),C=new Be(x,y);C.position.set(r,3,a),C.castShadow=!0,o.add(C);let b=new cn(s,s,2.2,40),T=new Be(b,u("#fff4da"));T.position.set(r,3.6,a),T.castShadow=!0,o.add(T);let I=document.createElement("canvas");I.width=I.height=128;let S=I.getContext("2d");S.fillStyle="#4b2a15",S.font="bold 100px Trebuchet MS",S.textAlign="center",S.textBaseline="middle",S.fillText(String(i),64,69);let M=new _i(I);M.colorSpace=bt,M.userData.transient=!0;let L=new mi({map:M,transparent:!0,depthWrite:!1}),D=new vi(s*1.72,s*1.72),F=new Be(D,L);F.rotation.x=-Math.PI/2,F.position.set(r,4.74,a),o.add(F);let V=0,k=0,W="";function re(Z){if(!["closed","next","bloom"].includes(Z))throw Error("Unknown goal state");W=Z,k=Z==="bloom"?1:Z==="next"?.16:0,o.userData.state=Z,y.color.set(Z==="next"?"#f9bf39":"#c5a777"),y.emissive.set(Z==="next"?"#d89514":"#000000"),y.emissiveIntensity=Z==="next"?.15:0}function q(Z,oe=.016){V+=(k-V)*Math.min(1,oe*7);let ge=V;for(let Ee of f)Ee.position.set(0,13-ge*3,2+ge*10),Ee.scale.set(5+ge*1.5,9-ge*6,4+ge*4),Ee.rotation.x=ge*-.25;E.visible=ge>.4,E.position.y=11.4;let Pe=W==="next"?1+Math.sin(Z*2.8)*.035:1;l.scale.setScalar(Pe),p.emissive.set("#ffc33e"),p.emissiveIntensity=W==="next"?.08+Math.sin(Z*2.8)*.04:0}re(e),V=k,q(0,1),o.userData.goalNumber=i;function ee(Z){let oe=Z===33?13:Z===40?15.7:10.5;C.scale.set((oe+1.6)/(s+1.6),1,(oe+1.6)/(s+1.6)),T.scale.set(oe/s,1,oe/s),F.scale.setScalar(oe/s),o.userData.markerSize=Z}return{group:o,setState:re,setSize:ee,update:q,dispose(){c.dispose(),b.dispose(),x.dispose(),D.dispose(),M.dispose(),L.dispose(),h.forEach(Z=>Z.dispose())}}}var On=(i,e)=>Wt.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),tl=[[-13,-9],[20,-10],[8,4],[-11,18]];function Cu(i){i.x=Wt.clamp(i.x,-16,24),i.z=Wt.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function Iu(i=73){let e=[{kind:"bee",position:new P(-12,25,10),velocity:new P,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new P(3,21.5,-7),velocity:new P,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,a){r.leg++,r.age=0;let o=i+a*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new P((On(r.leg+1,o)-.5)*5,20.5,(On(r.leg+3,o)-.5)*5),r.visiting=!0;else{let u=Math.floor(On(r.leg,o)*4);u===r.station&&(u=(u+1+Math.floor(On(r.leg+9,o)*2))%4),r.station=u;let[p,d]=tl[u];r.target=Cu(new P(p+(On(r.leg+2,o)-.5)*3,r.kind==="bee"?24.5:23,d+(On(r.leg+4,o)-.5)*3)),r.visiting=!1}let c=e[1-a],h=(u,p)=>Math.hypot(u.x-p.x,u.z-p.z);if(h(r.target,c.position)<13||c.target&&h(r.target,c.target)<13){let u=-1;for(let p=0;p<tl.length;p++){let[d,g]=tl[p],_=new P(d,24,g),m=h(_,c.position)+(c.target?h(_,c.target):0);m>u&&(u=m,r.target=_,r.station=p)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let a=e[0].position.clone().sub(e[1].position);a.y=0;let o=a.length();for(let l=0;l<2;l++){let c=e[l];c.age+=r,c.wait<=0&&c.age>(c.kind==="bee"?4.2:6.2)+On(c.leg,i+l)*1.3&&n(c,l);let h=c.target.clone().sub(c.position),u=Math.hypot(h.x,h.z);c.wait>0?(c.wait-=r,c.wait<=0&&n(c,l)):u<1&&c.velocity.length()<2&&(c.wait=c.visiting?(c.kind==="bumblebee"?1.2:.45)+On(c.leg,i+l)*1.3:.12+On(c.leg,i+l)*.3);let p=h.clone();p.y=0,p.lengthSq()>0&&p.normalize().multiplyScalar(c.speed*Math.min(1,u/8));let d=p.sub(new P(c.velocity.x,0,c.velocity.z)).multiplyScalar(5.5);o<16&&o>.001&&d.addScaledVector(a,(l?-1:1)*(16-o)*11/o),d.y=(c.target.y+Math.sin(t*4.1+l*2.3)*.16-c.position.y)*16-c.velocity.y*7,d.clampLength(0,95),c.velocity.addScaledVector(d,r),c.velocity.clampLength(0,c.speed*1.1),c.position.addScaledVector(c.velocity,r),Cu(c.position)}}return{agents:e,update(r){let a=Wt.clamp(r,0,.1);for(;a>1e-8;){let o=Math.min(.008333333333333333,a);s(o),a-=o}return e}}}var nl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},x_=(i,e)=>Wt.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function yo({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=nl[i];if(!r)throw Error("Unknown flower species "+i);let a=Ru({number:e,state:t,layout:n}),o=a.group,l=o.children[0],c=new Ze;c.position.copy(l.position),o.add(c);let h=[],u=[],p=ee=>{let Z=new it({color:ee,roughness:.56});return u.push(Z),Z},d=p("#538b2c"),g=r.colors.map(p),_=p(r.center),m=new mt(1,20,12);h.push(m);function f(ee,Z,oe,ge,Pe,Ee,Ie,te){let ie=new Be(m,Z);return ie.position.set(oe,ge,Pe),ie.scale.set(Ee,Ie,te),ie.castShadow=ie.receiveShadow=!0,ee.add(ie),ie}f(c,d,0,5,0,1.8,6,1.8);for(let ee of[-1,1]){let Z=f(c,d,ee*6,3,0,8,1.4,3);Z.rotation.z=ee*.25}let E=[];for(let ee=0;ee<r.petals;ee++){let Z=new Ze;Z.position.y=12,Z.rotation.y=ee*Math.PI*2/r.petals,c.add(Z);let oe=new Ze;Z.add(oe);let ge=m;if(i==="poppy"){ge=m.clone();let Ee=ge.attributes.position;for(let Ie=0;Ie<Ee.count;Ie++){let te=Ee.getX(Ie),ie=Ee.getZ(Ie);Ee.setY(Ie,Ee.getY(Ie)+Math.sin(Math.atan2(ie,te)*5)*.26*Math.hypot(te,ie))}ge.computeVertexNormals(),h.push(ge)}let Pe=new Be(ge,g[ee%2]);Pe.position.z=r.radius,Pe.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Pe.castShadow=Pe.receiveShadow=!0,oe.add(Pe),E.push(oe)}let y=f(c,_,0,13.8,0,r.heart,2.7,r.heart);for(let ee=0;ee<(i==="poppy"?9:7);ee++){let Z=ee*Math.PI*2/(i==="poppy"?9:7);f(c,_,Math.cos(Z)*r.heart*.7,16,Math.sin(Z)*r.heart*.7,.65,.6,.65)}let x=new Ze;x.name="flower-visitors",c.add(x);let C=p("#e9ad32"),b=p("#d6af50"),T=p("#60452b"),I=p("#fff6df");b.roughness=.95,I.transparent=!0,I.opacity=.72,I.depthWrite=!1;let S=[];for(let ee=0;ee<2;ee++){let Z=new Ze;Z.name=ee?"bumblebee":"bee",Z.scale.setScalar(1.8),x.add(Z);let oe=ee?1.08:.7,ge=ee?.98:.65;f(Z,ee?b:C,0,0,0,oe,ge,1.2),f(Z,T,0,0,1.05,ee?.56:.48,ee?.54:.48,.48);for(let Ee of[-.55,.15])f(Z,T,0,0,Ee,oe*1.02,ge*1.02,.18);if(ee){let Ee=p("#f4e4b9");Ee.roughness=1,f(Z,Ee,0,0,-.98,.72,.65,.38);let Ie=[],te=[],ie=260;for(let Ve=0;Ve<ie;Ve++){let ae=1-2*(Ve+.5)/ie,A=Math.sqrt(1-ae*ae),O=Ve*2.39996323,B=Math.cos(O)*A,X=Math.sin(O)*A,G=new P(B*oe*1.015,ae*ge*1.015,X*1.215),j=new P(B/oe,ae/ge,X/1.2).normalize(),J=.12+x_(Ve,91)*.12,ne=G.clone().addScaledVector(j,J);ne.z-=.045,Ie.push(...G.toArray(),...ne.toArray());let Ne=new ze(X<-.72?"#f4e4b9":Math.abs(X+.46)<.18||Math.abs(X-.12)<.17?"#635238":Ve%3?"#d6af50":"#e7c776");te.push(...Ne.toArray(),...Ne.toArray())}let me=new _t;me.setAttribute("position",new Ke(Ie,3)),me.setAttribute("color",new Ke(te,3)),h.push(me);let Re=new ns({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});u.push(Re);let _e=new Gs(me,Re);_e.name="bumblebee-fur",Z.add(_e)}let Pe=[];for(let Ee of[-1,1]){let Ie=f(Z,I,Ee*.95,.5,-.1,1.5,.16,.65);Ie.castShadow=!1,Pe.push(Ie)}S.push({insect:Z,wings:Pe,seed:e*17+ee*31+Object.keys(nl).indexOf(i)*7,phase:ee*2.7,a:new P,b:new P})}let M=!!s;function L(ee){M=!!ee,o.userData.insects=M}let D=Iu(e*17+Object.keys(nl).indexOf(i)*7);o.userData.visitorSizes={bee:100,bumblebee:100};function F(ee,Z=100){if(!["bee","bumblebee"].includes(ee))throw Error("Unknown flower visitor");if(!Number.isFinite(Z)||Z<50||Z>300)throw RangeError("Visitor size must be between 50 and 300 percent");S.find(oe=>oe.insect.name===ee).insect.scale.setScalar(1.8*Z/100),o.userData.visitorSizes[ee]=Z}let V=t,k=t==="bloom"?1:0,W=k;function re(ee){a.setState(ee),V=ee,k=ee==="bloom"?1:0}function q(ee,Z=.016){a.update(ee,Z),W+=(k-W)*Math.min(1,Z*7);let oe=W;l.scale.multiplyScalar(1-oe),l.visible=oe<.999,c.visible=oe>.001,c.scale.setScalar(oe);for(let Pe of E)Pe.rotation.x=-(1-oe)*1.1;y.scale.y=2.7*(.8+.2*oe),x.visible=M&&V==="bloom"&&oe>.94;let ge=D.update(Z);for(let Pe=0;Pe<S.length;Pe++){let Ee=S[Pe],Ie=ge[Pe];Ee.insect.position.copy(Ie.position);let te=Ie.velocity.x,ie=Ie.velocity.z,me=Math.hypot(te,ie);if(me>.5){let Re=Math.atan2(te,ie),_e=Math.atan2(Math.sin(Re-Ee.insect.rotation.y),Math.cos(Re-Ee.insect.rotation.y));Ee.insect.rotation.y+=_e*Math.min(1,Z*9),Ee.insect.rotation.z=Wt.clamp(-_e*.22,-.24,.24)}else Ee.insect.rotation.z*=Math.max(0,1-Z*6);Ee.insect.rotation.x=-Math.min(.16,me*.009),Ee.wings.forEach((Re,_e)=>Re.rotation.z=Math.sin(ee*30+Ee.phase)*(_e?1:-1)*.5)}}return L(s),q(0,1),o.userData.species=i,o.userData.decorative=!0,{group:o,setState:re,setInsects:L,setVisitorSize:F,setSize:a.setSize,update:q,get state(){return V},dispose(){a.dispose(),h.forEach(ee=>ee.dispose()),u.forEach(ee=>ee.dispose())}}}var v_=[{id:"fenceGarden",cells:[2,3,7,8,9,10,12,13,14,15,16,17,19,20,21,22,26,27],water:[],stones:[],earth:[14,20,21],walls:[[8,14],[9,15],[15,16],[21,22]],flowers:[7,10,12,17,19,22,26,27],species:["daisy","poppy"]},{id:"riverGarden",cells:[1,2,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,26,27,28,29,33,34],water:[8,14,20,21,27],stones:[],earth:[],walls:[],flowers:[1,6,9,12,16,18,23,26,29,34],species:["daisy","buttercup"]},{id:"stoneGarden",cells:[1,2,3,7,8,9,13,14,15,16,19,20,21,22,25,26,27,31,32,33],water:[],stones:[1,3,7,9,13,16,19,22,25,27,31,33],earth:[14,20],walls:[],flowers:[2,8,15,21,26,32],species:["meadow","buttercup"]}];function Pu(i,e=.5){let t=[0,0,0,0,2,1,1,2,0,2,0,2,1,2,1],n=structuredClone(v_[t[i%15]]);(i===0||i===2)&&(n.walls=[],n.earth=i===0?[14]:[14,20]),i===3&&(n.walls=[[8,14],[14,15],[20,21]]),i===4&&(n.stones=n.stones.filter((d,g)=>g%3!==0)),i===5&&(n.walls=[[6,7],[16,17],[22,23]]),i===8&&(n.walls=[[8,14],[9,15],[15,21],[20,21]]),i===9&&(n.stones=n.stones.filter((d,g)=>g%2===0)),i===10&&(n.walls=[[8,14],[9,15],[15,16],[20,21],[21,22]]),i===12&&(n.species=["meadow","daisy"]),i===14&&(n.species=["poppy","meadow"]);let s=new gi;s.add(new Mi("#fff6dc","#a28d6c",1.65));let r=new jn("#fff4dc",3.3);r.position.set(-180,360,800),r.target.position.set(240,-240,0),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-500,right:500,top:500,bottom:-500,near:1,far:1800}),r.shadow.bias=-3e-4,r.shadow.normalBias=.4,s.add(r,r.target);let a=new jn("#d4e8ff",.4);a.position.set(600,-200,500),s.add(a);let o=new Ze;s.add(o);let l=mo({n:6,cells:n.cells,water:n.water,lava:[],stones:n.stones,style:"soft"});o.add(l.group);let c=[],h=[];for(let d of n.cells.filter(g=>!n.water.includes(g)&&!n.stones.includes(g))){let g=n.earth.includes(d)?{group:go("earth-loam",{seed:600+d}),update(){}}:_o(["classic","rich","tuft","flowers"][d%4],{seed:600+d*17});g.group.position.set(d%6*80+40,-Math.floor(d/6)*80-40,0),o.add(g.group),c.push(g)}for(let[d,g]of n.stones.entries()){let _=wu(d%4===0?"fossil":d%4===1?"plain":"pebble",{seed:300+g});_.group.position.set(g%6*80+40,-Math.floor(g/6)*80-40,0),o.add(_.group)}if(n.walls.length){let d=Tu({n:6,walls:n.walls,style:"honey",design:"picket"});o.add(d.group)}for(let d of l.openings){let g=xo("water",{style:"sway",center:[240,-240]}),_=new Be(new Rt(d.shape,{depth:2,bevelEnabled:!1,curveSegments:24}),g.material);_.position.z=d.surfaceZ-2,o.add(_),c.push(g)}for(let[d,g]of n.flowers.entries()){let _=yo({species:n.species[d%2],state:"bloom",insects:!1});_.group.rotation.x=Math.PI/2,_.group.position.set(g%6*80+40+(d%2?8:-8),-Math.floor(g/6)*80-40,12),_.group.scale.setScalar(1.1),o.add(_.group),h.push(_),c.push(_)}i>2&&![6,7].includes(i)&&(o.rotation.z=[0,Math.PI/2,-Math.PI/2,Math.PI][i%4]);let u=new P(240,-240,0).applyAxisAngle(new P(0,0,1),o.rotation.z);o.position.set(240-u.x,-240-u.y,0),h.forEach((d,g)=>{d.group.visible=g<Math.round(h.length*(.15+Math.max(0,Math.min(1,e))*.85)),d.update(0,1)}),c.forEach(d=>d.update(0,1));let p=new Jt().setFromObject(o);return{scene:s,land:o,bounds:p,dispose(){let d=new Set,g=new Set;s.traverse(_=>{_.geometry&&d.add(_.geometry);for(let m of Array.isArray(_.material)?_.material:_.material?[_.material]:[])g.add(m)}),d.forEach(_=>_.dispose()),g.forEach(_=>_.dispose()),s.children.filter(_=>_.isLight).forEach(_=>_.dispose?.())}}}function Lu(i,e){let t=new xn(-300,300,250,-250,1,2e3);t.up.set(0,0,1);let n=i.getCenter(new P);t.position.set(n.x+270,n.y-500,n.z+1050),t.lookAt(n.x,n.y,0),t.updateMatrixWorld();let s=new he(1/0,1/0),r=new he(-1/0,-1/0);for(let c of[i.min.x,i.max.x])for(let h of[i.min.y,i.max.y])for(let u of[i.min.z,i.max.z]){let p=new P(c,h,u).applyMatrix4(t.matrixWorldInverse);s.min(p),r.max(p)}let a=(s.x+r.x)/2,o=(s.y+r.y)/2,l=Math.max((r.x-s.x)/2/e,(r.y-s.y)/2)*1.12;return t.left=a-l*e,t.right=a+l*e,t.top=o+l,t.bottom=o-l,t.updateProjectionMatrix(),t}var Du=[{id:"apricot",name:"Aprikose",existing:!0,coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#dfa578",pattern:"solid",paws:"#dfa578",patternSize:1,patternStrength:1},{id:"coral",name:"Koralle",existing:!0,coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#e78f85",pattern:"solid",paws:"#e78f85",patternSize:1,patternStrength:1},{id:"lavender",name:"Lavendel",existing:!0,coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#a99bd0",pattern:"solid",paws:"#a99bd0",patternSize:1,patternStrength:1},{id:"lagoon",name:"Lagune",existing:!0,coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#75b9bf",pattern:"solid",paws:"#75b9bf",patternSize:1,patternStrength:1},{id:"pistachio",name:"Pistazie",coat:"#a4b875",root:"#81915a",tip:"#e8edbd",iris:"#82633e",face:"#fff0c9",cheeks:"#d8a28b",antenna:"#f0d99f",accent:"#eee6bd",pattern:"belly",paws:"#a4b875",patternSize:1,patternStrength:1},{id:"honey",name:"Honig",coat:"#dcb16b",root:"#b68b49",tip:"#ffe9b5",iris:"#598b91",face:"#fff0d5",cheeks:"#e8a18c",antenna:"#fff1ce",accent:"#f4dfb4",pattern:"belly",paws:"#dcb16b",patternSize:1,patternStrength:1},{id:"berry",name:"Waldbeere",coat:"#ae809e",root:"#875e7d",tip:"#edd0df",iris:"#7b9d8b",face:"#f6e4d2",cheeks:"#d5979c",antenna:"#e5c6d5",accent:"#d9aec1",pattern:"belly",paws:"#ae809e",patternSize:1,patternStrength:1},{id:"moon",name:"Mondblau",coat:"#819fb9",root:"#607a97",tip:"#d3e6ee",iris:"#b88e54",face:"#f1e8d7",cheeks:"#d5a7a1",antenna:"#e5e6c9",accent:"#b8d1db",pattern:"belly",paws:"#819fb9",patternSize:1,patternStrength:1},{id:"mocha",name:"Mokka",coat:"#9b7961",root:"#77543f",tip:"#e2c4a1",iris:"#729c91",face:"#f5e2bd",cheeks:"#d39780",antenna:"#e6cd9e",accent:"#634b45",pattern:"solid",paws:"#9b7961",patternSize:1,patternStrength:1},{id:"peach",name:"Pfirsichbl\xFCte",coat:"#e4ae9e",root:"#bc8b82",tip:"#ffe4cf",iris:"#749c9e",face:"#fff1da",cheeks:"#d78989",antenna:"#f5d898",accent:"#f6d6bd",pattern:"belly",paws:"#e4ae9e",patternSize:1,patternStrength:1},{id:"polar",name:"Wolkenfell",coat:"#c1c9ce",root:"#98a8b4",tip:"#f8f1df",iris:"#788fbe",face:"#fff4dc",cheeks:"#d9b0a8",antenna:"#ead8b0",accent:"#dce4e1",pattern:"belly",paws:"#c1c9ce",patternSize:1,patternStrength:1},{id:"dusk",name:"Abendrot",coat:"#a99ab7",root:"#83748e",tip:"#e7d9df",iris:"#bc985e",face:"#f7e5ca",cheeks:"#d5a0a1",antenna:"#eac58a",accent:"#e7d9df",pattern:"belly",paws:"#a99ab7",patternSize:1,patternStrength:1},{id:"reward-stardew",name:"Sternentau",coat:"#384663",root:"#253149",tip:"#7886a5",iris:"#cfaa63",face:"#f3dfbe",cheeks:"#c2999c",antenna:"#d9ba78",accent:"#edc66c",paws:"#d8c6a6",pattern:"speckles",patternSize:.65,patternStrength:.9,rewardStudy:!0},{id:"reward-cloverluck",name:"Kleegl\xFCck",coat:"#829867",root:"#61764e",tip:"#c2d2a0",iris:"#a1844d",face:"#ede4c4",cheeks:"#cd9f85",antenna:"#e2d39a",accent:"#4d6945",paws:"#e5d7b5",pattern:"spots",patternSize:.8,patternStrength:.55,rewardStudy:!0},{id:"reward-wildberry",name:"Wildbeere",coat:"#78516c",root:"#55394f",tip:"#b78ba4",iris:"#8eae99",face:"#ebd5c6",cheeks:"#ce8f9c",antenna:"#d9b8c9",accent:"#c6a2b3",paws:"#493c4e",pattern:"mask",patternSize:1,patternStrength:.8,rewardStudy:!0},{id:"reward-honeypaw",name:"Honigpfote",coat:"#ca9b59",root:"#a5743d",tip:"#efd09a",iris:"#6f9696",face:"#f3e2bf",cheeks:"#d69b7e",antenna:"#e7c77d",accent:"#775339",paws:"#71513e",pattern:"tail",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-moonflower",name:"Mondbl\xFCte",coat:"#d5cddc",root:"#aea4bf",tip:"#f6eeda",iris:"#83a9bb",face:"#fff0d7",cheeks:"#d6b0b7",antenna:"#e7d2a7",accent:"#ece1ce",paws:"#b2a6c2",pattern:"belly",patternSize:1,patternStrength:.75,rewardStudy:!0},{id:"reward-eveningfox",name:"Abendfuchs",coat:"#c37e52",root:"#985634",tip:"#edb77d",iris:"#759783",face:"#f6dfb7",cheeks:"#d3947d",antenna:"#e0be86",accent:"#f0d6aa",paws:"#58463b",pattern:"mask",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-fern",name:"Farnschatten",coat:"#617c73",root:"#405d58",tip:"#a9c2ab",iris:"#c29a60",face:"#e9dfbf",cheeks:"#bc9d8b",antenna:"#dac995",accent:"#344f4a",paws:"#455a50",pattern:"stripes",patternSize:1.2,patternStrength:.65,rewardStudy:!0},{id:"reward-rosequartz",name:"Rosenquarz",coat:"#cda9b2",root:"#aa8296",tip:"#f2d9d1",iris:"#819c9e",face:"#fae9d7",cheeks:"#ce959e",antenna:"#ead3b2",accent:"#f1dfc8",paws:"#ab879c",pattern:"tail",patternSize:1.3,patternStrength:.7,rewardStudy:!0},{id:"reward-amber",name:"Bernstein",coat:"#b98543",root:"#8c5a2f",tip:"#ebc783",iris:"#799b8c",face:"#f4e2bb",cheeks:"#d79d7b",antenna:"#e8c77d",accent:"#6b4d38",paws:"#694b37",pattern:"spots",patternSize:.7,patternStrength:.7,rewardStudy:!0},{id:"reward-iceclover",name:"Eisklee",coat:"#a5c4c1",root:"#7faaa9",tip:"#e0eee0",iris:"#8e7aa8",face:"#f7edda",cheeks:"#d5b5af",antenna:"#e7d4aa",accent:"#e9e5c9",paws:"#7d9fa1",pattern:"speckles",patternSize:.75,patternStrength:.6,rewardStudy:!0},{id:"reward-plum",name:"Pflaumenbl\xFCte",coat:"#796780",root:"#58475f",tip:"#b4a2b8",iris:"#b7a071",face:"#f0e2d1",cheeks:"#c398a6",antenna:"#ddc6a4",accent:"#cfb4c3",paws:"#57455d",pattern:"saddle",patternSize:1.15,patternStrength:.65,rewardStudy:!0},{id:"reward-dandelion",name:"L\xF6wenzahn",coat:"#c6bc79",root:"#99935e",tip:"#ede4ac",iris:"#7c9d94",face:"#f6e8c4",cheeks:"#d3a48d",antenna:"#e8ce7d",accent:"#f1e8ce",paws:"#8a8160",pattern:"belly",patternSize:1.1,patternStrength:.8,rewardStudy:!0},{id:"tiger-study",name:"Tigerpfote",coat:"#cd9656",root:"#a5733f",tip:"#ecc38b",iris:"#8b9c71",face:"#f8e6c4",cheeks:"#cc9c89",antenna:"#e3c894",accent:"#49382e",paws:"#edddbf",pattern:"tiger",patternSize:1,patternStrength:.9},{id:"leopard-study",name:"Leopardenpfote",coat:"#ccab70",root:"#a88750",tip:"#edd3a0",iris:"#8a9a68",face:"#f4e6cb",cheeks:"#c59c86",antenna:"#d9c18d",accent:"#48372b",paws:"#e6d4ae",pattern:"leopard",patternSize:1,patternStrength:.95},{id:"custom-294bf96b-4311-45f4-a97f-9f0725105857",name:"Red",existing:!1,coat:"#f9061f",root:"#f9061f",tip:"#f9061f",iris:"#428f8d",face:"#e1dfdb",cheeks:"#e1dfdb",antenna:"#ffe5bd",accent:"#f9061f",pattern:"saddle",paws:"#f9061f",patternSize:1,patternStrength:1},{id:"custom-0c185d09-cfd9-4664-a19c-11bbee73c4a1",name:"White",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#e49ab4",accent:"#ffffff",pattern:"belly",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-cd20f8f9-aaf8-416c-bf05-d8c1b5ac6598",name:"Black",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#fffff5",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#ffffff",pattern:"solid",paws:"#ffffff",patternSize:1.1,patternStrength:.8},{id:"custom-dc02a2ea-1078-4736-8a1c-9cdf1f8c8492",name:"Mein Nurbi 7",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"stripes",paws:"#ffffff",patternSize:.5,patternStrength:1},{id:"custom-98e141bc-ffcb-48fb-9442-0528ca7cb103",name:"Blacktail",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#0d0d0d",accent:"#0d0d0d",pattern:"tail",paws:"#ffffff",patternSize:.75,patternStrength:1},{id:"custom-8d5a3bda-48c2-4f5e-8df2-594c54a0b0d1",name:"Tiger",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.85,patternStrength:1},{id:"custom-4c0450df-de84-4ca8-9532-5cf667d92736",name:"Barnhold",existing:!1,coat:"#ff8c00",root:"#55554e",tip:"#ff8c00",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.6,patternStrength:1},{id:"custom-a308614f-d7a5-4ac5-a8d7-1fd7967999b4",name:"Leopard schwarz",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#ffffff",pattern:"leopard",paws:"#1f1f1e",patternSize:.8,patternStrength:1},{id:"custom-b6960ff9-f026-4c87-98c8-d028d13660f3",name:"Leopard",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-74506dd4-e667-4d4b-a574-ca2129e1e2cb",name:"Schneeleopard",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1}];var Fu=[];for(let i=0;i<4;i++)for(let e=0;e<5;e++){let t=i*5+e,n=Math.sin(t*13.13+2.1);Fu.push({u:(e-2)*5.5+i%2*1.8+n*.75,v:4+i*7+Math.cos(t*7.7)*1.1,rx:1.85+(Math.sin(t*5.1)+1)*.38,ry:1.65+(Math.cos(t*4.3)+1)*.5,angle:n*.8,phase:t*2.37,gap:.3+(Math.sin(t*3.7)+1)*.18})}var Ou=[];for(let i=0;i<4;i++)for(let e=0;e<8;e++){let t=i*8+e,n=e*Math.PI/4+i%2*.24+.07*Math.sin(t*4.7),s=.12+i*.36+.04*Math.cos(t*3.1);Ou.push({x:Math.cos(n)*Math.cos(s),y:Math.sin(n)*Math.cos(s),z:Math.sin(s),radius:.105+.045*(1+Math.sin(t*7.3))*.5})}var Uu=[[5.8,2.7,1.95,1.25],[15.8,2.25,-2.1,1.6],[25.1,1.9,1.15,1.38]];function Nu(i,e,t,n){let s=i.patternSize??1,r=i.patternStrength??1,a=Wt.smoothstep,o=0;if(i.pattern==="belly"){let l=a(-t,11/s,19/s)*(1-a(n,18*s,23*s)),c=(1-a(n,7*s,13*s))*a(t,-4,4);o=Math.max(l,c)*.82}if(i.pattern==="saddle"&&(o=(1-a(Math.abs(e),3*s,8*s))*a(t,-1,9)*a(n,9,17)*.85),i.pattern==="stripes"&&(o=(1-a(Math.abs(Math.sin((t-3)/(3.3*s)+e*.025)),.3,.6))*a(t,-4,5)*a(n,5,12)),i.pattern==="tiger"){let l=e<0?-1:1,c=9-4*a(t,12,29),h=Math.atan2(Math.abs(e),(n-c)*1.12);for(let b=0;b<Uu.length;b++){let[T,I,S,M]=Uu[b],L=M+(l<0?[.15,-.12,.18][b]:0),D=h/L;if(D>=1)continue;let F=l<0?[-.15,.25,-.1][b]:0,V=T+F*Math.sin(h)+S*(.2*D+.8*D*D),k=I*s*Math.pow(1-D*D,.7),W=1-a(Math.abs(t-V),k*.67,k);o=Math.max(o,W*(1-a(D,.8,1)))}o*=a(t,2,4)*a(n,5,9);let u=Math.abs(e),p=1-a(t,-2,1),d=a(u,8.7,11)*(1-a(u,14,16)),g=(t+15)/12,_=a(g,0,.2)*(1-a(g,.78,1)),m=0;for(let b of[18.8,23.8]){let T=b+.9*Math.sin(g*2.4)+(e<0?.2:0),I=.8*s*(.5+.5*Math.sin(Math.max(0,Math.min(1,g))*Math.PI));m=Math.max(m,(1-a(Math.abs(n-T),I*.5,I))*_*d)}let f=30.2+u*.4,E=(1-a(u,3.2,4.6))*(1-a(Math.abs(n-f),.5*s,1.15*s))*(1-a(t,-9,-5)),y=a((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25),x=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),C=t<-10?a(x,1,1.2):1;o=Math.max(o,Math.max(m,E)*p*y*C*.9)}if(i.pattern==="leopard"){let l=9-4*a(t,12,29),c=Math.atan2(e,(n-l)*1.12)*9;if(t>0&&n>5){let h=s*(1-.25*a(t,21,29));for(let u of Fu){let p=c-u.u,d=t-u.v;if(Math.abs(p)>u.rx*h*1.7||Math.abs(d)>u.ry*h*1.7)continue;let g=Math.cos(u.angle),_=Math.sin(u.angle),m=(p*g-d*_)/(u.rx*h),f=(p*_+d*g)/(u.ry*h),E=Math.atan2(f,m),y=Math.hypot(m,f)/(1+.12*Math.sin(E*3+u.phase)+.065*Math.cos(E*5-u.phase)),x=a(y,.51,.69)*(1-a(y,1,1.17)),C=Math.abs(Math.atan2(Math.sin(E-u.phase),Math.cos(E-u.phase))),b=a(C,u.gap,u.gap+.24);o=Math.max(o,Math.max(x*b,(1-a(y,.3,.62))*.12))}o*=a(t,0,3)*a(n,5,9)}if(t<3&&n>12){let h=0,u=e/13.1,p=(t+8)/11.5,d=(n-20)/12.2,g=Math.hypot(u,p,d);if(g>.1)for(let E of Ou){let y=1-(u*E.x+p*E.y+d*E.z)/g,x=E.radius*s;h=Math.max(h,1-a(y,x*x*.2,x*x*.58))}let _=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),m=t<-10?a(_,1,1.2):1,f=a((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25);o=Math.max(o,h*m*f*(1-a(t,1,3)))}}if(i.pattern==="spots"||i.pattern==="speckles"){let l=i.pattern==="speckles",c=l?5.2:11,h=(l?1.25:3.8)*s,u=Math.round(t/c),p=Math.round((e-u%2*c*.5)/c)*c+u%2*c*.5,d=u*c+Math.sin(u*2.7+p)*c*.12,g=Math.hypot(e-p,t-d);o=(1-a(g,h*.5,h))*a(t,-5,3)*a(n,6,13)}return i.pattern==="mask"&&(o=a(-t,11,16)*(1-a(Math.abs(e),8*s,13*s))*a(n,15,21)),i.pattern==="tail"&&(o=a(t,31-7*s,34-3*s)),Math.max(0,Math.min(1,o*r))}function il(i,e){let t=i.group.getObjectByName("curved-soft-fur"),n=t.geometry,s=n.attributes.color.array,r=new ze("#d5a078"),a=new ze("#ffe2b9"),o=e||new Float32Array(s.length/3),l=[],c=[],h={};if(!e)for(let d=0;d<o.length;d++)o[d]=(s[d*3]-r.r)/(a.r-r.r);i.group.traverse(d=>{if(!d.isMesh)return;let g="#"+d.material.color.getHexString();g==="#dfa578"&&(h.coat=d.material),g==="#428f8d"&&(h.iris=d.material),g==="#ffe5bd"&&(h.face=d.material),g==="#e69b88"&&(h.cheeks=d.material),d.parent.name==="soft-curved-antenna"&&g==="#ffe5bd"&&(d.material=d.material.clone(),h.antenna=d.material),d.name==="original-body-part"&&(d.material=d.material.clone(),d.material.color.set("#ffffff"),d.material.vertexColors=!0,d.geometry.setAttribute("color",new Ke(new Float32Array(d.geometry.attributes.position.count*3),3)),l.push(d))}),i.group.traverse(d=>{d.isMesh&&d.parent.name==="soft-paw"&&(d.material=d.material.clone(),c.push(d.material))});let u=[];i.group.traverse(d=>{d.isMesh&&d.parent.name==="soft-curved-antenna"&&d.material!==h.coat&&u.push(d.material)});function p(d){c.forEach(b=>b.color.set(d.paws||d.coat));for(let b of["coat","iris","face","cheeks"])h[b].color.set(d[b]);u.forEach(b=>b.color.set(d.antenna));let g=d.pattern!=="solid",_=new ze(d.root),m=new ze(d.tip),f=new ze(d.accent),E=new ze(d.coat),y=new ze,x=n.attributes.position,C=n.attributes.color;for(let b=0;b<x.count;b++)y.copy(_).lerp(m,o[b]),g&&y.lerp(f,Nu(d,x.getX(b),x.getY(b),x.getZ(b))),C.setXYZ(b,y.r,y.g,y.b);C.needsUpdate=!0;for(let b of l){let T=b.geometry.attributes.position,I=b.geometry.attributes.color;for(let S=0;S<T.count;S++)y.copy(E),g&&y.lerp(f,Nu(d,T.getX(S)*b.scale.x+b.position.x,T.getY(S)*b.scale.y+b.position.y,T.getZ(S)*b.scale.z+b.position.z)),I.setXYZ(S,y.r,y.g,y.b);I.needsUpdate=!0}}return{...i,apply:p}}function Bu(i=-1,e="hops"){let t=p=>(p=Math.max(0,Math.min(1,p)),p*p*p*(p*(p*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="compact"){if(i>1.25)return n;let p=t(i/.22)*(1-t((i-.65)/.55));return{...n,active:!0,look:t(i/.55),happy:p,tuck:p*.6,lift:p*.25,pitch:-p*.018,roll:Math.sin(i*5)*p*.012,antenna:p*.18,squash:p*.008}}if(e==="gentle"){let p=t((i-.75)/.55)*(1-t((i-2.5)/.65)),d=p*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:p*1.35,happy:p,roll:d,pitch:-p*.035,squash:p*.012,antenna:p*.3+Math.sin(i*8)*p*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(p,d,g)=>{let _=(i-p)/d;return _>0&&_<1?Math.sin(Math.PI*_)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),a=t((i-.78)/.26)*(1-t((i-3.05)/.55)),o=(p,d)=>{let g=(i-p)/d;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},l=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,c=o(.72,.3),h=o(1.35,.3),u=o(1.32,.3)+o(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:a,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:c*.055+h*.035+u*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:l*.65+r*.045,pitch:c*.035-r*.007-l*.013,roll:r*.005*Math.sin(i*3+.6)+l*.012}}function zu(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let a=(i*s+([0,3].includes(e)?.18:.68))%1,o=t/n/s*.66,l=a<.66,c,h=0,u=0;if(l)c=-o/2+a/.66*o,u=a/.66>.82?(a/.66-.82)*.5:0;else{let g=(a-.66)/.33999999999999997,_=g*g*(3-2*g);c=o/2-o*_,h=Math.sin(g*Math.PI)**1.25*1.8,u=-Math.sin(g*Math.PI)*.2}let p=Math.min(1,i/.08,(1-i)/.08),d=Math.max(0,p*p*(3-2*p));return{y:c*d,z:h*d,pitch:u*d,stance:l,phase:a,fade:d}}function ku(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,a=12*.66,o,l=0,c=0;if(r<.66)o=-a/2+r/.66*a;else{let h=(r-.66)/.33999999999999997,u=h*h*(3-2*h);o=a/2-a*u,l=Math.sin(h*Math.PI)*1.3,c=-Math.sin(h*Math.PI)*.16}return{y:o,z:l,pitch:c,stance:r<.66,phase:r}}var M_={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}},sl={...M_,...Object.fromEntries(Du.map(i=>[i.id,i]))};function rl({seed:i=913,presentation:e="ground"}={}){let t=new Ze,n=new Ze,s=new Ze;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,a=(ae,A=.8)=>new it({color:ae,roughness:A}),o=a("#dfa578"),l=a("#ffe5bd"),c=a("#e69b88"),h=a("#302529",.3),u=a("#fff9e7",.3),p=a("#428f8d",.35);function d(ae,A,O,B,X,G,j,J){let ne=new Be(new mt(1,40,28),A);return ne.position.set(O,B,X),ne.scale.set(G,j,J),ne.castShadow=ne.receiveShadow=!0,ae.add(ne),ne}let g=e==="peek"?22e3:44e3,_=g*20;function m(ae,A){let O=new ae(A),B=0;return{push(...X){for(let G=0;G<X.length;G++)O[B++]=X[G]},get length(){return B},view(){return O.subarray(0,B)}}}let f=m(Float64Array,_),E=m(Float32Array,_*3),y=m(Float32Array,_*3),x=m(Float32Array,_*3),C=m(Float32Array,_*2),b=m(Uint32Array,g*48),T=new ze("#d5a078"),I=new ze("#ffe2b9");function S(ae,A,O,B,X=!1){let G=d(s,o,...ae,...A);G.name="original-body-part",G.userData.bodyCenter=[...ae],G.userData.bodyRadii=[...A];for(let j=0;j<O;j++){let J=r()*2-1,ne=r()*Math.PI*2,Ne=Math.sqrt(1-J*J),Se=new P(Ne*Math.cos(ne),Ne*Math.sin(ne),J),R=new P(Se.x*A[0],Se.y*A[1],Se.z*A[2]).add(new P(...ae));if(R.z<1)continue;let v=X&&Se.y<-.4;if(v){let we=[-5.6,5.6].some(xe=>((R.x-xe)/4.6)**2+((R.z-23.4)/5.2)**2<1),le=(R.x/5.9)**2+((R.z-16.5)/3.3)**2<1;if(we||le)continue}let U=new P(Se.x/A[0],Se.y/A[1],Se.z/A[2]).normalize(),Y=new P(0,0,1);Math.abs(U.z)>.9&&Y.set(1,0,0);let se=new P().crossVectors(U,Y).normalize(),$=new P(Se.x*.45,Se.y*.35,-.46),Ae=B*(v?.2:1)*(.6+r()*.65),de=.075+r()*.13,Ce=r()*.22;for(let we=0;we<2;we++){let le=we?new P().crossVectors(U,se).normalize():se,xe=E.length/3;for(let Fe=0;Fe<=4;Fe++){let be=Fe/4,ye=Ae*be*.88,Xe=Ae*be*be*.9,N=R.x+U.x*ye+$.x*Xe,fe=R.y+U.y*ye+$.y*Xe,ve=R.z+U.z*ye+$.z*Xe,Le=de*(1-be*.93),ue=.28+be*.58+Ce;for(let ce of[-1,1]){let Ue=Le*ce;E.push(N+le.x*Ue,fe+le.y*Ue,Math.max(.2,ve+le.z*Ue)),y.push(U.x,U.y,U.z),x.push(T.r+(I.r-T.r)*ue,T.g+(I.g-T.g)*ue,T.b+(I.b-T.b)*ue),f.push(ue),C.push(ce===-1?0:1,be)}}for(let Fe=0;Fe<4;Fe++){let be=xe+Fe*2;b.push(be,be+1,be+2,be+1,be+3,be+2)}}}}e!=="peek"&&(S([0,6,10],[10.5,15,9.7],15200,3.3),S([0,19,6],[7.4,9,5.7],4600,2.9),S([1,26,4],[4.7,7,3.4],2200,2.5));let M=new Ze;s.add(M),S([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let L=[],D=[],F=[],V=[];for(let[ae,A]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let O=new Ze;O.name="soft-paw",O.userData.home={x:ae,y:A},O.position.set(ae,A,1.35),O.rotation.z=ae<0?-.13:.13,n.add(O);let B=new mt(1,40,28),X=B.attributes.position;for(let ne=0;ne<X.count;ne++){let Ne=X.getX(ne),Se=X.getY(ne),R=X.getZ(ne),v=2.15*(1-.22*Math.max(0,Se)),U=Se<-.35?.09*Math.cos(Ne*Math.PI*2.4)*-Se:0;X.setXYZ(ne,Ne*v,Se*3.4-U,Math.max(-1.3,R*1.35)+Math.max(0,Se)*.45)}B.computeVertexNormals();let G=new Be(B,o);G.castShadow=G.receiveShadow=!0,O.add(G);let j=d(n,o,0,0,0,1,1,1);j.name="rigid-upper-leg",F.push(j);let J=d(n,o,0,0,0,1,1,1);J.name="rigid-lower-leg",V.push(J),D.push(new P(ae*.86,A+1.4,6.1)),L.push(O)}let k=(ae,A)=>-8-11.5*Math.sqrt(Math.max(.025,1-(ae/13.1)**2-((A-20)/12.2)**2));function W(ae,A,O,B,X,G,j){let J=[],ne=[];for(let U=0;U<=12;U++)for(let Y=0;Y<=64;Y++){let se=U/12,$=Y/64*Math.PI*2,Ae=Math.cos($)*X*se,de=Math.sin($)*G*se;J.push(Ae,k(O+Ae,B+de)-j-.27*(1-se*se),de)}for(let U=0;U<12;U++)for(let Y=0;Y<64;Y++){let se=U*65+Y,$=se+64+1;ne.push(se,$,se+1,se+1,$,$+1)}let R=new _t;R.setAttribute("position",new Ke(J,3)),R.setIndex(ne),R.computeVertexNormals();let v=new Be(R,A);return v.position.set(O,0,B),ae.add(v),v}let re=new Ze;re.name="happy-crescent-eyes",M.add(re),re.visible=!1;for(let ae of[-1,1]){let A=[];for(let O=0;O<=20;O++){let B=ae*5.6+(O/20-.5)*5.3,X=23.3+Math.sin(O/20*Math.PI)*1.35;A.push(new P(B,k(B,X)-.3,X))}re.add(new Be(new hn(new ln(A),24,.3,7,!1),h))}let q=[];for(let ae of[-1,1]){let A=ae*5.6,O=23.4,B=new Ze;B.name="embedded-eye",M.add(B),W(B,l,A,O,3.95,4.7,.11),W(B,p,A,O-.1,2.65,3.25,.3),W(B,h,A,O+.1,1.75,2.45,.49),d(B,u,A-.8,k(A-.8,O+1.5)-.78,O+1.5,.72,.2,.82),d(B,u,A+.65,k(A+.65,O-.65)-.78,O-.65,.26,.16,.3),q.push(B);let X=[];for(let j=0;j<=64;j++){let J=j/64*Math.PI*2,ne=A+Math.cos(J)*4.05,Ne=O+Math.sin(J)*4.8;X.push(new P(ne,k(ne,Ne)-.05,Ne))}M.add(new Be(new hn(new ln(X),80,.37,8,!1),o)),d(M,c,ae*8.3,-17.2,16,2.05,.5,1.05);let G=[];for(let j=0;j<=12;j++){let J=ae*5.6+(j/12-.5)*4.5,ne=28.7+Math.sin(j/12*Math.PI)*.65;G.push(new P(J,k(J,ne)-.14,ne))}M.add(new Be(new hn(new ln(G),16,.26,6,!1),o))}d(M,l,0,-18.9,16.4,5.2,1.7,2.7),d(M,c,0,-20.6,17.7,1.65,1.05,1.1);let ee=[];for(let ae=0;ae<=20;ae++){let A=(ae/20-.5)*6.6;ee.push(new P(A,-20.35+Math.abs(A)*.14,14.7+.105*A*A))}let Z=new Be(new hn(new ln(ee),24,.22,6,!1),h);M.add(Z);let oe=[];for(let ae of[-1,1]){let j=function(J,ne=!1,Ne=0){let Se=Math.sin(J*1.4+ae*.7),R=Math.sin(J*2.2+ae)*.12;O.v2.set(ae*(1.7+Se*.35),-1.4+R,11.4),O.v3.set(ae*(5.2+Se*.55+Ne),-1.9+Math.sin(J*1.2+ae)*.35,10.2+R+Ne*.4+(ne?Math.sin(J*5+ae)*.15:0));let v=O.computeFrenetFrames(26,!1),U=B.attributes.position,Y=B.attributes.normal;for(let se=0;se<=26;se++){let $=se/26,Ae=O.getPoint($),de=.44*(1-$)+.23*$;for(let Ce=0;Ce<=8;Ce++){let we=Ce/8*Math.PI*2,le=v.normals[se].clone().multiplyScalar(-Math.cos(we)).addScaledVector(v.binormals[se],Math.sin(we)),xe=Ae.clone().addScaledVector(le,de),Fe=se*9+Ce;U.setXYZ(Fe,xe.x,xe.y,xe.z),Y.setXYZ(Fe,le.x,le.y,le.z)}}U.needsUpdate=Y.needsUpdate=!0,B.computeBoundingSphere(),G.position.copy(O.v3)},A=new Ze;A.name="soft-curved-antenna",A.position.set(ae*6.7,-5,30),s.add(A);let O=new ss(new P,new P(ae*.25,-.2,4.6),new P(ae*1.7,-1.4,11.4),new P(ae*5.2,-1.9,10.2)),B=new hn(O,26,.4,8,!1),X=new Be(B,o);A.add(X);let G=d(A,l,ae*5.2,-1.9,10.2,1.65,1.65,1.9);j(0),oe.push({group:A,flex:j})}let ge=new _t;ge.setAttribute("position",new vt(E.view(),3)),ge.setAttribute("normal",new vt(y.view(),3)),ge.setAttribute("color",new vt(x.view(),3)),ge.setAttribute("uv",new vt(C.view(),2)),ge.setIndex(new vt(b.view(),1));let Pe=f.view(),Ee=new Uint8Array(2048*4);for(let ae=0;ae<64;ae++)for(let A=0;A<32;A++){let O=(ae*32+A)*4,B=Math.abs((A+.5)/32*2-1),X=Math.round(255*Math.pow(1-B,.55)*(1-.75*Math.pow(ae/63,4)));Ee[O]=Ee[O+1]=Ee[O+2]=X,Ee[O+3]=255}let Ie=new _n(Ee,32,64);Ie.needsUpdate=!0,Ie.magFilter=Ie.minFilter=Et;let te=new it({vertexColors:!0,alphaMap:Ie,transparent:!0,opacity:.85,depthWrite:!1,side:$t,roughness:1}),ie=new Be(ge,te);ie.name="curved-soft-fur",ie.frustumCulled=!1,s.add(ie);let me;function Re(ae){let A=sl[ae];if(!A)throw Error("Unknown creature palette "+ae);me??=il({group:t},Pe),me.apply(A),t.userData.palette=ae}let _e=new Ze;_e.name="completion-pollen",_e.visible=!1,t.add(_e);let Ve=new mt(.32,8,6);for(let ae=0;ae<9;ae++){let A=new Be(Ve,new it({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));_e.add(A)}return Re("apricot"),{group:t,setPalette:Re,applyAppearance(ae){me??=il({group:t},Pe),me.apply(ae)},update(ae,A=0,O={}){let B=Bu(O.celebrationAge??-1,O.celebrationStyle),X=!B.active&&(O.active??(A>0&&A<1));if(n.position.z=B.lift,n.rotation.x=B.pitch,n.rotation.y=B.roll+B.turnStep*Math.sin((O.celebrationAge??0)*16)*.018,n.scale.set(1+B.squash*.4,1+B.squash*.4,1-B.squash),re.visible=B.happy>.55,q.forEach(G=>G.visible=!re.visible),Z.scale.x=1+B.happy*.18,_e.visible=B.pollen>0,_e.children.forEach((G,j)=>{let J=Math.min(1.8,Math.max(0,(O.celebrationAge??0)-1.5)),ne=j*2.4;G.position.set(Math.cos(ne)*(9+J*3)+Math.sin(J*2+j)*.7,Math.sin(ne)*(8+J*3),8+J*(8+j*.4)),G.material.opacity=B.pollen*(.5+j%3*.12)}),s.position.z=Math.sin(ae*2)*.13+(X?Math.sin(A*Math.PI*16)*.22:0),s.rotation.y=X?Math.sin(A*Math.PI*16)*.012:Math.sin(ae*.8)*.012,M.rotation.set(0,0,0),q.forEach(G=>{G.scale.set(1,1,1),G.position.set(0,0,0)}),L.forEach((G,j)=>{let J=G.userData.home,ne=(O.celebrationAge??0)*17+j*Math.PI/2,Ne=B.turnStep*Math.max(0,Math.sin(ne))*1.25,Se=X?O.travel!==void 0?ku(O.travel,j,t.scale.x):zu(O.progress??A,j,{distance:O.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};G.position.set(J.x+B.turnStep*Math.cos(ne)*.65,J.y+Se.y+B.turnStep*Math.sin(ne)*.65+(B.active?Math.sin((O.celebrationAge??0)*7+j*Math.PI/2)*B.tuck*.5:0),1.35+Se.z+Ne+B.tuck*(j<2?1:O.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((O.celebrationAge??0)*4+j*1.6)*.12)),G.rotation.x=Se.pitch-B.tuck*(j<2?.08:.035);let R=D[j].clone();R.z+=s.position.z;let v=new P(G.position.x,G.position.y+.65,G.position.z+1.05),U=v.clone().sub(R),Y=Math.min(6.95,Math.max(.6,U.length()));U.normalize(),v.copy(R).addScaledVector(U,Y),G.position.copy(v).add(new P(0,-.65,-1.05));let se=3.8,$=3.4,Ae=(se*se-$*$+Y*Y)/(2*Y),de=Math.sqrt(Math.max(0,se*se-Ae*Ae)),Ce=new P(0,1,0).addScaledVector(U,-U.y).normalize(),we=R.clone().addScaledVector(U,Ae).addScaledVector(Ce,de);function le(xe,Fe,be,ye){let Xe=be.clone().sub(Fe);xe.position.copy(Fe).addScaledVector(Xe,.5),xe.quaternion.setFromUnitVectors(new P(0,1,0),Xe.normalize()),xe.scale.set(ye,Fe.distanceTo(be)/2,ye)}le(F[j],R,we,1.2),le(V[j],we,v,1.1)}),oe.forEach((G,j)=>G.flex(ae,X,B.antenna*(j?.78:1))),e==="peek"){let j=new P(0,-8,20),J=O.peekGreetingAge??-1,ne=J>=0&&J<1.3?Math.sin(J/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(ae*.65)*.012,Math.sin(Math.max(0,J)*4)*.05*ne);let Ne=j.clone().applyEuler(s.rotation);s.position.copy(j).sub(Ne),s.position.z+=Math.sin(ae*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),L.forEach((v,U)=>{v.visible=U<2,v.position.set(U===0?-12:12,-17,10),v.rotation.set(.12,0,U===0?-.16:.16)}),F.forEach(v=>v.visible=!1),V.forEach(v=>v.visible=!1);let Se=ae%7.3,R=Se>4.9&&Se<5.03||Se>5.22&&Se<5.3;q.forEach(v=>v.visible=!R),re.visible=R}},setSize(ae){t.scale.setScalar(ae/100)},dispose(){let ae=new Set,A=new Set;t.traverse(O=>{O.geometry&&ae.add(O.geometry),O.material&&A.add(O.material)}),ae.forEach(O=>O.dispose()),A.forEach(O=>O.dispose()),Ie.dispose()}}}var S_={cast:"A \xB7 Elfenbeinguss",soft:"B \xB7 Weich modelliert",satin:"C \xB7 Matter Schliff"},Hu=[];for(let i=0;i<8;i++)for(let[e,t]of[[-.32,8],[-.18,10],[.18,10],[.32,8]]){let n=(i+e)*Math.PI/4;Hu.push((12+Math.cos(n)*t).toFixed(3)+","+(12+Math.sin(n)*t).toFixed(3))}var al={undo:'<path d="M9 4 3 10l6 6M3 10h10a6 6 0 0 1 0 12h-2" transform="translate(1 -1)"/>',hint:'<path d="M9 16c0-2-3.5-3.6-3.5-7.5a6.5 6.5 0 0 1 13 0c0 3.9-3.5 5.5-3.5 7.5ZM9 19h6M10 22h4M9.5 9.5 12 12l2.5-2.5M12 12v4"/>',reset:'<path d="M20 10a8.5 8.5 0 1 0-.5 7M20 3.5V10h-6.5"/>',home:'<path d="m3 10 9-7 9 7M5.5 8v13h5v-7h3v7h5V8"/>',settings:'<polygon points="'+Hu.join(" ")+'"/><circle cx="12" cy="12" r="3.25"/>'},b_={undo:"Zur\xFCck",hint:"Tipp",reset:"Neu",home:"Startseite",settings:"Einstellungen"};function ol({action:i="undo",variant:e="cast",compact:t=!1,gold:n=!1,engraved:s=!1,deep:r=!1,ink:a="#704a2c",label:o=b_[i]}={}){if(!al[i]||!S_[e])throw Error("Unknown ivory control");let l=document.createElement("button");if(l.type="button",l.className="ivory-control"+(t?" compact":""),l.dataset.action=i,l.dataset.variant=e,l.dataset.gold=String(n),l.dataset.engraved=String(s),l.dataset.deep=String(r),!/^#[0-9a-f]{6}$/i.test(a))throw Error("Invalid ink colour");l.style.setProperty("--ivory-ink",a),l.setAttribute("aria-label",o);let c=document.createElement("span");c.className="ivory-face",c.setAttribute("aria-hidden","true");let h=document.createElement("span");if(h.className="ivory-content",h.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g class="engrave-edge" transform="translate(0 .65)">'+al[i]+'</g><g class="engrave-ink">'+al[i]+"</g></svg>",!t){let u=document.createElement("span");u.className="ivory-label",u.textContent=o,h.append(u)}return l.append(c,h),l}var E_=performance.now(),dl=!0,He=i=>document.getElementById(i),Sn=LEVELS,fr,fl=[];try{fr=localStorage.getItem("slink-curated-v1-level-id");let i=typeof SLINK_LEGACY_IDS<"u"?SLINK_LEGACY_IDS:Sn.map(t=>t.id);fr??=i[Number(localStorage.getItem("slink-curated-v1-level"))||0];let e=localStorage.getItem("slink-curated-v1-done-ids");fl=e?JSON.parse(e):JSON.parse(localStorage.getItem("slink-curated-v1-done")||"[]").map(t=>i[t])}catch{}var Gu=new Set(Sn.map(i=>i.id)),Qt=new Set((Array.isArray(fl)?fl:[]).filter(i=>Gu.has(i))),_s=Sn.find(i=>i.id===fr)||Sn[0],fn=[];for(let i of Sn){let e=fn.find(t=>t.set===i.set);e||(e={set:i.set,name:i.set.replace(/^\S+\s*·\s*/,""),levels:[],description:["Die ersten Schritte. Ein kleiner Anfang voller M\xF6glichkeiten.","Ein Umweg am Gartenzaun kann Wunder wirken.","Mit jedem Weg wird dein Garten ein wenig gr\xFCner.","Manchmal f\xFChrt der sch\xF6nste Weg au\xDFen herum.","Welcher Weg l\xE4sst wirklich alles bl\xFChen?","Kleine Inseln, ruhige Ufer und neue Wege.","Finde deinen Weg zwischen den blauen Becken.","Schmale Durchg\xE4nge. Gro\xDFe Aha-Momente.","Hinter jedem Zaun wartet ein neuer Gedanke.","Nimm dir Zeit. Manche Wege zeigen sich erst beim zweiten Blick.","Ein paar Z\xE4une. Viele M\xF6glichkeiten zum T\xFCfteln.","F\xFCr alle, die gern noch einen Gedanken weitergehen.","Um die Ecke gedacht, bis alles bl\xFCht.","Ein Garten f\xFCr geduldige Entdecker.","Deine letzte Lichtung wartet darauf, gr\xFCn zu werden."][fn.length]},fn.push(e)),e.levels.push(i)}var pr=fn.find(i=>i.set===_s.set),zn=fn.find(i=>i.levels.some(e=>!Qt.has(e.id)))||pr,Ii=zn,bo="path",Pi="home",gl=_s,pl=matchMedia("(prefers-reduced-motion: reduce)").matches;function ii(i,e=zn){i!=="journal"&&(location.hash.startsWith("#journal")||location.hash==="#playing")&&history.replaceState({},"",location.pathname+location.search),Pi=i;for(let t of["home","gardens","levels","journal"])He(t+"Screen").hidden=t!==i;He("navHome").setAttribute("aria-current",i==="home"?"page":"false"),He("navGardens").setAttribute("aria-current",["gardens","levels"].includes(i)?"page":"false"),He("navFriend").setAttribute("aria-current",i==="journal"?"page":"false"),_l.setAttribute("aria-label",i==="home"?"Aktuellen Garten ansehen":"Zur\xFCck"),He(i+"Screen").scrollTop=0,window.scrollTo({top:0,behavior:"instant"}),i==="gardens"&&requestAnimationFrame(()=>{let t=He("gardensScreen"),n=t.querySelector('[data-garden-index="'+fn.indexOf(e)+'"]');if(!n)return;let s=t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top-(t.clientHeight-n.offsetHeight)/2;t.scrollTo({top:Math.max(0,s),behavior:"instant"})})}var _l=He("backSlot").querySelector("button")||ol({action:"undo",compact:!0,variant:"satin",engraved:!0});_l.onclick=()=>Pi==="journal"&&window.SlinkJourneyMenu?.back()?void 0:Pi==="levels"?ii("gardens",Ii):["gardens","journal"].includes(Pi)?ii("home"):xl(zn);He("backSlot").append(_l);var Wu=He("settingsSlot").querySelector("button")||ol({action:"settings",compact:!0,variant:"satin",engraved:!0});Wu.onclick=()=>He("aboutDialog").showModal();He("settingsSlot").append(Wu);He("continueText").textContent=pr.name+" \xB7 R\xE4tsel "+(pr.levels.indexOf(_s)+1);He("totalDone").textContent=Qt.size+" / "+Sn.length;He("totalBar").style.width=Qt.size/Sn.length*100+"%";He("gardenSummary").textContent=fn.length+" G\xE4rten \xB7 "+Sn.length+" kleine Herausforderungen. Alle frei zug\xE4nglich.";var vs=document.createElement("button");vs.className="resume-garden";vs.innerHTML="<small>DEIN AKTUELLER GARTEN</small><strong></strong><span>Weiter entdecken \u2192</span>";vs.querySelector("strong").textContent=zn.name;vs.onclick=()=>xl(zn);He("gardensScreen").insertBefore(vs,He("gardenCards"));He("discover").onclick=He("navGardens").onclick=()=>ii("gardens");He("navHome").onclick=()=>ii("home");function xl(i){Ii=i,He("chapterKicker").textContent="GARTEN "+String(fn.indexOf(i)+1).padStart(2,"0"),He("chapterTitle").textContent=i.name;let e=i.levels.filter(t=>Qt.has(t.id)).length;He("chapterProgress").textContent=e+" / "+i.levels.length,He("chapterBar").style.width=e/i.levels.length*100+"%",Xu(),ii("levels"),requestAnimationFrame(()=>vl())}function Vu(){return Ii.levels.find(i=>!Qt.has(i.id))}function Xu(){let i=He("levelChoices");i.querySelector("svg")?._observer?.disconnect(),i.className=bo+"-view",i.replaceChildren();for(let[e,t]of Ii.levels.entries()){let n=document.createElement("button");n.className="level-node"+(Qt.has(t.id)?" done":"")+(t.id===Vu()?.id?" next":""),n.dataset.levelId=t.id,t.id===Vu()?.id&&n.setAttribute("aria-current","step"),bo==="path"&&(n.style.transform="translateX("+[-53,0,53,0][e%4]+"px)"),n.textContent=e+1,n.setAttribute("aria-label","R\xE4tsel "+(e+1)+(Qt.has(t.id)?", erbl\xFCht":", noch offen")),n.onclick=()=>{gl=t,window.SlinkJourneyMenu?.selectLevel(t),He("playSelected").textContent="R\xE4tsel spielen \u2192",He("selectedGarden").textContent=Ii.name,He("selectedTitle").textContent="R\xE4tsel "+(e+1),He("selectedInfo").textContent=t.solution.length+" Felder \xB7 "+t.marks.length+" Ziele \xB7 "+(Qt.has(t.id)?"Bereits erbl\xFCht. Noch einmal genie\xDFen?":t.difficulty),He("levelDialog").showModal()},i.append(n)}if(bo==="path"){let e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.classList.add("path-line"),e.setAttribute("aria-hidden","true"),i.prepend(e);let t=()=>{let s=i.clientWidth;if(!s)return;let r=Ii.levels.length*75+40;e.setAttribute("viewBox","0 0 "+s+" "+r),e.style.height=r+"px";let a="";for(let o=0;o<Ii.levels.length;o++){let l=s/2+[-53,0,53,0][o%4],c=52+o*75;if(!o)a="M"+l+" "+c;else{let h=s/2+[-53,0,53,0][(o-1)%4],u=c-75;a+=" C"+h+" "+(u+38)+" "+l+" "+(c-38)+" "+l+" "+c}}e.innerHTML='<path d="'+a+'"/>'};requestAnimationFrame(t);let n=new ResizeObserver(t);n.observe(i),e._observer=n}w_()}for(let i of document.querySelectorAll("[data-view]"))i.onclick=()=>{bo=i.dataset.view,document.querySelectorAll("[data-view]").forEach(e=>e.setAttribute("aria-pressed",String(e===i))),Xu(),requestAnimationFrame(()=>vl())};var cl;function w_(){cl?.disconnect();let i=He("levelChoices").querySelector(".level-node.next");He("jumpCurrent").hidden=!0,i&&(cl=new IntersectionObserver(e=>{Pi==="levels"&&(He("jumpCurrent").hidden=e[0].intersectionRatio>=.99)},{root:He("levelsScreen"),threshold:[0,.99,1]}),cl.observe(i))}function vl(i=!1){if(Pi!=="levels")return;let e=He("levelsScreen"),t=He("levelChoices").querySelector(".level-node.next");if(!t){He("jumpCurrent").hidden=!0;return}let n=e.scrollTop+t.getBoundingClientRect().top-e.getBoundingClientRect().top-(e.clientHeight-t.offsetHeight)/2;e.scrollTo({top:Math.max(0,n),behavior:i&&!pl?"smooth":"instant"}),t.focus({preventScroll:!0})}He("jumpCurrent").onclick=()=>vl(!0);He("playSelected").onclick=()=>{try{localStorage.setItem("slink-curated-v1-level-id",gl.id)}catch{}window.SlinkOpenPrepared?(He("playSelected").textContent="Dein Garten wird vorbereitet \u2026",window.SlinkOpenPrepared()):location.href="slink.html"};for(let i of document.querySelectorAll("[data-close]"))i.onclick=()=>He(i.dataset.close).close();function qu(i){let e=new uo({canvas:i,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});return e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ma,e.toneMapping=ba,e.toneMappingExposure=.88,e}function Yu(){let i=new gi;i.add(new Mi("#fff6dc","#a28d6c",1.65));let e=new jn("#fff4dc",3.3);return e.position.set(-200,200,650),e.target.position.set(200,-200,0),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-400,right:400,top:400,bottom:-400,near:1,far:1500}),e.shadow.bias=-3e-4,e.shadow.normalBias=.4,i.add(e,e.target),i}function Zu(i,e){let t=new xn(-i*52*e,i*52*e,i*52,-i*52,1,1800);return t.up.set(0,0,1),t.position.set(i*40,-i*40-470,1e3),t.lookAt(i*40,-i*40,10),t}var Li=He("gardenHero"),gs=qu(Li),ys=Yu(),Di=5,Ju=[1,2,3,5,6,7,8,9,10,11,12,13,14,16,17,18,22],$u=[8,9],Ku=mo({n:Di,cells:Ju,water:$u,lava:[],stones:[],style:"soft"});ys.add(Ku.group);var To=[];for(let i of Ju.filter(e=>!$u.includes(e))){let e=_o(["classic","rich","flowers","tuft"][i%4],{seed:930+i});e.group.position.set(i%Di*80+40,-Math.floor(i/Di)*80-40,0),ys.add(e.group),To.push(e)}for(let i of Ku.openings){let e=xo("water",{style:"sway",center:[200,-200]}),t=new Be(new Rt(i.shape,{depth:2,bevelEnabled:!1,curveSegments:20}),e.material);t.position.z=i.surfaceZ-2,ys.add(t),To.push(e)}for(let[i,e]of[[6,"daisy"],[13,"poppy"],[17,"daisy"]]){let t=yo({species:e,state:"bloom",insects:!1});t.group.rotation.x=Math.PI/2,t.group.position.set(i%Di*80+40,-Math.floor(i/Di)*80-40,12),t.setSize(27),ys.add(t.group),To.push(t)}var xs=rl({presentation:"peek"});ys.add(xs.group);var dn={size:100,palette:"apricot"},ll=new Map,Mo,So;window.SlinkNurbiPreview=i=>{if(ll.has(i))return ll.get(i);if(!Mo){Mo=rl(),So=Yu(),So.add(Mo.group);let r=new Be(new qs(40,64),new it({color:"#f2e4c8",roughness:1}));r.position.set(0,8,-.15),r.scale.y=.8,r.receiveShadow=!0,So.add(r)}let e=Mo,t=e.group,n=So,s=gs.getSize(new he);try{e.setPalette(i),e.update(0,0,{active:!1});let r=new xn(-95,95,84,-42,1,1e3);r.up.set(0,0,1);let a=new Jt().setFromObject(t),o=a.getCenter(new P);r.position.set(o.x+220,o.y-300,o.z+180),r.lookAt(o),r.updateMatrixWorld(!0);let l=[];for(let f of[a.min.x,a.max.x])for(let E of[a.min.y,a.max.y])for(let y of[a.min.z,a.max.z])l.push(new P(f,E,y).applyMatrix4(r.matrixWorldInverse));let c=Math.min(...l.map(f=>f.x)),h=Math.max(...l.map(f=>f.x)),u=Math.min(...l.map(f=>f.y)),p=Math.max(...l.map(f=>f.y)),d=Math.max(p-u,(h-c)/1.5)+6,g=(c+h)/2,_=(u+p)/2;r.left=g-d*.75,r.right=g+d*.75,r.top=_+d/2,r.bottom=_-d/2,r.updateProjectionMatrix(),gs.setSize(360,240,!1),gs.render(n,r);let m=Li.toDataURL("image/webp",.9);return ll.set(i,m),m}finally{gs.setSize(s.x,s.y,!1)}};try{let i=JSON.parse(localStorage.getItem("slink-home-friend")||"null");Number.isFinite(i?.size)&&(dn.size=Math.max(75,Math.min(135,i.size))),sl[i?.palette]&&(!window.NurbiRewardStore||window.NurbiRewardStore.available(i.palette))&&(dn.palette=i.palette)}catch{}function ju(){window.NurbiRewardStore?.populate(He("homeFriendPalette"),dn.palette);let i=3.5*dn.size/100;xs.setPalette(dn.palette),xs.group.scale.setScalar(i),xs.group.position.set(200,17*i+7,3-8.65*i),He("homeFriendSize").value=dn.size,He("homeFriendSizeValue").textContent=dn.size+" %",He("homeFriendPalette").value=dn.palette}function Qu(){dl=!0,ju();try{localStorage.setItem("slink-home-friend",JSON.stringify(dn))}catch{}}He("homeFriendSize").oninput=i=>{dn.size=Number(i.target.value),Qu()};He("homeFriendPalette").onchange=i=>{dn.palette=i.target.value,Qu()};ju();xs.update(0,0,{active:!1});var Bn=Zu(Di,1.6);function ed(){let i=Li.clientWidth,e=Li.clientHeight;gs.setSize(i,e,!1),Bn=Zu(Di,i/e),Bn.left=-300*i/e,Bn.right=300*i/e,Bn.top=320,Bn.bottom=-280,Bn.position.set(200,-660,1100),Bn.lookAt(200,-155,10),Bn.updateProjectionMatrix()}new ResizeObserver(ed).observe(Li);ed();var hl=0;function td(i){if(requestAnimationFrame(td),document.hidden||window.SlinkPlayingPrepared||Pi!=="home"||i-hl<80)return;let e=Math.min(.05,(i-hl)/1e3);if(hl=i,To.forEach(t=>t.update(pl?0:i/1e3,e)),xs.update(pl?0:i/1e3,0,{active:!1}),gs.render(ys,Bn),dl){dl=!1,Li.dataset.firstFrameMs=Math.round(performance.now()-E_),He("gardenHeroPreview").hidden=!0;try{localStorage.setItem("slink-home-preview-v1",JSON.stringify({looksVersion:1,friend:localStorage.getItem("slink-home-friend")||"default",src:Li.toDataURL("image/webp",.85)}))}catch{}}}requestAnimationFrame(td);var ms,Eo=new Map,wo=[],ul=!1;function nd(i,e){return"slink-garden-thumb-v3-"+i}function id(){ul||!wo.length||(ul=!0,setTimeout(()=>{let i=wo.shift();try{ms||(ms=qu(document.createElement("canvas")),ms.setPixelRatio(1),ms.setSize(680,460,!1));let e=Pu(i.index,i.ratio);ms.render(e.scene,Lu(e.bounds,680/460)),i.image.src=ms.domElement.toDataURL("image/webp",.85),e.dispose();try{localStorage.setItem(nd(i.index,i.ratio),JSON.stringify({ratio:Math.round(i.ratio*1e3),src:i.image.src}))}catch{}}finally{ul=!1,id()}},32))}var ml=new IntersectionObserver(i=>{for(let e of i)if(e.isIntersecting){let t=Eo.get(e.target);if(!t)continue;wo.push(t),Eo.delete(e.target),ml.unobserve(e.target)}id()},{root:He("gardensScreen"),rootMargin:"80px"});function sd(){ml.disconnect(),Eo.clear(),wo.length=0,He("gardenCards").replaceChildren();for(let[i,e]of fn.entries()){let t=e.levels.filter(_=>Qt.has(_.id)).length,n=t/e.levels.length,s=document.createElement("button");s.className="garden-card landscape-card"+(e===zn?" current":""),s.dataset.gardenIndex=i,s.setAttribute("aria-label",e.name+", "+t+" von "+e.levels.length+" erbl\xFCht");let r=document.createElement("div");r.className="chapter-landscape "+["meadow","fence","meadow","fence","stone","river","river","stone","fence","stone","fence","stone","river","stone","river"][i];let a=document.createElement("img");a.alt="",a.width=680,a.height=460,r.append(a);let o=document.createElement("div");o.className="landscape-card-body";let l=document.createElement("span");l.className="kicker",l.textContent="GARTEN "+String(i+1).padStart(2,"0");let c=document.createElement("h2");c.textContent=e.name;let h=document.createElement("span");h.className="card-count",h.textContent=t+" / "+e.levels.length+" erbl\xFCht";let u=document.createElement("span");u.className="card-arrow",u.textContent="\u2192",u.setAttribute("aria-hidden","true");let p=document.createElement("div");p.className="progress-track";let d=document.createElement("i");if(d.style.width=n*100+"%",p.append(d),o.append(l,c,h,p,u),s.append(r,o),e===zn){let _=document.createElement("span");_.className="current-tag",_.textContent="DU BIST HIER",r.append(_)}s.onclick=()=>xl(e),He("gardenCards").append(s);let g;try{let _=JSON.parse(localStorage.getItem(nd(i,n))||"null");_?.ratio===Math.round(n*1e3)&&(g=_.src)}catch{}g?.startsWith("data:image/webp")?a.src=g:(Eo.set(s,{index:i,ratio:n,image:a}),ml.observe(s))}}sd();window.SlinkRefreshMenu=()=>{let i=[];try{fr=localStorage.getItem("slink-curated-v1-level-id"),i=JSON.parse(localStorage.getItem("slink-curated-v1-done-ids")||"[]")}catch{}Qt.clear();for(let e of Array.isArray(i)?i:[])Gu.has(e)&&Qt.add(e);_s=Sn.find(e=>e.id===fr)||Sn[0],pr=fn.find(e=>e.set===_s.set),zn=fn.find(e=>e.levels.some(t=>!Qt.has(t.id)))||pr,gl=_s,vs.querySelector("strong").textContent=zn.name,window.SlinkShellRefresh(),window.SlinkJourneyMenu?.refresh(),sd(),ii("home")};ii(location.hash.startsWith("#journal")?"journal":"home");window.SlinkOpenJournal=(i=!1)=>{i||window.SlinkJourneyMenu?.overview(),ii("journal"),window.SlinkJourneyMenu?.render()};He("navFriend").onclick=()=>window.SlinkOpenJournal();location.hash.startsWith("#journal")&&window.SlinkOpenJournal(!0);window.SlinkMenuReady=!0;document.dispatchEvent(new Event("slink-menu-ready"));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
