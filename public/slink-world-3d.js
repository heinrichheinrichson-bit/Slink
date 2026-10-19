(()=>{var Pc=0,Ka=1,Lc=2;var ja=1,io=2,gn=3,Rn=0,Ft=1,kt=2,Dn=0,ri=1,Qa=2,el=3,tl=4,Dc=5,Xn=100,Uc=101,Nc=102,Fc=103,Oc=104,Bc=200,zc=201,kc=202,Hc=203,Ir=204,Pr=205,Vc=206,Gc=207,Wc=208,Xc=209,qc=210,Yc=211,Zc=212,Jc=213,$c=214,so=0,ro=1,oo=2,oi=3,ao=4,lo=5,co=6,ho=7,nl=0,Kc=1,jc=2,Un=0,Qc=1,eh=2,th=3,uo=4,nh=5,ih=6,sh=7;var il=300,mi=301,gi=302,fo=303,po=304,Xs=306,Bi=1e3,Wn=1001,Lr=1002,zt=1003,rh=1004;var qs=1005;var Lt=1006,mo=1007;var $n=1008;var un=1009,sl=1010,rl=1011,Ki=1012,go=1013,Kn=1014,xn=1015,ji=1016,xo=1017,_o=1018,Qi=1020,ol=35902,al=35899,ll=1021,cl=1022,tn=1023,zi=1026,es=1027,hl=1028,yo=1029,ul=1030,vo=1031;var Mo=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,bo=35840,So=35841,Eo=35842,wo=35843,To=36196,Ao=37492,Ro=37496,Co=37808,Io=37809,Po=37810,Lo=37811,Do=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Ho=37820,Vo=37821,Go=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,Zo=36285,Jo=36286;var gs=2300,Dr=2301,Cr=2302,Oa=2400,Ba=2401,za=2402;var oh=3200,ah=3201;var dl=0,lh=1,Nn="",_t="srgb",ai="srgb-linear",xs="linear",st="srgb";var si=7680;var ka=519,ch=512,hh=513,uh=514,fl=515,dh=516,fh=517,ph=518,mh=519,Ha=35044;var pl="300 es",an=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=1234567,ds=Math.PI/180,ki=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function Pu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lu(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function Du(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function Uu(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ou(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bu(i,e){return i+Math.random()*(e-i)}function zu(i){return i*(.5-Math.random())}function ku(i){i!==void 0&&(ec=i);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hu(i){return i*ds}function Vu(i){return i*ki}function Gu(i){return(i&i-1)===0&&i!==0}function Wu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct={DEG2RAD:ds,RAD2DEG:ki,generateUUID:xi,clamp:Ke,euclideanModulo:ml,mapLinear:Pu,inverseLerp:Lu,lerp:fs,damp:Du,pingpong:Uu,smoothstep:Nu,smootherstep:Fu,randInt:Ou,randFloat:Bu,randFloatSpread:zu,seededRandom:ku,degToRad:Hu,radToDeg:Vu,isPowerOfTwo:Gu,ceilPowerOfTwo:Wu,floorPowerOfTwo:Xu,setQuaternionFromProperEuler:qu,normalize:Pt,denormalize:Fi},Me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*x,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let I=Math.sqrt(y),T=Math.atan2(I,d*S);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let _=a*S;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new O,tc=new In,Ye=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],S=s[1],y=s[4],_=s[7],I=s[2],T=s[5],P=s[8];return r[0]=o*x+a*S+c*I,r[3]=o*m+a*y+c*T,r[6]=o*d+a*_+c*P,r[1]=l*x+h*S+u*I,r[4]=l*m+h*y+u*T,r[7]=l*d+h*_+u*P,r[2]=f*x+p*S+g*I,r[5]=f*m+p*y+g*T,r[8]=f*d+p*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},da=new Ye;function gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){let i=ys("canvas");return i.style.display="block",i}var nc={};function Hi(i){i in nc||(nc[i]=!0,console.warn(i))}function xh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ic=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yu(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:st,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var tt=Yu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Ur=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=ys("canvas")),Ei.width=e.width,Ei.height=e.height;let s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zu=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,pa=new O,Dt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Lt,o=$n,a=tn,c=un,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=xi(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=il;Dt.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(p+1)/2,I=(d+1)/2,T=(h+f)/4,P=(u+x)/4,D=(g+m)/4;return y>_&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=P/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=D/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Nr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ar.subVectors(this.max,os),wi.subVectors(e.a,os),Ti.subVectors(e.b,os),Ai.subVectors(e.c,os),On.subVectors(Ti,wi),Bn.subVectors(Ai,Ti),ei.subVectors(wi,Ai);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!ma(t,wi,Ti,Ai,ar)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,wi,Ti,Ai,ar))?!1:(lr.crossVectors(On,Bn),t=[lr.x,lr.y,lr.z],ma(t,wi,Ti,Ai,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new O,new O,new O,new O,new O,new O,new O,new O],sn=new O,or=new fn,wi=new O,Ti=new O,Ai=new O,On=new O,Bn=new O,ei=new O,os=new O,ar=new O,lr=new O,ti=new O;function ma(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $u=new fn,as=new O,ga=new O,li=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(ga)),this.expandByPoint(as.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new O,xa=new O,cr=new O,zn=new O,_a=new O,hr=new O,ya=new O,Gi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xa.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=zn.dot(this.direction),c=-zn.dot(cr),l=zn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xa).addScaledVector(cr,f),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),hr.subVectors(n,e),ya.crossVectors(_a,hr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);let c=a*this.direction.dot(hr.crossVectors(zn,hr));if(c<0)return null;let l=a*this.direction.dot(_a.cross(zn));if(l<0||c+l>o)return null;let h=-a*zn.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,ju)}lookAt(e,t,n){let s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),kn.crossVectors(n,Wt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),kn.crossVectors(n,Wt)),kn.normalize(),ur.crossVectors(Wt,kn),s[0]=kn.x,s[4]=ur.x,s[8]=Wt.x,s[1]=kn.y,s[5]=ur.y,s[9]=Wt.y,s[2]=kn.z,s[6]=ur.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],S=n[3],y=n[7],_=n[11],I=n[15],T=s[0],P=s[4],D=s[8],E=s[12],w=s[1],F=s[5],H=s[9],Y=s[13],ne=s[2],ae=s[6],se=s[10],he=s[14],X=s[3],ue=s[7],ie=s[11],ye=s[15];return r[0]=o*T+a*w+c*ne+l*X,r[4]=o*P+a*F+c*ae+l*ue,r[8]=o*D+a*H+c*se+l*ie,r[12]=o*E+a*Y+c*he+l*ye,r[1]=h*T+u*w+f*ne+p*X,r[5]=h*P+u*F+f*ae+p*ue,r[9]=h*D+u*H+f*se+p*ie,r[13]=h*E+u*Y+f*he+p*ye,r[2]=g*T+x*w+m*ne+d*X,r[6]=g*P+x*F+m*ae+d*ue,r[10]=g*D+x*H+m*se+d*ie,r[14]=g*E+x*Y+m*he+d*ye,r[3]=S*T+y*w+_*ne+I*X,r[7]=S*P+y*F+_*ae+I*ue,r[11]=S*D+y*H+_*se+I*ie,r[15]=S*E+y*Y+_*he+I*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,I=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,T=t*S+n*y+s*_+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=S*P,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*P,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*P,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*P,e[4]=y*P,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*P,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*P,e[8]=_*P,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*P,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*P,e[12]=I*P,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,S=c*l,y=c*h,_=c*u,I=n.x,T=n.y,P=n.z;return s[0]=(1-(x+d))*I,s[1]=(p+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+y)*P,s[9]=(m-S)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);let l=1/r,h=1/o,u=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===an)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===an)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new O,rn=new dt,Ku=new O(0,0,0),ju=new O(1,1,1),kn=new O,ur=new O,Wt=new O,rc=new dt,oc=new In,ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qu=0,ac=new O,Ci=new In,Sn=new dt,dr=new O,ls=new O,ed=new O,td=new In,lc=new O(1,0,0),cc=new O(0,1,0),hc=new O(0,0,1),uc={type:"added"},nd={type:"removed"},Ii={type:"childadded",child:null},va={type:"childremoved",child:null},wt=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ln,n=new In,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ye}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ls,dr,this.up):Sn.lookAt(dr,ls,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new O(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new O,En=new O,Ma=new O,wn=new O,Pi=new O,Li=new O,dc=new O,ba=new O,Sa=new O,Ea=new O,wa=new gt,Ta=new gt,Aa=new gt,Gn=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),En.subVectors(n,t),Ma.subVectors(e,t);let o=on.dot(on),a=on.dot(En),c=on.dot(Ma),l=En.dot(En),h=En.dot(Ma),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wa.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),wa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Aa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),En.subVectors(e,t),on.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Li.subVectors(r,n),ba.subVectors(e,n);let c=Pi.dot(ba),l=Li.dot(ba);if(c<=0&&l<=0)return t.copy(n);Sa.subVectors(e,s);let h=Pi.dot(Sa),u=Li.dot(Sa);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Pi,o);Ea.subVectors(e,r);let p=Pi.dot(Ea),g=Li.dot(Ea);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Li,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return dc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(dc,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ml(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=_h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return tt.workingToColorSpace(At.copy(this),e),Math.round(Ke(At.r*255,0,255))*65536+Math.round(Ke(At.g*255,0,255))*256+Math.round(Ke(At.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(At.copy(this),t);let n=At.r,s=At.g,r=At.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=_t){tt.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,s=At.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(fr);let n=fs(Hn.h,fr.h,t),s=fs(Hn.s,fr.s,t),r=fs(Hn.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Ge;Ge.NAMES=_h;var id=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ri,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Pr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ci=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new O,pr=new Me,sd=0,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var Ms=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bs=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},rd=0,Kt=new dt,Ca=new wt,Di=new O,Xt=new fn,cs=new fn,Et=new O,lt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?bs:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Xt.min,cs.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,cs.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(cs.min),Xt.expandByPoint(cs.max))}Xt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(e,l),Et.add(Di)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new O,c[D]=new O;let l=new O,h=new O,u=new O,f=new Me,p=new Me,g=new Me,x=new O,m=new O;function d(D,E,w){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(F),a[D].add(x),a[E].add(x),a[w].add(x),c[D].add(m),c[E].add(m),c[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,E=S.length;D<E;++D){let w=S[D],F=w.start,H=w.count;for(let Y=F,ne=F+H;Y<ne;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let y=new O,_=new O,I=new O,T=new O;function P(D){I.fromBufferAttribute(s,D),T.copy(I);let E=a[D];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),_.crossVectors(T,E);let F=_.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,E=S.length;D<E;++D){let w=S[D],F=w.start,H=w.count;for(let Y=F,ne=F+H;Y<ne;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new yt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fc=new dt,ni=new Gi,mr=new li,pc=new O,gr=new O,xr=new O,_r=new O,Ia=new O,yr=new O,mc=new O,vr=new O,ze=class extends wt{constructor(e=new lt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ia.fromBufferAttribute(u,e),o?yr.addScaledVector(Ia,h):yr.addScaledVector(Ia.sub(t),h))}t.add(yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(mr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(mr,pc)===null||ni.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(r).invert(),ni.copy(e.ray).applyMatrix4(fc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,I=y;_<I;_+=3){let T=a.getX(_),P=a.getX(_+1),D=a.getX(_+2);s=Mr(this,d,e,n,l,h,u,T,P,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Mr(this,o,e,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,I=y;_<I;_+=3){let T=_,P=_+1,D=_+2;s=Mr(this,d,e,n,l,h,u,T,P,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=m,y=m+1,_=m+2;s=Mr(this,o,e,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function od(i,e,t,n,s,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Rn,a),c===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:i}}function Mr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,gr),i.getVertexPosition(c,xr),i.getVertexPosition(l,_r);let h=od(i,e,t,n,gr,xr,_r,mc);if(h){let u=new O;Gn.getBarycoord(mc,gr,xr,_r,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,c,l,u,new Me)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,c,l,u,new Me)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Gn.getNormal(gr,xr,_r,f.normal),h.face=f,h.barycoord=u}return h}var qn=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(x,m,d,S,y,_,I,T,P,D,E){let w=_/P,F=I/D,H=_/2,Y=I/2,ne=T/2,ae=P+1,se=D+1,he=0,X=0,ue=new O;for(let ie=0;ie<se;ie++){let ye=ie*F-Y;for(let Ae=0;Ae<ae;Ae++){let Le=Ae*w-H;ue[x]=Le*S,ue[m]=ye*y,ue[d]=ne,l.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[d]=T>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Ae/P),u.push(1-ie/D),he+=1}}for(let ie=0;ie<D;ie++)for(let ye=0;ye<P;ye++){let Ae=f+ye+ae*ie,Le=f+ye+ae*(ie+1),Z=f+(ye+1)+ae*(ie+1),G=f+(ye+1)+ae*ie;c.push(Ae,Le,G),c.push(Le,Z,G),X+=6}a.addGroup(p,X,E),p+=X,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=_i(i[t]);for(let s in n)e[s]=n[s]}return e}function ad(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var yh={clone:_i,merge:Ct},ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ss=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new O,gc=new Me,xc=new Me,Bt=class extends Ss{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,xc),t.subVectors(xc,gc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Ni=1,Or=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Ui,Ni,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Ui,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Dt{constructor(e=[],t=mi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Br=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Dn});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Lt),new Or(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},He=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hd={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yn=class extends Dt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=new O,ud=new O,dd=new Ye,jt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pa.subVectors(n,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dd.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new li,fd=new Me(.5,.5),br=new O,qi=class{constructor(e=new jt,t=new jt,n=new jt,s=new jt,r=new jt,o=new jt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],S=r[12],y=r[13],_=r[14],I=r[15];if(s[0].setComponents(l-o,p-h,d-g,I-S).normalize(),s[1].setComponents(l+o,p+h,d+g,I+S).normalize(),s[2].setComponents(l+a,p+u,d+x,I+y).normalize(),s[3].setComponents(l-a,p-u,d-x,I-y).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,p-f,d-m,I-_).normalize();else if(s[4].setComponents(l-c,p-f,d-m,I-_).normalize(),t===an)s[5].setComponents(l+c,p+f,d+m,I+_).normalize();else if(t===_s)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=fd.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zr=new O,kr=new O,_c=new dt,hs=new Gi,Sr=new li,La=new O,yc=new O,Hr=class extends wt{constructor(e=new lt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zr.fromBufferAttribute(t,s-1),kr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zr.distanceTo(kr);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;_c.copy(s).invert(),hs.copy(e.ray).applyMatrix4(_c);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=h.getX(x),S=h.getX(x+1),y=Er(this,e,hs,c,d,S,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=Er(this,e,hs,c,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=Er(this,e,hs,c,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Er(this,e,hs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Er(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(zr.fromBufferAttribute(a,s),kr.fromBufferAttribute(a,r),t.distanceSqToSegment(zr,kr,La,yc)>n)return;La.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(La);if(!(l<e.near||l>e.far))return{distance:l,point:yc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var vc=new O,Mc=new O,Ts=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vc.fromBufferAttribute(t,s),Mc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vc.distanceTo(Mc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pn=class extends Dt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Dt{constructor(e,t,n=Kn,s,r,o,a=zt,c=zt,l,h=zi,u=1){if(h!==zi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var en=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function S(){let _=new O,I=new O,T=0,P=(t-e)/n;for(let D=0;D<=r;D++){let E=[],w=D/r,F=w*(t-e)+e;for(let H=0;H<=s;H++){let Y=H/s,ne=Y*c+a,ae=Math.sin(ne),se=Math.cos(ne);I.x=F*ae,I.y=-w*n+m,I.z=F*se,u.push(I.x,I.y,I.z),_.set(ae,P,se).normalize(),f.push(_.x,_.y,_.z),p.push(Y,1-w),E.push(g++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){let w=x[E][D],F=x[E+1][D],H=x[E+1][D+1],Y=x[E][D+1];(e>0||E!==0)&&(h.push(w,F,Y),T+=3),(t>0||E!==r-1)&&(h.push(F,H,Y),T+=3)}l.addGroup(d,T,0),d+=T}function y(_){let I=g,T=new Me,P=new O,D=0,E=_===!0?e:t,w=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;let F=g;for(let H=0;H<=s;H++){let ne=H/s*c+a,ae=Math.cos(ne),se=Math.sin(ne);P.x=E*se,P.y=m*w,P.z=E*ae,u.push(P.x,P.y,P.z),f.push(0,w,0),T.x=ae*.5+.5,T.y=se*.5*w+.5,p.push(T.x,T.y),g++}for(let H=0;H<s;H++){let Y=I+H,ne=F+H;_===!0?h.push(ne,ne+1,Y):h.push(ne+1,ne,Y),D+=3}l.addGroup(d,D,_===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class i extends en{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Me:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],a=new O,c=new dt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends qt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vr=class extends Zi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _l(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wr=new O,Da=new _l,Ua=new _l,Na=new _l,Ut=class extends qt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),l=wr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Da.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Ua.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Na.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ua.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Da.calc(c),Ua.calc(c),Na.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function pd(i,e){let t=1-i;return t*t*e}function md(i,e){return 2*(1-i)*i*e}function gd(i,e){return i*i*e}function ps(i,e,t,n){return pd(i,e)+md(i,t)+gd(i,n)}function xd(i,e){let t=1-i;return t*t*t*e}function _d(i,e){let t=1-i;return 3*t*t*i*e}function yd(i,e){return 3*(1-i)*i*i*e}function vd(i,e){return i*i*i*e}function ms(i,e,t,n,s){return xd(i,e)+_d(i,t)+yd(i,n)+vd(i,s)}var Is=class extends qt{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ln=class extends qt{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends qt{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends qt{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends qt{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends qt{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bc(a,c.x,l.x,h.x,u.x),bc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Wr=Object.freeze({__proto__:null,ArcCurve:Vr,CatmullRomCurve3:Ut,CubicBezierCurve:Is,CubicBezierCurve3:Ln,EllipseCurve:Zi,LineCurve:Ps,LineCurve3:Gr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Ds,SplineCurve:Us}),Xr=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wr[s.type]().fromJSON(s))}return this}},mn=class extends Xr{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ps(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ls(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Is(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Zi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vt=class extends mn{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mn().fromJSON(s))}return this}};function Md(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Td(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ns(r,o,t,a,c,l,0),o}function vh(i,e,t,n,s){let r;if(s===Od(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Sc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Sc(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Os(r),r=r.next),r}function hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||mt(t.prev,t,t.next)===0)){if(Os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Pd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sd(i,n,s,r):bd(i)){e.push(c.i,i.i,l.i),Os(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ed(hi(i),e),Ns(i,e,t,n,s,r,2)):o===2&&wd(i,e,t,n,s,r):Ns(hi(i),e,t,n,s,r,1);break}}}function bd(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&us(s,a,r,c,o,l,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,c,l),g=Math.min(h,u,f),x=Math.max(a,c,l),m=Math.max(h,u,f),d=Va(p,g,e,t,n),S=Va(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=d&&_&&_.z<=S;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,u,l,f,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,u,l,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,u,l,f,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,u,l,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ed(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&bh(n,t,t.next,s)&&Fs(n,s)&&Fs(s,n)&&(e.push(n.i,t.i,s.i),Os(t),Os(t.next),t=i=s),t=t.next}while(t!==i);return hi(t)}function wd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ud(o,a)){let c=Sh(o,a);o=hi(o,o.next),c=hi(c,c.next),Ns(o,e,t,n,s,r,0),Ns(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Td(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=vh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Dd(l))}s.sort(Ad);for(let r=0;r<s.length;r++)t=Rd(s[r],t);return t}function Ad(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Rd(i,e){let t=Cd(i,e);if(!t)return e;let n=Sh(t,i);return hi(n,n.next),hi(t,t.next)}function Cd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Fs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Id(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Id(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function Pd(i,e,t,n){let s=i;do s.z===0&&(s.z=Va(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ld(s)}function Ld(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Va(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Mh(i,e,t,n,s,r,o,a)}function Ud(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nd(i,e)&&(Fs(i,e)&&Fs(e,i)&&Fd(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Ji(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function bh(i,e,t,n){let s=Ar(mt(i,e,t)),r=Ar(mt(i,e,n)),o=Ar(mt(t,n,i)),a=Ar(mt(t,n,e));return!!(s!==r&&o!==a||s===0&&Tr(i,t,e)||r===0&&Tr(i,n,e)||o===0&&Tr(t,i,n)||a===0&&Tr(t,e,n))}function Tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ar(i){return i>0?1:i<0?-1:0}function Nd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fs(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Fd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sh(i,e){let t=Ga(i.i,i.x,i.y),n=Ga(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sc(i,e,t,n){let s=Ga(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Od(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wa=class{static triangulate(e,t,n=2){return Md(e,t,n)}},Rt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ec(e),wc(n,e);let o=e.length;t.forEach(Ec);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,wc(n,t[c]);let a=Wa.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ec(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yt=class i extends lt{constructor(e=new vt([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Bd,y,_=!1,I,T,P,D;d&&(y=d.getSpacedPoints(h),_=!0,f=!1,I=d.computeFrenetFrames(h,!1),T=new O,P=new O,D=new O),f||(m=0,p=0,g=0,x=0);let E=a.extractPoints(l),w=E.shape,F=E.holes;if(!Rt.isClockWise(w)){w=w.reverse();for(let q=0,N=F.length;q<N;q++){let V=F[q];Rt.isClockWise(V)&&(F[q]=V.reverse())}}function Y(q){let V=10000000000000001e-36,z=q[0];for(let v=1;v<=q.length;v++){let M=v%q.length,B=q[M],ce=B.x-z.x,ee=B.y-z.y,A=ce*ce+ee*ee,b=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(z.x),Math.abs(z.y)),k=V*b*b;if(A<=k){q.splice(M,1),v--;continue}z=B}}Y(w),F.forEach(Y);let ne=F.length,ae=w;for(let q=0;q<ne;q++){let N=F[q];w=w.concat(N)}function se(q,N,V){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(N,V)}let he=w.length;function X(q,N,V){let z,v,M,B=q.x-N.x,ce=q.y-N.y,ee=V.x-q.x,A=V.y-q.y,b=B*B+ce*ce,k=B*A-ce*ee;if(Math.abs(k)>Number.EPSILON){let J=Math.sqrt(b),K=Math.sqrt(ee*ee+A*A),$=N.x-ce/J,re=N.y+B/J,de=V.x-A/K,Se=V.y+ee/K,ve=((de-$)*A-(Se-re)*ee)/(B*A-ce*ee);z=$+B*ve-q.x,v=re+ce*ve-q.y;let me=z*z+v*v;if(me<=2)return new Me(z,v);M=Math.sqrt(me/2)}else{let J=!1;B>Number.EPSILON?ee>Number.EPSILON&&(J=!0):B<-Number.EPSILON?ee<-Number.EPSILON&&(J=!0):Math.sign(ce)===Math.sign(A)&&(J=!0),J?(z=-ce,v=B,M=Math.sqrt(b)):(z=B,v=ce,M=Math.sqrt(b/2))}return new Me(z/M,v/M)}let ue=[];for(let q=0,N=ae.length,V=N-1,z=q+1;q<N;q++,V++,z++)V===N&&(V=0),z===N&&(z=0),ue[q]=X(ae[q],ae[V],ae[z]);let ie=[],ye,Ae=ue.concat();for(let q=0,N=ne;q<N;q++){let V=F[q];ye=[];for(let z=0,v=V.length,M=v-1,B=z+1;z<v;z++,M++,B++)M===v&&(M=0),B===v&&(B=0),ye[z]=X(V[z],V[M],V[B]);ie.push(ye),Ae=Ae.concat(ye)}let Le;if(m===0)Le=Rt.triangulateShape(ae,F);else{let q=[],N=[];for(let V=0;V<m;V++){let z=V/m,v=p*Math.cos(z*Math.PI/2),M=g*Math.sin(z*Math.PI/2)+x;for(let B=0,ce=ae.length;B<ce;B++){let ee=se(ae[B],ue[B],M);Q(ee.x,ee.y,-v),z===0&&q.push(ee)}for(let B=0,ce=ne;B<ce;B++){let ee=F[B];ye=ie[B];let A=[];for(let b=0,k=ee.length;b<k;b++){let J=se(ee[b],ye[b],M);Q(J.x,J.y,-v),z===0&&A.push(J)}z===0&&N.push(A)}}Le=Rt.triangulateShape(q,N)}let Z=Le.length,G=g+x;for(let q=0;q<he;q++){let N=f?se(w[q],Ae[q],G):w[q];_?(P.copy(I.normals[0]).multiplyScalar(N.x),T.copy(I.binormals[0]).multiplyScalar(N.y),D.copy(y[0]).add(P).add(T),Q(D.x,D.y,D.z)):Q(N.x,N.y,0)}for(let q=1;q<=h;q++)for(let N=0;N<he;N++){let V=f?se(w[N],Ae[N],G):w[N];_?(P.copy(I.normals[q]).multiplyScalar(V.x),T.copy(I.binormals[q]).multiplyScalar(V.y),D.copy(y[q]).add(P).add(T),Q(D.x,D.y,D.z)):Q(V.x,V.y,u/h*q)}for(let q=m-1;q>=0;q--){let N=q/m,V=p*Math.cos(N*Math.PI/2),z=g*Math.sin(N*Math.PI/2)+x;for(let v=0,M=ae.length;v<M;v++){let B=se(ae[v],ue[v],z);Q(B.x,B.y,u+V)}for(let v=0,M=F.length;v<M;v++){let B=F[v];ye=ie[v];for(let ce=0,ee=B.length;ce<ee;ce++){let A=se(B[ce],ye[ce],z);_?Q(A.x,A.y+y[h-1].y,y[h-1].x+V):Q(A.x,A.y,u+V)}}}C(),R();function C(){let q=s.length/3;if(f){let N=0,V=he*N;for(let z=0;z<Z;z++){let v=Le[z];W(v[2]+V,v[1]+V,v[0]+V)}N=h+m*2,V=he*N;for(let z=0;z<Z;z++){let v=Le[z];W(v[0]+V,v[1]+V,v[2]+V)}}else{for(let N=0;N<Z;N++){let V=Le[N];W(V[2],V[1],V[0])}for(let N=0;N<Z;N++){let V=Le[N];W(V[0]+he*h,V[1]+he*h,V[2]+he*h)}}n.addGroup(q,s.length/3-q,0)}function R(){let q=s.length/3,N=0;te(ae,N),N+=ae.length;for(let V=0,z=F.length;V<z;V++){let v=F[V];te(v,N),N+=v.length}n.addGroup(q,s.length/3-q,1)}function te(q,N){let V=q.length;for(;--V>=0;){let z=V,v=V-1;v<0&&(v=q.length-1);for(let M=0,B=h+m*2;M<B;M++){let ce=he*M,ee=he*(M+1),A=N+z+ce,b=N+v+ce,k=N+v+ee,J=N+z+ee;fe(A,b,k,J)}}}function Q(q,N,V){c.push(q),c.push(N),c.push(V)}function W(q,N,V){_e(q),_e(N),_e(V);let z=s.length/3,v=S.generateTopUV(n,s,z-3,z-2,z-1);L(v[0]),L(v[1]),L(v[2])}function fe(q,N,V,z){_e(q),_e(N),_e(z),_e(N),_e(V),_e(z);let v=s.length/3,M=S.generateSideWallUV(n,s,v-6,v-3,v-2,v-1);L(M[0]),L(M[1]),L(M[3]),L(M[1]),L(M[2]),L(M[3])}function _e(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function L(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wr[s.type]().fromJSON(s)),new i(n,e.options)}},Bd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Me(r,o),new Me(a,c),new Me(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Me(o,1-c),new Me(l,1-u),new Me(f,1-g),new Me(x,1-d)]:[new Me(a,1-c),new Me(h,1-u),new Me(p,1-g),new Me(m,1-d)]}};function zd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let S=d*f-o;for(let y=0;y<l;y++){let _=y*u-r;g.push(_,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){let y=S+l*d,_=S+l*(d+1),I=S+1+l*(d+1),T=S+1+l*d;p.push(y,_,T),p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bs=class i extends lt{constructor(e=new vt([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function l(h){let u=s.length/3,f=h.extractPoints(t),p=f.shape,g=f.holes;Rt.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let S=g[m];Rt.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Rt.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let S=g[m];p=p.concat(S)}for(let m=0,d=p.length;m<d;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,d=x.length;m<d;m++){let S=x[m],y=S[0]+u,_=S[1]+u,I=S[2]+u;n.push(y,_,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return kd(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function kd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var at=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let S=[],y=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-y),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let y=h[d][S+1],_=h[d][S],I=h[d+1][S],T=h[d+1][S+1];(d!==0||o>0)&&p.push(y,_,T),(d!==n-1||c<Math.PI)&&p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nt=class i extends lt{constructor(e=new Ds(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new Me,h=new O,u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),S(),d()}function m(y){h=e.getPointAt(y/t,h);let _=o.normals[y],I=o.binormals[y];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,D=Math.sin(P),E=-Math.cos(P);c.x=E*_.x+D*I.x,c.y=E*_.y+D*I.y,c.z=E*_.z+D*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let I=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),P=(s+1)*y+_,D=(s+1)*(y-1)+_;g.push(I,T,D),g.push(T,P,D)}}function S(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var je=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zr=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oa,endingEnd:Oa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ba:r=e,a=2*t-n;break;case za:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ba:o=e,c=2*n-t;break;case za:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let I=0;I!==a;++I)r[I]=d*o[h+I]+S*o[l+I]+y*o[c+I]+_*o[u+I];return r}},Jr=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},$r=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Hd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Dr;var Zn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var jr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},zs=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=gs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="vector";var Xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},to=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Eh=new to,fi=class{constructor(e){this.manager=e!==void 0?e:Eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},qa=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xa.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Tn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){S();function S(){u.read().then(({done:y,value:_})=>{if(y)d.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,P=h.length;T<P;T++){let D=h[T];D.onProgress&&D.onProgress(I)}d.enqueue(_),S()}},y=>{d.error(y)})}}});return new Response(m)}else throw new qa(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Xa.add(`file:${e}`,l);let h=Tn[e];delete Tn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Tn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fa=new dt,Tc=new O,Ac=new O,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pi=class extends Ss{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=class extends Ya{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Za}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var no=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yl="\\[\\]\\.:\\/",Vd=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",Gd="[^"+yl.replace("\\.","")+"]",Wd=/((?:WC+[\/:])*)/.source.replace("WC",vl),Xd=/(WCOD+)?/.source.replace("WCOD",Gd),qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),Yd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Zd=new RegExp("^"+Wd+Xd+qd+Yd+"$"),Jd=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vd,"")}static parseTrackName(e){let t=Zd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ja;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y0=new Float32Array(1);var Rc=new dt,Gs=class{constructor(e,t,n=0,s=1/0){this.ray=new Gi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(e,t=!0,n=[]){return $a(e,this,n,t),n.sort(Cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$a(e[s],this,n,t);return n.sort(Cc),n}};function Cc(i,e){return i.distance-e.distance}function $a(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$a(r[o],e,t,!0)}}var Ic=new Me,Ws=class{constructor(e=new Me(1/0,1/0),t=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ic.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ic).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var hn=class{constructor(){this.type="ShapePath",this.color=new Ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){let S=[];for(let y=0,_=d.length;y<_;y++){let I=d[y],T=new vt;T.curves=I.curves,S.push(T)}return S}function n(d,S){let y=S.length,_=!1;for(let I=y-1,T=0;T<y;I=T++){let P=S[I],D=S[T],E=D.x-P.x,w=D.y-P.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(P=S[T],E=-E,D=S[I],w=-w),d.y<P.y||d.y>D.y)continue;if(d.y===P.y){if(d.x===P.x)return!0}else{let F=w*(d.x-P.x)-E*(d.y-P.y);if(F===0)return!0;if(F<0)continue;_=!_}}else{if(d.y!==P.y)continue;if(D.x<=d.x&&d.x<=P.x||P.x<=d.x&&d.x<=D.x)return!0}}return _}let s=Rt.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new vt,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;let u=[],f=[],p=[],g=0,x;f[g]=void 0,p[g]=[];for(let d=0,S=r.length;d<S;d++)a=r[d],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new vt,p:x},f[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let d=!1,S=0;for(let y=0,_=f.length;y<_;y++)u[y]=[];for(let y=0,_=f.length;y<_;y++){let I=p[y];for(let T=0;T<I.length;T++){let P=I[T],D=!0;for(let E=0;E<f.length;E++)n(P.p,f[E].p)&&(y!==E&&S++,D?(D=!1,u[E].push(P)):d=!0);D&&u[y].push(P)}}S>0&&d===!1&&(p=u)}let m;for(let d=0,S=f.length;d<S;d++){c=f[d].s,l.push(c),m=p[d];for(let y=0,_=m.length;y<_;y++)c.holes.push(m[y].h)}return l}};function Ml(i,e,t,n){let s=$d(n);switch(t){case ll:return i*e;case hl:return i*e/s.components*s.byteLength;case yo:return i*e/s.components*s.byteLength;case ul:return i*e*2/s.components*s.byteLength;case vo:return i*e*2/s.components*s.byteLength;case cl:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case Mo:return i*e*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case wo:return Math.max(i,16)*Math.max(e,8)/4;case bo:case Eo:return Math.max(i,8)*Math.max(e,8)/2;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(i){switch(i){case un:case sl:return{byteLength:1,components:1};case Ki:case rl:case ji:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case Kn:case go:case xn:return{byteLength:4,components:1};case ol:case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Zh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:of,alphahash_pars_fragment:af,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:xf,bsdfs:_f,iridescence_fragment:yf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:Bf,envmap_common_pars_fragment:zf,envmap_pars_fragment:kf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:jf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:$f,lights_pars_begin:Kf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphinstance_vertex:_p,morphcolor_vertex:yp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:bp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:wp,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Fp,dithering_fragment:Op,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:$p,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distanceRGBA_vert:fm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Im,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Um,shadow_vert:Nm,shadow_frag:Fm,sprite_vert:Om,sprite_frag:Bm},De={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},_n={basic:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ct([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ct([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ct([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ct([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ct([De.points,De.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ct([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ct([De.common,De.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ct([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ct([De.sprite,De.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ct([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ct([De.lights,De.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:Ct([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var $o={r:0,b:0,g:0},yi=new ln,zm=new dt;function km(i,e,t,n,s,r,o){let a=new Ge(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,I=g(y);I===null?d(a,c):I&&I.isColor&&(d(I,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let I=g(_);I&&(I.isCubeTexture||I.mapping===Xs)?(h===void 0&&(h=new ze(new qn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:_i(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(yi)),h.material.toneMapped=tt.getTransfer(I.colorSpace)!==st,(u!==I||f!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,f=I.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new ze(new ui(2,2),new cn({name:"BackgroundMaterial",uniforms:_i(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=tt.getTransfer(I.colorSpace)!==st,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||f!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=I,f=I.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,_){y.getRGB($o,xl(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:x,addToRenderList:m,dispose:S}}function Hm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,F,H,Y,ne){let ae=!1,se=u(Y,H,F);r!==se&&(r=se,l(r.object)),ae=p(w,Y,H,ne),ae&&g(w,Y,H,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,_(w,F,H,Y),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,F,H){let Y=H.wireframe===!0,ne=n[w.id];ne===void 0&&(ne={},n[w.id]=ne);let ae=ne[F.id];ae===void 0&&(ae={},ne[F.id]=ae);let se=ae[Y];return se===void 0&&(se=f(c()),ae[Y]=se),se}function f(w){let F=[],H=[],Y=[];for(let ne=0;ne<t;ne++)F[ne]=0,H[ne]=0,Y[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:Y,object:w,attributes:{},index:null}}function p(w,F,H,Y){let ne=r.attributes,ae=F.attributes,se=0,he=H.getAttributes();for(let X in he)if(he[X].location>=0){let ie=ne[X],ye=ae[X];if(ye===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;se++}return r.attributesNum!==se||r.index!==Y}function g(w,F,H,Y){let ne={},ae=F.attributes,se=0,he=H.getAttributes();for(let X in he)if(he[X].location>=0){let ie=ae[X];ie===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));let ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),ne[X]=ye,se++}r.attributes=ne,r.attributesNum=se,r.index=Y}function x(){let w=r.newAttributes;for(let F=0,H=w.length;F<H;F++)w[F]=0}function m(w){d(w,0)}function d(w,F){let H=r.newAttributes,Y=r.enabledAttributes,ne=r.attributeDivisors;H[w]=1,Y[w]===0&&(i.enableVertexAttribArray(w),Y[w]=1),ne[w]!==F&&(i.vertexAttribDivisor(w,F),ne[w]=F)}function S(){let w=r.newAttributes,F=r.enabledAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]!==w[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function y(w,F,H,Y,ne,ae,se){se===!0?i.vertexAttribIPointer(w,F,H,ne,ae):i.vertexAttribPointer(w,F,H,Y,ne,ae)}function _(w,F,H,Y){x();let ne=Y.attributes,ae=H.getAttributes(),se=F.defaultAttributeValues;for(let he in ae){let X=ae[he];if(X.location>=0){let ue=ne[he];if(ue===void 0&&(he==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),he==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){let ie=ue.normalized,ye=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;let Le=Ae.buffer,Z=Ae.type,G=Ae.bytesPerElement,C=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===go;if(ue.isInterleavedBufferAttribute){let R=ue.data,te=R.stride,Q=ue.offset;if(R.isInstancedInterleavedBuffer){for(let W=0;W<X.locationSize;W++)d(X.location+W,R.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let W=0;W<X.locationSize;W++)m(X.location+W);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let W=0;W<X.locationSize;W++)y(X.location+W,ye/X.locationSize,Z,ie,te*G,(Q+ye/X.locationSize*W)*G,C)}else{if(ue.isInstancedBufferAttribute){for(let R=0;R<X.locationSize;R++)d(X.location+R,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let R=0;R<X.locationSize;R++)m(X.location+R);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let R=0;R<X.locationSize;R++)y(X.location+R,ye/X.locationSize,Z,ie,ye*G,ye/X.locationSize*R*G,C)}}else if(se!==void 0){let ie=se[he];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}S()}function I(){D();for(let w in n){let F=n[w];for(let H in F){let Y=F[H];for(let ne in Y)h(Y[ne].object),delete Y[ne];delete F[H]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;let F=n[w.id];for(let H in F){let Y=F[H];for(let ne in Y)h(Y[ne].object),delete Y[ne];delete F[H]}delete n[w.id]}function P(w){for(let F in n){let H=n[F];if(H[w.id]===void 0)continue;let Y=H[w.id];for(let ne in Y)h(Y[ne].object),delete Y[ne];delete H[w.id]}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Vm(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xn&&!D)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function Wm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new jt,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,y=S*4,_=d.clippingState||null;c.value=_,_=h(g,f,y,p);for(let I=0;I!==y;++I)_[I]=t[I];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,_=p;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Xm(i){let e=new WeakMap;function t(o,a){return a===fo?o.mapping=mi:a===po&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fo||a===po)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Br(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,wh=[.125,.215,.35,.446,.526,.582],bi=20,bl=new pi,Th=new Ge,Sl=null,El=0,wl=0,Tl=!1,Mi=(1+Math.sqrt(5))/2,ts=1/Mi,Ah=[new O(-Mi,ts,0),new O(Mi,ts,0),new O(-ts,0,Mi),new O(ts,0,Mi),new O(0,Mi,-ts),new O(0,Mi,ts),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],qm=new O,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=qm}=r;Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,El,wl),this._renderer.xr.enabled=Tl,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:ji,format:tn,colorSpace:ai,depthBuffer:!1},s=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(r)),this._blurMaterial=Zm(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,s,r){let c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Th),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new ci({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new ze(new qn,x),d=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,d=!0):(x.color.copy(Th),d=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let I=this._cubeSize;Ko(s,_*I,y>2?I:0,I,I),u.setRenderTarget(s),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ko(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ah[(s-r-1)%Ah.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let d=[],S=0;for(let P=0;P<bi;++P){let D=P/x,E=Math.exp(-D*D/2);d.push(E),P===0?S+=E:P<m&&(S+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let _=this._sizeLods[s],I=3*_*(s>y-ns?s-y+ns:0),T=4*(this._cubeSize-_);Ko(t,I,T,3*_,2*_),c.setRenderTarget(t),c.render(u,bl)}};function Ym(i){let e=[],t=[],n=[],s=i,r=i-ns+1+wh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ns?c=wh[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,S=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,D=T>2?0:-1,E=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(E,x*g*T),y.set(f,m*g*T);let w=[T,T,T,T,T,T];_.set(w,d*g*T)}let I=new lt;I.setAttribute("position",new yt(S,x)),I.setAttribute("uv",new yt(y,m)),I.setAttribute("faceIndex",new yt(_,d)),e.push(I),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rh(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zm(i,e,t){let n=new Float32Array(bi),s=new O(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ch(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ih(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function Jm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===fo||c===po,h=c===mi||c===gi;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Qo(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $m(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Km(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let y=0,_=S.length;y<_;y+=3){let I=S[y+0],T=S[y+1],P=S[y+2];f.push(I,T,T,P,P,I)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let I=y+0,T=y+1,P=y+2;f.push(I,T,T,P,P,I)}}else return;let m=new(gl(f)?bs:Ms)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jm(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*x[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function eg(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*I*4*u),P=new vs(T,_,I,u);P.type=xn,P.needsUpdate=!0;let D=y*4;for(let w=0;w<u;w++){let F=m[w],H=d[w],Y=S[w],ne=_*I*4*w;for(let ae=0;ae<F.count;ae++){let se=ae*D;p===!0&&(s.fromBufferAttribute(F,ae),T[ne+se+0]=s.x,T[ne+se+1]=s.y,T[ne+se+2]=s.z,T[ne+se+3]=0),g===!0&&(s.fromBufferAttribute(H,ae),T[ne+se+4]=s.x,T[ne+se+5]=s.y,T[ne+se+6]=s.z,T[ne+se+7]=0),x===!0&&(s.fromBufferAttribute(Y,ae),T[ne+se+8]=s.x,T[ne+se+9]=s.y,T[ne+se+10]=s.z,T[ne+se+11]=Y.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Me(_,I)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Jh=new Dt,Ph=new As(1,1),$h=new vs,Kh=new Fr,jh=new Es,Lh=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),St(t,n)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),St(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),St(t,n)}}function cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=fl,r=Ph):r=Jh,t.setTexture2D(e||r,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kh,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jh,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$h,s)}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function bg(i,e){i.uniform1fv(this.addr,e)}function Sg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Eg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Tg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ag(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Pg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Dg(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function Ng(i,e){i.uniform3uiv(this.addr,e)}function Fg(i,e){i.uniform4uiv(this.addr,e)}function Og(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jh,r[o])}function Bg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kh,r[o])}function zg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jh,r[o])}function kg(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$h,r[o])}function Hg(i){switch(i){case 5126:return bg;case 35664:return Sg;case 35665:return Eg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}var Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}},Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),o=Al.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Oh(t,l===void 0?new Rl(a,i,e):new Cl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Il(a),Oh(t,u)),t=u}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Bh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gg=37297,Wg=0;function Xg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var zh=new Ye;function qg(i){tt._getMatrix(zh,tt.workingColorSpace,i);let e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Xg(i.getShaderSource(e),a)}else return r}function Yg(i,e){let t=qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zg(i,e){let t;switch(e){case Qc:t="Linear";break;case eh:t="Reinhard";break;case th:t="Cineon";break;case uo:t="ACESFilmic";break;case ih:t="AgX";break;case sh:t="Neutral";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new O;function Jg(){tt.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ks(i){return i!==""}function Hh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(Qg,t0)}var e0=new Map;function t0(i,e){let t=$e[e];if(t===void 0){let n=e0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}var n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(n0,i0)}function i0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function s0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function r0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function a0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function l0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=s0(t),l=r0(t),h=o0(t),u=a0(t),f=l0(t),p=$g(t),g=Kg(r),x=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?$e.tonemapping_pars_fragment:"",t.toneMapping!==Un?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),Jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Pl(o),o=Hh(o,t),o=Vh(o,t),a=Pl(a),a=Hh(a,t),a=Vh(a,t),o=Gh(o),a=Gh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=S+m+o,_=S+d+a,I=Bh(s,s.VERTEX_SHADER,y),T=Bh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(F){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(I)||"",ne=s.getShaderInfoLog(T)||"",ae=H.trim(),se=Y.trim(),he=ne.trim(),X=!0,ue=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,T);else{let ie=kh(s,I,"vertex"),ye=kh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ae+`
`+ie+`
`+ye)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(se===""||he==="")&&(ue=!1);ue&&(F.diagnostics={runnable:X,programLog:ae,vertexShader:{log:se,prefix:m},fragmentShader:{log:he,prefix:d}})}s.deleteShader(I),s.deleteShader(T),D=new is(s,x),E=jg(s,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Gg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var h0=0,Ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dl(e),t.set(e,n)),n}},Dl=class{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}};function u0(i,e,t,n,s,r,o){let a=new Wi,c=new Ll,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,F,H,Y){let ne=H.fog,ae=Y.geometry,se=E.isMeshStandardMaterial?H.environment:null,he=(E.isMeshStandardMaterial?t:e).get(E.envMap||se),X=he&&he.mapping===Xs?he.image.height:null,ue=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ie=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ye=ie!==void 0?ie.length:0,Ae=0;ae.morphAttributes.position!==void 0&&(Ae=1),ae.morphAttributes.normal!==void 0&&(Ae=2),ae.morphAttributes.color!==void 0&&(Ae=3);let Le,Z,G,C;if(ue){let Qe=_n[ue];Le=Qe.vertexShader,Z=Qe.fragmentShader}else Le=E.vertexShader,Z=E.fragmentShader,c.update(E),G=c.getVertexShaderID(E),C=c.getFragmentShaderID(E);let R=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),Q=Y.isInstancedMesh===!0,W=Y.isBatchedMesh===!0,fe=!!E.map,_e=!!E.matcap,L=!!he,q=!!E.aoMap,N=!!E.lightMap,V=!!E.bumpMap,z=!!E.normalMap,v=!!E.displacementMap,M=!!E.emissiveMap,B=!!E.metalnessMap,ce=!!E.roughnessMap,ee=E.anisotropy>0,A=E.clearcoat>0,b=E.dispersion>0,k=E.iridescence>0,J=E.sheen>0,K=E.transmission>0,$=ee&&!!E.anisotropyMap,re=A&&!!E.clearcoatMap,de=A&&!!E.clearcoatNormalMap,Se=A&&!!E.clearcoatRoughnessMap,ve=k&&!!E.iridescenceMap,me=k&&!!E.iridescenceThicknessMap,xe=J&&!!E.sheenColorMap,Ee=J&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Re=!!E.specularColorMap,Be=!!E.specularIntensityMap,j=K&&!!E.transmissionMap,we=K&&!!E.thicknessMap,Ie=!!E.gradientMap,Ne=!!E.alphaMap,Te=E.alphaTest>0,be=!!E.alphaHash,Fe=!!E.extensions,We=Un;E.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(We=i.toneMapping);let nt={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:Z,defines:E.defines,customVertexShaderID:G,customFragmentShaderID:C,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:W,batchingColor:W&&Y._colorsTexture!==null,instancing:Q,instancingColor:Q&&Y.instanceColor!==null,instancingMorph:Q&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ai,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:_e,envMap:L,envMapMode:L&&he.mapping,envMapCubeUVHeight:X,aoMap:q,lightMap:N,bumpMap:V,normalMap:z,displacementMap:f&&v,emissiveMap:M,normalMapObjectSpace:z&&E.normalMapType===lh,normalMapTangentSpace:z&&E.normalMapType===dl,metalnessMap:B,roughnessMap:ce,anisotropy:ee,anisotropyMap:$,clearcoat:A,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:Se,dispersion:b,iridescence:k,iridescenceMap:ve,iridescenceThicknessMap:me,sheen:J,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:Pe,specularColorMap:Re,specularIntensityMap:Be,transmission:K,transmissionMap:j,thicknessMap:we,gradientMap:Ie,opaque:E.transparent===!1&&E.blending===ri&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Te,alphaHash:be,combine:E.combine,mapUv:fe&&x(E.map.channel),aoMapUv:q&&x(E.aoMap.channel),lightMapUv:N&&x(E.lightMap.channel),bumpMapUv:V&&x(E.bumpMap.channel),normalMapUv:z&&x(E.normalMap.channel),displacementMapUv:v&&x(E.displacementMap.channel),emissiveMapUv:M&&x(E.emissiveMap.channel),metalnessMapUv:B&&x(E.metalnessMap.channel),roughnessMapUv:ce&&x(E.roughnessMap.channel),anisotropyMapUv:$&&x(E.anisotropyMap.channel),clearcoatMapUv:re&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(E.sheenRoughnessMap.channel),specularMapUv:Pe&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:Be&&x(E.specularIntensityMap.channel),transmissionMapUv:j&&x(E.transmissionMap.channel),thicknessMapUv:we&&x(E.thicknessMap.channel),alphaMapUv:Ne&&x(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(z||ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(fe||Ne),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:te,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:M&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===kt,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function d(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)w.push(F),w.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(S(w,E),y(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function S(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function y(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let w=g[E.type],F;if(w){let H=_n[w];F=yh.clone(H.uniforms)}else F=E.uniforms;return F}function I(E,w){let F;for(let H=0,Y=h.length;H<Y;H++){let ne=h[H];if(ne.cacheKey===w){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new c0(i,w,E,r),h.push(F)),F}function T(E){if(--E.usedTimes===0){let w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function P(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:D}}function d0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||f0),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function p0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new qh,i.set(n,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function m0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function g0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x0=0;function _0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y0(i){let e=new m0,t=g0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new dt,o=new dt;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,S=0,y=0,_=0,I=0,T=0,P=0;l.sort(_0);for(let E=0,w=l.length;E<w;E++){let F=l[E],H=F.color,Y=F.intensity,ne=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=H.r*Y,u+=H.g*Y,f+=H.b*Y;else if(F.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(F.sh.coefficients[se],Y);P++}else if(F.isDirectionalLight){let se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let he=F.shadow,X=t.get(F);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=ae,n.directionalShadowMatrix[p]=F.shadow.matrix,S++}n.directional[p]=se,p++}else if(F.isSpotLight){let se=e.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(H).multiplyScalar(Y),se.distance=ne,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,n.spot[x]=se;let he=F.shadow;if(F.map&&(n.spotLightMap[I]=F.map,I++,he.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[x]=he.matrix,F.castShadow){let X=t.get(F);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=ae,_++}x++}else if(F.isRectAreaLight){let se=e.get(F);se.color.copy(H).multiplyScalar(Y),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=se,m++}else if(F.isPointLight){let se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),se.distance=F.distance,se.decay=F.decay,F.castShadow){let he=F.shadow,X=t.get(F);X.shadowIntensity=he.intensity,X.shadowBias=he.bias,X.shadowNormalBias=he.normalBias,X.shadowRadius=he.radius,X.shadowMapSize=he.mapSize,X.shadowCameraNear=he.camera.near,X.shadowCameraFar=he.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ae,n.pointShadowMatrix[g]=F.shadow.matrix,y++}n.point[g]=se,g++}else if(F.isHemisphereLight){let se=e.get(F);se.skyColor.copy(F.color).multiplyScalar(Y),se.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[d]=se,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==I||D.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=I,D.numLightProbes=P,n.version=x0++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let y=l[d];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Yh(i){let e=new y0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function v0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yh(i),e.set(s,[a])):r>=o.length?(a=new Yh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function S0(i,e,t){let n=new qi,s=new Me,r=new Me,o=new gt,a=new qr({depthPacking:ah}),c=new Yr,l={},h=t.maxTextureSize,u={[Rn]:Ft,[Ft]:Rn,[kt]:kt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:M0,fragmentShader:b0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let d=this.type;this.render=function(T,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),w=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Dn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=d!==gn&&this.type===gn,ne=d===gn&&this.type!==gn;for(let ae=0,se=T.length;ae<se;ae++){let he=T[ae],X=he.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ue=X.getFrameExtents();if(s.multiply(ue),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||Y===!0||ne===!0){let ye=this.type!==gn?{minFilter:zt,magFilter:zt}:{};X.map!==null&&X.map.dispose(),X.map=new Qt(s.x,s.y,ye),X.map.texture.name=he.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ie=X.getViewportCount();for(let ye=0;ye<ie;ye++){let Ae=X.getViewport(ye);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),H.viewport(o),X.updateMatrices(he,ye),n=X.getFrustum(),_(P,D,X.camera,he,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&S(X,D),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,F)};function S(T,P){let D=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,D,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,D,p,x,null)}function y(T,P,D,E){let w=null,F=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=w.uuid,Y=P.uuid,ne=l[H];ne===void 0&&(ne={},l[H]=ne);let ae=ne[Y];ae===void 0&&(ae=w.clone(),ne[Y]=ae,P.addEventListener("dispose",I)),w=ae}if(w.visible=P.visible,w.wireframe=P.wireframe,E===gn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=i.properties.get(w);H.light=D}return w}function _(T,P,D,E,w){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let Y=e.update(T),ne=T.material;if(Array.isArray(ne)){let ae=Y.groups;for(let se=0,he=ae.length;se<he;se++){let X=ae[se],ue=ne[X.materialIndex];if(ue&&ue.visible){let ie=y(T,ue,E,w);T.onBeforeShadow(i,T,P,D,Y,ie,X),i.renderBufferDirect(D,null,Y,ie,T,X),T.onAfterShadow(i,T,P,D,Y,ie,X)}}}else if(ne.visible){let ae=y(T,ne,E,w);T.onBeforeShadow(i,T,P,D,Y,ae,null),i.renderBufferDirect(D,null,Y,ae,T,null),T.onAfterShadow(i,T,P,D,Y,ae,null)}}let H=T.children;for(let Y=0,ne=H.length;Y<ne;Y++)_(H[Y],P,D,E,w)}function I(T){T.target.removeEventListener("dispose",I);for(let D in l){let E=l[D],w=T.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var E0={[so]:ro,[oo]:co,[ao]:ho,[oi]:lo,[ro]:so,[co]:oo,[ho]:ao,[lo]:oi};function w0(i,e){function t(){let j=!1,we=new gt,Ie=null,Ne=new gt(0,0,0,0);return{setMask:function(Te){Ie!==Te&&!j&&(i.colorMask(Te,Te,Te,Te),Ie=Te)},setLocked:function(Te){j=Te},setClear:function(Te,be,Fe,We,nt){nt===!0&&(Te*=We,be*=We,Fe*=We),we.set(Te,be,Fe,We),Ne.equals(we)===!1&&(i.clearColor(Te,be,Fe,We),Ne.copy(we))},reset:function(){j=!1,Ie=null,Ne.set(-1,0,0,0)}}}function n(){let j=!1,we=!1,Ie=null,Ne=null,Te=null;return{setReversed:function(be){if(we!==be){let Fe=e.get("EXT_clip_control");be?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),we=be;let We=Te;Te=null,this.setClear(We)}},getReversed:function(){return we},setTest:function(be){be?R(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(be){Ie!==be&&!j&&(i.depthMask(be),Ie=be)},setFunc:function(be){if(we&&(be=E0[be]),Ne!==be){switch(be){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=be}},setLocked:function(be){j=be},setClear:function(be){Te!==be&&(we&&(be=1-be),i.clearDepth(be),Te=be)},reset:function(){j=!1,Ie=null,Ne=null,Te=null,we=!1}}}function s(){let j=!1,we=null,Ie=null,Ne=null,Te=null,be=null,Fe=null,We=null,nt=null;return{setTest:function(Qe){j||(Qe?R(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Qe){we!==Qe&&!j&&(i.stencilMask(Qe),we=Qe)},setFunc:function(Qe,vn,dn){(Ie!==Qe||Ne!==vn||Te!==dn)&&(i.stencilFunc(Qe,vn,dn),Ie=Qe,Ne=vn,Te=dn)},setOp:function(Qe,vn,dn){(be!==Qe||Fe!==vn||We!==dn)&&(i.stencilOp(Qe,vn,dn),be=Qe,Fe=vn,We=dn)},setLocked:function(Qe){j=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){j=!1,we=null,Ie=null,Ne=null,Te=null,be=null,Fe=null,We=null,nt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,y=null,_=null,I=null,T=null,P=new Ge(0,0,0),D=0,E=!1,w=null,F=null,H=null,Y=null,ne=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,he=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(X)[1]),se=he>=1):X.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),se=he>=2);let ue=null,ie={},ye=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Le=new gt().fromArray(ye),Z=new gt().fromArray(Ae);function G(j,we,Ie,Ne){let Te=new Uint8Array(4),be=i.createTexture();i.bindTexture(j,be),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Ie;Fe++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(we+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return be}let C={};C[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(i.DEPTH_TEST),o.setFunc(oi),V(!1),z(Ka),R(i.CULL_FACE),q(Dn);function R(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function te(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function Q(j,we){return u[j]!==we?(i.bindFramebuffer(j,we),u[j]=we,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function W(j,we){let Ie=p,Ne=!1;if(j){Ie=f.get(we),Ie===void 0&&(Ie=[],f.set(we,Ie));let Te=j.textures;if(Ie.length!==Te.length||Ie[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Fe=Te.length;be<Fe;be++)Ie[be]=i.COLOR_ATTACHMENT0+be;Ie.length=Te.length,Ne=!0}}else Ie[0]!==i.BACK&&(Ie[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Ie)}function fe(j){return g!==j?(i.useProgram(j),g=j,!0):!1}let _e={[Xn]:i.FUNC_ADD,[Uc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};_e[Fc]=i.MIN,_e[Oc]=i.MAX;let L={[Bc]:i.ZERO,[zc]:i.ONE,[kc]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[Hc]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function q(j,we,Ie,Ne,Te,be,Fe,We,nt,Qe){if(j===Dn){x===!0&&(te(i.BLEND),x=!1);return}if(x===!1&&(R(i.BLEND),x=!0),j!==Dc){if(j!==m||Qe!==E){if((d!==Xn||_!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,_=Xn),Qe)switch(j){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}S=null,y=null,I=null,T=null,P.set(0,0,0),D=0,m=j,E=Qe}return}Te=Te||we,be=be||Ie,Fe=Fe||Ne,(we!==d||Te!==_)&&(i.blendEquationSeparate(_e[we],_e[Te]),d=we,_=Te),(Ie!==S||Ne!==y||be!==I||Fe!==T)&&(i.blendFuncSeparate(L[Ie],L[Ne],L[be],L[Fe]),S=Ie,y=Ne,I=be,T=Fe),(We.equals(P)===!1||nt!==D)&&(i.blendColor(We.r,We.g,We.b,nt),P.copy(We),D=nt),m=j,E=!1}function N(j,we){j.side===kt?te(i.CULL_FACE):R(i.CULL_FACE);let Ie=j.side===Ft;we&&(Ie=!Ie),V(Ie),j.blending===ri&&j.transparent===!1?q(Dn):q(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);let Ne=j.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),M(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(j){w!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),w=j)}function z(j){j!==Pc?(R(i.CULL_FACE),j!==F&&(j===Ka?i.cullFace(i.BACK):j===Lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),F=j}function v(j){j!==H&&(se&&i.lineWidth(j),H=j)}function M(j,we,Ie){j?(R(i.POLYGON_OFFSET_FILL),(Y!==we||ne!==Ie)&&(i.polygonOffset(we,Ie),Y=we,ne=Ie)):te(i.POLYGON_OFFSET_FILL)}function B(j){j?R(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ce(j){j===void 0&&(j=i.TEXTURE0+ae-1),ue!==j&&(i.activeTexture(j),ue=j)}function ee(j,we,Ie){Ie===void 0&&(ue===null?Ie=i.TEXTURE0+ae-1:Ie=ue);let Ne=ie[Ie];Ne===void 0&&(Ne={type:void 0,texture:void 0},ie[Ie]=Ne),(Ne.type!==j||Ne.texture!==we)&&(ue!==Ie&&(i.activeTexture(Ie),ue=Ie),i.bindTexture(j,we||C[j]),Ne.type=j,Ne.texture=we)}function A(){let j=ie[ue];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function J(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function K(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Se(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(j){Le.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Le.copy(j))}function Ee(j){Z.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function Pe(j,we){let Ie=l.get(we);Ie===void 0&&(Ie=new WeakMap,l.set(we,Ie));let Ne=Ie.get(j);Ne===void 0&&(Ne=i.getUniformBlockIndex(we,j.name),Ie.set(j,Ne))}function Re(j,we){let Ne=l.get(we).get(j);c.get(we)!==Ne&&(i.uniformBlockBinding(we,Ne,j.__bindingPointIndex),c.set(we,Ne))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,ie={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,y=null,_=null,I=null,T=null,P=new Ge(0,0,0),D=0,E=!1,w=null,F=null,H=null,Y=null,ne=null,Le.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:te,bindFramebuffer:Q,drawBuffers:W,useProgram:fe,setBlending:q,setMaterial:N,setFlipSided:V,setCullFace:z,setLineWidth:v,setPolygonOffset:M,setScissorTest:B,activeTexture:ce,bindTexture:ee,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:ve,texImage3D:me,updateUBOMapping:Pe,uniformBlockBinding:Re,texStorage2D:de,texStorage3D:Se,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:re,scissor:xe,viewport:Ee,reset:Be}}function T0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):ys("canvas")}function x(A,b,k){let J=1,K=ee(A);if((K.width>k||K.height>k)&&(J=k/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(J*K.width),re=Math.floor(J*K.height);u===void 0&&(u=g($,re));let de=b?g($,re):u;return de.width=$,de.height=re,de.getContext("2d").drawImage(A,0,0,$,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+re+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,b,k,J,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),b===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){let re=K?xs:tt.getTransfer(J);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=re===st?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(A,b){let k;return A?b===null||b===Kn||b===Qi?k=i.DEPTH24_STENCIL8:b===xn?k=i.DEPTH32F_STENCIL8:b===Ki&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===Qi?k=i.DEPTH_COMPONENT24:b===xn?k=i.DEPTH_COMPONENT32F:b===Ki&&(k=i.DEPTH_COMPONENT16),k}function I(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==Lt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){let b=A.target;b.removeEventListener("dispose",T),D(b),b.isVideoTexture&&h.delete(b)}function P(A){let b=A.target;b.removeEventListener("dispose",P),w(b)}function D(A){let b=n.get(A);if(b.__webglInit===void 0)return;let k=A.source,J=f.get(k);if(J){let K=J[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(A),Object.keys(J).length===0&&f.delete(k)}n.remove(A)}function E(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let k=A.source,J=f.get(k);delete J[b.__cacheKey],o.memory.textures--}function w(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let K=0;K<b.__webglFramebuffer[J].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[J][K]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=A.textures;for(let J=0,K=k.length;J<K;J++){let $=n.get(k[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(A)}let F=0;function H(){F=0}function Y(){let A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function ne(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function ae(A,b){let k=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(k,A,b);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function se(A,b){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){C(k,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function he(A,b){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){C(k,A,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function X(A,b){let k=n.get(A);if(A.version>0&&k.__version!==A.version){R(k,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let ue={[Bi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},ie={[zt]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ye={[ch]:i.NEVER,[mh]:i.ALWAYS,[hh]:i.LESS,[fl]:i.LEQUAL,[uh]:i.EQUAL,[ph]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Ae(A,b){if(b.type===xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Lt||b.magFilter===mo||b.magFilter===qs||b.magFilter===$n||b.minFilter===Lt||b.minFilter===mo||b.minFilter===qs||b.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ue[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==qs&&b.minFilter!==$n||b.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Le(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let J=b.source,K=f.get(J);K===void 0&&(K={},f.set(J,K));let $=ne(b);if($!==A.__cacheKey){K[$]===void 0&&(K[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[$].usedTimes++;let re=K[A.__cacheKey];re!==void 0&&(K[A.__cacheKey].usedTimes--,re.usedTimes===0&&E(b)),A.__cacheKey=$,A.__webglTexture=K[$].texture}return k}function Z(A,b,k){return Math.floor(Math.floor(A/k)/b)}function G(A,b,k,J){let $=A.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,J,b.data);else{$.sort((me,xe)=>me.start-xe.start);let re=0;for(let me=1;me<$.length;me++){let xe=$[re],Ee=$[me],Pe=xe.start+xe.count,Re=Z(Ee.start,b.width,4),Be=Z(xe.start,b.width,4);Ee.start<=Pe+1&&Re===Be&&Z(Ee.start+Ee.count-1,b.width,4)===Re?xe.count=Math.max(xe.count,Ee.start+Ee.count-xe.start):(++re,$[re]=Ee)}$.length=re+1;let de=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let me=0,xe=$.length;me<xe;me++){let Ee=$[me],Pe=Math.floor(Ee.start/4),Re=Math.ceil(Ee.count/4),Be=Pe%b.width,j=Math.floor(Pe/b.width),we=Re,Ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,Be,j,we,Ie,k,J,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function C(A,b,k){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let K=Le(A,b),$=b.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+k);let re=n.get($);if($.version!==re.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let de=tt.getPrimaries(tt.workingColorSpace),Se=b.colorSpace===Nn?null:tt.getPrimaries(b.colorSpace),ve=b.colorSpace===Nn||de===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let me=x(b.image,!1,s.maxTextureSize);me=ce(b,me);let xe=r.convert(b.format,b.colorSpace),Ee=r.convert(b.type),Pe=y(b.internalFormat,xe,Ee,b.colorSpace,b.isVideoTexture);Ae(J,b);let Re,Be=b.mipmaps,j=b.isVideoTexture!==!0,we=re.__version===void 0||K===!0,Ie=$.dataReady,Ne=I(b,me);if(b.isDepthTexture)Pe=_(b.format===es,b.type),we&&(j?t.texStorage2D(i.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Pe,me.width,me.height,0,xe,Ee,null));else if(b.isDataTexture)if(Be.length>0){j&&we&&t.texStorage2D(i.TEXTURE_2D,Ne,Pe,Be[0].width,Be[0].height);for(let Te=0,be=Be.length;Te<be;Te++)Re=Be[Te],j?Ie&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Re.width,Re.height,xe,Ee,Re.data):t.texImage2D(i.TEXTURE_2D,Te,Pe,Re.width,Re.height,0,xe,Ee,Re.data);b.generateMipmaps=!1}else j?(we&&t.texStorage2D(i.TEXTURE_2D,Ne,Pe,me.width,me.height),Ie&&G(b,me,xe,Ee)):t.texImage2D(i.TEXTURE_2D,0,Pe,me.width,me.height,0,xe,Ee,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Pe,Be[0].width,Be[0].height,me.depth);for(let Te=0,be=Be.length;Te<be;Te++)if(Re=Be[Te],b.format!==tn)if(xe!==null)if(j){if(Ie)if(b.layerUpdates.size>0){let Fe=Ml(Re.width,Re.height,b.format,b.type);for(let We of b.layerUpdates){let nt=Re.data.subarray(We*Fe/Re.data.BYTES_PER_ELEMENT,(We+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,We,Re.width,Re.height,1,xe,nt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Re.width,Re.height,me.depth,xe,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Pe,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Re.width,Re.height,me.depth,xe,Ee,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Pe,Re.width,Re.height,me.depth,0,xe,Ee,Re.data)}else{j&&we&&t.texStorage2D(i.TEXTURE_2D,Ne,Pe,Be[0].width,Be[0].height);for(let Te=0,be=Be.length;Te<be;Te++)Re=Be[Te],b.format!==tn?xe!==null?j?Ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,Re.width,Re.height,xe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Pe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ie&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Re.width,Re.height,xe,Ee,Re.data):t.texImage2D(i.TEXTURE_2D,Te,Pe,Re.width,Re.height,0,xe,Ee,Re.data)}else if(b.isDataArrayTexture)if(j){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Pe,me.width,me.height,me.depth),Ie)if(b.layerUpdates.size>0){let Te=Ml(me.width,me.height,b.format,b.type);for(let be of b.layerUpdates){let Fe=me.data.subarray(be*Te/me.data.BYTES_PER_ELEMENT,(be+1)*Te/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,me.width,me.height,1,xe,Ee,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ee,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,xe,Ee,me.data);else if(b.isData3DTexture)j?(we&&t.texStorage3D(i.TEXTURE_3D,Ne,Pe,me.width,me.height,me.depth),Ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ee,me.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,xe,Ee,me.data);else if(b.isFramebufferTexture){if(we)if(j)t.texStorage2D(i.TEXTURE_2D,Ne,Pe,me.width,me.height);else{let Te=me.width,be=me.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Pe,Te,be,0,xe,Ee,null),Te>>=1,be>>=1}}else if(Be.length>0){if(j&&we){let Te=ee(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Pe,Te.width,Te.height)}for(let Te=0,be=Be.length;Te<be;Te++)Re=Be[Te],j?Ie&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,xe,Ee,Re):t.texImage2D(i.TEXTURE_2D,Te,Pe,xe,Ee,Re);b.generateMipmaps=!1}else if(j){if(we){let Te=ee(me);t.texStorage2D(i.TEXTURE_2D,Ne,Pe,Te.width,Te.height)}Ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ee,me)}else t.texImage2D(i.TEXTURE_2D,0,Pe,xe,Ee,me);m(b)&&d(J),re.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function R(A,b,k){if(b.image.length!==6)return;let J=Le(A,b),K=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let $=n.get(K);if(K.version!==$.__version||J===!0){t.activeTexture(i.TEXTURE0+k);let re=tt.getPrimaries(tt.workingColorSpace),de=b.colorSpace===Nn?null:tt.getPrimaries(b.colorSpace),Se=b.colorSpace===Nn||re===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let be=0;be<6;be++)!ve&&!me?xe[be]=x(b.image[be],!0,s.maxCubemapSize):xe[be]=me?b.image[be].image:b.image[be],xe[be]=ce(b,xe[be]);let Ee=xe[0],Pe=r.convert(b.format,b.colorSpace),Re=r.convert(b.type),Be=y(b.internalFormat,Pe,Re,b.colorSpace),j=b.isVideoTexture!==!0,we=$.__version===void 0||J===!0,Ie=K.dataReady,Ne=I(b,Ee);Ae(i.TEXTURE_CUBE_MAP,b);let Te;if(ve){j&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Be,Ee.width,Ee.height);for(let be=0;be<6;be++){Te=xe[be].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){let We=Te[Fe];b.format!==tn?Pe!==null?j?Ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,0,0,We.width,We.height,Pe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,Be,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,0,0,We.width,We.height,Pe,Re,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,Be,We.width,We.height,0,Pe,Re,We.data)}}}else{if(Te=b.mipmaps,j&&we){Te.length>0&&Ne++;let be=ee(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Be,be.width,be.height)}for(let be=0;be<6;be++)if(me){j?Ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,xe[be].width,xe[be].height,Pe,Re,xe[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,xe[be].width,xe[be].height,0,Pe,Re,xe[be].data);for(let Fe=0;Fe<Te.length;Fe++){let nt=Te[Fe].image[be].image;j?Ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,0,0,nt.width,nt.height,Pe,Re,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,Be,nt.width,nt.height,0,Pe,Re,nt.data)}}else{j?Ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe,Re,xe[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,Pe,Re,xe[be]);for(let Fe=0;Fe<Te.length;Fe++){let We=Te[Fe];j?Ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,0,0,Pe,Re,We.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,Be,Pe,Re,We.image[be])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),$.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function te(A,b,k,J,K,$){let re=r.convert(k.format,k.colorSpace),de=r.convert(k.type),Se=y(k.internalFormat,re,de,k.colorSpace),ve=n.get(b),me=n.get(k);if(me.__renderTarget=b,!ve.__hasExternalTextures){let xe=Math.max(1,b.width>>$),Ee=Math.max(1,b.height>>$);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,$,Se,xe,Ee,b.depth,0,re,de,null):t.texImage2D(K,$,Se,xe,Ee,0,re,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),M(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,me.__webglTexture,0,v(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,me.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(A,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let J=b.depthTexture,K=J&&J.isDepthTexture?J.type:null,$=_(b.stencilBuffer,K),re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v(b);M(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,$,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,A)}else{let J=b.textures;for(let K=0;K<J.length;K++){let $=J[K],re=r.convert($.format,$.colorSpace),de=r.convert($.type),Se=y($.internalFormat,re,de,$.colorSpace),ve=v(b);k&&M(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Se,b.width,b.height):M(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,Se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae(b.depthTexture,0);let K=J.__webglTexture,$=v(b);if(b.depthTexture.format===zi)M(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===es)M(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function fe(A){let b=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=J}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let J=A.texture.mipmaps;J&&J.length>0?W(b.__webglFramebuffer[0],A):W(b.__webglFramebuffer,A)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Q(b.__webglDepthbuffer[J],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}else{let J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Q(b.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(A,b,k){let J=n.get(A);b!==void 0&&te(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&fe(A)}function L(A){let b=A.texture,k=n.get(A),J=n.get(b);A.addEventListener("dispose",P);let K=A.textures,$=A.isWebGLCubeRenderTarget===!0,re=K.length>1;if(re||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Se=0;Se<b.mipmaps.length;Se++)k.__webglFramebuffer[de][Se]=i.createFramebuffer()}else k.__webglFramebuffer[de]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)k.__webglFramebuffer[de]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(re)for(let de=0,Se=K.length;de<Se;de++){let ve=n.get(K[de]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&M(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<K.length;de++){let Se=K[de];k.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let ve=r.convert(Se.format,Se.colorSpace),me=r.convert(Se.type),xe=y(Se.internalFormat,ve,me,Se.colorSpace,A.isXRRenderTarget===!0),Ee=v(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,xe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,k.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)te(k.__webglFramebuffer[de][Se],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else te(k.__webglFramebuffer[de],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let de=0,Se=K.length;de<Se;de++){let ve=K[de],me=n.get(ve),xe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,me.__webglTexture),Ae(xe,ve),te(k.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+de,xe,0),m(ve)&&d(xe)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),Ae(de,b),b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)te(k.__webglFramebuffer[Se],A,b,i.COLOR_ATTACHMENT0,de,Se);else te(k.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,de,0);m(b)&&d(de),t.unbindTexture()}A.depthBuffer&&fe(A)}function q(A){let b=A.textures;for(let k=0,J=b.length;k<J;k++){let K=b[k];if(m(K)){let $=S(A),re=n.get(K).__webglTexture;t.bindTexture($,re),d($),t.unbindTexture()}}}let N=[],V=[];function z(A){if(A.samples>0){if(M(A)===!1){let b=A.textures,k=A.width,J=A.height,K=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(A),de=b.length>1;if(de)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let Se=A.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);let me=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,K,i.NEAREST),c===!0&&(N.length=0,V.length=0,N.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(N.push($),V.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);let me=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function v(A){return Math.min(s.maxSamples,A.samples)}function M(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function B(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ce(A,b){let k=A.colorSpace,J=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ai&&k!==Nn&&(tt.getTransfer(k)===st?(J!==tn||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.setTexture2D=ae,this.setTexture2DArray=se,this.setTexture3D=he,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=L,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=M}function A0(i,e){function t(n,s=Nn){let r,o=tt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===cl)return i.RGB;if(n===tn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===ul)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
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

}`,Ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ul,d={},S=t.getContextAttributes(),y=null,_=null,I=[],T=[],P=new Me,D=null,E=new Bt;E.viewport=new gt;let w=new Bt;w.viewport=new gt;let F=[E,w],H=new no,Y=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let R=I[C];return R===void 0&&(R=new Xi,I[C]=R),R.getTargetRaySpace()},this.getControllerGrip=function(C){let R=I[C];return R===void 0&&(R=new Xi,I[C]=R),R.getGripSpace()},this.getHand=function(C){let R=I[C];return R===void 0&&(R=new Xi,I[C]=R),R.getHandSpace()};function ae(C){let R=T.indexOf(C.inputSource);if(R===-1)return;let te=I[R];te!==void 0&&(te.update(C.inputSource,C.frame,l||o),te.dispatchEvent({type:C.type,data:C.inputSource}))}function se(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",he);for(let C=0;C<I.length;C++){let R=T[C];R!==null&&(T[C]=null,I[C].disconnect(R))}Y=null,ne=null,m.reset();for(let C in d)delete d[C];e.setRenderTarget(y),p=null,f=null,u=null,s=null,_=null,G.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",se),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Q=null,W=null;S.depth&&(W=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?es:zi,Q=S.stencil?Qi:Kn);let fe={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Qt(f.textureWidth,f.textureHeight,{format:tn,type:un,depthTexture:new As(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Qt(p.framebufferWidth,p.framebufferHeight,{format:tn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(C){for(let R=0;R<C.removed.length;R++){let te=C.removed[R],Q=T.indexOf(te);Q>=0&&(T[Q]=null,I[Q].disconnect(te))}for(let R=0;R<C.added.length;R++){let te=C.added[R],Q=T.indexOf(te);if(Q===-1){for(let fe=0;fe<I.length;fe++)if(fe>=T.length){T.push(te),Q=fe;break}else if(T[fe]===null){T[fe]=te,Q=fe;break}if(Q===-1)break}let W=I[Q];W&&W.connect(te)}}let X=new O,ue=new O;function ie(C,R,te){X.setFromMatrixPosition(R.matrixWorld),ue.setFromMatrixPosition(te.matrixWorld);let Q=X.distanceTo(ue),W=R.projectionMatrix.elements,fe=te.projectionMatrix.elements,_e=W[14]/(W[10]-1),L=W[14]/(W[10]+1),q=(W[9]+1)/W[5],N=(W[9]-1)/W[5],V=(W[8]-1)/W[0],z=(fe[8]+1)/fe[0],v=_e*V,M=_e*z,B=Q/(-V+z),ce=B*-V;if(R.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ce),C.translateZ(B),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),W[10]===-1)C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let ee=_e+B,A=L+B,b=v-ce,k=M+(Q-ce),J=q*L/A*ee,K=N*L/A*ee;C.projectionMatrix.makePerspective(b,k,J,K,ee,A),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function ye(C,R){R===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(R.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let R=C.near,te=C.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(te=m.depthFar)),H.near=w.near=E.near=R,H.far=w.far=E.far=te,(Y!==H.near||ne!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),Y=H.near,ne=H.far),H.layers.mask=C.layers.mask|6,E.layers.mask=H.layers.mask&3,w.layers.mask=H.layers.mask&5;let Q=C.parent,W=H.cameras;ye(H,Q);for(let fe=0;fe<W.length;fe++)ye(W[fe],Q);W.length===2?ie(H,E,w):H.projectionMatrix.copy(E.projectionMatrix),Ae(C,H,Q)};function Ae(C,R,te){te===null?C.matrix.copy(R.matrixWorld):(C.matrix.copy(te.matrixWorld),C.matrix.invert(),C.matrix.multiply(R.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=ki*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(C){return d[C]};let Le=null;function Z(C,R){if(h=R.getViewerPose(l||o),g=R,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Q=!1;te.length!==H.cameras.length&&(H.cameras.length=0,Q=!0);for(let L=0;L<te.length;L++){let q=te[L],N=null;if(p!==null)N=p.getViewport(q);else{let z=u.getViewSubImage(f,q);N=z.viewport,L===0&&(e.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(_))}let V=F[L];V===void 0&&(V=new Bt,V.layers.enable(L),V.viewport=new gt,F[L]=V),V.matrix.fromArray(q.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(q.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(N.x,N.y,N.width,N.height),L===0&&(H.matrix.copy(V.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Q===!0&&H.cameras.push(V)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let L=u.getDepthInformation(te[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(W&&W.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<te.length;L++){let q=te[L].camera;if(q){let N=d[q];N||(N=new Rs,d[q]=N);let V=u.getCameraImage(q);N.sourceTexture=V}}}}for(let te=0;te<I.length;te++){let Q=T[te],W=I[te];Q!==null&&W!==void 0&&W.update(Q,R,l||o)}Le&&Le(C,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}let G=new Zh;G.setAnimationLoop(Z),this.setAnimationLoop=function(C){Le=C},this.dispose=function(){}}},vi=new ln,I0=new dt;function P0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,xl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ft&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ft&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let _=y.program;n.uniformBlockBinding(S,_)}function l(S,y){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(S,I);let T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let _=i.createBuffer(),I=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=s[S.id],_=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,P=_.length;T<P;T++){let D=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,w=D.length;E<w;E++){let F=D[E];if(p(F,T,E,I)===!0){let H=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value],ne=0;for(let ae=0;ae<Y.length;ae++){let se=Y[ae],he=x(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,H+ne,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,ne),ne+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,_,I){let T=S.value,P=y+"_"+_;if(I[P]===void 0)return typeof T=="number"||typeof T=="boolean"?I[P]=T:I[P]=T.clone(),!0;{let D=I[P];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return I[P]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(S){let y=S.uniforms,_=0,I=16;for(let P=0,D=y.length;P<D;P++){let E=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,F=E.length;w<F;w++){let H=E[w],Y=Array.isArray(H.value)?H.value:[H.value];for(let ne=0,ae=Y.length;ne<ae;ne++){let se=Y[ne],he=x(se),X=_%I,ue=X%he.boundary,ie=X+ue;_+=ue,ie!==0&&I-ie<he.storage&&(_+=I-ie),H.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=he.storage}}}let T=_%I;return T>0&&(_+=I-T),S.__size=_,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var ea=class{constructor(e={}){let{canvas:t=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,I=!1;this._outputColorSpace=_t;let T=0,P=0,D=null,E=-1,w=null,F=new gt,H=new gt,Y=null,ne=new Ge(0),ae=0,se=t.width,he=t.height,X=1,ue=null,ie=null,ye=new gt(0,0,se,he),Ae=new gt(0,0,se,he),Le=!1,Z=new qi,G=!1,C=!1,R=new dt,te=new O,Q=new gt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function _e(){return D===null?X:1}let L=n;function q(U,oe){return t.getContext(U,oe)}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Te,!1),L===null){let oe="webgl2";if(L=q(oe,U),L===null)throw q(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let N,V,z,v,M,B,ce,ee,A,b,k,J,K,$,re,de,Se,ve,me,xe,Ee,Pe,Re,Be;function j(){N=new $m(L),N.init(),Pe=new A0(L,N),V=new Gm(L,N,e,Pe),z=new w0(L,N),V.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),v=new Qm(L),M=new d0,B=new T0(L,N,z,M,V,Pe,v),ce=new Xm(_),ee=new Jm(_),A=new rf(L),Re=new Hm(L,A),b=new Km(L,A,v,Re),k=new tg(L,b,A,v),me=new eg(L,V,B),de=new Wm(M),J=new u0(_,ce,ee,N,V,Re,de),K=new P0(_,M),$=new p0,re=new v0(N),ve=new km(_,ce,ee,z,k,p,c),Se=new S0(_,k,V),Be=new L0(L,v,V,z),xe=new Vm(L,N,v),Ee=new jm(L,N,v),v.programs=J.programs,_.capabilities=V,_.extensions=N,_.properties=M,_.renderLists=$,_.shadowMap=Se,_.state=z,_.info=v}j();let we=new Nl(_,L);this.xr=we,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let U=N.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=N.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(se,he,!1))},this.getSize=function(U){return U.set(se,he)},this.setSize=function(U,oe,pe=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=U,he=oe,t.width=Math.floor(U*X),t.height=Math.floor(oe*X),pe===!0&&(t.style.width=U+"px",t.style.height=oe+"px"),this.setViewport(0,0,U,oe)},this.getDrawingBufferSize=function(U){return U.set(se*X,he*X).floor()},this.setDrawingBufferSize=function(U,oe,pe){se=U,he=oe,X=pe,t.width=Math.floor(U*pe),t.height=Math.floor(oe*pe),this.setViewport(0,0,U,oe)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(ye)},this.setViewport=function(U,oe,pe,ge){U.isVector4?ye.set(U.x,U.y,U.z,U.w):ye.set(U,oe,pe,ge),z.viewport(F.copy(ye).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(Ae)},this.setScissor=function(U,oe,pe,ge){U.isVector4?Ae.set(U.x,U.y,U.z,U.w):Ae.set(U,oe,pe,ge),z.scissor(H.copy(Ae).multiplyScalar(X).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(U){z.setScissorTest(Le=U)},this.setOpaqueSort=function(U){ue=U},this.setTransparentSort=function(U){ie=U},this.getClearColor=function(U){return U.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(U=!0,oe=!0,pe=!0){let ge=0;if(U){let le=!1;if(D!==null){let Ce=D.texture.format;le=Ce===Mo||Ce===vo||Ce===yo}if(le){let Ce=D.texture.type,Ue=Ce===un||Ce===Kn||Ce===Ki||Ce===Qi||Ce===xo||Ce===_o,ke=ve.getClearColor(),Oe=ve.getClearAlpha(),qe=ke.r,Ze=ke.g,Ve=ke.b;Ue?(g[0]=qe,g[1]=Ze,g[2]=Ve,g[3]=Oe,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=qe,x[1]=Ze,x[2]=Ve,x[3]=Oe,L.clearBufferiv(L.COLOR,0,x))}else ge|=L.COLOR_BUFFER_BIT}oe&&(ge|=L.DEPTH_BUFFER_BIT),pe&&(ge|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ve.dispose(),$.dispose(),re.dispose(),M.dispose(),ce.dispose(),ee.dispose(),k.dispose(),Re.dispose(),Be.dispose(),J.dispose(),we.dispose(),we.removeEventListener("sessionstart",dn),we.removeEventListener("sessionend",Zl),jn.stop()};function Ie(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let U=v.autoReset,oe=Se.enabled,pe=Se.autoUpdate,ge=Se.needsUpdate,le=Se.type;j(),v.autoReset=U,Se.enabled=oe,Se.autoUpdate=pe,Se.needsUpdate=ge,Se.type=le}function Te(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function be(U){let oe=U.target;oe.removeEventListener("dispose",be),Fe(oe)}function Fe(U){We(U),M.remove(U)}function We(U){let oe=M.get(U).programs;oe!==void 0&&(oe.forEach(function(pe){J.releaseProgram(pe)}),U.isShaderMaterial&&J.releaseShaderCache(U))}this.renderBufferDirect=function(U,oe,pe,ge,le,Ce){oe===null&&(oe=W);let Ue=le.isMesh&&le.matrixWorld.determinant()<0,ke=wu(U,oe,pe,ge,le);z.setMaterial(ge,Ue);let Oe=pe.index,qe=1;if(ge.wireframe===!0){if(Oe=b.getWireframeAttribute(pe),Oe===void 0)return;qe=2}let Ze=pe.drawRange,Ve=pe.attributes.position,et=Ze.start*qe,rt=(Ze.start+Ze.count)*qe;Ce!==null&&(et=Math.max(et,Ce.start*qe),rt=Math.min(rt,(Ce.start+Ce.count)*qe)),Oe!==null?(et=Math.max(et,0),rt=Math.min(rt,Oe.count)):Ve!=null&&(et=Math.max(et,0),rt=Math.min(rt,Ve.count));let xt=rt-et;if(xt<0||xt===1/0)return;Re.setup(le,ge,ke,pe,Oe);let ht,ot=xe;if(Oe!==null&&(ht=A.get(Oe),ot=Ee,ot.setIndex(ht)),le.isMesh)ge.wireframe===!0?(z.setLineWidth(ge.wireframeLinewidth*_e()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(le.isLine){let Xe=ge.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*_e()),le.isLineSegments?ot.setMode(L.LINES):le.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else le.isPoints?ot.setMode(L.POINTS):le.isSprite&&ot.setMode(L.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))ot.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let Xe=le._multiDrawStarts,ft=le._multiDrawCounts,it=le._multiDrawCount,Vt=Oe?A.get(Oe).bytesPerElement:1,Si=M.get(ge).currentProgram.getUniforms();for(let Gt=0;Gt<it;Gt++)Si.setValue(L,"_gl_DrawID",Gt),ot.render(Xe[Gt]/Vt,ft[Gt])}else if(le.isInstancedMesh)ot.renderInstances(et,xt,le.count);else if(pe.isInstancedBufferGeometry){let Xe=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,ft=Math.min(pe.instanceCount,Xe);ot.renderInstances(et,xt,ft)}else ot.render(et,xt)};function nt(U,oe,pe){U.transparent===!0&&U.side===kt&&U.forceSinglePass===!1?(U.side=Ft,U.needsUpdate=!0,rr(U,oe,pe),U.side=Rn,U.needsUpdate=!0,rr(U,oe,pe),U.side=kt):rr(U,oe,pe)}this.compile=function(U,oe,pe=null){pe===null&&(pe=U),d=re.get(pe),d.init(oe),y.push(d),pe.traverseVisible(function(le){le.isLight&&le.layers.test(oe.layers)&&(d.pushLight(le),le.castShadow&&d.pushShadow(le))}),U!==pe&&U.traverseVisible(function(le){le.isLight&&le.layers.test(oe.layers)&&(d.pushLight(le),le.castShadow&&d.pushShadow(le))}),d.setupLights();let ge=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let Ce=le.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){let ke=Ce[Ue];nt(ke,pe,le),ge.add(ke)}else nt(Ce,pe,le),ge.add(Ce)}),d=y.pop(),ge},this.compileAsync=function(U,oe,pe=null){let ge=this.compile(U,oe,pe);return new Promise(le=>{function Ce(){if(ge.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&ge.delete(Ue)}),ge.size===0){le(U);return}setTimeout(Ce,10)}N.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qe=null;function vn(U){Qe&&Qe(U)}function dn(){jn.stop()}function Zl(){jn.start()}let jn=new Zh;jn.setAnimationLoop(vn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(U){Qe=U,we.setAnimationLoop(U),U===null?jn.stop():jn.start()},we.addEventListener("sessionstart",dn),we.addEventListener("sessionend",Zl),this.render=function(U,oe){if(oe!==void 0&&oe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(oe),oe=we.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,oe,D),d=re.get(U,y.length),d.init(oe),y.push(d),R.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),Z.setFromProjectionMatrix(R,an,oe.reversedDepth),C=this.localClippingEnabled,G=de.init(this.clippingPlanes,C),m=$.get(U,S.length),m.init(),S.push(m),we.enabled===!0&&we.isPresenting===!0){let Ce=_.xr.getDepthSensingMesh();Ce!==null&&ca(Ce,oe,-1/0,_.sortObjects)}ca(U,oe,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ue,ie),fe=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,fe&&ve.addToRenderList(m,U),this.info.render.frame++,G===!0&&de.beginShadows();let pe=d.state.shadowsArray;Se.render(pe,U,oe),G===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let ge=m.opaque,le=m.transmissive;if(d.setupLights(),oe.isArrayCamera){let Ce=oe.cameras;if(le.length>0)for(let Ue=0,ke=Ce.length;Ue<ke;Ue++){let Oe=Ce[Ue];$l(ge,le,U,Oe)}fe&&ve.render(U);for(let Ue=0,ke=Ce.length;Ue<ke;Ue++){let Oe=Ce[Ue];Jl(m,U,Oe,Oe.viewport)}}else le.length>0&&$l(ge,le,U,oe),fe&&ve.render(U),Jl(m,U,oe);D!==null&&P===0&&(B.updateMultisampleRenderTarget(D),B.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(_,U,oe),Re.resetDefaultState(),E=-1,w=null,y.pop(),y.length>0?(d=y[y.length-1],G===!0&&de.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ca(U,oe,pe,ge){if(U.visible===!1)return;if(U.layers.test(oe.layers)){if(U.isGroup)pe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(oe);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Z.intersectsSprite(U)){ge&&Q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(R);let Ue=k.update(U),ke=U.material;ke.visible&&m.push(U,Ue,ke,pe,Q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Z.intersectsObject(U))){let Ue=k.update(U),ke=U.material;if(ge&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Q.copy(U.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Q.copy(Ue.boundingSphere.center)),Q.applyMatrix4(U.matrixWorld).applyMatrix4(R)),Array.isArray(ke)){let Oe=Ue.groups;for(let qe=0,Ze=Oe.length;qe<Ze;qe++){let Ve=Oe[qe],et=ke[Ve.materialIndex];et&&et.visible&&m.push(U,Ue,et,pe,Q.z,Ve)}}else ke.visible&&m.push(U,Ue,ke,pe,Q.z,null)}}let Ce=U.children;for(let Ue=0,ke=Ce.length;Ue<ke;Ue++)ca(Ce[Ue],oe,pe,ge)}function Jl(U,oe,pe,ge){let le=U.opaque,Ce=U.transmissive,Ue=U.transparent;d.setupLightsView(pe),G===!0&&de.setGlobalState(_.clippingPlanes,pe),ge&&z.viewport(F.copy(ge)),le.length>0&&sr(le,oe,pe),Ce.length>0&&sr(Ce,oe,pe),Ue.length>0&&sr(Ue,oe,pe),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function $l(U,oe,pe,ge){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ge.id]===void 0&&(d.state.transmissionRenderTarget[ge.id]=new Qt(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?ji:un,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let Ce=d.state.transmissionRenderTarget[ge.id],Ue=ge.viewport||F;Ce.setSize(Ue.z*_.transmissionResolutionScale,Ue.w*_.transmissionResolutionScale);let ke=_.getRenderTarget(),Oe=_.getActiveCubeFace(),qe=_.getActiveMipmapLevel();_.setRenderTarget(Ce),_.getClearColor(ne),ae=_.getClearAlpha(),ae<1&&_.setClearColor(16777215,.5),_.clear(),fe&&ve.render(pe);let Ze=_.toneMapping;_.toneMapping=Un;let Ve=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),d.setupLightsView(ge),G===!0&&de.setGlobalState(_.clippingPlanes,ge),sr(U,pe,ge),B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce),N.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let rt=0,xt=oe.length;rt<xt;rt++){let ht=oe[rt],ot=ht.object,Xe=ht.geometry,ft=ht.material,it=ht.group;if(ft.side===kt&&ot.layers.test(ge.layers)){let Vt=ft.side;ft.side=Ft,ft.needsUpdate=!0,Kl(ot,pe,ge,Xe,ft,it),ft.side=Vt,ft.needsUpdate=!0,et=!0}}et===!0&&(B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce))}_.setRenderTarget(ke,Oe,qe),_.setClearColor(ne,ae),Ve!==void 0&&(ge.viewport=Ve),_.toneMapping=Ze}function sr(U,oe,pe){let ge=oe.isScene===!0?oe.overrideMaterial:null;for(let le=0,Ce=U.length;le<Ce;le++){let Ue=U[le],ke=Ue.object,Oe=Ue.geometry,qe=Ue.group,Ze=Ue.material;Ze.allowOverride===!0&&ge!==null&&(Ze=ge),ke.layers.test(pe.layers)&&Kl(ke,oe,pe,Oe,Ze,qe)}}function Kl(U,oe,pe,ge,le,Ce){U.onBeforeRender(_,oe,pe,ge,le,Ce),U.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(_,oe,pe,ge,U,Ce),le.transparent===!0&&le.side===kt&&le.forceSinglePass===!1?(le.side=Ft,le.needsUpdate=!0,_.renderBufferDirect(pe,oe,ge,le,U,Ce),le.side=Rn,le.needsUpdate=!0,_.renderBufferDirect(pe,oe,ge,le,U,Ce),le.side=kt):_.renderBufferDirect(pe,oe,ge,le,U,Ce),U.onAfterRender(_,oe,pe,ge,le,Ce)}function rr(U,oe,pe){oe.isScene!==!0&&(oe=W);let ge=M.get(U),le=d.state.lights,Ce=d.state.shadowsArray,Ue=le.state.version,ke=J.getParameters(U,le.state,Ce,oe,pe),Oe=J.getProgramCacheKey(ke),qe=ge.programs;ge.environment=U.isMeshStandardMaterial?oe.environment:null,ge.fog=oe.fog,ge.envMap=(U.isMeshStandardMaterial?ee:ce).get(U.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&U.envMap===null?oe.environmentRotation:U.envMapRotation,qe===void 0&&(U.addEventListener("dispose",be),qe=new Map,ge.programs=qe);let Ze=qe.get(Oe);if(Ze!==void 0){if(ge.currentProgram===Ze&&ge.lightsStateVersion===Ue)return Ql(U,ke),Ze}else ke.uniforms=J.getUniforms(U),U.onBeforeCompile(ke,_),Ze=J.acquireProgram(ke,Oe),qe.set(Oe,Ze),ge.uniforms=ke.uniforms;let Ve=ge.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Ql(U,ke),ge.needsLights=Au(U),ge.lightsStateVersion=Ue,ge.needsLights&&(Ve.ambientLightColor.value=le.state.ambient,Ve.lightProbe.value=le.state.probe,Ve.directionalLights.value=le.state.directional,Ve.directionalLightShadows.value=le.state.directionalShadow,Ve.spotLights.value=le.state.spot,Ve.spotLightShadows.value=le.state.spotShadow,Ve.rectAreaLights.value=le.state.rectArea,Ve.ltc_1.value=le.state.rectAreaLTC1,Ve.ltc_2.value=le.state.rectAreaLTC2,Ve.pointLights.value=le.state.point,Ve.pointLightShadows.value=le.state.pointShadow,Ve.hemisphereLights.value=le.state.hemi,Ve.directionalShadowMap.value=le.state.directionalShadowMap,Ve.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ve.spotShadowMap.value=le.state.spotShadowMap,Ve.spotLightMatrix.value=le.state.spotLightMatrix,Ve.spotLightMap.value=le.state.spotLightMap,Ve.pointShadowMap.value=le.state.pointShadowMap,Ve.pointShadowMatrix.value=le.state.pointShadowMatrix),ge.currentProgram=Ze,ge.uniformsList=null,Ze}function jl(U){if(U.uniformsList===null){let oe=U.currentProgram.getUniforms();U.uniformsList=is.seqWithValue(oe.seq,U.uniforms)}return U.uniformsList}function Ql(U,oe){let pe=M.get(U);pe.outputColorSpace=oe.outputColorSpace,pe.batching=oe.batching,pe.batchingColor=oe.batchingColor,pe.instancing=oe.instancing,pe.instancingColor=oe.instancingColor,pe.instancingMorph=oe.instancingMorph,pe.skinning=oe.skinning,pe.morphTargets=oe.morphTargets,pe.morphNormals=oe.morphNormals,pe.morphColors=oe.morphColors,pe.morphTargetsCount=oe.morphTargetsCount,pe.numClippingPlanes=oe.numClippingPlanes,pe.numIntersection=oe.numClipIntersection,pe.vertexAlphas=oe.vertexAlphas,pe.vertexTangents=oe.vertexTangents,pe.toneMapping=oe.toneMapping}function wu(U,oe,pe,ge,le){oe.isScene!==!0&&(oe=W),B.resetTextureUnits();let Ce=oe.fog,Ue=ge.isMeshStandardMaterial?oe.environment:null,ke=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ai,Oe=(ge.isMeshStandardMaterial?ee:ce).get(ge.envMap||Ue),qe=ge.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Ze=!!pe.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Ve=!!pe.morphAttributes.position,et=!!pe.morphAttributes.normal,rt=!!pe.morphAttributes.color,xt=Un;ge.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=_.toneMapping);let ht=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ot=ht!==void 0?ht.length:0,Xe=M.get(ge),ft=d.state.lights;if(G===!0&&(C===!0||U!==w)){let It=U===w&&ge.id===E;de.setState(ge,U,It)}let it=!1;ge.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ft.state.version||Xe.outputColorSpace!==ke||le.isBatchedMesh&&Xe.batching===!1||!le.isBatchedMesh&&Xe.batching===!0||le.isBatchedMesh&&Xe.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Xe.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Xe.instancing===!1||!le.isInstancedMesh&&Xe.instancing===!0||le.isSkinnedMesh&&Xe.skinning===!1||!le.isSkinnedMesh&&Xe.skinning===!0||le.isInstancedMesh&&Xe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Xe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Xe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Xe.instancingMorph===!1&&le.morphTexture!==null||Xe.envMap!==Oe||ge.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ze||Xe.morphTargets!==Ve||Xe.morphNormals!==et||Xe.morphColors!==rt||Xe.toneMapping!==xt||Xe.morphTargetsCount!==ot)&&(it=!0):(it=!0,Xe.__version=ge.version);let Vt=Xe.currentProgram;it===!0&&(Vt=rr(ge,oe,le));let Si=!1,Gt=!1,rs=!1,pt=Vt.getUniforms(),Jt=Xe.uniforms;if(z.useProgram(Vt.program)&&(Si=!0,Gt=!0,rs=!0),ge.id!==E&&(E=ge.id,Gt=!0),Si||w!==U){z.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",U.projectionMatrix),pt.setValue(L,"viewMatrix",U.matrixWorldInverse);let Ot=pt.map.cameraPosition;Ot!==void 0&&Ot.setValue(L,te.setFromMatrixPosition(U.matrixWorld)),V.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&pt.setValue(L,"isOrthographic",U.isOrthographicCamera===!0),w!==U&&(w=U,Gt=!0,rs=!0)}if(le.isSkinnedMesh){pt.setOptional(L,le,"bindMatrix"),pt.setOptional(L,le,"bindMatrixInverse");let It=le.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(L,"boneTexture",It.boneTexture,B))}le.isBatchedMesh&&(pt.setOptional(L,le,"batchingTexture"),pt.setValue(L,"batchingTexture",le._matricesTexture,B),pt.setOptional(L,le,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",le._indirectTexture,B),pt.setOptional(L,le,"batchingColorTexture"),le._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",le._colorsTexture,B));let $t=pe.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&me.update(le,pe,Vt),(Gt||Xe.receiveShadow!==le.receiveShadow)&&(Xe.receiveShadow=le.receiveShadow,pt.setValue(L,"receiveShadow",le.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(Jt.envMap.value=Oe,Jt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&oe.environment!==null&&(Jt.envMapIntensity.value=oe.environmentIntensity),Gt&&(pt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&Tu(Jt,rs),Ce&&ge.fog===!0&&K.refreshFogUniforms(Jt,Ce),K.refreshMaterialUniforms(Jt,ge,X,he,d.state.transmissionRenderTarget[U.id]),is.upload(L,jl(Xe),Jt,B)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(is.upload(L,jl(Xe),Jt,B),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&pt.setValue(L,"center",le.center),pt.setValue(L,"modelViewMatrix",le.modelViewMatrix),pt.setValue(L,"normalMatrix",le.normalMatrix),pt.setValue(L,"modelMatrix",le.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){let It=ge.uniformsGroups;for(let Ot=0,ha=It.length;Ot<ha;Ot++){let Qn=It[Ot];Be.update(Qn,Vt),Be.bind(Qn,Vt)}}return Vt}function Tu(U,oe){U.ambientLightColor.needsUpdate=oe,U.lightProbe.needsUpdate=oe,U.directionalLights.needsUpdate=oe,U.directionalLightShadows.needsUpdate=oe,U.pointLights.needsUpdate=oe,U.pointLightShadows.needsUpdate=oe,U.spotLights.needsUpdate=oe,U.spotLightShadows.needsUpdate=oe,U.rectAreaLights.needsUpdate=oe,U.hemisphereLights.needsUpdate=oe}function Au(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,oe,pe){let ge=M.get(U);ge.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),M.get(U.texture).__webglTexture=oe,M.get(U.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:pe,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,oe){let pe=M.get(U);pe.__webglFramebuffer=oe,pe.__useDefaultFramebuffer=oe===void 0};let Ru=L.createFramebuffer();this.setRenderTarget=function(U,oe=0,pe=0){D=U,T=oe,P=pe;let ge=!0,le=null,Ce=!1,Ue=!1;if(U){let Oe=M.get(U);if(Oe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),ge=!1;else if(Oe.__webglFramebuffer===void 0)B.setupRenderTarget(U);else if(Oe.__hasExternalTextures)B.rebindTextures(U,M.get(U.texture).__webglTexture,M.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Ve=U.depthTexture;if(Oe.__boundDepthTexture!==Ve){if(Ve!==null&&M.has(Ve)&&(U.width!==Ve.image.width||U.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(U)}}let qe=U.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);let Ze=M.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ze[oe])?le=Ze[oe][pe]:le=Ze[oe],Ce=!0):U.samples>0&&B.useMultisampledRTT(U)===!1?le=M.get(U).__webglMultisampledFramebuffer:Array.isArray(Ze)?le=Ze[pe]:le=Ze,F.copy(U.viewport),H.copy(U.scissor),Y=U.scissorTest}else F.copy(ye).multiplyScalar(X).floor(),H.copy(Ae).multiplyScalar(X).floor(),Y=Le;if(pe!==0&&(le=Ru),z.bindFramebuffer(L.FRAMEBUFFER,le)&&ge&&z.drawBuffers(U,le),z.viewport(F),z.scissor(H),z.setScissorTest(Y),Ce){let Oe=M.get(U.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe.__webglTexture,pe)}else if(Ue){let Oe=oe;for(let qe=0;qe<U.textures.length;qe++){let Ze=M.get(U.textures[qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,pe,Oe)}}else if(U!==null&&pe!==0){let Oe=M.get(U.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,pe)}E=-1},this.readRenderTargetPixels=function(U,oe,pe,ge,le,Ce,Ue,ke=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=M.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){z.bindFramebuffer(L.FRAMEBUFFER,Oe);try{let qe=U.textures[ke],Ze=qe.format,Ve=qe.type;if(!V.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}oe>=0&&oe<=U.width-ge&&pe>=0&&pe<=U.height-le&&(U.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(oe,pe,ge,le,Pe.convert(Ze),Pe.convert(Ve),Ce))}finally{let qe=D!==null?M.get(D).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(U,oe,pe,ge,le,Ce,Ue,ke=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=M.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe)if(oe>=0&&oe<=U.width-ge&&pe>=0&&pe<=U.height-le){z.bindFramebuffer(L.FRAMEBUFFER,Oe);let qe=U.textures[ke],Ze=qe.format,Ve=qe.type;if(!V.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,Ce.byteLength,L.STREAM_READ),U.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(oe,pe,ge,le,Pe.convert(Ze),Pe.convert(Ve),0);let rt=D!==null?M.get(D).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,rt);let xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await xh(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ce),L.deleteBuffer(et),L.deleteSync(xt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,oe=null,pe=0){let ge=Math.pow(2,-pe),le=Math.floor(U.image.width*ge),Ce=Math.floor(U.image.height*ge),Ue=oe!==null?oe.x:0,ke=oe!==null?oe.y:0;B.setTexture2D(U,0),L.copyTexSubImage2D(L.TEXTURE_2D,pe,0,0,Ue,ke,le,Ce),z.unbindTexture()};let Cu=L.createFramebuffer(),Iu=L.createFramebuffer();this.copyTextureToTexture=function(U,oe,pe=null,ge=null,le=0,Ce=null){Ce===null&&(le!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=le,le=0):Ce=0);let Ue,ke,Oe,qe,Ze,Ve,et,rt,xt,ht=U.isCompressedTexture?U.mipmaps[Ce]:U.image;if(pe!==null)Ue=pe.max.x-pe.min.x,ke=pe.max.y-pe.min.y,Oe=pe.isBox3?pe.max.z-pe.min.z:1,qe=pe.min.x,Ze=pe.min.y,Ve=pe.isBox3?pe.min.z:0;else{let $t=Math.pow(2,-le);Ue=Math.floor(ht.width*$t),ke=Math.floor(ht.height*$t),U.isDataArrayTexture?Oe=ht.depth:U.isData3DTexture?Oe=Math.floor(ht.depth*$t):Oe=1,qe=0,Ze=0,Ve=0}ge!==null?(et=ge.x,rt=ge.y,xt=ge.z):(et=0,rt=0,xt=0);let ot=Pe.convert(oe.format),Xe=Pe.convert(oe.type),ft;oe.isData3DTexture?(B.setTexture3D(oe,0),ft=L.TEXTURE_3D):oe.isDataArrayTexture||oe.isCompressedArrayTexture?(B.setTexture2DArray(oe,0),ft=L.TEXTURE_2D_ARRAY):(B.setTexture2D(oe,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,oe.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,oe.unpackAlignment);let it=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Si=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);let pt=U.isDataArrayTexture||U.isData3DTexture,Jt=oe.isDataArrayTexture||oe.isData3DTexture;if(U.isDepthTexture){let $t=M.get(U),It=M.get(oe),Ot=M.get($t.__renderTarget),ha=M.get(It.__renderTarget);z.bindFramebuffer(L.READ_FRAMEBUFFER,Ot.__webglFramebuffer),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Qn=0;Qn<Oe;Qn++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(U).__webglTexture,le,Ve+Qn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(oe).__webglTexture,Ce,xt+Qn)),L.blitFramebuffer(qe,Ze,Ue,ke,et,rt,Ue,ke,L.DEPTH_BUFFER_BIT,L.NEAREST);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||M.has(U)){let $t=M.get(U),It=M.get(oe);z.bindFramebuffer(L.READ_FRAMEBUFFER,Cu),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,Iu);for(let Ot=0;Ot<Oe;Ot++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,le,Ve+Ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,le),Jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,Ce,xt+Ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,Ce),le!==0?L.blitFramebuffer(qe,Ze,Ue,ke,et,rt,Ue,ke,L.COLOR_BUFFER_BIT,L.NEAREST):Jt?L.copyTexSubImage3D(ft,Ce,et,rt,xt+Ot,qe,Ze,Ue,ke):L.copyTexSubImage2D(ft,Ce,et,rt,qe,Ze,Ue,ke);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jt?U.isDataTexture||U.isData3DTexture?L.texSubImage3D(ft,Ce,et,rt,xt,Ue,ke,Oe,ot,Xe,ht.data):oe.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,Ce,et,rt,xt,Ue,ke,Oe,ot,ht.data):L.texSubImage3D(ft,Ce,et,rt,xt,Ue,ke,Oe,ot,Xe,ht):U.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ce,et,rt,Ue,ke,ot,Xe,ht.data):U.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ce,et,rt,ht.width,ht.height,ot,ht.data):L.texSubImage2D(L.TEXTURE_2D,Ce,et,rt,Ue,ke,ot,Xe,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Si),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rs),Ce===0&&oe.generateMipmaps&&L.generateMipmap(ft),z.unbindTexture()},this.initRenderTarget=function(U){M.get(U).__webglFramebuffer===void 0&&B.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?B.setTextureCube(U,0):U.isData3DTexture?B.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?B.setTexture2DArray(U,0):B.setTexture2D(U,0),z.unbindTexture()},this.resetState=function(){T=0,P=0,D=null,z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var js=new O;function nn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let l=.5*o/(o+a),h=1-js.angleTo(i)/c;return Math.sign(js[t])===1?h*l:a/(o+a)+l+l*(1-h)}var yn=class i extends qn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new O,l=new O,h=new O(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,x=new O,m=.5/o;for(let d=0,S=0;d<u.length;d+=3,S+=2)switch(c.fromArray(u,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[d+0]=h.x*Math.sign(c.x)+l.x*r,u[d+1]=h.y*Math.sign(c.y)+l.y*r,u[d+2]=h.z*Math.sign(c.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[S+0]=nn(x,l,"z","y",r,n),p[S+1]=1-nn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),p[S+0]=1-nn(x,l,"z","y",r,n),p[S+1]=1-nn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),p[S+0]=1-nn(x,l,"x","z",r,e),p[S+1]=nn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),p[S+0]=1-nn(x,l,"x","z",r,e),p[S+1]=1-nn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),p[S+0]=1-nn(x,l,"x","y",r,e),p[S+1]=1-nn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),p[S+0]=nn(x,l,"x","y",r,e),p[S+1]=1-nn(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var D0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},U0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function Ol(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((h,u)=>h-u).join(":");if(s.has(a))return null;s.add(a);let c=n[0]+(r%i+o%i)*t/2,l=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[c,l],ends:r%i===o%i?[[c-t/2,l],[c+t/2,l]]:[[c,l-t/2],[c,l+t/2]]}}).filter(Boolean)}function na({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!U0[o])throw Error("Unknown fence design");let a=D0[r];if(!a)throw Error("Unknown fence style");let c=new He;c.name="wood-fence";let l=Ol(i,e,{pitch:t,origin:n});c.userData={walls:l.map(d=>[d.a,d.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let h=new je({color:a.wood,roughness:.83}),u=new je({color:a.end,roughness:.8}),f=new je({color:a.grain,roughness:.95}),p=new je({color:"#665341",roughness:.7}),g=(d,S,y,_,I,T,P,D,E)=>{let w=new ze(new yn(S,y,_,3,I),T);return w.position.set(P,D,E),w.castShadow=w.receiveShadow=!0,d.add(w),w},x=(d,S,y=.12)=>{let _=new ze(new Nt(new Ut(S),16,y,4,!1),f);d.add(_)},m=new Map;for(let d of l){for(let[y,_]of d.ends){let I=y+":"+_;if(m.has(I))continue;let T=new He;if(T.name="fence-post",T.position.set(y,_,s-2),c.add(T),m.set(I,T),o==="logs"){let P=new ze(new en(3.25,3.65,34,18),h);P.rotation.x=Math.PI/2,P.position.z=17,P.castShadow=P.receiveShadow=!0,T.add(P);let D=new ze(new at(3.65,18,10),u);D.scale.z=.35,D.position.z=34,D.castShadow=!0,T.add(D)}else g(T,6.3,6.3,34,1.05,h,0,0,17),g(T,7.4,7.4,3.1,1.25,u,0,0,34);for(let P of[-1,1])for(let D=0;D<2;D++){let E=[];for(let w=0;w<=9;w++)E.push(new O(-1.7+D*2.5+Math.sin(w*.6+D)*.22,P*3.16,3+w*2.2));x(T,E,.1)}}let S=new He;if(S.name="fence-span",S.position.set(...d.center,s),d.a%i!==d.b%i&&(S.rotation.z=Math.PI/2),S.userData.cells=[d.a,d.b],c.add(S),o==="rails")for(let y of[16,24]){g(S,t-4.5,4.2,5.1,.95,h,0,0,y);for(let _ of[-1,1]){for(let T=0;T<2;T++){let P=[];for(let D=0;D<=12;D++){let E=-t/2+5+D*(t-10)/12;P.push(new O(E,_*2.12,y-.9+T*1.7+Math.sin(D*.65+y)*.2))}x(S,P,.1)}for(let T of[-t/2+5.8,t/2-5.8]){let P=new ze(new at(.56,8,6),p);P.scale.y=.3,P.position.set(T,_*2.28,y),S.add(P)}let I=[];for(let T=0;T<=24;T++){let P=T/24*Math.PI*2;I.push(new O(11+Math.cos(P)*1.6,_*2.14,y+Math.sin(P)*.65))}x(S,I,.1)}}else if(o==="picket"){for(let y of[15,25])g(S,t-4.5,3.2,3.6,.8,h,0,1.2,y);for(let y=0;y<5;y++){let _=(y-2)*(t-14)/5,I=7.2,T=new vt;T.moveTo(-I/2,11),T.lineTo(I/2,11),T.lineTo(I/2,27),T.bezierCurveTo(I/2,32,-I/2,32,-I/2,27),T.closePath();let P=new ze(new Yt(T,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),y%2?u:h);P.rotation.x=Math.PI/2,P.position.set(_,-.7,0),P.castShadow=P.receiveShadow=!0,S.add(P);for(let D of[15,25]){let E=new ze(new at(.48,8,6),p);E.scale.y=.3,E.position.set(_,-3.65,D),S.add(E)}x(S,[new O(_-1.2,-3.91,13),new O(_-1,-3.91,21),new O(_-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let T of[13,29])g(S,t-4.5,4,3.6,.8,h,0,0,T);let y=t-12,_=Math.atan2(16,y),I=Math.hypot(y,16);for(let T of[-1,1]){let P=new He;P.position.set(0,T*1.35,21),P.rotation.y=T*_,S.add(P),g(P,I,2.5,3.6,.75,u,0,0,0);for(let D of[-1,1])x(P,[new O(-I/2+2,D*1.27,-.5),new O(0,D*1.27,-.25),new O(I/2-2,D*1.27,-.55)],.1)}for(let T of[-1,1]){let P=new ze(new at(.65,10,8),p);P.scale.y=.3,P.position.set(0,T*2.75,21),S.add(P)}}else for(let y of[16,26]){let _=new ze(new en(2.3,2.3,t-4.5,18),h);_.rotation.z=Math.PI/2,_.position.z=y,_.castShadow=_.receiveShadow=!0,S.add(_);for(let I of[-1,1])for(let T of[-.9,.9]){let P=[];for(let D=0;D<=12;D++)P.push(new O(-t/2+4+D*(t-8)/12,I*Math.sqrt(2.3**2-T**2),y+T+Math.sin(D*.7)*.1));x(S,P,.1)}}}return{group:c,edges:l,dispose(){let d=new Set,S=new Set;c.traverse(y=>{y.geometry&&d.add(y.geometry),y.material&&S.add(y.material)}),d.forEach(y=>y.dispose()),S.forEach(y=>y.dispose())}}}var N0={rails:{name:"Spatz",body:"#ad8a61",head:"#a88561",breast:"#e9d8b5",wing:"#81664c",tail:"#806347"},picket:{name:"Rotkehlchen",body:"#9d9474",head:"#a29370",breast:"#e8955c",wing:"#7d795e",tail:"#716c54"},cross:{name:"Blaumeise",body:"#d9d77d",head:"#80afca",breast:"#eee396",wing:"#74a6c2",tail:"#6592ab"},logs:{name:"Zaunk\xF6nig",body:"#b48c60",head:"#b8936b",breast:"#ead5ad",wing:"#946c46",tail:"#8e653f"}},ia=i=>(i=ct.clamp(i,0,1),i*i*(3-2*i));function F0({design:i="rails",seed:e=73,scale:t=.85}={}){let n=N0[i];if(!n)throw Error("Unknown bird design");let s=new He;s.name="fence-bird",s.userData={species:n.name,seed:e},s.scale.setScalar(t);let r=[],o=[],a=new at(1,24,16);r.push(a);let c=Q=>{let W=new je({color:Q,roughness:.8});return o.push(W),W},l=c(n.body),h=c(n.head),u=c(n.breast),f=c(n.wing),p=c(n.tail),g=c("#3d332e"),x=c("#fff3d7"),m=c("#b28c4f");function d(Q,W,fe,_e,L,q,N,V){let z=new ze(a,W);return z.position.set(fe,_e,L),z.scale.set(q,N,V),z.castShadow=z.receiveShadow=!0,Q.add(z),z}let S=new He;s.add(S),d(S,l,0,0,6.5,4.8,5.7,5.5),d(S,u,0,-3.5,7,3.8,2.2,4);let y=[];for(let Q of[-1,1]){let W=d(S,f,Q*3.9,.4,6.8,1.3,4.4,3.5);W.rotation.x=-.2,W.rotation.y=Q*.15,y.push(W),i==="cross"&&d(S,x,Q*4.6,-.3,7,.35,2.5,.45)}let _=new He;_.position.set(0,4.2,4.1),_.rotation.x=i==="logs"?.8:.2,S.add(_);for(let Q of[-1,0,1]){let W=d(_,p,Q*.85,3.2,0,1.1,i==="logs"?3:4.5,.6);W.rotation.z=Q*.1}let I=new He;if(I.position.set(0,-2,11.4),S.add(I),d(I,h,0,0,0,4.1,3.8,4),i==="cross"&&(d(I,x,0,-2.1,-.1,3.5,1.8,2.6),d(I,h,0,0,2.8,3.2,2.8,1.3)),i==="picket"&&d(I,u,0,-2.5,-1.4,3.3,1.4,2.6),i==="logs")for(let Q of[-1,1])d(I,x,Q*2.7,-1.9,1.4,1.2,1,.35);let T=[];for(let Q of[-1,1]){let W=d(I,g,Q*2.35,-3.03,.7,.82,.48,.94);T.push(W),d(I,x,Q*2.35-.19,-3.45,1.02,.23,.12,.26)}let P=new Cs(.85,2.5,12);r.push(P);let D=new ze(P,m);D.rotation.z=Math.PI,D.position.set(0,-4.2,-.4),D.castShadow=!0,I.add(D);for(let Q of[-1,1]){let W=new Ut([new O(Q*1.8,.1,2.3),new O(Q*1.8,-.2,.5),new O(Q*1.8,-1.6,.25)]),fe=new Nt(W,10,.26,6,!1);r.push(fe),s.add(new ze(fe,m));for(let _e of[-.5,.5])d(s,m,Q*1.8+_e,-.8,.25,.22,1,.22)}let E=new He;E.name="bird-flight-rig";for(let Q of[...s.children])E.add(Q);s.add(E);let w=-100,F=null,H=0,Y=3.5,ne=0,ae=null,se=0,he=0,X=!0,ue=-10,ie=0,ye=3+e%7*.3;function Ae(){return ie-w<3.8+Y||ie-ue<3.8?!1:(ue=ie,ye=ie+22,!0)}function Le(Q){return ie-w<3.8+Y||ie-ue<3.8?!1:(F=typeof Q=="function"?Q:Q.clone(),H=0,ae=null,se=0,Y=3.5+R(++ne+13)*4.5,s.userData.stayDuration=Y,w=ie,ye=ie+Y+24,!0)}function Z(){let Q=ie-w;return!F||Q<0||Q>=1.8+Y?!1:(ae=E.position.clone(),se=he,w=ie-(1.8+Y),!0)}let G=Q=>(Q=ct.clamp(Q,0,1),Q*Q*Q*(Q*(Q*6-15)+10));function C(Q){let W=ae||(typeof F=="function"?F():F),fe=new O;E.rotation.z=H;let _e,L,q=0,N=0;if(Q<1.8)L=G(Q/1.8),_e=new Ln(fe,new O(W.x*.18-8,W.y*.18,24),new O(W.x*.85,W.y*.8,W.z+19),W),N=Math.sin(Math.PI*ct.clamp(Q/1.8,0,1))*.75+.2;else if(Q<1.8+Y){E.position.copy(W);let z=Q-1.8;for(let B=0;B<5;B++){let ce=.5+B*1.45+R(ne*11+B)*.45,ee=.19+R(B+22)*.1;ce<Y-.3&&(q+=Math.exp(-(((z-ce)/ee)**2))*(.75+R(B+ne)*.25))}let v=(R(ne+80)-.5)*Math.PI,M=Math.atan2(Math.sin(v-H),Math.cos(v-H));return H+=M*.025,E.rotation.z=H,{peck:q,flap:0}}else L=G((Q-1.8-Y)/2),_e=new Ln(W,new O(W.x-12,W.y*.72,W.z+30),new O(-10,8,17),fe),N=Math.sin(Math.PI*ct.clamp((Q-1.8-Y)/2,0,1))*.8+.15;E.position.copy(_e.getPoint(L));let V=_e.getTangent(L);if(Math.hypot(V.x,V.y)>.01){let z=Math.atan2(V.x,-V.y),v=Math.atan2(Math.sin(z-H),Math.cos(z-H));H+=v*.17,E.rotation.z=H}return E.rotation.x=-N*.12,E.rotation.y=Math.sin(Q*1.6)*N*.07,Q>3.35+Y&&(E.rotation.z*=1-G((Q-3.35-Y)/.45)),q=se*(1-G((Q-1.8-Y)/.25)),{peck:q,flap:N}}let R=Q=>{let W=Math.sin(Q*12.9898+e*78.233)*43758.5453;return W-Math.floor(W)};function te(Q){let W=Math.max(0,Q);ie=W,X&&W>=ye&&(ue=W,ye=W+20+(e+Math.floor(W))%7);let fe=W-ue,_e=ct.clamp(fe/3.6,0,1),L=fe>=0&&fe<3.6?Math.sin(Math.PI*_e)**2:0,q=L,N=Math.sin(_e*Math.PI*2);E.position.set(q*38,N*q*15,L*23);let V=ia((_e-.3)/.4)*(1-ia((_e-.84)/.16));E.rotation.set(-L*.12,N*L*.1,V*Math.PI),s.userData.flightAge=fe,s.userData.fluttering=L>0;let z=Math.floor(W/6.7),v=W%6.7,M=1.5+R(z)*2,B=ia((v-M)/.65)*(1-ia((v-M-1.1)/.8)),ce=(R(z+51)-.5)*.9,ee=W-w,A=F&&ee>=0&&ee<3.8+Y,b=0,k=L;if(A){let re=C(ee);b=re.peck,k=re.flap}he=b,s.userData.groundVisit=A?ee:-1,I.rotation.z=ce*B,I.rotation.x=Math.sin(W*.8+e)*.025+B*.04,I.rotation.x+=b*.8,S.rotation.x=b*.82,S.scale.set(1+Math.sin(W*1.9+e)*.008,1,1+Math.sin(W*1.9+e)*.012);let J=(W+R(7)*5)%5.4,K=J>4.9&&J<5.04;T.forEach(re=>re.scale.z=K?.15:.94);let $=Math.exp(-(((v-5.8)/.22)**2))*Math.sin(W*35)*.045;y.forEach((re,de)=>re.rotation.y=(de?1:-1)*(.15+$+k*(.45+Math.sin((A?ee:fe)*32)*.95))),_.rotation.z=Math.sin(W*.65+e)*.025}return te(0),{group:s,update:te,flutter:Ae,landAndPeck:Le,returnToPerch:Z,setAutoFlutter:Q=>X=!!Q,dispose(){r.forEach(Q=>Q.dispose()),o.forEach(Q=>Q.dispose())}}}function Qh(i={}){let e=na(i),t=null;if(i.bird!==!1){let h=e.group.children.filter(u=>u.name==="fence-post").sort((u,f)=>u.position.y-f.position.y||u.position.x-f.position.x);h.length&&(t=F0({design:i.design||"rails",seed:i.seed||73}),t.group.position.copy(h[Math.min(h.length-1,Math.max(0,Math.floor(i.perchIndex||0)))].position),t.group.position.z+=35.6,e.group.add(t.group))}let n=8,s=null,r=0,o=!!(i.groundTarget||i.groundTargets);t&&o&&t.setAutoFlutter(!1);function a(){return i.groundTargets?i.groundTargets():i.groundTarget?[{cell:null,position:i.groundTarget()}]:[]}function c(){if(!t||!o)return!1;let h=a().filter(d=>d.position&&!i.isUnsafe?.(d.cell));if(!h.length)return!1;let u=h[((i.seed||73)+r*7)%h.length],f=new O(...u.position),p=[[-22,18],[22,18],[22,-18],[-22,-18]];if(u.center){let d=p[r%4];f.x+=d[0],f.y+=d[1]}let g=f.clone(),x=()=>{let d=a().find(y=>y.cell===u.cell),S=g.clone();return d?.position&&(S.z=d.position[2]),S.sub(t.group.position).divideScalar(t.group.scale.x)},m=t.landAndPeck(x);return m&&(s=u.cell,t.group.userData.landingCell=s,r++),m}let l=e.dispose;return{...e,bird:t,update:h=>{i.isUnsafe?.(s)&&t?.returnToPerch(),o&&i.autoGround!==!1&&h>=n&&(c()?n=h+28+r*13%15:n=h+5),t?.update(h)},flutter:()=>t?.flutter(),groundVisit:c,returnToPerch:()=>t?.returnToPerch(),dispose(){t&&(t.group.removeFromParent(),t.dispose()),l()}}}function eu({n:i=5,seed:e=73,flowerShare:t=40,clustering:n=75,cells:s=null}={}){let r=e,o=()=>(r=r*1664525+1013904223>>>0)/4294967296,a=["flowers","pearls","bouquet","bells","butterdots"],c=Math.floor(o()*a.length),l=[a[c],a[(c+1+Math.floor(o()*(a.length-1)))%a.length]],h=Array.from({length:3},(S,y)=>({x:o()*(i-1),y:o()*(i-1),kind:l[y%2]})),u=Math.min(1,Math.max(0,n/100)),f=["calm","classic","rich","tuft","moss","fine","cloverNest"],p=(s||Array.from({length:i*i},(S,y)=>y)).map(S=>{let y=S%i,_=Math.floor(S/i),I=h[0],T=1/0;for(let P of h){let D=Math.hypot(y-P.x,_-P.y);D<T&&(T=D,I=P)}return{i:S,score:(1-u)*o()+u*Math.exp(-T*T/3),kind:I.kind,visitor:o(),base:f[Math.floor(o()*f.length)]}}),g=Math.round(p.length*Math.min(100,Math.max(0,t))/100),x=new Set([...p].sort((S,y)=>y.score-S.score||S.i-y.i).slice(0,g).map(S=>S.i)),m=0,d=Array(i*i).fill(null);for(let S of p)d[S.i]=x.has(S.i)?S.visitor<.06&&m++<1?"flutter":S.visitor>=.06&&S.visitor<.12&&m++<1?"visitors":S.kind:S.base;return d}var Bl=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),zl={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function O0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new pn(t)}function Qs(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=zl[i];if(!n)throw Error("Unknown tile "+i);let s=new He,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=(p,g={})=>new je({color:p,roughness:.75,...g}),a=(p,g,x=0,m=0,d=0)=>{let S=new ze(p,g);return S.position.set(x,m,d),S.castShadow=S.receiveShadow=!0,s.add(S),S},c=o(n.color,{bumpMap:O0(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),l=n.height+3.5,h,u;if(n.kind==="earth"){let p=73.5,g=5,x=-p/2,m=p/2,d=new vt;d.moveTo(x+g,x),d.lineTo(m-g,x),d.quadraticCurveTo(m,x,m,x+g),d.lineTo(m,m-g),d.quadraticCurveTo(m,m,m-g,m),d.lineTo(x+g,m),d.quadraticCurveTo(x,m,x,m-g),d.lineTo(x,x+g),d.quadraticCurveTo(x,x,x+g,x),d.closePath(),h=new Yt(d,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else h=new yn(78.5,78.5,l,4,7.5),u=(n.height-3.5)/2;let f=a(h,c,0,0,u);if(f.userData.surface=!0,!t)if(n.kind==="earth"){let p=[o("#c59b6b"),o("#98714c"),o("#dbb78a")];for(let g=0;g<n.pebbles;g++){let x=(r()-.5)*59,m=(r()-.5)*59,d=.8+r()*1.2,S=a(new at(1,9,6),p[g%3],x,m,n.height-.25);S.scale.set(d*1.6,d,d*.55),S.rotation.z=r()*6}for(let g=0;g<22;g++){let x=a(new at(1,8,6),c,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;x.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let p=[o("#d3f471"),o("#b1e443"),o("#87bf24")],g=(x,m,d)=>{let S=new vt;return S.moveTo(-d,0),S.quadraticCurveTo(-d*.8,x*.6,m,x),S.quadraticCurveTo(d*1.1,x*.45,d,0),S.closePath(),new Yt(S,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<n.tufts;x++){let m=(r()-.5)*59,d=(r()-.5)*59;for(let S=0;S<3;S++){let y=n.bladeHeight*(.6+r()*.4),_=a(g(y,(S-1)*y*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),p[S],m+(S-1)*1.8,d,n.height-.15);_.rotation.x=Math.PI/2,_.rotateOnWorldAxis(new O(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let x=0;x<6;x++){let m=(r()-.5)*50,d=(r()-.5)*50;for(let S=0;S<3;S++){let y=S*Math.PI*2/3,_=a(new at(1,12,8),p[x%2],m+Math.cos(y)*2.3,d+Math.sin(y)*2.3,n.height+1.7);_.scale.set(3.3,2.6,.9),_.rotation.z=y}}c.emissive.set("#4c790c"),c.emissiveIntensity=.055}else{let p=o("#9fc53b");for(let g=0;g<4;g++){let x=g*Math.PI/2+.3,m=a(new at(1,12,8),p,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=x}}return n.kind!=="earth"&&n.kind!=="reference"&&(c.emissive.set("#4c790c"),c.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:Bl},s}function er(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var kl={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function sa(i,{seed:e=73}={}){let t=kl[i];if(!t)throw Error("Unknown meadow "+i);let n=Qs("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(T=>T.userData.surface),r=new He;for(let T of[...n.children])T!==s&&r.add(T);er(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new at(1,12,8),c=T=>new je({color:T,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],h=[],u=(T,P,D,E,w)=>{let F=new ze(T,P);return F.position.set(D,E,w),F.castShadow=F.receiveShadow=!0,n.add(F),F};function f(T,P,D,E,w=3.3,F=2.6){let H=u(a,l[1],T,P,D);return H.scale.set(w,F,.85),H.rotation.z=E,H}for(let T=0;T<t.clover;T++){let P=(o()-.5)*52,D=(o()-.5)*52;for(let E=0;E<3;E++){let w=E*Math.PI*2/3+o()*.12;f(P+Math.cos(w)*2.3,D+Math.sin(w)*2.3,19.7,w)}}function p(T,P,D){for(let E=0;E<3;E++){let w=new vt,F=(E-1)*D*.35;w.moveTo(-1,0),w.quadraticCurveTo(-.8,D*.65,F,D),w.quadraticCurveTo(1,D*.45,1,0),w.closePath();let H=new Yt(w,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),Y=u(H,l[E],T+(E-1)*1.6,P,17.8);Y.rotation.x=Math.PI/2,Y.rotateOnWorldAxis(new O(0,0,1),.6)}}for(let T=0;T<t.tufts;T++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=c("#fff3c4"),x=c("#f6b7a0"),m=c("#efb52e"),d=c("#709e29"),S=c("#edbd43"),y=c("#63502a"),_=new je({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let T=0;T<(t.flowers||0);T++){let P=T?-16:16,D=T?-14:12,E=T?24:25.5,w=u(new en(.6,.85,E-18,8),d,P,D,(18+E)/2);w.rotation.x=Math.PI/2;for(let H=0;H<5;H++){let Y=H*Math.PI*2/5,ne=u(a,T?x:g,P+Math.cos(Y)*3,D+Math.sin(Y)*3,E);ne.scale.set(3.2,1.8,.8),ne.rotation.z=Y}if(u(a,m,P,D,E+.7).scale.set(1.9,1.9,1.2),f(P-2,D,20.5,-.5,3.2,1.4),t.insects)for(let H=0;H<t.insects;H++){let Y=new He;n.add(Y);let ne=new ze(a,S);ne.scale.set(.85,1.3,.8),Y.add(ne);let ae=new ze(a,y);ae.position.y=1.2,ae.scale.setScalar(.6),Y.add(ae);let se=[];for(let he of[-1,1]){let X=new ze(a,_);X.position.set(he*1,0,.5),X.scale.set(1.8,.75,.25),X.rotation.z=he*.35,Y.add(X),se.push(X)}h.push({insect:Y,wings:se,x:P,y:D,phase:H*3.14,radius:8+H*2,z:E+5+H})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function I(T){for(let P of h){let D=T*.85+P.phase;P.insect.position.set(P.x+Math.cos(D)*P.radius,P.y+Math.sin(D)*P.radius*.65,P.z+Math.sin(T*1.8+P.phase)*1.2),P.insect.rotation.z=D,P.wings.forEach((E,w)=>E.rotation.y=Math.sin(T*28)*(w?1:-1)*.45)}}return I(0),{group:n,update:I,dispose(){er(n)}}}var B0={moss:{name:"Weiche Moospolster"},fine:{name:"Feine Wiesengr\xE4ser"},pearls:{name:"Kleine Wei\xDFbl\xFCten"},cloverNest:{name:"Kleeinseln"},flutter:{name:"Schmetterlingsbesuch"},bouquet:{name:"Bl\xFCtennest"},bells:{name:"Kleine Glockenblumen"},butterdots:{name:"Goldene Sternchen"}};function tu(i,{seed:e=73}={}){if(!B0[i])throw Error("Unknown meadow extra "+i);let t=sa(i==="cloverNest"?"calm":"classic",{seed:e}),n=t.group,s=e,r=()=>(s=s*1664525+1013904223>>>0)/4294967296,o=new at(1,16,10),a=new je({color:"#b1e443",roughness:.85}),c=new je({color:"#d3f471",roughness:.85}),l=new je({color:"#fff3c4",roughness:.75}),h=new je({color:"#efb52e",roughness:.75});function u(f,p,g,x,m,d,S,y=0){let _=new ze(o,f);return _.position.set(p,g,x),_.scale.set(m,d,S),_.rotation.z=y,_.castShadow=_.receiveShadow=!0,n.add(_),_}if(i==="moss")for(let[f,p]of[[-18,15],[17,-16]])for(let g=0;g<8;g++){let x=r()*6.28,m=r()*6;u(g%3?a:c,f+Math.cos(x)*m,p+Math.sin(x)*m,19.1,2.5+r()*1.5,2+r(),.8+r()*.6)}if(i==="fine")for(let[f,p]of[[-19,-15],[19,16],[-15,20]])for(let g=0;g<5;g++){let x=4+r()*4,m=(g-2)*1.5,d=new Ut([new O(f+g*.6,p,18.5),new O(f+g*.6+m*.35,p+.3,18.5+x*.7),new O(f+g*.6+m,p+1,18.5+x)]),S=new Nt(d,10,.3,5,!1),y=new ze(S,g%2?a:c);y.castShadow=y.receiveShadow=!0,n.add(y)}if(i==="pearls")for(let[f,p]of[[-19,18],[-14,13],[18,-16]]){let g=f+(r()-.5)*5,x=p+(r()-.5)*5;u(a,g,x,20,.45,.45,2);for(let m=0;m<5;m++){let d=m*6.28/5;u(l,g+Math.cos(d)*1.8,x+Math.sin(d)*1.8,22,1.8,1,.55,d)}u(h,g,x,22.5,1,1,.7)}if(i==="cloverNest")for(let[f,p]of[[-17,15],[17,-15]])for(let g=0;g<4;g++){let x=g*2.4,m=2+g*1.4,d=f+Math.cos(x)*m,S=p+Math.sin(x)*m;for(let y=0;y<3;y++){let _=y*6.28/3;u(a,d+Math.cos(_)*2.1,S+Math.sin(_)*2.1,19.8+g*.08,3,2.4,.8,_)}}if(["bouquet","bells","butterdots"].includes(i)){let f=new je({color:"#efb7b0",roughness:.8}),p=new je({color:"#b7a4de",roughness:.8}),g=[[-22,17],[-13,20],[-18,8],[18,-15],[24,-9],[12,-22],[10,15]],x=5+Math.floor(r()*3),m=(r()-.5)*.38;for(let[d,[S,y]]of g.slice(0,x).entries()){let _=S*Math.cos(m)-y*Math.sin(m)+(r()-.5)*3,I=S*Math.sin(m)+y*Math.cos(m)+(r()-.5)*3,T=21.7+r()*2.2,P=r()*6.28,D=.85+r()*.25,E=n.children.length;if(u(a,_,I,20,.4,.4,2),i==="bells"){let F=u(p,_,I,T,2.3,2.3,2.5);for(let H=0;H<5;H++){let Y=H*6.28/5+P;u(p,_+Math.cos(Y)*1.8,I+Math.sin(Y)*1.8,T-1.2,1.3,1,.65,Y)}u(l,_,I,T-2.3,.7,.7,.4)}else{for(let F=0;F<(i==="butterdots"?5:7);F++){let H=F*6.28/(i==="butterdots"?5:7)+P;u(i==="butterdots"?h:d%2?f:l,_+Math.cos(H)*2.1,I+Math.sin(H)*2.1,T,2.2*D,1.2*D,.6,H)}u(h,_,I,T+.6,1.15,1.15,.7)}let w=new He;w.position.set(_,I,18);for(let F of n.children.slice(E))F.position.sub(w.position),w.add(F);w.rotation.set((r()-.5)*.14,(r()-.5)*.14,0),n.add(w)}}if(n.userData.meadowVariant=i,n.userData.decorationSeed=e,i==="flutter"){for(let[m,d]of[[-17,13],[18,-14]]){let S=m+(r()-.5)*5,y=d+(r()-.5)*5;for(let _=0;_<5;_++){let I=_*6.28/5;u(l,S+Math.cos(I)*2,y+Math.sin(I)*2,22,2,1.2,.6,I)}u(h,S,y,22.6,1.2,1.2,.8)}let f=new He;n.add(f);let p=new ze(o,new je({color:"#775238",roughness:.8}));p.scale.set(.5,2,.5),f.add(p);let g=[];for(let m of[-1,1]){let d=new He;f.add(d);let S=new ze(o,new je({color:"#f1c777",roughness:.75}));S.position.x=m*2,S.scale.set(2.8,2.2,.25),d.add(S),g.push({hinge:d,side:m})}let x=t.update;t.update=m=>{x(m),f.position.set(Math.sin(m*.43)*17,Math.sin(m*.69+.4)*13,28+Math.sin(m*.8)*2),f.rotation.z=Math.atan2(Math.cos(m*.69+.4)*13*.69,Math.cos(m*.43)*17*.43)-Math.PI/2;for(let{hinge:d,side:S}of g)d.rotation.y=S*(.25+Math.sin(m*14)*.65)},n.userData.animated=!0}if(i==="fine"){let f=n.children.filter(g=>g.geometry?.type==="TubeGeometry").map((g,x)=>({mesh:g,i:x})),p=t.update;t.update=g=>{p(g);for(let{mesh:x,i:m}of f)x.rotation.y=Math.sin(g*1.1+m*.45)*.045,x.rotation.x=Math.sin(g*.8+m*.3)*.025},n.userData.animated=!0}return t.update(0),t}var Hl=new WeakMap;function Vl(i){if(Hl.has(i))return Hl.get(i);let e=i.solution.filter(s=>!i.marks.includes(s)).sort((s,r)=>s-r),t=i.meadowSeed||[...i.id||"garden"].reduce((s,r)=>s*31+r.charCodeAt(0)>>>0,73),n=eu({n:i.n,seed:t,cells:e,flowerShare:40,clustering:75});for(let s of i.marks)n[s]="calm";return Hl.set(i,n),n}function nu(i,e){let t=Vl(i)[e]||"classic",n=(i.meadowSeed||73)+e*19,s=kl[t]?sa(t,{seed:n}):tu(t,{seed:n});if(["flowers","visitors"].includes(t)){let r=n%4*Math.PI/2;for(let o of s.group.children)if(!o.userData.surface){let a=o.position.x,c=o.position.y;o.position.set(a*Math.cos(r)-c*Math.sin(r),a*Math.sin(r)+c*Math.cos(r),o.position.z),o.rotation.z+=r}}return s}function iu(i){if(!i.fence||!i.walls?.length)return null;let e=[...i.id||"garden"].reduce((c,l)=>c*31+l.charCodeAt(0)>>>0,73);if(e%4===0)return null;let t=Vl(i),n=new Set(["flowers","visitors","pearls","flutter","bouquet","bells","butterdots"]),s=new Map;for(let c of Ol(i.n,i.walls,{origin:[60,-60]}))for(let[l,h]of c.ends)s.set(l+":"+h,{x:l,y:h});let r=[...s.values()].sort((c,l)=>c.y-l.y||c.x-l.x),o=[...i.solution].sort((c,l)=>c-l),a=null;for(let[c,l]of r.entries()){let h=o.filter(u=>!i.marks.includes(u)&&!n.has(t[u])&&Math.hypot(u%i.n*80+60-l.x,-Math.floor(u/i.n)*80-60-l.y)<58);h.length&&(!a||h.length>a.cells.length)&&(a={seed:e,perchIndex:c,cells:h})}return a}function su(i,e,t,n=!1){if(e==null)return!1;if(n||!i.solution.includes(e)||i.marks.includes(e))return!0;let s=t.at(-1)??i.marks[0];return Math.abs(s%i.n-e%i.n)+Math.abs(Math.floor(s/i.n)-Math.floor(e/i.n))<=1}function tr(i=-1,e="hops"){let t=f=>(f=Math.max(0,Math.min(1,f)),f*f*f*(f*(f*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="compact"){if(i>1.25)return n;let f=t(i/.22)*(1-t((i-.65)/.55));return{...n,active:!0,look:t(i/.55),happy:f,tuck:f*.6,lift:f*.25,pitch:-f*.018,roll:Math.sin(i*5)*f*.012,antenna:f*.18,squash:f*.008}}if(e==="gentle"){let f=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=f*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:f*1.35,happy:f,roll:p,pitch:-f*.035,squash:f*.012,antenna:f*.3+Math.sin(i*8)*f*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(f,p,g)=>{let x=(i-f)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(f,p)=>{let g=(i-f)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},c=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,l=a(.72,.3),h=a(1.35,.3),u=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:l*.055+h*.035+u*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:c*.65+r*.045,pitch:l*.035-r*.007-c*.013,roll:r*.005*Math.sin(i*3+.6)+c*.012}}function Gl(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,c=o<.66,l,h=0,u=0;if(c)l=-a/2+o/.66*a,u=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,x=g*g*(3-2*g);l=a/2-a*x,h=Math.sin(g*Math.PI)**1.25*1.8,u=-Math.sin(g*Math.PI)*.2}let f=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,f*f*(3-2*f));return{y:l*p,z:h*p,pitch:u*p,stance:c,phase:o,fade:p}}function Wl(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,c=0,l=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,u=h*h*(3-2*h);a=o/2-o*u,c=Math.sin(h*Math.PI)*1.3,l=-Math.sin(h*Math.PI)*.16}return{y:a,z:c,pitch:l,stance:r<.66,phase:r}}var z0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}};function ru({seed:i=913,presentation:e="ground"}={}){let t=new He,n=new He,s=new He;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(N,V=.8)=>new je({color:N,roughness:V}),a=o("#dfa578"),c=o("#ffe5bd"),l=o("#e69b88"),h=o("#302529",.3),u=o("#fff9e7",.3),f=o("#428f8d",.35);function p(N,V,z,v,M,B,ce,ee){let A=new ze(new at(1,40,28),V);return A.position.set(z,v,M),A.scale.set(B,ce,ee),A.castShadow=A.receiveShadow=!0,N.add(A),A}let g=e==="peek"?22e3:44e3,x=g*20;function m(N,V){let z=new N(V),v=0;return{push(...M){for(let B=0;B<M.length;B++)z[v++]=M[B]},get length(){return v},view(){return z.subarray(0,v)}}}let d=m(Float64Array,x),S=m(Float32Array,x*3),y=m(Float32Array,x*3),_=m(Float32Array,x*3),I=m(Float32Array,x*2),T=m(Uint32Array,g*48),P=new Ge("#d5a078"),D=new Ge("#ffe2b9");function E(N,V,z,v,M=!1){let B=p(s,a,...N,...V);B.name="original-body-part",B.userData.bodyCenter=[...N],B.userData.bodyRadii=[...V];for(let ce=0;ce<z;ce++){let ee=r()*2-1,A=r()*Math.PI*2,b=Math.sqrt(1-ee*ee),k=new O(b*Math.cos(A),b*Math.sin(A),ee),J=new O(k.x*V[0],k.y*V[1],k.z*V[2]).add(new O(...N));if(J.z<1)continue;let K=M&&k.y<-.4;if(K){let Ee=[-5.6,5.6].some(Re=>((J.x-Re)/4.6)**2+((J.z-23.4)/5.2)**2<1),Pe=(J.x/5.9)**2+((J.z-16.5)/3.3)**2<1;if(Ee||Pe)continue}let $=new O(k.x/V[0],k.y/V[1],k.z/V[2]).normalize(),re=new O(0,0,1);Math.abs($.z)>.9&&re.set(1,0,0);let de=new O().crossVectors($,re).normalize(),Se=new O(k.x*.45,k.y*.35,-.46),ve=v*(K?.2:1)*(.6+r()*.65),me=.075+r()*.13,xe=r()*.22;for(let Ee=0;Ee<2;Ee++){let Pe=Ee?new O().crossVectors($,de).normalize():de,Re=S.length/3;for(let Be=0;Be<=4;Be++){let j=Be/4,we=ve*j*.88,Ie=ve*j*j*.9,Ne=J.x+$.x*we+Se.x*Ie,Te=J.y+$.y*we+Se.y*Ie,be=J.z+$.z*we+Se.z*Ie,Fe=me*(1-j*.93),We=.28+j*.58+xe;for(let nt of[-1,1]){let Qe=Fe*nt;S.push(Ne+Pe.x*Qe,Te+Pe.y*Qe,Math.max(.2,be+Pe.z*Qe)),y.push($.x,$.y,$.z),_.push(P.r+(D.r-P.r)*We,P.g+(D.g-P.g)*We,P.b+(D.b-P.b)*We),d.push(We),I.push(nt===-1?0:1,j)}}for(let Be=0;Be<4;Be++){let j=Re+Be*2;T.push(j,j+1,j+2,j+1,j+3,j+2)}}}}e!=="peek"&&(E([0,6,10],[10.5,15,9.7],15200,3.3),E([0,19,6],[7.4,9,5.7],4600,2.9),E([1,26,4],[4.7,7,3.4],2200,2.5));let w=T.length,F=new He;F.name="complete-lift-skull",s.add(F);let H=new He;F.add(H),E([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0),F.add(s.children.find(N=>N.userData.bodyCenter?.[1]===-8));let Y=[],ne=[],ae=[],se=[];for(let[N,V]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let z=new He;z.name="soft-paw",z.userData.home={x:N,y:V},z.position.set(N,V,1.35),z.rotation.z=N<0?-.13:.13,n.add(z);let v=new at(1,40,28),M=v.attributes.position;for(let A=0;A<M.count;A++){let b=M.getX(A),k=M.getY(A),J=M.getZ(A),K=2.15*(1-.22*Math.max(0,k)),$=k<-.35?.09*Math.cos(b*Math.PI*2.4)*-k:0;M.setXYZ(A,b*K,k*3.4-$,Math.max(-1.3,J*1.35)+Math.max(0,k)*.45)}v.computeVertexNormals();let B=new ze(v,a);B.castShadow=B.receiveShadow=!0,z.add(B);let ce=p(n,a,0,0,0,1,1,1);ce.name="rigid-upper-leg",ae.push(ce);let ee=p(n,a,0,0,0,1,1,1);ee.name="rigid-lower-leg",se.push(ee),ne.push(new O(N*.86,V+1.4,6.1)),Y.push(z)}let he=(N,V)=>-8-11.5*Math.sqrt(Math.max(.025,1-(N/13.1)**2-((V-20)/12.2)**2));function X(N,V,z,v,M,B,ce){let ee=[],A=[];for(let $=0;$<=12;$++)for(let re=0;re<=64;re++){let de=$/12,Se=re/64*Math.PI*2,ve=Math.cos(Se)*M*de,me=Math.sin(Se)*B*de;ee.push(ve,he(z+ve,v+me)-ce-.27*(1-de*de),me)}for(let $=0;$<12;$++)for(let re=0;re<64;re++){let de=$*65+re,Se=de+64+1;A.push(de,Se,de+1,de+1,Se,Se+1)}let J=new lt;J.setAttribute("position",new Je(ee,3)),J.setIndex(A),J.computeVertexNormals();let K=new ze(J,V);return K.position.set(z,0,v),N.add(K),K}let ue=new He;ue.name="happy-crescent-eyes",H.add(ue),ue.visible=!1;for(let N of[-1,1]){let V=[];for(let z=0;z<=20;z++){let v=N*5.6+(z/20-.5)*5.3,M=23.3+Math.sin(z/20*Math.PI)*1.35;V.push(new O(v,he(v,M)-.3,M))}ue.add(new ze(new Nt(new Ut(V),24,.3,7,!1),h))}let ie=[];for(let N of[-1,1]){let V=N*5.6,z=23.4,v=new He;v.name="embedded-eye",H.add(v),X(v,c,V,z,3.95,4.7,.11),X(v,f,V,z-.1,2.65,3.25,.3),X(v,h,V,z+.1,1.75,2.45,.49),p(v,u,V-.8,he(V-.8,z+1.5)-.78,z+1.5,.72,.2,.82),p(v,u,V+.65,he(V+.65,z-.65)-.78,z-.65,.26,.16,.3),ie.push(v);let M=[];for(let ce=0;ce<=64;ce++){let ee=ce/64*Math.PI*2,A=V+Math.cos(ee)*4.05,b=z+Math.sin(ee)*4.8;M.push(new O(A,he(A,b)-.05,b))}H.add(new ze(new Nt(new Ut(M),80,.37,8,!1),a)),p(H,l,N*8.3,-17.2,16,2.05,.5,1.05);let B=[];for(let ce=0;ce<=12;ce++){let ee=N*5.6+(ce/12-.5)*4.5,A=28.7+Math.sin(ce/12*Math.PI)*.65;B.push(new O(ee,he(ee,A)-.14,A))}H.add(new ze(new Nt(new Ut(B),16,.26,6,!1),a))}p(H,c,0,-18.9,16.4,5.2,1.7,2.7),p(H,l,0,-20.6,17.7,1.65,1.05,1.1);let ye=[];for(let N=0;N<=20;N++){let V=(N/20-.5)*6.6;ye.push(new O(V,-20.35+Math.abs(V)*.14,14.7+.105*V*V))}let Ae=new ze(new Nt(new Ut(ye),24,.22,6,!1),h);H.add(Ae);let Le=[];for(let N of[-1,1]){let ce=function(ee,A=!1,b=0){let k=Math.sin(ee*1.4+N*.7),J=Math.sin(ee*2.2+N)*.12;z.v2.set(N*(1.7+k*.35),-1.4+J,11.4),z.v3.set(N*(5.2+k*.55+b),-1.9+Math.sin(ee*1.2+N)*.35,10.2+J+b*.4+(A?Math.sin(ee*5+N)*.15:0));let K=z.computeFrenetFrames(26,!1),$=v.attributes.position,re=v.attributes.normal;for(let de=0;de<=26;de++){let Se=de/26,ve=z.getPoint(Se),me=.44*(1-Se)+.23*Se;for(let xe=0;xe<=8;xe++){let Ee=xe/8*Math.PI*2,Pe=K.normals[de].clone().multiplyScalar(-Math.cos(Ee)).addScaledVector(K.binormals[de],Math.sin(Ee)),Re=ve.clone().addScaledVector(Pe,me),Be=de*9+xe;$.setXYZ(Be,Re.x,Re.y,Re.z),re.setXYZ(Be,Pe.x,Pe.y,Pe.z)}}$.needsUpdate=re.needsUpdate=!0,v.computeBoundingSphere(),B.position.copy(z.v3)},V=new He;V.name="soft-curved-antenna",V.position.set(N*6.7,-5,30),F.add(V);let z=new Ln(new O,new O(N*.25,-.2,4.6),new O(N*1.7,-1.4,11.4),new O(N*5.2,-1.9,10.2)),v=new Nt(z,26,.4,8,!1),M=new ze(v,a);V.add(M);let B=p(V,c,N*5.2,-1.9,10.2,1.65,1.65,1.9);ce(0),Le.push({group:V,flex:ce})}let Z=new lt;Z.setAttribute("position",new yt(S.view(),3)),Z.setAttribute("normal",new yt(y.view(),3)),Z.setAttribute("color",new yt(_.view(),3)),Z.setAttribute("uv",new yt(I.view(),2)),Z.setIndex(new yt(T.view(),1));let G=d.view(),C=new Uint8Array(2048*4);for(let N=0;N<64;N++)for(let V=0;V<32;V++){let z=(N*32+V)*4,v=Math.abs((V+.5)/32*2-1),M=Math.round(255*Math.pow(1-v,.55)*(1-.75*Math.pow(N/63,4)));C[z]=C[z+1]=C[z+2]=M,C[z+3]=255}let R=new Yn(C,32,64);R.needsUpdate=!0,R.magFilter=R.minFilter=Lt;let te=new je({vertexColors:!0,alphaMap:R,transparent:!0,opacity:.85,depthWrite:!1,side:kt,roughness:1}),Q=new ze(Z,te);Q.name="curved-soft-fur",Q.frustumCulled=!1,s.add(Q),Z.setDrawRange(0,w);let W=new lt;for(let[N,V]of Object.entries(Z.attributes))W.setAttribute(N,V);W.setIndex(Z.index),W.setDrawRange(w,T.length-w);let fe=new ze(W,te);fe.name="complete-skull-fur",fe.frustumCulled=!1,F.add(fe);function _e(N){let V=z0[N];if(!V)throw Error("Unknown creature palette "+N);a.color.set(V.coat),f.color.set(V.iris),P.set(V.root),D.set(V.tip);let z=Z.attributes.color,v=new Ge;for(let M=0;M<G.length;M++)v.copy(P).lerp(D,G[M]),z.setXYZ(M,v.r,v.g,v.b);z.needsUpdate=!0,t.userData.palette=N}let L=new He;L.name="completion-pollen",L.visible=!1,t.add(L);let q=new at(.32,8,6);for(let N=0;N<9;N++){let V=new ze(q,new je({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));L.add(V)}return _e("apricot"),{group:t,setPalette:_e,update(N,V=0,z={}){let v=tr(z.celebrationAge??-1,z.celebrationStyle),M=!v.active&&(z.active??(V>0&&V<1));n.position.z=v.lift,n.rotation.x=v.pitch,n.rotation.y=v.roll+v.turnStep*Math.sin((z.celebrationAge??0)*16)*.018,n.scale.set(1+v.squash*.4,1+v.squash*.4,1-v.squash),ue.visible=v.happy>.55,ie.forEach(K=>K.visible=!ue.visible),Ae.scale.x=1+v.happy*.18,L.visible=v.pollen>0,L.children.forEach((K,$)=>{let re=Math.min(1.8,Math.max(0,(z.celebrationAge??0)-1.5)),de=$*2.4;K.position.set(Math.cos(de)*(9+re*3)+Math.sin(re*2+$)*.7,Math.sin(de)*(8+re*3),8+re*(8+$*.4)),K.material.opacity=v.pollen*(.5+$%3*.12)}),s.position.z=Math.sin(N*2)*.13+(M?Math.sin(V*Math.PI*16)*.22:0),s.rotation.y=M?Math.sin(V*Math.PI*16)*.012:Math.sin(N*.8)*.012,H.rotation.set(0,0,0),ie.forEach(K=>{K.scale.set(1,1,1),K.position.set(0,0,0)}),Y.forEach((K,$)=>{let re=K.userData.home,de=(z.celebrationAge??0)*17+$*Math.PI/2,Se=v.turnStep*Math.max(0,Math.sin(de))*1.25,ve=M?z.travel!==void 0?Wl(z.travel,$,t.scale.x):Gl(z.progress??V,$,{distance:z.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};K.position.set(re.x+v.turnStep*Math.cos(de)*.65,re.y+ve.y+v.turnStep*Math.sin(de)*.65+(v.active?Math.sin((z.celebrationAge??0)*7+$*Math.PI/2)*v.tuck*.5:0),1.35+ve.z+Se+v.tuck*($<2?1:z.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((z.celebrationAge??0)*4+$*1.6)*.12)),K.rotation.x=ve.pitch-v.tuck*($<2?.08:.035);let me=ne[$].clone();me.z+=s.position.z;let xe=new O(K.position.x,K.position.y+.65,K.position.z+1.05),Ee=xe.clone().sub(me),Pe=Math.min(6.95,Math.max(.6,Ee.length()));Ee.normalize(),xe.copy(me).addScaledVector(Ee,Pe),K.position.copy(xe).add(new O(0,-.65,-1.05));let Re=3.8,Be=3.4,j=(Re*Re-Be*Be+Pe*Pe)/(2*Pe),we=Math.sqrt(Math.max(0,Re*Re-j*j)),Ie=new O(0,1,0).addScaledVector(Ee,-Ee.y).normalize(),Ne=me.clone().addScaledVector(Ee,j).addScaledVector(Ie,we);function Te(be,Fe,We,nt){let Qe=We.clone().sub(Fe);be.position.copy(Fe).addScaledVector(Qe,.5),be.quaternion.setFromUnitVectors(new O(0,1,0),Qe.normalize()),be.scale.set(nt,Fe.distanceTo(We)/2,nt)}Te(ae[$],me,Ne,1.2),Te(se[$],Ne,xe,1.1)}),Le.forEach((K,$)=>K.flex(N,M,v.antenna*($?.78:1)));let B=z.headLiftAge??-1,ce=z.headLiftAngle??.8,ee=z.headLiftDuration??1.4,A=ct.clamp(B/ee,0,1);A=A*A*A*(A*(A*6-15)+10);let b=B>ee?Math.sin((B-ee)*3)*Math.exp(-(B-ee)*2)*.035:0;F.rotation.x=-ce*A+b;let k=new O(0,-8,20),J=k.clone().applyEuler(F.rotation);if(F.position.copy(k).sub(J),F.position.z+=A*.8,F.rotation.z=Math.sin(N*1.4)*.018*A,e==="peek"){let $=new O(0,-8,20),re=z.peekGreetingAge??-1,de=re>=0&&re<1.3?Math.sin(re/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(N*.65)*.012,Math.sin(Math.max(0,re)*4)*.05*de);let Se=$.clone().applyEuler(s.rotation);s.position.copy($).sub(Se),s.position.z+=Math.sin(N*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),Y.forEach((xe,Ee)=>{xe.visible=Ee<2,xe.position.set(Ee===0?-12:12,-17,10),xe.rotation.set(.12,0,Ee===0?-.16:.16)}),ae.forEach(xe=>xe.visible=!1),se.forEach(xe=>xe.visible=!1);let ve=N%7.3,me=ve>4.9&&ve<5.03||ve>5.22&&ve<5.3;ie.forEach(xe=>xe.visible=!me),ue.visible=me}},setSize(N){t.scale.setScalar(N/100)},dispose(){let N=new Set,V=new Set;t.traverse(z=>{z.geometry&&N.add(z.geometry),z.material&&V.add(z.material)}),N.forEach(z=>z.dispose()),V.forEach(z=>z.dispose()),R.dispose()}}}function ou(i,e,t,n,{threshold:s=5,tolerance:r=20}={}){let o=Math.floor((t-20)/80),a=Math.floor((-n-20)/80);if(o<0||a<0||o>=i||a>=i)return-1;let c=a*i+o,l=e.at(-1);if(l===void 0||c===l)return c;let h=o-l%i,u=a-Math.floor(l/i);if(Math.abs(h)+Math.abs(u)!==1)return-1;let f=l%i*80+60,p=-(Math.floor(l/i)*80+60),g=h?(t-f)*h:-(n-p)*u,x=Math.abs(h?n-p:t-f);return g>=40+80*s/100&&x<=Math.min(40,22+80*r/100)?c:l}function lu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new lt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=au(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=au(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function au(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function cu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,y=a.length;S<y;S++){let _=a[S],I=i.attributes[_];c[_]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let T=i.morphAttributes[_];T&&(l[_]||(l[_]=[]),T.forEach((P,D)=>{let E=new P.array.constructor(P.count*P.itemSize);l[_][D]=new P.constructor(E,P.itemSize,P.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let S=0;S<r;S++){let y=n?n.getX(S):S,_="";for(let I=0,T=a.length;I<T;I++){let P=a[I],D=i.getAttribute(P),E=D.itemSize;for(let w=0;w<E;w++)_+=`${~~(D[u[w]](y)*x+m)},`}if(_ in t)h.push(t[_]);else{for(let I=0,T=a.length;I<T;I++){let P=a[I],D=i.getAttribute(P),E=i.morphAttributes[P],w=D.itemSize,F=c[P],H=l[P];for(let Y=0;Y<w;Y++){let ne=u[Y],ae=f[Y];if(F[ae](o,D[ne](y)),E)for(let se=0,he=E.length;se<he;se++)H[se][ae](o,E[se][ne](y))}}t[_]=o,h.push(o),o++}}let d=i.clone();for(let S in i.attributes){let y=c[S];if(d.setAttribute(S,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),S in l)for(let _=0;_<l[S].length;_++){let I=l[S][_];d.morphAttributes[S][_]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return d.setIndex(h),d}function hu(i){let e=new Map,t=new Set;i.updateMatrixWorld(!0);for(let n of i.children){if(!n.isMesh||Array.isArray(n.material))return i;let s=e.get(n.material);s||e.set(n.material,s={geometries:[],surface:!1}),s.surface||=!!n.userData.surface;let r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.geometries.push(r.applyMatrix4(n.matrix)),t.add(n.geometry)}i.clear();for(let[n,s]of e){let r=lu(s.geometries,!1);s.geometries.forEach(a=>a.dispose());let o=new ze(r,n);o.castShadow=o.receiveShadow=!0,o.userData.surface=s.surface,i.add(o)}return t.forEach(n=>n.dispose()),i}var uu=new WeakMap,Xl=new WeakMap,k0=new Ge("#edf4b1");function du(i,e,t=.24){if(!i)return;let n=e?t:0;uu.get(i)!==n&&(uu.set(i,n),i.traverse(s=>{if(s.isMesh)for(let r of[].concat(s.material||[]))r.color&&(Xl.has(r)||Xl.set(r,r.color.clone()),r.color.copy(Xl.get(r)),e&&r.color.lerp(k0,t))}))}var ra=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],c=this.points[o+1],l=s[o];if(r<=l&&l>0){let h=r/l;this.x=a[0]+(c[0]-a[0])*h,this.y=a[1]+(c[1]-a[1])*h,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=l}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.duration=Math.min(.5,Math.max(.035,this.duration*(this.durationScale??1))),this.lastTarget=n,this.start=n,!0}};var oa=class{constructor(){this.transition=new ra,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=l=>[l%e.n*80+60,-(Math.floor(l/e.n)*80+60)];if(this.level!==e||!t.length){let[l,h]=s(e.marks[0]);this.transition.reset(l,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[l,h],this.lastTime=n,this.level=e}let a=0;for(;a<this.path.length&&a<t.length&&this.path[a]===t[a];)a++;if(a!==this.path.length||a!==t.length){let l=this.path.at(-1),h=this.path.length?[...this.path.slice(Math.max(0,a-1),-1).reverse(),...t.slice(a)]:[...t];for(let u of h){let[f,p]=s(u);if(l===void 0)this.transition.reset(f,p);else{let[g,x]=s(l);this.heading=Math.atan2(f-g,-(p-x)),this.transition.target(f,p,n)}l=u}this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=tr(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var fu={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function pu({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=fu[t]||fu.front,s=n.radius,r=n.x,o=n.z,a=new He,c=new He;a.add(c),c.position.set(n.fx,0,n.fz);let l=new at(1,20,14),h=[],u=(ie,ye=.48)=>{let Ae=new je({color:ie,roughness:ye});return h.push(Ae),Ae},f=u("#ffd05a"),p=u("#ffeaa2"),g=u("#538b2c"),x=u("#e5a32a");function m(ie,ye,Ae,Le,Z,G,C,R){let te=new ze(l,ye);return te.position.set(Ae,Le,Z),te.scale.set(G,C,R),te.castShadow=!0,te.receiveShadow=!0,ie.add(te),te}m(c,g,0,5,0,2.2,7,2.2);for(let ie of[-1,1]){let ye=m(c,g,ie*7,4,1,9,1.7,4);ye.rotation.z=ie*.27,ye.rotation.y=ie*.3}let d=[];for(let ie=0;ie<6;ie++){let ye=new He;ye.rotation.y=ie*Math.PI/3,c.add(ye);let Ae=m(ye,ie%2?f:p,0,12,0,5,9,4);d.push(Ae)}let S=m(c,x,0,12,0,5,3.5,5),y=u("#c5a777"),_=new en(s+1.6,s+1.6,2.6,40),I=new ze(_,y);I.position.set(r,3,o),I.castShadow=!0,a.add(I);let T=new en(s,s,2.2,40),P=new ze(T,u("#fff4da"));P.position.set(r,3.6,o),P.castShadow=!0,a.add(P);let D=document.createElement("canvas");D.width=D.height=128;let E=D.getContext("2d");E.fillStyle="#4b2a15",E.font="bold 100px Trebuchet MS",E.textAlign="center",E.textBaseline="middle",E.fillText(String(i),64,69);let w=new pn(D);w.colorSpace=_t,w.userData.transient=!0;let F=new ci({map:w,transparent:!0,depthWrite:!1}),H=new ui(s*1.72,s*1.72),Y=new ze(H,F);Y.rotation.x=-Math.PI/2,Y.position.set(r,4.74,o),a.add(Y);let ne=0,ae=0,se="";function he(ie){if(!["closed","next","bloom"].includes(ie))throw Error("Unknown goal state");se=ie,ae=ie==="bloom"?1:ie==="next"?.16:0,a.userData.state=ie,y.color.set(ie==="next"?"#f9bf39":"#c5a777"),y.emissive.set(ie==="next"?"#d89514":"#000000"),y.emissiveIntensity=ie==="next"?.15:0}function X(ie,ye=.016){ne+=(ae-ne)*Math.min(1,ye*7);let Ae=ne;for(let Z of d)Z.position.set(0,13-Ae*3,2+Ae*10),Z.scale.set(5+Ae*1.5,9-Ae*6,4+Ae*4),Z.rotation.x=Ae*-.25;S.visible=Ae>.4,S.position.y=11.4;let Le=se==="next"?1+Math.sin(ie*2.8)*.035:1;c.scale.setScalar(Le),f.emissive.set("#ffc33e"),f.emissiveIntensity=se==="next"?.08+Math.sin(ie*2.8)*.04:0}he(e),ne=ae,X(0,1),a.userData.goalNumber=i;function ue(ie){let ye=ie===33?13:ie===40?15.7:10.5;I.scale.set((ye+1.6)/(s+1.6),1,(ye+1.6)/(s+1.6)),P.scale.set(ye/s,1,ye/s),Y.scale.setScalar(ye/s),a.userData.markerSize=ie}return{group:a,setState:he,setSize:ue,update:X,dispose(){l.dispose(),T.dispose(),_.dispose(),H.dispose(),w.dispose(),F.dispose(),h.forEach(ie=>ie.dispose())}}}var Fn=(i,e)=>ct.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),ql=[[-13,-9],[20,-10],[8,4],[-11,18]];function mu(i){i.x=ct.clamp(i.x,-16,24),i.z=ct.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function gu(i=73){let e=[{kind:"bee",position:new O(-12,25,10),velocity:new O,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new O(3,21.5,-7),velocity:new O,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new O((Fn(r.leg+1,a)-.5)*5,20.5,(Fn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let u=Math.floor(Fn(r.leg,a)*4);u===r.station&&(u=(u+1+Math.floor(Fn(r.leg+9,a)*2))%4),r.station=u;let[f,p]=ql[u];r.target=mu(new O(f+(Fn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Fn(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],h=(u,f)=>Math.hypot(u.x-f.x,u.z-f.z);if(h(r.target,l.position)<13||l.target&&h(r.target,l.target)<13){let u=-1;for(let f=0;f<ql.length;f++){let[p,g]=ql[f],x=new O(p,24,g),m=h(x,l.position)+(l.target?h(x,l.target):0);m>u&&(u=m,r.target=x,r.station=f)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+Fn(l.leg,i+c)*1.3&&n(l,c);let h=l.target.clone().sub(l.position),u=Math.hypot(h.x,h.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):u<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+Fn(l.leg,i+c)*1.3:.12+Fn(l.leg,i+c)*.3);let f=h.clone();f.y=0,f.lengthSq()>0&&f.normalize().multiplyScalar(l.speed*Math.min(1,u/8));let p=f.sub(new O(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(c?-1:1)*(16-a)*11/a),p.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,p.clampLength(0,95),l.velocity.addScaledVector(p,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),mu(l.position)}}return{agents:e,update(r){let o=ct.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Yl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},H0=(i,e)=>ct.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function xu({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Yl[i];if(!r)throw Error("Unknown flower species "+i);let o=pu({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new He;l.position.copy(c.position),a.add(l);let h=[],u=[],f=ue=>{let ie=new je({color:ue,roughness:.56});return u.push(ie),ie},p=f("#538b2c"),g=r.colors.map(f),x=f(r.center),m=new at(1,20,12);h.push(m);function d(ue,ie,ye,Ae,Le,Z,G,C){let R=new ze(m,ie);return R.position.set(ye,Ae,Le),R.scale.set(Z,G,C),R.castShadow=R.receiveShadow=!0,ue.add(R),R}d(l,p,0,5,0,1.8,6,1.8);for(let ue of[-1,1]){let ie=d(l,p,ue*6,3,0,8,1.4,3);ie.rotation.z=ue*.25}let S=[];for(let ue=0;ue<r.petals;ue++){let ie=new He;ie.position.y=12,ie.rotation.y=ue*Math.PI*2/r.petals,l.add(ie);let ye=new He;ie.add(ye);let Ae=m;if(i==="poppy"){Ae=m.clone();let Z=Ae.attributes.position;for(let G=0;G<Z.count;G++){let C=Z.getX(G),R=Z.getZ(G);Z.setY(G,Z.getY(G)+Math.sin(Math.atan2(R,C)*5)*.26*Math.hypot(C,R))}Ae.computeVertexNormals(),h.push(Ae)}let Le=new ze(Ae,g[ue%2]);Le.position.z=r.radius,Le.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Le.castShadow=Le.receiveShadow=!0,ye.add(Le),S.push(ye)}let y=d(l,x,0,13.8,0,r.heart,2.7,r.heart);for(let ue=0;ue<(i==="poppy"?9:7);ue++){let ie=ue*Math.PI*2/(i==="poppy"?9:7);d(l,x,Math.cos(ie)*r.heart*.7,16,Math.sin(ie)*r.heart*.7,.65,.6,.65)}let _=new He;_.name="flower-visitors",l.add(_);let I=f("#e9ad32"),T=f("#d6af50"),P=f("#60452b"),D=f("#fff6df");T.roughness=.95,D.transparent=!0,D.opacity=.72,D.depthWrite=!1;let E=[];for(let ue=0;ue<2;ue++){let ie=new He;ie.name=ue?"bumblebee":"bee",ie.scale.setScalar(1.8),_.add(ie);let ye=ue?1.08:.7,Ae=ue?.98:.65;d(ie,ue?T:I,0,0,0,ye,Ae,1.2),d(ie,P,0,0,1.05,ue?.56:.48,ue?.54:.48,.48);for(let Z of[-.55,.15])d(ie,P,0,0,Z,ye*1.02,Ae*1.02,.18);if(ue){let Z=f("#f4e4b9");Z.roughness=1,d(ie,Z,0,0,-.98,.72,.65,.38);let G=[],C=[],R=260;for(let fe=0;fe<R;fe++){let _e=1-2*(fe+.5)/R,L=Math.sqrt(1-_e*_e),q=fe*2.39996323,N=Math.cos(q)*L,V=Math.sin(q)*L,z=new O(N*ye*1.015,_e*Ae*1.015,V*1.215),v=new O(N/ye,_e/Ae,V/1.2).normalize(),M=.12+H0(fe,91)*.12,B=z.clone().addScaledVector(v,M);B.z-=.045,G.push(...z.toArray(),...B.toArray());let ce=new Ge(V<-.72?"#f4e4b9":Math.abs(V+.46)<.18||Math.abs(V-.12)<.17?"#635238":fe%3?"#d6af50":"#e7c776");C.push(...ce.toArray(),...ce.toArray())}let te=new lt;te.setAttribute("position",new Je(G,3)),te.setAttribute("color",new Je(C,3)),h.push(te);let Q=new Yi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});u.push(Q);let W=new Ts(te,Q);W.name="bumblebee-fur",ie.add(W)}let Le=[];for(let Z of[-1,1]){let G=d(ie,D,Z*.95,.5,-.1,1.5,.16,.65);G.castShadow=!1,Le.push(G)}E.push({insect:ie,wings:Le,seed:e*17+ue*31+Object.keys(Yl).indexOf(i)*7,phase:ue*2.7,a:new O,b:new O})}let w=!!s;function F(ue){w=!!ue,a.userData.insects=w}let H=gu(e*17+Object.keys(Yl).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function Y(ue,ie=100){if(!["bee","bumblebee"].includes(ue))throw Error("Unknown flower visitor");if(!Number.isFinite(ie)||ie<50||ie>300)throw RangeError("Visitor size must be between 50 and 300 percent");E.find(ye=>ye.insect.name===ue).insect.scale.setScalar(1.8*ie/100),a.userData.visitorSizes[ue]=ie}let ne=t,ae=t==="bloom"?1:0,se=ae;function he(ue){o.setState(ue),ne=ue,ae=ue==="bloom"?1:0}function X(ue,ie=.016){o.update(ue,ie),se+=(ae-se)*Math.min(1,ie*7);let ye=se;c.scale.multiplyScalar(1-ye),c.visible=ye<.999,l.visible=ye>.001,l.scale.setScalar(ye);for(let Le of S)Le.rotation.x=-(1-ye)*1.1;y.scale.y=2.7*(.8+.2*ye),_.visible=w&&ne==="bloom"&&ye>.94;let Ae=H.update(ie);for(let Le=0;Le<E.length;Le++){let Z=E[Le],G=Ae[Le];Z.insect.position.copy(G.position);let C=G.velocity.x,R=G.velocity.z,te=Math.hypot(C,R);if(te>.5){let Q=Math.atan2(C,R),W=Math.atan2(Math.sin(Q-Z.insect.rotation.y),Math.cos(Q-Z.insect.rotation.y));Z.insect.rotation.y+=W*Math.min(1,ie*9),Z.insect.rotation.z=ct.clamp(-W*.22,-.24,.24)}else Z.insect.rotation.z*=Math.max(0,1-ie*6);Z.insect.rotation.x=-Math.min(.16,te*.009),Z.wings.forEach((Q,W)=>Q.rotation.z=Math.sin(ue*30+Z.phase)*(W?1:-1)*.5)}}return F(s),X(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:he,setInsects:F,setVisitorSize:Y,setSize:o.setSize,update:X,get state(){return ne},dispose(){o.dispose(),h.forEach(ue=>ue.dispose()),u.forEach(ue=>ue.dispose())}}}var aa=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new O,r=new O,o=new O,a=new O,c=[s,r,o,a],l=new O,h=new O,u=new O,f=new O,p=[l,h,u,f],g=new Ge,x=new Ge,m=new Ge,d=new Ge,S=[g,x,m,d],y=new Me,_=new Me,I=new Me,T=new Me,P=[y,_,I,T],D=new Me,E=new Me,w=new Me,F=new Me,H=[D,E,w,F],Y=e.attributes,ne=Y.normal!==void 0,ae=Y.color!==void 0,se=Y.uv!==void 0,he=Y.uv1!==void 0,X=Y.position.array,ue=ne?Y.normal.array:null,ie=ae?Y.color.array:null,ye=se?Y.uv.array:null,Ae=he?Y.uv1.array:null,Le=X,Z=ue,G=ie,C=ye,R=Ae,te=0,Q=!0;function W(_e,L,q){let N=c[_e],V=c[L],z=c[q];if(Le.push(N.x,N.y,N.z),Le.push(V.x,V.y,V.z),Le.push(z.x,z.y,z.z),ne){let v=p[_e],M=p[L],B=p[q];Z.push(v.x,v.y,v.z),Z.push(M.x,M.y,M.z),Z.push(B.x,B.y,B.z)}if(ae){let v=S[_e],M=S[L],B=S[q];G.push(v.r,v.g,v.b),G.push(M.r,M.g,M.b),G.push(B.r,B.g,B.b)}if(se){let v=P[_e],M=P[L],B=P[q];C.push(v.x,v.y),C.push(M.x,M.y),C.push(B.x,B.y)}if(he){let v=H[_e],M=H[L],B=H[q];R.push(v.x,v.y),R.push(M.x,M.y),R.push(B.x,B.y)}}for(;Q&&te<t;){te++,Q=!1,X=Le,Le=[],ne&&(ue=Z,Z=[]),ae&&(ie=G,G=[]),se&&(ye=C,C=[]),he&&(Ae=R,R=[]);for(let _e=0,L=0,q=X.length;_e<q;_e+=9,L+=6){s.fromArray(X,_e+0),r.fromArray(X,_e+3),o.fromArray(X,_e+6),ne&&(l.fromArray(ue,_e+0),h.fromArray(ue,_e+3),u.fromArray(ue,_e+6)),ae&&(g.fromArray(ie,_e+0),x.fromArray(ie,_e+3),m.fromArray(ie,_e+6)),se&&(y.fromArray(ye,L+0),_.fromArray(ye,L+2),I.fromArray(ye,L+4)),he&&(D.fromArray(Ae,L+0),E.fromArray(Ae,L+2),w.fromArray(Ae,L+4));let N=s.distanceToSquared(r),V=r.distanceToSquared(o),z=s.distanceToSquared(o);N>n||V>n||z>n?(Q=!0,N>=V&&N>=z?(a.lerpVectors(s,r,.5),ne&&f.lerpVectors(l,h,.5),ae&&d.lerpColors(g,x,.5),se&&T.lerpVectors(y,_,.5),he&&F.lerpVectors(D,E,.5),W(0,3,2),W(3,1,2)):V>=N&&V>=z?(a.lerpVectors(r,o,.5),ne&&f.lerpVectors(h,u,.5),ae&&d.lerpColors(x,m,.5),se&&T.lerpVectors(_,I,.5),he&&F.lerpVectors(E,w,.5),W(0,1,3),W(3,2,0)):(a.lerpVectors(s,o,.5),ne&&f.lerpVectors(l,u,.5),ae&&d.lerpColors(g,m,.5),se&&T.lerpVectors(y,I,.5),he&&F.lerpVectors(D,w,.5),W(0,1,3),W(3,1,2))):W(0,1,2)}}let fe=new lt;return fe.setAttribute("position",new Je(Le,3)),ne&&fe.setAttribute("normal",new Je(Z,3)),ae&&fe.setAttribute("color",new Je(G,3)),se&&fe.setAttribute("uv",new Je(C,2)),he&&fe.setAttribute("uv1",new Je(R,2)),fe}};var V0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},nr=ct.clamp;function G0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=nr(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var W0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function _u(i,e,t){if(i==="split"){let n=Math.min(...W0.map(([s,r])=>G0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,c=e*Math.cos(a)+t*Math.sin(a),l=-e*Math.sin(a)+t*Math.cos(a),h=((c-10)/8.5)**2+(l/(s===6?3.2:4.7))**2;n=Math.max(n,nr((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function yu(i="fossil",{seed:e=73}={}){if(!V0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new He,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,c=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let d=0;d<s;d++)for(let S=0;S<s;S++){let y=(S/(s-1)-.5)*66,_=(d/(s-1)-.5)*66,I=_u(i,y,_),T=Math.sin(y*.18+_*.11)*Math.sin(_*.21-y*.07),P=c()-.5,D=1+T*(t?.004:.015)+P*(t?.025:.065)-I.ink,E=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],w=(d*s+S)*4;for(let H=0;H<3;H++)r[w+H]=nr(E[H]*D+(220-E[H])*I.vein,0,255);r[w+3]=255;let F=nr(138+P*(t?4:12)+T-I.cut*28,0,255);o.set([F,F,F,255],w)}let l=new Yn(r,s,s);l.colorSpace=_t;let h=new Yn(o,s,s);for(let d of[l,h])d.magFilter=d.minFilter=Lt,d.needsUpdate=!0;let u=new je({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:l,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(u.onBeforeCompile=d=>{let S=new Ge(t?"#9e9688":i==="split"?"#978f80":"#999182");d.vertexShader=`varying float stoneTop;
`+d.vertexShader,d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),d.fragmentShader=`varying float stoneTop;
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${S.r},${S.g},${S.b}),diffuseColor.rgb,stoneTop);`)}),u.customProgramCacheKey=()=>`slink-stone-top-${i}`;let f=new yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let d=new aa(3.5,10).modify(f);f.dispose(),f=d}f.translate(0,0,10);let p=f.attributes.position,g=f.attributes.uv;for(let d=0;d<p.count;d++){let S=p.getX(d),y=p.getY(d),_=p.getZ(d),I=nr((_-10)/16.5,0,1);if(i!=="reference"){let T=Math.max(0,1-(S*S+y*y)/1800),P=Math.sin(S*.13+y*.035)*Math.cos(y*.1)*(t?.12:.7),D=t?T*5:i==="split"?T*1.3-Math.max(0,S*.17+y*.09-2)*.6:T*.6;_+=(D+P-_u(i,S,y).cut)*I}p.setZ(d,_),g.setXY(d,S/66+.5,y/66+.5)}f.deleteAttribute("normal");let x=cu(f,1e-4);f.dispose(),f=x,f.computeVertexNormals();let m=new ze(f,u);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){f.dispose(),u.dispose(),l.dispose(),h.dispose()}}}var vu=["daisy","buttercup","meadow","poppy"],Mu=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],la=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function X0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function bu(i){let e=la(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=vu[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&la(e+":flower-mix")%3!==0){let r=vu[(e%4+1+la(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of X0(i.stones||[],i.n)){let o=la(e+":"+r.join(","));if(r.length===1){s[r[0]]=Mu[o%Mu.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Su={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function Eu(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new je({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=Su[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new Me(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var q0=_t,ir=class i extends fi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new ks(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(Z,G){if(Z.nodeType!==1)return;let C=_(Z),R=!1,te=null;switch(Z.nodeName){case"svg":G=g(Z,G);break;case"style":r(Z);break;case"g":G=g(Z,G);break;case"path":G=g(Z,G),Z.hasAttribute("d")&&(te=s(Z));break;case"rect":G=g(Z,G),te=c(Z);break;case"polygon":G=g(Z,G),te=l(Z);break;case"polyline":G=g(Z,G),te=h(Z);break;case"circle":G=g(Z,G),te=u(Z);break;case"ellipse":G=g(Z,G),te=f(Z);break;case"line":G=g(Z,G),te=p(Z);break;case"defs":R=!0;break;case"use":G=g(Z,G);let fe=(Z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),_e=Z.viewportElement.getElementById(fe);_e?n(_e,G):console.warn("SVGLoader: 'use node' references non-existent node id: "+fe);break;default:}te&&(G.fill!==void 0&&G.fill!=="none"&&te.color.setStyle(G.fill,q0),T(te,ye),H.push(te),te.userData={node:Z,style:G});let Q=Z.childNodes;for(let W=0;W<Q.length;W++){let fe=Q[W];R&&fe.nodeName!=="style"&&fe.nodeName!=="defs"||n(fe,G)}C&&(ne.pop(),ne.length>0?ye.copy(ne[ne.length-1]):ye.identity())}function s(Z){let G=new hn,C=new Me,R=new Me,te=new Me,Q=!0,W=!1,fe=Z.getAttribute("d");if(fe===""||fe==="none")return null;let _e=fe.match(/[a-df-z][^a-df-z]*/ig);for(let L=0,q=_e.length;L<q;L++){let N=_e[L],V=N.charAt(0),z=N.slice(1).trim();Q===!0&&(W=!0,Q=!1);let v;switch(V){case"M":v=m(z);for(let M=0,B=v.length;M<B;M+=2)C.x=v[M+0],C.y=v[M+1],R.x=C.x,R.y=C.y,M===0?G.moveTo(C.x,C.y):G.lineTo(C.x,C.y),M===0&&te.copy(C);break;case"H":v=m(z);for(let M=0,B=v.length;M<B;M++)C.x=v[M],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"V":v=m(z);for(let M=0,B=v.length;M<B;M++)C.y=v[M],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"L":v=m(z);for(let M=0,B=v.length;M<B;M+=2)C.x=v[M+0],C.y=v[M+1],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"C":v=m(z);for(let M=0,B=v.length;M<B;M+=6)G.bezierCurveTo(v[M+0],v[M+1],v[M+2],v[M+3],v[M+4],v[M+5]),R.x=v[M+2],R.y=v[M+3],C.x=v[M+4],C.y=v[M+5],M===0&&W===!0&&te.copy(C);break;case"S":v=m(z);for(let M=0,B=v.length;M<B;M+=4)G.bezierCurveTo(x(C.x,R.x),x(C.y,R.y),v[M+0],v[M+1],v[M+2],v[M+3]),R.x=v[M+0],R.y=v[M+1],C.x=v[M+2],C.y=v[M+3],M===0&&W===!0&&te.copy(C);break;case"Q":v=m(z);for(let M=0,B=v.length;M<B;M+=4)G.quadraticCurveTo(v[M+0],v[M+1],v[M+2],v[M+3]),R.x=v[M+0],R.y=v[M+1],C.x=v[M+2],C.y=v[M+3],M===0&&W===!0&&te.copy(C);break;case"T":v=m(z);for(let M=0,B=v.length;M<B;M+=2){let ce=x(C.x,R.x),ee=x(C.y,R.y);G.quadraticCurveTo(ce,ee,v[M+0],v[M+1]),R.x=ce,R.y=ee,C.x=v[M+0],C.y=v[M+1],M===0&&W===!0&&te.copy(C)}break;case"A":v=m(z,[3,4],7);for(let M=0,B=v.length;M<B;M+=7){if(v[M+5]==C.x&&v[M+6]==C.y)continue;let ce=C.clone();C.x=v[M+5],C.y=v[M+6],R.x=C.x,R.y=C.y,o(G,v[M],v[M+1],v[M+2],v[M+3],v[M+4],ce,C),M===0&&W===!0&&te.copy(C)}break;case"m":v=m(z);for(let M=0,B=v.length;M<B;M+=2)C.x+=v[M+0],C.y+=v[M+1],R.x=C.x,R.y=C.y,M===0?G.moveTo(C.x,C.y):G.lineTo(C.x,C.y),M===0&&te.copy(C);break;case"h":v=m(z);for(let M=0,B=v.length;M<B;M++)C.x+=v[M],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"v":v=m(z);for(let M=0,B=v.length;M<B;M++)C.y+=v[M],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"l":v=m(z);for(let M=0,B=v.length;M<B;M+=2)C.x+=v[M+0],C.y+=v[M+1],R.x=C.x,R.y=C.y,G.lineTo(C.x,C.y),M===0&&W===!0&&te.copy(C);break;case"c":v=m(z);for(let M=0,B=v.length;M<B;M+=6)G.bezierCurveTo(C.x+v[M+0],C.y+v[M+1],C.x+v[M+2],C.y+v[M+3],C.x+v[M+4],C.y+v[M+5]),R.x=C.x+v[M+2],R.y=C.y+v[M+3],C.x+=v[M+4],C.y+=v[M+5],M===0&&W===!0&&te.copy(C);break;case"s":v=m(z);for(let M=0,B=v.length;M<B;M+=4)G.bezierCurveTo(x(C.x,R.x),x(C.y,R.y),C.x+v[M+0],C.y+v[M+1],C.x+v[M+2],C.y+v[M+3]),R.x=C.x+v[M+0],R.y=C.y+v[M+1],C.x+=v[M+2],C.y+=v[M+3],M===0&&W===!0&&te.copy(C);break;case"q":v=m(z);for(let M=0,B=v.length;M<B;M+=4)G.quadraticCurveTo(C.x+v[M+0],C.y+v[M+1],C.x+v[M+2],C.y+v[M+3]),R.x=C.x+v[M+0],R.y=C.y+v[M+1],C.x+=v[M+2],C.y+=v[M+3],M===0&&W===!0&&te.copy(C);break;case"t":v=m(z);for(let M=0,B=v.length;M<B;M+=2){let ce=x(C.x,R.x),ee=x(C.y,R.y);G.quadraticCurveTo(ce,ee,C.x+v[M+0],C.y+v[M+1]),R.x=ce,R.y=ee,C.x=C.x+v[M+0],C.y=C.y+v[M+1],M===0&&W===!0&&te.copy(C)}break;case"a":v=m(z,[3,4],7);for(let M=0,B=v.length;M<B;M+=7){if(v[M+5]==0&&v[M+6]==0)continue;let ce=C.clone();C.x+=v[M+5],C.y+=v[M+6],R.x=C.x,R.y=C.y,o(G,v[M],v[M+1],v[M+2],v[M+3],v[M+4],ce,C),M===0&&W===!0&&te.copy(C)}break;case"Z":case"z":G.currentPath.autoClose=!0,G.currentPath.curves.length>0&&(C.copy(te),G.currentPath.currentPoint.copy(C),Q=!0);break;default:console.warn(N)}W=!1}return G}function r(Z){if(!(!Z.sheet||!Z.sheet.cssRules||!Z.sheet.cssRules.length))for(let G=0;G<Z.sheet.cssRules.length;G++){let C=Z.sheet.cssRules[G];if(C.type!==1)continue;let R=C.selectorText.split(/,/gm).filter(Boolean).map(te=>te.trim());for(let te=0;te<R.length;te++){let Q=Object.fromEntries(Object.entries(C.style).filter(([,W])=>W!==""));Y[R[te]]=Object.assign(Y[R[te]]||{},Q)}}}function o(Z,G,C,R,te,Q,W,fe){if(G==0||C==0){Z.lineTo(fe.x,fe.y);return}R=R*Math.PI/180,G=Math.abs(G),C=Math.abs(C);let _e=(W.x-fe.x)/2,L=(W.y-fe.y)/2,q=Math.cos(R)*_e+Math.sin(R)*L,N=-Math.sin(R)*_e+Math.cos(R)*L,V=G*G,z=C*C,v=q*q,M=N*N,B=v/V+M/z;if(B>1){let de=Math.sqrt(B);G=de*G,C=de*C,V=G*G,z=C*C}let ce=V*M+z*v,ee=(V*z-ce)/ce,A=Math.sqrt(Math.max(0,ee));te===Q&&(A=-A);let b=A*G*N/C,k=-A*C*q/G,J=Math.cos(R)*b-Math.sin(R)*k+(W.x+fe.x)/2,K=Math.sin(R)*b+Math.cos(R)*k+(W.y+fe.y)/2,$=a(1,0,(q-b)/G,(N-k)/C),re=a((q-b)/G,(N-k)/C,(-q-b)/G,(-N-k)/C)%(Math.PI*2);Z.currentPath.absellipse(J,K,G,C,$,$+re,Q===0,R)}function a(Z,G,C,R){let te=Z*C+G*R,Q=Math.sqrt(Z*Z+G*G)*Math.sqrt(C*C+R*R),W=Math.acos(Math.max(-1,Math.min(1,te/Q)));return Z*R-G*C<0&&(W=-W),W}function c(Z){let G=y(Z.getAttribute("x")||0),C=y(Z.getAttribute("y")||0),R=y(Z.getAttribute("rx")||Z.getAttribute("ry")||0),te=y(Z.getAttribute("ry")||Z.getAttribute("rx")||0),Q=y(Z.getAttribute("width")),W=y(Z.getAttribute("height")),fe=1-.551915024494,_e=new hn;return _e.moveTo(G+R,C),_e.lineTo(G+Q-R,C),(R!==0||te!==0)&&_e.bezierCurveTo(G+Q-R*fe,C,G+Q,C+te*fe,G+Q,C+te),_e.lineTo(G+Q,C+W-te),(R!==0||te!==0)&&_e.bezierCurveTo(G+Q,C+W-te*fe,G+Q-R*fe,C+W,G+Q-R,C+W),_e.lineTo(G+R,C+W),(R!==0||te!==0)&&_e.bezierCurveTo(G+R*fe,C+W,G,C+W-te*fe,G,C+W-te),_e.lineTo(G,C+te),(R!==0||te!==0)&&_e.bezierCurveTo(G,C+te*fe,G+R*fe,C,G+R,C),_e}function l(Z){function G(Q,W,fe){let _e=y(W),L=y(fe);te===0?R.moveTo(_e,L):R.lineTo(_e,L),te++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new hn,te=0;return Z.getAttribute("points").replace(C,G),R.currentPath.autoClose=!0,R}function h(Z){function G(Q,W,fe){let _e=y(W),L=y(fe);te===0?R.moveTo(_e,L):R.lineTo(_e,L),te++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new hn,te=0;return Z.getAttribute("points").replace(C,G),R.currentPath.autoClose=!1,R}function u(Z){let G=y(Z.getAttribute("cx")||0),C=y(Z.getAttribute("cy")||0),R=y(Z.getAttribute("r")||0),te=new mn;te.absarc(G,C,R,0,Math.PI*2);let Q=new hn;return Q.subPaths.push(te),Q}function f(Z){let G=y(Z.getAttribute("cx")||0),C=y(Z.getAttribute("cy")||0),R=y(Z.getAttribute("rx")||0),te=y(Z.getAttribute("ry")||0),Q=new mn;Q.absellipse(G,C,R,te,0,Math.PI*2);let W=new hn;return W.subPaths.push(Q),W}function p(Z){let G=y(Z.getAttribute("x1")||0),C=y(Z.getAttribute("y1")||0),R=y(Z.getAttribute("x2")||0),te=y(Z.getAttribute("y2")||0),Q=new hn;return Q.moveTo(G,C),Q.lineTo(R,te),Q.currentPath.autoClose=!1,Q}function g(Z,G){G=Object.assign({},G);let C={};if(Z.hasAttribute("class")){let W=Z.getAttribute("class").split(/\s/).filter(Boolean).map(fe=>fe.trim());for(let fe=0;fe<W.length;fe++)C=Object.assign(C,Y["."+W[fe]])}Z.hasAttribute("id")&&(C=Object.assign(C,Y["#"+Z.getAttribute("id")]));function R(W,fe,_e){_e===void 0&&(_e=function(q){return q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),q}),Z.hasAttribute(W)&&(G[fe]=_e(Z.getAttribute(W))),C[W]&&(G[fe]=_e(C[W])),Z.style&&Z.style[W]!==""&&(G[fe]=_e(Z.style[W]))}function te(W){return Math.max(0,Math.min(1,y(W)))}function Q(W){return Math.max(0,y(W))}return R("fill","fill"),R("fill-opacity","fillOpacity",te),R("fill-rule","fillRule"),R("opacity","opacity",te),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",te),R("stroke-width","strokeWidth",Q),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",Q),R("visibility","visibility"),G}function x(Z,G){return Z-(G-Z)}function m(Z,G,C){if(typeof Z!="string")throw new TypeError("Invalid input: "+typeof Z);let R={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},te=0,Q=1,W=2,fe=3,_e=te,L=!0,q="",N="",V=[];function z(ce,ee,A){let b=new SyntaxError('Unexpected character "'+ce+'" at index '+ee+".");throw b.partial=A,b}function v(){q!==""&&(N===""?V.push(Number(q)):V.push(Number(q)*Math.pow(10,Number(N)))),q="",N=""}let M,B=Z.length;for(let ce=0;ce<B;ce++){if(M=Z[ce],Array.isArray(G)&&G.includes(V.length%C)&&R.FLAGS.test(M)){_e=Q,q=M,v();continue}if(_e===te){if(R.WHITESPACE.test(M))continue;if(R.DIGIT.test(M)||R.SIGN.test(M)){_e=Q,q=M;continue}if(R.POINT.test(M)){_e=W,q=M;continue}R.COMMA.test(M)&&(L&&z(M,ce,V),L=!0)}if(_e===Q){if(R.DIGIT.test(M)){q+=M;continue}if(R.POINT.test(M)){q+=M,_e=W;continue}if(R.EXP.test(M)){_e=fe;continue}R.SIGN.test(M)&&q.length===1&&R.SIGN.test(q[0])&&z(M,ce,V)}if(_e===W){if(R.DIGIT.test(M)){q+=M;continue}if(R.EXP.test(M)){_e=fe;continue}R.POINT.test(M)&&q[q.length-1]==="."&&z(M,ce,V)}if(_e===fe){if(R.DIGIT.test(M)){N+=M;continue}if(R.SIGN.test(M)){if(N===""){N+=M;continue}N.length===1&&R.SIGN.test(N)&&z(M,ce,V)}}R.WHITESPACE.test(M)?(v(),_e=te,L=!1):R.COMMA.test(M)?(v(),_e=te,L=!0):R.SIGN.test(M)?(v(),_e=Q,q=M):R.POINT.test(M)?(v(),_e=W,q=M):z(M,ce,V)}return v(),V}let d=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(Z){let G="px";if(typeof Z=="string"||Z instanceof String)for(let R=0,te=d.length;R<te;R++){let Q=d[R];if(Z.endsWith(Q)){G=Q,Z=Z.substring(0,Z.length-Q.length);break}}let C;return G==="px"&&t.defaultUnit!=="px"?C=S.in[t.defaultUnit]/t.defaultDPI:(C=S[G][t.defaultUnit],C<0&&(C=S[G].in*t.defaultDPI)),C*parseFloat(Z)}function _(Z){if(!(Z.hasAttribute("transform")||Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))))return null;let G=I(Z);return ne.length>0&&G.premultiply(ne[ne.length-1]),ye.copy(G),ne.push(G),G}function I(Z){let G=new Ye,C=ae;if(Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))){let R=y(Z.getAttribute("x")),te=y(Z.getAttribute("y"));G.translate(R,te)}if(Z.hasAttribute("transform")){let R=Z.getAttribute("transform").split(")");for(let te=R.length-1;te>=0;te--){let Q=R[te].trim();if(Q==="")continue;let W=Q.indexOf("("),fe=Q.length;if(W>0&&W<fe){let _e=Q.slice(0,W),L=m(Q.slice(W+1));switch(C.identity(),_e){case"translate":if(L.length>=1){let q=L[0],N=0;L.length>=2&&(N=L[1]),C.translate(q,N)}break;case"rotate":if(L.length>=1){let q=0,N=0,V=0;q=L[0]*Math.PI/180,L.length>=3&&(N=L[1],V=L[2]),se.makeTranslation(-N,-V),he.makeRotation(q),X.multiplyMatrices(he,se),se.makeTranslation(N,V),C.multiplyMatrices(se,X)}break;case"scale":if(L.length>=1){let q=L[0],N=q;L.length>=2&&(N=L[1]),C.scale(q,N)}break;case"skewX":L.length===1&&C.set(1,Math.tan(L[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":L.length===1&&C.set(1,0,0,Math.tan(L[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":L.length===6&&C.set(L[0],L[2],L[4],L[1],L[3],L[5],0,0,1);break}}G.premultiply(C)}}return G}function T(Z,G){function C(W){ie.set(W.x,W.y,1).applyMatrix3(G),W.set(ie.x,ie.y)}function R(W){let fe=W.xRadius,_e=W.yRadius,L=Math.cos(W.aRotation),q=Math.sin(W.aRotation),N=new O(fe*L,fe*q,0),V=new O(-_e*q,_e*L,0),z=N.applyMatrix3(G),v=V.applyMatrix3(G),M=ae.set(z.x,v.x,0,z.y,v.y,0,0,0,1),B=se.copy(M).invert(),A=he.copy(B).transpose().multiply(B).elements,b=F(A[0],A[1],A[4]),k=Math.sqrt(b.rt1),J=Math.sqrt(b.rt2);if(W.xRadius=1/k,W.yRadius=1/J,W.aRotation=Math.atan2(b.sn,b.cs),!((W.aEndAngle-W.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let $=se.set(k,0,0,0,J,0,0,0,1),re=he.set(b.cs,b.sn,0,-b.sn,b.cs,0,0,0,1),de=$.multiply(re).multiply(M),Se=ve=>{let{x:me,y:xe}=new O(Math.cos(ve),Math.sin(ve),0).applyMatrix3(de);return Math.atan2(xe,me)};W.aStartAngle=Se(W.aStartAngle),W.aEndAngle=Se(W.aEndAngle),P(G)&&(W.aClockwise=!W.aClockwise)}}function te(W){let fe=E(G),_e=w(G);W.xRadius*=fe,W.yRadius*=_e;let L=fe>Number.EPSILON?Math.atan2(G.elements[1],G.elements[0]):Math.atan2(-G.elements[3],G.elements[4]);W.aRotation+=L,P(G)&&(W.aStartAngle*=-1,W.aEndAngle*=-1,W.aClockwise=!W.aClockwise)}let Q=Z.subPaths;for(let W=0,fe=Q.length;W<fe;W++){let L=Q[W].curves;for(let q=0;q<L.length;q++){let N=L[q];N.isLineCurve?(C(N.v1),C(N.v2)):N.isCubicBezierCurve?(C(N.v0),C(N.v1),C(N.v2),C(N.v3)):N.isQuadraticBezierCurve?(C(N.v0),C(N.v1),C(N.v2)):N.isEllipseCurve&&(ue.set(N.aX,N.aY),C(ue),N.aX=ue.x,N.aY=ue.y,D(G)?R(N):te(N))}}}function P(Z){let G=Z.elements;return G[0]*G[4]-G[1]*G[3]<0}function D(Z){let G=Z.elements,C=G[0]*G[3]+G[1]*G[4];if(C===0)return!1;let R=E(Z),te=w(Z);return Math.abs(C/(R*te))>Number.EPSILON}function E(Z){let G=Z.elements;return Math.sqrt(G[0]*G[0]+G[1]*G[1])}function w(Z){let G=Z.elements;return Math.sqrt(G[3]*G[3]+G[4]*G[4])}function F(Z,G,C){let R,te,Q,W,fe,_e=Z+C,L=Z-C,q=Math.sqrt(L*L+4*G*G);return _e>0?(R=.5*(_e+q),fe=1/R,te=Z*fe*C-G*fe*G):_e<0?te=.5*(_e-q):(R=.5*q,te=-.5*q),L>0?Q=L+q:Q=L-q,Math.abs(Q)>2*Math.abs(G)?(fe=-2*G/Q,W=1/Math.sqrt(1+fe*fe),Q=fe*W):Math.abs(G)===0?(Q=1,W=0):(fe=-.5*Q/G,Q=1/Math.sqrt(1+fe*fe),W=fe*Q),L>0&&(fe=Q,Q=-W,W=fe),{rt1:R,rt2:te,cs:Q,sn:W}}let H=[],Y={},ne=[],ae=new Ye,se=new Ye,he=new Ye,X=new Ye,ue=new Me,ie=new O,ye=new Ye,Ae=new DOMParser().parseFromString(e,"image/svg+xml");return n(Ae.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:H,xml:Ae.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,d,S){let y=x.x,_=m.x,I=d.x,T=S.x,P=x.y,D=m.y,E=d.y,w=S.y,F=(T-I)*(P-E)-(w-E)*(y-I),H=(_-y)*(P-E)-(D-P)*(y-I),Y=(w-E)*(_-y)-(T-I)*(D-P),ne=F/Y,ae=H/Y;if(Y===0&&F!==0||ne<=0||ne>=1||ae<0||ae>1)return null;if(F===0&&Y===0){for(let se=0;se<2;se++)if(o(se===0?d:S,x,m),s.loc==n.ORIGIN){let he=se===0?d:S;return{x:he.x,y:he.y,t:s.t}}else if(s.loc==n.BETWEEN){let he=+(y+s.t*(_-y)).toPrecision(10),X=+(P+s.t*(D-P)).toPrecision(10);return{x:he,y:X,t:s.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?d:S,x,m),s.loc==n.ORIGIN){let ue=X===0?d:S;return{x:ue.x,y:ue.y,t:s.t}}let se=+(y+ne*(_-y)).toPrecision(10),he=+(P+ne*(D-P)).toPrecision(10);return{x:se,y:he,t:ne}}}function o(x,m,d){let S=d.x-m.x,y=d.y-m.y,_=x.x-m.x,I=x.y-m.y,T=S*I-_*y;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===d.x&&x.y===d.y){s.loc=n.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=n.LEFT;return}if(T>Number.EPSILON){s.loc=n.RIGHT;return}if(S*_<0||y*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(S*S+y*y)<Math.sqrt(_*_+I*I)){s.loc=n.BEYOND;return}let P;S!==0?P=_/S:P=I/y,s.loc=n.BETWEEN,s.t=P}function a(x,m){let d=[],S=[];for(let y=1;y<x.length;y++){let _=x[y-1],I=x[y];for(let T=1;T<m.length;T++){let P=m[T-1],D=m[T],E=r(_,I,P,D);E!==null&&d.find(w=>w.t<=E.t+Number.EPSILON&&w.t>=E.t-Number.EPSILON)===void 0&&(d.push(E),S.push(new Me(E.x,E.y)))}}return S}function c(x,m,d){let S=new Me;m.getCenter(S);let y=[];return d.forEach(_=>{_.boundingBox.containsPoint(S)&&a(x,_.points).forEach(T=>{y.push({identifier:_.identifier,isCW:_.isCW,point:T})})}),y.sort((_,I)=>_.point.x-I.point.x),y}function l(x,m,d,S,y){(y==null||y==="")&&(y="nonzero");let _=new Me;x.boundingBox.getCenter(_);let I=[new Me(d,_.y),new Me(S,_.y)],T=c(I,x.boundingBox,m);T.sort((H,Y)=>H.point.x-Y.point.x);let P=[],D=[];T.forEach(H=>{H.identifier===x.identifier?P.push(H):D.push(H)});let E=P[0].point.x,w=[],F=0;for(;F<D.length&&D[F].point.x<E;)w.length>0&&w[w.length-1]===D[F].identifier?w.pop():w.push(D[F].identifier),F++;if(w.push(x.identifier),y==="evenodd"){let H=w.length%2===0,Y=w[w.length-2];return{identifier:x.identifier,isHole:H,for:Y}}else if(y==="nonzero"){let H=!0,Y=null,ne=null;for(let ae=0;ae<w.length;ae++){let se=w[ae];H?(ne=m[se].isCW,H=!1,Y=se):ne!==m[se].isCW&&(ne=m[se].isCW,H=!0)}return{identifier:x.identifier,isHole:H,for:Y}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let h=999999999,u=-999999999,f=e.subPaths.map(x=>{let m=x.getPoints(),d=-999999999,S=999999999,y=-999999999,_=999999999;for(let I=0;I<m.length;I++){let T=m[I];T.y>d&&(d=T.y),T.y<S&&(S=T.y),T.x>y&&(y=T.x),T.x<_&&(_=T.x)}return u<=y&&(u=y+1),h>=_&&(h=_-1),{curves:x.curves,points:m,isCW:Rt.isClockWise(m),identifier:-1,boundingBox:new Ws(new Me(_,S),new Me(y,d))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;let p=f.map(x=>l(x,f,h,u,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(x=>{if(!p[x.identifier].isHole){let d=new vt;d.curves=x.curves,p.filter(y=>y.isHole&&y.for===x.identifier).forEach(y=>{let _=f[y.identifier],I=new mn;I.curves=_.curves,d.holes.push(I)}),g.push(d)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let c=new lt;return c.setAttribute("position",new Je(r,3)),c.setAttribute("normal",new Je(o,3)),c.setAttribute("uv",new Je(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){let l=new Me,h=new Me,u=new Me,f=new Me,p=new Me,g=new Me,x=new Me,m=new Me,d=new Me,S=new Me,y=new Me,_=new Me,I=new Me,T=new Me,P=new Me,D=new Me,E=new Me;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=L(e);let w=e.length;if(w<2)return 0;let F=e[0].equals(e[w-1]),H,Y=e[0],ne,ae=t.strokeWidth/2,se=1/(w-1),he=0,X,ue,ie,ye,Ae=!1,Le=0,Z=c*3,G=c*2;C(e[0],e[1],l).multiplyScalar(ae),m.copy(e[0]).sub(l),d.copy(e[0]).add(l),S.copy(m),y.copy(d);for(let q=1;q<w;q++){H=e[q],q===w-1?F?ne=e[1]:ne=void 0:ne=e[q+1];let N=l;if(C(Y,H,N),u.copy(N).multiplyScalar(ae),_.copy(H).sub(u),I.copy(H).add(u),X=he+se,ue=!1,ne!==void 0){C(H,ne,h),u.copy(h).multiplyScalar(ae),T.copy(H).sub(u),P.copy(H).add(u),ie=!0,u.subVectors(ne,Y),N.dot(u)<0&&(ie=!1),q===1&&(Ae=ie),u.subVectors(ne,H),u.normalize();let V=Math.abs(N.dot(u));if(V>Number.EPSILON){let z=ae/V;u.multiplyScalar(-z),f.subVectors(H,Y),p.copy(f).setLength(z).add(u),D.copy(p).negate();let v=p.length(),M=f.length();f.divideScalar(M),g.subVectors(ne,H);let B=g.length();switch(g.divideScalar(B),f.dot(D)<M&&g.dot(D)<B&&(ue=!0),E.copy(p).add(H),D.add(H),ye=!1,ue?ie?(P.copy(D),I.copy(D)):(T.copy(D),_.copy(D)):Q(),t.strokeLineJoin){case"bevel":W(ie,ue,X);break;case"round":fe(ie,ue),ie?te(H,_,T,X,0):te(H,P,I,X,1);break;case"miter":case"miter-clip":default:let ce=ae*t.strokeMiterLimit/v;if(ce<1)if(t.strokeLineJoin!=="miter-clip"){W(ie,ue,X);break}else fe(ie,ue),ie?(g.subVectors(E,_).multiplyScalar(ce).add(_),x.subVectors(E,T).multiplyScalar(ce).add(T),R(_,X,0),R(g,X,0),R(H,X,.5),R(H,X,.5),R(g,X,0),R(x,X,0),R(H,X,.5),R(x,X,0),R(T,X,0)):(g.subVectors(E,I).multiplyScalar(ce).add(I),x.subVectors(E,P).multiplyScalar(ce).add(P),R(I,X,1),R(g,X,1),R(H,X,.5),R(H,X,.5),R(g,X,1),R(x,X,1),R(H,X,.5),R(x,X,1),R(P,X,1));else ue?(ie?(R(d,he,1),R(m,he,0),R(E,X,0),R(d,he,1),R(E,X,0),R(D,X,1)):(R(d,he,1),R(m,he,0),R(E,X,1),R(m,he,0),R(D,X,0),R(E,X,1)),ie?T.copy(E):P.copy(E)):ie?(R(_,X,0),R(E,X,0),R(H,X,.5),R(H,X,.5),R(E,X,0),R(T,X,0)):(R(I,X,1),R(E,X,1),R(H,X,.5),R(H,X,.5),R(E,X,1),R(P,X,1)),ye=!0;break}}else Q()}else Q();!F&&q===w-1&&_e(e[0],S,y,ie,!0,he),he=X,Y=H,m.copy(T),d.copy(P)}if(!F)_e(H,_,I,ie,!1,X);else if(ue&&r){let q=E,N=D;Ae!==ie&&(q=D,N=E),ie?(ye||Ae)&&(N.toArray(r,0),N.toArray(r,9),ye&&q.toArray(r,3)):(ye||!Ae)&&(N.toArray(r,3),N.toArray(r,9),ye&&q.toArray(r,0))}return Le;function C(q,N,V){return V.subVectors(N,q),V.set(-V.y,V.x).normalize()}function R(q,N,V){r&&(r[Z]=q.x,r[Z+1]=q.y,r[Z+2]=0,o&&(o[Z]=0,o[Z+1]=0,o[Z+2]=1),Z+=3,a&&(a[G]=N,a[G+1]=V,G+=2)),Le+=3}function te(q,N,V,z,v){l.copy(N).sub(q).normalize(),h.copy(V).sub(q).normalize();let M=Math.PI,B=l.dot(h);Math.abs(B)<1&&(M=Math.abs(Math.acos(B))),M/=n,u.copy(N);for(let ce=0,ee=n-1;ce<ee;ce++)f.copy(u).rotateAround(q,M),R(u,z,v),R(f,z,v),R(q,z,.5),u.copy(f);R(f,z,v),R(V,z,v),R(q,z,.5)}function Q(){R(d,he,1),R(m,he,0),R(_,X,0),R(d,he,1),R(_,X,0),R(I,X,1)}function W(q,N,V){N?q?(R(d,he,1),R(m,he,0),R(_,X,0),R(d,he,1),R(_,X,0),R(D,X,1),R(_,V,0),R(T,V,0),R(D,V,.5)):(R(d,he,1),R(m,he,0),R(I,X,1),R(m,he,0),R(D,X,0),R(I,X,1),R(I,V,1),R(D,V,0),R(P,V,1)):q?(R(_,V,0),R(T,V,0),R(H,V,.5)):(R(I,V,1),R(P,V,0),R(H,V,.5))}function fe(q,N){N&&(q?(R(d,he,1),R(m,he,0),R(_,X,0),R(d,he,1),R(_,X,0),R(D,X,1),R(_,he,0),R(H,X,.5),R(D,X,1),R(H,X,.5),R(T,he,0),R(D,X,1)):(R(d,he,1),R(m,he,0),R(I,X,1),R(m,he,0),R(D,X,0),R(I,X,1),R(I,he,1),R(D,X,0),R(H,X,.5),R(H,X,.5),R(D,X,0),R(P,he,1)))}function _e(q,N,V,z,v,M){switch(t.strokeLineCap){case"round":v?te(q,V,N,M,.5):te(q,N,V,M,.5);break;case"square":if(v)l.subVectors(N,q),h.set(l.y,-l.x),u.addVectors(l,h).add(q),f.subVectors(h,l).add(q),z?(u.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(u.toArray(r,3),a[7]===1?f.toArray(r,9):u.toArray(r,9),f.toArray(r,0));else{l.subVectors(V,q),h.set(l.y,-l.x),u.addVectors(l,h).add(q),f.subVectors(h,l).add(q);let B=r.length;z?(u.toArray(r,B-3),f.toArray(r,B-6),f.toArray(r,B-12)):(f.toArray(r,B-6),u.toArray(r,B-3),f.toArray(r,B-12))}break;case"butt":default:break}}function L(q){let N=!1;for(let z=1,v=q.length-1;z<v;z++)if(q[z].distanceTo(q[z+1])<s){N=!0;break}if(!N)return q;let V=[];V.push(q[0]);for(let z=1,v=q.length-1;z<v;z++)q[z].distanceTo(q[z+1])>=s&&V.push(q[z]);return V.push(q[q.length-1]),V}}};window.SlinkGrowthModules={createTile:Qs,VARIANTS:zl,TILE_SPEC:Bl,disposeTile:er};window.Slink3D=(()=>{let i=new oa,e,t=!1,n=null,s=!1,r=null,o=0,a,c,l,h,u,f=new Gs,p=[],g=[],x=[],m,d,S,y=!1,_,I=[],T=[],P=0,D=0,E=(v,M=.55,B={})=>new je({color:v,roughness:M,metalness:0,...B});function w(v,M,B,ce,ee){let A=new vt;return A.moveTo(v+ee,M),A.lineTo(v+B-ee,M),A.quadraticCurveTo(v+B,M,v+B,M+ee),A.lineTo(v+B,M+ce-ee),A.quadraticCurveTo(v+B,M+ce,v+B-ee,M+ce),A.lineTo(v+ee,M+ce),A.quadraticCurveTo(v,M+ce,v,M+ce-ee),A.lineTo(v,M+ee),A.quadraticCurveTo(v,M,v+ee,M),A}function F(v,M,B=0,ce=0,ee=0,A=h){let b=new ze(v,M);return b.position.set(B,ce,ee),b.castShadow=!0,b.receiveShadow=!0,A.add(b),b}function H(v,M,B,ce,ee,A,b,k,J=h){return F(new yn(v,M,B,4,ce),ee,A,b,k,J)}function Y(){let v=document.createElement("canvas");v.width=v.height=128;let M=v.getContext("2d"),B=M.createImageData(128,128),ce=73;for(let A=0;A<B.data.length;A+=4){ce=ce*1664525+1013904223>>>0;let b=128+(ce>>>27)%9;B.data[A]=B.data[A+1]=B.data[A+2]=b,B.data[A+3]=255}M.putImageData(B,0,0);let ee=new pn(v);return ee.wrapS=ee.wrapT=Bi,ee}let ne=()=>Y();function ae(){let v=Y(),M=v.image,B=M.getContext("2d");B.fillStyle="#656565";for(let ce=0;ce<4;ce++){let ee=ce*Math.PI/2+.5;B.save(),B.translate(64+Math.cos(ee)*18,64+Math.sin(ee)*18),B.rotate(ee),B.beginPath(),B.ellipse(0,0,18,9,0,0,Math.PI*2),B.fill(),B.restore()}return B.beginPath(),B.arc(64,64,5,0,Math.PI*2),B.fill(),v.needsUpdate=!0,v}function se(v){let M=document.createElement("canvas");M.width=M.height=128;let B=M.getContext("2d");B.fillStyle="#77421a",B.font="bold 82px Trebuchet MS",B.textAlign="center",B.textBaseline="middle",B.fillText(String(v),64,69);let ce=new pn(M);return ce.colorSpace=_t,ce}function he(v,M){let B=0;for(let ee=0;ee<v.length;ee++){let A=v[ee],b=v[(ee+1)%v.length];B+=A.x*b.y-b.x*A.y}let ce=B>0?1:-1;return v.map((ee,A)=>{let b=v[(A+v.length-1)%v.length],k=v[(A+1)%v.length],J=ee.clone().sub(b).normalize(),K=k.clone().sub(ee).normalize(),$=new Me(J.y,-J.x).multiplyScalar(ce),re=new Me(K.y,-K.x).multiplyScalar(ce),de=$.clone().add(re).normalize();return ee.clone().add(de.multiplyScalar(M/Math.max(.25,de.dot($))))})}function X(v){let M=new vt;return v.forEach((B,ce)=>ce?M.lineTo(B.x,-B.y):M.moveTo(B.x,-B.y)),M.closePath(),M}function ue(v,M){let B=new Set(v),ce=[];for(;B.size;){let ee=B.values().next().value,A=[ee];B.delete(ee);for(let b=0;b<A.length;b++){let k=A[b];for(let J of[k-M,k+M,k%M?k-1:-1,k%M<M-1?k+1:-1])B.has(J)&&(B.delete(J),A.push(J))}ce.push(A)}return ce}function ie(v,M,B){let ce=new Set(v),ee=[],A=(k,J)=>k>=0&&J>=0&&k<M&&ce.has(J*M+k);for(let k of v){let J=k%M,K=Math.floor(k/M),$=20+J*80,re=20+K*80;A(J,K-1)||ee.push([[$,re],[$+80,re]]),A(J+1,K)||ee.push([[$+80,re],[$+80,re+80]]),A(J,K+1)||ee.push([[$+80,re+80],[$,re+80]]),A(J-1,K)||ee.push([[$,re+80],[$,re]])}let b=[];for(;ee.length;){let k=ee.shift(),J=k[0],K=[J],$=k[1];for(;$.join()!=J.join();){K.push($);let re=ee.findIndex(de=>de[0].join()==$.join());if(re<0)break;$=ee.splice(re,1)[0][1]}K=K.filter((re,de)=>{let Se=K[(de+K.length-1)%K.length],ve=K[(de+1)%K.length];return!(Se[0]===re[0]&&ve[0]===re[0]||Se[1]===re[1]&&ve[1]===re[1])}),b.push(K.map(re=>new Me(...re)))}return b.sort((k,J)=>Math.abs(Rt.area(J))-Math.abs(Rt.area(k))),b.map((k,J)=>{let K=he(k,J?B:-B),$=new vt;return K.forEach((re,de)=>{let Se=K[(de+K.length-1)%K.length],ve=K[(de+1)%K.length],me=Math.min(10,re.distanceTo(Se)/3,re.distanceTo(ve)/3),xe=re.clone().add(Se.clone().sub(re).normalize().multiplyScalar(me)),Ee=re.clone().add(ve.clone().sub(re).normalize().multiplyScalar(me));de?$.lineTo(xe.x,-xe.y):$.moveTo(xe.x,-xe.y),$.quadraticCurveTo(re.x,-re.y,Ee.x,-Ee.y)}),$.closePath(),$})}function ye(){u=document.createElement("canvas"),u.id="terrain3d",u.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(u),a=new ea({canvas:u,alpha:!0,antialias:!0,powerPreference:"high-performance"}),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.shadowMap.enabled=!0,a.shadowMap.autoUpdate=!1,a.shadowMap.needsUpdate=!0,a.shadowMap.type=io,a.outputColorSpace=_t,a.toneMapping=uo,a.toneMappingExposure=.88,c=new ws,c.add(new Vs("#fff6dc","#a28d6c",1.65));let v=new $i("#fff4dc",3.3);v.position.set(-300,450,750),v.castShadow=!0,v.shadow.mapSize.set(2048,2048),Object.assign(v.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),v.shadow.bias=-3e-4,v.shadow.normalBias=.9,v.shadow.radius=4,c.add(v);let M=new $i("#d4e8ff",.4);M.position.set(500,-100,400),c.add(M),h=new He,c.add(h),e=ru(),e.setSize(90),c.add(e.group),l=new pi,l.up.set(0,1,0),l.near=1,l.far=3e3,d=new ResizeObserver(()=>Ae()),d.observe(document.getElementById("board"));let B=(k,J)=>{let K=u.getBoundingClientRect();return f.setFromCamera(new Me((k-K.left)/K.width*2-1,-(J-K.top)/K.height*2+1),l),f.intersectObjects(p,!1)[0]?.object.userData.cell??-1},ce=new jt(new O(0,0,1),-8.5),ee=new O,A=(k,J)=>{let K=u.getBoundingClientRect();return f.setFromCamera(new Me((k-K.left)/K.width*2-1,-(J-K.top)/K.height*2+1),l),f.ray.intersectPlane(ce,ee)?ou(m.l.n,window.SlinkAcceptedPath||[],ee.x,ee.y,window.SlinkTouchSettings):-1},b=k=>{if(!y)return;let J=performance.now();window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},input:Math.round(Math.max(0,J-k.timeStamp))};let K=_||k,$=k.clientX-K.clientX,re=k.clientY-K.clientY,de=Math.max(1,Math.ceil(Math.hypot($,re)/3));for(let Se=1;Se<=de;Se++){let ve=A(K.clientX+$*Se/de,K.clientY+re*Se/de);ve>=0&&m.onMove(ve)}_={clientX:k.clientX,clientY:k.clientY},window.SlinkTouchMetrics.handler=Math.round((performance.now()-J)*10)/10};u.addEventListener("pointerdown",k=>{k.preventDefault(),u.setPointerCapture(k.pointerId),y=!0,t=B(k.clientX,k.clientY)===(window.SlinkAcceptedPath||[]).at(-1)||f.intersectObject(e.group,!0).length>0,_=null,b(k),document.getElementById("board").focus({preventScroll:!0})}),u.addEventListener("pointermove",k=>{let J=k.getCoalescedEvents?.();for(let K of J?.length?J:[k])b(K)});for(let k of["pointerup","pointercancel","lostpointercapture"])u.addEventListener(k,()=>{y=!1,t=!1,_=null});u.addEventListener("webglcontextlost",k=>{k.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),u.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function Ae(v=!1){if(!m)return;G=null;let M=document.getElementById("board"),B=M.clientWidth,ce=M.clientHeight;if(!B||!ce)return;a.setSize(B,ce,!1);let ee=new fn().setFromObject(h);ee.max.z=Math.max(ee.max.z,60);let A=ee.getCenter(new O);l.position.set(A.x,A.y-430,A.z+1250),l.lookAt(A.x,A.y,0),l.updateMatrixWorld();let b=c.children.find(ve=>ve.isDirectionalLight&&ve.castShadow);if(b){let ve=Math.max(ee.max.x-ee.min.x,ee.max.y-ee.min.y)*.75+60;b.target.position.set(A.x,A.y,0),c.add(b.target),Object.assign(b.shadow.camera,{left:-ve,right:ve,top:ve,bottom:-ve}),b.shadow.camera.updateProjectionMatrix()}let k=l.matrixWorldInverse,J=new Me(1/0,1/0),K=new Me(-1/0,-1/0);for(let ve of[ee.min.x,ee.max.x])for(let me of[ee.min.y,ee.max.y])for(let xe of[ee.min.z,ee.max.z]){let Ee=new O(ve,me,xe).applyMatrix4(k);J.min(Ee),K.max(Ee)}let $=(J.x+K.x)/2,re=(J.y+K.y)/2,de=Math.max((K.y-J.y)/2,(K.x-J.x)/2/(B/ce))+13,Se=de*B/ce;Object.assign(l,{left:$-Se,right:$+Se,top:re+de,bottom:re-de}),l.updateProjectionMatrix(),a.shadowMap.needsUpdate=!0,v||te()}let Le=window.SlinkHeadFinale?.enabled!==!1,Z=typeof location<"u"&&new URLSearchParams(location.search).has("preview")&&new URLSearchParams(location.search).has("camera-finale"),G=null,C={strength:115,duration:1.8,delay:.6};Le&&addEventListener("message",v=>{if(!(v.origin!==location.origin||v.source!==parent||v.data?.type!=="slink-head-zoom-study"))for(let[M,B,ce]of[["strength",100,160],["duration",.3,4],["delay",0,3]]){let ee=Number(v.data[M]);Number.isFinite(ee)&&(C[M]=ct.clamp(ee,B,ce))}});function R(v){if(!Z&&!Le){G&&(l.position.copy(G.position),l.quaternion.copy(G.rotation),Object.assign(l,G.bounds),l.updateProjectionMatrix(),G=null);return}if(v.celebrationAge<0){u.dataset.finaleCamera="0",G&&(l.position.copy(G.position),l.quaternion.copy(G.rotation),Object.assign(l,G.bounds),l.updateProjectionMatrix(),G=null);return}if(G||(G={position:l.position.clone(),rotation:l.quaternion.clone(),bounds:{left:l.left,right:l.right,top:l.top,bottom:l.bottom}}),Le&&!Z){let b=ct.clamp((v.celebrationAge-C.delay)/C.duration,0,1);b=b*b*b*(b*(b*6-15)+10);let k=1+(C.strength/100-1)*b;l.updateMatrixWorld();let J=new O(v.x,v.y,35).applyMatrix4(l.matrixWorldInverse),K=G.bounds,$=(K.left+K.right)/2,re=(K.top+K.bottom)/2,de=C.strength>100?b:0,Se=ct.lerp($,J.x,de),ve=ct.lerp(re,J.y,de),me=(K.right-K.left)/2/k,xe=(K.top-K.bottom)/2/k;Object.assign(l,{left:Se-me,right:Se+me,top:ve+xe,bottom:ve-xe}),l.updateProjectionMatrix(),u.dataset.studyZoom=String(k);return}let M=ct.clamp((v.celebrationAge-.25)/2.5,0,1);M=M*M*M*(M*(M*6-15)+10);let B=new O(v.x,v.y-320,155),ce=l.clone();ce.up.set(0,0,1),ce.position.copy(B),ce.lookAt(v.x,v.y,35),l.position.lerpVectors(G.position,B,M),l.quaternion.copy(G.rotation).slerp(ce.quaternion,M);let ee=85,A=u.clientWidth/u.clientHeight;for(let[b,k]of Object.entries({left:-ee*A,right:ee*A,top:ee,bottom:-ee}))l[b]=ct.lerp(G.bounds[b],k,M);l.updateProjectionMatrix(),u.dataset.finaleCamera=String(M)}function te(){a.render(c,l)}let Q=null;function W(v){if(requestAnimationFrame(W),!a||!m||document.hidden||window.SlinkPrewarmPaused||document.getElementById("win")?.hidden===!1){D=v;return}if(v-D<33)return;P+=Math.min((v-D)/1e3,.1),D=v,i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220;let M=i.sample(v/1e3);Le=window.SlinkHeadFinale?.enabled!==!1,new URLSearchParams(location.search).has("head-finale")||(C={strength:window.SlinkHeadFinale?.strength??145,duration:window.SlinkHeadFinale?.duration??1.8,delay:window.SlinkHeadFinale?.delay??.6});let B=new URLSearchParams(location.search).has("preview")&&window.SlinkQuickFinale?.enabled;B?(Q??={...C},C={...Q,duration:.55,delay:.05}):Q&&(C=Q,Q=null),R(M),!M.moving&&window.SlinkTouchAcceptedAt!==void 0&&(window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},arrival:Math.round(performance.now()-window.SlinkTouchAcceptedAt)},window.SlinkTouchAcceptedAt=void 0),e.group.position.set(M.x,M.y,8.5+9.5*(I.find(ee=>ee.i===M.cell)?.progress||0)),e.group.rotation.z=M.heading,e.group.visible&&e.update(P,0,{active:M.moving,travel:M.travel,celebrationAge:B?M.celebrationAge:Le?M.celebrationAge-2.4:M.celebrationAge,headLiftAge:Le?M.celebrationAge-(B?.05:.9):-1,headLiftAngle:48*Math.PI/180,headLiftDuration:B?.35:1.5,celebrationTurn:M.celebrationTurn,celebrationStyle:B?"compact":"gentle"}),u.dataset.creatureCell=M.cell,u.dataset.creatureMoving=String(M.moving),u.dataset.creatureX=M.x,u.dataset.creatureY=M.y,u.dataset.creatureHeading=M.heading,u.dataset.creatureCelebration=M.celebrationAge,window.SlinkAudio?.celebration(M.celebrationAge);for(let ee of T)ee.update(P);let ce=window.SlinkBacktrackHighlight?.enabled!==!1&&t?(window.SlinkAcceptedPath||[]).at(-2):void 0;u.dataset.highlightedCell=ce??"";for(let ee of I){if(du(ee.grown,ee.i===ce,window.SlinkBacktrackHighlight?.strength??.24),ee.meadow?.update(P),!ee.grown)continue;let A=Math.min((v-ee.changedAt)/ee.duration,1);ee.progress=ee.from+(ee.target-ee.from)*Math.max(0,A);let b=ee.progress;ee.grown.scale.z=(8.5+9.5*b)/18,ee.grown.position.z=0,ee.grown.visible=b>0,ee.lastOpacity!==b&&(ee.lastOpacity=b,ee.grown.traverse(k=>{k.isMesh&&(k.material.transparent=b<1,k.material.opacity=b,k.castShadow=b>.7)})),ee.earth.visible=b<1}for(let ee of x){let A=I.find(b=>b.i===ee.i);ee.goal.group.position.z=8.5+9.5*(A?.progress||0),ee.goal.update(P,.033)}r?.update(P-o),u.dataset.birdCount=String(r?.bird?1:0),u.dataset.birdSpecies=r?.bird?.group.userData.species||"",u.dataset.birdGroundVisit=String(r?.bird?.group.userData.groundVisit??-1),a.shadowMap.needsUpdate=!0,te()}requestAnimationFrame(W);function fe(v){let M=new Set,B=new Set,ce=new Set;v.traverse(ee=>{ee.geometry&&M.add(ee.geometry);for(let A of[].concat(ee.material||[])){B.add(A);for(let b of Object.values(A))b?.isTexture&&ce.add(b)}}),v.clear(),M.forEach(ee=>ee.dispose()),B.forEach(ee=>ee.dispose()),ce.forEach(ee=>ee.dispose())}function _e(){return{root:h,current:m,targets:p,grass:g,coins:x,tiles:I,liquids:T,fenceLife:r,fenceStarted:o}}function L(v){({root:h,current:m,targets:p,grass:g,coins:x,tiles:I,liquids:T,fenceLife:r=null,fenceStarted:o=P}=v)}function q(v,M,B){m={l:v,onMove:B},fe(h),p=[],g=[],x=[],I=[],T=[],r=null,o=P;let ce=new ir,ee=ce.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+M+'"/></svg>'),A=ir.createShapes(ee.paths[0])[0].getPoints(24);A.pop();let b=X(he(A,11)),k=E("#f6dfb5",.62,{bumpMap:ne(),bumpScale:.18,side:kt}),J=[...v.water||[],...v.lava||[]],K=ve=>({x:ve%v.n*80+60,y:-(Math.floor(ve/v.n)*80+60)}),$=[];for(let[ve,me]of[["water",v.water||[]],["lava",v.lava||[]]])for(let xe of ue(me,v.n)){let Ee=ie(xe,v.n,7);b.holes.push(Ee[0]),$.push({type:ve,group:xe,shapes:Ee})}let re=new Yt(b,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});F(re,k,0,0,-24);for(let ve of ue(v.solution,v.n)){let me=ie(ve,v.n,0),xe=me[0];xe.holes.push(...me.slice(1)),F(new Bs(xe),E("#87623d",.8),0,0,3.2)}for(let ve of v.solution){let me=K(ve);I.push({i:ve,p:me,id:null,group:null})}for(let{type:ve,group:me,shapes:xe}of $){let Ee=K(me[0]),Pe=window.SlinkCatalogueDesign,Re=Eu(ve,{style:ve==="water"?Pe?.waterStyle||"sway":Pe?.lavaStyle||"bubbles",center:[Ee.x,Ee.y]});T.push(Re);let Be=xe[0];Be.holes.push(...xe.slice(1)),F(new Yt(Be,{depth:3,bevelEnabled:!1,curveSegments:20}),Re.material,0,0,-15)}let de=bu(v),Se=new Map;for(let ve of v.stones||[]){let me=de.stones[ve];Se.has(me)||Se.set(me,yu(me,{seed:de.seed}));let xe=Se.get(me).group.clone(!0),Ee=K(ve);xe.position.set(Ee.x,Ee.y,0),xe.userData.cell=ve,h.add(xe),xe.traverse(Pe=>{Pe.isMesh&&(Pe.userData.cell=-1,p.push(Pe))})}if(v.fence){let ve=iu(v),me={n:v.n,walls:v.walls,origin:[60,-60],style:v.fence.style,design:v.fence.design};ve?(r=Qh({...me,seed:ve.seed,perchIndex:ve.perchIndex,groundTargets:()=>ve.cells.map(xe=>({cell:xe,center:!0,position:[xe%v.n*80+60,-Math.floor(xe/v.n)*80-60,8.5+9.5*(I.find(Ee=>Ee.i===xe)?.progress||0)]})),isUnsafe:xe=>su(v,xe,window.SlinkAcceptedPath||[],i.complete)}),h.add(r.group)):h.add(na(me).group)}else for(let[ve,me]of v.walls){let xe=K(ve),Ee=K(me);H(xe.x===Ee.x?53:9,xe.y===Ee.y?53:9,18,3,E("#a49983",.85),(xe.x+Ee.x)/2,(xe.y+Ee.y)/2,17)}for(let[ve,me]of v.marks.entries()){let xe=K(me),Ee=xu({species:de.flowers[ve],number:ve+1,state:ve===0?"next":"closed",layout:"compact"});if(new URLSearchParams(location.search).has("preview")){let Pe=new URLSearchParams(location.search).get("flower-anchor"),Re={front:[-25,-22],back:[-25,22],compact:[-18,-10]}[Pe];if(Re)for(let Be of[Ee.group.children[0],Ee.group.children[4]])Be.position.x=Re[0],Be.position.z=-Re[1];if(Pe==="compact"){let Be=Ee.group.children[4],j=new He;j.scale.set(.85,.62,.85);for(let we of[...Be.children])j.add(we);Be.add(j)}}Ee.group.rotation.x=Math.PI/2,Ee.group.position.set(xe.x,xe.y,8.5),h.add(Ee.group),x.push({i:me,goal:Ee})}a.shadowMap.needsUpdate=!0,s||Ae(!0)}function N(v){v.earth=hu(Qs("earth-loam",{seed:73+v.i*19})),v.group=v.earth,v.earth.position.set(v.p.x,v.p.y,0),h.add(v.earth),v.earth.traverse(M=>{M.isMesh&&M.userData.surface&&(M.userData.cell=v.i,p.push(M))}),v.progress=0,v.target=0,v.from=0,v.changedAt=performance.now(),v.duration=300}function V(v,M){if(!a||!m||n?.current.l===v)return!1;n&&(fe(n.root),n=null);let B=_e(),ce=performance.now(),ee=e.group.visible,A=a.getRenderTarget(),b,k;s=!0,L({root:new He,current:null,targets:[],grass:[],coins:[],tiles:[],liquids:[]}),k=h;try{q(v,M,()=>{});for(let K of I)N(K);for(let K of x)K.goal.setSize(window.SlinkMarkerSize||27);n=_e(),c.remove(B.root),c.add(h),e.group.visible=!1;let J=[];return h.traverse(K=>{K.isMesh&&(J.push([K,K.frustumCulled]),K.frustumCulled=!1)}),a.compile(c,l),b=new Qt(128,128),b.texture.colorSpace=a.outputColorSpace,a.setRenderTarget(b),a.shadowMap.needsUpdate=!0,te(),J.forEach(([K,$])=>K.frustumCulled=$),u.dataset.nextPrepared=v.id,u.dataset.nextPrepareMs=Math.round(performance.now()-ce),!0}catch(J){return console.warn("Next puzzle preparation:",J),fe(k),n=null,!1}finally{a.setRenderTarget(A),b?.dispose(),c.remove(k),c.add(B.root),e.group.visible=ee,L(B),s=!1,a.shadowMap.needsUpdate=!0}}function z(v,M){c.remove(h),fe(h),L(n),n=null,m={l:v,onMove:M},o=P,c.add(h),Ae(!0),u.dataset.nextPrepared="",u.dataset.usedPrepared=v.id}return{prepare:V,diagnostics(){return a?{textures:a.info.memory.textures,geometries:a.info.memory.geometries,programs:a.info.programs.length,flowers:x.map(v=>v.goal.group.userData.species),bloomsReady:x.every(v=>v.goal.state==="bloom"&&v.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:h.children.filter(v=>v.userData.style&&v.userData.walkable===!1).map(v=>v.userData.style),bird:r?.bird?{species:r.bird.group.userData.species,landingCell:r.bird.group.userData.landingCell,groundVisit:r.bird.group.userData.groundVisit}:null,fence:m?.l.fence?{...m.l.fence,spans:h.getObjectByName("wood-fence")?.children.filter(v=>v.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:u.dataset.creatureCell,moving:u.dataset.creatureMoving,heading:u.dataset.creatureHeading,celebrationAge:u.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(v,M,B,ce){try{let ee=performance.now(),A=m?.l!==v;a||ye();let b=performance.now();A&&(n?.current.l===v?z(v,ce):(n&&(fe(n.root),n=null),q(v,B,ce),u.dataset.usedPrepared=""));let k=performance.now();M.at(-1)!==window.SlinkAcceptedPath?.at(-1)&&(window.SlinkTouchAcceptedAt=performance.now()),window.SlinkAcceptedPath=[...M],i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220,i.sync(v,M,performance.now()/1e3);let J=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==J.palette&&e.setPalette(J.palette),e.setSize(J.size),e.group.visible=J.enabled!==!1,u.dataset.creatureVisible=String(e.group.visible);let K=v.marks.find(re=>!M.includes(re));for(let re of I){re.group||N(re);let de=M.includes(re.i)?1:0;if(de&&!re.grown){if(re.meadow=nu(v,re.i),re.grown=re.meadow.group,v.marks.includes(re.i))for(let Se of[...re.grown.children])!Se.userData.surface&&Se.position.x>0&&Se.position.y<-3&&re.grown.remove(Se);re.grown.position.set(re.p.x,re.p.y,0),h.add(re.grown),re.grown.traverse(Se=>{Se.isMesh&&Se.userData.surface&&(Se.userData.cell=re.i,p.push(Se))}),re.grown.visible=!1}de!==re.target&&(re.from=re.progress,re.target=de,re.changedAt=performance.now(),re.duration=de?300:180)}for(let re of x){re.goal.setState(M.includes(re.i)?"bloom":re.i===K?"next":"closed"),re.goal.setSize(window.SlinkMarkerSize||27);let de=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};re.goal.setInsects(de.enabled),re.goal.setVisitorSize("bee",de.bee),re.goal.setVisitorSize("bumblebee",de.bumblebee)}if(A){let re=i.sample(performance.now()/1e3);e.group.position.set(re.x,re.y,8.5),e.group.rotation.z=re.heading,e.update(P,0,{active:!1})}let $=performance.now();return a.shadowMap.needsUpdate=!0,te(),A&&(u.dataset.startup=JSON.stringify({install:Math.round(b-ee),terrain:Math.round(k-b),tiles:Math.round($-k),firstRender:Math.round(performance.now()-$),total:Math.round(performance.now()-ee)})),!0}catch(ee){return console.error("3D renderer:",ee),document.getElementById("field").classList.remove("has-3d"),!1}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
