(()=>{var Mc=0,Za=1,Sc=2;var Ja=1,no=2,gn=3,Rn=0,Lt=1,Ft=2,Dn=0,ri=1,$a=2,Ka=3,ja=4,bc=5,Xn=100,Ec=101,Tc=102,wc=103,Ac=104,Rc=200,Cc=201,Ic=202,Pc=203,Cr=204,Ir=205,Lc=206,Dc=207,Uc=208,Nc=209,Fc=210,Oc=211,Bc=212,zc=213,kc=214,io=0,so=1,ro=2,oi=3,oo=4,ao=5,lo=6,co=7,Qa=0,Hc=1,Vc=2,Un=0,Gc=1,Wc=2,Xc=3,ho=4,qc=5,Yc=6,Zc=7;var el=300,pi=301,mi=302,uo=303,fo=304,Xs=306,Oi=1e3,Wn=1001,Pr=1002,Nt=1003,Jc=1004;var qs=1005;var It=1006,po=1007;var $n=1008;var an=1009,tl=1010,nl=1011,Ki=1012,mo=1013,Kn=1014,xn=1015,ji=1016,go=1017,xo=1018,Qi=1020,il=35902,sl=35899,rl=1021,ol=1022,Zt=1023,Bi=1026,es=1027,al=1028,_o=1029,ll=1030,yo=1031;var vo=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,Mo=35840,So=35841,bo=35842,Eo=35843,To=36196,wo=37492,Ao=37496,Ro=37808,Co=37809,Io=37810,Po=37811,Lo=37812,Do=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Ho=37821,Vo=36492,Go=36494,Wo=36495,Xo=36283,qo=36284,Yo=36285,Zo=36286;var gs=2300,Lr=2301,Rr=2302,Ua=2400,Na=2401,Fa=2402;var $c=3200,Kc=3201;var cl=0,jc=1,Nn="",xt="srgb",ai="srgb-linear",xs="linear",nt="srgb";var si=7680;var Oa=519,Qc=512,eh=513,th=514,hl=515,nh=516,ih=517,sh=518,rh=519,Ba=35044;var ul="300 es",Qt=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=1234567,fs=Math.PI/180,zi=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function fl(i,e){return(i%e+e)%e}function pu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mu(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function gu(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function xu(i,e=1){return e-Math.abs(fl(i,e*2)-e)}function _u(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mu(i,e){return i+Math.random()*(e-i)}function Su(i){return i*(.5-Math.random())}function bu(i){i!==void 0&&(Wl=i);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eu(i){return i*fs}function Tu(i){return i*zi}function wu(i){return(i&i-1)===0&&i!==0}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ln={DEG2RAD:fs,RAD2DEG:zi,generateUUID:gi,clamp:Ke,euclideanModulo:fl,mapLinear:pu,inverseLerp:mu,lerp:ds,damp:gu,pingpong:xu,smoothstep:_u,smootherstep:yu,randInt:vu,randFloat:Mu,randFloatSpread:Su,seededRandom:bu,degToRad:Eu,radToDeg:Tu,isPowerOfTwo:wu,ceilPowerOfTwo:Au,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:Ct,denormalize:Ni},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==p||h!==g){let m=1-a,u=c*d+l*p+h*g+f*x,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,u*T);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let v=a*T;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,f=f*m+x*v,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=I,l*=I,h*=I,f*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*p-l*d,e[t+1]=c*g+h*d+l*f-a*p,e[t+2]=l*g+h*p+a*d-c*f,e[t+3]=h*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"YZX":this._x=d*h*f+l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f-d*p*g;break;case"XZY":this._x=d*h*f-l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new k,Xl=new In,We=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],u=s[6],T=s[1],y=s[4],v=s[7],I=s[2],A=s[5],C=s[8];return r[0]=o*x+a*T+c*I,r[3]=o*m+a*y+c*A,r[6]=o*u+a*v+c*C,r[1]=l*x+h*T+f*I,r[4]=l*m+h*y+f*A,r[7]=l*u+h*v+f*C,r[2]=d*x+p*T+g*I,r[5]=d*m+p*y+g*A,r[8]=d*u+p*v+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ca=new We;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){let i=ys("canvas");return i.style.display="block",i}var ql={};function ki(i){i in ql||(ql[i]=!0,console.warn(i))}function ah(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Yl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iu(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Qe=Iu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Dr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=ys("canvas")),bi.width=e.width,bi.height=e.height;let s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pu=0,Hi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,ua=new k,Pt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=It,o=$n,a=Zt,c=an,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=gi(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=el;Pt.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(p+1)/2,I=(u+1)/2,A=(h+d)/4,C=(f+x)/4,D=(g+m)/4;return y>v&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=C/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ur=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Ur{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nr=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(r,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),or.subVectors(this.max,os),Ei.subVectors(e.a,os),Ti.subVectors(e.b,os),wi.subVectors(e.c,os),On.subVectors(Ti,Ei),Bn.subVectors(wi,Ti),ei.subVectors(Ei,wi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!fa(t,Ei,Ti,wi,or)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Ei,Ti,wi,or))?!1:(ar.crossVectors(On,Bn),t=[ar.x,ar.y,ar.z],fa(t,Ei,Ti,wi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new k,new k,new k,new k,new k,new k,new k,new k],$t=new k,rr=new dn,Ei=new k,Ti=new k,wi=new k,On=new k,Bn=new k,ei=new k,os=new k,or=new k,ar=new k,ti=new k;function fa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Du=new dn,as=new k,da=new k,li=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Du.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(da)),this.expandByPoint(as.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new k,pa=new k,lr=new k,zn=new k,ma=new k,cr=new k,ga=new k,Vi=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pa.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(pa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=zn.dot(this.direction),c=-zn.dot(lr),l=zn.lengthSq(),h=Math.abs(1-o*o),f,d,p,g;if(h>0)if(f=o*c-a,d=o*a-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pa).addScaledVector(lr,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){ma.subVectors(t,e),cr.subVectors(n,e),ga.crossVectors(ma,cr);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);let c=a*this.direction.dot(cr.crossVectors(zn,cr));if(c<0)return null;let l=a*this.direction.dot(ma.cross(zn));if(l<0||c+l>o)return null;let h=-a*zn.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,d,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,f,d,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=l*h,x=l*f;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=l*h,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Nu)}lookAt(e,t,n){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),kn.crossVectors(n,zt),kn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),kn.crossVectors(n,zt)),kn.normalize(),hr.crossVectors(zt,kn),s[0]=kn.x,s[4]=hr.x,s[8]=zt.x,s[1]=kn.y,s[5]=hr.y,s[9]=zt.y,s[2]=kn.z,s[6]=hr.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],T=n[3],y=n[7],v=n[11],I=n[15],A=s[0],C=s[4],D=s[8],S=s[12],E=s[1],V=s[5],W=s[9],$=s[13],j=s[2],re=s[6],te=s[10],le=s[14],X=s[3],ae=s[7],ie=s[11],pe=s[15];return r[0]=o*A+a*E+c*j+l*X,r[4]=o*C+a*V+c*re+l*ae,r[8]=o*D+a*W+c*te+l*ie,r[12]=o*S+a*$+c*le+l*pe,r[1]=h*A+f*E+d*j+p*X,r[5]=h*C+f*V+d*re+p*ae,r[9]=h*D+f*W+d*te+p*ie,r[13]=h*S+f*$+d*le+p*pe,r[2]=g*A+x*E+m*j+u*X,r[6]=g*C+x*V+m*re+u*ae,r[10]=g*D+x*W+m*te+u*ie,r[14]=g*S+x*$+m*le+u*pe,r[3]=T*A+y*E+v*j+I*X,r[7]=T*C+y*V+v*re+I*ae,r[11]=T*D+y*W+v*te+I*ie,r[15]=T*S+y*$+v*le+I*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*f-t*a*p-r*o*f+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-t*c*f+t*a*d+s*o*f-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],T=f*m*l-x*d*l+x*c*p-a*m*p-f*c*u+a*d*u,y=g*d*l-h*m*l-g*c*p+o*m*p+h*c*u-o*d*u,v=h*x*l-g*f*l+g*a*p-o*x*p-h*a*u+o*f*u,I=g*f*c-h*x*c-g*a*d+o*x*d+h*a*m-o*f*m,A=t*T+n*y+s*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=T*C,e[1]=(x*d*r-f*m*r-x*s*p+n*m*p+f*s*u-n*d*u)*C,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*C,e[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*p-n*c*p)*C,e[4]=y*C,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*u+t*d*u)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*C,e[8]=v*C,e[9]=(g*f*r-h*x*r-g*n*p+t*x*p+h*n*u-t*f*u)*C,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*C,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*p-t*a*p)*C,e[12]=I*C,e[13]=(h*x*s-g*f*s+g*n*d-t*x*d-h*n*m+t*f*m)*C,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*C,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,p=r*h,g=r*f,x=o*h,m=o*f,u=a*f,T=c*l,y=c*h,v=c*f,I=n.x,A=n.y,C=n.z;return s[0]=(1-(x+u))*I,s[1]=(p+v)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+u))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-T)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);let l=1/r,h=1/o,f=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Qt)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Qt)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new k,Kt=new ht,Uu=new k(0,0,0),Nu=new k(1,1,1),kn=new k,hr=new k,zt=new k,Jl=new ht,$l=new In,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fu=0,Kl=new k,Ri=new In,bn=new ht,ur=new k,ls=new k,Ou=new k,Bu=new In,jl=new k(1,0,0),Ql=new k(0,1,0),ec=new k(0,0,1),tc={type:"added"},zu={type:"removed"},Ci={type:"childadded",child:null},xa={type:"childremoved",child:null},bt=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new en,n=new In,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,ur,this.up):bn.lookAt(ur,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new k(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new k,En=new k,_a=new k,Tn=new k,Ii=new k,Pi=new k,nc=new k,ya=new k,va=new k,Ma=new k,Sa=new mt,ba=new mt,Ea=new mt,Gn=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),En.subVectors(n,t),_a.subVectors(e,t);let o=jt.dot(jt),a=jt.dot(En),c=jt.dot(_a),l=En.dot(En),h=En.dot(_a),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Sa.setScalar(0),ba.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),En.subVectors(e,t),jt.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),En.subVectors(this.a,this.b),jt.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Pi.subVectors(r,n),ya.subVectors(e,n);let c=Ii.dot(ya),l=Pi.dot(ya);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,s);let h=Ii.dot(va),f=Pi.dot(va);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ii,o);Ma.subVectors(e,r);let p=Ii.dot(Ma),g=Pi.dot(Ma);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Pi,a);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return nc.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(nc,a);let u=1/(m+x+d);return o=x*u,a=d*u,t.copy(n).addScaledVector(Ii,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=fl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=xt){Qe.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(fr);let n=ds(Hn.h,fr.h,t),s=ds(Hn.s,fr.s,t),r=ds(Hn.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Ve;Ve.NAMES=lh;var ku=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Ir,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ln=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new k,dr=new me,Hu=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}};var Ms=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ss=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vu=0,Yt=new ht,wa=new bt,Li=new k,kt=new dn,cs=new dn,St=new k,ut=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(kt.min,cs.min),kt.expandByPoint(St),St.addVectors(kt.max,cs.max),kt.expandByPoint(St)):(kt.expandByPoint(cs.min),kt.expandByPoint(cs.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)St.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(e,l),St.add(Li)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new k,c[D]=new k;let l=new k,h=new k,f=new k,d=new me,p=new me,g=new me,x=new k,m=new k;function u(D,S,E){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(l),f.sub(l),p.sub(d),g.sub(d);let V=1/(p.x*g.y-g.x*p.y);isFinite(V)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(V),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(V),a[D].add(x),a[S].add(x),a[E].add(x),c[D].add(m),c[S].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,S=T.length;D<S;++D){let E=T[D],V=E.start,W=E.count;for(let $=V,j=V+W;$<j;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}let y=new k,v=new k,I=new k,A=new k;function C(D){I.fromBufferAttribute(s,D),A.copy(I);let S=a[D];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(A,S);let V=v.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,V)}for(let D=0,S=T.length;D<S;++D){let E=T[D],V=E.start,W=E.count;for(let $=V,j=V+W;$<j;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let u=0;u<h;u++)d[g++]=l[p++]}return new Ht(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new ht,ni=new Vi,pr=new li,sc=new k,mr=new k,gr=new k,xr=new k,Aa=new k,_r=new k,rc=new k,yr=new k,Be=class extends bt{constructor(e=new ut,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Aa.fromBufferAttribute(f,e),o?_r.addScaledVector(Aa,h):_r.addScaledVector(Aa.sub(t),h))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(pr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(pr,sc)===null||ni.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),ni.copy(e.ray).applyMatrix4(ic),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,I=y;v<I;v+=3){let A=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);s=vr(this,u,e,n,l,h,f,A,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let T=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=vr(this,o,e,n,l,h,f,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,I=y;v<I;v+=3){let A=v,C=v+1,D=v+2;s=vr(this,u,e,n,l,h,f,A,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let T=m,y=m+1,v=m+2;s=vr(this,o,e,n,l,h,f,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gu(i,e,t,n,s,r,o,a){let c;if(e.side===Lt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Rn,a),c===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(yr);return l<t.near||l>t.far?null:{distance:l,point:yr.clone(),object:i}}function vr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,mr),i.getVertexPosition(c,gr),i.getVertexPosition(l,xr);let h=Gu(i,e,t,n,mr,gr,xr,rc);if(h){let f=new k;Gn.getBarycoord(rc,mr,gr,xr,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,c,l,f,new me)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,c,l,f,new me)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,c,l,f,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new k,materialIndex:0};Gn.getNormal(mr,gr,xr,d.normal),h.face=d,h.barycoord=f}return h}var qn=class i extends ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function g(x,m,u,T,y,v,I,A,C,D,S){let E=v/C,V=I/D,W=v/2,$=I/2,j=A/2,re=C+1,te=D+1,le=0,X=0,ae=new k;for(let ie=0;ie<te;ie++){let pe=ie*V-$;for(let J=0;J<re;J++){let ce=J*E-W;ae[x]=ce*T,ae[m]=pe*y,ae[u]=j,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[u]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),f.push(J/C),f.push(1-ie/D),le+=1}}for(let ie=0;ie<D;ie++)for(let pe=0;pe<C;pe++){let J=d+pe+re*ie,ce=d+pe+re*(ie+1),O=d+(pe+1)+re*(ie+1),N=d+(pe+1)+re*ie;c.push(J,ce,N),c.push(ce,O,N),X+=6}a.addGroup(p,X,S),p+=X,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Wu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var ch={clone:xi,merge:At},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new k,oc=new me,ac=new me,Ut=class extends bs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,oc,ac),t.subVectors(ac,oc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ui=1,Fr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Di,Ui,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Di,Ui,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Di,Ui,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Di,Ui,e,t);a.layers=this.layers,this.add(a);let c=new Ut(Di,Ui,e,t);c.layers=this.layers,this.add(c);let l=new Ut(Di,Ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Pt{constructor(e=[],t=pi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=It),new Fr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ze=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yu={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ts=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yn=class extends Pt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Nt,h=Nt,f,d){super(null,o,a,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ra=new k,Zu=new k,Ju=new We,un=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ra.subVectors(n,t).cross(Zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ju.getNormalMatrix(e),s=this.coplanarPoint(Ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new li,$u=new me(.5,.5),Mr=new k,Xi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],T=r[12],y=r[13],v=r[14],I=r[15];if(s[0].setComponents(l-o,p-h,u-g,I-T).normalize(),s[1].setComponents(l+o,p+h,u+g,I+T).normalize(),s[2].setComponents(l+a,p+f,u+x,I+y).normalize(),s[3].setComponents(l-a,p-f,u-x,I-y).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,p-d,u-m,I-v).normalize();else if(s[4].setComponents(l-c,p-d,u-m,I-v).normalize(),t===Qt)s[5].setComponents(l+c,p+d,u+m,I+v).normalize();else if(t===_s)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=$u.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Br=new k,zr=new k,lc=new ht,hs=new Vi,Sr=new li,Ca=new k,cc=new k,kr=class extends bt{constructor(e=new ut,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Br.fromBufferAttribute(t,s-1),zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Br.distanceTo(zr);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;lc.copy(s).invert(),hs.copy(e.ray).applyMatrix4(lc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=h.getX(x),T=h.getX(x+1),y=br(this,e,hs,c,u,T,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),u=br(this,e,hs,c,x,m,g-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=br(this,e,hs,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=br(this,e,hs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function br(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Br.fromBufferAttribute(a,s),zr.fromBufferAttribute(a,r),t.distanceSqToSegment(Br,zr,Ca,cc)>n)return;Ca.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ca);if(!(l<e.near||l>e.far))return{distance:l,point:cc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var hc=new k,uc=new k,ws=class extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hc.fromBufferAttribute(t,s),uc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hc.distanceTo(uc);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pn=class extends Pt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Pt{constructor(e,t,n=Kn,s,r,o,a=Nt,c=Nt,l,h=Bi,f=1){if(h!==Bi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Cs=class i extends ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new k,h=new me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let p=n+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nn=class i extends ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,x=[],m=n/2,u=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function T(){let v=new k,I=new k,A=0,C=(t-e)/n;for(let D=0;D<=r;D++){let S=[],E=D/r,V=E*(t-e)+e;for(let W=0;W<=s;W++){let $=W/s,j=$*c+a,re=Math.sin(j),te=Math.cos(j);I.x=V*re,I.y=-E*n+m,I.z=V*te,f.push(I.x,I.y,I.z),v.set(re,C,te).normalize(),d.push(v.x,v.y,v.z),p.push($,1-E),S.push(g++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let E=x[S][D],V=x[S+1][D],W=x[S+1][D+1],$=x[S][D+1];(e>0||S!==0)&&(h.push(E,V,$),A+=3),(t>0||S!==r-1)&&(h.push(V,W,$),A+=3)}l.addGroup(u,A,0),u+=A}function y(v){let I=g,A=new me,C=new k,D=0,S=v===!0?e:t,E=v===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let V=g;for(let W=0;W<=s;W++){let j=W/s*c+a,re=Math.cos(j),te=Math.sin(j);C.x=S*te,C.y=m*E,C.z=S*re,f.push(C.x,C.y,C.z),d.push(0,E,0),A.x=re*.5+.5,A.y=te*.5*E+.5,p.push(A.x,A.y),g++}for(let W=0;W<s;W++){let $=I+W,j=V+W;v===!0?h.push(j,j+1,$):h.push(j+1,j,$),D+=3}l.addGroup(u,D,v===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new me:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new ht;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*f+this.aX,l=d*f+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hr=class extends Yi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Er=new k,Ia=new ml,Pa=new ml,La=new ml,sn=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),l=Er);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ia.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,x,m),Pa.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,x,m),La.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Pa.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),La.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),Pa.calc(c),La.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ku(i,e){let t=1-i;return t*t*e}function ju(i,e){return 2*(1-i)*i*e}function Qu(i,e){return i*i*e}function ps(i,e,t,n){return Ku(i,e)+ju(i,t)+Qu(i,n)}function ef(i,e){let t=1-i;return t*t*t*e}function tf(i,e){let t=1-i;return 3*t*t*i*e}function nf(i,e){return 3*(1-i)*i*i*e}function sf(i,e){return i*i*i*e}function ms(i,e,t,n,s){return ef(i,e)+tf(i,t)+nf(i,n)+sf(i,s)}var Is=class extends Vt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zi=class extends Vt{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Vt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Vt{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Vt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Vt{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(fc(a,c.x,l.x,h.x,f.x),fc(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Gr=Object.freeze({__proto__:null,ArcCurve:Hr,CatmullRomCurve3:sn,CubicBezierCurve:Is,CubicBezierCurve3:Zi,EllipseCurve:Yi,LineCurve:Ps,LineCurve3:Vr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Ds,SplineCurve:Us}),Wr=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Gr[s.type]().fromJSON(s))}return this}},mn=class extends Wr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Is(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Yi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends mn{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mn().fromJSON(s))}return this}};function rf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=hh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=hf(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,f=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Ns(r,o,t,a,c,l,0),o}function hh(i,e,t,n,s){let r;if(s===Mf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=dc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dc(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Os(r),r=r.next),r}function ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||pt(t.prev,t,t.next)===0)){if(Os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?af(i,n,s,r):of(i)){e.push(c.i,i.i,l.i),Os(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=lf(ci(i),e),Ns(i,e,t,n,s,r,2)):o===2&&cf(i,e,t,n,s,r):Ns(ci(i),e,t,n,s,r,1);break}}}function of(i){let e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&us(s,a,r,c,o,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function af(i,e,t,n){let s=i.prev,r=i,o=i.next;if(pt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,d=o.y,p=Math.min(a,c,l),g=Math.min(h,f,d),x=Math.max(a,c,l),m=Math.max(h,f,d),u=za(p,g,e,t,n),T=za(x,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=u&&v&&v.z<=T;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,f,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,c,f,l,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=u;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,f,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,c,f,l,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&fh(n,t,t.next,s)&&Fs(n,s)&&Fs(s,n)&&(e.push(n.i,t.i,s.i),Os(t),Os(t.next),t=i=s),t=t.next}while(t!==i);return ci(t)}function cf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_f(o,a)){let c=dh(o,a);o=ci(o,o.next),c=ci(c,c.next),Ns(o,e,t,n,s,r,0),Ns(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=hh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(xf(l))}s.sort(uf);for(let r=0;r<s.length;r++)t=ff(s[r],t);return t}function uf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ff(i,e){let t=df(i,e);if(!t)return e;let n=dh(t,i);return ci(n,n.next),ci(t,t.next)}function df(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&uh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Fs(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&pf(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function pf(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function mf(i,e,t,n){let s=i;do s.z===0&&(s.z=za(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gf(s)}function gf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function za(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&uh(i,e,t,n,s,r,o,a)}function _f(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yf(i,e)&&(Fs(i,e)&&Fs(e,i)&&vf(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||Ji(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function fh(i,e,t,n){let s=wr(pt(i,e,t)),r=wr(pt(i,e,n)),o=wr(pt(t,n,i)),a=wr(pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Tr(i,t,e)||r===0&&Tr(i,n,e)||o===0&&Tr(t,i,n)||a===0&&Tr(t,e,n))}function Tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wr(i){return i>0?1:i<0?-1:0}function yf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fs(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function vf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){let t=ka(i.i,i.x,i.y),n=ka(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dc(i,e,t,n){let s=ka(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ka(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ha=class{static triangulate(e,t,n=2){return rf(e,t,n)}},wt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pc(e),mc(n,e);let o=e.length;t.forEach(pc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,mc(n,t[c]);let a=Ha.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function pc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gt=class i extends ut{constructor(e=new _t([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Sf,y,v=!1,I,A,C,D;u&&(y=u.getSpacedPoints(h),v=!0,d=!1,I=u.computeFrenetFrames(h,!1),A=new k,C=new k,D=new k),d||(m=0,p=0,g=0,x=0);let S=a.extractPoints(l),E=S.shape,V=S.holes;if(!wt.isClockWise(E)){E=E.reverse();for(let z=0,H=V.length;z<H;z++){let Y=V[z];wt.isClockWise(Y)&&(V[z]=Y.reverse())}}function $(z){let Y=10000000000000001e-36,q=z[0];for(let B=1;B<=z.length;B++){let w=B%z.length,Z=z[w],ge=Z.x-q.x,ve=Z.y-q.y,U=ge*ge+ve*ve,b=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(q.x),Math.abs(q.y)),ee=Y*b*b;if(U<=ee){z.splice(w,1),B--;continue}q=Z}}$(E),V.forEach($);let j=V.length,re=E;for(let z=0;z<j;z++){let H=V[z];E=E.concat(H)}function te(z,H,Y){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(H,Y)}let le=E.length;function X(z,H,Y){let q,B,w,Z=z.x-H.x,ge=z.y-H.y,ve=Y.x-z.x,U=Y.y-z.y,b=Z*Z+ge*ge,ee=Z*U-ge*ve;if(Math.abs(ee)>Number.EPSILON){let he=Math.sqrt(b),xe=Math.sqrt(ve*ve+U*U),ue=H.x-ge/he,Re=H.y+Z/he,ye=Y.x-U/xe,Te=Y.y+ve/xe,Le=((ye-ue)*U-(Te-Re)*ve)/(Z*U-ge*ve);q=ue+Z*Le-z.x,B=Re+ge*Le-z.y;let Me=q*q+B*B;if(Me<=2)return new me(q,B);w=Math.sqrt(Me/2)}else{let he=!1;Z>Number.EPSILON?ve>Number.EPSILON&&(he=!0):Z<-Number.EPSILON?ve<-Number.EPSILON&&(he=!0):Math.sign(ge)===Math.sign(U)&&(he=!0),he?(q=-ge,B=Z,w=Math.sqrt(b)):(q=Z,B=ge,w=Math.sqrt(b/2))}return new me(q/w,B/w)}let ae=[];for(let z=0,H=re.length,Y=H-1,q=z+1;z<H;z++,Y++,q++)Y===H&&(Y=0),q===H&&(q=0),ae[z]=X(re[z],re[Y],re[q]);let ie=[],pe,J=ae.concat();for(let z=0,H=j;z<H;z++){let Y=V[z];pe=[];for(let q=0,B=Y.length,w=B-1,Z=q+1;q<B;q++,w++,Z++)w===B&&(w=0),Z===B&&(Z=0),pe[q]=X(Y[q],Y[w],Y[Z]);ie.push(pe),J=J.concat(pe)}let ce;if(m===0)ce=wt.triangulateShape(re,V);else{let z=[],H=[];for(let Y=0;Y<m;Y++){let q=Y/m,B=p*Math.cos(q*Math.PI/2),w=g*Math.sin(q*Math.PI/2)+x;for(let Z=0,ge=re.length;Z<ge;Z++){let ve=te(re[Z],ae[Z],w);G(ve.x,ve.y,-B),q===0&&z.push(ve)}for(let Z=0,ge=j;Z<ge;Z++){let ve=V[Z];pe=ie[Z];let U=[];for(let b=0,ee=ve.length;b<ee;b++){let he=te(ve[b],pe[b],w);G(he.x,he.y,-B),q===0&&U.push(he)}q===0&&H.push(U)}}ce=wt.triangulateShape(z,H)}let O=ce.length,N=g+x;for(let z=0;z<le;z++){let H=d?te(E[z],J[z],N):E[z];v?(C.copy(I.normals[0]).multiplyScalar(H.x),A.copy(I.binormals[0]).multiplyScalar(H.y),D.copy(y[0]).add(C).add(A),G(D.x,D.y,D.z)):G(H.x,H.y,0)}for(let z=1;z<=h;z++)for(let H=0;H<le;H++){let Y=d?te(E[H],J[H],N):E[H];v?(C.copy(I.normals[z]).multiplyScalar(Y.x),A.copy(I.binormals[z]).multiplyScalar(Y.y),D.copy(y[z]).add(C).add(A),G(D.x,D.y,D.z)):G(Y.x,Y.y,f/h*z)}for(let z=m-1;z>=0;z--){let H=z/m,Y=p*Math.cos(H*Math.PI/2),q=g*Math.sin(H*Math.PI/2)+x;for(let B=0,w=re.length;B<w;B++){let Z=te(re[B],ae[B],q);G(Z.x,Z.y,f+Y)}for(let B=0,w=V.length;B<w;B++){let Z=V[B];pe=ie[B];for(let ge=0,ve=Z.length;ge<ve;ge++){let U=te(Z[ge],pe[ge],q);v?G(U.x,U.y+y[h-1].y,y[h-1].x+Y):G(U.x,U.y,f+Y)}}}M(),_();function M(){let z=s.length/3;if(d){let H=0,Y=le*H;for(let q=0;q<O;q++){let B=ce[q];F(B[2]+Y,B[1]+Y,B[0]+Y)}H=h+m*2,Y=le*H;for(let q=0;q<O;q++){let B=ce[q];F(B[0]+Y,B[1]+Y,B[2]+Y)}}else{for(let H=0;H<O;H++){let Y=ce[H];F(Y[2],Y[1],Y[0])}for(let H=0;H<O;H++){let Y=ce[H];F(Y[0]+le*h,Y[1]+le*h,Y[2]+le*h)}}n.addGroup(z,s.length/3-z,0)}function _(){let z=s.length/3,H=0;P(re,H),H+=re.length;for(let Y=0,q=V.length;Y<q;Y++){let B=V[Y];P(B,H),H+=B.length}n.addGroup(z,s.length/3-z,1)}function P(z,H){let Y=z.length;for(;--Y>=0;){let q=Y,B=Y-1;B<0&&(B=z.length-1);for(let w=0,Z=h+m*2;w<Z;w++){let ge=le*w,ve=le*(w+1),U=H+q+ge,b=H+B+ge,ee=H+B+ve,he=H+q+ve;K(U,b,ee,he)}}}function G(z,H,Y){c.push(z),c.push(H),c.push(Y)}function F(z,H,Y){ne(z),ne(H),ne(Y);let q=s.length/3,B=T.generateTopUV(n,s,q-3,q-2,q-1);R(B[0]),R(B[1]),R(B[2])}function K(z,H,Y,q){ne(z),ne(H),ne(q),ne(H),ne(Y),ne(q);let B=s.length/3,w=T.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);R(w[0]),R(w[1]),R(w[3]),R(w[1]),R(w[2]),R(w[3])}function ne(z){s.push(c[z*3+0]),s.push(c[z*3+1]),s.push(c[z*3+2])}function R(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gr[s.type]().fromJSON(s)),new i(n,e.options)}},Sf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new me(r,o),new me(a,c),new me(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-f),new me(d,1-g),new me(x,1-u)]:[new me(a,1-c),new me(h,1-f),new me(p,1-g),new me(m,1-u)]}};function bf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hi=class i extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let T=u*d-o;for(let y=0;y<l;y++){let v=y*f-r;g.push(v,-T,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<a;T++){let y=T+l*u,v=T+l*(u+1),I=T+1+l*(u+1),A=T+1+l*u;p.push(y,v,A),p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bs=class i extends ut{constructor(e=new _t([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(o,2));function l(h){let f=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;wt.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){let T=g[m];wt.isClockWise(T)===!0&&(g[m]=T.reverse())}let x=wt.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){let T=g[m];p=p.concat(T)}for(let m=0,u=p.length;m<u;m++){let T=p[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,u=x.length;m<u;m++){let T=x[m],y=T[0]+f,v=T[1]+f,I=T[2]+f;n.push(y,v,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ef(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Ef(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ct=class i extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new k,d=new k,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let T=[],y=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&c===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let A=I/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(A+v,1-y),T.push(l++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){let y=h[u][T+1],v=h[u][T],I=h[u+1][T],A=h[u+1][T+1];(u!==0||o>0)&&p.push(y,v,A),(u!==n-1||c<Math.PI)&&p.push(v,I,A)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class i extends ut{constructor(e=new Ds(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,c=new k,l=new me,h=new k,f=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),u()}function m(y){h=e.getPointAt(y/t,h);let v=o.normals[y],I=o.binormals[y];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);c.x=S*v.x+D*I.x,c.y=S*v.y+D*I.y,c.z=S*v.z+D*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let I=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),C=(s+1)*y+v,D=(s+1)*(y-1)+v;g.push(I,A,D),g.push(A,C,D)}}function T(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Gr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var it=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ua,endingEnd:Ua}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Na:r=e,a=2*t-n;break;case Fa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Na:o=e,c=2*n-t;break;case Fa:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let I=0;I!==a;++I)r[I]=u*o[h+I]+T*o[l+I]+y*o[c+I]+v*o[f+I];return r}},Zr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},Jr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case Rr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Tf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Lr;var Zn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="color";var Kr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="number";var jr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},zs=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="vector";var Va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},eo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ph=new eo,fi=class{constructor(e){this.manager=e!==void 0?e:ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var wn={},Ga=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Va.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:s});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wn[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(u){T();function T(){f.read().then(({done:y,value:v})=>{if(y)u.close();else{x+=v.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let A=0,C=h.length;A<C;A++){let D=h[A];D.onProgress&&D.onProgress(I)}u.enqueue(v),T()}},y=>{u.error(y)})}}});return new Response(m)}else throw new Ga(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Va.add(`file:${e}`,l);let h=wn[e];delete wn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete wn[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Da=new ht,gc=new k,xc=new k,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var di=class extends bs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xa=class extends Wa{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Xa}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var to=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",wf=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",Af="[^"+gl.replace("\\.","")+"]",Rf=/((?:WC+[\/:])*)/.source.replace("WC",xl),Cf=/(WCOD+)?/.source.replace("WCOD",Af),If=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Lf=new RegExp("^"+Rf+Cf+If+Pf+"$"),Df=["material","materials","bones","map"],qa=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){let t=Lf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=qa;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b0=new Float32Array(1);var _c=new ht,Gs=class{constructor(e,t,n=0,s=1/0){this.ray=new Vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _c.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_c),this}intersectObject(e,t=!0,n=[]){return Ya(e,this,n,t),n.sort(yc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ya(e[s],this,n,t);return n.sort(yc),n}};function yc(i,e){return i.distance-e.distance}function Ya(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ya(r[o],e,t,!0)}}var vc=new me,Ws=class{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var on=class{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(u){let T=[];for(let y=0,v=u.length;y<v;y++){let I=u[y],A=new _t;A.curves=I.curves,T.push(A)}return T}function n(u,T){let y=T.length,v=!1;for(let I=y-1,A=0;A<y;I=A++){let C=T[I],D=T[A],S=D.x-C.x,E=D.y-C.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(C=T[A],S=-S,D=T[I],E=-E),u.y<C.y||u.y>D.y)continue;if(u.y===C.y){if(u.x===C.x)return!0}else{let V=E*(u.x-C.x)-S*(u.y-C.y);if(V===0)return!0;if(V<0)continue;v=!v}}else{if(u.y!==C.y)continue;if(D.x<=u.x&&u.x<=C.x||C.x<=u.x&&u.x<=D.x)return!0}}return v}let s=wt.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new _t,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;let f=[],d=[],p=[],g=0,x;d[g]=void 0,p[g]=[];for(let u=0,T=r.length;u<T;u++)a=r[u],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new _t,p:x},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let u=!1,T=0;for(let y=0,v=d.length;y<v;y++)f[y]=[];for(let y=0,v=d.length;y<v;y++){let I=p[y];for(let A=0;A<I.length;A++){let C=I[A],D=!0;for(let S=0;S<d.length;S++)n(C.p,d[S].p)&&(y!==S&&T++,D?(D=!1,f[S].push(C)):u=!0);D&&f[y].push(C)}}T>0&&u===!1&&(p=f)}let m;for(let u=0,T=d.length;u<T;u++){c=d[u].s,l.push(c),m=p[u];for(let y=0,v=m.length;y<v;y++)c.holes.push(m[y].h)}return l}};function _l(i,e,t,n){let s=Uf(n);switch(t){case rl:return i*e;case al:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case ll:return i*e*2/s.components*s.byteLength;case yo:return i*e*2/s.components*s.byteLength;case ol:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(e,8)/4;case Mo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case To:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Go:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uf(i){switch(i){case an:case tl:return{byteLength:1,components:1};case Ki:case nl:case ji:return{byteLength:2,components:1};case go:case xo:return{byteLength:2,components:4};case Kn:case mo:case xn:return{byteLength:4,components:1};case il:case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Bh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ff(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Nd=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:fd,colorspace_fragment:dd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:xd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Cd,envmap_vertex:yd,fog_vertex:vd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:bd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:Td,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ad,lights_pars_begin:Rd,lights_toon_fragment:Id,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Dd,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:Gd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:jd,morphtarget_vertex:Qd,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:fp,project_vertex:dp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:yp,shadowmap_vertex:vp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:bp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:wp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Ip,transmission_pars_fragment:Pp,uv_pars_fragment:Lp,uv_pars_vertex:Dp,uv_vertex:Up,worldpos_vertex:Np,background_vert:Fp,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:kp,cube_frag:Hp,depth_vert:Vp,depth_frag:Gp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:$p,meshbasic_frag:Kp,meshlambert_vert:jp,meshlambert_frag:Qp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:om,meshphysical_frag:am,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:At([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:At([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:At([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:At([Ce.points,Ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:At([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:At([Ce.common,Ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:At([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:At([Ce.sprite,Ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:At([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:At([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:At([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Jo={r:0,b:0,g:0},_i=new en,gm=new ht;function xm(i,e,t,n,s,r,o){let a=new Ve(0),c=r===!0?0:1,l,h,f=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,I=g(y);I===null?u(a,c):I&&I.isColor&&(u(I,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let I=g(v);I&&(I.isCubeTexture||I.mapping===Xs)?(h===void 0&&(h=new Be(new qn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:xi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(_i)),h.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,(f!==I||d!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=I,d=I.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Be(new hi(2,2),new tn({name:"BackgroundMaterial",uniforms:xi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,v){y.getRGB(Jo,pl(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(a,c)},render:x,addToRenderList:m,dispose:T}}function _m(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,V,W,$,j){let re=!1,te=f($,W,V);r!==te&&(r=te,l(r.object)),re=p(E,$,W,j),re&&g(E,$,W,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,v(E,V,W,$),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,V,W){let $=W.wireframe===!0,j=n[E.id];j===void 0&&(j={},n[E.id]=j);let re=j[V.id];re===void 0&&(re={},j[V.id]=re);let te=re[$];return te===void 0&&(te=d(c()),re[$]=te),te}function d(E){let V=[],W=[],$=[];for(let j=0;j<t;j++)V[j]=0,W[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:$,object:E,attributes:{},index:null}}function p(E,V,W,$){let j=r.attributes,re=V.attributes,te=0,le=W.getAttributes();for(let X in le)if(le[X].location>=0){let ie=j[X],pe=re[X];if(pe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;te++}return r.attributesNum!==te||r.index!==$}function g(E,V,W,$){let j={},re=V.attributes,te=0,le=W.getAttributes();for(let X in le)if(le[X].location>=0){let ie=re[X];ie===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));let pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),j[X]=pe,te++}r.attributes=j,r.attributesNum=te,r.index=$}function x(){let E=r.newAttributes;for(let V=0,W=E.length;V<W;V++)E[V]=0}function m(E){u(E,0)}function u(E,V){let W=r.newAttributes,$=r.enabledAttributes,j=r.attributeDivisors;W[E]=1,$[E]===0&&(i.enableVertexAttribArray(E),$[E]=1),j[E]!==V&&(i.vertexAttribDivisor(E,V),j[E]=V)}function T(){let E=r.newAttributes,V=r.enabledAttributes;for(let W=0,$=V.length;W<$;W++)V[W]!==E[W]&&(i.disableVertexAttribArray(W),V[W]=0)}function y(E,V,W,$,j,re,te){te===!0?i.vertexAttribIPointer(E,V,W,j,re):i.vertexAttribPointer(E,V,W,$,j,re)}function v(E,V,W,$){x();let j=$.attributes,re=W.getAttributes(),te=V.defaultAttributeValues;for(let le in re){let X=re[le];if(X.location>=0){let ae=j[le];if(ae===void 0&&(le==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),le==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){let ie=ae.normalized,pe=ae.itemSize,J=e.get(ae);if(J===void 0)continue;let ce=J.buffer,O=J.type,N=J.bytesPerElement,M=O===i.INT||O===i.UNSIGNED_INT||ae.gpuType===mo;if(ae.isInterleavedBufferAttribute){let _=ae.data,P=_.stride,G=ae.offset;if(_.isInstancedInterleavedBuffer){for(let F=0;F<X.locationSize;F++)u(X.location+F,_.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_.meshPerAttribute*_.count)}else for(let F=0;F<X.locationSize;F++)m(X.location+F);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let F=0;F<X.locationSize;F++)y(X.location+F,pe/X.locationSize,O,ie,P*N,(G+pe/X.locationSize*F)*N,M)}else{if(ae.isInstancedBufferAttribute){for(let _=0;_<X.locationSize;_++)u(X.location+_,ae.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _=0;_<X.locationSize;_++)m(X.location+_);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let _=0;_<X.locationSize;_++)y(X.location+_,pe/X.locationSize,O,ie,pe*N,pe/X.locationSize*_*N,M)}}else if(te!==void 0){let ie=te[le];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}T()}function I(){D();for(let E in n){let V=n[E];for(let W in V){let $=V[W];for(let j in $)h($[j].object),delete $[j];delete V[W]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;let V=n[E.id];for(let W in V){let $=V[W];for(let j in $)h($[j].object),delete $[j];delete V[W]}delete n[E.id]}function C(E){for(let V in n){let W=n[V];if(W[E.id]===void 0)continue;let $=W[E.id];for(let j in $)h($[j].object),delete $[j];delete W[E.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function ym(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function c(l,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function Mm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new un,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:n,y=T*4,v=u.clippingState||null;c.value=v,v=h(g,d,y,p);for(let I=0;I!==y;++I)v[I]=t[I];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Sm(i){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=pi:a===fo&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===uo||a===fo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Or(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,mh=[.125,.215,.35,.446,.526,.582],Mi=20,yl=new di,gh=new Ve,vl=null,Ml=0,Sl=0,bl=!1,vi=(1+Math.sqrt(5))/2,ts=1/vi,xh=[new k(-vi,ts,0),new k(vi,ts,0),new k(-ts,0,vi),new k(ts,0,vi),new k(0,vi,-ts),new k(0,vi,ts),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],bm=new k,jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=bm}=r;vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,Ml,Sl),this._renderer.xr.enabled=bl,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:ji,format:Zt,colorSpace:ai,depthBuffer:!1},s=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=Tm(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,s,r){let c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(gh),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new Ln({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new Be(new qn,x),u=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(gh),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let I=this._cubeSize;$o(s,v*I,y>2?I:0,I,I),f.setRenderTarget(s),u&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$o(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(s-r-1)%xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Be(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let u=[],T=0;for(let C=0;C<Mi;++C){let D=C/x,S=Math.exp(-D*D/2);u.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[s],I=3*v*(s>y-ns?s-y+ns:0),A=4*(this._cubeSize-v);$o(t,I,A,3*v,2*v),c.setRenderTarget(t),c.render(f,yl)}};function Em(i){let e=[],t=[],n=[],s=i,r=i-ns+1+mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ns?c=mh[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,u=1,T=new Float32Array(x*g*p),y=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(S,x*g*A),y.set(d,m*g*A);let E=[A,A,A,A,A,A];v.set(E,u*g*A)}let I=new ut;I.setAttribute("position",new Ht(T,x)),I.setAttribute("uv",new Ht(y,m)),I.setAttribute("faceIndex",new Ht(v,u)),e.push(I),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tm(i,e,t){let n=new Float32Array(Mi),s=new k(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function vh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function wm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===uo||c===fo,h=c===pi||c===mi;if(l||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jo(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new jo(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Am(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let T=p.array;x=p.version;for(let y=0,v=T.length;y<v;y+=3){let I=T[y+0],A=T[y+1],C=T[y+2];d.push(I,A,A,C,C,I)}}else if(g!==void 0){let T=g.array;x=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){let I=y+0,A=y+1,C=y+2;d.push(I,A,A,C,C,I)}}else return;let m=new(dl(d)?Ss:Ms)(d,1);m.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Cm(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let u=0;for(let T=0;T<g;T++)u+=p[T]*x[T];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*I*4*f),C=new vs(A,v,I,f);C.type=xn,C.needsUpdate=!0;let D=y*4;for(let E=0;E<f;E++){let V=m[E],W=u[E],$=T[E],j=v*I*4*E;for(let re=0;re<V.count;re++){let te=re*D;p===!0&&(s.fromBufferAttribute(V,re),A[j+te+0]=s.x,A[j+te+1]=s.y,A[j+te+2]=s.z,A[j+te+3]=0),g===!0&&(s.fromBufferAttribute(W,re),A[j+te+4]=s.x,A[j+te+5]=s.y,A[j+te+6]=s.z,A[j+te+7]=0),x===!0&&(s.fromBufferAttribute($,re),A[j+te+8]=s.x,A[j+te+9]=s.y,A[j+te+10]=s.z,A[j+te+11]=$.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new me(v,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var zh=new Pt,Mh=new As(1,1),kh=new vs,Hh=new Nr,Vh=new Es,Sh=[],bh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ea(i,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Mt(t,n)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),Mt(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Mt(t,n)}}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=hl,r=Mh):r=zh,t.setTexture2D(e||r,s)}function Jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hh,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vh,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kh,s)}function jm(i){switch(i){case 5126:return Dm;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function eg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function tg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function ng(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function ig(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function og(i,e){i.uniform1iv(this.addr,e)}function ag(i,e){i.uniform2iv(this.addr,e)}function lg(i,e){i.uniform3iv(this.addr,e)}function cg(i,e){i.uniform4iv(this.addr,e)}function hg(i,e){i.uniform1uiv(this.addr,e)}function ug(i,e){i.uniform2uiv(this.addr,e)}function fg(i,e){i.uniform3uiv(this.addr,e)}function dg(i,e){i.uniform4uiv(this.addr,e)}function pg(i,e,t){let n=this.cache,s=e.length,r=ea(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zh,r[o])}function mg(i,e,t){let n=this.cache,s=e.length,r=ea(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hh,r[o])}function gg(i,e,t){let n=this.cache,s=e.length,r=ea(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vh,r[o])}function xg(i,e,t){let n=this.cache,s=e.length,r=ea(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function _g(i){switch(i){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}var Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_g(t.type)}},Al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},El=/(\w+)(\])?(\[|\.)?/g;function Ah(i,e){i.seq.push(e),i.map[e.id]=e}function yg(i,e,t){let n=i.name,s=n.length;for(El.lastIndex=0;;){let r=El.exec(n),o=El.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ah(t,l===void 0?new Tl(a,i,e):new wl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Al(a),Ah(t,f)),t=f}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vg=37297,Mg=0;function Sg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ch=new We;function bg(i){Qe._getMatrix(Ch,Qe.workingColorSpace,i);let e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Sg(i.getShaderSource(e),a)}else return r}function Eg(i,e){let t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tg(i,e){let t;switch(e){case Gc:t="Linear";break;case Wc:t="Reinhard";break;case Xc:t="Cineon";break;case ho:t="ACESFilmic";break;case Yc:t="AgX";break;case Zc:t="Neutral";break;case qc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new k;function wg(){Qe.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Rg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ks(i){return i!==""}function Ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(Ig,Lg)}var Pg=new Map;function Lg(i,e){let t=$e[e];if(t===void 0){let n=Pg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(Dg,Ug)}function Ug(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ng(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Og(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Bg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case Hc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ng(t),l=Fg(t),h=Og(t),f=Bg(t),d=zg(t),p=Ag(t),g=Rg(r),x=s.createProgram(),m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Eg("linearToOutputTexel",t.outputColorSpace),wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Rl(o),o=Ph(o,t),o=Lh(o,t),a=Rl(a),a=Ph(a,t),a=Lh(a,t),o=Dh(o),a=Dh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=T+m+o,v=T+u+a,I=Rh(s,s.VERTEX_SHADER,y),A=Rh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,I),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(V){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(I)||"",j=s.getShaderInfoLog(A)||"",re=W.trim(),te=$.trim(),le=j.trim(),X=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let ie=Ih(s,I,"vertex"),pe=Ih(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+ie+`
`+pe)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(te===""||le==="")&&(ae=!1);ae&&(V.diagnostics={runnable:X,programLog:re,vertexShader:{log:te,prefix:m},fragmentShader:{log:le,prefix:u}})}s.deleteShader(I),s.deleteShader(A),D=new is(s,x),S=Cg(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,vg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var Hg=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Il(e),t.set(e,n)),n}},Il=class{constructor(e){this.id=Hg++,this.code=e,this.usedTimes=0}};function Vg(i,e,t,n,s,r,o){let a=new Gi,c=new Cl,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,V,W,$){let j=W.fog,re=$.geometry,te=S.isMeshStandardMaterial?W.environment:null,le=(S.isMeshStandardMaterial?t:e).get(S.envMap||te),X=le&&le.mapping===Xs?le.image.height:null,ae=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ie=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pe=ie!==void 0?ie.length:0,J=0;re.morphAttributes.position!==void 0&&(J=1),re.morphAttributes.normal!==void 0&&(J=2),re.morphAttributes.color!==void 0&&(J=3);let ce,O,N,M;if(ae){let tt=_n[ae];ce=tt.vertexShader,O=tt.fragmentShader}else ce=S.vertexShader,O=S.fragmentShader,c.update(S),N=c.getVertexShaderID(S),M=c.getFragmentShaderID(S);let _=i.getRenderTarget(),P=i.state.buffers.depth.getReversed(),G=$.isInstancedMesh===!0,F=$.isBatchedMesh===!0,K=!!S.map,ne=!!S.matcap,R=!!le,z=!!S.aoMap,H=!!S.lightMap,Y=!!S.bumpMap,q=!!S.normalMap,B=!!S.displacementMap,w=!!S.emissiveMap,Z=!!S.metalnessMap,ge=!!S.roughnessMap,ve=S.anisotropy>0,U=S.clearcoat>0,b=S.dispersion>0,ee=S.iridescence>0,he=S.sheen>0,xe=S.transmission>0,ue=ve&&!!S.anisotropyMap,Re=U&&!!S.clearcoatMap,ye=U&&!!S.clearcoatNormalMap,Te=U&&!!S.clearcoatRoughnessMap,Le=ee&&!!S.iridescenceMap,Me=ee&&!!S.iridescenceThicknessMap,Ae=he&&!!S.sheenColorMap,ke=he&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,Ie=!!S.specularColorMap,Je=!!S.specularIntensityMap,Q=xe&&!!S.transmissionMap,Ee=xe&&!!S.thicknessMap,we=!!S.gradientMap,Ue=!!S.alphaMap,Se=S.alphaTest>0,_e=!!S.alphaHash,Oe=!!S.extensions,Ye=Un;S.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let ot={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:O,defines:S.defines,customVertexShaderID:N,customFragmentShaderID:M,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:F,batchingColor:F&&$._colorsTexture!==null,instancing:G,instancingColor:G&&$.instanceColor!==null,instancingMorph:G&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_===null?i.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:ai,alphaToCoverage:!!S.alphaToCoverage,map:K,matcap:ne,envMap:R,envMapMode:R&&le.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:H,bumpMap:Y,normalMap:q,displacementMap:d&&B,emissiveMap:w,normalMapObjectSpace:q&&S.normalMapType===jc,normalMapTangentSpace:q&&S.normalMapType===cl,metalnessMap:Z,roughnessMap:ge,anisotropy:ve,anisotropyMap:ue,clearcoat:U,clearcoatMap:Re,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,dispersion:b,iridescence:ee,iridescenceMap:Le,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Ae,sheenRoughnessMap:ke,specularMap:Ne,specularColorMap:Ie,specularIntensityMap:Je,transmission:xe,transmissionMap:Q,thicknessMap:Ee,gradientMap:we,opaque:S.transparent===!1&&S.blending===ri&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:_e,combine:S.combine,mapUv:K&&x(S.map.channel),aoMapUv:z&&x(S.aoMap.channel),lightMapUv:H&&x(S.lightMap.channel),bumpMapUv:Y&&x(S.bumpMap.channel),normalMapUv:q&&x(S.normalMap.channel),displacementMapUv:B&&x(S.displacementMap.channel),emissiveMapUv:w&&x(S.emissiveMap.channel),metalnessMapUv:Z&&x(S.metalnessMap.channel),roughnessMapUv:ge&&x(S.roughnessMap.channel),anisotropyMapUv:ue&&x(S.anisotropyMap.channel),clearcoatMapUv:Re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(S.sheenRoughnessMap.channel),specularMapUv:Ne&&x(S.specularMap.channel),specularColorMapUv:Ie&&x(S.specularColorMap.channel),specularIntensityMapUv:Je&&x(S.specularIntensityMap.channel),transmissionMapUv:Q&&x(S.transmissionMap.channel),thicknessMapUv:Ee&&x(S.thicknessMap.channel),alphaMapUv:Ue&&x(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(q||ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!re.attributes.uv&&(K||Ue),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:P,skinning:$.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:K&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:w&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Lt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||F)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function u(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)E.push(V),E.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(T(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let E=g[S.type],V;if(E){let W=_n[E];V=ch.clone(W.uniforms)}else V=S.uniforms;return V}function I(S,E){let V;for(let W=0,$=h.length;W<$;W++){let j=h[W];if(j.cacheKey===E){V=j,++V.usedTimes;break}}return V===void 0&&(V=new kg(i,E,S,r),h.push(V)),V}function A(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function Gg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,p,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function c(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||Wg),n.length>1&&n.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Xg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ve};break;case"SpotLight":t={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zg=0;function Jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i){let e=new qg,t=Yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new ht,o=new ht;function a(l){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,T=0,y=0,v=0,I=0,A=0,C=0;l.sort(Jg);for(let S=0,E=l.length;S<E;S++){let V=l[S],W=V.color,$=V.intensity,j=V.distance,re=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=W.r*$,f+=W.g*$,d+=W.b*$;else if(V.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(V.sh.coefficients[te],$);C++}else if(V.isDirectionalLight){let te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let le=V.shadow,X=t.get(V);X.shadowIntensity=le.intensity,X.shadowBias=le.bias,X.shadowNormalBias=le.normalBias,X.shadowRadius=le.radius,X.shadowMapSize=le.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=V.shadow.matrix,T++}n.directional[p]=te,p++}else if(V.isSpotLight){let te=e.get(V);te.position.setFromMatrixPosition(V.matrixWorld),te.color.copy(W).multiplyScalar($),te.distance=j,te.coneCos=Math.cos(V.angle),te.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),te.decay=V.decay,n.spot[x]=te;let le=V.shadow;if(V.map&&(n.spotLightMap[I]=V.map,I++,le.updateMatrices(V),V.castShadow&&A++),n.spotLightMatrix[x]=le.matrix,V.castShadow){let X=t.get(V);X.shadowIntensity=le.intensity,X.shadowBias=le.bias,X.shadowNormalBias=le.normalBias,X.shadowRadius=le.radius,X.shadowMapSize=le.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=re,v++}x++}else if(V.isRectAreaLight){let te=e.get(V);te.color.copy(W).multiplyScalar($),te.halfWidth.set(V.width*.5,0,0),te.halfHeight.set(0,V.height*.5,0),n.rectArea[m]=te,m++}else if(V.isPointLight){let te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),te.distance=V.distance,te.decay=V.decay,V.castShadow){let le=V.shadow,X=t.get(V);X.shadowIntensity=le.intensity,X.shadowBias=le.bias,X.shadowNormalBias=le.normalBias,X.shadowRadius=le.radius,X.shadowMapSize=le.mapSize,X.shadowCameraNear=le.camera.near,X.shadowCameraFar=le.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=V.shadow.matrix,y++}n.point[g]=te,g++}else if(V.isHemisphereLight){let te=e.get(V);te.skyColor.copy(V.color).multiplyScalar($),te.groundColor.copy(V.groundColor).multiplyScalar($),n.hemi[u]=te,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=I,D.numLightProbes=C,n.version=Zg++)}function c(l,h){let f=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){let y=l[u];if(y.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Oh(i){let e=new $g(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Kg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Oh(i),e.set(s,[a])):r>=o.length?(a=new Oh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function e0(i,e,t){let n=new Xi,s=new me,r=new me,o=new mt,a=new Xr({depthPacking:Kc}),c=new qr,l={},h=t.maxTextureSize,f={[Rn]:Lt,[Lt]:Rn,[Ft]:Ft},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:jg,fragmentShader:Qg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ut;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let u=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Dn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let $=u!==gn&&this.type===gn,j=u===gn&&this.type!==gn;for(let re=0,te=A.length;re<te;re++){let le=A[re],X=le.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ae=X.getFrameExtents();if(s.multiply(ae),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y)),X.map===null||$===!0||j===!0){let pe=this.type!==gn?{minFilter:Nt,magFilter:Nt}:{};X.map!==null&&X.map.dispose(),X.map=new fn(s.x,s.y,pe),X.map.texture.name=le.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ie=X.getViewportCount();for(let pe=0;pe<ie;pe++){let J=X.getViewport(pe);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),W.viewport(o),X.updateMatrices(le,pe),n=X.getFrustum(),v(C,D,X.camera,le,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&T(X,D),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,V)};function T(A,C){let D=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,p,x,null)}function y(A,C,D,S){let E=null,V=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)E=V;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let W=E.uuid,$=C.uuid,j=l[W];j===void 0&&(j={},l[W]=j);let re=j[$];re===void 0&&(re=E.clone(),j[$]=re,C.addEventListener("dispose",I)),E=re}if(E.visible=C.visible,E.wireframe=C.wireframe,S===gn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=i.properties.get(E);W.light=D}return E}function v(A,C,D,S,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let $=e.update(A),j=A.material;if(Array.isArray(j)){let re=$.groups;for(let te=0,le=re.length;te<le;te++){let X=re[te],ae=j[X.materialIndex];if(ae&&ae.visible){let ie=y(A,ae,S,E);A.onBeforeShadow(i,A,C,D,$,ie,X),i.renderBufferDirect(D,null,$,ie,A,X),A.onAfterShadow(i,A,C,D,$,ie,X)}}}else if(j.visible){let re=y(A,j,S,E);A.onBeforeShadow(i,A,C,D,$,re,null),i.renderBufferDirect(D,null,$,re,A,null),A.onAfterShadow(i,A,C,D,$,re,null)}}let W=A.children;for(let $=0,j=W.length;$<j;$++)v(W[$],C,D,S,E)}function I(A){A.target.removeEventListener("dispose",I);for(let D in l){let S=l[D],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var t0={[io]:so,[ro]:lo,[oo]:co,[oi]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:oi};function n0(i,e){function t(){let Q=!1,Ee=new mt,we=null,Ue=new mt(0,0,0,0);return{setMask:function(Se){we!==Se&&!Q&&(i.colorMask(Se,Se,Se,Se),we=Se)},setLocked:function(Se){Q=Se},setClear:function(Se,_e,Oe,Ye,ot){ot===!0&&(Se*=Ye,_e*=Ye,Oe*=Ye),Ee.set(Se,_e,Oe,Ye),Ue.equals(Ee)===!1&&(i.clearColor(Se,_e,Oe,Ye),Ue.copy(Ee))},reset:function(){Q=!1,we=null,Ue.set(-1,0,0,0)}}}function n(){let Q=!1,Ee=!1,we=null,Ue=null,Se=null;return{setReversed:function(_e){if(Ee!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Ee=_e;let Ye=Se;Se=null,this.setClear(Ye)}},getReversed:function(){return Ee},setTest:function(_e){_e?_(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(_e){we!==_e&&!Q&&(i.depthMask(_e),we=_e)},setFunc:function(_e){if(Ee&&(_e=t0[_e]),Ue!==_e){switch(_e){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=_e}},setLocked:function(_e){Q=_e},setClear:function(_e){Se!==_e&&(Ee&&(_e=1-_e),i.clearDepth(_e),Se=_e)},reset:function(){Q=!1,we=null,Ue=null,Se=null,Ee=!1}}}function s(){let Q=!1,Ee=null,we=null,Ue=null,Se=null,_e=null,Oe=null,Ye=null,ot=null;return{setTest:function(tt){Q||(tt?_(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(tt){Ee!==tt&&!Q&&(i.stencilMask(tt),Ee=tt)},setFunc:function(tt,vn,hn){(we!==tt||Ue!==vn||Se!==hn)&&(i.stencilFunc(tt,vn,hn),we=tt,Ue=vn,Se=hn)},setOp:function(tt,vn,hn){(_e!==tt||Oe!==vn||Ye!==hn)&&(i.stencilOp(tt,vn,hn),_e=tt,Oe=vn,Ye=hn)},setLocked:function(tt){Q=tt},setClear:function(tt){ot!==tt&&(i.clearStencil(tt),ot=tt)},reset:function(){Q=!1,Ee=null,we=null,Ue=null,Se=null,_e=null,Oe=null,Ye=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,y=null,v=null,I=null,A=null,C=new Ve(0,0,0),D=0,S=!1,E=null,V=null,W=null,$=null,j=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,le=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(X)[1]),te=le>=1):X.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),te=le>=2);let ae=null,ie={},pe=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),ce=new mt().fromArray(pe),O=new mt().fromArray(J);function N(Q,Ee,we,Ue){let Se=new Uint8Array(4),_e=i.createTexture();i.bindTexture(Q,_e),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<we;Oe++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(Ee+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return _e}let M={};M[i.TEXTURE_2D]=N(i.TEXTURE_2D,i.TEXTURE_2D,1),M[i.TEXTURE_CUBE_MAP]=N(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[i.TEXTURE_2D_ARRAY]=N(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),M[i.TEXTURE_3D]=N(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_(i.DEPTH_TEST),o.setFunc(oi),Y(!1),q(Za),_(i.CULL_FACE),z(Dn);function _(Q){h[Q]!==!0&&(i.enable(Q),h[Q]=!0)}function P(Q){h[Q]!==!1&&(i.disable(Q),h[Q]=!1)}function G(Q,Ee){return f[Q]!==Ee?(i.bindFramebuffer(Q,Ee),f[Q]=Ee,Q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),Q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function F(Q,Ee){let we=p,Ue=!1;if(Q){we=d.get(Ee),we===void 0&&(we=[],d.set(Ee,we));let Se=Q.textures;if(we.length!==Se.length||we[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=Se.length;_e<Oe;_e++)we[_e]=i.COLOR_ATTACHMENT0+_e;we.length=Se.length,Ue=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(we)}function K(Q){return g!==Q?(i.useProgram(Q),g=Q,!0):!1}let ne={[Xn]:i.FUNC_ADD,[Ec]:i.FUNC_SUBTRACT,[Tc]:i.FUNC_REVERSE_SUBTRACT};ne[wc]=i.MIN,ne[Ac]=i.MAX;let R={[Rc]:i.ZERO,[Cc]:i.ONE,[Ic]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[Fc]:i.SRC_ALPHA_SATURATE,[Uc]:i.DST_COLOR,[Lc]:i.DST_ALPHA,[Pc]:i.ONE_MINUS_SRC_COLOR,[Ir]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Dc]:i.ONE_MINUS_DST_ALPHA,[Oc]:i.CONSTANT_COLOR,[Bc]:i.ONE_MINUS_CONSTANT_COLOR,[zc]:i.CONSTANT_ALPHA,[kc]:i.ONE_MINUS_CONSTANT_ALPHA};function z(Q,Ee,we,Ue,Se,_e,Oe,Ye,ot,tt){if(Q===Dn){x===!0&&(P(i.BLEND),x=!1);return}if(x===!1&&(_(i.BLEND),x=!0),Q!==bc){if(Q!==m||tt!==S){if((u!==Xn||v!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,v=Xn),tt)switch(Q){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}T=null,y=null,I=null,A=null,C.set(0,0,0),D=0,m=Q,S=tt}return}Se=Se||Ee,_e=_e||we,Oe=Oe||Ue,(Ee!==u||Se!==v)&&(i.blendEquationSeparate(ne[Ee],ne[Se]),u=Ee,v=Se),(we!==T||Ue!==y||_e!==I||Oe!==A)&&(i.blendFuncSeparate(R[we],R[Ue],R[_e],R[Oe]),T=we,y=Ue,I=_e,A=Oe),(Ye.equals(C)===!1||ot!==D)&&(i.blendColor(Ye.r,Ye.g,Ye.b,ot),C.copy(Ye),D=ot),m=Q,S=!1}function H(Q,Ee){Q.side===Ft?P(i.CULL_FACE):_(i.CULL_FACE);let we=Q.side===Lt;Ee&&(we=!we),Y(we),Q.blending===ri&&Q.transparent===!1?z(Dn):z(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let Ue=Q.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),w(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?_(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(Q){E!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),E=Q)}function q(Q){Q!==Mc?(_(i.CULL_FACE),Q!==V&&(Q===Za?i.cullFace(i.BACK):Q===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),V=Q}function B(Q){Q!==W&&(te&&i.lineWidth(Q),W=Q)}function w(Q,Ee,we){Q?(_(i.POLYGON_OFFSET_FILL),($!==Ee||j!==we)&&(i.polygonOffset(Ee,we),$=Ee,j=we)):P(i.POLYGON_OFFSET_FILL)}function Z(Q){Q?_(i.SCISSOR_TEST):P(i.SCISSOR_TEST)}function ge(Q){Q===void 0&&(Q=i.TEXTURE0+re-1),ae!==Q&&(i.activeTexture(Q),ae=Q)}function ve(Q,Ee,we){we===void 0&&(ae===null?we=i.TEXTURE0+re-1:we=ae);let Ue=ie[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[we]=Ue),(Ue.type!==Q||Ue.texture!==Ee)&&(ae!==we&&(i.activeTexture(we),ae=we),i.bindTexture(Q,Ee||M[Q]),Ue.type=Q,Ue.texture=Ee)}function U(){let Q=ie[ae];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function he(){try{i.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function xe(){try{i.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ye(){try{i.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Te(){try{i.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Le(){try{i.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Me(){try{i.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ae(Q){ce.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),ce.copy(Q))}function ke(Q){O.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),O.copy(Q))}function Ne(Q,Ee){let we=l.get(Ee);we===void 0&&(we=new WeakMap,l.set(Ee,we));let Ue=we.get(Q);Ue===void 0&&(Ue=i.getUniformBlockIndex(Ee,Q.name),we.set(Q,Ue))}function Ie(Q,Ee){let Ue=l.get(Ee).get(Q);c.get(Ee)!==Ue&&(i.uniformBlockBinding(Ee,Ue,Q.__bindingPointIndex),c.set(Ee,Ue))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ie={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,y=null,v=null,I=null,A=null,C=new Ve(0,0,0),D=0,S=!1,E=null,V=null,W=null,$=null,j=null,ce.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_,disable:P,bindFramebuffer:G,drawBuffers:F,useProgram:K,setBlending:z,setMaterial:H,setFlipSided:Y,setCullFace:q,setLineWidth:B,setPolygonOffset:w,setScissorTest:Z,activeTexture:ge,bindTexture:ve,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:Le,texImage3D:Me,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:ye,texStorage3D:Te,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Re,scissor:Ae,viewport:ke,reset:Je}}function i0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,b){return p?new OffscreenCanvas(U,b):ys("canvas")}function x(U,b,ee){let he=1,xe=ve(U);if((xe.width>ee||xe.height>ee)&&(he=ee/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ue=Math.floor(he*xe.width),Re=Math.floor(he*xe.height);f===void 0&&(f=g(ue,Re));let ye=b?g(ue,Re):f;return ye.width=ue,ye.height=Re,ye.getContext("2d").drawImage(U,0,0,ue,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Re+")."),ye}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function m(U){return U.generateMipmaps}function u(U){i.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(U,b,ee,he,xe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=b;if(b===i.RED&&(ee===i.FLOAT&&(ue=i.R32F),ee===i.HALF_FLOAT&&(ue=i.R16F),ee===i.UNSIGNED_BYTE&&(ue=i.R8)),b===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.R8UI),ee===i.UNSIGNED_SHORT&&(ue=i.R16UI),ee===i.UNSIGNED_INT&&(ue=i.R32UI),ee===i.BYTE&&(ue=i.R8I),ee===i.SHORT&&(ue=i.R16I),ee===i.INT&&(ue=i.R32I)),b===i.RG&&(ee===i.FLOAT&&(ue=i.RG32F),ee===i.HALF_FLOAT&&(ue=i.RG16F),ee===i.UNSIGNED_BYTE&&(ue=i.RG8)),b===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RG16UI),ee===i.UNSIGNED_INT&&(ue=i.RG32UI),ee===i.BYTE&&(ue=i.RG8I),ee===i.SHORT&&(ue=i.RG16I),ee===i.INT&&(ue=i.RG32I)),b===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),ee===i.UNSIGNED_INT&&(ue=i.RGB32UI),ee===i.BYTE&&(ue=i.RGB8I),ee===i.SHORT&&(ue=i.RGB16I),ee===i.INT&&(ue=i.RGB32I)),b===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),ee===i.UNSIGNED_INT&&(ue=i.RGBA32UI),ee===i.BYTE&&(ue=i.RGBA8I),ee===i.SHORT&&(ue=i.RGBA16I),ee===i.INT&&(ue=i.RGBA32I)),b===i.RGB&&(ee===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),b===i.RGBA){let Re=xe?xs:Qe.getTransfer(he);ee===i.FLOAT&&(ue=i.RGBA32F),ee===i.HALF_FLOAT&&(ue=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ue=Re===nt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function v(U,b){let ee;return U?b===null||b===Kn||b===Qi?ee=i.DEPTH24_STENCIL8:b===xn?ee=i.DEPTH32F_STENCIL8:b===Ki&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===Qi?ee=i.DEPTH_COMPONENT24:b===xn?ee=i.DEPTH_COMPONENT32F:b===Ki&&(ee=i.DEPTH_COMPONENT16),ee}function I(U,b){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nt&&U.minFilter!==It?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function A(U){let b=U.target;b.removeEventListener("dispose",A),D(b),b.isVideoTexture&&h.delete(b)}function C(U){let b=U.target;b.removeEventListener("dispose",C),E(b)}function D(U){let b=n.get(U);if(b.__webglInit===void 0)return;let ee=U.source,he=d.get(ee);if(he){let xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&S(U),Object.keys(he).length===0&&d.delete(ee)}n.remove(U)}function S(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let ee=U.source,he=d.get(ee);delete he[b.__cacheKey],o.memory.textures--}function E(U){let b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)i.deleteFramebuffer(b.__webglFramebuffer[he]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ee=U.textures;for(let he=0,xe=ee.length;he<xe;he++){let ue=n.get(ee[he]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(ee[he])}n.remove(U)}let V=0;function W(){V=0}function $(){let U=V;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),V+=1,U}function j(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function re(U,b){let ee=n.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ee.__version!==U.version){let he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M(ee,U,b);return}}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+b)}function te(U,b){let ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){M(ee,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+b)}function le(U,b){let ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){M(ee,U,b);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+b)}function X(U,b){let ee=n.get(U);if(U.version>0&&ee.__version!==U.version){_(ee,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+b)}let ae={[Oi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},ie={[Nt]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},pe={[Qc]:i.NEVER,[rh]:i.ALWAYS,[eh]:i.LESS,[hl]:i.LEQUAL,[th]:i.EQUAL,[sh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function J(U,b){if(b.type===xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===It||b.magFilter===po||b.magFilter===qs||b.magFilter===$n||b.minFilter===It||b.minFilter===po||b.minFilter===qs||b.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ae[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ae[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ae[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nt||b.minFilter!==qs&&b.minFilter!==$n||b.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(U,b){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",A));let he=b.source,xe=d.get(he);xe===void 0&&(xe={},d.set(he,xe));let ue=j(b);if(ue!==U.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),xe[ue].usedTimes++;let Re=xe[U.__cacheKey];Re!==void 0&&(xe[U.__cacheKey].usedTimes--,Re.usedTimes===0&&S(b)),U.__cacheKey=ue,U.__webglTexture=xe[ue].texture}return ee}function O(U,b,ee){return Math.floor(Math.floor(U/ee)/b)}function N(U,b,ee,he){let ue=U.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,ee,he,b.data);else{ue.sort((Me,Ae)=>Me.start-Ae.start);let Re=0;for(let Me=1;Me<ue.length;Me++){let Ae=ue[Re],ke=ue[Me],Ne=Ae.start+Ae.count,Ie=O(ke.start,b.width,4),Je=O(Ae.start,b.width,4);ke.start<=Ne+1&&Ie===Je&&O(ke.start+ke.count-1,b.width,4)===Ie?Ae.count=Math.max(Ae.count,ke.start+ke.count-Ae.start):(++Re,ue[Re]=ke)}ue.length=Re+1;let ye=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Ae=ue.length;Me<Ae;Me++){let ke=ue[Me],Ne=Math.floor(ke.start/4),Ie=Math.ceil(ke.count/4),Je=Ne%b.width,Q=Math.floor(Ne/b.width),Ee=Ie,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(i.TEXTURE_2D,0,Je,Q,Ee,we,ee,he,b.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function M(U,b,ee){let he=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=i.TEXTURE_3D);let xe=ce(U,b),ue=b.source;t.bindTexture(he,U.__webglTexture,i.TEXTURE0+ee);let Re=n.get(ue);if(ue.version!==Re.__version||xe===!0){t.activeTexture(i.TEXTURE0+ee);let ye=Qe.getPrimaries(Qe.workingColorSpace),Te=b.colorSpace===Nn?null:Qe.getPrimaries(b.colorSpace),Le=b.colorSpace===Nn||ye===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Me=x(b.image,!1,s.maxTextureSize);Me=ge(b,Me);let Ae=r.convert(b.format,b.colorSpace),ke=r.convert(b.type),Ne=y(b.internalFormat,Ae,ke,b.colorSpace,b.isVideoTexture);J(he,b);let Ie,Je=b.mipmaps,Q=b.isVideoTexture!==!0,Ee=Re.__version===void 0||xe===!0,we=ue.dataReady,Ue=I(b,Me);if(b.isDepthTexture)Ne=v(b.format===es,b.type),Ee&&(Q?t.texStorage2D(i.TEXTURE_2D,1,Ne,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Ne,Me.width,Me.height,0,Ae,ke,null));else if(b.isDataTexture)if(Je.length>0){Q&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Je[0].width,Je[0].height);for(let Se=0,_e=Je.length;Se<_e;Se++)Ie=Je[Se],Q?we&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):t.texImage2D(i.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,Ae,ke,Ie.data);b.generateMipmaps=!1}else Q?(Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Me.width,Me.height),we&&N(b,Me,Ae,ke)):t.texImage2D(i.TEXTURE_2D,0,Ne,Me.width,Me.height,0,Ae,ke,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Q&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,Je[0].width,Je[0].height,Me.depth);for(let Se=0,_e=Je.length;Se<_e;Se++)if(Ie=Je[Se],b.format!==Zt)if(Ae!==null)if(Q){if(we)if(b.layerUpdates.size>0){let Oe=_l(Ie.width,Ie.height,b.format,b.type);for(let Ye of b.layerUpdates){let ot=Ie.data.subarray(Ye*Oe/Ie.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Ye,Ie.width,Ie.height,1,Ae,ot)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,Ae,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Ne,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,Ae,ke,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Ne,Ie.width,Ie.height,Me.depth,0,Ae,ke,Ie.data)}else{Q&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Je[0].width,Je[0].height);for(let Se=0,_e=Je.length;Se<_e;Se++)Ie=Je[Se],b.format!==Zt?Ae!==null?Q?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?we&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):t.texImage2D(i.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,Ae,ke,Ie.data)}else if(b.isDataArrayTexture)if(Q){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,Me.width,Me.height,Me.depth),we)if(b.layerUpdates.size>0){let Se=_l(Me.width,Me.height,b.format,b.type);for(let _e of b.layerUpdates){let Oe=Me.data.subarray(_e*Se/Me.data.BYTES_PER_ELEMENT,(_e+1)*Se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Ae,ke,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ae,ke,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,Me.width,Me.height,Me.depth,0,Ae,ke,Me.data);else if(b.isData3DTexture)Q?(Ee&&t.texStorage3D(i.TEXTURE_3D,Ue,Ne,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ae,ke,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,Me.width,Me.height,Me.depth,0,Ae,ke,Me.data);else if(b.isFramebufferTexture){if(Ee)if(Q)t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Me.width,Me.height);else{let Se=Me.width,_e=Me.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Ne,Se,_e,0,Ae,ke,null),Se>>=1,_e>>=1}}else if(Je.length>0){if(Q&&Ee){let Se=ve(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Se.width,Se.height)}for(let Se=0,_e=Je.length;Se<_e;Se++)Ie=Je[Se],Q?we&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ae,ke,Ie):t.texImage2D(i.TEXTURE_2D,Se,Ne,Ae,ke,Ie);b.generateMipmaps=!1}else if(Q){if(Ee){let Se=ve(Me);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Se.width,Se.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,ke,Me)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Ae,ke,Me);m(b)&&u(he),Re.__version=ue.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function _(U,b,ee){if(b.image.length!==6)return;let he=ce(U,b),xe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ee);let ue=n.get(xe);if(xe.version!==ue.__version||he===!0){t.activeTexture(i.TEXTURE0+ee);let Re=Qe.getPrimaries(Qe.workingColorSpace),ye=b.colorSpace===Nn?null:Qe.getPrimaries(b.colorSpace),Te=b.colorSpace===Nn||Re===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Le=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Le&&!Me?Ae[_e]=x(b.image[_e],!0,s.maxCubemapSize):Ae[_e]=Me?b.image[_e].image:b.image[_e],Ae[_e]=ge(b,Ae[_e]);let ke=Ae[0],Ne=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Je=y(b.internalFormat,Ne,Ie,b.colorSpace),Q=b.isVideoTexture!==!0,Ee=ue.__version===void 0||he===!0,we=xe.dataReady,Ue=I(b,ke);J(i.TEXTURE_CUBE_MAP,b);let Se;if(Le){Q&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Je,ke.width,ke.height);for(let _e=0;_e<6;_e++){Se=Ae[_e].mipmaps;for(let Oe=0;Oe<Se.length;Oe++){let Ye=Se[Oe];b.format!==Zt?Ne!==null?Q?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ye.width,Ye.height,Ne,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,Je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ye.width,Ye.height,Ne,Ie,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,Je,Ye.width,Ye.height,0,Ne,Ie,Ye.data)}}}else{if(Se=b.mipmaps,Q&&Ee){Se.length>0&&Ue++;let _e=ve(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Je,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){Q?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,Ne,Ie,Ae[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Je,Ae[_e].width,Ae[_e].height,0,Ne,Ie,Ae[_e].data);for(let Oe=0;Oe<Se.length;Oe++){let ot=Se[Oe].image[_e].image;Q?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ot.width,ot.height,Ne,Ie,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,Je,ot.width,ot.height,0,Ne,Ie,ot.data)}}else{Q?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne,Ie,Ae[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Je,Ne,Ie,Ae[_e]);for(let Oe=0;Oe<Se.length;Oe++){let Ye=Se[Oe];Q?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,Ne,Ie,Ye.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,Je,Ne,Ie,Ye.image[_e])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),ue.__version=xe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function P(U,b,ee,he,xe,ue){let Re=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),Te=y(ee.internalFormat,Re,ye,ee.colorSpace),Le=n.get(b),Me=n.get(ee);if(Me.__renderTarget=b,!Le.__hasExternalTextures){let Ae=Math.max(1,b.width>>ue),ke=Math.max(1,b.height>>ue);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ue,Te,Ae,ke,b.depth,0,Re,ye,null):t.texImage2D(xe,ue,Te,Ae,ke,0,Re,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),w(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,xe,Me.__webglTexture,0,B(b)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,xe,Me.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(U,b,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ue=v(b.stencilBuffer,xe),Re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=B(b);w(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ue,b.width,b.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,U)}else{let he=b.textures;for(let xe=0;xe<he.length;xe++){let ue=he[xe],Re=r.convert(ue.format,ue.colorSpace),ye=r.convert(ue.type),Te=y(ue.internalFormat,Re,ye,ue.colorSpace),Le=B(b);ee&&w(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Te,b.width,b.height):w(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function F(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let he=n.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);let xe=he.__webglTexture,ue=B(b);if(b.depthTexture.format===Bi)w(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(b.depthTexture.format===es)w(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function K(U){let b=n.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let he=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){let xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");let he=U.texture.mipmaps;he&&he.length>0?F(b.__webglFramebuffer[0],U):F(b.__webglFramebuffer,U)}else if(ee){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=i.createRenderbuffer(),G(b.__webglDepthbuffer[he],U,!1);else{let xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ue)}}else{let he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),G(b.__webglDepthbuffer,U,!1);else{let xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(U,b,ee){let he=n.get(U);b!==void 0&&P(he.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&K(U)}function R(U){let b=U.texture,ee=n.get(U),he=n.get(b);U.addEventListener("dispose",C);let xe=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Re=xe.length>1;if(Re||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=b.version,o.memory.textures++),ue){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let Te=0;Te<b.mipmaps.length;Te++)ee.__webglFramebuffer[ye][Te]=i.createFramebuffer()}else ee.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ye=0,Te=xe.length;ye<Te;ye++){let Le=n.get(xe[ye]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&w(U)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){let Te=xe[ye];ee.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);let Le=r.convert(Te.format,Te.colorSpace),Me=r.convert(Te.type),Ae=y(Te.internalFormat,Le,Me,Te.colorSpace,U.isXRRenderTarget===!0),ke=B(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ae,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),G(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),J(i.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)P(ee.__webglFramebuffer[ye][Te],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else P(ee.__webglFramebuffer[ye],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(b)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ye=0,Te=xe.length;ye<Te;ye++){let Le=xe[ye],Me=n.get(Le),Ae=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Me.__webglTexture),J(Ae,Le),P(ee.__webglFramebuffer,U,Le,i.COLOR_ATTACHMENT0+ye,Ae,0),m(Le)&&u(Ae)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ye=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,he.__webglTexture),J(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)P(ee.__webglFramebuffer[Te],U,b,i.COLOR_ATTACHMENT0,ye,Te);else P(ee.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,ye,0);m(b)&&u(ye),t.unbindTexture()}U.depthBuffer&&K(U)}function z(U){let b=U.textures;for(let ee=0,he=b.length;ee<he;ee++){let xe=b[ee];if(m(xe)){let ue=T(U),Re=n.get(xe).__webglTexture;t.bindTexture(ue,Re),u(ue),t.unbindTexture()}}}let H=[],Y=[];function q(U){if(U.samples>0){if(w(U)===!1){let b=U.textures,ee=U.width,he=U.height,xe=i.COLOR_BUFFER_BIT,ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(U),ye=b.length>1;if(ye)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Te=U.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let Me=n.get(b[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,ee,he,0,0,ee,he,xe,i.NEAREST),c===!0&&(H.length=0,Y.length=0,H.push(i.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(ue),Y.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let Me=n.get(b[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function B(U){return Math.min(s.maxSamples,U.samples)}function w(U){let b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(U){let b=o.render.frame;h.get(U)!==b&&(h.set(U,b),U.update())}function ge(U,b){let ee=U.colorSpace,he=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==ai&&ee!==Nn&&(Qe.getTransfer(ee)===nt?(he!==Zt||xe!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=X,this.rebindTextures=ne,this.setupRenderTarget=R,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=P,this.useMultisampledRTT=w}function s0(i,e){function t(n,s=Nn){let r,o=Qe.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tl)return i.BYTE;if(n===nl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===rl)return i.ALPHA;if(n===ol)return i.RGB;if(n===Zt)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===ll)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===bo||n===Eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Go||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
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

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:r0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Pl,u={},T=t.getContextAttributes(),y=null,v=null,I=[],A=[],C=new me,D=null,S=new Ut;S.viewport=new mt;let E=new Ut;E.viewport=new mt;let V=[S,E],W=new to,$=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let _=I[M];return _===void 0&&(_=new Wi,I[M]=_),_.getTargetRaySpace()},this.getControllerGrip=function(M){let _=I[M];return _===void 0&&(_=new Wi,I[M]=_),_.getGripSpace()},this.getHand=function(M){let _=I[M];return _===void 0&&(_=new Wi,I[M]=_),_.getHandSpace()};function re(M){let _=A.indexOf(M.inputSource);if(_===-1)return;let P=I[_];P!==void 0&&(P.update(M.inputSource,M.frame,l||o),P.dispatchEvent({type:M.type,data:M.inputSource}))}function te(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",le);for(let M=0;M<I.length;M++){let _=A[M];_!==null&&(A[M]=null,I[M].disconnect(_))}$=null,j=null,m.reset();for(let M in u)delete u[M];e.setRenderTarget(y),p=null,d=null,f=null,s=null,v=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(M){l=M},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",te),s.addEventListener("inputsourceschange",le),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let P=null,G=null,F=null;T.depth&&(F=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,P=T.stencil?es:Bi,G=T.stencil?Qi:Kn);let K={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(K),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new fn(d.textureWidth,d.textureHeight,{format:Zt,type:an,depthTexture:new As(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let P={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,P),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new fn(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),N.setContext(s),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(M){for(let _=0;_<M.removed.length;_++){let P=M.removed[_],G=A.indexOf(P);G>=0&&(A[G]=null,I[G].disconnect(P))}for(let _=0;_<M.added.length;_++){let P=M.added[_],G=A.indexOf(P);if(G===-1){for(let K=0;K<I.length;K++)if(K>=A.length){A.push(P),G=K;break}else if(A[K]===null){A[K]=P,G=K;break}if(G===-1)break}let F=I[G];F&&F.connect(P)}}let X=new k,ae=new k;function ie(M,_,P){X.setFromMatrixPosition(_.matrixWorld),ae.setFromMatrixPosition(P.matrixWorld);let G=X.distanceTo(ae),F=_.projectionMatrix.elements,K=P.projectionMatrix.elements,ne=F[14]/(F[10]-1),R=F[14]/(F[10]+1),z=(F[9]+1)/F[5],H=(F[9]-1)/F[5],Y=(F[8]-1)/F[0],q=(K[8]+1)/K[0],B=ne*Y,w=ne*q,Z=G/(-Y+q),ge=Z*-Y;if(_.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ge),M.translateZ(Z),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),F[10]===-1)M.projectionMatrix.copy(_.projectionMatrix),M.projectionMatrixInverse.copy(_.projectionMatrixInverse);else{let ve=ne+Z,U=R+Z,b=B-ge,ee=w+(G-ge),he=z*R/U*ve,xe=H*R/U*ve;M.projectionMatrix.makePerspective(b,ee,he,xe,ve,U),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function pe(M,_){_===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(_.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let _=M.near,P=M.far;m.texture!==null&&(m.depthNear>0&&(_=m.depthNear),m.depthFar>0&&(P=m.depthFar)),W.near=E.near=S.near=_,W.far=E.far=S.far=P,($!==W.near||j!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),$=W.near,j=W.far),W.layers.mask=M.layers.mask|6,S.layers.mask=W.layers.mask&3,E.layers.mask=W.layers.mask&5;let G=M.parent,F=W.cameras;pe(W,G);for(let K=0;K<F.length;K++)pe(F[K],G);F.length===2?ie(W,S,E):W.projectionMatrix.copy(S.projectionMatrix),J(M,W,G)};function J(M,_,P){P===null?M.matrix.copy(_.matrixWorld):(M.matrix.copy(P.matrixWorld),M.matrix.invert(),M.matrix.multiply(_.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(_.projectionMatrix),M.projectionMatrixInverse.copy(_.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=zi*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(M){c=M,d!==null&&(d.fixedFoveation=M),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=M)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(M){return u[M]};let ce=null;function O(M,_){if(h=_.getViewerPose(l||o),g=_,h!==null){let P=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let G=!1;P.length!==W.cameras.length&&(W.cameras.length=0,G=!0);for(let R=0;R<P.length;R++){let z=P[R],H=null;if(p!==null)H=p.getViewport(z);else{let q=f.getViewSubImage(d,z);H=q.viewport,R===0&&(e.setRenderTargetTextures(v,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(v))}let Y=V[R];Y===void 0&&(Y=new Ut,Y.layers.enable(R),Y.viewport=new mt,V[R]=Y),Y.matrix.fromArray(z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(z.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(H.x,H.y,H.width,H.height),R===0&&(W.matrix.copy(Y.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),G===!0&&W.cameras.push(Y)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let R=f.getDepthInformation(P[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(F&&F.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let R=0;R<P.length;R++){let z=P[R].camera;if(z){let H=u[z];H||(H=new Rs,u[z]=H);let Y=f.getCameraImage(z);H.sourceTexture=Y}}}}for(let P=0;P<I.length;P++){let G=A[P],F=I[P];G!==null&&F!==void 0&&F.update(G,_,l||o)}ce&&ce(M,_),_.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_}),g=null}let N=new Bh;N.setAnimationLoop(O),this.setAnimationLoop=function(M){ce=M},this.dispose=function(){}}},yi=new en,a0=new ht;function l0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,pl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,T,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,T,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Lt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Lt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let T=e.get(u),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,T,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){let v=y.program;n.uniformBlockBinding(T,v)}function l(T,y){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(T,I);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){let y=f();T.__bindingPointIndex=y;let v=i.createBuffer(),I=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let y=s[T.id],v=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=v.length;A<C;A++){let D=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,E=D.length;S<E;S++){let V=D[S];if(p(V,A,S,I)===!0){let W=V.__offset,$=Array.isArray(V.value)?V.value:[V.value],j=0;for(let re=0;re<$.length;re++){let te=$[re],le=x(te);typeof te=="number"||typeof te=="boolean"?(V.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,W+j,V.__data)):te.isMatrix3?(V.__data[0]=te.elements[0],V.__data[1]=te.elements[1],V.__data[2]=te.elements[2],V.__data[3]=0,V.__data[4]=te.elements[3],V.__data[5]=te.elements[4],V.__data[6]=te.elements[5],V.__data[7]=0,V.__data[8]=te.elements[6],V.__data[9]=te.elements[7],V.__data[10]=te.elements[8],V.__data[11]=0):(te.toArray(V.__data,j),j+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,v,I){let A=T.value,C=y+"_"+v;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let D=I[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return I[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){let y=T.uniforms,v=0,I=16;for(let C=0,D=y.length;C<D;C++){let S=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,V=S.length;E<V;E++){let W=S[E],$=Array.isArray(W.value)?W.value:[W.value];for(let j=0,re=$.length;j<re;j++){let te=$[j],le=x(te),X=v%I,ae=X%le.boundary,ie=X+ae;v+=ae,ie!==0&&I-ie<le.storage&&(v+=I-ie),W.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=le.storage}}}let A=v%I;return A>0&&(v+=I-A),T.__size=v,T.__cache={},this}function x(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){let y=T.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Qo=class{constructor(e={}){let{canvas:t=oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,I=!1;this._outputColorSpace=xt;let A=0,C=0,D=null,S=-1,E=null,V=new mt,W=new mt,$=null,j=new Ve(0),re=0,te=t.width,le=t.height,X=1,ae=null,ie=null,pe=new mt(0,0,te,le),J=new mt(0,0,te,le),ce=!1,O=new Xi,N=!1,M=!1,_=new ht,P=new k,G=new mt,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function ne(){return D===null?X:1}let R=n;function z(L,se){return t.getContext(L,se)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),R===null){let se="webgl2";if(R=z(se,L),R===null)throw z(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let H,Y,q,B,w,Z,ge,ve,U,b,ee,he,xe,ue,Re,ye,Te,Le,Me,Ae,ke,Ne,Ie,Je;function Q(){H=new Am(R),H.init(),Ne=new s0(R,H),Y=new vm(R,H,e,Ne),q=new n0(R,H),Y.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),B=new Im(R),w=new Gg,Z=new i0(R,H,q,w,Y,Ne,B),ge=new Sm(v),ve=new wm(v),U=new Ff(R),Ie=new _m(R,U),b=new Rm(R,U,B,Ie),ee=new Lm(R,b,U,B),Me=new Pm(R,Y,Z),ye=new Mm(w),he=new Vg(v,ge,ve,H,Y,Ie,ye),xe=new l0(v,w),ue=new Xg,Re=new Kg(H),Le=new xm(v,ge,ve,q,ee,p,c),Te=new e0(v,ee,Y),Je=new c0(R,B,Y,q),Ae=new ym(R,H,B),ke=new Cm(R,H,B),B.programs=he.programs,v.capabilities=Y,v.extensions=H,v.properties=w,v.renderLists=ue,v.shadowMap=Te,v.state=q,v.info=B}Q();let Ee=new Ll(v,R);this.xr=Ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let L=H.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=H.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(te,le,!1))},this.getSize=function(L){return L.set(te,le)},this.setSize=function(L,se,fe=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=L,le=se,t.width=Math.floor(L*X),t.height=Math.floor(se*X),fe===!0&&(t.style.width=L+"px",t.style.height=se+"px"),this.setViewport(0,0,L,se)},this.getDrawingBufferSize=function(L){return L.set(te*X,le*X).floor()},this.setDrawingBufferSize=function(L,se,fe){te=L,le=se,X=fe,t.width=Math.floor(L*fe),t.height=Math.floor(se*fe),this.setViewport(0,0,L,se)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(pe)},this.setViewport=function(L,se,fe,de){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,se,fe,de),q.viewport(V.copy(pe).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(J)},this.setScissor=function(L,se,fe,de){L.isVector4?J.set(L.x,L.y,L.z,L.w):J.set(L,se,fe,de),q.scissor(W.copy(J).multiplyScalar(X).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(L){q.setScissorTest(ce=L)},this.setOpaqueSort=function(L){ae=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(L=!0,se=!0,fe=!0){let de=0;if(L){let oe=!1;if(D!==null){let be=D.texture.format;oe=be===vo||be===yo||be===_o}if(oe){let be=D.texture.type,Pe=be===an||be===Kn||be===Ki||be===Qi||be===go||be===xo,Fe=Le.getClearColor(),De=Le.getClearAlpha(),Ge=Fe.r,qe=Fe.g,ze=Fe.b;Pe?(g[0]=Ge,g[1]=qe,g[2]=ze,g[3]=De,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ge,x[1]=qe,x[2]=ze,x[3]=De,R.clearBufferiv(R.COLOR,0,x))}else de|=R.COLOR_BUFFER_BIT}se&&(de|=R.DEPTH_BUFFER_BIT),fe&&(de|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Le.dispose(),ue.dispose(),Re.dispose(),w.dispose(),ge.dispose(),ve.dispose(),ee.dispose(),Ie.dispose(),Je.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",hn),Ee.removeEventListener("sessionend",Bl),jn.stop()};function we(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let L=B.autoReset,se=Te.enabled,fe=Te.autoUpdate,de=Te.needsUpdate,oe=Te.type;Q(),B.autoReset=L,Te.enabled=se,Te.autoUpdate=fe,Te.needsUpdate=de,Te.type=oe}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _e(L){let se=L.target;se.removeEventListener("dispose",_e),Oe(se)}function Oe(L){Ye(L),w.remove(L)}function Ye(L){let se=w.get(L).programs;se!==void 0&&(se.forEach(function(fe){he.releaseProgram(fe)}),L.isShaderMaterial&&he.releaseShaderCache(L))}this.renderBufferDirect=function(L,se,fe,de,oe,be){se===null&&(se=F);let Pe=oe.isMesh&&oe.matrixWorld.determinant()<0,Fe=lu(L,se,fe,de,oe);q.setMaterial(de,Pe);let De=fe.index,Ge=1;if(de.wireframe===!0){if(De=b.getWireframeAttribute(fe),De===void 0)return;Ge=2}let qe=fe.drawRange,ze=fe.attributes.position,je=qe.start*Ge,st=(qe.start+qe.count)*Ge;be!==null&&(je=Math.max(je,be.start*Ge),st=Math.min(st,(be.start+be.count)*Ge)),De!==null?(je=Math.max(je,0),st=Math.min(st,De.count)):ze!=null&&(je=Math.max(je,0),st=Math.min(st,ze.count));let gt=st-je;if(gt<0||gt===1/0)return;Ie.setup(oe,de,Fe,fe,De);let at,rt=Ae;if(De!==null&&(at=U.get(De),rt=ke,rt.setIndex(at)),oe.isMesh)de.wireframe===!0?(q.setLineWidth(de.wireframeLinewidth*ne()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(oe.isLine){let He=de.linewidth;He===void 0&&(He=1),q.setLineWidth(He*ne()),oe.isLineSegments?rt.setMode(R.LINES):oe.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else oe.isPoints?rt.setMode(R.POINTS):oe.isSprite&&rt.setMode(R.TRIANGLES);if(oe.isBatchedMesh)if(oe._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount,oe._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))rt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let He=oe._multiDrawStarts,ft=oe._multiDrawCounts,et=oe._multiDrawCount,Ot=De?U.get(De).bytesPerElement:1,Si=w.get(de).currentProgram.getUniforms();for(let Bt=0;Bt<et;Bt++)Si.setValue(R,"_gl_DrawID",Bt),rt.render(He[Bt]/Ot,ft[Bt])}else if(oe.isInstancedMesh)rt.renderInstances(je,gt,oe.count);else if(fe.isInstancedBufferGeometry){let He=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ft=Math.min(fe.instanceCount,He);rt.renderInstances(je,gt,ft)}else rt.render(je,gt)};function ot(L,se,fe){L.transparent===!0&&L.side===Ft&&L.forceSinglePass===!1?(L.side=Lt,L.needsUpdate=!0,sr(L,se,fe),L.side=Rn,L.needsUpdate=!0,sr(L,se,fe),L.side=Ft):sr(L,se,fe)}this.compile=function(L,se,fe=null){fe===null&&(fe=L),u=Re.get(fe),u.init(se),y.push(u),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(u.pushLight(oe),oe.castShadow&&u.pushShadow(oe))}),L!==fe&&L.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(u.pushLight(oe),oe.castShadow&&u.pushShadow(oe))}),u.setupLights();let de=new Set;return L.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let be=oe.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){let Fe=be[Pe];ot(Fe,fe,oe),de.add(Fe)}else ot(be,fe,oe),de.add(be)}),u=y.pop(),de},this.compileAsync=function(L,se,fe=null){let de=this.compile(L,se,fe);return new Promise(oe=>{function be(){if(de.forEach(function(Pe){w.get(Pe).currentProgram.isReady()&&de.delete(Pe)}),de.size===0){oe(L);return}setTimeout(be,10)}H.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tt=null;function vn(L){tt&&tt(L)}function hn(){jn.stop()}function Bl(){jn.start()}let jn=new Bh;jn.setAnimationLoop(vn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(L){tt=L,Ee.setAnimationLoop(L),L===null?jn.stop():jn.start()},Ee.addEventListener("sessionstart",hn),Ee.addEventListener("sessionend",Bl),this.render=function(L,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(se),se=Ee.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,se,D),u=Re.get(L,y.length),u.init(se),y.push(u),_.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O.setFromProjectionMatrix(_,Qt,se.reversedDepth),M=this.localClippingEnabled,N=ye.init(this.clippingPlanes,M),m=ue.get(L,T.length),m.init(),T.push(m),Ee.enabled===!0&&Ee.isPresenting===!0){let be=v.xr.getDepthSensingMesh();be!==null&&oa(be,se,-1/0,v.sortObjects)}oa(L,se,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,ie),K=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,K&&Le.addToRenderList(m,L),this.info.render.frame++,N===!0&&ye.beginShadows();let fe=u.state.shadowsArray;Te.render(fe,L,se),N===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=m.opaque,oe=m.transmissive;if(u.setupLights(),se.isArrayCamera){let be=se.cameras;if(oe.length>0)for(let Pe=0,Fe=be.length;Pe<Fe;Pe++){let De=be[Pe];kl(de,oe,L,De)}K&&Le.render(L);for(let Pe=0,Fe=be.length;Pe<Fe;Pe++){let De=be[Pe];zl(m,L,De,De.viewport)}}else oe.length>0&&kl(de,oe,L,se),K&&Le.render(L),zl(m,L,se);D!==null&&C===0&&(Z.updateMultisampleRenderTarget(D),Z.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(v,L,se),Ie.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(u=y[y.length-1],N===!0&&ye.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function oa(L,se,fe,de){if(L.visible===!1)return;if(L.layers.test(se.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(se);else if(L.isLight)u.pushLight(L),L.castShadow&&u.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||O.intersectsSprite(L)){de&&G.setFromMatrixPosition(L.matrixWorld).applyMatrix4(_);let Pe=ee.update(L),Fe=L.material;Fe.visible&&m.push(L,Pe,Fe,fe,G.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||O.intersectsObject(L))){let Pe=ee.update(L),Fe=L.material;if(de&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),G.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),G.copy(Pe.boundingSphere.center)),G.applyMatrix4(L.matrixWorld).applyMatrix4(_)),Array.isArray(Fe)){let De=Pe.groups;for(let Ge=0,qe=De.length;Ge<qe;Ge++){let ze=De[Ge],je=Fe[ze.materialIndex];je&&je.visible&&m.push(L,Pe,je,fe,G.z,ze)}}else Fe.visible&&m.push(L,Pe,Fe,fe,G.z,null)}}let be=L.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)oa(be[Pe],se,fe,de)}function zl(L,se,fe,de){let oe=L.opaque,be=L.transmissive,Pe=L.transparent;u.setupLightsView(fe),N===!0&&ye.setGlobalState(v.clippingPlanes,fe),de&&q.viewport(V.copy(de)),oe.length>0&&ir(oe,se,fe),be.length>0&&ir(be,se,fe),Pe.length>0&&ir(Pe,se,fe),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function kl(L,se,fe,de){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[de.id]===void 0&&(u.state.transmissionRenderTarget[de.id]=new fn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?ji:an,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let be=u.state.transmissionRenderTarget[de.id],Pe=de.viewport||V;be.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);let Fe=v.getRenderTarget(),De=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(be),v.getClearColor(j),re=v.getClearAlpha(),re<1&&v.setClearColor(16777215,.5),v.clear(),K&&Le.render(fe);let qe=v.toneMapping;v.toneMapping=Un;let ze=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),u.setupLightsView(de),N===!0&&ye.setGlobalState(v.clippingPlanes,de),ir(L,fe,de),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be),H.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,gt=se.length;st<gt;st++){let at=se[st],rt=at.object,He=at.geometry,ft=at.material,et=at.group;if(ft.side===Ft&&rt.layers.test(de.layers)){let Ot=ft.side;ft.side=Lt,ft.needsUpdate=!0,Hl(rt,fe,de,He,ft,et),ft.side=Ot,ft.needsUpdate=!0,je=!0}}je===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be))}v.setRenderTarget(Fe,De,Ge),v.setClearColor(j,re),ze!==void 0&&(de.viewport=ze),v.toneMapping=qe}function ir(L,se,fe){let de=se.isScene===!0?se.overrideMaterial:null;for(let oe=0,be=L.length;oe<be;oe++){let Pe=L[oe],Fe=Pe.object,De=Pe.geometry,Ge=Pe.group,qe=Pe.material;qe.allowOverride===!0&&de!==null&&(qe=de),Fe.layers.test(fe.layers)&&Hl(Fe,se,fe,De,qe,Ge)}}function Hl(L,se,fe,de,oe,be){L.onBeforeRender(v,se,fe,de,oe,be),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),oe.onBeforeRender(v,se,fe,de,L,be),oe.transparent===!0&&oe.side===Ft&&oe.forceSinglePass===!1?(oe.side=Lt,oe.needsUpdate=!0,v.renderBufferDirect(fe,se,de,oe,L,be),oe.side=Rn,oe.needsUpdate=!0,v.renderBufferDirect(fe,se,de,oe,L,be),oe.side=Ft):v.renderBufferDirect(fe,se,de,oe,L,be),L.onAfterRender(v,se,fe,de,oe,be)}function sr(L,se,fe){se.isScene!==!0&&(se=F);let de=w.get(L),oe=u.state.lights,be=u.state.shadowsArray,Pe=oe.state.version,Fe=he.getParameters(L,oe.state,be,se,fe),De=he.getProgramCacheKey(Fe),Ge=de.programs;de.environment=L.isMeshStandardMaterial?se.environment:null,de.fog=se.fog,de.envMap=(L.isMeshStandardMaterial?ve:ge).get(L.envMap||de.environment),de.envMapRotation=de.environment!==null&&L.envMap===null?se.environmentRotation:L.envMapRotation,Ge===void 0&&(L.addEventListener("dispose",_e),Ge=new Map,de.programs=Ge);let qe=Ge.get(De);if(qe!==void 0){if(de.currentProgram===qe&&de.lightsStateVersion===Pe)return Gl(L,Fe),qe}else Fe.uniforms=he.getUniforms(L),L.onBeforeCompile(Fe,v),qe=he.acquireProgram(Fe,De),Ge.set(De,qe),de.uniforms=Fe.uniforms;let ze=de.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ze.clippingPlanes=ye.uniform),Gl(L,Fe),de.needsLights=hu(L),de.lightsStateVersion=Pe,de.needsLights&&(ze.ambientLightColor.value=oe.state.ambient,ze.lightProbe.value=oe.state.probe,ze.directionalLights.value=oe.state.directional,ze.directionalLightShadows.value=oe.state.directionalShadow,ze.spotLights.value=oe.state.spot,ze.spotLightShadows.value=oe.state.spotShadow,ze.rectAreaLights.value=oe.state.rectArea,ze.ltc_1.value=oe.state.rectAreaLTC1,ze.ltc_2.value=oe.state.rectAreaLTC2,ze.pointLights.value=oe.state.point,ze.pointLightShadows.value=oe.state.pointShadow,ze.hemisphereLights.value=oe.state.hemi,ze.directionalShadowMap.value=oe.state.directionalShadowMap,ze.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ze.spotShadowMap.value=oe.state.spotShadowMap,ze.spotLightMatrix.value=oe.state.spotLightMatrix,ze.spotLightMap.value=oe.state.spotLightMap,ze.pointShadowMap.value=oe.state.pointShadowMap,ze.pointShadowMatrix.value=oe.state.pointShadowMatrix),de.currentProgram=qe,de.uniformsList=null,qe}function Vl(L){if(L.uniformsList===null){let se=L.currentProgram.getUniforms();L.uniformsList=is.seqWithValue(se.seq,L.uniforms)}return L.uniformsList}function Gl(L,se){let fe=w.get(L);fe.outputColorSpace=se.outputColorSpace,fe.batching=se.batching,fe.batchingColor=se.batchingColor,fe.instancing=se.instancing,fe.instancingColor=se.instancingColor,fe.instancingMorph=se.instancingMorph,fe.skinning=se.skinning,fe.morphTargets=se.morphTargets,fe.morphNormals=se.morphNormals,fe.morphColors=se.morphColors,fe.morphTargetsCount=se.morphTargetsCount,fe.numClippingPlanes=se.numClippingPlanes,fe.numIntersection=se.numClipIntersection,fe.vertexAlphas=se.vertexAlphas,fe.vertexTangents=se.vertexTangents,fe.toneMapping=se.toneMapping}function lu(L,se,fe,de,oe){se.isScene!==!0&&(se=F),Z.resetTextureUnits();let be=se.fog,Pe=de.isMeshStandardMaterial?se.environment:null,Fe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ai,De=(de.isMeshStandardMaterial?ve:ge).get(de.envMap||Pe),Ge=de.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,qe=!!fe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),ze=!!fe.morphAttributes.position,je=!!fe.morphAttributes.normal,st=!!fe.morphAttributes.color,gt=Un;de.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=v.toneMapping);let at=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,rt=at!==void 0?at.length:0,He=w.get(de),ft=u.state.lights;if(N===!0&&(M===!0||L!==E)){let Rt=L===E&&de.id===S;ye.setState(de,L,Rt)}let et=!1;de.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ft.state.version||He.outputColorSpace!==Fe||oe.isBatchedMesh&&He.batching===!1||!oe.isBatchedMesh&&He.batching===!0||oe.isBatchedMesh&&He.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&He.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&He.instancing===!1||!oe.isInstancedMesh&&He.instancing===!0||oe.isSkinnedMesh&&He.skinning===!1||!oe.isSkinnedMesh&&He.skinning===!0||oe.isInstancedMesh&&He.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&He.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&He.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&He.instancingMorph===!1&&oe.morphTexture!==null||He.envMap!==De||de.fog===!0&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ye.numPlanes||He.numIntersection!==ye.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==qe||He.morphTargets!==ze||He.morphNormals!==je||He.morphColors!==st||He.toneMapping!==gt||He.morphTargetsCount!==rt)&&(et=!0):(et=!0,He.__version=de.version);let Ot=He.currentProgram;et===!0&&(Ot=sr(de,se,oe));let Si=!1,Bt=!1,rs=!1,dt=Ot.getUniforms(),Xt=He.uniforms;if(q.useProgram(Ot.program)&&(Si=!0,Bt=!0,rs=!0),de.id!==S&&(S=de.id,Bt=!0),Si||E!==L){q.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),dt.setValue(R,"projectionMatrix",L.projectionMatrix),dt.setValue(R,"viewMatrix",L.matrixWorldInverse);let Dt=dt.map.cameraPosition;Dt!==void 0&&Dt.setValue(R,P.setFromMatrixPosition(L.matrixWorld)),Y.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&dt.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,Bt=!0,rs=!0)}if(oe.isSkinnedMesh){dt.setOptional(R,oe,"bindMatrix"),dt.setOptional(R,oe,"bindMatrixInverse");let Rt=oe.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(R,"boneTexture",Rt.boneTexture,Z))}oe.isBatchedMesh&&(dt.setOptional(R,oe,"batchingTexture"),dt.setValue(R,"batchingTexture",oe._matricesTexture,Z),dt.setOptional(R,oe,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",oe._indirectTexture,Z),dt.setOptional(R,oe,"batchingColorTexture"),oe._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",oe._colorsTexture,Z));let qt=fe.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&Me.update(oe,fe,Ot),(Bt||He.receiveShadow!==oe.receiveShadow)&&(He.receiveShadow=oe.receiveShadow,dt.setValue(R,"receiveShadow",oe.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Xt.envMap.value=De,Xt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&se.environment!==null&&(Xt.envMapIntensity.value=se.environmentIntensity),Bt&&(dt.setValue(R,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&cu(Xt,rs),be&&de.fog===!0&&xe.refreshFogUniforms(Xt,be),xe.refreshMaterialUniforms(Xt,de,X,le,u.state.transmissionRenderTarget[L.id]),is.upload(R,Vl(He),Xt,Z)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(is.upload(R,Vl(He),Xt,Z),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&dt.setValue(R,"center",oe.center),dt.setValue(R,"modelViewMatrix",oe.modelViewMatrix),dt.setValue(R,"normalMatrix",oe.normalMatrix),dt.setValue(R,"modelMatrix",oe.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let Rt=de.uniformsGroups;for(let Dt=0,aa=Rt.length;Dt<aa;Dt++){let Qn=Rt[Dt];Je.update(Qn,Ot),Je.bind(Qn,Ot)}}return Ot}function cu(L,se){L.ambientLightColor.needsUpdate=se,L.lightProbe.needsUpdate=se,L.directionalLights.needsUpdate=se,L.directionalLightShadows.needsUpdate=se,L.pointLights.needsUpdate=se,L.pointLightShadows.needsUpdate=se,L.spotLights.needsUpdate=se,L.spotLightShadows.needsUpdate=se,L.rectAreaLights.needsUpdate=se,L.hemisphereLights.needsUpdate=se}function hu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,se,fe){let de=w.get(L);de.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),w.get(L.texture).__webglTexture=se,w.get(L.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:fe,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,se){let fe=w.get(L);fe.__webglFramebuffer=se,fe.__useDefaultFramebuffer=se===void 0};let uu=R.createFramebuffer();this.setRenderTarget=function(L,se=0,fe=0){D=L,A=se,C=fe;let de=!0,oe=null,be=!1,Pe=!1;if(L){let De=w.get(L);if(De.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(R.FRAMEBUFFER,null),de=!1;else if(De.__webglFramebuffer===void 0)Z.setupRenderTarget(L);else if(De.__hasExternalTextures)Z.rebindTextures(L,w.get(L.texture).__webglTexture,w.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ze=L.depthTexture;if(De.__boundDepthTexture!==ze){if(ze!==null&&w.has(ze)&&(L.width!==ze.image.width||L.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(L)}}let Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);let qe=w.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[se])?oe=qe[se][fe]:oe=qe[se],be=!0):L.samples>0&&Z.useMultisampledRTT(L)===!1?oe=w.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?oe=qe[fe]:oe=qe,V.copy(L.viewport),W.copy(L.scissor),$=L.scissorTest}else V.copy(pe).multiplyScalar(X).floor(),W.copy(J).multiplyScalar(X).floor(),$=ce;if(fe!==0&&(oe=uu),q.bindFramebuffer(R.FRAMEBUFFER,oe)&&de&&q.drawBuffers(L,oe),q.viewport(V),q.scissor(W),q.setScissorTest($),be){let De=w.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+se,De.__webglTexture,fe)}else if(Pe){let De=se;for(let Ge=0;Ge<L.textures.length;Ge++){let qe=w.get(L.textures[Ge]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,fe,De)}}else if(L!==null&&fe!==0){let De=w.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,De.__webglTexture,fe)}S=-1},this.readRenderTargetPixels=function(L,se,fe,de,oe,be,Pe,Fe=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=w.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){q.bindFramebuffer(R.FRAMEBUFFER,De);try{let Ge=L.textures[Fe],qe=Ge.format,ze=Ge.type;if(!Y.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=L.width-de&&fe>=0&&fe<=L.height-oe&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(se,fe,de,oe,Ne.convert(qe),Ne.convert(ze),be))}finally{let Ge=D!==null?w.get(D).__webglFramebuffer:null;q.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(L,se,fe,de,oe,be,Pe,Fe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=w.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(se>=0&&se<=L.width-de&&fe>=0&&fe<=L.height-oe){q.bindFramebuffer(R.FRAMEBUFFER,De);let Ge=L.textures[Fe],qe=Ge.format,ze=Ge.type;if(!Y.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,be.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(se,fe,de,oe,Ne.convert(qe),Ne.convert(ze),0);let st=D!==null?w.get(D).__webglFramebuffer:null;q.bindFramebuffer(R.FRAMEBUFFER,st);let gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ah(R,gt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,be),R.deleteBuffer(je),R.deleteSync(gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,se=null,fe=0){let de=Math.pow(2,-fe),oe=Math.floor(L.image.width*de),be=Math.floor(L.image.height*de),Pe=se!==null?se.x:0,Fe=se!==null?se.y:0;Z.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,fe,0,0,Pe,Fe,oe,be),q.unbindTexture()};let fu=R.createFramebuffer(),du=R.createFramebuffer();this.copyTextureToTexture=function(L,se,fe=null,de=null,oe=0,be=null){be===null&&(oe!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=oe,oe=0):be=0);let Pe,Fe,De,Ge,qe,ze,je,st,gt,at=L.isCompressedTexture?L.mipmaps[be]:L.image;if(fe!==null)Pe=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,De=fe.isBox3?fe.max.z-fe.min.z:1,Ge=fe.min.x,qe=fe.min.y,ze=fe.isBox3?fe.min.z:0;else{let qt=Math.pow(2,-oe);Pe=Math.floor(at.width*qt),Fe=Math.floor(at.height*qt),L.isDataArrayTexture?De=at.depth:L.isData3DTexture?De=Math.floor(at.depth*qt):De=1,Ge=0,qe=0,ze=0}de!==null?(je=de.x,st=de.y,gt=de.z):(je=0,st=0,gt=0);let rt=Ne.convert(se.format),He=Ne.convert(se.type),ft;se.isData3DTexture?(Z.setTexture3D(se,0),ft=R.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(Z.setTexture2DArray(se,0),ft=R.TEXTURE_2D_ARRAY):(Z.setTexture2D(se,0),ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,se.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,se.unpackAlignment);let et=R.getParameter(R.UNPACK_ROW_LENGTH),Ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Si=R.getParameter(R.UNPACK_SKIP_PIXELS),Bt=R.getParameter(R.UNPACK_SKIP_ROWS),rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ze);let dt=L.isDataArrayTexture||L.isData3DTexture,Xt=se.isDataArrayTexture||se.isData3DTexture;if(L.isDepthTexture){let qt=w.get(L),Rt=w.get(se),Dt=w.get(qt.__renderTarget),aa=w.get(Rt.__renderTarget);q.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let Qn=0;Qn<De;Qn++)dt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,w.get(L).__webglTexture,oe,ze+Qn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,w.get(se).__webglTexture,be,gt+Qn)),R.blitFramebuffer(Ge,qe,Pe,Fe,je,st,Pe,Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);q.bindFramebuffer(R.READ_FRAMEBUFFER,null),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(oe!==0||L.isRenderTargetTexture||w.has(L)){let qt=w.get(L),Rt=w.get(se);q.bindFramebuffer(R.READ_FRAMEBUFFER,fu),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,du);for(let Dt=0;Dt<De;Dt++)dt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qt.__webglTexture,oe,ze+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qt.__webglTexture,oe),Xt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,be,gt+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,be),oe!==0?R.blitFramebuffer(Ge,qe,Pe,Fe,je,st,Pe,Fe,R.COLOR_BUFFER_BIT,R.NEAREST):Xt?R.copyTexSubImage3D(ft,be,je,st,gt+Dt,Ge,qe,Pe,Fe):R.copyTexSubImage2D(ft,be,je,st,Ge,qe,Pe,Fe);q.bindFramebuffer(R.READ_FRAMEBUFFER,null),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xt?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(ft,be,je,st,gt,Pe,Fe,De,rt,He,at.data):se.isCompressedArrayTexture?R.compressedTexSubImage3D(ft,be,je,st,gt,Pe,Fe,De,rt,at.data):R.texSubImage3D(ft,be,je,st,gt,Pe,Fe,De,rt,He,at):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,be,je,st,Pe,Fe,rt,He,at.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,be,je,st,at.width,at.height,rt,at.data):R.texSubImage2D(R.TEXTURE_2D,be,je,st,Pe,Fe,rt,He,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rs),be===0&&se.generateMipmaps&&R.generateMipmap(ft),q.unbindTexture()},this.initRenderTarget=function(L){w.get(L).__webglFramebuffer===void 0&&Z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Z.setTextureCube(L,0):L.isData3DTexture?Z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Z.setTexture2DArray(L,0):Z.setTexture2D(L,0),q.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,q.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};function h0(i,e){let t=[];for(let n=1;n<e.length;n++){let s=e[n-1],r=e[n],o=s%i.n,a=Math.floor(s/i.n),c=r%i.n,l=Math.floor(r/i.n);if(Math.abs(o-c)+Math.abs(a-l)===1)for(let h=1;h<=8;h++)t.push({x:60+80*(o+(c-o)*h/9),y:-60-80*(a+(l-a)*h/9),last:n===e.length-1})}return t}function Gh(){let i=new Ze;i.name="route-cue";let e="",t=new Cs(1.9,12),n=new Ln({color:"#fff1b2",transparent:!0,opacity:.83,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s=new ct(1,8,6),r=["#9bbd43","#b1d34f","#8eae3c"].map(h=>new it({color:h,roughness:.92})),o=[];function a(h,f,d,p,g,x,m=18.55){let u=new Be(s,r[x%3]);return u.position.set(h,f,m),u.rotation.z=d,u.scale.set(p,g,.3),u.receiveShadow=!0,u.castShadow=!0,i.add(u),u}function c(h,f){for(let d=1;d<f.length;d++){let p=f[d-1],g=f[d],x=g%h.n-p%h.n,m=-(Math.floor(g/h.n)-Math.floor(p/h.n));if(Math.abs(x)+Math.abs(m)!==1)continue;let u=Math.atan2(m,x),T=-m,y=x;for(let v=0;v<12;v++)for(let I of[-1,1]){let A=p*97+g*31+v*71+I*17>>>0,C=(v+.2+A%11/18)/12,D=I*(.8+A%17*.38);a(60+p%h.n*80+x*80*C+T*D,-60-Math.floor(p/h.n)*80+m*80*C+y*D,u+(A%13-6)*.095,2.8+A%5*.3,.5+A%3*.1,A)}}if(f.length>1){let d=f.at(-2),p=60+d%h.n*80,g=-60-Math.floor(d/h.n)*80;for(let x=0;x<7;x++){let m=x*2.399,u=a(p+Math.cos(m)*12,g+Math.sin(m)*12,m,2.8,.8,x);o.push(u)}}}function l(h,f,d=1){let p=new Be(t,n);p.position.set(h,f,18.7),p.scale.setScalar(d),p.renderOrder=3,i.add(p)}return{group:i,update(h,f,d,p,g){let x=h.n+":"+f.join(",")+":"+d;if(x!==e){if(e=x,i.clear(),o=[],d==="grass"&&c(h,f),d!=="previous"&&d!=="grass")for(let m of h0(h,f))l(m.x,m.y,m.last?1.2:.83);if(d!=="grass"&&f.length>1){let m=f.at(-2),u=60+m%h.n*80,T=-60-Math.floor(m/h.n)*80;for(let[y,v]of[[-23,0],[23,0],[0,-23],[0,23]])l(u+y,T+v,1.45)}}for(let m=0;m<o.length;m++){let u=o[m],T=.45+.25*Math.sin(g*1.25+m*.3);u.rotation.y=T,u.position.z=19.1+T*.6}i.visible=d!=="touch"||p,n.opacity=.78+.08*Math.sin(g*2)},dispose(){t.dispose(),n.dispose(),s.dispose(),r.forEach(h=>h.dispose()),i.clear()}}}var js=new k;function Jt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let l=.5*o/(o+a),h=1-js.angleTo(i)/c;return Math.sign(js[t])===1?h*l:a/(o+a)+l+l*(1-h)}var yn=class i extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,l=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,x=new k,m=.5/o;for(let u=0,T=0;u<f.length;u+=3,T+=2)switch(c.fromArray(f,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[u+0]=h.x*Math.sign(c.x)+l.x*r,f[u+1]=h.y*Math.sign(c.y)+l.y*r,f[u+2]=h.z*Math.sign(c.z)+l.z*r,d[u+0]=l.x,d[u+1]=l.y,d[u+2]=l.z,Math.floor(u/g)){case 0:x.set(1,0,0),p[T+0]=Jt(x,l,"z","y",r,n),p[T+1]=1-Jt(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),p[T+0]=1-Jt(x,l,"z","y",r,n),p[T+1]=1-Jt(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),p[T+0]=1-Jt(x,l,"x","z",r,e),p[T+1]=Jt(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),p[T+0]=1-Jt(x,l,"x","z",r,e),p[T+1]=1-Jt(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),p[T+0]=1-Jt(x,l,"x","y",r,e),p[T+1]=1-Jt(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),p[T+0]=Jt(x,l,"x","y",r,e),p[T+1]=1-Jt(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var u0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},f0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function d0(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((h,f)=>h-f).join(":");if(s.has(a))return null;s.add(a);let c=n[0]+(r%i+o%i)*t/2,l=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[c,l],ends:r%i===o%i?[[c-t/2,l],[c+t/2,l]]:[[c,l-t/2],[c,l+t/2]]}}).filter(Boolean)}function Wh({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!f0[o])throw Error("Unknown fence design");let a=u0[r];if(!a)throw Error("Unknown fence style");let c=new Ze;c.name="wood-fence";let l=d0(i,e,{pitch:t,origin:n});c.userData={walls:l.map(u=>[u.a,u.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let h=new it({color:a.wood,roughness:.83}),f=new it({color:a.end,roughness:.8}),d=new it({color:a.grain,roughness:.95}),p=new it({color:"#665341",roughness:.7}),g=(u,T,y,v,I,A,C,D,S)=>{let E=new Be(new yn(T,y,v,3,I),A);return E.position.set(C,D,S),E.castShadow=E.receiveShadow=!0,u.add(E),E},x=(u,T,y=.12)=>{let v=new Be(new rn(new sn(T),16,y,4,!1),d);u.add(v)},m=new Map;for(let u of l){for(let[y,v]of u.ends){let I=y+":"+v;if(m.has(I))continue;let A=new Ze;if(A.name="fence-post",A.position.set(y,v,s-2),c.add(A),m.set(I,A),o==="logs"){let C=new Be(new nn(3.25,3.65,34,18),h);C.rotation.x=Math.PI/2,C.position.z=17,C.castShadow=C.receiveShadow=!0,A.add(C);let D=new Be(new ct(3.65,18,10),f);D.scale.z=.35,D.position.z=34,D.castShadow=!0,A.add(D)}else g(A,6.3,6.3,34,1.05,h,0,0,17),g(A,7.4,7.4,3.1,1.25,f,0,0,34);for(let C of[-1,1])for(let D=0;D<2;D++){let S=[];for(let E=0;E<=9;E++)S.push(new k(-1.7+D*2.5+Math.sin(E*.6+D)*.22,C*3.16,3+E*2.2));x(A,S,.1)}}let T=new Ze;if(T.name="fence-span",T.position.set(...u.center,s),u.a%i!==u.b%i&&(T.rotation.z=Math.PI/2),T.userData.cells=[u.a,u.b],c.add(T),o==="rails")for(let y of[16,24]){g(T,t-4.5,4.2,5.1,.95,h,0,0,y);for(let v of[-1,1]){for(let A=0;A<2;A++){let C=[];for(let D=0;D<=12;D++){let S=-t/2+5+D*(t-10)/12;C.push(new k(S,v*2.12,y-.9+A*1.7+Math.sin(D*.65+y)*.2))}x(T,C,.1)}for(let A of[-t/2+5.8,t/2-5.8]){let C=new Be(new ct(.56,8,6),p);C.scale.y=.3,C.position.set(A,v*2.28,y),T.add(C)}let I=[];for(let A=0;A<=24;A++){let C=A/24*Math.PI*2;I.push(new k(11+Math.cos(C)*1.6,v*2.14,y+Math.sin(C)*.65))}x(T,I,.1)}}else if(o==="picket"){for(let y of[15,25])g(T,t-4.5,3.2,3.6,.8,h,0,1.2,y);for(let y=0;y<5;y++){let v=(y-2)*(t-14)/5,I=7.2,A=new _t;A.moveTo(-I/2,11),A.lineTo(I/2,11),A.lineTo(I/2,27),A.bezierCurveTo(I/2,32,-I/2,32,-I/2,27),A.closePath();let C=new Be(new Gt(A,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),y%2?f:h);C.rotation.x=Math.PI/2,C.position.set(v,-.7,0),C.castShadow=C.receiveShadow=!0,T.add(C);for(let D of[15,25]){let S=new Be(new ct(.48,8,6),p);S.scale.y=.3,S.position.set(v,-3.65,D),T.add(S)}x(T,[new k(v-1.2,-3.91,13),new k(v-1,-3.91,21),new k(v-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let A of[13,29])g(T,t-4.5,4,3.6,.8,h,0,0,A);let y=t-12,v=Math.atan2(16,y),I=Math.hypot(y,16);for(let A of[-1,1]){let C=new Ze;C.position.set(0,A*1.35,21),C.rotation.y=A*v,T.add(C),g(C,I,2.5,3.6,.75,f,0,0,0);for(let D of[-1,1])x(C,[new k(-I/2+2,D*1.27,-.5),new k(0,D*1.27,-.25),new k(I/2-2,D*1.27,-.55)],.1)}for(let A of[-1,1]){let C=new Be(new ct(.65,10,8),p);C.scale.y=.3,C.position.set(0,A*2.75,21),T.add(C)}}else for(let y of[16,26]){let v=new Be(new nn(2.3,2.3,t-4.5,18),h);v.rotation.z=Math.PI/2,v.position.z=y,v.castShadow=v.receiveShadow=!0,T.add(v);for(let I of[-1,1])for(let A of[-.9,.9]){let C=[];for(let D=0;D<=12;D++)C.push(new k(-t/2+4+D*(t-8)/12,I*Math.sqrt(2.3**2-A**2),y+A+Math.sin(D*.7)*.1));x(T,C,.1)}}}return{group:c,edges:l,dispose(){let u=new Set,T=new Set;c.traverse(y=>{y.geometry&&u.add(y.geometry),y.material&&T.add(y.material)}),u.forEach(y=>y.dispose()),T.forEach(y=>y.dispose())}}}function ta(i=-1,e="hops"){let t=d=>(d=Math.max(0,Math.min(1,d)),d*d*d*(d*(d*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="gentle"){let d=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=d*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:d*1.35,happy:d,roll:p,pitch:-d*.035,squash:d*.012,antenna:d*.3+Math.sin(i*8)*d*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(d,p,g)=>{let x=(i-d)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(d,p)=>{let g=(i-d)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},c=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,l=a(.72,.3),h=a(1.35,.3),f=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:l*.055+h*.035+f*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:c*.65+r*.045,pitch:l*.035-r*.007-c*.013,roll:r*.005*Math.sin(i*3+.6)+c*.012}}function Xh(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,c=o<.66,l,h=0,f=0;if(c)l=-a/2+o/.66*a,f=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,x=g*g*(3-2*g);l=a/2-a*x,h=Math.sin(g*Math.PI)**1.25*1.8,f=-Math.sin(g*Math.PI)*.2}let d=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,d*d*(3-2*d));return{y:l*p,z:h*p,pitch:f*p,stance:c,phase:o,fade:p}}function qh(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,c=0,l=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,f=h*h*(3-2*h);a=o/2-o*f,c=Math.sin(h*Math.PI)*1.3,l=-Math.sin(h*Math.PI)*.16}return{y:a,z:c,pitch:l,stance:r<.66,phase:r}}var p0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}};function Yh({seed:i=913,presentation:e="ground"}={}){let t=new Ze,n=new Ze,s=new Ze;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(_,P=.8)=>new it({color:_,roughness:P}),a=o("#dfa578"),c=o("#ffe5bd"),l=o("#e69b88"),h=o("#302529",.3),f=o("#fff9e7",.3),d=o("#428f8d",.35);function p(_,P,G,F,K,ne,R,z){let H=new Be(new ct(1,40,28),P);return H.position.set(G,F,K),H.scale.set(ne,R,z),H.castShadow=H.receiveShadow=!0,_.add(H),H}let g=[],x=[],m=[],u=[],T=[],y=[],v=new Ve("#d5a078"),I=new Ve("#ffe2b9");function A(_,P,G,F,K=!1){let ne=p(s,a,..._,...P);ne.name="original-body-part",ne.userData.bodyCenter=[..._],ne.userData.bodyRadii=[...P];for(let R=0;R<G;R++){let z=r()*2-1,H=r()*Math.PI*2,Y=Math.sqrt(1-z*z),q=new k(Y*Math.cos(H),Y*Math.sin(H),z),B=new k(q.x*P[0],q.y*P[1],q.z*P[2]).add(new k(..._));if(B.z<1)continue;let w=K&&q.y<-.4;if(w){let xe=[-5.6,5.6].some(Re=>((B.x-Re)/4.6)**2+((B.z-23.4)/5.2)**2<1),ue=(B.x/5.9)**2+((B.z-16.5)/3.3)**2<1;if(xe||ue)continue}let Z=new k(q.x/P[0],q.y/P[1],q.z/P[2]).normalize(),ge=new k(0,0,1);Math.abs(Z.z)>.9&&ge.set(1,0,0);let ve=new k().crossVectors(Z,ge).normalize(),U=new k(q.x*.45,q.y*.35,-.46),b=F*(w?.2:1)*(.6+r()*.65),ee=.075+r()*.13,he=r()*.22;for(let xe=0;xe<2;xe++){let ue=xe?new k().crossVectors(Z,ve).normalize():ve,Re=x.length/3;for(let ye=0;ye<=4;ye++){let Te=ye/4,Le=B.clone().addScaledVector(Z,b*Te*.88).addScaledVector(U,b*Te*Te*.9),Me=ee*(1-Te*.93),Ae=v.clone().lerp(I,.28+Te*.58+he);for(let ke of[-1,1]){let Ne=Le.clone().addScaledVector(ue,Me*ke);x.push(Ne.x,Ne.y,Math.max(.2,Ne.z)),m.push(Z.x,Z.y,Z.z),u.push(Ae.r,Ae.g,Ae.b),g.push(.28+Te*.58+he),T.push(ke===-1?0:1,Te)}}for(let ye=0;ye<4;ye++){let Te=Re+ye*2;y.push(Te,Te+1,Te+2,Te+1,Te+3,Te+2)}}}}e!=="peek"&&(A([0,6,10],[10.5,15,9.7],15200,3.3),A([0,19,6],[7.4,9,5.7],4600,2.9),A([1,26,4],[4.7,7,3.4],2200,2.5));let C=new Ze;s.add(C),A([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let D=[],S=[],E=[],V=[];for(let[_,P]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let G=new Ze;G.name="soft-paw",G.userData.home={x:_,y:P},G.position.set(_,P,1.35),G.rotation.z=_<0?-.13:.13,n.add(G);let F=new ct(1,40,28),K=F.attributes.position;for(let H=0;H<K.count;H++){let Y=K.getX(H),q=K.getY(H),B=K.getZ(H),w=2.15*(1-.22*Math.max(0,q)),Z=q<-.35?.09*Math.cos(Y*Math.PI*2.4)*-q:0;K.setXYZ(H,Y*w,q*3.4-Z,Math.max(-1.3,B*1.35)+Math.max(0,q)*.45)}F.computeVertexNormals();let ne=new Be(F,a);ne.castShadow=ne.receiveShadow=!0,G.add(ne);let R=p(n,a,0,0,0,1,1,1);R.name="rigid-upper-leg",E.push(R);let z=p(n,a,0,0,0,1,1,1);z.name="rigid-lower-leg",V.push(z),S.push(new k(_*.86,P+1.4,6.1)),D.push(G)}let W=(_,P)=>-8-11.5*Math.sqrt(Math.max(.025,1-(_/13.1)**2-((P-20)/12.2)**2));function $(_,P,G,F,K,ne,R){let z=[],H=[];for(let Z=0;Z<=12;Z++)for(let ge=0;ge<=64;ge++){let ve=Z/12,U=ge/64*Math.PI*2,b=Math.cos(U)*K*ve,ee=Math.sin(U)*ne*ve;z.push(b,W(G+b,F+ee)-R-.27*(1-ve*ve),ee)}for(let Z=0;Z<12;Z++)for(let ge=0;ge<64;ge++){let ve=Z*65+ge,U=ve+64+1;H.push(ve,U,ve+1,ve+1,U,U+1)}let B=new ut;B.setAttribute("position",new Xe(z,3)),B.setIndex(H),B.computeVertexNormals();let w=new Be(B,P);return w.position.set(G,0,F),_.add(w),w}let j=new Ze;j.name="happy-crescent-eyes",C.add(j),j.visible=!1;for(let _ of[-1,1]){let P=[];for(let G=0;G<=20;G++){let F=_*5.6+(G/20-.5)*5.3,K=23.3+Math.sin(G/20*Math.PI)*1.35;P.push(new k(F,W(F,K)-.3,K))}j.add(new Be(new rn(new sn(P),24,.3,7,!1),h))}let re=[];for(let _ of[-1,1]){let P=_*5.6,G=23.4,F=new Ze;F.name="embedded-eye",C.add(F),$(F,c,P,G,3.95,4.7,.11),$(F,d,P,G-.1,2.65,3.25,.3),$(F,h,P,G+.1,1.75,2.45,.49),p(F,f,P-.8,W(P-.8,G+1.5)-.78,G+1.5,.72,.2,.82),p(F,f,P+.65,W(P+.65,G-.65)-.78,G-.65,.26,.16,.3),re.push(F);let K=[];for(let R=0;R<=64;R++){let z=R/64*Math.PI*2,H=P+Math.cos(z)*4.05,Y=G+Math.sin(z)*4.8;K.push(new k(H,W(H,Y)-.05,Y))}C.add(new Be(new rn(new sn(K),80,.37,8,!1),a)),p(C,l,_*8.3,-17.2,16,2.05,.5,1.05);let ne=[];for(let R=0;R<=12;R++){let z=_*5.6+(R/12-.5)*4.5,H=28.7+Math.sin(R/12*Math.PI)*.65;ne.push(new k(z,W(z,H)-.14,H))}C.add(new Be(new rn(new sn(ne),16,.26,6,!1),a))}p(C,c,0,-18.9,16.4,5.2,1.7,2.7),p(C,l,0,-20.6,17.7,1.65,1.05,1.1);let te=[];for(let _=0;_<=20;_++){let P=(_/20-.5)*6.6;te.push(new k(P,-20.35+Math.abs(P)*.14,14.7+.105*P*P))}let le=new Be(new rn(new sn(te),24,.22,6,!1),h);C.add(le);let X=[];for(let _ of[-1,1]){let R=function(z,H=!1,Y=0){let q=Math.sin(z*1.4+_*.7),B=Math.sin(z*2.2+_)*.12;G.v2.set(_*(1.7+q*.35),-1.4+B,11.4),G.v3.set(_*(5.2+q*.55+Y),-1.9+Math.sin(z*1.2+_)*.35,10.2+B+Y*.4+(H?Math.sin(z*5+_)*.15:0));let w=G.computeFrenetFrames(26,!1),Z=F.attributes.position,ge=F.attributes.normal;for(let ve=0;ve<=26;ve++){let U=ve/26,b=G.getPoint(U),ee=.44*(1-U)+.23*U;for(let he=0;he<=8;he++){let xe=he/8*Math.PI*2,ue=w.normals[ve].clone().multiplyScalar(-Math.cos(xe)).addScaledVector(w.binormals[ve],Math.sin(xe)),Re=b.clone().addScaledVector(ue,ee),ye=ve*9+he;Z.setXYZ(ye,Re.x,Re.y,Re.z),ge.setXYZ(ye,ue.x,ue.y,ue.z)}}Z.needsUpdate=ge.needsUpdate=!0,F.computeBoundingSphere(),ne.position.copy(G.v3)},P=new Ze;P.name="soft-curved-antenna",P.position.set(_*6.7,-5,30),s.add(P);let G=new Zi(new k,new k(_*.25,-.2,4.6),new k(_*1.7,-1.4,11.4),new k(_*5.2,-1.9,10.2)),F=new rn(G,26,.4,8,!1),K=new Be(F,a);P.add(K);let ne=p(P,c,_*5.2,-1.9,10.2,1.65,1.65,1.9);R(0),X.push({group:P,flex:R})}let ae=new ut;ae.setAttribute("position",new Xe(x,3)),ae.setAttribute("normal",new Xe(m,3)),ae.setAttribute("color",new Xe(u,3)),ae.setAttribute("uv",new Xe(T,2)),ae.setIndex(y);let ie=new Uint8Array(2048*4);for(let _=0;_<64;_++)for(let P=0;P<32;P++){let G=(_*32+P)*4,F=Math.abs((P+.5)/32*2-1),K=Math.round(255*Math.pow(1-F,.55)*(1-.75*Math.pow(_/63,4)));ie[G]=ie[G+1]=ie[G+2]=K,ie[G+3]=255}let pe=new Yn(ie,32,64);pe.needsUpdate=!0,pe.magFilter=pe.minFilter=It;let J=new it({vertexColors:!0,alphaMap:pe,transparent:!0,opacity:.85,depthWrite:!1,side:Ft,roughness:1}),ce=new Be(ae,J);ce.name="curved-soft-fur",ce.frustumCulled=!1,s.add(ce);function O(_){let P=p0[_];if(!P)throw Error("Unknown creature palette "+_);a.color.set(P.coat),d.color.set(P.iris),v.set(P.root),I.set(P.tip);let G=ae.attributes.color,F=new Ve;for(let K=0;K<g.length;K++)F.copy(v).lerp(I,g[K]),G.setXYZ(K,F.r,F.g,F.b);G.needsUpdate=!0,t.userData.palette=_}let N=new Ze;N.name="completion-pollen",N.visible=!1,t.add(N);let M=new ct(.32,8,6);for(let _=0;_<9;_++){let P=new Be(M,new it({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));N.add(P)}return O("apricot"),{group:t,setPalette:O,update(_,P=0,G={}){let F=ta(G.celebrationAge??-1,G.celebrationStyle),K=!F.active&&(G.active??(P>0&&P<1));if(n.position.z=F.lift,n.rotation.x=F.pitch,n.rotation.y=F.roll+F.turnStep*Math.sin((G.celebrationAge??0)*16)*.018,n.scale.set(1+F.squash*.4,1+F.squash*.4,1-F.squash),j.visible=F.happy>.55,re.forEach(ne=>ne.visible=!j.visible),le.scale.x=1+F.happy*.18,N.visible=F.pollen>0,N.children.forEach((ne,R)=>{let z=Math.min(1.8,Math.max(0,(G.celebrationAge??0)-1.5)),H=R*2.4;ne.position.set(Math.cos(H)*(9+z*3)+Math.sin(z*2+R)*.7,Math.sin(H)*(8+z*3),8+z*(8+R*.4)),ne.material.opacity=F.pollen*(.5+R%3*.12)}),s.position.z=Math.sin(_*2)*.13+(K?Math.sin(P*Math.PI*16)*.22:0),s.rotation.y=K?Math.sin(P*Math.PI*16)*.012:Math.sin(_*.8)*.012,C.rotation.set(0,0,0),re.forEach(ne=>{ne.scale.set(1,1,1),ne.position.set(0,0,0)}),D.forEach((ne,R)=>{let z=ne.userData.home,H=(G.celebrationAge??0)*17+R*Math.PI/2,Y=F.turnStep*Math.max(0,Math.sin(H))*1.25,q=K?G.travel!==void 0?qh(G.travel,R,t.scale.x):Xh(G.progress??P,R,{distance:G.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};ne.position.set(z.x+F.turnStep*Math.cos(H)*.65,z.y+q.y+F.turnStep*Math.sin(H)*.65+(F.active?Math.sin((G.celebrationAge??0)*7+R*Math.PI/2)*F.tuck*.5:0),1.35+q.z+Y+F.tuck*(R<2?1:G.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((G.celebrationAge??0)*4+R*1.6)*.12)),ne.rotation.x=q.pitch-F.tuck*(R<2?.08:.035);let B=S[R].clone();B.z+=s.position.z;let w=new k(ne.position.x,ne.position.y+.65,ne.position.z+1.05),Z=w.clone().sub(B),ge=Math.min(6.95,Math.max(.6,Z.length()));Z.normalize(),w.copy(B).addScaledVector(Z,ge),ne.position.copy(w).add(new k(0,-.65,-1.05));let ve=3.8,U=3.4,b=(ve*ve-U*U+ge*ge)/(2*ge),ee=Math.sqrt(Math.max(0,ve*ve-b*b)),he=new k(0,1,0).addScaledVector(Z,-Z.y).normalize(),xe=B.clone().addScaledVector(Z,b).addScaledVector(he,ee);function ue(Re,ye,Te,Le){let Me=Te.clone().sub(ye);Re.position.copy(ye).addScaledVector(Me,.5),Re.quaternion.setFromUnitVectors(new k(0,1,0),Me.normalize()),Re.scale.set(Le,ye.distanceTo(Te)/2,Le)}ue(E[R],B,xe,1.2),ue(V[R],xe,w,1.1)}),X.forEach((ne,R)=>ne.flex(_,K,F.antenna*(R?.78:1))),e==="peek"){let R=new k(0,-8,20),z=G.peekGreetingAge??-1,H=z>=0&&z<1.3?Math.sin(z/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(_*.65)*.012,Math.sin(Math.max(0,z)*4)*.05*H);let Y=R.clone().applyEuler(s.rotation);s.position.copy(R).sub(Y),s.position.z+=Math.sin(_*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),D.forEach((w,Z)=>{w.visible=Z<2,w.position.set(Z===0?-12:12,-17,10),w.rotation.set(.12,0,Z===0?-.16:.16)}),E.forEach(w=>w.visible=!1),V.forEach(w=>w.visible=!1);let q=_%7.3,B=q>4.9&&q<5.03||q>5.22&&q<5.3;re.forEach(w=>w.visible=!B),j.visible=B}},setSize(_){t.scale.setScalar(_/100)},dispose(){let _=new Set,P=new Set;t.traverse(G=>{G.geometry&&_.add(G.geometry),G.material&&P.add(G.material)}),_.forEach(G=>G.dispose()),P.forEach(G=>G.dispose()),pe.dispose()}}}var na=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],c=this.points[o+1],l=s[o];if(r<=l&&l>0){let h=r/l;this.x=a[0]+(c[0]-a[0])*h,this.y=a[1]+(c[1]-a[1])*h,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=l}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.lastTarget=n,this.start=n,!0}};var ia=class{constructor(){this.transition=new na,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=l=>[l%e.n*80+60,-(Math.floor(l/e.n)*80+60)];if(this.level!==e||!t.length){let[l,h]=s(e.marks[0]);this.transition.reset(l,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[l,h],this.lastTime=n,this.level=e}let a=this.path.at(-1),c=t.at(-1);if(c!==void 0&&c!==a){let[l,h]=s(c);if(a!==void 0){let[f,d]=s(a);this.heading=Math.atan2(l-f,-(h-d)),this.transition.target(l,h,n)}else this.transition.reset(l,h);this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=ta(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var Zh={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Jh({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=Zh[t]||Zh.front,s=n.radius,r=n.x,o=n.z,a=new Ze,c=new Ze;a.add(c),c.position.set(n.fx,0,n.fz);let l=new ct(1,20,14),h=[],f=(ie,pe=.48)=>{let J=new it({color:ie,roughness:pe});return h.push(J),J},d=f("#ffd05a"),p=f("#ffeaa2"),g=f("#538b2c"),x=f("#e5a32a");function m(ie,pe,J,ce,O,N,M,_){let P=new Be(l,pe);return P.position.set(J,ce,O),P.scale.set(N,M,_),P.castShadow=!0,P.receiveShadow=!0,ie.add(P),P}m(c,g,0,5,0,2.2,7,2.2);for(let ie of[-1,1]){let pe=m(c,g,ie*7,4,1,9,1.7,4);pe.rotation.z=ie*.27,pe.rotation.y=ie*.3}let u=[];for(let ie=0;ie<6;ie++){let pe=new Ze;pe.rotation.y=ie*Math.PI/3,c.add(pe);let J=m(pe,ie%2?d:p,0,12,0,5,9,4);u.push(J)}let T=m(c,x,0,12,0,5,3.5,5),y=f("#c5a777"),v=new nn(s+1.6,s+1.6,2.6,40),I=new Be(v,y);I.position.set(r,3,o),I.castShadow=!0,a.add(I);let A=new nn(s,s,2.2,40),C=new Be(A,f("#fff4da"));C.position.set(r,3.6,o),C.castShadow=!0,a.add(C);let D=document.createElement("canvas");D.width=D.height=128;let S=D.getContext("2d");S.fillStyle="#4b2a15",S.font="bold 100px Trebuchet MS",S.textAlign="center",S.textBaseline="middle",S.fillText(String(i),64,69);let E=new pn(D);E.colorSpace=xt,E.userData.transient=!0;let V=new Ln({map:E,transparent:!0,depthWrite:!1}),W=new hi(s*1.72,s*1.72),$=new Be(W,V);$.rotation.x=-Math.PI/2,$.position.set(r,4.74,o),a.add($);let j=0,re=0,te="";function le(ie){if(!["closed","next","bloom"].includes(ie))throw Error("Unknown goal state");te=ie,re=ie==="bloom"?1:ie==="next"?.16:0,a.userData.state=ie,y.color.set(ie==="next"?"#f9bf39":"#c5a777"),y.emissive.set(ie==="next"?"#d89514":"#000000"),y.emissiveIntensity=ie==="next"?.15:0}function X(ie,pe=.016){j+=(re-j)*Math.min(1,pe*7);let J=j;for(let O of u)O.position.set(0,13-J*3,2+J*10),O.scale.set(5+J*1.5,9-J*6,4+J*4),O.rotation.x=J*-.25;T.visible=J>.4,T.position.y=11.4;let ce=te==="next"?1+Math.sin(ie*2.8)*.035:1;c.scale.setScalar(ce),d.emissive.set("#ffc33e"),d.emissiveIntensity=te==="next"?.08+Math.sin(ie*2.8)*.04:0}le(e),j=re,X(0,1),a.userData.goalNumber=i;function ae(ie){let pe=ie===33?13:ie===40?15.7:10.5;I.scale.set((pe+1.6)/(s+1.6),1,(pe+1.6)/(s+1.6)),C.scale.set(pe/s,1,pe/s),$.scale.setScalar(pe/s),a.userData.markerSize=ie}return{group:a,setState:le,setSize:ae,update:X,dispose(){l.dispose(),A.dispose(),v.dispose(),W.dispose(),E.dispose(),V.dispose(),h.forEach(ie=>ie.dispose())}}}var Fn=(i,e)=>ln.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Ul=[[-13,-9],[20,-10],[8,4],[-11,18]];function $h(i){i.x=ln.clamp(i.x,-16,24),i.z=ln.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function Kh(i=73){let e=[{kind:"bee",position:new k(-12,25,10),velocity:new k,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new k(3,21.5,-7),velocity:new k,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new k((Fn(r.leg+1,a)-.5)*5,20.5,(Fn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let f=Math.floor(Fn(r.leg,a)*4);f===r.station&&(f=(f+1+Math.floor(Fn(r.leg+9,a)*2))%4),r.station=f;let[d,p]=Ul[f];r.target=$h(new k(d+(Fn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Fn(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],h=(f,d)=>Math.hypot(f.x-d.x,f.z-d.z);if(h(r.target,l.position)<13||l.target&&h(r.target,l.target)<13){let f=-1;for(let d=0;d<Ul.length;d++){let[p,g]=Ul[d],x=new k(p,24,g),m=h(x,l.position)+(l.target?h(x,l.target):0);m>f&&(f=m,r.target=x,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+Fn(l.leg,i+c)*1.3&&n(l,c);let h=l.target.clone().sub(l.position),f=Math.hypot(h.x,h.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):f<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+Fn(l.leg,i+c)*1.3:.12+Fn(l.leg,i+c)*.3);let d=h.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(l.speed*Math.min(1,f/8));let p=d.sub(new k(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(c?-1:1)*(16-a)*11/a),p.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,p.clampLength(0,95),l.velocity.addScaledVector(p,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),$h(l.position)}}return{agents:e,update(r){let o=ln.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Nl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},m0=(i,e)=>ln.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function jh({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Nl[i];if(!r)throw Error("Unknown flower species "+i);let o=Jh({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new Ze;l.position.copy(c.position),a.add(l);let h=[],f=[],d=ae=>{let ie=new it({color:ae,roughness:.56});return f.push(ie),ie},p=d("#538b2c"),g=r.colors.map(d),x=d(r.center),m=new ct(1,20,12);h.push(m);function u(ae,ie,pe,J,ce,O,N,M){let _=new Be(m,ie);return _.position.set(pe,J,ce),_.scale.set(O,N,M),_.castShadow=_.receiveShadow=!0,ae.add(_),_}u(l,p,0,5,0,1.8,6,1.8);for(let ae of[-1,1]){let ie=u(l,p,ae*6,3,0,8,1.4,3);ie.rotation.z=ae*.25}let T=[];for(let ae=0;ae<r.petals;ae++){let ie=new Ze;ie.position.y=12,ie.rotation.y=ae*Math.PI*2/r.petals,l.add(ie);let pe=new Ze;ie.add(pe);let J=m;if(i==="poppy"){J=m.clone();let O=J.attributes.position;for(let N=0;N<O.count;N++){let M=O.getX(N),_=O.getZ(N);O.setY(N,O.getY(N)+Math.sin(Math.atan2(_,M)*5)*.26*Math.hypot(M,_))}J.computeVertexNormals(),h.push(J)}let ce=new Be(J,g[ae%2]);ce.position.z=r.radius,ce.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),ce.castShadow=ce.receiveShadow=!0,pe.add(ce),T.push(pe)}let y=u(l,x,0,13.8,0,r.heart,2.7,r.heart);for(let ae=0;ae<(i==="poppy"?9:7);ae++){let ie=ae*Math.PI*2/(i==="poppy"?9:7);u(l,x,Math.cos(ie)*r.heart*.7,16,Math.sin(ie)*r.heart*.7,.65,.6,.65)}let v=new Ze;v.name="flower-visitors",l.add(v);let I=d("#e9ad32"),A=d("#d6af50"),C=d("#60452b"),D=d("#fff6df");A.roughness=.95,D.transparent=!0,D.opacity=.72,D.depthWrite=!1;let S=[];for(let ae=0;ae<2;ae++){let ie=new Ze;ie.name=ae?"bumblebee":"bee",ie.scale.setScalar(1.8),v.add(ie);let pe=ae?1.08:.7,J=ae?.98:.65;u(ie,ae?A:I,0,0,0,pe,J,1.2),u(ie,C,0,0,1.05,ae?.56:.48,ae?.54:.48,.48);for(let O of[-.55,.15])u(ie,C,0,0,O,pe*1.02,J*1.02,.18);if(ae){let O=d("#f4e4b9");O.roughness=1,u(ie,O,0,0,-.98,.72,.65,.38);let N=[],M=[],_=260;for(let K=0;K<_;K++){let ne=1-2*(K+.5)/_,R=Math.sqrt(1-ne*ne),z=K*2.39996323,H=Math.cos(z)*R,Y=Math.sin(z)*R,q=new k(H*pe*1.015,ne*J*1.015,Y*1.215),B=new k(H/pe,ne/J,Y/1.2).normalize(),w=.12+m0(K,91)*.12,Z=q.clone().addScaledVector(B,w);Z.z-=.045,N.push(...q.toArray(),...Z.toArray());let ge=new Ve(Y<-.72?"#f4e4b9":Math.abs(Y+.46)<.18||Math.abs(Y-.12)<.17?"#635238":K%3?"#d6af50":"#e7c776");M.push(...ge.toArray(),...ge.toArray())}let P=new ut;P.setAttribute("position",new Xe(N,3)),P.setAttribute("color",new Xe(M,3)),h.push(P);let G=new qi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});f.push(G);let F=new ws(P,G);F.name="bumblebee-fur",ie.add(F)}let ce=[];for(let O of[-1,1]){let N=u(ie,D,O*.95,.5,-.1,1.5,.16,.65);N.castShadow=!1,ce.push(N)}S.push({insect:ie,wings:ce,seed:e*17+ae*31+Object.keys(Nl).indexOf(i)*7,phase:ae*2.7,a:new k,b:new k})}let E=!!s;function V(ae){E=!!ae,a.userData.insects=E}let W=Kh(e*17+Object.keys(Nl).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function $(ae,ie=100){if(!["bee","bumblebee"].includes(ae))throw Error("Unknown flower visitor");if(!Number.isFinite(ie)||ie<50||ie>300)throw RangeError("Visitor size must be between 50 and 300 percent");S.find(pe=>pe.insect.name===ae).insect.scale.setScalar(1.8*ie/100),a.userData.visitorSizes[ae]=ie}let j=t,re=t==="bloom"?1:0,te=re;function le(ae){o.setState(ae),j=ae,re=ae==="bloom"?1:0}function X(ae,ie=.016){o.update(ae,ie),te+=(re-te)*Math.min(1,ie*7);let pe=te;c.scale.multiplyScalar(1-pe),c.visible=pe<.999,l.visible=pe>.001,l.scale.setScalar(pe);for(let ce of T)ce.rotation.x=-(1-pe)*1.1;y.scale.y=2.7*(.8+.2*pe),v.visible=E&&j==="bloom"&&pe>.94;let J=W.update(ie);for(let ce=0;ce<S.length;ce++){let O=S[ce],N=J[ce];O.insect.position.copy(N.position);let M=N.velocity.x,_=N.velocity.z,P=Math.hypot(M,_);if(P>.5){let G=Math.atan2(M,_),F=Math.atan2(Math.sin(G-O.insect.rotation.y),Math.cos(G-O.insect.rotation.y));O.insect.rotation.y+=F*Math.min(1,ie*9),O.insect.rotation.z=ln.clamp(-F*.22,-.24,.24)}else O.insect.rotation.z*=Math.max(0,1-ie*6);O.insect.rotation.x=-Math.min(.16,P*.009),O.wings.forEach((G,F)=>G.rotation.z=Math.sin(ae*30+O.phase)*(F?1:-1)*.5)}}return V(s),X(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:le,setInsects:V,setVisitorSize:$,setSize:o.setSize,update:X,get state(){return j},dispose(){o.dispose(),h.forEach(ae=>ae.dispose()),f.forEach(ae=>ae.dispose())}}}function Qh(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let T=0,y=a.length;T<y;T++){let v=a[T],I=i.attributes[v];c[v]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let A=i.morphAttributes[v];A&&(l[v]||(l[v]=[]),A.forEach((C,D)=>{let S=new C.array.constructor(C.count*C.itemSize);l[v][D]=new C.constructor(S,C.itemSize,C.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let T=0;T<r;T++){let y=n?n.getX(T):T,v="";for(let I=0,A=a.length;I<A;I++){let C=a[I],D=i.getAttribute(C),S=D.itemSize;for(let E=0;E<S;E++)v+=`${~~(D[f[E]](y)*x+m)},`}if(v in t)h.push(t[v]);else{for(let I=0,A=a.length;I<A;I++){let C=a[I],D=i.getAttribute(C),S=i.morphAttributes[C],E=D.itemSize,V=c[C],W=l[C];for(let $=0;$<E;$++){let j=f[$],re=d[$];if(V[re](o,D[j](y)),S)for(let te=0,le=S.length;te<le;te++)W[te][re](o,S[te][j](y))}}t[v]=o,h.push(o),o++}}let u=i.clone();for(let T in i.attributes){let y=c[T];if(u.setAttribute(T,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),T in l)for(let v=0;v<l[T].length;v++){let I=l[T][v];u.morphAttributes[T][v]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return u.setIndex(h),u}var sa=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new k,r=new k,o=new k,a=new k,c=[s,r,o,a],l=new k,h=new k,f=new k,d=new k,p=[l,h,f,d],g=new Ve,x=new Ve,m=new Ve,u=new Ve,T=[g,x,m,u],y=new me,v=new me,I=new me,A=new me,C=[y,v,I,A],D=new me,S=new me,E=new me,V=new me,W=[D,S,E,V],$=e.attributes,j=$.normal!==void 0,re=$.color!==void 0,te=$.uv!==void 0,le=$.uv1!==void 0,X=$.position.array,ae=j?$.normal.array:null,ie=re?$.color.array:null,pe=te?$.uv.array:null,J=le?$.uv1.array:null,ce=X,O=ae,N=ie,M=pe,_=J,P=0,G=!0;function F(ne,R,z){let H=c[ne],Y=c[R],q=c[z];if(ce.push(H.x,H.y,H.z),ce.push(Y.x,Y.y,Y.z),ce.push(q.x,q.y,q.z),j){let B=p[ne],w=p[R],Z=p[z];O.push(B.x,B.y,B.z),O.push(w.x,w.y,w.z),O.push(Z.x,Z.y,Z.z)}if(re){let B=T[ne],w=T[R],Z=T[z];N.push(B.r,B.g,B.b),N.push(w.r,w.g,w.b),N.push(Z.r,Z.g,Z.b)}if(te){let B=C[ne],w=C[R],Z=C[z];M.push(B.x,B.y),M.push(w.x,w.y),M.push(Z.x,Z.y)}if(le){let B=W[ne],w=W[R],Z=W[z];_.push(B.x,B.y),_.push(w.x,w.y),_.push(Z.x,Z.y)}}for(;G&&P<t;){P++,G=!1,X=ce,ce=[],j&&(ae=O,O=[]),re&&(ie=N,N=[]),te&&(pe=M,M=[]),le&&(J=_,_=[]);for(let ne=0,R=0,z=X.length;ne<z;ne+=9,R+=6){s.fromArray(X,ne+0),r.fromArray(X,ne+3),o.fromArray(X,ne+6),j&&(l.fromArray(ae,ne+0),h.fromArray(ae,ne+3),f.fromArray(ae,ne+6)),re&&(g.fromArray(ie,ne+0),x.fromArray(ie,ne+3),m.fromArray(ie,ne+6)),te&&(y.fromArray(pe,R+0),v.fromArray(pe,R+2),I.fromArray(pe,R+4)),le&&(D.fromArray(J,R+0),S.fromArray(J,R+2),E.fromArray(J,R+4));let H=s.distanceToSquared(r),Y=r.distanceToSquared(o),q=s.distanceToSquared(o);H>n||Y>n||q>n?(G=!0,H>=Y&&H>=q?(a.lerpVectors(s,r,.5),j&&d.lerpVectors(l,h,.5),re&&u.lerpColors(g,x,.5),te&&A.lerpVectors(y,v,.5),le&&V.lerpVectors(D,S,.5),F(0,3,2),F(3,1,2)):Y>=H&&Y>=q?(a.lerpVectors(r,o,.5),j&&d.lerpVectors(h,f,.5),re&&u.lerpColors(x,m,.5),te&&A.lerpVectors(v,I,.5),le&&V.lerpVectors(S,E,.5),F(0,1,3),F(3,2,0)):(a.lerpVectors(s,o,.5),j&&d.lerpVectors(l,f,.5),re&&u.lerpColors(g,m,.5),te&&A.lerpVectors(y,I,.5),le&&V.lerpVectors(D,E,.5),F(0,1,3),F(3,1,2))):F(0,1,2)}}let K=new ut;return K.setAttribute("position",new Xe(ce,3)),j&&K.setAttribute("normal",new Xe(O,3)),re&&K.setAttribute("color",new Xe(N,3)),te&&K.setAttribute("uv",new Xe(M,2)),le&&K.setAttribute("uv1",new Xe(_,2)),K}};var g0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},Qs=ln.clamp;function x0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=Qs(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var _0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function eu(i,e,t){if(i==="split"){let n=Math.min(..._0.map(([s,r])=>x0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,c=e*Math.cos(a)+t*Math.sin(a),l=-e*Math.sin(a)+t*Math.cos(a),h=((c-10)/8.5)**2+(l/(s===6?3.2:4.7))**2;n=Math.max(n,Qs((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function tu(i="fossil",{seed:e=73}={}){if(!g0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Ze,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,c=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let u=0;u<s;u++)for(let T=0;T<s;T++){let y=(T/(s-1)-.5)*66,v=(u/(s-1)-.5)*66,I=eu(i,y,v),A=Math.sin(y*.18+v*.11)*Math.sin(v*.21-y*.07),C=c()-.5,D=1+A*(t?.004:.015)+C*(t?.025:.065)-I.ink,S=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],E=(u*s+T)*4;for(let W=0;W<3;W++)r[E+W]=Qs(S[W]*D+(220-S[W])*I.vein,0,255);r[E+3]=255;let V=Qs(138+C*(t?4:12)+A-I.cut*28,0,255);o.set([V,V,V,255],E)}let l=new Yn(r,s,s);l.colorSpace=xt;let h=new Yn(o,s,s);for(let u of[l,h])u.magFilter=u.minFilter=It,u.needsUpdate=!0;let f=new it({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:l,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(f.onBeforeCompile=u=>{let T=new Ve(t?"#9e9688":i==="split"?"#978f80":"#999182");u.vertexShader=`varying float stoneTop;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),u.fragmentShader=`varying float stoneTop;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${T.r},${T.g},${T.b}),diffuseColor.rgb,stoneTop);`)}),f.customProgramCacheKey=()=>`slink-stone-top-${i}`;let d=new yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let u=new sa(3.5,10).modify(d);d.dispose(),d=u}d.translate(0,0,10);let p=d.attributes.position,g=d.attributes.uv;for(let u=0;u<p.count;u++){let T=p.getX(u),y=p.getY(u),v=p.getZ(u),I=Qs((v-10)/16.5,0,1);if(i!=="reference"){let A=Math.max(0,1-(T*T+y*y)/1800),C=Math.sin(T*.13+y*.035)*Math.cos(y*.1)*(t?.12:.7),D=t?A*5:i==="split"?A*1.3-Math.max(0,T*.17+y*.09-2)*.6:A*.6;v+=(D+C-eu(i,T,y).cut)*I}p.setZ(u,v),g.setXY(u,T/66+.5,y/66+.5)}d.deleteAttribute("normal");let x=Qh(d,1e-4);d.dispose(),d=x,d.computeVertexNormals();let m=new Be(d,f);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){d.dispose(),f.dispose(),l.dispose(),h.dispose()}}}var nu=["daisy","buttercup","meadow","poppy"],iu=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],ra=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function y0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function su(i){let e=ra(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=nu[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&ra(e+":flower-mix")%3!==0){let r=nu[(e%4+1+ra(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of y0(i.stones||[],i.n)){let o=ra(e+":"+r.join(","));if(r.length===1){s[r[0]]=iu[o%iu.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Fl=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),Ol={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function v0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new pn(t)}function er(i,{seed:e=73}={}){let t=Ol[i];if(!t)throw Error("Unknown tile "+i);let n=new Ze,s=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=(d,p={})=>new it({color:d,roughness:.75,...p}),o=(d,p,g=0,x=0,m=0)=>{let u=new Be(d,p);return u.position.set(g,x,m),u.castShadow=u.receiveShadow=!0,n.add(u),u},a=r(t.color,{bumpMap:v0(73,t.kind==="earth"?.65:.12),bumpScale:t.grain||.18,roughness:t.kind==="earth"?.95:.65}),c=t.height+3.5,l,h;if(t.kind==="earth"){let d=73.5,p=5,g=-d/2,x=d/2,m=new _t;m.moveTo(g+p,g),m.lineTo(x-p,g),m.quadraticCurveTo(x,g,x,g+p),m.lineTo(x,x-p),m.quadraticCurveTo(x,x,x-p,x),m.lineTo(g+p,x),m.quadraticCurveTo(g,x,g,x-p),m.lineTo(g,g+p),m.quadraticCurveTo(g,g,g+p,g),m.closePath(),l=new Gt(m,{depth:t.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),h=-1}else l=new yn(78.5,78.5,c,4,7.5),h=(t.height-3.5)/2;let f=o(l,a,0,0,h);if(f.userData.surface=!0,t.kind==="earth"){let d=[r("#c59b6b"),r("#98714c"),r("#dbb78a")];for(let p=0;p<t.pebbles;p++){let g=(s()-.5)*59,x=(s()-.5)*59,m=.8+s()*1.2,u=o(new ct(1,9,6),d[p%3],g,x,t.height-.25);u.scale.set(m*1.6,m,m*.55),u.rotation.z=s()*6}for(let p=0;p<22;p++){let g=o(new ct(1,8,6),a,(s()-.5)*62,(s()-.5)*62,t.height-.35),x=1+s()*1.5;g.scale.set(x*1.6,x,.5)}}else if(t.kind!=="reference"){let d=[r("#d3f471"),r("#b1e443"),r("#87bf24")],p=(g,x,m)=>{let u=new _t;return u.moveTo(-m,0),u.quadraticCurveTo(-m*.8,g*.6,x,g),u.quadraticCurveTo(m*1.1,g*.45,m,0),u.closePath(),new Gt(u,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let g=0;g<t.tufts;g++){let x=(s()-.5)*59,m=(s()-.5)*59;for(let u=0;u<3;u++){let T=t.bladeHeight*(.6+s()*.4),y=o(p(T,(u-1)*T*.4,t.kind==="grass"&&i==="grass-velvet"?1.6:1.1),d[u],x+(u-1)*1.8,m,t.height-.15);y.rotation.x=Math.PI/2,y.rotateOnWorldAxis(new k(0,0,1),s()*Math.PI*2)}}if(t.kind==="clover")for(let g=0;g<6;g++){let x=(s()-.5)*50,m=(s()-.5)*50;for(let u=0;u<3;u++){let T=u*Math.PI*2/3,y=o(new ct(1,12,8),d[g%2],x+Math.cos(T)*2.3,m+Math.sin(T)*2.3,t.height+1.7);y.scale.set(3.3,2.6,.9),y.rotation.z=T}}a.emissive.set("#4c790c"),a.emissiveIntensity=.055}else{let d=r("#9fc53b");for(let p=0;p<4;p++){let g=p*Math.PI/2+.3,x=o(new ct(1,12,8),d,21+Math.cos(g)*4,-20+Math.sin(g)*4,13.7);x.scale.set(4.4,2.6,.65),x.rotation.z=g}}return n.userData={variant:i,top:t.height,walkable:!0,footprint:Fl},n}function tr(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var M0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function ru(i,{seed:e=73}={}){let t=M0[i];if(!t)throw Error("Unknown meadow "+i);let n=er("grass-clover",{seed:e}),s=n.children.find(A=>A.userData.surface),r=new Ze;for(let A of[...n.children])A!==s&&r.add(A);tr(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new ct(1,12,8),c=A=>new it({color:A,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],h=[],f=(A,C,D,S,E)=>{let V=new Be(A,C);return V.position.set(D,S,E),V.castShadow=V.receiveShadow=!0,n.add(V),V};function d(A,C,D,S,E=3.3,V=2.6){let W=f(a,l[1],A,C,D);return W.scale.set(E,V,.85),W.rotation.z=S,W}for(let A=0;A<t.clover;A++){let C=(o()-.5)*52,D=(o()-.5)*52;for(let S=0;S<3;S++){let E=S*Math.PI*2/3+o()*.12;d(C+Math.cos(E)*2.3,D+Math.sin(E)*2.3,19.7,E)}}function p(A,C,D){for(let S=0;S<3;S++){let E=new _t,V=(S-1)*D*.35;E.moveTo(-1,0),E.quadraticCurveTo(-.8,D*.65,V,D),E.quadraticCurveTo(1,D*.45,1,0),E.closePath();let W=new Gt(E,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),$=f(W,l[S],A+(S-1)*1.6,C,17.8);$.rotation.x=Math.PI/2,$.rotateOnWorldAxis(new k(0,0,1),.6)}}for(let A=0;A<t.tufts;A++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=c("#fff3c4"),x=c("#f6b7a0"),m=c("#efb52e"),u=c("#709e29"),T=c("#edbd43"),y=c("#63502a"),v=new it({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let A=0;A<(t.flowers||0);A++){let C=A?-16:16,D=A?-14:12,S=A?24:25.5,E=f(new nn(.6,.85,S-18,8),u,C,D,(18+S)/2);E.rotation.x=Math.PI/2;for(let W=0;W<5;W++){let $=W*Math.PI*2/5,j=f(a,A?x:g,C+Math.cos($)*3,D+Math.sin($)*3,S);j.scale.set(3.2,1.8,.8),j.rotation.z=$}if(f(a,m,C,D,S+.7).scale.set(1.9,1.9,1.2),d(C-2,D,20.5,-.5,3.2,1.4),t.insects)for(let W=0;W<t.insects;W++){let $=new Ze;n.add($);let j=new Be(a,T);j.scale.set(.85,1.3,.8),$.add(j);let re=new Be(a,y);re.position.y=1.2,re.scale.setScalar(.6),$.add(re);let te=[];for(let le of[-1,1]){let X=new Be(a,v);X.position.set(le*1,0,.5),X.scale.set(1.8,.75,.25),X.rotation.z=le*.35,$.add(X),te.push(X)}h.push({insect:$,wings:te,x:C,y:D,phase:W*3.14,radius:8+W*2,z:S+5+W})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function I(A){for(let C of h){let D=A*.85+C.phase;C.insect.position.set(C.x+Math.cos(D)*C.radius,C.y+Math.sin(D)*C.radius*.65,C.z+Math.sin(A*1.8+C.phase)*1.2),C.insect.rotation.z=D,C.wings.forEach((S,E)=>S.rotation.y=Math.sin(A*28)*(E?1:-1)*.45)}}return I(0),{group:n,update:I,dispose(){tr(n)}}}var ou={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function au(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new it({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=ou[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new me(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var S0=xt,nr=class i extends fi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new ks(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(O,N){if(O.nodeType!==1)return;let M=v(O),_=!1,P=null;switch(O.nodeName){case"svg":N=g(O,N);break;case"style":r(O);break;case"g":N=g(O,N);break;case"path":N=g(O,N),O.hasAttribute("d")&&(P=s(O));break;case"rect":N=g(O,N),P=c(O);break;case"polygon":N=g(O,N),P=l(O);break;case"polyline":N=g(O,N),P=h(O);break;case"circle":N=g(O,N),P=f(O);break;case"ellipse":N=g(O,N),P=d(O);break;case"line":N=g(O,N),P=p(O);break;case"defs":_=!0;break;case"use":N=g(O,N);let K=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ne=O.viewportElement.getElementById(K);ne?n(ne,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+K);break;default:}P&&(N.fill!==void 0&&N.fill!=="none"&&P.color.setStyle(N.fill,S0),A(P,pe),W.push(P),P.userData={node:O,style:N});let G=O.childNodes;for(let F=0;F<G.length;F++){let K=G[F];_&&K.nodeName!=="style"&&K.nodeName!=="defs"||n(K,N)}M&&(j.pop(),j.length>0?pe.copy(j[j.length-1]):pe.identity())}function s(O){let N=new on,M=new me,_=new me,P=new me,G=!0,F=!1,K=O.getAttribute("d");if(K===""||K==="none")return null;let ne=K.match(/[a-df-z][^a-df-z]*/ig);for(let R=0,z=ne.length;R<z;R++){let H=ne[R],Y=H.charAt(0),q=H.slice(1).trim();G===!0&&(F=!0,G=!1);let B;switch(Y){case"M":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2)M.x=B[w+0],M.y=B[w+1],_.x=M.x,_.y=M.y,w===0?N.moveTo(M.x,M.y):N.lineTo(M.x,M.y),w===0&&P.copy(M);break;case"H":B=m(q);for(let w=0,Z=B.length;w<Z;w++)M.x=B[w],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"V":B=m(q);for(let w=0,Z=B.length;w<Z;w++)M.y=B[w],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"L":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2)M.x=B[w+0],M.y=B[w+1],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"C":B=m(q);for(let w=0,Z=B.length;w<Z;w+=6)N.bezierCurveTo(B[w+0],B[w+1],B[w+2],B[w+3],B[w+4],B[w+5]),_.x=B[w+2],_.y=B[w+3],M.x=B[w+4],M.y=B[w+5],w===0&&F===!0&&P.copy(M);break;case"S":B=m(q);for(let w=0,Z=B.length;w<Z;w+=4)N.bezierCurveTo(x(M.x,_.x),x(M.y,_.y),B[w+0],B[w+1],B[w+2],B[w+3]),_.x=B[w+0],_.y=B[w+1],M.x=B[w+2],M.y=B[w+3],w===0&&F===!0&&P.copy(M);break;case"Q":B=m(q);for(let w=0,Z=B.length;w<Z;w+=4)N.quadraticCurveTo(B[w+0],B[w+1],B[w+2],B[w+3]),_.x=B[w+0],_.y=B[w+1],M.x=B[w+2],M.y=B[w+3],w===0&&F===!0&&P.copy(M);break;case"T":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2){let ge=x(M.x,_.x),ve=x(M.y,_.y);N.quadraticCurveTo(ge,ve,B[w+0],B[w+1]),_.x=ge,_.y=ve,M.x=B[w+0],M.y=B[w+1],w===0&&F===!0&&P.copy(M)}break;case"A":B=m(q,[3,4],7);for(let w=0,Z=B.length;w<Z;w+=7){if(B[w+5]==M.x&&B[w+6]==M.y)continue;let ge=M.clone();M.x=B[w+5],M.y=B[w+6],_.x=M.x,_.y=M.y,o(N,B[w],B[w+1],B[w+2],B[w+3],B[w+4],ge,M),w===0&&F===!0&&P.copy(M)}break;case"m":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2)M.x+=B[w+0],M.y+=B[w+1],_.x=M.x,_.y=M.y,w===0?N.moveTo(M.x,M.y):N.lineTo(M.x,M.y),w===0&&P.copy(M);break;case"h":B=m(q);for(let w=0,Z=B.length;w<Z;w++)M.x+=B[w],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"v":B=m(q);for(let w=0,Z=B.length;w<Z;w++)M.y+=B[w],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"l":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2)M.x+=B[w+0],M.y+=B[w+1],_.x=M.x,_.y=M.y,N.lineTo(M.x,M.y),w===0&&F===!0&&P.copy(M);break;case"c":B=m(q);for(let w=0,Z=B.length;w<Z;w+=6)N.bezierCurveTo(M.x+B[w+0],M.y+B[w+1],M.x+B[w+2],M.y+B[w+3],M.x+B[w+4],M.y+B[w+5]),_.x=M.x+B[w+2],_.y=M.y+B[w+3],M.x+=B[w+4],M.y+=B[w+5],w===0&&F===!0&&P.copy(M);break;case"s":B=m(q);for(let w=0,Z=B.length;w<Z;w+=4)N.bezierCurveTo(x(M.x,_.x),x(M.y,_.y),M.x+B[w+0],M.y+B[w+1],M.x+B[w+2],M.y+B[w+3]),_.x=M.x+B[w+0],_.y=M.y+B[w+1],M.x+=B[w+2],M.y+=B[w+3],w===0&&F===!0&&P.copy(M);break;case"q":B=m(q);for(let w=0,Z=B.length;w<Z;w+=4)N.quadraticCurveTo(M.x+B[w+0],M.y+B[w+1],M.x+B[w+2],M.y+B[w+3]),_.x=M.x+B[w+0],_.y=M.y+B[w+1],M.x+=B[w+2],M.y+=B[w+3],w===0&&F===!0&&P.copy(M);break;case"t":B=m(q);for(let w=0,Z=B.length;w<Z;w+=2){let ge=x(M.x,_.x),ve=x(M.y,_.y);N.quadraticCurveTo(ge,ve,M.x+B[w+0],M.y+B[w+1]),_.x=ge,_.y=ve,M.x=M.x+B[w+0],M.y=M.y+B[w+1],w===0&&F===!0&&P.copy(M)}break;case"a":B=m(q,[3,4],7);for(let w=0,Z=B.length;w<Z;w+=7){if(B[w+5]==0&&B[w+6]==0)continue;let ge=M.clone();M.x+=B[w+5],M.y+=B[w+6],_.x=M.x,_.y=M.y,o(N,B[w],B[w+1],B[w+2],B[w+3],B[w+4],ge,M),w===0&&F===!0&&P.copy(M)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(M.copy(P),N.currentPath.currentPoint.copy(M),G=!0);break;default:console.warn(H)}F=!1}return N}function r(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){let M=O.sheet.cssRules[N];if(M.type!==1)continue;let _=M.selectorText.split(/,/gm).filter(Boolean).map(P=>P.trim());for(let P=0;P<_.length;P++){let G=Object.fromEntries(Object.entries(M.style).filter(([,F])=>F!==""));$[_[P]]=Object.assign($[_[P]]||{},G)}}}function o(O,N,M,_,P,G,F,K){if(N==0||M==0){O.lineTo(K.x,K.y);return}_=_*Math.PI/180,N=Math.abs(N),M=Math.abs(M);let ne=(F.x-K.x)/2,R=(F.y-K.y)/2,z=Math.cos(_)*ne+Math.sin(_)*R,H=-Math.sin(_)*ne+Math.cos(_)*R,Y=N*N,q=M*M,B=z*z,w=H*H,Z=B/Y+w/q;if(Z>1){let ye=Math.sqrt(Z);N=ye*N,M=ye*M,Y=N*N,q=M*M}let ge=Y*w+q*B,ve=(Y*q-ge)/ge,U=Math.sqrt(Math.max(0,ve));P===G&&(U=-U);let b=U*N*H/M,ee=-U*M*z/N,he=Math.cos(_)*b-Math.sin(_)*ee+(F.x+K.x)/2,xe=Math.sin(_)*b+Math.cos(_)*ee+(F.y+K.y)/2,ue=a(1,0,(z-b)/N,(H-ee)/M),Re=a((z-b)/N,(H-ee)/M,(-z-b)/N,(-H-ee)/M)%(Math.PI*2);O.currentPath.absellipse(he,xe,N,M,ue,ue+Re,G===0,_)}function a(O,N,M,_){let P=O*M+N*_,G=Math.sqrt(O*O+N*N)*Math.sqrt(M*M+_*_),F=Math.acos(Math.max(-1,Math.min(1,P/G)));return O*_-N*M<0&&(F=-F),F}function c(O){let N=y(O.getAttribute("x")||0),M=y(O.getAttribute("y")||0),_=y(O.getAttribute("rx")||O.getAttribute("ry")||0),P=y(O.getAttribute("ry")||O.getAttribute("rx")||0),G=y(O.getAttribute("width")),F=y(O.getAttribute("height")),K=1-.551915024494,ne=new on;return ne.moveTo(N+_,M),ne.lineTo(N+G-_,M),(_!==0||P!==0)&&ne.bezierCurveTo(N+G-_*K,M,N+G,M+P*K,N+G,M+P),ne.lineTo(N+G,M+F-P),(_!==0||P!==0)&&ne.bezierCurveTo(N+G,M+F-P*K,N+G-_*K,M+F,N+G-_,M+F),ne.lineTo(N+_,M+F),(_!==0||P!==0)&&ne.bezierCurveTo(N+_*K,M+F,N,M+F-P*K,N,M+F-P),ne.lineTo(N,M+P),(_!==0||P!==0)&&ne.bezierCurveTo(N,M+P*K,N+_*K,M,N+_,M),ne}function l(O){function N(G,F,K){let ne=y(F),R=y(K);P===0?_.moveTo(ne,R):_.lineTo(ne,R),P++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,_=new on,P=0;return O.getAttribute("points").replace(M,N),_.currentPath.autoClose=!0,_}function h(O){function N(G,F,K){let ne=y(F),R=y(K);P===0?_.moveTo(ne,R):_.lineTo(ne,R),P++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,_=new on,P=0;return O.getAttribute("points").replace(M,N),_.currentPath.autoClose=!1,_}function f(O){let N=y(O.getAttribute("cx")||0),M=y(O.getAttribute("cy")||0),_=y(O.getAttribute("r")||0),P=new mn;P.absarc(N,M,_,0,Math.PI*2);let G=new on;return G.subPaths.push(P),G}function d(O){let N=y(O.getAttribute("cx")||0),M=y(O.getAttribute("cy")||0),_=y(O.getAttribute("rx")||0),P=y(O.getAttribute("ry")||0),G=new mn;G.absellipse(N,M,_,P,0,Math.PI*2);let F=new on;return F.subPaths.push(G),F}function p(O){let N=y(O.getAttribute("x1")||0),M=y(O.getAttribute("y1")||0),_=y(O.getAttribute("x2")||0),P=y(O.getAttribute("y2")||0),G=new on;return G.moveTo(N,M),G.lineTo(_,P),G.currentPath.autoClose=!1,G}function g(O,N){N=Object.assign({},N);let M={};if(O.hasAttribute("class")){let F=O.getAttribute("class").split(/\s/).filter(Boolean).map(K=>K.trim());for(let K=0;K<F.length;K++)M=Object.assign(M,$["."+F[K]])}O.hasAttribute("id")&&(M=Object.assign(M,$["#"+O.getAttribute("id")]));function _(F,K,ne){ne===void 0&&(ne=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),O.hasAttribute(F)&&(N[K]=ne(O.getAttribute(F))),M[F]&&(N[K]=ne(M[F])),O.style&&O.style[F]!==""&&(N[K]=ne(O.style[F]))}function P(F){return Math.max(0,Math.min(1,y(F)))}function G(F){return Math.max(0,y(F))}return _("fill","fill"),_("fill-opacity","fillOpacity",P),_("fill-rule","fillRule"),_("opacity","opacity",P),_("stroke","stroke"),_("stroke-opacity","strokeOpacity",P),_("stroke-width","strokeWidth",G),_("stroke-linejoin","strokeLineJoin"),_("stroke-linecap","strokeLineCap"),_("stroke-miterlimit","strokeMiterLimit",G),_("visibility","visibility"),N}function x(O,N){return O-(N-O)}function m(O,N,M){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);let _={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},P=0,G=1,F=2,K=3,ne=P,R=!0,z="",H="",Y=[];function q(ge,ve,U){let b=new SyntaxError('Unexpected character "'+ge+'" at index '+ve+".");throw b.partial=U,b}function B(){z!==""&&(H===""?Y.push(Number(z)):Y.push(Number(z)*Math.pow(10,Number(H)))),z="",H=""}let w,Z=O.length;for(let ge=0;ge<Z;ge++){if(w=O[ge],Array.isArray(N)&&N.includes(Y.length%M)&&_.FLAGS.test(w)){ne=G,z=w,B();continue}if(ne===P){if(_.WHITESPACE.test(w))continue;if(_.DIGIT.test(w)||_.SIGN.test(w)){ne=G,z=w;continue}if(_.POINT.test(w)){ne=F,z=w;continue}_.COMMA.test(w)&&(R&&q(w,ge,Y),R=!0)}if(ne===G){if(_.DIGIT.test(w)){z+=w;continue}if(_.POINT.test(w)){z+=w,ne=F;continue}if(_.EXP.test(w)){ne=K;continue}_.SIGN.test(w)&&z.length===1&&_.SIGN.test(z[0])&&q(w,ge,Y)}if(ne===F){if(_.DIGIT.test(w)){z+=w;continue}if(_.EXP.test(w)){ne=K;continue}_.POINT.test(w)&&z[z.length-1]==="."&&q(w,ge,Y)}if(ne===K){if(_.DIGIT.test(w)){H+=w;continue}if(_.SIGN.test(w)){if(H===""){H+=w;continue}H.length===1&&_.SIGN.test(H)&&q(w,ge,Y)}}_.WHITESPACE.test(w)?(B(),ne=P,R=!1):_.COMMA.test(w)?(B(),ne=P,R=!0):_.SIGN.test(w)?(B(),ne=G,z=w):_.POINT.test(w)?(B(),ne=F,z=w):q(w,ge,Y)}return B(),Y}let u=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(O){let N="px";if(typeof O=="string"||O instanceof String)for(let _=0,P=u.length;_<P;_++){let G=u[_];if(O.endsWith(G)){N=G,O=O.substring(0,O.length-G.length);break}}let M;return N==="px"&&t.defaultUnit!=="px"?M=T.in[t.defaultUnit]/t.defaultDPI:(M=T[N][t.defaultUnit],M<0&&(M=T[N].in*t.defaultDPI)),M*parseFloat(O)}function v(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;let N=I(O);return j.length>0&&N.premultiply(j[j.length-1]),pe.copy(N),j.push(N),N}function I(O){let N=new We,M=re;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){let _=y(O.getAttribute("x")),P=y(O.getAttribute("y"));N.translate(_,P)}if(O.hasAttribute("transform")){let _=O.getAttribute("transform").split(")");for(let P=_.length-1;P>=0;P--){let G=_[P].trim();if(G==="")continue;let F=G.indexOf("("),K=G.length;if(F>0&&F<K){let ne=G.slice(0,F),R=m(G.slice(F+1));switch(M.identity(),ne){case"translate":if(R.length>=1){let z=R[0],H=0;R.length>=2&&(H=R[1]),M.translate(z,H)}break;case"rotate":if(R.length>=1){let z=0,H=0,Y=0;z=R[0]*Math.PI/180,R.length>=3&&(H=R[1],Y=R[2]),te.makeTranslation(-H,-Y),le.makeRotation(z),X.multiplyMatrices(le,te),te.makeTranslation(H,Y),M.multiplyMatrices(te,X)}break;case"scale":if(R.length>=1){let z=R[0],H=z;R.length>=2&&(H=R[1]),M.scale(z,H)}break;case"skewX":R.length===1&&M.set(1,Math.tan(R[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":R.length===1&&M.set(1,0,0,Math.tan(R[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":R.length===6&&M.set(R[0],R[2],R[4],R[1],R[3],R[5],0,0,1);break}}N.premultiply(M)}}return N}function A(O,N){function M(F){ie.set(F.x,F.y,1).applyMatrix3(N),F.set(ie.x,ie.y)}function _(F){let K=F.xRadius,ne=F.yRadius,R=Math.cos(F.aRotation),z=Math.sin(F.aRotation),H=new k(K*R,K*z,0),Y=new k(-ne*z,ne*R,0),q=H.applyMatrix3(N),B=Y.applyMatrix3(N),w=re.set(q.x,B.x,0,q.y,B.y,0,0,0,1),Z=te.copy(w).invert(),U=le.copy(Z).transpose().multiply(Z).elements,b=V(U[0],U[1],U[4]),ee=Math.sqrt(b.rt1),he=Math.sqrt(b.rt2);if(F.xRadius=1/ee,F.yRadius=1/he,F.aRotation=Math.atan2(b.sn,b.cs),!((F.aEndAngle-F.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ue=te.set(ee,0,0,0,he,0,0,0,1),Re=le.set(b.cs,b.sn,0,-b.sn,b.cs,0,0,0,1),ye=ue.multiply(Re).multiply(w),Te=Le=>{let{x:Me,y:Ae}=new k(Math.cos(Le),Math.sin(Le),0).applyMatrix3(ye);return Math.atan2(Ae,Me)};F.aStartAngle=Te(F.aStartAngle),F.aEndAngle=Te(F.aEndAngle),C(N)&&(F.aClockwise=!F.aClockwise)}}function P(F){let K=S(N),ne=E(N);F.xRadius*=K,F.yRadius*=ne;let R=K>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);F.aRotation+=R,C(N)&&(F.aStartAngle*=-1,F.aEndAngle*=-1,F.aClockwise=!F.aClockwise)}let G=O.subPaths;for(let F=0,K=G.length;F<K;F++){let R=G[F].curves;for(let z=0;z<R.length;z++){let H=R[z];H.isLineCurve?(M(H.v1),M(H.v2)):H.isCubicBezierCurve?(M(H.v0),M(H.v1),M(H.v2),M(H.v3)):H.isQuadraticBezierCurve?(M(H.v0),M(H.v1),M(H.v2)):H.isEllipseCurve&&(ae.set(H.aX,H.aY),M(ae),H.aX=ae.x,H.aY=ae.y,D(N)?_(H):P(H))}}}function C(O){let N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function D(O){let N=O.elements,M=N[0]*N[3]+N[1]*N[4];if(M===0)return!1;let _=S(O),P=E(O);return Math.abs(M/(_*P))>Number.EPSILON}function S(O){let N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function E(O){let N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(O,N,M){let _,P,G,F,K,ne=O+M,R=O-M,z=Math.sqrt(R*R+4*N*N);return ne>0?(_=.5*(ne+z),K=1/_,P=O*K*M-N*K*N):ne<0?P=.5*(ne-z):(_=.5*z,P=-.5*z),R>0?G=R+z:G=R-z,Math.abs(G)>2*Math.abs(N)?(K=-2*N/G,F=1/Math.sqrt(1+K*K),G=K*F):Math.abs(N)===0?(G=1,F=0):(K=-.5*G/N,G=1/Math.sqrt(1+K*K),F=K*G),R>0&&(K=G,G=-F,F=K),{rt1:_,rt2:P,cs:G,sn:F}}let W=[],$={},j=[],re=new We,te=new We,le=new We,X=new We,ae=new me,ie=new k,pe=new We,J=new DOMParser().parseFromString(e,"image/svg+xml");return n(J.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:J.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,u,T){let y=x.x,v=m.x,I=u.x,A=T.x,C=x.y,D=m.y,S=u.y,E=T.y,V=(A-I)*(C-S)-(E-S)*(y-I),W=(v-y)*(C-S)-(D-C)*(y-I),$=(E-S)*(v-y)-(A-I)*(D-C),j=V/$,re=W/$;if($===0&&V!==0||j<=0||j>=1||re<0||re>1)return null;if(V===0&&$===0){for(let te=0;te<2;te++)if(o(te===0?u:T,x,m),s.loc==n.ORIGIN){let le=te===0?u:T;return{x:le.x,y:le.y,t:s.t}}else if(s.loc==n.BETWEEN){let le=+(y+s.t*(v-y)).toPrecision(10),X=+(C+s.t*(D-C)).toPrecision(10);return{x:le,y:X,t:s.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?u:T,x,m),s.loc==n.ORIGIN){let ae=X===0?u:T;return{x:ae.x,y:ae.y,t:s.t}}let te=+(y+j*(v-y)).toPrecision(10),le=+(C+j*(D-C)).toPrecision(10);return{x:te,y:le,t:j}}}function o(x,m,u){let T=u.x-m.x,y=u.y-m.y,v=x.x-m.x,I=x.y-m.y,A=T*I-v*y;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===u.x&&x.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(A<-Number.EPSILON){s.loc=n.LEFT;return}if(A>Number.EPSILON){s.loc=n.RIGHT;return}if(T*v<0||y*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(T*T+y*y)<Math.sqrt(v*v+I*I)){s.loc=n.BEYOND;return}let C;T!==0?C=v/T:C=I/y,s.loc=n.BETWEEN,s.t=C}function a(x,m){let u=[],T=[];for(let y=1;y<x.length;y++){let v=x[y-1],I=x[y];for(let A=1;A<m.length;A++){let C=m[A-1],D=m[A],S=r(v,I,C,D);S!==null&&u.find(E=>E.t<=S.t+Number.EPSILON&&E.t>=S.t-Number.EPSILON)===void 0&&(u.push(S),T.push(new me(S.x,S.y)))}}return T}function c(x,m,u){let T=new me;m.getCenter(T);let y=[];return u.forEach(v=>{v.boundingBox.containsPoint(T)&&a(x,v.points).forEach(A=>{y.push({identifier:v.identifier,isCW:v.isCW,point:A})})}),y.sort((v,I)=>v.point.x-I.point.x),y}function l(x,m,u,T,y){(y==null||y==="")&&(y="nonzero");let v=new me;x.boundingBox.getCenter(v);let I=[new me(u,v.y),new me(T,v.y)],A=c(I,x.boundingBox,m);A.sort((W,$)=>W.point.x-$.point.x);let C=[],D=[];A.forEach(W=>{W.identifier===x.identifier?C.push(W):D.push(W)});let S=C[0].point.x,E=[],V=0;for(;V<D.length&&D[V].point.x<S;)E.length>0&&E[E.length-1]===D[V].identifier?E.pop():E.push(D[V].identifier),V++;if(E.push(x.identifier),y==="evenodd"){let W=E.length%2===0,$=E[E.length-2];return{identifier:x.identifier,isHole:W,for:$}}else if(y==="nonzero"){let W=!0,$=null,j=null;for(let re=0;re<E.length;re++){let te=E[re];W?(j=m[te].isCW,W=!1,$=te):j!==m[te].isCW&&(j=m[te].isCW,W=!0)}return{identifier:x.identifier,isHole:W,for:$}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let h=999999999,f=-999999999,d=e.subPaths.map(x=>{let m=x.getPoints(),u=-999999999,T=999999999,y=-999999999,v=999999999;for(let I=0;I<m.length;I++){let A=m[I];A.y>u&&(u=A.y),A.y<T&&(T=A.y),A.x>y&&(y=A.x),A.x<v&&(v=A.x)}return f<=y&&(f=y+1),h>=v&&(h=v-1),{curves:x.curves,points:m,isCW:wt.isClockWise(m),identifier:-1,boundingBox:new Ws(new me(v,T),new me(y,u))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let p=d.map(x=>l(x,d,h,f,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(x=>{if(!p[x.identifier].isHole){let u=new _t;u.curves=x.curves,p.filter(y=>y.isHole&&y.for===x.identifier).forEach(y=>{let v=d[y.identifier],I=new mn;I.curves=v.curves,u.holes.push(I)}),g.push(u)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let c=new ut;return c.setAttribute("position",new Xe(r,3)),c.setAttribute("normal",new Xe(o,3)),c.setAttribute("uv",new Xe(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){let l=new me,h=new me,f=new me,d=new me,p=new me,g=new me,x=new me,m=new me,u=new me,T=new me,y=new me,v=new me,I=new me,A=new me,C=new me,D=new me,S=new me;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=R(e);let E=e.length;if(E<2)return 0;let V=e[0].equals(e[E-1]),W,$=e[0],j,re=t.strokeWidth/2,te=1/(E-1),le=0,X,ae,ie,pe,J=!1,ce=0,O=c*3,N=c*2;M(e[0],e[1],l).multiplyScalar(re),m.copy(e[0]).sub(l),u.copy(e[0]).add(l),T.copy(m),y.copy(u);for(let z=1;z<E;z++){W=e[z],z===E-1?V?j=e[1]:j=void 0:j=e[z+1];let H=l;if(M($,W,H),f.copy(H).multiplyScalar(re),v.copy(W).sub(f),I.copy(W).add(f),X=le+te,ae=!1,j!==void 0){M(W,j,h),f.copy(h).multiplyScalar(re),A.copy(W).sub(f),C.copy(W).add(f),ie=!0,f.subVectors(j,$),H.dot(f)<0&&(ie=!1),z===1&&(J=ie),f.subVectors(j,W),f.normalize();let Y=Math.abs(H.dot(f));if(Y>Number.EPSILON){let q=re/Y;f.multiplyScalar(-q),d.subVectors(W,$),p.copy(d).setLength(q).add(f),D.copy(p).negate();let B=p.length(),w=d.length();d.divideScalar(w),g.subVectors(j,W);let Z=g.length();switch(g.divideScalar(Z),d.dot(D)<w&&g.dot(D)<Z&&(ae=!0),S.copy(p).add(W),D.add(W),pe=!1,ae?ie?(C.copy(D),I.copy(D)):(A.copy(D),v.copy(D)):G(),t.strokeLineJoin){case"bevel":F(ie,ae,X);break;case"round":K(ie,ae),ie?P(W,v,A,X,0):P(W,C,I,X,1);break;case"miter":case"miter-clip":default:let ge=re*t.strokeMiterLimit/B;if(ge<1)if(t.strokeLineJoin!=="miter-clip"){F(ie,ae,X);break}else K(ie,ae),ie?(g.subVectors(S,v).multiplyScalar(ge).add(v),x.subVectors(S,A).multiplyScalar(ge).add(A),_(v,X,0),_(g,X,0),_(W,X,.5),_(W,X,.5),_(g,X,0),_(x,X,0),_(W,X,.5),_(x,X,0),_(A,X,0)):(g.subVectors(S,I).multiplyScalar(ge).add(I),x.subVectors(S,C).multiplyScalar(ge).add(C),_(I,X,1),_(g,X,1),_(W,X,.5),_(W,X,.5),_(g,X,1),_(x,X,1),_(W,X,.5),_(x,X,1),_(C,X,1));else ae?(ie?(_(u,le,1),_(m,le,0),_(S,X,0),_(u,le,1),_(S,X,0),_(D,X,1)):(_(u,le,1),_(m,le,0),_(S,X,1),_(m,le,0),_(D,X,0),_(S,X,1)),ie?A.copy(S):C.copy(S)):ie?(_(v,X,0),_(S,X,0),_(W,X,.5),_(W,X,.5),_(S,X,0),_(A,X,0)):(_(I,X,1),_(S,X,1),_(W,X,.5),_(W,X,.5),_(S,X,1),_(C,X,1)),pe=!0;break}}else G()}else G();!V&&z===E-1&&ne(e[0],T,y,ie,!0,le),le=X,$=W,m.copy(A),u.copy(C)}if(!V)ne(W,v,I,ie,!1,X);else if(ae&&r){let z=S,H=D;J!==ie&&(z=D,H=S),ie?(pe||J)&&(H.toArray(r,0),H.toArray(r,9),pe&&z.toArray(r,3)):(pe||!J)&&(H.toArray(r,3),H.toArray(r,9),pe&&z.toArray(r,0))}return ce;function M(z,H,Y){return Y.subVectors(H,z),Y.set(-Y.y,Y.x).normalize()}function _(z,H,Y){r&&(r[O]=z.x,r[O+1]=z.y,r[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=H,a[N+1]=Y,N+=2)),ce+=3}function P(z,H,Y,q,B){l.copy(H).sub(z).normalize(),h.copy(Y).sub(z).normalize();let w=Math.PI,Z=l.dot(h);Math.abs(Z)<1&&(w=Math.abs(Math.acos(Z))),w/=n,f.copy(H);for(let ge=0,ve=n-1;ge<ve;ge++)d.copy(f).rotateAround(z,w),_(f,q,B),_(d,q,B),_(z,q,.5),f.copy(d);_(d,q,B),_(Y,q,B),_(z,q,.5)}function G(){_(u,le,1),_(m,le,0),_(v,X,0),_(u,le,1),_(v,X,0),_(I,X,1)}function F(z,H,Y){H?z?(_(u,le,1),_(m,le,0),_(v,X,0),_(u,le,1),_(v,X,0),_(D,X,1),_(v,Y,0),_(A,Y,0),_(D,Y,.5)):(_(u,le,1),_(m,le,0),_(I,X,1),_(m,le,0),_(D,X,0),_(I,X,1),_(I,Y,1),_(D,Y,0),_(C,Y,1)):z?(_(v,Y,0),_(A,Y,0),_(W,Y,.5)):(_(I,Y,1),_(C,Y,0),_(W,Y,.5))}function K(z,H){H&&(z?(_(u,le,1),_(m,le,0),_(v,X,0),_(u,le,1),_(v,X,0),_(D,X,1),_(v,le,0),_(W,X,.5),_(D,X,1),_(W,X,.5),_(A,le,0),_(D,X,1)):(_(u,le,1),_(m,le,0),_(I,X,1),_(m,le,0),_(D,X,0),_(I,X,1),_(I,le,1),_(D,X,0),_(W,X,.5),_(W,X,.5),_(D,X,0),_(C,le,1)))}function ne(z,H,Y,q,B,w){switch(t.strokeLineCap){case"round":B?P(z,Y,H,w,.5):P(z,H,Y,w,.5);break;case"square":if(B)l.subVectors(H,z),h.set(l.y,-l.x),f.addVectors(l,h).add(z),d.subVectors(h,l).add(z),q?(f.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(f.toArray(r,3),a[7]===1?d.toArray(r,9):f.toArray(r,9),d.toArray(r,0));else{l.subVectors(Y,z),h.set(l.y,-l.x),f.addVectors(l,h).add(z),d.subVectors(h,l).add(z);let Z=r.length;q?(f.toArray(r,Z-3),d.toArray(r,Z-6),d.toArray(r,Z-12)):(d.toArray(r,Z-6),f.toArray(r,Z-3),d.toArray(r,Z-12))}break;case"butt":default:break}}function R(z){let H=!1;for(let q=1,B=z.length-1;q<B;q++)if(z[q].distanceTo(z[q+1])<s){H=!0;break}if(!H)return z;let Y=[];Y.push(z[0]);for(let q=1,B=z.length-1;q<B;q++)z[q].distanceTo(z[q+1])>=s&&Y.push(z[q]);return Y.push(z[z.length-1]),Y}}};window.SlinkGrowthModules={createTile:er,VARIANTS:Ol,TILE_SPEC:Fl,disposeTile:tr};window.Slink3D=(()=>{let i=new ia,e,t=Gh(),n,s,r,o,a,c=new Gs,l=[],h=[],f=[],d,p,g,x=!1,m,u=[],T=[],y=0,v=0,I=(J,ce=.55,O={})=>new it({color:J,roughness:ce,metalness:0,...O});function A(J,ce,O,N,M){let _=new _t;return _.moveTo(J+M,ce),_.lineTo(J+O-M,ce),_.quadraticCurveTo(J+O,ce,J+O,ce+M),_.lineTo(J+O,ce+N-M),_.quadraticCurveTo(J+O,ce+N,J+O-M,ce+N),_.lineTo(J+M,ce+N),_.quadraticCurveTo(J,ce+N,J,ce+N-M),_.lineTo(J,ce+M),_.quadraticCurveTo(J,ce,J+M,ce),_}function C(J,ce,O=0,N=0,M=0,_=o){let P=new Be(J,ce);return P.position.set(O,N,M),P.castShadow=!0,P.receiveShadow=!0,_.add(P),P}function D(J,ce,O,N,M,_,P,G,F=o){return C(new yn(J,ce,O,4,N),M,_,P,G,F)}function S(){let J=document.createElement("canvas");J.width=J.height=128;let ce=J.getContext("2d"),O=ce.createImageData(128,128),N=73;for(let _=0;_<O.data.length;_+=4){N=N*1664525+1013904223>>>0;let P=128+(N>>>27)%9;O.data[_]=O.data[_+1]=O.data[_+2]=P,O.data[_+3]=255}ce.putImageData(O,0,0);let M=new pn(J);return M.wrapS=M.wrapT=Oi,M}let E=()=>S();function V(){let J=S(),ce=J.image,O=ce.getContext("2d");O.fillStyle="#656565";for(let N=0;N<4;N++){let M=N*Math.PI/2+.5;O.save(),O.translate(64+Math.cos(M)*18,64+Math.sin(M)*18),O.rotate(M),O.beginPath(),O.ellipse(0,0,18,9,0,0,Math.PI*2),O.fill(),O.restore()}return O.beginPath(),O.arc(64,64,5,0,Math.PI*2),O.fill(),J.needsUpdate=!0,J}function W(J){let ce=document.createElement("canvas");ce.width=ce.height=128;let O=ce.getContext("2d");O.fillStyle="#77421a",O.font="bold 82px Trebuchet MS",O.textAlign="center",O.textBaseline="middle",O.fillText(String(J),64,69);let N=new pn(ce);return N.colorSpace=xt,N}function $(J,ce){let O=0;for(let M=0;M<J.length;M++){let _=J[M],P=J[(M+1)%J.length];O+=_.x*P.y-P.x*_.y}let N=O>0?1:-1;return J.map((M,_)=>{let P=J[(_+J.length-1)%J.length],G=J[(_+1)%J.length],F=M.clone().sub(P).normalize(),K=G.clone().sub(M).normalize(),ne=new me(F.y,-F.x).multiplyScalar(N),R=new me(K.y,-K.x).multiplyScalar(N),z=ne.clone().add(R).normalize();return M.clone().add(z.multiplyScalar(ce/Math.max(.25,z.dot(ne))))})}function j(J){let ce=new _t;return J.forEach((O,N)=>N?ce.lineTo(O.x,-O.y):ce.moveTo(O.x,-O.y)),ce.closePath(),ce}function re(J,ce){let O=new Set(J),N=[];for(;O.size;){let M=O.values().next().value,_=[M];O.delete(M);for(let P=0;P<_.length;P++){let G=_[P];for(let F of[G-ce,G+ce,G%ce?G-1:-1,G%ce<ce-1?G+1:-1])O.has(F)&&(O.delete(F),_.push(F))}N.push(_)}return N}function te(J,ce,O){let N=new Set(J),M=[],_=(G,F)=>G>=0&&F>=0&&G<ce&&N.has(F*ce+G);for(let G of J){let F=G%ce,K=Math.floor(G/ce),ne=20+F*80,R=20+K*80;_(F,K-1)||M.push([[ne,R],[ne+80,R]]),_(F+1,K)||M.push([[ne+80,R],[ne+80,R+80]]),_(F,K+1)||M.push([[ne+80,R+80],[ne,R+80]]),_(F-1,K)||M.push([[ne,R+80],[ne,R]])}let P=[];for(;M.length;){let G=M.shift(),F=G[0],K=[F],ne=G[1];for(;ne.join()!=F.join();){K.push(ne);let R=M.findIndex(z=>z[0].join()==ne.join());if(R<0)break;ne=M.splice(R,1)[0][1]}K=K.filter((R,z)=>{let H=K[(z+K.length-1)%K.length],Y=K[(z+1)%K.length];return!(H[0]===R[0]&&Y[0]===R[0]||H[1]===R[1]&&Y[1]===R[1])}),P.push(K.map(R=>new me(...R)))}return P.sort((G,F)=>Math.abs(wt.area(F))-Math.abs(wt.area(G))),P.map((G,F)=>{let K=$(G,F?O:-O),ne=new _t;return K.forEach((R,z)=>{let H=K[(z+K.length-1)%K.length],Y=K[(z+1)%K.length],q=Math.min(10,R.distanceTo(H)/3,R.distanceTo(Y)/3),B=R.clone().add(H.clone().sub(R).normalize().multiplyScalar(q)),w=R.clone().add(Y.clone().sub(R).normalize().multiplyScalar(q));z?ne.lineTo(B.x,-B.y):ne.moveTo(B.x,-B.y),ne.quadraticCurveTo(R.x,-R.y,w.x,-w.y)}),ne.closePath(),ne})}function le(){a=document.createElement("canvas"),a.id="terrain3d",a.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(a),n=new Qo({canvas:a,alpha:!0,antialias:!0,powerPreference:"high-performance"}),n.setPixelRatio(Math.min(devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!0,n.shadowMap.type=no,n.outputColorSpace=xt,n.toneMapping=ho,n.toneMappingExposure=.88,s=new Ts,s.add(new Vs("#fff6dc","#a28d6c",1.65));let J=new $i("#fff4dc",3.3);J.position.set(-300,450,750),J.castShadow=!0,J.shadow.mapSize.set(2048,2048),Object.assign(J.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),J.shadow.bias=-3e-4,J.shadow.normalBias=.9,J.shadow.radius=4,s.add(J);let ce=new $i("#d4e8ff",.4);ce.position.set(500,-100,400),s.add(ce),o=new Ze,s.add(o),s.add(t.group),e=Yh(),e.setSize(90),s.add(e.group),r=new di,r.up.set(0,1,0),r.near=1,r.far=3e3,p=new ResizeObserver(()=>X()),p.observe(document.getElementById("board"));let O=(M,_)=>{let P=a.getBoundingClientRect();return c.setFromCamera(new me((M-P.left)/P.width*2-1,-(_-P.top)/P.height*2+1),r),c.intersectObjects(l,!1)[0]?.object.userData.cell??-1},N=M=>{if(!x)return;let _=m||M,P=M.clientX-_.clientX,G=M.clientY-_.clientY,F=Math.max(1,Math.ceil(Math.hypot(P,G)/3));for(let K=1;K<=F;K++){let ne=O(_.clientX+P*K/F,_.clientY+G*K/F);ne>=0&&d.onMove(ne)}m={clientX:M.clientX,clientY:M.clientY}};a.addEventListener("pointerdown",M=>{M.preventDefault(),a.setPointerCapture(M.pointerId),x=!0,m=null,N(M),document.getElementById("board").focus({preventScroll:!0})}),a.addEventListener("pointermove",N);for(let M of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(M,()=>{x=!1,m=null});a.addEventListener("webglcontextlost",M=>{M.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),a.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function X(){if(!d)return;let J=document.getElementById("board"),ce=J.clientWidth,O=J.clientHeight;if(!ce||!O)return;n.setSize(ce,O,!1);let N=new dn().setFromObject(o);N.max.z=Math.max(N.max.z,60);let M=N.getCenter(new k);r.position.set(M.x,M.y-430,M.z+1250),r.lookAt(M.x,M.y,0),r.updateMatrixWorld();let _=s.children.find(H=>H.isDirectionalLight&&H.castShadow);if(_){let H=Math.max(N.max.x-N.min.x,N.max.y-N.min.y)*.75+60;_.target.position.set(M.x,M.y,0),s.add(_.target),Object.assign(_.shadow.camera,{left:-H,right:H,top:H,bottom:-H}),_.shadow.camera.updateProjectionMatrix()}let P=r.matrixWorldInverse,G=new me(1/0,1/0),F=new me(-1/0,-1/0);for(let H of[N.min.x,N.max.x])for(let Y of[N.min.y,N.max.y])for(let q of[N.min.z,N.max.z]){let B=new k(H,Y,q).applyMatrix4(P);G.min(B),F.max(B)}let K=(G.x+F.x)/2,ne=(G.y+F.y)/2,R=Math.max((F.y-G.y)/2,(F.x-G.x)/2/(ce/O))+13,z=R*ce/O;Object.assign(r,{left:K-z,right:K+z,top:ne+R,bottom:ne-R}),r.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0,ae()}function ae(){n.render(s,r)}function ie(J){if(requestAnimationFrame(ie),!n||!d||document.hidden){v=J;return}if(J-v<33)return;y+=Math.min((J-v)/1e3,.1),v=J,t.update(d.l,window.SlinkStudyPath||[],window.SlinkRouteMode||"grass",x,y),a.dataset.routeVisible=String(t.group.visible),a.dataset.routeDots=t.group.children.length;let ce=i.sample(J/1e3);e.group.position.set(ce.x,ce.y,8.5+9.5*(u.find(O=>O.i===ce.cell)?.progress||0)),e.group.rotation.z=ce.heading,e.group.visible&&e.update(y,0,{active:ce.moving,travel:ce.travel,celebrationAge:ce.celebrationAge,celebrationTurn:ce.celebrationTurn,celebrationStyle:"gentle"}),a.dataset.creatureCell=ce.cell,a.dataset.creatureMoving=String(ce.moving),a.dataset.creatureX=ce.x,a.dataset.creatureY=ce.y,a.dataset.creatureHeading=ce.heading,a.dataset.creatureCelebration=ce.celebrationAge;for(let O of T)O.update(y);for(let O of u){O.meadow?.update(y);let N=Math.min((J-O.changedAt)/O.duration,1);O.progress=O.from+(O.target-O.from)*Math.max(0,N);let M=O.progress;O.grown.scale.z=(8.5+9.5*M)/18,O.grown.position.z=0,O.grown.visible=M>0,O.grown.traverse(_=>{_.isMesh&&(_.material.transparent=M<1,_.material.opacity=M,_.castShadow=M>.7)}),O.earth.visible=M<1}for(let O of f){let N=u.find(M=>M.i===O.i);O.goal.group.position.z=8.5+9.5*(N?.progress||0),O.goal.update(y,.033)}n.shadowMap.needsUpdate=!0,ae()}requestAnimationFrame(ie);function pe(J,ce,O){d={l:J,onMove:O};let N=new Set,M=new Set,_=new Set;o.traverse(w=>{w.geometry&&N.add(w.geometry);for(let Z of[].concat(w.material||[])){M.add(Z);for(let ge of Object.values(Z))ge?.isTexture&&_.add(ge)}}),o.clear(),N.forEach(w=>w.dispose()),M.forEach(w=>w.dispose()),_.forEach(w=>w.dispose()),l=[],h=[],f=[],u=[],T=[];let P=new nr,G=P.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+ce+'"/></svg>'),F=nr.createShapes(G.paths[0])[0].getPoints(24);F.pop();let K=j($(F,11)),ne=I("#f6dfb5",.62,{bumpMap:E(),bumpScale:.18,side:Ft}),R=[...J.water||[],...J.lava||[]],z=w=>({x:w%J.n*80+60,y:-(Math.floor(w/J.n)*80+60)}),H=[];for(let[w,Z]of[["water",J.water||[]],["lava",J.lava||[]]])for(let ge of re(Z,J.n)){let ve=te(ge,J.n,7);K.holes.push(ve[0]),H.push({type:w,group:ge,shapes:ve})}let Y=new Gt(K,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});C(Y,ne,0,0,-24);for(let w of re(J.solution,J.n)){let Z=te(w,J.n,0),ge=Z[0];ge.holes.push(...Z.slice(1)),C(new Bs(ge),I("#87623d",.8),0,0,3.2)}for(let w of J.solution){let Z=z(w);u.push({i:w,p:Z,id:null,group:null})}for(let{type:w,group:Z,shapes:ge}of H){let ve=z(Z[0]),U=window.SlinkCatalogueDesign,b=au(w,{style:w==="water"?U?.waterStyle||"sway":U?.lavaStyle||"bubbles",center:[ve.x,ve.y]});T.push(b);let ee=ge[0];ee.holes.push(...ge.slice(1)),C(new Gt(ee,{depth:3,bevelEnabled:!1,curveSegments:20}),b.material,0,0,-15)}let q=su(J),B=new Map;for(let w of J.stones||[]){let Z=q.stones[w];B.has(Z)||B.set(Z,tu(Z,{seed:q.seed}));let ge=B.get(Z).group.clone(!0),ve=z(w);ge.position.set(ve.x,ve.y,0),ge.userData.cell=w,o.add(ge),ge.traverse(U=>{U.isMesh&&(U.userData.cell=-1,l.push(U))})}if(J.fence){let w=Wh({n:J.n,walls:J.walls,origin:[60,-60],style:J.fence.style,design:J.fence.design});o.add(w.group)}else for(let[w,Z]of J.walls){let ge=z(w),ve=z(Z);D(ge.x===ve.x?53:9,ge.y===ve.y?53:9,18,3,I("#a49983",.85),(ge.x+ve.x)/2,(ge.y+ve.y)/2,17)}for(let[w,Z]of J.marks.entries()){let ge=z(Z),ve=jh({species:q.flowers[w],number:w+1,state:w===0?"next":"closed",layout:"compact"});ve.group.rotation.x=Math.PI/2,ve.group.position.set(ge.x,ge.y,8.5),o.add(ve.group),f.push({i:Z,goal:ve})}n.shadowMap.needsUpdate=!0,X()}return{diagnostics(){return n?{textures:n.info.memory.textures,geometries:n.info.memory.geometries,programs:n.info.programs.length,flowers:f.map(J=>J.goal.group.userData.species),bloomsReady:f.every(J=>J.goal.state==="bloom"&&J.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:o.children.filter(J=>J.userData.style&&J.userData.walkable===!1).map(J=>J.userData.style),fence:d?.l.fence?{...d.l.fence,spans:o.getObjectByName("wood-fence")?.children.filter(J=>J.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:a.dataset.creatureCell,moving:a.dataset.creatureMoving,heading:a.dataset.creatureHeading,celebrationAge:a.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(J,ce,O,N){try{n||le(),d?.l!==J&&pe(J,O,N),window.SlinkStudyPath=[...ce],i.sync(J,ce,performance.now()/1e3);let M=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==M.palette&&e.setPalette(M.palette),e.setSize(M.size),e.group.visible=M.enabled!==!1,a.dataset.creatureVisible=String(e.group.visible);let _=J.marks.find(P=>!ce.includes(P));for(let P of u){if(!P.group){if(P.earth=er("earth-loam",{seed:73+P.i*19}),P.meadow=ru(J.meadowVariants?.[P.i]||"classic",{seed:(J.meadowSeed||73)+P.i*19}),P.grown=P.meadow.group,J.marks.includes(P.i))for(let F of[...P.grown.children])!F.userData.surface&&F.position.x>0&&F.position.y<-3&&P.grown.remove(F);P.group=P.earth;for(let F of[P.earth,P.grown])F.position.set(P.p.x,P.p.y,0),o.add(F),F.traverse(K=>{K.isMesh&&K.userData.surface&&(K.userData.cell=P.i,l.push(K))});P.progress=0,P.target=0,P.from=0,P.changedAt=performance.now(),P.duration=300,P.grown.visible=!1}let G=ce.includes(P.i)?1:0;G!==P.target&&(P.from=P.progress,P.target=G,P.changedAt=performance.now(),P.duration=G?300:180)}for(let P of f){P.goal.setState(ce.includes(P.i)?"bloom":P.i===_?"next":"closed"),P.goal.setSize(window.SlinkMarkerSize||27);let G=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};P.goal.setInsects(G.enabled),P.goal.setVisitorSize("bee",G.bee),P.goal.setVisitorSize("bumblebee",G.bumblebee)}n.shadowMap.needsUpdate=!0,ae()}catch(M){console.error("3D renderer:",M),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
