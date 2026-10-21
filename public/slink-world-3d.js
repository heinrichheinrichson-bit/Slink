(()=>{var Ll=0,Ka=1,Dl=2;var ja=1,io=2,xn=3,Rn=0,Bt=1,Vt=2,Dn=0,ri=1,Qa=2,ec=3,tc=4,Ul=5,Xn=100,Nl=101,Fl=102,Bl=103,Ol=104,zl=200,kl=201,Hl=202,Vl=203,Ir=204,Pr=205,Gl=206,Wl=207,Xl=208,ql=209,Yl=210,Zl=211,Jl=212,$l=213,Kl=214,so=0,ro=1,oo=2,oi=3,ao=4,co=5,lo=6,ho=7,nc=0,jl=1,Ql=2,Un=0,eh=1,th=2,nh=3,uo=4,ih=5,sh=6,rh=7;var ic=300,mi=301,gi=302,fo=303,po=304,Xs=306,Oi=1e3,Wn=1001,Lr=1002,Ht=1003,oh=1004;var qs=1005;var Dt=1006,mo=1007;var $n=1008;var fn=1009,sc=1010,rc=1011,Ki=1012,go=1013,Kn=1014,_n=1015,ji=1016,xo=1017,_o=1018,Qi=1020,oc=35902,ac=35899,cc=1021,lc=1022,nn=1023,zi=1026,es=1027,hc=1028,yo=1029,uc=1030,vo=1031;var Mo=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,bo=35840,So=35841,Eo=35842,wo=35843,To=36196,Ao=37492,Ro=37496,Co=37808,Io=37809,Po=37810,Lo=37811,Do=37812,Uo=37813,No=37814,Fo=37815,Bo=37816,Oo=37817,zo=37818,ko=37819,Ho=37820,Vo=37821,Go=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,Zo=36285,Jo=36286;var gs=2300,Dr=2301,Cr=2302,Ba=2400,Oa=2401,za=2402;var ah=3200,ch=3201;var fc=0,lh=1,Nn="",_t="srgb",ai="srgb-linear",xs="linear",st="srgb";var si=7680;var ka=519,hh=512,uh=513,fh=514,dc=515,dh=516,ph=517,mh=518,gh=519,Ha=35044;var pc="300 es",cn=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=1234567,fs=Math.PI/180,ki=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Ou(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zu(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function ku(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function Hu(i,e=1){return e-Math.abs(mc(i,e*2)-e)}function Vu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xu(i,e){return i+Math.random()*(e-i)}function qu(i){return i*(.5-Math.random())}function Yu(i){i!==void 0&&(tl=i);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zu(i){return i*fs}function Ju(i){return i*ki}function $u(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot={DEG2RAD:fs,RAD2DEG:ki,generateUUID:xi,clamp:Ke,euclideanModulo:mc,mapLinear:Ou,inverseLerp:zu,lerp:ds,damp:ku,pingpong:Hu,smoothstep:Vu,smootherstep:Gu,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Yu,degToRad:Zu,radToDeg:Ju,isPowerOfTwo:$u,ceilPowerOfTwo:Ku,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Qu,normalize:Lt,denormalize:Fi},ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*x,S=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),E=Math.atan2(C,f*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let y=a*S;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new F,nl=new In,Ye=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],S=s[1],_=s[4],y=s[7],C=s[2],E=s[5],P=s[8];return r[0]=o*x+a*S+l*C,r[3]=o*m+a*_+l*E,r[6]=o*f+a*y+l*P,r[1]=c*x+h*S+u*C,r[4]=c*m+h*_+u*E,r[7]=c*f+h*y+u*P,r[2]=d*x+p*S+g*C,r[5]=d*m+p*_+g*E,r[8]=d*f+p*y+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fa=new Ye;function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){let i=ys("canvas");return i.style.display="block",i}var il={};function Hi(i){i in il||(il[i]=!0,console.warn(i))}function _h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:st,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var nt=ef();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Ur=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=ys("canvas")),Ei.width=e.width,Ei.height=e.height;let s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,pa=new F,Ut=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Dt,o=$n,a=nn,l=fn,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=xi(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ic;Ut.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,C=(f+1)/2,E=(h+d)/4,P=(u+x)/4,L=(g+m)/4;return _>y&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=P/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=L/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Nr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ar.subVectors(this.max,os),wi.subVectors(e.a,os),Ti.subVectors(e.b,os),Ai.subVectors(e.c,os),Bn.subVectors(Ti,wi),On.subVectors(Ai,Ti),ei.subVectors(wi,Ai);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!ma(t,wi,Ti,Ai,ar)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,wi,Ti,Ai,ar))?!1:(cr.crossVectors(Bn,On),t=[cr.x,cr.y,cr.z],ma(t,wi,Ti,Ai,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new F,new F,new F,new F,new F,new F,new F,new F],rn=new F,or=new pn,wi=new F,Ti=new F,Ai=new F,Bn=new F,On=new F,ei=new F,os=new F,ar=new F,cr=new F,ti=new F;function ma(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sf=new pn,as=new F,ga=new F,ci=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(ga)),this.expandByPoint(as.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new F,xa=new F,lr=new F,zn=new F,_a=new F,hr=new F,ya=new F,Gi=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xa.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=zn.dot(this.direction),l=-zn.dot(lr),c=zn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xa).addScaledVector(lr,d),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),hr.subVectors(n,e),ya.crossVectors(_a,hr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);let l=a*this.direction.dot(hr.crossVectors(zn,hr));if(l<0)return null;let c=a*this.direction.dot(_a.cross(zn));if(c<0||l+c>o)return null;let h=-a*zn.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,of)}lookAt(e,t,n){let s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),kn.crossVectors(n,Xt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),kn.crossVectors(n,Xt)),kn.normalize(),ur.crossVectors(Xt,kn),s[0]=kn.x,s[4]=ur.x,s[8]=Xt.x,s[1]=kn.y,s[5]=ur.y,s[9]=Xt.y,s[2]=kn.z,s[6]=ur.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],S=n[3],_=n[7],y=n[11],C=n[15],E=s[0],P=s[4],L=s[8],w=s[12],T=s[1],N=s[5],O=s[9],q=s[13],ne=s[2],oe=s[6],re=s[10],he=s[14],W=s[3],ue=s[7],se=s[11],ye=s[15];return r[0]=o*E+a*T+l*ne+c*W,r[4]=o*P+a*N+l*oe+c*ue,r[8]=o*L+a*O+l*re+c*se,r[12]=o*w+a*q+l*he+c*ye,r[1]=h*E+u*T+d*ne+p*W,r[5]=h*P+u*N+d*oe+p*ue,r[9]=h*L+u*O+d*re+p*se,r[13]=h*w+u*q+d*he+p*ye,r[2]=g*E+x*T+m*ne+f*W,r[6]=g*P+x*N+m*oe+f*ue,r[10]=g*L+x*O+m*re+f*se,r[14]=g*w+x*q+m*he+f*ye,r[3]=S*E+_*T+y*ne+C*W,r[7]=S*P+_*N+y*oe+C*ue,r[11]=S*L+_*O+y*re+C*se,r[15]=S*w+_*q+y*he+C*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],S=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,y=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,C=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,E=t*S+n*_+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=S*P,e[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*P,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,e[4]=_*P,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=y*P,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*f-t*u*f)*P,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*P,e[12]=C*P,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,S=l*c,_=l*h,y=l*u,C=n.x,E=n.y,P=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+y)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(d+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+_)*P,s[9]=(m-S)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);let c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===cn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===cn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new F,on=new ft,rf=new F(0,0,0),of=new F(1,1,1),kn=new F,ur=new F,Xt=new F,ol=new ft,al=new In,ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,cl=new F,Ci=new In,Sn=new ft,fr=new F,cs=new F,cf=new F,lf=new In,ll=new F(1,0,0),hl=new F(0,1,0),ul=new F(0,0,1),fl={type:"added"},hf={type:"removed"},Ii={type:"childadded",child:null},va={type:"childremoved",child:null},wt=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ln,n=new In,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ye}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(cs,fr,this.up):Sn.lookAt(fr,cs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new F(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new F,En=new F,Ma=new F,wn=new F,Pi=new F,Li=new F,dl=new F,ba=new F,Sa=new F,Ea=new F,wa=new gt,Ta=new gt,Aa=new gt,Gn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),En.subVectors(n,t),Ma.subVectors(e,t);let o=an.dot(an),a=an.dot(En),l=an.dot(Ma),c=En.dot(En),h=En.dot(Ma),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return wa.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),wa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Aa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),En.subVectors(e,t),an.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Li.subVectors(r,n),ba.subVectors(e,n);let l=Pi.dot(ba),c=Li.dot(ba);if(l<=0&&c<=0)return t.copy(n);Sa.subVectors(e,s);let h=Pi.dot(Sa),u=Li.dot(Sa);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);Ea.subVectors(e,r);let p=Pi.dot(Ea),g=Li.dot(Ea);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Li,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return dl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(dl,a);let f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=mc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return nt.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Rt.copy(this),t);let n=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=_t){nt.workingToColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,s=Rt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(dr);let n=ds(Hn.h,dr.h,t),s=ds(Hn.s,dr.s,t),r=ds(Hn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new He;He.NAMES=yh;var uf=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Pr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new F,pr=new ve,ff=0,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var Ms=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bs=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},df=0,jt=new ft,Ca=new wt,Di=new F,qt=new pn,ls=new pn,Et=new F,lt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?bs:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,ls.min),qt.expandByPoint(Et),Et.addVectors(qt.max,ls.max),qt.expandByPoint(Et)):(qt.expandByPoint(ls.min),qt.expandByPoint(ls.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Et.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(e,c),Et.add(Di)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new F,l[L]=new F;let c=new F,h=new F,u=new F,d=new ve,p=new ve,g=new ve,x=new F,m=new F;function f(L,w,T){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(N),a[L].add(x),a[w].add(x),a[T].add(x),l[L].add(m),l[w].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,w=S.length;L<w;++L){let T=S[L],N=T.start,O=T.count;for(let q=N,ne=N+O;q<ne;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let _=new F,y=new F,C=new F,E=new F;function P(L){C.fromBufferAttribute(s,L),E.copy(C);let w=a[L];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(E,w);let N=y.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,N)}for(let L=0,w=S.length;L<w;++L){let T=S[L],N=T.start,O=T.count;for(let q=N,ne=N+O;q<ne;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pl=new ft,ni=new Gi,mr=new ci,ml=new F,gr=new F,xr=new F,_r=new F,Ia=new F,yr=new F,gl=new F,vr=new F,Oe=class extends wt{constructor(e=new lt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,e),o?yr.addScaledVector(Ia,h):yr.addScaledVector(Ia.sub(t),h))}t.add(yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(mr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(mr,ml)===null||ni.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),ni.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,C=_;y<C;y+=3){let E=a.getX(y),P=a.getX(y+1),L=a.getX(y+2);s=Mr(this,f,e,n,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Mr(this,o,e,n,c,h,u,S,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,C=_;y<C;y+=3){let E=y,P=y+1,L=y+2;s=Mr(this,f,e,n,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=m,_=m+1,y=m+2;s=Mr(this,o,e,n,c,h,u,S,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pf(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Rn,a),l===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function Mr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,xr),i.getVertexPosition(c,_r);let h=pf(i,e,t,n,gr,xr,_r,gl);if(h){let u=new F;Gn.getBarycoord(gl,gr,xr,_r,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,l,c,u,new ve)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,l,c,u,new ve)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Gn.getNormal(gr,xr,_r,d.normal),h.face=d,h.barycoord=u}return h}var qn=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(x,m,f,S,_,y,C,E,P,L,w){let T=y/P,N=C/L,O=y/2,q=C/2,ne=E/2,oe=P+1,re=L+1,he=0,W=0,ue=new F;for(let se=0;se<re;se++){let ye=se*N-q;for(let Re=0;Re<oe;Re++){let Le=Re*T-O;ue[x]=Le*S,ue[m]=ye*_,ue[f]=ne,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[f]=E>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Re/P),u.push(1-se/L),he+=1}}for(let se=0;se<L;se++)for(let ye=0;ye<P;ye++){let Re=d+ye+oe*se,Le=d+ye+oe*(se+1),J=d+(ye+1)+oe*(se+1),H=d+(ye+1)+oe*se;l.push(Re,Le,H),l.push(Le,J,H),W+=6}a.addGroup(p,W,w),p+=W,d+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=_i(i[t]);for(let s in n)e[s]=n[s]}return e}function mf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var vh={clone:_i,merge:It},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ss=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new F,xl=new ve,_l=new ve,kt=class extends Ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,_l),t.subVectors(_l,xl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ni=1,Br=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);let l=new kt(Ui,Ni,e,t);l.layers=this.layers,this.add(l);let c=new kt(Ui,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Ut{constructor(e=[],t=mi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Dt),new Br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ve=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yn=class extends Ut{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ht,h=Ht,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=new F,yf=new F,vf=new Ye,Qt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pa.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new ci,Mf=new ve(.5,.5),br=new F,qi=class{constructor(e=new Qt,t=new Qt,n=new Qt,s=new Qt,r=new Qt,o=new Qt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],S=r[12],_=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-o,p-h,f-g,C-S).normalize(),s[1].setComponents(c+o,p+h,f+g,C+S).normalize(),s[2].setComponents(c+a,p+u,f+x,C+_).normalize(),s[3].setComponents(c-a,p-u,f-x,C-_).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,C-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,C-y).normalize(),t===cn)s[5].setComponents(c+l,p+d,f+m,C+y).normalize();else if(t===_s)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=Mf.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zr=new F,kr=new F,yl=new ft,hs=new Gi,Sr=new ci,La=new F,vl=new F,Hr=class extends wt{constructor(e=new lt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zr.fromBufferAttribute(t,s-1),kr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zr.distanceTo(kr);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;yl.copy(s).invert(),hs.copy(e.ray).applyMatrix4(yl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),S=h.getX(x+1),_=Er(this,e,hs,l,f,S,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=Er(this,e,hs,l,x,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=Er(this,e,hs,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){let x=Er(this,e,hs,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Er(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(zr.fromBufferAttribute(a,s),kr.fromBufferAttribute(a,r),t.distanceSqToSegment(zr,kr,La,vl)>n)return;La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:vl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ml=new F,bl=new F,Ts=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ml.fromBufferAttribute(t,s),bl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ml.distanceTo(bl);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mn=class extends Ut{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Ut{constructor(e,t,n=Kn,s,r,o,a=Ht,l=Ht,c,h=zi,u=1){if(h!==zi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var tn=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function S(){let y=new F,C=new F,E=0,P=(t-e)/n;for(let L=0;L<=r;L++){let w=[],T=L/r,N=T*(t-e)+e;for(let O=0;O<=s;O++){let q=O/s,ne=q*l+a,oe=Math.sin(ne),re=Math.cos(ne);C.x=N*oe,C.y=-T*n+m,C.z=N*re,u.push(C.x,C.y,C.z),y.set(oe,P,re).normalize(),d.push(y.x,y.y,y.z),p.push(q,1-T),w.push(g++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let T=x[w][L],N=x[w+1][L],O=x[w+1][L+1],q=x[w][L+1];(e>0||w!==0)&&(h.push(T,N,q),E+=3),(t>0||w!==r-1)&&(h.push(N,O,q),E+=3)}c.addGroup(f,E,0),f+=E}function _(y){let C=g,E=new ve,P=new F,L=0,w=y===!0?e:t,T=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let ne=O/s*l+a,oe=Math.cos(ne),re=Math.sin(ne);P.x=w*re,P.y=m*T,P.z=w*oe,u.push(P.x,P.y,P.z),d.push(0,T,0),E.x=oe*.5+.5,E.y=re*.5*T+.5,p.push(E.x,E.y),g++}for(let O=0;O<s;O++){let q=C+O,ne=N+O;y===!0?h.push(ne,ne+1,q):h.push(ne+1,ne,q),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class i extends tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Yt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vr=class extends Zi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wr=new F,Da=new _c,Ua=new _c,Na=new _c,Nt=class extends Yt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),c=wr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Da.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ua.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Na.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Da.calc(l),Ua.calc(l),Na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sl(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function bf(i,e){let t=1-i;return t*t*e}function Sf(i,e){return 2*(1-i)*i*e}function Ef(i,e){return i*i*e}function ps(i,e,t,n){return bf(i,e)+Sf(i,t)+Ef(i,n)}function wf(i,e){let t=1-i;return t*t*t*e}function Tf(i,e){let t=1-i;return 3*t*t*i*e}function Af(i,e){return 3*(1-i)*i*i*e}function Rf(i,e){return i*i*i*e}function ms(i,e,t,n,s){return wf(i,e)+Tf(i,t)+Af(i,n)+Rf(i,s)}var Is=class extends Yt{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ln=class extends Yt{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Yt{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Yt{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Yt{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Yt{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Sl(a,l.x,c.x,h.x,u.x),Sl(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Wr=Object.freeze({__proto__:null,ArcCurve:Vr,CatmullRomCurve3:Nt,CubicBezierCurve:Is,CubicBezierCurve3:Ln,EllipseCurve:Zi,LineCurve:Ps,LineCurve3:Gr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Ds,SplineCurve:Us}),Xr=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wr[s.type]().fromJSON(s))}return this}},gn=class extends Xr{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Is(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Zi(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vt=class extends gn{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gn().fromJSON(s))}return this}};function Cf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Uf(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ns(r,o,t,a,l,c,0),o}function Mh(i,e,t,n,s){let r;if(s===Xf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=El(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=El(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Bs(r),r=r.next),r}function hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||mt(t.prev,t,t.next)===0)){if(Bs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,r,o){if(!i)return;!o&&r&&zf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Pf(i,n,s,r):If(i)){e.push(l.i,i.i,c.i),Bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Lf(hi(i),e),Ns(i,e,t,n,s,r,2)):o===2&&Df(i,e,t,n,s,r):Ns(hi(i),e,t,n,s,r,1);break}}}function If(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&us(s,a,r,l,o,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),f=Va(p,g,e,t,n),S=Va(x,m,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,l,u,c,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,l,u,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,l,u,c,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,l,u,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&Sh(n,t,t.next,s)&&Fs(n,s)&&Fs(s,n)&&(e.push(n.i,t.i,s.i),Bs(t),Bs(t.next),t=i=s),t=t.next}while(t!==i);return hi(t)}function Df(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vf(o,a)){let l=Eh(o,a);o=hi(o,o.next),l=hi(l,l.next),Ns(o,e,t,n,s,r,0),Ns(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Uf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Mh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hf(c))}s.sort(Nf);for(let r=0;r<s.length;r++)t=Ff(s[r],t);return t}function Nf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ff(i,e){let t=Bf(i,e);if(!t)return e;let n=Eh(t,i);return hi(n,n.next),hi(t,t.next)}function Bf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Fs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Of(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Of(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function zf(i,e,t,n){let s=i;do s.z===0&&(s.z=Va(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kf(s)}function kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Va(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&bh(i,e,t,n,s,r,o,a)}function Vf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gf(i,e)&&(Fs(i,e)&&Fs(e,i)&&Wf(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Ji(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function Sh(i,e,t,n){let s=Ar(mt(i,e,t)),r=Ar(mt(i,e,n)),o=Ar(mt(t,n,i)),a=Ar(mt(t,n,e));return!!(s!==r&&o!==a||s===0&&Tr(i,t,e)||r===0&&Tr(i,n,e)||o===0&&Tr(t,i,n)||a===0&&Tr(t,e,n))}function Tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ar(i){return i>0?1:i<0?-1:0}function Gf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fs(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Wf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Eh(i,e){let t=Ga(i.i,i.x,i.y),n=Ga(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function El(i,e,t,n){let s=Ga(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wa=class{static triangulate(e,t,n=2){return Cf(e,t,n)}},Ct=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wl(e),Tl(n,e);let o=e.length;t.forEach(wl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Tl(n,t[l]);let a=Wa.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zt=class i extends lt{constructor(e=new vt([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:qf,_,y=!1,C,E,P,L;f&&(_=f.getSpacedPoints(h),y=!0,d=!1,C=f.computeFrenetFrames(h,!1),E=new F,P=new F,L=new F),d||(m=0,p=0,g=0,x=0);let w=a.extractPoints(c),T=w.shape,N=w.holes;if(!Ct.isClockWise(T)){T=T.reverse();for(let X=0,Z=N.length;X<Z;X++){let z=N[X];Ct.isClockWise(z)&&(N[X]=z.reverse())}}function q(X){let z=10000000000000001e-36,k=X[0];for(let b=1;b<=X.length;b++){let M=b%X.length,B=X[M],ce=B.x-k.x,j=B.y-k.y,R=ce*ce+j*j,v=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(k.x),Math.abs(k.y)),V=z*v*v;if(R<=V){X.splice(M,1),b--;continue}k=B}}q(T),N.forEach(q);let ne=N.length,oe=T;for(let X=0;X<ne;X++){let Z=N[X];T=T.concat(Z)}function re(X,Z,z){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Z,z)}let he=T.length;function W(X,Z,z){let k,b,M,B=X.x-Z.x,ce=X.y-Z.y,j=z.x-X.x,R=z.y-X.y,v=B*B+ce*ce,V=B*R-ce*j;if(Math.abs(V)>Number.EPSILON){let Y=Math.sqrt(v),Q=Math.sqrt(j*j+R*R),ee=Z.x-ce/Y,ie=Z.y+B/Y,fe=z.x-R/Q,be=z.y+j/Q,_e=((fe-ee)*R-(be-ie)*j)/(B*R-ce*j);k=ee+B*_e-X.x,b=ie+ce*_e-X.y;let pe=k*k+b*b;if(pe<=2)return new ve(k,b);M=Math.sqrt(pe/2)}else{let Y=!1;B>Number.EPSILON?j>Number.EPSILON&&(Y=!0):B<-Number.EPSILON?j<-Number.EPSILON&&(Y=!0):Math.sign(ce)===Math.sign(R)&&(Y=!0),Y?(k=-ce,b=B,M=Math.sqrt(v)):(k=B,b=ce,M=Math.sqrt(v/2))}return new ve(k/M,b/M)}let ue=[];for(let X=0,Z=oe.length,z=Z-1,k=X+1;X<Z;X++,z++,k++)z===Z&&(z=0),k===Z&&(k=0),ue[X]=W(oe[X],oe[z],oe[k]);let se=[],ye,Re=ue.concat();for(let X=0,Z=ne;X<Z;X++){let z=N[X];ye=[];for(let k=0,b=z.length,M=b-1,B=k+1;k<b;k++,M++,B++)M===b&&(M=0),B===b&&(B=0),ye[k]=W(z[k],z[M],z[B]);se.push(ye),Re=Re.concat(ye)}let Le;if(m===0)Le=Ct.triangulateShape(oe,N);else{let X=[],Z=[];for(let z=0;z<m;z++){let k=z/m,b=p*Math.cos(k*Math.PI/2),M=g*Math.sin(k*Math.PI/2)+x;for(let B=0,ce=oe.length;B<ce;B++){let j=re(oe[B],ue[B],M);$(j.x,j.y,-b),k===0&&X.push(j)}for(let B=0,ce=ne;B<ce;B++){let j=N[B];ye=se[B];let R=[];for(let v=0,V=j.length;v<V;v++){let Y=re(j[v],ye[v],M);$(Y.x,Y.y,-b),k===0&&R.push(Y)}k===0&&Z.push(R)}}Le=Ct.triangulateShape(X,Z)}let J=Le.length,H=g+x;for(let X=0;X<he;X++){let Z=d?re(T[X],Re[X],H):T[X];y?(P.copy(C.normals[0]).multiplyScalar(Z.x),E.copy(C.binormals[0]).multiplyScalar(Z.y),L.copy(_[0]).add(P).add(E),$(L.x,L.y,L.z)):$(Z.x,Z.y,0)}for(let X=1;X<=h;X++)for(let Z=0;Z<he;Z++){let z=d?re(T[Z],Re[Z],H):T[Z];y?(P.copy(C.normals[X]).multiplyScalar(z.x),E.copy(C.binormals[X]).multiplyScalar(z.y),L.copy(_[X]).add(P).add(E),$(L.x,L.y,L.z)):$(z.x,z.y,u/h*X)}for(let X=m-1;X>=0;X--){let Z=X/m,z=p*Math.cos(Z*Math.PI/2),k=g*Math.sin(Z*Math.PI/2)+x;for(let b=0,M=oe.length;b<M;b++){let B=re(oe[b],ue[b],k);$(B.x,B.y,u+z)}for(let b=0,M=N.length;b<M;b++){let B=N[b];ye=se[b];for(let ce=0,j=B.length;ce<j;ce++){let R=re(B[ce],ye[ce],k);y?$(R.x,R.y+_[h-1].y,_[h-1].x+z):$(R.x,R.y,u+z)}}}I(),A();function I(){let X=s.length/3;if(d){let Z=0,z=he*Z;for(let k=0;k<J;k++){let b=Le[k];G(b[2]+z,b[1]+z,b[0]+z)}Z=h+m*2,z=he*Z;for(let k=0;k<J;k++){let b=Le[k];G(b[0]+z,b[1]+z,b[2]+z)}}else{for(let Z=0;Z<J;Z++){let z=Le[Z];G(z[2],z[1],z[0])}for(let Z=0;Z<J;Z++){let z=Le[Z];G(z[0]+he*h,z[1]+he*h,z[2]+he*h)}}n.addGroup(X,s.length/3-X,0)}function A(){let X=s.length/3,Z=0;te(oe,Z),Z+=oe.length;for(let z=0,k=N.length;z<k;z++){let b=N[z];te(b,Z),Z+=b.length}n.addGroup(X,s.length/3-X,1)}function te(X,Z){let z=X.length;for(;--z>=0;){let k=z,b=z-1;b<0&&(b=X.length-1);for(let M=0,B=h+m*2;M<B;M++){let ce=he*M,j=he*(M+1),R=Z+k+ce,v=Z+b+ce,V=Z+b+j,Y=Z+k+j;de(R,v,V,Y)}}}function $(X,Z,z){l.push(X),l.push(Z),l.push(z)}function G(X,Z,z){xe(X),xe(Z),xe(z);let k=s.length/3,b=S.generateTopUV(n,s,k-3,k-2,k-1);D(b[0]),D(b[1]),D(b[2])}function de(X,Z,z,k){xe(X),xe(Z),xe(k),xe(Z),xe(z),xe(k);let b=s.length/3,M=S.generateSideWallUV(n,s,b-6,b-3,b-2,b-1);D(M[0]),D(M[1]),D(M[3]),D(M[1]),D(M[2]),D(M[3])}function xe(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function D(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wr[s.type]().fromJSON(s)),new i(n,e.options)}},qf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,o),new ve(a,l),new ve(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-u),new ve(d,1-g),new ve(x,1-f)]:[new ve(a,1-l),new ve(h,1-u),new ve(p,1-g),new ve(m,1-f)]}};function Yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let S=f*d-o;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-S,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let _=S+c*f,y=S+c*(f+1),C=S+1+c*(f+1),E=S+1+c*f;p.push(_,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Os=class i extends lt{constructor(e=new vt([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Ct.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let S=g[m];Ct.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Ct.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let S=g[m];p=p.concat(S)}for(let m=0,f=p.length;m<f;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,f=x.length;m<f;m++){let S=x[m],_=S[0]+u,y=S[1]+u,C=S[2]+u;n.push(_,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Zf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Zf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ct=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let S=[],_=f/n,y=0;f===0&&o===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+y,1-_),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let _=h[f][S+1],y=h[f][S],C=h[f+1][S],E=h[f+1][S+1];(f!==0||o>0)&&p.push(_,y,E),(f!==n-1||l<Math.PI)&&p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ft=class i extends lt{constructor(e=new Ds(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new ve,h=new F,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),S(),f()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],C=o.binormals[_];for(let E=0;E<=s;E++){let P=E/s*Math.PI*2,L=Math.sin(P),w=-Math.cos(P);l.x=w*y.x+L*C.x,l.y=w*y.y+L*C.y,l.z=w*y.z+L*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let C=(s+1)*(_-1)+(y-1),E=(s+1)*_+(y-1),P=(s+1)*_+y,L=(s+1)*(_-1)+y;g.push(C,E,L),g.push(E,P,L)}}function S(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var je=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zr=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ba,endingEnd:Ba}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oa:r=e,a=2*t-n;break;case za:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oa:o=e,l=2*n-t;break;case za:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+S*o[c+C]+_*o[l+C]+y*o[u+C];return r}},Jr=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},$r=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Dr;var Zn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var jr=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},zs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="vector";var Xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},to=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wh=new to,di=class{constructor(e){this.manager=e!==void 0?e:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},qa=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xa.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(f){S();function S(){u.read().then(({done:_,value:y})=>{if(_)f.close();else{x+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,P=h.length;E<P;E++){let L=h[E];L.onProgress&&L.onProgress(C)}f.enqueue(y),S()}},_=>{f.error(_)})}}});return new Response(m)}else throw new qa(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Xa.add(`file:${e}`,c);let h=Tn[e];delete Tn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fa=new ft,Al=new F,Rl=new F,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pi=class extends Ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=class extends Ya{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Za}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var no=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yc="\\[\\]\\.:\\/",$f=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",Kf="[^"+yc.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",vc),Qf=/(WCOD+)?/.source.replace("WCOD",Kf),ed=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),nd=new RegExp("^"+jf+Qf+ed+td+"$"),id=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=nd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);id.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ja;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tx=new Float32Array(1);var Cl=new ft,Gs=class{constructor(e,t,n=0,s=1/0){this.ray=new Gi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,t=!0,n=[]){return $a(e,this,n,t),n.sort(Il),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$a(e[s],this,n,t);return n.sort(Il),n}};function Il(i,e){return i.distance-e.distance}function $a(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$a(r[o],e,t,!0)}}var Pl=new ve,Ws=class{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var un=class{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new gn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){let S=[];for(let _=0,y=f.length;_<y;_++){let C=f[_],E=new vt;E.curves=C.curves,S.push(E)}return S}function n(f,S){let _=S.length,y=!1;for(let C=_-1,E=0;E<_;C=E++){let P=S[C],L=S[E],w=L.x-P.x,T=L.y-P.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(P=S[E],w=-w,L=S[C],T=-T),f.y<P.y||f.y>L.y)continue;if(f.y===P.y){if(f.x===P.x)return!0}else{let N=T*(f.x-P.x)-w*(f.y-P.y);if(N===0)return!0;if(N<0)continue;y=!y}}else{if(f.y!==P.y)continue;if(L.x<=f.x&&f.x<=P.x||P.x<=f.x&&f.x<=L.x)return!0}}return y}let s=Ct.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new vt,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let u=[],d=[],p=[],g=0,x;d[g]=void 0,p[g]=[];for(let f=0,S=r.length;f<S;f++)a=r[f],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new vt,p:x},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,S=0;for(let _=0,y=d.length;_<y;_++)u[_]=[];for(let _=0,y=d.length;_<y;_++){let C=p[_];for(let E=0;E<C.length;E++){let P=C[E],L=!0;for(let w=0;w<d.length;w++)n(P.p,d[w].p)&&(_!==w&&S++,L?(L=!1,u[w].push(P)):f=!0);L&&u[_].push(P)}}S>0&&f===!1&&(p=u)}let m;for(let f=0,S=d.length;f<S;f++){l=d[f].s,c.push(l),m=p[f];for(let _=0,y=m.length;_<y;_++)l.holes.push(m[_].h)}return c}};function Mc(i,e,t,n){let s=sd(n);switch(t){case cc:return i*e;case hc:return i*e/s.components*s.byteLength;case yo:return i*e/s.components*s.byteLength;case uc:return i*e*2/s.components*s.byteLength;case vo:return i*e*2/s.components*s.byteLength;case lc:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Mo:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case wo:return Math.max(i,16)*Math.max(e,8)/4;case bo:case Eo:return Math.max(i,8)*Math.max(e,8)/2;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sd(i){switch(i){case fn:case sc:return{byteLength:1,components:1};case Ki:case rc:case ji:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case Kn:case go:case _n:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dd=`#ifdef USE_ALPHAHASH
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
}`,$e={alphahash_fragment:dd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:yd,aomap_pars_fragment:vd,batching_pars_vertex:Md,batching_vertex:bd,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Ud,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:Od,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:rp,envmap_vertex:Jd,fog_vertex:$d,fog_pars_vertex:Kd,fog_fragment:jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:fp,lights_fragment_maps:dp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:wp,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Ip,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Kp,skinbase_vertex:jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:cm,uv_pars_vertex:lm,uv_vertex:hm,worldpos_vertex:um,background_vert:fm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:_m,depth_frag:ym,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:bm,equirect_frag:Sm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Im,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Fm,meshphysical_frag:Bm,meshtoon_vert:Om,meshtoon_frag:zm,points_vert:km,points_frag:Hm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},De={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},yn={basic:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:It([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:It([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:It([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:It([De.points,De.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:It([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:It([De.common,De.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:It([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:It([De.sprite,De.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:It([De.common,De.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:It([De.lights,De.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yn.physical={uniforms:It([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var $o={r:0,b:0,g:0},yi=new ln,qm=new ft;function Ym(i,e,t,n,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,C=g(_);C===null?f(a,l):C&&C.isColor&&(f(C,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let C=g(y);C&&(C.isCubeTexture||C.mapping===Xs)?(h===void 0&&(h=new Oe(new qn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:_i(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(y.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(yi)),h.material.toneMapped=nt.getTransfer(C.colorSpace)!==st,(u!==C||d!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Oe(new ui(2,2),new hn({name:"BackgroundMaterial",uniforms:_i(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB($o,xc(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,y,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m,dispose:S}}function Zm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(T,N,O,q,ne){let oe=!1,re=u(q,O,N);r!==re&&(r=re,c(r.object)),oe=p(T,q,O,ne),oe&&g(T,q,O,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,y(T,N,O,q),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,N,O){let q=O.wireframe===!0,ne=n[T.id];ne===void 0&&(ne={},n[T.id]=ne);let oe=ne[N.id];oe===void 0&&(oe={},ne[N.id]=oe);let re=oe[q];return re===void 0&&(re=d(l()),oe[q]=re),re}function d(T){let N=[],O=[],q=[];for(let ne=0;ne<t;ne++)N[ne]=0,O[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:q,object:T,attributes:{},index:null}}function p(T,N,O,q){let ne=r.attributes,oe=N.attributes,re=0,he=O.getAttributes();for(let W in he)if(he[W].location>=0){let se=ne[W],ye=oe[W];if(ye===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ye=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ye=T.instanceColor)),se===void 0||se.attribute!==ye||ye&&se.data!==ye.data)return!0;re++}return r.attributesNum!==re||r.index!==q}function g(T,N,O,q){let ne={},oe=N.attributes,re=0,he=O.getAttributes();for(let W in he)if(he[W].location>=0){let se=oe[W];se===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));let ye={};ye.attribute=se,se&&se.data&&(ye.data=se.data),ne[W]=ye,re++}r.attributes=ne,r.attributesNum=re,r.index=q}function x(){let T=r.newAttributes;for(let N=0,O=T.length;N<O;N++)T[N]=0}function m(T){f(T,0)}function f(T,N){let O=r.newAttributes,q=r.enabledAttributes,ne=r.attributeDivisors;O[T]=1,q[T]===0&&(i.enableVertexAttribArray(T),q[T]=1),ne[T]!==N&&(i.vertexAttribDivisor(T,N),ne[T]=N)}function S(){let T=r.newAttributes,N=r.enabledAttributes;for(let O=0,q=N.length;O<q;O++)N[O]!==T[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function _(T,N,O,q,ne,oe,re){re===!0?i.vertexAttribIPointer(T,N,O,ne,oe):i.vertexAttribPointer(T,N,O,q,ne,oe)}function y(T,N,O,q){x();let ne=q.attributes,oe=O.getAttributes(),re=N.defaultAttributeValues;for(let he in oe){let W=oe[he];if(W.location>=0){let ue=ne[he];if(ue===void 0&&(he==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),he==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){let se=ue.normalized,ye=ue.itemSize,Re=e.get(ue);if(Re===void 0)continue;let Le=Re.buffer,J=Re.type,H=Re.bytesPerElement,I=J===i.INT||J===i.UNSIGNED_INT||ue.gpuType===go;if(ue.isInterleavedBufferAttribute){let A=ue.data,te=A.stride,$=ue.offset;if(A.isInstancedInterleavedBuffer){for(let G=0;G<W.locationSize;G++)f(W.location+G,A.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let G=0;G<W.locationSize;G++)m(W.location+G);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let G=0;G<W.locationSize;G++)_(W.location+G,ye/W.locationSize,J,se,te*H,($+ye/W.locationSize*G)*H,I)}else{if(ue.isInstancedBufferAttribute){for(let A=0;A<W.locationSize;A++)f(W.location+A,ue.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let A=0;A<W.locationSize;A++)m(W.location+A);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let A=0;A<W.locationSize;A++)_(W.location+A,ye/W.locationSize,J,se,ye*H,ye/W.locationSize*A*H,I)}}else if(re!==void 0){let se=re[he];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(W.location,se);break;case 3:i.vertexAttrib3fv(W.location,se);break;case 4:i.vertexAttrib4fv(W.location,se);break;default:i.vertexAttrib1fv(W.location,se)}}}}S()}function C(){L();for(let T in n){let N=n[T];for(let O in N){let q=N[O];for(let ne in q)h(q[ne].object),delete q[ne];delete N[O]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;let N=n[T.id];for(let O in N){let q=N[O];for(let ne in q)h(q[ne].object),delete q[ne];delete N[O]}delete n[T.id]}function P(T){for(let N in n){let O=n[N];if(O[T.id]===void 0)continue;let q=O[T.id];for(let ne in q)h(q[ne].object),delete q[ne];delete O[T.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Jm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $m(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_n&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function Km(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qt,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,_=S*4,y=f.clippingState||null;l.value=y,y=h(g,d,_,p);for(let C=0;C!==_;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jm(i){let e=new WeakMap;function t(o,a){return a===fo?o.mapping=mi:a===po&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fo||a===po)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Or(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,Th=[.125,.215,.35,.446,.526,.582],bi=20,bc=new pi,Ah=new He,Sc=null,Ec=0,wc=0,Tc=!1,Mi=(1+Math.sqrt(5))/2,ts=1/Mi,Rh=[new F(-Mi,ts,0),new F(Mi,ts,0),new F(-ts,0,Mi),new F(ts,0,Mi),new F(0,Mi,-ts),new F(0,Mi,ts),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Qm=new F,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qm}=r;Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Ec,wc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ji,format:nn,colorSpace:ai,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ah),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new li({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new Oe(new qn,x),f=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,f=!0):(x.color.copy(Ah),f=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let C=this._cubeSize;Ko(s,y*C,_>2?C:0,C,C),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Oe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let f=[],S=0;for(let P=0;P<bi;++P){let L=P/x,w=Math.exp(-L*L/2);f.push(w),P===0?S+=w:P<m&&(S+=2*w)}for(let P=0;P<f.length;P++)f[P]=f[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],C=3*y*(s>_-ns?s-_+ns:0),E=4*(this._cubeSize-y);Ko(t,C,E,3*y,2*y),l.setRenderTarget(t),l.render(u,bc)}};function eg(i){let e=[],t=[],n=[],s=i,r=i-ns+1+Th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ns?l=Th[o-i+ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,S=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let E=0;E<p;E++){let P=E%3*2/3-1,L=E>2?0:-1,w=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];S.set(w,x*g*E),_.set(d,m*g*E);let T=[E,E,E,E,E,E];y.set(T,f*g*E)}let C=new lt;C.setAttribute("position",new yt(S,x)),C.setAttribute("uv",new yt(_,m)),C.setAttribute("faceIndex",new yt(y,f)),e.push(C),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ch(i,e,t){let n=new en(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tg(i,e,t){let n=new Float32Array(bi),s=new F(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
	`}function ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===fo||l===po,h=l===mi||l===gi;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qo(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Qo(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ig(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sg(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let _=0,y=S.length;_<y;_+=3){let C=S[_+0],E=S[_+1],P=S[_+2];d.push(C,E,E,P,P,C)}}else if(g!==void 0){let S=g.array;x=g.version;for(let _=0,y=S.length/3-1;_<y;_+=3){let C=_+0,E=_+1,P=_+2;d.push(C,E,E,P,P,C)}}else return;let m=new(gc(d)?bs:Ms)(d,1);m.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*x[S];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*C*4*u),P=new vs(E,y,C,u);P.type=_n,P.needsUpdate=!0;let L=_*4;for(let T=0;T<u;T++){let N=m[T],O=f[T],q=S[T],ne=y*C*4*T;for(let oe=0;oe<N.count;oe++){let re=oe*L;p===!0&&(s.fromBufferAttribute(N,oe),E[ne+re+0]=s.x,E[ne+re+1]=s.y,E[ne+re+2]=s.z,E[ne+re+3]=0),g===!0&&(s.fromBufferAttribute(O,oe),E[ne+re+4]=s.x,E[ne+re+5]=s.y,E[ne+re+6]=s.z,E[ne+re+7]=0),x===!0&&(s.fromBufferAttribute(q,oe),E[ne+re+8]=s.x,E[ne+re+9]=s.y,E[ne+re+10]=s.z,E[ne+re+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ve(y,C)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $h=new Ut,Lh=new As(1,1),Kh=new vs,jh=new Fr,Qh=new Es,Dh=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),St(t,n)}}function pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),St(t,n)}}function mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),St(t,n)}}function gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=dc,r=Lh):r=$h,t.setTexture2D(e||r,s)}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function Tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qh,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kh,s)}function Rg(i){switch(i){case 5126:return lg;case 35664:return hg;case 35665:return ug;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Pg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Lg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Dg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ng(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fg(i,e){i.uniform1iv(this.addr,e)}function Bg(i,e){i.uniform2iv(this.addr,e)}function Og(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function kg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Gg(i,e){i.uniform4uiv(this.addr,e)}function Wg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$h,r[o])}function Xg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jh,r[o])}function qg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qh,r[o])}function Yg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kh,r[o])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return Og;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function Jg(i,e,t){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),o=Ac.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oh(t,c===void 0?new Rc(a,i,e):new Cc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ic(a),Oh(t,u)),t=u}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function zh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $g=37297,Kg=0;function jg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kh=new Ye;function Qg(i){nt._getMatrix(kh,nt.workingColorSpace,i);let e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(e),a)}else return r}function e0(i,e){let t=Qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t0(i,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case nh:t="Cineon";break;case uo:t="ACESFilmic";break;case sh:t="AgX";break;case rh:t="Neutral";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new F;function n0(){nt.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),e}function u0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function m0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u0(t),c=f0(t),h=d0(t),u=p0(t),d=m0(t),p=i0(t),g=s0(r),x=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),f.length>0&&(f+=`
`)):(m=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),f=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Pc(o),o=Vh(o,t),o=Gh(o,t),a=Pc(a),a=Vh(a,t),a=Gh(a,t),o=Wh(o),a=Wh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=S+m+o,y=S+f+a,C=zh(s,s.VERTEX_SHADER,_),E=zh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(C)||"",ne=s.getShaderInfoLog(E)||"",oe=O.trim(),re=q.trim(),he=ne.trim(),W=!0,ue=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,E);else{let se=Hh(s,C,"vertex"),ye=Hh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+oe+`
`+se+`
`+ye)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(re===""||he==="")&&(ue=!1);ue&&(N.diagnostics={runnable:W,programLog:oe,vertexShader:{log:re,prefix:m},fragmentShader:{log:he,prefix:f}})}s.deleteShader(C),s.deleteShader(E),L=new is(s,x),w=r0(s,x)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,$g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var x0=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}};function _0(i,e,t,n,s,r,o){let a=new Wi,l=new Lc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,N,O,q){let ne=O.fog,oe=q.geometry,re=w.isMeshStandardMaterial?O.environment:null,he=(w.isMeshStandardMaterial?t:e).get(w.envMap||re),W=he&&he.mapping===Xs?he.image.height:null,ue=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ye=se!==void 0?se.length:0,Re=0;oe.morphAttributes.position!==void 0&&(Re=1),oe.morphAttributes.normal!==void 0&&(Re=2),oe.morphAttributes.color!==void 0&&(Re=3);let Le,J,H,I;if(ue){let Qe=yn[ue];Le=Qe.vertexShader,J=Qe.fragmentShader}else Le=w.vertexShader,J=w.fragmentShader,l.update(w),H=l.getVertexShaderID(w),I=l.getFragmentShaderID(w);let A=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),$=q.isInstancedMesh===!0,G=q.isBatchedMesh===!0,de=!!w.map,xe=!!w.matcap,D=!!he,X=!!w.aoMap,Z=!!w.lightMap,z=!!w.bumpMap,k=!!w.normalMap,b=!!w.displacementMap,M=!!w.emissiveMap,B=!!w.metalnessMap,ce=!!w.roughnessMap,j=w.anisotropy>0,R=w.clearcoat>0,v=w.dispersion>0,V=w.iridescence>0,Y=w.sheen>0,Q=w.transmission>0,ee=j&&!!w.anisotropyMap,ie=R&&!!w.clearcoatMap,fe=R&&!!w.clearcoatNormalMap,be=R&&!!w.clearcoatRoughnessMap,_e=V&&!!w.iridescenceMap,pe=V&&!!w.iridescenceThicknessMap,Me=Y&&!!w.sheenColorMap,we=Y&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Te=!!w.specularColorMap,ze=!!w.specularIntensityMap,K=Q&&!!w.transmissionMap,Ee=Q&&!!w.thicknessMap,Pe=!!w.gradientMap,Ne=!!w.alphaMap,Ae=w.alphaTest>0,Se=!!w.alphaHash,Fe=!!w.extensions,Xe=Un;w.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let tt={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Le,fragmentShader:J,defines:w.defines,customVertexShaderID:H,customFragmentShaderID:I,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:G,batchingColor:G&&q._colorsTexture!==null,instancing:$,instancingColor:$&&q.instanceColor!==null,instancingMorph:$&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:xe,envMap:D,envMapMode:D&&he.mapping,envMapCubeUVHeight:W,aoMap:X,lightMap:Z,bumpMap:z,normalMap:k,displacementMap:d&&b,emissiveMap:M,normalMapObjectSpace:k&&w.normalMapType===lh,normalMapTangentSpace:k&&w.normalMapType===fc,metalnessMap:B,roughnessMap:ce,anisotropy:j,anisotropyMap:ee,clearcoat:R,clearcoatMap:ie,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,dispersion:v,iridescence:V,iridescenceMap:_e,iridescenceThicknessMap:pe,sheen:Y,sheenColorMap:Me,sheenRoughnessMap:we,specularMap:Ie,specularColorMap:Te,specularIntensityMap:ze,transmission:Q,transmissionMap:K,thicknessMap:Ee,gradientMap:Pe,opaque:w.transparent===!1&&w.blending===ri&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ae,alphaHash:Se,combine:w.combine,mapUv:de&&x(w.map.channel),aoMapUv:X&&x(w.aoMap.channel),lightMapUv:Z&&x(w.lightMap.channel),bumpMapUv:z&&x(w.bumpMap.channel),normalMapUv:k&&x(w.normalMap.channel),displacementMapUv:b&&x(w.displacementMap.channel),emissiveMapUv:M&&x(w.emissiveMap.channel),metalnessMapUv:B&&x(w.metalnessMap.channel),roughnessMapUv:ce&&x(w.roughnessMap.channel),anisotropyMapUv:ee&&x(w.anisotropyMap.channel),clearcoatMapUv:ie&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(w.sheenRoughnessMap.channel),specularMapUv:Ie&&x(w.specularMap.channel),specularColorMapUv:Te&&x(w.specularColorMap.channel),specularIntensityMapUv:ze&&x(w.specularIntensityMap.channel),transmissionMapUv:K&&x(w.transmissionMap.channel),thicknessMapUv:Ee&&x(w.thicknessMap.channel),alphaMapUv:Ne&&x(w.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(k||j),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!oe.attributes.uv&&(de||Ne),fog:!!ne,useFog:w.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:te,skinning:q.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:M&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vt,flipSided:w.side===Bt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function f(w){let T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)T.push(N),T.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(S(T,w),_(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function S(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let T=g[w.type],N;if(T){let O=yn[T];N=vh.clone(O.uniforms)}else N=w.uniforms;return N}function C(w,T){let N;for(let O=0,q=h.length;O<q;O++){let ne=h[O];if(ne.cacheKey===T){N=ne,++N.usedTimes;break}}return N===void 0&&(N=new g0(i,T,w,r),h.push(N)),N}function E(w){if(--w.usedTimes===0){let T=h.indexOf(w);h[T]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:L}}function y0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||v0),n.length>1&&n.sort(d||qh),s.length>1&&s.sort(d||qh)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function M0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function b0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function S0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var E0=0;function w0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T0(i){let e=new b0,t=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ft,o=new ft;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,S=0,_=0,y=0,C=0,E=0,P=0;c.sort(w0);for(let w=0,T=c.length;w<T;w++){let N=c[w],O=N.color,q=N.intensity,ne=N.distance,oe=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=O.r*q,u+=O.g*q,d+=O.b*q;else if(N.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(N.sh.coefficients[re],q);P++}else if(N.isDirectionalLight){let re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let he=N.shadow,W=t.get(N);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=N.shadow.matrix,S++}n.directional[p]=re,p++}else if(N.isSpotLight){let re=e.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(O).multiplyScalar(q),re.distance=ne,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,n.spot[x]=re;let he=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,he.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[x]=he.matrix,N.castShadow){let W=t.get(N);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=oe,y++}x++}else if(N.isRectAreaLight){let re=e.get(N);re.color.copy(O).multiplyScalar(q),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=re,m++}else if(N.isPointLight){let re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),re.distance=N.distance,re.decay=N.decay,N.castShadow){let he=N.shadow,W=t.get(N);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,W.shadowCameraNear=he.camera.near,W.shadowCameraFar=he.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=N.shadow.matrix,_++}n.point[g]=re,g++}else if(N.isHemisphereLight){let re=e.get(N);re.skyColor.copy(N.color).multiplyScalar(q),re.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[f]=re,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==S||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=S,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=P,n.version=E0++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let _=c[f];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Zh(i){let e=new T0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zh(i),e.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var R0=`void main() {
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
}`;function I0(i,e,t){let n=new qi,s=new ve,r=new ve,o=new gt,a=new qr({depthPacking:ch}),l=new Yr,c={},h=t.maxTextureSize,u={[Rn]:Bt,[Bt]:Rn,[Vt]:Vt},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:R0,fragmentShader:C0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let f=this.type;this.render=function(E,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),T=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Dn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=f!==xn&&this.type===xn,ne=f===xn&&this.type!==xn;for(let oe=0,re=E.length;oe<re;oe++){let he=E[oe],W=he.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();if(s.multiply(ue),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||q===!0||ne===!0){let ye=this.type!==xn?{minFilter:Ht,magFilter:Ht}:{};W.map!==null&&W.map.dispose(),W.map=new en(s.x,s.y,ye),W.map.texture.name=he.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let se=W.getViewportCount();for(let ye=0;ye<se;ye++){let Re=W.getViewport(ye);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),O.viewport(o),W.updateMatrices(he,ye),n=W.getFrustum(),y(P,L,W.camera,he,this.type)}W.isPointLightShadow!==!0&&this.type===xn&&S(W,L),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,N)};function S(E,P){let L=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new en(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,L,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,L,p,x,null)}function _(E,P,L,w){let T=null,N=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)T=N;else if(T=L.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=T.uuid,q=P.uuid,ne=c[O];ne===void 0&&(ne={},c[O]=ne);let oe=ne[q];oe===void 0&&(oe=T.clone(),ne[q]=oe,P.addEventListener("dispose",C)),T=oe}if(T.visible=P.visible,T.wireframe=P.wireframe,w===xn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:u[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let O=i.properties.get(T);O.light=L}return T}function y(E,P,L,w,T){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let q=e.update(E),ne=E.material;if(Array.isArray(ne)){let oe=q.groups;for(let re=0,he=oe.length;re<he;re++){let W=oe[re],ue=ne[W.materialIndex];if(ue&&ue.visible){let se=_(E,ue,w,T);E.onBeforeShadow(i,E,P,L,q,se,W),i.renderBufferDirect(L,null,q,se,E,W),E.onAfterShadow(i,E,P,L,q,se,W)}}}else if(ne.visible){let oe=_(E,ne,w,T);E.onBeforeShadow(i,E,P,L,q,oe,null),i.renderBufferDirect(L,null,q,oe,E,null),E.onAfterShadow(i,E,P,L,q,oe,null)}}let O=E.children;for(let q=0,ne=O.length;q<ne;q++)y(O[q],P,L,w,T)}function C(E){E.target.removeEventListener("dispose",C);for(let L in c){let w=c[L],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}var P0={[so]:ro,[oo]:lo,[ao]:ho,[oi]:co,[ro]:so,[lo]:oo,[ho]:ao,[co]:oi};function L0(i,e){function t(){let K=!1,Ee=new gt,Pe=null,Ne=new gt(0,0,0,0);return{setMask:function(Ae){Pe!==Ae&&!K&&(i.colorMask(Ae,Ae,Ae,Ae),Pe=Ae)},setLocked:function(Ae){K=Ae},setClear:function(Ae,Se,Fe,Xe,tt){tt===!0&&(Ae*=Xe,Se*=Xe,Fe*=Xe),Ee.set(Ae,Se,Fe,Xe),Ne.equals(Ee)===!1&&(i.clearColor(Ae,Se,Fe,Xe),Ne.copy(Ee))},reset:function(){K=!1,Pe=null,Ne.set(-1,0,0,0)}}}function n(){let K=!1,Ee=!1,Pe=null,Ne=null,Ae=null;return{setReversed:function(Se){if(Ee!==Se){let Fe=e.get("EXT_clip_control");Se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ee=Se;let Xe=Ae;Ae=null,this.setClear(Xe)}},getReversed:function(){return Ee},setTest:function(Se){Se?A(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(Se){Pe!==Se&&!K&&(i.depthMask(Se),Pe=Se)},setFunc:function(Se){if(Ee&&(Se=P0[Se]),Ne!==Se){switch(Se){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=Se}},setLocked:function(Se){K=Se},setClear:function(Se){Ae!==Se&&(Ee&&(Se=1-Se),i.clearDepth(Se),Ae=Se)},reset:function(){K=!1,Pe=null,Ne=null,Ae=null,Ee=!1}}}function s(){let K=!1,Ee=null,Pe=null,Ne=null,Ae=null,Se=null,Fe=null,Xe=null,tt=null;return{setTest:function(Qe){K||(Qe?A(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Qe){Ee!==Qe&&!K&&(i.stencilMask(Qe),Ee=Qe)},setFunc:function(Qe,Tt,dn){(Pe!==Qe||Ne!==Tt||Ae!==dn)&&(i.stencilFunc(Qe,Tt,dn),Pe=Qe,Ne=Tt,Ae=dn)},setOp:function(Qe,Tt,dn){(Se!==Qe||Fe!==Tt||Xe!==dn)&&(i.stencilOp(Qe,Tt,dn),Se=Qe,Fe=Tt,Xe=dn)},setLocked:function(Qe){K=Qe},setClear:function(Qe){tt!==Qe&&(i.clearStencil(Qe),tt=Qe)},reset:function(){K=!1,Ee=null,Pe=null,Ne=null,Ae=null,Se=null,Fe=null,Xe=null,tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,_=null,y=null,C=null,E=null,P=new He(0,0,0),L=0,w=!1,T=null,N=null,O=null,q=null,ne=null,oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,he=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=he>=1):W.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=he>=2);let ue=null,se={},ye=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Le=new gt().fromArray(ye),J=new gt().fromArray(Re);function H(K,Ee,Pe,Ne){let Ae=new Uint8Array(4),Se=i.createTexture();i.bindTexture(K,Se),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Pe;Fe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Ee+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Se}let I={};I[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(i.DEPTH_TEST),o.setFunc(oi),z(!1),k(Ka),A(i.CULL_FACE),X(Dn);function A(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function te(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function $(K,Ee){return u[K]!==Ee?(i.bindFramebuffer(K,Ee),u[K]=Ee,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ee),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function G(K,Ee){let Pe=p,Ne=!1;if(K){Pe=d.get(Ee),Pe===void 0&&(Pe=[],d.set(Ee,Pe));let Ae=K.textures;if(Pe.length!==Ae.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Fe=Ae.length;Se<Fe;Se++)Pe[Se]=i.COLOR_ATTACHMENT0+Se;Pe.length=Ae.length,Ne=!0}}else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Pe)}function de(K){return g!==K?(i.useProgram(K),g=K,!0):!1}let xe={[Xn]:i.FUNC_ADD,[Nl]:i.FUNC_SUBTRACT,[Fl]:i.FUNC_REVERSE_SUBTRACT};xe[Bl]=i.MIN,xe[Ol]=i.MAX;let D={[zl]:i.ZERO,[kl]:i.ONE,[Hl]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[Yl]:i.SRC_ALPHA_SATURATE,[Xl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[ql]:i.ONE_MINUS_DST_COLOR,[Wl]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[$l]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function X(K,Ee,Pe,Ne,Ae,Se,Fe,Xe,tt,Qe){if(K===Dn){x===!0&&(te(i.BLEND),x=!1);return}if(x===!1&&(A(i.BLEND),x=!0),K!==Ul){if(K!==m||Qe!==w){if((f!==Xn||y!==Xn)&&(i.blendEquation(i.FUNC_ADD),f=Xn,y=Xn),Qe)switch(K){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}S=null,_=null,C=null,E=null,P.set(0,0,0),L=0,m=K,w=Qe}return}Ae=Ae||Ee,Se=Se||Pe,Fe=Fe||Ne,(Ee!==f||Ae!==y)&&(i.blendEquationSeparate(xe[Ee],xe[Ae]),f=Ee,y=Ae),(Pe!==S||Ne!==_||Se!==C||Fe!==E)&&(i.blendFuncSeparate(D[Pe],D[Ne],D[Se],D[Fe]),S=Pe,_=Ne,C=Se,E=Fe),(Xe.equals(P)===!1||tt!==L)&&(i.blendColor(Xe.r,Xe.g,Xe.b,tt),P.copy(Xe),L=tt),m=K,w=!1}function Z(K,Ee){K.side===Vt?te(i.CULL_FACE):A(i.CULL_FACE);let Pe=K.side===Bt;Ee&&(Pe=!Pe),z(Pe),K.blending===ri&&K.transparent===!1?X(Dn):X(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let Ne=K.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),M(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?A(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(K){T!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),T=K)}function k(K){K!==Ll?(A(i.CULL_FACE),K!==N&&(K===Ka?i.cullFace(i.BACK):K===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),N=K}function b(K){K!==O&&(re&&i.lineWidth(K),O=K)}function M(K,Ee,Pe){K?(A(i.POLYGON_OFFSET_FILL),(q!==Ee||ne!==Pe)&&(i.polygonOffset(Ee,Pe),q=Ee,ne=Pe)):te(i.POLYGON_OFFSET_FILL)}function B(K){K?A(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ce(K){K===void 0&&(K=i.TEXTURE0+oe-1),ue!==K&&(i.activeTexture(K),ue=K)}function j(K,Ee,Pe){Pe===void 0&&(ue===null?Pe=i.TEXTURE0+oe-1:Pe=ue);let Ne=se[Pe];Ne===void 0&&(Ne={type:void 0,texture:void 0},se[Pe]=Ne),(Ne.type!==K||Ne.texture!==Ee)&&(ue!==Pe&&(i.activeTexture(Pe),ue=Pe),i.bindTexture(K,Ee||I[K]),Ne.type=K,Ne.texture=Ee)}function R(){let K=se[ue];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Y(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Q(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function fe(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function be(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pe(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(K){Le.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Le.copy(K))}function we(K){J.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),J.copy(K))}function Ie(K,Ee){let Pe=c.get(Ee);Pe===void 0&&(Pe=new WeakMap,c.set(Ee,Pe));let Ne=Pe.get(K);Ne===void 0&&(Ne=i.getUniformBlockIndex(Ee,K.name),Pe.set(K,Ne))}function Te(K,Ee){let Ne=c.get(Ee).get(K);l.get(Ee)!==Ne&&(i.uniformBlockBinding(Ee,Ne,K.__bindingPointIndex),l.set(Ee,Ne))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,se={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,_=null,y=null,C=null,E=null,P=new He(0,0,0),L=0,w=!1,T=null,N=null,O=null,q=null,ne=null,Le.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:te,bindFramebuffer:$,drawBuffers:G,useProgram:de,setBlending:X,setMaterial:Z,setFlipSided:z,setCullFace:k,setLineWidth:b,setPolygonOffset:M,setScissorTest:B,activeTexture:ce,bindTexture:j,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:V,texImage2D:_e,texImage3D:pe,updateUBOMapping:Ie,uniformBlockBinding:Te,texStorage2D:fe,texStorage3D:be,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:ee,compressedTexSubImage3D:ie,scissor:Me,viewport:we,reset:ze}}function D0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):ys("canvas")}function x(R,v,V){let Y=1,Q=j(R);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ee=Math.floor(Y*Q.width),ie=Math.floor(Y*Q.height);u===void 0&&(u=g(ee,ie));let fe=v?g(ee,ie):u;return fe.width=ee,fe.height=ie,fe.getContext("2d").drawImage(R,0,0,ee,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+ie+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,v,V,Y,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=v;if(v===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),v===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),v===i.RGBA){let ie=Q?xs:nt.getTransfer(Y);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=ie===st?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,v){let V;return R?v===null||v===Kn||v===Qi?V=i.DEPTH24_STENCIL8:v===_n?V=i.DEPTH32F_STENCIL8:v===Ki&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===Qi?V=i.DEPTH_COMPONENT24:v===_n?V=i.DEPTH_COMPONENT32F:v===Ki&&(V=i.DEPTH_COMPONENT16),V}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Dt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function E(R){let v=R.target;v.removeEventListener("dispose",E),L(v),v.isVideoTexture&&h.delete(v)}function P(R){let v=R.target;v.removeEventListener("dispose",P),T(v)}function L(R){let v=n.get(R);if(v.__webglInit===void 0)return;let V=R.source,Y=d.get(V);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(R),Object.keys(Y).length===0&&d.delete(V)}n.remove(R)}function w(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let V=R.source,Y=d.get(V);delete Y[v.__cacheKey],o.memory.textures--}function T(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=R.textures;for(let Y=0,Q=V.length;Y<Q;Y++){let ee=n.get(V[Y]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(V[Y])}n.remove(R)}let N=0;function O(){N=0}function q(){let R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function ne(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function oe(R,v){let V=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(V,R,v);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function re(R,v){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){I(V,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function he(R,v){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){I(V,R,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function W(R,v){let V=n.get(R);if(R.version>0&&V.__version!==R.version){A(V,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let ue={[Oi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},se={[Ht]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ye={[hh]:i.NEVER,[gh]:i.ALWAYS,[uh]:i.LESS,[dc]:i.LEQUAL,[fh]:i.EQUAL,[mh]:i.GEQUAL,[dh]:i.GREATER,[ph]:i.NOTEQUAL};function Re(R,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dt||v.magFilter===mo||v.magFilter===qs||v.magFilter===$n||v.minFilter===Dt||v.minFilter===mo||v.minFilter===qs||v.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ue[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ht||v.minFilter!==qs&&v.minFilter!==$n||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Le(R,v){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",E));let Y=v.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let ee=ne(v);if(ee!==R.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[ee].usedTimes++;let ie=Q[R.__cacheKey];ie!==void 0&&(Q[R.__cacheKey].usedTimes--,ie.usedTimes===0&&w(v)),R.__cacheKey=ee,R.__webglTexture=Q[ee].texture}return V}function J(R,v,V){return Math.floor(Math.floor(R/V)/v)}function H(R,v,V,Y){let ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,Y,v.data);else{ee.sort((pe,Me)=>pe.start-Me.start);let ie=0;for(let pe=1;pe<ee.length;pe++){let Me=ee[ie],we=ee[pe],Ie=Me.start+Me.count,Te=J(we.start,v.width,4),ze=J(Me.start,v.width,4);we.start<=Ie+1&&Te===ze&&J(we.start+we.count-1,v.width,4)===Te?Me.count=Math.max(Me.count,we.start+we.count-Me.start):(++ie,ee[ie]=we)}ee.length=ie+1;let fe=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let pe=0,Me=ee.length;pe<Me;pe++){let we=ee[pe],Ie=Math.floor(we.start/4),Te=Math.ceil(we.count/4),ze=Ie%v.width,K=Math.floor(Ie/v.width),Ee=Te,Pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,ze,K,Ee,Pe,V,Y,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function I(R,v,V){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Le(R,v),ee=v.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+V);let ie=n.get(ee);if(ee.version!==ie.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);let fe=nt.getPrimaries(nt.workingColorSpace),be=v.colorSpace===Nn?null:nt.getPrimaries(v.colorSpace),_e=v.colorSpace===Nn||fe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let pe=x(v.image,!1,s.maxTextureSize);pe=ce(v,pe);let Me=r.convert(v.format,v.colorSpace),we=r.convert(v.type),Ie=_(v.internalFormat,Me,we,v.colorSpace,v.isVideoTexture);Re(Y,v);let Te,ze=v.mipmaps,K=v.isVideoTexture!==!0,Ee=ie.__version===void 0||Q===!0,Pe=ee.dataReady,Ne=C(v,pe);if(v.isDepthTexture)Ie=y(v.format===es,v.type),Ee&&(K?t.texStorage2D(i.TEXTURE_2D,1,Ie,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,pe.width,pe.height,0,Me,we,null));else if(v.isDataTexture)if(ze.length>0){K&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,ze[0].width,ze[0].height);for(let Ae=0,Se=ze.length;Ae<Se;Ae++)Te=ze[Ae],K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Te.width,Te.height,Me,we,Te.data):t.texImage2D(i.TEXTURE_2D,Ae,Ie,Te.width,Te.height,0,Me,we,Te.data);v.generateMipmaps=!1}else K?(Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,pe.width,pe.height),Pe&&H(v,pe,Me,we)):t.texImage2D(i.TEXTURE_2D,0,Ie,pe.width,pe.height,0,Me,we,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){K&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Ie,ze[0].width,ze[0].height,pe.depth);for(let Ae=0,Se=ze.length;Ae<Se;Ae++)if(Te=ze[Ae],v.format!==nn)if(Me!==null)if(K){if(Pe)if(v.layerUpdates.size>0){let Fe=Mc(Te.width,Te.height,v.format,v.type);for(let Xe of v.layerUpdates){let tt=Te.data.subarray(Xe*Fe/Te.data.BYTES_PER_ELEMENT,(Xe+1)*Fe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,Xe,Te.width,Te.height,1,Me,tt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Te.width,Te.height,pe.depth,Me,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,Te.width,Te.height,pe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Te.width,Te.height,pe.depth,Me,we,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,Te.width,Te.height,pe.depth,0,Me,we,Te.data)}else{K&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,ze[0].width,ze[0].height);for(let Ae=0,Se=ze.length;Ae<Se;Ae++)Te=ze[Ae],v.format!==nn?Me!==null?K?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,Te.width,Te.height,Me,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Te.width,Te.height,Me,we,Te.data):t.texImage2D(i.TEXTURE_2D,Ae,Ie,Te.width,Te.height,0,Me,we,Te.data)}else if(v.isDataArrayTexture)if(K){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Ie,pe.width,pe.height,pe.depth),Pe)if(v.layerUpdates.size>0){let Ae=Mc(pe.width,pe.height,v.format,v.type);for(let Se of v.layerUpdates){let Fe=pe.data.subarray(Se*Ae/pe.data.BYTES_PER_ELEMENT,(Se+1)*Ae/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,pe.width,pe.height,1,Me,we,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Me,we,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,pe.width,pe.height,pe.depth,0,Me,we,pe.data);else if(v.isData3DTexture)K?(Ee&&t.texStorage3D(i.TEXTURE_3D,Ne,Ie,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Me,we,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,pe.width,pe.height,pe.depth,0,Me,we,pe.data);else if(v.isFramebufferTexture){if(Ee)if(K)t.texStorage2D(i.TEXTURE_2D,Ne,Ie,pe.width,pe.height);else{let Ae=pe.width,Se=pe.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Ie,Ae,Se,0,Me,we,null),Ae>>=1,Se>>=1}}else if(ze.length>0){if(K&&Ee){let Ae=j(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Ie,Ae.width,Ae.height)}for(let Ae=0,Se=ze.length;Ae<Se;Ae++)Te=ze[Ae],K?Pe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Me,we,Te):t.texImage2D(i.TEXTURE_2D,Ae,Ie,Me,we,Te);v.generateMipmaps=!1}else if(K){if(Ee){let Ae=j(pe);t.texStorage2D(i.TEXTURE_2D,Ne,Ie,Ae.width,Ae.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,we,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Me,we,pe);m(v)&&f(Y),ie.__version=ee.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function A(R,v,V){if(v.image.length!==6)return;let Y=Le(R,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let ee=n.get(Q);if(Q.version!==ee.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);let ie=nt.getPrimaries(nt.workingColorSpace),fe=v.colorSpace===Nn?null:nt.getPrimaries(v.colorSpace),be=v.colorSpace===Nn||ie===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let Se=0;Se<6;Se++)!_e&&!pe?Me[Se]=x(v.image[Se],!0,s.maxCubemapSize):Me[Se]=pe?v.image[Se].image:v.image[Se],Me[Se]=ce(v,Me[Se]);let we=Me[0],Ie=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),ze=_(v.internalFormat,Ie,Te,v.colorSpace),K=v.isVideoTexture!==!0,Ee=ee.__version===void 0||Y===!0,Pe=Q.dataReady,Ne=C(v,we);Re(i.TEXTURE_CUBE_MAP,v);let Ae;if(_e){K&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ze,we.width,we.height);for(let Se=0;Se<6;Se++){Ae=Me[Se].mipmaps;for(let Fe=0;Fe<Ae.length;Fe++){let Xe=Ae[Fe];v.format!==nn?Ie!==null?K?Pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Xe.width,Xe.height,Ie,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,ze,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,Xe.width,Xe.height,Ie,Te,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,ze,Xe.width,Xe.height,0,Ie,Te,Xe.data)}}}else{if(Ae=v.mipmaps,K&&Ee){Ae.length>0&&Ne++;let Se=j(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ze,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(pe){K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Me[Se].width,Me[Se].height,Ie,Te,Me[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ze,Me[Se].width,Me[Se].height,0,Ie,Te,Me[Se].data);for(let Fe=0;Fe<Ae.length;Fe++){let tt=Ae[Fe].image[Se].image;K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,tt.width,tt.height,Ie,Te,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,ze,tt.width,tt.height,0,Ie,Te,tt.data)}}else{K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie,Te,Me[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ze,Ie,Te,Me[Se]);for(let Fe=0;Fe<Ae.length;Fe++){let Xe=Ae[Fe];K?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,Ie,Te,Xe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,ze,Ie,Te,Xe.image[Se])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),ee.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function te(R,v,V,Y,Q,ee){let ie=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),be=_(V.internalFormat,ie,fe,V.colorSpace),_e=n.get(v),pe=n.get(V);if(pe.__renderTarget=v,!_e.__hasExternalTextures){let Me=Math.max(1,v.width>>ee),we=Math.max(1,v.height>>ee);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,be,Me,we,v.depth,0,ie,fe,null):t.texImage2D(Q,ee,be,Me,we,0,ie,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),M(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,pe.__webglTexture,0,b(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,pe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(R,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ee=y(v.stencilBuffer,Q),ie=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b(v);M(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ee,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,R)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let ee=Y[Q],ie=r.convert(ee.format,ee.colorSpace),fe=r.convert(ee.type),be=_(ee.internalFormat,ie,fe,ee.colorSpace),_e=b(v);V&&M(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,be,v.width,v.height):M(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,be,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);let Q=Y.__webglTexture,ee=b(v);if(v.depthTexture.format===zi)M(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===es)M(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function de(R){let v=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?G(v.__webglFramebuffer[0],R):G(v.__webglFramebuffer,R)}else if(V){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),$(v.__webglDepthbuffer[Y],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ee)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$(v.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(R,v,V){let Y=n.get(R);v!==void 0&&te(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&de(R)}function D(R){let v=R.texture,V=n.get(R),Y=n.get(v);R.addEventListener("dispose",P);let Q=R.textures,ee=R.isWebGLCubeRenderTarget===!0,ie=Q.length>1;if(ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let be=0;be<v.mipmaps.length;be++)V.__webglFramebuffer[fe][be]=i.createFramebuffer()}else V.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)V.__webglFramebuffer[fe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ie)for(let fe=0,be=Q.length;fe<be;fe++){let _e=n.get(Q[fe]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&M(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){let be=Q[fe];V.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);let _e=r.convert(be.format,be.colorSpace),pe=r.convert(be.type),Me=_(be.internalFormat,_e,pe,be.colorSpace,R.isXRRenderTarget===!0),we=b(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),$(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(i.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)te(V.__webglFramebuffer[fe][be],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else te(V.__webglFramebuffer[fe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let fe=0,be=Q.length;fe<be;fe++){let _e=Q[fe],pe=n.get(_e),Me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,pe.__webglTexture),Re(Me,_e),te(V.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+fe,Me,0),m(_e)&&f(Me)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Re(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)te(V.__webglFramebuffer[be],R,v,i.COLOR_ATTACHMENT0,fe,be);else te(V.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,fe,0);m(v)&&f(fe),t.unbindTexture()}R.depthBuffer&&de(R)}function X(R){let v=R.textures;for(let V=0,Y=v.length;V<Y;V++){let Q=v[V];if(m(Q)){let ee=S(R),ie=n.get(Q).__webglTexture;t.bindTexture(ee,ie),f(ee),t.unbindTexture()}}}let Z=[],z=[];function k(R){if(R.samples>0){if(M(R)===!1){let v=R.textures,V=R.width,Y=R.height,Q=i.COLOR_BUFFER_BIT,ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(R),fe=v.length>1;if(fe)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[_e]);let pe=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(Z.length=0,z.length=0,Z.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(ee),z.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ie.__webglColorRenderbuffer[_e]);let pe=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function b(R){return Math.min(s.maxSamples,R.samples)}function M(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function ce(R,v){let V=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ai&&V!==Nn&&(nt.getTransfer(V)===st?(Y!==nn||Q!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function j(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.setTexture2D=oe,this.setTexture2DArray=re,this.setTexture3D=he,this.setTextureCube=W,this.rebindTextures=xe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=te,this.useMultisampledRTT=M}function U0(i,e){function t(n,s=Nn){let r,o=nt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===lc)return i.RGB;if(n===nn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo||n===ko||n===Ho||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var N0=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Uc,f={},S=t.getContextAttributes(),_=null,y=null,C=[],E=[],P=new ve,L=null,w=new kt;w.viewport=new gt;let T=new kt;T.viewport=new gt;let N=[w,T],O=new no,q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let A=C[I];return A===void 0&&(A=new Xi,C[I]=A),A.getTargetRaySpace()},this.getControllerGrip=function(I){let A=C[I];return A===void 0&&(A=new Xi,C[I]=A),A.getGripSpace()},this.getHand=function(I){let A=C[I];return A===void 0&&(A=new Xi,C[I]=A),A.getHandSpace()};function oe(I){let A=E.indexOf(I.inputSource);if(A===-1)return;let te=C[A];te!==void 0&&(te.update(I.inputSource,I.frame,c||o),te.dispatchEvent({type:I.type,data:I.inputSource}))}function re(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",he);for(let I=0;I<C.length;I++){let A=E[I];A!==null&&(E[I]=null,C[I].disconnect(A))}q=null,ne=null,m.reset();for(let I in f)delete f[I];e.setRenderTarget(_),p=null,d=null,u=null,s=null,y=null,H.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",re),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,$=null,G=null;S.depth&&(G=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?es:zi,$=S.stencil?Qi:Kn);let de={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(de),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new en(d.textureWidth,d.textureHeight,{format:nn,type:fn,depthTexture:new As(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new en(p.framebufferWidth,p.framebufferHeight,{format:nn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(I){for(let A=0;A<I.removed.length;A++){let te=I.removed[A],$=E.indexOf(te);$>=0&&(E[$]=null,C[$].disconnect(te))}for(let A=0;A<I.added.length;A++){let te=I.added[A],$=E.indexOf(te);if($===-1){for(let de=0;de<C.length;de++)if(de>=E.length){E.push(te),$=de;break}else if(E[de]===null){E[de]=te,$=de;break}if($===-1)break}let G=C[$];G&&G.connect(te)}}let W=new F,ue=new F;function se(I,A,te){W.setFromMatrixPosition(A.matrixWorld),ue.setFromMatrixPosition(te.matrixWorld);let $=W.distanceTo(ue),G=A.projectionMatrix.elements,de=te.projectionMatrix.elements,xe=G[14]/(G[10]-1),D=G[14]/(G[10]+1),X=(G[9]+1)/G[5],Z=(G[9]-1)/G[5],z=(G[8]-1)/G[0],k=(de[8]+1)/de[0],b=xe*z,M=xe*k,B=$/(-z+k),ce=B*-z;if(A.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ce),I.translateZ(B),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),G[10]===-1)I.projectionMatrix.copy(A.projectionMatrix),I.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let j=xe+B,R=D+B,v=b-ce,V=M+($-ce),Y=X*D/R*j,Q=Z*D/R*j;I.projectionMatrix.makePerspective(v,V,Y,Q,j,R),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function ye(I,A){A===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(A.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let A=I.near,te=I.far;m.texture!==null&&(m.depthNear>0&&(A=m.depthNear),m.depthFar>0&&(te=m.depthFar)),O.near=T.near=w.near=A,O.far=T.far=w.far=te,(q!==O.near||ne!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,ne=O.far),O.layers.mask=I.layers.mask|6,w.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;let $=I.parent,G=O.cameras;ye(O,$);for(let de=0;de<G.length;de++)ye(G[de],$);G.length===2?se(O,w,T):O.projectionMatrix.copy(w.projectionMatrix),Re(I,O,$)};function Re(I,A,te){te===null?I.matrix.copy(A.matrixWorld):(I.matrix.copy(te.matrixWorld),I.matrix.invert(),I.matrix.multiply(A.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(A.projectionMatrix),I.projectionMatrixInverse.copy(A.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=ki*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(I){return f[I]};let Le=null;function J(I,A){if(h=A.getViewerPose(c||o),g=A,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let $=!1;te.length!==O.cameras.length&&(O.cameras.length=0,$=!0);for(let D=0;D<te.length;D++){let X=te[D],Z=null;if(p!==null)Z=p.getViewport(X);else{let k=u.getViewSubImage(d,X);Z=k.viewport,D===0&&(e.setRenderTargetTextures(y,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(y))}let z=N[D];z===void 0&&(z=new kt,z.layers.enable(D),z.viewport=new gt,N[D]=z),z.matrix.fromArray(X.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(X.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Z.x,Z.y,Z.width,Z.height),D===0&&(O.matrix.copy(z.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),$===!0&&O.cameras.push(z)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let D=u.getDepthInformation(te[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(G&&G.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<te.length;D++){let X=te[D].camera;if(X){let Z=f[X];Z||(Z=new Rs,f[X]=Z);let z=u.getCameraImage(X);Z.sourceTexture=z}}}}for(let te=0;te<C.length;te++){let $=E[te],G=C[te];$!==null&&G!==void 0&&G.update($,A,c||o)}Le&&Le(I,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),g=null}let H=new Jh;H.setAnimationLoop(J),this.setAnimationLoop=function(I){Le=I},this.dispose=function(){}}},vi=new ln,B0=new ft;function O0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,xc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),_=S.envMap,y=S.envMapRotation;_&&(m.envMap.value=_,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(vi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let y=_.program;n.uniformBlockBinding(S,y)}function c(S,_){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let C=_.program;n.updateUBOMapping(S,C);let E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){let _=u();S.__bindingPointIndex=_;let y=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,P=y.length;E<P;E++){let L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,T=L.length;w<T;w++){let N=L[w];if(p(N,E,w,C)===!0){let O=N.__offset,q=Array.isArray(N.value)?N.value:[N.value],ne=0;for(let oe=0;oe<q.length;oe++){let re=q[oe],he=x(re);typeof re=="number"||typeof re=="boolean"?(N.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,O+ne,N.__data)):re.isMatrix3?(N.__data[0]=re.elements[0],N.__data[1]=re.elements[1],N.__data[2]=re.elements[2],N.__data[3]=0,N.__data[4]=re.elements[3],N.__data[5]=re.elements[4],N.__data[6]=re.elements[5],N.__data[7]=0,N.__data[8]=re.elements[6],N.__data[9]=re.elements[7],N.__data[10]=re.elements[8],N.__data[11]=0):(re.toArray(N.__data,ne),ne+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,y,C){let E=S.value,P=_+"_"+y;if(C[P]===void 0)return typeof E=="number"||typeof E=="boolean"?C[P]=E:C[P]=E.clone(),!0;{let L=C[P];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return C[P]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(S){let _=S.uniforms,y=0,C=16;for(let P=0,L=_.length;P<L;P++){let w=Array.isArray(_[P])?_[P]:[_[P]];for(let T=0,N=w.length;T<N;T++){let O=w[T],q=Array.isArray(O.value)?O.value:[O.value];for(let ne=0,oe=q.length;ne<oe;ne++){let re=q[ne],he=x(re),W=y%C,ue=W%he.boundary,se=W+ue;y+=ue,se!==0&&C-se<he.storage&&(y+=C-se),O.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=he.storage}}}let E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function x(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ea=class{constructor(e={}){let{canvas:t=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,S=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=_t;let E=0,P=0,L=null,w=-1,T=null,N=new gt,O=new gt,q=null,ne=new He(0),oe=0,re=t.width,he=t.height,W=1,ue=null,se=null,ye=new gt(0,0,re,he),Re=new gt(0,0,re,he),Le=!1,J=new qi,H=!1,I=!1,A=new ft,te=new F,$=new gt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function xe(){return L===null?W:1}let D=n;function X(U,ae){return t.getContext(U,ae)}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){let ae="webgl2";if(D=X(ae,U),D===null)throw X(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Z,z,k,b,M,B,ce,j,R,v,V,Y,Q,ee,ie,fe,be,_e,pe,Me,we,Ie,Te,ze;function K(){Z=new ig(D),Z.init(),Ie=new U0(D,Z),z=new $m(D,Z,e,Ie),k=new L0(D,Z),z.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),b=new og(D),M=new y0,B=new D0(D,Z,k,M,z,Ie,b),ce=new jm(y),j=new ng(y),R=new fd(D),Te=new Zm(D,R),v=new sg(D,R,b,Te),V=new cg(D,v,R,b),pe=new ag(D,z,B),fe=new Km(M),Y=new _0(y,ce,j,Z,z,Te,fe),Q=new O0(y,M),ee=new M0,ie=new A0(Z),_e=new Ym(y,ce,j,k,V,p,l),be=new I0(y,V,z),ze=new z0(D,b,z,k),Me=new Jm(D,Z,b),we=new rg(D,Z,b),b.programs=Y.programs,y.capabilities=z,y.extensions=Z,y.properties=M,y.renderLists=ee,y.shadowMap=be,y.state=k,y.info=b}K();let Ee=new Nc(y,D);this.xr=Ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let U=Z.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=Z.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(U){U!==void 0&&(W=U,this.setSize(re,he,!1))},this.getSize=function(U){return U.set(re,he)},this.setSize=function(U,ae,me=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=U,he=ae,t.width=Math.floor(U*W),t.height=Math.floor(ae*W),me===!0&&(t.style.width=U+"px",t.style.height=ae+"px"),this.setViewport(0,0,U,ae)},this.getDrawingBufferSize=function(U){return U.set(re*W,he*W).floor()},this.setDrawingBufferSize=function(U,ae,me){re=U,he=ae,W=me,t.width=Math.floor(U*me),t.height=Math.floor(ae*me),this.setViewport(0,0,U,ae)},this.getCurrentViewport=function(U){return U.copy(N)},this.getViewport=function(U){return U.copy(ye)},this.setViewport=function(U,ae,me,ge){U.isVector4?ye.set(U.x,U.y,U.z,U.w):ye.set(U,ae,me,ge),k.viewport(N.copy(ye).multiplyScalar(W).round())},this.getScissor=function(U){return U.copy(Re)},this.setScissor=function(U,ae,me,ge){U.isVector4?Re.set(U.x,U.y,U.z,U.w):Re.set(U,ae,me,ge),k.scissor(O.copy(Re).multiplyScalar(W).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(U){k.setScissorTest(Le=U)},this.setOpaqueSort=function(U){ue=U},this.setTransparentSort=function(U){se=U},this.getClearColor=function(U){return U.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(U=!0,ae=!0,me=!0){let ge=0;if(U){let le=!1;if(L!==null){let Ce=L.texture.format;le=Ce===Mo||Ce===vo||Ce===yo}if(le){let Ce=L.texture.type,Ue=Ce===fn||Ce===Kn||Ce===Ki||Ce===Qi||Ce===xo||Ce===_o,ke=_e.getClearColor(),Be=_e.getClearAlpha(),qe=ke.r,Ze=ke.g,Ge=ke.b;Ue?(g[0]=qe,g[1]=Ze,g[2]=Ge,g[3]=Be,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=qe,x[1]=Ze,x[2]=Ge,x[3]=Be,D.clearBufferiv(D.COLOR,0,x))}else ge|=D.COLOR_BUFFER_BIT}ae&&(ge|=D.DEPTH_BUFFER_BIT),me&&(ge|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),_e.dispose(),ee.dispose(),ie.dispose(),M.dispose(),ce.dispose(),j.dispose(),V.dispose(),Te.dispose(),ze.dispose(),Y.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",dn),Ee.removeEventListener("sessionend",Jc),jn.stop()};function Pe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let U=b.autoReset,ae=be.enabled,me=be.autoUpdate,ge=be.needsUpdate,le=be.type;K(),b.autoReset=U,be.enabled=ae,be.autoUpdate=me,be.needsUpdate=ge,be.type=le}function Ae(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Se(U){let ae=U.target;ae.removeEventListener("dispose",Se),Fe(ae)}function Fe(U){Xe(U),M.remove(U)}function Xe(U){let ae=M.get(U).programs;ae!==void 0&&(ae.forEach(function(me){Y.releaseProgram(me)}),U.isShaderMaterial&&Y.releaseShaderCache(U))}this.renderBufferDirect=function(U,ae,me,ge,le,Ce){ae===null&&(ae=G);let Ue=le.isMesh&&le.matrixWorld.determinant()<0,ke=Lu(U,ae,me,ge,le);k.setMaterial(ge,Ue);let Be=me.index,qe=1;if(ge.wireframe===!0){if(Be=v.getWireframeAttribute(me),Be===void 0)return;qe=2}let Ze=me.drawRange,Ge=me.attributes.position,et=Ze.start*qe,rt=(Ze.start+Ze.count)*qe;Ce!==null&&(et=Math.max(et,Ce.start*qe),rt=Math.min(rt,(Ce.start+Ce.count)*qe)),Be!==null?(et=Math.max(et,0),rt=Math.min(rt,Be.count)):Ge!=null&&(et=Math.max(et,0),rt=Math.min(rt,Ge.count));let xt=rt-et;if(xt<0||xt===1/0)return;Te.setup(le,ge,ke,me,Be);let ht,at=Me;if(Be!==null&&(ht=R.get(Be),at=we,at.setIndex(ht)),le.isMesh)ge.wireframe===!0?(k.setLineWidth(ge.wireframeLinewidth*xe()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(le.isLine){let We=ge.linewidth;We===void 0&&(We=1),k.setLineWidth(We*xe()),le.isLineSegments?at.setMode(D.LINES):le.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else le.isPoints?at.setMode(D.POINTS):le.isSprite&&at.setMode(D.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))at.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let We=le._multiDrawStarts,dt=le._multiDrawCounts,it=le._multiDrawCount,Gt=Be?R.get(Be).bytesPerElement:1,Si=M.get(ge).currentProgram.getUniforms();for(let Wt=0;Wt<it;Wt++)Si.setValue(D,"_gl_DrawID",Wt),at.render(We[Wt]/Gt,dt[Wt])}else if(le.isInstancedMesh)at.renderInstances(et,xt,le.count);else if(me.isInstancedBufferGeometry){let We=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,dt=Math.min(me.instanceCount,We);at.renderInstances(et,xt,dt)}else at.render(et,xt)};function tt(U,ae,me){U.transparent===!0&&U.side===Vt&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,rr(U,ae,me),U.side=Rn,U.needsUpdate=!0,rr(U,ae,me),U.side=Vt):rr(U,ae,me)}this.compile=function(U,ae,me=null){me===null&&(me=U),f=ie.get(me),f.init(ae),_.push(f),me.traverseVisible(function(le){le.isLight&&le.layers.test(ae.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))}),U!==me&&U.traverseVisible(function(le){le.isLight&&le.layers.test(ae.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))}),f.setupLights();let ge=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let Ce=le.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){let ke=Ce[Ue];tt(ke,me,le),ge.add(ke)}else tt(Ce,me,le),ge.add(Ce)}),f=_.pop(),ge},this.compileAsync=function(U,ae,me=null){let ge=this.compile(U,ae,me);return new Promise(le=>{function Ce(){if(ge.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&ge.delete(Ue)}),ge.size===0){le(U);return}setTimeout(Ce,10)}Z.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qe=null;function Tt(U){Qe&&Qe(U)}function dn(){jn.stop()}function Jc(){jn.start()}let jn=new Jh;jn.setAnimationLoop(Tt),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(U){Qe=U,Ee.setAnimationLoop(U),U===null?jn.stop():jn.start()},Ee.addEventListener("sessionstart",dn),Ee.addEventListener("sessionend",Jc),this.render=function(U,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ae),ae=Ee.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,ae,L),f=ie.get(U,_.length),f.init(ae),_.push(f),A.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),J.setFromProjectionMatrix(A,cn,ae.reversedDepth),I=this.localClippingEnabled,H=fe.init(this.clippingPlanes,I),m=ee.get(U,S.length),m.init(),S.push(m),Ee.enabled===!0&&Ee.isPresenting===!0){let Ce=y.xr.getDepthSensingMesh();Ce!==null&&la(Ce,ae,-1/0,y.sortObjects)}la(U,ae,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,se),de=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,de&&_e.addToRenderList(m,U),this.info.render.frame++,H===!0&&fe.beginShadows();let me=f.state.shadowsArray;be.render(me,U,ae),H===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ge=m.opaque,le=m.transmissive;if(f.setupLights(),ae.isArrayCamera){let Ce=ae.cameras;if(le.length>0)for(let Ue=0,ke=Ce.length;Ue<ke;Ue++){let Be=Ce[Ue];Kc(ge,le,U,Be)}de&&_e.render(U);for(let Ue=0,ke=Ce.length;Ue<ke;Ue++){let Be=Ce[Ue];$c(m,U,Be,Be.viewport)}}else le.length>0&&Kc(ge,le,U,ae),de&&_e.render(U),$c(m,U,ae);L!==null&&P===0&&(B.updateMultisampleRenderTarget(L),B.updateRenderTargetMipmap(L)),U.isScene===!0&&U.onAfterRender(y,U,ae),Te.resetDefaultState(),w=-1,T=null,_.pop(),_.length>0?(f=_[_.length-1],H===!0&&fe.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function la(U,ae,me,ge){if(U.visible===!1)return;if(U.layers.test(ae.layers)){if(U.isGroup)me=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ae);else if(U.isLight)f.pushLight(U),U.castShadow&&f.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){ge&&$.setFromMatrixPosition(U.matrixWorld).applyMatrix4(A);let Ue=V.update(U),ke=U.material;ke.visible&&m.push(U,Ue,ke,me,$.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||J.intersectsObject(U))){let Ue=V.update(U),ke=U.material;if(ge&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),$.copy(U.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),$.copy(Ue.boundingSphere.center)),$.applyMatrix4(U.matrixWorld).applyMatrix4(A)),Array.isArray(ke)){let Be=Ue.groups;for(let qe=0,Ze=Be.length;qe<Ze;qe++){let Ge=Be[qe],et=ke[Ge.materialIndex];et&&et.visible&&m.push(U,Ue,et,me,$.z,Ge)}}else ke.visible&&m.push(U,Ue,ke,me,$.z,null)}}let Ce=U.children;for(let Ue=0,ke=Ce.length;Ue<ke;Ue++)la(Ce[Ue],ae,me,ge)}function $c(U,ae,me,ge){let le=U.opaque,Ce=U.transmissive,Ue=U.transparent;f.setupLightsView(me),H===!0&&fe.setGlobalState(y.clippingPlanes,me),ge&&k.viewport(N.copy(ge)),le.length>0&&sr(le,ae,me),Ce.length>0&&sr(Ce,ae,me),Ue.length>0&&sr(Ue,ae,me),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Kc(U,ae,me,ge){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ge.id]===void 0&&(f.state.transmissionRenderTarget[ge.id]=new en(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?ji:fn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let Ce=f.state.transmissionRenderTarget[ge.id],Ue=ge.viewport||N;Ce.setSize(Ue.z*y.transmissionResolutionScale,Ue.w*y.transmissionResolutionScale);let ke=y.getRenderTarget(),Be=y.getActiveCubeFace(),qe=y.getActiveMipmapLevel();y.setRenderTarget(Ce),y.getClearColor(ne),oe=y.getClearAlpha(),oe<1&&y.setClearColor(16777215,.5),y.clear(),de&&_e.render(me);let Ze=y.toneMapping;y.toneMapping=Un;let Ge=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),f.setupLightsView(ge),H===!0&&fe.setGlobalState(y.clippingPlanes,ge),sr(U,me,ge),B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce),Z.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let rt=0,xt=ae.length;rt<xt;rt++){let ht=ae[rt],at=ht.object,We=ht.geometry,dt=ht.material,it=ht.group;if(dt.side===Vt&&at.layers.test(ge.layers)){let Gt=dt.side;dt.side=Bt,dt.needsUpdate=!0,jc(at,me,ge,We,dt,it),dt.side=Gt,dt.needsUpdate=!0,et=!0}}et===!0&&(B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce))}y.setRenderTarget(ke,Be,qe),y.setClearColor(ne,oe),Ge!==void 0&&(ge.viewport=Ge),y.toneMapping=Ze}function sr(U,ae,me){let ge=ae.isScene===!0?ae.overrideMaterial:null;for(let le=0,Ce=U.length;le<Ce;le++){let Ue=U[le],ke=Ue.object,Be=Ue.geometry,qe=Ue.group,Ze=Ue.material;Ze.allowOverride===!0&&ge!==null&&(Ze=ge),ke.layers.test(me.layers)&&jc(ke,ae,me,Be,Ze,qe)}}function jc(U,ae,me,ge,le,Ce){U.onBeforeRender(y,ae,me,ge,le,Ce),U.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(y,ae,me,ge,U,Ce),le.transparent===!0&&le.side===Vt&&le.forceSinglePass===!1?(le.side=Bt,le.needsUpdate=!0,y.renderBufferDirect(me,ae,ge,le,U,Ce),le.side=Rn,le.needsUpdate=!0,y.renderBufferDirect(me,ae,ge,le,U,Ce),le.side=Vt):y.renderBufferDirect(me,ae,ge,le,U,Ce),U.onAfterRender(y,ae,me,ge,le,Ce)}function rr(U,ae,me){ae.isScene!==!0&&(ae=G);let ge=M.get(U),le=f.state.lights,Ce=f.state.shadowsArray,Ue=le.state.version,ke=Y.getParameters(U,le.state,Ce,ae,me),Be=Y.getProgramCacheKey(ke),qe=ge.programs;ge.environment=U.isMeshStandardMaterial?ae.environment:null,ge.fog=ae.fog,ge.envMap=(U.isMeshStandardMaterial?j:ce).get(U.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&U.envMap===null?ae.environmentRotation:U.envMapRotation,qe===void 0&&(U.addEventListener("dispose",Se),qe=new Map,ge.programs=qe);let Ze=qe.get(Be);if(Ze!==void 0){if(ge.currentProgram===Ze&&ge.lightsStateVersion===Ue)return el(U,ke),Ze}else ke.uniforms=Y.getUniforms(U),U.onBeforeCompile(ke,y),Ze=Y.acquireProgram(ke,Be),qe.set(Be,Ze),ge.uniforms=ke.uniforms;let Ge=ge.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ge.clippingPlanes=fe.uniform),el(U,ke),ge.needsLights=Uu(U),ge.lightsStateVersion=Ue,ge.needsLights&&(Ge.ambientLightColor.value=le.state.ambient,Ge.lightProbe.value=le.state.probe,Ge.directionalLights.value=le.state.directional,Ge.directionalLightShadows.value=le.state.directionalShadow,Ge.spotLights.value=le.state.spot,Ge.spotLightShadows.value=le.state.spotShadow,Ge.rectAreaLights.value=le.state.rectArea,Ge.ltc_1.value=le.state.rectAreaLTC1,Ge.ltc_2.value=le.state.rectAreaLTC2,Ge.pointLights.value=le.state.point,Ge.pointLightShadows.value=le.state.pointShadow,Ge.hemisphereLights.value=le.state.hemi,Ge.directionalShadowMap.value=le.state.directionalShadowMap,Ge.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ge.spotShadowMap.value=le.state.spotShadowMap,Ge.spotLightMatrix.value=le.state.spotLightMatrix,Ge.spotLightMap.value=le.state.spotLightMap,Ge.pointShadowMap.value=le.state.pointShadowMap,Ge.pointShadowMatrix.value=le.state.pointShadowMatrix),ge.currentProgram=Ze,ge.uniformsList=null,Ze}function Qc(U){if(U.uniformsList===null){let ae=U.currentProgram.getUniforms();U.uniformsList=is.seqWithValue(ae.seq,U.uniforms)}return U.uniformsList}function el(U,ae){let me=M.get(U);me.outputColorSpace=ae.outputColorSpace,me.batching=ae.batching,me.batchingColor=ae.batchingColor,me.instancing=ae.instancing,me.instancingColor=ae.instancingColor,me.instancingMorph=ae.instancingMorph,me.skinning=ae.skinning,me.morphTargets=ae.morphTargets,me.morphNormals=ae.morphNormals,me.morphColors=ae.morphColors,me.morphTargetsCount=ae.morphTargetsCount,me.numClippingPlanes=ae.numClippingPlanes,me.numIntersection=ae.numClipIntersection,me.vertexAlphas=ae.vertexAlphas,me.vertexTangents=ae.vertexTangents,me.toneMapping=ae.toneMapping}function Lu(U,ae,me,ge,le){ae.isScene!==!0&&(ae=G),B.resetTextureUnits();let Ce=ae.fog,Ue=ge.isMeshStandardMaterial?ae.environment:null,ke=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ai,Be=(ge.isMeshStandardMaterial?j:ce).get(ge.envMap||Ue),qe=ge.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,Ze=!!me.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Ge=!!me.morphAttributes.position,et=!!me.morphAttributes.normal,rt=!!me.morphAttributes.color,xt=Un;ge.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=y.toneMapping);let ht=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,at=ht!==void 0?ht.length:0,We=M.get(ge),dt=f.state.lights;if(H===!0&&(I===!0||U!==T)){let Pt=U===T&&ge.id===w;fe.setState(ge,U,Pt)}let it=!1;ge.version===We.__version?(We.needsLights&&We.lightsStateVersion!==dt.state.version||We.outputColorSpace!==ke||le.isBatchedMesh&&We.batching===!1||!le.isBatchedMesh&&We.batching===!0||le.isBatchedMesh&&We.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&We.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&We.instancing===!1||!le.isInstancedMesh&&We.instancing===!0||le.isSkinnedMesh&&We.skinning===!1||!le.isSkinnedMesh&&We.skinning===!0||le.isInstancedMesh&&We.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&We.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&We.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&We.instancingMorph===!1&&le.morphTexture!==null||We.envMap!==Be||ge.fog===!0&&We.fog!==Ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ze||We.morphTargets!==Ge||We.morphNormals!==et||We.morphColors!==rt||We.toneMapping!==xt||We.morphTargetsCount!==at)&&(it=!0):(it=!0,We.__version=ge.version);let Gt=We.currentProgram;it===!0&&(Gt=rr(ge,ae,le));let Si=!1,Wt=!1,rs=!1,pt=Gt.getUniforms(),$t=We.uniforms;if(k.useProgram(Gt.program)&&(Si=!0,Wt=!0,rs=!0),ge.id!==w&&(w=ge.id,Wt=!0),Si||T!==U){k.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",U.projectionMatrix),pt.setValue(D,"viewMatrix",U.matrixWorldInverse);let zt=pt.map.cameraPosition;zt!==void 0&&zt.setValue(D,te.setFromMatrixPosition(U.matrixWorld)),z.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&pt.setValue(D,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Wt=!0,rs=!0)}if(le.isSkinnedMesh){pt.setOptional(D,le,"bindMatrix"),pt.setOptional(D,le,"bindMatrixInverse");let Pt=le.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(D,"boneTexture",Pt.boneTexture,B))}le.isBatchedMesh&&(pt.setOptional(D,le,"batchingTexture"),pt.setValue(D,"batchingTexture",le._matricesTexture,B),pt.setOptional(D,le,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",le._indirectTexture,B),pt.setOptional(D,le,"batchingColorTexture"),le._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",le._colorsTexture,B));let Kt=me.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&pe.update(le,me,Gt),(Wt||We.receiveShadow!==le.receiveShadow)&&(We.receiveShadow=le.receiveShadow,pt.setValue(D,"receiveShadow",le.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&($t.envMap.value=Be,$t.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&ae.environment!==null&&($t.envMapIntensity.value=ae.environmentIntensity),Wt&&(pt.setValue(D,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Du($t,rs),Ce&&ge.fog===!0&&Q.refreshFogUniforms($t,Ce),Q.refreshMaterialUniforms($t,ge,W,he,f.state.transmissionRenderTarget[U.id]),is.upload(D,Qc(We),$t,B)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(is.upload(D,Qc(We),$t,B),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&pt.setValue(D,"center",le.center),pt.setValue(D,"modelViewMatrix",le.modelViewMatrix),pt.setValue(D,"normalMatrix",le.normalMatrix),pt.setValue(D,"modelMatrix",le.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){let Pt=ge.uniformsGroups;for(let zt=0,ha=Pt.length;zt<ha;zt++){let Qn=Pt[zt];ze.update(Qn,Gt),ze.bind(Qn,Gt)}}return Gt}function Du(U,ae){U.ambientLightColor.needsUpdate=ae,U.lightProbe.needsUpdate=ae,U.directionalLights.needsUpdate=ae,U.directionalLightShadows.needsUpdate=ae,U.pointLights.needsUpdate=ae,U.pointLightShadows.needsUpdate=ae,U.spotLights.needsUpdate=ae,U.spotLightShadows.needsUpdate=ae,U.rectAreaLights.needsUpdate=ae,U.hemisphereLights.needsUpdate=ae}function Uu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(U,ae,me){let ge=M.get(U);ge.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),M.get(U.texture).__webglTexture=ae,M.get(U.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:me,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ae){let me=M.get(U);me.__webglFramebuffer=ae,me.__useDefaultFramebuffer=ae===void 0};let Nu=D.createFramebuffer();this.setRenderTarget=function(U,ae=0,me=0){L=U,E=ae,P=me;let ge=!0,le=null,Ce=!1,Ue=!1;if(U){let Be=M.get(U);if(Be.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(D.FRAMEBUFFER,null),ge=!1;else if(Be.__webglFramebuffer===void 0)B.setupRenderTarget(U);else if(Be.__hasExternalTextures)B.rebindTextures(U,M.get(U.texture).__webglTexture,M.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Ge=U.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&M.has(Ge)&&(U.width!==Ge.image.width||U.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(U)}}let qe=U.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);let Ze=M.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ze[ae])?le=Ze[ae][me]:le=Ze[ae],Ce=!0):U.samples>0&&B.useMultisampledRTT(U)===!1?le=M.get(U).__webglMultisampledFramebuffer:Array.isArray(Ze)?le=Ze[me]:le=Ze,N.copy(U.viewport),O.copy(U.scissor),q=U.scissorTest}else N.copy(ye).multiplyScalar(W).floor(),O.copy(Re).multiplyScalar(W).floor(),q=Le;if(me!==0&&(le=Nu),k.bindFramebuffer(D.FRAMEBUFFER,le)&&ge&&k.drawBuffers(U,le),k.viewport(N),k.scissor(O),k.setScissorTest(q),Ce){let Be=M.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be.__webglTexture,me)}else if(Ue){let Be=ae;for(let qe=0;qe<U.textures.length;qe++){let Ze=M.get(U.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,me,Be)}}else if(U!==null&&me!==0){let Be=M.get(U.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,me)}w=-1},this.readRenderTargetPixels=function(U,ae,me,ge,le,Ce,Ue,ke=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=M.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){k.bindFramebuffer(D.FRAMEBUFFER,Be);try{let qe=U.textures[ke],Ze=qe.format,Ge=qe.type;if(!z.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=U.width-ge&&me>=0&&me<=U.height-le&&(U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(ae,me,ge,le,Ie.convert(Ze),Ie.convert(Ge),Ce))}finally{let qe=L!==null?M.get(L).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(U,ae,me,ge,le,Ce,Ue,ke=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=M.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(ae>=0&&ae<=U.width-ge&&me>=0&&me<=U.height-le){k.bindFramebuffer(D.FRAMEBUFFER,Be);let qe=U.textures[ke],Ze=qe.format,Ge=qe.type;if(!z.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,Ce.byteLength,D.STREAM_READ),U.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(ae,me,ge,le,Ie.convert(Ze),Ie.convert(Ge),0);let rt=L!==null?M.get(L).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,rt);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _h(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ce),D.deleteBuffer(et),D.deleteSync(xt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ae=null,me=0){let ge=Math.pow(2,-me),le=Math.floor(U.image.width*ge),Ce=Math.floor(U.image.height*ge),Ue=ae!==null?ae.x:0,ke=ae!==null?ae.y:0;B.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,me,0,0,Ue,ke,le,Ce),k.unbindTexture()};let Fu=D.createFramebuffer(),Bu=D.createFramebuffer();this.copyTextureToTexture=function(U,ae,me=null,ge=null,le=0,Ce=null){Ce===null&&(le!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=le,le=0):Ce=0);let Ue,ke,Be,qe,Ze,Ge,et,rt,xt,ht=U.isCompressedTexture?U.mipmaps[Ce]:U.image;if(me!==null)Ue=me.max.x-me.min.x,ke=me.max.y-me.min.y,Be=me.isBox3?me.max.z-me.min.z:1,qe=me.min.x,Ze=me.min.y,Ge=me.isBox3?me.min.z:0;else{let Kt=Math.pow(2,-le);Ue=Math.floor(ht.width*Kt),ke=Math.floor(ht.height*Kt),U.isDataArrayTexture?Be=ht.depth:U.isData3DTexture?Be=Math.floor(ht.depth*Kt):Be=1,qe=0,Ze=0,Ge=0}ge!==null?(et=ge.x,rt=ge.y,xt=ge.z):(et=0,rt=0,xt=0);let at=Ie.convert(ae.format),We=Ie.convert(ae.type),dt;ae.isData3DTexture?(B.setTexture3D(ae,0),dt=D.TEXTURE_3D):ae.isDataArrayTexture||ae.isCompressedArrayTexture?(B.setTexture2DArray(ae,0),dt=D.TEXTURE_2D_ARRAY):(B.setTexture2D(ae,0),dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ae.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ae.unpackAlignment);let it=D.getParameter(D.UNPACK_ROW_LENGTH),Gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Si=D.getParameter(D.UNPACK_SKIP_PIXELS),Wt=D.getParameter(D.UNPACK_SKIP_ROWS),rs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let pt=U.isDataArrayTexture||U.isData3DTexture,$t=ae.isDataArrayTexture||ae.isData3DTexture;if(U.isDepthTexture){let Kt=M.get(U),Pt=M.get(ae),zt=M.get(Kt.__renderTarget),ha=M.get(Pt.__renderTarget);k.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Qn=0;Qn<Be;Qn++)pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(U).__webglTexture,le,Ge+Qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(ae).__webglTexture,Ce,xt+Qn)),D.blitFramebuffer(qe,Ze,Ue,ke,et,rt,Ue,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);k.bindFramebuffer(D.READ_FRAMEBUFFER,null),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||M.has(U)){let Kt=M.get(U),Pt=M.get(ae);k.bindFramebuffer(D.READ_FRAMEBUFFER,Fu),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bu);for(let zt=0;zt<Be;zt++)pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,le,Ge+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,le),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,Ce,xt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,Ce),le!==0?D.blitFramebuffer(qe,Ze,Ue,ke,et,rt,Ue,ke,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(dt,Ce,et,rt,xt+zt,qe,Ze,Ue,ke):D.copyTexSubImage2D(dt,Ce,et,rt,qe,Ze,Ue,ke);k.bindFramebuffer(D.READ_FRAMEBUFFER,null),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?U.isDataTexture||U.isData3DTexture?D.texSubImage3D(dt,Ce,et,rt,xt,Ue,ke,Be,at,We,ht.data):ae.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,Ce,et,rt,xt,Ue,ke,Be,at,ht.data):D.texSubImage3D(dt,Ce,et,rt,xt,Ue,ke,Be,at,We,ht):U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ce,et,rt,Ue,ke,at,We,ht.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ce,et,rt,ht.width,ht.height,at,ht.data):D.texSubImage2D(D.TEXTURE_2D,Ce,et,rt,Ue,ke,at,We,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,it),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Si),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rs),Ce===0&&ae.generateMipmaps&&D.generateMipmap(dt),k.unbindTexture()},this.initRenderTarget=function(U){M.get(U).__webglFramebuffer===void 0&&B.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?B.setTextureCube(U,0):U.isData3DTexture?B.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?B.setTexture2DArray(U,0):B.setTexture2D(U,0),k.unbindTexture()},this.resetState=function(){E=0,P=0,L=null,k.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var js=new F;function sn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let c=.5*o/(o+a),h=1-js.angleTo(i)/l;return Math.sign(js[t])===1?h*c:a/(o+a)+c+c*(1-h)}var vn=class i extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,x=new F,m=.5/o;for(let f=0,S=0;f<u.length;f+=3,S+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,d[f+0]=c.x,d[f+1]=c.y,d[f+2]=c.z,Math.floor(f/g)){case 0:x.set(1,0,0),p[S+0]=sn(x,c,"z","y",r,n),p[S+1]=1-sn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[S+0]=1-sn(x,c,"z","y",r,n),p[S+1]=1-sn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[S+0]=1-sn(x,c,"x","z",r,e),p[S+1]=sn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[S+0]=1-sn(x,c,"x","z",r,e),p[S+1]=1-sn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[S+0]=1-sn(x,c,"x","y",r,e),p[S+1]=1-sn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[S+0]=sn(x,c,"x","y",r,e),p[S+1]=1-sn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var k0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},H0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function Bc(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((h,u)=>h-u).join(":");if(s.has(a))return null;s.add(a);let l=n[0]+(r%i+o%i)*t/2,c=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[l,c],ends:r%i===o%i?[[l-t/2,c],[l+t/2,c]]:[[l,c-t/2],[l,c+t/2]]}}).filter(Boolean)}function na({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!H0[o])throw Error("Unknown fence design");let a=k0[r];if(!a)throw Error("Unknown fence style");let l=new Ve;l.name="wood-fence";let c=Bc(i,e,{pitch:t,origin:n});l.userData={walls:c.map(f=>[f.a,f.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let h=new je({color:a.wood,roughness:.83}),u=new je({color:a.end,roughness:.8}),d=new je({color:a.grain,roughness:.95}),p=new je({color:"#665341",roughness:.7}),g=(f,S,_,y,C,E,P,L,w)=>{let T=new Oe(new vn(S,_,y,3,C),E);return T.position.set(P,L,w),T.castShadow=T.receiveShadow=!0,f.add(T),T},x=(f,S,_=.12)=>{let y=new Oe(new Ft(new Nt(S),16,_,4,!1),d);f.add(y)},m=new Map;for(let f of c){for(let[_,y]of f.ends){let C=_+":"+y;if(m.has(C))continue;let E=new Ve;if(E.name="fence-post",E.position.set(_,y,s-2),l.add(E),m.set(C,E),o==="logs"){let P=new Oe(new tn(3.25,3.65,34,18),h);P.rotation.x=Math.PI/2,P.position.z=17,P.castShadow=P.receiveShadow=!0,E.add(P);let L=new Oe(new ct(3.65,18,10),u);L.scale.z=.35,L.position.z=34,L.castShadow=!0,E.add(L)}else g(E,6.3,6.3,34,1.05,h,0,0,17),g(E,7.4,7.4,3.1,1.25,u,0,0,34);for(let P of[-1,1])for(let L=0;L<2;L++){let w=[];for(let T=0;T<=9;T++)w.push(new F(-1.7+L*2.5+Math.sin(T*.6+L)*.22,P*3.16,3+T*2.2));x(E,w,.1)}}let S=new Ve;if(S.name="fence-span",S.position.set(...f.center,s),f.a%i!==f.b%i&&(S.rotation.z=Math.PI/2),S.userData.cells=[f.a,f.b],l.add(S),o==="rails")for(let _ of[16,24]){g(S,t-4.5,4.2,5.1,.95,h,0,0,_);for(let y of[-1,1]){for(let E=0;E<2;E++){let P=[];for(let L=0;L<=12;L++){let w=-t/2+5+L*(t-10)/12;P.push(new F(w,y*2.12,_-.9+E*1.7+Math.sin(L*.65+_)*.2))}x(S,P,.1)}for(let E of[-t/2+5.8,t/2-5.8]){let P=new Oe(new ct(.56,8,6),p);P.scale.y=.3,P.position.set(E,y*2.28,_),S.add(P)}let C=[];for(let E=0;E<=24;E++){let P=E/24*Math.PI*2;C.push(new F(11+Math.cos(P)*1.6,y*2.14,_+Math.sin(P)*.65))}x(S,C,.1)}}else if(o==="picket"){for(let _ of[15,25])g(S,t-4.5,3.2,3.6,.8,h,0,1.2,_);for(let _=0;_<5;_++){let y=(_-2)*(t-14)/5,C=7.2,E=new vt;E.moveTo(-C/2,11),E.lineTo(C/2,11),E.lineTo(C/2,27),E.bezierCurveTo(C/2,32,-C/2,32,-C/2,27),E.closePath();let P=new Oe(new Zt(E,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),_%2?u:h);P.rotation.x=Math.PI/2,P.position.set(y,-.7,0),P.castShadow=P.receiveShadow=!0,S.add(P);for(let L of[15,25]){let w=new Oe(new ct(.48,8,6),p);w.scale.y=.3,w.position.set(y,-3.65,L),S.add(w)}x(S,[new F(y-1.2,-3.91,13),new F(y-1,-3.91,21),new F(y-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let E of[13,29])g(S,t-4.5,4,3.6,.8,h,0,0,E);let _=t-12,y=Math.atan2(16,_),C=Math.hypot(_,16);for(let E of[-1,1]){let P=new Ve;P.position.set(0,E*1.35,21),P.rotation.y=E*y,S.add(P),g(P,C,2.5,3.6,.75,u,0,0,0);for(let L of[-1,1])x(P,[new F(-C/2+2,L*1.27,-.5),new F(0,L*1.27,-.25),new F(C/2-2,L*1.27,-.55)],.1)}for(let E of[-1,1]){let P=new Oe(new ct(.65,10,8),p);P.scale.y=.3,P.position.set(0,E*2.75,21),S.add(P)}}else for(let _ of[16,26]){let y=new Oe(new tn(2.3,2.3,t-4.5,18),h);y.rotation.z=Math.PI/2,y.position.z=_,y.castShadow=y.receiveShadow=!0,S.add(y);for(let C of[-1,1])for(let E of[-.9,.9]){let P=[];for(let L=0;L<=12;L++)P.push(new F(-t/2+4+L*(t-8)/12,C*Math.sqrt(2.3**2-E**2),_+E+Math.sin(L*.7)*.1));x(S,P,.1)}}}return{group:l,edges:c,dispose(){let f=new Set,S=new Set;l.traverse(_=>{_.geometry&&f.add(_.geometry),_.material&&S.add(_.material)}),f.forEach(_=>_.dispose()),S.forEach(_=>_.dispose())}}}var V0={rails:{name:"Spatz",body:"#ad8a61",head:"#a88561",breast:"#e9d8b5",wing:"#81664c",tail:"#806347"},picket:{name:"Rotkehlchen",body:"#9d9474",head:"#a29370",breast:"#e8955c",wing:"#7d795e",tail:"#716c54"},cross:{name:"Blaumeise",body:"#d9d77d",head:"#80afca",breast:"#eee396",wing:"#74a6c2",tail:"#6592ab"},logs:{name:"Zaunk\xF6nig",body:"#b48c60",head:"#b8936b",breast:"#ead5ad",wing:"#946c46",tail:"#8e653f"}},ia=i=>(i=ot.clamp(i,0,1),i*i*(3-2*i));function G0({design:i="rails",seed:e=73,scale:t=.85}={}){let n=V0[i];if(!n)throw Error("Unknown bird design");let s=new Ve;s.name="fence-bird",s.userData={species:n.name,seed:e},s.scale.setScalar(t);let r=[],o=[],a=new ct(1,24,16);r.push(a);let l=$=>{let G=new je({color:$,roughness:.8});return o.push(G),G},c=l(n.body),h=l(n.head),u=l(n.breast),d=l(n.wing),p=l(n.tail),g=l("#3d332e"),x=l("#fff3d7"),m=l("#b28c4f");function f($,G,de,xe,D,X,Z,z){let k=new Oe(a,G);return k.position.set(de,xe,D),k.scale.set(X,Z,z),k.castShadow=k.receiveShadow=!0,$.add(k),k}let S=new Ve;s.add(S),f(S,c,0,0,6.5,4.8,5.7,5.5),f(S,u,0,-3.5,7,3.8,2.2,4);let _=[];for(let $ of[-1,1]){let G=f(S,d,$*3.9,.4,6.8,1.3,4.4,3.5);G.rotation.x=-.2,G.rotation.y=$*.15,_.push(G),i==="cross"&&f(S,x,$*4.6,-.3,7,.35,2.5,.45)}let y=new Ve;y.position.set(0,4.2,4.1),y.rotation.x=i==="logs"?.8:.2,S.add(y);for(let $ of[-1,0,1]){let G=f(y,p,$*.85,3.2,0,1.1,i==="logs"?3:4.5,.6);G.rotation.z=$*.1}let C=new Ve;if(C.position.set(0,-2,11.4),S.add(C),f(C,h,0,0,0,4.1,3.8,4),i==="cross"&&(f(C,x,0,-2.1,-.1,3.5,1.8,2.6),f(C,h,0,0,2.8,3.2,2.8,1.3)),i==="picket"&&f(C,u,0,-2.5,-1.4,3.3,1.4,2.6),i==="logs")for(let $ of[-1,1])f(C,x,$*2.7,-1.9,1.4,1.2,1,.35);let E=[];for(let $ of[-1,1]){let G=f(C,g,$*2.35,-3.03,.7,.82,.48,.94);E.push(G),f(C,x,$*2.35-.19,-3.45,1.02,.23,.12,.26)}let P=new Cs(.85,2.5,12);r.push(P);let L=new Oe(P,m);L.rotation.z=Math.PI,L.position.set(0,-4.2,-.4),L.castShadow=!0,C.add(L);for(let $ of[-1,1]){let G=new Nt([new F($*1.8,.1,2.3),new F($*1.8,-.2,.5),new F($*1.8,-1.6,.25)]),de=new Ft(G,10,.26,6,!1);r.push(de),s.add(new Oe(de,m));for(let xe of[-.5,.5])f(s,m,$*1.8+xe,-.8,.25,.22,1,.22)}let w=new Ve;w.name="bird-flight-rig";for(let $ of[...s.children])w.add($);s.add(w);let T=-100,N=null,O=0,q=3.5,ne=0,oe=null,re=0,he=0,W=!0,ue=-10,se=0,ye=3+e%7*.3;function Re(){return se-T<3.8+q||se-ue<3.8?!1:(ue=se,ye=se+22,!0)}function Le($){return se-T<3.8+q||se-ue<3.8?!1:(N=typeof $=="function"?$:$.clone(),O=0,oe=null,re=0,q=3.5+A(++ne+13)*4.5,s.userData.stayDuration=q,T=se,ye=se+q+24,!0)}function J(){let $=se-T;return!N||$<0||$>=1.8+q?!1:(oe=w.position.clone(),re=he,T=se-(1.8+q),!0)}let H=$=>($=ot.clamp($,0,1),$*$*$*($*($*6-15)+10));function I($){let G=oe||(typeof N=="function"?N():N),de=new F;w.rotation.z=O;let xe,D,X=0,Z=0;if($<1.8)D=H($/1.8),xe=new Ln(de,new F(G.x*.18-8,G.y*.18,24),new F(G.x*.85,G.y*.8,G.z+19),G),Z=Math.sin(Math.PI*ot.clamp($/1.8,0,1))*.75+.2;else if($<1.8+q){w.position.copy(G);let k=$-1.8;for(let B=0;B<5;B++){let ce=.5+B*1.45+A(ne*11+B)*.45,j=.19+A(B+22)*.1;ce<q-.3&&(X+=Math.exp(-(((k-ce)/j)**2))*(.75+A(B+ne)*.25))}let b=(A(ne+80)-.5)*Math.PI,M=Math.atan2(Math.sin(b-O),Math.cos(b-O));return O+=M*.025,w.rotation.z=O,{peck:X,flap:0}}else D=H(($-1.8-q)/2),xe=new Ln(G,new F(G.x-12,G.y*.72,G.z+30),new F(-10,8,17),de),Z=Math.sin(Math.PI*ot.clamp(($-1.8-q)/2,0,1))*.8+.15;w.position.copy(xe.getPoint(D));let z=xe.getTangent(D);if(Math.hypot(z.x,z.y)>.01){let k=Math.atan2(z.x,-z.y),b=Math.atan2(Math.sin(k-O),Math.cos(k-O));O+=b*.17,w.rotation.z=O}return w.rotation.x=-Z*.12,w.rotation.y=Math.sin($*1.6)*Z*.07,$>3.35+q&&(w.rotation.z*=1-H(($-3.35-q)/.45)),X=re*(1-H(($-1.8-q)/.25)),{peck:X,flap:Z}}let A=$=>{let G=Math.sin($*12.9898+e*78.233)*43758.5453;return G-Math.floor(G)};function te($){let G=Math.max(0,$);se=G,W&&G>=ye&&(ue=G,ye=G+20+(e+Math.floor(G))%7);let de=G-ue,xe=ot.clamp(de/3.6,0,1),D=de>=0&&de<3.6?Math.sin(Math.PI*xe)**2:0,X=D,Z=Math.sin(xe*Math.PI*2);w.position.set(X*38,Z*X*15,D*23);let z=ia((xe-.3)/.4)*(1-ia((xe-.84)/.16));w.rotation.set(-D*.12,Z*D*.1,z*Math.PI),s.userData.flightAge=de,s.userData.fluttering=D>0;let k=Math.floor(G/6.7),b=G%6.7,M=1.5+A(k)*2,B=ia((b-M)/.65)*(1-ia((b-M-1.1)/.8)),ce=(A(k+51)-.5)*.9,j=G-T,R=N&&j>=0&&j<3.8+q,v=0,V=D;if(R){let ie=I(j);v=ie.peck,V=ie.flap}he=v,s.userData.groundVisit=R?j:-1,C.rotation.z=ce*B,C.rotation.x=Math.sin(G*.8+e)*.025+B*.04,C.rotation.x+=v*.8,S.rotation.x=v*.82,S.scale.set(1+Math.sin(G*1.9+e)*.008,1,1+Math.sin(G*1.9+e)*.012);let Y=(G+A(7)*5)%5.4,Q=Y>4.9&&Y<5.04;E.forEach(ie=>ie.scale.z=Q?.15:.94);let ee=Math.exp(-(((b-5.8)/.22)**2))*Math.sin(G*35)*.045;_.forEach((ie,fe)=>ie.rotation.y=(fe?1:-1)*(.15+ee+V*(.45+Math.sin((R?j:de)*32)*.95))),y.rotation.z=Math.sin(G*.65+e)*.025}return te(0),{group:s,update:te,flutter:Re,landAndPeck:Le,returnToPerch:J,setAutoFlutter:$=>W=!!$,dispose(){r.forEach($=>$.dispose()),o.forEach($=>$.dispose())}}}function eu(i={}){let e=na(i),t=null;if(i.bird!==!1){let h=e.group.children.filter(u=>u.name==="fence-post").sort((u,d)=>u.position.y-d.position.y||u.position.x-d.position.x);h.length&&(t=G0({design:i.design||"rails",seed:i.seed||73}),t.group.position.copy(h[Math.min(h.length-1,Math.max(0,Math.floor(i.perchIndex||0)))].position),t.group.position.z+=35.6,e.group.add(t.group))}let n=8,s=null,r=0,o=!!(i.groundTarget||i.groundTargets);t&&o&&t.setAutoFlutter(!1);function a(){return i.groundTargets?i.groundTargets():i.groundTarget?[{cell:null,position:i.groundTarget()}]:[]}function l(){if(!t||!o)return!1;let h=a().filter(f=>f.position&&!i.isUnsafe?.(f.cell));if(!h.length)return!1;let u=h[((i.seed||73)+r*7)%h.length],d=new F(...u.position),p=[[-22,18],[22,18],[22,-18],[-22,-18]];if(u.center){let f=p[r%4];d.x+=f[0],d.y+=f[1]}let g=d.clone(),x=()=>{let f=a().find(_=>_.cell===u.cell),S=g.clone();return f?.position&&(S.z=f.position[2]),S.sub(t.group.position).divideScalar(t.group.scale.x)},m=t.landAndPeck(x);return m&&(s=u.cell,t.group.userData.landingCell=s,r++),m}let c=e.dispose;return{...e,bird:t,update:h=>{i.isUnsafe?.(s)&&t?.returnToPerch(),o&&i.autoGround!==!1&&h>=n&&(l()?n=h+28+r*13%15:n=h+5),t?.update(h)},flutter:()=>t?.flutter(),groundVisit:l,returnToPerch:()=>t?.returnToPerch(),dispose(){t&&(t.group.removeFromParent(),t.dispose()),c()}}}function tu({n:i=5,seed:e=73,flowerShare:t=40,clustering:n=75,cells:s=null}={}){let r=e,o=()=>(r=r*1664525+1013904223>>>0)/4294967296,a=["flowers","pearls","bouquet","bells","butterdots"],l=Math.floor(o()*a.length),c=[a[l],a[(l+1+Math.floor(o()*(a.length-1)))%a.length]],h=Array.from({length:3},(S,_)=>({x:o()*(i-1),y:o()*(i-1),kind:c[_%2]})),u=Math.min(1,Math.max(0,n/100)),d=["calm","classic","rich","tuft","moss","fine","cloverNest"],p=(s||Array.from({length:i*i},(S,_)=>_)).map(S=>{let _=S%i,y=Math.floor(S/i),C=h[0],E=1/0;for(let P of h){let L=Math.hypot(_-P.x,y-P.y);L<E&&(E=L,C=P)}return{i:S,score:(1-u)*o()+u*Math.exp(-E*E/3),kind:C.kind,visitor:o(),base:d[Math.floor(o()*d.length)]}}),g=Math.round(p.length*Math.min(100,Math.max(0,t))/100),x=new Set([...p].sort((S,_)=>_.score-S.score||S.i-_.i).slice(0,g).map(S=>S.i)),m=0,f=Array(i*i).fill(null);for(let S of p)f[S.i]=x.has(S.i)?S.visitor<.06&&m++<1?"flutter":S.visitor>=.06&&S.visitor<.12&&m++<1?"visitors":S.kind:S.base;return f}var Oc=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),zc={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function W0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new mn(t)}function Qs(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=zc[i];if(!n)throw Error("Unknown tile "+i);let s=new Ve,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=(p,g={})=>new je({color:p,roughness:.75,...g}),a=(p,g,x=0,m=0,f=0)=>{let S=new Oe(p,g);return S.position.set(x,m,f),S.castShadow=S.receiveShadow=!0,s.add(S),S},l=o(n.color,{bumpMap:W0(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),c=n.height+3.5,h,u;if(n.kind==="earth"){let p=73.5,g=5,x=-p/2,m=p/2,f=new vt;f.moveTo(x+g,x),f.lineTo(m-g,x),f.quadraticCurveTo(m,x,m,x+g),f.lineTo(m,m-g),f.quadraticCurveTo(m,m,m-g,m),f.lineTo(x+g,m),f.quadraticCurveTo(x,m,x,m-g),f.lineTo(x,x+g),f.quadraticCurveTo(x,x,x+g,x),f.closePath(),h=new Zt(f,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else h=new vn(78.5,78.5,c,4,7.5),u=(n.height-3.5)/2;let d=a(h,l,0,0,u);if(d.userData.surface=!0,!t)if(n.kind==="earth"){let p=[o("#c59b6b"),o("#98714c"),o("#dbb78a")];for(let g=0;g<n.pebbles;g++){let x=(r()-.5)*59,m=(r()-.5)*59,f=.8+r()*1.2,S=a(new ct(1,9,6),p[g%3],x,m,n.height-.25);S.scale.set(f*1.6,f,f*.55),S.rotation.z=r()*6}for(let g=0;g<22;g++){let x=a(new ct(1,8,6),l,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;x.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let p=[o("#d3f471"),o("#b1e443"),o("#87bf24")],g=(x,m,f)=>{let S=new vt;return S.moveTo(-f,0),S.quadraticCurveTo(-f*.8,x*.6,m,x),S.quadraticCurveTo(f*1.1,x*.45,f,0),S.closePath(),new Zt(S,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<n.tufts;x++){let m=(r()-.5)*59,f=(r()-.5)*59;for(let S=0;S<3;S++){let _=n.bladeHeight*(.6+r()*.4),y=a(g(_,(S-1)*_*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),p[S],m+(S-1)*1.8,f,n.height-.15);y.rotation.x=Math.PI/2,y.rotateOnWorldAxis(new F(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let x=0;x<6;x++){let m=(r()-.5)*50,f=(r()-.5)*50;for(let S=0;S<3;S++){let _=S*Math.PI*2/3,y=a(new ct(1,12,8),p[x%2],m+Math.cos(_)*2.3,f+Math.sin(_)*2.3,n.height+1.7);y.scale.set(3.3,2.6,.9),y.rotation.z=_}}l.emissive.set("#4c790c"),l.emissiveIntensity=.055}else{let p=o("#9fc53b");for(let g=0;g<4;g++){let x=g*Math.PI/2+.3,m=a(new ct(1,12,8),p,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=x}}return n.kind!=="earth"&&n.kind!=="reference"&&(l.emissive.set("#4c790c"),l.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:Oc},s}function er(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var kc={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function sa(i,{seed:e=73}={}){let t=kc[i];if(!t)throw Error("Unknown meadow "+i);let n=Qs("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(E=>E.userData.surface),r=new Ve;for(let E of[...n.children])E!==s&&r.add(E);er(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new ct(1,12,8),l=E=>new je({color:E,roughness:.75}),c=[l("#d3f471"),l("#b1e443"),l("#87bf24")],h=[],u=(E,P,L,w,T)=>{let N=new Oe(E,P);return N.position.set(L,w,T),N.castShadow=N.receiveShadow=!0,n.add(N),N};function d(E,P,L,w,T=3.3,N=2.6){let O=u(a,c[1],E,P,L);return O.scale.set(T,N,.85),O.rotation.z=w,O}for(let E=0;E<t.clover;E++){let P=(o()-.5)*52,L=(o()-.5)*52;for(let w=0;w<3;w++){let T=w*Math.PI*2/3+o()*.12;d(P+Math.cos(T)*2.3,L+Math.sin(T)*2.3,19.7,T)}}function p(E,P,L){for(let w=0;w<3;w++){let T=new vt,N=(w-1)*L*.35;T.moveTo(-1,0),T.quadraticCurveTo(-.8,L*.65,N,L),T.quadraticCurveTo(1,L*.45,1,0),T.closePath();let O=new Zt(T,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),q=u(O,c[w],E+(w-1)*1.6,P,17.8);q.rotation.x=Math.PI/2,q.rotateOnWorldAxis(new F(0,0,1),.6)}}for(let E=0;E<t.tufts;E++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=l("#fff3c4"),x=l("#f6b7a0"),m=l("#efb52e"),f=l("#709e29"),S=l("#edbd43"),_=l("#63502a"),y=new je({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let E=0;E<(t.flowers||0);E++){let P=E?-16:16,L=E?-14:12,w=E?24:25.5,T=u(new tn(.6,.85,w-18,8),f,P,L,(18+w)/2);T.rotation.x=Math.PI/2;for(let O=0;O<5;O++){let q=O*Math.PI*2/5,ne=u(a,E?x:g,P+Math.cos(q)*3,L+Math.sin(q)*3,w);ne.scale.set(3.2,1.8,.8),ne.rotation.z=q}if(u(a,m,P,L,w+.7).scale.set(1.9,1.9,1.2),d(P-2,L,20.5,-.5,3.2,1.4),t.insects)for(let O=0;O<t.insects;O++){let q=new Ve;n.add(q);let ne=new Oe(a,S);ne.scale.set(.85,1.3,.8),q.add(ne);let oe=new Oe(a,_);oe.position.y=1.2,oe.scale.setScalar(.6),q.add(oe);let re=[];for(let he of[-1,1]){let W=new Oe(a,y);W.position.set(he*1,0,.5),W.scale.set(1.8,.75,.25),W.rotation.z=he*.35,q.add(W),re.push(W)}h.push({insect:q,wings:re,x:P,y:L,phase:O*3.14,radius:8+O*2,z:w+5+O})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function C(E){for(let P of h){let L=E*.85+P.phase;P.insect.position.set(P.x+Math.cos(L)*P.radius,P.y+Math.sin(L)*P.radius*.65,P.z+Math.sin(E*1.8+P.phase)*1.2),P.insect.rotation.z=L,P.wings.forEach((w,T)=>w.rotation.y=Math.sin(E*28)*(T?1:-1)*.45)}}return C(0),{group:n,update:C,dispose(){er(n)}}}var X0={moss:{name:"Weiche Moospolster"},fine:{name:"Feine Wiesengr\xE4ser"},pearls:{name:"Kleine Wei\xDFbl\xFCten"},cloverNest:{name:"Kleeinseln"},flutter:{name:"Schmetterlingsbesuch"},bouquet:{name:"Bl\xFCtennest"},bells:{name:"Kleine Glockenblumen"},butterdots:{name:"Goldene Sternchen"}};function nu(i,{seed:e=73}={}){if(!X0[i])throw Error("Unknown meadow extra "+i);let t=sa(i==="cloverNest"?"calm":"classic",{seed:e}),n=t.group,s=e,r=()=>(s=s*1664525+1013904223>>>0)/4294967296,o=new ct(1,16,10),a=new je({color:"#b1e443",roughness:.85}),l=new je({color:"#d3f471",roughness:.85}),c=new je({color:"#fff3c4",roughness:.75}),h=new je({color:"#efb52e",roughness:.75});function u(d,p,g,x,m,f,S,_=0){let y=new Oe(o,d);return y.position.set(p,g,x),y.scale.set(m,f,S),y.rotation.z=_,y.castShadow=y.receiveShadow=!0,n.add(y),y}if(i==="moss")for(let[d,p]of[[-18,15],[17,-16]])for(let g=0;g<8;g++){let x=r()*6.28,m=r()*6;u(g%3?a:l,d+Math.cos(x)*m,p+Math.sin(x)*m,19.1,2.5+r()*1.5,2+r(),.8+r()*.6)}if(i==="fine")for(let[d,p]of[[-19,-15],[19,16],[-15,20]])for(let g=0;g<5;g++){let x=4+r()*4,m=(g-2)*1.5,f=new Nt([new F(d+g*.6,p,18.5),new F(d+g*.6+m*.35,p+.3,18.5+x*.7),new F(d+g*.6+m,p+1,18.5+x)]),S=new Ft(f,10,.3,5,!1),_=new Oe(S,g%2?a:l);_.castShadow=_.receiveShadow=!0,n.add(_)}if(i==="pearls")for(let[d,p]of[[-19,18],[-14,13],[18,-16]]){let g=d+(r()-.5)*5,x=p+(r()-.5)*5;u(a,g,x,20,.45,.45,2);for(let m=0;m<5;m++){let f=m*6.28/5;u(c,g+Math.cos(f)*1.8,x+Math.sin(f)*1.8,22,1.8,1,.55,f)}u(h,g,x,22.5,1,1,.7)}if(i==="cloverNest")for(let[d,p]of[[-17,15],[17,-15]])for(let g=0;g<4;g++){let x=g*2.4,m=2+g*1.4,f=d+Math.cos(x)*m,S=p+Math.sin(x)*m;for(let _=0;_<3;_++){let y=_*6.28/3;u(a,f+Math.cos(y)*2.1,S+Math.sin(y)*2.1,19.8+g*.08,3,2.4,.8,y)}}if(["bouquet","bells","butterdots"].includes(i)){let d=new je({color:"#efb7b0",roughness:.8}),p=new je({color:"#b7a4de",roughness:.8}),g=[[-22,17],[-13,20],[-18,8],[18,-15],[24,-9],[12,-22],[10,15]],x=5+Math.floor(r()*3),m=(r()-.5)*.38;for(let[f,[S,_]]of g.slice(0,x).entries()){let y=S*Math.cos(m)-_*Math.sin(m)+(r()-.5)*3,C=S*Math.sin(m)+_*Math.cos(m)+(r()-.5)*3,E=21.7+r()*2.2,P=r()*6.28,L=.85+r()*.25,w=n.children.length;if(u(a,y,C,20,.4,.4,2),i==="bells"){let N=u(p,y,C,E,2.3,2.3,2.5);for(let O=0;O<5;O++){let q=O*6.28/5+P;u(p,y+Math.cos(q)*1.8,C+Math.sin(q)*1.8,E-1.2,1.3,1,.65,q)}u(c,y,C,E-2.3,.7,.7,.4)}else{for(let N=0;N<(i==="butterdots"?5:7);N++){let O=N*6.28/(i==="butterdots"?5:7)+P;u(i==="butterdots"?h:f%2?d:c,y+Math.cos(O)*2.1,C+Math.sin(O)*2.1,E,2.2*L,1.2*L,.6,O)}u(h,y,C,E+.6,1.15,1.15,.7)}let T=new Ve;T.position.set(y,C,18);for(let N of n.children.slice(w))N.position.sub(T.position),T.add(N);T.rotation.set((r()-.5)*.14,(r()-.5)*.14,0),n.add(T)}}if(n.userData.meadowVariant=i,n.userData.decorationSeed=e,i==="flutter"){for(let[m,f]of[[-17,13],[18,-14]]){let S=m+(r()-.5)*5,_=f+(r()-.5)*5;for(let y=0;y<5;y++){let C=y*6.28/5;u(c,S+Math.cos(C)*2,_+Math.sin(C)*2,22,2,1.2,.6,C)}u(h,S,_,22.6,1.2,1.2,.8)}let d=new Ve;n.add(d);let p=new Oe(o,new je({color:"#775238",roughness:.8}));p.scale.set(.5,2,.5),d.add(p);let g=[];for(let m of[-1,1]){let f=new Ve;d.add(f);let S=new Oe(o,new je({color:"#f1c777",roughness:.75}));S.position.x=m*2,S.scale.set(2.8,2.2,.25),f.add(S),g.push({hinge:f,side:m})}let x=t.update;t.update=m=>{x(m),d.position.set(Math.sin(m*.43)*17,Math.sin(m*.69+.4)*13,28+Math.sin(m*.8)*2),d.rotation.z=Math.atan2(Math.cos(m*.69+.4)*13*.69,Math.cos(m*.43)*17*.43)-Math.PI/2;for(let{hinge:f,side:S}of g)f.rotation.y=S*(.25+Math.sin(m*14)*.65)},n.userData.animated=!0}if(i==="fine"){let d=n.children.filter(g=>g.geometry?.type==="TubeGeometry").map((g,x)=>({mesh:g,i:x})),p=t.update;t.update=g=>{p(g);for(let{mesh:x,i:m}of d)x.rotation.y=Math.sin(g*1.1+m*.45)*.045,x.rotation.x=Math.sin(g*.8+m*.3)*.025},n.userData.animated=!0}return t.update(0),t}var Hc=new WeakMap;function Vc(i){if(Hc.has(i))return Hc.get(i);let e=i.solution.filter(s=>!i.marks.includes(s)).sort((s,r)=>s-r),t=i.meadowSeed||[...i.id||"garden"].reduce((s,r)=>s*31+r.charCodeAt(0)>>>0,73),n=tu({n:i.n,seed:t,cells:e,flowerShare:40,clustering:75});for(let s of i.marks)n[s]="calm";return Hc.set(i,n),n}function iu(i,e){let t=Vc(i)[e]||"classic",n=(i.meadowSeed||73)+e*19,s=kc[t]?sa(t,{seed:n}):nu(t,{seed:n});if(["flowers","visitors"].includes(t)){let r=n%4*Math.PI/2;for(let o of s.group.children)if(!o.userData.surface){let a=o.position.x,l=o.position.y;o.position.set(a*Math.cos(r)-l*Math.sin(r),a*Math.sin(r)+l*Math.cos(r),o.position.z),o.rotation.z+=r}}return s}function su(i){if(!i.fence||!i.walls?.length)return null;let e=[...i.id||"garden"].reduce((l,c)=>l*31+c.charCodeAt(0)>>>0,73);if(e%4===0)return null;let t=Vc(i),n=new Set(["flowers","visitors","pearls","flutter","bouquet","bells","butterdots"]),s=new Map;for(let l of Bc(i.n,i.walls,{origin:[60,-60]}))for(let[c,h]of l.ends)s.set(c+":"+h,{x:c,y:h});let r=[...s.values()].sort((l,c)=>l.y-c.y||l.x-c.x),o=[...i.solution].sort((l,c)=>l-c),a=null;for(let[l,c]of r.entries()){let h=o.filter(u=>!i.marks.includes(u)&&!n.has(t[u])&&Math.hypot(u%i.n*80+60-c.x,-Math.floor(u/i.n)*80-60-c.y)<58);h.length&&(!a||h.length>a.cells.length)&&(a={seed:e,perchIndex:l,cells:h})}return a}function ru(i,e,t,n=!1){if(e==null)return!1;if(n||!i.solution.includes(e)||i.marks.includes(e))return!0;let s=t.at(-1)??i.marks[0];return Math.abs(s%i.n-e%i.n)+Math.abs(Math.floor(s/i.n)-Math.floor(e/i.n))<=1}function tr(i=-1,e="hops"){let t=d=>(d=Math.max(0,Math.min(1,d)),d*d*d*(d*(d*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="compact"){if(i>1.25)return n;let d=t(i/.22)*(1-t((i-.65)/.55));return{...n,active:!0,look:t(i/.55),happy:d,tuck:d*.6,lift:d*.25,pitch:-d*.018,roll:Math.sin(i*5)*d*.012,antenna:d*.18,squash:d*.008}}if(e==="gentle"){let d=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=d*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:d*1.35,happy:d,roll:p,pitch:-d*.035,squash:d*.012,antenna:d*.3+Math.sin(i*8)*d*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(d,p,g)=>{let x=(i-d)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(d,p)=>{let g=(i-d)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},l=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,c=a(.72,.3),h=a(1.35,.3),u=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:c*.055+h*.035+u*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:l*.65+r*.045,pitch:c*.035-r*.007-l*.013,roll:r*.005*Math.sin(i*3+.6)+l*.012}}function Gc(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,l=o<.66,c,h=0,u=0;if(l)c=-a/2+o/.66*a,u=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,x=g*g*(3-2*g);c=a/2-a*x,h=Math.sin(g*Math.PI)**1.25*1.8,u=-Math.sin(g*Math.PI)*.2}let d=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,d*d*(3-2*d));return{y:c*p,z:h*p,pitch:u*p,stance:l,phase:o,fade:p}}function Wc(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,l=0,c=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,u=h*h*(3-2*h);a=o/2-o*u,l=Math.sin(h*Math.PI)*1.3,c=-Math.sin(h*Math.PI)*.16}return{y:a,z:l,pitch:c,stance:r<.66,phase:r}}var ou=[{id:"apricot",name:"Aprikose",existing:!0,coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#dfa578",pattern:"solid",paws:"#dfa578",patternSize:1,patternStrength:1},{id:"coral",name:"Koralle",existing:!0,coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#e78f85",pattern:"solid",paws:"#e78f85",patternSize:1,patternStrength:1},{id:"lavender",name:"Lavendel",existing:!0,coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#a99bd0",pattern:"solid",paws:"#a99bd0",patternSize:1,patternStrength:1},{id:"lagoon",name:"Lagune",existing:!0,coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051",face:"#ffe5bd",cheeks:"#e69b88",antenna:"#ffe5bd",accent:"#75b9bf",pattern:"solid",paws:"#75b9bf",patternSize:1,patternStrength:1},{id:"pistachio",name:"Pistazie",coat:"#a4b875",root:"#81915a",tip:"#e8edbd",iris:"#82633e",face:"#fff0c9",cheeks:"#d8a28b",antenna:"#f0d99f",accent:"#eee6bd",pattern:"belly",paws:"#a4b875",patternSize:1,patternStrength:1},{id:"honey",name:"Honig",coat:"#dcb16b",root:"#b68b49",tip:"#ffe9b5",iris:"#598b91",face:"#fff0d5",cheeks:"#e8a18c",antenna:"#fff1ce",accent:"#f4dfb4",pattern:"belly",paws:"#dcb16b",patternSize:1,patternStrength:1},{id:"berry",name:"Waldbeere",coat:"#ae809e",root:"#875e7d",tip:"#edd0df",iris:"#7b9d8b",face:"#f6e4d2",cheeks:"#d5979c",antenna:"#e5c6d5",accent:"#d9aec1",pattern:"belly",paws:"#ae809e",patternSize:1,patternStrength:1},{id:"moon",name:"Mondblau",coat:"#819fb9",root:"#607a97",tip:"#d3e6ee",iris:"#b88e54",face:"#f1e8d7",cheeks:"#d5a7a1",antenna:"#e5e6c9",accent:"#b8d1db",pattern:"belly",paws:"#819fb9",patternSize:1,patternStrength:1},{id:"mocha",name:"Mokka",coat:"#9b7961",root:"#77543f",tip:"#e2c4a1",iris:"#729c91",face:"#f5e2bd",cheeks:"#d39780",antenna:"#e6cd9e",accent:"#634b45",pattern:"solid",paws:"#9b7961",patternSize:1,patternStrength:1},{id:"peach",name:"Pfirsichbl\xFCte",coat:"#e4ae9e",root:"#bc8b82",tip:"#ffe4cf",iris:"#749c9e",face:"#fff1da",cheeks:"#d78989",antenna:"#f5d898",accent:"#f6d6bd",pattern:"belly",paws:"#e4ae9e",patternSize:1,patternStrength:1},{id:"polar",name:"Wolkenfell",coat:"#c1c9ce",root:"#98a8b4",tip:"#f8f1df",iris:"#788fbe",face:"#fff4dc",cheeks:"#d9b0a8",antenna:"#ead8b0",accent:"#dce4e1",pattern:"belly",paws:"#c1c9ce",patternSize:1,patternStrength:1},{id:"dusk",name:"Abendrot",coat:"#a99ab7",root:"#83748e",tip:"#e7d9df",iris:"#bc985e",face:"#f7e5ca",cheeks:"#d5a0a1",antenna:"#eac58a",accent:"#e7d9df",pattern:"belly",paws:"#a99ab7",patternSize:1,patternStrength:1},{id:"reward-stardew",name:"Sternentau",coat:"#384663",root:"#253149",tip:"#7886a5",iris:"#cfaa63",face:"#f3dfbe",cheeks:"#c2999c",antenna:"#d9ba78",accent:"#edc66c",paws:"#d8c6a6",pattern:"speckles",patternSize:.65,patternStrength:.9,rewardStudy:!0},{id:"reward-cloverluck",name:"Kleegl\xFCck",coat:"#829867",root:"#61764e",tip:"#c2d2a0",iris:"#a1844d",face:"#ede4c4",cheeks:"#cd9f85",antenna:"#e2d39a",accent:"#4d6945",paws:"#e5d7b5",pattern:"spots",patternSize:.8,patternStrength:.55,rewardStudy:!0},{id:"reward-wildberry",name:"Wildbeere",coat:"#78516c",root:"#55394f",tip:"#b78ba4",iris:"#8eae99",face:"#ebd5c6",cheeks:"#ce8f9c",antenna:"#d9b8c9",accent:"#c6a2b3",paws:"#493c4e",pattern:"mask",patternSize:1,patternStrength:.8,rewardStudy:!0},{id:"reward-honeypaw",name:"Honigpfote",coat:"#ca9b59",root:"#a5743d",tip:"#efd09a",iris:"#6f9696",face:"#f3e2bf",cheeks:"#d69b7e",antenna:"#e7c77d",accent:"#775339",paws:"#71513e",pattern:"tail",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-moonflower",name:"Mondbl\xFCte",coat:"#d5cddc",root:"#aea4bf",tip:"#f6eeda",iris:"#83a9bb",face:"#fff0d7",cheeks:"#d6b0b7",antenna:"#e7d2a7",accent:"#ece1ce",paws:"#b2a6c2",pattern:"belly",patternSize:1,patternStrength:.75,rewardStudy:!0},{id:"reward-eveningfox",name:"Abendfuchs",coat:"#c37e52",root:"#985634",tip:"#edb77d",iris:"#759783",face:"#f6dfb7",cheeks:"#d3947d",antenna:"#e0be86",accent:"#f0d6aa",paws:"#58463b",pattern:"mask",patternSize:1,patternStrength:.9,rewardStudy:!0},{id:"reward-fern",name:"Farnschatten",coat:"#617c73",root:"#405d58",tip:"#a9c2ab",iris:"#c29a60",face:"#e9dfbf",cheeks:"#bc9d8b",antenna:"#dac995",accent:"#344f4a",paws:"#455a50",pattern:"stripes",patternSize:1.2,patternStrength:.65,rewardStudy:!0},{id:"reward-rosequartz",name:"Rosenquarz",coat:"#cda9b2",root:"#aa8296",tip:"#f2d9d1",iris:"#819c9e",face:"#fae9d7",cheeks:"#ce959e",antenna:"#ead3b2",accent:"#f1dfc8",paws:"#ab879c",pattern:"tail",patternSize:1.3,patternStrength:.7,rewardStudy:!0},{id:"reward-amber",name:"Bernstein",coat:"#b98543",root:"#8c5a2f",tip:"#ebc783",iris:"#799b8c",face:"#f4e2bb",cheeks:"#d79d7b",antenna:"#e8c77d",accent:"#6b4d38",paws:"#694b37",pattern:"spots",patternSize:.7,patternStrength:.7,rewardStudy:!0},{id:"reward-iceclover",name:"Eisklee",coat:"#a5c4c1",root:"#7faaa9",tip:"#e0eee0",iris:"#8e7aa8",face:"#f7edda",cheeks:"#d5b5af",antenna:"#e7d4aa",accent:"#e9e5c9",paws:"#7d9fa1",pattern:"speckles",patternSize:.75,patternStrength:.6,rewardStudy:!0},{id:"reward-plum",name:"Pflaumenbl\xFCte",coat:"#796780",root:"#58475f",tip:"#b4a2b8",iris:"#b7a071",face:"#f0e2d1",cheeks:"#c398a6",antenna:"#ddc6a4",accent:"#cfb4c3",paws:"#57455d",pattern:"saddle",patternSize:1.15,patternStrength:.65,rewardStudy:!0},{id:"reward-dandelion",name:"L\xF6wenzahn",coat:"#c6bc79",root:"#99935e",tip:"#ede4ac",iris:"#7c9d94",face:"#f6e8c4",cheeks:"#d3a48d",antenna:"#e8ce7d",accent:"#f1e8ce",paws:"#8a8160",pattern:"belly",patternSize:1.1,patternStrength:.8,rewardStudy:!0},{id:"tiger-study",name:"Tigerpfote",coat:"#cd9656",root:"#a5733f",tip:"#ecc38b",iris:"#8b9c71",face:"#f8e6c4",cheeks:"#cc9c89",antenna:"#e3c894",accent:"#49382e",paws:"#edddbf",pattern:"tiger",patternSize:1,patternStrength:.9},{id:"leopard-study",name:"Leopardenpfote",coat:"#ccab70",root:"#a88750",tip:"#edd3a0",iris:"#8a9a68",face:"#f4e6cb",cheeks:"#c59c86",antenna:"#d9c18d",accent:"#48372b",paws:"#e6d4ae",pattern:"leopard",patternSize:1,patternStrength:.95},{id:"custom-294bf96b-4311-45f4-a97f-9f0725105857",name:"Red",existing:!1,coat:"#f9061f",root:"#f9061f",tip:"#f9061f",iris:"#428f8d",face:"#e1dfdb",cheeks:"#e1dfdb",antenna:"#ffe5bd",accent:"#f9061f",pattern:"saddle",paws:"#f9061f",patternSize:1,patternStrength:1},{id:"custom-0c185d09-cfd9-4664-a19c-11bbee73c4a1",name:"White",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#e49ab4",accent:"#ffffff",pattern:"belly",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-cd20f8f9-aaf8-416c-bf05-d8c1b5ac6598",name:"Black",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#fffff5",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#ffffff",pattern:"solid",paws:"#ffffff",patternSize:1.1,patternStrength:.8},{id:"custom-dc02a2ea-1078-4736-8a1c-9cdf1f8c8492",name:"Mein Nurbi 7",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e1dfdb",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"stripes",paws:"#ffffff",patternSize:.5,patternStrength:1},{id:"custom-98e141bc-ffcb-48fb-9442-0528ca7cb103",name:"Blacktail",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#e49ab4",antenna:"#0d0d0d",accent:"#0d0d0d",pattern:"tail",paws:"#ffffff",patternSize:.75,patternStrength:1},{id:"custom-8d5a3bda-48c2-4f5e-8df2-594c54a0b0d1",name:"Tiger",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.85,patternStrength:1},{id:"custom-4c0450df-de84-4ca8-9532-5cf667d92736",name:"Barnhold",existing:!1,coat:"#ff8c00",root:"#55554e",tip:"#ff8c00",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"tiger",paws:"#ffffff",patternSize:.6,patternStrength:1},{id:"custom-a308614f-d7a5-4ac5-a8d7-1fd7967999b4",name:"Leopard schwarz",existing:!1,coat:"#1f1f1e",root:"#1f1f1e",tip:"#1f1f1e",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#ffffff",pattern:"leopard",paws:"#1f1f1e",patternSize:.8,patternStrength:1},{id:"custom-b6960ff9-f026-4c87-98c8-d028d13660f3",name:"Leopard",existing:!1,coat:"#ff8800",root:"#ff8800",tip:"#ff8800",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1},{id:"custom-74506dd4-e667-4d4b-a574-ca2129e1e2cb",name:"Schneeleopard",existing:!1,coat:"#ffffff",root:"#ffffff",tip:"#ffffff",iris:"#428f8d",face:"#ffffff",cheeks:"#fd8aff",antenna:"#1f1f1e",accent:"#1f1f1e",pattern:"leopard",paws:"#ffffff",patternSize:1,patternStrength:1}];var lu=[];for(let i=0;i<4;i++)for(let e=0;e<5;e++){let t=i*5+e,n=Math.sin(t*13.13+2.1);lu.push({u:(e-2)*5.5+i%2*1.8+n*.75,v:4+i*7+Math.cos(t*7.7)*1.1,rx:1.85+(Math.sin(t*5.1)+1)*.38,ry:1.65+(Math.cos(t*4.3)+1)*.5,angle:n*.8,phase:t*2.37,gap:.3+(Math.sin(t*3.7)+1)*.18})}var hu=[];for(let i=0;i<4;i++)for(let e=0;e<8;e++){let t=i*8+e,n=e*Math.PI/4+i%2*.24+.07*Math.sin(t*4.7),s=.12+i*.36+.04*Math.cos(t*3.1);hu.push({x:Math.cos(n)*Math.cos(s),y:Math.sin(n)*Math.cos(s),z:Math.sin(s),radius:.105+.045*(1+Math.sin(t*7.3))*.5})}var au=[[5.8,2.7,1.95,1.25],[15.8,2.25,-2.1,1.6],[25.1,1.9,1.15,1.38]];function cu(i,e,t,n){let s=i.patternSize??1,r=i.patternStrength??1,o=ot.smoothstep,a=0;if(i.pattern==="belly"){let l=o(-t,11/s,19/s)*(1-o(n,18*s,23*s)),c=(1-o(n,7*s,13*s))*o(t,-4,4);a=Math.max(l,c)*.82}if(i.pattern==="saddle"&&(a=(1-o(Math.abs(e),3*s,8*s))*o(t,-1,9)*o(n,9,17)*.85),i.pattern==="stripes"&&(a=(1-o(Math.abs(Math.sin((t-3)/(3.3*s)+e*.025)),.3,.6))*o(t,-4,5)*o(n,5,12)),i.pattern==="tiger"){let l=e<0?-1:1,c=9-4*o(t,12,29),h=Math.atan2(Math.abs(e),(n-c)*1.12);for(let E=0;E<au.length;E++){let[P,L,w,T]=au[E],N=T+(l<0?[.15,-.12,.18][E]:0),O=h/N;if(O>=1)continue;let q=l<0?[-.15,.25,-.1][E]:0,ne=P+q*Math.sin(h)+w*(.2*O+.8*O*O),oe=L*s*Math.pow(1-O*O,.7),re=1-o(Math.abs(t-ne),oe*.67,oe);a=Math.max(a,re*(1-o(O,.8,1)))}a*=o(t,2,4)*o(n,5,9);let u=Math.abs(e),d=1-o(t,-2,1),p=o(u,8.7,11)*(1-o(u,14,16)),g=(t+15)/12,x=o(g,0,.2)*(1-o(g,.78,1)),m=0;for(let E of[18.8,23.8]){let P=E+.9*Math.sin(g*2.4)+(e<0?.2:0),L=.8*s*(.5+.5*Math.sin(Math.max(0,Math.min(1,g))*Math.PI));m=Math.max(m,(1-o(Math.abs(n-P),L*.5,L))*x*p)}let f=30.2+u*.4,S=(1-o(u,3.2,4.6))*(1-o(Math.abs(n-f),.5*s,1.15*s))*(1-o(t,-9,-5)),_=o((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25),y=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),C=t<-10?o(y,1,1.2):1;a=Math.max(a,Math.max(m,S)*d*_*C*.9)}if(i.pattern==="leopard"){let l=9-4*o(t,12,29),c=Math.atan2(e,(n-l)*1.12)*9;if(t>0&&n>5){let h=s*(1-.25*o(t,21,29));for(let u of lu){let d=c-u.u,p=t-u.v;if(Math.abs(d)>u.rx*h*1.7||Math.abs(p)>u.ry*h*1.7)continue;let g=Math.cos(u.angle),x=Math.sin(u.angle),m=(d*g-p*x)/(u.rx*h),f=(d*x+p*g)/(u.ry*h),S=Math.atan2(f,m),_=Math.hypot(m,f)/(1+.12*Math.sin(S*3+u.phase)+.065*Math.cos(S*5-u.phase)),y=o(_,.51,.69)*(1-o(_,1,1.17)),C=Math.abs(Math.atan2(Math.sin(S-u.phase),Math.cos(S-u.phase))),E=o(C,u.gap,u.gap+.24);a=Math.max(a,Math.max(y*E,(1-o(_,.3,.62))*.12))}a*=o(t,0,3)*o(n,5,9)}if(t<3&&n>12){let h=0,u=e/13.1,d=(t+8)/11.5,p=(n-20)/12.2,g=Math.hypot(u,d,p);if(g>.1)for(let S of hu){let _=1-(u*S.x+d*S.y+p*S.z)/g,y=S.radius*s;h=Math.max(h,1-o(_,y*y*.2,y*y*.58))}let x=Math.min(((e-5.6)/5)**2+((n-23.4)/5.6)**2,((e+5.6)/5)**2+((n-23.4)/5.6)**2),m=t<-10?o(x,1,1.2):1,f=o((e/6.5)**2+((n-16.5)/3.8)**2,1,1.25);a=Math.max(a,h*m*f*(1-o(t,1,3)))}}if(i.pattern==="spots"||i.pattern==="speckles"){let l=i.pattern==="speckles",c=l?5.2:11,h=(l?1.25:3.8)*s,u=Math.round(t/c),d=Math.round((e-u%2*c*.5)/c)*c+u%2*c*.5,p=u*c+Math.sin(u*2.7+d)*c*.12,g=Math.hypot(e-d,t-p);a=(1-o(g,h*.5,h))*o(t,-5,3)*o(n,6,13)}return i.pattern==="mask"&&(a=o(-t,11,16)*(1-o(Math.abs(e),8*s,13*s))*o(n,15,21)),i.pattern==="tail"&&(a=o(t,31-7*s,34-3*s)),Math.max(0,Math.min(1,a*r))}function Xc(i,e){let t=i.group.getObjectByName("curved-soft-fur"),n=t.geometry,s=n.attributes.color.array,r=new He("#d5a078"),o=new He("#ffe2b9"),a=e||new Float32Array(s.length/3),l=[],c=[],h={};if(!e)for(let p=0;p<a.length;p++)a[p]=(s[p*3]-r.r)/(o.r-r.r);i.group.traverse(p=>{if(!p.isMesh)return;let g="#"+p.material.color.getHexString();g==="#dfa578"&&(h.coat=p.material),g==="#428f8d"&&(h.iris=p.material),g==="#ffe5bd"&&(h.face=p.material),g==="#e69b88"&&(h.cheeks=p.material),p.parent.name==="soft-curved-antenna"&&g==="#ffe5bd"&&(p.material=p.material.clone(),h.antenna=p.material),p.name==="original-body-part"&&(p.material=p.material.clone(),p.material.color.set("#ffffff"),p.material.vertexColors=!0,p.geometry.setAttribute("color",new Je(new Float32Array(p.geometry.attributes.position.count*3),3)),l.push(p))}),i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-paw"&&(p.material=p.material.clone(),c.push(p.material))});let u=[];i.group.traverse(p=>{p.isMesh&&p.parent.name==="soft-curved-antenna"&&p.material!==h.coat&&u.push(p.material)});function d(p){c.forEach(E=>E.color.set(p.paws||p.coat));for(let E of["coat","iris","face","cheeks"])h[E].color.set(p[E]);u.forEach(E=>E.color.set(p.antenna));let g=p.pattern!=="solid",x=new He(p.root),m=new He(p.tip),f=new He(p.accent),S=new He(p.coat),_=new He,y=n.attributes.position,C=n.attributes.color;for(let E=0;E<y.count;E++)_.copy(x).lerp(m,a[E]),g&&_.lerp(f,cu(p,y.getX(E),y.getY(E),y.getZ(E))),C.setXYZ(E,_.r,_.g,_.b);C.needsUpdate=!0;for(let E of l){let P=E.geometry.attributes.position,L=E.geometry.attributes.color;for(let w=0;w<P.count;w++)_.copy(S),g&&_.lerp(f,cu(p,P.getX(w)*E.scale.x+E.position.x,P.getY(w)*E.scale.y+E.position.y,P.getZ(w)*E.scale.z+E.position.z)),L.setXYZ(w,_.r,_.g,_.b);L.needsUpdate=!0}}return{...i,apply:d}}var Y0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}},uu={...Y0,...Object.fromEntries(ou.map(i=>[i.id,i]))};function fu({seed:i=913,presentation:e="ground"}={}){let t=new Ve,n=new Ve,s=new Ve;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(z,k=.8)=>new je({color:z,roughness:k}),a=o("#dfa578"),l=o("#ffe5bd"),c=o("#e69b88"),h=o("#302529",.3),u=o("#fff9e7",.3),d=o("#428f8d",.35);function p(z,k,b,M,B,ce,j,R){let v=new Oe(new ct(1,40,28),k);return v.position.set(b,M,B),v.scale.set(ce,j,R),v.castShadow=v.receiveShadow=!0,z.add(v),v}let g=e==="peek"?22e3:44e3,x=g*20;function m(z,k){let b=new z(k),M=0;return{push(...B){for(let ce=0;ce<B.length;ce++)b[M++]=B[ce]},get length(){return M},view(){return b.subarray(0,M)}}}let f=m(Float64Array,x),S=m(Float32Array,x*3),_=m(Float32Array,x*3),y=m(Float32Array,x*3),C=m(Float32Array,x*2),E=m(Uint32Array,g*48),P=new He("#d5a078"),L=new He("#ffe2b9");function w(z,k,b,M,B=!1){let ce=p(s,a,...z,...k);ce.name="original-body-part",ce.userData.bodyCenter=[...z],ce.userData.bodyRadii=[...k];for(let j=0;j<b;j++){let R=r()*2-1,v=r()*Math.PI*2,V=Math.sqrt(1-R*R),Y=new F(V*Math.cos(v),V*Math.sin(v),R),Q=new F(Y.x*k[0],Y.y*k[1],Y.z*k[2]).add(new F(...z));if(Q.z<1)continue;let ee=B&&Y.y<-.4;if(ee){let Ie=[-5.6,5.6].some(ze=>((Q.x-ze)/4.6)**2+((Q.z-23.4)/5.2)**2<1),Te=(Q.x/5.9)**2+((Q.z-16.5)/3.3)**2<1;if(Ie||Te)continue}let ie=new F(Y.x/k[0],Y.y/k[1],Y.z/k[2]).normalize(),fe=new F(0,0,1);Math.abs(ie.z)>.9&&fe.set(1,0,0);let be=new F().crossVectors(ie,fe).normalize(),_e=new F(Y.x*.45,Y.y*.35,-.46),pe=M*(ee?.2:1)*(.6+r()*.65),Me=.075+r()*.13,we=r()*.22;for(let Ie=0;Ie<2;Ie++){let Te=Ie?new F().crossVectors(ie,be).normalize():be,ze=S.length/3;for(let K=0;K<=4;K++){let Ee=K/4,Pe=pe*Ee*.88,Ne=pe*Ee*Ee*.9,Ae=Q.x+ie.x*Pe+_e.x*Ne,Se=Q.y+ie.y*Pe+_e.y*Ne,Fe=Q.z+ie.z*Pe+_e.z*Ne,Xe=Me*(1-Ee*.93),tt=.28+Ee*.58+we;for(let Qe of[-1,1]){let Tt=Xe*Qe;S.push(Ae+Te.x*Tt,Se+Te.y*Tt,Math.max(.2,Fe+Te.z*Tt)),_.push(ie.x,ie.y,ie.z),y.push(P.r+(L.r-P.r)*tt,P.g+(L.g-P.g)*tt,P.b+(L.b-P.b)*tt),f.push(tt),C.push(Qe===-1?0:1,Ee)}}for(let K=0;K<4;K++){let Ee=ze+K*2;E.push(Ee,Ee+1,Ee+2,Ee+1,Ee+3,Ee+2)}}}}e!=="peek"&&(w([0,6,10],[10.5,15,9.7],15200,3.3),w([0,19,6],[7.4,9,5.7],4600,2.9),w([1,26,4],[4.7,7,3.4],2200,2.5));let T=E.length,N=new Ve;N.name="complete-lift-skull",s.add(N);let O=new Ve;N.add(O),w([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0),N.add(s.children.find(z=>z.userData.bodyCenter?.[1]===-8));let q=[],ne=[],oe=[],re=[];for(let[z,k]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let b=new Ve;b.name="soft-paw",b.userData.home={x:z,y:k},b.position.set(z,k,1.35),b.rotation.z=z<0?-.13:.13,n.add(b);let M=new ct(1,40,28),B=M.attributes.position;for(let v=0;v<B.count;v++){let V=B.getX(v),Y=B.getY(v),Q=B.getZ(v),ee=2.15*(1-.22*Math.max(0,Y)),ie=Y<-.35?.09*Math.cos(V*Math.PI*2.4)*-Y:0;B.setXYZ(v,V*ee,Y*3.4-ie,Math.max(-1.3,Q*1.35)+Math.max(0,Y)*.45)}M.computeVertexNormals();let ce=new Oe(M,a);ce.castShadow=ce.receiveShadow=!0,b.add(ce);let j=p(n,a,0,0,0,1,1,1);j.name="rigid-upper-leg",oe.push(j);let R=p(n,a,0,0,0,1,1,1);R.name="rigid-lower-leg",re.push(R),ne.push(new F(z*.86,k+1.4,6.1)),q.push(b)}let he=(z,k)=>-8-11.5*Math.sqrt(Math.max(.025,1-(z/13.1)**2-((k-20)/12.2)**2));function W(z,k,b,M,B,ce,j){let R=[],v=[];for(let ie=0;ie<=12;ie++)for(let fe=0;fe<=64;fe++){let be=ie/12,_e=fe/64*Math.PI*2,pe=Math.cos(_e)*B*be,Me=Math.sin(_e)*ce*be;R.push(pe,he(b+pe,M+Me)-j-.27*(1-be*be),Me)}for(let ie=0;ie<12;ie++)for(let fe=0;fe<64;fe++){let be=ie*65+fe,_e=be+64+1;v.push(be,_e,be+1,be+1,_e,_e+1)}let Q=new lt;Q.setAttribute("position",new Je(R,3)),Q.setIndex(v),Q.computeVertexNormals();let ee=new Oe(Q,k);return ee.position.set(b,0,M),z.add(ee),ee}let ue=new Ve;ue.name="happy-crescent-eyes",O.add(ue),ue.visible=!1;for(let z of[-1,1]){let k=[];for(let b=0;b<=20;b++){let M=z*5.6+(b/20-.5)*5.3,B=23.3+Math.sin(b/20*Math.PI)*1.35;k.push(new F(M,he(M,B)-.3,B))}ue.add(new Oe(new Ft(new Nt(k),24,.3,7,!1),h))}let se=[];for(let z of[-1,1]){let k=z*5.6,b=23.4,M=new Ve;M.name="embedded-eye",O.add(M),W(M,l,k,b,3.95,4.7,.11),W(M,d,k,b-.1,2.65,3.25,.3),W(M,h,k,b+.1,1.75,2.45,.49),p(M,u,k-.8,he(k-.8,b+1.5)-.78,b+1.5,.72,.2,.82),p(M,u,k+.65,he(k+.65,b-.65)-.78,b-.65,.26,.16,.3),se.push(M);let B=[];for(let j=0;j<=64;j++){let R=j/64*Math.PI*2,v=k+Math.cos(R)*4.05,V=b+Math.sin(R)*4.8;B.push(new F(v,he(v,V)-.05,V))}O.add(new Oe(new Ft(new Nt(B),80,.37,8,!1),a)),p(O,c,z*8.3,-17.2,16,2.05,.5,1.05);let ce=[];for(let j=0;j<=12;j++){let R=z*5.6+(j/12-.5)*4.5,v=28.7+Math.sin(j/12*Math.PI)*.65;ce.push(new F(R,he(R,v)-.14,v))}O.add(new Oe(new Ft(new Nt(ce),16,.26,6,!1),a))}p(O,l,0,-18.9,16.4,5.2,1.7,2.7),p(O,c,0,-20.6,17.7,1.65,1.05,1.1);let ye=[];for(let z=0;z<=20;z++){let k=(z/20-.5)*6.6;ye.push(new F(k,-20.35+Math.abs(k)*.14,14.7+.105*k*k))}let Re=new Oe(new Ft(new Nt(ye),24,.22,6,!1),h);O.add(Re);let Le=[];for(let z of[-1,1]){let j=function(R,v=!1,V=0){let Y=Math.sin(R*1.4+z*.7),Q=Math.sin(R*2.2+z)*.12;b.v2.set(z*(1.7+Y*.35),-1.4+Q,11.4),b.v3.set(z*(5.2+Y*.55+V),-1.9+Math.sin(R*1.2+z)*.35,10.2+Q+V*.4+(v?Math.sin(R*5+z)*.15:0));let ee=b.computeFrenetFrames(26,!1),ie=M.attributes.position,fe=M.attributes.normal;for(let be=0;be<=26;be++){let _e=be/26,pe=b.getPoint(_e),Me=.44*(1-_e)+.23*_e;for(let we=0;we<=8;we++){let Ie=we/8*Math.PI*2,Te=ee.normals[be].clone().multiplyScalar(-Math.cos(Ie)).addScaledVector(ee.binormals[be],Math.sin(Ie)),ze=pe.clone().addScaledVector(Te,Me),K=be*9+we;ie.setXYZ(K,ze.x,ze.y,ze.z),fe.setXYZ(K,Te.x,Te.y,Te.z)}}ie.needsUpdate=fe.needsUpdate=!0,M.computeBoundingSphere(),ce.position.copy(b.v3)},k=new Ve;k.name="soft-curved-antenna",k.position.set(z*6.7,-5,30),N.add(k);let b=new Ln(new F,new F(z*.25,-.2,4.6),new F(z*1.7,-1.4,11.4),new F(z*5.2,-1.9,10.2)),M=new Ft(b,26,.4,8,!1),B=new Oe(M,a);k.add(B);let ce=p(k,l,z*5.2,-1.9,10.2,1.65,1.65,1.9);j(0),Le.push({group:k,flex:j})}let J=new lt;J.setAttribute("position",new yt(S.view(),3)),J.setAttribute("normal",new yt(_.view(),3)),J.setAttribute("color",new yt(y.view(),3)),J.setAttribute("uv",new yt(C.view(),2)),J.setIndex(new yt(E.view(),1));let H=f.view(),I=new Uint8Array(2048*4);for(let z=0;z<64;z++)for(let k=0;k<32;k++){let b=(z*32+k)*4,M=Math.abs((k+.5)/32*2-1),B=Math.round(255*Math.pow(1-M,.55)*(1-.75*Math.pow(z/63,4)));I[b]=I[b+1]=I[b+2]=B,I[b+3]=255}let A=new Yn(I,32,64);A.needsUpdate=!0,A.magFilter=A.minFilter=Dt;let te=new je({vertexColors:!0,alphaMap:A,transparent:!0,opacity:.85,depthWrite:!1,side:Vt,roughness:1}),$=new Oe(J,te);$.name="curved-soft-fur",$.frustumCulled=!1,s.add($),J.setDrawRange(0,T);let G=new lt;for(let[z,k]of Object.entries(J.attributes))G.setAttribute(z,k);G.setIndex(J.index),G.setDrawRange(T,E.length-T);let de=new Oe(G,te);de.name="complete-skull-fur",de.frustumCulled=!1,N.add(de);let xe;function D(z){let k=uu[z];if(!k)throw Error("Unknown creature palette "+z);xe??=Xc({group:t},H),xe.apply(k),t.userData.palette=z}let X=new Ve;X.name="completion-pollen",X.visible=!1,t.add(X);let Z=new ct(.32,8,6);for(let z=0;z<9;z++){let k=new Oe(Z,new je({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));X.add(k)}return D("apricot"),{group:t,setPalette:D,update(z,k=0,b={}){let M=tr(b.celebrationAge??-1,b.celebrationStyle),B=!M.active&&(b.active??(k>0&&k<1));n.position.z=M.lift,n.rotation.x=M.pitch,n.rotation.y=M.roll+M.turnStep*Math.sin((b.celebrationAge??0)*16)*.018,n.scale.set(1+M.squash*.4,1+M.squash*.4,1-M.squash),ue.visible=M.happy>.55,se.forEach(ee=>ee.visible=!ue.visible),Re.scale.x=1+M.happy*.18,X.visible=M.pollen>0,X.children.forEach((ee,ie)=>{let fe=Math.min(1.8,Math.max(0,(b.celebrationAge??0)-1.5)),be=ie*2.4;ee.position.set(Math.cos(be)*(9+fe*3)+Math.sin(fe*2+ie)*.7,Math.sin(be)*(8+fe*3),8+fe*(8+ie*.4)),ee.material.opacity=M.pollen*(.5+ie%3*.12)}),s.position.z=Math.sin(z*2)*.13+(B?Math.sin(k*Math.PI*16)*.22:0),s.rotation.y=B?Math.sin(k*Math.PI*16)*.012:Math.sin(z*.8)*.012,O.rotation.set(0,0,0),se.forEach(ee=>{ee.scale.set(1,1,1),ee.position.set(0,0,0)}),q.forEach((ee,ie)=>{let fe=ee.userData.home,be=(b.celebrationAge??0)*17+ie*Math.PI/2,_e=M.turnStep*Math.max(0,Math.sin(be))*1.25,pe=B?b.travel!==void 0?Wc(b.travel,ie,t.scale.x):Gc(b.progress??k,ie,{distance:b.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};ee.position.set(fe.x+M.turnStep*Math.cos(be)*.65,fe.y+pe.y+M.turnStep*Math.sin(be)*.65+(M.active?Math.sin((b.celebrationAge??0)*7+ie*Math.PI/2)*M.tuck*.5:0),1.35+pe.z+_e+M.tuck*(ie<2?1:b.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((b.celebrationAge??0)*4+ie*1.6)*.12)),ee.rotation.x=pe.pitch-M.tuck*(ie<2?.08:.035);let Me=ne[ie].clone();Me.z+=s.position.z;let we=new F(ee.position.x,ee.position.y+.65,ee.position.z+1.05),Ie=we.clone().sub(Me),Te=Math.min(6.95,Math.max(.6,Ie.length()));Ie.normalize(),we.copy(Me).addScaledVector(Ie,Te),ee.position.copy(we).add(new F(0,-.65,-1.05));let ze=3.8,K=3.4,Ee=(ze*ze-K*K+Te*Te)/(2*Te),Pe=Math.sqrt(Math.max(0,ze*ze-Ee*Ee)),Ne=new F(0,1,0).addScaledVector(Ie,-Ie.y).normalize(),Ae=Me.clone().addScaledVector(Ie,Ee).addScaledVector(Ne,Pe);function Se(Fe,Xe,tt,Qe){let Tt=tt.clone().sub(Xe);Fe.position.copy(Xe).addScaledVector(Tt,.5),Fe.quaternion.setFromUnitVectors(new F(0,1,0),Tt.normalize()),Fe.scale.set(Qe,Xe.distanceTo(tt)/2,Qe)}Se(oe[ie],Me,Ae,1.2),Se(re[ie],Ae,we,1.1)}),Le.forEach((ee,ie)=>ee.flex(z,B,M.antenna*(ie?.78:1)));let ce=b.headLiftAge??-1,j=b.headLiftAngle??.8,R=b.headLiftDuration??1.4,v=ot.clamp(ce/R,0,1);v=v*v*v*(v*(v*6-15)+10);let V=ce>R?Math.sin((ce-R)*3)*Math.exp(-(ce-R)*2)*.035:0;N.rotation.x=-j*v+V;let Y=new F(0,-8,20),Q=Y.clone().applyEuler(N.rotation);if(N.position.copy(Y).sub(Q),N.position.z+=v*.8,N.rotation.z=Math.sin(z*1.4)*.018*v,e==="peek"){let ie=new F(0,-8,20),fe=b.peekGreetingAge??-1,be=fe>=0&&fe<1.3?Math.sin(fe/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(z*.65)*.012,Math.sin(Math.max(0,fe)*4)*.05*be);let _e=ie.clone().applyEuler(s.rotation);s.position.copy(ie).sub(_e),s.position.z+=Math.sin(z*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),q.forEach((we,Ie)=>{we.visible=Ie<2,we.position.set(Ie===0?-12:12,-17,10),we.rotation.set(.12,0,Ie===0?-.16:.16)}),oe.forEach(we=>we.visible=!1),re.forEach(we=>we.visible=!1);let pe=z%7.3,Me=pe>4.9&&pe<5.03||pe>5.22&&pe<5.3;se.forEach(we=>we.visible=!Me),ue.visible=Me}},setSize(z){t.scale.setScalar(z/100)},dispose(){let z=new Set,k=new Set;t.traverse(b=>{b.geometry&&z.add(b.geometry),b.material&&k.add(b.material)}),z.forEach(b=>b.dispose()),k.forEach(b=>b.dispose()),A.dispose()}}}function du(i,e,t,n,{threshold:s=5,tolerance:r=20}={}){let o=Math.floor((t-20)/80),a=Math.floor((-n-20)/80);if(o<0||a<0||o>=i||a>=i)return-1;let l=a*i+o,c=e.at(-1);if(c===void 0||l===c)return l;let h=o-c%i,u=a-Math.floor(c/i);if(Math.abs(h)+Math.abs(u)!==1)return-1;let d=c%i*80+60,p=-(Math.floor(c/i)*80+60),g=h?(t-d)*h:-(n-p)*u,x=Math.abs(h?n-p:t-d);return g>=40+80*s/100&&x<=Math.min(40,22+80*r/100)?l:c}function mu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=pu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let g=pu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function pu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function gu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,_=a.length;S<_;S++){let y=a[S],C=i.attributes[y];l[y]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let E=i.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((P,L)=>{let w=new P.array.constructor(P.count*P.itemSize);c[y][L]=new P.constructor(w,P.itemSize,P.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let S=0;S<r;S++){let _=n?n.getX(S):S,y="";for(let C=0,E=a.length;C<E;C++){let P=a[C],L=i.getAttribute(P),w=L.itemSize;for(let T=0;T<w;T++)y+=`${~~(L[u[T]](_)*x+m)},`}if(y in t)h.push(t[y]);else{for(let C=0,E=a.length;C<E;C++){let P=a[C],L=i.getAttribute(P),w=i.morphAttributes[P],T=L.itemSize,N=l[P],O=c[P];for(let q=0;q<T;q++){let ne=u[q],oe=d[q];if(N[oe](o,L[ne](_)),w)for(let re=0,he=w.length;re<he;re++)O[re][oe](o,w[re][ne](_))}}t[y]=o,h.push(o),o++}}let f=i.clone();for(let S in i.attributes){let _=l[S];if(f.setAttribute(S,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),S in c)for(let y=0;y<c[S].length;y++){let C=c[S][y];f.morphAttributes[S][y]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(h),f}function xu(i){let e=new Map,t=new Set;i.updateMatrixWorld(!0);for(let n of i.children){if(!n.isMesh||Array.isArray(n.material))return i;let s=e.get(n.material);s||e.set(n.material,s={geometries:[],surface:!1}),s.surface||=!!n.userData.surface;let r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.geometries.push(r.applyMatrix4(n.matrix)),t.add(n.geometry)}i.clear();for(let[n,s]of e){let r=mu(s.geometries,!1);s.geometries.forEach(a=>a.dispose());let o=new Oe(r,n);o.castShadow=o.receiveShadow=!0,o.userData.surface=s.surface,i.add(o)}return t.forEach(n=>n.dispose()),i}var _u=new WeakMap,qc=new WeakMap,Z0=new He("#edf4b1");function yu(i,e,t=.24){if(!i)return;let n=e?t:0;_u.get(i)!==n&&(_u.set(i,n),i.traverse(s=>{if(s.isMesh)for(let r of[].concat(s.material||[]))r.color&&(qc.has(r)||qc.set(r,r.color.clone()),r.color.copy(qc.get(r)),e&&r.color.lerp(Z0,t))}))}var ra=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],l=this.points[o+1],c=s[o];if(r<=c&&c>0){let h=r/c;this.x=a[0]+(l[0]-a[0])*h,this.y=a[1]+(l[1]-a[1])*h,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=c}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.duration=Math.min(.5,Math.max(.035,this.duration*(this.durationScale??1))),this.lastTarget=n,this.start=n,!0}};var oa=class{constructor(){this.transition=new ra,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=c=>[c%e.n*80+60,-(Math.floor(c/e.n)*80+60)];if(this.level!==e||!t.length){let[c,h]=s(e.marks[0]);this.transition.reset(c,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[c,h],this.lastTime=n,this.level=e}let a=0;for(;a<this.path.length&&a<t.length&&this.path[a]===t[a];)a++;if(a!==this.path.length||a!==t.length){let c=this.path.at(-1),h=this.path.length?[...this.path.slice(Math.max(0,a-1),-1).reverse(),...t.slice(a)]:[...t];for(let u of h){let[d,p]=s(u);if(c===void 0)this.transition.reset(d,p);else{let[g,x]=s(c);this.heading=Math.atan2(d-g,-(p-x)),this.transition.target(d,p,n)}c=u}this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=tr(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var vu={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Mu({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=vu[t]||vu.front,s=n.radius,r=n.x,o=n.z,a=new Ve,l=new Ve;a.add(l),l.position.set(n.fx,0,n.fz);let c=new ct(1,20,14),h=[],u=(se,ye=.48)=>{let Re=new je({color:se,roughness:ye});return h.push(Re),Re},d=u("#ffd05a"),p=u("#ffeaa2"),g=u("#538b2c"),x=u("#e5a32a");function m(se,ye,Re,Le,J,H,I,A){let te=new Oe(c,ye);return te.position.set(Re,Le,J),te.scale.set(H,I,A),te.castShadow=!0,te.receiveShadow=!0,se.add(te),te}m(l,g,0,5,0,2.2,7,2.2);for(let se of[-1,1]){let ye=m(l,g,se*7,4,1,9,1.7,4);ye.rotation.z=se*.27,ye.rotation.y=se*.3}let f=[];for(let se=0;se<6;se++){let ye=new Ve;ye.rotation.y=se*Math.PI/3,l.add(ye);let Re=m(ye,se%2?d:p,0,12,0,5,9,4);f.push(Re)}let S=m(l,x,0,12,0,5,3.5,5),_=u("#c5a777"),y=new tn(s+1.6,s+1.6,2.6,40),C=new Oe(y,_);C.position.set(r,3,o),C.castShadow=!0,a.add(C);let E=new tn(s,s,2.2,40),P=new Oe(E,u("#fff4da"));P.position.set(r,3.6,o),P.castShadow=!0,a.add(P);let L=document.createElement("canvas");L.width=L.height=128;let w=L.getContext("2d");w.fillStyle="#4b2a15",w.font="bold 100px Trebuchet MS",w.textAlign="center",w.textBaseline="middle",w.fillText(String(i),64,69);let T=new mn(L);T.colorSpace=_t,T.userData.transient=!0;let N=new li({map:T,transparent:!0,depthWrite:!1}),O=new ui(s*1.72,s*1.72),q=new Oe(O,N);q.rotation.x=-Math.PI/2,q.position.set(r,4.74,o),a.add(q);let ne=0,oe=0,re="";function he(se){if(!["closed","next","bloom"].includes(se))throw Error("Unknown goal state");re=se,oe=se==="bloom"?1:se==="next"?.16:0,a.userData.state=se,_.color.set(se==="next"?"#f9bf39":"#c5a777"),_.emissive.set(se==="next"?"#d89514":"#000000"),_.emissiveIntensity=se==="next"?.15:0}function W(se,ye=.016){ne+=(oe-ne)*Math.min(1,ye*7);let Re=ne;for(let J of f)J.position.set(0,13-Re*3,2+Re*10),J.scale.set(5+Re*1.5,9-Re*6,4+Re*4),J.rotation.x=Re*-.25;S.visible=Re>.4,S.position.y=11.4;let Le=re==="next"?1+Math.sin(se*2.8)*.035:1;l.scale.setScalar(Le),d.emissive.set("#ffc33e"),d.emissiveIntensity=re==="next"?.08+Math.sin(se*2.8)*.04:0}he(e),ne=oe,W(0,1),a.userData.goalNumber=i;function ue(se){let ye=se===33?13:se===40?15.7:10.5;C.scale.set((ye+1.6)/(s+1.6),1,(ye+1.6)/(s+1.6)),P.scale.set(ye/s,1,ye/s),q.scale.setScalar(ye/s),a.userData.markerSize=se}return{group:a,setState:he,setSize:ue,update:W,dispose(){c.dispose(),E.dispose(),y.dispose(),O.dispose(),T.dispose(),N.dispose(),h.forEach(se=>se.dispose())}}}var Fn=(i,e)=>ot.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Yc=[[-13,-9],[20,-10],[8,4],[-11,18]];function bu(i){i.x=ot.clamp(i.x,-16,24),i.z=ot.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function Su(i=73){let e=[{kind:"bee",position:new F(-12,25,10),velocity:new F,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new F(3,21.5,-7),velocity:new F,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new F((Fn(r.leg+1,a)-.5)*5,20.5,(Fn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let u=Math.floor(Fn(r.leg,a)*4);u===r.station&&(u=(u+1+Math.floor(Fn(r.leg+9,a)*2))%4),r.station=u;let[d,p]=Yc[u];r.target=bu(new F(d+(Fn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Fn(r.leg+4,a)-.5)*3)),r.visiting=!1}let c=e[1-o],h=(u,d)=>Math.hypot(u.x-d.x,u.z-d.z);if(h(r.target,c.position)<13||c.target&&h(r.target,c.target)<13){let u=-1;for(let d=0;d<Yc.length;d++){let[p,g]=Yc[d],x=new F(p,24,g),m=h(x,c.position)+(c.target?h(x,c.target):0);m>u&&(u=m,r.target=x,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let l=0;l<2;l++){let c=e[l];c.age+=r,c.wait<=0&&c.age>(c.kind==="bee"?4.2:6.2)+Fn(c.leg,i+l)*1.3&&n(c,l);let h=c.target.clone().sub(c.position),u=Math.hypot(h.x,h.z);c.wait>0?(c.wait-=r,c.wait<=0&&n(c,l)):u<1&&c.velocity.length()<2&&(c.wait=c.visiting?(c.kind==="bumblebee"?1.2:.45)+Fn(c.leg,i+l)*1.3:.12+Fn(c.leg,i+l)*.3);let d=h.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(c.speed*Math.min(1,u/8));let p=d.sub(new F(c.velocity.x,0,c.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(l?-1:1)*(16-a)*11/a),p.y=(c.target.y+Math.sin(t*4.1+l*2.3)*.16-c.position.y)*16-c.velocity.y*7,p.clampLength(0,95),c.velocity.addScaledVector(p,r),c.velocity.clampLength(0,c.speed*1.1),c.position.addScaledVector(c.velocity,r),bu(c.position)}}return{agents:e,update(r){let o=ot.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Zc={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},J0=(i,e)=>ot.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function Eu({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Zc[i];if(!r)throw Error("Unknown flower species "+i);let o=Mu({number:e,state:t,layout:n}),a=o.group,l=a.children[0],c=new Ve;c.position.copy(l.position),a.add(c);let h=[],u=[],d=ue=>{let se=new je({color:ue,roughness:.56});return u.push(se),se},p=d("#538b2c"),g=r.colors.map(d),x=d(r.center),m=new ct(1,20,12);h.push(m);function f(ue,se,ye,Re,Le,J,H,I){let A=new Oe(m,se);return A.position.set(ye,Re,Le),A.scale.set(J,H,I),A.castShadow=A.receiveShadow=!0,ue.add(A),A}f(c,p,0,5,0,1.8,6,1.8);for(let ue of[-1,1]){let se=f(c,p,ue*6,3,0,8,1.4,3);se.rotation.z=ue*.25}let S=[];for(let ue=0;ue<r.petals;ue++){let se=new Ve;se.position.y=12,se.rotation.y=ue*Math.PI*2/r.petals,c.add(se);let ye=new Ve;se.add(ye);let Re=m;if(i==="poppy"){Re=m.clone();let J=Re.attributes.position;for(let H=0;H<J.count;H++){let I=J.getX(H),A=J.getZ(H);J.setY(H,J.getY(H)+Math.sin(Math.atan2(A,I)*5)*.26*Math.hypot(I,A))}Re.computeVertexNormals(),h.push(Re)}let Le=new Oe(Re,g[ue%2]);Le.position.z=r.radius,Le.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Le.castShadow=Le.receiveShadow=!0,ye.add(Le),S.push(ye)}let _=f(c,x,0,13.8,0,r.heart,2.7,r.heart);for(let ue=0;ue<(i==="poppy"?9:7);ue++){let se=ue*Math.PI*2/(i==="poppy"?9:7);f(c,x,Math.cos(se)*r.heart*.7,16,Math.sin(se)*r.heart*.7,.65,.6,.65)}let y=new Ve;y.name="flower-visitors",c.add(y);let C=d("#e9ad32"),E=d("#d6af50"),P=d("#60452b"),L=d("#fff6df");E.roughness=.95,L.transparent=!0,L.opacity=.72,L.depthWrite=!1;let w=[];for(let ue=0;ue<2;ue++){let se=new Ve;se.name=ue?"bumblebee":"bee",se.scale.setScalar(1.8),y.add(se);let ye=ue?1.08:.7,Re=ue?.98:.65;f(se,ue?E:C,0,0,0,ye,Re,1.2),f(se,P,0,0,1.05,ue?.56:.48,ue?.54:.48,.48);for(let J of[-.55,.15])f(se,P,0,0,J,ye*1.02,Re*1.02,.18);if(ue){let J=d("#f4e4b9");J.roughness=1,f(se,J,0,0,-.98,.72,.65,.38);let H=[],I=[],A=260;for(let de=0;de<A;de++){let xe=1-2*(de+.5)/A,D=Math.sqrt(1-xe*xe),X=de*2.39996323,Z=Math.cos(X)*D,z=Math.sin(X)*D,k=new F(Z*ye*1.015,xe*Re*1.015,z*1.215),b=new F(Z/ye,xe/Re,z/1.2).normalize(),M=.12+J0(de,91)*.12,B=k.clone().addScaledVector(b,M);B.z-=.045,H.push(...k.toArray(),...B.toArray());let ce=new He(z<-.72?"#f4e4b9":Math.abs(z+.46)<.18||Math.abs(z-.12)<.17?"#635238":de%3?"#d6af50":"#e7c776");I.push(...ce.toArray(),...ce.toArray())}let te=new lt;te.setAttribute("position",new Je(H,3)),te.setAttribute("color",new Je(I,3)),h.push(te);let $=new Yi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});u.push($);let G=new Ts(te,$);G.name="bumblebee-fur",se.add(G)}let Le=[];for(let J of[-1,1]){let H=f(se,L,J*.95,.5,-.1,1.5,.16,.65);H.castShadow=!1,Le.push(H)}w.push({insect:se,wings:Le,seed:e*17+ue*31+Object.keys(Zc).indexOf(i)*7,phase:ue*2.7,a:new F,b:new F})}let T=!!s;function N(ue){T=!!ue,a.userData.insects=T}let O=Su(e*17+Object.keys(Zc).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function q(ue,se=100){if(!["bee","bumblebee"].includes(ue))throw Error("Unknown flower visitor");if(!Number.isFinite(se)||se<50||se>300)throw RangeError("Visitor size must be between 50 and 300 percent");w.find(ye=>ye.insect.name===ue).insect.scale.setScalar(1.8*se/100),a.userData.visitorSizes[ue]=se}let ne=t,oe=t==="bloom"?1:0,re=oe;function he(ue){o.setState(ue),ne=ue,oe=ue==="bloom"?1:0}function W(ue,se=.016){o.update(ue,se),re+=(oe-re)*Math.min(1,se*7);let ye=re;l.scale.multiplyScalar(1-ye),l.visible=ye<.999,c.visible=ye>.001,c.scale.setScalar(ye);for(let Le of S)Le.rotation.x=-(1-ye)*1.1;_.scale.y=2.7*(.8+.2*ye),y.visible=T&&ne==="bloom"&&ye>.94;let Re=O.update(se);for(let Le=0;Le<w.length;Le++){let J=w[Le],H=Re[Le];J.insect.position.copy(H.position);let I=H.velocity.x,A=H.velocity.z,te=Math.hypot(I,A);if(te>.5){let $=Math.atan2(I,A),G=Math.atan2(Math.sin($-J.insect.rotation.y),Math.cos($-J.insect.rotation.y));J.insect.rotation.y+=G*Math.min(1,se*9),J.insect.rotation.z=ot.clamp(-G*.22,-.24,.24)}else J.insect.rotation.z*=Math.max(0,1-se*6);J.insect.rotation.x=-Math.min(.16,te*.009),J.wings.forEach(($,G)=>$.rotation.z=Math.sin(ue*30+J.phase)*(G?1:-1)*.5)}}return N(s),W(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:he,setInsects:N,setVisitorSize:q,setSize:o.setSize,update:W,get state(){return ne},dispose(){o.dispose(),h.forEach(ue=>ue.dispose()),u.forEach(ue=>ue.dispose())}}}var aa=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new F,r=new F,o=new F,a=new F,l=[s,r,o,a],c=new F,h=new F,u=new F,d=new F,p=[c,h,u,d],g=new He,x=new He,m=new He,f=new He,S=[g,x,m,f],_=new ve,y=new ve,C=new ve,E=new ve,P=[_,y,C,E],L=new ve,w=new ve,T=new ve,N=new ve,O=[L,w,T,N],q=e.attributes,ne=q.normal!==void 0,oe=q.color!==void 0,re=q.uv!==void 0,he=q.uv1!==void 0,W=q.position.array,ue=ne?q.normal.array:null,se=oe?q.color.array:null,ye=re?q.uv.array:null,Re=he?q.uv1.array:null,Le=W,J=ue,H=se,I=ye,A=Re,te=0,$=!0;function G(xe,D,X){let Z=l[xe],z=l[D],k=l[X];if(Le.push(Z.x,Z.y,Z.z),Le.push(z.x,z.y,z.z),Le.push(k.x,k.y,k.z),ne){let b=p[xe],M=p[D],B=p[X];J.push(b.x,b.y,b.z),J.push(M.x,M.y,M.z),J.push(B.x,B.y,B.z)}if(oe){let b=S[xe],M=S[D],B=S[X];H.push(b.r,b.g,b.b),H.push(M.r,M.g,M.b),H.push(B.r,B.g,B.b)}if(re){let b=P[xe],M=P[D],B=P[X];I.push(b.x,b.y),I.push(M.x,M.y),I.push(B.x,B.y)}if(he){let b=O[xe],M=O[D],B=O[X];A.push(b.x,b.y),A.push(M.x,M.y),A.push(B.x,B.y)}}for(;$&&te<t;){te++,$=!1,W=Le,Le=[],ne&&(ue=J,J=[]),oe&&(se=H,H=[]),re&&(ye=I,I=[]),he&&(Re=A,A=[]);for(let xe=0,D=0,X=W.length;xe<X;xe+=9,D+=6){s.fromArray(W,xe+0),r.fromArray(W,xe+3),o.fromArray(W,xe+6),ne&&(c.fromArray(ue,xe+0),h.fromArray(ue,xe+3),u.fromArray(ue,xe+6)),oe&&(g.fromArray(se,xe+0),x.fromArray(se,xe+3),m.fromArray(se,xe+6)),re&&(_.fromArray(ye,D+0),y.fromArray(ye,D+2),C.fromArray(ye,D+4)),he&&(L.fromArray(Re,D+0),w.fromArray(Re,D+2),T.fromArray(Re,D+4));let Z=s.distanceToSquared(r),z=r.distanceToSquared(o),k=s.distanceToSquared(o);Z>n||z>n||k>n?($=!0,Z>=z&&Z>=k?(a.lerpVectors(s,r,.5),ne&&d.lerpVectors(c,h,.5),oe&&f.lerpColors(g,x,.5),re&&E.lerpVectors(_,y,.5),he&&N.lerpVectors(L,w,.5),G(0,3,2),G(3,1,2)):z>=Z&&z>=k?(a.lerpVectors(r,o,.5),ne&&d.lerpVectors(h,u,.5),oe&&f.lerpColors(x,m,.5),re&&E.lerpVectors(y,C,.5),he&&N.lerpVectors(w,T,.5),G(0,1,3),G(3,2,0)):(a.lerpVectors(s,o,.5),ne&&d.lerpVectors(c,u,.5),oe&&f.lerpColors(g,m,.5),re&&E.lerpVectors(_,C,.5),he&&N.lerpVectors(L,T,.5),G(0,1,3),G(3,1,2))):G(0,1,2)}}let de=new lt;return de.setAttribute("position",new Je(Le,3)),ne&&de.setAttribute("normal",new Je(J,3)),oe&&de.setAttribute("color",new Je(H,3)),re&&de.setAttribute("uv",new Je(I,2)),he&&de.setAttribute("uv1",new Je(A,2)),de}};var $0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},nr=ot.clamp;function K0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=nr(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var j0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function wu(i,e,t){if(i==="split"){let n=Math.min(...j0.map(([s,r])=>K0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,l=e*Math.cos(a)+t*Math.sin(a),c=-e*Math.sin(a)+t*Math.cos(a),h=((l-10)/8.5)**2+(c/(s===6?3.2:4.7))**2;n=Math.max(n,nr((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function Tu(i="fossil",{seed:e=73}={}){if(!$0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Ve,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,l=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let f=0;f<s;f++)for(let S=0;S<s;S++){let _=(S/(s-1)-.5)*66,y=(f/(s-1)-.5)*66,C=wu(i,_,y),E=Math.sin(_*.18+y*.11)*Math.sin(y*.21-_*.07),P=l()-.5,L=1+E*(t?.004:.015)+P*(t?.025:.065)-C.ink,w=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],T=(f*s+S)*4;for(let O=0;O<3;O++)r[T+O]=nr(w[O]*L+(220-w[O])*C.vein,0,255);r[T+3]=255;let N=nr(138+P*(t?4:12)+E-C.cut*28,0,255);o.set([N,N,N,255],T)}let c=new Yn(r,s,s);c.colorSpace=_t;let h=new Yn(o,s,s);for(let f of[c,h])f.magFilter=f.minFilter=Dt,f.needsUpdate=!0;let u=new je({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:c,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(u.onBeforeCompile=f=>{let S=new He(t?"#9e9688":i==="split"?"#978f80":"#999182");f.vertexShader=`varying float stoneTop;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),f.fragmentShader=`varying float stoneTop;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${S.r},${S.g},${S.b}),diffuseColor.rgb,stoneTop);`)}),u.customProgramCacheKey=()=>`slink-stone-top-${i}`;let d=new vn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let f=new aa(3.5,10).modify(d);d.dispose(),d=f}d.translate(0,0,10);let p=d.attributes.position,g=d.attributes.uv;for(let f=0;f<p.count;f++){let S=p.getX(f),_=p.getY(f),y=p.getZ(f),C=nr((y-10)/16.5,0,1);if(i!=="reference"){let E=Math.max(0,1-(S*S+_*_)/1800),P=Math.sin(S*.13+_*.035)*Math.cos(_*.1)*(t?.12:.7),L=t?E*5:i==="split"?E*1.3-Math.max(0,S*.17+_*.09-2)*.6:E*.6;y+=(L+P-wu(i,S,_).cut)*C}p.setZ(f,y),g.setXY(f,S/66+.5,_/66+.5)}d.deleteAttribute("normal");let x=gu(d,1e-4);d.dispose(),d=x,d.computeVertexNormals();let m=new Oe(d,u);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){d.dispose(),u.dispose(),c.dispose(),h.dispose()}}}var Au=["daisy","buttercup","meadow","poppy"],Ru=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],ca=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function Q0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function Cu(i){let e=ca(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=Au[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&ca(e+":flower-mix")%3!==0){let r=Au[(e%4+1+ca(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of Q0(i.stones||[],i.n)){let o=ca(e+":"+r.join(","));if(r.length===1){s[r[0]]=Ru[o%Ru.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Iu={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function Pu(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new je({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",l=Iu[i]?.[n]||a;return o.onBeforeCompile=c=>{c.uniforms.uLiquidTime=r,c.uniforms.uLiquidCenter={value:new ve(...t)},c.vertexShader=`varying vec2 vLiquidXY;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),c.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${l}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(c){r.value=e?c:0},dispose(){o.dispose()},type:i}}var ex=_t,ir=class i extends di{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new ks(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(J,H){if(J.nodeType!==1)return;let I=y(J),A=!1,te=null;switch(J.nodeName){case"svg":H=g(J,H);break;case"style":r(J);break;case"g":H=g(J,H);break;case"path":H=g(J,H),J.hasAttribute("d")&&(te=s(J));break;case"rect":H=g(J,H),te=l(J);break;case"polygon":H=g(J,H),te=c(J);break;case"polyline":H=g(J,H),te=h(J);break;case"circle":H=g(J,H),te=u(J);break;case"ellipse":H=g(J,H),te=d(J);break;case"line":H=g(J,H),te=p(J);break;case"defs":A=!0;break;case"use":H=g(J,H);let de=(J.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),xe=J.viewportElement.getElementById(de);xe?n(xe,H):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break;default:}te&&(H.fill!==void 0&&H.fill!=="none"&&te.color.setStyle(H.fill,ex),E(te,ye),O.push(te),te.userData={node:J,style:H});let $=J.childNodes;for(let G=0;G<$.length;G++){let de=$[G];A&&de.nodeName!=="style"&&de.nodeName!=="defs"||n(de,H)}I&&(ne.pop(),ne.length>0?ye.copy(ne[ne.length-1]):ye.identity())}function s(J){let H=new un,I=new ve,A=new ve,te=new ve,$=!0,G=!1,de=J.getAttribute("d");if(de===""||de==="none")return null;let xe=de.match(/[a-df-z][^a-df-z]*/ig);for(let D=0,X=xe.length;D<X;D++){let Z=xe[D],z=Z.charAt(0),k=Z.slice(1).trim();$===!0&&(G=!0,$=!1);let b;switch(z){case"M":b=m(k);for(let M=0,B=b.length;M<B;M+=2)I.x=b[M+0],I.y=b[M+1],A.x=I.x,A.y=I.y,M===0?H.moveTo(I.x,I.y):H.lineTo(I.x,I.y),M===0&&te.copy(I);break;case"H":b=m(k);for(let M=0,B=b.length;M<B;M++)I.x=b[M],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"V":b=m(k);for(let M=0,B=b.length;M<B;M++)I.y=b[M],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"L":b=m(k);for(let M=0,B=b.length;M<B;M+=2)I.x=b[M+0],I.y=b[M+1],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"C":b=m(k);for(let M=0,B=b.length;M<B;M+=6)H.bezierCurveTo(b[M+0],b[M+1],b[M+2],b[M+3],b[M+4],b[M+5]),A.x=b[M+2],A.y=b[M+3],I.x=b[M+4],I.y=b[M+5],M===0&&G===!0&&te.copy(I);break;case"S":b=m(k);for(let M=0,B=b.length;M<B;M+=4)H.bezierCurveTo(x(I.x,A.x),x(I.y,A.y),b[M+0],b[M+1],b[M+2],b[M+3]),A.x=b[M+0],A.y=b[M+1],I.x=b[M+2],I.y=b[M+3],M===0&&G===!0&&te.copy(I);break;case"Q":b=m(k);for(let M=0,B=b.length;M<B;M+=4)H.quadraticCurveTo(b[M+0],b[M+1],b[M+2],b[M+3]),A.x=b[M+0],A.y=b[M+1],I.x=b[M+2],I.y=b[M+3],M===0&&G===!0&&te.copy(I);break;case"T":b=m(k);for(let M=0,B=b.length;M<B;M+=2){let ce=x(I.x,A.x),j=x(I.y,A.y);H.quadraticCurveTo(ce,j,b[M+0],b[M+1]),A.x=ce,A.y=j,I.x=b[M+0],I.y=b[M+1],M===0&&G===!0&&te.copy(I)}break;case"A":b=m(k,[3,4],7);for(let M=0,B=b.length;M<B;M+=7){if(b[M+5]==I.x&&b[M+6]==I.y)continue;let ce=I.clone();I.x=b[M+5],I.y=b[M+6],A.x=I.x,A.y=I.y,o(H,b[M],b[M+1],b[M+2],b[M+3],b[M+4],ce,I),M===0&&G===!0&&te.copy(I)}break;case"m":b=m(k);for(let M=0,B=b.length;M<B;M+=2)I.x+=b[M+0],I.y+=b[M+1],A.x=I.x,A.y=I.y,M===0?H.moveTo(I.x,I.y):H.lineTo(I.x,I.y),M===0&&te.copy(I);break;case"h":b=m(k);for(let M=0,B=b.length;M<B;M++)I.x+=b[M],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"v":b=m(k);for(let M=0,B=b.length;M<B;M++)I.y+=b[M],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"l":b=m(k);for(let M=0,B=b.length;M<B;M+=2)I.x+=b[M+0],I.y+=b[M+1],A.x=I.x,A.y=I.y,H.lineTo(I.x,I.y),M===0&&G===!0&&te.copy(I);break;case"c":b=m(k);for(let M=0,B=b.length;M<B;M+=6)H.bezierCurveTo(I.x+b[M+0],I.y+b[M+1],I.x+b[M+2],I.y+b[M+3],I.x+b[M+4],I.y+b[M+5]),A.x=I.x+b[M+2],A.y=I.y+b[M+3],I.x+=b[M+4],I.y+=b[M+5],M===0&&G===!0&&te.copy(I);break;case"s":b=m(k);for(let M=0,B=b.length;M<B;M+=4)H.bezierCurveTo(x(I.x,A.x),x(I.y,A.y),I.x+b[M+0],I.y+b[M+1],I.x+b[M+2],I.y+b[M+3]),A.x=I.x+b[M+0],A.y=I.y+b[M+1],I.x+=b[M+2],I.y+=b[M+3],M===0&&G===!0&&te.copy(I);break;case"q":b=m(k);for(let M=0,B=b.length;M<B;M+=4)H.quadraticCurveTo(I.x+b[M+0],I.y+b[M+1],I.x+b[M+2],I.y+b[M+3]),A.x=I.x+b[M+0],A.y=I.y+b[M+1],I.x+=b[M+2],I.y+=b[M+3],M===0&&G===!0&&te.copy(I);break;case"t":b=m(k);for(let M=0,B=b.length;M<B;M+=2){let ce=x(I.x,A.x),j=x(I.y,A.y);H.quadraticCurveTo(ce,j,I.x+b[M+0],I.y+b[M+1]),A.x=ce,A.y=j,I.x=I.x+b[M+0],I.y=I.y+b[M+1],M===0&&G===!0&&te.copy(I)}break;case"a":b=m(k,[3,4],7);for(let M=0,B=b.length;M<B;M+=7){if(b[M+5]==0&&b[M+6]==0)continue;let ce=I.clone();I.x+=b[M+5],I.y+=b[M+6],A.x=I.x,A.y=I.y,o(H,b[M],b[M+1],b[M+2],b[M+3],b[M+4],ce,I),M===0&&G===!0&&te.copy(I)}break;case"Z":case"z":H.currentPath.autoClose=!0,H.currentPath.curves.length>0&&(I.copy(te),H.currentPath.currentPoint.copy(I),$=!0);break;default:console.warn(Z)}G=!1}return H}function r(J){if(!(!J.sheet||!J.sheet.cssRules||!J.sheet.cssRules.length))for(let H=0;H<J.sheet.cssRules.length;H++){let I=J.sheet.cssRules[H];if(I.type!==1)continue;let A=I.selectorText.split(/,/gm).filter(Boolean).map(te=>te.trim());for(let te=0;te<A.length;te++){let $=Object.fromEntries(Object.entries(I.style).filter(([,G])=>G!==""));q[A[te]]=Object.assign(q[A[te]]||{},$)}}}function o(J,H,I,A,te,$,G,de){if(H==0||I==0){J.lineTo(de.x,de.y);return}A=A*Math.PI/180,H=Math.abs(H),I=Math.abs(I);let xe=(G.x-de.x)/2,D=(G.y-de.y)/2,X=Math.cos(A)*xe+Math.sin(A)*D,Z=-Math.sin(A)*xe+Math.cos(A)*D,z=H*H,k=I*I,b=X*X,M=Z*Z,B=b/z+M/k;if(B>1){let fe=Math.sqrt(B);H=fe*H,I=fe*I,z=H*H,k=I*I}let ce=z*M+k*b,j=(z*k-ce)/ce,R=Math.sqrt(Math.max(0,j));te===$&&(R=-R);let v=R*H*Z/I,V=-R*I*X/H,Y=Math.cos(A)*v-Math.sin(A)*V+(G.x+de.x)/2,Q=Math.sin(A)*v+Math.cos(A)*V+(G.y+de.y)/2,ee=a(1,0,(X-v)/H,(Z-V)/I),ie=a((X-v)/H,(Z-V)/I,(-X-v)/H,(-Z-V)/I)%(Math.PI*2);J.currentPath.absellipse(Y,Q,H,I,ee,ee+ie,$===0,A)}function a(J,H,I,A){let te=J*I+H*A,$=Math.sqrt(J*J+H*H)*Math.sqrt(I*I+A*A),G=Math.acos(Math.max(-1,Math.min(1,te/$)));return J*A-H*I<0&&(G=-G),G}function l(J){let H=_(J.getAttribute("x")||0),I=_(J.getAttribute("y")||0),A=_(J.getAttribute("rx")||J.getAttribute("ry")||0),te=_(J.getAttribute("ry")||J.getAttribute("rx")||0),$=_(J.getAttribute("width")),G=_(J.getAttribute("height")),de=1-.551915024494,xe=new un;return xe.moveTo(H+A,I),xe.lineTo(H+$-A,I),(A!==0||te!==0)&&xe.bezierCurveTo(H+$-A*de,I,H+$,I+te*de,H+$,I+te),xe.lineTo(H+$,I+G-te),(A!==0||te!==0)&&xe.bezierCurveTo(H+$,I+G-te*de,H+$-A*de,I+G,H+$-A,I+G),xe.lineTo(H+A,I+G),(A!==0||te!==0)&&xe.bezierCurveTo(H+A*de,I+G,H,I+G-te*de,H,I+G-te),xe.lineTo(H,I+te),(A!==0||te!==0)&&xe.bezierCurveTo(H,I+te*de,H+A*de,I,H+A,I),xe}function c(J){function H($,G,de){let xe=_(G),D=_(de);te===0?A.moveTo(xe,D):A.lineTo(xe,D),te++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new un,te=0;return J.getAttribute("points").replace(I,H),A.currentPath.autoClose=!0,A}function h(J){function H($,G,de){let xe=_(G),D=_(de);te===0?A.moveTo(xe,D):A.lineTo(xe,D),te++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new un,te=0;return J.getAttribute("points").replace(I,H),A.currentPath.autoClose=!1,A}function u(J){let H=_(J.getAttribute("cx")||0),I=_(J.getAttribute("cy")||0),A=_(J.getAttribute("r")||0),te=new gn;te.absarc(H,I,A,0,Math.PI*2);let $=new un;return $.subPaths.push(te),$}function d(J){let H=_(J.getAttribute("cx")||0),I=_(J.getAttribute("cy")||0),A=_(J.getAttribute("rx")||0),te=_(J.getAttribute("ry")||0),$=new gn;$.absellipse(H,I,A,te,0,Math.PI*2);let G=new un;return G.subPaths.push($),G}function p(J){let H=_(J.getAttribute("x1")||0),I=_(J.getAttribute("y1")||0),A=_(J.getAttribute("x2")||0),te=_(J.getAttribute("y2")||0),$=new un;return $.moveTo(H,I),$.lineTo(A,te),$.currentPath.autoClose=!1,$}function g(J,H){H=Object.assign({},H);let I={};if(J.hasAttribute("class")){let G=J.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<G.length;de++)I=Object.assign(I,q["."+G[de]])}J.hasAttribute("id")&&(I=Object.assign(I,q["#"+J.getAttribute("id")]));function A(G,de,xe){xe===void 0&&(xe=function(X){return X.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),X}),J.hasAttribute(G)&&(H[de]=xe(J.getAttribute(G))),I[G]&&(H[de]=xe(I[G])),J.style&&J.style[G]!==""&&(H[de]=xe(J.style[G]))}function te(G){return Math.max(0,Math.min(1,_(G)))}function $(G){return Math.max(0,_(G))}return A("fill","fill"),A("fill-opacity","fillOpacity",te),A("fill-rule","fillRule"),A("opacity","opacity",te),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",te),A("stroke-width","strokeWidth",$),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",$),A("visibility","visibility"),H}function x(J,H){return J-(H-J)}function m(J,H,I){if(typeof J!="string")throw new TypeError("Invalid input: "+typeof J);let A={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},te=0,$=1,G=2,de=3,xe=te,D=!0,X="",Z="",z=[];function k(ce,j,R){let v=new SyntaxError('Unexpected character "'+ce+'" at index '+j+".");throw v.partial=R,v}function b(){X!==""&&(Z===""?z.push(Number(X)):z.push(Number(X)*Math.pow(10,Number(Z)))),X="",Z=""}let M,B=J.length;for(let ce=0;ce<B;ce++){if(M=J[ce],Array.isArray(H)&&H.includes(z.length%I)&&A.FLAGS.test(M)){xe=$,X=M,b();continue}if(xe===te){if(A.WHITESPACE.test(M))continue;if(A.DIGIT.test(M)||A.SIGN.test(M)){xe=$,X=M;continue}if(A.POINT.test(M)){xe=G,X=M;continue}A.COMMA.test(M)&&(D&&k(M,ce,z),D=!0)}if(xe===$){if(A.DIGIT.test(M)){X+=M;continue}if(A.POINT.test(M)){X+=M,xe=G;continue}if(A.EXP.test(M)){xe=de;continue}A.SIGN.test(M)&&X.length===1&&A.SIGN.test(X[0])&&k(M,ce,z)}if(xe===G){if(A.DIGIT.test(M)){X+=M;continue}if(A.EXP.test(M)){xe=de;continue}A.POINT.test(M)&&X[X.length-1]==="."&&k(M,ce,z)}if(xe===de){if(A.DIGIT.test(M)){Z+=M;continue}if(A.SIGN.test(M)){if(Z===""){Z+=M;continue}Z.length===1&&A.SIGN.test(Z)&&k(M,ce,z)}}A.WHITESPACE.test(M)?(b(),xe=te,D=!1):A.COMMA.test(M)?(b(),xe=te,D=!0):A.SIGN.test(M)?(b(),xe=$,X=M):A.POINT.test(M)?(b(),xe=G,X=M):k(M,ce,z)}return b(),z}let f=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(J){let H="px";if(typeof J=="string"||J instanceof String)for(let A=0,te=f.length;A<te;A++){let $=f[A];if(J.endsWith($)){H=$,J=J.substring(0,J.length-$.length);break}}let I;return H==="px"&&t.defaultUnit!=="px"?I=S.in[t.defaultUnit]/t.defaultDPI:(I=S[H][t.defaultUnit],I<0&&(I=S[H].in*t.defaultDPI)),I*parseFloat(J)}function y(J){if(!(J.hasAttribute("transform")||J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))))return null;let H=C(J);return ne.length>0&&H.premultiply(ne[ne.length-1]),ye.copy(H),ne.push(H),H}function C(J){let H=new Ye,I=oe;if(J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))){let A=_(J.getAttribute("x")),te=_(J.getAttribute("y"));H.translate(A,te)}if(J.hasAttribute("transform")){let A=J.getAttribute("transform").split(")");for(let te=A.length-1;te>=0;te--){let $=A[te].trim();if($==="")continue;let G=$.indexOf("("),de=$.length;if(G>0&&G<de){let xe=$.slice(0,G),D=m($.slice(G+1));switch(I.identity(),xe){case"translate":if(D.length>=1){let X=D[0],Z=0;D.length>=2&&(Z=D[1]),I.translate(X,Z)}break;case"rotate":if(D.length>=1){let X=0,Z=0,z=0;X=D[0]*Math.PI/180,D.length>=3&&(Z=D[1],z=D[2]),re.makeTranslation(-Z,-z),he.makeRotation(X),W.multiplyMatrices(he,re),re.makeTranslation(Z,z),I.multiplyMatrices(re,W)}break;case"scale":if(D.length>=1){let X=D[0],Z=X;D.length>=2&&(Z=D[1]),I.scale(X,Z)}break;case"skewX":D.length===1&&I.set(1,Math.tan(D[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":D.length===1&&I.set(1,0,0,Math.tan(D[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":D.length===6&&I.set(D[0],D[2],D[4],D[1],D[3],D[5],0,0,1);break}}H.premultiply(I)}}return H}function E(J,H){function I(G){se.set(G.x,G.y,1).applyMatrix3(H),G.set(se.x,se.y)}function A(G){let de=G.xRadius,xe=G.yRadius,D=Math.cos(G.aRotation),X=Math.sin(G.aRotation),Z=new F(de*D,de*X,0),z=new F(-xe*X,xe*D,0),k=Z.applyMatrix3(H),b=z.applyMatrix3(H),M=oe.set(k.x,b.x,0,k.y,b.y,0,0,0,1),B=re.copy(M).invert(),R=he.copy(B).transpose().multiply(B).elements,v=N(R[0],R[1],R[4]),V=Math.sqrt(v.rt1),Y=Math.sqrt(v.rt2);if(G.xRadius=1/V,G.yRadius=1/Y,G.aRotation=Math.atan2(v.sn,v.cs),!((G.aEndAngle-G.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ee=re.set(V,0,0,0,Y,0,0,0,1),ie=he.set(v.cs,v.sn,0,-v.sn,v.cs,0,0,0,1),fe=ee.multiply(ie).multiply(M),be=_e=>{let{x:pe,y:Me}=new F(Math.cos(_e),Math.sin(_e),0).applyMatrix3(fe);return Math.atan2(Me,pe)};G.aStartAngle=be(G.aStartAngle),G.aEndAngle=be(G.aEndAngle),P(H)&&(G.aClockwise=!G.aClockwise)}}function te(G){let de=w(H),xe=T(H);G.xRadius*=de,G.yRadius*=xe;let D=de>Number.EPSILON?Math.atan2(H.elements[1],H.elements[0]):Math.atan2(-H.elements[3],H.elements[4]);G.aRotation+=D,P(H)&&(G.aStartAngle*=-1,G.aEndAngle*=-1,G.aClockwise=!G.aClockwise)}let $=J.subPaths;for(let G=0,de=$.length;G<de;G++){let D=$[G].curves;for(let X=0;X<D.length;X++){let Z=D[X];Z.isLineCurve?(I(Z.v1),I(Z.v2)):Z.isCubicBezierCurve?(I(Z.v0),I(Z.v1),I(Z.v2),I(Z.v3)):Z.isQuadraticBezierCurve?(I(Z.v0),I(Z.v1),I(Z.v2)):Z.isEllipseCurve&&(ue.set(Z.aX,Z.aY),I(ue),Z.aX=ue.x,Z.aY=ue.y,L(H)?A(Z):te(Z))}}}function P(J){let H=J.elements;return H[0]*H[4]-H[1]*H[3]<0}function L(J){let H=J.elements,I=H[0]*H[3]+H[1]*H[4];if(I===0)return!1;let A=w(J),te=T(J);return Math.abs(I/(A*te))>Number.EPSILON}function w(J){let H=J.elements;return Math.sqrt(H[0]*H[0]+H[1]*H[1])}function T(J){let H=J.elements;return Math.sqrt(H[3]*H[3]+H[4]*H[4])}function N(J,H,I){let A,te,$,G,de,xe=J+I,D=J-I,X=Math.sqrt(D*D+4*H*H);return xe>0?(A=.5*(xe+X),de=1/A,te=J*de*I-H*de*H):xe<0?te=.5*(xe-X):(A=.5*X,te=-.5*X),D>0?$=D+X:$=D-X,Math.abs($)>2*Math.abs(H)?(de=-2*H/$,G=1/Math.sqrt(1+de*de),$=de*G):Math.abs(H)===0?($=1,G=0):(de=-.5*$/H,$=1/Math.sqrt(1+de*de),G=de*$),D>0&&(de=$,$=-G,G=de),{rt1:A,rt2:te,cs:$,sn:G}}let O=[],q={},ne=[],oe=new Ye,re=new Ye,he=new Ye,W=new Ye,ue=new ve,se=new F,ye=new Ye,Re=new DOMParser().parseFromString(e,"image/svg+xml");return n(Re.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:O,xml:Re.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,f,S){let _=x.x,y=m.x,C=f.x,E=S.x,P=x.y,L=m.y,w=f.y,T=S.y,N=(E-C)*(P-w)-(T-w)*(_-C),O=(y-_)*(P-w)-(L-P)*(_-C),q=(T-w)*(y-_)-(E-C)*(L-P),ne=N/q,oe=O/q;if(q===0&&N!==0||ne<=0||ne>=1||oe<0||oe>1)return null;if(N===0&&q===0){for(let re=0;re<2;re++)if(o(re===0?f:S,x,m),s.loc==n.ORIGIN){let he=re===0?f:S;return{x:he.x,y:he.y,t:s.t}}else if(s.loc==n.BETWEEN){let he=+(_+s.t*(y-_)).toPrecision(10),W=+(P+s.t*(L-P)).toPrecision(10);return{x:he,y:W,t:s.t}}return null}else{for(let W=0;W<2;W++)if(o(W===0?f:S,x,m),s.loc==n.ORIGIN){let ue=W===0?f:S;return{x:ue.x,y:ue.y,t:s.t}}let re=+(_+ne*(y-_)).toPrecision(10),he=+(P+ne*(L-P)).toPrecision(10);return{x:re,y:he,t:ne}}}function o(x,m,f){let S=f.x-m.x,_=f.y-m.y,y=x.x-m.x,C=x.y-m.y,E=S*C-y*_;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===f.x&&x.y===f.y){s.loc=n.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=n.LEFT;return}if(E>Number.EPSILON){s.loc=n.RIGHT;return}if(S*y<0||_*C<0){s.loc=n.BEHIND;return}if(Math.sqrt(S*S+_*_)<Math.sqrt(y*y+C*C)){s.loc=n.BEYOND;return}let P;S!==0?P=y/S:P=C/_,s.loc=n.BETWEEN,s.t=P}function a(x,m){let f=[],S=[];for(let _=1;_<x.length;_++){let y=x[_-1],C=x[_];for(let E=1;E<m.length;E++){let P=m[E-1],L=m[E],w=r(y,C,P,L);w!==null&&f.find(T=>T.t<=w.t+Number.EPSILON&&T.t>=w.t-Number.EPSILON)===void 0&&(f.push(w),S.push(new ve(w.x,w.y)))}}return S}function l(x,m,f){let S=new ve;m.getCenter(S);let _=[];return f.forEach(y=>{y.boundingBox.containsPoint(S)&&a(x,y.points).forEach(E=>{_.push({identifier:y.identifier,isCW:y.isCW,point:E})})}),_.sort((y,C)=>y.point.x-C.point.x),_}function c(x,m,f,S,_){(_==null||_==="")&&(_="nonzero");let y=new ve;x.boundingBox.getCenter(y);let C=[new ve(f,y.y),new ve(S,y.y)],E=l(C,x.boundingBox,m);E.sort((O,q)=>O.point.x-q.point.x);let P=[],L=[];E.forEach(O=>{O.identifier===x.identifier?P.push(O):L.push(O)});let w=P[0].point.x,T=[],N=0;for(;N<L.length&&L[N].point.x<w;)T.length>0&&T[T.length-1]===L[N].identifier?T.pop():T.push(L[N].identifier),N++;if(T.push(x.identifier),_==="evenodd"){let O=T.length%2===0,q=T[T.length-2];return{identifier:x.identifier,isHole:O,for:q}}else if(_==="nonzero"){let O=!0,q=null,ne=null;for(let oe=0;oe<T.length;oe++){let re=T[oe];O?(ne=m[re].isCW,O=!1,q=re):ne!==m[re].isCW&&(ne=m[re].isCW,O=!0)}return{identifier:x.identifier,isHole:O,for:q}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,u=-999999999,d=e.subPaths.map(x=>{let m=x.getPoints(),f=-999999999,S=999999999,_=-999999999,y=999999999;for(let C=0;C<m.length;C++){let E=m[C];E.y>f&&(f=E.y),E.y<S&&(S=E.y),E.x>_&&(_=E.x),E.x<y&&(y=E.x)}return u<=_&&(u=_+1),h>=y&&(h=y-1),{curves:x.curves,points:m,isCW:Ct.isClockWise(m),identifier:-1,boundingBox:new Ws(new ve(y,S),new ve(_,f))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let p=d.map(x=>c(x,d,h,u,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(x=>{if(!p[x.identifier].isHole){let f=new vt;f.curves=x.curves,p.filter(_=>_.isHole&&_.for===x.identifier).forEach(_=>{let y=d[_.identifier],C=new gn;C.curves=y.curves,f.holes.push(C)}),g.push(f)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let l=new lt;return l.setAttribute("position",new Je(r,3)),l.setAttribute("normal",new Je(o,3)),l.setAttribute("uv",new Je(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,l){let c=new ve,h=new ve,u=new ve,d=new ve,p=new ve,g=new ve,x=new ve,m=new ve,f=new ve,S=new ve,_=new ve,y=new ve,C=new ve,E=new ve,P=new ve,L=new ve,w=new ve;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=D(e);let T=e.length;if(T<2)return 0;let N=e[0].equals(e[T-1]),O,q=e[0],ne,oe=t.strokeWidth/2,re=1/(T-1),he=0,W,ue,se,ye,Re=!1,Le=0,J=l*3,H=l*2;I(e[0],e[1],c).multiplyScalar(oe),m.copy(e[0]).sub(c),f.copy(e[0]).add(c),S.copy(m),_.copy(f);for(let X=1;X<T;X++){O=e[X],X===T-1?N?ne=e[1]:ne=void 0:ne=e[X+1];let Z=c;if(I(q,O,Z),u.copy(Z).multiplyScalar(oe),y.copy(O).sub(u),C.copy(O).add(u),W=he+re,ue=!1,ne!==void 0){I(O,ne,h),u.copy(h).multiplyScalar(oe),E.copy(O).sub(u),P.copy(O).add(u),se=!0,u.subVectors(ne,q),Z.dot(u)<0&&(se=!1),X===1&&(Re=se),u.subVectors(ne,O),u.normalize();let z=Math.abs(Z.dot(u));if(z>Number.EPSILON){let k=oe/z;u.multiplyScalar(-k),d.subVectors(O,q),p.copy(d).setLength(k).add(u),L.copy(p).negate();let b=p.length(),M=d.length();d.divideScalar(M),g.subVectors(ne,O);let B=g.length();switch(g.divideScalar(B),d.dot(L)<M&&g.dot(L)<B&&(ue=!0),w.copy(p).add(O),L.add(O),ye=!1,ue?se?(P.copy(L),C.copy(L)):(E.copy(L),y.copy(L)):$(),t.strokeLineJoin){case"bevel":G(se,ue,W);break;case"round":de(se,ue),se?te(O,y,E,W,0):te(O,P,C,W,1);break;case"miter":case"miter-clip":default:let ce=oe*t.strokeMiterLimit/b;if(ce<1)if(t.strokeLineJoin!=="miter-clip"){G(se,ue,W);break}else de(se,ue),se?(g.subVectors(w,y).multiplyScalar(ce).add(y),x.subVectors(w,E).multiplyScalar(ce).add(E),A(y,W,0),A(g,W,0),A(O,W,.5),A(O,W,.5),A(g,W,0),A(x,W,0),A(O,W,.5),A(x,W,0),A(E,W,0)):(g.subVectors(w,C).multiplyScalar(ce).add(C),x.subVectors(w,P).multiplyScalar(ce).add(P),A(C,W,1),A(g,W,1),A(O,W,.5),A(O,W,.5),A(g,W,1),A(x,W,1),A(O,W,.5),A(x,W,1),A(P,W,1));else ue?(se?(A(f,he,1),A(m,he,0),A(w,W,0),A(f,he,1),A(w,W,0),A(L,W,1)):(A(f,he,1),A(m,he,0),A(w,W,1),A(m,he,0),A(L,W,0),A(w,W,1)),se?E.copy(w):P.copy(w)):se?(A(y,W,0),A(w,W,0),A(O,W,.5),A(O,W,.5),A(w,W,0),A(E,W,0)):(A(C,W,1),A(w,W,1),A(O,W,.5),A(O,W,.5),A(w,W,1),A(P,W,1)),ye=!0;break}}else $()}else $();!N&&X===T-1&&xe(e[0],S,_,se,!0,he),he=W,q=O,m.copy(E),f.copy(P)}if(!N)xe(O,y,C,se,!1,W);else if(ue&&r){let X=w,Z=L;Re!==se&&(X=L,Z=w),se?(ye||Re)&&(Z.toArray(r,0),Z.toArray(r,9),ye&&X.toArray(r,3)):(ye||!Re)&&(Z.toArray(r,3),Z.toArray(r,9),ye&&X.toArray(r,0))}return Le;function I(X,Z,z){return z.subVectors(Z,X),z.set(-z.y,z.x).normalize()}function A(X,Z,z){r&&(r[J]=X.x,r[J+1]=X.y,r[J+2]=0,o&&(o[J]=0,o[J+1]=0,o[J+2]=1),J+=3,a&&(a[H]=Z,a[H+1]=z,H+=2)),Le+=3}function te(X,Z,z,k,b){c.copy(Z).sub(X).normalize(),h.copy(z).sub(X).normalize();let M=Math.PI,B=c.dot(h);Math.abs(B)<1&&(M=Math.abs(Math.acos(B))),M/=n,u.copy(Z);for(let ce=0,j=n-1;ce<j;ce++)d.copy(u).rotateAround(X,M),A(u,k,b),A(d,k,b),A(X,k,.5),u.copy(d);A(d,k,b),A(z,k,b),A(X,k,.5)}function $(){A(f,he,1),A(m,he,0),A(y,W,0),A(f,he,1),A(y,W,0),A(C,W,1)}function G(X,Z,z){Z?X?(A(f,he,1),A(m,he,0),A(y,W,0),A(f,he,1),A(y,W,0),A(L,W,1),A(y,z,0),A(E,z,0),A(L,z,.5)):(A(f,he,1),A(m,he,0),A(C,W,1),A(m,he,0),A(L,W,0),A(C,W,1),A(C,z,1),A(L,z,0),A(P,z,1)):X?(A(y,z,0),A(E,z,0),A(O,z,.5)):(A(C,z,1),A(P,z,0),A(O,z,.5))}function de(X,Z){Z&&(X?(A(f,he,1),A(m,he,0),A(y,W,0),A(f,he,1),A(y,W,0),A(L,W,1),A(y,he,0),A(O,W,.5),A(L,W,1),A(O,W,.5),A(E,he,0),A(L,W,1)):(A(f,he,1),A(m,he,0),A(C,W,1),A(m,he,0),A(L,W,0),A(C,W,1),A(C,he,1),A(L,W,0),A(O,W,.5),A(O,W,.5),A(L,W,0),A(P,he,1)))}function xe(X,Z,z,k,b,M){switch(t.strokeLineCap){case"round":b?te(X,z,Z,M,.5):te(X,Z,z,M,.5);break;case"square":if(b)c.subVectors(Z,X),h.set(c.y,-c.x),u.addVectors(c,h).add(X),d.subVectors(h,c).add(X),k?(u.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(u.toArray(r,3),a[7]===1?d.toArray(r,9):u.toArray(r,9),d.toArray(r,0));else{c.subVectors(z,X),h.set(c.y,-c.x),u.addVectors(c,h).add(X),d.subVectors(h,c).add(X);let B=r.length;k?(u.toArray(r,B-3),d.toArray(r,B-6),d.toArray(r,B-12)):(d.toArray(r,B-6),u.toArray(r,B-3),d.toArray(r,B-12))}break;case"butt":default:break}}function D(X){let Z=!1;for(let k=1,b=X.length-1;k<b;k++)if(X[k].distanceTo(X[k+1])<s){Z=!0;break}if(!Z)return X;let z=[];z.push(X[0]);for(let k=1,b=X.length-1;k<b;k++)X[k].distanceTo(X[k+1])>=s&&z.push(X[k]);return z.push(X[X.length-1]),z}}};window.SlinkGrowthModules={createTile:Qs,VARIANTS:zc,TILE_SPEC:Oc,disposeTile:er};window.Slink3D=(()=>{let i=new oa,e,t=!1,n=null,s=!1,r=null,o=0,a,l,c,h,u,d=new Gs,p=[],g=[],x=[],m,f,S,_=!1,y,C=[],E=[],P=0,L=0,w=(b,M=.55,B={})=>new je({color:b,roughness:M,metalness:0,...B});function T(b,M,B,ce,j){let R=new vt;return R.moveTo(b+j,M),R.lineTo(b+B-j,M),R.quadraticCurveTo(b+B,M,b+B,M+j),R.lineTo(b+B,M+ce-j),R.quadraticCurveTo(b+B,M+ce,b+B-j,M+ce),R.lineTo(b+j,M+ce),R.quadraticCurveTo(b,M+ce,b,M+ce-j),R.lineTo(b,M+j),R.quadraticCurveTo(b,M,b+j,M),R}function N(b,M,B=0,ce=0,j=0,R=h){let v=new Oe(b,M);return v.position.set(B,ce,j),v.castShadow=!0,v.receiveShadow=!0,R.add(v),v}function O(b,M,B,ce,j,R,v,V,Y=h){return N(new vn(b,M,B,4,ce),j,R,v,V,Y)}function q(){let b=document.createElement("canvas");b.width=b.height=128;let M=b.getContext("2d"),B=M.createImageData(128,128),ce=73;for(let R=0;R<B.data.length;R+=4){ce=ce*1664525+1013904223>>>0;let v=128+(ce>>>27)%9;B.data[R]=B.data[R+1]=B.data[R+2]=v,B.data[R+3]=255}M.putImageData(B,0,0);let j=new mn(b);return j.wrapS=j.wrapT=Oi,j}let ne=()=>q();function oe(){let b=q(),M=b.image,B=M.getContext("2d");B.fillStyle="#656565";for(let ce=0;ce<4;ce++){let j=ce*Math.PI/2+.5;B.save(),B.translate(64+Math.cos(j)*18,64+Math.sin(j)*18),B.rotate(j),B.beginPath(),B.ellipse(0,0,18,9,0,0,Math.PI*2),B.fill(),B.restore()}return B.beginPath(),B.arc(64,64,5,0,Math.PI*2),B.fill(),b.needsUpdate=!0,b}function re(b){let M=document.createElement("canvas");M.width=M.height=128;let B=M.getContext("2d");B.fillStyle="#77421a",B.font="bold 82px Trebuchet MS",B.textAlign="center",B.textBaseline="middle",B.fillText(String(b),64,69);let ce=new mn(M);return ce.colorSpace=_t,ce}function he(b,M){let B=0;for(let j=0;j<b.length;j++){let R=b[j],v=b[(j+1)%b.length];B+=R.x*v.y-v.x*R.y}let ce=B>0?1:-1;return b.map((j,R)=>{let v=b[(R+b.length-1)%b.length],V=b[(R+1)%b.length],Y=j.clone().sub(v).normalize(),Q=V.clone().sub(j).normalize(),ee=new ve(Y.y,-Y.x).multiplyScalar(ce),ie=new ve(Q.y,-Q.x).multiplyScalar(ce),fe=ee.clone().add(ie).normalize();return j.clone().add(fe.multiplyScalar(M/Math.max(.25,fe.dot(ee))))})}function W(b){let M=new vt;return b.forEach((B,ce)=>ce?M.lineTo(B.x,-B.y):M.moveTo(B.x,-B.y)),M.closePath(),M}function ue(b,M){let B=new Set(b),ce=[];for(;B.size;){let j=B.values().next().value,R=[j];B.delete(j);for(let v=0;v<R.length;v++){let V=R[v];for(let Y of[V-M,V+M,V%M?V-1:-1,V%M<M-1?V+1:-1])B.has(Y)&&(B.delete(Y),R.push(Y))}ce.push(R)}return ce}function se(b,M,B){let ce=new Set(b),j=[],R=(V,Y)=>V>=0&&Y>=0&&V<M&&ce.has(Y*M+V);for(let V of b){let Y=V%M,Q=Math.floor(V/M),ee=20+Y*80,ie=20+Q*80;R(Y,Q-1)||j.push([[ee,ie],[ee+80,ie]]),R(Y+1,Q)||j.push([[ee+80,ie],[ee+80,ie+80]]),R(Y,Q+1)||j.push([[ee+80,ie+80],[ee,ie+80]]),R(Y-1,Q)||j.push([[ee,ie+80],[ee,ie]])}let v=[];for(;j.length;){let V=j.shift(),Y=V[0],Q=[Y],ee=V[1];for(;ee.join()!=Y.join();){Q.push(ee);let ie=j.findIndex(fe=>fe[0].join()==ee.join());if(ie<0)break;ee=j.splice(ie,1)[0][1]}Q=Q.filter((ie,fe)=>{let be=Q[(fe+Q.length-1)%Q.length],_e=Q[(fe+1)%Q.length];return!(be[0]===ie[0]&&_e[0]===ie[0]||be[1]===ie[1]&&_e[1]===ie[1])}),v.push(Q.map(ie=>new ve(...ie)))}return v.sort((V,Y)=>Math.abs(Ct.area(Y))-Math.abs(Ct.area(V))),v.map((V,Y)=>{let Q=he(V,Y?B:-B),ee=new vt;return Q.forEach((ie,fe)=>{let be=Q[(fe+Q.length-1)%Q.length],_e=Q[(fe+1)%Q.length],pe=Math.min(10,ie.distanceTo(be)/3,ie.distanceTo(_e)/3),Me=ie.clone().add(be.clone().sub(ie).normalize().multiplyScalar(pe)),we=ie.clone().add(_e.clone().sub(ie).normalize().multiplyScalar(pe));fe?ee.lineTo(Me.x,-Me.y):ee.moveTo(Me.x,-Me.y),ee.quadraticCurveTo(ie.x,-ie.y,we.x,-we.y)}),ee.closePath(),ee})}function ye(){u=document.createElement("canvas"),u.id="terrain3d",u.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(u),a=new ea({canvas:u,alpha:!0,antialias:!0,powerPreference:"high-performance"}),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.shadowMap.enabled=!0,a.shadowMap.autoUpdate=!1,a.shadowMap.needsUpdate=!0,a.shadowMap.type=io,a.outputColorSpace=_t,a.toneMapping=uo,a.toneMappingExposure=.88,l=new ws,l.add(new Vs("#fff6dc","#a28d6c",1.65));let b=new $i("#fff4dc",3.3);b.position.set(-300,450,750),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),Object.assign(b.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),b.shadow.bias=-3e-4,b.shadow.normalBias=.9,b.shadow.radius=4,l.add(b);let M=new $i("#d4e8ff",.4);M.position.set(500,-100,400),l.add(M),h=new Ve,l.add(h),e=fu(),e.setSize(90),l.add(e.group),c=new pi,c.up.set(0,1,0),c.near=1,c.far=3e3,f=new ResizeObserver(()=>Re()),f.observe(document.getElementById("board"));let B=(V,Y)=>{let Q=u.getBoundingClientRect();return d.setFromCamera(new ve((V-Q.left)/Q.width*2-1,-(Y-Q.top)/Q.height*2+1),c),d.intersectObjects(p,!1)[0]?.object.userData.cell??-1},ce=new Qt(new F(0,0,1),-8.5),j=new F,R=(V,Y)=>{let Q=u.getBoundingClientRect();return d.setFromCamera(new ve((V-Q.left)/Q.width*2-1,-(Y-Q.top)/Q.height*2+1),c),d.ray.intersectPlane(ce,j)?du(m.l.n,window.SlinkAcceptedPath||[],j.x,j.y,window.SlinkTouchSettings):-1},v=V=>{if(!_)return;let Y=performance.now();window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},input:Math.round(Math.max(0,Y-V.timeStamp))};let Q=y||V,ee=V.clientX-Q.clientX,ie=V.clientY-Q.clientY,fe=Math.max(1,Math.ceil(Math.hypot(ee,ie)/3));for(let be=1;be<=fe;be++){let _e=R(Q.clientX+ee*be/fe,Q.clientY+ie*be/fe);_e>=0&&m.onMove(_e)}y={clientX:V.clientX,clientY:V.clientY},window.SlinkTouchMetrics.handler=Math.round((performance.now()-Y)*10)/10};u.addEventListener("pointerdown",V=>{V.preventDefault(),u.setPointerCapture(V.pointerId),_=!0,t=B(V.clientX,V.clientY)===(window.SlinkAcceptedPath||[]).at(-1)||d.intersectObject(e.group,!0).length>0,y=null,v(V),document.getElementById("board").focus({preventScroll:!0})}),u.addEventListener("pointermove",V=>{let Y=V.getCoalescedEvents?.();for(let Q of Y?.length?Y:[V])v(Q)});for(let V of["pointerup","pointercancel","lostpointercapture"])u.addEventListener(V,()=>{_=!1,t=!1,y=null});u.addEventListener("webglcontextlost",V=>{V.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),u.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function Re(b=!1){if(!m)return;H=null;let M=document.getElementById("board"),B=M.clientWidth,ce=M.clientHeight;if(!B||!ce)return;a.setSize(B,ce,!1);let j=new pn().setFromObject(h);j.max.z=Math.max(j.max.z,60);let R=j.getCenter(new F);c.position.set(R.x,R.y-430,R.z+1250),c.lookAt(R.x,R.y,0),c.updateMatrixWorld();let v=l.children.find(_e=>_e.isDirectionalLight&&_e.castShadow);if(v){let _e=Math.max(j.max.x-j.min.x,j.max.y-j.min.y)*.75+60;v.target.position.set(R.x,R.y,0),l.add(v.target),Object.assign(v.shadow.camera,{left:-_e,right:_e,top:_e,bottom:-_e}),v.shadow.camera.updateProjectionMatrix()}let V=c.matrixWorldInverse,Y=new ve(1/0,1/0),Q=new ve(-1/0,-1/0);for(let _e of[j.min.x,j.max.x])for(let pe of[j.min.y,j.max.y])for(let Me of[j.min.z,j.max.z]){let we=new F(_e,pe,Me).applyMatrix4(V);Y.min(we),Q.max(we)}let ee=(Y.x+Q.x)/2,ie=(Y.y+Q.y)/2,fe=Math.max((Q.y-Y.y)/2,(Q.x-Y.x)/2/(B/ce))+13,be=fe*B/ce;Object.assign(c,{left:ee-be,right:ee+be,top:ie+fe,bottom:ie-fe}),c.updateProjectionMatrix(),a.shadowMap.needsUpdate=!0,b||te()}let Le=window.SlinkHeadFinale?.enabled!==!1,J=typeof location<"u"&&new URLSearchParams(location.search).has("preview")&&new URLSearchParams(location.search).has("camera-finale"),H=null,I={strength:115,duration:1.8,delay:.6};Le&&addEventListener("message",b=>{if(!(b.origin!==location.origin||b.source!==parent||b.data?.type!=="slink-head-zoom-study"))for(let[M,B,ce]of[["strength",100,160],["duration",.3,4],["delay",0,3]]){let j=Number(b.data[M]);Number.isFinite(j)&&(I[M]=ot.clamp(j,B,ce))}});function A(b){if(!J&&!Le){H&&(c.position.copy(H.position),c.quaternion.copy(H.rotation),Object.assign(c,H.bounds),c.updateProjectionMatrix(),H=null);return}if(b.celebrationAge<0){u.dataset.finaleCamera="0",H&&(c.position.copy(H.position),c.quaternion.copy(H.rotation),Object.assign(c,H.bounds),c.updateProjectionMatrix(),H=null);return}if(H||(H={position:c.position.clone(),rotation:c.quaternion.clone(),bounds:{left:c.left,right:c.right,top:c.top,bottom:c.bottom}}),Le&&!J){let v=ot.clamp((b.celebrationAge-I.delay)/I.duration,0,1);v=v*v*v*(v*(v*6-15)+10);let V=1+(I.strength/100-1)*v;c.updateMatrixWorld();let Y=new F(b.x,b.y,35).applyMatrix4(c.matrixWorldInverse),Q=H.bounds,ee=(Q.left+Q.right)/2,ie=(Q.top+Q.bottom)/2,fe=I.strength>100?v:0,be=ot.lerp(ee,Y.x,fe),_e=ot.lerp(ie,Y.y,fe),pe=(Q.right-Q.left)/2/V,Me=(Q.top-Q.bottom)/2/V;Object.assign(c,{left:be-pe,right:be+pe,top:_e+Me,bottom:_e-Me}),c.updateProjectionMatrix(),u.dataset.studyZoom=String(V);return}let M=ot.clamp((b.celebrationAge-.25)/2.5,0,1);M=M*M*M*(M*(M*6-15)+10);let B=new F(b.x,b.y-320,155),ce=c.clone();ce.up.set(0,0,1),ce.position.copy(B),ce.lookAt(b.x,b.y,35),c.position.lerpVectors(H.position,B,M),c.quaternion.copy(H.rotation).slerp(ce.quaternion,M);let j=85,R=u.clientWidth/u.clientHeight;for(let[v,V]of Object.entries({left:-j*R,right:j*R,top:j,bottom:-j}))c[v]=ot.lerp(H.bounds[v],V,M);c.updateProjectionMatrix(),u.dataset.finaleCamera=String(M)}function te(){a.render(l,c)}let $=null;function G(b){if(requestAnimationFrame(G),!a||!m||document.hidden||window.SlinkPrewarmPaused||document.getElementById("win")?.hidden===!1){L=b;return}if(b-L<33)return;P+=Math.min((b-L)/1e3,.1),L=b,i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220;let M=i.sample(b/1e3);Le=window.SlinkHeadFinale?.enabled!==!1,new URLSearchParams(location.search).has("head-finale")||(I={strength:window.SlinkHeadFinale?.strength??145,duration:window.SlinkHeadFinale?.duration??1.8,delay:window.SlinkHeadFinale?.delay??.6});let B=new URLSearchParams(location.search).has("preview")&&window.SlinkQuickFinale?.enabled;B?($??={...I},I={...$,duration:.55,delay:.05}):$&&(I=$,$=null),A(M),!M.moving&&window.SlinkTouchAcceptedAt!==void 0&&(window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},arrival:Math.round(performance.now()-window.SlinkTouchAcceptedAt)},window.SlinkTouchAcceptedAt=void 0),e.group.position.set(M.x,M.y,8.5+9.5*(C.find(j=>j.i===M.cell)?.progress||0)),e.group.rotation.z=M.heading,e.group.visible&&e.update(P,0,{active:M.moving,travel:M.travel,celebrationAge:B?M.celebrationAge:Le?M.celebrationAge-2.4:M.celebrationAge,headLiftAge:Le?M.celebrationAge-(B?.05:.9):-1,headLiftAngle:48*Math.PI/180,headLiftDuration:B?.35:1.5,celebrationTurn:M.celebrationTurn,celebrationStyle:B?"compact":"gentle"}),u.dataset.creatureCell=M.cell,u.dataset.creatureMoving=String(M.moving),u.dataset.creatureX=M.x,u.dataset.creatureY=M.y,u.dataset.creatureHeading=M.heading,u.dataset.creatureCelebration=M.celebrationAge,window.SlinkAudio?.celebration(M.celebrationAge);for(let j of E)j.update(P);let ce=window.SlinkBacktrackHighlight?.enabled!==!1&&t?(window.SlinkAcceptedPath||[]).at(-2):void 0;u.dataset.highlightedCell=ce??"";for(let j of C){if(yu(j.grown,j.i===ce,window.SlinkBacktrackHighlight?.strength??.24),j.meadow?.update(P),!j.grown)continue;let R=Math.min((b-j.changedAt)/j.duration,1);j.progress=j.from+(j.target-j.from)*Math.max(0,R);let v=j.progress;j.grown.scale.z=(8.5+9.5*v)/18,j.grown.position.z=0,j.grown.visible=v>0,j.lastOpacity!==v&&(j.lastOpacity=v,j.grown.traverse(V=>{V.isMesh&&(V.material.transparent=v<1,V.material.opacity=v,V.castShadow=v>.7)})),j.earth.visible=v<1}for(let j of x){let R=C.find(v=>v.i===j.i);j.goal.group.position.z=8.5+9.5*(R?.progress||0),j.goal.update(P,.033)}r?.update(P-o),u.dataset.birdCount=String(r?.bird?1:0),u.dataset.birdSpecies=r?.bird?.group.userData.species||"",u.dataset.birdGroundVisit=String(r?.bird?.group.userData.groundVisit??-1),a.shadowMap.needsUpdate=!0,te()}requestAnimationFrame(G);function de(b){let M=new Set,B=new Set,ce=new Set;b.traverse(j=>{j.geometry&&M.add(j.geometry);for(let R of[].concat(j.material||[])){B.add(R);for(let v of Object.values(R))v?.isTexture&&ce.add(v)}}),b.clear(),M.forEach(j=>j.dispose()),B.forEach(j=>j.dispose()),ce.forEach(j=>j.dispose())}function xe(){return{root:h,current:m,targets:p,grass:g,coins:x,tiles:C,liquids:E,fenceLife:r,fenceStarted:o}}function D(b){({root:h,current:m,targets:p,grass:g,coins:x,tiles:C,liquids:E,fenceLife:r=null,fenceStarted:o=P}=b)}function X(b,M,B){m={l:b,onMove:B},de(h),p=[],g=[],x=[],C=[],E=[],r=null,o=P;let ce=new ir,j=ce.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+M+'"/></svg>'),R=ir.createShapes(j.paths[0])[0].getPoints(24);R.pop();let v=W(he(R,11)),V=w("#f6dfb5",.62,{bumpMap:ne(),bumpScale:.18,side:Vt}),Y=[...b.water||[],...b.lava||[]],Q=_e=>({x:_e%b.n*80+60,y:-(Math.floor(_e/b.n)*80+60)}),ee=[];for(let[_e,pe]of[["water",b.water||[]],["lava",b.lava||[]]])for(let Me of ue(pe,b.n)){let we=se(Me,b.n,7);v.holes.push(we[0]),ee.push({type:_e,group:Me,shapes:we})}let ie=new Zt(v,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});N(ie,V,0,0,-24);for(let _e of ue(b.solution,b.n)){let pe=se(_e,b.n,0),Me=pe[0];Me.holes.push(...pe.slice(1)),N(new Os(Me),w("#87623d",.8),0,0,3.2)}for(let _e of b.solution){let pe=Q(_e);C.push({i:_e,p:pe,id:null,group:null})}for(let{type:_e,group:pe,shapes:Me}of ee){let we=Q(pe[0]),Ie=window.SlinkCatalogueDesign,Te=Pu(_e,{style:_e==="water"?Ie?.waterStyle||"sway":Ie?.lavaStyle||"bubbles",center:[we.x,we.y]});E.push(Te);let ze=Me[0];ze.holes.push(...Me.slice(1)),N(new Zt(ze,{depth:3,bevelEnabled:!1,curveSegments:20}),Te.material,0,0,-15)}let fe=Cu(b),be=new Map;for(let _e of b.stones||[]){let pe=fe.stones[_e];be.has(pe)||be.set(pe,Tu(pe,{seed:fe.seed}));let Me=be.get(pe).group.clone(!0),we=Q(_e);Me.position.set(we.x,we.y,0),Me.userData.cell=_e,h.add(Me),Me.traverse(Ie=>{Ie.isMesh&&(Ie.userData.cell=-1,p.push(Ie))})}if(b.fence){let _e=su(b),pe={n:b.n,walls:b.walls,origin:[60,-60],style:b.fence.style,design:b.fence.design};_e?(r=eu({...pe,seed:_e.seed,perchIndex:_e.perchIndex,groundTargets:()=>_e.cells.map(Me=>({cell:Me,center:!0,position:[Me%b.n*80+60,-Math.floor(Me/b.n)*80-60,8.5+9.5*(C.find(we=>we.i===Me)?.progress||0)]})),isUnsafe:Me=>ru(b,Me,window.SlinkAcceptedPath||[],i.complete)}),h.add(r.group)):h.add(na(pe).group)}else for(let[_e,pe]of b.walls){let Me=Q(_e),we=Q(pe);O(Me.x===we.x?53:9,Me.y===we.y?53:9,18,3,w("#a49983",.85),(Me.x+we.x)/2,(Me.y+we.y)/2,17)}for(let[_e,pe]of b.marks.entries()){let Me=Q(pe),we=Eu({species:fe.flowers[_e],number:_e+1,state:_e===0?"next":"closed",layout:"compact"});if(new URLSearchParams(location.search).has("preview")){let Ie=new URLSearchParams(location.search).get("flower-anchor"),Te={front:[-25,-22],back:[-25,22],compact:[-18,-10]}[Ie];if(Te)for(let ze of[we.group.children[0],we.group.children[4]])ze.position.x=Te[0],ze.position.z=-Te[1];if(Ie==="compact"){let ze=we.group.children[4],K=new Ve;K.scale.set(.85,.62,.85);for(let Ee of[...ze.children])K.add(Ee);ze.add(K)}}we.group.rotation.x=Math.PI/2,we.group.position.set(Me.x,Me.y,8.5),h.add(we.group),x.push({i:pe,goal:we})}a.shadowMap.needsUpdate=!0,s||Re(!0)}function Z(b){b.earth=xu(Qs("earth-loam",{seed:73+b.i*19})),b.group=b.earth,b.earth.position.set(b.p.x,b.p.y,0),h.add(b.earth),b.earth.traverse(M=>{M.isMesh&&M.userData.surface&&(M.userData.cell=b.i,p.push(M))}),b.progress=0,b.target=0,b.from=0,b.changedAt=performance.now(),b.duration=300}function z(b,M){if(!a||!m||n?.current.l===b)return!1;n&&(de(n.root),n=null);let B=xe(),ce=performance.now(),j=e.group.visible,R=a.getRenderTarget(),v,V;s=!0,D({root:new Ve,current:null,targets:[],grass:[],coins:[],tiles:[],liquids:[]}),V=h;try{X(b,M,()=>{});for(let Q of C)Z(Q);for(let Q of x)Q.goal.setSize(window.SlinkMarkerSize||27);n=xe(),l.remove(B.root),l.add(h),e.group.visible=!1;let Y=[];return h.traverse(Q=>{Q.isMesh&&(Y.push([Q,Q.frustumCulled]),Q.frustumCulled=!1)}),a.compile(l,c),v=new en(128,128),v.texture.colorSpace=a.outputColorSpace,a.setRenderTarget(v),a.shadowMap.needsUpdate=!0,te(),Y.forEach(([Q,ee])=>Q.frustumCulled=ee),u.dataset.nextPrepared=b.id,u.dataset.nextPrepareMs=Math.round(performance.now()-ce),!0}catch(Y){return console.warn("Next puzzle preparation:",Y),de(V),n=null,!1}finally{a.setRenderTarget(R),v?.dispose(),l.remove(V),l.add(B.root),e.group.visible=j,D(B),s=!1,a.shadowMap.needsUpdate=!0}}function k(b,M){l.remove(h),de(h),D(n),n=null,m={l:b,onMove:M},o=P,l.add(h),Re(!0),u.dataset.nextPrepared="",u.dataset.usedPrepared=b.id}return{prepare:z,diagnostics(){return a?{textures:a.info.memory.textures,geometries:a.info.memory.geometries,programs:a.info.programs.length,flowers:x.map(b=>b.goal.group.userData.species),bloomsReady:x.every(b=>b.goal.state==="bloom"&&b.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:h.children.filter(b=>b.userData.style&&b.userData.walkable===!1).map(b=>b.userData.style),bird:r?.bird?{species:r.bird.group.userData.species,landingCell:r.bird.group.userData.landingCell,groundVisit:r.bird.group.userData.groundVisit}:null,fence:m?.l.fence?{...m.l.fence,spans:h.getObjectByName("wood-fence")?.children.filter(b=>b.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:u.dataset.creatureCell,moving:u.dataset.creatureMoving,heading:u.dataset.creatureHeading,celebrationAge:u.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(b,M,B,ce){try{let j=performance.now(),R=m?.l!==b;a||ye();let v=performance.now();R&&(n?.current.l===b?k(b,ce):(n&&(de(n.root),n=null),X(b,B,ce),u.dataset.usedPrepared=""));let V=performance.now();M.at(-1)!==window.SlinkAcceptedPath?.at(-1)&&(window.SlinkTouchAcceptedAt=performance.now()),window.SlinkAcceptedPath=[...M],i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220,i.sync(b,M,performance.now()/1e3);let Y=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==Y.palette&&e.setPalette(Y.palette),e.setSize(Y.size),e.group.visible=Y.enabled!==!1,u.dataset.creatureVisible=String(e.group.visible);let Q=b.marks.find(ie=>!M.includes(ie));for(let ie of C){ie.group||Z(ie);let fe=M.includes(ie.i)?1:0;if(fe&&!ie.grown){if(ie.meadow=iu(b,ie.i),ie.grown=ie.meadow.group,b.marks.includes(ie.i))for(let be of[...ie.grown.children])!be.userData.surface&&be.position.x>0&&be.position.y<-3&&ie.grown.remove(be);ie.grown.position.set(ie.p.x,ie.p.y,0),h.add(ie.grown),ie.grown.traverse(be=>{be.isMesh&&be.userData.surface&&(be.userData.cell=ie.i,p.push(be))}),ie.grown.visible=!1}fe!==ie.target&&(ie.from=ie.progress,ie.target=fe,ie.changedAt=performance.now(),ie.duration=fe?300:180)}for(let ie of x){ie.goal.setState(M.includes(ie.i)?"bloom":ie.i===Q?"next":"closed"),ie.goal.setSize(window.SlinkMarkerSize||27);let fe=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};ie.goal.setInsects(fe.enabled),ie.goal.setVisitorSize("bee",fe.bee),ie.goal.setVisitorSize("bumblebee",fe.bumblebee)}if(R){let ie=i.sample(performance.now()/1e3);e.group.position.set(ie.x,ie.y,8.5),e.group.rotation.z=ie.heading,e.update(P,0,{active:!1})}let ee=performance.now();return a.shadowMap.needsUpdate=!0,te(),R&&(u.dataset.startup=JSON.stringify({install:Math.round(v-j),terrain:Math.round(V-v),tiles:Math.round(ee-V),firstRender:Math.round(performance.now()-ee),total:Math.round(performance.now()-j)})),!0}catch(j){return console.error("3D renderer:",j),document.getElementById("field").classList.remove("has-3d"),!1}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
