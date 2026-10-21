(()=>{var Sl=0,Zo=1,El=2;var Jo=1,na=2,gn=3,Rn=0,Dt=1,Ot=2,Dn=0,ri=1,$o=2,Ko=3,jo=4,wl=5,Xn=100,Tl=101,Al=102,Rl=103,Cl=104,Il=200,Pl=201,Ll=202,Dl=203,Cr=204,Ir=205,Ul=206,Nl=207,Fl=208,Ol=209,Bl=210,zl=211,kl=212,Hl=213,Vl=214,ia=0,sa=1,ra=2,ai=3,aa=4,oa=5,ca=6,la=7,Qo=0,Gl=1,Wl=2,Un=0,Xl=1,ql=2,Yl=3,ha=4,Zl=5,Jl=6,$l=7;var ec=300,pi=301,mi=302,ua=303,fa=304,Xs=306,Oi=1e3,Wn=1001,Pr=1002,Ft=1003,Kl=1004;var qs=1005;var Pt=1006,da=1007;var $n=1008;var ln=1009,tc=1010,nc=1011,Ki=1012,pa=1013,Kn=1014,xn=1015,ji=1016,ma=1017,ga=1018,Qi=1020,ic=35902,sc=35899,rc=1021,ac=1022,$t=1023,Bi=1026,es=1027,oc=1028,xa=1029,cc=1030,_a=1031;var ya=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,va=35840,Ma=35841,ba=35842,Sa=35843,Ea=36196,wa=37492,Ta=37496,Aa=37808,Ra=37809,Ca=37810,Ia=37811,Pa=37812,La=37813,Da=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Ha=36492,Va=36494,Ga=36495,Wa=36283,Xa=36284,qa=36285,Ya=36286;var gs=2300,Lr=2301,Rr=2302,Uo=2400,No=2401,Fo=2402;var jl=3200,Ql=3201;var lc=0,eh=1,Nn="",xt="srgb",oi="srgb-linear",xs="linear",nt="srgb";var si=7680;var Oo=519,th=512,nh=513,ih=514,hc=515,sh=516,rh=517,ah=518,oh=519,Bo=35044;var uc="300 es",tn=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=1234567,fs=Math.PI/180,zi=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function Su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eu(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function wu(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function Tu(i,e=1){return e-Math.abs(fc(i,e*2)-e)}function Au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Iu(i,e){return i+Math.random()*(e-i)}function Pu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(qc=i);let e=qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Du(i){return i*fs}function Uu(i){return i*zi}function Nu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt={DEG2RAD:fs,RAD2DEG:zi,generateUUID:gi,clamp:Ke,euclideanModulo:fc,mapLinear:Su,inverseLerp:Eu,lerp:ds,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Iu,randFloatSpread:Pu,seededRandom:Lu,degToRad:Du,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:It,denormalize:Ni},pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==d||c!==p||h!==g){let m=1-o,u=l*d+c*p+h*g+f*x,b=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let I=Math.sqrt(_),S=Math.atan2(I,u*b);m=Math.sin(m*S)/I,o=Math.sin(o*S)/I}let y=o*b;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,f=f*m+x*y,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=I,c*=I,h*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-o*p,e[t+2]=c*g+h*p+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oo=new z,Yc=new In,We=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],u=s[6],b=s[1],_=s[4],y=s[7],I=s[2],S=s[5],C=s[8];return r[0]=a*x+o*b+l*I,r[3]=a*m+o*_+l*S,r[6]=a*u+o*y+l*C,r[1]=c*x+h*b+f*I,r[4]=c*m+h*_+f*S,r[7]=c*u+h*y+f*C,r[2]=d*x+p*b+g*I,r[5]=d*m+p*_+g*S,r[8]=d*u+p*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},co=new We;function dc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=ys("canvas");return i.style.display="block",i}var Zc={};function ki(i){i in Zc||(Zc[i]=!0,console.warn(i))}function lh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Jc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:Jc,fromXYZ:$c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Jc,fromXYZ:$c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Qe=zu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,Dr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=ys("canvas")),Si.width=e.width,Si.height=e.height;let s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ku=0,Hi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,ho=new z,Lt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Pt,a=$n,o=$t,l=ln,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=gi(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ec;Lt.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,I=(u+1)/2,S=(h+d)/4,C=(f+x)/4,L=(g+m)/4;return _>y&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=C/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ur=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Ur{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nr=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),ar.subVectors(this.max,as),Ei.subVectors(e.a,as),wi.subVectors(e.b,as),Ti.subVectors(e.c,as),On.subVectors(wi,Ei),Bn.subVectors(Ti,wi),ei.subVectors(Ei,Ti);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!uo(t,Ei,wi,Ti,ar)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,Ei,wi,Ti,ar))?!1:(or.crossVectors(On,Bn),t=[or.x,or.y,or.z],uo(t,Ei,wi,Ti,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new z,new z,new z,new z,new z,new z,new z,new z],jt=new z,rr=new dn,Ei=new z,wi=new z,Ti=new z,On=new z,Bn=new z,ei=new z,as=new z,ar=new z,or=new z,ti=new z;function uo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);let o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vu=new dn,os=new z,fo=new z,ci=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);let t=os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(fo)),this.expandByPoint(os.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new z,po=new z,cr=new z,zn=new z,mo=new z,lr=new z,go=new z,Vi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){po.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(po);let r=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=zn.dot(this.direction),l=-zn.dot(cr),c=zn.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(po).addScaledVector(cr,d),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){mo.subVectors(t,e),lr.subVectors(n,e),go.crossVectors(mo,lr);let a=this.direction.dot(go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);let l=o*this.direction.dot(lr.crossVectors(zn,lr));if(l<0)return null;let c=o*this.direction.dot(mo.cross(zn));if(c<0||l+c>a)return null;let h=-o*zn.dot(go);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,p,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,f,d,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,g=c*h,x=c*f;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,g=c*h,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Wu)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),kn.crossVectors(n,kt),kn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),kn.crossVectors(n,kt)),kn.normalize(),hr.crossVectors(kt,kn),s[0]=kn.x,s[4]=hr.x,s[8]=kt.x,s[1]=kn.y,s[5]=hr.y,s[9]=kt.y,s[2]=kn.z,s[6]=hr.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],_=n[7],y=n[11],I=n[15],S=s[0],C=s[4],L=s[8],w=s[12],T=s[1],k=s[5],V=s[9],K=s[13],Q=s[2],ne=s[6],ee=s[10],oe=s[14],X=s[3],le=s[7],ie=s[11],me=s[15];return r[0]=a*S+o*T+l*Q+c*X,r[4]=a*C+o*k+l*ne+c*le,r[8]=a*L+o*V+l*ee+c*ie,r[12]=a*w+o*K+l*oe+c*me,r[1]=h*S+f*T+d*Q+p*X,r[5]=h*C+f*k+d*ne+p*le,r[9]=h*L+f*V+d*ee+p*ie,r[13]=h*w+f*K+d*oe+p*me,r[2]=g*S+x*T+m*Q+u*X,r[6]=g*C+x*k+m*ne+u*le,r[10]=g*L+x*V+m*ee+u*ie,r[14]=g*w+x*K+m*oe+u*me,r[3]=b*S+_*T+y*Q+I*X,r[7]=b*C+_*k+y*ne+I*le,r[11]=b*L+_*V+y*ee+I*ie,r[15]=b*w+_*K+y*oe+I*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=f*m*c-x*d*c+x*l*p-o*m*p-f*l*u+o*d*u,_=g*d*c-h*m*c-g*l*p+a*m*p+h*l*u-a*d*u,y=h*x*c-g*f*c+g*o*p-a*x*p-h*o*u+a*f*u,I=g*f*l-h*x*l-g*o*d+a*x*d+h*o*m-a*f*m,S=t*b+n*_+s*y+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return e[0]=b*C,e[1]=(x*d*r-f*m*r-x*s*p+n*m*p+f*s*u-n*d*u)*C,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*u+n*l*u)*C,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*C,e[4]=_*C,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*u+t*d*u)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*C,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*C,e[8]=y*C,e[9]=(g*f*r-h*x*r-g*n*p+t*x*p+h*n*u-t*f*u)*C,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*u+t*o*u)*C,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*p-t*o*p)*C,e[12]=I*C,e[13]=(h*x*s-g*f*s+g*n*d-t*x*d-h*n*m+t*f*m)*C,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,g=r*f,x=a*h,m=a*f,u=o*f,b=l*c,_=l*h,y=l*f,I=n.x,S=n.y,C=n.z;return s[0]=(1-(x+u))*I,s[1]=(p+y)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(d+u))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+_)*C,s[9]=(m-b)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);let c=1/r,h=1/a,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=tn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_s)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===tn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===_s)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new z,Qt=new ht,Gu=new z(0,0,0),Wu=new z(1,1,1),kn=new z,hr=new z,kt=new z,Kc=new ht,jc=new In,nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xu=0,Qc=new z,Ri=new In,Sn=new ht,ur=new z,cs=new z,qu=new z,Yu=new In,el=new z(1,0,0),tl=new z(0,1,0),nl=new z(0,0,1),il={type:"added"},Zu={type:"removed"},Ci={type:"childadded",child:null},xo={type:"childremoved",child:null},Et=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new nn,n=new In,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(cs,ur,this.up):Sn.lookAt(ur,cs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new z(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new z,En=new z,_o=new z,wn=new z,Ii=new z,Pi=new z,sl=new z,yo=new z,vo=new z,Mo=new z,bo=new mt,So=new mt,Eo=new mt,Gn=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),En.subVectors(n,t),_o.subVectors(e,t);let a=en.dot(en),o=en.dot(En),l=en.dot(_o),c=En.dot(En),h=En.dot(_o),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return bo.setScalar(0),So.setScalar(0),Eo.setScalar(0),bo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),Eo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),En.subVectors(e,t),en.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),En.subVectors(this.a,this.b),en.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),yo.subVectors(e,n);let l=Ii.dot(yo),c=Pi.dot(yo);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,s);let h=Ii.dot(vo),f=Pi.dot(vo);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ii,a);Mo.subVectors(e,r);let p=Ii.dot(Mo),g=Pi.dot(Mo);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Pi,o);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return sl.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(sl,o);let u=1/(m+x+d);return a=x*u,o=d*u,t.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=fc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wo(a,r,e+1/3),this.g=wo(a,r,e),this.b=wo(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=xt){Qe.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(fr);let n=ds(Hn.h,fr.h,t),s=ds(Hn.s,fr.s,t),r=ds(Hn.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new ze;ze.NAMES=hh;var Ju=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Ir,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ln=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new z,dr=new pe,$u=0,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}};var Ms=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bs=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ku=0,Jt=new ht,To=new Et,Li=new z,Ht=new dn,ls=new dn,St=new z,ut=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?bs:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ht.min,ls.min),Ht.expandByPoint(St),St.addVectors(Ht.max,ls.max),Ht.expandByPoint(St)):(Ht.expandByPoint(ls.min),Ht.expandByPoint(ls.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),St.add(Li)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new z,l[L]=new z;let c=new z,h=new z,f=new z,d=new pe,p=new pe,g=new pe,x=new z,m=new z;function u(L,w,T){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,T),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(k),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(k),o[L].add(x),o[w].add(x),o[T].add(x),l[L].add(m),l[w].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,w=b.length;L<w;++L){let T=b[L],k=T.start,V=T.count;for(let K=k,Q=k+V;K<Q;K+=3)u(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let _=new z,y=new z,I=new z,S=new z;function C(L){I.fromBufferAttribute(s,L),S.copy(I);let w=o[L];_.copy(w),_.sub(I.multiplyScalar(I.dot(w))).normalize(),y.crossVectors(S,w);let k=y.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,k)}for(let L=0,w=b.length;L<w;++L){let T=b[L],k=T.start,V=T.count;for(let K=k,Q=k+V;K<Q;K+=3)C(e.getX(K+0)),C(e.getX(K+1)),C(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new vt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=new ht,ni=new Vi,pr=new ci,al=new z,mr=new z,gr=new z,xr=new z,Ao=new z,_r=new z,ol=new z,yr=new z,ke=class extends Et{constructor(e=new ut,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Ao.fromBufferAttribute(f,e),a?_r.addScaledVector(Ao,h):_r.addScaledVector(Ao.sub(t),h))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(pr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(pr,al)===null||ni.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(r).invert(),ni.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=_;y<I;y+=3){let S=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);s=vr(this,u,e,n,c,h,f,S,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=vr(this,a,e,n,c,h,f,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=_;y<I;y+=3){let S=y,C=y+1,L=y+2;s=vr(this,u,e,n,c,h,f,S,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=m,_=m+1,y=m+2;s=vr(this,a,e,n,c,h,f,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ju(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Rn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:i}}function vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,xr);let h=ju(i,e,t,n,mr,gr,xr,ol);if(h){let f=new z;Gn.getBarycoord(ol,mr,gr,xr,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,l,c,f,new pe)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,l,c,f,new pe)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new z,materialIndex:0};Gn.getNormal(mr,gr,xr,d.normal),h.face=d,h.barycoord=f}return h}var qn=class i extends ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function g(x,m,u,b,_,y,I,S,C,L,w){let T=y/C,k=I/L,V=y/2,K=I/2,Q=S/2,ne=C+1,ee=L+1,oe=0,X=0,le=new z;for(let ie=0;ie<ee;ie++){let me=ie*k-K;for(let be=0;be<ne;be++){let te=be*T-V;le[x]=te*b,le[m]=me*_,le[u]=Q,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[u]=S>0?1:-1,h.push(le.x,le.y,le.z),f.push(be/C),f.push(1-ie/L),oe+=1}}for(let ie=0;ie<L;ie++)for(let me=0;me<C;me++){let be=d+me+ne*ie,te=d+me+ne*(ie+1),O=d+(me+1)+ne*(ie+1),U=d+(me+1)+ne*ie;l.push(be,te,U),l.push(te,O,U),X+=6}o.addGroup(p,X,w),p+=X,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Qu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var uh={clone:xi,merge:Rt},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ss=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new z,cl=new pe,ll=new pe,Nt=class extends Ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,cl,ll),t.subVectors(ll,cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ui=1,Fr=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Di,Ui,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Di,Ui,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Di,Ui,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Di,Ui,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Di,Ui,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Lt{constructor(e=[],t=pi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Pt),new Fr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Je=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},nf={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yn=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,h=Ft,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=new z,sf=new z,rf=new We,un=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ro.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(Ro).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new ci,af=new pe(.5,.5),Mr=new z,Xi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],b=r[12],_=r[13],y=r[14],I=r[15];if(s[0].setComponents(c-a,p-h,u-g,I-b).normalize(),s[1].setComponents(c+a,p+h,u+g,I+b).normalize(),s[2].setComponents(c+o,p+f,u+x,I+_).normalize(),s[3].setComponents(c-o,p-f,u-x,I-_).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,u-m,I-y).normalize();else if(s[4].setComponents(c-l,p-d,u-m,I-y).normalize(),t===tn)s[5].setComponents(c+l,p+d,u+m,I+y).normalize();else if(t===_s)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=af.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Br=new z,zr=new z,hl=new ht,hs=new Vi,br=new ci,Co=new z,ul=new z,kr=class extends Et{constructor(e=new ut,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Br.fromBufferAttribute(t,s-1),zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Br.distanceTo(zr);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;hl.copy(s).invert(),hs.copy(e.ray).applyMatrix4(hl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let u=h.getX(x),b=h.getX(x+1),_=Sr(this,e,hs,l,u,b,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),u=Sr(this,e,hs,l,x,m,g-1);u&&t.push(u)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let u=Sr(this,e,hs,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Sr(this,e,hs,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Br.fromBufferAttribute(o,s),zr.fromBufferAttribute(o,r),t.distanceSqToSegment(Br,zr,Co,ul)>n)return;Co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Co);if(!(c<e.near||c>e.far))return{distance:c,point:ul.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var fl=new z,dl=new z,Ts=class extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fl.fromBufferAttribute(t,s),dl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fl.distanceTo(dl);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pn=class extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Lt{constructor(e,t,n=Kn,s,r,a,o=Ft,l=Ft,c,h=Bi,f=1){if(h!==Bi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Cs=class i extends ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new z,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rn=class i extends ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,x=[],m=n/2,u=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function b(){let y=new z,I=new z,S=0,C=(t-e)/n;for(let L=0;L<=r;L++){let w=[],T=L/r,k=T*(t-e)+e;for(let V=0;V<=s;V++){let K=V/s,Q=K*l+o,ne=Math.sin(Q),ee=Math.cos(Q);I.x=k*ne,I.y=-T*n+m,I.z=k*ee,f.push(I.x,I.y,I.z),y.set(ne,C,ee).normalize(),d.push(y.x,y.y,y.z),p.push(K,1-T),w.push(g++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let T=x[w][L],k=x[w+1][L],V=x[w+1][L+1],K=x[w][L+1];(e>0||w!==0)&&(h.push(T,k,K),S+=3),(t>0||w!==r-1)&&(h.push(k,V,K),S+=3)}c.addGroup(u,S,0),u+=S}function _(y){let I=g,S=new pe,C=new z,L=0,w=y===!0?e:t,T=y===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;let k=g;for(let V=0;V<=s;V++){let Q=V/s*l+o,ne=Math.cos(Q),ee=Math.sin(Q);C.x=w*ee,C.y=m*T,C.z=w*ne,f.push(C.x,C.y,C.z),d.push(0,T,0),S.x=ne*.5+.5,S.y=ee*.5*T+.5,p.push(S.x,S.y),g++}for(let V=0;V<s;V++){let K=I+V,Q=k+V;y===!0?h.push(Q,Q+1,K):h.push(Q+1,Q,K),L+=3}c.addGroup(u,L,y===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new ht;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hr=class extends Yi{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Er=new z,Io=new mc,Po=new mc,Lo=new mc,an=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),c=Er);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Io.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,m),Po.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,m),Lo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Po.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Lo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Io.calc(l),Po.calc(l),Lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function of(i,e){let t=1-i;return t*t*e}function cf(i,e){return 2*(1-i)*i*e}function lf(i,e){return i*i*e}function ps(i,e,t,n){return of(i,e)+cf(i,t)+lf(i,n)}function hf(i,e){let t=1-i;return t*t*t*e}function uf(i,e){let t=1-i;return 3*t*t*i*e}function ff(i,e){return 3*(1-i)*i*i*e}function df(i,e){return i*i*i*e}function ms(i,e,t,n,s){return hf(i,e)+uf(i,t)+ff(i,n)+df(i,s)}var Is=class extends Vt{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,s.x,r.x,a.x,o.x),ms(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zi=class extends Vt{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,s.x,r.x,a.x,o.x),ms(e,s.y,r.y,a.y,o.y),ms(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Vt{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Vt{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Vt{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(e,s.x,r.x,a.x),ps(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Vt{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(e,s.x,r.x,a.x),ps(e,s.y,r.y,a.y),ps(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(pl(o,l.x,c.x,h.x,f.x),pl(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},Gr=Object.freeze({__proto__:null,ArcCurve:Hr,CatmullRomCurve3:an,CubicBezierCurve:Is,CubicBezierCurve3:Zi,EllipseCurve:Yi,LineCurve:Ps,LineCurve3:Vr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Ds,SplineCurve:Us}),Wr=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Gr[s.type]().fromJSON(s))}return this}},mn=class extends Wr{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Is(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Yi(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends mn{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mn().fromJSON(s))}return this}};function pf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=fh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=yf(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ns(r,a,t,o,l,c,0),a}function fh(i,e,t,n,s){let r;if(s===If(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ml(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ml(a/n|0,i[a],i[a+1],r);return r&&Ji(r,r.next)&&(Os(r),r=r.next),r}function li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||pt(t.prev,t,t.next)===0)){if(Os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ef(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gf(i,n,s,r):mf(i)){e.push(l.i,i.i,c.i),Os(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=xf(li(i),e),Ns(i,e,t,n,s,r,2)):a===2&&_f(i,e,t,n,s,r):Ns(li(i),e,t,n,s,r,1);break}}}function mf(i){let e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&us(s,o,r,l,a,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,f,d),x=Math.max(o,l,c),m=Math.max(h,f,d),u=zo(p,g,e,t,n),b=zo(x,m,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=u&&y&&y.z<=b;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&us(o,h,l,f,c,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&us(o,h,l,f,c,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&us(o,h,l,f,c,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&us(o,h,l,f,c,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&ph(n,t,t.next,s)&&Fs(n,s)&&Fs(s,n)&&(e.push(n.i,t.i,s.i),Os(t),Os(t.next),t=i=s),t=t.next}while(t!==i);return li(t)}function _f(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Af(a,o)){let l=mh(a,o);a=li(a,a.next),l=li(l,l.next),Ns(a,e,t,n,s,r,0),Ns(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tf(c))}s.sort(vf);for(let r=0;r<s.length;r++)t=Mf(s[r],t);return t}function vf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mf(i,e){let t=bf(i,e);if(!t)return e;let n=mh(t,i);return li(n,n.next),li(t,t.next)}function bf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&dh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Fs(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Sf(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Sf(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function Ef(i,e,t,n){let s=i;do s.z===0&&(s.z=zo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wf(s)}function wf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function dh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function us(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&dh(i,e,t,n,s,r,a,o)}function Af(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rf(i,e)&&(Fs(i,e)&&Fs(e,i)&&Cf(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||Ji(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function ph(i,e,t,n){let s=Tr(pt(i,e,t)),r=Tr(pt(i,e,n)),a=Tr(pt(t,n,i)),o=Tr(pt(t,n,e));return!!(s!==r&&a!==o||s===0&&wr(i,t,e)||r===0&&wr(i,n,e)||a===0&&wr(t,i,n)||o===0&&wr(t,e,n))}function wr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Tr(i){return i>0?1:i<0?-1:0}function Rf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ph(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fs(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function Cf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function mh(i,e){let t=ko(i.i,i.x,i.y),n=ko(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ml(i,e,t,n){let s=ko(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ko(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function If(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ho=class{static triangulate(e,t,n=2){return pf(e,t,n)}},At=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];gl(e),xl(n,e);let a=e.length;t.forEach(gl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,xl(n,t[l]);let o=Ho.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gt=class i extends ut{constructor(e=new _t([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Pf,_,y=!1,I,S,C,L;u&&(_=u.getSpacedPoints(h),y=!0,d=!1,I=u.computeFrenetFrames(h,!1),S=new z,C=new z,L=new z),d||(m=0,p=0,g=0,x=0);let w=o.extractPoints(c),T=w.shape,k=w.holes;if(!At.isClockWise(T)){T=T.reverse();for(let N=0,B=k.length;N<B;N++){let W=k[N];At.isClockWise(W)&&(k[N]=W.reverse())}}function K(N){let W=10000000000000001e-36,q=N[0];for(let F=1;F<=N.length;F++){let R=F%N.length,Y=N[R],ge=Y.x-q.x,xe=Y.y-q.y,P=ge*ge+xe*xe,E=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(q.x),Math.abs(q.y)),$=W*E*E;if(P<=$){N.splice(R,1),F--;continue}q=Y}}K(T),k.forEach(K);let Q=k.length,ne=T;for(let N=0;N<Q;N++){let B=k[N];T=T.concat(B)}function ee(N,B,W){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(B,W)}let oe=T.length;function X(N,B,W){let q,F,R,Y=N.x-B.x,ge=N.y-B.y,xe=W.x-N.x,P=W.y-N.y,E=Y*Y+ge*ge,$=Y*P-ge*xe;if(Math.abs($)>Number.EPSILON){let ce=Math.sqrt(E),de=Math.sqrt(xe*xe+P*P),he=B.x-ge/ce,Re=B.y+Y/ce,ve=W.x-P/de,Le=W.y+xe/de,Ce=((ve-he)*P-(Le-Re)*xe)/(Y*P-ge*xe);q=he+Y*Ce-N.x,F=Re+ge*Ce-N.y;let ye=q*q+F*F;if(ye<=2)return new pe(q,F);R=Math.sqrt(ye/2)}else{let ce=!1;Y>Number.EPSILON?xe>Number.EPSILON&&(ce=!0):Y<-Number.EPSILON?xe<-Number.EPSILON&&(ce=!0):Math.sign(ge)===Math.sign(P)&&(ce=!0),ce?(q=-ge,F=Y,R=Math.sqrt(E)):(q=Y,F=ge,R=Math.sqrt(E/2))}return new pe(q/R,F/R)}let le=[];for(let N=0,B=ne.length,W=B-1,q=N+1;N<B;N++,W++,q++)W===B&&(W=0),q===B&&(q=0),le[N]=X(ne[N],ne[W],ne[q]);let ie=[],me,be=le.concat();for(let N=0,B=Q;N<B;N++){let W=k[N];me=[];for(let q=0,F=W.length,R=F-1,Y=q+1;q<F;q++,R++,Y++)R===F&&(R=0),Y===F&&(Y=0),me[q]=X(W[q],W[R],W[Y]);ie.push(me),be=be.concat(me)}let te;if(m===0)te=At.triangulateShape(ne,k);else{let N=[],B=[];for(let W=0;W<m;W++){let q=W/m,F=p*Math.cos(q*Math.PI/2),R=g*Math.sin(q*Math.PI/2)+x;for(let Y=0,ge=ne.length;Y<ge;Y++){let xe=ee(ne[Y],le[Y],R);Z(xe.x,xe.y,-F),q===0&&N.push(xe)}for(let Y=0,ge=Q;Y<ge;Y++){let xe=k[Y];me=ie[Y];let P=[];for(let E=0,$=xe.length;E<$;E++){let ce=ee(xe[E],me[E],R);Z(ce.x,ce.y,-F),q===0&&P.push(ce)}q===0&&B.push(P)}}te=At.triangulateShape(N,B)}let O=te.length,U=g+x;for(let N=0;N<oe;N++){let B=d?ee(T[N],be[N],U):T[N];y?(C.copy(I.normals[0]).multiplyScalar(B.x),S.copy(I.binormals[0]).multiplyScalar(B.y),L.copy(_[0]).add(C).add(S),Z(L.x,L.y,L.z)):Z(B.x,B.y,0)}for(let N=1;N<=h;N++)for(let B=0;B<oe;B++){let W=d?ee(T[B],be[B],U):T[B];y?(C.copy(I.normals[N]).multiplyScalar(W.x),S.copy(I.binormals[N]).multiplyScalar(W.y),L.copy(_[N]).add(C).add(S),Z(L.x,L.y,L.z)):Z(W.x,W.y,f/h*N)}for(let N=m-1;N>=0;N--){let B=N/m,W=p*Math.cos(B*Math.PI/2),q=g*Math.sin(B*Math.PI/2)+x;for(let F=0,R=ne.length;F<R;F++){let Y=ee(ne[F],le[F],q);Z(Y.x,Y.y,f+W)}for(let F=0,R=k.length;F<R;F++){let Y=k[F];me=ie[F];for(let ge=0,xe=Y.length;ge<xe;ge++){let P=ee(Y[ge],me[ge],q);y?Z(P.x,P.y+_[h-1].y,_[h-1].x+W):Z(P.x,P.y,f+W)}}}M(),v();function M(){let N=s.length/3;if(d){let B=0,W=oe*B;for(let q=0;q<O;q++){let F=te[q];G(F[2]+W,F[1]+W,F[0]+W)}B=h+m*2,W=oe*B;for(let q=0;q<O;q++){let F=te[q];G(F[0]+W,F[1]+W,F[2]+W)}}else{for(let B=0;B<O;B++){let W=te[B];G(W[2],W[1],W[0])}for(let B=0;B<O;B++){let W=te[B];G(W[0]+oe*h,W[1]+oe*h,W[2]+oe*h)}}n.addGroup(N,s.length/3-N,0)}function v(){let N=s.length/3,B=0;H(ne,B),B+=ne.length;for(let W=0,q=k.length;W<q;W++){let F=k[W];H(F,B),B+=F.length}n.addGroup(N,s.length/3-N,1)}function H(N,B){let W=N.length;for(;--W>=0;){let q=W,F=W-1;F<0&&(F=N.length-1);for(let R=0,Y=h+m*2;R<Y;R++){let ge=oe*R,xe=oe*(R+1),P=B+q+ge,E=B+F+ge,$=B+F+xe,ce=B+q+xe;re(P,E,$,ce)}}}function Z(N,B,W){l.push(N),l.push(B),l.push(W)}function G(N,B,W){J(N),J(B),J(W);let q=s.length/3,F=b.generateTopUV(n,s,q-3,q-2,q-1);A(F[0]),A(F[1]),A(F[2])}function re(N,B,W,q){J(N),J(B),J(q),J(B),J(W),J(q);let F=s.length/3,R=b.generateSideWallUV(n,s,F-6,F-3,F-2,F-1);A(R[0]),A(R[1]),A(R[3]),A(R[1]),A(R[2]),A(R[3])}function J(N){s.push(l[N*3+0]),s.push(l[N*3+1]),s.push(l[N*3+2])}function A(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gr[s.type]().fromJSON(s)),new i(n,e.options)}},Pf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-f),new pe(d,1-g),new pe(x,1-u)]:[new pe(o,1-l),new pe(h,1-f),new pe(p,1-g),new pe(m,1-u)]}};function Lf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hi=class i extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let b=u*d-a;for(let _=0;_<c;_++){let y=_*f-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){let _=b+c*u,y=b+c*(u+1),I=b+1+c*(u+1),S=b+1+c*u;p.push(_,y,S),p.push(y,I,S)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bs=class i extends ut{constructor(e=new _t([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;At.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){let b=g[m];At.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=At.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){let b=g[m];p=p.concat(b)}for(let m=0,u=p.length;m<u;m++){let b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,u=x.length;m<u;m++){let b=x[m],_=b[0]+f,y=b[1]+f,I=b[2]+f;n.push(_,y,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Df(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Df(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var lt=class i extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new z,d=new z,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let b=[],_=u/n,y=0;u===0&&a===0?y=.5/t:u===n&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let S=I/t;f.x=-e*Math.cos(s+S*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+S*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(S+y,1-_),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let _=h[u][b+1],y=h[u][b],I=h[u+1][b],S=h[u+1][b+1];(u!==0||a>0)&&p.push(_,y,S),(u!==n-1||l<Math.PI)&&p.push(y,I,S)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var on=class i extends ut{constructor(e=new Ds(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,l=new z,c=new pe,h=new z,f=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),b(),u()}function m(_){h=e.getPointAt(_/t,h);let y=a.normals[_],I=a.binormals[_];for(let S=0;S<=s;S++){let C=S/s*Math.PI*2,L=Math.sin(C),w=-Math.cos(C);l.x=w*y.x+L*I.x,l.y=w*y.y+L*I.y,l.z=w*y.z+L*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function u(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let I=(s+1)*(_-1)+(y-1),S=(s+1)*_+(y-1),C=(s+1)*_+y,L=(s+1)*(_-1)+y;g.push(I,S,L),g.push(S,C,L)}}function b(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Gr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var it=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uo,endingEnd:Uo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case No:r=e,o=2*t-n;break;case Fo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case No:a=e,l=2*n-t;break;case Fo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let I=0;I!==o;++I)r[I]=u*a[h+I]+b*a[c+I]+_*a[l+I]+y*a[f+I];return r}},Zr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Jr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case Rr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Uf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Lr;var Zn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="color";var Kr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="number";var jr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="vector";var Vo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ea=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gh=new ea,fi=class{constructor(e){this.manager=e!==void 0?e:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},Go=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(u){b();function b(){f.read().then(({done:_,value:y})=>{if(_)u.close();else{x+=y.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let S=0,C=h.length;S<C;S++){let L=h[S];L.onProgress&&L.onProgress(I)}u.enqueue(y),b()}},_=>{u.error(_)})}}});return new Response(m)}else throw new Go(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Vo.add(`file:${e}`,c);let h=Tn[e];delete Tn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Do=new ht,_l=new z,yl=new z,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yl),t.updateMatrixWorld(),Do.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var di=class extends Ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xo=class extends Wo{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Xo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ta=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gc="\\[\\]\\.:\\/",Nf=new RegExp("["+gc+"]","g"),xc="[^"+gc+"]",Ff="[^"+gc.replace("\\.","")+"]",Of=/((?:WC+[\/:])*)/.source.replace("WC",xc),Bf=/(WCOD+)?/.source.replace("WCOD",Ff),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),Hf=new RegExp("^"+Of+Bf+zf+kf+"$"),Vf=["material","materials","bones","map"],qo=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(e){let t=Hf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=qo;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N0=new Float32Array(1);var vl=new ht,Gs=class{constructor(e,t,n=0,s=1/0){this.ray=new Vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vl),this}intersectObject(e,t=!0,n=[]){return Yo(e,this,n,t),n.sort(Ml),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Yo(e[s],this,n,t);return n.sort(Ml),n}};function Ml(i,e){return i.distance-e.distance}function Yo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Yo(r[a],e,t,!0)}}var bl=new pe,Ws=class{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var cn=class{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(u){let b=[];for(let _=0,y=u.length;_<y;_++){let I=u[_],S=new _t;S.curves=I.curves,b.push(S)}return b}function n(u,b){let _=b.length,y=!1;for(let I=_-1,S=0;S<_;I=S++){let C=b[I],L=b[S],w=L.x-C.x,T=L.y-C.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(C=b[S],w=-w,L=b[I],T=-T),u.y<C.y||u.y>L.y)continue;if(u.y===C.y){if(u.x===C.x)return!0}else{let k=T*(u.x-C.x)-w*(u.y-C.y);if(k===0)return!0;if(k<0)continue;y=!y}}else{if(u.y!==C.y)continue;if(L.x<=u.x&&u.x<=C.x||C.x<=u.x&&u.x<=L.x)return!0}}return y}let s=At.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new _t,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let f=[],d=[],p=[],g=0,x;d[g]=void 0,p[g]=[];for(let u=0,b=r.length;u<b;u++)o=r[u],x=o.getPoints(),a=s(x),a=e?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new _t,p:x},d[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:x[0]});if(!d[0])return t(r);if(d.length>1){let u=!1,b=0;for(let _=0,y=d.length;_<y;_++)f[_]=[];for(let _=0,y=d.length;_<y;_++){let I=p[_];for(let S=0;S<I.length;S++){let C=I[S],L=!0;for(let w=0;w<d.length;w++)n(C.p,d[w].p)&&(_!==w&&b++,L?(L=!1,f[w].push(C)):u=!0);L&&f[_].push(C)}}b>0&&u===!1&&(p=f)}let m;for(let u=0,b=d.length;u<b;u++){l=d[u].s,c.push(l),m=p[u];for(let _=0,y=m.length;_<y;_++)l.holes.push(m[_].h)}return c}};function _c(i,e,t,n){let s=Gf(n);switch(t){case rc:return i*e;case oc:return i*e/s.components*s.byteLength;case xa:return i*e/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case _a:return i*e*2/s.components*s.byteLength;case ac:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case ya:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case Sa:return Math.max(i,16)*Math.max(e,8)/4;case va:case ba:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case ln:case tc:return{byteLength:1,components:1};case Ki:case nc:case ji:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case Kn:case pa:case xn:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rd=`#ifdef USE_IRIDESCENCE
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
#endif`,ad=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,md=`#define PI 3.141592653589793
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,em=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,um=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,_m=`#define TOON
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
}`,ym=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:ed,batching_vertex:td,begin_vertex:nd,beginnormal_vertex:id,bsdfs:sd,iridescence_fragment:rd,bumpmap_pars_fragment:ad,clipping_planes_fragment:od,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:hd,color_fragment:ud,color_pars_fragment:fd,color_pars_vertex:dd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:xd,displacementmap_pars_vertex:_d,displacementmap_vertex:yd,emissivemap_fragment:vd,emissivemap_pars_fragment:Md,colorspace_fragment:bd,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:wd,envmap_pars_fragment:Td,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Bd,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Id,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:Kd,map_fragment:jd,map_pars_fragment:Qd,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:fp,normal_vertex:dp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:_p,opaque_fragment:yp,packing:vp,premultiplied_alpha_fragment:Mp,project_vertex:bp,dithering_fragment:Sp,dithering_pars_fragment:Ep,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Ip,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:Bp,transmission_fragment:zp,transmission_pars_fragment:kp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Zp,cube_vert:Jp,cube_frag:$p,depth_vert:Kp,depth_frag:jp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:fm,meshphong_vert:dm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:xm,meshtoon_frag:_m,points_vert:ym,points_frag:vm,shadow_vert:Mm,shadow_frag:bm,sprite_vert:Sm,sprite_frag:Em},Ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:Rt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Rt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Rt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Rt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Rt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Rt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Rt([Ie.points,Ie.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Rt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Rt([Ie.common,Ie.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Rt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Rt([Ie.sprite,Ie.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Rt([Ie.common,Ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Rt([Ie.lights,Ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:Rt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Za={r:0,b:0,g:0},_i=new nn,wm=new ht;function Tm(i,e,t,n,s,r,a){let o=new ze(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,I=g(_);I===null?u(o,l):I&&I.isColor&&(u(I,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===Xs)?(h===void 0&&(h=new ke(new qn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:xi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(_i)),h.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,(f!==I||d!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=I,d=I.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ke(new hi(2,2),new sn({name:"BackgroundMaterial",uniforms:xi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=I,d=I.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(Za,pc(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m,dispose:b}}function Am(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(T,k,V,K,Q){let ne=!1,ee=f(K,V,k);r!==ee&&(r=ee,c(r.object)),ne=p(T,K,V,Q),ne&&g(T,K,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,y(T,k,V,K),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function f(T,k,V){let K=V.wireframe===!0,Q=n[T.id];Q===void 0&&(Q={},n[T.id]=Q);let ne=Q[k.id];ne===void 0&&(ne={},Q[k.id]=ne);let ee=ne[K];return ee===void 0&&(ee=d(l()),ne[K]=ee),ee}function d(T){let k=[],V=[],K=[];for(let Q=0;Q<t;Q++)k[Q]=0,V[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:K,object:T,attributes:{},index:null}}function p(T,k,V,K){let Q=r.attributes,ne=k.attributes,ee=0,oe=V.getAttributes();for(let X in oe)if(oe[X].location>=0){let ie=Q[X],me=ne[X];if(me===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;ee++}return r.attributesNum!==ee||r.index!==K}function g(T,k,V,K){let Q={},ne=k.attributes,ee=0,oe=V.getAttributes();for(let X in oe)if(oe[X].location>=0){let ie=ne[X];ie===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor));let me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),Q[X]=me,ee++}r.attributes=Q,r.attributesNum=ee,r.index=K}function x(){let T=r.newAttributes;for(let k=0,V=T.length;k<V;k++)T[k]=0}function m(T){u(T,0)}function u(T,k){let V=r.newAttributes,K=r.enabledAttributes,Q=r.attributeDivisors;V[T]=1,K[T]===0&&(i.enableVertexAttribArray(T),K[T]=1),Q[T]!==k&&(i.vertexAttribDivisor(T,k),Q[T]=k)}function b(){let T=r.newAttributes,k=r.enabledAttributes;for(let V=0,K=k.length;V<K;V++)k[V]!==T[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function _(T,k,V,K,Q,ne,ee){ee===!0?i.vertexAttribIPointer(T,k,V,Q,ne):i.vertexAttribPointer(T,k,V,K,Q,ne)}function y(T,k,V,K){x();let Q=K.attributes,ne=V.getAttributes(),ee=k.defaultAttributeValues;for(let oe in ne){let X=ne[oe];if(X.location>=0){let le=Q[oe];if(le===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(le=T.instanceColor)),le!==void 0){let ie=le.normalized,me=le.itemSize,be=e.get(le);if(be===void 0)continue;let te=be.buffer,O=be.type,U=be.bytesPerElement,M=O===i.INT||O===i.UNSIGNED_INT||le.gpuType===pa;if(le.isInterleavedBufferAttribute){let v=le.data,H=v.stride,Z=le.offset;if(v.isInstancedInterleavedBuffer){for(let G=0;G<X.locationSize;G++)u(X.location+G,v.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=v.meshPerAttribute*v.count)}else for(let G=0;G<X.locationSize;G++)m(X.location+G);i.bindBuffer(i.ARRAY_BUFFER,te);for(let G=0;G<X.locationSize;G++)_(X.location+G,me/X.locationSize,O,ie,H*U,(Z+me/X.locationSize*G)*U,M)}else{if(le.isInstancedBufferAttribute){for(let v=0;v<X.locationSize;v++)u(X.location+v,le.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let v=0;v<X.locationSize;v++)m(X.location+v);i.bindBuffer(i.ARRAY_BUFFER,te);for(let v=0;v<X.locationSize;v++)_(X.location+v,me/X.locationSize,O,ie,me*U,me/X.locationSize*v*U,M)}}else if(ee!==void 0){let ie=ee[oe];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}b()}function I(){L();for(let T in n){let k=n[T];for(let V in k){let K=k[V];for(let Q in K)h(K[Q].object),delete K[Q];delete k[V]}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let k=n[T.id];for(let V in k){let K=k[V];for(let Q in K)h(K[Q].object),delete K[Q];delete k[V]}delete n[T.id]}function C(T){for(let k in n){let V=n[k];if(V[T.id]===void 0)continue;let K=V[T.id];for(let Q in K)h(K[Q].object),delete K[Q];delete V[T.id]}}function L(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Rm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==$t&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let L=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:I,maxSamples:S}}function Im(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,y=u.clippingState||null;l.value=y,y=h(g,d,_,p);for(let I=0;I!==_;++I)y[I]=t[I];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)a.copy(f[_]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pm(i){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=pi:o===fa&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ua||o===fa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Or(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,xh=[.125,.215,.35,.446,.526,.582],Mi=20,yc=new di,_h=new ze,vc=null,Mc=0,bc=0,Sc=!1,vi=(1+Math.sqrt(5))/2,ts=1/vi,yh=[new z(-vi,ts,0),new z(vi,ts,0),new z(-ts,0,vi),new z(ts,0,vi),new z(0,vi,-ts),new z(0,vi,ts),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Lm=new z,Ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lm}=r;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,Mc,bc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:ji,format:$t,colorSpace:oi,depthBuffer:!1},s=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Um(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(_h),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new Ln({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new ke(new qn,x),u=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(_h),u=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let I=this._cubeSize;Ja(s,y*I,_>2?I:0,I,I),f.setRenderTarget(s),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yh[(s-r-1)%yh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ke(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let u=[],b=0;for(let C=0;C<Mi;++C){let L=C/x,w=Math.exp(-L*L/2);u.push(w),C===0?b+=w:C<m&&(b+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],I=3*y*(s>_-ns?s-_+ns:0),S=4*(this._cubeSize-y);Ja(t,I,S,3*y,2*y),l.setRenderTarget(t),l.render(f,yc)}};function Dm(i){let e=[],t=[],n=[],s=i,r=i-ns+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ns?l=xh[a-i+ns-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,L=S>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(w,x*g*S),_.set(d,m*g*S);let T=[S,S,S,S,S,S];y.set(T,u*g*S)}let I=new ut;I.setAttribute("position",new vt(b,x)),I.setAttribute("uv",new vt(_,m)),I.setAttribute("faceIndex",new vt(y,u)),e.push(I),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Um(i,e,t){let n=new Float32Array(Mi),s=new z(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Mh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function bh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function Nm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ua||l===fa,h=l===pi||l===mi;if(c||h){let f=e.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ka(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ka(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let _=0,y=b.length;_<y;_+=3){let I=b[_+0],S=b[_+1],C=b[_+2];d.push(I,S,S,C,C,I)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let I=_+0,S=_+1,C=_+2;d.push(I,S,S,C,C,I)}}else return;let m=new(dc(d)?bs:Ms)(d,1);m.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Bm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function km(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*I*4*f),C=new vs(S,y,I,f);C.type=xn,C.needsUpdate=!0;let L=_*4;for(let T=0;T<f;T++){let k=m[T],V=u[T],K=b[T],Q=y*I*4*T;for(let ne=0;ne<k.count;ne++){let ee=ne*L;p===!0&&(s.fromBufferAttribute(k,ne),S[Q+ee+0]=s.x,S[Q+ee+1]=s.y,S[Q+ee+2]=s.z,S[Q+ee+3]=0),g===!0&&(s.fromBufferAttribute(V,ne),S[Q+ee+4]=s.x,S[Q+ee+5]=s.y,S[Q+ee+6]=s.z,S[Q+ee+7]=0),x===!0&&(s.fromBufferAttribute(K,ne),S[Q+ee+8]=s.x,S[Q+ee+9]=s.y,S[Q+ee+10]=s.z,S[Q+ee+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new pe(y,I)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Hh=new Lt,Sh=new As(1,1),Vh=new vs,Gh=new Nr,Wh=new Es,Eh=[],wh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),bt(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),bt(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),bt(t,n)}}function Jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=hc,r=Sh):r=Hh,t.setTexture2D(e||r,s)}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gh,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wh,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vh,s)}function og(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function hg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function ug(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function xg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function yg(i,e){i.uniform1uiv(this.addr,e)}function vg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function bg(i,e){i.uniform4uiv(this.addr,e)}function Sg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hh,r[a])}function Eg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gh,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wh,r[a])}function Tg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vh,r[a])}function Ag(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}var wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),a=Ec.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ch(t,c===void 0?new wc(o,i,e):new Tc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ac(o),Ch(t,f)),t=f}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Rg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ih(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cg=37297,Ig=0;function Pg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ph=new We;function Lg(i){Qe._getMatrix(Ph,Qe.workingColorSpace,i);let e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pg(i.getShaderSource(e),o)}else return r}function Dg(i,e){let t=Lg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ug(i,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case Yl:t="Cineon";break;case ha:t="ACESFilmic";break;case Jl:t="AgX";break;case $l:t="Neutral";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new z;function Ng(){Qe.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Og(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ks(i){return i!==""}function Dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(zg,Hg)}var kg=new Map;function Hg(i,e){let t=$e[e];if(t===void 0){let n=kg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}var Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(Vg,Gg)}function Gg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Wg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===na?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Gl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Wg(t),c=Xg(t),h=qg(t),f=Yg(t),d=Zg(t),p=Fg(t),g=Og(r),x=s.createProgram(),m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?Ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Ng(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Rc(a),a=Dh(a,t),a=Uh(a,t),o=Rc(o),o=Dh(o,t),o=Uh(o,t),a=Nh(a),o=Nh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=b+m+a,y=b+u+o,I=Ih(s,s.VERTEX_SHADER,_),S=Ih(s,s.FRAGMENT_SHADER,y);s.attachShader(x,I),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(k){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x)||"",K=s.getShaderInfoLog(I)||"",Q=s.getShaderInfoLog(S)||"",ne=V.trim(),ee=K.trim(),oe=Q.trim(),X=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,S);else{let ie=Lh(s,I,"vertex"),me=Lh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ie+`
`+me)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||oe==="")&&(le=!1);le&&(k.diagnostics={runnable:X,programLog:ne,vertexShader:{log:ee,prefix:m},fragmentShader:{log:oe,prefix:u}})}s.deleteShader(I),s.deleteShader(S),L=new is(s,x),w=Bg(s,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,Cg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=S,this}var $g=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}};function Kg(i,e,t,n,s,r,a){let o=new Gi,l=new Cc,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,k,V,K){let Q=V.fog,ne=K.geometry,ee=w.isMeshStandardMaterial?V.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||ee),X=oe&&oe.mapping===Xs?oe.image.height:null,le=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let ie=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,me=ie!==void 0?ie.length:0,be=0;ne.morphAttributes.position!==void 0&&(be=1),ne.morphAttributes.normal!==void 0&&(be=2),ne.morphAttributes.color!==void 0&&(be=3);let te,O,U,M;if(le){let tt=_n[le];te=tt.vertexShader,O=tt.fragmentShader}else te=w.vertexShader,O=w.fragmentShader,l.update(w),U=l.getVertexShaderID(w),M=l.getFragmentShaderID(w);let v=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),Z=K.isInstancedMesh===!0,G=K.isBatchedMesh===!0,re=!!w.map,J=!!w.matcap,A=!!oe,N=!!w.aoMap,B=!!w.lightMap,W=!!w.bumpMap,q=!!w.normalMap,F=!!w.displacementMap,R=!!w.emissiveMap,Y=!!w.metalnessMap,ge=!!w.roughnessMap,xe=w.anisotropy>0,P=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ce=w.sheen>0,de=w.transmission>0,he=xe&&!!w.anisotropyMap,Re=P&&!!w.clearcoatMap,ve=P&&!!w.clearcoatNormalMap,Le=P&&!!w.clearcoatRoughnessMap,Ce=$&&!!w.iridescenceMap,ye=$&&!!w.iridescenceThicknessMap,we=ce&&!!w.sheenColorMap,Oe=ce&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ae=!!w.specularColorMap,Xe=!!w.specularIntensityMap,j=de&&!!w.transmissionMap,Se=de&&!!w.thicknessMap,Te=!!w.gradientMap,Ue=!!w.alphaMap,Me=w.alphaTest>0,_e=!!w.alphaHash,Fe=!!w.extensions,Ze=Un;w.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let at={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:O,defines:w.defines,customVertexShaderID:U,customFragmentShaderID:M,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:G,batchingColor:G&&K._colorsTexture!==null,instancing:Z,instancingColor:Z&&K.instanceColor!==null,instancingMorph:Z&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:v===null?i.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:oi,alphaToCoverage:!!w.alphaToCoverage,map:re,matcap:J,envMap:A,envMapMode:A&&oe.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:B,bumpMap:W,normalMap:q,displacementMap:d&&F,emissiveMap:R,normalMapObjectSpace:q&&w.normalMapType===eh,normalMapTangentSpace:q&&w.normalMapType===lc,metalnessMap:Y,roughnessMap:ge,anisotropy:xe,anisotropyMap:he,clearcoat:P,clearcoatMap:Re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,dispersion:E,iridescence:$,iridescenceMap:Ce,iridescenceThicknessMap:ye,sheen:ce,sheenColorMap:we,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Xe,transmission:de,transmissionMap:j,thicknessMap:Se,gradientMap:Te,opaque:w.transparent===!1&&w.blending===ri&&w.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:_e,combine:w.combine,mapUv:re&&x(w.map.channel),aoMapUv:N&&x(w.aoMap.channel),lightMapUv:B&&x(w.lightMap.channel),bumpMapUv:W&&x(w.bumpMap.channel),normalMapUv:q&&x(w.normalMap.channel),displacementMapUv:F&&x(w.displacementMap.channel),emissiveMapUv:R&&x(w.emissiveMap.channel),metalnessMapUv:Y&&x(w.metalnessMap.channel),roughnessMapUv:ge&&x(w.roughnessMap.channel),anisotropyMapUv:he&&x(w.anisotropyMap.channel),clearcoatMapUv:Re&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(w.sheenRoughnessMap.channel),specularMapUv:Pe&&x(w.specularMap.channel),specularColorMapUv:Ae&&x(w.specularColorMap.channel),specularIntensityMapUv:Xe&&x(w.specularIntensityMap.channel),transmissionMapUv:j&&x(w.transmissionMap.channel),thicknessMapUv:Se&&x(w.thicknessMap.channel),alphaMapUv:Ue&&x(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ne.attributes.uv&&(re||Ue),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:H,skinning:K.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:re&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:R&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ot,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function u(w){let T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(let k in w.defines)T.push(k),T.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(b(T,w),_(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function b(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let T=g[w.type],k;if(T){let V=_n[T];k=uh.clone(V.uniforms)}else k=w.uniforms;return k}function I(w,T){let k;for(let V=0,K=h.length;V<K;V++){let Q=h[V];if(Q.cacheKey===T){k=Q,++k.usedTimes;break}}return k===void 0&&(k=new Jg(i,T,w,r),h.push(k)),k}function S(w){if(--w.usedTimes===0){let T=h.indexOf(w);h[T]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:I,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:L}}function jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,p,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function o(f,d,p,g,x,m){let u=a(f,d,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,d,p,g,x,m){let u=a(f,d,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Qg),n.length>1&&n.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function e0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bh,i.set(n,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function n0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var i0=0;function s0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r0(i){let e=new t0,t=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ht,a=new ht;function o(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,_=0,y=0,I=0,S=0,C=0;c.sort(s0);for(let w=0,T=c.length;w<T;w++){let k=c[w],V=k.color,K=k.intensity,Q=k.distance,ne=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=V.r*K,f+=V.g*K,d+=V.b*K;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(k.sh.coefficients[ee],K);C++}else if(k.isDirectionalLight){let ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let oe=k.shadow,X=t.get(k);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=k.shadow.matrix,b++}n.directional[p]=ee,p++}else if(k.isSpotLight){let ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(V).multiplyScalar(K),ee.distance=Q,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,n.spot[x]=ee;let oe=k.shadow;if(k.map&&(n.spotLightMap[I]=k.map,I++,oe.updateMatrices(k),k.castShadow&&S++),n.spotLightMatrix[x]=oe.matrix,k.castShadow){let X=t.get(k);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=ne,y++}x++}else if(k.isRectAreaLight){let ee=e.get(k);ee.color.copy(V).multiplyScalar(K),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=ee,m++}else if(k.isPointLight){let ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){let oe=k.shadow,X=t.get(k);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,X.shadowCameraNear=oe.camera.near,X.shadowCameraFar=oe.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=k.shadow.matrix,_++}n.point[g]=ee,g++}else if(k.isHemisphereLight){let ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(K),ee.groundColor.copy(k.groundColor).multiplyScalar(K),n.hemi[u]=ee,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==b||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==I||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=b,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=I,L.numLightProbes=C,n.version=i0++)}function l(c,h){let f=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){let _=c[u];if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function zh(i){let e=new r0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function a0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zh(i),e.set(s,[o])):r>=a.length?(o=new zh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function l0(i,e,t){let n=new Xi,s=new pe,r=new pe,a=new mt,o=new Xr({depthPacking:Ql}),l=new qr,c={},h=t.maxTextureSize,f={[Rn]:Dt,[Dt]:Rn,[Ot]:Ot},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:o0,fragmentShader:c0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ut;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let u=this.type;this.render=function(S,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),T=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let K=u!==gn&&this.type===gn,Q=u===gn&&this.type!==gn;for(let ne=0,ee=S.length;ne<ee;ne++){let oe=S[ne],X=oe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||K===!0||Q===!0){let me=this.type!==gn?{minFilter:Ft,magFilter:Ft}:{};X.map!==null&&X.map.dispose(),X.map=new fn(s.x,s.y,me),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ie=X.getViewportCount();for(let me=0;me<ie;me++){let be=X.getViewport(me);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),V.viewport(a),X.updateMatrices(oe,me),n=X.getFrustum(),y(C,L,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&b(X,L),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,k)};function b(S,C){let L=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,L,p,x,null)}function _(S,C,L,w){let T=null,k=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)T=k;else if(T=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=T.uuid,K=C.uuid,Q=c[V];Q===void 0&&(Q={},c[V]=Q);let ne=Q[K];ne===void 0&&(ne=T.clone(),Q[K]=ne,C.addEventListener("dispose",I)),T=ne}if(T.visible=C.visible,T.wireframe=C.wireframe,w===gn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=i.properties.get(T);V.light=L}return T}function y(S,C,L,w,T){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===gn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let K=e.update(S),Q=S.material;if(Array.isArray(Q)){let ne=K.groups;for(let ee=0,oe=ne.length;ee<oe;ee++){let X=ne[ee],le=Q[X.materialIndex];if(le&&le.visible){let ie=_(S,le,w,T);S.onBeforeShadow(i,S,C,L,K,ie,X),i.renderBufferDirect(L,null,K,ie,S,X),S.onAfterShadow(i,S,C,L,K,ie,X)}}}else if(Q.visible){let ne=_(S,Q,w,T);S.onBeforeShadow(i,S,C,L,K,ne,null),i.renderBufferDirect(L,null,K,ne,S,null),S.onAfterShadow(i,S,C,L,K,ne,null)}}let V=S.children;for(let K=0,Q=V.length;K<Q;K++)y(V[K],C,L,w,T)}function I(S){S.target.removeEventListener("dispose",I);for(let L in c){let w=c[L],T=S.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}var h0={[ia]:sa,[ra]:ca,[aa]:la,[ai]:oa,[sa]:ia,[ca]:ra,[la]:aa,[oa]:ai};function u0(i,e){function t(){let j=!1,Se=new mt,Te=null,Ue=new mt(0,0,0,0);return{setMask:function(Me){Te!==Me&&!j&&(i.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){j=Me},setClear:function(Me,_e,Fe,Ze,at){at===!0&&(Me*=Ze,_e*=Ze,Fe*=Ze),Se.set(Me,_e,Fe,Ze),Ue.equals(Se)===!1&&(i.clearColor(Me,_e,Fe,Ze),Ue.copy(Se))},reset:function(){j=!1,Te=null,Ue.set(-1,0,0,0)}}}function n(){let j=!1,Se=!1,Te=null,Ue=null,Me=null;return{setReversed:function(_e){if(Se!==_e){let Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Se=_e;let Ze=Me;Me=null,this.setClear(Ze)}},getReversed:function(){return Se},setTest:function(_e){_e?v(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!j&&(i.depthMask(_e),Te=_e)},setFunc:function(_e){if(Se&&(_e=h0[_e]),Ue!==_e){switch(_e){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=_e}},setLocked:function(_e){j=_e},setClear:function(_e){Me!==_e&&(Se&&(_e=1-_e),i.clearDepth(_e),Me=_e)},reset:function(){j=!1,Te=null,Ue=null,Me=null,Se=!1}}}function s(){let j=!1,Se=null,Te=null,Ue=null,Me=null,_e=null,Fe=null,Ze=null,at=null;return{setTest:function(tt){j||(tt?v(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!j&&(i.stencilMask(tt),Se=tt)},setFunc:function(tt,vn,hn){(Te!==tt||Ue!==vn||Me!==hn)&&(i.stencilFunc(tt,vn,hn),Te=tt,Ue=vn,Me=hn)},setOp:function(tt,vn,hn){(_e!==tt||Fe!==vn||Ze!==hn)&&(i.stencilOp(tt,vn,hn),_e=tt,Fe=vn,Ze=hn)},setLocked:function(tt){j=tt},setClear:function(tt){at!==tt&&(i.clearStencil(tt),at=tt)},reset:function(){j=!1,Se=null,Te=null,Ue=null,Me=null,_e=null,Fe=null,Ze=null,at=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,_=null,y=null,I=null,S=null,C=new ze(0,0,0),L=0,w=!1,T=null,k=null,V=null,K=null,Q=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,oe=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=oe>=2);let le=null,ie={},me=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),te=new mt().fromArray(me),O=new mt().fromArray(be);function U(j,Se,Te,Ue){let Me=new Uint8Array(4),_e=i.createTexture();i.bindTexture(j,_e),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Te;Fe++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Se+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return _e}let M={};M[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),M[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),M[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),v(i.DEPTH_TEST),a.setFunc(ai),W(!1),q(Zo),v(i.CULL_FACE),N(Dn);function v(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function H(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function Z(j,Se){return f[j]!==Se?(i.bindFramebuffer(j,Se),f[j]=Se,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function G(j,Se){let Te=p,Ue=!1;if(j){Te=d.get(Se),Te===void 0&&(Te=[],d.set(Se,Te));let Me=j.textures;if(Te.length!==Me.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Fe=Me.length;_e<Fe;_e++)Te[_e]=i.COLOR_ATTACHMENT0+_e;Te.length=Me.length,Ue=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(Te)}function re(j){return g!==j?(i.useProgram(j),g=j,!0):!1}let J={[Xn]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};J[Rl]=i.MIN,J[Cl]=i.MAX;let A={[Il]:i.ZERO,[Pl]:i.ONE,[Ll]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[Fl]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[Ir]:i.ONE_MINUS_SRC_ALPHA,[Ol]:i.ONE_MINUS_DST_COLOR,[Nl]:i.ONE_MINUS_DST_ALPHA,[zl]:i.CONSTANT_COLOR,[kl]:i.ONE_MINUS_CONSTANT_COLOR,[Hl]:i.CONSTANT_ALPHA,[Vl]:i.ONE_MINUS_CONSTANT_ALPHA};function N(j,Se,Te,Ue,Me,_e,Fe,Ze,at,tt){if(j===Dn){x===!0&&(H(i.BLEND),x=!1);return}if(x===!1&&(v(i.BLEND),x=!0),j!==wl){if(j!==m||tt!==w){if((u!==Xn||y!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,y=Xn),tt)switch(j){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,_=null,I=null,S=null,C.set(0,0,0),L=0,m=j,w=tt}return}Me=Me||Se,_e=_e||Te,Fe=Fe||Ue,(Se!==u||Me!==y)&&(i.blendEquationSeparate(J[Se],J[Me]),u=Se,y=Me),(Te!==b||Ue!==_||_e!==I||Fe!==S)&&(i.blendFuncSeparate(A[Te],A[Ue],A[_e],A[Fe]),b=Te,_=Ue,I=_e,S=Fe),(Ze.equals(C)===!1||at!==L)&&(i.blendColor(Ze.r,Ze.g,Ze.b,at),C.copy(Ze),L=at),m=j,w=!1}function B(j,Se){j.side===Ot?H(i.CULL_FACE):v(i.CULL_FACE);let Te=j.side===Dt;Se&&(Te=!Te),W(Te),j.blending===ri&&j.transparent===!1?N(Dn):N(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);let Ue=j.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),R(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?v(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(j){T!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),T=j)}function q(j){j!==Sl?(v(i.CULL_FACE),j!==k&&(j===Zo?i.cullFace(i.BACK):j===El?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),k=j}function F(j){j!==V&&(ee&&i.lineWidth(j),V=j)}function R(j,Se,Te){j?(v(i.POLYGON_OFFSET_FILL),(K!==Se||Q!==Te)&&(i.polygonOffset(Se,Te),K=Se,Q=Te)):H(i.POLYGON_OFFSET_FILL)}function Y(j){j?v(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function ge(j){j===void 0&&(j=i.TEXTURE0+ne-1),le!==j&&(i.activeTexture(j),le=j)}function xe(j,Se,Te){Te===void 0&&(le===null?Te=i.TEXTURE0+ne-1:Te=le);let Ue=ie[Te];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[Te]=Ue),(Ue.type!==j||Ue.texture!==Se)&&(le!==Te&&(i.activeTexture(Te),le=Te),i.bindTexture(j,Se||M[j]),Ue.type=j,Ue.texture=Se)}function P(){let j=ie[le];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(j){te.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),te.copy(j))}function Oe(j){O.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),O.copy(j))}function Pe(j,Se){let Te=c.get(Se);Te===void 0&&(Te=new WeakMap,c.set(Se,Te));let Ue=Te.get(j);Ue===void 0&&(Ue=i.getUniformBlockIndex(Se,j.name),Te.set(j,Ue))}function Ae(j,Se){let Ue=c.get(Se).get(j);l.get(Se)!==Ue&&(i.uniformBlockBinding(Se,Ue,j.__bindingPointIndex),l.set(Se,Ue))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ie={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,_=null,y=null,I=null,S=null,C=new ze(0,0,0),L=0,w=!1,T=null,k=null,V=null,K=null,Q=null,te.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:v,disable:H,bindFramebuffer:Z,drawBuffers:G,useProgram:re,setBlending:N,setMaterial:B,setFlipSided:W,setCullFace:q,setLineWidth:F,setPolygonOffset:R,setScissorTest:Y,activeTexture:ge,bindTexture:xe,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Ce,texImage3D:ye,updateUBOMapping:Pe,uniformBlockBinding:Ae,texStorage2D:ve,texStorage3D:Le,texSubImage2D:ce,texSubImage3D:de,compressedTexSubImage2D:he,compressedTexSubImage3D:Re,scissor:we,viewport:Oe,reset:Xe}}function f0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):ys("canvas")}function x(P,E,$){let ce=1,de=xe(P);if((de.width>$||de.height>$)&&(ce=$/Math.max(de.width,de.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(ce*de.width),Re=Math.floor(ce*de.height);f===void 0&&(f=g(he,Re));let ve=E?g(he,Re):f;return ve.width=he,ve.height=Re,ve.getContext("2d").drawImage(P,0,0,he,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+he+"x"+Re+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,E,$,ce,de=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=E;if(E===i.RED&&($===i.FLOAT&&(he=i.R32F),$===i.HALF_FLOAT&&(he=i.R16F),$===i.UNSIGNED_BYTE&&(he=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(he=i.R8UI),$===i.UNSIGNED_SHORT&&(he=i.R16UI),$===i.UNSIGNED_INT&&(he=i.R32UI),$===i.BYTE&&(he=i.R8I),$===i.SHORT&&(he=i.R16I),$===i.INT&&(he=i.R32I)),E===i.RG&&($===i.FLOAT&&(he=i.RG32F),$===i.HALF_FLOAT&&(he=i.RG16F),$===i.UNSIGNED_BYTE&&(he=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(he=i.RG8UI),$===i.UNSIGNED_SHORT&&(he=i.RG16UI),$===i.UNSIGNED_INT&&(he=i.RG32UI),$===i.BYTE&&(he=i.RG8I),$===i.SHORT&&(he=i.RG16I),$===i.INT&&(he=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(he=i.RGB8UI),$===i.UNSIGNED_SHORT&&(he=i.RGB16UI),$===i.UNSIGNED_INT&&(he=i.RGB32UI),$===i.BYTE&&(he=i.RGB8I),$===i.SHORT&&(he=i.RGB16I),$===i.INT&&(he=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),$===i.UNSIGNED_INT&&(he=i.RGBA32UI),$===i.BYTE&&(he=i.RGBA8I),$===i.SHORT&&(he=i.RGBA16I),$===i.INT&&(he=i.RGBA32I)),E===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),E===i.RGBA){let Re=de?xs:Qe.getTransfer(ce);$===i.FLOAT&&(he=i.RGBA32F),$===i.HALF_FLOAT&&(he=i.RGBA16F),$===i.UNSIGNED_BYTE&&(he=Re===nt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function y(P,E){let $;return P?E===null||E===Kn||E===Qi?$=i.DEPTH24_STENCIL8:E===xn?$=i.DEPTH32F_STENCIL8:E===Ki&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kn||E===Qi?$=i.DEPTH_COMPONENT24:E===xn?$=i.DEPTH_COMPONENT32F:E===Ki&&($=i.DEPTH_COMPONENT16),$}function I(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ft&&P.minFilter!==Pt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){let E=P.target;E.removeEventListener("dispose",S),L(E),E.isVideoTexture&&h.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),T(E)}function L(P){let E=n.get(P);if(E.__webglInit===void 0)return;let $=P.source,ce=d.get($);if(ce){let de=ce[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(P),Object.keys(ce).length===0&&d.delete($)}n.remove(P)}function w(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let $=P.source,ce=d.get($);delete ce[E.__cacheKey],a.memory.textures--}function T(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let de=0;de<E.__webglFramebuffer[ce].length;de++)i.deleteFramebuffer(E.__webglFramebuffer[ce][de]);else i.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[ce]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let $=P.textures;for(let ce=0,de=$.length;ce<de;ce++){let he=n.get($[ce]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove($[ce])}n.remove(P)}let k=0;function V(){k=0}function K(){let P=k;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function Q(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ne(P,E){let $=n.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M($,P,E);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function ee(P,E){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){M($,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function oe(P,E){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){M($,P,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function X(P,E){let $=n.get(P);if(P.version>0&&$.__version!==P.version){v($,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}let le={[Oi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},ie={[Ft]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},me={[th]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[hc]:i.LEQUAL,[ih]:i.EQUAL,[ah]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function be(P,E){if(E.type===xn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pt||E.magFilter===da||E.magFilter===qs||E.magFilter===$n||E.minFilter===Pt||E.minFilter===da||E.minFilter===qs||E.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,le[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ft||E.minFilter!==qs&&E.minFilter!==$n||E.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function te(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",S));let ce=E.source,de=d.get(ce);de===void 0&&(de={},d.set(ce,de));let he=Q(E);if(he!==P.__cacheKey){de[he]===void 0&&(de[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),de[he].usedTimes++;let Re=de[P.__cacheKey];Re!==void 0&&(de[P.__cacheKey].usedTimes--,Re.usedTimes===0&&w(E)),P.__cacheKey=he,P.__webglTexture=de[he].texture}return $}function O(P,E,$){return Math.floor(Math.floor(P/$)/E)}function U(P,E,$,ce){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,$,ce,E.data);else{he.sort((ye,we)=>ye.start-we.start);let Re=0;for(let ye=1;ye<he.length;ye++){let we=he[Re],Oe=he[ye],Pe=we.start+we.count,Ae=O(Oe.start,E.width,4),Xe=O(we.start,E.width,4);Oe.start<=Pe+1&&Ae===Xe&&O(Oe.start+Oe.count-1,E.width,4)===Ae?we.count=Math.max(we.count,Oe.start+Oe.count-we.start):(++Re,he[Re]=Oe)}he.length=Re+1;let ve=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ye=0,we=he.length;ye<we;ye++){let Oe=he[ye],Pe=Math.floor(Oe.start/4),Ae=Math.ceil(Oe.count/4),Xe=Pe%E.width,j=Math.floor(Pe/E.width),Se=Ae,Te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,Xe,j,Se,Te,$,ce,E.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function M(P,E,$){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);let de=te(P,E),he=E.source;t.bindTexture(ce,P.__webglTexture,i.TEXTURE0+$);let Re=n.get(he);if(he.version!==Re.__version||de===!0){t.activeTexture(i.TEXTURE0+$);let ve=Qe.getPrimaries(Qe.workingColorSpace),Le=E.colorSpace===Nn?null:Qe.getPrimaries(E.colorSpace),Ce=E.colorSpace===Nn||ve===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ye=x(E.image,!1,s.maxTextureSize);ye=ge(E,ye);let we=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type),Pe=_(E.internalFormat,we,Oe,E.colorSpace,E.isVideoTexture);be(ce,E);let Ae,Xe=E.mipmaps,j=E.isVideoTexture!==!0,Se=Re.__version===void 0||de===!0,Te=he.dataReady,Ue=I(E,ye);if(E.isDepthTexture)Pe=y(E.format===es,E.type),Se&&(j?t.texStorage2D(i.TEXTURE_2D,1,Pe,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ye.width,ye.height,0,we,Oe,null));else if(E.isDataTexture)if(Xe.length>0){j&&Se&&t.texStorage2D(i.TEXTURE_2D,Ue,Pe,Xe[0].width,Xe[0].height);for(let Me=0,_e=Xe.length;Me<_e;Me++)Ae=Xe[Me],j?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,Me,Pe,Ae.width,Ae.height,0,we,Oe,Ae.data);E.generateMipmaps=!1}else j?(Se&&t.texStorage2D(i.TEXTURE_2D,Ue,Pe,ye.width,ye.height),Te&&U(E,ye,we,Oe)):t.texImage2D(i.TEXTURE_2D,0,Pe,ye.width,ye.height,0,we,Oe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Pe,Xe[0].width,Xe[0].height,ye.depth);for(let Me=0,_e=Xe.length;Me<_e;Me++)if(Ae=Xe[Me],E.format!==$t)if(we!==null)if(j){if(Te)if(E.layerUpdates.size>0){let Fe=_c(Ae.width,Ae.height,E.format,E.type);for(let Ze of E.layerUpdates){let at=Ae.data.subarray(Ze*Fe/Ae.data.BYTES_PER_ELEMENT,(Ze+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ze,Ae.width,Ae.height,1,we,at)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,ye.depth,we,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Pe,Ae.width,Ae.height,ye.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ae.width,Ae.height,ye.depth,we,Oe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Pe,Ae.width,Ae.height,ye.depth,0,we,Oe,Ae.data)}else{j&&Se&&t.texStorage2D(i.TEXTURE_2D,Ue,Pe,Xe[0].width,Xe[0].height);for(let Me=0,_e=Xe.length;Me<_e;Me++)Ae=Xe[Me],E.format!==$t?we!==null?j?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ae.width,Ae.height,we,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,Me,Pe,Ae.width,Ae.height,0,we,Oe,Ae.data)}else if(E.isDataArrayTexture)if(j){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Pe,ye.width,ye.height,ye.depth),Te)if(E.layerUpdates.size>0){let Me=_c(ye.width,ye.height,E.format,E.type);for(let _e of E.layerUpdates){let Fe=ye.data.subarray(_e*Me/ye.data.BYTES_PER_ELEMENT,(_e+1)*Me/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,we,Oe,Fe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,Oe,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ye.width,ye.height,ye.depth,0,we,Oe,ye.data);else if(E.isData3DTexture)j?(Se&&t.texStorage3D(i.TEXTURE_3D,Ue,Pe,ye.width,ye.height,ye.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,Oe,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ye.width,ye.height,ye.depth,0,we,Oe,ye.data);else if(E.isFramebufferTexture){if(Se)if(j)t.texStorage2D(i.TEXTURE_2D,Ue,Pe,ye.width,ye.height);else{let Me=ye.width,_e=ye.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Pe,Me,_e,0,we,Oe,null),Me>>=1,_e>>=1}}else if(Xe.length>0){if(j&&Se){let Me=xe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Pe,Me.width,Me.height)}for(let Me=0,_e=Xe.length;Me<_e;Me++)Ae=Xe[Me],j?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,we,Oe,Ae):t.texImage2D(i.TEXTURE_2D,Me,Pe,we,Oe,Ae);E.generateMipmaps=!1}else if(j){if(Se){let Me=xe(ye);t.texStorage2D(i.TEXTURE_2D,Ue,Pe,Me.width,Me.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Oe,ye)}else t.texImage2D(i.TEXTURE_2D,0,Pe,we,Oe,ye);m(E)&&u(ce),Re.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function v(P,E,$){if(E.image.length!==6)return;let ce=te(P,E),de=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+$);let he=n.get(de);if(de.version!==he.__version||ce===!0){t.activeTexture(i.TEXTURE0+$);let Re=Qe.getPrimaries(Qe.workingColorSpace),ve=E.colorSpace===Nn?null:Qe.getPrimaries(E.colorSpace),Le=E.colorSpace===Nn||Re===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,we=[];for(let _e=0;_e<6;_e++)!Ce&&!ye?we[_e]=x(E.image[_e],!0,s.maxCubemapSize):we[_e]=ye?E.image[_e].image:E.image[_e],we[_e]=ge(E,we[_e]);let Oe=we[0],Pe=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),Xe=_(E.internalFormat,Pe,Ae,E.colorSpace),j=E.isVideoTexture!==!0,Se=he.__version===void 0||ce===!0,Te=de.dataReady,Ue=I(E,Oe);be(i.TEXTURE_CUBE_MAP,E);let Me;if(Ce){j&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Xe,Oe.width,Oe.height);for(let _e=0;_e<6;_e++){Me=we[_e].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){let Ze=Me[Fe];E.format!==$t?Pe!==null?j?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,Ze.width,Ze.height,Pe,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,Xe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,Ze.width,Ze.height,Pe,Ae,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,Xe,Ze.width,Ze.height,0,Pe,Ae,Ze.data)}}}else{if(Me=E.mipmaps,j&&Se){Me.length>0&&Ue++;let _e=xe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Xe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){j?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,we[_e].width,we[_e].height,Pe,Ae,we[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,we[_e].width,we[_e].height,0,Pe,Ae,we[_e].data);for(let Fe=0;Fe<Me.length;Fe++){let at=Me[Fe].image[_e].image;j?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,at.width,at.height,Pe,Ae,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,Xe,at.width,at.height,0,Pe,Ae,at.data)}}else{j?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe,Ae,we[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,Pe,Ae,we[_e]);for(let Fe=0;Fe<Me.length;Fe++){let Ze=Me[Fe];j?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Pe,Ae,Ze.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,Xe,Pe,Ae,Ze.image[_e])}}}m(E)&&u(i.TEXTURE_CUBE_MAP),he.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function H(P,E,$,ce,de,he){let Re=r.convert($.format,$.colorSpace),ve=r.convert($.type),Le=_($.internalFormat,Re,ve,$.colorSpace),Ce=n.get(E),ye=n.get($);if(ye.__renderTarget=E,!Ce.__hasExternalTextures){let we=Math.max(1,E.width>>he),Oe=Math.max(1,E.height>>he);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,he,Le,we,Oe,E.depth,0,Re,ve,null):t.texImage2D(de,he,Le,we,Oe,0,Re,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),R(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,de,ye.__webglTexture,0,F(E)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,de,ye.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(P,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let ce=E.depthTexture,de=ce&&ce.isDepthTexture?ce.type:null,he=y(E.stencilBuffer,de),Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=F(E);R(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,he,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,he,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,P)}else{let ce=E.textures;for(let de=0;de<ce.length;de++){let he=ce[de],Re=r.convert(he.format,he.colorSpace),ve=r.convert(he.type),Le=_(he.internalFormat,Re,ve,he.colorSpace),Ce=F(E);$&&R(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Le,E.width,E.height):R(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Le,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(E.depthTexture);ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);let de=ce.__webglTexture,he=F(E);if(E.depthTexture.format===Bi)R(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(E.depthTexture.format===es)R(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function re(P){let E=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let ce=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){let de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",de)};ce.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=ce}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let ce=P.texture.mipmaps;ce&&ce.length>0?G(E.__webglFramebuffer[0],P):G(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),Z(E.__webglDepthbuffer[ce],P,!1);else{let de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,he)}}else{let ce=P.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Z(E.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(P,E,$){let ce=n.get(P);E!==void 0&&H(ce.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&re(P)}function A(P){let E=P.texture,$=n.get(P),ce=n.get(E);P.addEventListener("dispose",C);let de=P.textures,he=P.isWebGLCubeRenderTarget===!0,Re=de.length>1;if(Re||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,a.memory.textures++),he){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let Le=0;Le<E.mipmaps.length;Le++)$.__webglFramebuffer[ve][Le]=i.createFramebuffer()}else $.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)$.__webglFramebuffer[ve]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ve=0,Le=de.length;ve<Le;ve++){let Ce=n.get(de[ve]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&R(P)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){let Le=de[ve];$.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);let Ce=r.convert(Le.format,Le.colorSpace),ye=r.convert(Le.type),we=_(Le.internalFormat,Ce,ye,Le.colorSpace,P.isXRRenderTarget===!0),Oe=F(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,we,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Z($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),be(i.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)H($.__webglFramebuffer[ve][Le],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le);else H($.__webglFramebuffer[ve],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(E)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Le=de.length;ve<Le;ve++){let Ce=de[ve],ye=n.get(Ce),we=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),be(we,Ce),H($.__webglFramebuffer,P,Ce,i.COLOR_ATTACHMENT0+ve,we,0),m(Ce)&&u(we)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),be(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)H($.__webglFramebuffer[Le],P,E,i.COLOR_ATTACHMENT0,ve,Le);else H($.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ve,0);m(E)&&u(ve),t.unbindTexture()}P.depthBuffer&&re(P)}function N(P){let E=P.textures;for(let $=0,ce=E.length;$<ce;$++){let de=E[$];if(m(de)){let he=b(P),Re=n.get(de).__webglTexture;t.bindTexture(he,Re),u(he),t.unbindTexture()}}}let B=[],W=[];function q(P){if(P.samples>0){if(R(P)===!1){let E=P.textures,$=P.width,ce=P.height,de=i.COLOR_BUFFER_BIT,he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(P),ve=E.length>1;if(ve)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);let ye=n.get(E[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,$,ce,0,0,$,ce,de,i.NEAREST),l===!0&&(B.length=0,W.length=0,B.push(i.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(B.push(he),W.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);let ye=n.get(E[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function F(P){return Math.min(s.maxSamples,P.samples)}function R(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ge(P,E){let $=P.colorSpace,ce=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==oi&&$!==Nn&&(Qe.getTransfer($)===nt?(ce!==$t||de!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=ee,this.setTexture3D=oe,this.setTextureCube=X,this.rebindTextures=J,this.setupRenderTarget=A,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=H,this.useMultisampledRTT=R}function d0(i,e){function t(n,s=Nn){let r,a=Qe.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===nc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===$t)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===cc)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Ma||n===ba||n===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===wa||n===Ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===wa)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sn({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Pc,u={},b=t.getContextAttributes(),_=null,y=null,I=[],S=[],C=new pe,L=null,w=new Nt;w.viewport=new mt;let T=new Nt;T.viewport=new mt;let k=[w,T],V=new ta,K=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let v=I[M];return v===void 0&&(v=new Wi,I[M]=v),v.getTargetRaySpace()},this.getControllerGrip=function(M){let v=I[M];return v===void 0&&(v=new Wi,I[M]=v),v.getGripSpace()},this.getHand=function(M){let v=I[M];return v===void 0&&(v=new Wi,I[M]=v),v.getHandSpace()};function ne(M){let v=S.indexOf(M.inputSource);if(v===-1)return;let H=I[v];H!==void 0&&(H.update(M.inputSource,M.frame,c||a),H.dispatchEvent({type:M.type,data:M.inputSource}))}function ee(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",oe);for(let M=0;M<I.length;M++){let v=S[M];v!==null&&(S[M]=null,I[M].disconnect(v))}K=null,Q=null,m.reset();for(let M in u)delete u[M];e.setRenderTarget(_),p=null,d=null,f=null,s=null,y=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){o=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Z=null,G=null;b.depth&&(G=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=b.stencil?es:Bi,Z=b.stencil?Qi:Kn);let re={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:$t,type:ln,depthTexture:new As(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let H={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fn(p.framebufferWidth,p.framebufferHeight,{format:$t,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),U.setContext(s),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(M){for(let v=0;v<M.removed.length;v++){let H=M.removed[v],Z=S.indexOf(H);Z>=0&&(S[Z]=null,I[Z].disconnect(H))}for(let v=0;v<M.added.length;v++){let H=M.added[v],Z=S.indexOf(H);if(Z===-1){for(let re=0;re<I.length;re++)if(re>=S.length){S.push(H),Z=re;break}else if(S[re]===null){S[re]=H,Z=re;break}if(Z===-1)break}let G=I[Z];G&&G.connect(H)}}let X=new z,le=new z;function ie(M,v,H){X.setFromMatrixPosition(v.matrixWorld),le.setFromMatrixPosition(H.matrixWorld);let Z=X.distanceTo(le),G=v.projectionMatrix.elements,re=H.projectionMatrix.elements,J=G[14]/(G[10]-1),A=G[14]/(G[10]+1),N=(G[9]+1)/G[5],B=(G[9]-1)/G[5],W=(G[8]-1)/G[0],q=(re[8]+1)/re[0],F=J*W,R=J*q,Y=Z/(-W+q),ge=Y*-W;if(v.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ge),M.translateZ(Y),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),G[10]===-1)M.projectionMatrix.copy(v.projectionMatrix),M.projectionMatrixInverse.copy(v.projectionMatrixInverse);else{let xe=J+Y,P=A+Y,E=F-ge,$=R+(Z-ge),ce=N*A/P*xe,de=B*A/P*xe;M.projectionMatrix.makePerspective(E,$,ce,de,xe,P),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function me(M,v){v===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(v.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let v=M.near,H=M.far;m.texture!==null&&(m.depthNear>0&&(v=m.depthNear),m.depthFar>0&&(H=m.depthFar)),V.near=T.near=w.near=v,V.far=T.far=w.far=H,(K!==V.near||Q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),K=V.near,Q=V.far),V.layers.mask=M.layers.mask|6,w.layers.mask=V.layers.mask&3,T.layers.mask=V.layers.mask&5;let Z=M.parent,G=V.cameras;me(V,Z);for(let re=0;re<G.length;re++)me(G[re],Z);G.length===2?ie(V,w,T):V.projectionMatrix.copy(w.projectionMatrix),be(M,V,Z)};function be(M,v,H){H===null?M.matrix.copy(v.matrixWorld):(M.matrix.copy(H.matrixWorld),M.matrix.invert(),M.matrix.multiply(v.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(v.projectionMatrix),M.projectionMatrixInverse.copy(v.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=zi*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(M){l=M,d!==null&&(d.fixedFoveation=M),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=M)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(M){return u[M]};let te=null;function O(M,v){if(h=v.getViewerPose(c||a),g=v,h!==null){let H=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Z=!1;H.length!==V.cameras.length&&(V.cameras.length=0,Z=!0);for(let A=0;A<H.length;A++){let N=H[A],B=null;if(p!==null)B=p.getViewport(N);else{let q=f.getViewSubImage(d,N);B=q.viewport,A===0&&(e.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(y))}let W=k[A];W===void 0&&(W=new Nt,W.layers.enable(A),W.viewport=new mt,k[A]=W),W.matrix.fromArray(N.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(N.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(B.x,B.y,B.width,B.height),A===0&&(V.matrix.copy(W.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Z===!0&&V.cameras.push(W)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let A=f.getDepthInformation(H[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(G&&G.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<H.length;A++){let N=H[A].camera;if(N){let B=u[N];B||(B=new Rs,u[N]=B);let W=f.getCameraImage(N);B.sourceTexture=W}}}}for(let H=0;H<I.length;H++){let Z=S[H],G=I[H];Z!==null&&G!==void 0&&G.update(Z,v,c||a)}te&&te(M,v),v.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:v}),g=null}let U=new kh;U.setAnimationLoop(O),this.setAnimationLoop=function(M){te=M},this.dispose=function(){}}},yi=new nn,g0=new ht;function x0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,pc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,b,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Dt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Dt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=e.get(u),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(yi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=_*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(b,I);let S=e.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let _=f();b.__bindingPointIndex=_;let y=i.createBuffer(),I=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],y=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,C=y.length;S<C;S++){let L=Array.isArray(y[S])?y[S]:[y[S]];for(let w=0,T=L.length;w<T;w++){let k=L[w];if(p(k,S,w,I)===!0){let V=k.__offset,K=Array.isArray(k.value)?k.value:[k.value],Q=0;for(let ne=0;ne<K.length;ne++){let ee=K[ne],oe=x(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,Q),Q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,y,I){let S=b.value,C=_+"_"+y;if(I[C]===void 0)return typeof S=="number"||typeof S=="boolean"?I[C]=S:I[C]=S.clone(),!0;{let L=I[C];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return I[C]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(b){let _=b.uniforms,y=0,I=16;for(let C=0,L=_.length;C<L;C++){let w=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,k=w.length;T<k;T++){let V=w[T],K=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,ne=K.length;Q<ne;Q++){let ee=K[Q],oe=x(ee),X=y%I,le=X%oe.boundary,ie=X+le;y+=le,ie!==0&&I-ie<oe.storage&&(y+=I-ie),V.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=oe.storage}}}let S=y%I;return S>0&&(y+=I-S),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ja=class{constructor(e={}){let{canvas:t=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,b=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,I=!1;this._outputColorSpace=xt;let S=0,C=0,L=null,w=-1,T=null,k=new mt,V=new mt,K=null,Q=new ze(0),ne=0,ee=t.width,oe=t.height,X=1,le=null,ie=null,me=new mt(0,0,ee,oe),be=new mt(0,0,ee,oe),te=!1,O=new Xi,U=!1,M=!1,v=new ht,H=new z,Z=new mt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function J(){return L===null?X:1}let A=n;function N(D,se){return t.getContext(D,se)}try{let D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Me,!1),A===null){let se="webgl2";if(A=N(se,D),A===null)throw N(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let B,W,q,F,R,Y,ge,xe,P,E,$,ce,de,he,Re,ve,Le,Ce,ye,we,Oe,Pe,Ae,Xe;function j(){B=new Fm(A),B.init(),Pe=new d0(A,B),W=new Cm(A,B,e,Pe),q=new u0(A,B),W.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),F=new zm(A),R=new jg,Y=new f0(A,B,q,R,W,Pe,F),ge=new Pm(y),xe=new Nm(y),P=new Xf(A),Ae=new Am(A,P),E=new Om(A,P,F,Ae),$=new Hm(A,E,P,F),ye=new km(A,W,Y),ve=new Im(R),ce=new Kg(y,ge,xe,B,W,Ae,ve),de=new x0(y,R),he=new e0,Re=new a0(B),Ce=new Tm(y,ge,xe,q,$,p,l),Le=new l0(y,$,W),Xe=new _0(A,F,W,q),we=new Rm(A,B,F),Oe=new Bm(A,B,F),F.programs=ce.programs,y.capabilities=W,y.extensions=B,y.properties=R,y.renderLists=he,y.shadowMap=Le,y.state=q,y.info=F}j();let Se=new Lc(y,A);this.xr=Se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let D=B.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=B.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(ee,oe,!1))},this.getSize=function(D){return D.set(ee,oe)},this.setSize=function(D,se,ue=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=D,oe=se,t.width=Math.floor(D*X),t.height=Math.floor(se*X),ue===!0&&(t.style.width=D+"px",t.style.height=se+"px"),this.setViewport(0,0,D,se)},this.getDrawingBufferSize=function(D){return D.set(ee*X,oe*X).floor()},this.setDrawingBufferSize=function(D,se,ue){ee=D,oe=se,X=ue,t.width=Math.floor(D*ue),t.height=Math.floor(se*ue),this.setViewport(0,0,D,se)},this.getCurrentViewport=function(D){return D.copy(k)},this.getViewport=function(D){return D.copy(me)},this.setViewport=function(D,se,ue,fe){D.isVector4?me.set(D.x,D.y,D.z,D.w):me.set(D,se,ue,fe),q.viewport(k.copy(me).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(be)},this.setScissor=function(D,se,ue,fe){D.isVector4?be.set(D.x,D.y,D.z,D.w):be.set(D,se,ue,fe),q.scissor(V.copy(be).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(D){q.setScissorTest(te=D)},this.setOpaqueSort=function(D){le=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(D=!0,se=!0,ue=!0){let fe=0;if(D){let ae=!1;if(L!==null){let Ee=L.texture.format;ae=Ee===ya||Ee===_a||Ee===xa}if(ae){let Ee=L.texture.type,De=Ee===ln||Ee===Kn||Ee===Ki||Ee===Qi||Ee===ma||Ee===ga,Be=Ce.getClearColor(),Ne=Ce.getClearAlpha(),Ge=Be.r,qe=Be.g,He=Be.b;De?(g[0]=Ge,g[1]=qe,g[2]=He,g[3]=Ne,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Ge,x[1]=qe,x[2]=He,x[3]=Ne,A.clearBufferiv(A.COLOR,0,x))}else fe|=A.COLOR_BUFFER_BIT}se&&(fe|=A.DEPTH_BUFFER_BIT),ue&&(fe|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ce.dispose(),he.dispose(),Re.dispose(),R.dispose(),ge.dispose(),xe.dispose(),$.dispose(),Ae.dispose(),Xe.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",hn),Se.removeEventListener("sessionend",kc),jn.stop()};function Te(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let D=F.autoReset,se=Le.enabled,ue=Le.autoUpdate,fe=Le.needsUpdate,ae=Le.type;j(),F.autoReset=D,Le.enabled=se,Le.autoUpdate=ue,Le.needsUpdate=fe,Le.type=ae}function Me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function _e(D){let se=D.target;se.removeEventListener("dispose",_e),Fe(se)}function Fe(D){Ze(D),R.remove(D)}function Ze(D){let se=R.get(D).programs;se!==void 0&&(se.forEach(function(ue){ce.releaseProgram(ue)}),D.isShaderMaterial&&ce.releaseShaderCache(D))}this.renderBufferDirect=function(D,se,ue,fe,ae,Ee){se===null&&(se=G);let De=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=xu(D,se,ue,fe,ae);q.setMaterial(fe,De);let Ne=ue.index,Ge=1;if(fe.wireframe===!0){if(Ne=E.getWireframeAttribute(ue),Ne===void 0)return;Ge=2}let qe=ue.drawRange,He=ue.attributes.position,je=qe.start*Ge,st=(qe.start+qe.count)*Ge;Ee!==null&&(je=Math.max(je,Ee.start*Ge),st=Math.min(st,(Ee.start+Ee.count)*Ge)),Ne!==null?(je=Math.max(je,0),st=Math.min(st,Ne.count)):He!=null&&(je=Math.max(je,0),st=Math.min(st,He.count));let gt=st-je;if(gt<0||gt===1/0)return;Ae.setup(ae,fe,Be,ue,Ne);let ot,rt=we;if(Ne!==null&&(ot=P.get(Ne),rt=Oe,rt.setIndex(ot)),ae.isMesh)fe.wireframe===!0?(q.setLineWidth(fe.wireframeLinewidth*J()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(ae.isLine){let Ve=fe.linewidth;Ve===void 0&&(Ve=1),q.setLineWidth(Ve*J()),ae.isLineSegments?rt.setMode(A.LINES):ae.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else ae.isPoints?rt.setMode(A.POINTS):ae.isSprite&&rt.setMode(A.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))rt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let Ve=ae._multiDrawStarts,ft=ae._multiDrawCounts,et=ae._multiDrawCount,Bt=Ne?P.get(Ne).bytesPerElement:1,bi=R.get(fe).currentProgram.getUniforms();for(let zt=0;zt<et;zt++)bi.setValue(A,"_gl_DrawID",zt),rt.render(Ve[zt]/Bt,ft[zt])}else if(ae.isInstancedMesh)rt.renderInstances(je,gt,ae.count);else if(ue.isInstancedBufferGeometry){let Ve=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ft=Math.min(ue.instanceCount,Ve);rt.renderInstances(je,gt,ft)}else rt.render(je,gt)};function at(D,se,ue){D.transparent===!0&&D.side===Ot&&D.forceSinglePass===!1?(D.side=Dt,D.needsUpdate=!0,sr(D,se,ue),D.side=Rn,D.needsUpdate=!0,sr(D,se,ue),D.side=Ot):sr(D,se,ue)}this.compile=function(D,se,ue=null){ue===null&&(ue=D),u=Re.get(ue),u.init(se),_.push(u),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(se.layers)&&(u.pushLight(ae),ae.castShadow&&u.pushShadow(ae))}),D!==ue&&D.traverseVisible(function(ae){ae.isLight&&ae.layers.test(se.layers)&&(u.pushLight(ae),ae.castShadow&&u.pushShadow(ae))}),u.setupLights();let fe=new Set;return D.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Ee=ae.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let Be=Ee[De];at(Be,ue,ae),fe.add(Be)}else at(Ee,ue,ae),fe.add(Ee)}),u=_.pop(),fe},this.compileAsync=function(D,se,ue=null){let fe=this.compile(D,se,ue);return new Promise(ae=>{function Ee(){if(fe.forEach(function(De){R.get(De).currentProgram.isReady()&&fe.delete(De)}),fe.size===0){ae(D);return}setTimeout(Ee,10)}B.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function vn(D){tt&&tt(D)}function hn(){jn.stop()}function kc(){jn.start()}let jn=new kh;jn.setAnimationLoop(vn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(D){tt=D,Se.setAnimationLoop(D),D===null?jn.stop():jn.start()},Se.addEventListener("sessionstart",hn),Se.addEventListener("sessionend",kc),this.render=function(D,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(se),se=Se.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,se,L),u=Re.get(D,_.length),u.init(se),_.push(u),v.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O.setFromProjectionMatrix(v,tn,se.reversedDepth),M=this.localClippingEnabled,U=ve.init(this.clippingPlanes,M),m=he.get(D,b.length),m.init(),b.push(m),Se.enabled===!0&&Se.isPresenting===!0){let Ee=y.xr.getDepthSensingMesh();Ee!==null&&ro(Ee,se,-1/0,y.sortObjects)}ro(D,se,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,ie),re=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,re&&Ce.addToRenderList(m,D),this.info.render.frame++,U===!0&&ve.beginShadows();let ue=u.state.shadowsArray;Le.render(ue,D,se),U===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let fe=m.opaque,ae=m.transmissive;if(u.setupLights(),se.isArrayCamera){let Ee=se.cameras;if(ae.length>0)for(let De=0,Be=Ee.length;De<Be;De++){let Ne=Ee[De];Vc(fe,ae,D,Ne)}re&&Ce.render(D);for(let De=0,Be=Ee.length;De<Be;De++){let Ne=Ee[De];Hc(m,D,Ne,Ne.viewport)}}else ae.length>0&&Vc(fe,ae,D,se),re&&Ce.render(D),Hc(m,D,se);L!==null&&C===0&&(Y.updateMultisampleRenderTarget(L),Y.updateRenderTargetMipmap(L)),D.isScene===!0&&D.onAfterRender(y,D,se),Ae.resetDefaultState(),w=-1,T=null,_.pop(),_.length>0?(u=_[_.length-1],U===!0&&ve.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ro(D,se,ue,fe){if(D.visible===!1)return;if(D.layers.test(se.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(se);else if(D.isLight)u.pushLight(D),D.castShadow&&u.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||O.intersectsSprite(D)){fe&&Z.setFromMatrixPosition(D.matrixWorld).applyMatrix4(v);let De=$.update(D),Be=D.material;Be.visible&&m.push(D,De,Be,ue,Z.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||O.intersectsObject(D))){let De=$.update(D),Be=D.material;if(fe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Z.copy(D.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Z.copy(De.boundingSphere.center)),Z.applyMatrix4(D.matrixWorld).applyMatrix4(v)),Array.isArray(Be)){let Ne=De.groups;for(let Ge=0,qe=Ne.length;Ge<qe;Ge++){let He=Ne[Ge],je=Be[He.materialIndex];je&&je.visible&&m.push(D,De,je,ue,Z.z,He)}}else Be.visible&&m.push(D,De,Be,ue,Z.z,null)}}let Ee=D.children;for(let De=0,Be=Ee.length;De<Be;De++)ro(Ee[De],se,ue,fe)}function Hc(D,se,ue,fe){let ae=D.opaque,Ee=D.transmissive,De=D.transparent;u.setupLightsView(ue),U===!0&&ve.setGlobalState(y.clippingPlanes,ue),fe&&q.viewport(k.copy(fe)),ae.length>0&&ir(ae,se,ue),Ee.length>0&&ir(Ee,se,ue),De.length>0&&ir(De,se,ue),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Vc(D,se,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[fe.id]===void 0&&(u.state.transmissionRenderTarget[fe.id]=new fn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?ji:ln,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let Ee=u.state.transmissionRenderTarget[fe.id],De=fe.viewport||k;Ee.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);let Be=y.getRenderTarget(),Ne=y.getActiveCubeFace(),Ge=y.getActiveMipmapLevel();y.setRenderTarget(Ee),y.getClearColor(Q),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),re&&Ce.render(ue);let qe=y.toneMapping;y.toneMapping=Un;let He=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),u.setupLightsView(fe),U===!0&&ve.setGlobalState(y.clippingPlanes,fe),ir(D,ue,fe),Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee),B.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,gt=se.length;st<gt;st++){let ot=se[st],rt=ot.object,Ve=ot.geometry,ft=ot.material,et=ot.group;if(ft.side===Ot&&rt.layers.test(fe.layers)){let Bt=ft.side;ft.side=Dt,ft.needsUpdate=!0,Gc(rt,ue,fe,Ve,ft,et),ft.side=Bt,ft.needsUpdate=!0,je=!0}}je===!0&&(Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee))}y.setRenderTarget(Be,Ne,Ge),y.setClearColor(Q,ne),He!==void 0&&(fe.viewport=He),y.toneMapping=qe}function ir(D,se,ue){let fe=se.isScene===!0?se.overrideMaterial:null;for(let ae=0,Ee=D.length;ae<Ee;ae++){let De=D[ae],Be=De.object,Ne=De.geometry,Ge=De.group,qe=De.material;qe.allowOverride===!0&&fe!==null&&(qe=fe),Be.layers.test(ue.layers)&&Gc(Be,se,ue,Ne,qe,Ge)}}function Gc(D,se,ue,fe,ae,Ee){D.onBeforeRender(y,se,ue,fe,ae,Ee),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(y,se,ue,fe,D,Ee),ae.transparent===!0&&ae.side===Ot&&ae.forceSinglePass===!1?(ae.side=Dt,ae.needsUpdate=!0,y.renderBufferDirect(ue,se,fe,ae,D,Ee),ae.side=Rn,ae.needsUpdate=!0,y.renderBufferDirect(ue,se,fe,ae,D,Ee),ae.side=Ot):y.renderBufferDirect(ue,se,fe,ae,D,Ee),D.onAfterRender(y,se,ue,fe,ae,Ee)}function sr(D,se,ue){se.isScene!==!0&&(se=G);let fe=R.get(D),ae=u.state.lights,Ee=u.state.shadowsArray,De=ae.state.version,Be=ce.getParameters(D,ae.state,Ee,se,ue),Ne=ce.getProgramCacheKey(Be),Ge=fe.programs;fe.environment=D.isMeshStandardMaterial?se.environment:null,fe.fog=se.fog,fe.envMap=(D.isMeshStandardMaterial?xe:ge).get(D.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&D.envMap===null?se.environmentRotation:D.envMapRotation,Ge===void 0&&(D.addEventListener("dispose",_e),Ge=new Map,fe.programs=Ge);let qe=Ge.get(Ne);if(qe!==void 0){if(fe.currentProgram===qe&&fe.lightsStateVersion===De)return Xc(D,Be),qe}else Be.uniforms=ce.getUniforms(D),D.onBeforeCompile(Be,y),qe=ce.acquireProgram(Be,Ne),Ge.set(Ne,qe),fe.uniforms=Be.uniforms;let He=fe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(He.clippingPlanes=ve.uniform),Xc(D,Be),fe.needsLights=yu(D),fe.lightsStateVersion=De,fe.needsLights&&(He.ambientLightColor.value=ae.state.ambient,He.lightProbe.value=ae.state.probe,He.directionalLights.value=ae.state.directional,He.directionalLightShadows.value=ae.state.directionalShadow,He.spotLights.value=ae.state.spot,He.spotLightShadows.value=ae.state.spotShadow,He.rectAreaLights.value=ae.state.rectArea,He.ltc_1.value=ae.state.rectAreaLTC1,He.ltc_2.value=ae.state.rectAreaLTC2,He.pointLights.value=ae.state.point,He.pointLightShadows.value=ae.state.pointShadow,He.hemisphereLights.value=ae.state.hemi,He.directionalShadowMap.value=ae.state.directionalShadowMap,He.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,He.spotShadowMap.value=ae.state.spotShadowMap,He.spotLightMatrix.value=ae.state.spotLightMatrix,He.spotLightMap.value=ae.state.spotLightMap,He.pointShadowMap.value=ae.state.pointShadowMap,He.pointShadowMatrix.value=ae.state.pointShadowMatrix),fe.currentProgram=qe,fe.uniformsList=null,qe}function Wc(D){if(D.uniformsList===null){let se=D.currentProgram.getUniforms();D.uniformsList=is.seqWithValue(se.seq,D.uniforms)}return D.uniformsList}function Xc(D,se){let ue=R.get(D);ue.outputColorSpace=se.outputColorSpace,ue.batching=se.batching,ue.batchingColor=se.batchingColor,ue.instancing=se.instancing,ue.instancingColor=se.instancingColor,ue.instancingMorph=se.instancingMorph,ue.skinning=se.skinning,ue.morphTargets=se.morphTargets,ue.morphNormals=se.morphNormals,ue.morphColors=se.morphColors,ue.morphTargetsCount=se.morphTargetsCount,ue.numClippingPlanes=se.numClippingPlanes,ue.numIntersection=se.numClipIntersection,ue.vertexAlphas=se.vertexAlphas,ue.vertexTangents=se.vertexTangents,ue.toneMapping=se.toneMapping}function xu(D,se,ue,fe,ae){se.isScene!==!0&&(se=G),Y.resetTextureUnits();let Ee=se.fog,De=fe.isMeshStandardMaterial?se.environment:null,Be=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:oi,Ne=(fe.isMeshStandardMaterial?xe:ge).get(fe.envMap||De),Ge=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,qe=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),He=!!ue.morphAttributes.position,je=!!ue.morphAttributes.normal,st=!!ue.morphAttributes.color,gt=Un;fe.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=y.toneMapping);let ot=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,rt=ot!==void 0?ot.length:0,Ve=R.get(fe),ft=u.state.lights;if(U===!0&&(M===!0||D!==T)){let Ct=D===T&&fe.id===w;ve.setState(fe,D,Ct)}let et=!1;fe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ft.state.version||Ve.outputColorSpace!==Be||ae.isBatchedMesh&&Ve.batching===!1||!ae.isBatchedMesh&&Ve.batching===!0||ae.isBatchedMesh&&Ve.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ve.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ve.instancing===!1||!ae.isInstancedMesh&&Ve.instancing===!0||ae.isSkinnedMesh&&Ve.skinning===!1||!ae.isSkinnedMesh&&Ve.skinning===!0||ae.isInstancedMesh&&Ve.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ve.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ve.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ve.instancingMorph===!1&&ae.morphTexture!==null||Ve.envMap!==Ne||fe.fog===!0&&Ve.fog!==Ee||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ve.numPlanes||Ve.numIntersection!==ve.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==qe||Ve.morphTargets!==He||Ve.morphNormals!==je||Ve.morphColors!==st||Ve.toneMapping!==gt||Ve.morphTargetsCount!==rt)&&(et=!0):(et=!0,Ve.__version=fe.version);let Bt=Ve.currentProgram;et===!0&&(Bt=sr(fe,se,ae));let bi=!1,zt=!1,rs=!1,dt=Bt.getUniforms(),Yt=Ve.uniforms;if(q.useProgram(Bt.program)&&(bi=!0,zt=!0,rs=!0),fe.id!==w&&(w=fe.id,zt=!0),bi||T!==D){q.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",D.projectionMatrix),dt.setValue(A,"viewMatrix",D.matrixWorldInverse);let Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,H.setFromMatrixPosition(D.matrixWorld)),W.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&dt.setValue(A,"isOrthographic",D.isOrthographicCamera===!0),T!==D&&(T=D,zt=!0,rs=!0)}if(ae.isSkinnedMesh){dt.setOptional(A,ae,"bindMatrix"),dt.setOptional(A,ae,"bindMatrixInverse");let Ct=ae.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),dt.setValue(A,"boneTexture",Ct.boneTexture,Y))}ae.isBatchedMesh&&(dt.setOptional(A,ae,"batchingTexture"),dt.setValue(A,"batchingTexture",ae._matricesTexture,Y),dt.setOptional(A,ae,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",ae._indirectTexture,Y),dt.setOptional(A,ae,"batchingColorTexture"),ae._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",ae._colorsTexture,Y));let Zt=ue.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ye.update(ae,ue,Bt),(zt||Ve.receiveShadow!==ae.receiveShadow)&&(Ve.receiveShadow=ae.receiveShadow,dt.setValue(A,"receiveShadow",ae.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Yt.envMap.value=Ne,Yt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&se.environment!==null&&(Yt.envMapIntensity.value=se.environmentIntensity),zt&&(dt.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&_u(Yt,rs),Ee&&fe.fog===!0&&de.refreshFogUniforms(Yt,Ee),de.refreshMaterialUniforms(Yt,fe,X,oe,u.state.transmissionRenderTarget[D.id]),is.upload(A,Wc(Ve),Yt,Y)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(is.upload(A,Wc(Ve),Yt,Y),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&dt.setValue(A,"center",ae.center),dt.setValue(A,"modelViewMatrix",ae.modelViewMatrix),dt.setValue(A,"normalMatrix",ae.normalMatrix),dt.setValue(A,"modelMatrix",ae.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){let Ct=fe.uniformsGroups;for(let Ut=0,ao=Ct.length;Ut<ao;Ut++){let Qn=Ct[Ut];Xe.update(Qn,Bt),Xe.bind(Qn,Bt)}}return Bt}function _u(D,se){D.ambientLightColor.needsUpdate=se,D.lightProbe.needsUpdate=se,D.directionalLights.needsUpdate=se,D.directionalLightShadows.needsUpdate=se,D.pointLights.needsUpdate=se,D.pointLightShadows.needsUpdate=se,D.spotLights.needsUpdate=se,D.spotLightShadows.needsUpdate=se,D.rectAreaLights.needsUpdate=se,D.hemisphereLights.needsUpdate=se}function yu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(D,se,ue){let fe=R.get(D);fe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),R.get(D.texture).__webglTexture=se,R.get(D.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:ue,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,se){let ue=R.get(D);ue.__webglFramebuffer=se,ue.__useDefaultFramebuffer=se===void 0};let vu=A.createFramebuffer();this.setRenderTarget=function(D,se=0,ue=0){L=D,S=se,C=ue;let fe=!0,ae=null,Ee=!1,De=!1;if(D){let Ne=R.get(D);if(Ne.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(A.FRAMEBUFFER,null),fe=!1;else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(D);else if(Ne.__hasExternalTextures)Y.rebindTextures(D,R.get(D.texture).__webglTexture,R.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let He=D.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&R.has(He)&&(D.width!==He.image.width||D.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(D)}}let Ge=D.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);let qe=R.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qe[se])?ae=qe[se][ue]:ae=qe[se],Ee=!0):D.samples>0&&Y.useMultisampledRTT(D)===!1?ae=R.get(D).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[ue]:ae=qe,k.copy(D.viewport),V.copy(D.scissor),K=D.scissorTest}else k.copy(me).multiplyScalar(X).floor(),V.copy(be).multiplyScalar(X).floor(),K=te;if(ue!==0&&(ae=vu),q.bindFramebuffer(A.FRAMEBUFFER,ae)&&fe&&q.drawBuffers(D,ae),q.viewport(k),q.scissor(V),q.setScissorTest(K),Ee){let Ne=R.get(D.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ne.__webglTexture,ue)}else if(De){let Ne=se;for(let Ge=0;Ge<D.textures.length;Ge++){let qe=R.get(D.textures[Ge]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,ue,Ne)}}else if(D!==null&&ue!==0){let Ne=R.get(D.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ne.__webglTexture,ue)}w=-1},this.readRenderTargetPixels=function(D,se,ue,fe,ae,Ee,De,Be=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=R.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){q.bindFramebuffer(A.FRAMEBUFFER,Ne);try{let Ge=D.textures[Be],qe=Ge.format,He=Ge.type;if(!W.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=D.width-fe&&ue>=0&&ue<=D.height-ae&&(D.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Be),A.readPixels(se,ue,fe,ae,Pe.convert(qe),Pe.convert(He),Ee))}finally{let Ge=L!==null?R.get(L).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(D,se,ue,fe,ae,Ee,De,Be=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=R.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(se>=0&&se<=D.width-fe&&ue>=0&&ue<=D.height-ae){q.bindFramebuffer(A.FRAMEBUFFER,Ne);let Ge=D.textures[Be],qe=Ge.format,He=Ge.type;if(!W.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.bufferData(A.PIXEL_PACK_BUFFER,Ee.byteLength,A.STREAM_READ),D.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Be),A.readPixels(se,ue,fe,ae,Pe.convert(qe),Pe.convert(He),0);let st=L!==null?R.get(L).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,st);let gt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await lh(A,gt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ee),A.deleteBuffer(je),A.deleteSync(gt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,se=null,ue=0){let fe=Math.pow(2,-ue),ae=Math.floor(D.image.width*fe),Ee=Math.floor(D.image.height*fe),De=se!==null?se.x:0,Be=se!==null?se.y:0;Y.setTexture2D(D,0),A.copyTexSubImage2D(A.TEXTURE_2D,ue,0,0,De,Be,ae,Ee),q.unbindTexture()};let Mu=A.createFramebuffer(),bu=A.createFramebuffer();this.copyTextureToTexture=function(D,se,ue=null,fe=null,ae=0,Ee=null){Ee===null&&(ae!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=ae,ae=0):Ee=0);let De,Be,Ne,Ge,qe,He,je,st,gt,ot=D.isCompressedTexture?D.mipmaps[Ee]:D.image;if(ue!==null)De=ue.max.x-ue.min.x,Be=ue.max.y-ue.min.y,Ne=ue.isBox3?ue.max.z-ue.min.z:1,Ge=ue.min.x,qe=ue.min.y,He=ue.isBox3?ue.min.z:0;else{let Zt=Math.pow(2,-ae);De=Math.floor(ot.width*Zt),Be=Math.floor(ot.height*Zt),D.isDataArrayTexture?Ne=ot.depth:D.isData3DTexture?Ne=Math.floor(ot.depth*Zt):Ne=1,Ge=0,qe=0,He=0}fe!==null?(je=fe.x,st=fe.y,gt=fe.z):(je=0,st=0,gt=0);let rt=Pe.convert(se.format),Ve=Pe.convert(se.type),ft;se.isData3DTexture?(Y.setTexture3D(se,0),ft=A.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(Y.setTexture2DArray(se,0),ft=A.TEXTURE_2D_ARRAY):(Y.setTexture2D(se,0),ft=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,se.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,se.unpackAlignment);let et=A.getParameter(A.UNPACK_ROW_LENGTH),Bt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),bi=A.getParameter(A.UNPACK_SKIP_PIXELS),zt=A.getParameter(A.UNPACK_SKIP_ROWS),rs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ge),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,He);let dt=D.isDataArrayTexture||D.isData3DTexture,Yt=se.isDataArrayTexture||se.isData3DTexture;if(D.isDepthTexture){let Zt=R.get(D),Ct=R.get(se),Ut=R.get(Zt.__renderTarget),ao=R.get(Ct.__renderTarget);q.bindFramebuffer(A.READ_FRAMEBUFFER,Ut.__webglFramebuffer),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let Qn=0;Qn<Ne;Qn++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(D).__webglTexture,ae,He+Qn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(se).__webglTexture,Ee,gt+Qn)),A.blitFramebuffer(Ge,qe,De,Be,je,st,De,Be,A.DEPTH_BUFFER_BIT,A.NEAREST);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(ae!==0||D.isRenderTargetTexture||R.has(D)){let Zt=R.get(D),Ct=R.get(se);q.bindFramebuffer(A.READ_FRAMEBUFFER,Mu),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,bu);for(let Ut=0;Ut<Ne;Ut++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Zt.__webglTexture,ae,He+Ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Zt.__webglTexture,ae),Yt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.__webglTexture,Ee,gt+Ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ct.__webglTexture,Ee),ae!==0?A.blitFramebuffer(Ge,qe,De,Be,je,st,De,Be,A.COLOR_BUFFER_BIT,A.NEAREST):Yt?A.copyTexSubImage3D(ft,Ee,je,st,gt+Ut,Ge,qe,De,Be):A.copyTexSubImage2D(ft,Ee,je,st,Ge,qe,De,Be);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Yt?D.isDataTexture||D.isData3DTexture?A.texSubImage3D(ft,Ee,je,st,gt,De,Be,Ne,rt,Ve,ot.data):se.isCompressedArrayTexture?A.compressedTexSubImage3D(ft,Ee,je,st,gt,De,Be,Ne,rt,ot.data):A.texSubImage3D(ft,Ee,je,st,gt,De,Be,Ne,rt,Ve,ot):D.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ee,je,st,De,Be,rt,Ve,ot.data):D.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ee,je,st,ot.width,ot.height,rt,ot.data):A.texSubImage2D(A.TEXTURE_2D,Ee,je,st,De,Be,rt,Ve,ot);A.pixelStorei(A.UNPACK_ROW_LENGTH,et),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Bt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,bi),A.pixelStorei(A.UNPACK_SKIP_ROWS,zt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,rs),Ee===0&&se.generateMipmaps&&A.generateMipmap(ft),q.unbindTexture()},this.initRenderTarget=function(D){R.get(D).__webglFramebuffer===void 0&&Y.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Y.setTextureCube(D,0):D.isData3DTexture?Y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Y.setTexture2DArray(D,0):Y.setTexture2D(D,0),q.unbindTexture()},this.resetState=function(){S=0,C=0,L=null,q.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Xh=new WeakMap,Uc=new WeakMap,y0=new ze("#edf4b1");function qh(i,e,t=.24){if(!i)return;let n=e?t:0;Xh.get(i)!==n&&(Xh.set(i,n),i.traverse(s=>{if(s.isMesh)for(let r of[].concat(s.material||[]))r.color&&(Uc.has(r)||Uc.set(r,r.color.clone()),r.color.copy(Uc.get(r)),e&&r.color.lerp(y0,t))}))}function v0(i,e){let t=[];for(let n=1;n<e.length;n++){let s=e[n-1],r=e[n],a=s%i.n,o=Math.floor(s/i.n),l=r%i.n,c=Math.floor(r/i.n);if(Math.abs(a-l)+Math.abs(o-c)===1)for(let h=1;h<=8;h++)t.push({x:60+80*(a+(l-a)*h/9),y:-60-80*(o+(c-o)*h/9),last:n===e.length-1})}return t}function Yh(){let i=new Je;i.name="route-cue";let e="",t=new Cs(1.9,12),n=new Ln({color:"#fff1b2",transparent:!0,opacity:.83,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s=new lt(1,8,6),r=["#9bbd43","#b1d34f","#8eae3c"].map(h=>new it({color:h,roughness:.92})),a=[];function o(h,f,d,p,g,x,m=18.55){let u=new ke(s,r[x%3]);return u.position.set(h,f,m),u.rotation.z=d,u.scale.set(p,g,.3),u.receiveShadow=!0,u.castShadow=!0,i.add(u),u}function l(h,f){for(let d=1;d<f.length;d++){let p=f[d-1],g=f[d],x=g%h.n-p%h.n,m=-(Math.floor(g/h.n)-Math.floor(p/h.n));if(Math.abs(x)+Math.abs(m)!==1)continue;let u=Math.atan2(m,x),b=-m,_=x;for(let y=0;y<12;y++)for(let I of[-1,1]){let S=p*97+g*31+y*71+I*17>>>0,C=(y+.2+S%11/18)/12,L=I*(.8+S%17*.38);o(60+p%h.n*80+x*80*C+b*L,-60-Math.floor(p/h.n)*80+m*80*C+_*L,u+(S%13-6)*.095,2.8+S%5*.3,.5+S%3*.1,S)}}if(f.length>1){let d=f.at(-2),p=60+d%h.n*80,g=-60-Math.floor(d/h.n)*80;for(let x=0;x<7;x++){let m=x*2.399,u=o(p+Math.cos(m)*12,g+Math.sin(m)*12,m,2.8,.8,x);a.push(u)}}}function c(h,f,d=1){let p=new ke(t,n);p.position.set(h,f,18.7),p.scale.setScalar(d),p.renderOrder=3,i.add(p)}return{group:i,update(h,f,d,p,g){let x=h.n+":"+f.join(",")+":"+d;if(x!==e){if(e=x,i.clear(),a=[],d==="grass"&&l(h,f),d!=="highlight"&&d!=="previous"&&d!=="grass")for(let m of v0(h,f))c(m.x,m.y,m.last?1.2:.83);if(d!=="highlight"&&d!=="grass"&&f.length>1){let m=f.at(-2),u=60+m%h.n*80,b=-60-Math.floor(m/h.n)*80;for(let[_,y]of[[-23,0],[23,0],[0,-23],[0,23]])c(u+_,b+y,1.45)}}for(let m=0;m<a.length;m++){let u=a[m],b=.45+.25*Math.sin(g*1.25+m*.3);u.rotation.y=b,u.position.z=19.1+b*.6}i.visible=d!=="touch"||p,n.opacity=.78+.08*Math.sin(g*2)},dispose(){t.dispose(),n.dispose(),s.dispose(),r.forEach(h=>h.dispose()),i.clear()}}}var js=new z;function Kt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let c=.5*a/(a+o),h=1-js.angleTo(i)/l;return Math.sign(js[t])===1?h*c:o/(a+o)+c+c*(1-h)}var yn=class i extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,h=new z(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,x=new z,m=.5/a;for(let u=0,b=0;u<f.length;u+=3,b+=2)switch(l.fromArray(f,u),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[u+0]=h.x*Math.sign(l.x)+c.x*r,f[u+1]=h.y*Math.sign(l.y)+c.y*r,f[u+2]=h.z*Math.sign(l.z)+c.z*r,d[u+0]=c.x,d[u+1]=c.y,d[u+2]=c.z,Math.floor(u/g)){case 0:x.set(1,0,0),p[b+0]=Kt(x,c,"z","y",r,n),p[b+1]=1-Kt(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[b+0]=1-Kt(x,c,"z","y",r,n),p[b+1]=1-Kt(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[b+0]=1-Kt(x,c,"x","z",r,e),p[b+1]=Kt(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[b+0]=1-Kt(x,c,"x","z",r,e),p[b+1]=1-Kt(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[b+0]=1-Kt(x,c,"x","y",r,e),p[b+1]=1-Kt(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[b+0]=Kt(x,c,"x","y",r,e),p[b+1]=1-Kt(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var M0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},b0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function S0(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,a])=>{if(!Number.isInteger(r)||!Number.isInteger(a)||r<0||a<0||r>=i*i||a>=i*i||Math.abs(r%i-a%i)+Math.abs(Math.floor(r/i)-Math.floor(a/i))!==1)throw Error("Fence requires side-adjacent cells");let o=[r,a].sort((h,f)=>h-f).join(":");if(s.has(o))return null;s.add(o);let l=n[0]+(r%i+a%i)*t/2,c=n[1]-(Math.floor(r/i)+Math.floor(a/i))*t/2;return{a:r,b:a,center:[l,c],ends:r%i===a%i?[[l-t/2,c],[l+t/2,c]]:[[l,c-t/2],[l,c+t/2]]}}).filter(Boolean)}function Zh({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:a="rails"}={}){if(!b0[a])throw Error("Unknown fence design");let o=M0[r];if(!o)throw Error("Unknown fence style");let l=new Je;l.name="wood-fence";let c=S0(i,e,{pitch:t,origin:n});l.userData={walls:c.map(u=>[u.a,u.b]),occupiedCells:[],style:r,design:a,pitch:t,baseZ:s};let h=new it({color:o.wood,roughness:.83}),f=new it({color:o.end,roughness:.8}),d=new it({color:o.grain,roughness:.95}),p=new it({color:"#665341",roughness:.7}),g=(u,b,_,y,I,S,C,L,w)=>{let T=new ke(new yn(b,_,y,3,I),S);return T.position.set(C,L,w),T.castShadow=T.receiveShadow=!0,u.add(T),T},x=(u,b,_=.12)=>{let y=new ke(new on(new an(b),16,_,4,!1),d);u.add(y)},m=new Map;for(let u of c){for(let[_,y]of u.ends){let I=_+":"+y;if(m.has(I))continue;let S=new Je;if(S.name="fence-post",S.position.set(_,y,s-2),l.add(S),m.set(I,S),a==="logs"){let C=new ke(new rn(3.25,3.65,34,18),h);C.rotation.x=Math.PI/2,C.position.z=17,C.castShadow=C.receiveShadow=!0,S.add(C);let L=new ke(new lt(3.65,18,10),f);L.scale.z=.35,L.position.z=34,L.castShadow=!0,S.add(L)}else g(S,6.3,6.3,34,1.05,h,0,0,17),g(S,7.4,7.4,3.1,1.25,f,0,0,34);for(let C of[-1,1])for(let L=0;L<2;L++){let w=[];for(let T=0;T<=9;T++)w.push(new z(-1.7+L*2.5+Math.sin(T*.6+L)*.22,C*3.16,3+T*2.2));x(S,w,.1)}}let b=new Je;if(b.name="fence-span",b.position.set(...u.center,s),u.a%i!==u.b%i&&(b.rotation.z=Math.PI/2),b.userData.cells=[u.a,u.b],l.add(b),a==="rails")for(let _ of[16,24]){g(b,t-4.5,4.2,5.1,.95,h,0,0,_);for(let y of[-1,1]){for(let S=0;S<2;S++){let C=[];for(let L=0;L<=12;L++){let w=-t/2+5+L*(t-10)/12;C.push(new z(w,y*2.12,_-.9+S*1.7+Math.sin(L*.65+_)*.2))}x(b,C,.1)}for(let S of[-t/2+5.8,t/2-5.8]){let C=new ke(new lt(.56,8,6),p);C.scale.y=.3,C.position.set(S,y*2.28,_),b.add(C)}let I=[];for(let S=0;S<=24;S++){let C=S/24*Math.PI*2;I.push(new z(11+Math.cos(C)*1.6,y*2.14,_+Math.sin(C)*.65))}x(b,I,.1)}}else if(a==="picket"){for(let _ of[15,25])g(b,t-4.5,3.2,3.6,.8,h,0,1.2,_);for(let _=0;_<5;_++){let y=(_-2)*(t-14)/5,I=7.2,S=new _t;S.moveTo(-I/2,11),S.lineTo(I/2,11),S.lineTo(I/2,27),S.bezierCurveTo(I/2,32,-I/2,32,-I/2,27),S.closePath();let C=new ke(new Gt(S,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),_%2?f:h);C.rotation.x=Math.PI/2,C.position.set(y,-.7,0),C.castShadow=C.receiveShadow=!0,b.add(C);for(let L of[15,25]){let w=new ke(new lt(.48,8,6),p);w.scale.y=.3,w.position.set(y,-3.65,L),b.add(w)}x(b,[new z(y-1.2,-3.91,13),new z(y-1,-3.91,21),new z(y-1.4,-3.91,27)],.095)}}else if(a==="cross"){for(let S of[13,29])g(b,t-4.5,4,3.6,.8,h,0,0,S);let _=t-12,y=Math.atan2(16,_),I=Math.hypot(_,16);for(let S of[-1,1]){let C=new Je;C.position.set(0,S*1.35,21),C.rotation.y=S*y,b.add(C),g(C,I,2.5,3.6,.75,f,0,0,0);for(let L of[-1,1])x(C,[new z(-I/2+2,L*1.27,-.5),new z(0,L*1.27,-.25),new z(I/2-2,L*1.27,-.55)],.1)}for(let S of[-1,1]){let C=new ke(new lt(.65,10,8),p);C.scale.y=.3,C.position.set(0,S*2.75,21),b.add(C)}}else for(let _ of[16,26]){let y=new ke(new rn(2.3,2.3,t-4.5,18),h);y.rotation.z=Math.PI/2,y.position.z=_,y.castShadow=y.receiveShadow=!0,b.add(y);for(let I of[-1,1])for(let S of[-.9,.9]){let C=[];for(let L=0;L<=12;L++)C.push(new z(-t/2+4+L*(t-8)/12,I*Math.sqrt(2.3**2-S**2),_+S+Math.sin(L*.7)*.1));x(b,C,.1)}}}return{group:l,edges:c,dispose(){let u=new Set,b=new Set;l.traverse(_=>{_.geometry&&u.add(_.geometry),_.material&&b.add(_.material)}),u.forEach(_=>_.dispose()),b.forEach(_=>_.dispose())}}}var Jh=[{id:"apricot",name:"Aprikose",existing:!0,coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#dfa578",pattern:"solid",paws:"#dfa578",patternSize:1,patternStrength:1},{id:"coral",name:"Koralle",existing:!0,coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#e78f85",pattern:"solid",paws:"#e78f85",patternSize:1,patternStrength:1},{id:"lavender",name:"Lavendel",existing:!0,coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#a99bd0",pattern:"solid",paws:"#a99bd0",patternSize:1,patternStrength:1},{id:"lagoon",name:"Lagune",existing:!0,coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#75b9bf",pattern:"solid",paws:"#75b9bf",patternSize:1,patternStrength:1},{id:"pistachio",name:"Pistazie",coat:"#a4b875",root:"#81915a",tip:"#e8edbd",iris:"#82633e",face:"#fff0c9",cheeks:"#d8a28b",antenna:"#f0d99f",accent:"#eee6bd",pattern:"belly",paws:"#a4b875",patternSize:1,patternStrength:1},{id:"honey",name:"Honig",coat:"#dcb16b",root:"#b68b49",tip:"#ffe9b5",iris:"#598b91",face:"#fff0d5",cheeks:"#e8a18c",antenna:"#fff1ce",accent:"#f4dfb4",pattern:"belly",paws:"#dcb16b",patternSize:1,patternStrength:1},{id:"berry",name:"Waldbeere",coat:"#ae809e",root:"#875e7d",tip:"#edd0df",iris:"#7b9d8b",face:"#f6e4d2",cheeks:"#d5979c",antenna:"#e5c6d5",accent:"#d9aec1",pattern:"belly",paws:"#ae809e",patternSize:1,patternStrength:1},{id:"moon",name:"Mondblau",coat:"#819fb9",root:"#607a97",tip:"#d3e6ee",iris:"#b88e54",face:"#f1e8d7",cheeks:"#d5a7a1",antenna:"#e5e6c9",accent:"#b8d1db",pattern:"belly",paws:"#819fb9",patternSize:1,patternStrength:1},{id:"mocha",name:"Mokka",coat:"#9b7961",root:"#77543f",tip:"#e2c4a1",iris:"#729c91",face:"#f5e2bd",cheeks:"#d39780",antenna:"#e6cd9e",accent:"#634b45",pattern:"solid",paws:"#9b7961",patternSize:1,patternStrength:1},{id:"peach",name:"Pfirsichbl\xFCte",coat:"#e4ae9e",root:"#bc8b82",tip:"#ffe4cf",iris:"#749c9e",face:"#fff1da",cheeks:"#d78989",antenna:"#f5d898",accent:"#f6d6bd",pattern:"belly",paws:"#e4ae9e",patternSize:1,patternStrength:1},{id:"polar",name:"Wolkenfell",coat:"#c1c9ce",root:"#98a8b4",tip:"#f8f1df",iris:"#788fbe",face:"#fff4dc",cheeks:"#d9b0a8",antenna:"#ead8b0",accent:"#dce4e1",pattern:"belly",paws:"#c1c9ce",patternSize:1,patternStrength:1},{id:"dusk",name:"Abendrot",coat:"#a99ab7",root:"#83748e",tip:"#e7d9df",iris:"#bc985e",face:"#f7e5ca",cheeks:"#d5a0a1",antenna:"#eac58a",accent:"#e7d9df",pattern:"belly",paws:"#a99ab7",patternSize:1,patternStrength:1},{id:"reward-stardew",name:"Sternentau",coat:"#384663",root:"#253149",tip:"#7886a5",iris:"#cfaa63",face:"#f3dfbe",cheeks:"#c2999c",antenna:"#d9ba78",accent:"#edc66c",paws:"#d8c6a6",pattern:"speckles",patternSize:.65,patternStrength:.9,rewardStudy:!0},{id:"reward-cloverluck",name:"Kleegl\xFCck",coat:"#829867",root:"#61764e",tip:"#c2d2a0",iris:"#a1844d",face:"#ede4c4",cheeks:"#cd9f85",antenna:"#e2d39a",accent:"#4d6945",paws:"#e5d7b5",pattern:"spots",patternSize:.8,patternStrength:.55,rewardStudy:!0},{id:"reward-wildberry",name:"Wildbeere",coat:"#78516c",root:"#55394f",tip:"#b78ba4",iris:"#8eae99",face:"#ebd5c6",cheeks:"#ce8f9c",antenna:"#d9b8c9",accent:"#c6a2b3",paws:"#493c4e",pattern:"mask",patternSize:1,patternStrength:.8,rewardStudy:!0},{id:"reward-honeypaw",name:"Honigpfote",coat:"#ca9b59",root:"#a5743d",tip:"#efd09a",iris:"#6f9696",face:"#f3e2bf",cheeks:"#d69b7e",antenna:"#e7c77d",accent:"#775339",paws:"#71513e",pattern:"tail",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-moonflower",name:"Mondbl\xFCte",coat:"#d5cddc",root:"#aea4bf",tip:"#f6eeda",iris:"#83a9bb",face:"#fff0d7",cheeks:"#d6b0b7",antenna:"#e7d2a7",accent:"#ece1ce",paws:"#b2a6c2",pattern:"belly",patternSize:1,patternStrength:.75,rewardStudy:!0},{id:"reward-eveningfox",name:"Abendfuchs",coat:"#c37e52",root:"#985634",tip:"#edb77d",iris:"#759783",face:"#f6dfb7",cheeks:"#d3947d",antenna:"#e0be86",accent:"#f0d6aa",paws:"#58463b",pattern:"mask",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-fern",name:"Farnschatten",coat:"#617c73",root:"#405d58",tip:"#a9c2ab",iris:"#c29a60",face:"#e9dfbf",cheeks:"#bc9d8b",antenna:"#dac995",accent:"#344f4a",paws:"#455a50",pattern:"stripes",patternSize:1.2,patternStrength:.65,rewardStudy:!0},{id:"reward-rosequartz",name:"Rosenquarz",coat:"#cda9b2",root:"#aa8296",tip:"#f2d9d1",iris:"#819c9e",face:"#fae9d7",cheeks:"#ce959e",antenna:"#ead3b2",accent:"#f1dfc8",paws:"#ab879c",pattern:"tail",patternSize:1.3,patternStrength:.7,rewardStudy:!0},{id:"reward-amber",name:"Bernstein",coat:"#b98543",root:"#8c5a2f",tip:"#ebc783",iris:"#799b8c",face:"#f4e2bb",cheeks:"#d79d7b",antenna:"#e8c77d",accent:"#6b4d38",paws:"#694b37",pattern:"spots",patternSize:.7,patternStrength:.7,rewardStudy:!0},{id:"reward-iceclover",name:"Eisklee",coat:"#a5c4c1",root:"#7faaa9",tip:"#e0eee0",iris:"#8e7aa8",face:"#f7edda",cheeks:"#d5b5af",antenna:"#e7d4aa",accent:"#e9e5c9",paws:"#7d9fa1",pattern:"speckles",patternSize:.75,patternStrength:.6,rewardStudy:!0},{id:"reward-plum",name:"Pflaumenbl\xFCte",coat:"#796780",root:"#58475f",tip:"#b4a2b8",iris:"#b7a071",face:"#f0e2d1",cheeks:"#c398a6",antenna:"#ddc6a4",accent:"#cfb4c3",paws:"#57455d",pattern:"saddle",patternSize:1.15,patternStrength:.65,rewardStudy:!0},{id:"reward-dandelion",name:"L\xF6wenzahn",coat:"#c6bc79",root:"#99935e",tip:"#ede4ac",iris:"#7c9d94",face:"#f6e8c4",cheeks:"#d3a48d",antenna:"#e8ce7d",accent:"#f1e8ce",paws:"#8a8160",pattern:"belly",patternSize:1.1,patternStrength:.8,rewardStudy:!0},{id:"tiger-study",name:"Tigerpfote",coat:"#cd9656",root:"#a5733f",tip:"#ecc38b",iris:"#8b9c71",face:"#f8e6c4",cheeks:"#cc9c89",antenna:"#e3c894",accent:"#49382e",paws:"#edddbf",pattern:"tiger",patternSize:1,patternStrength:.9},{id:"leopard-study",name:"Leopardenpfote",coat:"#ccab70",root:"#a88750",tip:"#edd3a0",iris:"#8a9a68",face:"#f4e6cb",cheeks:"#c59c86",antenna:"#d9c18d",accent:"#48372b",paws:"#e6d4ae",pattern:"leopard",patternSize:1,patternStrength:.95},{id:"custom-294bf96b-4311-45f4-a97f-9f0725105857",name:"Red",existing:!1,coat:"#f9061f",root:"#f9061f",tip:"#f9061f",iris:"#428f8d",face:"#e1dfdb",cheeks:"#e1dfdb",antenna:"#ffe5bd",accent:"#f9061f",pattern:"saddle",paws:"#f9061f",patternSize:1,patternStrength:1},{id:"custom-0c185d09-cfd9-4664-a19c-11bbee73c4a1",name:"White",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#e49ab4",accent:"#ffffff",pattern:"belly",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-cd20f8f9-aaf8-416c-bf05-d8c1b5ac6598",name:"Black",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#fffff5",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#ffffff",pattern:"solid",paws:"#ffffff",patternSize:1.1,patternStrength:.8},{id:"custom-dc02a2ea-1078-4736-8a1c-9cdf1f8c8492",name:"Mein Nurbi 7",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"stripes",paws:"#ffffff",patternSize:.5,patternStrength:1},{id:"custom-98e141bc-ffcb-48fb-9442-0528ca7cb103",name:"Blacktail",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#0d0d0d",accent:"#0d0d0d",pattern:"tail",paws:"#ffffff",patternSize:.75,patternStrength:1},{id:"custom-8d5a3bda-48c2-4f5e-8df2-594c54a0b0d1",name:"Tiger",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.85,patternStrength:1},{id:"custom-4c0450df-de84-4ca8-9532-5cf667d92736",name:"Barnhold",existing:!1,coat:"#ff8c00",root:"#55554e",tip:"#ff8c00",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.6,patternStrength:1},{id:"custom-a308614f-d7a5-4ac5-a8d7-1fd7967999b4",name:"Leopard schwarz",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#ffffff",pattern:"leopard",paws:"#1f1f1e",patternSize:.8,patternStrength:1},{id:"custom-b6960ff9-f026-4c87-98c8-d028d13660f3",name:"Leopard",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-74506dd4-e667-4d4b-a574-ca2129e1e2cb",name:"Schneeleopard",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1}];var jh=[];for(let i=0;i<4;i++)for(let e=0;e<5;e++){let t=i*5+e,n=Math.sin(t*13.13+2.1);jh.push({u:(e-2)*5.5+i%2*1.8+n*.75,v:4+i*7+Math.cos(t*7.7)*1.1,rx:1.85+(Math.sin(t*5.1)+1)*.38,ry:1.65+(Math.cos(t*4.3)+1)*.5,angle:n*.8,phase:t*2.37,gap:.3+(Math.sin(t*3.7)+1)*.18})}var Qh=[];for(let i=0;i<4;i++)for(let e=0;e<8;e++){let t=i*8+e,n=e*Math.PI/4+i%2*.24+.07*Math.sin(t*4.7),s=.12+i*.36+.04*Math.cos(t*3.1);Qh.push({x:Math.cos(n)*Math.cos(s),y:Math.sin(n)*Math.cos(s),z:Math.sin(s),radius:.105+.045*(1+Math.sin(t*7.3))*.5})}var $h=[[5.8,2.7,1.95,1.25],[15.8,2.25,-2.1,1.6],[25.1,1.9,1.15,1.38]];function Kh(i,e,t,n){let s=i.patternSize??1,r=i.patternStrength??1,a=Xt.smoothstep,o=0;if(i.pattern==="belly"){let l=a(-t,11/s,19/s)*(1-a(n,18*s,23*s)),c=(1-a(n,7*s,13*s))*a(t,-4,4);o=Math.max(l,c)*.82}if(i.pattern==="saddle"&&(o=(1-a(Math.abs(e),3*s,8*s))*a(t,-1,9)*a(n,9,17)*.85),i.pattern==="stripes"&&(o=(1-a(Math.abs(Math.sin((t-3)/(3.3*s)+e*.025)),.3,.6))*a(t,-4,5)*a(n,5,12)),i.pattern==="tiger"){let l=e<0?-1:1,c=9-4*a(t,12,29),h=Math.atan2(Math.abs(e),(n-c)*1.12);for(let S=0;S<$h.length;S++){let[C,L,w,T]=$h[S],k=T+(l<0?[.15,-.12,.18][S]:0),V=h/k;if(V>=1)continue;let K=l<0?[-.15,.25,-.1][S]:0,Q=C+K*Math.sin(h)+w*(.2*V+.8*V*V),ne=L*s*Math.pow(1-V*V,.7),ee=1-a(Math.abs(t-Q),ne*.67,ne);o=Math.max(o,ee*(1-a(V,.8,1)))}o*=a(t,2,4)*a(n,5,9);let f=Math.abs(e),d=1-a(t,-2,1),p=a(f,8.7,11)*(1-a(f,14,16)),g=(t+15)/12,x=a(g,0,.2)*(1-a(g,.78,1)),m=0;for(let S of[18.8,23.8]){let C=S+.9*Math.sin(g*2.4)+(e<0?.2:0),L=.8*s*(.5+.5*Math.sin(Math.max(0,Math.min(1,g))*Math.PI));m=Math.max(m,(1-a(Math.abs(n-C),L*.5,L))*x*p)}let u=30.2+f*.4,b=(1-a(f,3.2,4.6))*(1-a(Math.abs(n-u),.5*s,1.15*s))*(1-a(t,-9,-5)),_=a((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25),y=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),I=t<-10?a(y,1,1.2):1;o=Math.max(o,Math.max(m,b)*d*_*I*.9)}if(i.pattern==="leopard"){let l=9-4*a(t,12,29),c=Math.atan2(e,(n-l)*1.12)*9;if(t>0&&n>5){let h=s*(1-.25*a(t,21,29));for(let f of jh){let d=c-f.u,p=t-f.v;if(Math.abs(d)>f.rx*h*1.7||Math.abs(p)>f.ry*h*1.7)continue;let g=Math.cos(f.angle),x=Math.sin(f.angle),m=(d*g-p*x)/(f.rx*h),u=(d*x+p*g)/(f.ry*h),b=Math.atan2(u,m),_=Math.hypot(m,u)/(1+.12*Math.sin(b*3+f.phase)+.065*Math.cos(b*5-f.phase)),y=a(_,.51,.69)*(1-a(_,1,1.17)),I=Math.abs(Math.atan2(Math.sin(b-f.phase),Math.cos(b-f.phase))),S=a(I,f.gap,f.gap+.24);o=Math.max(o,Math.max(y*S,(1-a(_,.3,.62))*.12))}o*=a(t,0,3)*a(n,5,9)}if(t<3&&n>12){let h=0,f=e/13.1,d=(t+8)/11.5,p=(n-20)/12.2,g=Math.hypot(f,d,p);if(g>.1)for(let b of Qh){let _=1-(f*b.x+d*b.y+p*b.z)/g,y=b.radius*s;h=Math.max(h,1-a(_,y*y*.2,y*y*.58))}let x=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),m=t<-10?a(x,1,1.2):1,u=a((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25);o=Math.max(o,h*m*u*(1-a(t,1,3)))}}if(i.pattern==="spots"||i.pattern==="speckles"){let l=i.pattern==="speckles",c=l?5.2:11,h=(l?1.25:3.8)*s,f=Math.round(t/c),d=Math.round((e-f%2*c*.5)/c)*c+f%2*c*.5,p=f*c+Math.sin(f*2.7+d)*c*.12,g=Math.hypot(e-d,t-p);o=(1-a(g,h*.5,h))*a(t,-5,3)*a(n,6,13)}return i.pattern==="mask"&&(o=a(-t,11,16)*(1-a(Math.abs(e),8*s,13*s))*a(n,15,21)),i.pattern==="tail"&&(o=a(t,31-7*s,34-3*s)),Math.max(0,Math.min(1,o*r))}function Nc(i,e){let t=i.group.getObjectByName("curved-soft-fur"),n=t.geometry,s=n.attributes.color.array,r=new ze("#d5a078"),a=new ze("#ffe2b9"),o=e||new Float32Array(s.length/3),l=[],c=[],h={};if(!e)for(let p=0;p<o.length;p++)o[p]=(s[p*3]-r.r)/(a.r-r.r);i.group.traverse(p=>{if(!p.isMesh)return;let g="#"+p.material.color.getHexString();g==="#dfa578"&&(h.coat=p.material),g==="#428f8d"&&(h.iris=p.material),g==="#ffe5bd"&&(h.face=p.material),g==="#e69b88"&&(h.cheeks=p.material),p.parent.name==="soft-curved-antenna"&&g==="#ffe5bd"&&(p.material=p.material.clone(),h.antenna=p.material),p.name==="original-body-part"&&(p.material=p.material.clone(),p.material.color.set("#ffffff"),p.material.vertexColors=!0,p.geometry.setAttribute("color",new Ye(new Float32Array(p.geometry.attributes.position.count*3),3)),l.push(p))}),i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-paw"&&(p.material=p.material.clone(),c.push(p.material))});let f=[];i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-curved-antenna"&&p.material!==h.coat&&f.push(p.material)});function d(p){c.forEach(S=>S.color.set(p.paws||p.coat));for(let S of["coat","iris","face","cheeks"])h[S].color.set(p[S]);f.forEach(S=>S.color.set(p.antenna));let g=p.pattern!=="solid",x=new ze(p.root),m=new ze(p.tip),u=new ze(p.accent),b=new ze(p.coat),_=new ze,y=n.attributes.position,I=n.attributes.color;for(let S=0;S<y.count;S++)_.copy(x).lerp(m,o[S]),g&&_.lerp(u,Kh(p,y.getX(S),y.getY(S),y.getZ(S))),I.setXYZ(S,_.r,_.g,_.b);I.needsUpdate=!0;for(let S of l){let C=S.geometry.attributes.position,L=S.geometry.attributes.color;for(let w=0;w<C.count;w++)_.copy(b),g&&_.lerp(u,Kh(p,C.getX(w)*S.scale.x+S.position.x,C.getY(w)*S.scale.y+S.position.y,C.getZ(w)*S.scale.z+S.position.z)),L.setXYZ(w,_.r,_.g,_.b);L.needsUpdate=!0}}return{...i,apply:d}}function eo(i=-1,e="hops"){let t=d=>(d=Math.max(0,Math.min(1,d)),d*d*d*(d*(d*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="compact"){if(i>1.25)return n;let d=t(i/.22)*(1-t((i-.65)/.55));return{...n,active:!0,look:t(i/.55),happy:d,tuck:d*.6,lift:d*.25,pitch:-d*.018,roll:Math.sin(i*5)*d*.012,antenna:d*.18,squash:d*.008}}if(e==="gentle"){let d=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=d*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:d*1.35,happy:d,roll:p,pitch:-d*.035,squash:d*.012,antenna:d*.3+Math.sin(i*8)*d*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(d,p,g)=>{let x=(i-d)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),a=t((i-.78)/.26)*(1-t((i-3.05)/.55)),o=(d,p)=>{let g=(i-d)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},l=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,c=o(.72,.3),h=o(1.35,.3),f=o(1.32,.3)+o(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:a,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:c*.055+h*.035+f*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:l*.65+r*.045,pitch:c*.035-r*.007-l*.013,roll:r*.005*Math.sin(i*3+.6)+l*.012}}function eu(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let a=(i*s+([0,3].includes(e)?.18:.68))%1,o=t/n/s*.66,l=a<.66,c,h=0,f=0;if(l)c=-o/2+a/.66*o,f=a/.66>.82?(a/.66-.82)*.5:0;else{let g=(a-.66)/.33999999999999997,x=g*g*(3-2*g);c=o/2-o*x,h=Math.sin(g*Math.PI)**1.25*1.8,f=-Math.sin(g*Math.PI)*.2}let d=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,d*d*(3-2*d));return{y:c*p,z:h*p,pitch:f*p,stance:l,phase:a,fade:p}}function tu(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,a=12*.66,o,l=0,c=0;if(r<.66)o=-a/2+r/.66*a;else{let h=(r-.66)/.33999999999999997,f=h*h*(3-2*h);o=a/2-a*f,l=Math.sin(h*Math.PI)*1.3,c=-Math.sin(h*Math.PI)*.16}return{y:o,z:l,pitch:c,stance:r<.66,phase:r}}var w0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}},T0={...w0,...Object.fromEntries(Jh.map(i=>[i.id,i]))};function nu({seed:i=913,presentation:e="ground"}={}){let t=new Je,n=new Je,s=new Je;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,a=(J,A=.8)=>new it({color:J,roughness:A}),o=a("#dfa578"),l=a("#ffe5bd"),c=a("#e69b88"),h=a("#302529",.3),f=a("#fff9e7",.3),d=a("#428f8d",.35);function p(J,A,N,B,W,q,F,R){let Y=new ke(new lt(1,40,28),A);return Y.position.set(N,B,W),Y.scale.set(q,F,R),Y.castShadow=Y.receiveShadow=!0,J.add(Y),Y}let g=e==="peek"?22e3:44e3,x=g*20;function m(J,A){let N=new J(A),B=0;return{push(...W){for(let q=0;q<W.length;q++)N[B++]=W[q]},get length(){return B},view(){return N.subarray(0,B)}}}let u=m(Float64Array,x),b=m(Float32Array,x*3),_=m(Float32Array,x*3),y=m(Float32Array,x*3),I=m(Float32Array,x*2),S=m(Uint32Array,g*48),C=new ze("#d5a078"),L=new ze("#ffe2b9");function w(J,A,N,B,W=!1){let q=p(s,o,...J,...A);q.name="original-body-part",q.userData.bodyCenter=[...J],q.userData.bodyRadii=[...A];for(let F=0;F<N;F++){let R=r()*2-1,Y=r()*Math.PI*2,ge=Math.sqrt(1-R*R),xe=new z(ge*Math.cos(Y),ge*Math.sin(Y),R),P=new z(xe.x*A[0],xe.y*A[1],xe.z*A[2]).add(new z(...J));if(P.z<1)continue;let E=W&&xe.y<-.4;if(E){let Ce=[-5.6,5.6].some(we=>((P.x-we)/4.6)**2+((P.z-23.4)/5.2)**2<1),ye=(P.x/5.9)**2+((P.z-16.5)/3.3)**2<1;if(Ce||ye)continue}let $=new z(xe.x/A[0],xe.y/A[1],xe.z/A[2]).normalize(),ce=new z(0,0,1);Math.abs($.z)>.9&&ce.set(1,0,0);let de=new z().crossVectors($,ce).normalize(),he=new z(xe.x*.45,xe.y*.35,-.46),Re=B*(E?.2:1)*(.6+r()*.65),ve=.075+r()*.13,Le=r()*.22;for(let Ce=0;Ce<2;Ce++){let ye=Ce?new z().crossVectors($,de).normalize():de,we=b.length/3;for(let Oe=0;Oe<=4;Oe++){let Pe=Oe/4,Ae=Re*Pe*.88,Xe=Re*Pe*Pe*.9,j=P.x+$.x*Ae+he.x*Xe,Se=P.y+$.y*Ae+he.y*Xe,Te=P.z+$.z*Ae+he.z*Xe,Ue=ve*(1-Pe*.93),Me=.28+Pe*.58+Le;for(let _e of[-1,1]){let Fe=Ue*_e;b.push(j+ye.x*Fe,Se+ye.y*Fe,Math.max(.2,Te+ye.z*Fe)),_.push($.x,$.y,$.z),y.push(C.r+(L.r-C.r)*Me,C.g+(L.g-C.g)*Me,C.b+(L.b-C.b)*Me),u.push(Me),I.push(_e===-1?0:1,Pe)}}for(let Oe=0;Oe<4;Oe++){let Pe=we+Oe*2;S.push(Pe,Pe+1,Pe+2,Pe+1,Pe+3,Pe+2)}}}}e!=="peek"&&(w([0,6,10],[10.5,15,9.7],15200,3.3),w([0,19,6],[7.4,9,5.7],4600,2.9),w([1,26,4],[4.7,7,3.4],2200,2.5));let T=new Je;s.add(T),w([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let k=[],V=[],K=[],Q=[];for(let[J,A]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let N=new Je;N.name="soft-paw",N.userData.home={x:J,y:A},N.position.set(J,A,1.35),N.rotation.z=J<0?-.13:.13,n.add(N);let B=new lt(1,40,28),W=B.attributes.position;for(let Y=0;Y<W.count;Y++){let ge=W.getX(Y),xe=W.getY(Y),P=W.getZ(Y),E=2.15*(1-.22*Math.max(0,xe)),$=xe<-.35?.09*Math.cos(ge*Math.PI*2.4)*-xe:0;W.setXYZ(Y,ge*E,xe*3.4-$,Math.max(-1.3,P*1.35)+Math.max(0,xe)*.45)}B.computeVertexNormals();let q=new ke(B,o);q.castShadow=q.receiveShadow=!0,N.add(q);let F=p(n,o,0,0,0,1,1,1);F.name="rigid-upper-leg",K.push(F);let R=p(n,o,0,0,0,1,1,1);R.name="rigid-lower-leg",Q.push(R),V.push(new z(J*.86,A+1.4,6.1)),k.push(N)}let ne=(J,A)=>-8-11.5*Math.sqrt(Math.max(.025,1-(J/13.1)**2-((A-20)/12.2)**2));function ee(J,A,N,B,W,q,F){let R=[],Y=[];for(let $=0;$<=12;$++)for(let ce=0;ce<=64;ce++){let de=$/12,he=ce/64*Math.PI*2,Re=Math.cos(he)*W*de,ve=Math.sin(he)*q*de;R.push(Re,ne(N+Re,B+ve)-F-.27*(1-de*de),ve)}for(let $=0;$<12;$++)for(let ce=0;ce<64;ce++){let de=$*65+ce,he=de+64+1;Y.push(de,he,de+1,de+1,he,he+1)}let P=new ut;P.setAttribute("position",new Ye(R,3)),P.setIndex(Y),P.computeVertexNormals();let E=new ke(P,A);return E.position.set(N,0,B),J.add(E),E}let oe=new Je;oe.name="happy-crescent-eyes",T.add(oe),oe.visible=!1;for(let J of[-1,1]){let A=[];for(let N=0;N<=20;N++){let B=J*5.6+(N/20-.5)*5.3,W=23.3+Math.sin(N/20*Math.PI)*1.35;A.push(new z(B,ne(B,W)-.3,W))}oe.add(new ke(new on(new an(A),24,.3,7,!1),h))}let X=[];for(let J of[-1,1]){let A=J*5.6,N=23.4,B=new Je;B.name="embedded-eye",T.add(B),ee(B,l,A,N,3.95,4.7,.11),ee(B,d,A,N-.1,2.65,3.25,.3),ee(B,h,A,N+.1,1.75,2.45,.49),p(B,f,A-.8,ne(A-.8,N+1.5)-.78,N+1.5,.72,.2,.82),p(B,f,A+.65,ne(A+.65,N-.65)-.78,N-.65,.26,.16,.3),X.push(B);let W=[];for(let F=0;F<=64;F++){let R=F/64*Math.PI*2,Y=A+Math.cos(R)*4.05,ge=N+Math.sin(R)*4.8;W.push(new z(Y,ne(Y,ge)-.05,ge))}T.add(new ke(new on(new an(W),80,.37,8,!1),o)),p(T,c,J*8.3,-17.2,16,2.05,.5,1.05);let q=[];for(let F=0;F<=12;F++){let R=J*5.6+(F/12-.5)*4.5,Y=28.7+Math.sin(F/12*Math.PI)*.65;q.push(new z(R,ne(R,Y)-.14,Y))}T.add(new ke(new on(new an(q),16,.26,6,!1),o))}p(T,l,0,-18.9,16.4,5.2,1.7,2.7),p(T,c,0,-20.6,17.7,1.65,1.05,1.1);let le=[];for(let J=0;J<=20;J++){let A=(J/20-.5)*6.6;le.push(new z(A,-20.35+Math.abs(A)*.14,14.7+.105*A*A))}let ie=new ke(new on(new an(le),24,.22,6,!1),h);T.add(ie);let me=[];for(let J of[-1,1]){let F=function(R,Y=!1,ge=0){let xe=Math.sin(R*1.4+J*.7),P=Math.sin(R*2.2+J)*.12;N.v2.set(J*(1.7+xe*.35),-1.4+P,11.4),N.v3.set(J*(5.2+xe*.55+ge),-1.9+Math.sin(R*1.2+J)*.35,10.2+P+ge*.4+(Y?Math.sin(R*5+J)*.15:0));let E=N.computeFrenetFrames(26,!1),$=B.attributes.position,ce=B.attributes.normal;for(let de=0;de<=26;de++){let he=de/26,Re=N.getPoint(he),ve=.44*(1-he)+.23*he;for(let Le=0;Le<=8;Le++){let Ce=Le/8*Math.PI*2,ye=E.normals[de].clone().multiplyScalar(-Math.cos(Ce)).addScaledVector(E.binormals[de],Math.sin(Ce)),we=Re.clone().addScaledVector(ye,ve),Oe=de*9+Le;$.setXYZ(Oe,we.x,we.y,we.z),ce.setXYZ(Oe,ye.x,ye.y,ye.z)}}$.needsUpdate=ce.needsUpdate=!0,B.computeBoundingSphere(),q.position.copy(N.v3)},A=new Je;A.name="soft-curved-antenna",A.position.set(J*6.7,-5,30),s.add(A);let N=new Zi(new z,new z(J*.25,-.2,4.6),new z(J*1.7,-1.4,11.4),new z(J*5.2,-1.9,10.2)),B=new on(N,26,.4,8,!1),W=new ke(B,o);A.add(W);let q=p(A,l,J*5.2,-1.9,10.2,1.65,1.65,1.9);F(0),me.push({group:A,flex:F})}let be=new ut;be.setAttribute("position",new vt(b.view(),3)),be.setAttribute("normal",new vt(_.view(),3)),be.setAttribute("color",new vt(y.view(),3)),be.setAttribute("uv",new vt(I.view(),2)),be.setIndex(new vt(S.view(),1));let te=u.view(),O=new Uint8Array(2048*4);for(let J=0;J<64;J++)for(let A=0;A<32;A++){let N=(J*32+A)*4,B=Math.abs((A+.5)/32*2-1),W=Math.round(255*Math.pow(1-B,.55)*(1-.75*Math.pow(J/63,4)));O[N]=O[N+1]=O[N+2]=W,O[N+3]=255}let U=new Yn(O,32,64);U.needsUpdate=!0,U.magFilter=U.minFilter=Pt;let M=new it({vertexColors:!0,alphaMap:U,transparent:!0,opacity:.85,depthWrite:!1,side:Ot,roughness:1}),v=new ke(be,M);v.name="curved-soft-fur",v.frustumCulled=!1,s.add(v);let H;function Z(J){let A=T0[J];if(!A)throw Error("Unknown creature palette "+J);H??=Nc({group:t},te),H.apply(A),t.userData.palette=J}let G=new Je;G.name="completion-pollen",G.visible=!1,t.add(G);let re=new lt(.32,8,6);for(let J=0;J<9;J++){let A=new ke(re,new it({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));G.add(A)}return Z("apricot"),{group:t,setPalette:Z,applyAppearance(J){H??=Nc({group:t},te),H.apply(J)},update(J,A=0,N={}){let B=eo(N.celebrationAge??-1,N.celebrationStyle),W=!B.active&&(N.active??(A>0&&A<1));if(n.position.z=B.lift,n.rotation.x=B.pitch,n.rotation.y=B.roll+B.turnStep*Math.sin((N.celebrationAge??0)*16)*.018,n.scale.set(1+B.squash*.4,1+B.squash*.4,1-B.squash),oe.visible=B.happy>.55,X.forEach(q=>q.visible=!oe.visible),ie.scale.x=1+B.happy*.18,G.visible=B.pollen>0,G.children.forEach((q,F)=>{let R=Math.min(1.8,Math.max(0,(N.celebrationAge??0)-1.5)),Y=F*2.4;q.position.set(Math.cos(Y)*(9+R*3)+Math.sin(R*2+F)*.7,Math.sin(Y)*(8+R*3),8+R*(8+F*.4)),q.material.opacity=B.pollen*(.5+F%3*.12)}),s.position.z=Math.sin(J*2)*.13+(W?Math.sin(A*Math.PI*16)*.22:0),s.rotation.y=W?Math.sin(A*Math.PI*16)*.012:Math.sin(J*.8)*.012,T.rotation.set(0,0,0),X.forEach(q=>{q.scale.set(1,1,1),q.position.set(0,0,0)}),k.forEach((q,F)=>{let R=q.userData.home,Y=(N.celebrationAge??0)*17+F*Math.PI/2,ge=B.turnStep*Math.max(0,Math.sin(Y))*1.25,xe=W?N.travel!==void 0?tu(N.travel,F,t.scale.x):eu(N.progress??A,F,{distance:N.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};q.position.set(R.x+B.turnStep*Math.cos(Y)*.65,R.y+xe.y+B.turnStep*Math.sin(Y)*.65+(B.active?Math.sin((N.celebrationAge??0)*7+F*Math.PI/2)*B.tuck*.5:0),1.35+xe.z+ge+B.tuck*(F<2?1:N.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((N.celebrationAge??0)*4+F*1.6)*.12)),q.rotation.x=xe.pitch-B.tuck*(F<2?.08:.035);let P=V[F].clone();P.z+=s.position.z;let E=new z(q.position.x,q.position.y+.65,q.position.z+1.05),$=E.clone().sub(P),ce=Math.min(6.95,Math.max(.6,$.length()));$.normalize(),E.copy(P).addScaledVector($,ce),q.position.copy(E).add(new z(0,-.65,-1.05));let de=3.8,he=3.4,Re=(de*de-he*he+ce*ce)/(2*ce),ve=Math.sqrt(Math.max(0,de*de-Re*Re)),Le=new z(0,1,0).addScaledVector($,-$.y).normalize(),Ce=P.clone().addScaledVector($,Re).addScaledVector(Le,ve);function ye(we,Oe,Pe,Ae){let Xe=Pe.clone().sub(Oe);we.position.copy(Oe).addScaledVector(Xe,.5),we.quaternion.setFromUnitVectors(new z(0,1,0),Xe.normalize()),we.scale.set(Ae,Oe.distanceTo(Pe)/2,Ae)}ye(K[F],P,Ce,1.2),ye(Q[F],Ce,E,1.1)}),me.forEach((q,F)=>q.flex(J,W,B.antenna*(F?.78:1))),e==="peek"){let F=new z(0,-8,20),R=N.peekGreetingAge??-1,Y=R>=0&&R<1.3?Math.sin(R/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(J*.65)*.012,Math.sin(Math.max(0,R)*4)*.05*Y);let ge=F.clone().applyEuler(s.rotation);s.position.copy(F).sub(ge),s.position.z+=Math.sin(J*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),k.forEach((E,$)=>{E.visible=$<2,E.position.set($===0?-12:12,-17,10),E.rotation.set(.12,0,$===0?-.16:.16)}),K.forEach(E=>E.visible=!1),Q.forEach(E=>E.visible=!1);let xe=J%7.3,P=xe>4.9&&xe<5.03||xe>5.22&&xe<5.3;X.forEach(E=>E.visible=!P),oe.visible=P}},setSize(J){t.scale.setScalar(J/100)},dispose(){let J=new Set,A=new Set;t.traverse(N=>{N.geometry&&J.add(N.geometry),N.material&&A.add(N.material)}),J.forEach(N=>N.dispose()),A.forEach(N=>N.dispose()),U.dispose()}}}var to=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((a,o)=>Math.abs(a[0]-this.points[o][0])+Math.abs(a[1]-this.points[o][1])),r=s.reduce((a,o)=>a+o,0)*n;this.remaining=[];for(let a=0;a<s.length;a++){let o=this.points[a],l=this.points[a+1],c=s[a];if(r<=c&&c>0){let h=r/c;this.x=o[0]+(l[0]-o[0])*h,this.y=o[1]+(l[1]-o[1])*h,this.segmentStart=o,this.remaining=this.points.slice(a+1);break}r-=c}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=o=>o[0]===e&&o[1]===t,a=this.remaining.map(o=>[...o]);if(r(this.segmentStart))a=[[e,t]];else{let o=a.findIndex(r);o>=0?a=a.slice(0,o+1):a.push([e,t])}return this.points=[[s.x,s.y],...a],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.duration=Math.min(.5,Math.max(.035,this.duration*(this.durationScale??1))),this.lastTarget=n,this.start=n,!0}};var no=class{constructor(){this.transition=new to,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=c=>[c%e.n*80+60,-(Math.floor(c/e.n)*80+60)];if(this.level!==e||!t.length){let[c,h]=s(e.marks[0]);this.transition.reset(c,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[c,h],this.lastTime=n,this.level=e}let o=0;for(;o<this.path.length&&o<t.length&&this.path[o]===t[o];)o++;if(o!==this.path.length||o!==t.length){let c=this.path.at(-1),h=this.path.length?[...this.path.slice(Math.max(0,o-1),-1).reverse(),...t.slice(o)]:[...t];for(let f of h){let[d,p]=s(f);if(c===void 0)this.transition.reset(d,p);else{let[g,x]=s(c);this.heading=Math.atan2(d-g,-(p-x)),this.transition.target(d,p,n)}c=f}this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=eo(s,"gentle"),a=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+a*r.look:0,celebrationAge:s,celebrationTurn:a,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var iu={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function su({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=iu[t]||iu.front,s=n.radius,r=n.x,a=n.z,o=new Je,l=new Je;o.add(l),l.position.set(n.fx,0,n.fz);let c=new lt(1,20,14),h=[],f=(ie,me=.48)=>{let be=new it({color:ie,roughness:me});return h.push(be),be},d=f("#ffd05a"),p=f("#ffeaa2"),g=f("#538b2c"),x=f("#e5a32a");function m(ie,me,be,te,O,U,M,v){let H=new ke(c,me);return H.position.set(be,te,O),H.scale.set(U,M,v),H.castShadow=!0,H.receiveShadow=!0,ie.add(H),H}m(l,g,0,5,0,2.2,7,2.2);for(let ie of[-1,1]){let me=m(l,g,ie*7,4,1,9,1.7,4);me.rotation.z=ie*.27,me.rotation.y=ie*.3}let u=[];for(let ie=0;ie<6;ie++){let me=new Je;me.rotation.y=ie*Math.PI/3,l.add(me);let be=m(me,ie%2?d:p,0,12,0,5,9,4);u.push(be)}let b=m(l,x,0,12,0,5,3.5,5),_=f("#c5a777"),y=new rn(s+1.6,s+1.6,2.6,40),I=new ke(y,_);I.position.set(r,3,a),I.castShadow=!0,o.add(I);let S=new rn(s,s,2.2,40),C=new ke(S,f("#fff4da"));C.position.set(r,3.6,a),C.castShadow=!0,o.add(C);let L=document.createElement("canvas");L.width=L.height=128;let w=L.getContext("2d");w.fillStyle="#4b2a15",w.font="bold 100px Trebuchet MS",w.textAlign="center",w.textBaseline="middle",w.fillText(String(i),64,69);let T=new pn(L);T.colorSpace=xt,T.userData.transient=!0;let k=new Ln({map:T,transparent:!0,depthWrite:!1}),V=new hi(s*1.72,s*1.72),K=new ke(V,k);K.rotation.x=-Math.PI/2,K.position.set(r,4.74,a),o.add(K);let Q=0,ne=0,ee="";function oe(ie){if(!["closed","next","bloom"].includes(ie))throw Error("Unknown goal state");ee=ie,ne=ie==="bloom"?1:ie==="next"?.16:0,o.userData.state=ie,_.color.set(ie==="next"?"#f9bf39":"#c5a777"),_.emissive.set(ie==="next"?"#d89514":"#000000"),_.emissiveIntensity=ie==="next"?.15:0}function X(ie,me=.016){Q+=(ne-Q)*Math.min(1,me*7);let be=Q;for(let O of u)O.position.set(0,13-be*3,2+be*10),O.scale.set(5+be*1.5,9-be*6,4+be*4),O.rotation.x=be*-.25;b.visible=be>.4,b.position.y=11.4;let te=ee==="next"?1+Math.sin(ie*2.8)*.035:1;l.scale.setScalar(te),d.emissive.set("#ffc33e"),d.emissiveIntensity=ee==="next"?.08+Math.sin(ie*2.8)*.04:0}oe(e),Q=ne,X(0,1),o.userData.goalNumber=i;function le(ie){let me=ie===33?13:ie===40?15.7:10.5;I.scale.set((me+1.6)/(s+1.6),1,(me+1.6)/(s+1.6)),C.scale.set(me/s,1,me/s),K.scale.setScalar(me/s),o.userData.markerSize=ie}return{group:o,setState:oe,setSize:le,update:X,dispose(){c.dispose(),S.dispose(),y.dispose(),V.dispose(),T.dispose(),k.dispose(),h.forEach(ie=>ie.dispose())}}}var Fn=(i,e)=>Xt.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Fc=[[-13,-9],[20,-10],[8,4],[-11,18]];function ru(i){i.x=Xt.clamp(i.x,-16,24),i.z=Xt.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function au(i=73){let e=[{kind:"bee",position:new z(-12,25,10),velocity:new z,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new z(3,21.5,-7),velocity:new z,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,a){r.leg++,r.age=0;let o=i+a*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new z((Fn(r.leg+1,o)-.5)*5,20.5,(Fn(r.leg+3,o)-.5)*5),r.visiting=!0;else{let f=Math.floor(Fn(r.leg,o)*4);f===r.station&&(f=(f+1+Math.floor(Fn(r.leg+9,o)*2))%4),r.station=f;let[d,p]=Fc[f];r.target=ru(new z(d+(Fn(r.leg+2,o)-.5)*3,r.kind==="bee"?24.5:23,p+(Fn(r.leg+4,o)-.5)*3)),r.visiting=!1}let c=e[1-a],h=(f,d)=>Math.hypot(f.x-d.x,f.z-d.z);if(h(r.target,c.position)<13||c.target&&h(r.target,c.target)<13){let f=-1;for(let d=0;d<Fc.length;d++){let[p,g]=Fc[d],x=new z(p,24,g),m=h(x,c.position)+(c.target?h(x,c.target):0);m>f&&(f=m,r.target=x,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let a=e[0].position.clone().sub(e[1].position);a.y=0;let o=a.length();for(let l=0;l<2;l++){let c=e[l];c.age+=r,c.wait<=0&&c.age>(c.kind==="bee"?4.2:6.2)+Fn(c.leg,i+l)*1.3&&n(c,l);let h=c.target.clone().sub(c.position),f=Math.hypot(h.x,h.z);c.wait>0?(c.wait-=r,c.wait<=0&&n(c,l)):f<1&&c.velocity.length()<2&&(c.wait=c.visiting?(c.kind==="bumblebee"?1.2:.45)+Fn(c.leg,i+l)*1.3:.12+Fn(c.leg,i+l)*.3);let d=h.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(c.speed*Math.min(1,f/8));let p=d.sub(new z(c.velocity.x,0,c.velocity.z)).multiplyScalar(5.5);o<16&&o>.001&&p.addScaledVector(a,(l?-1:1)*(16-o)*11/o),p.y=(c.target.y+Math.sin(t*4.1+l*2.3)*.16-c.position.y)*16-c.velocity.y*7,p.clampLength(0,95),c.velocity.addScaledVector(p,r),c.velocity.clampLength(0,c.speed*1.1),c.position.addScaledVector(c.velocity,r),ru(c.position)}}return{agents:e,update(r){let a=Xt.clamp(r,0,.1);for(;a>1e-8;){let o=Math.min(.008333333333333333,a);s(o),a-=o}return e}}}var Oc={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},A0=(i,e)=>Xt.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function ou({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Oc[i];if(!r)throw Error("Unknown flower species "+i);let a=su({number:e,state:t,layout:n}),o=a.group,l=o.children[0],c=new Je;c.position.copy(l.position),o.add(c);let h=[],f=[],d=le=>{let ie=new it({color:le,roughness:.56});return f.push(ie),ie},p=d("#538b2c"),g=r.colors.map(d),x=d(r.center),m=new lt(1,20,12);h.push(m);function u(le,ie,me,be,te,O,U,M){let v=new ke(m,ie);return v.position.set(me,be,te),v.scale.set(O,U,M),v.castShadow=v.receiveShadow=!0,le.add(v),v}u(c,p,0,5,0,1.8,6,1.8);for(let le of[-1,1]){let ie=u(c,p,le*6,3,0,8,1.4,3);ie.rotation.z=le*.25}let b=[];for(let le=0;le<r.petals;le++){let ie=new Je;ie.position.y=12,ie.rotation.y=le*Math.PI*2/r.petals,c.add(ie);let me=new Je;ie.add(me);let be=m;if(i==="poppy"){be=m.clone();let O=be.attributes.position;for(let U=0;U<O.count;U++){let M=O.getX(U),v=O.getZ(U);O.setY(U,O.getY(U)+Math.sin(Math.atan2(v,M)*5)*.26*Math.hypot(M,v))}be.computeVertexNormals(),h.push(be)}let te=new ke(be,g[le%2]);te.position.z=r.radius,te.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),te.castShadow=te.receiveShadow=!0,me.add(te),b.push(me)}let _=u(c,x,0,13.8,0,r.heart,2.7,r.heart);for(let le=0;le<(i==="poppy"?9:7);le++){let ie=le*Math.PI*2/(i==="poppy"?9:7);u(c,x,Math.cos(ie)*r.heart*.7,16,Math.sin(ie)*r.heart*.7,.65,.6,.65)}let y=new Je;y.name="flower-visitors",c.add(y);let I=d("#e9ad32"),S=d("#d6af50"),C=d("#60452b"),L=d("#fff6df");S.roughness=.95,L.transparent=!0,L.opacity=.72,L.depthWrite=!1;let w=[];for(let le=0;le<2;le++){let ie=new Je;ie.name=le?"bumblebee":"bee",ie.scale.setScalar(1.8),y.add(ie);let me=le?1.08:.7,be=le?.98:.65;u(ie,le?S:I,0,0,0,me,be,1.2),u(ie,C,0,0,1.05,le?.56:.48,le?.54:.48,.48);for(let O of[-.55,.15])u(ie,C,0,0,O,me*1.02,be*1.02,.18);if(le){let O=d("#f4e4b9");O.roughness=1,u(ie,O,0,0,-.98,.72,.65,.38);let U=[],M=[],v=260;for(let re=0;re<v;re++){let J=1-2*(re+.5)/v,A=Math.sqrt(1-J*J),N=re*2.39996323,B=Math.cos(N)*A,W=Math.sin(N)*A,q=new z(B*me*1.015,J*be*1.015,W*1.215),F=new z(B/me,J/be,W/1.2).normalize(),R=.12+A0(re,91)*.12,Y=q.clone().addScaledVector(F,R);Y.z-=.045,U.push(...q.toArray(),...Y.toArray());let ge=new ze(W<-.72?"#f4e4b9":Math.abs(W+.46)<.18||Math.abs(W-.12)<.17?"#635238":re%3?"#d6af50":"#e7c776");M.push(...ge.toArray(),...ge.toArray())}let H=new ut;H.setAttribute("position",new Ye(U,3)),H.setAttribute("color",new Ye(M,3)),h.push(H);let Z=new qi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});f.push(Z);let G=new Ts(H,Z);G.name="bumblebee-fur",ie.add(G)}let te=[];for(let O of[-1,1]){let U=u(ie,L,O*.95,.5,-.1,1.5,.16,.65);U.castShadow=!1,te.push(U)}w.push({insect:ie,wings:te,seed:e*17+le*31+Object.keys(Oc).indexOf(i)*7,phase:le*2.7,a:new z,b:new z})}let T=!!s;function k(le){T=!!le,o.userData.insects=T}let V=au(e*17+Object.keys(Oc).indexOf(i)*7);o.userData.visitorSizes={bee:100,bumblebee:100};function K(le,ie=100){if(!["bee","bumblebee"].includes(le))throw Error("Unknown flower visitor");if(!Number.isFinite(ie)||ie<50||ie>300)throw RangeError("Visitor size must be between 50 and 300 percent");w.find(me=>me.insect.name===le).insect.scale.setScalar(1.8*ie/100),o.userData.visitorSizes[le]=ie}let Q=t,ne=t==="bloom"?1:0,ee=ne;function oe(le){a.setState(le),Q=le,ne=le==="bloom"?1:0}function X(le,ie=.016){a.update(le,ie),ee+=(ne-ee)*Math.min(1,ie*7);let me=ee;l.scale.multiplyScalar(1-me),l.visible=me<.999,c.visible=me>.001,c.scale.setScalar(me);for(let te of b)te.rotation.x=-(1-me)*1.1;_.scale.y=2.7*(.8+.2*me),y.visible=T&&Q==="bloom"&&me>.94;let be=V.update(ie);for(let te=0;te<w.length;te++){let O=w[te],U=be[te];O.insect.position.copy(U.position);let M=U.velocity.x,v=U.velocity.z,H=Math.hypot(M,v);if(H>.5){let Z=Math.atan2(M,v),G=Math.atan2(Math.sin(Z-O.insect.rotation.y),Math.cos(Z-O.insect.rotation.y));O.insect.rotation.y+=G*Math.min(1,ie*9),O.insect.rotation.z=Xt.clamp(-G*.22,-.24,.24)}else O.insect.rotation.z*=Math.max(0,1-ie*6);O.insect.rotation.x=-Math.min(.16,H*.009),O.wings.forEach((Z,G)=>Z.rotation.z=Math.sin(le*30+O.phase)*(G?1:-1)*.5)}}return k(s),X(0,1),o.userData.species=i,o.userData.decorative=!0,{group:o,setState:oe,setInsects:k,setVisitorSize:K,setSize:a.setSize,update:X,get state(){return Q},dispose(){a.dispose(),h.forEach(le=>le.dispose()),f.forEach(le=>le.dispose())}}}function cu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,_=o.length;b<_;b++){let y=o[b],I=i.attributes[y];l[y]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let S=i.morphAttributes[y];S&&(c[y]||(c[y]=[]),S.forEach((C,L)=>{let w=new C.array.constructor(C.count*C.itemSize);c[y][L]=new C.constructor(w,C.itemSize,C.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let b=0;b<r;b++){let _=n?n.getX(b):b,y="";for(let I=0,S=o.length;I<S;I++){let C=o[I],L=i.getAttribute(C),w=L.itemSize;for(let T=0;T<w;T++)y+=`${~~(L[f[T]](_)*x+m)},`}if(y in t)h.push(t[y]);else{for(let I=0,S=o.length;I<S;I++){let C=o[I],L=i.getAttribute(C),w=i.morphAttributes[C],T=L.itemSize,k=l[C],V=c[C];for(let K=0;K<T;K++){let Q=f[K],ne=d[K];if(k[ne](a,L[Q](_)),w)for(let ee=0,oe=w.length;ee<oe;ee++)V[ee][ne](a,w[ee][Q](_))}}t[y]=a,h.push(a),a++}}let u=i.clone();for(let b in i.attributes){let _=l[b];if(u.setAttribute(b,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),b in c)for(let y=0;y<c[b].length;y++){let I=c[b][y];u.morphAttributes[b][y]=new I.constructor(I.array.slice(0,a*I.itemSize),I.itemSize,I.normalized)}}return u.setIndex(h),u}var io=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new z,r=new z,a=new z,o=new z,l=[s,r,a,o],c=new z,h=new z,f=new z,d=new z,p=[c,h,f,d],g=new ze,x=new ze,m=new ze,u=new ze,b=[g,x,m,u],_=new pe,y=new pe,I=new pe,S=new pe,C=[_,y,I,S],L=new pe,w=new pe,T=new pe,k=new pe,V=[L,w,T,k],K=e.attributes,Q=K.normal!==void 0,ne=K.color!==void 0,ee=K.uv!==void 0,oe=K.uv1!==void 0,X=K.position.array,le=Q?K.normal.array:null,ie=ne?K.color.array:null,me=ee?K.uv.array:null,be=oe?K.uv1.array:null,te=X,O=le,U=ie,M=me,v=be,H=0,Z=!0;function G(J,A,N){let B=l[J],W=l[A],q=l[N];if(te.push(B.x,B.y,B.z),te.push(W.x,W.y,W.z),te.push(q.x,q.y,q.z),Q){let F=p[J],R=p[A],Y=p[N];O.push(F.x,F.y,F.z),O.push(R.x,R.y,R.z),O.push(Y.x,Y.y,Y.z)}if(ne){let F=b[J],R=b[A],Y=b[N];U.push(F.r,F.g,F.b),U.push(R.r,R.g,R.b),U.push(Y.r,Y.g,Y.b)}if(ee){let F=C[J],R=C[A],Y=C[N];M.push(F.x,F.y),M.push(R.x,R.y),M.push(Y.x,Y.y)}if(oe){let F=V[J],R=V[A],Y=V[N];v.push(F.x,F.y),v.push(R.x,R.y),v.push(Y.x,Y.y)}}for(;Z&&H<t;){H++,Z=!1,X=te,te=[],Q&&(le=O,O=[]),ne&&(ie=U,U=[]),ee&&(me=M,M=[]),oe&&(be=v,v=[]);for(let J=0,A=0,N=X.length;J<N;J+=9,A+=6){s.fromArray(X,J+0),r.fromArray(X,J+3),a.fromArray(X,J+6),Q&&(c.fromArray(le,J+0),h.fromArray(le,J+3),f.fromArray(le,J+6)),ne&&(g.fromArray(ie,J+0),x.fromArray(ie,J+3),m.fromArray(ie,J+6)),ee&&(_.fromArray(me,A+0),y.fromArray(me,A+2),I.fromArray(me,A+4)),oe&&(L.fromArray(be,A+0),w.fromArray(be,A+2),T.fromArray(be,A+4));let B=s.distanceToSquared(r),W=r.distanceToSquared(a),q=s.distanceToSquared(a);B>n||W>n||q>n?(Z=!0,B>=W&&B>=q?(o.lerpVectors(s,r,.5),Q&&d.lerpVectors(c,h,.5),ne&&u.lerpColors(g,x,.5),ee&&S.lerpVectors(_,y,.5),oe&&k.lerpVectors(L,w,.5),G(0,3,2),G(3,1,2)):W>=B&&W>=q?(o.lerpVectors(r,a,.5),Q&&d.lerpVectors(h,f,.5),ne&&u.lerpColors(x,m,.5),ee&&S.lerpVectors(y,I,.5),oe&&k.lerpVectors(w,T,.5),G(0,1,3),G(3,2,0)):(o.lerpVectors(s,a,.5),Q&&d.lerpVectors(c,f,.5),ne&&u.lerpColors(g,m,.5),ee&&S.lerpVectors(_,I,.5),oe&&k.lerpVectors(L,T,.5),G(0,1,3),G(3,1,2))):G(0,1,2)}}let re=new ut;return re.setAttribute("position",new Ye(te,3)),Q&&re.setAttribute("normal",new Ye(O,3)),ne&&re.setAttribute("color",new Ye(U,3)),ee&&re.setAttribute("uv",new Ye(M,2)),oe&&re.setAttribute("uv1",new Ye(v,2)),re}};var R0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},Qs=Xt.clamp;function C0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],a=Qs(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*a,e-t[1]-r*a)}var I0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function lu(i,e,t){if(i==="split"){let n=Math.min(...I0.map(([s,r])=>C0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let a=0;a<s;a++){let o=.25+a*Math.PI*2/s,l=e*Math.cos(o)+t*Math.sin(o),c=-e*Math.sin(o)+t*Math.cos(o),h=((l-10)/8.5)**2+(c/(s===6?3.2:4.7))**2;n=Math.max(n,Qs((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,a]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let o=Math.hypot(e-s,t-r)/a;n=Math.max(n,Math.max(0,1-o*o)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function hu(i="fossil",{seed:e=73}={}){if(!R0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Je,s=256,r=new Uint8Array(s*s*4),a=new Uint8Array(s*s*4),o=e>>>0,l=()=>(o=o*1664525+1013904223>>>0)/4294967296;for(let u=0;u<s;u++)for(let b=0;b<s;b++){let _=(b/(s-1)-.5)*66,y=(u/(s-1)-.5)*66,I=lu(i,_,y),S=Math.sin(_*.18+y*.11)*Math.sin(y*.21-_*.07),C=l()-.5,L=1+S*(t?.004:.015)+C*(t?.025:.065)-I.ink,w=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],T=(u*s+b)*4;for(let V=0;V<3;V++)r[T+V]=Qs(w[V]*L+(220-w[V])*I.vein,0,255);r[T+3]=255;let k=Qs(138+C*(t?4:12)+S-I.cut*28,0,255);a.set([k,k,k,255],T)}let c=new Yn(r,s,s);c.colorSpace=xt;let h=new Yn(a,s,s);for(let u of[c,h])u.magFilter=u.minFilter=Pt,u.needsUpdate=!0;let f=new it({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:c,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(f.onBeforeCompile=u=>{let b=new ze(t?"#9e9688":i==="split"?"#978f80":"#999182");u.vertexShader=`varying float stoneTop;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),u.fragmentShader=`varying float stoneTop;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${b.r},${b.g},${b.b}),diffuseColor.rgb,stoneTop);`)}),f.customProgramCacheKey=()=>`slink-stone-top-${i}`;let d=new yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let u=new io(3.5,10).modify(d);d.dispose(),d=u}d.translate(0,0,10);let p=d.attributes.position,g=d.attributes.uv;for(let u=0;u<p.count;u++){let b=p.getX(u),_=p.getY(u),y=p.getZ(u),I=Qs((y-10)/16.5,0,1);if(i!=="reference"){let S=Math.max(0,1-(b*b+_*_)/1800),C=Math.sin(b*.13+_*.035)*Math.cos(_*.1)*(t?.12:.7),L=t?S*5:i==="split"?S*1.3-Math.max(0,b*.17+_*.09-2)*.6:S*.6;y+=(L+C-lu(i,b,_).cut)*I}p.setZ(u,y),g.setXY(u,b/66+.5,_/66+.5)}d.deleteAttribute("normal");let x=cu(d,1e-4);d.dispose(),d=x,d.computeVertexNormals();let m=new ke(d,f);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){d.dispose(),f.dispose(),c.dispose(),h.dispose()}}}var uu=["daisy","buttercup","meadow","poppy"],fu=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],so=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function P0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let a=s[r];for(let o of[a-e,a+e,a%e?a-1:-1,a%e<e-1?a+1:-1])t.delete(o)&&s.push(o)}n.push(s.sort((r,a)=>r-a))}return n}function du(i){let e=so(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=uu[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&so(e+":flower-mix")%3!==0){let r=uu[(e%4+1+so(e+":flower-palette")%3)%4];for(let a=1;a<n.length;a+=2)n[a]=r}for(let r of P0(i.stones||[],i.n)){let a=so(e+":"+r.join(","));if(r.length===1){s[r[0]]=fu[a%fu.length];continue}for(let o of r)s[o]="plain";if(a%4!==0){let o=["pebble","strata","dimples","rosette"][a%4];s[r[a%r.length]]=o}}return{seed:e,flowers:n,stones:s}}var Bc=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),zc={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function L0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let a=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=a,s.data[r+3]=255}return n.putImageData(s,0,0),new pn(t)}function er(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=zc[i];if(!n)throw Error("Unknown tile "+i);let s=new Je,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=(p,g={})=>new it({color:p,roughness:.75,...g}),o=(p,g,x=0,m=0,u=0)=>{let b=new ke(p,g);return b.position.set(x,m,u),b.castShadow=b.receiveShadow=!0,s.add(b),b},l=a(n.color,{bumpMap:L0(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),c=n.height+3.5,h,f;if(n.kind==="earth"){let p=73.5,g=5,x=-p/2,m=p/2,u=new _t;u.moveTo(x+g,x),u.lineTo(m-g,x),u.quadraticCurveTo(m,x,m,x+g),u.lineTo(m,m-g),u.quadraticCurveTo(m,m,m-g,m),u.lineTo(x+g,m),u.quadraticCurveTo(x,m,x,m-g),u.lineTo(x,x+g),u.quadraticCurveTo(x,x,x+g,x),u.closePath(),h=new Gt(u,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),f=-1}else h=new yn(78.5,78.5,c,4,7.5),f=(n.height-3.5)/2;let d=o(h,l,0,0,f);if(d.userData.surface=!0,!t)if(n.kind==="earth"){let p=[a("#c59b6b"),a("#98714c"),a("#dbb78a")];for(let g=0;g<n.pebbles;g++){let x=(r()-.5)*59,m=(r()-.5)*59,u=.8+r()*1.2,b=o(new lt(1,9,6),p[g%3],x,m,n.height-.25);b.scale.set(u*1.6,u,u*.55),b.rotation.z=r()*6}for(let g=0;g<22;g++){let x=o(new lt(1,8,6),l,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;x.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let p=[a("#d3f471"),a("#b1e443"),a("#87bf24")],g=(x,m,u)=>{let b=new _t;return b.moveTo(-u,0),b.quadraticCurveTo(-u*.8,x*.6,m,x),b.quadraticCurveTo(u*1.1,x*.45,u,0),b.closePath(),new Gt(b,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<n.tufts;x++){let m=(r()-.5)*59,u=(r()-.5)*59;for(let b=0;b<3;b++){let _=n.bladeHeight*(.6+r()*.4),y=o(g(_,(b-1)*_*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),p[b],m+(b-1)*1.8,u,n.height-.15);y.rotation.x=Math.PI/2,y.rotateOnWorldAxis(new z(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let x=0;x<6;x++){let m=(r()-.5)*50,u=(r()-.5)*50;for(let b=0;b<3;b++){let _=b*Math.PI*2/3,y=o(new lt(1,12,8),p[x%2],m+Math.cos(_)*2.3,u+Math.sin(_)*2.3,n.height+1.7);y.scale.set(3.3,2.6,.9),y.rotation.z=_}}l.emissive.set("#4c790c"),l.emissiveIntensity=.055}else{let p=a("#9fc53b");for(let g=0;g<4;g++){let x=g*Math.PI/2+.3,m=o(new lt(1,12,8),p,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=x}}return n.kind!=="earth"&&n.kind!=="reference"&&(l.emissive.set("#4c790c"),l.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:Bc},s}function tr(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var D0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function pu(i,{seed:e=73}={}){let t=D0[i];if(!t)throw Error("Unknown meadow "+i);let n=er("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(S=>S.userData.surface),r=new Je;for(let S of[...n.children])S!==s&&r.add(S);tr(r);let a=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=new lt(1,12,8),l=S=>new it({color:S,roughness:.75}),c=[l("#d3f471"),l("#b1e443"),l("#87bf24")],h=[],f=(S,C,L,w,T)=>{let k=new ke(S,C);return k.position.set(L,w,T),k.castShadow=k.receiveShadow=!0,n.add(k),k};function d(S,C,L,w,T=3.3,k=2.6){let V=f(o,c[1],S,C,L);return V.scale.set(T,k,.85),V.rotation.z=w,V}for(let S=0;S<t.clover;S++){let C=(a()-.5)*52,L=(a()-.5)*52;for(let w=0;w<3;w++){let T=w*Math.PI*2/3+a()*.12;d(C+Math.cos(T)*2.3,L+Math.sin(T)*2.3,19.7,T)}}function p(S,C,L){for(let w=0;w<3;w++){let T=new _t,k=(w-1)*L*.35;T.moveTo(-1,0),T.quadraticCurveTo(-.8,L*.65,k,L),T.quadraticCurveTo(1,L*.45,1,0),T.closePath();let V=new Gt(T,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),K=f(V,c[w],S+(w-1)*1.6,C,17.8);K.rotation.x=Math.PI/2,K.rotateOnWorldAxis(new z(0,0,1),.6)}}for(let S=0;S<t.tufts;S++)p((a()-.5)*50,(a()-.5)*50,3.5+a()*1.8);t.tall&&p(20,-19,10);let g=l("#fff3c4"),x=l("#f6b7a0"),m=l("#efb52e"),u=l("#709e29"),b=l("#edbd43"),_=l("#63502a"),y=new it({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let S=0;S<(t.flowers||0);S++){let C=S?-16:16,L=S?-14:12,w=S?24:25.5,T=f(new rn(.6,.85,w-18,8),u,C,L,(18+w)/2);T.rotation.x=Math.PI/2;for(let V=0;V<5;V++){let K=V*Math.PI*2/5,Q=f(o,S?x:g,C+Math.cos(K)*3,L+Math.sin(K)*3,w);Q.scale.set(3.2,1.8,.8),Q.rotation.z=K}if(f(o,m,C,L,w+.7).scale.set(1.9,1.9,1.2),d(C-2,L,20.5,-.5,3.2,1.4),t.insects)for(let V=0;V<t.insects;V++){let K=new Je;n.add(K);let Q=new ke(o,b);Q.scale.set(.85,1.3,.8),K.add(Q);let ne=new ke(o,_);ne.position.y=1.2,ne.scale.setScalar(.6),K.add(ne);let ee=[];for(let oe of[-1,1]){let X=new ke(o,y);X.position.set(oe*1,0,.5),X.scale.set(1.8,.75,.25),X.rotation.z=oe*.35,K.add(X),ee.push(X)}h.push({insect:K,wings:ee,x:C,y:L,phase:V*3.14,radius:8+V*2,z:w+5+V})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function I(S){for(let C of h){let L=S*.85+C.phase;C.insect.position.set(C.x+Math.cos(L)*C.radius,C.y+Math.sin(L)*C.radius*.65,C.z+Math.sin(S*1.8+C.phase)*1.2),C.insect.rotation.z=L,C.wings.forEach((w,T)=>w.rotation.y=Math.sin(S*28)*(T?1:-1)*.45)}}return I(0),{group:n,update:I,dispose(){tr(n)}}}var mu={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function gu(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},a=new it({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),o=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",l=mu[i]?.[n]||o;return a.onBeforeCompile=c=>{c.uniforms.uLiquidTime=r,c.uniforms.uLiquidCenter={value:new pe(...t)},c.vertexShader=`varying vec2 vLiquidXY;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),c.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${l}`)},a.customProgramCacheKey=()=>i+"-"+n+"-2",{material:a,update(c){r.value=e?c:0},dispose(){a.dispose()},type:i}}var U0=xt,nr=class i extends fi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,a=new ks(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(O,U){if(O.nodeType!==1)return;let M=y(O),v=!1,H=null;switch(O.nodeName){case"svg":U=g(O,U);break;case"style":r(O);break;case"g":U=g(O,U);break;case"path":U=g(O,U),O.hasAttribute("d")&&(H=s(O));break;case"rect":U=g(O,U),H=l(O);break;case"polygon":U=g(O,U),H=c(O);break;case"polyline":U=g(O,U),H=h(O);break;case"circle":U=g(O,U),H=f(O);break;case"ellipse":U=g(O,U),H=d(O);break;case"line":U=g(O,U),H=p(O);break;case"defs":v=!0;break;case"use":U=g(O,U);let re=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),J=O.viewportElement.getElementById(re);J?n(J,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+re);break;default:}H&&(U.fill!==void 0&&U.fill!=="none"&&H.color.setStyle(U.fill,U0),S(H,me),V.push(H),H.userData={node:O,style:U});let Z=O.childNodes;for(let G=0;G<Z.length;G++){let re=Z[G];v&&re.nodeName!=="style"&&re.nodeName!=="defs"||n(re,U)}M&&(Q.pop(),Q.length>0?me.copy(Q[Q.length-1]):me.identity())}function s(O){let U=new cn,M=new pe,v=new pe,H=new pe,Z=!0,G=!1,re=O.getAttribute("d");if(re===""||re==="none")return null;let J=re.match(/[a-df-z][^a-df-z]*/ig);for(let A=0,N=J.length;A<N;A++){let B=J[A],W=B.charAt(0),q=B.slice(1).trim();Z===!0&&(G=!0,Z=!1);let F;switch(W){case"M":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2)M.x=F[R+0],M.y=F[R+1],v.x=M.x,v.y=M.y,R===0?U.moveTo(M.x,M.y):U.lineTo(M.x,M.y),R===0&&H.copy(M);break;case"H":F=m(q);for(let R=0,Y=F.length;R<Y;R++)M.x=F[R],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"V":F=m(q);for(let R=0,Y=F.length;R<Y;R++)M.y=F[R],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"L":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2)M.x=F[R+0],M.y=F[R+1],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"C":F=m(q);for(let R=0,Y=F.length;R<Y;R+=6)U.bezierCurveTo(F[R+0],F[R+1],F[R+2],F[R+3],F[R+4],F[R+5]),v.x=F[R+2],v.y=F[R+3],M.x=F[R+4],M.y=F[R+5],R===0&&G===!0&&H.copy(M);break;case"S":F=m(q);for(let R=0,Y=F.length;R<Y;R+=4)U.bezierCurveTo(x(M.x,v.x),x(M.y,v.y),F[R+0],F[R+1],F[R+2],F[R+3]),v.x=F[R+0],v.y=F[R+1],M.x=F[R+2],M.y=F[R+3],R===0&&G===!0&&H.copy(M);break;case"Q":F=m(q);for(let R=0,Y=F.length;R<Y;R+=4)U.quadraticCurveTo(F[R+0],F[R+1],F[R+2],F[R+3]),v.x=F[R+0],v.y=F[R+1],M.x=F[R+2],M.y=F[R+3],R===0&&G===!0&&H.copy(M);break;case"T":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2){let ge=x(M.x,v.x),xe=x(M.y,v.y);U.quadraticCurveTo(ge,xe,F[R+0],F[R+1]),v.x=ge,v.y=xe,M.x=F[R+0],M.y=F[R+1],R===0&&G===!0&&H.copy(M)}break;case"A":F=m(q,[3,4],7);for(let R=0,Y=F.length;R<Y;R+=7){if(F[R+5]==M.x&&F[R+6]==M.y)continue;let ge=M.clone();M.x=F[R+5],M.y=F[R+6],v.x=M.x,v.y=M.y,a(U,F[R],F[R+1],F[R+2],F[R+3],F[R+4],ge,M),R===0&&G===!0&&H.copy(M)}break;case"m":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2)M.x+=F[R+0],M.y+=F[R+1],v.x=M.x,v.y=M.y,R===0?U.moveTo(M.x,M.y):U.lineTo(M.x,M.y),R===0&&H.copy(M);break;case"h":F=m(q);for(let R=0,Y=F.length;R<Y;R++)M.x+=F[R],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"v":F=m(q);for(let R=0,Y=F.length;R<Y;R++)M.y+=F[R],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"l":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2)M.x+=F[R+0],M.y+=F[R+1],v.x=M.x,v.y=M.y,U.lineTo(M.x,M.y),R===0&&G===!0&&H.copy(M);break;case"c":F=m(q);for(let R=0,Y=F.length;R<Y;R+=6)U.bezierCurveTo(M.x+F[R+0],M.y+F[R+1],M.x+F[R+2],M.y+F[R+3],M.x+F[R+4],M.y+F[R+5]),v.x=M.x+F[R+2],v.y=M.y+F[R+3],M.x+=F[R+4],M.y+=F[R+5],R===0&&G===!0&&H.copy(M);break;case"s":F=m(q);for(let R=0,Y=F.length;R<Y;R+=4)U.bezierCurveTo(x(M.x,v.x),x(M.y,v.y),M.x+F[R+0],M.y+F[R+1],M.x+F[R+2],M.y+F[R+3]),v.x=M.x+F[R+0],v.y=M.y+F[R+1],M.x+=F[R+2],M.y+=F[R+3],R===0&&G===!0&&H.copy(M);break;case"q":F=m(q);for(let R=0,Y=F.length;R<Y;R+=4)U.quadraticCurveTo(M.x+F[R+0],M.y+F[R+1],M.x+F[R+2],M.y+F[R+3]),v.x=M.x+F[R+0],v.y=M.y+F[R+1],M.x+=F[R+2],M.y+=F[R+3],R===0&&G===!0&&H.copy(M);break;case"t":F=m(q);for(let R=0,Y=F.length;R<Y;R+=2){let ge=x(M.x,v.x),xe=x(M.y,v.y);U.quadraticCurveTo(ge,xe,M.x+F[R+0],M.y+F[R+1]),v.x=ge,v.y=xe,M.x=M.x+F[R+0],M.y=M.y+F[R+1],R===0&&G===!0&&H.copy(M)}break;case"a":F=m(q,[3,4],7);for(let R=0,Y=F.length;R<Y;R+=7){if(F[R+5]==0&&F[R+6]==0)continue;let ge=M.clone();M.x+=F[R+5],M.y+=F[R+6],v.x=M.x,v.y=M.y,a(U,F[R],F[R+1],F[R+2],F[R+3],F[R+4],ge,M),R===0&&G===!0&&H.copy(M)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(M.copy(H),U.currentPath.currentPoint.copy(M),Z=!0);break;default:console.warn(B)}G=!1}return U}function r(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let U=0;U<O.sheet.cssRules.length;U++){let M=O.sheet.cssRules[U];if(M.type!==1)continue;let v=M.selectorText.split(/,/gm).filter(Boolean).map(H=>H.trim());for(let H=0;H<v.length;H++){let Z=Object.fromEntries(Object.entries(M.style).filter(([,G])=>G!==""));K[v[H]]=Object.assign(K[v[H]]||{},Z)}}}function a(O,U,M,v,H,Z,G,re){if(U==0||M==0){O.lineTo(re.x,re.y);return}v=v*Math.PI/180,U=Math.abs(U),M=Math.abs(M);let J=(G.x-re.x)/2,A=(G.y-re.y)/2,N=Math.cos(v)*J+Math.sin(v)*A,B=-Math.sin(v)*J+Math.cos(v)*A,W=U*U,q=M*M,F=N*N,R=B*B,Y=F/W+R/q;if(Y>1){let ve=Math.sqrt(Y);U=ve*U,M=ve*M,W=U*U,q=M*M}let ge=W*R+q*F,xe=(W*q-ge)/ge,P=Math.sqrt(Math.max(0,xe));H===Z&&(P=-P);let E=P*U*B/M,$=-P*M*N/U,ce=Math.cos(v)*E-Math.sin(v)*$+(G.x+re.x)/2,de=Math.sin(v)*E+Math.cos(v)*$+(G.y+re.y)/2,he=o(1,0,(N-E)/U,(B-$)/M),Re=o((N-E)/U,(B-$)/M,(-N-E)/U,(-B-$)/M)%(Math.PI*2);O.currentPath.absellipse(ce,de,U,M,he,he+Re,Z===0,v)}function o(O,U,M,v){let H=O*M+U*v,Z=Math.sqrt(O*O+U*U)*Math.sqrt(M*M+v*v),G=Math.acos(Math.max(-1,Math.min(1,H/Z)));return O*v-U*M<0&&(G=-G),G}function l(O){let U=_(O.getAttribute("x")||0),M=_(O.getAttribute("y")||0),v=_(O.getAttribute("rx")||O.getAttribute("ry")||0),H=_(O.getAttribute("ry")||O.getAttribute("rx")||0),Z=_(O.getAttribute("width")),G=_(O.getAttribute("height")),re=1-.551915024494,J=new cn;return J.moveTo(U+v,M),J.lineTo(U+Z-v,M),(v!==0||H!==0)&&J.bezierCurveTo(U+Z-v*re,M,U+Z,M+H*re,U+Z,M+H),J.lineTo(U+Z,M+G-H),(v!==0||H!==0)&&J.bezierCurveTo(U+Z,M+G-H*re,U+Z-v*re,M+G,U+Z-v,M+G),J.lineTo(U+v,M+G),(v!==0||H!==0)&&J.bezierCurveTo(U+v*re,M+G,U,M+G-H*re,U,M+G-H),J.lineTo(U,M+H),(v!==0||H!==0)&&J.bezierCurveTo(U,M+H*re,U+v*re,M,U+v,M),J}function c(O){function U(Z,G,re){let J=_(G),A=_(re);H===0?v.moveTo(J,A):v.lineTo(J,A),H++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,v=new cn,H=0;return O.getAttribute("points").replace(M,U),v.currentPath.autoClose=!0,v}function h(O){function U(Z,G,re){let J=_(G),A=_(re);H===0?v.moveTo(J,A):v.lineTo(J,A),H++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,v=new cn,H=0;return O.getAttribute("points").replace(M,U),v.currentPath.autoClose=!1,v}function f(O){let U=_(O.getAttribute("cx")||0),M=_(O.getAttribute("cy")||0),v=_(O.getAttribute("r")||0),H=new mn;H.absarc(U,M,v,0,Math.PI*2);let Z=new cn;return Z.subPaths.push(H),Z}function d(O){let U=_(O.getAttribute("cx")||0),M=_(O.getAttribute("cy")||0),v=_(O.getAttribute("rx")||0),H=_(O.getAttribute("ry")||0),Z=new mn;Z.absellipse(U,M,v,H,0,Math.PI*2);let G=new cn;return G.subPaths.push(Z),G}function p(O){let U=_(O.getAttribute("x1")||0),M=_(O.getAttribute("y1")||0),v=_(O.getAttribute("x2")||0),H=_(O.getAttribute("y2")||0),Z=new cn;return Z.moveTo(U,M),Z.lineTo(v,H),Z.currentPath.autoClose=!1,Z}function g(O,U){U=Object.assign({},U);let M={};if(O.hasAttribute("class")){let G=O.getAttribute("class").split(/\s/).filter(Boolean).map(re=>re.trim());for(let re=0;re<G.length;re++)M=Object.assign(M,K["."+G[re]])}O.hasAttribute("id")&&(M=Object.assign(M,K["#"+O.getAttribute("id")]));function v(G,re,J){J===void 0&&(J=function(N){return N.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),N}),O.hasAttribute(G)&&(U[re]=J(O.getAttribute(G))),M[G]&&(U[re]=J(M[G])),O.style&&O.style[G]!==""&&(U[re]=J(O.style[G]))}function H(G){return Math.max(0,Math.min(1,_(G)))}function Z(G){return Math.max(0,_(G))}return v("fill","fill"),v("fill-opacity","fillOpacity",H),v("fill-rule","fillRule"),v("opacity","opacity",H),v("stroke","stroke"),v("stroke-opacity","strokeOpacity",H),v("stroke-width","strokeWidth",Z),v("stroke-linejoin","strokeLineJoin"),v("stroke-linecap","strokeLineCap"),v("stroke-miterlimit","strokeMiterLimit",Z),v("visibility","visibility"),U}function x(O,U){return O-(U-O)}function m(O,U,M){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);let v={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},H=0,Z=1,G=2,re=3,J=H,A=!0,N="",B="",W=[];function q(ge,xe,P){let E=new SyntaxError('Unexpected character "'+ge+'" at index '+xe+".");throw E.partial=P,E}function F(){N!==""&&(B===""?W.push(Number(N)):W.push(Number(N)*Math.pow(10,Number(B)))),N="",B=""}let R,Y=O.length;for(let ge=0;ge<Y;ge++){if(R=O[ge],Array.isArray(U)&&U.includes(W.length%M)&&v.FLAGS.test(R)){J=Z,N=R,F();continue}if(J===H){if(v.WHITESPACE.test(R))continue;if(v.DIGIT.test(R)||v.SIGN.test(R)){J=Z,N=R;continue}if(v.POINT.test(R)){J=G,N=R;continue}v.COMMA.test(R)&&(A&&q(R,ge,W),A=!0)}if(J===Z){if(v.DIGIT.test(R)){N+=R;continue}if(v.POINT.test(R)){N+=R,J=G;continue}if(v.EXP.test(R)){J=re;continue}v.SIGN.test(R)&&N.length===1&&v.SIGN.test(N[0])&&q(R,ge,W)}if(J===G){if(v.DIGIT.test(R)){N+=R;continue}if(v.EXP.test(R)){J=re;continue}v.POINT.test(R)&&N[N.length-1]==="."&&q(R,ge,W)}if(J===re){if(v.DIGIT.test(R)){B+=R;continue}if(v.SIGN.test(R)){if(B===""){B+=R;continue}B.length===1&&v.SIGN.test(B)&&q(R,ge,W)}}v.WHITESPACE.test(R)?(F(),J=H,A=!1):v.COMMA.test(R)?(F(),J=H,A=!0):v.SIGN.test(R)?(F(),J=Z,N=R):v.POINT.test(R)?(F(),J=G,N=R):q(R,ge,W)}return F(),W}let u=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(O){let U="px";if(typeof O=="string"||O instanceof String)for(let v=0,H=u.length;v<H;v++){let Z=u[v];if(O.endsWith(Z)){U=Z,O=O.substring(0,O.length-Z.length);break}}let M;return U==="px"&&t.defaultUnit!=="px"?M=b.in[t.defaultUnit]/t.defaultDPI:(M=b[U][t.defaultUnit],M<0&&(M=b[U].in*t.defaultDPI)),M*parseFloat(O)}function y(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;let U=I(O);return Q.length>0&&U.premultiply(Q[Q.length-1]),me.copy(U),Q.push(U),U}function I(O){let U=new We,M=ne;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){let v=_(O.getAttribute("x")),H=_(O.getAttribute("y"));U.translate(v,H)}if(O.hasAttribute("transform")){let v=O.getAttribute("transform").split(")");for(let H=v.length-1;H>=0;H--){let Z=v[H].trim();if(Z==="")continue;let G=Z.indexOf("("),re=Z.length;if(G>0&&G<re){let J=Z.slice(0,G),A=m(Z.slice(G+1));switch(M.identity(),J){case"translate":if(A.length>=1){let N=A[0],B=0;A.length>=2&&(B=A[1]),M.translate(N,B)}break;case"rotate":if(A.length>=1){let N=0,B=0,W=0;N=A[0]*Math.PI/180,A.length>=3&&(B=A[1],W=A[2]),ee.makeTranslation(-B,-W),oe.makeRotation(N),X.multiplyMatrices(oe,ee),ee.makeTranslation(B,W),M.multiplyMatrices(ee,X)}break;case"scale":if(A.length>=1){let N=A[0],B=N;A.length>=2&&(B=A[1]),M.scale(N,B)}break;case"skewX":A.length===1&&M.set(1,Math.tan(A[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":A.length===1&&M.set(1,0,0,Math.tan(A[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":A.length===6&&M.set(A[0],A[2],A[4],A[1],A[3],A[5],0,0,1);break}}U.premultiply(M)}}return U}function S(O,U){function M(G){ie.set(G.x,G.y,1).applyMatrix3(U),G.set(ie.x,ie.y)}function v(G){let re=G.xRadius,J=G.yRadius,A=Math.cos(G.aRotation),N=Math.sin(G.aRotation),B=new z(re*A,re*N,0),W=new z(-J*N,J*A,0),q=B.applyMatrix3(U),F=W.applyMatrix3(U),R=ne.set(q.x,F.x,0,q.y,F.y,0,0,0,1),Y=ee.copy(R).invert(),P=oe.copy(Y).transpose().multiply(Y).elements,E=k(P[0],P[1],P[4]),$=Math.sqrt(E.rt1),ce=Math.sqrt(E.rt2);if(G.xRadius=1/$,G.yRadius=1/ce,G.aRotation=Math.atan2(E.sn,E.cs),!((G.aEndAngle-G.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let he=ee.set($,0,0,0,ce,0,0,0,1),Re=oe.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),ve=he.multiply(Re).multiply(R),Le=Ce=>{let{x:ye,y:we}=new z(Math.cos(Ce),Math.sin(Ce),0).applyMatrix3(ve);return Math.atan2(we,ye)};G.aStartAngle=Le(G.aStartAngle),G.aEndAngle=Le(G.aEndAngle),C(U)&&(G.aClockwise=!G.aClockwise)}}function H(G){let re=w(U),J=T(U);G.xRadius*=re,G.yRadius*=J;let A=re>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);G.aRotation+=A,C(U)&&(G.aStartAngle*=-1,G.aEndAngle*=-1,G.aClockwise=!G.aClockwise)}let Z=O.subPaths;for(let G=0,re=Z.length;G<re;G++){let A=Z[G].curves;for(let N=0;N<A.length;N++){let B=A[N];B.isLineCurve?(M(B.v1),M(B.v2)):B.isCubicBezierCurve?(M(B.v0),M(B.v1),M(B.v2),M(B.v3)):B.isQuadraticBezierCurve?(M(B.v0),M(B.v1),M(B.v2)):B.isEllipseCurve&&(le.set(B.aX,B.aY),M(le),B.aX=le.x,B.aY=le.y,L(U)?v(B):H(B))}}}function C(O){let U=O.elements;return U[0]*U[4]-U[1]*U[3]<0}function L(O){let U=O.elements,M=U[0]*U[3]+U[1]*U[4];if(M===0)return!1;let v=w(O),H=T(O);return Math.abs(M/(v*H))>Number.EPSILON}function w(O){let U=O.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function T(O){let U=O.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function k(O,U,M){let v,H,Z,G,re,J=O+M,A=O-M,N=Math.sqrt(A*A+4*U*U);return J>0?(v=.5*(J+N),re=1/v,H=O*re*M-U*re*U):J<0?H=.5*(J-N):(v=.5*N,H=-.5*N),A>0?Z=A+N:Z=A-N,Math.abs(Z)>2*Math.abs(U)?(re=-2*U/Z,G=1/Math.sqrt(1+re*re),Z=re*G):Math.abs(U)===0?(Z=1,G=0):(re=-.5*Z/U,Z=1/Math.sqrt(1+re*re),G=re*Z),A>0&&(re=Z,Z=-G,G=re),{rt1:v,rt2:H,cs:Z,sn:G}}let V=[],K={},Q=[],ne=new We,ee=new We,oe=new We,X=new We,le=new pe,ie=new z,me=new We,be=new DOMParser().parseFromString(e,"image/svg+xml");return n(be.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:V,xml:be.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,u,b){let _=x.x,y=m.x,I=u.x,S=b.x,C=x.y,L=m.y,w=u.y,T=b.y,k=(S-I)*(C-w)-(T-w)*(_-I),V=(y-_)*(C-w)-(L-C)*(_-I),K=(T-w)*(y-_)-(S-I)*(L-C),Q=k/K,ne=V/K;if(K===0&&k!==0||Q<=0||Q>=1||ne<0||ne>1)return null;if(k===0&&K===0){for(let ee=0;ee<2;ee++)if(a(ee===0?u:b,x,m),s.loc==n.ORIGIN){let oe=ee===0?u:b;return{x:oe.x,y:oe.y,t:s.t}}else if(s.loc==n.BETWEEN){let oe=+(_+s.t*(y-_)).toPrecision(10),X=+(C+s.t*(L-C)).toPrecision(10);return{x:oe,y:X,t:s.t}}return null}else{for(let X=0;X<2;X++)if(a(X===0?u:b,x,m),s.loc==n.ORIGIN){let le=X===0?u:b;return{x:le.x,y:le.y,t:s.t}}let ee=+(_+Q*(y-_)).toPrecision(10),oe=+(C+Q*(L-C)).toPrecision(10);return{x:ee,y:oe,t:Q}}}function a(x,m,u){let b=u.x-m.x,_=u.y-m.y,y=x.x-m.x,I=x.y-m.y,S=b*I-y*_;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===u.x&&x.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(S<-Number.EPSILON){s.loc=n.LEFT;return}if(S>Number.EPSILON){s.loc=n.RIGHT;return}if(b*y<0||_*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(y*y+I*I)){s.loc=n.BEYOND;return}let C;b!==0?C=y/b:C=I/_,s.loc=n.BETWEEN,s.t=C}function o(x,m){let u=[],b=[];for(let _=1;_<x.length;_++){let y=x[_-1],I=x[_];for(let S=1;S<m.length;S++){let C=m[S-1],L=m[S],w=r(y,I,C,L);w!==null&&u.find(T=>T.t<=w.t+Number.EPSILON&&T.t>=w.t-Number.EPSILON)===void 0&&(u.push(w),b.push(new pe(w.x,w.y)))}}return b}function l(x,m,u){let b=new pe;m.getCenter(b);let _=[];return u.forEach(y=>{y.boundingBox.containsPoint(b)&&o(x,y.points).forEach(S=>{_.push({identifier:y.identifier,isCW:y.isCW,point:S})})}),_.sort((y,I)=>y.point.x-I.point.x),_}function c(x,m,u,b,_){(_==null||_==="")&&(_="nonzero");let y=new pe;x.boundingBox.getCenter(y);let I=[new pe(u,y.y),new pe(b,y.y)],S=l(I,x.boundingBox,m);S.sort((V,K)=>V.point.x-K.point.x);let C=[],L=[];S.forEach(V=>{V.identifier===x.identifier?C.push(V):L.push(V)});let w=C[0].point.x,T=[],k=0;for(;k<L.length&&L[k].point.x<w;)T.length>0&&T[T.length-1]===L[k].identifier?T.pop():T.push(L[k].identifier),k++;if(T.push(x.identifier),_==="evenodd"){let V=T.length%2===0,K=T[T.length-2];return{identifier:x.identifier,isHole:V,for:K}}else if(_==="nonzero"){let V=!0,K=null,Q=null;for(let ne=0;ne<T.length;ne++){let ee=T[ne];V?(Q=m[ee].isCW,V=!1,K=ee):Q!==m[ee].isCW&&(Q=m[ee].isCW,V=!0)}return{identifier:x.identifier,isHole:V,for:K}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,f=-999999999,d=e.subPaths.map(x=>{let m=x.getPoints(),u=-999999999,b=999999999,_=-999999999,y=999999999;for(let I=0;I<m.length;I++){let S=m[I];S.y>u&&(u=S.y),S.y<b&&(b=S.y),S.x>_&&(_=S.x),S.x<y&&(y=S.x)}return f<=_&&(f=_+1),h>=y&&(h=y-1),{curves:x.curves,points:m,isCW:At.isClockWise(m),identifier:-1,boundingBox:new Ws(new pe(y,b),new pe(_,u))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let p=d.map(x=>c(x,d,h,f,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(x=>{if(!p[x.identifier].isHole){let u=new _t;u.curves=x.curves,p.filter(_=>_.isHole&&_.for===x.identifier).forEach(_=>{let y=d[_.identifier],I=new mn;I.curves=y.curves,u.holes.push(I)}),g.push(u)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,a,o)===0)return null;let l=new ut;return l.setAttribute("position",new Ye(r,3)),l.setAttribute("normal",new Ye(a,3)),l.setAttribute("uv",new Ye(o,2)),l}static pointsToStrokeWithBuffers(e,t,n,s,r,a,o,l){let c=new pe,h=new pe,f=new pe,d=new pe,p=new pe,g=new pe,x=new pe,m=new pe,u=new pe,b=new pe,_=new pe,y=new pe,I=new pe,S=new pe,C=new pe,L=new pe,w=new pe;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=A(e);let T=e.length;if(T<2)return 0;let k=e[0].equals(e[T-1]),V,K=e[0],Q,ne=t.strokeWidth/2,ee=1/(T-1),oe=0,X,le,ie,me,be=!1,te=0,O=l*3,U=l*2;M(e[0],e[1],c).multiplyScalar(ne),m.copy(e[0]).sub(c),u.copy(e[0]).add(c),b.copy(m),_.copy(u);for(let N=1;N<T;N++){V=e[N],N===T-1?k?Q=e[1]:Q=void 0:Q=e[N+1];let B=c;if(M(K,V,B),f.copy(B).multiplyScalar(ne),y.copy(V).sub(f),I.copy(V).add(f),X=oe+ee,le=!1,Q!==void 0){M(V,Q,h),f.copy(h).multiplyScalar(ne),S.copy(V).sub(f),C.copy(V).add(f),ie=!0,f.subVectors(Q,K),B.dot(f)<0&&(ie=!1),N===1&&(be=ie),f.subVectors(Q,V),f.normalize();let W=Math.abs(B.dot(f));if(W>Number.EPSILON){let q=ne/W;f.multiplyScalar(-q),d.subVectors(V,K),p.copy(d).setLength(q).add(f),L.copy(p).negate();let F=p.length(),R=d.length();d.divideScalar(R),g.subVectors(Q,V);let Y=g.length();switch(g.divideScalar(Y),d.dot(L)<R&&g.dot(L)<Y&&(le=!0),w.copy(p).add(V),L.add(V),me=!1,le?ie?(C.copy(L),I.copy(L)):(S.copy(L),y.copy(L)):Z(),t.strokeLineJoin){case"bevel":G(ie,le,X);break;case"round":re(ie,le),ie?H(V,y,S,X,0):H(V,C,I,X,1);break;case"miter":case"miter-clip":default:let ge=ne*t.strokeMiterLimit/F;if(ge<1)if(t.strokeLineJoin!=="miter-clip"){G(ie,le,X);break}else re(ie,le),ie?(g.subVectors(w,y).multiplyScalar(ge).add(y),x.subVectors(w,S).multiplyScalar(ge).add(S),v(y,X,0),v(g,X,0),v(V,X,.5),v(V,X,.5),v(g,X,0),v(x,X,0),v(V,X,.5),v(x,X,0),v(S,X,0)):(g.subVectors(w,I).multiplyScalar(ge).add(I),x.subVectors(w,C).multiplyScalar(ge).add(C),v(I,X,1),v(g,X,1),v(V,X,.5),v(V,X,.5),v(g,X,1),v(x,X,1),v(V,X,.5),v(x,X,1),v(C,X,1));else le?(ie?(v(u,oe,1),v(m,oe,0),v(w,X,0),v(u,oe,1),v(w,X,0),v(L,X,1)):(v(u,oe,1),v(m,oe,0),v(w,X,1),v(m,oe,0),v(L,X,0),v(w,X,1)),ie?S.copy(w):C.copy(w)):ie?(v(y,X,0),v(w,X,0),v(V,X,.5),v(V,X,.5),v(w,X,0),v(S,X,0)):(v(I,X,1),v(w,X,1),v(V,X,.5),v(V,X,.5),v(w,X,1),v(C,X,1)),me=!0;break}}else Z()}else Z();!k&&N===T-1&&J(e[0],b,_,ie,!0,oe),oe=X,K=V,m.copy(S),u.copy(C)}if(!k)J(V,y,I,ie,!1,X);else if(le&&r){let N=w,B=L;be!==ie&&(N=L,B=w),ie?(me||be)&&(B.toArray(r,0),B.toArray(r,9),me&&N.toArray(r,3)):(me||!be)&&(B.toArray(r,3),B.toArray(r,9),me&&N.toArray(r,0))}return te;function M(N,B,W){return W.subVectors(B,N),W.set(-W.y,W.x).normalize()}function v(N,B,W){r&&(r[O]=N.x,r[O+1]=N.y,r[O+2]=0,a&&(a[O]=0,a[O+1]=0,a[O+2]=1),O+=3,o&&(o[U]=B,o[U+1]=W,U+=2)),te+=3}function H(N,B,W,q,F){c.copy(B).sub(N).normalize(),h.copy(W).sub(N).normalize();let R=Math.PI,Y=c.dot(h);Math.abs(Y)<1&&(R=Math.abs(Math.acos(Y))),R/=n,f.copy(B);for(let ge=0,xe=n-1;ge<xe;ge++)d.copy(f).rotateAround(N,R),v(f,q,F),v(d,q,F),v(N,q,.5),f.copy(d);v(d,q,F),v(W,q,F),v(N,q,.5)}function Z(){v(u,oe,1),v(m,oe,0),v(y,X,0),v(u,oe,1),v(y,X,0),v(I,X,1)}function G(N,B,W){B?N?(v(u,oe,1),v(m,oe,0),v(y,X,0),v(u,oe,1),v(y,X,0),v(L,X,1),v(y,W,0),v(S,W,0),v(L,W,.5)):(v(u,oe,1),v(m,oe,0),v(I,X,1),v(m,oe,0),v(L,X,0),v(I,X,1),v(I,W,1),v(L,W,0),v(C,W,1)):N?(v(y,W,0),v(S,W,0),v(V,W,.5)):(v(I,W,1),v(C,W,0),v(V,W,.5))}function re(N,B){B&&(N?(v(u,oe,1),v(m,oe,0),v(y,X,0),v(u,oe,1),v(y,X,0),v(L,X,1),v(y,oe,0),v(V,X,.5),v(L,X,1),v(V,X,.5),v(S,oe,0),v(L,X,1)):(v(u,oe,1),v(m,oe,0),v(I,X,1),v(m,oe,0),v(L,X,0),v(I,X,1),v(I,oe,1),v(L,X,0),v(V,X,.5),v(V,X,.5),v(L,X,0),v(C,oe,1)))}function J(N,B,W,q,F,R){switch(t.strokeLineCap){case"round":F?H(N,W,B,R,.5):H(N,B,W,R,.5);break;case"square":if(F)c.subVectors(B,N),h.set(c.y,-c.x),f.addVectors(c,h).add(N),d.subVectors(h,c).add(N),q?(f.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(f.toArray(r,3),o[7]===1?d.toArray(r,9):f.toArray(r,9),d.toArray(r,0));else{c.subVectors(W,N),h.set(c.y,-c.x),f.addVectors(c,h).add(N),d.subVectors(h,c).add(N);let Y=r.length;q?(f.toArray(r,Y-3),d.toArray(r,Y-6),d.toArray(r,Y-12)):(d.toArray(r,Y-6),f.toArray(r,Y-3),d.toArray(r,Y-12))}break;case"butt":default:break}}function A(N){let B=!1;for(let q=1,F=N.length-1;q<F;q++)if(N[q].distanceTo(N[q+1])<s){B=!0;break}if(!B)return N;let W=[];W.push(N[0]);for(let q=1,F=N.length-1;q<F;q++)N[q].distanceTo(N[q+1])>=s&&W.push(N[q]);return W.push(N[N.length-1]),W}}};window.SlinkGrowthModules={createTile:er,VARIANTS:zc,TILE_SPEC:Bc,disposeTile:tr};window.Slink3D=(()=>{let i=new no,e,t=!1,n=Yh(),s,r,a,o,l,c=new Gs,h=[],f=[],d=[],p,g,x,m=!1,u,b=[],_=[],y=0,I=0,S=(te,O=.55,U={})=>new it({color:te,roughness:O,metalness:0,...U});function C(te,O,U,M,v){let H=new _t;return H.moveTo(te+v,O),H.lineTo(te+U-v,O),H.quadraticCurveTo(te+U,O,te+U,O+v),H.lineTo(te+U,O+M-v),H.quadraticCurveTo(te+U,O+M,te+U-v,O+M),H.lineTo(te+v,O+M),H.quadraticCurveTo(te,O+M,te,O+M-v),H.lineTo(te,O+v),H.quadraticCurveTo(te,O,te+v,O),H}function L(te,O,U=0,M=0,v=0,H=o){let Z=new ke(te,O);return Z.position.set(U,M,v),Z.castShadow=!0,Z.receiveShadow=!0,H.add(Z),Z}function w(te,O,U,M,v,H,Z,G,re=o){return L(new yn(te,O,U,4,M),v,H,Z,G,re)}function T(){let te=document.createElement("canvas");te.width=te.height=128;let O=te.getContext("2d"),U=O.createImageData(128,128),M=73;for(let H=0;H<U.data.length;H+=4){M=M*1664525+1013904223>>>0;let Z=128+(M>>>27)%9;U.data[H]=U.data[H+1]=U.data[H+2]=Z,U.data[H+3]=255}O.putImageData(U,0,0);let v=new pn(te);return v.wrapS=v.wrapT=Oi,v}let k=()=>T();function V(){let te=T(),O=te.image,U=O.getContext("2d");U.fillStyle="#656565";for(let M=0;M<4;M++){let v=M*Math.PI/2+.5;U.save(),U.translate(64+Math.cos(v)*18,64+Math.sin(v)*18),U.rotate(v),U.beginPath(),U.ellipse(0,0,18,9,0,0,Math.PI*2),U.fill(),U.restore()}return U.beginPath(),U.arc(64,64,5,0,Math.PI*2),U.fill(),te.needsUpdate=!0,te}function K(te){let O=document.createElement("canvas");O.width=O.height=128;let U=O.getContext("2d");U.fillStyle="#77421a",U.font="bold 82px Trebuchet MS",U.textAlign="center",U.textBaseline="middle",U.fillText(String(te),64,69);let M=new pn(O);return M.colorSpace=xt,M}function Q(te,O){let U=0;for(let v=0;v<te.length;v++){let H=te[v],Z=te[(v+1)%te.length];U+=H.x*Z.y-Z.x*H.y}let M=U>0?1:-1;return te.map((v,H)=>{let Z=te[(H+te.length-1)%te.length],G=te[(H+1)%te.length],re=v.clone().sub(Z).normalize(),J=G.clone().sub(v).normalize(),A=new pe(re.y,-re.x).multiplyScalar(M),N=new pe(J.y,-J.x).multiplyScalar(M),B=A.clone().add(N).normalize();return v.clone().add(B.multiplyScalar(O/Math.max(.25,B.dot(A))))})}function ne(te){let O=new _t;return te.forEach((U,M)=>M?O.lineTo(U.x,-U.y):O.moveTo(U.x,-U.y)),O.closePath(),O}function ee(te,O){let U=new Set(te),M=[];for(;U.size;){let v=U.values().next().value,H=[v];U.delete(v);for(let Z=0;Z<H.length;Z++){let G=H[Z];for(let re of[G-O,G+O,G%O?G-1:-1,G%O<O-1?G+1:-1])U.has(re)&&(U.delete(re),H.push(re))}M.push(H)}return M}function oe(te,O,U){let M=new Set(te),v=[],H=(G,re)=>G>=0&&re>=0&&G<O&&M.has(re*O+G);for(let G of te){let re=G%O,J=Math.floor(G/O),A=20+re*80,N=20+J*80;H(re,J-1)||v.push([[A,N],[A+80,N]]),H(re+1,J)||v.push([[A+80,N],[A+80,N+80]]),H(re,J+1)||v.push([[A+80,N+80],[A,N+80]]),H(re-1,J)||v.push([[A,N+80],[A,N]])}let Z=[];for(;v.length;){let G=v.shift(),re=G[0],J=[re],A=G[1];for(;A.join()!=re.join();){J.push(A);let N=v.findIndex(B=>B[0].join()==A.join());if(N<0)break;A=v.splice(N,1)[0][1]}J=J.filter((N,B)=>{let W=J[(B+J.length-1)%J.length],q=J[(B+1)%J.length];return!(W[0]===N[0]&&q[0]===N[0]||W[1]===N[1]&&q[1]===N[1])}),Z.push(J.map(N=>new pe(...N)))}return Z.sort((G,re)=>Math.abs(At.area(re))-Math.abs(At.area(G))),Z.map((G,re)=>{let J=Q(G,re?U:-U),A=new _t;return J.forEach((N,B)=>{let W=J[(B+J.length-1)%J.length],q=J[(B+1)%J.length],F=Math.min(10,N.distanceTo(W)/3,N.distanceTo(q)/3),R=N.clone().add(W.clone().sub(N).normalize().multiplyScalar(F)),Y=N.clone().add(q.clone().sub(N).normalize().multiplyScalar(F));B?A.lineTo(R.x,-R.y):A.moveTo(R.x,-R.y),A.quadraticCurveTo(N.x,-N.y,Y.x,-Y.y)}),A.closePath(),A})}function X(){l=document.createElement("canvas"),l.id="terrain3d",l.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(l),s=new ja({canvas:l,alpha:!0,antialias:!0,powerPreference:"high-performance"}),s.setPixelRatio(Math.min(devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.shadowMap.type=na,s.outputColorSpace=xt,s.toneMapping=ha,s.toneMappingExposure=.88,r=new ws,r.add(new Vs("#fff6dc","#a28d6c",1.65));let te=new $i("#fff4dc",3.3);te.position.set(-300,450,750),te.castShadow=!0,te.shadow.mapSize.set(2048,2048),Object.assign(te.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),te.shadow.bias=-3e-4,te.shadow.normalBias=.9,te.shadow.radius=4,r.add(te);let O=new $i("#d4e8ff",.4);O.position.set(500,-100,400),r.add(O),o=new Je,r.add(o),r.add(n.group),e=nu(),e.setSize(90),r.add(e.group),a=new di,a.up.set(0,1,0),a.near=1,a.far=3e3,g=new ResizeObserver(()=>le()),g.observe(document.getElementById("board"));let U=(v,H)=>{let Z=l.getBoundingClientRect();return c.setFromCamera(new pe((v-Z.left)/Z.width*2-1,-(H-Z.top)/Z.height*2+1),a),c.intersectObjects(h,!1)[0]?.object.userData.cell??-1},M=v=>{if(!m)return;let H=u||v,Z=v.clientX-H.clientX,G=v.clientY-H.clientY,re=Math.max(1,Math.ceil(Math.hypot(Z,G)/3));for(let J=1;J<=re;J++){let A=U(H.clientX+Z*J/re,H.clientY+G*J/re);A>=0&&p.onMove(A)}u={clientX:v.clientX,clientY:v.clientY}};l.addEventListener("pointerdown",v=>{v.preventDefault(),l.setPointerCapture(v.pointerId),m=!0,t=U(v.clientX,v.clientY)===(window.SlinkStudyPath||[]).at(-1)||c.intersectObject(e.group,!0).length>0,u=null,M(v),document.getElementById("board").focus({preventScroll:!0})}),l.addEventListener("pointermove",M);for(let v of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(v,()=>{m=!1,t=!1,u=null});l.addEventListener("webglcontextlost",v=>{v.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),l.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function le(){if(!p)return;let te=document.getElementById("board"),O=te.clientWidth,U=te.clientHeight;if(!O||!U)return;s.setSize(O,U,!1);let M=new dn().setFromObject(o);M.max.z=Math.max(M.max.z,60);let v=M.getCenter(new z);a.position.set(v.x,v.y-430,v.z+1250),a.lookAt(v.x,v.y,0),a.updateMatrixWorld();let H=r.children.find(W=>W.isDirectionalLight&&W.castShadow);if(H){let W=Math.max(M.max.x-M.min.x,M.max.y-M.min.y)*.75+60;H.target.position.set(v.x,v.y,0),r.add(H.target),Object.assign(H.shadow.camera,{left:-W,right:W,top:W,bottom:-W}),H.shadow.camera.updateProjectionMatrix()}let Z=a.matrixWorldInverse,G=new pe(1/0,1/0),re=new pe(-1/0,-1/0);for(let W of[M.min.x,M.max.x])for(let q of[M.min.y,M.max.y])for(let F of[M.min.z,M.max.z]){let R=new z(W,q,F).applyMatrix4(Z);G.min(R),re.max(R)}let J=(G.x+re.x)/2,A=(G.y+re.y)/2,N=Math.max((re.y-G.y)/2,(re.x-G.x)/2/(O/U))+13,B=N*O/U;Object.assign(a,{left:J-B,right:J+B,top:A+N,bottom:A-N}),a.updateProjectionMatrix(),s.shadowMap.needsUpdate=!0,ie()}function ie(){s.render(r,a)}function me(te){if(requestAnimationFrame(me),!s||!p||document.hidden){I=te;return}if(te-I<33)return;y+=Math.min((te-I)/1e3,.1),I=te,n.update(p.l,window.SlinkStudyPath||[],window.SlinkRouteMode||"highlight",m,y),l.dataset.routeVisible=String(n.group.visible),l.dataset.routeDots=n.group.children.length;let O=i.sample(te/1e3);e.group.position.set(O.x,O.y,8.5+9.5*(b.find(M=>M.i===O.cell)?.progress||0)),e.group.rotation.z=O.heading,e.group.visible&&e.update(y,0,{active:O.moving,travel:O.travel,celebrationAge:O.celebrationAge,celebrationTurn:O.celebrationTurn,celebrationStyle:"gentle"}),l.dataset.creatureCell=O.cell,l.dataset.creatureMoving=String(O.moving),l.dataset.creatureX=O.x,l.dataset.creatureY=O.y,l.dataset.creatureHeading=O.heading,l.dataset.creatureCelebration=O.celebrationAge;for(let M of _)M.update(y);let U=window.SlinkRouteMode==="highlight"&&window.SlinkBacktrackHighlight?.enabled!==!1&&(t||window.SlinkHighlightPreview)?(window.SlinkStudyPath||[]).at(-2):void 0;l.dataset.highlightedCell=U??"";for(let M of b){qh(M.grown,M.i===U,window.SlinkBacktrackHighlight?.strength??.24),M.meadow?.update(y);let v=Math.min((te-M.changedAt)/M.duration,1);M.progress=M.from+(M.target-M.from)*Math.max(0,v);let H=M.progress;M.grown.scale.z=(8.5+9.5*H)/18,M.grown.position.z=0,M.grown.visible=H>0,M.grown.traverse(Z=>{Z.isMesh&&(Z.material.transparent=H<1,Z.material.opacity=H,Z.castShadow=H>.7)}),M.earth.visible=H<1}for(let M of d){let v=b.find(H=>H.i===M.i);M.goal.group.position.z=8.5+9.5*(v?.progress||0),M.goal.update(y,.033)}s.shadowMap.needsUpdate=!0,ie()}requestAnimationFrame(me);function be(te,O,U){p={l:te,onMove:U};let M=new Set,v=new Set,H=new Set;o.traverse(Y=>{Y.geometry&&M.add(Y.geometry);for(let ge of[].concat(Y.material||[])){v.add(ge);for(let xe of Object.values(ge))xe?.isTexture&&H.add(xe)}}),o.clear(),M.forEach(Y=>Y.dispose()),v.forEach(Y=>Y.dispose()),H.forEach(Y=>Y.dispose()),h=[],f=[],d=[],b=[],_=[];let Z=new nr,G=Z.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+O+'"/></svg>'),re=nr.createShapes(G.paths[0])[0].getPoints(24);re.pop();let J=ne(Q(re,11)),A=S("#f6dfb5",.62,{bumpMap:k(),bumpScale:.18,side:Ot}),N=[...te.water||[],...te.lava||[]],B=Y=>({x:Y%te.n*80+60,y:-(Math.floor(Y/te.n)*80+60)}),W=[];for(let[Y,ge]of[["water",te.water||[]],["lava",te.lava||[]]])for(let xe of ee(ge,te.n)){let P=oe(xe,te.n,7);J.holes.push(P[0]),W.push({type:Y,group:xe,shapes:P})}let q=new Gt(J,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});L(q,A,0,0,-24);for(let Y of ee(te.solution,te.n)){let ge=oe(Y,te.n,0),xe=ge[0];xe.holes.push(...ge.slice(1)),L(new Bs(xe),S("#87623d",.8),0,0,3.2)}for(let Y of te.solution){let ge=B(Y);b.push({i:Y,p:ge,id:null,group:null})}for(let{type:Y,group:ge,shapes:xe}of W){let P=B(ge[0]),E=window.SlinkCatalogueDesign,$=gu(Y,{style:Y==="water"?E?.waterStyle||"sway":E?.lavaStyle||"bubbles",center:[P.x,P.y]});_.push($);let ce=xe[0];ce.holes.push(...xe.slice(1)),L(new Gt(ce,{depth:3,bevelEnabled:!1,curveSegments:20}),$.material,0,0,-15)}let F=du(te),R=new Map;for(let Y of te.stones||[]){let ge=F.stones[Y];R.has(ge)||R.set(ge,hu(ge,{seed:F.seed}));let xe=R.get(ge).group.clone(!0),P=B(Y);xe.position.set(P.x,P.y,0),xe.userData.cell=Y,o.add(xe),xe.traverse(E=>{E.isMesh&&(E.userData.cell=-1,h.push(E))})}if(te.fence){let Y=Zh({n:te.n,walls:te.walls,origin:[60,-60],style:te.fence.style,design:te.fence.design});o.add(Y.group)}else for(let[Y,ge]of te.walls){let xe=B(Y),P=B(ge);w(xe.x===P.x?53:9,xe.y===P.y?53:9,18,3,S("#a49983",.85),(xe.x+P.x)/2,(xe.y+P.y)/2,17)}for(let[Y,ge]of te.marks.entries()){let xe=B(ge),P=ou({species:F.flowers[Y],number:Y+1,state:Y===0?"next":"closed",layout:"compact"});P.group.rotation.x=Math.PI/2,P.group.position.set(xe.x,xe.y,8.5),o.add(P.group),d.push({i:ge,goal:P})}s.shadowMap.needsUpdate=!0,le()}return{diagnostics(){return s?{textures:s.info.memory.textures,geometries:s.info.memory.geometries,programs:s.info.programs.length,flowers:d.map(te=>te.goal.group.userData.species),bloomsReady:d.every(te=>te.goal.state==="bloom"&&te.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:o.children.filter(te=>te.userData.style&&te.userData.walkable===!1).map(te=>te.userData.style),fence:p?.l.fence?{...p.l.fence,spans:o.getObjectByName("wood-fence")?.children.filter(te=>te.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:l.dataset.creatureCell,moving:l.dataset.creatureMoving,heading:l.dataset.creatureHeading,celebrationAge:l.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(te,O,U,M){try{s||X(),p?.l!==te&&be(te,U,M),window.SlinkStudyPath=[...O],i.sync(te,O,performance.now()/1e3);let v=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==v.palette&&e.setPalette(v.palette),e.setSize(v.size),e.group.visible=v.enabled!==!1,l.dataset.creatureVisible=String(e.group.visible);let H=te.marks.find(Z=>!O.includes(Z));for(let Z of b){if(!Z.group){if(Z.earth=er("earth-loam",{seed:73+Z.i*19}),Z.meadow=pu(te.meadowVariants?.[Z.i]||"classic",{seed:(te.meadowSeed||73)+Z.i*19}),Z.grown=Z.meadow.group,te.marks.includes(Z.i))for(let re of[...Z.grown.children])!re.userData.surface&&re.position.x>0&&re.position.y<-3&&Z.grown.remove(re);Z.group=Z.earth;for(let re of[Z.earth,Z.grown])re.position.set(Z.p.x,Z.p.y,0),o.add(re),re.traverse(J=>{J.isMesh&&J.userData.surface&&(J.userData.cell=Z.i,h.push(J))});Z.progress=0,Z.target=0,Z.from=0,Z.changedAt=performance.now(),Z.duration=300,Z.grown.visible=!1}let G=O.includes(Z.i)?1:0;G!==Z.target&&(Z.from=Z.progress,Z.target=G,Z.changedAt=performance.now(),Z.duration=G?300:180)}for(let Z of d){Z.goal.setState(O.includes(Z.i)?"bloom":Z.i===H?"next":"closed"),Z.goal.setSize(window.SlinkMarkerSize||27);let G=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};Z.goal.setInsects(G.enabled),Z.goal.setVisitorSize("bee",G.bee),Z.goal.setVisitorSize("bumblebee",G.bumblebee)}s.shadowMap.needsUpdate=!0,ie()}catch(v){console.error("3D renderer:",v),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
