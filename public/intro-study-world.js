(()=>{var Ll=0,Ka=1,Dl=2;var ja=1,io=2,xn=3,Rn=0,Bt=1,Vt=2,Dn=0,ri=1,Qa=2,ec=3,tc=4,Ul=5,Xn=100,Nl=101,Fl=102,Bl=103,Ol=104,zl=200,kl=201,Hl=202,Vl=203,Ir=204,Pr=205,Gl=206,Wl=207,Xl=208,ql=209,Yl=210,Zl=211,Jl=212,$l=213,Kl=214,so=0,ro=1,oo=2,oi=3,ao=4,co=5,lo=6,ho=7,nc=0,jl=1,Ql=2,Un=0,eh=1,th=2,nh=3,uo=4,ih=5,sh=6,rh=7;var ic=300,mi=301,gi=302,fo=303,po=304,Xs=306,Oi=1e3,Wn=1001,Lr=1002,Ht=1003,oh=1004;var qs=1005;var Dt=1006,mo=1007;var $n=1008;var fn=1009,sc=1010,rc=1011,Ki=1012,go=1013,Kn=1014,_n=1015,ji=1016,xo=1017,_o=1018,Qi=1020,oc=35902,ac=35899,cc=1021,lc=1022,nn=1023,zi=1026,es=1027,hc=1028,yo=1029,uc=1030,vo=1031;var Mo=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,bo=35840,So=35841,Eo=35842,wo=35843,To=36196,Ao=37492,Ro=37496,Co=37808,Io=37809,Po=37810,Lo=37811,Do=37812,Uo=37813,No=37814,Fo=37815,Bo=37816,Oo=37817,zo=37818,ko=37819,Ho=37820,Vo=37821,Go=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,Zo=36285,Jo=36286;var gs=2300,Dr=2301,Cr=2302,Ba=2400,Oa=2401,za=2402;var ah=3200,ch=3201;var fc=0,lh=1,Nn="",_t="srgb",ai="srgb-linear",xs="linear",st="srgb";var si=7680;var ka=519,hh=512,uh=513,fh=514,dc=515,dh=516,ph=517,mh=518,gh=519,Ha=35044;var pc="300 es",cn=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=1234567,fs=Math.PI/180,ki=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Ou(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zu(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function ku(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function Hu(i,e=1){return e-Math.abs(mc(i,e*2)-e)}function Vu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xu(i,e){return i+Math.random()*(e-i)}function qu(i){return i*(.5-Math.random())}function Yu(i){i!==void 0&&(tl=i);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zu(i){return i*fs}function Ju(i){return i*ki}function $u(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot={DEG2RAD:fs,RAD2DEG:ki,generateUUID:xi,clamp:Ke,euclideanModulo:mc,mapLinear:Ou,inverseLerp:zu,lerp:ds,damp:ku,pingpong:Hu,smoothstep:Vu,smootherstep:Gu,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Yu,degToRad:Zu,radToDeg:Ju,isPowerOfTwo:$u,ceilPowerOfTwo:Ku,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Qu,normalize:Lt,denormalize:Fi},_e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==d||c!==p||h!==g){let m=1-a,u=l*d+c*p+h*g+f*x,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let C=Math.sqrt(y),S=Math.atan2(C,u*b);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}let v=a*b;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,f=f*m+x*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-a*p,e[t+2]=c*g+h*p+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new B,nl=new In,Ye=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],u=s[6],b=s[1],y=s[4],v=s[7],C=s[2],S=s[5],I=s[8];return r[0]=o*x+a*b+l*C,r[3]=o*m+a*y+l*S,r[6]=o*u+a*v+l*I,r[1]=c*x+h*b+f*C,r[4]=c*m+h*y+f*S,r[7]=c*u+h*v+f*I,r[2]=d*x+p*b+g*C,r[5]=d*m+p*y+g*S,r[8]=d*u+p*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fa=new Ye;function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){let i=ys("canvas");return i.style.display="block",i}var il={};function Hi(i){i in il||(il[i]=!0,console.warn(i))}function _h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:st,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var nt=ef();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Ur=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=ys("canvas")),Ei.width=e.width,Ei.height=e.height;let s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,pa=new B,Ut=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Dt,o=$n,a=nn,l=fn,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=xi(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ic;Ut.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(p+1)/2,C=(u+1)/2,S=(h+d)/4,I=(f+x)/4,P=(g+m)/4;return y>v&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=I/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=I/r,s=P/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Nr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ar.subVectors(this.max,os),wi.subVectors(e.a,os),Ti.subVectors(e.b,os),Ai.subVectors(e.c,os),Bn.subVectors(Ti,wi),On.subVectors(Ai,Ti),ei.subVectors(wi,Ai);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!ma(t,wi,Ti,Ai,ar)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,wi,Ti,Ai,ar))?!1:(cr.crossVectors(Bn,On),t=[cr.x,cr.y,cr.z],ma(t,wi,Ti,Ai,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new B,new B,new B,new B,new B,new B,new B,new B],rn=new B,or=new pn,wi=new B,Ti=new B,Ai=new B,Bn=new B,On=new B,ei=new B,os=new B,ar=new B,cr=new B,ti=new B;function ma(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sf=new pn,as=new B,ga=new B,ci=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(ga)),this.expandByPoint(as.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new B,xa=new B,lr=new B,zn=new B,_a=new B,hr=new B,ya=new B,Gi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xa.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=zn.dot(this.direction),l=-zn.dot(lr),c=zn.lengthSq(),h=Math.abs(1-o*o),f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xa).addScaledVector(lr,d),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),hr.subVectors(n,e),ya.crossVectors(_a,hr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);let l=a*this.direction.dot(hr.crossVectors(zn,hr));if(l<0)return null;let c=a*this.direction.dot(_a.cross(zn));if(c<0||l+c>o)return null;let h=-a*zn.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,p,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,f,d,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,g=c*h,x=c*f;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,g=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,of)}lookAt(e,t,n){let s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),kn.crossVectors(n,Xt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),kn.crossVectors(n,Xt)),kn.normalize(),ur.crossVectors(Xt,kn),s[0]=kn.x,s[4]=ur.x,s[8]=Xt.x,s[1]=kn.y,s[5]=ur.y,s[9]=Xt.y,s[2]=kn.z,s[6]=ur.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],y=n[7],v=n[11],C=n[15],S=s[0],I=s[4],P=s[8],E=s[12],T=s[1],F=s[5],O=s[9],Z=s[13],te=s[2],oe=s[6],re=s[10],ue=s[14],X=s[3],he=s[7],se=s[11],ve=s[15];return r[0]=o*S+a*T+l*te+c*X,r[4]=o*I+a*F+l*oe+c*he,r[8]=o*P+a*O+l*re+c*se,r[12]=o*E+a*Z+l*ue+c*ve,r[1]=h*S+f*T+d*te+p*X,r[5]=h*I+f*F+d*oe+p*he,r[9]=h*P+f*O+d*re+p*se,r[13]=h*E+f*Z+d*ue+p*ve,r[2]=g*S+x*T+m*te+u*X,r[6]=g*I+x*F+m*oe+u*he,r[10]=g*P+x*O+m*re+u*se,r[14]=g*E+x*Z+m*ue+u*ve,r[3]=b*S+y*T+v*te+C*X,r[7]=b*I+y*F+v*oe+C*he,r[11]=b*P+y*O+v*re+C*se,r[15]=b*E+y*Z+v*ue+C*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-t*l*f+t*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=f*m*c-x*d*c+x*l*p-a*m*p-f*l*u+a*d*u,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*u-o*d*u,v=h*x*c-g*f*c+g*a*p-o*x*p-h*a*u+o*f*u,C=g*f*l-h*x*l-g*a*d+o*x*d+h*a*m-o*f*m,S=t*b+n*y+s*v+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/S;return e[0]=b*I,e[1]=(x*d*r-f*m*r-x*s*p+n*m*p+f*s*u-n*d*u)*I,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*u+n*l*u)*I,e[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*p-n*l*p)*I,e[4]=y*I,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*u+t*d*u)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*u-t*l*u)*I,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*I,e[8]=v*I,e[9]=(g*f*r-h*x*r-g*n*p+t*x*p+h*n*u-t*f*u)*I,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*u+t*a*u)*I,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*p-t*a*p)*I,e[12]=C*I,e[13]=(h*x*s-g*f*s+g*n*d-t*x*d-h*n*m+t*f*m)*I,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*I,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,p=r*h,g=r*f,x=o*h,m=o*f,u=a*f,b=l*c,y=l*h,v=l*f,C=n.x,S=n.y,I=n.z;return s[0]=(1-(x+u))*C,s[1]=(p+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(d+u))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+y)*I,s[9]=(m-b)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);let c=1/r,h=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===cn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===cn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new B,on=new ft,rf=new B(0,0,0),of=new B(1,1,1),kn=new B,ur=new B,Xt=new B,ol=new ft,al=new In,ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,cl=new B,Ci=new In,Sn=new ft,fr=new B,cs=new B,cf=new B,lf=new In,ll=new B(1,0,0),hl=new B(0,1,0),ul=new B(0,0,1),fl={type:"added"},hf={type:"removed"},Ii={type:"childadded",child:null},va={type:"childremoved",child:null},wt=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new ln,n=new In,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ye}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(cs,fr,this.up):Sn.lookAt(fr,cs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new B,En=new B,Ma=new B,wn=new B,Pi=new B,Li=new B,dl=new B,ba=new B,Sa=new B,Ea=new B,wa=new gt,Ta=new gt,Aa=new gt,Gn=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),En.subVectors(n,t),Ma.subVectors(e,t);let o=an.dot(an),a=an.dot(En),l=an.dot(Ma),c=En.dot(En),h=En.dot(Ma),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return wa.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),wa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Aa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),En.subVectors(e,t),an.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Li.subVectors(r,n),ba.subVectors(e,n);let l=Pi.dot(ba),c=Li.dot(ba);if(l<=0&&c<=0)return t.copy(n);Sa.subVectors(e,s);let h=Pi.dot(Sa),f=Li.dot(Sa);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);Ea.subVectors(e,r);let p=Pi.dot(Ea),g=Li.dot(Ea);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Li,a);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return dl.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(dl,a);let u=1/(m+x+d);return o=x*u,a=d*u,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=mc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return nt.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Rt.copy(this),t);let n=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=_t){nt.workingToColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,s=Rt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(dr);let n=ds(Hn.h,dr.h,t),s=ds(Hn.s,dr.s,t),r=ds(Hn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new He;He.NAMES=yh;var uf=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Pr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new B,pr=new _e,ff=0,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var Ms=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bs=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},df=0,jt=new ft,Ca=new wt,Di=new B,qt=new pn,ls=new pn,Et=new B,lt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?bs:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,ls.min),qt.expandByPoint(Et),Et.addVectors(qt.max,ls.max),qt.expandByPoint(Et)):(qt.expandByPoint(ls.min),qt.expandByPoint(ls.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Et.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(e,c),Et.add(Di)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;let c=new B,h=new B,f=new B,d=new _e,p=new _e,g=new _e,x=new B,m=new B;function u(P,E,T){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,T),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(F),a[P].add(x),a[E].add(x),a[T].add(x),l[P].add(m),l[E].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,E=b.length;P<E;++P){let T=b[P],F=T.start,O=T.count;for(let Z=F,te=F+O;Z<te;Z+=3)u(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let y=new B,v=new B,C=new B,S=new B;function I(P){C.fromBufferAttribute(s,P),S.copy(C);let E=a[P];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),v.crossVectors(S,E);let F=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,F)}for(let P=0,E=b.length;P<E;++P){let T=b[P],F=T.start,O=T.count;for(let Z=F,te=F+O;Z<te;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new yt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pl=new ft,ni=new Gi,mr=new ci,ml=new B,gr=new B,xr=new B,_r=new B,Ia=new B,yr=new B,gl=new B,vr=new B,Oe=class extends wt{constructor(e=new lt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Ia.fromBufferAttribute(f,e),o?yr.addScaledVector(Ia,h):yr.addScaledVector(Ia.sub(t),h))}t.add(yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(mr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(mr,ml)===null||ni.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),ni.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,C=y;v<C;v+=3){let S=a.getX(v),I=a.getX(v+1),P=a.getX(v+2);s=Mr(this,u,e,n,c,h,f,S,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Mr(this,o,e,n,c,h,f,b,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,C=y;v<C;v+=3){let S=v,I=v+1,P=v+2;s=Mr(this,u,e,n,c,h,f,S,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=m,y=m+1,v=m+2;s=Mr(this,o,e,n,c,h,f,b,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pf(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Rn,a),l===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function Mr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,xr),i.getVertexPosition(c,_r);let h=pf(i,e,t,n,gr,xr,_r,gl);if(h){let f=new B;Gn.getBarycoord(gl,gr,xr,_r,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,l,c,f,new _e)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,l,c,f,new _e)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Gn.getNormal(gr,xr,_r,d.normal),h.face=d,h.barycoord=f}return h}var qn=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function g(x,m,u,b,y,v,C,S,I,P,E){let T=v/I,F=C/P,O=v/2,Z=C/2,te=S/2,oe=I+1,re=P+1,ue=0,X=0,he=new B;for(let se=0;se<re;se++){let ve=se*F-Z;for(let Ae=0;Ae<oe;Ae++){let Ue=Ae*T-O;he[x]=Ue*b,he[m]=ve*y,he[u]=te,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[u]=S>0?1:-1,h.push(he.x,he.y,he.z),f.push(Ae/I),f.push(1-se/P),ue+=1}}for(let se=0;se<P;se++)for(let ve=0;ve<I;ve++){let Ae=d+ve+oe*se,Ue=d+ve+oe*(se+1),J=d+(ve+1)+oe*(se+1),V=d+(ve+1)+oe*se;l.push(Ae,Ue,V),l.push(Ue,J,V),X+=6}a.addGroup(p,X,E),p+=X,d+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=_i(i[t]);for(let s in n)e[s]=n[s]}return e}function mf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var vh={clone:_i,merge:It},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ss=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new B,xl=new _e,_l=new _e,kt=class extends Ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,_l),t.subVectors(_l,xl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ni=1,Br=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);let l=new kt(Ui,Ni,e,t);l.layers=this.layers,this.add(l);let c=new kt(Ui,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Ut{constructor(e=[],t=mi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Dt),new Br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ve=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yn=class extends Ut{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ht,h=Ht,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=new B,yf=new B,vf=new Ye,Qt=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pa.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new ci,Mf=new _e(.5,.5),br=new B,qi=class{constructor(e=new Qt,t=new Qt,n=new Qt,s=new Qt,r=new Qt,o=new Qt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],b=r[12],y=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,p-h,u-g,C-b).normalize(),s[1].setComponents(c+o,p+h,u+g,C+b).normalize(),s[2].setComponents(c+a,p+f,u+x,C+y).normalize(),s[3].setComponents(c-a,p-f,u-x,C-y).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,p-d,u-m,C-v).normalize();else if(s[4].setComponents(c-l,p-d,u-m,C-v).normalize(),t===cn)s[5].setComponents(c+l,p+d,u+m,C+v).normalize();else if(t===_s)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=Mf.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zr=new B,kr=new B,yl=new ft,hs=new Gi,Sr=new ci,La=new B,vl=new B,Hr=class extends wt{constructor(e=new lt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zr.fromBufferAttribute(t,s-1),kr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zr.distanceTo(kr);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;yl.copy(s).invert(),hs.copy(e.ray).applyMatrix4(yl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let u=h.getX(x),b=h.getX(x+1),y=Er(this,e,hs,l,u,b,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),u=Er(this,e,hs,l,x,m,g-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let u=Er(this,e,hs,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Er(this,e,hs,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Er(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(zr.fromBufferAttribute(a,s),kr.fromBufferAttribute(a,r),t.distanceSqToSegment(zr,kr,La,vl)>n)return;La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:vl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ml=new B,bl=new B,Ts=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ml.fromBufferAttribute(t,s),bl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ml.distanceTo(bl);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mn=class extends Ut{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Ut{constructor(e,t,n=Kn,s,r,o,a=Ht,l=Ht,c,h=zi,f=1){if(h!==zi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var tn=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,x=[],m=n/2,u=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function b(){let v=new B,C=new B,S=0,I=(t-e)/n;for(let P=0;P<=r;P++){let E=[],T=P/r,F=T*(t-e)+e;for(let O=0;O<=s;O++){let Z=O/s,te=Z*l+a,oe=Math.sin(te),re=Math.cos(te);C.x=F*oe,C.y=-T*n+m,C.z=F*re,f.push(C.x,C.y,C.z),v.set(oe,I,re).normalize(),d.push(v.x,v.y,v.z),p.push(Z,1-T),E.push(g++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let T=x[E][P],F=x[E+1][P],O=x[E+1][P+1],Z=x[E][P+1];(e>0||E!==0)&&(h.push(T,F,Z),S+=3),(t>0||E!==r-1)&&(h.push(F,O,Z),S+=3)}c.addGroup(u,S,0),u+=S}function y(v){let C=g,S=new _e,I=new B,P=0,E=v===!0?e:t,T=v===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;let F=g;for(let O=0;O<=s;O++){let te=O/s*l+a,oe=Math.cos(te),re=Math.sin(te);I.x=E*re,I.y=m*T,I.z=E*oe,f.push(I.x,I.y,I.z),d.push(0,T,0),S.x=oe*.5+.5,S.y=re*.5*T+.5,p.push(S.x,S.y),g++}for(let O=0;O<s;O++){let Z=C+O,te=F+O;v===!0?h.push(te,te+1,Z):h.push(te+1,te,Z),P+=3}c.addGroup(u,P,v===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class i extends tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],o=[],a=new B,l=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Yt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vr=class extends Zi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wr=new B,Da=new _c,Ua=new _c,Na=new _c,Nt=class extends Yt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),c=wr);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Da.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,m),Ua.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,m),Na.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ua.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Na.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Da.calc(l),Ua.calc(l),Na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sl(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function bf(i,e){let t=1-i;return t*t*e}function Sf(i,e){return 2*(1-i)*i*e}function Ef(i,e){return i*i*e}function ps(i,e,t,n){return bf(i,e)+Sf(i,t)+Ef(i,n)}function wf(i,e){let t=1-i;return t*t*t*e}function Tf(i,e){let t=1-i;return 3*t*t*i*e}function Af(i,e){return 3*(1-i)*i*i*e}function Rf(i,e){return i*i*i*e}function ms(i,e,t,n,s){return wf(i,e)+Tf(i,t)+Af(i,n)+Rf(i,s)}var Is=class extends Yt{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ln=class extends Yt{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Yt{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Yt{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Yt{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Yt{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Sl(a,l.x,c.x,h.x,f.x),Sl(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},Wr=Object.freeze({__proto__:null,ArcCurve:Vr,CatmullRomCurve3:Nt,CubicBezierCurve:Is,CubicBezierCurve3:Ln,EllipseCurve:Zi,LineCurve:Ps,LineCurve3:Gr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Ds,SplineCurve:Us}),Xr=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wr[s.type]().fromJSON(s))}return this}},gn=class extends Xr{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Is(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Zi(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vt=class extends gn{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gn().fromJSON(s))}return this}};function Cf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Uf(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ns(r,o,t,a,l,c,0),o}function Mh(i,e,t,n,s){let r;if(s===Xf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=El(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=El(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Bs(r),r=r.next),r}function hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||mt(t.prev,t,t.next)===0)){if(Bs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,r,o){if(!i)return;!o&&r&&zf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Pf(i,n,s,r):If(i)){e.push(l.i,i.i,c.i),Bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Lf(hi(i),e),Ns(i,e,t,n,s,r,2)):o===2&&Df(i,e,t,n,s,r):Ns(hi(i),e,t,n,s,r,1);break}}}function If(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&us(s,a,r,l,o,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,f,d),x=Math.max(a,l,c),m=Math.max(h,f,d),u=Va(p,g,e,t,n),b=Va(x,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=u&&v&&v.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,l,f,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,l,f,c,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=u;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,l,f,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,l,f,c,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&Sh(n,t,t.next,s)&&Fs(n,s)&&Fs(s,n)&&(e.push(n.i,t.i,s.i),Bs(t),Bs(t.next),t=i=s),t=t.next}while(t!==i);return hi(t)}function Df(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vf(o,a)){let l=Eh(o,a);o=hi(o,o.next),l=hi(l,l.next),Ns(o,e,t,n,s,r,0),Ns(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Uf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Mh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hf(c))}s.sort(Nf);for(let r=0;r<s.length;r++)t=Ff(s[r],t);return t}function Nf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ff(i,e){let t=Bf(i,e);if(!t)return e;let n=Eh(t,i);return hi(n,n.next),hi(t,t.next)}function Bf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Fs(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Of(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Of(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function zf(i,e,t,n){let s=i;do s.z===0&&(s.z=Va(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kf(s)}function kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Va(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&bh(i,e,t,n,s,r,o,a)}function Vf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gf(i,e)&&(Fs(i,e)&&Fs(e,i)&&Wf(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Ji(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function Sh(i,e,t,n){let s=Ar(mt(i,e,t)),r=Ar(mt(i,e,n)),o=Ar(mt(t,n,i)),a=Ar(mt(t,n,e));return!!(s!==r&&o!==a||s===0&&Tr(i,t,e)||r===0&&Tr(i,n,e)||o===0&&Tr(t,i,n)||a===0&&Tr(t,e,n))}function Tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ar(i){return i>0?1:i<0?-1:0}function Gf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fs(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Wf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Eh(i,e){let t=Ga(i.i,i.x,i.y),n=Ga(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function El(i,e,t,n){let s=Ga(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wa=class{static triangulate(e,t,n=2){return Cf(e,t,n)}},Ct=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wl(e),Tl(n,e);let o=e.length;t.forEach(wl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Tl(n,t[l]);let a=Wa.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zt=class i extends lt{constructor(e=new vt([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:qf,y,v=!1,C,S,I,P;u&&(y=u.getSpacedPoints(h),v=!0,d=!1,C=u.computeFrenetFrames(h,!1),S=new B,I=new B,P=new B),d||(m=0,p=0,g=0,x=0);let E=a.extractPoints(c),T=E.shape,F=E.holes;if(!Ct.isClockWise(T)){T=T.reverse();for(let Y=0,$=F.length;Y<$;Y++){let k=F[Y];Ct.isClockWise(k)&&(F[Y]=k.reverse())}}function Z(Y){let k=10000000000000001e-36,H=Y[0];for(let L=1;L<=Y.length;L++){let _=L%Y.length,N=Y[_],Q=N.x-H.x,ce=N.y-H.y,w=Q*Q+ce*ce,M=Math.max(Math.abs(N.x),Math.abs(N.y),Math.abs(H.x),Math.abs(H.y)),z=k*M*M;if(w<=z){Y.splice(_,1),L--;continue}H=N}}Z(T),F.forEach(Z);let te=F.length,oe=T;for(let Y=0;Y<te;Y++){let $=F[Y];T=T.concat($)}function re(Y,$,k){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector($,k)}let ue=T.length;function X(Y,$,k){let H,L,_,N=Y.x-$.x,Q=Y.y-$.y,ce=k.x-Y.x,w=k.y-Y.y,M=N*N+Q*Q,z=N*w-Q*ce;if(Math.abs(z)>Number.EPSILON){let q=Math.sqrt(M),ne=Math.sqrt(ce*ce+w*w),W=$.x-Q/q,de=$.y+N/q,ee=k.x-w/ne,ye=k.y+ce/ne,be=((ee-W)*w-(ye-de)*ce)/(N*w-Q*ce);H=W+N*be-Y.x,L=de+Q*be-Y.y;let fe=H*H+L*L;if(fe<=2)return new _e(H,L);_=Math.sqrt(fe/2)}else{let q=!1;N>Number.EPSILON?ce>Number.EPSILON&&(q=!0):N<-Number.EPSILON?ce<-Number.EPSILON&&(q=!0):Math.sign(Q)===Math.sign(w)&&(q=!0),q?(H=-Q,L=N,_=Math.sqrt(M)):(H=N,L=Q,_=Math.sqrt(M/2))}return new _e(H/_,L/_)}let he=[];for(let Y=0,$=oe.length,k=$-1,H=Y+1;Y<$;Y++,k++,H++)k===$&&(k=0),H===$&&(H=0),he[Y]=X(oe[Y],oe[k],oe[H]);let se=[],ve,Ae=he.concat();for(let Y=0,$=te;Y<$;Y++){let k=F[Y];ve=[];for(let H=0,L=k.length,_=L-1,N=H+1;H<L;H++,_++,N++)_===L&&(_=0),N===L&&(N=0),ve[H]=X(k[H],k[_],k[N]);se.push(ve),Ae=Ae.concat(ve)}let Ue;if(m===0)Ue=Ct.triangulateShape(oe,F);else{let Y=[],$=[];for(let k=0;k<m;k++){let H=k/m,L=p*Math.cos(H*Math.PI/2),_=g*Math.sin(H*Math.PI/2)+x;for(let N=0,Q=oe.length;N<Q;N++){let ce=re(oe[N],he[N],_);j(ce.x,ce.y,-L),H===0&&Y.push(ce)}for(let N=0,Q=te;N<Q;N++){let ce=F[N];ve=se[N];let w=[];for(let M=0,z=ce.length;M<z;M++){let q=re(ce[M],ve[M],_);j(q.x,q.y,-L),H===0&&w.push(q)}H===0&&$.push(w)}}Ue=Ct.triangulateShape(Y,$)}let J=Ue.length,V=g+x;for(let Y=0;Y<ue;Y++){let $=d?re(T[Y],Ae[Y],V):T[Y];v?(I.copy(C.normals[0]).multiplyScalar($.x),S.copy(C.binormals[0]).multiplyScalar($.y),P.copy(y[0]).add(I).add(S),j(P.x,P.y,P.z)):j($.x,$.y,0)}for(let Y=1;Y<=h;Y++)for(let $=0;$<ue;$++){let k=d?re(T[$],Ae[$],V):T[$];v?(I.copy(C.normals[Y]).multiplyScalar(k.x),S.copy(C.binormals[Y]).multiplyScalar(k.y),P.copy(y[Y]).add(I).add(S),j(P.x,P.y,P.z)):j(k.x,k.y,f/h*Y)}for(let Y=m-1;Y>=0;Y--){let $=Y/m,k=p*Math.cos($*Math.PI/2),H=g*Math.sin($*Math.PI/2)+x;for(let L=0,_=oe.length;L<_;L++){let N=re(oe[L],he[L],H);j(N.x,N.y,f+k)}for(let L=0,_=F.length;L<_;L++){let N=F[L];ve=se[L];for(let Q=0,ce=N.length;Q<ce;Q++){let w=re(N[Q],ve[Q],H);v?j(w.x,w.y+y[h-1].y,y[h-1].x+k):j(w.x,w.y,f+k)}}}R(),A();function R(){let Y=s.length/3;if(d){let $=0,k=ue*$;for(let H=0;H<J;H++){let L=Ue[H];G(L[2]+k,L[1]+k,L[0]+k)}$=h+m*2,k=ue*$;for(let H=0;H<J;H++){let L=Ue[H];G(L[0]+k,L[1]+k,L[2]+k)}}else{for(let $=0;$<J;$++){let k=Ue[$];G(k[2],k[1],k[0])}for(let $=0;$<J;$++){let k=Ue[$];G(k[0]+ue*h,k[1]+ue*h,k[2]+ue*h)}}n.addGroup(Y,s.length/3-Y,0)}function A(){let Y=s.length/3,$=0;ie(oe,$),$+=oe.length;for(let k=0,H=F.length;k<H;k++){let L=F[k];ie(L,$),$+=L.length}n.addGroup(Y,s.length/3-Y,1)}function ie(Y,$){let k=Y.length;for(;--k>=0;){let H=k,L=k-1;L<0&&(L=Y.length-1);for(let _=0,N=h+m*2;_<N;_++){let Q=ue*_,ce=ue*(_+1),w=$+H+Q,M=$+L+Q,z=$+L+ce,q=$+H+ce;pe(w,M,z,q)}}}function j(Y,$,k){l.push(Y),l.push($),l.push(k)}function G(Y,$,k){xe(Y),xe($),xe(k);let H=s.length/3,L=b.generateTopUV(n,s,H-3,H-2,H-1);D(L[0]),D(L[1]),D(L[2])}function pe(Y,$,k,H){xe(Y),xe($),xe(H),xe($),xe(k),xe(H);let L=s.length/3,_=b.generateSideWallUV(n,s,L-6,L-3,L-2,L-1);D(_[0]),D(_[1]),D(_[3]),D(_[1]),D(_[2]),D(_[3])}function xe(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function D(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wr[s.type]().fromJSON(s)),new i(n,e.options)}},qf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-f),new _e(d,1-g),new _e(x,1-u)]:[new _e(a,1-l),new _e(h,1-f),new _e(p,1-g),new _e(m,1-u)]}};function Yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let b=u*d-o;for(let y=0;y<c;y++){let v=y*f-r;g.push(v,-b,0),x.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){let y=b+c*u,v=b+c*(u+1),C=b+1+c*(u+1),S=b+1+c*u;p.push(y,v,S),p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Os=class i extends lt{constructor(e=new vt([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(h){let f=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Ct.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){let b=g[m];Ct.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=Ct.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){let b=g[m];p=p.concat(b)}for(let m=0,u=p.length;m<u;m++){let b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,u=x.length;m<u;m++){let b=x[m],y=b[0]+f,v=b[1]+f,C=b[2]+f;n.push(y,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Zf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Zf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ct=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new B,d=new B,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let b=[],y=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let S=C/t;f.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(S+v,1-y),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let y=h[u][b+1],v=h[u][b],C=h[u+1][b],S=h[u+1][b+1];(u!==0||o>0)&&p.push(y,v,S),(u!==n-1||l<Math.PI)&&p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ft=class i extends lt{constructor(e=new Ds(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new _e,h=new B,f=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),b(),u()}function m(y){h=e.getPointAt(y/t,h);let v=o.normals[y],C=o.binormals[y];for(let S=0;S<=s;S++){let I=S/s*Math.PI*2,P=Math.sin(I),E=-Math.cos(I);l.x=E*v.x+P*C.x,l.y=E*v.y+P*C.y,l.z=E*v.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let C=(s+1)*(y-1)+(v-1),S=(s+1)*y+(v-1),I=(s+1)*y+v,P=(s+1)*(y-1)+v;g.push(C,S,P),g.push(S,I,P)}}function b(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var je=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zr=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ba,endingEnd:Ba}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oa:r=e,a=2*t-n;break;case za:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oa:o=e,l=2*n-t;break;case za:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+b*o[c+C]+y*o[l+C]+v*o[f+C];return r}},Jr=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},$r=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Dr;var Zn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var jr=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},zs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="vector";var Xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},to=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wh=new to,di=class{constructor(e){this.manager=e!==void 0?e:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},qa=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xa.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(u){b();function b(){f.read().then(({done:y,value:v})=>{if(y)u.close();else{x+=v.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let S=0,I=h.length;S<I;S++){let P=h[S];P.onProgress&&P.onProgress(C)}u.enqueue(v),b()}},y=>{u.error(y)})}}});return new Response(m)}else throw new qa(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Xa.add(`file:${e}`,c);let h=Tn[e];delete Tn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fa=new ft,Al=new B,Rl=new B,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pi=class extends Ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=class extends Ya{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Za}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var no=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yc="\\[\\]\\.:\\/",$f=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",Kf="[^"+yc.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",vc),Qf=/(WCOD+)?/.source.replace("WCOD",Kf),ed=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),nd=new RegExp("^"+jf+Qf+ed+td+"$"),id=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=nd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);id.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ja;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tx=new Float32Array(1);var Cl=new ft,Gs=class{constructor(e,t,n=0,s=1/0){this.ray=new Gi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,t=!0,n=[]){return $a(e,this,n,t),n.sort(Il),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$a(e[s],this,n,t);return n.sort(Il),n}};function Il(i,e){return i.distance-e.distance}function $a(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$a(r[o],e,t,!0)}}var Pl=new _e,Ws=class{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var un=class{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new gn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(u){let b=[];for(let y=0,v=u.length;y<v;y++){let C=u[y],S=new vt;S.curves=C.curves,b.push(S)}return b}function n(u,b){let y=b.length,v=!1;for(let C=y-1,S=0;S<y;C=S++){let I=b[C],P=b[S],E=P.x-I.x,T=P.y-I.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(I=b[S],E=-E,P=b[C],T=-T),u.y<I.y||u.y>P.y)continue;if(u.y===I.y){if(u.x===I.x)return!0}else{let F=T*(u.x-I.x)-E*(u.y-I.y);if(F===0)return!0;if(F<0)continue;v=!v}}else{if(u.y!==I.y)continue;if(P.x<=u.x&&u.x<=I.x||I.x<=u.x&&u.x<=P.x)return!0}}return v}let s=Ct.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new vt,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let f=[],d=[],p=[],g=0,x;d[g]=void 0,p[g]=[];for(let u=0,b=r.length;u<b;u++)a=r[u],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new vt,p:x},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let u=!1,b=0;for(let y=0,v=d.length;y<v;y++)f[y]=[];for(let y=0,v=d.length;y<v;y++){let C=p[y];for(let S=0;S<C.length;S++){let I=C[S],P=!0;for(let E=0;E<d.length;E++)n(I.p,d[E].p)&&(y!==E&&b++,P?(P=!1,f[E].push(I)):u=!0);P&&f[y].push(I)}}b>0&&u===!1&&(p=f)}let m;for(let u=0,b=d.length;u<b;u++){l=d[u].s,c.push(l),m=p[u];for(let y=0,v=m.length;y<v;y++)l.holes.push(m[y].h)}return c}};function Mc(i,e,t,n){let s=sd(n);switch(t){case cc:return i*e;case hc:return i*e/s.components*s.byteLength;case yo:return i*e/s.components*s.byteLength;case uc:return i*e*2/s.components*s.byteLength;case vo:return i*e*2/s.components*s.byteLength;case lc:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Mo:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case wo:return Math.max(i,16)*Math.max(e,8)/4;case bo:case Eo:return Math.max(i,8)*Math.max(e,8)/2;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sd(i){switch(i){case fn:case sc:return{byteLength:1,components:1};case Ki:case rc:case ji:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case Kn:case go:case _n:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,zm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:dd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:yd,aomap_pars_fragment:vd,batching_pars_vertex:Md,batching_vertex:bd,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:Od,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:rp,envmap_vertex:Jd,fog_vertex:$d,fog_pars_vertex:Kd,fog_fragment:jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:fp,lights_fragment_maps:dp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:wp,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Ip,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Kp,skinbase_vertex:jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:cm,uv_pars_vertex:lm,uv_vertex:hm,worldpos_vertex:um,background_vert:fm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:_m,depth_frag:ym,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:bm,equirect_frag:Sm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Im,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Fm,meshphysical_frag:Bm,meshtoon_vert:Om,meshtoon_frag:zm,points_vert:km,points_frag:Hm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},Le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},yn={basic:{uniforms:It([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:It([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:It([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:It([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:It([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:It([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:It([Le.points,Le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:It([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:It([Le.common,Le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:It([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:It([Le.sprite,Le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:It([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:It([Le.lights,Le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yn.physical={uniforms:It([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var $o={r:0,b:0,g:0},yi=new ln,qm=new ft;function Ym(i,e,t,n,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,C=g(y);C===null?u(a,l):C&&C.isColor&&(u(C,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let C=g(v);C&&(C.isCubeTexture||C.mapping===Xs)?(h===void 0&&(h=new Oe(new qn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:_i(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(yi)),h.material.toneMapped=nt.getTransfer(C.colorSpace)!==st,(f!==C||d!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Oe(new ui(2,2),new hn({name:"BackgroundMaterial",uniforms:_i(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB($o,xc(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:x,addToRenderList:m,dispose:b}}function Zm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(T,F,O,Z,te){let oe=!1,re=f(Z,O,F);r!==re&&(r=re,c(r.object)),oe=p(T,Z,O,te),oe&&g(T,Z,O,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,v(T,F,O,Z),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function f(T,F,O){let Z=O.wireframe===!0,te=n[T.id];te===void 0&&(te={},n[T.id]=te);let oe=te[F.id];oe===void 0&&(oe={},te[F.id]=oe);let re=oe[Z];return re===void 0&&(re=d(l()),oe[Z]=re),re}function d(T){let F=[],O=[],Z=[];for(let te=0;te<t;te++)F[te]=0,O[te]=0,Z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:Z,object:T,attributes:{},index:null}}function p(T,F,O,Z){let te=r.attributes,oe=F.attributes,re=0,ue=O.getAttributes();for(let X in ue)if(ue[X].location>=0){let se=te[X],ve=oe[X];if(ve===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;re++}return r.attributesNum!==re||r.index!==Z}function g(T,F,O,Z){let te={},oe=F.attributes,re=0,ue=O.getAttributes();for(let X in ue)if(ue[X].location>=0){let se=oe[X];se===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));let ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),te[X]=ve,re++}r.attributes=te,r.attributesNum=re,r.index=Z}function x(){let T=r.newAttributes;for(let F=0,O=T.length;F<O;F++)T[F]=0}function m(T){u(T,0)}function u(T,F){let O=r.newAttributes,Z=r.enabledAttributes,te=r.attributeDivisors;O[T]=1,Z[T]===0&&(i.enableVertexAttribArray(T),Z[T]=1),te[T]!==F&&(i.vertexAttribDivisor(T,F),te[T]=F)}function b(){let T=r.newAttributes,F=r.enabledAttributes;for(let O=0,Z=F.length;O<Z;O++)F[O]!==T[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function y(T,F,O,Z,te,oe,re){re===!0?i.vertexAttribIPointer(T,F,O,te,oe):i.vertexAttribPointer(T,F,O,Z,te,oe)}function v(T,F,O,Z){x();let te=Z.attributes,oe=O.getAttributes(),re=F.defaultAttributeValues;for(let ue in oe){let X=oe[ue];if(X.location>=0){let he=te[ue];if(he===void 0&&(ue==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),ue==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){let se=he.normalized,ve=he.itemSize,Ae=e.get(he);if(Ae===void 0)continue;let Ue=Ae.buffer,J=Ae.type,V=Ae.bytesPerElement,R=J===i.INT||J===i.UNSIGNED_INT||he.gpuType===go;if(he.isInterleavedBufferAttribute){let A=he.data,ie=A.stride,j=he.offset;if(A.isInstancedInterleavedBuffer){for(let G=0;G<X.locationSize;G++)u(X.location+G,A.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let G=0;G<X.locationSize;G++)m(X.location+G);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let G=0;G<X.locationSize;G++)y(X.location+G,ve/X.locationSize,J,se,ie*V,(j+ve/X.locationSize*G)*V,R)}else{if(he.isInstancedBufferAttribute){for(let A=0;A<X.locationSize;A++)u(X.location+A,he.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let A=0;A<X.locationSize;A++)m(X.location+A);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let A=0;A<X.locationSize;A++)y(X.location+A,ve/X.locationSize,J,se,ve*V,ve/X.locationSize*A*V,R)}}else if(re!==void 0){let se=re[ue];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}b()}function C(){P();for(let T in n){let F=n[T];for(let O in F){let Z=F[O];for(let te in Z)h(Z[te].object),delete Z[te];delete F[O]}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let F=n[T.id];for(let O in F){let Z=F[O];for(let te in Z)h(Z[te].object),delete Z[te];delete F[O]}delete n[T.id]}function I(T){for(let F in n){let O=n[F];if(O[T.id]===void 0)continue;let Z=O[T.id];for(let te in Z)h(Z[te].object),delete Z[te];delete O[T.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Jm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $m(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==nn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_n&&!P)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function Km(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qt,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,y=b*4,v=u.clippingState||null;l.value=v,v=h(g,d,y,p);for(let C=0;C!==y;++C)v[C]=t[C];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jm(i){let e=new WeakMap;function t(o,a){return a===fo?o.mapping=mi:a===po&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fo||a===po)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Or(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,Th=[.125,.215,.35,.446,.526,.582],bi=20,bc=new pi,Ah=new He,Sc=null,Ec=0,wc=0,Tc=!1,Mi=(1+Math.sqrt(5))/2,ts=1/Mi,Rh=[new B(-Mi,ts,0),new B(Mi,ts,0),new B(-ts,0,Mi),new B(ts,0,Mi),new B(0,Mi,-ts),new B(0,Mi,ts),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Qm=new B,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qm}=r;Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Ec,wc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ji,format:nn,colorSpace:ai,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ah),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new li({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new Oe(new qn,x),u=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(Ah),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let C=this._cubeSize;Ko(s,v*C,y>2?C:0,C,C),f.setRenderTarget(s),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Oe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let u=[],b=0;for(let I=0;I<bi;++I){let P=I/x,E=Math.exp(-P*P/2);u.push(E),I===0?b+=E:I<m&&(b+=2*E)}for(let I=0;I<u.length;I++)u[I]=u[I]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[s],C=3*v*(s>y-ns?s-y+ns:0),S=4*(this._cubeSize-v);Ko(t,C,S,3*v,2*v),l.setRenderTarget(t),l.render(f,bc)}};function eg(i){let e=[],t=[],n=[],s=i,r=i-ns+1+Th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ns?l=Th[o-i+ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),y=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let S=0;S<p;S++){let I=S%3*2/3-1,P=S>2?0:-1,E=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];b.set(E,x*g*S),y.set(d,m*g*S);let T=[S,S,S,S,S,S];v.set(T,u*g*S)}let C=new lt;C.setAttribute("position",new yt(b,x)),C.setAttribute("uv",new yt(y,m)),C.setAttribute("faceIndex",new yt(v,u)),e.push(C),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ch(i,e,t){let n=new en(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tg(i,e,t){let n=new Float32Array(bi),s=new B(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ih(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ph(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===fo||l===po,h=l===mi||l===gi;if(c||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qo(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Qo(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ig(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sg(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let y=0,v=b.length;y<v;y+=3){let C=b[y+0],S=b[y+1],I=b[y+2];d.push(C,S,S,I,I,C)}}else if(g!==void 0){let b=g.array;x=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let C=y+0,S=y+1,I=y+2;d.push(C,S,S,I,I,C)}}else return;let m=new(gc(d)?bs:Ms)(d,1);m.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function rg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*C*4*f),I=new vs(S,v,C,f);I.type=_n,I.needsUpdate=!0;let P=y*4;for(let T=0;T<f;T++){let F=m[T],O=u[T],Z=b[T],te=v*C*4*T;for(let oe=0;oe<F.count;oe++){let re=oe*P;p===!0&&(s.fromBufferAttribute(F,oe),S[te+re+0]=s.x,S[te+re+1]=s.y,S[te+re+2]=s.z,S[te+re+3]=0),g===!0&&(s.fromBufferAttribute(O,oe),S[te+re+4]=s.x,S[te+re+5]=s.y,S[te+re+6]=s.z,S[te+re+7]=0),x===!0&&(s.fromBufferAttribute(Z,oe),S[te+re+8]=s.x,S[te+re+9]=s.y,S[te+re+10]=s.z,S[te+re+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new _e(v,C)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $h=new Ut,Lh=new As(1,1),Kh=new vs,jh=new Fr,Qh=new Es,Dh=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),St(t,n)}}function pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),St(t,n)}}function mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),St(t,n)}}function gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=dc,r=Lh):r=$h,t.setTexture2D(e||r,s)}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function Tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qh,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kh,s)}function Rg(i){switch(i){case 5126:return lg;case 35664:return hg;case 35665:return ug;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Pg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Lg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Dg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ng(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fg(i,e){i.uniform1iv(this.addr,e)}function Bg(i,e){i.uniform2iv(this.addr,e)}function Og(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function kg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Gg(i,e){i.uniform4uiv(this.addr,e)}function Wg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$h,r[o])}function Xg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jh,r[o])}function qg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qh,r[o])}function Yg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kh,r[o])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return Og;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function Jg(i,e,t){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),o=Ac.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oh(t,c===void 0?new Rc(a,i,e):new Cc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ic(a),Oh(t,f)),t=f}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function zh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $g=37297,Kg=0;function jg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kh=new Ye;function Qg(i){nt._getMatrix(kh,nt.workingColorSpace,i);let e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(e),a)}else return r}function e0(i,e){let t=Qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t0(i,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case nh:t="Cineon";break;case uo:t="ACESFilmic";break;case sh:t="AgX";break;case rh:t="Neutral";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new B;function n0(){nt.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function s0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ks(i){return i!==""}function Vh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(o0,c0)}var a0=new Map;function c0(i,e){let t=$e[e];if(t===void 0){let n=a0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}var l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(l0,h0)}function h0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function u0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function m0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u0(t),c=f0(t),h=d0(t),f=p0(t),d=m0(t),p=i0(t),g=s0(r),x=s.createProgram(),m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Pc(o),o=Vh(o,t),o=Gh(o,t),a=Pc(a),a=Vh(a,t),a=Gh(a,t),o=Wh(o),a=Wh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=b+m+o,v=b+u+a,C=zh(s,s.VERTEX_SHADER,y),S=zh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(F){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",Z=s.getShaderInfoLog(C)||"",te=s.getShaderInfoLog(S)||"",oe=O.trim(),re=Z.trim(),ue=te.trim(),X=!0,he=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,S);else{let se=Hh(s,C,"vertex"),ve=Hh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+oe+`
`+se+`
`+ve)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(re===""||ue==="")&&(he=!1);he&&(F.diagnostics={runnable:X,programLog:oe,vertexShader:{log:re,prefix:m},fragmentShader:{log:ue,prefix:u}})}s.deleteShader(C),s.deleteShader(S),P=new is(s,x),E=r0(s,x)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,$g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=S,this}var x0=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}};function _0(i,e,t,n,s,r,o){let a=new Wi,l=new Lc,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,F,O,Z){let te=O.fog,oe=Z.geometry,re=E.isMeshStandardMaterial?O.environment:null,ue=(E.isMeshStandardMaterial?t:e).get(E.envMap||re),X=ue&&ue.mapping===Xs?ue.image.height:null,he=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ve=se!==void 0?se.length:0,Ae=0;oe.morphAttributes.position!==void 0&&(Ae=1),oe.morphAttributes.normal!==void 0&&(Ae=2),oe.morphAttributes.color!==void 0&&(Ae=3);let Ue,J,V,R;if(he){let Qe=yn[he];Ue=Qe.vertexShader,J=Qe.fragmentShader}else Ue=E.vertexShader,J=E.fragmentShader,l.update(E),V=l.getVertexShaderID(E),R=l.getFragmentShaderID(E);let A=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),j=Z.isInstancedMesh===!0,G=Z.isBatchedMesh===!0,pe=!!E.map,xe=!!E.matcap,D=!!ue,Y=!!E.aoMap,$=!!E.lightMap,k=!!E.bumpMap,H=!!E.normalMap,L=!!E.displacementMap,_=!!E.emissiveMap,N=!!E.metalnessMap,Q=!!E.roughnessMap,ce=E.anisotropy>0,w=E.clearcoat>0,M=E.dispersion>0,z=E.iridescence>0,q=E.sheen>0,ne=E.transmission>0,W=ce&&!!E.anisotropyMap,de=w&&!!E.clearcoatMap,ee=w&&!!E.clearcoatNormalMap,ye=w&&!!E.clearcoatRoughnessMap,be=z&&!!E.iridescenceMap,fe=z&&!!E.iridescenceThicknessMap,Me=q&&!!E.sheenColorMap,we=q&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Re=!!E.specularColorMap,ze=!!E.specularIntensityMap,K=ne&&!!E.transmissionMap,Ee=ne&&!!E.thicknessMap,Pe=!!E.gradientMap,Ne=!!E.alphaMap,Ce=E.alphaTest>0,Se=!!E.alphaHash,Fe=!!E.extensions,Xe=Un;E.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let tt={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:Ue,fragmentShader:J,defines:E.defines,customVertexShaderID:V,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:G,batchingColor:G&&Z._colorsTexture!==null,instancing:j,instancingColor:j&&Z.instanceColor!==null,instancingMorph:j&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:xe,envMap:D,envMapMode:D&&ue.mapping,envMapCubeUVHeight:X,aoMap:Y,lightMap:$,bumpMap:k,normalMap:H,displacementMap:d&&L,emissiveMap:_,normalMapObjectSpace:H&&E.normalMapType===lh,normalMapTangentSpace:H&&E.normalMapType===fc,metalnessMap:N,roughnessMap:Q,anisotropy:ce,anisotropyMap:W,clearcoat:w,clearcoatMap:de,clearcoatNormalMap:ee,clearcoatRoughnessMap:ye,dispersion:M,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:fe,sheen:q,sheenColorMap:Me,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Re,specularIntensityMap:ze,transmission:ne,transmissionMap:K,thicknessMap:Ee,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===ri&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ce,alphaHash:Se,combine:E.combine,mapUv:pe&&x(E.map.channel),aoMapUv:Y&&x(E.aoMap.channel),lightMapUv:$&&x(E.lightMap.channel),bumpMapUv:k&&x(E.bumpMap.channel),normalMapUv:H&&x(E.normalMap.channel),displacementMapUv:L&&x(E.displacementMap.channel),emissiveMapUv:_&&x(E.emissiveMap.channel),metalnessMapUv:N&&x(E.metalnessMap.channel),roughnessMapUv:Q&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:de&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(E.sheenRoughnessMap.channel),specularMapUv:Te&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:ze&&x(E.specularIntensityMap.channel),transmissionMapUv:K&&x(E.transmissionMap.channel),thicknessMapUv:Ee&&x(E.thicknessMap.channel),alphaMapUv:Ne&&x(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(H||ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!oe.attributes.uv&&(pe||Ne),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:Z.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:_&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vt,flipSided:E.side===Bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)T.push(F),T.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(b(T,E),y(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function b(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function y(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let T=g[E.type],F;if(T){let O=yn[T];F=vh.clone(O.uniforms)}else F=E.uniforms;return F}function C(E,T){let F;for(let O=0,Z=h.length;O<Z;O++){let te=h[O];if(te.cacheKey===T){F=te,++F.usedTimes;break}}return F===void 0&&(F=new g0(i,T,E,r),h.push(F)),F}function S(E){if(--E.usedTimes===0){let T=h.indexOf(E);h[T]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:I,programs:h,dispose:P}}function y0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,p,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||v0),n.length>1&&n.sort(d||qh),s.length>1&&s.sort(d||qh)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function M0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function b0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function S0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var E0=0;function w0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T0(i){let e=new b0,t=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ft,o=new ft;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,y=0,v=0,C=0,S=0,I=0;c.sort(w0);for(let E=0,T=c.length;E<T;E++){let F=c[E],O=F.color,Z=F.intensity,te=F.distance,oe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=O.r*Z,f+=O.g*Z,d+=O.b*Z;else if(F.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(F.sh.coefficients[re],Z);I++}else if(F.isDirectionalLight){let re=e.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ue=F.shadow,X=t.get(F);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=F.shadow.matrix,b++}n.directional[p]=re,p++}else if(F.isSpotLight){let re=e.get(F);re.position.setFromMatrixPosition(F.matrixWorld),re.color.copy(O).multiplyScalar(Z),re.distance=te,re.coneCos=Math.cos(F.angle),re.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),re.decay=F.decay,n.spot[x]=re;let ue=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,ue.updateMatrices(F),F.castShadow&&S++),n.spotLightMatrix[x]=ue.matrix,F.castShadow){let X=t.get(F);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=oe,v++}x++}else if(F.isRectAreaLight){let re=e.get(F);re.color.copy(O).multiplyScalar(Z),re.halfWidth.set(F.width*.5,0,0),re.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=re,m++}else if(F.isPointLight){let re=e.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity),re.distance=F.distance,re.decay=F.decay,F.castShadow){let ue=F.shadow,X=t.get(F);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,X.shadowCameraNear=ue.camera.near,X.shadowCameraFar=ue.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=F.shadow.matrix,y++}n.point[g]=re,g++}else if(F.isHemisphereLight){let re=e.get(F);re.skyColor.copy(F.color).multiplyScalar(Z),re.groundColor.copy(F.groundColor).multiplyScalar(Z),n.hemi[u]=re,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=I,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=I,n.version=E0++)}function l(c,h){let f=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){let y=c[u];if(y.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Zh(i){let e=new T0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zh(i),e.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
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
}`;function I0(i,e,t){let n=new qi,s=new _e,r=new _e,o=new gt,a=new qr({depthPacking:ch}),l=new Yr,c={},h=t.maxTextureSize,f={[Rn]:Bt,[Bt]:Rn,[Vt]:Vt},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:R0,fragmentShader:C0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let u=this.type;this.render=function(S,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Dn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=u!==xn&&this.type===xn,te=u===xn&&this.type!==xn;for(let oe=0,re=S.length;oe<re;oe++){let ue=S[oe],X=ue.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let he=X.getFrameExtents();if(s.multiply(he),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,X.mapSize.y=r.y)),X.map===null||Z===!0||te===!0){let ve=this.type!==xn?{minFilter:Ht,magFilter:Ht}:{};X.map!==null&&X.map.dispose(),X.map=new en(s.x,s.y,ve),X.map.texture.name=ue.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let se=X.getViewportCount();for(let ve=0;ve<se;ve++){let Ae=X.getViewport(ve);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),O.viewport(o),X.updateMatrices(ue,ve),n=X.getFrustum(),v(I,P,X.camera,ue,this.type)}X.isPointLightShadow!==!0&&this.type===xn&&b(X,P),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,F)};function b(S,I){let P=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new en(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(I,null,P,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(I,null,P,p,x,null)}function y(S,I,P,E){let T=null,F=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)T=F;else if(T=P.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=T.uuid,Z=I.uuid,te=c[O];te===void 0&&(te={},c[O]=te);let oe=te[Z];oe===void 0&&(oe=T.clone(),te[Z]=oe,I.addEventListener("dispose",C)),T=oe}if(T.visible=I.visible,T.wireframe=I.wireframe,E===xn?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:f[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let O=i.properties.get(T);O.light=P}return T}function v(S,I,P,E,T){if(S.visible===!1)return;if(S.layers.test(I.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===xn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let Z=e.update(S),te=S.material;if(Array.isArray(te)){let oe=Z.groups;for(let re=0,ue=oe.length;re<ue;re++){let X=oe[re],he=te[X.materialIndex];if(he&&he.visible){let se=y(S,he,E,T);S.onBeforeShadow(i,S,I,P,Z,se,X),i.renderBufferDirect(P,null,Z,se,S,X),S.onAfterShadow(i,S,I,P,Z,se,X)}}}else if(te.visible){let oe=y(S,te,E,T);S.onBeforeShadow(i,S,I,P,Z,oe,null),i.renderBufferDirect(P,null,Z,oe,S,null),S.onAfterShadow(i,S,I,P,Z,oe,null)}}let O=S.children;for(let Z=0,te=O.length;Z<te;Z++)v(O[Z],I,P,E,T)}function C(S){S.target.removeEventListener("dispose",C);for(let P in c){let E=c[P],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}var P0={[so]:ro,[oo]:lo,[ao]:ho,[oi]:co,[ro]:so,[lo]:oo,[ho]:ao,[co]:oi};function L0(i,e){function t(){let K=!1,Ee=new gt,Pe=null,Ne=new gt(0,0,0,0);return{setMask:function(Ce){Pe!==Ce&&!K&&(i.colorMask(Ce,Ce,Ce,Ce),Pe=Ce)},setLocked:function(Ce){K=Ce},setClear:function(Ce,Se,Fe,Xe,tt){tt===!0&&(Ce*=Xe,Se*=Xe,Fe*=Xe),Ee.set(Ce,Se,Fe,Xe),Ne.equals(Ee)===!1&&(i.clearColor(Ce,Se,Fe,Xe),Ne.copy(Ee))},reset:function(){K=!1,Pe=null,Ne.set(-1,0,0,0)}}}function n(){let K=!1,Ee=!1,Pe=null,Ne=null,Ce=null;return{setReversed:function(Se){if(Ee!==Se){let Fe=e.get("EXT_clip_control");Se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ee=Se;let Xe=Ce;Ce=null,this.setClear(Xe)}},getReversed:function(){return Ee},setTest:function(Se){Se?A(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(Se){Pe!==Se&&!K&&(i.depthMask(Se),Pe=Se)},setFunc:function(Se){if(Ee&&(Se=P0[Se]),Ne!==Se){switch(Se){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=Se}},setLocked:function(Se){K=Se},setClear:function(Se){Ce!==Se&&(Ee&&(Se=1-Se),i.clearDepth(Se),Ce=Se)},reset:function(){K=!1,Pe=null,Ne=null,Ce=null,Ee=!1}}}function s(){let K=!1,Ee=null,Pe=null,Ne=null,Ce=null,Se=null,Fe=null,Xe=null,tt=null;return{setTest:function(Qe){K||(Qe?A(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(Qe){Ee!==Qe&&!K&&(i.stencilMask(Qe),Ee=Qe)},setFunc:function(Qe,Tt,dn){(Pe!==Qe||Ne!==Tt||Ce!==dn)&&(i.stencilFunc(Qe,Tt,dn),Pe=Qe,Ne=Tt,Ce=dn)},setOp:function(Qe,Tt,dn){(Se!==Qe||Fe!==Tt||Xe!==dn)&&(i.stencilOp(Qe,Tt,dn),Se=Qe,Fe=Tt,Xe=dn)},setLocked:function(Qe){K=Qe},setClear:function(Qe){tt!==Qe&&(i.clearStencil(Qe),tt=Qe)},reset:function(){K=!1,Ee=null,Pe=null,Ne=null,Ce=null,Se=null,Fe=null,Xe=null,tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,y=null,v=null,C=null,S=null,I=new He(0,0,0),P=0,E=!1,T=null,F=null,O=null,Z=null,te=null,oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ue=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(X)[1]),re=ue>=1):X.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),re=ue>=2);let he=null,se={},ve=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Ue=new gt().fromArray(ve),J=new gt().fromArray(Ae);function V(K,Ee,Pe,Ne){let Ce=new Uint8Array(4),Se=i.createTexture();i.bindTexture(K,Se),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Pe;Fe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ee+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Se}let R={};R[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(i.DEPTH_TEST),o.setFunc(oi),k(!1),H(Ka),A(i.CULL_FACE),Y(Dn);function A(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function ie(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function j(K,Ee){return f[K]!==Ee?(i.bindFramebuffer(K,Ee),f[K]=Ee,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function G(K,Ee){let Pe=p,Ne=!1;if(K){Pe=d.get(Ee),Pe===void 0&&(Pe=[],d.set(Ee,Pe));let Ce=K.textures;if(Pe.length!==Ce.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Fe=Ce.length;Se<Fe;Se++)Pe[Se]=i.COLOR_ATTACHMENT0+Se;Pe.length=Ce.length,Ne=!0}}else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Pe)}function pe(K){return g!==K?(i.useProgram(K),g=K,!0):!1}let xe={[Xn]:i.FUNC_ADD,[Nl]:i.FUNC_SUBTRACT,[Fl]:i.FUNC_REVERSE_SUBTRACT};xe[Bl]=i.MIN,xe[Ol]=i.MAX;let D={[zl]:i.ZERO,[kl]:i.ONE,[Hl]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[Yl]:i.SRC_ALPHA_SATURATE,[Xl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[ql]:i.ONE_MINUS_DST_COLOR,[Wl]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[$l]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(K,Ee,Pe,Ne,Ce,Se,Fe,Xe,tt,Qe){if(K===Dn){x===!0&&(ie(i.BLEND),x=!1);return}if(x===!1&&(A(i.BLEND),x=!0),K!==Ul){if(K!==m||Qe!==E){if((u!==Xn||v!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,v=Xn),Qe)switch(K){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}b=null,y=null,C=null,S=null,I.set(0,0,0),P=0,m=K,E=Qe}return}Ce=Ce||Ee,Se=Se||Pe,Fe=Fe||Ne,(Ee!==u||Ce!==v)&&(i.blendEquationSeparate(xe[Ee],xe[Ce]),u=Ee,v=Ce),(Pe!==b||Ne!==y||Se!==C||Fe!==S)&&(i.blendFuncSeparate(D[Pe],D[Ne],D[Se],D[Fe]),b=Pe,y=Ne,C=Se,S=Fe),(Xe.equals(I)===!1||tt!==P)&&(i.blendColor(Xe.r,Xe.g,Xe.b,tt),I.copy(Xe),P=tt),m=K,E=!1}function $(K,Ee){K.side===Vt?ie(i.CULL_FACE):A(i.CULL_FACE);let Pe=K.side===Bt;Ee&&(Pe=!Pe),k(Pe),K.blending===ri&&K.transparent===!1?Y(Dn):Y(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let Ne=K.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),_(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?A(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(K){T!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),T=K)}function H(K){K!==Ll?(A(i.CULL_FACE),K!==F&&(K===Ka?i.cullFace(i.BACK):K===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),F=K}function L(K){K!==O&&(re&&i.lineWidth(K),O=K)}function _(K,Ee,Pe){K?(A(i.POLYGON_OFFSET_FILL),(Z!==Ee||te!==Pe)&&(i.polygonOffset(Ee,Pe),Z=Ee,te=Pe)):ie(i.POLYGON_OFFSET_FILL)}function N(K){K?A(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Q(K){K===void 0&&(K=i.TEXTURE0+oe-1),he!==K&&(i.activeTexture(K),he=K)}function ce(K,Ee,Pe){Pe===void 0&&(he===null?Pe=i.TEXTURE0+oe-1:Pe=he);let Ne=se[Pe];Ne===void 0&&(Ne={type:void 0,texture:void 0},se[Pe]=Ne),(Ne.type!==K||Ne.texture!==Ee)&&(he!==Pe&&(i.activeTexture(Pe),he=Pe),i.bindTexture(K,Ee||R[K]),Ne.type=K,Ne.texture=Ee)}function w(){let K=se[he];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function q(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ne(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ee(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function be(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function fe(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(K){Ue.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Ue.copy(K))}function we(K){J.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),J.copy(K))}function Te(K,Ee){let Pe=c.get(Ee);Pe===void 0&&(Pe=new WeakMap,c.set(Ee,Pe));let Ne=Pe.get(K);Ne===void 0&&(Ne=i.getUniformBlockIndex(Ee,K.name),Pe.set(K,Ne))}function Re(K,Ee){let Ne=c.get(Ee).get(K);l.get(Ee)!==Ne&&(i.uniformBlockBinding(Ee,Ne,K.__bindingPointIndex),l.set(Ee,Ne))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,se={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,y=null,v=null,C=null,S=null,I=new He(0,0,0),P=0,E=!1,T=null,F=null,O=null,Z=null,te=null,Ue.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:ie,bindFramebuffer:j,drawBuffers:G,useProgram:pe,setBlending:Y,setMaterial:$,setFlipSided:k,setCullFace:H,setLineWidth:L,setPolygonOffset:_,setScissorTest:N,activeTexture:Q,bindTexture:ce,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:be,texImage3D:fe,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:ee,texStorage3D:ye,texSubImage2D:q,texSubImage3D:ne,compressedTexSubImage2D:W,compressedTexSubImage3D:de,scissor:Me,viewport:we,reset:ze}}function D0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):ys("canvas")}function x(w,M,z){let q=1,ne=ce(w);if((ne.width>z||ne.height>z)&&(q=z/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let W=Math.floor(q*ne.width),de=Math.floor(q*ne.height);f===void 0&&(f=g(W,de));let ee=M?g(W,de):f;return ee.width=W,ee.height=de,ee.getContext("2d").drawImage(w,0,0,W,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+W+"x"+de+")."),ee}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,z,q,ne=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=M;if(M===i.RED&&(z===i.FLOAT&&(W=i.R32F),z===i.HALF_FLOAT&&(W=i.R16F),z===i.UNSIGNED_BYTE&&(W=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.R8UI),z===i.UNSIGNED_SHORT&&(W=i.R16UI),z===i.UNSIGNED_INT&&(W=i.R32UI),z===i.BYTE&&(W=i.R8I),z===i.SHORT&&(W=i.R16I),z===i.INT&&(W=i.R32I)),M===i.RG&&(z===i.FLOAT&&(W=i.RG32F),z===i.HALF_FLOAT&&(W=i.RG16F),z===i.UNSIGNED_BYTE&&(W=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RG8UI),z===i.UNSIGNED_SHORT&&(W=i.RG16UI),z===i.UNSIGNED_INT&&(W=i.RG32UI),z===i.BYTE&&(W=i.RG8I),z===i.SHORT&&(W=i.RG16I),z===i.INT&&(W=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGB8UI),z===i.UNSIGNED_SHORT&&(W=i.RGB16UI),z===i.UNSIGNED_INT&&(W=i.RGB32UI),z===i.BYTE&&(W=i.RGB8I),z===i.SHORT&&(W=i.RGB16I),z===i.INT&&(W=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),z===i.UNSIGNED_INT&&(W=i.RGBA32UI),z===i.BYTE&&(W=i.RGBA8I),z===i.SHORT&&(W=i.RGBA16I),z===i.INT&&(W=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),M===i.RGBA){let de=ne?xs:nt.getTransfer(q);z===i.FLOAT&&(W=i.RGBA32F),z===i.HALF_FLOAT&&(W=i.RGBA16F),z===i.UNSIGNED_BYTE&&(W=de===st?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(w,M){let z;return w?M===null||M===Kn||M===Qi?z=i.DEPTH24_STENCIL8:M===_n?z=i.DEPTH32F_STENCIL8:M===Ki&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kn||M===Qi?z=i.DEPTH_COMPONENT24:M===_n?z=i.DEPTH_COMPONENT32F:M===Ki&&(z=i.DEPTH_COMPONENT16),z}function C(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function S(w){let M=w.target;M.removeEventListener("dispose",S),P(M),M.isVideoTexture&&h.delete(M)}function I(w){let M=w.target;M.removeEventListener("dispose",I),T(M)}function P(w){let M=n.get(w);if(M.__webglInit===void 0)return;let z=w.source,q=d.get(z);if(q){let ne=q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(w),Object.keys(q).length===0&&d.delete(z)}n.remove(w)}function E(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let z=w.source,q=d.get(z);delete q[M.__cacheKey],o.memory.textures--}function T(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ne=0;ne<M.__webglFramebuffer[q].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[q][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=w.textures;for(let q=0,ne=z.length;q<ne;q++){let W=n.get(z[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(w)}let F=0;function O(){F=0}function Z(){let w=F;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function te(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function oe(w,M){let z=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(z,w,M);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function re(w,M){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){R(z,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function ue(w,M){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){R(z,w,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function X(w,M){let z=n.get(w);if(w.version>0&&z.__version!==w.version){A(z,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let he={[Oi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},se={[Ht]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ve={[hh]:i.NEVER,[gh]:i.ALWAYS,[uh]:i.LESS,[dc]:i.LEQUAL,[fh]:i.EQUAL,[mh]:i.GEQUAL,[dh]:i.GREATER,[ph]:i.NOTEQUAL};function Ae(w,M){if(M.type===_n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dt||M.magFilter===mo||M.magFilter===qs||M.magFilter===$n||M.minFilter===Dt||M.minFilter===mo||M.minFilter===qs||M.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,he[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,se[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==qs&&M.minFilter!==$n||M.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",S));let q=M.source,ne=d.get(q);ne===void 0&&(ne={},d.set(q,ne));let W=te(M);if(W!==w.__cacheKey){ne[W]===void 0&&(ne[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[W].usedTimes++;let de=ne[w.__cacheKey];de!==void 0&&(ne[w.__cacheKey].usedTimes--,de.usedTimes===0&&E(M)),w.__cacheKey=W,w.__webglTexture=ne[W].texture}return z}function J(w,M,z){return Math.floor(Math.floor(w/z)/M)}function V(w,M,z,q){let W=w.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,q,M.data);else{W.sort((fe,Me)=>fe.start-Me.start);let de=0;for(let fe=1;fe<W.length;fe++){let Me=W[de],we=W[fe],Te=Me.start+Me.count,Re=J(we.start,M.width,4),ze=J(Me.start,M.width,4);we.start<=Te+1&&Re===ze&&J(we.start+we.count-1,M.width,4)===Re?Me.count=Math.max(Me.count,we.start+we.count-Me.start):(++de,W[de]=we)}W.length=de+1;let ee=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let fe=0,Me=W.length;fe<Me;fe++){let we=W[fe],Te=Math.floor(we.start/4),Re=Math.ceil(we.count/4),ze=Te%M.width,K=Math.floor(Te/M.width),Ee=Re,Pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,ze,K,Ee,Pe,z,q,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function R(w,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let ne=Ue(w,M),W=M.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+z);let de=n.get(W);if(W.version!==de.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let ee=nt.getPrimaries(nt.workingColorSpace),ye=M.colorSpace===Nn?null:nt.getPrimaries(M.colorSpace),be=M.colorSpace===Nn||ee===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let fe=x(M.image,!1,s.maxTextureSize);fe=Q(M,fe);let Me=r.convert(M.format,M.colorSpace),we=r.convert(M.type),Te=y(M.internalFormat,Me,we,M.colorSpace,M.isVideoTexture);Ae(q,M);let Re,ze=M.mipmaps,K=M.isVideoTexture!==!0,Ee=de.__version===void 0||ne===!0,Pe=W.dataReady,Ne=C(M,fe);if(M.isDepthTexture)Te=v(M.format===es,M.type),Ee&&(K?t.texStorage2D(i.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Me,we,null));else if(M.isDataTexture)if(ze.length>0){K&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Te,ze[0].width,ze[0].height);for(let Ce=0,Se=ze.length;Ce<Se;Ce++)Re=ze[Ce],K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Re.width,Re.height,Me,we,Re.data):t.texImage2D(i.TEXTURE_2D,Ce,Te,Re.width,Re.height,0,Me,we,Re.data);M.generateMipmaps=!1}else K?(Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Te,fe.width,fe.height),Pe&&V(M,fe,Me,we)):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Me,we,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){K&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Te,ze[0].width,ze[0].height,fe.depth);for(let Ce=0,Se=ze.length;Ce<Se;Ce++)if(Re=ze[Ce],M.format!==nn)if(Me!==null)if(K){if(Pe)if(M.layerUpdates.size>0){let Fe=Mc(Re.width,Re.height,M.format,M.type);for(let Xe of M.layerUpdates){let tt=Re.data.subarray(Xe*Fe/Re.data.BYTES_PER_ELEMENT,(Xe+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,Xe,Re.width,Re.height,1,Me,tt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Re.width,Re.height,fe.depth,Me,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,Te,Re.width,Re.height,fe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Re.width,Re.height,fe.depth,Me,we,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,Te,Re.width,Re.height,fe.depth,0,Me,we,Re.data)}else{K&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Te,ze[0].width,ze[0].height);for(let Ce=0,Se=ze.length;Ce<Se;Ce++)Re=ze[Ce],M.format!==nn?Me!==null?K?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,Re.width,Re.height,Me,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Re.width,Re.height,Me,we,Re.data):t.texImage2D(i.TEXTURE_2D,Ce,Te,Re.width,Re.height,0,Me,we,Re.data)}else if(M.isDataArrayTexture)if(K){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Te,fe.width,fe.height,fe.depth),Pe)if(M.layerUpdates.size>0){let Ce=Mc(fe.width,fe.height,M.format,M.type);for(let Se of M.layerUpdates){let Fe=fe.data.subarray(Se*Ce/fe.data.BYTES_PER_ELEMENT,(Se+1)*Ce/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,fe.width,fe.height,1,Me,we,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,we,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Me,we,fe.data);else if(M.isData3DTexture)K?(Ee&&t.texStorage3D(i.TEXTURE_3D,Ne,Te,fe.width,fe.height,fe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,we,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Me,we,fe.data);else if(M.isFramebufferTexture){if(Ee)if(K)t.texStorage2D(i.TEXTURE_2D,Ne,Te,fe.width,fe.height);else{let Ce=fe.width,Se=fe.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Te,Ce,Se,0,Me,we,null),Ce>>=1,Se>>=1}}else if(ze.length>0){if(K&&Ee){let Ce=ce(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Te,Ce.width,Ce.height)}for(let Ce=0,Se=ze.length;Ce<Se;Ce++)Re=ze[Ce],K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Me,we,Re):t.texImage2D(i.TEXTURE_2D,Ce,Te,Me,we,Re);M.generateMipmaps=!1}else if(K){if(Ee){let Ce=ce(fe);t.texStorage2D(i.TEXTURE_2D,Ne,Te,Ce.width,Ce.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,we,fe)}else t.texImage2D(i.TEXTURE_2D,0,Te,Me,we,fe);m(M)&&u(q),de.__version=W.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function A(w,M,z){if(M.image.length!==6)return;let q=Ue(w,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let W=n.get(ne);if(ne.version!==W.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let de=nt.getPrimaries(nt.workingColorSpace),ee=M.colorSpace===Nn?null:nt.getPrimaries(M.colorSpace),ye=M.colorSpace===Nn||de===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let be=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let Se=0;Se<6;Se++)!be&&!fe?Me[Se]=x(M.image[Se],!0,s.maxCubemapSize):Me[Se]=fe?M.image[Se].image:M.image[Se],Me[Se]=Q(M,Me[Se]);let we=Me[0],Te=r.convert(M.format,M.colorSpace),Re=r.convert(M.type),ze=y(M.internalFormat,Te,Re,M.colorSpace),K=M.isVideoTexture!==!0,Ee=W.__version===void 0||q===!0,Pe=ne.dataReady,Ne=C(M,we);Ae(i.TEXTURE_CUBE_MAP,M);let Ce;if(be){K&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ze,we.width,we.height);for(let Se=0;Se<6;Se++){Ce=Me[Se].mipmaps;for(let Fe=0;Fe<Ce.length;Fe++){let Xe=Ce[Fe];M.format!==nn?Te!==null?K?Pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Xe.width,Xe.height,Te,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,ze,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Xe.width,Xe.height,Te,Re,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,ze,Xe.width,Xe.height,0,Te,Re,Xe.data)}}}else{if(Ce=M.mipmaps,K&&Ee){Ce.length>0&&Ne++;let Se=ce(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ze,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(fe){K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Me[Se].width,Me[Se].height,Te,Re,Me[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ze,Me[Se].width,Me[Se].height,0,Te,Re,Me[Se].data);for(let Fe=0;Fe<Ce.length;Fe++){let tt=Ce[Fe].image[Se].image;K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,tt.width,tt.height,Te,Re,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,ze,tt.width,tt.height,0,Te,Re,tt.data)}}else{K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te,Re,Me[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ze,Te,Re,Me[Se]);for(let Fe=0;Fe<Ce.length;Fe++){let Xe=Ce[Fe];K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,Te,Re,Xe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,ze,Te,Re,Xe.image[Se])}}}m(M)&&u(i.TEXTURE_CUBE_MAP),W.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ie(w,M,z,q,ne,W){let de=r.convert(z.format,z.colorSpace),ee=r.convert(z.type),ye=y(z.internalFormat,de,ee,z.colorSpace),be=n.get(M),fe=n.get(z);if(fe.__renderTarget=M,!be.__hasExternalTextures){let Me=Math.max(1,M.width>>W),we=Math.max(1,M.height>>W);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,W,ye,Me,we,M.depth,0,de,ee,null):t.texImage2D(ne,W,ye,Me,we,0,de,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),_(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ne,fe.__webglTexture,0,L(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ne,fe.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let q=M.depthTexture,ne=q&&q.isDepthTexture?q.type:null,W=v(M.stencilBuffer,ne),de=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=L(M);_(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,W,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,W,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,W,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,w)}else{let q=M.textures;for(let ne=0;ne<q.length;ne++){let W=q[ne],de=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),ye=y(W.internalFormat,de,ee,W.colorSpace),be=L(M);z&&_(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,M.width,M.height):_(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ye,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ye,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe(M.depthTexture,0);let ne=q.__webglTexture,W=L(M);if(M.depthTexture.format===zi)_(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===es)_(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function pe(w){let M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",ne)};q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?G(M.__webglFramebuffer[0],w):G(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),j(M.__webglDepthbuffer[q],w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,W)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),j(M.__webglDepthbuffer,w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,M,z){let q=n.get(w);M!==void 0&&ie(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pe(w)}function D(w){let M=w.texture,z=n.get(w),q=n.get(M);w.addEventListener("dispose",I);let ne=w.textures,W=w.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),W){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let ye=0;ye<M.mipmaps.length;ye++)z.__webglFramebuffer[ee][ye]=i.createFramebuffer()}else z.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)z.__webglFramebuffer[ee]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(de)for(let ee=0,ye=ne.length;ee<ye;ee++){let be=n.get(ne[ee]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&_(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<ne.length;ee++){let ye=ne[ee];z.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);let be=r.convert(ye.format,ye.colorSpace),fe=r.convert(ye.type),Me=y(ye.internalFormat,be,fe,ye.colorSpace,w.isXRRenderTarget===!0),we=L(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),j(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ie(z.__webglFramebuffer[ee][ye],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye);else ie(z.__webglFramebuffer[ee],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(M)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,ye=ne.length;ee<ye;ee++){let be=ne[ee],fe=n.get(be),Me=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,fe.__webglTexture),Ae(Me,be),ie(z.__webglFramebuffer,w,be,i.COLOR_ATTACHMENT0+ee,Me,0),m(be)&&u(Me)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),Ae(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ie(z.__webglFramebuffer[ye],w,M,i.COLOR_ATTACHMENT0,ee,ye);else ie(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ee,0);m(M)&&u(ee),t.unbindTexture()}w.depthBuffer&&pe(w)}function Y(w){let M=w.textures;for(let z=0,q=M.length;z<q;z++){let ne=M[z];if(m(ne)){let W=b(w),de=n.get(ne).__webglTexture;t.bindTexture(W,de),u(W),t.unbindTexture()}}}let $=[],k=[];function H(w){if(w.samples>0){if(_(w)===!1){let M=w.textures,z=w.width,q=w.height,ne=i.COLOR_BUFFER_BIT,W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(w),ee=M.length>1;if(ee)for(let be=0;be<M.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ye=w.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let be=0;be<M.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[be]);let fe=n.get(M[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,ne,i.NEAREST),l===!0&&($.length=0,k.length=0,$.push(i.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&($.push(W),k.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let be=0;be<M.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,de.__webglColorRenderbuffer[be]);let fe=n.get(M[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function _(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Q(w,M){let z=w.colorSpace,q=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ai&&z!==Nn&&(nt.getTransfer(z)===st?(q!==nn||ne!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.setTexture2D=oe,this.setTexture2DArray=re,this.setTexture3D=ue,this.setTextureCube=X,this.rebindTextures=xe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=_}function U0(i,e){function t(n,s=Nn){let r,o=nt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===lc)return i.RGB;if(n===nn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo||n===ko||n===Ho||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Uc,u={},b=t.getContextAttributes(),y=null,v=null,C=[],S=[],I=new _e,P=null,E=new kt;E.viewport=new gt;let T=new kt;T.viewport=new gt;let F=[E,T],O=new no,Z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let A=C[R];return A===void 0&&(A=new Xi,C[R]=A),A.getTargetRaySpace()},this.getControllerGrip=function(R){let A=C[R];return A===void 0&&(A=new Xi,C[R]=A),A.getGripSpace()},this.getHand=function(R){let A=C[R];return A===void 0&&(A=new Xi,C[R]=A),A.getHandSpace()};function oe(R){let A=S.indexOf(R.inputSource);if(A===-1)return;let ie=C[A];ie!==void 0&&(ie.update(R.inputSource,R.frame,c||o),ie.dispatchEvent({type:R.type,data:R.inputSource}))}function re(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",ue);for(let R=0;R<C.length;R++){let A=S[R];A!==null&&(S[R]=null,C[R].disconnect(A))}Z=null,te=null,m.reset();for(let R in u)delete u[R];e.setRenderTarget(y),p=null,d=null,f=null,s=null,v=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",re),s.addEventListener("inputsourceschange",ue),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,j=null,G=null;b.depth&&(G=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?es:zi,j=b.stencil?Qi:Kn);let pe={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new en(d.textureWidth,d.textureHeight,{format:nn,type:fn,depthTexture:new As(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new en(p.framebufferWidth,p.framebufferHeight,{format:nn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(R){for(let A=0;A<R.removed.length;A++){let ie=R.removed[A],j=S.indexOf(ie);j>=0&&(S[j]=null,C[j].disconnect(ie))}for(let A=0;A<R.added.length;A++){let ie=R.added[A],j=S.indexOf(ie);if(j===-1){for(let pe=0;pe<C.length;pe++)if(pe>=S.length){S.push(ie),j=pe;break}else if(S[pe]===null){S[pe]=ie,j=pe;break}if(j===-1)break}let G=C[j];G&&G.connect(ie)}}let X=new B,he=new B;function se(R,A,ie){X.setFromMatrixPosition(A.matrixWorld),he.setFromMatrixPosition(ie.matrixWorld);let j=X.distanceTo(he),G=A.projectionMatrix.elements,pe=ie.projectionMatrix.elements,xe=G[14]/(G[10]-1),D=G[14]/(G[10]+1),Y=(G[9]+1)/G[5],$=(G[9]-1)/G[5],k=(G[8]-1)/G[0],H=(pe[8]+1)/pe[0],L=xe*k,_=xe*H,N=j/(-k+H),Q=N*-k;if(A.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Q),R.translateZ(N),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),G[10]===-1)R.projectionMatrix.copy(A.projectionMatrix),R.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let ce=xe+N,w=D+N,M=L-Q,z=_+(j-Q),q=Y*D/w*ce,ne=$*D/w*ce;R.projectionMatrix.makePerspective(M,z,q,ne,ce,w),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ve(R,A){A===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(A.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let A=R.near,ie=R.far;m.texture!==null&&(m.depthNear>0&&(A=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),O.near=T.near=E.near=A,O.far=T.far=E.far=ie,(Z!==O.near||te!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,te=O.far),O.layers.mask=R.layers.mask|6,E.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;let j=R.parent,G=O.cameras;ve(O,j);for(let pe=0;pe<G.length;pe++)ve(G[pe],j);G.length===2?se(O,E,T):O.projectionMatrix.copy(E.projectionMatrix),Ae(R,O,j)};function Ae(R,A,ie){ie===null?R.matrix.copy(A.matrixWorld):(R.matrix.copy(ie.matrixWorld),R.matrix.invert(),R.matrix.multiply(A.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(A.projectionMatrix),R.projectionMatrixInverse.copy(A.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=ki*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(R){l=R,d!==null&&(d.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(R){return u[R]};let Ue=null;function J(R,A){if(h=A.getViewerPose(c||o),g=A,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let j=!1;ie.length!==O.cameras.length&&(O.cameras.length=0,j=!0);for(let D=0;D<ie.length;D++){let Y=ie[D],$=null;if(p!==null)$=p.getViewport(Y);else{let H=f.getViewSubImage(d,Y);$=H.viewport,D===0&&(e.setRenderTargetTextures(v,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(v))}let k=F[D];k===void 0&&(k=new kt,k.layers.enable(D),k.viewport=new gt,F[D]=k),k.matrix.fromArray(Y.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Y.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set($.x,$.y,$.width,$.height),D===0&&(O.matrix.copy(k.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),j===!0&&O.cameras.push(k)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let D=f.getDepthInformation(ie[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(G&&G.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<ie.length;D++){let Y=ie[D].camera;if(Y){let $=u[Y];$||($=new Rs,u[Y]=$);let k=f.getCameraImage(Y);$.sourceTexture=k}}}}for(let ie=0;ie<C.length;ie++){let j=S[ie],G=C[ie];j!==null&&G!==void 0&&G.update(j,A,c||o)}Ue&&Ue(R,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),g=null}let V=new Jh;V.setAnimationLoop(J),this.setAnimationLoop=function(R){Ue=R},this.dispose=function(){}}},vi=new ln,B0=new ft;function O0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,xc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=e.get(u),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let v=y.program;n.uniformBlockBinding(b,v)}function c(b,y){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(b,C);let S=e.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let y=f();b.__bindingPointIndex=y;let v=i.createBuffer(),C=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,I=v.length;S<I;S++){let P=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,T=P.length;E<T;E++){let F=P[E];if(p(F,S,E,C)===!0){let O=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value],te=0;for(let oe=0;oe<Z.length;oe++){let re=Z[oe],ue=x(re);typeof re=="number"||typeof re=="boolean"?(F.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,O+te,F.__data)):re.isMatrix3?(F.__data[0]=re.elements[0],F.__data[1]=re.elements[1],F.__data[2]=re.elements[2],F.__data[3]=0,F.__data[4]=re.elements[3],F.__data[5]=re.elements[4],F.__data[6]=re.elements[5],F.__data[7]=0,F.__data[8]=re.elements[6],F.__data[9]=re.elements[7],F.__data[10]=re.elements[8],F.__data[11]=0):(re.toArray(F.__data,te),te+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,v,C){let S=b.value,I=y+"_"+v;if(C[I]===void 0)return typeof S=="number"||typeof S=="boolean"?C[I]=S:C[I]=S.clone(),!0;{let P=C[I];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[I]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(b){let y=b.uniforms,v=0,C=16;for(let I=0,P=y.length;I<P;I++){let E=Array.isArray(y[I])?y[I]:[y[I]];for(let T=0,F=E.length;T<F;T++){let O=E[T],Z=Array.isArray(O.value)?O.value:[O.value];for(let te=0,oe=Z.length;te<oe;te++){let re=Z[te],ue=x(re),X=v%C,he=X%ue.boundary,se=X+he;v+=he,se!==0&&C-se<ue.storage&&(v+=C-se),O.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=ue.storage}}}let S=v%C;return S>0&&(v+=C-S),b.__size=v,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ea=class{constructor(e={}){let{canvas:t=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=_t;let S=0,I=0,P=null,E=-1,T=null,F=new gt,O=new gt,Z=null,te=new He(0),oe=0,re=t.width,ue=t.height,X=1,he=null,se=null,ve=new gt(0,0,re,ue),Ae=new gt(0,0,re,ue),Ue=!1,J=new qi,V=!1,R=!1,A=new ft,ie=new B,j=new gt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function xe(){return P===null?X:1}let D=n;function Y(U,ae){return t.getContext(U,ae)}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),D===null){let ae="webgl2";if(D=Y(ae,U),D===null)throw Y(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let $,k,H,L,_,N,Q,ce,w,M,z,q,ne,W,de,ee,ye,be,fe,Me,we,Te,Re,ze;function K(){$=new ig(D),$.init(),Te=new U0(D,$),k=new $m(D,$,e,Te),H=new L0(D,$),k.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),L=new og(D),_=new y0,N=new D0(D,$,H,_,k,Te,L),Q=new jm(v),ce=new ng(v),w=new fd(D),Re=new Zm(D,w),M=new sg(D,w,L,Re),z=new cg(D,M,w,L),fe=new ag(D,k,N),ee=new Km(_),q=new _0(v,Q,ce,$,k,Re,ee),ne=new O0(v,_),W=new M0,de=new A0($),be=new Ym(v,Q,ce,H,z,p,l),ye=new I0(v,z,k),ze=new z0(D,L,k,H),Me=new Jm(D,$,L),we=new rg(D,$,L),L.programs=q.programs,v.capabilities=k,v.extensions=$,v.properties=_,v.renderLists=W,v.shadowMap=ye,v.state=H,v.info=L}K();let Ee=new Nc(v,D);this.xr=Ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let U=$.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=$.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(re,ue,!1))},this.getSize=function(U){return U.set(re,ue)},this.setSize=function(U,ae,me=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=U,ue=ae,t.width=Math.floor(U*X),t.height=Math.floor(ae*X),me===!0&&(t.style.width=U+"px",t.style.height=ae+"px"),this.setViewport(0,0,U,ae)},this.getDrawingBufferSize=function(U){return U.set(re*X,ue*X).floor()},this.setDrawingBufferSize=function(U,ae,me){re=U,ue=ae,X=me,t.width=Math.floor(U*me),t.height=Math.floor(ae*me),this.setViewport(0,0,U,ae)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(ve)},this.setViewport=function(U,ae,me,ge){U.isVector4?ve.set(U.x,U.y,U.z,U.w):ve.set(U,ae,me,ge),H.viewport(F.copy(ve).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(Ae)},this.setScissor=function(U,ae,me,ge){U.isVector4?Ae.set(U.x,U.y,U.z,U.w):Ae.set(U,ae,me,ge),H.scissor(O.copy(Ae).multiplyScalar(X).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(U){H.setScissorTest(Ue=U)},this.setOpaqueSort=function(U){he=U},this.setTransparentSort=function(U){se=U},this.getClearColor=function(U){return U.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(U=!0,ae=!0,me=!0){let ge=0;if(U){let le=!1;if(P!==null){let Ie=P.texture.format;le=Ie===Mo||Ie===vo||Ie===yo}if(le){let Ie=P.texture.type,De=Ie===fn||Ie===Kn||Ie===Ki||Ie===Qi||Ie===xo||Ie===_o,ke=be.getClearColor(),Be=be.getClearAlpha(),qe=ke.r,Ze=ke.g,Ge=ke.b;De?(g[0]=qe,g[1]=Ze,g[2]=Ge,g[3]=Be,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=qe,x[1]=Ze,x[2]=Ge,x[3]=Be,D.clearBufferiv(D.COLOR,0,x))}else ge|=D.COLOR_BUFFER_BIT}ae&&(ge|=D.DEPTH_BUFFER_BIT),me&&(ge|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),be.dispose(),W.dispose(),de.dispose(),_.dispose(),Q.dispose(),ce.dispose(),z.dispose(),Re.dispose(),ze.dispose(),q.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",dn),Ee.removeEventListener("sessionend",Jc),jn.stop()};function Pe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let U=L.autoReset,ae=ye.enabled,me=ye.autoUpdate,ge=ye.needsUpdate,le=ye.type;K(),L.autoReset=U,ye.enabled=ae,ye.autoUpdate=me,ye.needsUpdate=ge,ye.type=le}function Ce(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Se(U){let ae=U.target;ae.removeEventListener("dispose",Se),Fe(ae)}function Fe(U){Xe(U),_.remove(U)}function Xe(U){let ae=_.get(U).programs;ae!==void 0&&(ae.forEach(function(me){q.releaseProgram(me)}),U.isShaderMaterial&&q.releaseShaderCache(U))}this.renderBufferDirect=function(U,ae,me,ge,le,Ie){ae===null&&(ae=G);let De=le.isMesh&&le.matrixWorld.determinant()<0,ke=Lu(U,ae,me,ge,le);H.setMaterial(ge,De);let Be=me.index,qe=1;if(ge.wireframe===!0){if(Be=M.getWireframeAttribute(me),Be===void 0)return;qe=2}let Ze=me.drawRange,Ge=me.attributes.position,et=Ze.start*qe,rt=(Ze.start+Ze.count)*qe;Ie!==null&&(et=Math.max(et,Ie.start*qe),rt=Math.min(rt,(Ie.start+Ie.count)*qe)),Be!==null?(et=Math.max(et,0),rt=Math.min(rt,Be.count)):Ge!=null&&(et=Math.max(et,0),rt=Math.min(rt,Ge.count));let xt=rt-et;if(xt<0||xt===1/0)return;Re.setup(le,ge,ke,me,Be);let ht,at=Me;if(Be!==null&&(ht=w.get(Be),at=we,at.setIndex(ht)),le.isMesh)ge.wireframe===!0?(H.setLineWidth(ge.wireframeLinewidth*xe()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(le.isLine){let We=ge.linewidth;We===void 0&&(We=1),H.setLineWidth(We*xe()),le.isLineSegments?at.setMode(D.LINES):le.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else le.isPoints?at.setMode(D.POINTS):le.isSprite&&at.setMode(D.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if($.get("WEBGL_multi_draw"))at.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let We=le._multiDrawStarts,dt=le._multiDrawCounts,it=le._multiDrawCount,Gt=Be?w.get(Be).bytesPerElement:1,Si=_.get(ge).currentProgram.getUniforms();for(let Wt=0;Wt<it;Wt++)Si.setValue(D,"_gl_DrawID",Wt),at.render(We[Wt]/Gt,dt[Wt])}else if(le.isInstancedMesh)at.renderInstances(et,xt,le.count);else if(me.isInstancedBufferGeometry){let We=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,dt=Math.min(me.instanceCount,We);at.renderInstances(et,xt,dt)}else at.render(et,xt)};function tt(U,ae,me){U.transparent===!0&&U.side===Vt&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,rr(U,ae,me),U.side=Rn,U.needsUpdate=!0,rr(U,ae,me),U.side=Vt):rr(U,ae,me)}this.compile=function(U,ae,me=null){me===null&&(me=U),u=de.get(me),u.init(ae),y.push(u),me.traverseVisible(function(le){le.isLight&&le.layers.test(ae.layers)&&(u.pushLight(le),le.castShadow&&u.pushShadow(le))}),U!==me&&U.traverseVisible(function(le){le.isLight&&le.layers.test(ae.layers)&&(u.pushLight(le),le.castShadow&&u.pushShadow(le))}),u.setupLights();let ge=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let Ie=le.material;if(Ie)if(Array.isArray(Ie))for(let De=0;De<Ie.length;De++){let ke=Ie[De];tt(ke,me,le),ge.add(ke)}else tt(Ie,me,le),ge.add(Ie)}),u=y.pop(),ge},this.compileAsync=function(U,ae,me=null){let ge=this.compile(U,ae,me);return new Promise(le=>{function Ie(){if(ge.forEach(function(De){_.get(De).currentProgram.isReady()&&ge.delete(De)}),ge.size===0){le(U);return}setTimeout(Ie,10)}$.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Qe=null;function Tt(U){Qe&&Qe(U)}function dn(){jn.stop()}function Jc(){jn.start()}let jn=new Jh;jn.setAnimationLoop(Tt),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(U){Qe=U,Ee.setAnimationLoop(U),U===null?jn.stop():jn.start()},Ee.addEventListener("sessionstart",dn),Ee.addEventListener("sessionend",Jc),this.render=function(U,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ae),ae=Ee.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,ae,P),u=de.get(U,y.length),u.init(ae),y.push(u),A.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),J.setFromProjectionMatrix(A,cn,ae.reversedDepth),R=this.localClippingEnabled,V=ee.init(this.clippingPlanes,R),m=W.get(U,b.length),m.init(),b.push(m),Ee.enabled===!0&&Ee.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&la(Ie,ae,-1/0,v.sortObjects)}la(U,ae,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,se),pe=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pe&&be.addToRenderList(m,U),this.info.render.frame++,V===!0&&ee.beginShadows();let me=u.state.shadowsArray;ye.render(me,U,ae),V===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ge=m.opaque,le=m.transmissive;if(u.setupLights(),ae.isArrayCamera){let Ie=ae.cameras;if(le.length>0)for(let De=0,ke=Ie.length;De<ke;De++){let Be=Ie[De];Kc(ge,le,U,Be)}pe&&be.render(U);for(let De=0,ke=Ie.length;De<ke;De++){let Be=Ie[De];$c(m,U,Be,Be.viewport)}}else le.length>0&&Kc(ge,le,U,ae),pe&&be.render(U),$c(m,U,ae);P!==null&&I===0&&(N.updateMultisampleRenderTarget(P),N.updateRenderTargetMipmap(P)),U.isScene===!0&&U.onAfterRender(v,U,ae),Re.resetDefaultState(),E=-1,T=null,y.pop(),y.length>0?(u=y[y.length-1],V===!0&&ee.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function la(U,ae,me,ge){if(U.visible===!1)return;if(U.layers.test(ae.layers)){if(U.isGroup)me=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ae);else if(U.isLight)u.pushLight(U),U.castShadow&&u.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){ge&&j.setFromMatrixPosition(U.matrixWorld).applyMatrix4(A);let De=z.update(U),ke=U.material;ke.visible&&m.push(U,De,ke,me,j.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||J.intersectsObject(U))){let De=z.update(U),ke=U.material;if(ge&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),j.copy(U.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),j.copy(De.boundingSphere.center)),j.applyMatrix4(U.matrixWorld).applyMatrix4(A)),Array.isArray(ke)){let Be=De.groups;for(let qe=0,Ze=Be.length;qe<Ze;qe++){let Ge=Be[qe],et=ke[Ge.materialIndex];et&&et.visible&&m.push(U,De,et,me,j.z,Ge)}}else ke.visible&&m.push(U,De,ke,me,j.z,null)}}let Ie=U.children;for(let De=0,ke=Ie.length;De<ke;De++)la(Ie[De],ae,me,ge)}function $c(U,ae,me,ge){let le=U.opaque,Ie=U.transmissive,De=U.transparent;u.setupLightsView(me),V===!0&&ee.setGlobalState(v.clippingPlanes,me),ge&&H.viewport(F.copy(ge)),le.length>0&&sr(le,ae,me),Ie.length>0&&sr(Ie,ae,me),De.length>0&&sr(De,ae,me),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Kc(U,ae,me,ge){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ge.id]===void 0&&(u.state.transmissionRenderTarget[ge.id]=new en(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?ji:fn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let Ie=u.state.transmissionRenderTarget[ge.id],De=ge.viewport||F;Ie.setSize(De.z*v.transmissionResolutionScale,De.w*v.transmissionResolutionScale);let ke=v.getRenderTarget(),Be=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(te),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),pe&&be.render(me);let Ze=v.toneMapping;v.toneMapping=Un;let Ge=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),u.setupLightsView(ge),V===!0&&ee.setGlobalState(v.clippingPlanes,ge),sr(U,me,ge),N.updateMultisampleRenderTarget(Ie),N.updateRenderTargetMipmap(Ie),$.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let rt=0,xt=ae.length;rt<xt;rt++){let ht=ae[rt],at=ht.object,We=ht.geometry,dt=ht.material,it=ht.group;if(dt.side===Vt&&at.layers.test(ge.layers)){let Gt=dt.side;dt.side=Bt,dt.needsUpdate=!0,jc(at,me,ge,We,dt,it),dt.side=Gt,dt.needsUpdate=!0,et=!0}}et===!0&&(N.updateMultisampleRenderTarget(Ie),N.updateRenderTargetMipmap(Ie))}v.setRenderTarget(ke,Be,qe),v.setClearColor(te,oe),Ge!==void 0&&(ge.viewport=Ge),v.toneMapping=Ze}function sr(U,ae,me){let ge=ae.isScene===!0?ae.overrideMaterial:null;for(let le=0,Ie=U.length;le<Ie;le++){let De=U[le],ke=De.object,Be=De.geometry,qe=De.group,Ze=De.material;Ze.allowOverride===!0&&ge!==null&&(Ze=ge),ke.layers.test(me.layers)&&jc(ke,ae,me,Be,Ze,qe)}}function jc(U,ae,me,ge,le,Ie){U.onBeforeRender(v,ae,me,ge,le,Ie),U.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(v,ae,me,ge,U,Ie),le.transparent===!0&&le.side===Vt&&le.forceSinglePass===!1?(le.side=Bt,le.needsUpdate=!0,v.renderBufferDirect(me,ae,ge,le,U,Ie),le.side=Rn,le.needsUpdate=!0,v.renderBufferDirect(me,ae,ge,le,U,Ie),le.side=Vt):v.renderBufferDirect(me,ae,ge,le,U,Ie),U.onAfterRender(v,ae,me,ge,le,Ie)}function rr(U,ae,me){ae.isScene!==!0&&(ae=G);let ge=_.get(U),le=u.state.lights,Ie=u.state.shadowsArray,De=le.state.version,ke=q.getParameters(U,le.state,Ie,ae,me),Be=q.getProgramCacheKey(ke),qe=ge.programs;ge.environment=U.isMeshStandardMaterial?ae.environment:null,ge.fog=ae.fog,ge.envMap=(U.isMeshStandardMaterial?ce:Q).get(U.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&U.envMap===null?ae.environmentRotation:U.envMapRotation,qe===void 0&&(U.addEventListener("dispose",Se),qe=new Map,ge.programs=qe);let Ze=qe.get(Be);if(Ze!==void 0){if(ge.currentProgram===Ze&&ge.lightsStateVersion===De)return el(U,ke),Ze}else ke.uniforms=q.getUniforms(U),U.onBeforeCompile(ke,v),Ze=q.acquireProgram(ke,Be),qe.set(Be,Ze),ge.uniforms=ke.uniforms;let Ge=ge.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ge.clippingPlanes=ee.uniform),el(U,ke),ge.needsLights=Uu(U),ge.lightsStateVersion=De,ge.needsLights&&(Ge.ambientLightColor.value=le.state.ambient,Ge.lightProbe.value=le.state.probe,Ge.directionalLights.value=le.state.directional,Ge.directionalLightShadows.value=le.state.directionalShadow,Ge.spotLights.value=le.state.spot,Ge.spotLightShadows.value=le.state.spotShadow,Ge.rectAreaLights.value=le.state.rectArea,Ge.ltc_1.value=le.state.rectAreaLTC1,Ge.ltc_2.value=le.state.rectAreaLTC2,Ge.pointLights.value=le.state.point,Ge.pointLightShadows.value=le.state.pointShadow,Ge.hemisphereLights.value=le.state.hemi,Ge.directionalShadowMap.value=le.state.directionalShadowMap,Ge.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ge.spotShadowMap.value=le.state.spotShadowMap,Ge.spotLightMatrix.value=le.state.spotLightMatrix,Ge.spotLightMap.value=le.state.spotLightMap,Ge.pointShadowMap.value=le.state.pointShadowMap,Ge.pointShadowMatrix.value=le.state.pointShadowMatrix),ge.currentProgram=Ze,ge.uniformsList=null,Ze}function Qc(U){if(U.uniformsList===null){let ae=U.currentProgram.getUniforms();U.uniformsList=is.seqWithValue(ae.seq,U.uniforms)}return U.uniformsList}function el(U,ae){let me=_.get(U);me.outputColorSpace=ae.outputColorSpace,me.batching=ae.batching,me.batchingColor=ae.batchingColor,me.instancing=ae.instancing,me.instancingColor=ae.instancingColor,me.instancingMorph=ae.instancingMorph,me.skinning=ae.skinning,me.morphTargets=ae.morphTargets,me.morphNormals=ae.morphNormals,me.morphColors=ae.morphColors,me.morphTargetsCount=ae.morphTargetsCount,me.numClippingPlanes=ae.numClippingPlanes,me.numIntersection=ae.numClipIntersection,me.vertexAlphas=ae.vertexAlphas,me.vertexTangents=ae.vertexTangents,me.toneMapping=ae.toneMapping}function Lu(U,ae,me,ge,le){ae.isScene!==!0&&(ae=G),N.resetTextureUnits();let Ie=ae.fog,De=ge.isMeshStandardMaterial?ae.environment:null,ke=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ai,Be=(ge.isMeshStandardMaterial?ce:Q).get(ge.envMap||De),qe=ge.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,Ze=!!me.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Ge=!!me.morphAttributes.position,et=!!me.morphAttributes.normal,rt=!!me.morphAttributes.color,xt=Un;ge.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=v.toneMapping);let ht=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,at=ht!==void 0?ht.length:0,We=_.get(ge),dt=u.state.lights;if(V===!0&&(R===!0||U!==T)){let Pt=U===T&&ge.id===E;ee.setState(ge,U,Pt)}let it=!1;ge.version===We.__version?(We.needsLights&&We.lightsStateVersion!==dt.state.version||We.outputColorSpace!==ke||le.isBatchedMesh&&We.batching===!1||!le.isBatchedMesh&&We.batching===!0||le.isBatchedMesh&&We.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&We.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&We.instancing===!1||!le.isInstancedMesh&&We.instancing===!0||le.isSkinnedMesh&&We.skinning===!1||!le.isSkinnedMesh&&We.skinning===!0||le.isInstancedMesh&&We.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&We.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&We.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&We.instancingMorph===!1&&le.morphTexture!==null||We.envMap!==Be||ge.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ee.numPlanes||We.numIntersection!==ee.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ze||We.morphTargets!==Ge||We.morphNormals!==et||We.morphColors!==rt||We.toneMapping!==xt||We.morphTargetsCount!==at)&&(it=!0):(it=!0,We.__version=ge.version);let Gt=We.currentProgram;it===!0&&(Gt=rr(ge,ae,le));let Si=!1,Wt=!1,rs=!1,pt=Gt.getUniforms(),$t=We.uniforms;if(H.useProgram(Gt.program)&&(Si=!0,Wt=!0,rs=!0),ge.id!==E&&(E=ge.id,Wt=!0),Si||T!==U){H.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",U.projectionMatrix),pt.setValue(D,"viewMatrix",U.matrixWorldInverse);let zt=pt.map.cameraPosition;zt!==void 0&&zt.setValue(D,ie.setFromMatrixPosition(U.matrixWorld)),k.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&pt.setValue(D,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Wt=!0,rs=!0)}if(le.isSkinnedMesh){pt.setOptional(D,le,"bindMatrix"),pt.setOptional(D,le,"bindMatrixInverse");let Pt=le.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(D,"boneTexture",Pt.boneTexture,N))}le.isBatchedMesh&&(pt.setOptional(D,le,"batchingTexture"),pt.setValue(D,"batchingTexture",le._matricesTexture,N),pt.setOptional(D,le,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",le._indirectTexture,N),pt.setOptional(D,le,"batchingColorTexture"),le._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",le._colorsTexture,N));let Kt=me.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&fe.update(le,me,Gt),(Wt||We.receiveShadow!==le.receiveShadow)&&(We.receiveShadow=le.receiveShadow,pt.setValue(D,"receiveShadow",le.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&($t.envMap.value=Be,$t.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&ae.environment!==null&&($t.envMapIntensity.value=ae.environmentIntensity),Wt&&(pt.setValue(D,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Du($t,rs),Ie&&ge.fog===!0&&ne.refreshFogUniforms($t,Ie),ne.refreshMaterialUniforms($t,ge,X,ue,u.state.transmissionRenderTarget[U.id]),is.upload(D,Qc(We),$t,N)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(is.upload(D,Qc(We),$t,N),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&pt.setValue(D,"center",le.center),pt.setValue(D,"modelViewMatrix",le.modelViewMatrix),pt.setValue(D,"normalMatrix",le.normalMatrix),pt.setValue(D,"modelMatrix",le.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){let Pt=ge.uniformsGroups;for(let zt=0,ha=Pt.length;zt<ha;zt++){let Qn=Pt[zt];ze.update(Qn,Gt),ze.bind(Qn,Gt)}}return Gt}function Du(U,ae){U.ambientLightColor.needsUpdate=ae,U.lightProbe.needsUpdate=ae,U.directionalLights.needsUpdate=ae,U.directionalLightShadows.needsUpdate=ae,U.pointLights.needsUpdate=ae,U.pointLightShadows.needsUpdate=ae,U.spotLights.needsUpdate=ae,U.spotLightShadows.needsUpdate=ae,U.rectAreaLights.needsUpdate=ae,U.hemisphereLights.needsUpdate=ae}function Uu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(U,ae,me){let ge=_.get(U);ge.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),_.get(U.texture).__webglTexture=ae,_.get(U.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:me,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ae){let me=_.get(U);me.__webglFramebuffer=ae,me.__useDefaultFramebuffer=ae===void 0};let Nu=D.createFramebuffer();this.setRenderTarget=function(U,ae=0,me=0){P=U,S=ae,I=me;let ge=!0,le=null,Ie=!1,De=!1;if(U){let Be=_.get(U);if(Be.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(D.FRAMEBUFFER,null),ge=!1;else if(Be.__webglFramebuffer===void 0)N.setupRenderTarget(U);else if(Be.__hasExternalTextures)N.rebindTextures(U,_.get(U.texture).__webglTexture,_.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Ge=U.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&_.has(Ge)&&(U.width!==Ge.image.width||U.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(U)}}let qe=U.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);let Ze=_.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ze[ae])?le=Ze[ae][me]:le=Ze[ae],Ie=!0):U.samples>0&&N.useMultisampledRTT(U)===!1?le=_.get(U).__webglMultisampledFramebuffer:Array.isArray(Ze)?le=Ze[me]:le=Ze,F.copy(U.viewport),O.copy(U.scissor),Z=U.scissorTest}else F.copy(ve).multiplyScalar(X).floor(),O.copy(Ae).multiplyScalar(X).floor(),Z=Ue;if(me!==0&&(le=Nu),H.bindFramebuffer(D.FRAMEBUFFER,le)&&ge&&H.drawBuffers(U,le),H.viewport(F),H.scissor(O),H.setScissorTest(Z),Ie){let Be=_.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be.__webglTexture,me)}else if(De){let Be=ae;for(let qe=0;qe<U.textures.length;qe++){let Ze=_.get(U.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,me,Be)}}else if(U!==null&&me!==0){let Be=_.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,me)}E=-1},this.readRenderTargetPixels=function(U,ae,me,ge,le,Ie,De,ke=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=_.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){H.bindFramebuffer(D.FRAMEBUFFER,Be);try{let qe=U.textures[ke],Ze=qe.format,Ge=qe.type;if(!k.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=U.width-ge&&me>=0&&me<=U.height-le&&(U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(ae,me,ge,le,Te.convert(Ze),Te.convert(Ge),Ie))}finally{let qe=P!==null?_.get(P).__webglFramebuffer:null;H.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(U,ae,me,ge,le,Ie,De,ke=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=_.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(ae>=0&&ae<=U.width-ge&&me>=0&&me<=U.height-le){H.bindFramebuffer(D.FRAMEBUFFER,Be);let qe=U.textures[ke],Ze=qe.format,Ge=qe.type;if(!k.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,Ie.byteLength,D.STREAM_READ),U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(ae,me,ge,le,Te.convert(Ze),Te.convert(Ge),0);let rt=P!==null?_.get(P).__webglFramebuffer:null;H.bindFramebuffer(D.FRAMEBUFFER,rt);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _h(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ie),D.deleteBuffer(et),D.deleteSync(xt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ae=null,me=0){let ge=Math.pow(2,-me),le=Math.floor(U.image.width*ge),Ie=Math.floor(U.image.height*ge),De=ae!==null?ae.x:0,ke=ae!==null?ae.y:0;N.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,me,0,0,De,ke,le,Ie),H.unbindTexture()};let Fu=D.createFramebuffer(),Bu=D.createFramebuffer();this.copyTextureToTexture=function(U,ae,me=null,ge=null,le=0,Ie=null){Ie===null&&(le!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=le,le=0):Ie=0);let De,ke,Be,qe,Ze,Ge,et,rt,xt,ht=U.isCompressedTexture?U.mipmaps[Ie]:U.image;if(me!==null)De=me.max.x-me.min.x,ke=me.max.y-me.min.y,Be=me.isBox3?me.max.z-me.min.z:1,qe=me.min.x,Ze=me.min.y,Ge=me.isBox3?me.min.z:0;else{let Kt=Math.pow(2,-le);De=Math.floor(ht.width*Kt),ke=Math.floor(ht.height*Kt),U.isDataArrayTexture?Be=ht.depth:U.isData3DTexture?Be=Math.floor(ht.depth*Kt):Be=1,qe=0,Ze=0,Ge=0}ge!==null?(et=ge.x,rt=ge.y,xt=ge.z):(et=0,rt=0,xt=0);let at=Te.convert(ae.format),We=Te.convert(ae.type),dt;ae.isData3DTexture?(N.setTexture3D(ae,0),dt=D.TEXTURE_3D):ae.isDataArrayTexture||ae.isCompressedArrayTexture?(N.setTexture2DArray(ae,0),dt=D.TEXTURE_2D_ARRAY):(N.setTexture2D(ae,0),dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ae.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ae.unpackAlignment);let it=D.getParameter(D.UNPACK_ROW_LENGTH),Gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Si=D.getParameter(D.UNPACK_SKIP_PIXELS),Wt=D.getParameter(D.UNPACK_SKIP_ROWS),rs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let pt=U.isDataArrayTexture||U.isData3DTexture,$t=ae.isDataArrayTexture||ae.isData3DTexture;if(U.isDepthTexture){let Kt=_.get(U),Pt=_.get(ae),zt=_.get(Kt.__renderTarget),ha=_.get(Pt.__renderTarget);H.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),H.bindFramebuffer(D.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Qn=0;Qn<Be;Qn++)pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(U).__webglTexture,le,Ge+Qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_.get(ae).__webglTexture,Ie,xt+Qn)),D.blitFramebuffer(qe,Ze,De,ke,et,rt,De,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);H.bindFramebuffer(D.READ_FRAMEBUFFER,null),H.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||_.has(U)){let Kt=_.get(U),Pt=_.get(ae);H.bindFramebuffer(D.READ_FRAMEBUFFER,Fu),H.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bu);for(let zt=0;zt<Be;zt++)pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,le,Ge+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,le),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,Ie,xt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,Ie),le!==0?D.blitFramebuffer(qe,Ze,De,ke,et,rt,De,ke,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(dt,Ie,et,rt,xt+zt,qe,Ze,De,ke):D.copyTexSubImage2D(dt,Ie,et,rt,qe,Ze,De,ke);H.bindFramebuffer(D.READ_FRAMEBUFFER,null),H.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?U.isDataTexture||U.isData3DTexture?D.texSubImage3D(dt,Ie,et,rt,xt,De,ke,Be,at,We,ht.data):ae.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,Ie,et,rt,xt,De,ke,Be,at,ht.data):D.texSubImage3D(dt,Ie,et,rt,xt,De,ke,Be,at,We,ht):U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ie,et,rt,De,ke,at,We,ht.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ie,et,rt,ht.width,ht.height,at,ht.data):D.texSubImage2D(D.TEXTURE_2D,Ie,et,rt,De,ke,at,We,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,it),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Si),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rs),Ie===0&&ae.generateMipmaps&&D.generateMipmap(dt),H.unbindTexture()},this.initRenderTarget=function(U){_.get(U).__webglFramebuffer===void 0&&N.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?N.setTextureCube(U,0):U.isData3DTexture?N.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?N.setTexture2DArray(U,0):N.setTexture2D(U,0),H.unbindTexture()},this.resetState=function(){S=0,I=0,P=null,H.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var js=new B;function sn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let c=.5*o/(o+a),h=1-js.angleTo(i)/l;return Math.sign(js[t])===1?h*c:a/(o+a)+c+c*(1-h)}var vn=class i extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,x=new B,m=.5/o;for(let u=0,b=0;u<f.length;u+=3,b+=2)switch(l.fromArray(f,u),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[u+0]=h.x*Math.sign(l.x)+c.x*r,f[u+1]=h.y*Math.sign(l.y)+c.y*r,f[u+2]=h.z*Math.sign(l.z)+c.z*r,d[u+0]=c.x,d[u+1]=c.y,d[u+2]=c.z,Math.floor(u/g)){case 0:x.set(1,0,0),p[b+0]=sn(x,c,"z","y",r,n),p[b+1]=1-sn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[b+0]=1-sn(x,c,"z","y",r,n),p[b+1]=1-sn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[b+0]=1-sn(x,c,"x","z",r,e),p[b+1]=sn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[b+0]=1-sn(x,c,"x","z",r,e),p[b+1]=1-sn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[b+0]=1-sn(x,c,"x","y",r,e),p[b+1]=1-sn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[b+0]=sn(x,c,"x","y",r,e),p[b+1]=1-sn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var k0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},H0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function Bc(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((h,f)=>h-f).join(":");if(s.has(a))return null;s.add(a);let l=n[0]+(r%i+o%i)*t/2,c=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[l,c],ends:r%i===o%i?[[l-t/2,c],[l+t/2,c]]:[[l,c-t/2],[l,c+t/2]]}}).filter(Boolean)}function na({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!H0[o])throw Error("Unknown fence design");let a=k0[r];if(!a)throw Error("Unknown fence style");let l=new Ve;l.name="wood-fence";let c=Bc(i,e,{pitch:t,origin:n});l.userData={walls:c.map(u=>[u.a,u.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let h=new je({color:a.wood,roughness:.83}),f=new je({color:a.end,roughness:.8}),d=new je({color:a.grain,roughness:.95}),p=new je({color:"#665341",roughness:.7}),g=(u,b,y,v,C,S,I,P,E)=>{let T=new Oe(new vn(b,y,v,3,C),S);return T.position.set(I,P,E),T.castShadow=T.receiveShadow=!0,u.add(T),T},x=(u,b,y=.12)=>{let v=new Oe(new Ft(new Nt(b),16,y,4,!1),d);u.add(v)},m=new Map;for(let u of c){for(let[y,v]of u.ends){let C=y+":"+v;if(m.has(C))continue;let S=new Ve;if(S.name="fence-post",S.position.set(y,v,s-2),l.add(S),m.set(C,S),o==="logs"){let I=new Oe(new tn(3.25,3.65,34,18),h);I.rotation.x=Math.PI/2,I.position.z=17,I.castShadow=I.receiveShadow=!0,S.add(I);let P=new Oe(new ct(3.65,18,10),f);P.scale.z=.35,P.position.z=34,P.castShadow=!0,S.add(P)}else g(S,6.3,6.3,34,1.05,h,0,0,17),g(S,7.4,7.4,3.1,1.25,f,0,0,34);for(let I of[-1,1])for(let P=0;P<2;P++){let E=[];for(let T=0;T<=9;T++)E.push(new B(-1.7+P*2.5+Math.sin(T*.6+P)*.22,I*3.16,3+T*2.2));x(S,E,.1)}}let b=new Ve;if(b.name="fence-span",b.position.set(...u.center,s),u.a%i!==u.b%i&&(b.rotation.z=Math.PI/2),b.userData.cells=[u.a,u.b],l.add(b),o==="rails")for(let y of[16,24]){g(b,t-4.5,4.2,5.1,.95,h,0,0,y);for(let v of[-1,1]){for(let S=0;S<2;S++){let I=[];for(let P=0;P<=12;P++){let E=-t/2+5+P*(t-10)/12;I.push(new B(E,v*2.12,y-.9+S*1.7+Math.sin(P*.65+y)*.2))}x(b,I,.1)}for(let S of[-t/2+5.8,t/2-5.8]){let I=new Oe(new ct(.56,8,6),p);I.scale.y=.3,I.position.set(S,v*2.28,y),b.add(I)}let C=[];for(let S=0;S<=24;S++){let I=S/24*Math.PI*2;C.push(new B(11+Math.cos(I)*1.6,v*2.14,y+Math.sin(I)*.65))}x(b,C,.1)}}else if(o==="picket"){for(let y of[15,25])g(b,t-4.5,3.2,3.6,.8,h,0,1.2,y);for(let y=0;y<5;y++){let v=(y-2)*(t-14)/5,C=7.2,S=new vt;S.moveTo(-C/2,11),S.lineTo(C/2,11),S.lineTo(C/2,27),S.bezierCurveTo(C/2,32,-C/2,32,-C/2,27),S.closePath();let I=new Oe(new Zt(S,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),y%2?f:h);I.rotation.x=Math.PI/2,I.position.set(v,-.7,0),I.castShadow=I.receiveShadow=!0,b.add(I);for(let P of[15,25]){let E=new Oe(new ct(.48,8,6),p);E.scale.y=.3,E.position.set(v,-3.65,P),b.add(E)}x(b,[new B(v-1.2,-3.91,13),new B(v-1,-3.91,21),new B(v-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let S of[13,29])g(b,t-4.5,4,3.6,.8,h,0,0,S);let y=t-12,v=Math.atan2(16,y),C=Math.hypot(y,16);for(let S of[-1,1]){let I=new Ve;I.position.set(0,S*1.35,21),I.rotation.y=S*v,b.add(I),g(I,C,2.5,3.6,.75,f,0,0,0);for(let P of[-1,1])x(I,[new B(-C/2+2,P*1.27,-.5),new B(0,P*1.27,-.25),new B(C/2-2,P*1.27,-.55)],.1)}for(let S of[-1,1]){let I=new Oe(new ct(.65,10,8),p);I.scale.y=.3,I.position.set(0,S*2.75,21),b.add(I)}}else for(let y of[16,26]){let v=new Oe(new tn(2.3,2.3,t-4.5,18),h);v.rotation.z=Math.PI/2,v.position.z=y,v.castShadow=v.receiveShadow=!0,b.add(v);for(let C of[-1,1])for(let S of[-.9,.9]){let I=[];for(let P=0;P<=12;P++)I.push(new B(-t/2+4+P*(t-8)/12,C*Math.sqrt(2.3**2-S**2),y+S+Math.sin(P*.7)*.1));x(b,I,.1)}}}return{group:l,edges:c,dispose(){let u=new Set,b=new Set;l.traverse(y=>{y.geometry&&u.add(y.geometry),y.material&&b.add(y.material)}),u.forEach(y=>y.dispose()),b.forEach(y=>y.dispose())}}}var V0={rails:{name:"Spatz",body:"#ad8a61",head:"#a88561",breast:"#e9d8b5",wing:"#81664c",tail:"#806347"},picket:{name:"Rotkehlchen",body:"#9d9474",head:"#a29370",breast:"#e8955c",wing:"#7d795e",tail:"#716c54"},cross:{name:"Blaumeise",body:"#d9d77d",head:"#80afca",breast:"#eee396",wing:"#74a6c2",tail:"#6592ab"},logs:{name:"Zaunk\xF6nig",body:"#b48c60",head:"#b8936b",breast:"#ead5ad",wing:"#946c46",tail:"#8e653f"}},ia=i=>(i=ot.clamp(i,0,1),i*i*(3-2*i));function G0({design:i="rails",seed:e=73,scale:t=.85}={}){let n=V0[i];if(!n)throw Error("Unknown bird design");let s=new Ve;s.name="fence-bird",s.userData={species:n.name,seed:e},s.scale.setScalar(t);let r=[],o=[],a=new ct(1,24,16);r.push(a);let l=j=>{let G=new je({color:j,roughness:.8});return o.push(G),G},c=l(n.body),h=l(n.head),f=l(n.breast),d=l(n.wing),p=l(n.tail),g=l("#3d332e"),x=l("#fff3d7"),m=l("#b28c4f");function u(j,G,pe,xe,D,Y,$,k){let H=new Oe(a,G);return H.position.set(pe,xe,D),H.scale.set(Y,$,k),H.castShadow=H.receiveShadow=!0,j.add(H),H}let b=new Ve;s.add(b),u(b,c,0,0,6.5,4.8,5.7,5.5),u(b,f,0,-3.5,7,3.8,2.2,4);let y=[];for(let j of[-1,1]){let G=u(b,d,j*3.9,.4,6.8,1.3,4.4,3.5);G.rotation.x=-.2,G.rotation.y=j*.15,y.push(G),i==="cross"&&u(b,x,j*4.6,-.3,7,.35,2.5,.45)}let v=new Ve;v.position.set(0,4.2,4.1),v.rotation.x=i==="logs"?.8:.2,b.add(v);for(let j of[-1,0,1]){let G=u(v,p,j*.85,3.2,0,1.1,i==="logs"?3:4.5,.6);G.rotation.z=j*.1}let C=new Ve;if(C.position.set(0,-2,11.4),b.add(C),u(C,h,0,0,0,4.1,3.8,4),i==="cross"&&(u(C,x,0,-2.1,-.1,3.5,1.8,2.6),u(C,h,0,0,2.8,3.2,2.8,1.3)),i==="picket"&&u(C,f,0,-2.5,-1.4,3.3,1.4,2.6),i==="logs")for(let j of[-1,1])u(C,x,j*2.7,-1.9,1.4,1.2,1,.35);let S=[];for(let j of[-1,1]){let G=u(C,g,j*2.35,-3.03,.7,.82,.48,.94);S.push(G),u(C,x,j*2.35-.19,-3.45,1.02,.23,.12,.26)}let I=new Cs(.85,2.5,12);r.push(I);let P=new Oe(I,m);P.rotation.z=Math.PI,P.position.set(0,-4.2,-.4),P.castShadow=!0,C.add(P);for(let j of[-1,1]){let G=new Nt([new B(j*1.8,.1,2.3),new B(j*1.8,-.2,.5),new B(j*1.8,-1.6,.25)]),pe=new Ft(G,10,.26,6,!1);r.push(pe),s.add(new Oe(pe,m));for(let xe of[-.5,.5])u(s,m,j*1.8+xe,-.8,.25,.22,1,.22)}let E=new Ve;E.name="bird-flight-rig";for(let j of[...s.children])E.add(j);s.add(E);let T=-100,F=null,O=0,Z=3.5,te=0,oe=null,re=0,ue=0,X=!0,he=-10,se=0,ve=3+e%7*.3;function Ae(){return se-T<3.8+Z||se-he<3.8?!1:(he=se,ve=se+22,!0)}function Ue(j){return se-T<3.8+Z||se-he<3.8?!1:(F=typeof j=="function"?j:j.clone(),O=0,oe=null,re=0,Z=3.5+A(++te+13)*4.5,s.userData.stayDuration=Z,T=se,ve=se+Z+24,!0)}function J(){let j=se-T;return!F||j<0||j>=1.8+Z?!1:(oe=E.position.clone(),re=ue,T=se-(1.8+Z),!0)}let V=j=>(j=ot.clamp(j,0,1),j*j*j*(j*(j*6-15)+10));function R(j){let G=oe||(typeof F=="function"?F():F),pe=new B;E.rotation.z=O;let xe,D,Y=0,$=0;if(j<1.8)D=V(j/1.8),xe=new Ln(pe,new B(G.x*.18-8,G.y*.18,24),new B(G.x*.85,G.y*.8,G.z+19),G),$=Math.sin(Math.PI*ot.clamp(j/1.8,0,1))*.75+.2;else if(j<1.8+Z){E.position.copy(G);let H=j-1.8;for(let N=0;N<5;N++){let Q=.5+N*1.45+A(te*11+N)*.45,ce=.19+A(N+22)*.1;Q<Z-.3&&(Y+=Math.exp(-(((H-Q)/ce)**2))*(.75+A(N+te)*.25))}let L=(A(te+80)-.5)*Math.PI,_=Math.atan2(Math.sin(L-O),Math.cos(L-O));return O+=_*.025,E.rotation.z=O,{peck:Y,flap:0}}else D=V((j-1.8-Z)/2),xe=new Ln(G,new B(G.x-12,G.y*.72,G.z+30),new B(-10,8,17),pe),$=Math.sin(Math.PI*ot.clamp((j-1.8-Z)/2,0,1))*.8+.15;E.position.copy(xe.getPoint(D));let k=xe.getTangent(D);if(Math.hypot(k.x,k.y)>.01){let H=Math.atan2(k.x,-k.y),L=Math.atan2(Math.sin(H-O),Math.cos(H-O));O+=L*.17,E.rotation.z=O}return E.rotation.x=-$*.12,E.rotation.y=Math.sin(j*1.6)*$*.07,j>3.35+Z&&(E.rotation.z*=1-V((j-3.35-Z)/.45)),Y=re*(1-V((j-1.8-Z)/.25)),{peck:Y,flap:$}}let A=j=>{let G=Math.sin(j*12.9898+e*78.233)*43758.5453;return G-Math.floor(G)};function ie(j){let G=Math.max(0,j);se=G,X&&G>=ve&&(he=G,ve=G+20+(e+Math.floor(G))%7);let pe=G-he,xe=ot.clamp(pe/3.6,0,1),D=pe>=0&&pe<3.6?Math.sin(Math.PI*xe)**2:0,Y=D,$=Math.sin(xe*Math.PI*2);E.position.set(Y*38,$*Y*15,D*23);let k=ia((xe-.3)/.4)*(1-ia((xe-.84)/.16));E.rotation.set(-D*.12,$*D*.1,k*Math.PI),s.userData.flightAge=pe,s.userData.fluttering=D>0;let H=Math.floor(G/6.7),L=G%6.7,_=1.5+A(H)*2,N=ia((L-_)/.65)*(1-ia((L-_-1.1)/.8)),Q=(A(H+51)-.5)*.9,ce=G-T,w=F&&ce>=0&&ce<3.8+Z,M=0,z=D;if(w){let de=R(ce);M=de.peck,z=de.flap}ue=M,s.userData.groundVisit=w?ce:-1,C.rotation.z=Q*N,C.rotation.x=Math.sin(G*.8+e)*.025+N*.04,C.rotation.x+=M*.8,b.rotation.x=M*.82,b.scale.set(1+Math.sin(G*1.9+e)*.008,1,1+Math.sin(G*1.9+e)*.012);let q=(G+A(7)*5)%5.4,ne=q>4.9&&q<5.04;S.forEach(de=>de.scale.z=ne?.15:.94);let W=Math.exp(-(((L-5.8)/.22)**2))*Math.sin(G*35)*.045;y.forEach((de,ee)=>de.rotation.y=(ee?1:-1)*(.15+W+z*(.45+Math.sin((w?ce:pe)*32)*.95))),v.rotation.z=Math.sin(G*.65+e)*.025}return ie(0),{group:s,update:ie,flutter:Ae,landAndPeck:Ue,returnToPerch:J,setAutoFlutter:j=>X=!!j,dispose(){r.forEach(j=>j.dispose()),o.forEach(j=>j.dispose())}}}function eu(i={}){let e=na(i),t=null;if(i.bird!==!1){let h=e.group.children.filter(f=>f.name==="fence-post").sort((f,d)=>f.position.y-d.position.y||f.position.x-d.position.x);h.length&&(t=G0({design:i.design||"rails",seed:i.seed||73}),t.group.position.copy(h[Math.min(h.length-1,Math.max(0,Math.floor(i.perchIndex||0)))].position),t.group.position.z+=35.6,e.group.add(t.group))}let n=8,s=null,r=0,o=!!(i.groundTarget||i.groundTargets);t&&o&&t.setAutoFlutter(!1);function a(){return i.groundTargets?i.groundTargets():i.groundTarget?[{cell:null,position:i.groundTarget()}]:[]}function l(){if(!t||!o)return!1;let h=a().filter(u=>u.position&&!i.isUnsafe?.(u.cell));if(!h.length)return!1;let f=h[((i.seed||73)+r*7)%h.length],d=new B(...f.position),p=[[-22,18],[22,18],[22,-18],[-22,-18]];if(f.center){let u=p[r%4];d.x+=u[0],d.y+=u[1]}let g=d.clone(),x=()=>{let u=a().find(y=>y.cell===f.cell),b=g.clone();return u?.position&&(b.z=u.position[2]),b.sub(t.group.position).divideScalar(t.group.scale.x)},m=t.landAndPeck(x);return m&&(s=f.cell,t.group.userData.landingCell=s,r++),m}let c=e.dispose;return{...e,bird:t,update:h=>{i.isUnsafe?.(s)&&t?.returnToPerch(),o&&i.autoGround!==!1&&h>=n&&(l()?n=h+28+r*13%15:n=h+5),t?.update(h)},flutter:()=>t?.flutter(),groundVisit:l,returnToPerch:()=>t?.returnToPerch(),dispose(){t&&(t.group.removeFromParent(),t.dispose()),c()}}}function tu({n:i=5,seed:e=73,flowerShare:t=40,clustering:n=75,cells:s=null}={}){let r=e,o=()=>(r=r*1664525+1013904223>>>0)/4294967296,a=["flowers","pearls","bouquet","bells","butterdots"],l=Math.floor(o()*a.length),c=[a[l],a[(l+1+Math.floor(o()*(a.length-1)))%a.length]],h=Array.from({length:3},(b,y)=>({x:o()*(i-1),y:o()*(i-1),kind:c[y%2]})),f=Math.min(1,Math.max(0,n/100)),d=["calm","classic","rich","tuft","moss","fine","cloverNest"],p=(s||Array.from({length:i*i},(b,y)=>y)).map(b=>{let y=b%i,v=Math.floor(b/i),C=h[0],S=1/0;for(let I of h){let P=Math.hypot(y-I.x,v-I.y);P<S&&(S=P,C=I)}return{i:b,score:(1-f)*o()+f*Math.exp(-S*S/3),kind:C.kind,visitor:o(),base:d[Math.floor(o()*d.length)]}}),g=Math.round(p.length*Math.min(100,Math.max(0,t))/100),x=new Set([...p].sort((b,y)=>y.score-b.score||b.i-y.i).slice(0,g).map(b=>b.i)),m=0,u=Array(i*i).fill(null);for(let b of p)u[b.i]=x.has(b.i)?b.visitor<.06&&m++<1?"flutter":b.visitor>=.06&&b.visitor<.12&&m++<1?"visitors":b.kind:b.base;return u}var Oc=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),zc={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function W0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new mn(t)}function Qs(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=zc[i];if(!n)throw Error("Unknown tile "+i);let s=new Ve,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=(p,g={})=>new je({color:p,roughness:.75,...g}),a=(p,g,x=0,m=0,u=0)=>{let b=new Oe(p,g);return b.position.set(x,m,u),b.castShadow=b.receiveShadow=!0,s.add(b),b},l=o(n.color,{bumpMap:W0(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),c=n.height+3.5,h,f;if(n.kind==="earth"){let p=73.5,g=5,x=-p/2,m=p/2,u=new vt;u.moveTo(x+g,x),u.lineTo(m-g,x),u.quadraticCurveTo(m,x,m,x+g),u.lineTo(m,m-g),u.quadraticCurveTo(m,m,m-g,m),u.lineTo(x+g,m),u.quadraticCurveTo(x,m,x,m-g),u.lineTo(x,x+g),u.quadraticCurveTo(x,x,x+g,x),u.closePath(),h=new Zt(u,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),f=-1}else h=new vn(78.5,78.5,c,4,7.5),f=(n.height-3.5)/2;let d=a(h,l,0,0,f);if(d.userData.surface=!0,!t)if(n.kind==="earth"){let p=[o("#c59b6b"),o("#98714c"),o("#dbb78a")];for(let g=0;g<n.pebbles;g++){let x=(r()-.5)*59,m=(r()-.5)*59,u=.8+r()*1.2,b=a(new ct(1,9,6),p[g%3],x,m,n.height-.25);b.scale.set(u*1.6,u,u*.55),b.rotation.z=r()*6}for(let g=0;g<22;g++){let x=a(new ct(1,8,6),l,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;x.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let p=[o("#d3f471"),o("#b1e443"),o("#87bf24")],g=(x,m,u)=>{let b=new vt;return b.moveTo(-u,0),b.quadraticCurveTo(-u*.8,x*.6,m,x),b.quadraticCurveTo(u*1.1,x*.45,u,0),b.closePath(),new Zt(b,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<n.tufts;x++){let m=(r()-.5)*59,u=(r()-.5)*59;for(let b=0;b<3;b++){let y=n.bladeHeight*(.6+r()*.4),v=a(g(y,(b-1)*y*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),p[b],m+(b-1)*1.8,u,n.height-.15);v.rotation.x=Math.PI/2,v.rotateOnWorldAxis(new B(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let x=0;x<6;x++){let m=(r()-.5)*50,u=(r()-.5)*50;for(let b=0;b<3;b++){let y=b*Math.PI*2/3,v=a(new ct(1,12,8),p[x%2],m+Math.cos(y)*2.3,u+Math.sin(y)*2.3,n.height+1.7);v.scale.set(3.3,2.6,.9),v.rotation.z=y}}l.emissive.set("#4c790c"),l.emissiveIntensity=.055}else{let p=o("#9fc53b");for(let g=0;g<4;g++){let x=g*Math.PI/2+.3,m=a(new ct(1,12,8),p,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=x}}return n.kind!=="earth"&&n.kind!=="reference"&&(l.emissive.set("#4c790c"),l.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:Oc},s}function er(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var kc={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function sa(i,{seed:e=73}={}){let t=kc[i];if(!t)throw Error("Unknown meadow "+i);let n=Qs("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(S=>S.userData.surface),r=new Ve;for(let S of[...n.children])S!==s&&r.add(S);er(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new ct(1,12,8),l=S=>new je({color:S,roughness:.75}),c=[l("#d3f471"),l("#b1e443"),l("#87bf24")],h=[],f=(S,I,P,E,T)=>{let F=new Oe(S,I);return F.position.set(P,E,T),F.castShadow=F.receiveShadow=!0,n.add(F),F};function d(S,I,P,E,T=3.3,F=2.6){let O=f(a,c[1],S,I,P);return O.scale.set(T,F,.85),O.rotation.z=E,O}for(let S=0;S<t.clover;S++){let I=(o()-.5)*52,P=(o()-.5)*52;for(let E=0;E<3;E++){let T=E*Math.PI*2/3+o()*.12;d(I+Math.cos(T)*2.3,P+Math.sin(T)*2.3,19.7,T)}}function p(S,I,P){for(let E=0;E<3;E++){let T=new vt,F=(E-1)*P*.35;T.moveTo(-1,0),T.quadraticCurveTo(-.8,P*.65,F,P),T.quadraticCurveTo(1,P*.45,1,0),T.closePath();let O=new Zt(T,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),Z=f(O,c[E],S+(E-1)*1.6,I,17.8);Z.rotation.x=Math.PI/2,Z.rotateOnWorldAxis(new B(0,0,1),.6)}}for(let S=0;S<t.tufts;S++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=l("#fff3c4"),x=l("#f6b7a0"),m=l("#efb52e"),u=l("#709e29"),b=l("#edbd43"),y=l("#63502a"),v=new je({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let S=0;S<(t.flowers||0);S++){let I=S?-16:16,P=S?-14:12,E=S?24:25.5,T=f(new tn(.6,.85,E-18,8),u,I,P,(18+E)/2);T.rotation.x=Math.PI/2;for(let O=0;O<5;O++){let Z=O*Math.PI*2/5,te=f(a,S?x:g,I+Math.cos(Z)*3,P+Math.sin(Z)*3,E);te.scale.set(3.2,1.8,.8),te.rotation.z=Z}if(f(a,m,I,P,E+.7).scale.set(1.9,1.9,1.2),d(I-2,P,20.5,-.5,3.2,1.4),t.insects)for(let O=0;O<t.insects;O++){let Z=new Ve;n.add(Z);let te=new Oe(a,b);te.scale.set(.85,1.3,.8),Z.add(te);let oe=new Oe(a,y);oe.position.y=1.2,oe.scale.setScalar(.6),Z.add(oe);let re=[];for(let ue of[-1,1]){let X=new Oe(a,v);X.position.set(ue*1,0,.5),X.scale.set(1.8,.75,.25),X.rotation.z=ue*.35,Z.add(X),re.push(X)}h.push({insect:Z,wings:re,x:I,y:P,phase:O*3.14,radius:8+O*2,z:E+5+O})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function C(S){for(let I of h){let P=S*.85+I.phase;I.insect.position.set(I.x+Math.cos(P)*I.radius,I.y+Math.sin(P)*I.radius*.65,I.z+Math.sin(S*1.8+I.phase)*1.2),I.insect.rotation.z=P,I.wings.forEach((E,T)=>E.rotation.y=Math.sin(S*28)*(T?1:-1)*.45)}}return C(0),{group:n,update:C,dispose(){er(n)}}}var X0={moss:{name:"Weiche Moospolster"},fine:{name:"Feine Wiesengr\xE4ser"},pearls:{name:"Kleine Wei\xDFbl\xFCten"},cloverNest:{name:"Kleeinseln"},flutter:{name:"Schmetterlingsbesuch"},bouquet:{name:"Bl\xFCtennest"},bells:{name:"Kleine Glockenblumen"},butterdots:{name:"Goldene Sternchen"}};function nu(i,{seed:e=73}={}){if(!X0[i])throw Error("Unknown meadow extra "+i);let t=sa(i==="cloverNest"?"calm":"classic",{seed:e}),n=t.group,s=e,r=()=>(s=s*1664525+1013904223>>>0)/4294967296,o=new ct(1,16,10),a=new je({color:"#b1e443",roughness:.85}),l=new je({color:"#d3f471",roughness:.85}),c=new je({color:"#fff3c4",roughness:.75}),h=new je({color:"#efb52e",roughness:.75});function f(d,p,g,x,m,u,b,y=0){let v=new Oe(o,d);return v.position.set(p,g,x),v.scale.set(m,u,b),v.rotation.z=y,v.castShadow=v.receiveShadow=!0,n.add(v),v}if(i==="moss")for(let[d,p]of[[-18,15],[17,-16]])for(let g=0;g<8;g++){let x=r()*6.28,m=r()*6;f(g%3?a:l,d+Math.cos(x)*m,p+Math.sin(x)*m,19.1,2.5+r()*1.5,2+r(),.8+r()*.6)}if(i==="fine")for(let[d,p]of[[-19,-15],[19,16],[-15,20]])for(let g=0;g<5;g++){let x=4+r()*4,m=(g-2)*1.5,u=new Nt([new B(d+g*.6,p,18.5),new B(d+g*.6+m*.35,p+.3,18.5+x*.7),new B(d+g*.6+m,p+1,18.5+x)]),b=new Ft(u,10,.3,5,!1),y=new Oe(b,g%2?a:l);y.castShadow=y.receiveShadow=!0,n.add(y)}if(i==="pearls")for(let[d,p]of[[-19,18],[-14,13],[18,-16]]){let g=d+(r()-.5)*5,x=p+(r()-.5)*5;f(a,g,x,20,.45,.45,2);for(let m=0;m<5;m++){let u=m*6.28/5;f(c,g+Math.cos(u)*1.8,x+Math.sin(u)*1.8,22,1.8,1,.55,u)}f(h,g,x,22.5,1,1,.7)}if(i==="cloverNest")for(let[d,p]of[[-17,15],[17,-15]])for(let g=0;g<4;g++){let x=g*2.4,m=2+g*1.4,u=d+Math.cos(x)*m,b=p+Math.sin(x)*m;for(let y=0;y<3;y++){let v=y*6.28/3;f(a,u+Math.cos(v)*2.1,b+Math.sin(v)*2.1,19.8+g*.08,3,2.4,.8,v)}}if(["bouquet","bells","butterdots"].includes(i)){let d=new je({color:"#efb7b0",roughness:.8}),p=new je({color:"#b7a4de",roughness:.8}),g=[[-22,17],[-13,20],[-18,8],[18,-15],[24,-9],[12,-22],[10,15]],x=5+Math.floor(r()*3),m=(r()-.5)*.38;for(let[u,[b,y]]of g.slice(0,x).entries()){let v=b*Math.cos(m)-y*Math.sin(m)+(r()-.5)*3,C=b*Math.sin(m)+y*Math.cos(m)+(r()-.5)*3,S=21.7+r()*2.2,I=r()*6.28,P=.85+r()*.25,E=n.children.length;if(f(a,v,C,20,.4,.4,2),i==="bells"){let F=f(p,v,C,S,2.3,2.3,2.5);for(let O=0;O<5;O++){let Z=O*6.28/5+I;f(p,v+Math.cos(Z)*1.8,C+Math.sin(Z)*1.8,S-1.2,1.3,1,.65,Z)}f(c,v,C,S-2.3,.7,.7,.4)}else{for(let F=0;F<(i==="butterdots"?5:7);F++){let O=F*6.28/(i==="butterdots"?5:7)+I;f(i==="butterdots"?h:u%2?d:c,v+Math.cos(O)*2.1,C+Math.sin(O)*2.1,S,2.2*P,1.2*P,.6,O)}f(h,v,C,S+.6,1.15,1.15,.7)}let T=new Ve;T.position.set(v,C,18);for(let F of n.children.slice(E))F.position.sub(T.position),T.add(F);T.rotation.set((r()-.5)*.14,(r()-.5)*.14,0),n.add(T)}}if(n.userData.meadowVariant=i,n.userData.decorationSeed=e,i==="flutter"){for(let[m,u]of[[-17,13],[18,-14]]){let b=m+(r()-.5)*5,y=u+(r()-.5)*5;for(let v=0;v<5;v++){let C=v*6.28/5;f(c,b+Math.cos(C)*2,y+Math.sin(C)*2,22,2,1.2,.6,C)}f(h,b,y,22.6,1.2,1.2,.8)}let d=new Ve;n.add(d);let p=new Oe(o,new je({color:"#775238",roughness:.8}));p.scale.set(.5,2,.5),d.add(p);let g=[];for(let m of[-1,1]){let u=new Ve;d.add(u);let b=new Oe(o,new je({color:"#f1c777",roughness:.75}));b.position.x=m*2,b.scale.set(2.8,2.2,.25),u.add(b),g.push({hinge:u,side:m})}let x=t.update;t.update=m=>{x(m),d.position.set(Math.sin(m*.43)*17,Math.sin(m*.69+.4)*13,28+Math.sin(m*.8)*2),d.rotation.z=Math.atan2(Math.cos(m*.69+.4)*13*.69,Math.cos(m*.43)*17*.43)-Math.PI/2;for(let{hinge:u,side:b}of g)u.rotation.y=b*(.25+Math.sin(m*14)*.65)},n.userData.animated=!0}if(i==="fine"){let d=n.children.filter(g=>g.geometry?.type==="TubeGeometry").map((g,x)=>({mesh:g,i:x})),p=t.update;t.update=g=>{p(g);for(let{mesh:x,i:m}of d)x.rotation.y=Math.sin(g*1.1+m*.45)*.045,x.rotation.x=Math.sin(g*.8+m*.3)*.025},n.userData.animated=!0}return t.update(0),t}var Hc=new WeakMap;function Vc(i){if(Hc.has(i))return Hc.get(i);let e=i.solution.filter(s=>!i.marks.includes(s)).sort((s,r)=>s-r),t=i.meadowSeed||[...i.id||"garden"].reduce((s,r)=>s*31+r.charCodeAt(0)>>>0,73),n=tu({n:i.n,seed:t,cells:e,flowerShare:40,clustering:75});for(let s of i.marks)n[s]="calm";return Hc.set(i,n),n}function iu(i,e){let t=Vc(i)[e]||"classic",n=(i.meadowSeed||73)+e*19,s=kc[t]?sa(t,{seed:n}):nu(t,{seed:n});if(["flowers","visitors"].includes(t)){let r=n%4*Math.PI/2;for(let o of s.group.children)if(!o.userData.surface){let a=o.position.x,l=o.position.y;o.position.set(a*Math.cos(r)-l*Math.sin(r),a*Math.sin(r)+l*Math.cos(r),o.position.z),o.rotation.z+=r}}return s}function su(i){if(!i.fence||!i.walls?.length)return null;let e=[...i.id||"garden"].reduce((l,c)=>l*31+c.charCodeAt(0)>>>0,73);if(e%4===0)return null;let t=Vc(i),n=new Set(["flowers","visitors","pearls","flutter","bouquet","bells","butterdots"]),s=new Map;for(let l of Bc(i.n,i.walls,{origin:[60,-60]}))for(let[c,h]of l.ends)s.set(c+":"+h,{x:c,y:h});let r=[...s.values()].sort((l,c)=>l.y-c.y||l.x-c.x),o=[...i.solution].sort((l,c)=>l-c),a=null;for(let[l,c]of r.entries()){let h=o.filter(f=>!i.marks.includes(f)&&!n.has(t[f])&&Math.hypot(f%i.n*80+60-c.x,-Math.floor(f/i.n)*80-60-c.y)<58);h.length&&(!a||h.length>a.cells.length)&&(a={seed:e,perchIndex:l,cells:h})}return a}function ru(i,e,t,n=!1){if(e==null)return!1;if(n||!i.solution.includes(e)||i.marks.includes(e))return!0;let s=t.at(-1)??i.marks[0];return Math.abs(s%i.n-e%i.n)+Math.abs(Math.floor(s/i.n)-Math.floor(e/i.n))<=1}function tr(i=-1,e="hops"){let t=d=>(d=Math.max(0,Math.min(1,d)),d*d*d*(d*(d*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="compact"){if(i>1.25)return n;let d=t(i/.22)*(1-t((i-.65)/.55));return{...n,active:!0,look:t(i/.55),happy:d,tuck:d*.6,lift:d*.25,pitch:-d*.018,roll:Math.sin(i*5)*d*.012,antenna:d*.18,squash:d*.008}}if(e==="gentle"){let d=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=d*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:d*1.35,happy:d,roll:p,pitch:-d*.035,squash:d*.012,antenna:d*.3+Math.sin(i*8)*d*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(d,p,g)=>{let x=(i-d)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(d,p)=>{let g=(i-d)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},l=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,c=a(.72,.3),h=a(1.35,.3),f=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:c*.055+h*.035+f*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:l*.65+r*.045,pitch:c*.035-r*.007-l*.013,roll:r*.005*Math.sin(i*3+.6)+l*.012}}function Gc(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,l=o<.66,c,h=0,f=0;if(l)c=-a/2+o/.66*a,f=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,x=g*g*(3-2*g);c=a/2-a*x,h=Math.sin(g*Math.PI)**1.25*1.8,f=-Math.sin(g*Math.PI)*.2}let d=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,d*d*(3-2*d));return{y:c*p,z:h*p,pitch:f*p,stance:l,phase:o,fade:p}}function Wc(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,l=0,c=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,f=h*h*(3-2*h);a=o/2-o*f,l=Math.sin(h*Math.PI)*1.3,c=-Math.sin(h*Math.PI)*.16}return{y:a,z:l,pitch:c,stance:r<.66,phase:r}}var ou=[{id:"apricot",name:"Aprikose",existing:!0,coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#dfa578",pattern:"solid",paws:"#dfa578",patternSize:1,patternStrength:1},{id:"coral",name:"Koralle",existing:!0,coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#e78f85",pattern:"solid",paws:"#e78f85",patternSize:1,patternStrength:1},{id:"lavender",name:"Lavendel",existing:!0,coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#a99bd0",pattern:"solid",paws:"#a99bd0",patternSize:1,patternStrength:1},{id:"lagoon",name:"Lagune",existing:!0,coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#75b9bf",pattern:"solid",paws:"#75b9bf",patternSize:1,patternStrength:1},{id:"pistachio",name:"Pistazie",coat:"#a4b875",root:"#81915a",tip:"#e8edbd",iris:"#82633e",face:"#fff0c9",cheeks:"#d8a28b",antenna:"#f0d99f",accent:"#eee6bd",pattern:"belly",paws:"#a4b875",patternSize:1,patternStrength:1},{id:"honey",name:"Honig",coat:"#dcb16b",root:"#b68b49",tip:"#ffe9b5",iris:"#598b91",face:"#fff0d5",cheeks:"#e8a18c",antenna:"#fff1ce",accent:"#f4dfb4",pattern:"belly",paws:"#dcb16b",patternSize:1,patternStrength:1},{id:"berry",name:"Waldbeere",coat:"#ae809e",root:"#875e7d",tip:"#edd0df",iris:"#7b9d8b",face:"#f6e4d2",cheeks:"#d5979c",antenna:"#e5c6d5",accent:"#d9aec1",pattern:"belly",paws:"#ae809e",patternSize:1,patternStrength:1},{id:"moon",name:"Mondblau",coat:"#819fb9",root:"#607a97",tip:"#d3e6ee",iris:"#b88e54",face:"#f1e8d7",cheeks:"#d5a7a1",antenna:"#e5e6c9",accent:"#b8d1db",pattern:"belly",paws:"#819fb9",patternSize:1,patternStrength:1},{id:"mocha",name:"Mokka",coat:"#9b7961",root:"#77543f",tip:"#e2c4a1",iris:"#729c91",face:"#f5e2bd",cheeks:"#d39780",antenna:"#e6cd9e",accent:"#634b45",pattern:"solid",paws:"#9b7961",patternSize:1,patternStrength:1},{id:"peach",name:"Pfirsichbl\xFCte",coat:"#e4ae9e",root:"#bc8b82",tip:"#ffe4cf",iris:"#749c9e",face:"#fff1da",cheeks:"#d78989",antenna:"#f5d898",accent:"#f6d6bd",pattern:"belly",paws:"#e4ae9e",patternSize:1,patternStrength:1},{id:"polar",name:"Wolkenfell",coat:"#c1c9ce",root:"#98a8b4",tip:"#f8f1df",iris:"#788fbe",face:"#fff4dc",cheeks:"#d9b0a8",antenna:"#ead8b0",accent:"#dce4e1",pattern:"belly",paws:"#c1c9ce",patternSize:1,patternStrength:1},{id:"dusk",name:"Abendrot",coat:"#a99ab7",root:"#83748e",tip:"#e7d9df",iris:"#bc985e",face:"#f7e5ca",cheeks:"#d5a0a1",antenna:"#eac58a",accent:"#e7d9df",pattern:"belly",paws:"#a99ab7",patternSize:1,patternStrength:1},{id:"reward-stardew",name:"Sternentau",coat:"#384663",root:"#253149",tip:"#7886a5",iris:"#cfaa63",face:"#f3dfbe",cheeks:"#c2999c",antenna:"#d9ba78",accent:"#edc66c",paws:"#d8c6a6",pattern:"speckles",patternSize:.65,patternStrength:.9,rewardStudy:!0},{id:"reward-cloverluck",name:"Kleegl\xFCck",coat:"#829867",root:"#61764e",tip:"#c2d2a0",iris:"#a1844d",face:"#ede4c4",cheeks:"#cd9f85",antenna:"#e2d39a",accent:"#4d6945",paws:"#e5d7b5",pattern:"spots",patternSize:.8,patternStrength:.55,rewardStudy:!0},{id:"reward-wildberry",name:"Wildbeere",coat:"#78516c",root:"#55394f",tip:"#b78ba4",iris:"#8eae99",face:"#ebd5c6",cheeks:"#ce8f9c",antenna:"#d9b8c9",accent:"#c6a2b3",paws:"#493c4e",pattern:"mask",patternSize:1,patternStrength:.8,rewardStudy:!0},{id:"reward-honeypaw",name:"Honigpfote",coat:"#ca9b59",root:"#a5743d",tip:"#efd09a",iris:"#6f9696",face:"#f3e2bf",cheeks:"#d69b7e",antenna:"#e7c77d",accent:"#775339",paws:"#71513e",pattern:"tail",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-moonflower",name:"Mondbl\xFCte",coat:"#d5cddc",root:"#aea4bf",tip:"#f6eeda",iris:"#83a9bb",face:"#fff0d7",cheeks:"#d6b0b7",antenna:"#e7d2a7",accent:"#ece1ce",paws:"#b2a6c2",pattern:"belly",patternSize:1,patternStrength:.75,rewardStudy:!0},{id:"reward-eveningfox",name:"Abendfuchs",coat:"#c37e52",root:"#985634",tip:"#edb77d",iris:"#759783",face:"#f6dfb7",cheeks:"#d3947d",antenna:"#e0be86",accent:"#f0d6aa",paws:"#58463b",pattern:"mask",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-fern",name:"Farnschatten",coat:"#617c73",root:"#405d58",tip:"#a9c2ab",iris:"#c29a60",face:"#e9dfbf",cheeks:"#bc9d8b",antenna:"#dac995",accent:"#344f4a",paws:"#455a50",pattern:"stripes",patternSize:1.2,patternStrength:.65,rewardStudy:!0},{id:"reward-rosequartz",name:"Rosenquarz",coat:"#cda9b2",root:"#aa8296",tip:"#f2d9d1",iris:"#819c9e",face:"#fae9d7",cheeks:"#ce959e",antenna:"#ead3b2",accent:"#f1dfc8",paws:"#ab879c",pattern:"tail",patternSize:1.3,patternStrength:.7,rewardStudy:!0},{id:"reward-amber",name:"Bernstein",coat:"#b98543",root:"#8c5a2f",tip:"#ebc783",iris:"#799b8c",face:"#f4e2bb",cheeks:"#d79d7b",antenna:"#e8c77d",accent:"#6b4d38",paws:"#694b37",pattern:"spots",patternSize:.7,patternStrength:.7,rewardStudy:!0},{id:"reward-iceclover",name:"Eisklee",coat:"#a5c4c1",root:"#7faaa9",tip:"#e0eee0",iris:"#8e7aa8",face:"#f7edda",cheeks:"#d5b5af",antenna:"#e7d4aa",accent:"#e9e5c9",paws:"#7d9fa1",pattern:"speckles",patternSize:.75,patternStrength:.6,rewardStudy:!0},{id:"reward-plum",name:"Pflaumenbl\xFCte",coat:"#796780",root:"#58475f",tip:"#b4a2b8",iris:"#b7a071",face:"#f0e2d1",cheeks:"#c398a6",antenna:"#ddc6a4",accent:"#cfb4c3",paws:"#57455d",pattern:"saddle",patternSize:1.15,patternStrength:.65,rewardStudy:!0},{id:"reward-dandelion",name:"L\xF6wenzahn",coat:"#c6bc79",root:"#99935e",tip:"#ede4ac",iris:"#7c9d94",face:"#f6e8c4",cheeks:"#d3a48d",antenna:"#e8ce7d",accent:"#f1e8ce",paws:"#8a8160",pattern:"belly",patternSize:1.1,patternStrength:.8,rewardStudy:!0},{id:"tiger-study",name:"Tigerpfote",coat:"#cd9656",root:"#a5733f",tip:"#ecc38b",iris:"#8b9c71",face:"#f8e6c4",cheeks:"#cc9c89",antenna:"#e3c894",accent:"#49382e",paws:"#edddbf",pattern:"tiger",patternSize:1,patternStrength:.9},{id:"leopard-study",name:"Leopardenpfote",coat:"#ccab70",root:"#a88750",tip:"#edd3a0",iris:"#8a9a68",face:"#f4e6cb",cheeks:"#c59c86",antenna:"#d9c18d",accent:"#48372b",paws:"#e6d4ae",pattern:"leopard",patternSize:1,patternStrength:.95},{id:"custom-294bf96b-4311-45f4-a97f-9f0725105857",name:"Red",existing:!1,coat:"#f9061f",root:"#f9061f",tip:"#f9061f",iris:"#428f8d",face:"#e1dfdb",cheeks:"#e1dfdb",antenna:"#ffe5bd",accent:"#f9061f",pattern:"saddle",paws:"#f9061f",patternSize:1,patternStrength:1},{id:"custom-0c185d09-cfd9-4664-a19c-11bbee73c4a1",name:"White",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#e49ab4",accent:"#ffffff",pattern:"belly",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-cd20f8f9-aaf8-416c-bf05-d8c1b5ac6598",name:"Black",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#fffff5",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#ffffff",pattern:"solid",paws:"#ffffff",patternSize:1.1,patternStrength:.8},{id:"custom-dc02a2ea-1078-4736-8a1c-9cdf1f8c8492",name:"Mein Nurbi 7",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"stripes",paws:"#ffffff",patternSize:.5,patternStrength:1},{id:"custom-98e141bc-ffcb-48fb-9442-0528ca7cb103",name:"Blacktail",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#0d0d0d",accent:"#0d0d0d",pattern:"tail",paws:"#ffffff",patternSize:.75,patternStrength:1},{id:"custom-8d5a3bda-48c2-4f5e-8df2-594c54a0b0d1",name:"Tiger",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.85,patternStrength:1},{id:"custom-4c0450df-de84-4ca8-9532-5cf667d92736",name:"Barnhold",existing:!1,coat:"#ff8c00",root:"#55554e",tip:"#ff8c00",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.6,patternStrength:1},{id:"custom-a308614f-d7a5-4ac5-a8d7-1fd7967999b4",name:"Leopard schwarz",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#ffffff",pattern:"leopard",paws:"#1f1f1e",patternSize:.8,patternStrength:1},{id:"custom-b6960ff9-f026-4c87-98c8-d028d13660f3",name:"Leopard",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-74506dd4-e667-4d4b-a574-ca2129e1e2cb",name:"Schneeleopard",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1}];var lu=[];for(let i=0;i<4;i++)for(let e=0;e<5;e++){let t=i*5+e,n=Math.sin(t*13.13+2.1);lu.push({u:(e-2)*5.5+i%2*1.8+n*.75,v:4+i*7+Math.cos(t*7.7)*1.1,rx:1.85+(Math.sin(t*5.1)+1)*.38,ry:1.65+(Math.cos(t*4.3)+1)*.5,angle:n*.8,phase:t*2.37,gap:.3+(Math.sin(t*3.7)+1)*.18})}var hu=[];for(let i=0;i<4;i++)for(let e=0;e<8;e++){let t=i*8+e,n=e*Math.PI/4+i%2*.24+.07*Math.sin(t*4.7),s=.12+i*.36+.04*Math.cos(t*3.1);hu.push({x:Math.cos(n)*Math.cos(s),y:Math.sin(n)*Math.cos(s),z:Math.sin(s),radius:.105+.045*(1+Math.sin(t*7.3))*.5})}var au=[[5.8,2.7,1.95,1.25],[15.8,2.25,-2.1,1.6],[25.1,1.9,1.15,1.38]];function cu(i,e,t,n){let s=i.patternSize??1,r=i.patternStrength??1,o=ot.smoothstep,a=0;if(i.pattern==="belly"){let l=o(-t,11/s,19/s)*(1-o(n,18*s,23*s)),c=(1-o(n,7*s,13*s))*o(t,-4,4);a=Math.max(l,c)*.82}if(i.pattern==="saddle"&&(a=(1-o(Math.abs(e),3*s,8*s))*o(t,-1,9)*o(n,9,17)*.85),i.pattern==="stripes"&&(a=(1-o(Math.abs(Math.sin((t-3)/(3.3*s)+e*.025)),.3,.6))*o(t,-4,5)*o(n,5,12)),i.pattern==="tiger"){let l=e<0?-1:1,c=9-4*o(t,12,29),h=Math.atan2(Math.abs(e),(n-c)*1.12);for(let S=0;S<au.length;S++){let[I,P,E,T]=au[S],F=T+(l<0?[.15,-.12,.18][S]:0),O=h/F;if(O>=1)continue;let Z=l<0?[-.15,.25,-.1][S]:0,te=I+Z*Math.sin(h)+E*(.2*O+.8*O*O),oe=P*s*Math.pow(1-O*O,.7),re=1-o(Math.abs(t-te),oe*.67,oe);a=Math.max(a,re*(1-o(O,.8,1)))}a*=o(t,2,4)*o(n,5,9);let f=Math.abs(e),d=1-o(t,-2,1),p=o(f,8.7,11)*(1-o(f,14,16)),g=(t+15)/12,x=o(g,0,.2)*(1-o(g,.78,1)),m=0;for(let S of[18.8,23.8]){let I=S+.9*Math.sin(g*2.4)+(e<0?.2:0),P=.8*s*(.5+.5*Math.sin(Math.max(0,Math.min(1,g))*Math.PI));m=Math.max(m,(1-o(Math.abs(n-I),P*.5,P))*x*p)}let u=30.2+f*.4,b=(1-o(f,3.2,4.6))*(1-o(Math.abs(n-u),.5*s,1.15*s))*(1-o(t,-9,-5)),y=o((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25),v=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),C=t<-10?o(v,1,1.2):1;a=Math.max(a,Math.max(m,b)*d*y*C*.9)}if(i.pattern==="leopard"){let l=9-4*o(t,12,29),c=Math.atan2(e,(n-l)*1.12)*9;if(t>0&&n>5){let h=s*(1-.25*o(t,21,29));for(let f of lu){let d=c-f.u,p=t-f.v;if(Math.abs(d)>f.rx*h*1.7||Math.abs(p)>f.ry*h*1.7)continue;let g=Math.cos(f.angle),x=Math.sin(f.angle),m=(d*g-p*x)/(f.rx*h),u=(d*x+p*g)/(f.ry*h),b=Math.atan2(u,m),y=Math.hypot(m,u)/(1+.12*Math.sin(b*3+f.phase)+.065*Math.cos(b*5-f.phase)),v=o(y,.51,.69)*(1-o(y,1,1.17)),C=Math.abs(Math.atan2(Math.sin(b-f.phase),Math.cos(b-f.phase))),S=o(C,f.gap,f.gap+.24);a=Math.max(a,Math.max(v*S,(1-o(y,.3,.62))*.12))}a*=o(t,0,3)*o(n,5,9)}if(t<3&&n>12){let h=0,f=e/13.1,d=(t+8)/11.5,p=(n-20)/12.2,g=Math.hypot(f,d,p);if(g>.1)for(let b of hu){let y=1-(f*b.x+d*b.y+p*b.z)/g,v=b.radius*s;h=Math.max(h,1-o(y,v*v*.2,v*v*.58))}let x=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),m=t<-10?o(x,1,1.2):1,u=o((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25);a=Math.max(a,h*m*u*(1-o(t,1,3)))}}if(i.pattern==="spots"||i.pattern==="speckles"){let l=i.pattern==="speckles",c=l?5.2:11,h=(l?1.25:3.8)*s,f=Math.round(t/c),d=Math.round((e-f%2*c*.5)/c)*c+f%2*c*.5,p=f*c+Math.sin(f*2.7+d)*c*.12,g=Math.hypot(e-d,t-p);a=(1-o(g,h*.5,h))*o(t,-5,3)*o(n,6,13)}return i.pattern==="mask"&&(a=o(-t,11,16)*(1-o(Math.abs(e),8*s,13*s))*o(n,15,21)),i.pattern==="tail"&&(a=o(t,31-7*s,34-3*s)),Math.max(0,Math.min(1,a*r))}function Xc(i,e){let t=i.group.getObjectByName("curved-soft-fur"),n=t.geometry,s=n.attributes.color.array,r=new He("#d5a078"),o=new He("#ffe2b9"),a=e||new Float32Array(s.length/3),l=[],c=[],h={};if(!e)for(let p=0;p<a.length;p++)a[p]=(s[p*3]-r.r)/(o.r-r.r);i.group.traverse(p=>{if(!p.isMesh)return;let g="#"+p.material.color.getHexString();g==="#dfa578"&&(h.coat=p.material),g==="#428f8d"&&(h.iris=p.material),g==="#ffe5bd"&&(h.face=p.material),g==="#e69b88"&&(h.cheeks=p.material),p.parent.name==="soft-curved-antenna"&&g==="#ffe5bd"&&(p.material=p.material.clone(),h.antenna=p.material),p.name==="original-body-part"&&(p.material=p.material.clone(),p.material.color.set("#ffffff"),p.material.vertexColors=!0,p.geometry.setAttribute("color",new Je(new Float32Array(p.geometry.attributes.position.count*3),3)),l.push(p))}),i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-paw"&&(p.material=p.material.clone(),c.push(p.material))});let f=[];i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-curved-antenna"&&p.material!==h.coat&&f.push(p.material)});function d(p){c.forEach(S=>S.color.set(p.paws||p.coat));for(let S of["coat","iris","face","cheeks"])h[S].color.set(p[S]);f.forEach(S=>S.color.set(p.antenna));let g=p.pattern!=="solid",x=new He(p.root),m=new He(p.tip),u=new He(p.accent),b=new He(p.coat),y=new He,v=n.attributes.position,C=n.attributes.color;for(let S=0;S<v.count;S++)y.copy(x).lerp(m,a[S]),g&&y.lerp(u,cu(p,v.getX(S),v.getY(S),v.getZ(S))),C.setXYZ(S,y.r,y.g,y.b);C.needsUpdate=!0;for(let S of l){let I=S.geometry.attributes.position,P=S.geometry.attributes.color;for(let E=0;E<I.count;E++)y.copy(b),g&&y.lerp(u,cu(p,I.getX(E)*S.scale.x+S.position.x,I.getY(E)*S.scale.y+S.position.y,I.getZ(E)*S.scale.z+S.position.z)),P.setXYZ(E,y.r,y.g,y.b);P.needsUpdate=!0}}return{...i,apply:d}}var Y0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}},uu={...Y0,...Object.fromEntries(ou.map(i=>[i.id,i]))};function fu({seed:i=913,presentation:e="ground"}={}){let t=new Ve,n=new Ve,s=new Ve;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(k,H=.8)=>new je({color:k,roughness:H}),a=o("#dfa578"),l=o("#ffe5bd"),c=o("#e69b88"),h=o("#302529",.3),f=o("#fff9e7",.3),d=o("#428f8d",.35);function p(k,H,L,_,N,Q,ce,w){let M=new Oe(new ct(1,40,28),H);return M.position.set(L,_,N),M.scale.set(Q,ce,w),M.castShadow=M.receiveShadow=!0,k.add(M),M}let g=e==="peek"?22e3:44e3,x=g*20;function m(k,H){let L=new k(H),_=0;return{push(...N){for(let Q=0;Q<N.length;Q++)L[_++]=N[Q]},get length(){return _},view(){return L.subarray(0,_)}}}let u=m(Float64Array,x),b=m(Float32Array,x*3),y=m(Float32Array,x*3),v=m(Float32Array,x*3),C=m(Float32Array,x*2),S=m(Uint32Array,g*48),I=new He("#d5a078"),P=new He("#ffe2b9");function E(k,H,L,_,N=!1){let Q=p(s,a,...k,...H);Q.name="original-body-part",Q.userData.bodyCenter=[...k],Q.userData.bodyRadii=[...H];for(let ce=0;ce<L;ce++){let w=r()*2-1,M=r()*Math.PI*2,z=Math.sqrt(1-w*w),q=new B(z*Math.cos(M),z*Math.sin(M),w),ne=new B(q.x*H[0],q.y*H[1],q.z*H[2]).add(new B(...k));if(ne.z<1)continue;let W=N&&q.y<-.4;if(W){let Te=[-5.6,5.6].some(ze=>((ne.x-ze)/4.6)**2+((ne.z-23.4)/5.2)**2<1),Re=(ne.x/5.9)**2+((ne.z-16.5)/3.3)**2<1;if(Te||Re)continue}let de=new B(q.x/H[0],q.y/H[1],q.z/H[2]).normalize(),ee=new B(0,0,1);Math.abs(de.z)>.9&&ee.set(1,0,0);let ye=new B().crossVectors(de,ee).normalize(),be=new B(q.x*.45,q.y*.35,-.46),fe=_*(W?.2:1)*(.6+r()*.65),Me=.075+r()*.13,we=r()*.22;for(let Te=0;Te<2;Te++){let Re=Te?new B().crossVectors(de,ye).normalize():ye,ze=b.length/3;for(let K=0;K<=4;K++){let Ee=K/4,Pe=fe*Ee*.88,Ne=fe*Ee*Ee*.9,Ce=ne.x+de.x*Pe+be.x*Ne,Se=ne.y+de.y*Pe+be.y*Ne,Fe=ne.z+de.z*Pe+be.z*Ne,Xe=Me*(1-Ee*.93),tt=.28+Ee*.58+we;for(let Qe of[-1,1]){let Tt=Xe*Qe;b.push(Ce+Re.x*Tt,Se+Re.y*Tt,Math.max(.2,Fe+Re.z*Tt)),y.push(de.x,de.y,de.z),v.push(I.r+(P.r-I.r)*tt,I.g+(P.g-I.g)*tt,I.b+(P.b-I.b)*tt),u.push(tt),C.push(Qe===-1?0:1,Ee)}}for(let K=0;K<4;K++){let Ee=ze+K*2;S.push(Ee,Ee+1,Ee+2,Ee+1,Ee+3,Ee+2)}}}}e!=="peek"&&(E([0,6,10],[10.5,15,9.7],15200,3.3),E([0,19,6],[7.4,9,5.7],4600,2.9),E([1,26,4],[4.7,7,3.4],2200,2.5));let T=S.length,F=new Ve;F.name="complete-lift-skull",s.add(F);let O=new Ve;F.add(O),E([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0),F.add(s.children.find(k=>k.userData.bodyCenter?.[1]===-8));let Z=[],te=[],oe=[],re=[];for(let[k,H]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let L=new Ve;L.name="soft-paw",L.userData.home={x:k,y:H},L.position.set(k,H,1.35),L.rotation.z=k<0?-.13:.13,n.add(L);let _=new ct(1,40,28),N=_.attributes.position;for(let M=0;M<N.count;M++){let z=N.getX(M),q=N.getY(M),ne=N.getZ(M),W=2.15*(1-.22*Math.max(0,q)),de=q<-.35?.09*Math.cos(z*Math.PI*2.4)*-q:0;N.setXYZ(M,z*W,q*3.4-de,Math.max(-1.3,ne*1.35)+Math.max(0,q)*.45)}_.computeVertexNormals();let Q=new Oe(_,a);Q.castShadow=Q.receiveShadow=!0,L.add(Q);let ce=p(n,a,0,0,0,1,1,1);ce.name="rigid-upper-leg",oe.push(ce);let w=p(n,a,0,0,0,1,1,1);w.name="rigid-lower-leg",re.push(w),te.push(new B(k*.86,H+1.4,6.1)),Z.push(L)}let ue=(k,H)=>-8-11.5*Math.sqrt(Math.max(.025,1-(k/13.1)**2-((H-20)/12.2)**2));function X(k,H,L,_,N,Q,ce){let w=[],M=[];for(let de=0;de<=12;de++)for(let ee=0;ee<=64;ee++){let ye=de/12,be=ee/64*Math.PI*2,fe=Math.cos(be)*N*ye,Me=Math.sin(be)*Q*ye;w.push(fe,ue(L+fe,_+Me)-ce-.27*(1-ye*ye),Me)}for(let de=0;de<12;de++)for(let ee=0;ee<64;ee++){let ye=de*65+ee,be=ye+64+1;M.push(ye,be,ye+1,ye+1,be,be+1)}let ne=new lt;ne.setAttribute("position",new Je(w,3)),ne.setIndex(M),ne.computeVertexNormals();let W=new Oe(ne,H);return W.position.set(L,0,_),k.add(W),W}let he=new Ve;he.name="happy-crescent-eyes",O.add(he),he.visible=!1;for(let k of[-1,1]){let H=[];for(let L=0;L<=20;L++){let _=k*5.6+(L/20-.5)*5.3,N=23.3+Math.sin(L/20*Math.PI)*1.35;H.push(new B(_,ue(_,N)-.3,N))}he.add(new Oe(new Ft(new Nt(H),24,.3,7,!1),h))}let se=[];for(let k of[-1,1]){let H=k*5.6,L=23.4,_=new Ve;_.name="embedded-eye",O.add(_),X(_,l,H,L,3.95,4.7,.11),X(_,d,H,L-.1,2.65,3.25,.3),X(_,h,H,L+.1,1.75,2.45,.49),p(_,f,H-.8,ue(H-.8,L+1.5)-.78,L+1.5,.72,.2,.82),p(_,f,H+.65,ue(H+.65,L-.65)-.78,L-.65,.26,.16,.3),se.push(_);let N=[];for(let ce=0;ce<=64;ce++){let w=ce/64*Math.PI*2,M=H+Math.cos(w)*4.05,z=L+Math.sin(w)*4.8;N.push(new B(M,ue(M,z)-.05,z))}O.add(new Oe(new Ft(new Nt(N),80,.37,8,!1),a)),p(O,c,k*8.3,-17.2,16,2.05,.5,1.05);let Q=[];for(let ce=0;ce<=12;ce++){let w=k*5.6+(ce/12-.5)*4.5,M=28.7+Math.sin(ce/12*Math.PI)*.65;Q.push(new B(w,ue(w,M)-.14,M))}O.add(new Oe(new Ft(new Nt(Q),16,.26,6,!1),a))}p(O,l,0,-18.9,16.4,5.2,1.7,2.7),p(O,c,0,-20.6,17.7,1.65,1.05,1.1);let ve=[];for(let k=0;k<=20;k++){let H=(k/20-.5)*6.6;ve.push(new B(H,-20.35+Math.abs(H)*.14,14.7+.105*H*H))}let Ae=new Oe(new Ft(new Nt(ve),24,.22,6,!1),h);O.add(Ae);let Ue=[];for(let k of[-1,1]){let ce=function(w,M=!1,z=0){let q=Math.sin(w*1.4+k*.7),ne=Math.sin(w*2.2+k)*.12;L.v2.set(k*(1.7+q*.35),-1.4+ne,11.4),L.v3.set(k*(5.2+q*.55+z),-1.9+Math.sin(w*1.2+k)*.35,10.2+ne+z*.4+(M?Math.sin(w*5+k)*.15:0));let W=L.computeFrenetFrames(26,!1),de=_.attributes.position,ee=_.attributes.normal;for(let ye=0;ye<=26;ye++){let be=ye/26,fe=L.getPoint(be),Me=.44*(1-be)+.23*be;for(let we=0;we<=8;we++){let Te=we/8*Math.PI*2,Re=W.normals[ye].clone().multiplyScalar(-Math.cos(Te)).addScaledVector(W.binormals[ye],Math.sin(Te)),ze=fe.clone().addScaledVector(Re,Me),K=ye*9+we;de.setXYZ(K,ze.x,ze.y,ze.z),ee.setXYZ(K,Re.x,Re.y,Re.z)}}de.needsUpdate=ee.needsUpdate=!0,_.computeBoundingSphere(),Q.position.copy(L.v3)},H=new Ve;H.name="soft-curved-antenna",H.position.set(k*6.7,-5,30),F.add(H);let L=new Ln(new B,new B(k*.25,-.2,4.6),new B(k*1.7,-1.4,11.4),new B(k*5.2,-1.9,10.2)),_=new Ft(L,26,.4,8,!1),N=new Oe(_,a);H.add(N);let Q=p(H,l,k*5.2,-1.9,10.2,1.65,1.65,1.9);ce(0),Ue.push({group:H,flex:ce})}let J=new lt;J.setAttribute("position",new yt(b.view(),3)),J.setAttribute("normal",new yt(y.view(),3)),J.setAttribute("color",new yt(v.view(),3)),J.setAttribute("uv",new yt(C.view(),2)),J.setIndex(new yt(S.view(),1));let V=u.view(),R=new Uint8Array(2048*4);for(let k=0;k<64;k++)for(let H=0;H<32;H++){let L=(k*32+H)*4,_=Math.abs((H+.5)/32*2-1),N=Math.round(255*Math.pow(1-_,.55)*(1-.75*Math.pow(k/63,4)));R[L]=R[L+1]=R[L+2]=N,R[L+3]=255}let A=new Yn(R,32,64);A.needsUpdate=!0,A.magFilter=A.minFilter=Dt;let ie=new je({vertexColors:!0,alphaMap:A,transparent:!0,opacity:.85,depthWrite:!1,side:Vt,roughness:1}),j=new Oe(J,ie);j.name="curved-soft-fur",j.frustumCulled=!1,s.add(j),J.setDrawRange(0,T);let G=new lt;for(let[k,H]of Object.entries(J.attributes))G.setAttribute(k,H);G.setIndex(J.index),G.setDrawRange(T,S.length-T);let pe=new Oe(G,ie);pe.name="complete-skull-fur",pe.frustumCulled=!1,F.add(pe);let xe;function D(k){let H=uu[k];if(!H)throw Error("Unknown creature palette "+k);xe??=Xc({group:t},V),xe.apply(H),t.userData.palette=k}let Y=new Ve;Y.name="completion-pollen",Y.visible=!1,t.add(Y);let $=new ct(.32,8,6);for(let k=0;k<9;k++){let H=new Oe($,new je({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));Y.add(H)}return D("apricot"),{group:t,setPalette:D,update(k,H=0,L={}){let _=tr(L.celebrationAge??-1,L.celebrationStyle),N=!_.active&&(L.active??(H>0&&H<1));n.position.z=_.lift,n.rotation.x=_.pitch,n.rotation.y=_.roll+_.turnStep*Math.sin((L.celebrationAge??0)*16)*.018,n.scale.set(1+_.squash*.4,1+_.squash*.4,1-_.squash),he.visible=_.happy>.55,se.forEach(W=>W.visible=!he.visible),Ae.scale.x=1+_.happy*.18,Y.visible=_.pollen>0,Y.children.forEach((W,de)=>{let ee=Math.min(1.8,Math.max(0,(L.celebrationAge??0)-1.5)),ye=de*2.4;W.position.set(Math.cos(ye)*(9+ee*3)+Math.sin(ee*2+de)*.7,Math.sin(ye)*(8+ee*3),8+ee*(8+de*.4)),W.material.opacity=_.pollen*(.5+de%3*.12)}),s.position.z=Math.sin(k*2)*.13+(N?Math.sin(H*Math.PI*16)*.22:0),s.rotation.y=N?Math.sin(H*Math.PI*16)*.012:Math.sin(k*.8)*.012,O.rotation.set(0,0,0),se.forEach(W=>{W.scale.set(1,1,1),W.position.set(0,0,0)}),Z.forEach((W,de)=>{let ee=W.userData.home,ye=(L.celebrationAge??0)*17+de*Math.PI/2,be=_.turnStep*Math.max(0,Math.sin(ye))*1.25,fe=N?L.travel!==void 0?Wc(L.travel,de,t.scale.x):Gc(L.progress??H,de,{distance:L.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};W.position.set(ee.x+_.turnStep*Math.cos(ye)*.65,ee.y+fe.y+_.turnStep*Math.sin(ye)*.65+(_.active?Math.sin((L.celebrationAge??0)*7+de*Math.PI/2)*_.tuck*.5:0),1.35+fe.z+be+_.tuck*(de<2?1:L.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((L.celebrationAge??0)*4+de*1.6)*.12)),W.rotation.x=fe.pitch-_.tuck*(de<2?.08:.035);let Me=te[de].clone();Me.z+=s.position.z;let we=new B(W.position.x,W.position.y+.65,W.position.z+1.05),Te=we.clone().sub(Me),Re=Math.min(6.95,Math.max(.6,Te.length()));Te.normalize(),we.copy(Me).addScaledVector(Te,Re),W.position.copy(we).add(new B(0,-.65,-1.05));let ze=3.8,K=3.4,Ee=(ze*ze-K*K+Re*Re)/(2*Re),Pe=Math.sqrt(Math.max(0,ze*ze-Ee*Ee)),Ne=new B(0,1,0).addScaledVector(Te,-Te.y).normalize(),Ce=Me.clone().addScaledVector(Te,Ee).addScaledVector(Ne,Pe);function Se(Fe,Xe,tt,Qe){let Tt=tt.clone().sub(Xe);Fe.position.copy(Xe).addScaledVector(Tt,.5),Fe.quaternion.setFromUnitVectors(new B(0,1,0),Tt.normalize()),Fe.scale.set(Qe,Xe.distanceTo(tt)/2,Qe)}Se(oe[de],Me,Ce,1.2),Se(re[de],Ce,we,1.1)}),Ue.forEach((W,de)=>W.flex(k,N,_.antenna*(de?.78:1)));let Q=L.headLiftAge??-1,ce=L.headLiftAngle??.8,w=L.headLiftDuration??1.4,M=ot.clamp(Q/w,0,1);M=M*M*M*(M*(M*6-15)+10);let z=Q>w?Math.sin((Q-w)*3)*Math.exp(-(Q-w)*2)*.035:0;F.rotation.x=-ce*M+z;let q=new B(0,-8,20),ne=q.clone().applyEuler(F.rotation);if(F.position.copy(q).sub(ne),F.position.z+=M*.8,F.rotation.z=Math.sin(k*1.4)*.018*M,e==="peek"){let de=new B(0,-8,20),ee=L.peekGreetingAge??-1,ye=ee>=0&&ee<1.3?Math.sin(ee/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(k*.65)*.012,Math.sin(Math.max(0,ee)*4)*.05*ye);let be=de.clone().applyEuler(s.rotation);s.position.copy(de).sub(be),s.position.z+=Math.sin(k*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),Z.forEach((we,Te)=>{we.visible=Te<2,we.position.set(Te===0?-12:12,-17,10),we.rotation.set(.12,0,Te===0?-.16:.16)}),oe.forEach(we=>we.visible=!1),re.forEach(we=>we.visible=!1);let fe=k%7.3,Me=fe>4.9&&fe<5.03||fe>5.22&&fe<5.3;se.forEach(we=>we.visible=!Me),he.visible=Me}},setSize(k){t.scale.setScalar(k/100)},dispose(){let k=new Set,H=new Set;t.traverse(L=>{L.geometry&&k.add(L.geometry),L.material&&H.add(L.material)}),k.forEach(L=>L.dispose()),H.forEach(L=>L.dispose()),A.dispose()}}}function du(i,e,t,n,{threshold:s=5,tolerance:r=20}={}){let o=Math.floor((t-20)/80),a=Math.floor((-n-20)/80);if(o<0||a<0||o>=i||a>=i)return-1;let l=a*i+o,c=e.at(-1);if(c===void 0||l===c)return l;let h=o-c%i,f=a-Math.floor(c/i);if(Math.abs(h)+Math.abs(f)!==1)return-1;let d=c%i*80+60,p=-(Math.floor(c/i)*80+60),g=h?(t-d)*h:-(n-p)*f,x=Math.abs(h?n-p:t-d);return g>=40+80*s/100&&x<=Math.min(40,22+80*r/100)?l:c}function mu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=pu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let g=pu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function pu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function gu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,y=a.length;b<y;b++){let v=a[b],C=i.attributes[v];l[v]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let S=i.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((I,P)=>{let E=new I.array.constructor(I.count*I.itemSize);c[v][P]=new I.constructor(E,I.itemSize,I.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let b=0;b<r;b++){let y=n?n.getX(b):b,v="";for(let C=0,S=a.length;C<S;C++){let I=a[C],P=i.getAttribute(I),E=P.itemSize;for(let T=0;T<E;T++)v+=`${~~(P[f[T]](y)*x+m)},`}if(v in t)h.push(t[v]);else{for(let C=0,S=a.length;C<S;C++){let I=a[C],P=i.getAttribute(I),E=i.morphAttributes[I],T=P.itemSize,F=l[I],O=c[I];for(let Z=0;Z<T;Z++){let te=f[Z],oe=d[Z];if(F[oe](o,P[te](y)),E)for(let re=0,ue=E.length;re<ue;re++)O[re][oe](o,E[re][te](y))}}t[v]=o,h.push(o),o++}}let u=i.clone();for(let b in i.attributes){let y=l[b];if(u.setAttribute(b,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),b in c)for(let v=0;v<c[b].length;v++){let C=c[b][v];u.morphAttributes[b][v]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return u.setIndex(h),u}function xu(i){let e=new Map,t=new Set;i.updateMatrixWorld(!0);for(let n of i.children){if(!n.isMesh||Array.isArray(n.material))return i;let s=e.get(n.material);s||e.set(n.material,s={geometries:[],surface:!1}),s.surface||=!!n.userData.surface;let r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.geometries.push(r.applyMatrix4(n.matrix)),t.add(n.geometry)}i.clear();for(let[n,s]of e){let r=mu(s.geometries,!1);s.geometries.forEach(a=>a.dispose());let o=new Oe(r,n);o.castShadow=o.receiveShadow=!0,o.userData.surface=s.surface,i.add(o)}return t.forEach(n=>n.dispose()),i}var _u=new WeakMap,qc=new WeakMap,Z0=new He("#edf4b1");function yu(i,e,t=.24){if(!i)return;let n=e?t:0;_u.get(i)!==n&&(_u.set(i,n),i.traverse(s=>{if(s.isMesh)for(let r of[].concat(s.material||[]))r.color&&(qc.has(r)||qc.set(r,r.color.clone()),r.color.copy(qc.get(r)),e&&r.color.lerp(Z0,t))}))}var ra=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],l=this.points[o+1],c=s[o];if(r<=c&&c>0){let h=r/c;this.x=a[0]+(l[0]-a[0])*h,this.y=a[1]+(l[1]-a[1])*h,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=c}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.duration=Math.min(.5,Math.max(.035,this.duration*(this.durationScale??1))),this.lastTarget=n,this.start=n,!0}};var oa=class{constructor(){this.transition=new ra,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=c=>[c%e.n*80+60,-(Math.floor(c/e.n)*80+60)];if(this.level!==e||!t.length){let[c,h]=s(e.marks[0]);this.transition.reset(c,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[c,h],this.lastTime=n,this.level=e}let a=0;for(;a<this.path.length&&a<t.length&&this.path[a]===t[a];)a++;if(a!==this.path.length||a!==t.length){let c=this.path.at(-1),h=this.path.length?[...this.path.slice(Math.max(0,a-1),-1).reverse(),...t.slice(a)]:[...t];for(let f of h){let[d,p]=s(f);if(c===void 0)this.transition.reset(d,p);else{let[g,x]=s(c);this.heading=Math.atan2(d-g,-(p-x)),this.transition.target(d,p,n)}c=f}this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=tr(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var vu={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Mu({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=vu[t]||vu.front,s=n.radius,r=n.x,o=n.z,a=new Ve,l=new Ve;a.add(l),l.position.set(n.fx,0,n.fz);let c=new ct(1,20,14),h=[],f=(se,ve=.48)=>{let Ae=new je({color:se,roughness:ve});return h.push(Ae),Ae},d=f("#ffd05a"),p=f("#ffeaa2"),g=f("#538b2c"),x=f("#e5a32a");function m(se,ve,Ae,Ue,J,V,R,A){let ie=new Oe(c,ve);return ie.position.set(Ae,Ue,J),ie.scale.set(V,R,A),ie.castShadow=!0,ie.receiveShadow=!0,se.add(ie),ie}m(l,g,0,5,0,2.2,7,2.2);for(let se of[-1,1]){let ve=m(l,g,se*7,4,1,9,1.7,4);ve.rotation.z=se*.27,ve.rotation.y=se*.3}let u=[];for(let se=0;se<6;se++){let ve=new Ve;ve.rotation.y=se*Math.PI/3,l.add(ve);let Ae=m(ve,se%2?d:p,0,12,0,5,9,4);u.push(Ae)}let b=m(l,x,0,12,0,5,3.5,5),y=f("#c5a777"),v=new tn(s+1.6,s+1.6,2.6,40),C=new Oe(v,y);C.position.set(r,3,o),C.castShadow=!0,a.add(C);let S=new tn(s,s,2.2,40),I=new Oe(S,f("#fff4da"));I.position.set(r,3.6,o),I.castShadow=!0,a.add(I);let P=document.createElement("canvas");P.width=P.height=128;let E=P.getContext("2d");E.fillStyle="#4b2a15",E.font="bold 100px Trebuchet MS",E.textAlign="center",E.textBaseline="middle",E.fillText(String(i),64,69);let T=new mn(P);T.colorSpace=_t,T.userData.transient=!0;let F=new li({map:T,transparent:!0,depthWrite:!1}),O=new ui(s*1.72,s*1.72),Z=new Oe(O,F);Z.rotation.x=-Math.PI/2,Z.position.set(r,4.74,o),a.add(Z);let te=0,oe=0,re="";function ue(se){if(!["closed","next","bloom"].includes(se))throw Error("Unknown goal state");re=se,oe=se==="bloom"?1:se==="next"?.16:0,a.userData.state=se,y.color.set(se==="next"?"#f9bf39":"#c5a777"),y.emissive.set(se==="next"?"#d89514":"#000000"),y.emissiveIntensity=se==="next"?.15:0}function X(se,ve=.016){te+=(oe-te)*Math.min(1,ve*7);let Ae=te;for(let J of u)J.position.set(0,13-Ae*3,2+Ae*10),J.scale.set(5+Ae*1.5,9-Ae*6,4+Ae*4),J.rotation.x=Ae*-.25;b.visible=Ae>.4,b.position.y=11.4;let Ue=re==="next"?1+Math.sin(se*2.8)*.035:1;l.scale.setScalar(Ue),d.emissive.set("#ffc33e"),d.emissiveIntensity=re==="next"?.08+Math.sin(se*2.8)*.04:0}ue(e),te=oe,X(0,1),a.userData.goalNumber=i;function he(se){let ve=se===33?13:se===40?15.7:10.5;C.scale.set((ve+1.6)/(s+1.6),1,(ve+1.6)/(s+1.6)),I.scale.set(ve/s,1,ve/s),Z.scale.setScalar(ve/s),a.userData.markerSize=se}return{group:a,setState:ue,setSize:he,update:X,dispose(){c.dispose(),S.dispose(),v.dispose(),O.dispose(),T.dispose(),F.dispose(),h.forEach(se=>se.dispose())}}}var Fn=(i,e)=>ot.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Yc=[[-13,-9],[20,-10],[8,4],[-11,18]];function bu(i){i.x=ot.clamp(i.x,-16,24),i.z=ot.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function Su(i=73){let e=[{kind:"bee",position:new B(-12,25,10),velocity:new B,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new B(3,21.5,-7),velocity:new B,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new B((Fn(r.leg+1,a)-.5)*5,20.5,(Fn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let f=Math.floor(Fn(r.leg,a)*4);f===r.station&&(f=(f+1+Math.floor(Fn(r.leg+9,a)*2))%4),r.station=f;let[d,p]=Yc[f];r.target=bu(new B(d+(Fn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Fn(r.leg+4,a)-.5)*3)),r.visiting=!1}let c=e[1-o],h=(f,d)=>Math.hypot(f.x-d.x,f.z-d.z);if(h(r.target,c.position)<13||c.target&&h(r.target,c.target)<13){let f=-1;for(let d=0;d<Yc.length;d++){let[p,g]=Yc[d],x=new B(p,24,g),m=h(x,c.position)+(c.target?h(x,c.target):0);m>f&&(f=m,r.target=x,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let l=0;l<2;l++){let c=e[l];c.age+=r,c.wait<=0&&c.age>(c.kind==="bee"?4.2:6.2)+Fn(c.leg,i+l)*1.3&&n(c,l);let h=c.target.clone().sub(c.position),f=Math.hypot(h.x,h.z);c.wait>0?(c.wait-=r,c.wait<=0&&n(c,l)):f<1&&c.velocity.length()<2&&(c.wait=c.visiting?(c.kind==="bumblebee"?1.2:.45)+Fn(c.leg,i+l)*1.3:.12+Fn(c.leg,i+l)*.3);let d=h.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(c.speed*Math.min(1,f/8));let p=d.sub(new B(c.velocity.x,0,c.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(l?-1:1)*(16-a)*11/a),p.y=(c.target.y+Math.sin(t*4.1+l*2.3)*.16-c.position.y)*16-c.velocity.y*7,p.clampLength(0,95),c.velocity.addScaledVector(p,r),c.velocity.clampLength(0,c.speed*1.1),c.position.addScaledVector(c.velocity,r),bu(c.position)}}return{agents:e,update(r){let o=ot.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Zc={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},J0=(i,e)=>ot.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function Eu({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Zc[i];if(!r)throw Error("Unknown flower species "+i);let o=Mu({number:e,state:t,layout:n}),a=o.group,l=a.children[0],c=new Ve;c.position.copy(l.position),a.add(c);let h=[],f=[],d=he=>{let se=new je({color:he,roughness:.56});return f.push(se),se},p=d("#538b2c"),g=r.colors.map(d),x=d(r.center),m=new ct(1,20,12);h.push(m);function u(he,se,ve,Ae,Ue,J,V,R){let A=new Oe(m,se);return A.position.set(ve,Ae,Ue),A.scale.set(J,V,R),A.castShadow=A.receiveShadow=!0,he.add(A),A}u(c,p,0,5,0,1.8,6,1.8);for(let he of[-1,1]){let se=u(c,p,he*6,3,0,8,1.4,3);se.rotation.z=he*.25}let b=[];for(let he=0;he<r.petals;he++){let se=new Ve;se.position.y=12,se.rotation.y=he*Math.PI*2/r.petals,c.add(se);let ve=new Ve;se.add(ve);let Ae=m;if(i==="poppy"){Ae=m.clone();let J=Ae.attributes.position;for(let V=0;V<J.count;V++){let R=J.getX(V),A=J.getZ(V);J.setY(V,J.getY(V)+Math.sin(Math.atan2(A,R)*5)*.26*Math.hypot(R,A))}Ae.computeVertexNormals(),h.push(Ae)}let Ue=new Oe(Ae,g[he%2]);Ue.position.z=r.radius,Ue.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Ue.castShadow=Ue.receiveShadow=!0,ve.add(Ue),b.push(ve)}let y=u(c,x,0,13.8,0,r.heart,2.7,r.heart);for(let he=0;he<(i==="poppy"?9:7);he++){let se=he*Math.PI*2/(i==="poppy"?9:7);u(c,x,Math.cos(se)*r.heart*.7,16,Math.sin(se)*r.heart*.7,.65,.6,.65)}let v=new Ve;v.name="flower-visitors",c.add(v);let C=d("#e9ad32"),S=d("#d6af50"),I=d("#60452b"),P=d("#fff6df");S.roughness=.95,P.transparent=!0,P.opacity=.72,P.depthWrite=!1;let E=[];for(let he=0;he<2;he++){let se=new Ve;se.name=he?"bumblebee":"bee",se.scale.setScalar(1.8),v.add(se);let ve=he?1.08:.7,Ae=he?.98:.65;u(se,he?S:C,0,0,0,ve,Ae,1.2),u(se,I,0,0,1.05,he?.56:.48,he?.54:.48,.48);for(let J of[-.55,.15])u(se,I,0,0,J,ve*1.02,Ae*1.02,.18);if(he){let J=d("#f4e4b9");J.roughness=1,u(se,J,0,0,-.98,.72,.65,.38);let V=[],R=[],A=260;for(let pe=0;pe<A;pe++){let xe=1-2*(pe+.5)/A,D=Math.sqrt(1-xe*xe),Y=pe*2.39996323,$=Math.cos(Y)*D,k=Math.sin(Y)*D,H=new B($*ve*1.015,xe*Ae*1.015,k*1.215),L=new B($/ve,xe/Ae,k/1.2).normalize(),_=.12+J0(pe,91)*.12,N=H.clone().addScaledVector(L,_);N.z-=.045,V.push(...H.toArray(),...N.toArray());let Q=new He(k<-.72?"#f4e4b9":Math.abs(k+.46)<.18||Math.abs(k-.12)<.17?"#635238":pe%3?"#d6af50":"#e7c776");R.push(...Q.toArray(),...Q.toArray())}let ie=new lt;ie.setAttribute("position",new Je(V,3)),ie.setAttribute("color",new Je(R,3)),h.push(ie);let j=new Yi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});f.push(j);let G=new Ts(ie,j);G.name="bumblebee-fur",se.add(G)}let Ue=[];for(let J of[-1,1]){let V=u(se,P,J*.95,.5,-.1,1.5,.16,.65);V.castShadow=!1,Ue.push(V)}E.push({insect:se,wings:Ue,seed:e*17+he*31+Object.keys(Zc).indexOf(i)*7,phase:he*2.7,a:new B,b:new B})}let T=!!s;function F(he){T=!!he,a.userData.insects=T}let O=Su(e*17+Object.keys(Zc).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function Z(he,se=100){if(!["bee","bumblebee"].includes(he))throw Error("Unknown flower visitor");if(!Number.isFinite(se)||se<50||se>300)throw RangeError("Visitor size must be between 50 and 300 percent");E.find(ve=>ve.insect.name===he).insect.scale.setScalar(1.8*se/100),a.userData.visitorSizes[he]=se}let te=t,oe=t==="bloom"?1:0,re=oe;function ue(he){o.setState(he),te=he,oe=he==="bloom"?1:0}function X(he,se=.016,ve=!1){o.update(he,ve?1:se),re=ve?oe:re+(oe-re)*Math.min(1,se*7);let Ae=re;l.scale.multiplyScalar(1-Ae),l.visible=Ae<.999,c.visible=Ae>.001,c.scale.setScalar(Ae);for(let J of b)J.rotation.x=-(1-Ae)*1.1;y.scale.y=2.7*(.8+.2*Ae),v.visible=T&&te==="bloom"&&Ae>.94;let Ue=O.update(se);for(let J=0;J<E.length;J++){let V=E[J],R=Ue[J];V.insect.position.copy(R.position);let A=R.velocity.x,ie=R.velocity.z,j=Math.hypot(A,ie);if(j>.5){let G=Math.atan2(A,ie),pe=Math.atan2(Math.sin(G-V.insect.rotation.y),Math.cos(G-V.insect.rotation.y));V.insect.rotation.y+=pe*Math.min(1,se*9),V.insect.rotation.z=ot.clamp(-pe*.22,-.24,.24)}else V.insect.rotation.z*=Math.max(0,1-se*6);V.insect.rotation.x=-Math.min(.16,j*.009),V.wings.forEach((G,pe)=>G.rotation.z=Math.sin(he*30+V.phase)*(pe?1:-1)*.5)}}return F(s),X(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:ue,setInsects:F,setVisitorSize:Z,setSize:o.setSize,update:X,get state(){return te},dispose(){o.dispose(),h.forEach(he=>he.dispose()),f.forEach(he=>he.dispose())}}}var aa=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new B,r=new B,o=new B,a=new B,l=[s,r,o,a],c=new B,h=new B,f=new B,d=new B,p=[c,h,f,d],g=new He,x=new He,m=new He,u=new He,b=[g,x,m,u],y=new _e,v=new _e,C=new _e,S=new _e,I=[y,v,C,S],P=new _e,E=new _e,T=new _e,F=new _e,O=[P,E,T,F],Z=e.attributes,te=Z.normal!==void 0,oe=Z.color!==void 0,re=Z.uv!==void 0,ue=Z.uv1!==void 0,X=Z.position.array,he=te?Z.normal.array:null,se=oe?Z.color.array:null,ve=re?Z.uv.array:null,Ae=ue?Z.uv1.array:null,Ue=X,J=he,V=se,R=ve,A=Ae,ie=0,j=!0;function G(xe,D,Y){let $=l[xe],k=l[D],H=l[Y];if(Ue.push($.x,$.y,$.z),Ue.push(k.x,k.y,k.z),Ue.push(H.x,H.y,H.z),te){let L=p[xe],_=p[D],N=p[Y];J.push(L.x,L.y,L.z),J.push(_.x,_.y,_.z),J.push(N.x,N.y,N.z)}if(oe){let L=b[xe],_=b[D],N=b[Y];V.push(L.r,L.g,L.b),V.push(_.r,_.g,_.b),V.push(N.r,N.g,N.b)}if(re){let L=I[xe],_=I[D],N=I[Y];R.push(L.x,L.y),R.push(_.x,_.y),R.push(N.x,N.y)}if(ue){let L=O[xe],_=O[D],N=O[Y];A.push(L.x,L.y),A.push(_.x,_.y),A.push(N.x,N.y)}}for(;j&&ie<t;){ie++,j=!1,X=Ue,Ue=[],te&&(he=J,J=[]),oe&&(se=V,V=[]),re&&(ve=R,R=[]),ue&&(Ae=A,A=[]);for(let xe=0,D=0,Y=X.length;xe<Y;xe+=9,D+=6){s.fromArray(X,xe+0),r.fromArray(X,xe+3),o.fromArray(X,xe+6),te&&(c.fromArray(he,xe+0),h.fromArray(he,xe+3),f.fromArray(he,xe+6)),oe&&(g.fromArray(se,xe+0),x.fromArray(se,xe+3),m.fromArray(se,xe+6)),re&&(y.fromArray(ve,D+0),v.fromArray(ve,D+2),C.fromArray(ve,D+4)),ue&&(P.fromArray(Ae,D+0),E.fromArray(Ae,D+2),T.fromArray(Ae,D+4));let $=s.distanceToSquared(r),k=r.distanceToSquared(o),H=s.distanceToSquared(o);$>n||k>n||H>n?(j=!0,$>=k&&$>=H?(a.lerpVectors(s,r,.5),te&&d.lerpVectors(c,h,.5),oe&&u.lerpColors(g,x,.5),re&&S.lerpVectors(y,v,.5),ue&&F.lerpVectors(P,E,.5),G(0,3,2),G(3,1,2)):k>=$&&k>=H?(a.lerpVectors(r,o,.5),te&&d.lerpVectors(h,f,.5),oe&&u.lerpColors(x,m,.5),re&&S.lerpVectors(v,C,.5),ue&&F.lerpVectors(E,T,.5),G(0,1,3),G(3,2,0)):(a.lerpVectors(s,o,.5),te&&d.lerpVectors(c,f,.5),oe&&u.lerpColors(g,m,.5),re&&S.lerpVectors(y,C,.5),ue&&F.lerpVectors(P,T,.5),G(0,1,3),G(3,1,2))):G(0,1,2)}}let pe=new lt;return pe.setAttribute("position",new Je(Ue,3)),te&&pe.setAttribute("normal",new Je(J,3)),oe&&pe.setAttribute("color",new Je(V,3)),re&&pe.setAttribute("uv",new Je(R,2)),ue&&pe.setAttribute("uv1",new Je(A,2)),pe}};var $0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},nr=ot.clamp;function K0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=nr(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var j0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function wu(i,e,t){if(i==="split"){let n=Math.min(...j0.map(([s,r])=>K0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,l=e*Math.cos(a)+t*Math.sin(a),c=-e*Math.sin(a)+t*Math.cos(a),h=((l-10)/8.5)**2+(c/(s===6?3.2:4.7))**2;n=Math.max(n,nr((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function Tu(i="fossil",{seed:e=73}={}){if(!$0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Ve,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,l=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let u=0;u<s;u++)for(let b=0;b<s;b++){let y=(b/(s-1)-.5)*66,v=(u/(s-1)-.5)*66,C=wu(i,y,v),S=Math.sin(y*.18+v*.11)*Math.sin(v*.21-y*.07),I=l()-.5,P=1+S*(t?.004:.015)+I*(t?.025:.065)-C.ink,E=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],T=(u*s+b)*4;for(let O=0;O<3;O++)r[T+O]=nr(E[O]*P+(220-E[O])*C.vein,0,255);r[T+3]=255;let F=nr(138+I*(t?4:12)+S-C.cut*28,0,255);o.set([F,F,F,255],T)}let c=new Yn(r,s,s);c.colorSpace=_t;let h=new Yn(o,s,s);for(let u of[c,h])u.magFilter=u.minFilter=Dt,u.needsUpdate=!0;let f=new je({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:c,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(f.onBeforeCompile=u=>{let b=new He(t?"#9e9688":i==="split"?"#978f80":"#999182");u.vertexShader=`varying float stoneTop;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),u.fragmentShader=`varying float stoneTop;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${b.r},${b.g},${b.b}),diffuseColor.rgb,stoneTop);`)}),f.customProgramCacheKey=()=>`slink-stone-top-${i}`;let d=new vn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let u=new aa(3.5,10).modify(d);d.dispose(),d=u}d.translate(0,0,10);let p=d.attributes.position,g=d.attributes.uv;for(let u=0;u<p.count;u++){let b=p.getX(u),y=p.getY(u),v=p.getZ(u),C=nr((v-10)/16.5,0,1);if(i!=="reference"){let S=Math.max(0,1-(b*b+y*y)/1800),I=Math.sin(b*.13+y*.035)*Math.cos(y*.1)*(t?.12:.7),P=t?S*5:i==="split"?S*1.3-Math.max(0,b*.17+y*.09-2)*.6:S*.6;v+=(P+I-wu(i,b,y).cut)*C}p.setZ(u,v),g.setXY(u,b/66+.5,y/66+.5)}d.deleteAttribute("normal");let x=gu(d,1e-4);d.dispose(),d=x,d.computeVertexNormals();let m=new Oe(d,f);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){d.dispose(),f.dispose(),c.dispose(),h.dispose()}}}var Au=["daisy","buttercup","meadow","poppy"],Ru=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],ca=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function Q0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function Cu(i){let e=ca(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=Au[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&ca(e+":flower-mix")%3!==0){let r=Au[(e%4+1+ca(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of Q0(i.stones||[],i.n)){let o=ca(e+":"+r.join(","));if(r.length===1){s[r[0]]=Ru[o%Ru.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Iu={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function Pu(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new je({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",l=Iu[i]?.[n]||a;return o.onBeforeCompile=c=>{c.uniforms.uLiquidTime=r,c.uniforms.uLiquidCenter={value:new _e(...t)},c.vertexShader=`varying vec2 vLiquidXY;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),c.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${l}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(c){r.value=e?c:0},dispose(){o.dispose()},type:i}}var ex=_t,ir=class i extends di{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new ks(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(J,V){if(J.nodeType!==1)return;let R=v(J),A=!1,ie=null;switch(J.nodeName){case"svg":V=g(J,V);break;case"style":r(J);break;case"g":V=g(J,V);break;case"path":V=g(J,V),J.hasAttribute("d")&&(ie=s(J));break;case"rect":V=g(J,V),ie=l(J);break;case"polygon":V=g(J,V),ie=c(J);break;case"polyline":V=g(J,V),ie=h(J);break;case"circle":V=g(J,V),ie=f(J);break;case"ellipse":V=g(J,V),ie=d(J);break;case"line":V=g(J,V),ie=p(J);break;case"defs":A=!0;break;case"use":V=g(J,V);let pe=(J.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),xe=J.viewportElement.getElementById(pe);xe?n(xe,V):console.warn("SVGLoader: 'use node' references non-existent node id: "+pe);break;default:}ie&&(V.fill!==void 0&&V.fill!=="none"&&ie.color.setStyle(V.fill,ex),S(ie,ve),O.push(ie),ie.userData={node:J,style:V});let j=J.childNodes;for(let G=0;G<j.length;G++){let pe=j[G];A&&pe.nodeName!=="style"&&pe.nodeName!=="defs"||n(pe,V)}R&&(te.pop(),te.length>0?ve.copy(te[te.length-1]):ve.identity())}function s(J){let V=new un,R=new _e,A=new _e,ie=new _e,j=!0,G=!1,pe=J.getAttribute("d");if(pe===""||pe==="none")return null;let xe=pe.match(/[a-df-z][^a-df-z]*/ig);for(let D=0,Y=xe.length;D<Y;D++){let $=xe[D],k=$.charAt(0),H=$.slice(1).trim();j===!0&&(G=!0,j=!1);let L;switch(k){case"M":L=m(H);for(let _=0,N=L.length;_<N;_+=2)R.x=L[_+0],R.y=L[_+1],A.x=R.x,A.y=R.y,_===0?V.moveTo(R.x,R.y):V.lineTo(R.x,R.y),_===0&&ie.copy(R);break;case"H":L=m(H);for(let _=0,N=L.length;_<N;_++)R.x=L[_],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"V":L=m(H);for(let _=0,N=L.length;_<N;_++)R.y=L[_],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"L":L=m(H);for(let _=0,N=L.length;_<N;_+=2)R.x=L[_+0],R.y=L[_+1],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"C":L=m(H);for(let _=0,N=L.length;_<N;_+=6)V.bezierCurveTo(L[_+0],L[_+1],L[_+2],L[_+3],L[_+4],L[_+5]),A.x=L[_+2],A.y=L[_+3],R.x=L[_+4],R.y=L[_+5],_===0&&G===!0&&ie.copy(R);break;case"S":L=m(H);for(let _=0,N=L.length;_<N;_+=4)V.bezierCurveTo(x(R.x,A.x),x(R.y,A.y),L[_+0],L[_+1],L[_+2],L[_+3]),A.x=L[_+0],A.y=L[_+1],R.x=L[_+2],R.y=L[_+3],_===0&&G===!0&&ie.copy(R);break;case"Q":L=m(H);for(let _=0,N=L.length;_<N;_+=4)V.quadraticCurveTo(L[_+0],L[_+1],L[_+2],L[_+3]),A.x=L[_+0],A.y=L[_+1],R.x=L[_+2],R.y=L[_+3],_===0&&G===!0&&ie.copy(R);break;case"T":L=m(H);for(let _=0,N=L.length;_<N;_+=2){let Q=x(R.x,A.x),ce=x(R.y,A.y);V.quadraticCurveTo(Q,ce,L[_+0],L[_+1]),A.x=Q,A.y=ce,R.x=L[_+0],R.y=L[_+1],_===0&&G===!0&&ie.copy(R)}break;case"A":L=m(H,[3,4],7);for(let _=0,N=L.length;_<N;_+=7){if(L[_+5]==R.x&&L[_+6]==R.y)continue;let Q=R.clone();R.x=L[_+5],R.y=L[_+6],A.x=R.x,A.y=R.y,o(V,L[_],L[_+1],L[_+2],L[_+3],L[_+4],Q,R),_===0&&G===!0&&ie.copy(R)}break;case"m":L=m(H);for(let _=0,N=L.length;_<N;_+=2)R.x+=L[_+0],R.y+=L[_+1],A.x=R.x,A.y=R.y,_===0?V.moveTo(R.x,R.y):V.lineTo(R.x,R.y),_===0&&ie.copy(R);break;case"h":L=m(H);for(let _=0,N=L.length;_<N;_++)R.x+=L[_],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"v":L=m(H);for(let _=0,N=L.length;_<N;_++)R.y+=L[_],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"l":L=m(H);for(let _=0,N=L.length;_<N;_+=2)R.x+=L[_+0],R.y+=L[_+1],A.x=R.x,A.y=R.y,V.lineTo(R.x,R.y),_===0&&G===!0&&ie.copy(R);break;case"c":L=m(H);for(let _=0,N=L.length;_<N;_+=6)V.bezierCurveTo(R.x+L[_+0],R.y+L[_+1],R.x+L[_+2],R.y+L[_+3],R.x+L[_+4],R.y+L[_+5]),A.x=R.x+L[_+2],A.y=R.y+L[_+3],R.x+=L[_+4],R.y+=L[_+5],_===0&&G===!0&&ie.copy(R);break;case"s":L=m(H);for(let _=0,N=L.length;_<N;_+=4)V.bezierCurveTo(x(R.x,A.x),x(R.y,A.y),R.x+L[_+0],R.y+L[_+1],R.x+L[_+2],R.y+L[_+3]),A.x=R.x+L[_+0],A.y=R.y+L[_+1],R.x+=L[_+2],R.y+=L[_+3],_===0&&G===!0&&ie.copy(R);break;case"q":L=m(H);for(let _=0,N=L.length;_<N;_+=4)V.quadraticCurveTo(R.x+L[_+0],R.y+L[_+1],R.x+L[_+2],R.y+L[_+3]),A.x=R.x+L[_+0],A.y=R.y+L[_+1],R.x+=L[_+2],R.y+=L[_+3],_===0&&G===!0&&ie.copy(R);break;case"t":L=m(H);for(let _=0,N=L.length;_<N;_+=2){let Q=x(R.x,A.x),ce=x(R.y,A.y);V.quadraticCurveTo(Q,ce,R.x+L[_+0],R.y+L[_+1]),A.x=Q,A.y=ce,R.x=R.x+L[_+0],R.y=R.y+L[_+1],_===0&&G===!0&&ie.copy(R)}break;case"a":L=m(H,[3,4],7);for(let _=0,N=L.length;_<N;_+=7){if(L[_+5]==0&&L[_+6]==0)continue;let Q=R.clone();R.x+=L[_+5],R.y+=L[_+6],A.x=R.x,A.y=R.y,o(V,L[_],L[_+1],L[_+2],L[_+3],L[_+4],Q,R),_===0&&G===!0&&ie.copy(R)}break;case"Z":case"z":V.currentPath.autoClose=!0,V.currentPath.curves.length>0&&(R.copy(ie),V.currentPath.currentPoint.copy(R),j=!0);break;default:console.warn($)}G=!1}return V}function r(J){if(!(!J.sheet||!J.sheet.cssRules||!J.sheet.cssRules.length))for(let V=0;V<J.sheet.cssRules.length;V++){let R=J.sheet.cssRules[V];if(R.type!==1)continue;let A=R.selectorText.split(/,/gm).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<A.length;ie++){let j=Object.fromEntries(Object.entries(R.style).filter(([,G])=>G!==""));Z[A[ie]]=Object.assign(Z[A[ie]]||{},j)}}}function o(J,V,R,A,ie,j,G,pe){if(V==0||R==0){J.lineTo(pe.x,pe.y);return}A=A*Math.PI/180,V=Math.abs(V),R=Math.abs(R);let xe=(G.x-pe.x)/2,D=(G.y-pe.y)/2,Y=Math.cos(A)*xe+Math.sin(A)*D,$=-Math.sin(A)*xe+Math.cos(A)*D,k=V*V,H=R*R,L=Y*Y,_=$*$,N=L/k+_/H;if(N>1){let ee=Math.sqrt(N);V=ee*V,R=ee*R,k=V*V,H=R*R}let Q=k*_+H*L,ce=(k*H-Q)/Q,w=Math.sqrt(Math.max(0,ce));ie===j&&(w=-w);let M=w*V*$/R,z=-w*R*Y/V,q=Math.cos(A)*M-Math.sin(A)*z+(G.x+pe.x)/2,ne=Math.sin(A)*M+Math.cos(A)*z+(G.y+pe.y)/2,W=a(1,0,(Y-M)/V,($-z)/R),de=a((Y-M)/V,($-z)/R,(-Y-M)/V,(-$-z)/R)%(Math.PI*2);J.currentPath.absellipse(q,ne,V,R,W,W+de,j===0,A)}function a(J,V,R,A){let ie=J*R+V*A,j=Math.sqrt(J*J+V*V)*Math.sqrt(R*R+A*A),G=Math.acos(Math.max(-1,Math.min(1,ie/j)));return J*A-V*R<0&&(G=-G),G}function l(J){let V=y(J.getAttribute("x")||0),R=y(J.getAttribute("y")||0),A=y(J.getAttribute("rx")||J.getAttribute("ry")||0),ie=y(J.getAttribute("ry")||J.getAttribute("rx")||0),j=y(J.getAttribute("width")),G=y(J.getAttribute("height")),pe=1-.551915024494,xe=new un;return xe.moveTo(V+A,R),xe.lineTo(V+j-A,R),(A!==0||ie!==0)&&xe.bezierCurveTo(V+j-A*pe,R,V+j,R+ie*pe,V+j,R+ie),xe.lineTo(V+j,R+G-ie),(A!==0||ie!==0)&&xe.bezierCurveTo(V+j,R+G-ie*pe,V+j-A*pe,R+G,V+j-A,R+G),xe.lineTo(V+A,R+G),(A!==0||ie!==0)&&xe.bezierCurveTo(V+A*pe,R+G,V,R+G-ie*pe,V,R+G-ie),xe.lineTo(V,R+ie),(A!==0||ie!==0)&&xe.bezierCurveTo(V,R+ie*pe,V+A*pe,R,V+A,R),xe}function c(J){function V(j,G,pe){let xe=y(G),D=y(pe);ie===0?A.moveTo(xe,D):A.lineTo(xe,D),ie++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new un,ie=0;return J.getAttribute("points").replace(R,V),A.currentPath.autoClose=!0,A}function h(J){function V(j,G,pe){let xe=y(G),D=y(pe);ie===0?A.moveTo(xe,D):A.lineTo(xe,D),ie++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new un,ie=0;return J.getAttribute("points").replace(R,V),A.currentPath.autoClose=!1,A}function f(J){let V=y(J.getAttribute("cx")||0),R=y(J.getAttribute("cy")||0),A=y(J.getAttribute("r")||0),ie=new gn;ie.absarc(V,R,A,0,Math.PI*2);let j=new un;return j.subPaths.push(ie),j}function d(J){let V=y(J.getAttribute("cx")||0),R=y(J.getAttribute("cy")||0),A=y(J.getAttribute("rx")||0),ie=y(J.getAttribute("ry")||0),j=new gn;j.absellipse(V,R,A,ie,0,Math.PI*2);let G=new un;return G.subPaths.push(j),G}function p(J){let V=y(J.getAttribute("x1")||0),R=y(J.getAttribute("y1")||0),A=y(J.getAttribute("x2")||0),ie=y(J.getAttribute("y2")||0),j=new un;return j.moveTo(V,R),j.lineTo(A,ie),j.currentPath.autoClose=!1,j}function g(J,V){V=Object.assign({},V);let R={};if(J.hasAttribute("class")){let G=J.getAttribute("class").split(/\s/).filter(Boolean).map(pe=>pe.trim());for(let pe=0;pe<G.length;pe++)R=Object.assign(R,Z["."+G[pe]])}J.hasAttribute("id")&&(R=Object.assign(R,Z["#"+J.getAttribute("id")]));function A(G,pe,xe){xe===void 0&&(xe=function(Y){return Y.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Y}),J.hasAttribute(G)&&(V[pe]=xe(J.getAttribute(G))),R[G]&&(V[pe]=xe(R[G])),J.style&&J.style[G]!==""&&(V[pe]=xe(J.style[G]))}function ie(G){return Math.max(0,Math.min(1,y(G)))}function j(G){return Math.max(0,y(G))}return A("fill","fill"),A("fill-opacity","fillOpacity",ie),A("fill-rule","fillRule"),A("opacity","opacity",ie),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",ie),A("stroke-width","strokeWidth",j),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",j),A("visibility","visibility"),V}function x(J,V){return J-(V-J)}function m(J,V,R){if(typeof J!="string")throw new TypeError("Invalid input: "+typeof J);let A={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ie=0,j=1,G=2,pe=3,xe=ie,D=!0,Y="",$="",k=[];function H(Q,ce,w){let M=new SyntaxError('Unexpected character "'+Q+'" at index '+ce+".");throw M.partial=w,M}function L(){Y!==""&&($===""?k.push(Number(Y)):k.push(Number(Y)*Math.pow(10,Number($)))),Y="",$=""}let _,N=J.length;for(let Q=0;Q<N;Q++){if(_=J[Q],Array.isArray(V)&&V.includes(k.length%R)&&A.FLAGS.test(_)){xe=j,Y=_,L();continue}if(xe===ie){if(A.WHITESPACE.test(_))continue;if(A.DIGIT.test(_)||A.SIGN.test(_)){xe=j,Y=_;continue}if(A.POINT.test(_)){xe=G,Y=_;continue}A.COMMA.test(_)&&(D&&H(_,Q,k),D=!0)}if(xe===j){if(A.DIGIT.test(_)){Y+=_;continue}if(A.POINT.test(_)){Y+=_,xe=G;continue}if(A.EXP.test(_)){xe=pe;continue}A.SIGN.test(_)&&Y.length===1&&A.SIGN.test(Y[0])&&H(_,Q,k)}if(xe===G){if(A.DIGIT.test(_)){Y+=_;continue}if(A.EXP.test(_)){xe=pe;continue}A.POINT.test(_)&&Y[Y.length-1]==="."&&H(_,Q,k)}if(xe===pe){if(A.DIGIT.test(_)){$+=_;continue}if(A.SIGN.test(_)){if($===""){$+=_;continue}$.length===1&&A.SIGN.test($)&&H(_,Q,k)}}A.WHITESPACE.test(_)?(L(),xe=ie,D=!1):A.COMMA.test(_)?(L(),xe=ie,D=!0):A.SIGN.test(_)?(L(),xe=j,Y=_):A.POINT.test(_)?(L(),xe=G,Y=_):H(_,Q,k)}return L(),k}let u=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(J){let V="px";if(typeof J=="string"||J instanceof String)for(let A=0,ie=u.length;A<ie;A++){let j=u[A];if(J.endsWith(j)){V=j,J=J.substring(0,J.length-j.length);break}}let R;return V==="px"&&t.defaultUnit!=="px"?R=b.in[t.defaultUnit]/t.defaultDPI:(R=b[V][t.defaultUnit],R<0&&(R=b[V].in*t.defaultDPI)),R*parseFloat(J)}function v(J){if(!(J.hasAttribute("transform")||J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))))return null;let V=C(J);return te.length>0&&V.premultiply(te[te.length-1]),ve.copy(V),te.push(V),V}function C(J){let V=new Ye,R=oe;if(J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))){let A=y(J.getAttribute("x")),ie=y(J.getAttribute("y"));V.translate(A,ie)}if(J.hasAttribute("transform")){let A=J.getAttribute("transform").split(")");for(let ie=A.length-1;ie>=0;ie--){let j=A[ie].trim();if(j==="")continue;let G=j.indexOf("("),pe=j.length;if(G>0&&G<pe){let xe=j.slice(0,G),D=m(j.slice(G+1));switch(R.identity(),xe){case"translate":if(D.length>=1){let Y=D[0],$=0;D.length>=2&&($=D[1]),R.translate(Y,$)}break;case"rotate":if(D.length>=1){let Y=0,$=0,k=0;Y=D[0]*Math.PI/180,D.length>=3&&($=D[1],k=D[2]),re.makeTranslation(-$,-k),ue.makeRotation(Y),X.multiplyMatrices(ue,re),re.makeTranslation($,k),R.multiplyMatrices(re,X)}break;case"scale":if(D.length>=1){let Y=D[0],$=Y;D.length>=2&&($=D[1]),R.scale(Y,$)}break;case"skewX":D.length===1&&R.set(1,Math.tan(D[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":D.length===1&&R.set(1,0,0,Math.tan(D[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":D.length===6&&R.set(D[0],D[2],D[4],D[1],D[3],D[5],0,0,1);break}}V.premultiply(R)}}return V}function S(J,V){function R(G){se.set(G.x,G.y,1).applyMatrix3(V),G.set(se.x,se.y)}function A(G){let pe=G.xRadius,xe=G.yRadius,D=Math.cos(G.aRotation),Y=Math.sin(G.aRotation),$=new B(pe*D,pe*Y,0),k=new B(-xe*Y,xe*D,0),H=$.applyMatrix3(V),L=k.applyMatrix3(V),_=oe.set(H.x,L.x,0,H.y,L.y,0,0,0,1),N=re.copy(_).invert(),w=ue.copy(N).transpose().multiply(N).elements,M=F(w[0],w[1],w[4]),z=Math.sqrt(M.rt1),q=Math.sqrt(M.rt2);if(G.xRadius=1/z,G.yRadius=1/q,G.aRotation=Math.atan2(M.sn,M.cs),!((G.aEndAngle-G.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let W=re.set(z,0,0,0,q,0,0,0,1),de=ue.set(M.cs,M.sn,0,-M.sn,M.cs,0,0,0,1),ee=W.multiply(de).multiply(_),ye=be=>{let{x:fe,y:Me}=new B(Math.cos(be),Math.sin(be),0).applyMatrix3(ee);return Math.atan2(Me,fe)};G.aStartAngle=ye(G.aStartAngle),G.aEndAngle=ye(G.aEndAngle),I(V)&&(G.aClockwise=!G.aClockwise)}}function ie(G){let pe=E(V),xe=T(V);G.xRadius*=pe,G.yRadius*=xe;let D=pe>Number.EPSILON?Math.atan2(V.elements[1],V.elements[0]):Math.atan2(-V.elements[3],V.elements[4]);G.aRotation+=D,I(V)&&(G.aStartAngle*=-1,G.aEndAngle*=-1,G.aClockwise=!G.aClockwise)}let j=J.subPaths;for(let G=0,pe=j.length;G<pe;G++){let D=j[G].curves;for(let Y=0;Y<D.length;Y++){let $=D[Y];$.isLineCurve?(R($.v1),R($.v2)):$.isCubicBezierCurve?(R($.v0),R($.v1),R($.v2),R($.v3)):$.isQuadraticBezierCurve?(R($.v0),R($.v1),R($.v2)):$.isEllipseCurve&&(he.set($.aX,$.aY),R(he),$.aX=he.x,$.aY=he.y,P(V)?A($):ie($))}}}function I(J){let V=J.elements;return V[0]*V[4]-V[1]*V[3]<0}function P(J){let V=J.elements,R=V[0]*V[3]+V[1]*V[4];if(R===0)return!1;let A=E(J),ie=T(J);return Math.abs(R/(A*ie))>Number.EPSILON}function E(J){let V=J.elements;return Math.sqrt(V[0]*V[0]+V[1]*V[1])}function T(J){let V=J.elements;return Math.sqrt(V[3]*V[3]+V[4]*V[4])}function F(J,V,R){let A,ie,j,G,pe,xe=J+R,D=J-R,Y=Math.sqrt(D*D+4*V*V);return xe>0?(A=.5*(xe+Y),pe=1/A,ie=J*pe*R-V*pe*V):xe<0?ie=.5*(xe-Y):(A=.5*Y,ie=-.5*Y),D>0?j=D+Y:j=D-Y,Math.abs(j)>2*Math.abs(V)?(pe=-2*V/j,G=1/Math.sqrt(1+pe*pe),j=pe*G):Math.abs(V)===0?(j=1,G=0):(pe=-.5*j/V,j=1/Math.sqrt(1+pe*pe),G=pe*j),D>0&&(pe=j,j=-G,G=pe),{rt1:A,rt2:ie,cs:j,sn:G}}let O=[],Z={},te=[],oe=new Ye,re=new Ye,ue=new Ye,X=new Ye,he=new _e,se=new B,ve=new Ye,Ae=new DOMParser().parseFromString(e,"image/svg+xml");return n(Ae.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:O,xml:Ae.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,u,b){let y=x.x,v=m.x,C=u.x,S=b.x,I=x.y,P=m.y,E=u.y,T=b.y,F=(S-C)*(I-E)-(T-E)*(y-C),O=(v-y)*(I-E)-(P-I)*(y-C),Z=(T-E)*(v-y)-(S-C)*(P-I),te=F/Z,oe=O/Z;if(Z===0&&F!==0||te<=0||te>=1||oe<0||oe>1)return null;if(F===0&&Z===0){for(let re=0;re<2;re++)if(o(re===0?u:b,x,m),s.loc==n.ORIGIN){let ue=re===0?u:b;return{x:ue.x,y:ue.y,t:s.t}}else if(s.loc==n.BETWEEN){let ue=+(y+s.t*(v-y)).toPrecision(10),X=+(I+s.t*(P-I)).toPrecision(10);return{x:ue,y:X,t:s.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?u:b,x,m),s.loc==n.ORIGIN){let he=X===0?u:b;return{x:he.x,y:he.y,t:s.t}}let re=+(y+te*(v-y)).toPrecision(10),ue=+(I+te*(P-I)).toPrecision(10);return{x:re,y:ue,t:te}}}function o(x,m,u){let b=u.x-m.x,y=u.y-m.y,v=x.x-m.x,C=x.y-m.y,S=b*C-v*y;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===u.x&&x.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(S<-Number.EPSILON){s.loc=n.LEFT;return}if(S>Number.EPSILON){s.loc=n.RIGHT;return}if(b*v<0||y*C<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+y*y)<Math.sqrt(v*v+C*C)){s.loc=n.BEYOND;return}let I;b!==0?I=v/b:I=C/y,s.loc=n.BETWEEN,s.t=I}function a(x,m){let u=[],b=[];for(let y=1;y<x.length;y++){let v=x[y-1],C=x[y];for(let S=1;S<m.length;S++){let I=m[S-1],P=m[S],E=r(v,C,I,P);E!==null&&u.find(T=>T.t<=E.t+Number.EPSILON&&T.t>=E.t-Number.EPSILON)===void 0&&(u.push(E),b.push(new _e(E.x,E.y)))}}return b}function l(x,m,u){let b=new _e;m.getCenter(b);let y=[];return u.forEach(v=>{v.boundingBox.containsPoint(b)&&a(x,v.points).forEach(S=>{y.push({identifier:v.identifier,isCW:v.isCW,point:S})})}),y.sort((v,C)=>v.point.x-C.point.x),y}function c(x,m,u,b,y){(y==null||y==="")&&(y="nonzero");let v=new _e;x.boundingBox.getCenter(v);let C=[new _e(u,v.y),new _e(b,v.y)],S=l(C,x.boundingBox,m);S.sort((O,Z)=>O.point.x-Z.point.x);let I=[],P=[];S.forEach(O=>{O.identifier===x.identifier?I.push(O):P.push(O)});let E=I[0].point.x,T=[],F=0;for(;F<P.length&&P[F].point.x<E;)T.length>0&&T[T.length-1]===P[F].identifier?T.pop():T.push(P[F].identifier),F++;if(T.push(x.identifier),y==="evenodd"){let O=T.length%2===0,Z=T[T.length-2];return{identifier:x.identifier,isHole:O,for:Z}}else if(y==="nonzero"){let O=!0,Z=null,te=null;for(let oe=0;oe<T.length;oe++){let re=T[oe];O?(te=m[re].isCW,O=!1,Z=re):te!==m[re].isCW&&(te=m[re].isCW,O=!0)}return{identifier:x.identifier,isHole:O,for:Z}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let h=999999999,f=-999999999,d=e.subPaths.map(x=>{let m=x.getPoints(),u=-999999999,b=999999999,y=-999999999,v=999999999;for(let C=0;C<m.length;C++){let S=m[C];S.y>u&&(u=S.y),S.y<b&&(b=S.y),S.x>y&&(y=S.x),S.x<v&&(v=S.x)}return f<=y&&(f=y+1),h>=v&&(h=v-1),{curves:x.curves,points:m,isCW:Ct.isClockWise(m),identifier:-1,boundingBox:new Ws(new _e(v,b),new _e(y,u))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let p=d.map(x=>c(x,d,h,f,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(x=>{if(!p[x.identifier].isHole){let u=new vt;u.curves=x.curves,p.filter(y=>y.isHole&&y.for===x.identifier).forEach(y=>{let v=d[y.identifier],C=new gn;C.curves=v.curves,u.holes.push(C)}),g.push(u)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let l=new lt;return l.setAttribute("position",new Je(r,3)),l.setAttribute("normal",new Je(o,3)),l.setAttribute("uv",new Je(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,l){let c=new _e,h=new _e,f=new _e,d=new _e,p=new _e,g=new _e,x=new _e,m=new _e,u=new _e,b=new _e,y=new _e,v=new _e,C=new _e,S=new _e,I=new _e,P=new _e,E=new _e;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=D(e);let T=e.length;if(T<2)return 0;let F=e[0].equals(e[T-1]),O,Z=e[0],te,oe=t.strokeWidth/2,re=1/(T-1),ue=0,X,he,se,ve,Ae=!1,Ue=0,J=l*3,V=l*2;R(e[0],e[1],c).multiplyScalar(oe),m.copy(e[0]).sub(c),u.copy(e[0]).add(c),b.copy(m),y.copy(u);for(let Y=1;Y<T;Y++){O=e[Y],Y===T-1?F?te=e[1]:te=void 0:te=e[Y+1];let $=c;if(R(Z,O,$),f.copy($).multiplyScalar(oe),v.copy(O).sub(f),C.copy(O).add(f),X=ue+re,he=!1,te!==void 0){R(O,te,h),f.copy(h).multiplyScalar(oe),S.copy(O).sub(f),I.copy(O).add(f),se=!0,f.subVectors(te,Z),$.dot(f)<0&&(se=!1),Y===1&&(Ae=se),f.subVectors(te,O),f.normalize();let k=Math.abs($.dot(f));if(k>Number.EPSILON){let H=oe/k;f.multiplyScalar(-H),d.subVectors(O,Z),p.copy(d).setLength(H).add(f),P.copy(p).negate();let L=p.length(),_=d.length();d.divideScalar(_),g.subVectors(te,O);let N=g.length();switch(g.divideScalar(N),d.dot(P)<_&&g.dot(P)<N&&(he=!0),E.copy(p).add(O),P.add(O),ve=!1,he?se?(I.copy(P),C.copy(P)):(S.copy(P),v.copy(P)):j(),t.strokeLineJoin){case"bevel":G(se,he,X);break;case"round":pe(se,he),se?ie(O,v,S,X,0):ie(O,I,C,X,1);break;case"miter":case"miter-clip":default:let Q=oe*t.strokeMiterLimit/L;if(Q<1)if(t.strokeLineJoin!=="miter-clip"){G(se,he,X);break}else pe(se,he),se?(g.subVectors(E,v).multiplyScalar(Q).add(v),x.subVectors(E,S).multiplyScalar(Q).add(S),A(v,X,0),A(g,X,0),A(O,X,.5),A(O,X,.5),A(g,X,0),A(x,X,0),A(O,X,.5),A(x,X,0),A(S,X,0)):(g.subVectors(E,C).multiplyScalar(Q).add(C),x.subVectors(E,I).multiplyScalar(Q).add(I),A(C,X,1),A(g,X,1),A(O,X,.5),A(O,X,.5),A(g,X,1),A(x,X,1),A(O,X,.5),A(x,X,1),A(I,X,1));else he?(se?(A(u,ue,1),A(m,ue,0),A(E,X,0),A(u,ue,1),A(E,X,0),A(P,X,1)):(A(u,ue,1),A(m,ue,0),A(E,X,1),A(m,ue,0),A(P,X,0),A(E,X,1)),se?S.copy(E):I.copy(E)):se?(A(v,X,0),A(E,X,0),A(O,X,.5),A(O,X,.5),A(E,X,0),A(S,X,0)):(A(C,X,1),A(E,X,1),A(O,X,.5),A(O,X,.5),A(E,X,1),A(I,X,1)),ve=!0;break}}else j()}else j();!F&&Y===T-1&&xe(e[0],b,y,se,!0,ue),ue=X,Z=O,m.copy(S),u.copy(I)}if(!F)xe(O,v,C,se,!1,X);else if(he&&r){let Y=E,$=P;Ae!==se&&(Y=P,$=E),se?(ve||Ae)&&($.toArray(r,0),$.toArray(r,9),ve&&Y.toArray(r,3)):(ve||!Ae)&&($.toArray(r,3),$.toArray(r,9),ve&&Y.toArray(r,0))}return Ue;function R(Y,$,k){return k.subVectors($,Y),k.set(-k.y,k.x).normalize()}function A(Y,$,k){r&&(r[J]=Y.x,r[J+1]=Y.y,r[J+2]=0,o&&(o[J]=0,o[J+1]=0,o[J+2]=1),J+=3,a&&(a[V]=$,a[V+1]=k,V+=2)),Ue+=3}function ie(Y,$,k,H,L){c.copy($).sub(Y).normalize(),h.copy(k).sub(Y).normalize();let _=Math.PI,N=c.dot(h);Math.abs(N)<1&&(_=Math.abs(Math.acos(N))),_/=n,f.copy($);for(let Q=0,ce=n-1;Q<ce;Q++)d.copy(f).rotateAround(Y,_),A(f,H,L),A(d,H,L),A(Y,H,.5),f.copy(d);A(d,H,L),A(k,H,L),A(Y,H,.5)}function j(){A(u,ue,1),A(m,ue,0),A(v,X,0),A(u,ue,1),A(v,X,0),A(C,X,1)}function G(Y,$,k){$?Y?(A(u,ue,1),A(m,ue,0),A(v,X,0),A(u,ue,1),A(v,X,0),A(P,X,1),A(v,k,0),A(S,k,0),A(P,k,.5)):(A(u,ue,1),A(m,ue,0),A(C,X,1),A(m,ue,0),A(P,X,0),A(C,X,1),A(C,k,1),A(P,k,0),A(I,k,1)):Y?(A(v,k,0),A(S,k,0),A(O,k,.5)):(A(C,k,1),A(I,k,0),A(O,k,.5))}function pe(Y,$){$&&(Y?(A(u,ue,1),A(m,ue,0),A(v,X,0),A(u,ue,1),A(v,X,0),A(P,X,1),A(v,ue,0),A(O,X,.5),A(P,X,1),A(O,X,.5),A(S,ue,0),A(P,X,1)):(A(u,ue,1),A(m,ue,0),A(C,X,1),A(m,ue,0),A(P,X,0),A(C,X,1),A(C,ue,1),A(P,X,0),A(O,X,.5),A(O,X,.5),A(P,X,0),A(I,ue,1)))}function xe(Y,$,k,H,L,_){switch(t.strokeLineCap){case"round":L?ie(Y,k,$,_,.5):ie(Y,$,k,_,.5);break;case"square":if(L)c.subVectors($,Y),h.set(c.y,-c.x),f.addVectors(c,h).add(Y),d.subVectors(h,c).add(Y),H?(f.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(f.toArray(r,3),a[7]===1?d.toArray(r,9):f.toArray(r,9),d.toArray(r,0));else{c.subVectors(k,Y),h.set(c.y,-c.x),f.addVectors(c,h).add(Y),d.subVectors(h,c).add(Y);let N=r.length;H?(f.toArray(r,N-3),d.toArray(r,N-6),d.toArray(r,N-12)):(d.toArray(r,N-6),f.toArray(r,N-3),d.toArray(r,N-12))}break;case"butt":default:break}}function D(Y){let $=!1;for(let H=1,L=Y.length-1;H<L;H++)if(Y[H].distanceTo(Y[H+1])<s){$=!0;break}if(!$)return Y;let k=[];k.push(Y[0]);for(let H=1,L=Y.length-1;H<L;H++)Y[H].distanceTo(Y[H+1])>=s&&k.push(Y[H]);return k.push(Y[Y.length-1]),k}}};window.SlinkGrowthModules={createTile:Qs,VARIANTS:zc,TILE_SPEC:Oc,disposeTile:er};window.Slink3D=(()=>{let i=new oa,e,t=!1,n=null,s=!1,r=!1,o=null,a=0,l,c,h,f,d,p=new Gs,g=[],x=[],m=[],u,b,y,v=!1,C,S=[],I=[],P=0,E=0,T=(_,N=.55,Q={})=>new je({color:_,roughness:N,metalness:0,...Q});function F(_,N,Q,ce,w){let M=new vt;return M.moveTo(_+w,N),M.lineTo(_+Q-w,N),M.quadraticCurveTo(_+Q,N,_+Q,N+w),M.lineTo(_+Q,N+ce-w),M.quadraticCurveTo(_+Q,N+ce,_+Q-w,N+ce),M.lineTo(_+w,N+ce),M.quadraticCurveTo(_,N+ce,_,N+ce-w),M.lineTo(_,N+w),M.quadraticCurveTo(_,N,_+w,N),M}function O(_,N,Q=0,ce=0,w=0,M=f){let z=new Oe(_,N);return z.position.set(Q,ce,w),z.castShadow=!0,z.receiveShadow=!0,M.add(z),z}function Z(_,N,Q,ce,w,M,z,q,ne=f){return O(new vn(_,N,Q,4,ce),w,M,z,q,ne)}function te(){let _=document.createElement("canvas");_.width=_.height=128;let N=_.getContext("2d"),Q=N.createImageData(128,128),ce=73;for(let M=0;M<Q.data.length;M+=4){ce=ce*1664525+1013904223>>>0;let z=128+(ce>>>27)%9;Q.data[M]=Q.data[M+1]=Q.data[M+2]=z,Q.data[M+3]=255}N.putImageData(Q,0,0);let w=new mn(_);return w.wrapS=w.wrapT=Oi,w}let oe=()=>te();function re(){let _=te(),N=_.image,Q=N.getContext("2d");Q.fillStyle="#656565";for(let ce=0;ce<4;ce++){let w=ce*Math.PI/2+.5;Q.save(),Q.translate(64+Math.cos(w)*18,64+Math.sin(w)*18),Q.rotate(w),Q.beginPath(),Q.ellipse(0,0,18,9,0,0,Math.PI*2),Q.fill(),Q.restore()}return Q.beginPath(),Q.arc(64,64,5,0,Math.PI*2),Q.fill(),_.needsUpdate=!0,_}function ue(_){let N=document.createElement("canvas");N.width=N.height=128;let Q=N.getContext("2d");Q.fillStyle="#77421a",Q.font="bold 82px Trebuchet MS",Q.textAlign="center",Q.textBaseline="middle",Q.fillText(String(_),64,69);let ce=new mn(N);return ce.colorSpace=_t,ce}function X(_,N){let Q=0;for(let w=0;w<_.length;w++){let M=_[w],z=_[(w+1)%_.length];Q+=M.x*z.y-z.x*M.y}let ce=Q>0?1:-1;return _.map((w,M)=>{let z=_[(M+_.length-1)%_.length],q=_[(M+1)%_.length],ne=w.clone().sub(z).normalize(),W=q.clone().sub(w).normalize(),de=new _e(ne.y,-ne.x).multiplyScalar(ce),ee=new _e(W.y,-W.x).multiplyScalar(ce),ye=de.clone().add(ee).normalize();return w.clone().add(ye.multiplyScalar(N/Math.max(.25,ye.dot(de))))})}function he(_){let N=new vt;return _.forEach((Q,ce)=>ce?N.lineTo(Q.x,-Q.y):N.moveTo(Q.x,-Q.y)),N.closePath(),N}function se(_,N){let Q=new Set(_),ce=[];for(;Q.size;){let w=Q.values().next().value,M=[w];Q.delete(w);for(let z=0;z<M.length;z++){let q=M[z];for(let ne of[q-N,q+N,q%N?q-1:-1,q%N<N-1?q+1:-1])Q.has(ne)&&(Q.delete(ne),M.push(ne))}ce.push(M)}return ce}function ve(_,N,Q){let ce=new Set(_),w=[],M=(q,ne)=>q>=0&&ne>=0&&q<N&&ce.has(ne*N+q);for(let q of _){let ne=q%N,W=Math.floor(q/N),de=20+ne*80,ee=20+W*80;M(ne,W-1)||w.push([[de,ee],[de+80,ee]]),M(ne+1,W)||w.push([[de+80,ee],[de+80,ee+80]]),M(ne,W+1)||w.push([[de+80,ee+80],[de,ee+80]]),M(ne-1,W)||w.push([[de,ee+80],[de,ee]])}let z=[];for(;w.length;){let q=w.shift(),ne=q[0],W=[ne],de=q[1];for(;de.join()!=ne.join();){W.push(de);let ee=w.findIndex(ye=>ye[0].join()==de.join());if(ee<0)break;de=w.splice(ee,1)[0][1]}W=W.filter((ee,ye)=>{let be=W[(ye+W.length-1)%W.length],fe=W[(ye+1)%W.length];return!(be[0]===ee[0]&&fe[0]===ee[0]||be[1]===ee[1]&&fe[1]===ee[1])}),z.push(W.map(ee=>new _e(...ee)))}return z.sort((q,ne)=>Math.abs(Ct.area(ne))-Math.abs(Ct.area(q))),z.map((q,ne)=>{let W=X(q,ne?Q:-Q),de=new vt;return W.forEach((ee,ye)=>{let be=W[(ye+W.length-1)%W.length],fe=W[(ye+1)%W.length],Me=Math.min(10,ee.distanceTo(be)/3,ee.distanceTo(fe)/3),we=ee.clone().add(be.clone().sub(ee).normalize().multiplyScalar(Me)),Te=ee.clone().add(fe.clone().sub(ee).normalize().multiplyScalar(Me));ye?de.lineTo(we.x,-we.y):de.moveTo(we.x,-we.y),de.quadraticCurveTo(ee.x,-ee.y,Te.x,-Te.y)}),de.closePath(),de})}function Ae(){d=document.createElement("canvas"),d.id="terrain3d",d.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(d),l=new ea({canvas:d,alpha:!0,antialias:!0,powerPreference:"high-performance"}),l.setPixelRatio(Math.min(devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.autoUpdate=!1,l.shadowMap.needsUpdate=!0,l.shadowMap.type=io,l.outputColorSpace=_t,l.toneMapping=uo,l.toneMappingExposure=.88,c=new ws,c.add(new Vs("#fff6dc","#a28d6c",1.65));let _=new $i("#fff4dc",3.3);_.position.set(-300,450,750),_.castShadow=!0,_.shadow.mapSize.set(2048,2048),Object.assign(_.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),_.shadow.bias=-3e-4,_.shadow.normalBias=.9,_.shadow.radius=4,c.add(_);let N=new $i("#d4e8ff",.4);N.position.set(500,-100,400),c.add(N),f=new Ve,c.add(f),e=fu(),e.setSize(90),c.add(e.group),h=new pi,h.up.set(0,1,0),h.near=1,h.far=3e3,b=new ResizeObserver(()=>Ue()),b.observe(document.getElementById("board"));let Q=(q,ne)=>{let W=d.getBoundingClientRect();return p.setFromCamera(new _e((q-W.left)/W.width*2-1,-(ne-W.top)/W.height*2+1),h),p.intersectObjects(g,!1)[0]?.object.userData.cell??-1},ce=new Qt(new B(0,0,1),-8.5),w=new B,M=(q,ne)=>{let W=d.getBoundingClientRect();return p.setFromCamera(new _e((q-W.left)/W.width*2-1,-(ne-W.top)/W.height*2+1),h),p.ray.intersectPlane(ce,w)?du(u.l.n,window.SlinkAcceptedPath||[],w.x,w.y,window.SlinkTouchSettings):-1},z=q=>{if(!v)return;let ne=performance.now();window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},input:Math.round(Math.max(0,ne-q.timeStamp))};let W=C||q,de=q.clientX-W.clientX,ee=q.clientY-W.clientY,ye=Math.max(1,Math.ceil(Math.hypot(de,ee)/3));for(let be=1;be<=ye;be++){let fe=M(W.clientX+de*be/ye,W.clientY+ee*be/ye);fe>=0&&u.onMove(fe)}C={clientX:q.clientX,clientY:q.clientY},window.SlinkTouchMetrics.handler=Math.round((performance.now()-ne)*10)/10};d.addEventListener("pointerdown",q=>{q.preventDefault(),d.setPointerCapture(q.pointerId),v=!0,t=Q(q.clientX,q.clientY)===(window.SlinkAcceptedPath||[]).at(-1)||p.intersectObject(e.group,!0).length>0,C=null,z(q),document.getElementById("board").focus({preventScroll:!0})}),d.addEventListener("pointermove",q=>{let ne=q.getCoalescedEvents?.();for(let W of ne?.length?ne:[q])z(W)});for(let q of["pointerup","pointercancel","lostpointercapture"])d.addEventListener(q,()=>{v=!1,t=!1,C=null});d.addEventListener("webglcontextlost",q=>{q.preventDefault(),r=!0,d.hidden=!0,v=!1,t=!1,C=null,window.SlinkAudio?.cancel(),document.getElementById("field").classList.remove("has-3d"),window.SlinkRenderFallback?.()}),d.addEventListener("webglcontextrestored",()=>{r=!1,d.hidden=!1,document.getElementById("field").classList.add("has-3d"),window.SlinkRenderScene?.()}),document.getElementById("field").classList.add("has-3d")}function Ue(_=!1){if(!u)return;R=null;let N=document.getElementById("board"),Q=N.clientWidth,ce=N.clientHeight;if(!Q||!ce)return;l.setSize(Q,ce,!1);let w=new pn().setFromObject(f);w.max.z=Math.max(w.max.z,60);let M=w.getCenter(new B);h.position.set(M.x,M.y-430,M.z+1250),h.lookAt(M.x,M.y,0),h.updateMatrixWorld();let z=c.children.find(fe=>fe.isDirectionalLight&&fe.castShadow);if(z){let fe=Math.max(w.max.x-w.min.x,w.max.y-w.min.y)*.75+60;z.target.position.set(M.x,M.y,0),c.add(z.target),Object.assign(z.shadow.camera,{left:-fe,right:fe,top:fe,bottom:-fe}),z.shadow.camera.updateProjectionMatrix()}let q=h.matrixWorldInverse,ne=new _e(1/0,1/0),W=new _e(-1/0,-1/0);for(let fe of[w.min.x,w.max.x])for(let Me of[w.min.y,w.max.y])for(let we of[w.min.z,w.max.z]){let Te=new B(fe,Me,we).applyMatrix4(q);ne.min(Te),W.max(Te)}let de=(ne.x+W.x)/2,ee=(ne.y+W.y)/2,ye=Math.max((W.y-ne.y)/2,(W.x-ne.x)/2/(Q/ce))+13,be=ye*Q/ce;Object.assign(h,{left:de-be,right:de+be,top:ee+ye,bottom:ee-ye}),h.updateProjectionMatrix(),l.shadowMap.needsUpdate=!0,_||j()}let J=window.SlinkHeadFinale?.enabled!==!1,V=typeof location<"u"&&new URLSearchParams(location.search).has("preview")&&new URLSearchParams(location.search).has("camera-finale"),R=null,A={strength:115,duration:1.8,delay:.6};J&&addEventListener("message",_=>{if(!(_.origin!==location.origin||_.source!==parent||_.data?.type!=="slink-head-zoom-study"))for(let[N,Q,ce]of[["strength",100,160],["duration",.3,4],["delay",0,3]]){let w=Number(_.data[N]);Number.isFinite(w)&&(A[N]=ot.clamp(w,Q,ce))}});function ie(_){if(!V&&!J){R&&(h.position.copy(R.position),h.quaternion.copy(R.rotation),Object.assign(h,R.bounds),h.updateProjectionMatrix(),R=null);return}if(_.celebrationAge<0){d.dataset.finaleCamera="0",R&&(h.position.copy(R.position),h.quaternion.copy(R.rotation),Object.assign(h,R.bounds),h.updateProjectionMatrix(),R=null);return}if(R||(R={position:h.position.clone(),rotation:h.quaternion.clone(),bounds:{left:h.left,right:h.right,top:h.top,bottom:h.bottom}}),J&&!V){let z=ot.clamp((_.celebrationAge-A.delay)/A.duration,0,1);z=z*z*z*(z*(z*6-15)+10);let q=1+(A.strength/100-1)*z;h.updateMatrixWorld();let ne=new B(_.x,_.y,35).applyMatrix4(h.matrixWorldInverse),W=R.bounds,de=(W.left+W.right)/2,ee=(W.top+W.bottom)/2,ye=A.strength>100?z:0,be=ot.lerp(de,ne.x,ye),fe=ot.lerp(ee,ne.y,ye),Me=(W.right-W.left)/2/q,we=(W.top-W.bottom)/2/q;Object.assign(h,{left:be-Me,right:be+Me,top:fe+we,bottom:fe-we}),h.updateProjectionMatrix(),d.dataset.studyZoom=String(q);return}let N=ot.clamp((_.celebrationAge-.25)/2.5,0,1);N=N*N*N*(N*(N*6-15)+10);let Q=new B(_.x,_.y-320,155),ce=h.clone();ce.up.set(0,0,1),ce.position.copy(Q),ce.lookAt(_.x,_.y,35),h.position.lerpVectors(R.position,Q,N),h.quaternion.copy(R.rotation).slerp(ce.quaternion,N);let w=85,M=d.clientWidth/d.clientHeight;for(let[z,q]of Object.entries({left:-w*M,right:w*M,top:w,bottom:-w}))h[z]=ot.lerp(R.bounds[z],q,N);h.updateProjectionMatrix(),d.dataset.finaleCamera=String(N)}function j(){l.render(c,h)}let G=null;function pe(_){if(requestAnimationFrame(pe),r||!l||!u||document.hidden||window.SlinkPrewarmPaused||document.getElementById("win")?.hidden===!1){E=_;return}if(_-E<33)return;P+=Math.min((_-E)/1e3,.1),E=_,i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220;let N=window.NurbiPlayerSettings?.value.reduce===!0,Q=N?0:P,ce=i.sample(_/1e3);J=window.SlinkHeadFinale?.enabled!==!1,new URLSearchParams(location.search).has("head-finale")||(A={strength:window.SlinkHeadFinale?.strength??145,duration:window.SlinkHeadFinale?.duration??1.8,delay:window.SlinkHeadFinale?.delay??.6});let w=new URLSearchParams(location.search).has("preview")&&window.SlinkQuickFinale?.enabled;w?(G??={...A},A={...G,duration:.55,delay:.05}):G&&(A=G,G=null),ie(ce),!ce.moving&&window.SlinkTouchAcceptedAt!==void 0&&(window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},arrival:Math.round(performance.now()-window.SlinkTouchAcceptedAt)},window.SlinkTouchAcceptedAt=void 0),e.group.position.set(ce.x,ce.y,8.5+9.5*(S.find(z=>z.i===ce.cell)?.progress||0)),e.group.rotation.z=ce.heading,e.group.visible&&e.update(Q,0,{active:ce.moving,travel:ce.travel,celebrationAge:N?-1:w?ce.celebrationAge:J?ce.celebrationAge-2.4:ce.celebrationAge,headLiftAge:!N&&J?ce.celebrationAge-(w?.05:.9):-1,headLiftAngle:48*Math.PI/180,headLiftDuration:w?.35:1.5,celebrationTurn:ce.celebrationTurn,celebrationStyle:w?"compact":"gentle"}),d.dataset.creatureCell=ce.cell,d.dataset.creatureMoving=String(ce.moving),d.dataset.creatureX=ce.x,d.dataset.creatureY=ce.y,d.dataset.creatureHeading=ce.heading,d.dataset.creatureCelebration=ce.celebrationAge,window.SlinkAudio?.celebration(ce.celebrationAge);for(let z of I)z.update(Q);let M=window.SlinkBacktrackHighlight?.enabled!==!1&&t?(window.SlinkAcceptedPath||[]).at(-2):void 0;d.dataset.highlightedCell=M??"";for(let z of S){if(yu(z.grown,z.i===M,window.SlinkBacktrackHighlight?.strength??.24),z.meadow?.update(Q),!z.grown)continue;let q=Math.min((_-z.changedAt)/z.duration,1);z.progress=z.from+(z.target-z.from)*Math.max(0,q);let ne=z.progress;z.grown.scale.z=(8.5+9.5*ne)/18,z.grown.position.z=0,z.grown.visible=ne>0,z.lastOpacity!==ne&&(z.lastOpacity=ne,z.grown.traverse(W=>{W.isMesh&&(W.material.transparent=ne<1,W.material.opacity=ne,W.castShadow=ne>.7)})),z.earth.visible=ne<1}for(let z of m){let q=S.find(ne=>ne.i===z.i);z.goal.group.position.z=8.5+9.5*(q?.progress||0),z.goal.update(Q,N?0:.033,N)}N?o?.bird?.update(0):o?.update(P-a),d.dataset.birdCount=String(o?.bird?1:0),d.dataset.birdSpecies=o?.bird?.group.userData.species||"",d.dataset.birdGroundVisit=String(o?.bird?.group.userData.groundVisit??-1),l.shadowMap.needsUpdate=!0,j()}requestAnimationFrame(pe);function xe(_){let N=new Set,Q=new Set,ce=new Set;_.traverse(w=>{w.geometry&&N.add(w.geometry);for(let M of[].concat(w.material||[])){Q.add(M);for(let z of Object.values(M))z?.isTexture&&ce.add(z)}}),_.clear(),N.forEach(w=>w.dispose()),Q.forEach(w=>w.dispose()),ce.forEach(w=>w.dispose())}function D(){return{root:f,current:u,targets:g,grass:x,coins:m,tiles:S,liquids:I,fenceLife:o,fenceStarted:a}}function Y(_){({root:f,current:u,targets:g,grass:x,coins:m,tiles:S,liquids:I,fenceLife:o=null,fenceStarted:a=P}=_)}function $(_,N,Q){u={l:_,onMove:Q},xe(f),g=[],x=[],m=[],S=[],I=[],o=null,a=P;let ce=new ir,w=ce.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+N+'"/></svg>'),M=ir.createShapes(w.paths[0])[0].getPoints(24);M.pop();let z=he(X(M,11)),q=T("#f6dfb5",.62,{bumpMap:oe(),bumpScale:.18,side:Vt}),ne=[..._.water||[],..._.lava||[]],W=fe=>({x:fe%_.n*80+60,y:-(Math.floor(fe/_.n)*80+60)}),de=[];for(let[fe,Me]of[["water",_.water||[]],["lava",_.lava||[]]])for(let we of se(Me,_.n)){let Te=ve(we,_.n,7);z.holes.push(Te[0]),de.push({type:fe,group:we,shapes:Te})}let ee=new Zt(z,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});O(ee,q,0,0,-24);for(let fe of se(_.solution,_.n)){let Me=ve(fe,_.n,0),we=Me[0];we.holes.push(...Me.slice(1)),O(new Os(we),T("#87623d",.8),0,0,3.2)}for(let fe of _.solution){let Me=W(fe);S.push({i:fe,p:Me,id:null,group:null})}for(let{type:fe,group:Me,shapes:we}of de){let Te=W(Me[0]),Re=window.SlinkCatalogueDesign,ze=Pu(fe,{style:fe==="water"?Re?.waterStyle||"sway":Re?.lavaStyle||"bubbles",center:[Te.x,Te.y]});I.push(ze);let K=we[0];K.holes.push(...we.slice(1)),O(new Zt(K,{depth:3,bevelEnabled:!1,curveSegments:20}),ze.material,0,0,-15)}let ye=Cu(_),be=new Map;for(let fe of _.stones||[]){let Me=ye.stones[fe];be.has(Me)||be.set(Me,Tu(Me,{seed:ye.seed}));let we=be.get(Me).group.clone(!0),Te=W(fe);we.position.set(Te.x,Te.y,0),we.userData.cell=fe,f.add(we),we.traverse(Re=>{Re.isMesh&&(Re.userData.cell=-1,g.push(Re))})}if(_.fence){let fe=su(_),Me={n:_.n,walls:_.walls,origin:[60,-60],style:_.fence.style,design:_.fence.design};fe?(o=eu({...Me,seed:fe.seed,perchIndex:fe.perchIndex,groundTargets:()=>fe.cells.map(we=>({cell:we,center:!0,position:[we%_.n*80+60,-Math.floor(we/_.n)*80-60,8.5+9.5*(S.find(Te=>Te.i===we)?.progress||0)]})),isUnsafe:we=>ru(_,we,window.SlinkAcceptedPath||[],i.complete)}),f.add(o.group)):f.add(na(Me).group)}else for(let[fe,Me]of _.walls){let we=W(fe),Te=W(Me);Z(we.x===Te.x?53:9,we.y===Te.y?53:9,18,3,T("#a49983",.85),(we.x+Te.x)/2,(we.y+Te.y)/2,17)}for(let[fe,Me]of _.marks.entries()){let we=W(Me),Te=Eu({species:ye.flowers[fe],number:fe+1,state:fe===0?"next":"closed",layout:"compact"});if(new URLSearchParams(location.search).has("preview")){let Re=new URLSearchParams(location.search).get("flower-anchor"),ze={front:[-25,-22],back:[-25,22],compact:[-18,-10]}[Re];if(ze)for(let K of[Te.group.children[0],Te.group.children[4]])K.position.x=ze[0],K.position.z=-ze[1];if(Re==="compact"){let K=Te.group.children[4],Ee=new Ve;Ee.scale.set(.85,.62,.85);for(let Pe of[...K.children])Ee.add(Pe);K.add(Ee)}}Te.group.rotation.x=Math.PI/2,Te.group.position.set(we.x,we.y,8.5),f.add(Te.group),m.push({i:Me,goal:Te})}l.shadowMap.needsUpdate=!0,s||Ue(!0)}function k(_){_.earth=xu(Qs("earth-loam",{seed:73+_.i*19})),_.group=_.earth,_.earth.position.set(_.p.x,_.p.y,0),f.add(_.earth),_.earth.traverse(N=>{N.isMesh&&N.userData.surface&&(N.userData.cell=_.i,g.push(N))}),_.progress=0,_.target=0,_.from=0,_.changedAt=performance.now(),_.duration=300}function H(_,N){if(r||!l||!u||n?.current.l===_)return!1;n&&(xe(n.root),n=null);let Q=D(),ce=performance.now(),w=e.group.visible,M=l.getRenderTarget(),z,q;s=!0,Y({root:new Ve,current:null,targets:[],grass:[],coins:[],tiles:[],liquids:[]}),q=f;try{$(_,N,()=>{});for(let W of S)k(W);for(let W of m)W.goal.setSize(window.SlinkMarkerSize||27);n=D(),c.remove(Q.root),c.add(f),e.group.visible=!1;let ne=[];return f.traverse(W=>{W.isMesh&&(ne.push([W,W.frustumCulled]),W.frustumCulled=!1)}),l.compile(c,h),z=new en(128,128),z.texture.colorSpace=l.outputColorSpace,l.setRenderTarget(z),l.shadowMap.needsUpdate=!0,j(),ne.forEach(([W,de])=>W.frustumCulled=de),d.dataset.nextPrepared=_.id,d.dataset.nextPrepareMs=Math.round(performance.now()-ce),!0}catch(ne){return console.warn("Next puzzle preparation:",ne),xe(q),n=null,!1}finally{l.setRenderTarget(M),z?.dispose(),c.remove(q),c.add(Q.root),e.group.visible=w,Y(Q),s=!1,l.shadowMap.needsUpdate=!0}}function L(_,N){c.remove(f),xe(f),Y(n),n=null,u={l:_,onMove:N},a=P,c.add(f),Ue(!0),d.dataset.nextPrepared="",d.dataset.usedPrepared=_.id}return{studyPoint(_){let N=S.find(w=>w.i===_);if(!N||!h||!d)return null;let Q=new B(N.p.x,N.p.y,16).project(h),ce=d.getBoundingClientRect();return{x:ce.left+(Q.x+1)*ce.width/2,y:ce.top+(1-Q.y)*ce.height/2}},prepare:H,diagnostics(){return l?{textures:l.info.memory.textures,geometries:l.info.memory.geometries,programs:l.info.programs.length,flowers:m.map(_=>_.goal.group.userData.species),bloomsReady:m.every(_=>_.goal.state==="bloom"&&_.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:f.children.filter(_=>_.userData.style&&_.userData.walkable===!1).map(_=>_.userData.style),bird:o?.bird?{species:o.bird.group.userData.species,landingCell:o.bird.group.userData.landingCell,groundVisit:o.bird.group.userData.groundVisit}:null,fence:u?.l.fence?{...u.l.fence,spans:f.getObjectByName("wood-fence")?.children.filter(_=>_.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:d.dataset.creatureCell,moving:d.dataset.creatureMoving,heading:d.dataset.creatureHeading,celebrationAge:d.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(_,N,Q,ce){if(r)return!1;try{let w=performance.now(),M=u?.l!==_;l||Ae();let z=performance.now();M&&(n?.current.l===_?L(_,ce):(n&&(xe(n.root),n=null),$(_,Q,ce),d.dataset.usedPrepared=""));let q=performance.now();N.at(-1)!==window.SlinkAcceptedPath?.at(-1)&&(window.SlinkTouchAcceptedAt=performance.now()),window.SlinkAcceptedPath=[...N],i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220,i.sync(_,N,performance.now()/1e3);let ne=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==ne.palette&&e.setPalette(ne.palette),e.setSize(ne.size),e.group.visible=ne.enabled!==!1,d.dataset.creatureVisible=String(e.group.visible);let W=_.marks.find(ee=>!N.includes(ee));for(let ee of S){ee.group||k(ee);let ye=N.includes(ee.i)?1:0;if(ye&&!ee.grown){if(ee.meadow=iu(_,ee.i),ee.grown=ee.meadow.group,_.marks.includes(ee.i))for(let be of[...ee.grown.children])!be.userData.surface&&be.position.x>0&&be.position.y<-3&&ee.grown.remove(be);ee.grown.position.set(ee.p.x,ee.p.y,0),f.add(ee.grown),ee.grown.traverse(be=>{be.isMesh&&be.userData.surface&&(be.userData.cell=ee.i,g.push(be))}),ee.grown.visible=!1}ye!==ee.target&&(ee.from=ee.progress,ee.target=ye,ee.changedAt=performance.now(),ee.duration=ye?300:180)}for(let ee of m){ee.goal.setState(N.includes(ee.i)?"bloom":ee.i===W?"next":"closed"),ee.goal.setSize(window.SlinkMarkerSize||27);let ye=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};ee.goal.setInsects(ye.enabled),ee.goal.setVisitorSize("bee",ye.bee),ee.goal.setVisitorSize("bumblebee",ye.bumblebee)}if(M){let ee=i.sample(performance.now()/1e3);e.group.position.set(ee.x,ee.y,8.5),e.group.rotation.z=ee.heading,e.update(P,0,{active:!1})}let de=performance.now();return l.shadowMap.needsUpdate=!0,j(),M&&(d.dataset.startup=JSON.stringify({install:Math.round(z-w),terrain:Math.round(q-z),tiles:Math.round(de-q),firstRender:Math.round(performance.now()-de),total:Math.round(performance.now()-w)})),d.hidden=!1,document.getElementById("field").classList.add("has-3d"),!0}catch(w){return console.error("3D renderer:",w),d&&(d.hidden=!0),document.getElementById("field").classList.remove("has-3d"),!1}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
