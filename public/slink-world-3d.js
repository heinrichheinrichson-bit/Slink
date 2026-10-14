(()=>{var vc=0,Ya=1,Mc=2;var Za=1,to=2,mn=3,Rn=0,Lt=1,Ft=2,Ln=0,si=1,Ja=2,$a=3,Ka=4,Sc=5,Wn=100,bc=101,Ec=102,Tc=103,wc=104,Ac=200,Rc=201,Cc=202,Ic=203,Rr=204,Cr=205,Pc=206,Lc=207,Dc=208,Uc=209,Nc=210,Fc=211,Oc=212,Bc=213,zc=214,no=0,io=1,so=2,ri=3,ro=4,oo=5,ao=6,lo=7,ja=0,kc=1,Hc=2,Dn=0,Vc=1,Gc=2,Wc=3,co=4,Xc=5,qc=6,Yc=7;var Qa=300,pi=301,mi=302,ho=303,uo=304,Ws=306,Oi=1e3,Gn=1001,Ir=1002,Nt=1003,Zc=1004;var Xs=1005;var It=1006,fo=1007;var Jn=1008;var an=1009,el=1010,tl=1011,Ki=1012,po=1013,$n=1014,gn=1015,ji=1016,mo=1017,go=1018,Qi=1020,nl=35902,il=35899,sl=1021,rl=1022,Zt=1023,Bi=1026,es=1027,ol=1028,xo=1029,al=1030,_o=1031;var yo=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,vo=35840,Mo=35841,So=35842,bo=35843,Eo=36196,To=37492,wo=37496,Ao=37808,Ro=37809,Co=37810,Io=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Ho=36492,Vo=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var gs=2300,Pr=2301,Ar=2302,Da=2400,Ua=2401,Na=2402;var Jc=3200,$c=3201;var ll=0,Kc=1,Un="",xt="srgb",oi="srgb-linear",xs="linear",nt="srgb";var ii=7680;var Fa=519,jc=512,Qc=513,eh=514,cl=515,th=516,nh=517,ih=518,sh=519,Oa=35044;var hl="300 es",Qt=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=1234567,ds=Math.PI/180,zi=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function ul(i,e){return(i%e+e)%e}function du(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fu(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function pu(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function mu(i,e=1){return e-Math.abs(ul(i,e*2)-e)}function gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yu(i,e){return i+Math.random()*(e-i)}function vu(i){return i*(.5-Math.random())}function Mu(i){i!==void 0&&(Gl=i);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(i){return i*ds}function bu(i){return i*zi}function Eu(i){return(i&i-1)===0&&i!==0}function Tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Au(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ln={DEG2RAD:ds,RAD2DEG:zi,generateUUID:gi,clamp:Ke,euclideanModulo:ul,mapLinear:du,inverseLerp:fu,lerp:fs,damp:pu,pingpong:mu,smoothstep:gu,smootherstep:xu,randInt:_u,randFloat:yu,randFloatSpread:vu,seededRandom:Mu,degToRad:Su,radToDeg:bu,isPowerOfTwo:Eu,ceilPowerOfTwo:Tu,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Au,normalize:Ct,denormalize:Ni},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==x){let m=1-a,h=c*f+l*p+u*x+d*_,T=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let I=Math.sqrt(y),w=Math.atan2(I,h*T);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}let v=a*T;if(c=c*m+f*v,l=l*m+p*v,u=u*m+x*v,d=d*m+_*v,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+u*d+c*p-l*f,e[t+1]=c*x+u*f+l*d-a*p,e[t+2]=l*x+u*p+a*f-c*d,e[t+3]=u*x-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*p*x,this._y=l*p*d-f*u*x,this._z=l*u*x+f*p*d,this._w=l*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+l*p*x,this._y=l*p*d-f*u*x,this._z=l*u*x-f*p*d,this._w=l*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-l*p*x,this._y=l*p*d+f*u*x,this._z=l*u*x+f*p*d,this._w=l*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-l*p*x,this._y=l*p*d+f*u*x,this._z=l*u*x-f*p*d,this._w=l*u*d+f*p*x;break;case"YZX":this._x=f*u*d+l*p*x,this._y=l*p*d+f*u*x,this._z=l*u*x-f*p*d,this._w=l*u*d-f*p*x;break;case"XZY":this._x=f*u*d-l*p*x,this._y=l*p*d-f*u*x,this._z=l*u*x+f*p*d,this._w=l*u*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa=new k,Wl=new In,We=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],h=s[6],T=s[1],y=s[4],v=s[7],I=s[2],w=s[5],C=s[8];return r[0]=o*_+a*T+c*I,r[3]=o*m+a*y+c*w,r[6]=o*h+a*v+c*C,r[1]=l*_+u*T+d*I,r[4]=l*m+u*y+d*w,r[7]=l*h+u*v+d*C,r[2]=f*_+p*T+x*I,r[5]=f*m+p*y+x*w,r[8]=f*h+p*v+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,p=l*r-o*c,x=t*d+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},la=new We;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=ys("canvas");return i.style.display="block",i}var Xl={};function ki(i){i in Xl||(Xl[i]=!0,console.warn(i))}function oh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ql=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ru(){let i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Qe=Ru();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Lr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=ys("canvas")),bi.width=e.width,bi.height=e.height;let s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cu=0,Hi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iu=0,ha=new k,Pt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=It,o=Jn,a=Zt,c=an,l=i.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=gi(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Qa;Pt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],x=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(p+1)/2,I=(h+1)/2,w=(u+f)/4,C=(d+_)/4,D=(x+m)/4;return y>v&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=C/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Dr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ur=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(r,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),rr.subVectors(this.max,os),Ei.subVectors(e.a,os),Ti.subVectors(e.b,os),wi.subVectors(e.c,os),Fn.subVectors(Ti,Ei),On.subVectors(wi,Ti),Qn.subVectors(Ei,wi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ua(t,Ei,Ti,wi,rr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ei,Ti,wi,rr))?!1:(or.crossVectors(Fn,On),t=[or.x,or.y,or.z],ua(t,Ei,Ti,wi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new k,new k,new k,new k,new k,new k,new k,new k],$t=new k,sr=new dn,Ei=new k,Ti=new k,wi=new k,Fn=new k,On=new k,Qn=new k,os=new k,rr=new k,or=new k,ei=new k;function ua(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);let a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Pu=new dn,as=new k,da=new k,ai=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(da)),this.expandByPoint(as.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new k,fa=new k,ar=new k,Bn=new k,pa=new k,lr=new k,ma=new k,Vi=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fa.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(fa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=Bn.dot(this.direction),c=-Bn.dot(ar),l=Bn.lengthSq(),u=Math.abs(1-o*o),d,f,p,x;if(u>0)if(d=o*c-a,f=o*a-c,x=r*u,d>=0)if(f>=-x)if(f<=x){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fa).addScaledVector(ar,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),lr.subVectors(n,e),ma.crossVectors(pa,lr);let o=this.direction.dot(ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);let c=a*this.direction.dot(lr.crossVectors(Bn,lr));if(c<0)return null;let l=a*this.direction.dot(pa.cross(Bn));if(l<0||c+l>o)return null;let u=-a*Bn.dot(ma);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,c,l,u,d,f,p,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,f,p,x,_,m)}set(e,t,n,s,r,o,a,c,l,u,d,f,p,x,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*d,x=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+x*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,x=l*u,_=l*d;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,x=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,x=a*u,_=a*d;t[0]=c*u,t[4]=x*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=x*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+x,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Du)}lookAt(e,t,n){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),zn.crossVectors(n,zt),zn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),zn.crossVectors(n,zt)),zn.normalize(),cr.crossVectors(zt,zn),s[0]=zn.x,s[4]=cr.x,s[8]=zt.x,s[1]=zn.y,s[5]=cr.y,s[9]=zt.y,s[2]=zn.z,s[6]=cr.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],h=n[14],T=n[3],y=n[7],v=n[11],I=n[15],w=s[0],C=s[4],D=s[8],S=s[12],E=s[1],V=s[5],W=s[9],$=s[13],K=s[2],re=s[6],ne=s[10],ce=s[14],q=s[3],le=s[7],ie=s[11],X=s[15];return r[0]=o*w+a*E+c*K+l*q,r[4]=o*C+a*V+c*re+l*le,r[8]=o*D+a*W+c*ne+l*ie,r[12]=o*S+a*$+c*ce+l*X,r[1]=u*w+d*E+f*K+p*q,r[5]=u*C+d*V+f*re+p*le,r[9]=u*D+d*W+f*ne+p*ie,r[13]=u*S+d*$+f*ce+p*X,r[2]=x*w+_*E+m*K+h*q,r[6]=x*C+_*V+m*re+h*le,r[10]=x*D+_*W+m*ne+h*ie,r[14]=x*S+_*$+m*ce+h*X,r[3]=T*w+y*E+v*K+I*q,r[7]=T*C+y*V+v*re+I*le,r[11]=T*D+y*W+v*ne+I*ie,r[15]=T*S+y*$+v*ce+I*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],h=e[15];return x*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+h*(-s*a*u-t*c*d+t*a*f+s*o*d-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],h=e[15],T=d*m*l-_*f*l+_*c*p-a*m*p-d*c*h+a*f*h,y=x*f*l-u*m*l-x*c*p+o*m*p+u*c*h-o*f*h,v=u*_*l-x*d*l+x*a*p-o*_*p-u*a*h+o*d*h,I=x*d*c-u*_*c-x*a*f+o*_*f+u*a*m-o*d*m,w=t*T+n*y+s*v+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=T*C,e[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*h-n*f*h)*C,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*h+n*c*h)*C,e[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*C,e[4]=y*C,e[5]=(u*m*r-x*f*r+x*s*p-t*m*p-u*s*h+t*f*h)*C,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*h-t*c*h)*C,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*C,e[8]=v*C,e[9]=(x*d*r-u*_*r-x*n*p+t*_*p+u*n*h-t*d*h)*C,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*h+t*a*h)*C,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*p-t*a*p)*C,e[12]=I*C,e[13]=(u*_*s-x*d*s+x*n*f-t*_*f-u*n*m+t*d*m)*C,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*n*c-t*d*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,p=r*u,x=r*d,_=o*u,m=o*d,h=a*d,T=c*l,y=c*u,v=c*d,I=n.x,w=n.y,C=n.z;return s[0]=(1-(_+h))*I,s[1]=(p+v)*I,s[2]=(x-y)*I,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+h))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(x+y)*C,s[9]=(m-T)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);let l=1/r,u=1/o,d=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,_;if(c)x=r/(o-r),_=o*r/(o-r);else if(a===Qt)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_s)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,_;if(c)x=1/(o-r),_=o/(o-r);else if(a===Qt)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===_s)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new k,Kt=new ct,Lu=new k(0,0,0),Du=new k(1,1,1),zn=new k,cr=new k,zt=new k,Zl=new ct,Jl=new In,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uu=0,$l=new k,Ri=new In,bn=new ct,hr=new k,ls=new k,Nu=new k,Fu=new In,Kl=new k(1,0,0),jl=new k(0,1,0),Ql=new k(0,0,1),ec={type:"added"},Ou={type:"removed"},Ci={type:"childadded",child:null},ga={type:"childremoved",child:null},bt=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new en,n=new In,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,hr,this.up):bn.lookAt(hr,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ou),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new k(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new k,En=new k,xa=new k,Tn=new k,Ii=new k,Pi=new k,tc=new k,_a=new k,ya=new k,va=new k,Ma=new ft,Sa=new ft,ba=new ft,Vn=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),En.subVectors(n,t),xa.subVectors(e,t);let o=jt.dot(jt),a=jt.dot(En),c=jt.dot(xa),l=En.dot(En),u=En.dot(xa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ma.setScalar(0),Sa.setScalar(0),ba.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),En.subVectors(e,t),jt.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),En.subVectors(this.a,this.b),jt.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Pi.subVectors(r,n),_a.subVectors(e,n);let c=Ii.dot(_a),l=Pi.dot(_a);if(c<=0&&l<=0)return t.copy(n);ya.subVectors(e,s);let u=Ii.dot(ya),d=Pi.dot(ya);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ii,o);va.subVectors(e,r);let p=Ii.dot(va),x=Pi.dot(va);if(x>=0&&p<=x)return t.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Pi,a);let m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return tc.subVectors(r,s),a=(d-u)/(d-u+(p-x)),t.copy(s).addScaledVector(tc,a);let h=1/(m+_+f);return o=_*h,a=f*h,t.copy(n).addScaledVector(Ii,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=ul(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ea(o,r,e+1/3),this.g=Ea(o,r,e),this.b=Ea(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=xt){Qe.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(ur);let n=fs(kn.h,ur.h,t),s=fs(kn.s,ur.s,t),r=fs(kn.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Ve;Ve.NAMES=ah;var Bu=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=si,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new k,dr=new me,zu=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}};var Ms=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ss=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},ku=0,Yt=new ct,Ta=new bt,Li=new k,kt=new dn,cs=new dn,St=new k,pt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(kt.min,cs.min),kt.expandByPoint(St),St.addVectors(kt.max,cs.max),kt.expandByPoint(St)):(kt.expandByPoint(cs.min),kt.expandByPoint(cs.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)St.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(e,l),St.add(Li)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new k,c[D]=new k;let l=new k,u=new k,d=new k,f=new me,p=new me,x=new me,_=new k,m=new k;function h(D,S,E){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,E),u.sub(l),d.sub(l),p.sub(f),x.sub(f);let V=1/(p.x*x.y-x.x*p.y);isFinite(V)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(V),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(V),a[D].add(_),a[S].add(_),a[E].add(_),c[D].add(m),c[S].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,S=T.length;D<S;++D){let E=T[D],V=E.start,W=E.count;for(let $=V,K=V+W;$<K;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}let y=new k,v=new k,I=new k,w=new k;function C(D){I.fromBufferAttribute(s,D),w.copy(I);let S=a[D];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(w,S);let V=v.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,V)}for(let D=0,S=T.length;D<S;++D){let E=T[D],V=E.start,W=E.count;for(let $=V,K=V+W;$<K;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)f[x++]=l[p++]}return new Ht(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nc=new ct,ti=new Vi,fr=new ai,ic=new k,pr=new k,mr=new k,gr=new k,wa=new k,xr=new k,sc=new k,_r=new k,ze=class extends bt{constructor(e=new pt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(wa.fromBufferAttribute(d,e),o?xr.addScaledVector(wa,u):xr.addScaledVector(wa.sub(t),u))}t.add(xr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(fr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(fr,ic)===null||ti.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(r).invert(),ti.copy(e.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],h=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,I=y;v<I;v+=3){let w=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);s=yr(this,h,e,n,l,u,d,w,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){let T=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=yr(this,o,e,n,l,u,d,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],h=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,I=y;v<I;v+=3){let w=v,C=v+1,D=v+2;s=yr(this,h,e,n,l,u,d,w,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,h=_;m<h;m+=3){let T=m,y=m+1,v=m+2;s=yr(this,o,e,n,l,u,d,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Hu(i,e,t,n,s,r,o,a){let c;if(e.side===Lt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Rn,a),c===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:i}}function yr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);let u=Hu(i,e,t,n,pr,mr,gr,sc);if(u){let d=new k;Vn.getBarycoord(sc,pr,mr,gr,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,c,l,d,new me)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,c,l,d,new me)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};Vn.getNormal(pr,mr,gr,f.normal),u.face=f,u.barycoord=d}return u}var Xn=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2));function x(_,m,h,T,y,v,I,w,C,D,S){let E=v/C,V=I/D,W=v/2,$=I/2,K=w/2,re=C+1,ne=D+1,ce=0,q=0,le=new k;for(let ie=0;ie<ne;ie++){let X=ie*V-$;for(let ae=0;ae<re;ae++){let he=ae*E-W;le[_]=he*T,le[m]=X*y,le[h]=K,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[h]=w>0?1:-1,u.push(le.x,le.y,le.z),d.push(ae/C),d.push(1-ie/D),ce+=1}}for(let ie=0;ie<D;ie++)for(let X=0;X<C;X++){let ae=f+X+re*ie,he=f+X+re*(ie+1),z=f+(X+1)+re*(ie+1),P=f+(X+1)+re*ie;c.push(ae,he,P),c.push(he,z,P),q+=6}a.addGroup(p,q,S),p+=q,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Vu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var lh={clone:xi,merge:At},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new k,rc=new me,oc=new me,Ut=class extends bs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,rc,oc),t.subVectors(oc,rc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ui=1,Nr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Di,Ui,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Di,Ui,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Di,Ui,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Di,Ui,e,t);a.layers=this.layers,this.add(a);let c=new Ut(Di,Ui,e,t);c.layers=this.layers,this.add(c);let l=new Ut(Di,Ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Es=class extends Pt{constructor(e=[],t=pi,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fr=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Ln});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=It),new Nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Je=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xu={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ts=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var qn=class extends Pt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Nt,u=Nt,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=new k,qu=new k,Yu=new We,hn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Aa.subVectors(n,t).cross(qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yu.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new ai,Zu=new me(.5,.5),vr=new k,Xi=class{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,o=new hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],x=r[8],_=r[9],m=r[10],h=r[11],T=r[12],y=r[13],v=r[14],I=r[15];if(s[0].setComponents(l-o,p-u,h-x,I-T).normalize(),s[1].setComponents(l+o,p+u,h+x,I+T).normalize(),s[2].setComponents(l+a,p+d,h+_,I+y).normalize(),s[3].setComponents(l-a,p-d,h-_,I-y).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,p-f,h-m,I-v).normalize();else if(s[4].setComponents(l-c,p-f,h-m,I-v).normalize(),t===Qt)s[5].setComponents(l+c,p+f,h+m,I+v).normalize();else if(t===_s)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);let t=Zu.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vr.x=s.normal.x>0?e.max.x:e.min.x,vr.y=s.normal.y>0?e.max.y:e.min.y,vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Or=new k,Br=new k,ac=new ct,hs=new Vi,Mr=new ai,Ra=new k,lc=new k,zr=class extends bt{constructor(e=new pt,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Or.fromBufferAttribute(t,s-1),Br.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;ac.copy(s).invert(),hs.copy(e.ray).applyMatrix4(ac);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let h=u.getX(_),T=u.getX(_+1),y=Sr(this,e,hs,c,h,T,_);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(x-1),m=u.getX(p),h=Sr(this,e,hs,c,_,m,x-1);h&&t.push(h)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let h=Sr(this,e,hs,c,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){let _=Sr(this,e,hs,c,x-1,p,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Or.fromBufferAttribute(a,s),Br.fromBufferAttribute(a,r),t.distanceSqToSegment(Or,Br,Ra,lc)>n)return;Ra.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ra);if(!(l<e.near||l>e.far))return{distance:l,point:lc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var cc=new k,hc=new k,ws=class extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cc.fromBufferAttribute(t,s),hc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cc.distanceTo(hc);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fn=class extends Pt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Pt{constructor(e,t,n=$n,s,r,o,a=Nt,c=Nt,l,u=Bi,d=1){if(u!==Bi&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var nn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],x=0,_=[],m=n/2,h=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function T(){let v=new k,I=new k,w=0,C=(t-e)/n;for(let D=0;D<=r;D++){let S=[],E=D/r,V=E*(t-e)+e;for(let W=0;W<=s;W++){let $=W/s,K=$*c+a,re=Math.sin(K),ne=Math.cos(K);I.x=V*re,I.y=-E*n+m,I.z=V*ne,d.push(I.x,I.y,I.z),v.set(re,C,ne).normalize(),f.push(v.x,v.y,v.z),p.push($,1-E),S.push(x++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let E=_[S][D],V=_[S+1][D],W=_[S+1][D+1],$=_[S][D+1];(e>0||S!==0)&&(u.push(E,V,$),w+=3),(t>0||S!==r-1)&&(u.push(V,W,$),w+=3)}l.addGroup(h,w,0),h+=w}function y(v){let I=x,w=new me,C=new k,D=0,S=v===!0?e:t,E=v===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),x++;let V=x;for(let W=0;W<=s;W++){let K=W/s*c+a,re=Math.cos(K),ne=Math.sin(K);C.x=S*ne,C.y=m*E,C.z=S*re,d.push(C.x,C.y,C.z),f.push(0,E,0),w.x=re*.5+.5,w.y=ne*.5*E+.5,p.push(w.x,w.y),x++}for(let W=0;W<s;W++){let $=I+W,K=V+W;v===!0?u.push(K,K+1,$):u.push(K+1,K,$),D+=3}l.addGroup(h,D,v===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new me:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new ct;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kr=class extends Yi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,p*=u,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var br=new k,Ca=new pl,Ia=new pl,Pa=new pl,sn=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),l=br);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=br),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),Ca.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,x,_,m),Ia.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,x,_,m),Pa.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,x,_,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Ia.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Pa.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Ca.calc(c),Ia.calc(c),Pa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ju(i,e){let t=1-i;return t*t*e}function $u(i,e){return 2*(1-i)*i*e}function Ku(i,e){return i*i*e}function ps(i,e,t,n){return Ju(i,e)+$u(i,t)+Ku(i,n)}function ju(i,e){let t=1-i;return t*t*t*e}function Qu(i,e){let t=1-i;return 3*t*t*i*e}function ed(i,e){return 3*(1-i)*i*i*e}function td(i,e){return i*i*i*e}function ms(i,e,t,n,s){return ju(i,e)+Qu(i,t)+ed(i,n)+td(i,s)}var Cs=class extends Vt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zi=class extends Vt{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Is=class extends Vt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Vt{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends Vt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Vt{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(uc(a,c.x,l.x,u.x,d.x),uc(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Vr=Object.freeze({__proto__:null,ArcCurve:kr,CatmullRomCurve3:sn,CubicBezierCurve:Cs,CubicBezierCurve3:Zi,EllipseCurve:Yi,LineCurve:Is,LineCurve3:Hr,QuadraticBezierCurve:Ps,QuadraticBezierCurve3:Ls,SplineCurve:Ds}),Gr=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Vr[s.type]().fromJSON(s))}return this}},pn=class extends Gr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Is(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ps(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Cs(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ds(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Yi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends pn{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new pn().fromJSON(s))}return this}};function nd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ch(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=ad(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let p=i[f],x=i[f+1];p<a&&(a=p),x<c&&(c=x),p>u&&(u=p),x>d&&(d=x)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Us(r,o,t,a,c,l,0),o}function ch(i,e,t,n,s){let r;if(s===_d(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=dc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dc(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Fs(r),r=r.next),r}function ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||dt(t.prev,t,t.next)===0)){if(Fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Us(i,e,t,n,s,r,o){if(!i)return;!o&&r&&dd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?sd(i,n,s,r):id(i)){e.push(c.i,i.i,l.i),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=rd(ci(i),e),Us(i,e,t,n,s,r,2)):o===2&&od(i,e,t,n,s,r):Us(ci(i),e,t,n,s,r,1);break}}}function id(i){let e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=f&&x.y>=d&&x.y<=p&&us(s,a,r,c,o,l,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function sd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,p=Math.min(a,c,l),x=Math.min(u,d,f),_=Math.max(a,c,l),m=Math.max(u,d,f),h=Ba(p,x,e,t,n),T=Ba(_,m,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=h&&v&&v.z<=T;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&us(a,u,c,d,l,f,y.x,y.y)&&dt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&us(a,u,c,d,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&us(a,u,c,d,l,f,y.x,y.y)&&dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=_&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&us(a,u,c,d,l,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function rd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&uh(n,t,t.next,s)&&Ns(n,s)&&Ns(s,n)&&(e.push(n.i,t.i,s.i),Fs(t),Fs(t.next),t=i=s),t=t.next}while(t!==i);return ci(t)}function od(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&md(o,a)){let c=dh(o,a);o=ci(o,o.next),c=ci(c,c.next),Us(o,e,t,n,s,r,0),Us(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ad(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ch(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(pd(l))}s.sort(ld);for(let r=0;r<s.length;r++)t=cd(s[r],t);return t}function ld(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cd(i,e){let t=hd(i,e);if(!t)return e;let n=dh(t,i);return ci(n,n.next),ci(t,t.next)}function hd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ns(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&ud(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function ud(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function dd(i,e,t,n){let s=i;do s.z===0&&(s.z=Ba(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fd(s)}function fd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ba(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&hh(i,e,t,n,s,r,o,a)}function md(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gd(i,e)&&(Ns(i,e)&&Ns(e,i)&&xd(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Ji(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function uh(i,e,t,n){let s=Tr(dt(i,e,t)),r=Tr(dt(i,e,n)),o=Tr(dt(t,n,i)),a=Tr(dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Er(i,t,e)||r===0&&Er(i,n,e)||o===0&&Er(t,i,n)||a===0&&Er(t,e,n))}function Er(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Tr(i){return i>0?1:i<0?-1:0}function gd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function xd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){let t=za(i.i,i.x,i.y),n=za(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dc(i,e,t,n){let s=za(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function za(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _d(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ka=class{static triangulate(e,t,n=2){return nd(e,t,n)}},wt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fc(e),pc(n,e);let o=e.length;t.forEach(fc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,pc(n,t[c]);let a=ka.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function fc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gt=class i extends pt{constructor(e=new _t([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:yd,y,v=!1,I,w,C,D;h&&(y=h.getSpacedPoints(u),v=!0,f=!1,I=h.computeFrenetFrames(u,!1),w=new k,C=new k,D=new k),f||(m=0,p=0,x=0,_=0);let S=a.extractPoints(l),E=S.shape,V=S.holes;if(!wt.isClockWise(E)){E=E.reverse();for(let B=0,G=V.length;B<G;B++){let Z=V[B];wt.isClockWise(Z)&&(V[B]=Z.reverse())}}function $(B){let Z=10000000000000001e-36,Y=B[0];for(let U=1;U<=B.length;U++){let A=U%B.length,J=B[A],ge=J.x-Y.x,Se=J.y-Y.y,N=ge*ge+Se*Se,b=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(Y.x),Math.abs(Y.y)),te=Z*b*b;if(N<=te){B.splice(A,1),U--;continue}Y=J}}$(E),V.forEach($);let K=V.length,re=E;for(let B=0;B<K;B++){let G=V[B];E=E.concat(G)}function ne(B,G,Z){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(G,Z)}let ce=E.length;function q(B,G,Z){let Y,U,A,J=B.x-G.x,ge=B.y-G.y,Se=Z.x-B.x,N=Z.y-B.y,b=J*J+ge*ge,te=J*N-ge*Se;if(Math.abs(te)>Number.EPSILON){let ue=Math.sqrt(b),xe=Math.sqrt(Se*Se+N*N),de=G.x-ge/ue,Re=G.y+J/ue,ye=Z.x-N/xe,Te=Z.y+Se/xe,Le=((ye-de)*N-(Te-Re)*Se)/(J*N-ge*Se);Y=de+J*Le-B.x,U=Re+ge*Le-B.y;let ve=Y*Y+U*U;if(ve<=2)return new me(Y,U);A=Math.sqrt(ve/2)}else{let ue=!1;J>Number.EPSILON?Se>Number.EPSILON&&(ue=!0):J<-Number.EPSILON?Se<-Number.EPSILON&&(ue=!0):Math.sign(ge)===Math.sign(N)&&(ue=!0),ue?(Y=-ge,U=J,A=Math.sqrt(b)):(Y=J,U=ge,A=Math.sqrt(b/2))}return new me(Y/A,U/A)}let le=[];for(let B=0,G=re.length,Z=G-1,Y=B+1;B<G;B++,Z++,Y++)Z===G&&(Z=0),Y===G&&(Y=0),le[B]=q(re[B],re[Z],re[Y]);let ie=[],X,ae=le.concat();for(let B=0,G=K;B<G;B++){let Z=V[B];X=[];for(let Y=0,U=Z.length,A=U-1,J=Y+1;Y<U;Y++,A++,J++)A===U&&(A=0),J===U&&(J=0),X[Y]=q(Z[Y],Z[A],Z[J]);ie.push(X),ae=ae.concat(X)}let he;if(m===0)he=wt.triangulateShape(re,V);else{let B=[],G=[];for(let Z=0;Z<m;Z++){let Y=Z/m,U=p*Math.cos(Y*Math.PI/2),A=x*Math.sin(Y*Math.PI/2)+_;for(let J=0,ge=re.length;J<ge;J++){let Se=ne(re[J],le[J],A);H(Se.x,Se.y,-U),Y===0&&B.push(Se)}for(let J=0,ge=K;J<ge;J++){let Se=V[J];X=ie[J];let N=[];for(let b=0,te=Se.length;b<te;b++){let ue=ne(Se[b],X[b],A);H(ue.x,ue.y,-U),Y===0&&N.push(ue)}Y===0&&G.push(N)}}he=wt.triangulateShape(B,G)}let z=he.length,P=x+_;for(let B=0;B<ce;B++){let G=f?ne(E[B],ae[B],P):E[B];v?(C.copy(I.normals[0]).multiplyScalar(G.x),w.copy(I.binormals[0]).multiplyScalar(G.y),D.copy(y[0]).add(C).add(w),H(D.x,D.y,D.z)):H(G.x,G.y,0)}for(let B=1;B<=u;B++)for(let G=0;G<ce;G++){let Z=f?ne(E[G],ae[G],P):E[G];v?(C.copy(I.normals[B]).multiplyScalar(Z.x),w.copy(I.binormals[B]).multiplyScalar(Z.y),D.copy(y[B]).add(C).add(w),H(D.x,D.y,D.z)):H(Z.x,Z.y,d/u*B)}for(let B=m-1;B>=0;B--){let G=B/m,Z=p*Math.cos(G*Math.PI/2),Y=x*Math.sin(G*Math.PI/2)+_;for(let U=0,A=re.length;U<A;U++){let J=ne(re[U],le[U],Y);H(J.x,J.y,d+Z)}for(let U=0,A=V.length;U<A;U++){let J=V[U];X=ie[U];for(let ge=0,Se=J.length;ge<Se;ge++){let N=ne(J[ge],X[ge],Y);v?H(N.x,N.y+y[u-1].y,y[u-1].x+Z):H(N.x,N.y,d+Z)}}}M(),g();function M(){let B=s.length/3;if(f){let G=0,Z=ce*G;for(let Y=0;Y<z;Y++){let U=he[Y];O(U[2]+Z,U[1]+Z,U[0]+Z)}G=u+m*2,Z=ce*G;for(let Y=0;Y<z;Y++){let U=he[Y];O(U[0]+Z,U[1]+Z,U[2]+Z)}}else{for(let G=0;G<z;G++){let Z=he[G];O(Z[2],Z[1],Z[0])}for(let G=0;G<z;G++){let Z=he[G];O(Z[0]+ce*u,Z[1]+ce*u,Z[2]+ce*u)}}n.addGroup(B,s.length/3-B,0)}function g(){let B=s.length/3,G=0;F(re,G),G+=re.length;for(let Z=0,Y=V.length;Z<Y;Z++){let U=V[Z];F(U,G),G+=U.length}n.addGroup(B,s.length/3-B,1)}function F(B,G){let Z=B.length;for(;--Z>=0;){let Y=Z,U=Z-1;U<0&&(U=B.length-1);for(let A=0,J=u+m*2;A<J;A++){let ge=ce*A,Se=ce*(A+1),N=G+Y+ge,b=G+U+ge,te=G+U+Se,ue=G+Y+Se;Q(N,b,te,ue)}}}function H(B,G,Z){c.push(B),c.push(G),c.push(Z)}function O(B,G,Z){ee(B),ee(G),ee(Z);let Y=s.length/3,U=T.generateTopUV(n,s,Y-3,Y-2,Y-1);R(U[0]),R(U[1]),R(U[2])}function Q(B,G,Z,Y){ee(B),ee(G),ee(Y),ee(G),ee(Z),ee(Y);let U=s.length/3,A=T.generateSideWallUV(n,s,U-6,U-3,U-2,U-1);R(A[0]),R(A[1]),R(A[3]),R(A[1]),R(A[2]),R(A[3])}function ee(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function R(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vr[s.type]().fromJSON(s)),new i(n,e.options)}},yd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new me(r,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],x=e[s*3+2],_=e[r*3],m=e[r*3+1],h=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-d),new me(f,1-x),new me(_,1-h)]:[new me(a,1-c),new me(u,1-d),new me(p,1-x),new me(m,1-h)]}};function vd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hi=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,p=[],x=[],_=[],m=[];for(let h=0;h<u;h++){let T=h*f-o;for(let y=0;y<l;y++){let v=y*d-r;x.push(v,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<a;T++){let y=T+l*h,v=T+l*(h+1),I=T+1+l*(h+1),w=T+1+l*h;p.push(y,v,w),p.push(v,I,w)}this.setIndex(p),this.setAttribute("position",new qe(x,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Os=class i extends pt{constructor(e=new _t([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(r,3)),this.setAttribute("uv",new qe(o,2));function l(u){let d=s.length/3,f=u.extractPoints(t),p=f.shape,x=f.holes;wt.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=x.length;m<h;m++){let T=x[m];wt.isClockWise(T)===!0&&(x[m]=T.reverse())}let _=wt.triangulateShape(p,x);for(let m=0,h=x.length;m<h;m++){let T=x[m];p=p.concat(T)}for(let m=0,h=p.length;m<h;m++){let T=p[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,h=_.length;m<h;m++){let T=_[m],y=T[0]+d,v=T[1]+d,I=T[2]+d;n.push(y,v,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Md(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Md(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var mt=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new k,f=new k,p=[],x=[],_=[],m=[];for(let h=0;h<=n;h++){let T=[],y=h/n,v=0;h===0&&o===0?v=.5/t:h===n&&c===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let w=I/t;d.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-y),T.push(l++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){let y=u[h][T+1],v=u[h][T],I=u[h+1][T],w=u[h+1][T+1];(h!==0||o>0)&&p.push(y,v,w),(h!==n-1||c<Math.PI)&&p.push(v,I,w)}this.setIndex(p),this.setAttribute("position",new qe(x,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class i extends pt{constructor(e=new Ls(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,c=new k,l=new me,u=new k,d=[],f=[],p=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),h()}function m(y){u=e.getPointAt(y/t,u);let v=o.normals[y],I=o.binormals[y];for(let w=0;w<=s;w++){let C=w/s*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);c.x=S*v.x+D*I.x,c.y=S*v.y+D*I.y,c.z=S*v.z+D*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function h(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let I=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),C=(s+1)*y+v,D=(s+1)*(y-1)+v;x.push(I,w,D),x.push(w,C,D)}}function T(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var rt=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Da,endingEnd:Da}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ua:r=e,a=2*t-n;break;case Na:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ua:o=e,c=2*n-t;break;case Na:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),_=x*x,m=_*x,h=-f*m+2*f*_-f*x,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-p)*m+(1.5+p)*_+.5*x,v=p*m-p*_;for(let I=0;I!==a;++I)r[I]=h*o[u+I]+T*o[l+I]+y*o[c+I]+v*o[d+I];return r}},Yr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}},Zr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Sd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ar,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let x=0;x!==n;++x){let _=t[d+x];if(_!==t[f+x]||_!==t[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Pr;var Yn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=gs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="color";var $r=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="number";var Kr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bs=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Qr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],x=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fh=new Qr,di=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var wn={},Va=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ha.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:s});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=wn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0,_=0,m=new ReadableStream({start(h){T();function T(){d.read().then(({done:y,value:v})=>{if(y)h.close();else{_+=v.byteLength;let I=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let w=0,C=u.length;w<C;w++){let D=u[w];D.onProgress&&D.onProgress(I)}h.enqueue(v),T()}},y=>{h.error(y)})}}});return new Response(m)}else throw new Va(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(x=>p.decode(x))}}}).then(l=>{Ha.add(`file:${e}`,l);let u=wn[e];delete wn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=wn[e];if(u===void 0)throw this.manager.itemError(e),l;delete wn[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ks=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hs=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},La=new ct,mc=new k,gc=new k,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fi=class extends bs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wa=class extends Ga{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Wa}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var eo=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ml="\\[\\]\\.:\\/",bd=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",Ed="[^"+ml.replace("\\.","")+"]",Td=/((?:WC+[\/:])*)/.source.replace("WC",gl),wd=/(WCOD+)?/.source.replace("WCOD",Ed),Ad=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),Rd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Cd=new RegExp("^"+Td+wd+Ad+Rd+"$"),Id=["material","materials","bones","map"],Xa=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bd,"")}static parseTrackName(e){let t=Cd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Id.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Xa;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v0=new Float32Array(1);var xc=new ct,Vs=class{constructor(e,t,n=0,s=1/0){this.ray=new Vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(_c),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qa(e[s],this,n,t);return n.sort(_c),n}};function _c(i,e){return i.distance-e.distance}function qa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)qa(r[o],e,t,!0)}}var yc=new me,Gs=class{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var on=class{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new pn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let T=[];for(let y=0,v=h.length;y<v;y++){let I=h[y],w=new _t;w.curves=I.curves,T.push(w)}return T}function n(h,T){let y=T.length,v=!1;for(let I=y-1,w=0;w<y;I=w++){let C=T[I],D=T[w],S=D.x-C.x,E=D.y-C.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(C=T[w],S=-S,D=T[I],E=-E),h.y<C.y||h.y>D.y)continue;if(h.y===C.y){if(h.x===C.x)return!0}else{let V=E*(h.x-C.x)-S*(h.y-C.y);if(V===0)return!0;if(V<0)continue;v=!v}}else{if(h.y!==C.y)continue;if(D.x<=h.x&&h.x<=C.x||C.x<=h.x&&h.x<=D.x)return!0}}return v}let s=wt.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new _t,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;let d=[],f=[],p=[],x=0,_;f[x]=void 0,p[x]=[];for(let h=0,T=r.length;h<T;h++)a=r[h],_=a.getPoints(),o=s(_),o=e?!o:o,o?(!u&&f[x]&&x++,f[x]={s:new _t,p:_},f[x].s.curves=a.curves,u&&x++,p[x]=[]):p[x].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let h=!1,T=0;for(let y=0,v=f.length;y<v;y++)d[y]=[];for(let y=0,v=f.length;y<v;y++){let I=p[y];for(let w=0;w<I.length;w++){let C=I[w],D=!0;for(let S=0;S<f.length;S++)n(C.p,f[S].p)&&(y!==S&&T++,D?(D=!1,d[S].push(C)):h=!0);D&&d[y].push(C)}}T>0&&h===!1&&(p=d)}let m;for(let h=0,T=f.length;h<T;h++){c=f[h].s,l.push(c),m=p[h];for(let y=0,v=m.length;y<v;y++)c.holes.push(m[y].h)}return l}};function xl(i,e,t,n){let s=Pd(n);switch(t){case sl:return i*e;case ol:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case rl:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case So:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pd(i){switch(i){case an:case el:return{byteLength:1,components:1};case Ki:case tl:case ji:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case $n:case po:case gn:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dd(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){let x=d[f],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){let _=d[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,om=`#define TOON
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
}`,am=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Hd,batching_pars_vertex:Vd,batching_vertex:Gd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:xf,fog_vertex:_f,fog_pars_vertex:yf,fog_fragment:vf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:bf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:wf,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:If,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:Uf,lights_fragment_maps:Nf,lights_fragment_end:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Gf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:$f,morphtarget_vertex:Kf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:op,iridescence_pars_fragment:ap,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:_p,shadowmask_pars_fragment:yp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:bp,specularmap_fragment:Ep,specularmap_pars_fragment:Tp,tonemapping_fragment:wp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Ip,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Dp,background_vert:Up,background_frag:Np,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distanceRGBA_vert:Vp,distanceRGBA_frag:Gp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:$p,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},xn={basic:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:At([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:At([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:At([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:At([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:At([Ce.points,Ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:At([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:At([Ce.common,Ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:At([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:At([Ce.sprite,Ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:At([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:At([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};xn.physical={uniforms:At([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Zo={r:0,b:0,g:0},_i=new en,pm=new ct;function mm(i,e,t,n,s,r,o){let a=new Ve(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function x(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1,I=x(y);I===null?h(a,c):I&&I.isColor&&(h(I,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let I=x(v);I&&(I.isCubeTexture||I.mapping===Ws)?(u===void 0&&(u=new ze(new Xn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:xi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(_i)),u.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,(d!==I||f!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new ze(new hi(2,2),new tn({name:"BackgroundMaterial",uniforms:xi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(I.colorSpace)!==nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=I,f=I.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,v){y.getRGB(Zo,fl(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(a,c)},render:_,addToRenderList:m,dispose:T}}function gm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(E,V,W,$,K){let re=!1,ne=d($,W,V);r!==ne&&(r=ne,l(r.object)),re=p(E,$,W,K),re&&x(E,$,W,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,v(E,V,W,$),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,V,W){let $=W.wireframe===!0,K=n[E.id];K===void 0&&(K={},n[E.id]=K);let re=K[V.id];re===void 0&&(re={},K[V.id]=re);let ne=re[$];return ne===void 0&&(ne=f(c()),re[$]=ne),ne}function f(E){let V=[],W=[],$=[];for(let K=0;K<t;K++)V[K]=0,W[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:$,object:E,attributes:{},index:null}}function p(E,V,W,$){let K=r.attributes,re=V.attributes,ne=0,ce=W.getAttributes();for(let q in ce)if(ce[q].location>=0){let ie=K[q],X=re[q];if(X===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),ie===void 0||ie.attribute!==X||X&&ie.data!==X.data)return!0;ne++}return r.attributesNum!==ne||r.index!==$}function x(E,V,W,$){let K={},re=V.attributes,ne=0,ce=W.getAttributes();for(let q in ce)if(ce[q].location>=0){let ie=re[q];ie===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));let X={};X.attribute=ie,ie&&ie.data&&(X.data=ie.data),K[q]=X,ne++}r.attributes=K,r.attributesNum=ne,r.index=$}function _(){let E=r.newAttributes;for(let V=0,W=E.length;V<W;V++)E[V]=0}function m(E){h(E,0)}function h(E,V){let W=r.newAttributes,$=r.enabledAttributes,K=r.attributeDivisors;W[E]=1,$[E]===0&&(i.enableVertexAttribArray(E),$[E]=1),K[E]!==V&&(i.vertexAttribDivisor(E,V),K[E]=V)}function T(){let E=r.newAttributes,V=r.enabledAttributes;for(let W=0,$=V.length;W<$;W++)V[W]!==E[W]&&(i.disableVertexAttribArray(W),V[W]=0)}function y(E,V,W,$,K,re,ne){ne===!0?i.vertexAttribIPointer(E,V,W,K,re):i.vertexAttribPointer(E,V,W,$,K,re)}function v(E,V,W,$){_();let K=$.attributes,re=W.getAttributes(),ne=V.defaultAttributeValues;for(let ce in re){let q=re[ce];if(q.location>=0){let le=K[ce];if(le===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){let ie=le.normalized,X=le.itemSize,ae=e.get(le);if(ae===void 0)continue;let he=ae.buffer,z=ae.type,P=ae.bytesPerElement,M=z===i.INT||z===i.UNSIGNED_INT||le.gpuType===po;if(le.isInterleavedBufferAttribute){let g=le.data,F=g.stride,H=le.offset;if(g.isInstancedInterleavedBuffer){for(let O=0;O<q.locationSize;O++)h(q.location+O,g.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=g.meshPerAttribute*g.count)}else for(let O=0;O<q.locationSize;O++)m(q.location+O);i.bindBuffer(i.ARRAY_BUFFER,he);for(let O=0;O<q.locationSize;O++)y(q.location+O,X/q.locationSize,z,ie,F*P,(H+X/q.locationSize*O)*P,M)}else{if(le.isInstancedBufferAttribute){for(let g=0;g<q.locationSize;g++)h(q.location+g,le.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let g=0;g<q.locationSize;g++)m(q.location+g);i.bindBuffer(i.ARRAY_BUFFER,he);for(let g=0;g<q.locationSize;g++)y(q.location+g,X/q.locationSize,z,ie,X*P,X/q.locationSize*g*P,M)}}else if(ne!==void 0){let ie=ne[ce];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}T()}function I(){D();for(let E in n){let V=n[E];for(let W in V){let $=V[W];for(let K in $)u($[K].object),delete $[K];delete V[W]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let V=n[E.id];for(let W in V){let $=V[W];for(let K in $)u($[K].object),delete $[K];delete V[W]}delete n[E.id]}function C(E){for(let V in n){let W=n[V];if(W[E.id]===void 0)continue;let $=W[E.id];for(let K in $)u($[K].object),delete $[K];delete W[E.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function xm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];t.update(p,n,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=u[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _m(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:w}}function ym(i){let e=this,t=null,n=0,s=!1,r=!1,o=new hn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,y=T*4,v=h.clippingState||null;c.value=v,v=u(x,f,y,p);for(let I=0;I!==y;++I)v[I]=t[I];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,x){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let h=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vm(i){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=pi:a===uo&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ho||a===uo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fr(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,ph=[.125,.215,.35,.446,.526,.582],Mi=20,_l=new fi,mh=new Ve,yl=null,vl=0,Ml=0,Sl=!1,vi=(1+Math.sqrt(5))/2,ts=1/vi,gh=[new k(-vi,ts,0),new k(vi,ts,0),new k(-ts,0,vi),new k(ts,0,vi),new k(0,vi,-ts),new k(0,vi,ts),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Mm=new k,Ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Mm}=r;yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,vl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:ji,format:Zt,colorSpace:oi,depthBuffer:!1},s=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=bm(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,s,r){let c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mh),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new li({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new ze(new Xn,_),h=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,h=!0):(_.color.copy(mh),h=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));let I=this._cubeSize;Jo(s,v*I,y>2?I:0,I,I),d.setRenderTarget(s),h&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gh[(s-r-1)%gh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ze(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=r/x,m=isFinite(r)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let h=[],T=0;for(let C=0;C<Mi;++C){let D=C/_,S=Math.exp(-D*D/2);h.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;let v=this._sizeLods[s],I=3*v*(s>y-ns?s-y+ns:0),w=4*(this._cubeSize-v);Jo(t,I,w,3*v,2*v),c.setRenderTarget(t),c.render(d,_l)}};function Sm(i){let e=[],t=[],n=[],s=i,r=i-ns+1+ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ns?c=ph[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,_=3,m=2,h=1,T=new Float32Array(_*x*p),y=new Float32Array(m*x*p),v=new Float32Array(h*x*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,D=w>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(S,_*x*w),y.set(f,m*x*w);let E=[w,w,w,w,w,w];v.set(E,h*x*w)}let I=new pt;I.setAttribute("position",new Ht(T,_)),I.setAttribute("uv",new Ht(y,m)),I.setAttribute("faceIndex",new Ht(v,h)),e.push(I),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bm(i,e,t){let n=new Float32Array(Mi),s=new k(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _h(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function Em(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ho||c===uo,u=c===pi||c===mi;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ko(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ko(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,x=d.attributes.position,_=0;if(p!==null){let T=p.array;_=p.version;for(let y=0,v=T.length;y<v;y+=3){let I=T[y+0],w=T[y+1],C=T[y+2];f.push(I,w,w,C,C,I)}}else if(x!==void 0){let T=x.array;_=x.version;for(let y=0,v=T.length/3-1;y<v;y+=3){let I=y+0,w=y+1,C=y+2;f.push(I,w,w,C,C,I)}}else return;let m=new(dl(f)?Ss:Ms)(f,1);m.version=_;let h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Am(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];t.update(m,n,1)}function d(f,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let h=0;for(let T=0;T<x;T++)h+=p[T]*_[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Rm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,e,t){let n=new WeakMap,s=new ft;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;p===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*I*4*d),C=new vs(w,v,I,d);C.type=gn,C.needsUpdate=!0;let D=y*4;for(let E=0;E<d;E++){let V=m[E],W=h[E],$=T[E],K=v*I*4*E;for(let re=0;re<V.count;re++){let ne=re*D;p===!0&&(s.fromBufferAttribute(V,re),w[K+ne+0]=s.x,w[K+ne+1]=s.y,w[K+ne+2]=s.z,w[K+ne+3]=0),x===!0&&(s.fromBufferAttribute(W,re),w[K+ne+4]=s.x,w[K+ne+5]=s.y,w[K+ne+6]=s.z,w[K+ne+7]=0),_===!0&&(s.fromBufferAttribute($,re),w[K+ne+8]=s.x,w[K+ne+9]=s.y,w[K+ne+10]=s.z,w[K+ne+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new me(v,I)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Im(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Bh=new Pt,vh=new As(1,1),zh=new vs,kh=new Ur,Hh=new Es,Mh=[],Sh=[],bh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qo(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Mt(t,n)}}function Fm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),Mt(t,n)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),Mt(t,n)}}function Bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=cl,r=vh):r=Bh,t.setTexture2D(e||r,s)}function Ym(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kh,s)}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hh,s)}function Jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zh,s)}function $m(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function Km(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Qm(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function eg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function tg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ng(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ig(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sg(i,e){i.uniform1iv(this.addr,e)}function rg(i,e){i.uniform2iv(this.addr,e)}function og(i,e){i.uniform3iv(this.addr,e)}function ag(i,e){i.uniform4iv(this.addr,e)}function lg(i,e){i.uniform1uiv(this.addr,e)}function cg(i,e){i.uniform2uiv(this.addr,e)}function hg(i,e){i.uniform3uiv(this.addr,e)}function ug(i,e){i.uniform4uiv(this.addr,e)}function dg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bh,r[o])}function fg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kh,r[o])}function pg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hh,r[o])}function mg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zh,r[o])}function gg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}},Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gg(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function wh(i,e){i.seq.push(e),i.map[e.id]=e}function xg(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),o=bl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wh(t,l===void 0?new El(a,i,e):new Tl(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wl(a),wh(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ah(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _g=37297,yg=0;function vg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Rh=new We;function Mg(i){Qe._getMatrix(Rh,Qe.workingColorSpace,i);let e=`mat3( ${Rh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ch(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vg(i.getShaderSource(e),a)}else return r}function Sg(i,e){let t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bg(i,e){let t;switch(e){case Vc:t="Linear";break;case Gc:t="Reinhard";break;case Wc:t="Cineon";break;case co:t="ACESFilmic";break;case qc:t="AgX";break;case Yc:t="Neutral";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new k;function Eg(){Qe.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ag(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function Ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Rg,Ig)}var Cg=new Map;function Ig(i,e){let t=$e[e];if(t===void 0){let n=Cg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(Pg,Lg)}function Lg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Dg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Za?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===to?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ug(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ng(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case kc:e="ENVMAP_BLENDING_MIX";break;case Hc:e="ENVMAP_BLENDING_ADD";break}return e}function Og(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dg(t),l=Ug(t),u=Ng(t),d=Fg(t),f=Og(t),p=Tg(t),x=wg(r),_=s.createProgram(),m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($s).join(`
`),h.length>0&&(h+=`
`)):(m=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),h=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Dn?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),Eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Al(o),o=Ih(o,t),o=Ph(o,t),a=Al(a),a=Ih(a,t),a=Ph(a,t),o=Lh(o),a=Lh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=T+m+o,v=T+h+a,I=Ah(s,s.VERTEX_SHADER,y),w=Ah(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(V){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(_)||"",$=s.getShaderInfoLog(I)||"",K=s.getShaderInfoLog(w)||"",re=W.trim(),ne=$.trim(),ce=K.trim(),q=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,w);else{let ie=Ch(s,I,"vertex"),X=Ch(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+ie+`
`+X)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(ne===""||ce==="")&&(le=!1);le&&(V.diagnostics={runnable:q,programLog:re,vertexShader:{log:ne,prefix:m},fragmentShader:{log:ce,prefix:h}})}s.deleteShader(I),s.deleteShader(w),D=new is(s,_),S=Ag(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,_g)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}var zg=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=zg++,this.code=e,this.usedTimes=0}};function kg(i,e,t,n,s,r,o){let a=new Gi,c=new Rl,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,V,W,$){let K=W.fog,re=$.geometry,ne=S.isMeshStandardMaterial?W.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||ne),q=ce&&ce.mapping===Ws?ce.image.height:null,le=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ie=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,X=ie!==void 0?ie.length:0,ae=0;re.morphAttributes.position!==void 0&&(ae=1),re.morphAttributes.normal!==void 0&&(ae=2),re.morphAttributes.color!==void 0&&(ae=3);let he,z,P,M;if(le){let tt=xn[le];he=tt.vertexShader,z=tt.fragmentShader}else he=S.vertexShader,z=S.fragmentShader,c.update(S),P=c.getVertexShaderID(S),M=c.getFragmentShaderID(S);let g=i.getRenderTarget(),F=i.state.buffers.depth.getReversed(),H=$.isInstancedMesh===!0,O=$.isBatchedMesh===!0,Q=!!S.map,ee=!!S.matcap,R=!!ce,B=!!S.aoMap,G=!!S.lightMap,Z=!!S.bumpMap,Y=!!S.normalMap,U=!!S.displacementMap,A=!!S.emissiveMap,J=!!S.metalnessMap,ge=!!S.roughnessMap,Se=S.anisotropy>0,N=S.clearcoat>0,b=S.dispersion>0,te=S.iridescence>0,ue=S.sheen>0,xe=S.transmission>0,de=Se&&!!S.anisotropyMap,Re=N&&!!S.clearcoatMap,ye=N&&!!S.clearcoatNormalMap,Te=N&&!!S.clearcoatRoughnessMap,Le=te&&!!S.iridescenceMap,ve=te&&!!S.iridescenceThicknessMap,Ae=ue&&!!S.sheenColorMap,ke=ue&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,Ie=!!S.specularColorMap,Ze=!!S.specularIntensityMap,j=xe&&!!S.transmissionMap,Ee=xe&&!!S.thicknessMap,we=!!S.gradientMap,Ue=!!S.alphaMap,Me=S.alphaTest>0,_e=!!S.alphaHash,Oe=!!S.extensions,Ye=Dn;S.toneMapped&&(g===null||g.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let ot={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:z,defines:S.defines,customVertexShaderID:P,customFragmentShaderID:M,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:O,batchingColor:O&&$._colorsTexture!==null,instancing:H,instancingColor:H&&$.instanceColor!==null,instancingMorph:H&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:g===null?i.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:oi,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:ee,envMap:R,envMapMode:R&&ce.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:G,bumpMap:Z,normalMap:Y,displacementMap:f&&U,emissiveMap:A,normalMapObjectSpace:Y&&S.normalMapType===Kc,normalMapTangentSpace:Y&&S.normalMapType===ll,metalnessMap:J,roughnessMap:ge,anisotropy:Se,anisotropyMap:de,clearcoat:N,clearcoatMap:Re,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,dispersion:b,iridescence:te,iridescenceMap:Le,iridescenceThicknessMap:ve,sheen:ue,sheenColorMap:Ae,sheenRoughnessMap:ke,specularMap:Ne,specularColorMap:Ie,specularIntensityMap:Ze,transmission:xe,transmissionMap:j,thicknessMap:Ee,gradientMap:we,opaque:S.transparent===!1&&S.blending===si&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:_e,combine:S.combine,mapUv:Q&&_(S.map.channel),aoMapUv:B&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:Z&&_(S.bumpMap.channel),normalMapUv:Y&&_(S.normalMap.channel),displacementMapUv:U&&_(S.displacementMap.channel),emissiveMapUv:A&&_(S.emissiveMap.channel),metalnessMapUv:J&&_(S.metalnessMap.channel),roughnessMapUv:ge&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(S.sheenRoughnessMap.channel),specularMapUv:Ne&&_(S.specularMap.channel),specularColorMapUv:Ie&&_(S.specularColorMap.channel),specularIntensityMapUv:Ze&&_(S.specularIntensityMap.channel),transmissionMapUv:j&&_(S.transmissionMap.channel),thicknessMapUv:Ee&&_(S.thicknessMap.channel),alphaMapUv:Ue&&_(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Y||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!re.attributes.uv&&(Q||Ue),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:F,skinning:$.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:A&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Lt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function h(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)E.push(V),E.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(T(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let E=x[S.type],V;if(E){let W=xn[E];V=lh.clone(W.uniforms)}else V=S.uniforms;return V}function I(S,E){let V;for(let W=0,$=u.length;W<$;W++){let K=u[W];if(K.cacheKey===E){V=K,++V.usedTimes;break}}return V===void 0&&(V=new Bg(i,E,S,r),u.push(V)),V}function w(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:I,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function Hg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,p,x,_,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,x,_,m){let h=o(d,f,p,x,_,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function c(d,f,p,x,_,m){let h=o(d,f,p,x,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||Vg),n.length>1&&n.sort(f||Uh),s.length>1&&s.sort(f||Uh)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Gg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nh,i.set(n,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ve};break;case"SpotLight":t={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Xg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qg=0;function Yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zg(i){let e=new Wg,t=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new ct,o=new ct;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,_=0,m=0,h=0,T=0,y=0,v=0,I=0,w=0,C=0;l.sort(Yg);for(let S=0,E=l.length;S<E;S++){let V=l[S],W=V.color,$=V.intensity,K=V.distance,re=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)u+=W.r*$,d+=W.g*$,f+=W.b*$;else if(V.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(V.sh.coefficients[ne],$);C++}else if(V.isDirectionalLight){let ne=e.get(V);if(ne.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ce=V.shadow,q=t.get(V);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=V.shadow.matrix,T++}n.directional[p]=ne,p++}else if(V.isSpotLight){let ne=e.get(V);ne.position.setFromMatrixPosition(V.matrixWorld),ne.color.copy(W).multiplyScalar($),ne.distance=K,ne.coneCos=Math.cos(V.angle),ne.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ne.decay=V.decay,n.spot[_]=ne;let ce=V.shadow;if(V.map&&(n.spotLightMap[I]=V.map,I++,ce.updateMatrices(V),V.castShadow&&w++),n.spotLightMatrix[_]=ce.matrix,V.castShadow){let q=t.get(V);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=re,v++}_++}else if(V.isRectAreaLight){let ne=e.get(V);ne.color.copy(W).multiplyScalar($),ne.halfWidth.set(V.width*.5,0,0),ne.halfHeight.set(0,V.height*.5,0),n.rectArea[m]=ne,m++}else if(V.isPointLight){let ne=e.get(V);if(ne.color.copy(V.color).multiplyScalar(V.intensity),ne.distance=V.distance,ne.decay=V.decay,V.castShadow){let ce=V.shadow,q=t.get(V);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,q.shadowCameraNear=ce.camera.near,q.shadowCameraFar=ce.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=re,n.pointShadowMatrix[x]=V.shadow.matrix,y++}n.point[x]=ne,x++}else if(V.isHemisphereLight){let ne=e.get(V);ne.skyColor.copy(V.color).multiplyScalar($),ne.groundColor.copy(V.groundColor).multiplyScalar($),n.hemi[h]=ne,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.directionalLength=p,D.pointLength=x,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=I,D.numLightProbes=C,n.version=qg++)}function c(l,u){let d=0,f=0,p=0,x=0,_=0,m=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){let y=l[h];if(y.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Fh(i){let e=new Zg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fh(i),e.set(s,[a])):r>=o.length?(a=new Fh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,e,t){let n=new Xi,s=new me,r=new me,o=new ft,a=new Wr({depthPacking:$c}),c=new Xr,l={},u=t.maxTextureSize,d={[Rn]:Lt,[Lt]:Rn,[Ft]:Ft},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:$g,fragmentShader:Kg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new pt;x.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let h=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ln),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let $=h!==mn&&this.type===mn,K=h===mn&&this.type!==mn;for(let re=0,ne=w.length;re<ne;re++){let ce=w[re],q=ce.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||$===!0||K===!0){let X=this.type!==mn?{minFilter:Nt,magFilter:Nt}:{};q.map!==null&&q.map.dispose(),q.map=new un(s.x,s.y,X),q.map.texture.name=ce.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ie=q.getViewportCount();for(let X=0;X<ie;X++){let ae=q.getViewport(X);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),W.viewport(o),q.updateMatrices(ce,X),n=q.getFrustum(),v(C,D,q.camera,ce,this.type)}q.isPointLightShadow!==!0&&this.type===mn&&T(q,D),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,V)};function T(w,C){let D=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,D,p,_,null)}function y(w,C,D,S){let E=null,V=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)E=V;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let W=E.uuid,$=C.uuid,K=l[W];K===void 0&&(K={},l[W]=K);let re=K[$];re===void 0&&(re=E.clone(),K[$]=re,C.addEventListener("dispose",I)),E=re}if(E.visible=C.visible,E.wireframe=C.wireframe,S===mn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=i.properties.get(E);W.light=D}return E}function v(w,C,D,S,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let $=e.update(w),K=w.material;if(Array.isArray(K)){let re=$.groups;for(let ne=0,ce=re.length;ne<ce;ne++){let q=re[ne],le=K[q.materialIndex];if(le&&le.visible){let ie=y(w,le,S,E);w.onBeforeShadow(i,w,C,D,$,ie,q),i.renderBufferDirect(D,null,$,ie,w,q),w.onAfterShadow(i,w,C,D,$,ie,q)}}}else if(K.visible){let re=y(w,K,S,E);w.onBeforeShadow(i,w,C,D,$,re,null),i.renderBufferDirect(D,null,$,re,w,null),w.onAfterShadow(i,w,C,D,$,re,null)}}let W=w.children;for(let $=0,K=W.length;$<K;$++)v(W[$],C,D,S,E)}function I(w){w.target.removeEventListener("dispose",I);for(let D in l){let S=l[D],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var Qg={[no]:io,[so]:ao,[ro]:lo,[ri]:oo,[io]:no,[ao]:so,[lo]:ro,[oo]:ri};function e0(i,e){function t(){let j=!1,Ee=new ft,we=null,Ue=new ft(0,0,0,0);return{setMask:function(Me){we!==Me&&!j&&(i.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){j=Me},setClear:function(Me,_e,Oe,Ye,ot){ot===!0&&(Me*=Ye,_e*=Ye,Oe*=Ye),Ee.set(Me,_e,Oe,Ye),Ue.equals(Ee)===!1&&(i.clearColor(Me,_e,Oe,Ye),Ue.copy(Ee))},reset:function(){j=!1,we=null,Ue.set(-1,0,0,0)}}}function n(){let j=!1,Ee=!1,we=null,Ue=null,Me=null;return{setReversed:function(_e){if(Ee!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Ee=_e;let Ye=Me;Me=null,this.setClear(Ye)}},getReversed:function(){return Ee},setTest:function(_e){_e?g(i.DEPTH_TEST):F(i.DEPTH_TEST)},setMask:function(_e){we!==_e&&!j&&(i.depthMask(_e),we=_e)},setFunc:function(_e){if(Ee&&(_e=Qg[_e]),Ue!==_e){switch(_e){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=_e}},setLocked:function(_e){j=_e},setClear:function(_e){Me!==_e&&(Ee&&(_e=1-_e),i.clearDepth(_e),Me=_e)},reset:function(){j=!1,we=null,Ue=null,Me=null,Ee=!1}}}function s(){let j=!1,Ee=null,we=null,Ue=null,Me=null,_e=null,Oe=null,Ye=null,ot=null;return{setTest:function(tt){j||(tt?g(i.STENCIL_TEST):F(i.STENCIL_TEST))},setMask:function(tt){Ee!==tt&&!j&&(i.stencilMask(tt),Ee=tt)},setFunc:function(tt,vn,cn){(we!==tt||Ue!==vn||Me!==cn)&&(i.stencilFunc(tt,vn,cn),we=tt,Ue=vn,Me=cn)},setOp:function(tt,vn,cn){(_e!==tt||Oe!==vn||Ye!==cn)&&(i.stencilOp(tt,vn,cn),_e=tt,Oe=vn,Ye=cn)},setLocked:function(tt){j=tt},setClear:function(tt){ot!==tt&&(i.clearStencil(tt),ot=tt)},reset:function(){j=!1,Ee=null,we=null,Ue=null,Me=null,_e=null,Oe=null,Ye=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],x=null,_=!1,m=null,h=null,T=null,y=null,v=null,I=null,w=null,C=new Ve(0,0,0),D=0,S=!1,E=null,V=null,W=null,$=null,K=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,ce=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(q)[1]),ne=ce>=1):q.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ne=ce>=2);let le=null,ie={},X=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),he=new ft().fromArray(X),z=new ft().fromArray(ae);function P(j,Ee,we,Ue){let Me=new Uint8Array(4),_e=i.createTexture();i.bindTexture(j,_e),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<we;Oe++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Ee+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return _e}let M={};M[i.TEXTURE_2D]=P(i.TEXTURE_2D,i.TEXTURE_2D,1),M[i.TEXTURE_CUBE_MAP]=P(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[i.TEXTURE_2D_ARRAY]=P(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),M[i.TEXTURE_3D]=P(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),g(i.DEPTH_TEST),o.setFunc(ri),Z(!1),Y(Ya),g(i.CULL_FACE),B(Ln);function g(j){u[j]!==!0&&(i.enable(j),u[j]=!0)}function F(j){u[j]!==!1&&(i.disable(j),u[j]=!1)}function H(j,Ee){return d[j]!==Ee?(i.bindFramebuffer(j,Ee),d[j]=Ee,j===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ee),j===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function O(j,Ee){let we=p,Ue=!1;if(j){we=f.get(Ee),we===void 0&&(we=[],f.set(Ee,we));let Me=j.textures;if(we.length!==Me.length||we[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=Me.length;_e<Oe;_e++)we[_e]=i.COLOR_ATTACHMENT0+_e;we.length=Me.length,Ue=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(we)}function Q(j){return x!==j?(i.useProgram(j),x=j,!0):!1}let ee={[Wn]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[Ec]:i.FUNC_REVERSE_SUBTRACT};ee[Tc]=i.MIN,ee[wc]=i.MAX;let R={[Ac]:i.ZERO,[Rc]:i.ONE,[Cc]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[Uc]:i.ONE_MINUS_DST_COLOR,[Lc]:i.ONE_MINUS_DST_ALPHA,[Fc]:i.CONSTANT_COLOR,[Oc]:i.ONE_MINUS_CONSTANT_COLOR,[Bc]:i.CONSTANT_ALPHA,[zc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(j,Ee,we,Ue,Me,_e,Oe,Ye,ot,tt){if(j===Ln){_===!0&&(F(i.BLEND),_=!1);return}if(_===!1&&(g(i.BLEND),_=!0),j!==Sc){if(j!==m||tt!==S){if((h!==Wn||v!==Wn)&&(i.blendEquation(i.FUNC_ADD),h=Wn,v=Wn),tt)switch(j){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $a:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}T=null,y=null,I=null,w=null,C.set(0,0,0),D=0,m=j,S=tt}return}Me=Me||Ee,_e=_e||we,Oe=Oe||Ue,(Ee!==h||Me!==v)&&(i.blendEquationSeparate(ee[Ee],ee[Me]),h=Ee,v=Me),(we!==T||Ue!==y||_e!==I||Oe!==w)&&(i.blendFuncSeparate(R[we],R[Ue],R[_e],R[Oe]),T=we,y=Ue,I=_e,w=Oe),(Ye.equals(C)===!1||ot!==D)&&(i.blendColor(Ye.r,Ye.g,Ye.b,ot),C.copy(Ye),D=ot),m=j,S=!1}function G(j,Ee){j.side===Ft?F(i.CULL_FACE):g(i.CULL_FACE);let we=j.side===Lt;Ee&&(we=!we),Z(we),j.blending===si&&j.transparent===!1?B(Ln):B(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);let Ue=j.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),A(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?g(i.SAMPLE_ALPHA_TO_COVERAGE):F(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(j){E!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),E=j)}function Y(j){j!==vc?(g(i.CULL_FACE),j!==V&&(j===Ya?i.cullFace(i.BACK):j===Mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):F(i.CULL_FACE),V=j}function U(j){j!==W&&(ne&&i.lineWidth(j),W=j)}function A(j,Ee,we){j?(g(i.POLYGON_OFFSET_FILL),($!==Ee||K!==we)&&(i.polygonOffset(Ee,we),$=Ee,K=we)):F(i.POLYGON_OFFSET_FILL)}function J(j){j?g(i.SCISSOR_TEST):F(i.SCISSOR_TEST)}function ge(j){j===void 0&&(j=i.TEXTURE0+re-1),le!==j&&(i.activeTexture(j),le=j)}function Se(j,Ee,we){we===void 0&&(le===null?we=i.TEXTURE0+re-1:we=le);let Ue=ie[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[we]=Ue),(Ue.type!==j||Ue.texture!==Ee)&&(le!==we&&(i.activeTexture(we),le=we),i.bindTexture(j,Ee||M[j]),Ue.type=j,Ue.texture=Ee)}function N(){let j=ie[le];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{i.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{i.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{i.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{i.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{i.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{i.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(j){he.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),he.copy(j))}function ke(j){z.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),z.copy(j))}function Ne(j,Ee){let we=l.get(Ee);we===void 0&&(we=new WeakMap,l.set(Ee,we));let Ue=we.get(j);Ue===void 0&&(Ue=i.getUniformBlockIndex(Ee,j.name),we.set(j,Ue))}function Ie(j,Ee){let Ue=l.get(Ee).get(j);c.get(Ee)!==Ue&&(i.uniformBlockBinding(Ee,Ue,j.__bindingPointIndex),c.set(Ee,Ue))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,ie={},d={},f=new WeakMap,p=[],x=null,_=!1,m=null,h=null,T=null,y=null,v=null,I=null,w=null,C=new Ve(0,0,0),D=0,S=!1,E=null,V=null,W=null,$=null,K=null,he.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:g,disable:F,bindFramebuffer:H,drawBuffers:O,useProgram:Q,setBlending:B,setMaterial:G,setFlipSided:Z,setCullFace:Y,setLineWidth:U,setPolygonOffset:A,setScissorTest:J,activeTexture:ge,bindTexture:Se,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:te,texImage2D:Le,texImage3D:ve,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:ye,texStorage3D:Te,texSubImage2D:ue,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Re,scissor:Ae,viewport:ke,reset:Ze}}function t0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return p?new OffscreenCanvas(N,b):ys("canvas")}function _(N,b,te){let ue=1,xe=Se(N);if((xe.width>te||xe.height>te)&&(ue=te/Math.max(xe.width,xe.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let de=Math.floor(ue*xe.width),Re=Math.floor(ue*xe.height);d===void 0&&(d=x(de,Re));let ye=b?x(de,Re):d;return ye.width=de,ye.height=Re,ye.getContext("2d").drawImage(N,0,0,de,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Re+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function m(N){return N.generateMipmaps}function h(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(N,b,te,ue,xe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=b;if(b===i.RED&&(te===i.FLOAT&&(de=i.R32F),te===i.HALF_FLOAT&&(de=i.R16F),te===i.UNSIGNED_BYTE&&(de=i.R8)),b===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.R8UI),te===i.UNSIGNED_SHORT&&(de=i.R16UI),te===i.UNSIGNED_INT&&(de=i.R32UI),te===i.BYTE&&(de=i.R8I),te===i.SHORT&&(de=i.R16I),te===i.INT&&(de=i.R32I)),b===i.RG&&(te===i.FLOAT&&(de=i.RG32F),te===i.HALF_FLOAT&&(de=i.RG16F),te===i.UNSIGNED_BYTE&&(de=i.RG8)),b===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RG8UI),te===i.UNSIGNED_SHORT&&(de=i.RG16UI),te===i.UNSIGNED_INT&&(de=i.RG32UI),te===i.BYTE&&(de=i.RG8I),te===i.SHORT&&(de=i.RG16I),te===i.INT&&(de=i.RG32I)),b===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RGB8UI),te===i.UNSIGNED_SHORT&&(de=i.RGB16UI),te===i.UNSIGNED_INT&&(de=i.RGB32UI),te===i.BYTE&&(de=i.RGB8I),te===i.SHORT&&(de=i.RGB16I),te===i.INT&&(de=i.RGB32I)),b===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),te===i.UNSIGNED_INT&&(de=i.RGBA32UI),te===i.BYTE&&(de=i.RGBA8I),te===i.SHORT&&(de=i.RGBA16I),te===i.INT&&(de=i.RGBA32I)),b===i.RGB&&(te===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(de=i.R11F_G11F_B10F)),b===i.RGBA){let Re=xe?xs:Qe.getTransfer(ue);te===i.FLOAT&&(de=i.RGBA32F),te===i.HALF_FLOAT&&(de=i.RGBA16F),te===i.UNSIGNED_BYTE&&(de=Re===nt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function v(N,b){let te;return N?b===null||b===$n||b===Qi?te=i.DEPTH24_STENCIL8:b===gn?te=i.DEPTH32F_STENCIL8:b===Ki&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$n||b===Qi?te=i.DEPTH_COMPONENT24:b===gn?te=i.DEPTH_COMPONENT32F:b===Ki&&(te=i.DEPTH_COMPONENT16),te}function I(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nt&&N.minFilter!==It?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function w(N){let b=N.target;b.removeEventListener("dispose",w),D(b),b.isVideoTexture&&u.delete(b)}function C(N){let b=N.target;b.removeEventListener("dispose",C),E(b)}function D(N){let b=n.get(N);if(b.__webglInit===void 0)return;let te=N.source,ue=f.get(te);if(ue){let xe=ue[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&S(N),Object.keys(ue).length===0&&f.delete(te)}n.remove(N)}function S(N){let b=n.get(N);i.deleteTexture(b.__webglTexture);let te=N.source,ue=f.get(te);delete ue[b.__cacheKey],o.memory.textures--}function E(N){let b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let xe=0;xe<b.__webglFramebuffer[ue].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[ue][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ue]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let te=N.textures;for(let ue=0,xe=te.length;ue<xe;ue++){let de=n.get(te[ue]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(te[ue])}n.remove(N)}let V=0;function W(){V=0}function $(){let N=V;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),V+=1,N}function K(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function re(N,b){let te=n.get(N);if(N.isVideoTexture&&J(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){let ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M(te,N,b);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+b)}function ne(N,b){let te=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){M(te,N,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+b)}function ce(N,b){let te=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){M(te,N,b);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+b)}function q(N,b){let te=n.get(N);if(N.version>0&&te.__version!==N.version){g(te,N,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+b)}let le={[Oi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ie={[Nt]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},X={[jc]:i.NEVER,[sh]:i.ALWAYS,[Qc]:i.LESS,[cl]:i.LEQUAL,[eh]:i.EQUAL,[ih]:i.GEQUAL,[th]:i.GREATER,[nh]:i.NOTEQUAL};function ae(N,b){if(b.type===gn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===It||b.magFilter===fo||b.magFilter===Xs||b.magFilter===Jn||b.minFilter===It||b.minFilter===fo||b.minFilter===Xs||b.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,le[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,le[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,le[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nt||b.minFilter!==Xs&&b.minFilter!==Jn||b.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function he(N,b){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",w));let ue=b.source,xe=f.get(ue);xe===void 0&&(xe={},f.set(ue,xe));let de=K(b);if(de!==N.__cacheKey){xe[de]===void 0&&(xe[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),xe[de].usedTimes++;let Re=xe[N.__cacheKey];Re!==void 0&&(xe[N.__cacheKey].usedTimes--,Re.usedTimes===0&&S(b)),N.__cacheKey=de,N.__webglTexture=xe[de].texture}return te}function z(N,b,te){return Math.floor(Math.floor(N/te)/b)}function P(N,b,te,ue){let de=N.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,te,ue,b.data);else{de.sort((ve,Ae)=>ve.start-Ae.start);let Re=0;for(let ve=1;ve<de.length;ve++){let Ae=de[Re],ke=de[ve],Ne=Ae.start+Ae.count,Ie=z(ke.start,b.width,4),Ze=z(Ae.start,b.width,4);ke.start<=Ne+1&&Ie===Ze&&z(ke.start+ke.count-1,b.width,4)===Ie?Ae.count=Math.max(Ae.count,ke.start+ke.count-Ae.start):(++Re,de[Re]=ke)}de.length=Re+1;let ye=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ve=0,Ae=de.length;ve<Ae;ve++){let ke=de[ve],Ne=Math.floor(ke.start/4),Ie=Math.ceil(ke.count/4),Ze=Ne%b.width,j=Math.floor(Ne/b.width),Ee=Ie,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,Ze,j,Ee,we,te,ue,b.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function M(N,b,te){let ue=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=i.TEXTURE_3D);let xe=he(N,b),de=b.source;t.bindTexture(ue,N.__webglTexture,i.TEXTURE0+te);let Re=n.get(de);if(de.version!==Re.__version||xe===!0){t.activeTexture(i.TEXTURE0+te);let ye=Qe.getPrimaries(Qe.workingColorSpace),Te=b.colorSpace===Un?null:Qe.getPrimaries(b.colorSpace),Le=b.colorSpace===Un||ye===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ve=_(b.image,!1,s.maxTextureSize);ve=ge(b,ve);let Ae=r.convert(b.format,b.colorSpace),ke=r.convert(b.type),Ne=y(b.internalFormat,Ae,ke,b.colorSpace,b.isVideoTexture);ae(ue,b);let Ie,Ze=b.mipmaps,j=b.isVideoTexture!==!0,Ee=Re.__version===void 0||xe===!0,we=de.dataReady,Ue=I(b,ve);if(b.isDepthTexture)Ne=v(b.format===es,b.type),Ee&&(j?t.texStorage2D(i.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ae,ke,null));else if(b.isDataTexture)if(Ze.length>0){j&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Ze[0].width,Ze[0].height);for(let Me=0,_e=Ze.length;Me<_e;Me++)Ie=Ze[Me],j?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):t.texImage2D(i.TEXTURE_2D,Me,Ne,Ie.width,Ie.height,0,Ae,ke,Ie.data);b.generateMipmaps=!1}else j?(Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,ve.width,ve.height),we&&P(b,ve,Ae,ke)):t.texImage2D(i.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ae,ke,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,Ze[0].width,Ze[0].height,ve.depth);for(let Me=0,_e=Ze.length;Me<_e;Me++)if(Ie=Ze[Me],b.format!==Zt)if(Ae!==null)if(j){if(we)if(b.layerUpdates.size>0){let Oe=xl(Ie.width,Ie.height,b.format,b.type);for(let Ye of b.layerUpdates){let ot=Ie.data.subarray(Ye*Oe/Ie.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ye,Ie.width,Ie.height,1,Ae,ot)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,ve.depth,Ae,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Ne,Ie.width,Ie.height,ve.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,ve.depth,Ae,ke,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Ne,Ie.width,Ie.height,ve.depth,0,Ae,ke,Ie.data)}else{j&&Ee&&t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Ze[0].width,Ze[0].height);for(let Me=0,_e=Ze.length;Me<_e;Me++)Ie=Ze[Me],b.format!==Zt?Ae!==null?j?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):t.texImage2D(i.TEXTURE_2D,Me,Ne,Ie.width,Ie.height,0,Ae,ke,Ie.data)}else if(b.isDataArrayTexture)if(j){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ne,ve.width,ve.height,ve.depth),we)if(b.layerUpdates.size>0){let Me=xl(ve.width,ve.height,b.format,b.type);for(let _e of b.layerUpdates){let Oe=ve.data.subarray(_e*Me/ve.data.BYTES_PER_ELEMENT,(_e+1)*Me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ve.width,ve.height,1,Ae,ke,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,ke,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Ae,ke,ve.data);else if(b.isData3DTexture)j?(Ee&&t.texStorage3D(i.TEXTURE_3D,Ue,Ne,ve.width,ve.height,ve.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,ke,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Ae,ke,ve.data);else if(b.isFramebufferTexture){if(Ee)if(j)t.texStorage2D(i.TEXTURE_2D,Ue,Ne,ve.width,ve.height);else{let Me=ve.width,_e=ve.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Ne,Me,_e,0,Ae,ke,null),Me>>=1,_e>>=1}}else if(Ze.length>0){if(j&&Ee){let Me=Se(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Me.width,Me.height)}for(let Me=0,_e=Ze.length;Me<_e;Me++)Ie=Ze[Me],j?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ae,ke,Ie):t.texImage2D(i.TEXTURE_2D,Me,Ne,Ae,ke,Ie);b.generateMipmaps=!1}else if(j){if(Ee){let Me=Se(ve);t.texStorage2D(i.TEXTURE_2D,Ue,Ne,Me.width,Me.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,ke,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Ae,ke,ve);m(b)&&h(ue),Re.__version=de.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function g(N,b,te){if(b.image.length!==6)return;let ue=he(N,b),xe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+te);let de=n.get(xe);if(xe.version!==de.__version||ue===!0){t.activeTexture(i.TEXTURE0+te);let Re=Qe.getPrimaries(Qe.workingColorSpace),ye=b.colorSpace===Un?null:Qe.getPrimaries(b.colorSpace),Te=b.colorSpace===Un||Re===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Le=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Le&&!ve?Ae[_e]=_(b.image[_e],!0,s.maxCubemapSize):Ae[_e]=ve?b.image[_e].image:b.image[_e],Ae[_e]=ge(b,Ae[_e]);let ke=Ae[0],Ne=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Ze=y(b.internalFormat,Ne,Ie,b.colorSpace),j=b.isVideoTexture!==!0,Ee=de.__version===void 0||ue===!0,we=xe.dataReady,Ue=I(b,ke);ae(i.TEXTURE_CUBE_MAP,b);let Me;if(Le){j&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Ze,ke.width,ke.height);for(let _e=0;_e<6;_e++){Me=Ae[_e].mipmaps;for(let Oe=0;Oe<Me.length;Oe++){let Ye=Me[Oe];b.format!==Zt?Ne!==null?j?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ye.width,Ye.height,Ne,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,Ze,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ye.width,Ye.height,Ne,Ie,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,Ze,Ye.width,Ye.height,0,Ne,Ie,Ye.data)}}}else{if(Me=b.mipmaps,j&&Ee){Me.length>0&&Ue++;let _e=Se(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Ze,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ve){j?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,Ne,Ie,Ae[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ze,Ae[_e].width,Ae[_e].height,0,Ne,Ie,Ae[_e].data);for(let Oe=0;Oe<Me.length;Oe++){let ot=Me[Oe].image[_e].image;j?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ot.width,ot.height,Ne,Ie,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,Ze,ot.width,ot.height,0,Ne,Ie,ot.data)}}else{j?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne,Ie,Ae[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ze,Ne,Ie,Ae[_e]);for(let Oe=0;Oe<Me.length;Oe++){let Ye=Me[Oe];j?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,Ne,Ie,Ye.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,Ze,Ne,Ie,Ye.image[_e])}}}m(b)&&h(i.TEXTURE_CUBE_MAP),de.__version=xe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function F(N,b,te,ue,xe,de){let Re=r.convert(te.format,te.colorSpace),ye=r.convert(te.type),Te=y(te.internalFormat,Re,ye,te.colorSpace),Le=n.get(b),ve=n.get(te);if(ve.__renderTarget=b,!Le.__hasExternalTextures){let Ae=Math.max(1,b.width>>de),ke=Math.max(1,b.height>>de);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Te,Ae,ke,b.depth,0,Re,ye,null):t.texImage2D(xe,de,Te,Ae,ke,0,Re,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),A(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,xe,ve.__webglTexture,0,U(b)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,xe,ve.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(N,b,te){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){let ue=b.depthTexture,xe=ue&&ue.isDepthTexture?ue.type:null,de=v(b.stencilBuffer,xe),Re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=U(b);A(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,de,b.width,b.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,N)}else{let ue=b.textures;for(let xe=0;xe<ue.length;xe++){let de=ue[xe],Re=r.convert(de.format,de.colorSpace),ye=r.convert(de.type),Te=y(de.internalFormat,Re,ye,de.colorSpace),Le=U(b);te&&A(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Te,b.width,b.height):A(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ue=n.get(b.depthTexture);ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);let xe=ue.__webglTexture,de=U(b);if(b.depthTexture.format===Bi)A(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(b.depthTexture.format===es)A(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Q(N){let b=n.get(N),te=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let ue=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",xe)};ue.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=ue}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");let ue=N.texture.mipmaps;ue&&ue.length>0?O(b.__webglFramebuffer[0],N):O(b.__webglFramebuffer,N)}else if(te){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=i.createRenderbuffer(),H(b.__webglDepthbuffer[ue],N,!1);else{let xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,de)}}else{let ue=N.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),H(b.__webglDepthbuffer,N,!1);else{let xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(N,b,te){let ue=n.get(N);b!==void 0&&F(ue.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Q(N)}function R(N){let b=N.texture,te=n.get(N),ue=n.get(b);N.addEventListener("dispose",C);let xe=N.textures,de=N.isWebGLCubeRenderTarget===!0,Re=xe.length>1;if(Re||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=b.version,o.memory.textures++),de){te.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[ye]=[];for(let Te=0;Te<b.mipmaps.length;Te++)te.__webglFramebuffer[ye][Te]=i.createFramebuffer()}else te.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)te.__webglFramebuffer[ye]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ye=0,Te=xe.length;ye<Te;ye++){let Le=n.get(xe[ye]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&A(N)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){let Te=xe[ye];te.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ye]);let Le=r.convert(Te.format,Te.colorSpace),ve=r.convert(Te.type),Ae=y(Te.internalFormat,Le,ve,Te.colorSpace,N.isXRRenderTarget===!0),ke=U(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ae,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,te.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),H(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)F(te.__webglFramebuffer[ye][Te],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else F(te.__webglFramebuffer[ye],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(b)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ye=0,Te=xe.length;ye<Te;ye++){let Le=xe[ye],ve=n.get(Le),Ae=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ve.__webglTexture),ae(Ae,Le),F(te.__webglFramebuffer,N,Le,i.COLOR_ATTACHMENT0+ye,Ae,0),m(Le)&&h(Ae)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ue.__webglTexture),ae(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)F(te.__webglFramebuffer[Te],N,b,i.COLOR_ATTACHMENT0,ye,Te);else F(te.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,ye,0);m(b)&&h(ye),t.unbindTexture()}N.depthBuffer&&Q(N)}function B(N){let b=N.textures;for(let te=0,ue=b.length;te<ue;te++){let xe=b[te];if(m(xe)){let de=T(N),Re=n.get(xe).__webglTexture;t.bindTexture(de,Re),h(de),t.unbindTexture()}}}let G=[],Z=[];function Y(N){if(N.samples>0){if(A(N)===!1){let b=N.textures,te=N.width,ue=N.height,xe=i.COLOR_BUFFER_BIT,de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(N),ye=b.length>1;if(ye)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Te=N.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let ve=n.get(b[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,te,ue,0,0,te,ue,xe,i.NEAREST),c===!0&&(G.length=0,Z.length=0,G.push(i.COLOR_ATTACHMENT0+Le),N.depthBuffer&&N.resolveDepthBuffer===!1&&(G.push(de),Z.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Le]);let ve=n.get(b[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function U(N){return Math.min(s.maxSamples,N.samples)}function A(N){let b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function J(N){let b=o.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function ge(N,b){let te=N.colorSpace,ue=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==oi&&te!==Un&&(Qe.getTransfer(te)===nt?(ue!==Zt||xe!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function Se(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=ne,this.setTexture3D=ce,this.setTextureCube=q,this.rebindTextures=ee,this.setupRenderTarget=R,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=F,this.useMultisampledRTT=A}function n0(i,e){function t(n,s=Un){let r,o=Qe.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===el)return i.BYTE;if(n===tl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===Zt)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===ol)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===al)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===Js)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Vo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var i0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s0=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:i0,fragmentShader:s0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pl=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,x=null,_=typeof XRWebGLBinding<"u",m=new Il,h={},T=t.getContextAttributes(),y=null,v=null,I=[],w=[],C=new me,D=null,S=new Ut;S.viewport=new ft;let E=new Ut;E.viewport=new ft;let V=[S,E],W=new eo,$=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let g=I[M];return g===void 0&&(g=new Wi,I[M]=g),g.getTargetRaySpace()},this.getControllerGrip=function(M){let g=I[M];return g===void 0&&(g=new Wi,I[M]=g),g.getGripSpace()},this.getHand=function(M){let g=I[M];return g===void 0&&(g=new Wi,I[M]=g),g.getHandSpace()};function re(M){let g=w.indexOf(M.inputSource);if(g===-1)return;let F=I[g];F!==void 0&&(F.update(M.inputSource,M.frame,l||o),F.dispatchEvent({type:M.type,data:M.inputSource}))}function ne(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ce);for(let M=0;M<I.length;M++){let g=w[M];g!==null&&(w[M]=null,I[M].disconnect(g))}$=null,K=null,m.reset();for(let M in h)delete h[M];e.setRenderTarget(y),p=null,f=null,d=null,s=null,v=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(M){l=M},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ce),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,H=null,O=null;T.depth&&(O=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=T.stencil?es:Bi,H=T.stencil?Qi:$n);let Q={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new un(f.textureWidth,f.textureHeight,{format:Zt,type:an,depthTexture:new As(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let F={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new un(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),P.setContext(s),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(M){for(let g=0;g<M.removed.length;g++){let F=M.removed[g],H=w.indexOf(F);H>=0&&(w[H]=null,I[H].disconnect(F))}for(let g=0;g<M.added.length;g++){let F=M.added[g],H=w.indexOf(F);if(H===-1){for(let Q=0;Q<I.length;Q++)if(Q>=w.length){w.push(F),H=Q;break}else if(w[Q]===null){w[Q]=F,H=Q;break}if(H===-1)break}let O=I[H];O&&O.connect(F)}}let q=new k,le=new k;function ie(M,g,F){q.setFromMatrixPosition(g.matrixWorld),le.setFromMatrixPosition(F.matrixWorld);let H=q.distanceTo(le),O=g.projectionMatrix.elements,Q=F.projectionMatrix.elements,ee=O[14]/(O[10]-1),R=O[14]/(O[10]+1),B=(O[9]+1)/O[5],G=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],Y=(Q[8]+1)/Q[0],U=ee*Z,A=ee*Y,J=H/(-Z+Y),ge=J*-Z;if(g.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ge),M.translateZ(J),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),O[10]===-1)M.projectionMatrix.copy(g.projectionMatrix),M.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let Se=ee+J,N=R+J,b=U-ge,te=A+(H-ge),ue=B*R/N*Se,xe=G*R/N*Se;M.projectionMatrix.makePerspective(b,te,ue,xe,Se,N),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function X(M,g){g===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(g.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let g=M.near,F=M.far;m.texture!==null&&(m.depthNear>0&&(g=m.depthNear),m.depthFar>0&&(F=m.depthFar)),W.near=E.near=S.near=g,W.far=E.far=S.far=F,($!==W.near||K!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),$=W.near,K=W.far),W.layers.mask=M.layers.mask|6,S.layers.mask=W.layers.mask&3,E.layers.mask=W.layers.mask&5;let H=M.parent,O=W.cameras;X(W,H);for(let Q=0;Q<O.length;Q++)X(O[Q],H);O.length===2?ie(W,S,E):W.projectionMatrix.copy(S.projectionMatrix),ae(M,W,H)};function ae(M,g,F){F===null?M.matrix.copy(g.matrixWorld):(M.matrix.copy(F.matrixWorld),M.matrix.invert(),M.matrix.multiply(g.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(g.projectionMatrix),M.projectionMatrixInverse.copy(g.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=zi*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(M){c=M,f!==null&&(f.fixedFoveation=M),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=M)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(M){return h[M]};let he=null;function z(M,g){if(u=g.getViewerPose(l||o),x=g,u!==null){let F=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let H=!1;F.length!==W.cameras.length&&(W.cameras.length=0,H=!0);for(let R=0;R<F.length;R++){let B=F[R],G=null;if(p!==null)G=p.getViewport(B);else{let Y=d.getViewSubImage(f,B);G=Y.viewport,R===0&&(e.setRenderTargetTextures(v,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(v))}let Z=V[R];Z===void 0&&(Z=new Ut,Z.layers.enable(R),Z.viewport=new ft,V[R]=Z),Z.matrix.fromArray(B.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(G.x,G.y,G.width,G.height),R===0&&(W.matrix.copy(Z.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),H===!0&&W.cameras.push(Z)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let R=d.getDepthInformation(F[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(O&&O.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let R=0;R<F.length;R++){let B=F[R].camera;if(B){let G=h[B];G||(G=new Rs,h[B]=G);let Z=d.getCameraImage(B);G.sourceTexture=Z}}}}for(let F=0;F<I.length;F++){let H=w[F],O=I[F];H!==null&&O!==void 0&&O.update(H,g,l||o)}he&&he(M,g),g.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:g}),x=null}let P=new Oh;P.setAnimationLoop(z),this.setAnimationLoop=function(M){he=M},this.dispose=function(){}}},yi=new en,r0=new ct;function o0(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,fl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,T,y,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),x(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,T,y):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Lt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Lt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let T=e.get(h),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler(yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,T,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let T=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){let v=y.program;n.uniformBlockBinding(T,v)}function l(T,y){let v=s[T.id];v===void 0&&(x(T),v=u(T),s[T.id]=v,T.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(T,I);let w=e.render.frame;r[T.id]!==w&&(f(T),r[T.id]=w)}function u(T){let y=d();T.__bindingPointIndex=y;let v=i.createBuffer(),I=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let y=s[T.id],v=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,E=D.length;S<E;S++){let V=D[S];if(p(V,w,S,I)===!0){let W=V.__offset,$=Array.isArray(V.value)?V.value:[V.value],K=0;for(let re=0;re<$.length;re++){let ne=$[re],ce=_(ne);typeof ne=="number"||typeof ne=="boolean"?(V.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,W+K,V.__data)):ne.isMatrix3?(V.__data[0]=ne.elements[0],V.__data[1]=ne.elements[1],V.__data[2]=ne.elements[2],V.__data[3]=0,V.__data[4]=ne.elements[3],V.__data[5]=ne.elements[4],V.__data[6]=ne.elements[5],V.__data[7]=0,V.__data[8]=ne.elements[6],V.__data[9]=ne.elements[7],V.__data[10]=ne.elements[8],V.__data[11]=0):(ne.toArray(V.__data,K),K+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,v,I){let w=T.value,C=y+"_"+v;if(I[C]===void 0)return typeof w=="number"||typeof w=="boolean"?I[C]=w:I[C]=w.clone(),!0;{let D=I[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return I[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function x(T){let y=T.uniforms,v=0,I=16;for(let C=0,D=y.length;C<D;C++){let S=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,V=S.length;E<V;E++){let W=S[E],$=Array.isArray(W.value)?W.value:[W.value];for(let K=0,re=$.length;K<re;K++){let ne=$[K],ce=_(ne),q=v%I,le=q%ce.boundary,ie=q+le;v+=le,ie!==0&&I-ie<ce.storage&&(v+=I-ie),W.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=ce.storage}}}let w=v%I;return w>0&&(v+=I-w),T.__size=v,T.__cache={},this}function _(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){let y=T.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}var jo=class{constructor(e={}){let{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,I=!1;this._outputColorSpace=xt;let w=0,C=0,D=null,S=-1,E=null,V=new ft,W=new ft,$=null,K=new Ve(0),re=0,ne=t.width,ce=t.height,q=1,le=null,ie=null,X=new ft(0,0,ne,ce),ae=new ft(0,0,ne,ce),he=!1,z=new Xi,P=!1,M=!1,g=new ct,F=new k,H=new ft,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ee(){return D===null?q:1}let R=n;function B(L,se){return t.getContext(L,se)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Me,!1),R===null){let se="webgl2";if(R=B(se,L),R===null)throw B(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let G,Z,Y,U,A,J,ge,Se,N,b,te,ue,xe,de,Re,ye,Te,Le,ve,Ae,ke,Ne,Ie,Ze;function j(){G=new Tm(R),G.init(),Ne=new n0(R,G),Z=new _m(R,G,e,Ne),Y=new e0(R,G),Z.reversedDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),U=new Rm(R),A=new Hg,J=new t0(R,G,Y,A,Z,Ne,U),ge=new vm(v),Se=new Em(v),N=new Dd(R),Ie=new gm(R,N),b=new wm(R,N,U,Ie),te=new Im(R,b,N,U),ve=new Cm(R,Z,J),ye=new ym(A),ue=new kg(v,ge,Se,G,Z,Ie,ye),xe=new o0(v,A),de=new Gg,Re=new Jg(G),Le=new mm(v,ge,Se,Y,te,p,c),Te=new jg(v,te,Z),Ze=new a0(R,U,Z,Y),Ae=new xm(R,G,U),ke=new Am(R,G,U),U.programs=ue.programs,v.capabilities=Z,v.extensions=G,v.properties=A,v.renderLists=de,v.shadowMap=Te,v.state=Y,v.info=U}j();let Ee=new Pl(v,R);this.xr=Ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let L=G.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=G.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(ne,ce,!1))},this.getSize=function(L){return L.set(ne,ce)},this.setSize=function(L,se,fe=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,ce=se,t.width=Math.floor(L*q),t.height=Math.floor(se*q),fe===!0&&(t.style.width=L+"px",t.style.height=se+"px"),this.setViewport(0,0,L,se)},this.getDrawingBufferSize=function(L){return L.set(ne*q,ce*q).floor()},this.setDrawingBufferSize=function(L,se,fe){ne=L,ce=se,q=fe,t.width=Math.floor(L*fe),t.height=Math.floor(se*fe),this.setViewport(0,0,L,se)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(X)},this.setViewport=function(L,se,fe,pe){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,se,fe,pe),Y.viewport(V.copy(X).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(ae)},this.setScissor=function(L,se,fe,pe){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,se,fe,pe),Y.scissor(W.copy(ae).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(L){Y.setScissorTest(he=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(L=!0,se=!0,fe=!0){let pe=0;if(L){let oe=!1;if(D!==null){let be=D.texture.format;oe=be===yo||be===_o||be===xo}if(oe){let be=D.texture.type,Pe=be===an||be===$n||be===Ki||be===Qi||be===mo||be===go,Fe=Le.getClearColor(),De=Le.getClearAlpha(),Ge=Fe.r,Xe=Fe.g,Be=Fe.b;Pe?(x[0]=Ge,x[1]=Xe,x[2]=Be,x[3]=De,R.clearBufferuiv(R.COLOR,0,x)):(_[0]=Ge,_[1]=Xe,_[2]=Be,_[3]=De,R.clearBufferiv(R.COLOR,0,_))}else pe|=R.COLOR_BUFFER_BIT}se&&(pe|=R.DEPTH_BUFFER_BIT),fe&&(pe|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Le.dispose(),de.dispose(),Re.dispose(),A.dispose(),ge.dispose(),Se.dispose(),te.dispose(),Ie.dispose(),Ze.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",cn),Ee.removeEventListener("sessionend",Ol),Kn.stop()};function we(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let L=U.autoReset,se=Te.enabled,fe=Te.autoUpdate,pe=Te.needsUpdate,oe=Te.type;j(),U.autoReset=L,Te.enabled=se,Te.autoUpdate=fe,Te.needsUpdate=pe,Te.type=oe}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _e(L){let se=L.target;se.removeEventListener("dispose",_e),Oe(se)}function Oe(L){Ye(L),A.remove(L)}function Ye(L){let se=A.get(L).programs;se!==void 0&&(se.forEach(function(fe){ue.releaseProgram(fe)}),L.isShaderMaterial&&ue.releaseShaderCache(L))}this.renderBufferDirect=function(L,se,fe,pe,oe,be){se===null&&(se=O);let Pe=oe.isMesh&&oe.matrixWorld.determinant()<0,Fe=ou(L,se,fe,pe,oe);Y.setMaterial(pe,Pe);let De=fe.index,Ge=1;if(pe.wireframe===!0){if(De=b.getWireframeAttribute(fe),De===void 0)return;Ge=2}let Xe=fe.drawRange,Be=fe.attributes.position,je=Xe.start*Ge,it=(Xe.start+Xe.count)*Ge;be!==null&&(je=Math.max(je,be.start*Ge),it=Math.min(it,(be.start+be.count)*Ge)),De!==null?(je=Math.max(je,0),it=Math.min(it,De.count)):Be!=null&&(je=Math.max(je,0),it=Math.min(it,Be.count));let gt=it-je;if(gt<0||gt===1/0)return;Ie.setup(oe,pe,Fe,fe,De);let at,st=Ae;if(De!==null&&(at=N.get(De),st=ke,st.setIndex(at)),oe.isMesh)pe.wireframe===!0?(Y.setLineWidth(pe.wireframeLinewidth*ee()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(oe.isLine){let He=pe.linewidth;He===void 0&&(He=1),Y.setLineWidth(He*ee()),oe.isLineSegments?st.setMode(R.LINES):oe.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else oe.isPoints?st.setMode(R.POINTS):oe.isSprite&&st.setMode(R.TRIANGLES);if(oe.isBatchedMesh)if(oe._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount,oe._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))st.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let He=oe._multiDrawStarts,ht=oe._multiDrawCounts,et=oe._multiDrawCount,Ot=De?N.get(De).bytesPerElement:1,Si=A.get(pe).currentProgram.getUniforms();for(let Bt=0;Bt<et;Bt++)Si.setValue(R,"_gl_DrawID",Bt),st.render(He[Bt]/Ot,ht[Bt])}else if(oe.isInstancedMesh)st.renderInstances(je,gt,oe.count);else if(fe.isInstancedBufferGeometry){let He=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ht=Math.min(fe.instanceCount,He);st.renderInstances(je,gt,ht)}else st.render(je,gt)};function ot(L,se,fe){L.transparent===!0&&L.side===Ft&&L.forceSinglePass===!1?(L.side=Lt,L.needsUpdate=!0,ir(L,se,fe),L.side=Rn,L.needsUpdate=!0,ir(L,se,fe),L.side=Ft):ir(L,se,fe)}this.compile=function(L,se,fe=null){fe===null&&(fe=L),h=Re.get(fe),h.init(se),y.push(h),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(h.pushLight(oe),oe.castShadow&&h.pushShadow(oe))}),L!==fe&&L.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(h.pushLight(oe),oe.castShadow&&h.pushShadow(oe))}),h.setupLights();let pe=new Set;return L.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let be=oe.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){let Fe=be[Pe];ot(Fe,fe,oe),pe.add(Fe)}else ot(be,fe,oe),pe.add(be)}),h=y.pop(),pe},this.compileAsync=function(L,se,fe=null){let pe=this.compile(L,se,fe);return new Promise(oe=>{function be(){if(pe.forEach(function(Pe){A.get(Pe).currentProgram.isReady()&&pe.delete(Pe)}),pe.size===0){oe(L);return}setTimeout(be,10)}G.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tt=null;function vn(L){tt&&tt(L)}function cn(){Kn.stop()}function Ol(){Kn.start()}let Kn=new Oh;Kn.setAnimationLoop(vn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(L){tt=L,Ee.setAnimationLoop(L),L===null?Kn.stop():Kn.start()},Ee.addEventListener("sessionstart",cn),Ee.addEventListener("sessionend",Ol),this.render=function(L,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(se),se=Ee.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,se,D),h=Re.get(L,y.length),h.init(se),y.push(h),g.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),z.setFromProjectionMatrix(g,Qt,se.reversedDepth),M=this.localClippingEnabled,P=ye.init(this.clippingPlanes,M),m=de.get(L,T.length),m.init(),T.push(m),Ee.enabled===!0&&Ee.isPresenting===!0){let be=v.xr.getDepthSensingMesh();be!==null&&ra(be,se,-1/0,v.sortObjects)}ra(L,se,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,ie),Q=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Q&&Le.addToRenderList(m,L),this.info.render.frame++,P===!0&&ye.beginShadows();let fe=h.state.shadowsArray;Te.render(fe,L,se),P===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let pe=m.opaque,oe=m.transmissive;if(h.setupLights(),se.isArrayCamera){let be=se.cameras;if(oe.length>0)for(let Pe=0,Fe=be.length;Pe<Fe;Pe++){let De=be[Pe];zl(pe,oe,L,De)}Q&&Le.render(L);for(let Pe=0,Fe=be.length;Pe<Fe;Pe++){let De=be[Pe];Bl(m,L,De,De.viewport)}}else oe.length>0&&zl(pe,oe,L,se),Q&&Le.render(L),Bl(m,L,se);D!==null&&C===0&&(J.updateMultisampleRenderTarget(D),J.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(v,L,se),Ie.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(h=y[y.length-1],P===!0&&ye.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ra(L,se,fe,pe){if(L.visible===!1)return;if(L.layers.test(se.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(se);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||z.intersectsSprite(L)){pe&&H.setFromMatrixPosition(L.matrixWorld).applyMatrix4(g);let Pe=te.update(L),Fe=L.material;Fe.visible&&m.push(L,Pe,Fe,fe,H.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||z.intersectsObject(L))){let Pe=te.update(L),Fe=L.material;if(pe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),H.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),H.copy(Pe.boundingSphere.center)),H.applyMatrix4(L.matrixWorld).applyMatrix4(g)),Array.isArray(Fe)){let De=Pe.groups;for(let Ge=0,Xe=De.length;Ge<Xe;Ge++){let Be=De[Ge],je=Fe[Be.materialIndex];je&&je.visible&&m.push(L,Pe,je,fe,H.z,Be)}}else Fe.visible&&m.push(L,Pe,Fe,fe,H.z,null)}}let be=L.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)ra(be[Pe],se,fe,pe)}function Bl(L,se,fe,pe){let oe=L.opaque,be=L.transmissive,Pe=L.transparent;h.setupLightsView(fe),P===!0&&ye.setGlobalState(v.clippingPlanes,fe),pe&&Y.viewport(V.copy(pe)),oe.length>0&&nr(oe,se,fe),be.length>0&&nr(be,se,fe),Pe.length>0&&nr(Pe,se,fe),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function zl(L,se,fe,pe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[pe.id]===void 0&&(h.state.transmissionRenderTarget[pe.id]=new un(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ji:an,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let be=h.state.transmissionRenderTarget[pe.id],Pe=pe.viewport||V;be.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);let Fe=v.getRenderTarget(),De=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(be),v.getClearColor(K),re=v.getClearAlpha(),re<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Le.render(fe);let Xe=v.toneMapping;v.toneMapping=Dn;let Be=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),h.setupLightsView(pe),P===!0&&ye.setGlobalState(v.clippingPlanes,pe),nr(L,fe,pe),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),G.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,gt=se.length;it<gt;it++){let at=se[it],st=at.object,He=at.geometry,ht=at.material,et=at.group;if(ht.side===Ft&&st.layers.test(pe.layers)){let Ot=ht.side;ht.side=Lt,ht.needsUpdate=!0,kl(st,fe,pe,He,ht,et),ht.side=Ot,ht.needsUpdate=!0,je=!0}}je===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}v.setRenderTarget(Fe,De,Ge),v.setClearColor(K,re),Be!==void 0&&(pe.viewport=Be),v.toneMapping=Xe}function nr(L,se,fe){let pe=se.isScene===!0?se.overrideMaterial:null;for(let oe=0,be=L.length;oe<be;oe++){let Pe=L[oe],Fe=Pe.object,De=Pe.geometry,Ge=Pe.group,Xe=Pe.material;Xe.allowOverride===!0&&pe!==null&&(Xe=pe),Fe.layers.test(fe.layers)&&kl(Fe,se,fe,De,Xe,Ge)}}function kl(L,se,fe,pe,oe,be){L.onBeforeRender(v,se,fe,pe,oe,be),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),oe.onBeforeRender(v,se,fe,pe,L,be),oe.transparent===!0&&oe.side===Ft&&oe.forceSinglePass===!1?(oe.side=Lt,oe.needsUpdate=!0,v.renderBufferDirect(fe,se,pe,oe,L,be),oe.side=Rn,oe.needsUpdate=!0,v.renderBufferDirect(fe,se,pe,oe,L,be),oe.side=Ft):v.renderBufferDirect(fe,se,pe,oe,L,be),L.onAfterRender(v,se,fe,pe,oe,be)}function ir(L,se,fe){se.isScene!==!0&&(se=O);let pe=A.get(L),oe=h.state.lights,be=h.state.shadowsArray,Pe=oe.state.version,Fe=ue.getParameters(L,oe.state,be,se,fe),De=ue.getProgramCacheKey(Fe),Ge=pe.programs;pe.environment=L.isMeshStandardMaterial?se.environment:null,pe.fog=se.fog,pe.envMap=(L.isMeshStandardMaterial?Se:ge).get(L.envMap||pe.environment),pe.envMapRotation=pe.environment!==null&&L.envMap===null?se.environmentRotation:L.envMapRotation,Ge===void 0&&(L.addEventListener("dispose",_e),Ge=new Map,pe.programs=Ge);let Xe=Ge.get(De);if(Xe!==void 0){if(pe.currentProgram===Xe&&pe.lightsStateVersion===Pe)return Vl(L,Fe),Xe}else Fe.uniforms=ue.getUniforms(L),L.onBeforeCompile(Fe,v),Xe=ue.acquireProgram(Fe,De),Ge.set(De,Xe),pe.uniforms=Fe.uniforms;let Be=pe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Be.clippingPlanes=ye.uniform),Vl(L,Fe),pe.needsLights=lu(L),pe.lightsStateVersion=Pe,pe.needsLights&&(Be.ambientLightColor.value=oe.state.ambient,Be.lightProbe.value=oe.state.probe,Be.directionalLights.value=oe.state.directional,Be.directionalLightShadows.value=oe.state.directionalShadow,Be.spotLights.value=oe.state.spot,Be.spotLightShadows.value=oe.state.spotShadow,Be.rectAreaLights.value=oe.state.rectArea,Be.ltc_1.value=oe.state.rectAreaLTC1,Be.ltc_2.value=oe.state.rectAreaLTC2,Be.pointLights.value=oe.state.point,Be.pointLightShadows.value=oe.state.pointShadow,Be.hemisphereLights.value=oe.state.hemi,Be.directionalShadowMap.value=oe.state.directionalShadowMap,Be.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Be.spotShadowMap.value=oe.state.spotShadowMap,Be.spotLightMatrix.value=oe.state.spotLightMatrix,Be.spotLightMap.value=oe.state.spotLightMap,Be.pointShadowMap.value=oe.state.pointShadowMap,Be.pointShadowMatrix.value=oe.state.pointShadowMatrix),pe.currentProgram=Xe,pe.uniformsList=null,Xe}function Hl(L){if(L.uniformsList===null){let se=L.currentProgram.getUniforms();L.uniformsList=is.seqWithValue(se.seq,L.uniforms)}return L.uniformsList}function Vl(L,se){let fe=A.get(L);fe.outputColorSpace=se.outputColorSpace,fe.batching=se.batching,fe.batchingColor=se.batchingColor,fe.instancing=se.instancing,fe.instancingColor=se.instancingColor,fe.instancingMorph=se.instancingMorph,fe.skinning=se.skinning,fe.morphTargets=se.morphTargets,fe.morphNormals=se.morphNormals,fe.morphColors=se.morphColors,fe.morphTargetsCount=se.morphTargetsCount,fe.numClippingPlanes=se.numClippingPlanes,fe.numIntersection=se.numClipIntersection,fe.vertexAlphas=se.vertexAlphas,fe.vertexTangents=se.vertexTangents,fe.toneMapping=se.toneMapping}function ou(L,se,fe,pe,oe){se.isScene!==!0&&(se=O),J.resetTextureUnits();let be=se.fog,Pe=pe.isMeshStandardMaterial?se.environment:null,Fe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:oi,De=(pe.isMeshStandardMaterial?Se:ge).get(pe.envMap||Pe),Ge=pe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Xe=!!fe.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),Be=!!fe.morphAttributes.position,je=!!fe.morphAttributes.normal,it=!!fe.morphAttributes.color,gt=Dn;pe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=v.toneMapping);let at=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,st=at!==void 0?at.length:0,He=A.get(pe),ht=h.state.lights;if(P===!0&&(M===!0||L!==E)){let Rt=L===E&&pe.id===S;ye.setState(pe,L,Rt)}let et=!1;pe.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ht.state.version||He.outputColorSpace!==Fe||oe.isBatchedMesh&&He.batching===!1||!oe.isBatchedMesh&&He.batching===!0||oe.isBatchedMesh&&He.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&He.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&He.instancing===!1||!oe.isInstancedMesh&&He.instancing===!0||oe.isSkinnedMesh&&He.skinning===!1||!oe.isSkinnedMesh&&He.skinning===!0||oe.isInstancedMesh&&He.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&He.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&He.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&He.instancingMorph===!1&&oe.morphTexture!==null||He.envMap!==De||pe.fog===!0&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ye.numPlanes||He.numIntersection!==ye.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Xe||He.morphTargets!==Be||He.morphNormals!==je||He.morphColors!==it||He.toneMapping!==gt||He.morphTargetsCount!==st)&&(et=!0):(et=!0,He.__version=pe.version);let Ot=He.currentProgram;et===!0&&(Ot=ir(pe,se,oe));let Si=!1,Bt=!1,rs=!1,ut=Ot.getUniforms(),Xt=He.uniforms;if(Y.useProgram(Ot.program)&&(Si=!0,Bt=!0,rs=!0),pe.id!==S&&(S=pe.id,Bt=!0),Si||E!==L){Y.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ut.setValue(R,"projectionMatrix",L.projectionMatrix),ut.setValue(R,"viewMatrix",L.matrixWorldInverse);let Dt=ut.map.cameraPosition;Dt!==void 0&&Dt.setValue(R,F.setFromMatrixPosition(L.matrixWorld)),Z.logarithmicDepthBuffer&&ut.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&ut.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,Bt=!0,rs=!0)}if(oe.isSkinnedMesh){ut.setOptional(R,oe,"bindMatrix"),ut.setOptional(R,oe,"bindMatrixInverse");let Rt=oe.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ut.setValue(R,"boneTexture",Rt.boneTexture,J))}oe.isBatchedMesh&&(ut.setOptional(R,oe,"batchingTexture"),ut.setValue(R,"batchingTexture",oe._matricesTexture,J),ut.setOptional(R,oe,"batchingIdTexture"),ut.setValue(R,"batchingIdTexture",oe._indirectTexture,J),ut.setOptional(R,oe,"batchingColorTexture"),oe._colorsTexture!==null&&ut.setValue(R,"batchingColorTexture",oe._colorsTexture,J));let qt=fe.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ve.update(oe,fe,Ot),(Bt||He.receiveShadow!==oe.receiveShadow)&&(He.receiveShadow=oe.receiveShadow,ut.setValue(R,"receiveShadow",oe.receiveShadow)),pe.isMeshGouraudMaterial&&pe.envMap!==null&&(Xt.envMap.value=De,Xt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),pe.isMeshStandardMaterial&&pe.envMap===null&&se.environment!==null&&(Xt.envMapIntensity.value=se.environmentIntensity),Bt&&(ut.setValue(R,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&au(Xt,rs),be&&pe.fog===!0&&xe.refreshFogUniforms(Xt,be),xe.refreshMaterialUniforms(Xt,pe,q,ce,h.state.transmissionRenderTarget[L.id]),is.upload(R,Hl(He),Xt,J)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(is.upload(R,Hl(He),Xt,J),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&ut.setValue(R,"center",oe.center),ut.setValue(R,"modelViewMatrix",oe.modelViewMatrix),ut.setValue(R,"normalMatrix",oe.normalMatrix),ut.setValue(R,"modelMatrix",oe.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){let Rt=pe.uniformsGroups;for(let Dt=0,oa=Rt.length;Dt<oa;Dt++){let jn=Rt[Dt];Ze.update(jn,Ot),Ze.bind(jn,Ot)}}return Ot}function au(L,se){L.ambientLightColor.needsUpdate=se,L.lightProbe.needsUpdate=se,L.directionalLights.needsUpdate=se,L.directionalLightShadows.needsUpdate=se,L.pointLights.needsUpdate=se,L.pointLightShadows.needsUpdate=se,L.spotLights.needsUpdate=se,L.spotLightShadows.needsUpdate=se,L.rectAreaLights.needsUpdate=se,L.hemisphereLights.needsUpdate=se}function lu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,se,fe){let pe=A.get(L);pe.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),A.get(L.texture).__webglTexture=se,A.get(L.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:fe,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,se){let fe=A.get(L);fe.__webglFramebuffer=se,fe.__useDefaultFramebuffer=se===void 0};let cu=R.createFramebuffer();this.setRenderTarget=function(L,se=0,fe=0){D=L,w=se,C=fe;let pe=!0,oe=null,be=!1,Pe=!1;if(L){let De=A.get(L);if(De.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(R.FRAMEBUFFER,null),pe=!1;else if(De.__webglFramebuffer===void 0)J.setupRenderTarget(L);else if(De.__hasExternalTextures)J.rebindTextures(L,A.get(L.texture).__webglTexture,A.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Be=L.depthTexture;if(De.__boundDepthTexture!==Be){if(Be!==null&&A.has(Be)&&(L.width!==Be.image.width||L.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(L)}}let Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);let Xe=A.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xe[se])?oe=Xe[se][fe]:oe=Xe[se],be=!0):L.samples>0&&J.useMultisampledRTT(L)===!1?oe=A.get(L).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[fe]:oe=Xe,V.copy(L.viewport),W.copy(L.scissor),$=L.scissorTest}else V.copy(X).multiplyScalar(q).floor(),W.copy(ae).multiplyScalar(q).floor(),$=he;if(fe!==0&&(oe=cu),Y.bindFramebuffer(R.FRAMEBUFFER,oe)&&pe&&Y.drawBuffers(L,oe),Y.viewport(V),Y.scissor(W),Y.setScissorTest($),be){let De=A.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+se,De.__webglTexture,fe)}else if(Pe){let De=se;for(let Ge=0;Ge<L.textures.length;Ge++){let Xe=A.get(L.textures[Ge]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,fe,De)}}else if(L!==null&&fe!==0){let De=A.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,De.__webglTexture,fe)}S=-1},this.readRenderTargetPixels=function(L,se,fe,pe,oe,be,Pe,Fe=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){Y.bindFramebuffer(R.FRAMEBUFFER,De);try{let Ge=L.textures[Fe],Xe=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=L.width-pe&&fe>=0&&fe<=L.height-oe&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(se,fe,pe,oe,Ne.convert(Xe),Ne.convert(Be),be))}finally{let Ge=D!==null?A.get(D).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(L,se,fe,pe,oe,be,Pe,Fe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(se>=0&&se<=L.width-pe&&fe>=0&&fe<=L.height-oe){Y.bindFramebuffer(R.FRAMEBUFFER,De);let Ge=L.textures[Fe],Xe=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,be.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(se,fe,pe,oe,Ne.convert(Xe),Ne.convert(Be),0);let it=D!==null?A.get(D).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,it);let gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await oh(R,gt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,be),R.deleteBuffer(je),R.deleteSync(gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,se=null,fe=0){let pe=Math.pow(2,-fe),oe=Math.floor(L.image.width*pe),be=Math.floor(L.image.height*pe),Pe=se!==null?se.x:0,Fe=se!==null?se.y:0;J.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,fe,0,0,Pe,Fe,oe,be),Y.unbindTexture()};let hu=R.createFramebuffer(),uu=R.createFramebuffer();this.copyTextureToTexture=function(L,se,fe=null,pe=null,oe=0,be=null){be===null&&(oe!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=oe,oe=0):be=0);let Pe,Fe,De,Ge,Xe,Be,je,it,gt,at=L.isCompressedTexture?L.mipmaps[be]:L.image;if(fe!==null)Pe=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,De=fe.isBox3?fe.max.z-fe.min.z:1,Ge=fe.min.x,Xe=fe.min.y,Be=fe.isBox3?fe.min.z:0;else{let qt=Math.pow(2,-oe);Pe=Math.floor(at.width*qt),Fe=Math.floor(at.height*qt),L.isDataArrayTexture?De=at.depth:L.isData3DTexture?De=Math.floor(at.depth*qt):De=1,Ge=0,Xe=0,Be=0}pe!==null?(je=pe.x,it=pe.y,gt=pe.z):(je=0,it=0,gt=0);let st=Ne.convert(se.format),He=Ne.convert(se.type),ht;se.isData3DTexture?(J.setTexture3D(se,0),ht=R.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(J.setTexture2DArray(se,0),ht=R.TEXTURE_2D_ARRAY):(J.setTexture2D(se,0),ht=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,se.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,se.unpackAlignment);let et=R.getParameter(R.UNPACK_ROW_LENGTH),Ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Si=R.getParameter(R.UNPACK_SKIP_PIXELS),Bt=R.getParameter(R.UNPACK_SKIP_ROWS),rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be);let ut=L.isDataArrayTexture||L.isData3DTexture,Xt=se.isDataArrayTexture||se.isData3DTexture;if(L.isDepthTexture){let qt=A.get(L),Rt=A.get(se),Dt=A.get(qt.__renderTarget),oa=A.get(Rt.__renderTarget);Y.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let jn=0;jn<De;jn++)ut&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,A.get(L).__webglTexture,oe,Be+jn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,A.get(se).__webglTexture,be,gt+jn)),R.blitFramebuffer(Ge,Xe,Pe,Fe,je,it,Pe,Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(oe!==0||L.isRenderTargetTexture||A.has(L)){let qt=A.get(L),Rt=A.get(se);Y.bindFramebuffer(R.READ_FRAMEBUFFER,hu),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,uu);for(let Dt=0;Dt<De;Dt++)ut?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qt.__webglTexture,oe,Be+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qt.__webglTexture,oe),Xt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,be,gt+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,be),oe!==0?R.blitFramebuffer(Ge,Xe,Pe,Fe,je,it,Pe,Fe,R.COLOR_BUFFER_BIT,R.NEAREST):Xt?R.copyTexSubImage3D(ht,be,je,it,gt+Dt,Ge,Xe,Pe,Fe):R.copyTexSubImage2D(ht,be,je,it,Ge,Xe,Pe,Fe);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xt?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(ht,be,je,it,gt,Pe,Fe,De,st,He,at.data):se.isCompressedArrayTexture?R.compressedTexSubImage3D(ht,be,je,it,gt,Pe,Fe,De,st,at.data):R.texSubImage3D(ht,be,je,it,gt,Pe,Fe,De,st,He,at):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,be,je,it,Pe,Fe,st,He,at.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,be,je,it,at.width,at.height,st,at.data):R.texSubImage2D(R.TEXTURE_2D,be,je,it,Pe,Fe,st,He,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rs),be===0&&se.generateMipmaps&&R.generateMipmap(ht),Y.unbindTexture()},this.initRenderTarget=function(L){A.get(L).__webglFramebuffer===void 0&&J.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?J.setTextureCube(L,0):L.isData3DTexture?J.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?J.setTexture2DArray(L,0):J.setTexture2D(L,0),Y.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,Y.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Ks=new k;function Jt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ks.copy(e),Ks[n]=0,Ks.normalize();let l=.5*o/(o+a),u=1-Ks.angleTo(i)/c;return Math.sign(Ks[t])===1?u*l:a/(o+a)+l+l*(1-u)}var yn=class i extends Xn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,l=new k,u=new k(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,x=d.length/6,_=new k,m=.5/o;for(let h=0,T=0;h<d.length;h+=3,T+=2)switch(c.fromArray(d,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[h+0]=u.x*Math.sign(c.x)+l.x*r,d[h+1]=u.y*Math.sign(c.y)+l.y*r,d[h+2]=u.z*Math.sign(c.z)+l.z*r,f[h+0]=l.x,f[h+1]=l.y,f[h+2]=l.z,Math.floor(h/x)){case 0:_.set(1,0,0),p[T+0]=Jt(_,l,"z","y",r,n),p[T+1]=1-Jt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[T+0]=1-Jt(_,l,"z","y",r,n),p[T+1]=1-Jt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[T+0]=1-Jt(_,l,"x","z",r,e),p[T+1]=Jt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[T+0]=1-Jt(_,l,"x","z",r,e),p[T+1]=1-Jt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[T+0]=1-Jt(_,l,"x","y",r,e),p[T+1]=1-Jt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[T+0]=Jt(_,l,"x","y",r,e),p[T+1]=1-Jt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var l0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},c0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function h0(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((u,d)=>u-d).join(":");if(s.has(a))return null;s.add(a);let c=n[0]+(r%i+o%i)*t/2,l=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[c,l],ends:r%i===o%i?[[c-t/2,l],[c+t/2,l]]:[[c,l-t/2],[c,l+t/2]]}}).filter(Boolean)}function Vh({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!c0[o])throw Error("Unknown fence design");let a=l0[r];if(!a)throw Error("Unknown fence style");let c=new Je;c.name="wood-fence";let l=h0(i,e,{pitch:t,origin:n});c.userData={walls:l.map(h=>[h.a,h.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let u=new rt({color:a.wood,roughness:.83}),d=new rt({color:a.end,roughness:.8}),f=new rt({color:a.grain,roughness:.95}),p=new rt({color:"#665341",roughness:.7}),x=(h,T,y,v,I,w,C,D,S)=>{let E=new ze(new yn(T,y,v,3,I),w);return E.position.set(C,D,S),E.castShadow=E.receiveShadow=!0,h.add(E),E},_=(h,T,y=.12)=>{let v=new ze(new rn(new sn(T),16,y,4,!1),f);h.add(v)},m=new Map;for(let h of l){for(let[y,v]of h.ends){let I=y+":"+v;if(m.has(I))continue;let w=new Je;if(w.name="fence-post",w.position.set(y,v,s-2),c.add(w),m.set(I,w),o==="logs"){let C=new ze(new nn(3.25,3.65,34,18),u);C.rotation.x=Math.PI/2,C.position.z=17,C.castShadow=C.receiveShadow=!0,w.add(C);let D=new ze(new mt(3.65,18,10),d);D.scale.z=.35,D.position.z=34,D.castShadow=!0,w.add(D)}else x(w,6.3,6.3,34,1.05,u,0,0,17),x(w,7.4,7.4,3.1,1.25,d,0,0,34);for(let C of[-1,1])for(let D=0;D<2;D++){let S=[];for(let E=0;E<=9;E++)S.push(new k(-1.7+D*2.5+Math.sin(E*.6+D)*.22,C*3.16,3+E*2.2));_(w,S,.1)}}let T=new Je;if(T.name="fence-span",T.position.set(...h.center,s),h.a%i!==h.b%i&&(T.rotation.z=Math.PI/2),T.userData.cells=[h.a,h.b],c.add(T),o==="rails")for(let y of[16,24]){x(T,t-4.5,4.2,5.1,.95,u,0,0,y);for(let v of[-1,1]){for(let w=0;w<2;w++){let C=[];for(let D=0;D<=12;D++){let S=-t/2+5+D*(t-10)/12;C.push(new k(S,v*2.12,y-.9+w*1.7+Math.sin(D*.65+y)*.2))}_(T,C,.1)}for(let w of[-t/2+5.8,t/2-5.8]){let C=new ze(new mt(.56,8,6),p);C.scale.y=.3,C.position.set(w,v*2.28,y),T.add(C)}let I=[];for(let w=0;w<=24;w++){let C=w/24*Math.PI*2;I.push(new k(11+Math.cos(C)*1.6,v*2.14,y+Math.sin(C)*.65))}_(T,I,.1)}}else if(o==="picket"){for(let y of[15,25])x(T,t-4.5,3.2,3.6,.8,u,0,1.2,y);for(let y=0;y<5;y++){let v=(y-2)*(t-14)/5,I=7.2,w=new _t;w.moveTo(-I/2,11),w.lineTo(I/2,11),w.lineTo(I/2,27),w.bezierCurveTo(I/2,32,-I/2,32,-I/2,27),w.closePath();let C=new ze(new Gt(w,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),y%2?d:u);C.rotation.x=Math.PI/2,C.position.set(v,-.7,0),C.castShadow=C.receiveShadow=!0,T.add(C);for(let D of[15,25]){let S=new ze(new mt(.48,8,6),p);S.scale.y=.3,S.position.set(v,-3.65,D),T.add(S)}_(T,[new k(v-1.2,-3.91,13),new k(v-1,-3.91,21),new k(v-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let w of[13,29])x(T,t-4.5,4,3.6,.8,u,0,0,w);let y=t-12,v=Math.atan2(16,y),I=Math.hypot(y,16);for(let w of[-1,1]){let C=new Je;C.position.set(0,w*1.35,21),C.rotation.y=w*v,T.add(C),x(C,I,2.5,3.6,.75,d,0,0,0);for(let D of[-1,1])_(C,[new k(-I/2+2,D*1.27,-.5),new k(0,D*1.27,-.25),new k(I/2-2,D*1.27,-.55)],.1)}for(let w of[-1,1]){let C=new ze(new mt(.65,10,8),p);C.scale.y=.3,C.position.set(0,w*2.75,21),T.add(C)}}else for(let y of[16,26]){let v=new ze(new nn(2.3,2.3,t-4.5,18),u);v.rotation.z=Math.PI/2,v.position.z=y,v.castShadow=v.receiveShadow=!0,T.add(v);for(let I of[-1,1])for(let w of[-.9,.9]){let C=[];for(let D=0;D<=12;D++)C.push(new k(-t/2+4+D*(t-8)/12,I*Math.sqrt(2.3**2-w**2),y+w+Math.sin(D*.7)*.1));_(T,C,.1)}}}return{group:c,edges:l,dispose(){let h=new Set,T=new Set;c.traverse(y=>{y.geometry&&h.add(y.geometry),y.material&&T.add(y.material)}),h.forEach(y=>y.dispose()),T.forEach(y=>y.dispose())}}}function ea(i=-1,e="hops"){let t=f=>(f=Math.max(0,Math.min(1,f)),f*f*f*(f*(f*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="gentle"){let f=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=f*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:f*1.35,happy:f,roll:p,pitch:-f*.035,squash:f*.012,antenna:f*.3+Math.sin(i*8)*f*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(f,p,x)=>{let _=(i-f)/p;return _>0&&_<1?Math.sin(Math.PI*_)**2*x:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(f,p)=>{let x=(i-f)/p;return x>0&&x<1?Math.sin(x*Math.PI)**2:0},c=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,l=a(.72,.3),u=a(1.35,.3),d=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:l*.055+u*.035+d*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:c*.65+r*.045,pitch:l*.035-r*.007-c*.013,roll:r*.005*Math.sin(i*3+.6)+c*.012}}function Gh(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,c=o<.66,l,u=0,d=0;if(c)l=-a/2+o/.66*a,d=o/.66>.82?(o/.66-.82)*.5:0;else{let x=(o-.66)/.33999999999999997,_=x*x*(3-2*x);l=a/2-a*_,u=Math.sin(x*Math.PI)**1.25*1.8,d=-Math.sin(x*Math.PI)*.2}let f=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,f*f*(3-2*f));return{y:l*p,z:u*p,pitch:d*p,stance:c,phase:o,fade:p}}function Wh(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,c=0,l=0;if(r<.66)a=-o/2+r/.66*o;else{let u=(r-.66)/.33999999999999997,d=u*u*(3-2*u);a=o/2-o*d,c=Math.sin(u*Math.PI)*1.3,l=-Math.sin(u*Math.PI)*.16}return{y:a,z:c,pitch:l,stance:r<.66,phase:r}}var u0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}};function Xh({seed:i=913,presentation:e="ground"}={}){let t=new Je,n=new Je,s=new Je;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(g,F=.8)=>new rt({color:g,roughness:F}),a=o("#dfa578"),c=o("#ffe5bd"),l=o("#e69b88"),u=o("#302529",.3),d=o("#fff9e7",.3),f=o("#428f8d",.35);function p(g,F,H,O,Q,ee,R,B){let G=new ze(new mt(1,40,28),F);return G.position.set(H,O,Q),G.scale.set(ee,R,B),G.castShadow=G.receiveShadow=!0,g.add(G),G}let x=[],_=[],m=[],h=[],T=[],y=[],v=new Ve("#d5a078"),I=new Ve("#ffe2b9");function w(g,F,H,O,Q=!1){let ee=p(s,a,...g,...F);ee.name="original-body-part",ee.userData.bodyCenter=[...g],ee.userData.bodyRadii=[...F];for(let R=0;R<H;R++){let B=r()*2-1,G=r()*Math.PI*2,Z=Math.sqrt(1-B*B),Y=new k(Z*Math.cos(G),Z*Math.sin(G),B),U=new k(Y.x*F[0],Y.y*F[1],Y.z*F[2]).add(new k(...g));if(U.z<1)continue;let A=Q&&Y.y<-.4;if(A){let xe=[-5.6,5.6].some(Re=>((U.x-Re)/4.6)**2+((U.z-23.4)/5.2)**2<1),de=(U.x/5.9)**2+((U.z-16.5)/3.3)**2<1;if(xe||de)continue}let J=new k(Y.x/F[0],Y.y/F[1],Y.z/F[2]).normalize(),ge=new k(0,0,1);Math.abs(J.z)>.9&&ge.set(1,0,0);let Se=new k().crossVectors(J,ge).normalize(),N=new k(Y.x*.45,Y.y*.35,-.46),b=O*(A?.2:1)*(.6+r()*.65),te=.075+r()*.13,ue=r()*.22;for(let xe=0;xe<2;xe++){let de=xe?new k().crossVectors(J,Se).normalize():Se,Re=_.length/3;for(let ye=0;ye<=4;ye++){let Te=ye/4,Le=U.clone().addScaledVector(J,b*Te*.88).addScaledVector(N,b*Te*Te*.9),ve=te*(1-Te*.93),Ae=v.clone().lerp(I,.28+Te*.58+ue);for(let ke of[-1,1]){let Ne=Le.clone().addScaledVector(de,ve*ke);_.push(Ne.x,Ne.y,Math.max(.2,Ne.z)),m.push(J.x,J.y,J.z),h.push(Ae.r,Ae.g,Ae.b),x.push(.28+Te*.58+ue),T.push(ke===-1?0:1,Te)}}for(let ye=0;ye<4;ye++){let Te=Re+ye*2;y.push(Te,Te+1,Te+2,Te+1,Te+3,Te+2)}}}}e!=="peek"&&(w([0,6,10],[10.5,15,9.7],15200,3.3),w([0,19,6],[7.4,9,5.7],4600,2.9),w([1,26,4],[4.7,7,3.4],2200,2.5));let C=new Je;s.add(C),w([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let D=[],S=[],E=[],V=[];for(let[g,F]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let H=new Je;H.name="soft-paw",H.userData.home={x:g,y:F},H.position.set(g,F,1.35),H.rotation.z=g<0?-.13:.13,n.add(H);let O=new mt(1,40,28),Q=O.attributes.position;for(let G=0;G<Q.count;G++){let Z=Q.getX(G),Y=Q.getY(G),U=Q.getZ(G),A=2.15*(1-.22*Math.max(0,Y)),J=Y<-.35?.09*Math.cos(Z*Math.PI*2.4)*-Y:0;Q.setXYZ(G,Z*A,Y*3.4-J,Math.max(-1.3,U*1.35)+Math.max(0,Y)*.45)}O.computeVertexNormals();let ee=new ze(O,a);ee.castShadow=ee.receiveShadow=!0,H.add(ee);let R=p(n,a,0,0,0,1,1,1);R.name="rigid-upper-leg",E.push(R);let B=p(n,a,0,0,0,1,1,1);B.name="rigid-lower-leg",V.push(B),S.push(new k(g*.86,F+1.4,6.1)),D.push(H)}let W=(g,F)=>-8-11.5*Math.sqrt(Math.max(.025,1-(g/13.1)**2-((F-20)/12.2)**2));function $(g,F,H,O,Q,ee,R){let B=[],G=[];for(let J=0;J<=12;J++)for(let ge=0;ge<=64;ge++){let Se=J/12,N=ge/64*Math.PI*2,b=Math.cos(N)*Q*Se,te=Math.sin(N)*ee*Se;B.push(b,W(H+b,O+te)-R-.27*(1-Se*Se),te)}for(let J=0;J<12;J++)for(let ge=0;ge<64;ge++){let Se=J*65+ge,N=Se+64+1;G.push(Se,N,Se+1,Se+1,N,N+1)}let U=new pt;U.setAttribute("position",new qe(B,3)),U.setIndex(G),U.computeVertexNormals();let A=new ze(U,F);return A.position.set(H,0,O),g.add(A),A}let K=new Je;K.name="happy-crescent-eyes",C.add(K),K.visible=!1;for(let g of[-1,1]){let F=[];for(let H=0;H<=20;H++){let O=g*5.6+(H/20-.5)*5.3,Q=23.3+Math.sin(H/20*Math.PI)*1.35;F.push(new k(O,W(O,Q)-.3,Q))}K.add(new ze(new rn(new sn(F),24,.3,7,!1),u))}let re=[];for(let g of[-1,1]){let F=g*5.6,H=23.4,O=new Je;O.name="embedded-eye",C.add(O),$(O,c,F,H,3.95,4.7,.11),$(O,f,F,H-.1,2.65,3.25,.3),$(O,u,F,H+.1,1.75,2.45,.49),p(O,d,F-.8,W(F-.8,H+1.5)-.78,H+1.5,.72,.2,.82),p(O,d,F+.65,W(F+.65,H-.65)-.78,H-.65,.26,.16,.3),re.push(O);let Q=[];for(let R=0;R<=64;R++){let B=R/64*Math.PI*2,G=F+Math.cos(B)*4.05,Z=H+Math.sin(B)*4.8;Q.push(new k(G,W(G,Z)-.05,Z))}C.add(new ze(new rn(new sn(Q),80,.37,8,!1),a)),p(C,l,g*8.3,-17.2,16,2.05,.5,1.05);let ee=[];for(let R=0;R<=12;R++){let B=g*5.6+(R/12-.5)*4.5,G=28.7+Math.sin(R/12*Math.PI)*.65;ee.push(new k(B,W(B,G)-.14,G))}C.add(new ze(new rn(new sn(ee),16,.26,6,!1),a))}p(C,c,0,-18.9,16.4,5.2,1.7,2.7),p(C,l,0,-20.6,17.7,1.65,1.05,1.1);let ne=[];for(let g=0;g<=20;g++){let F=(g/20-.5)*6.6;ne.push(new k(F,-20.35+Math.abs(F)*.14,14.7+.105*F*F))}let ce=new ze(new rn(new sn(ne),24,.22,6,!1),u);C.add(ce);let q=[];for(let g of[-1,1]){let R=function(B,G=!1,Z=0){let Y=Math.sin(B*1.4+g*.7),U=Math.sin(B*2.2+g)*.12;H.v2.set(g*(1.7+Y*.35),-1.4+U,11.4),H.v3.set(g*(5.2+Y*.55+Z),-1.9+Math.sin(B*1.2+g)*.35,10.2+U+Z*.4+(G?Math.sin(B*5+g)*.15:0));let A=H.computeFrenetFrames(26,!1),J=O.attributes.position,ge=O.attributes.normal;for(let Se=0;Se<=26;Se++){let N=Se/26,b=H.getPoint(N),te=.44*(1-N)+.23*N;for(let ue=0;ue<=8;ue++){let xe=ue/8*Math.PI*2,de=A.normals[Se].clone().multiplyScalar(-Math.cos(xe)).addScaledVector(A.binormals[Se],Math.sin(xe)),Re=b.clone().addScaledVector(de,te),ye=Se*9+ue;J.setXYZ(ye,Re.x,Re.y,Re.z),ge.setXYZ(ye,de.x,de.y,de.z)}}J.needsUpdate=ge.needsUpdate=!0,O.computeBoundingSphere(),ee.position.copy(H.v3)},F=new Je;F.name="soft-curved-antenna",F.position.set(g*6.7,-5,30),s.add(F);let H=new Zi(new k,new k(g*.25,-.2,4.6),new k(g*1.7,-1.4,11.4),new k(g*5.2,-1.9,10.2)),O=new rn(H,26,.4,8,!1),Q=new ze(O,a);F.add(Q);let ee=p(F,c,g*5.2,-1.9,10.2,1.65,1.65,1.9);R(0),q.push({group:F,flex:R})}let le=new pt;le.setAttribute("position",new qe(_,3)),le.setAttribute("normal",new qe(m,3)),le.setAttribute("color",new qe(h,3)),le.setAttribute("uv",new qe(T,2)),le.setIndex(y);let ie=new Uint8Array(2048*4);for(let g=0;g<64;g++)for(let F=0;F<32;F++){let H=(g*32+F)*4,O=Math.abs((F+.5)/32*2-1),Q=Math.round(255*Math.pow(1-O,.55)*(1-.75*Math.pow(g/63,4)));ie[H]=ie[H+1]=ie[H+2]=Q,ie[H+3]=255}let X=new qn(ie,32,64);X.needsUpdate=!0,X.magFilter=X.minFilter=It;let ae=new rt({vertexColors:!0,alphaMap:X,transparent:!0,opacity:.85,depthWrite:!1,side:Ft,roughness:1}),he=new ze(le,ae);he.name="curved-soft-fur",he.frustumCulled=!1,s.add(he);function z(g){let F=u0[g];if(!F)throw Error("Unknown creature palette "+g);a.color.set(F.coat),f.color.set(F.iris),v.set(F.root),I.set(F.tip);let H=le.attributes.color,O=new Ve;for(let Q=0;Q<x.length;Q++)O.copy(v).lerp(I,x[Q]),H.setXYZ(Q,O.r,O.g,O.b);H.needsUpdate=!0,t.userData.palette=g}let P=new Je;P.name="completion-pollen",P.visible=!1,t.add(P);let M=new mt(.32,8,6);for(let g=0;g<9;g++){let F=new ze(M,new rt({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));P.add(F)}return z("apricot"),{group:t,setPalette:z,update(g,F=0,H={}){let O=ea(H.celebrationAge??-1,H.celebrationStyle),Q=!O.active&&(H.active??(F>0&&F<1));if(n.position.z=O.lift,n.rotation.x=O.pitch,n.rotation.y=O.roll+O.turnStep*Math.sin((H.celebrationAge??0)*16)*.018,n.scale.set(1+O.squash*.4,1+O.squash*.4,1-O.squash),K.visible=O.happy>.55,re.forEach(ee=>ee.visible=!K.visible),ce.scale.x=1+O.happy*.18,P.visible=O.pollen>0,P.children.forEach((ee,R)=>{let B=Math.min(1.8,Math.max(0,(H.celebrationAge??0)-1.5)),G=R*2.4;ee.position.set(Math.cos(G)*(9+B*3)+Math.sin(B*2+R)*.7,Math.sin(G)*(8+B*3),8+B*(8+R*.4)),ee.material.opacity=O.pollen*(.5+R%3*.12)}),s.position.z=Math.sin(g*2)*.13+(Q?Math.sin(F*Math.PI*16)*.22:0),s.rotation.y=Q?Math.sin(F*Math.PI*16)*.012:Math.sin(g*.8)*.012,C.rotation.set(0,0,0),re.forEach(ee=>{ee.scale.set(1,1,1),ee.position.set(0,0,0)}),D.forEach((ee,R)=>{let B=ee.userData.home,G=(H.celebrationAge??0)*17+R*Math.PI/2,Z=O.turnStep*Math.max(0,Math.sin(G))*1.25,Y=Q?H.travel!==void 0?Wh(H.travel,R,t.scale.x):Gh(H.progress??F,R,{distance:H.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};ee.position.set(B.x+O.turnStep*Math.cos(G)*.65,B.y+Y.y+O.turnStep*Math.sin(G)*.65+(O.active?Math.sin((H.celebrationAge??0)*7+R*Math.PI/2)*O.tuck*.5:0),1.35+Y.z+Z+O.tuck*(R<2?1:H.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((H.celebrationAge??0)*4+R*1.6)*.12)),ee.rotation.x=Y.pitch-O.tuck*(R<2?.08:.035);let U=S[R].clone();U.z+=s.position.z;let A=new k(ee.position.x,ee.position.y+.65,ee.position.z+1.05),J=A.clone().sub(U),ge=Math.min(6.95,Math.max(.6,J.length()));J.normalize(),A.copy(U).addScaledVector(J,ge),ee.position.copy(A).add(new k(0,-.65,-1.05));let Se=3.8,N=3.4,b=(Se*Se-N*N+ge*ge)/(2*ge),te=Math.sqrt(Math.max(0,Se*Se-b*b)),ue=new k(0,1,0).addScaledVector(J,-J.y).normalize(),xe=U.clone().addScaledVector(J,b).addScaledVector(ue,te);function de(Re,ye,Te,Le){let ve=Te.clone().sub(ye);Re.position.copy(ye).addScaledVector(ve,.5),Re.quaternion.setFromUnitVectors(new k(0,1,0),ve.normalize()),Re.scale.set(Le,ye.distanceTo(Te)/2,Le)}de(E[R],U,xe,1.2),de(V[R],xe,A,1.1)}),q.forEach((ee,R)=>ee.flex(g,Q,O.antenna*(R?.78:1))),e==="peek"){let R=new k(0,-8,20),B=H.peekGreetingAge??-1,G=B>=0&&B<1.3?Math.sin(B/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(g*.65)*.012,Math.sin(Math.max(0,B)*4)*.05*G);let Z=R.clone().applyEuler(s.rotation);s.position.copy(R).sub(Z),s.position.z+=Math.sin(g*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),D.forEach((A,J)=>{A.visible=J<2,A.position.set(J===0?-12:12,-17,10),A.rotation.set(.12,0,J===0?-.16:.16)}),E.forEach(A=>A.visible=!1),V.forEach(A=>A.visible=!1);let Y=g%7.3,U=Y>4.9&&Y<5.03||Y>5.22&&Y<5.3;re.forEach(A=>A.visible=!U),K.visible=U}},setSize(g){t.scale.setScalar(g/100)},dispose(){let g=new Set,F=new Set;t.traverse(H=>{H.geometry&&g.add(H.geometry),H.material&&F.add(H.material)}),g.forEach(H=>H.dispose()),F.forEach(H=>H.dispose()),X.dispose()}}}var ta=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],c=this.points[o+1],l=s[o];if(r<=l&&l>0){let u=r/l;this.x=a[0]+(c[0]-a[0])*u,this.y=a[1]+(c[1]-a[1])*u,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=l}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.lastTarget=n,this.start=n,!0}};var na=class{constructor(){this.transition=new ta,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=l=>[l%e.n*80+60,-(Math.floor(l/e.n)*80+60)];if(this.level!==e||!t.length){let[l,u]=s(e.marks[0]);this.transition.reset(l,u),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[l,u],this.lastTime=n,this.level=e}let a=this.path.at(-1),c=t.at(-1);if(c!==void 0&&c!==a){let[l,u]=s(c);if(a!==void 0){let[d,f]=s(a);this.heading=Math.atan2(l-d,-(u-f)),this.transition.target(l,u,n)}else this.transition.reset(l,u);this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=ea(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var qh={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Yh({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=qh[t]||qh.front,s=n.radius,r=n.x,o=n.z,a=new Je,c=new Je;a.add(c),c.position.set(n.fx,0,n.fz);let l=new mt(1,20,14),u=[],d=(ie,X=.48)=>{let ae=new rt({color:ie,roughness:X});return u.push(ae),ae},f=d("#ffd05a"),p=d("#ffeaa2"),x=d("#538b2c"),_=d("#e5a32a");function m(ie,X,ae,he,z,P,M,g){let F=new ze(l,X);return F.position.set(ae,he,z),F.scale.set(P,M,g),F.castShadow=!0,F.receiveShadow=!0,ie.add(F),F}m(c,x,0,5,0,2.2,7,2.2);for(let ie of[-1,1]){let X=m(c,x,ie*7,4,1,9,1.7,4);X.rotation.z=ie*.27,X.rotation.y=ie*.3}let h=[];for(let ie=0;ie<6;ie++){let X=new Je;X.rotation.y=ie*Math.PI/3,c.add(X);let ae=m(X,ie%2?f:p,0,12,0,5,9,4);h.push(ae)}let T=m(c,_,0,12,0,5,3.5,5),y=d("#c5a777"),v=new nn(s+1.6,s+1.6,2.6,40),I=new ze(v,y);I.position.set(r,3,o),I.castShadow=!0,a.add(I);let w=new nn(s,s,2.2,40),C=new ze(w,d("#fff4da"));C.position.set(r,3.6,o),C.castShadow=!0,a.add(C);let D=document.createElement("canvas");D.width=D.height=128;let S=D.getContext("2d");S.fillStyle="#4b2a15",S.font="bold 100px Trebuchet MS",S.textAlign="center",S.textBaseline="middle",S.fillText(String(i),64,69);let E=new fn(D);E.colorSpace=xt,E.userData.transient=!0;let V=new li({map:E,transparent:!0,depthWrite:!1}),W=new hi(s*1.72,s*1.72),$=new ze(W,V);$.rotation.x=-Math.PI/2,$.position.set(r,4.74,o),a.add($);let K=0,re=0,ne="";function ce(ie){if(!["closed","next","bloom"].includes(ie))throw Error("Unknown goal state");ne=ie,re=ie==="bloom"?1:ie==="next"?.16:0,a.userData.state=ie,y.color.set(ie==="next"?"#f9bf39":"#c5a777"),y.emissive.set(ie==="next"?"#d89514":"#000000"),y.emissiveIntensity=ie==="next"?.15:0}function q(ie,X=.016){K+=(re-K)*Math.min(1,X*7);let ae=K;for(let z of h)z.position.set(0,13-ae*3,2+ae*10),z.scale.set(5+ae*1.5,9-ae*6,4+ae*4),z.rotation.x=ae*-.25;T.visible=ae>.4,T.position.y=11.4;let he=ne==="next"?1+Math.sin(ie*2.8)*.035:1;c.scale.setScalar(he),f.emissive.set("#ffc33e"),f.emissiveIntensity=ne==="next"?.08+Math.sin(ie*2.8)*.04:0}ce(e),K=re,q(0,1),a.userData.goalNumber=i;function le(ie){let X=ie===33?13:ie===40?15.7:10.5;I.scale.set((X+1.6)/(s+1.6),1,(X+1.6)/(s+1.6)),C.scale.set(X/s,1,X/s),$.scale.setScalar(X/s),a.userData.markerSize=ie}return{group:a,setState:ce,setSize:le,update:q,dispose(){l.dispose(),w.dispose(),v.dispose(),W.dispose(),E.dispose(),V.dispose(),u.forEach(ie=>ie.dispose())}}}var Nn=(i,e)=>ln.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Dl=[[-13,-9],[20,-10],[8,4],[-11,18]];function Zh(i){i.x=ln.clamp(i.x,-16,24),i.z=ln.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function Jh(i=73){let e=[{kind:"bee",position:new k(-12,25,10),velocity:new k,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new k(3,21.5,-7),velocity:new k,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new k((Nn(r.leg+1,a)-.5)*5,20.5,(Nn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let d=Math.floor(Nn(r.leg,a)*4);d===r.station&&(d=(d+1+Math.floor(Nn(r.leg+9,a)*2))%4),r.station=d;let[f,p]=Dl[d];r.target=Zh(new k(f+(Nn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Nn(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],u=(d,f)=>Math.hypot(d.x-f.x,d.z-f.z);if(u(r.target,l.position)<13||l.target&&u(r.target,l.target)<13){let d=-1;for(let f=0;f<Dl.length;f++){let[p,x]=Dl[f],_=new k(p,24,x),m=u(_,l.position)+(l.target?u(_,l.target):0);m>d&&(d=m,r.target=_,r.station=f)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+Nn(l.leg,i+c)*1.3&&n(l,c);let u=l.target.clone().sub(l.position),d=Math.hypot(u.x,u.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):d<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+Nn(l.leg,i+c)*1.3:.12+Nn(l.leg,i+c)*.3);let f=u.clone();f.y=0,f.lengthSq()>0&&f.normalize().multiplyScalar(l.speed*Math.min(1,d/8));let p=f.sub(new k(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(c?-1:1)*(16-a)*11/a),p.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,p.clampLength(0,95),l.velocity.addScaledVector(p,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),Zh(l.position)}}return{agents:e,update(r){let o=ln.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Ul={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},d0=(i,e)=>ln.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function $h({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Ul[i];if(!r)throw Error("Unknown flower species "+i);let o=Yh({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new Je;l.position.copy(c.position),a.add(l);let u=[],d=[],f=le=>{let ie=new rt({color:le,roughness:.56});return d.push(ie),ie},p=f("#538b2c"),x=r.colors.map(f),_=f(r.center),m=new mt(1,20,12);u.push(m);function h(le,ie,X,ae,he,z,P,M){let g=new ze(m,ie);return g.position.set(X,ae,he),g.scale.set(z,P,M),g.castShadow=g.receiveShadow=!0,le.add(g),g}h(l,p,0,5,0,1.8,6,1.8);for(let le of[-1,1]){let ie=h(l,p,le*6,3,0,8,1.4,3);ie.rotation.z=le*.25}let T=[];for(let le=0;le<r.petals;le++){let ie=new Je;ie.position.y=12,ie.rotation.y=le*Math.PI*2/r.petals,l.add(ie);let X=new Je;ie.add(X);let ae=m;if(i==="poppy"){ae=m.clone();let z=ae.attributes.position;for(let P=0;P<z.count;P++){let M=z.getX(P),g=z.getZ(P);z.setY(P,z.getY(P)+Math.sin(Math.atan2(g,M)*5)*.26*Math.hypot(M,g))}ae.computeVertexNormals(),u.push(ae)}let he=new ze(ae,x[le%2]);he.position.z=r.radius,he.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),he.castShadow=he.receiveShadow=!0,X.add(he),T.push(X)}let y=h(l,_,0,13.8,0,r.heart,2.7,r.heart);for(let le=0;le<(i==="poppy"?9:7);le++){let ie=le*Math.PI*2/(i==="poppy"?9:7);h(l,_,Math.cos(ie)*r.heart*.7,16,Math.sin(ie)*r.heart*.7,.65,.6,.65)}let v=new Je;v.name="flower-visitors",l.add(v);let I=f("#e9ad32"),w=f("#d6af50"),C=f("#60452b"),D=f("#fff6df");w.roughness=.95,D.transparent=!0,D.opacity=.72,D.depthWrite=!1;let S=[];for(let le=0;le<2;le++){let ie=new Je;ie.name=le?"bumblebee":"bee",ie.scale.setScalar(1.8),v.add(ie);let X=le?1.08:.7,ae=le?.98:.65;h(ie,le?w:I,0,0,0,X,ae,1.2),h(ie,C,0,0,1.05,le?.56:.48,le?.54:.48,.48);for(let z of[-.55,.15])h(ie,C,0,0,z,X*1.02,ae*1.02,.18);if(le){let z=f("#f4e4b9");z.roughness=1,h(ie,z,0,0,-.98,.72,.65,.38);let P=[],M=[],g=260;for(let Q=0;Q<g;Q++){let ee=1-2*(Q+.5)/g,R=Math.sqrt(1-ee*ee),B=Q*2.39996323,G=Math.cos(B)*R,Z=Math.sin(B)*R,Y=new k(G*X*1.015,ee*ae*1.015,Z*1.215),U=new k(G/X,ee/ae,Z/1.2).normalize(),A=.12+d0(Q,91)*.12,J=Y.clone().addScaledVector(U,A);J.z-=.045,P.push(...Y.toArray(),...J.toArray());let ge=new Ve(Z<-.72?"#f4e4b9":Math.abs(Z+.46)<.18||Math.abs(Z-.12)<.17?"#635238":Q%3?"#d6af50":"#e7c776");M.push(...ge.toArray(),...ge.toArray())}let F=new pt;F.setAttribute("position",new qe(P,3)),F.setAttribute("color",new qe(M,3)),u.push(F);let H=new qi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});d.push(H);let O=new ws(F,H);O.name="bumblebee-fur",ie.add(O)}let he=[];for(let z of[-1,1]){let P=h(ie,D,z*.95,.5,-.1,1.5,.16,.65);P.castShadow=!1,he.push(P)}S.push({insect:ie,wings:he,seed:e*17+le*31+Object.keys(Ul).indexOf(i)*7,phase:le*2.7,a:new k,b:new k})}let E=!!s;function V(le){E=!!le,a.userData.insects=E}let W=Jh(e*17+Object.keys(Ul).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function $(le,ie=100){if(!["bee","bumblebee"].includes(le))throw Error("Unknown flower visitor");if(!Number.isFinite(ie)||ie<50||ie>300)throw RangeError("Visitor size must be between 50 and 300 percent");S.find(X=>X.insect.name===le).insect.scale.setScalar(1.8*ie/100),a.userData.visitorSizes[le]=ie}let K=t,re=t==="bloom"?1:0,ne=re;function ce(le){o.setState(le),K=le,re=le==="bloom"?1:0}function q(le,ie=.016){o.update(le,ie),ne+=(re-ne)*Math.min(1,ie*7);let X=ne;c.scale.multiplyScalar(1-X),c.visible=X<.999,l.visible=X>.001,l.scale.setScalar(X);for(let he of T)he.rotation.x=-(1-X)*1.1;y.scale.y=2.7*(.8+.2*X),v.visible=E&&K==="bloom"&&X>.94;let ae=W.update(ie);for(let he=0;he<S.length;he++){let z=S[he],P=ae[he];z.insect.position.copy(P.position);let M=P.velocity.x,g=P.velocity.z,F=Math.hypot(M,g);if(F>.5){let H=Math.atan2(M,g),O=Math.atan2(Math.sin(H-z.insect.rotation.y),Math.cos(H-z.insect.rotation.y));z.insect.rotation.y+=O*Math.min(1,ie*9),z.insect.rotation.z=ln.clamp(-O*.22,-.24,.24)}else z.insect.rotation.z*=Math.max(0,1-ie*6);z.insect.rotation.x=-Math.min(.16,F*.009),z.wings.forEach((H,O)=>H.rotation.z=Math.sin(le*30+z.phase)*(O?1:-1)*.5)}}return V(s),q(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:ce,setInsects:V,setVisitorSize:$,setSize:o.setSize,update:q,get state(){return K},dispose(){o.dispose(),u.forEach(le=>le.dispose()),d.forEach(le=>le.dispose())}}}function Kh(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},u=[],d=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let T=0,y=a.length;T<y;T++){let v=a[T],I=i.attributes[v];c[v]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let w=i.morphAttributes[v];w&&(l[v]||(l[v]=[]),w.forEach((C,D)=>{let S=new C.array.constructor(C.count*C.itemSize);l[v][D]=new C.constructor(S,C.itemSize,C.normalized)}))}let p=e*.5,x=Math.log10(1/e),_=Math.pow(10,x),m=p*_;for(let T=0;T<r;T++){let y=n?n.getX(T):T,v="";for(let I=0,w=a.length;I<w;I++){let C=a[I],D=i.getAttribute(C),S=D.itemSize;for(let E=0;E<S;E++)v+=`${~~(D[d[E]](y)*_+m)},`}if(v in t)u.push(t[v]);else{for(let I=0,w=a.length;I<w;I++){let C=a[I],D=i.getAttribute(C),S=i.morphAttributes[C],E=D.itemSize,V=c[C],W=l[C];for(let $=0;$<E;$++){let K=d[$],re=f[$];if(V[re](o,D[K](y)),S)for(let ne=0,ce=S.length;ne<ce;ne++)W[ne][re](o,S[ne][K](y))}}t[v]=o,u.push(o),o++}}let h=i.clone();for(let T in i.attributes){let y=c[T];if(h.setAttribute(T,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),T in l)for(let v=0;v<l[T].length;v++){let I=l[T][v];h.morphAttributes[T][v]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return h.setIndex(u),h}var ia=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new k,r=new k,o=new k,a=new k,c=[s,r,o,a],l=new k,u=new k,d=new k,f=new k,p=[l,u,d,f],x=new Ve,_=new Ve,m=new Ve,h=new Ve,T=[x,_,m,h],y=new me,v=new me,I=new me,w=new me,C=[y,v,I,w],D=new me,S=new me,E=new me,V=new me,W=[D,S,E,V],$=e.attributes,K=$.normal!==void 0,re=$.color!==void 0,ne=$.uv!==void 0,ce=$.uv1!==void 0,q=$.position.array,le=K?$.normal.array:null,ie=re?$.color.array:null,X=ne?$.uv.array:null,ae=ce?$.uv1.array:null,he=q,z=le,P=ie,M=X,g=ae,F=0,H=!0;function O(ee,R,B){let G=c[ee],Z=c[R],Y=c[B];if(he.push(G.x,G.y,G.z),he.push(Z.x,Z.y,Z.z),he.push(Y.x,Y.y,Y.z),K){let U=p[ee],A=p[R],J=p[B];z.push(U.x,U.y,U.z),z.push(A.x,A.y,A.z),z.push(J.x,J.y,J.z)}if(re){let U=T[ee],A=T[R],J=T[B];P.push(U.r,U.g,U.b),P.push(A.r,A.g,A.b),P.push(J.r,J.g,J.b)}if(ne){let U=C[ee],A=C[R],J=C[B];M.push(U.x,U.y),M.push(A.x,A.y),M.push(J.x,J.y)}if(ce){let U=W[ee],A=W[R],J=W[B];g.push(U.x,U.y),g.push(A.x,A.y),g.push(J.x,J.y)}}for(;H&&F<t;){F++,H=!1,q=he,he=[],K&&(le=z,z=[]),re&&(ie=P,P=[]),ne&&(X=M,M=[]),ce&&(ae=g,g=[]);for(let ee=0,R=0,B=q.length;ee<B;ee+=9,R+=6){s.fromArray(q,ee+0),r.fromArray(q,ee+3),o.fromArray(q,ee+6),K&&(l.fromArray(le,ee+0),u.fromArray(le,ee+3),d.fromArray(le,ee+6)),re&&(x.fromArray(ie,ee+0),_.fromArray(ie,ee+3),m.fromArray(ie,ee+6)),ne&&(y.fromArray(X,R+0),v.fromArray(X,R+2),I.fromArray(X,R+4)),ce&&(D.fromArray(ae,R+0),S.fromArray(ae,R+2),E.fromArray(ae,R+4));let G=s.distanceToSquared(r),Z=r.distanceToSquared(o),Y=s.distanceToSquared(o);G>n||Z>n||Y>n?(H=!0,G>=Z&&G>=Y?(a.lerpVectors(s,r,.5),K&&f.lerpVectors(l,u,.5),re&&h.lerpColors(x,_,.5),ne&&w.lerpVectors(y,v,.5),ce&&V.lerpVectors(D,S,.5),O(0,3,2),O(3,1,2)):Z>=G&&Z>=Y?(a.lerpVectors(r,o,.5),K&&f.lerpVectors(u,d,.5),re&&h.lerpColors(_,m,.5),ne&&w.lerpVectors(v,I,.5),ce&&V.lerpVectors(S,E,.5),O(0,1,3),O(3,2,0)):(a.lerpVectors(s,o,.5),K&&f.lerpVectors(l,d,.5),re&&h.lerpColors(x,m,.5),ne&&w.lerpVectors(y,I,.5),ce&&V.lerpVectors(D,E,.5),O(0,1,3),O(3,1,2))):O(0,1,2)}}let Q=new pt;return Q.setAttribute("position",new qe(he,3)),K&&Q.setAttribute("normal",new qe(z,3)),re&&Q.setAttribute("color",new qe(P,3)),ne&&Q.setAttribute("uv",new qe(M,2)),ce&&Q.setAttribute("uv1",new qe(g,2)),Q}};var f0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},js=ln.clamp;function p0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=js(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var m0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function jh(i,e,t){if(i==="split"){let n=Math.min(...m0.map(([s,r])=>p0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,c=e*Math.cos(a)+t*Math.sin(a),l=-e*Math.sin(a)+t*Math.cos(a),u=((c-10)/8.5)**2+(l/(s===6?3.2:4.7))**2;n=Math.max(n,js((1-u)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function Qh(i="fossil",{seed:e=73}={}){if(!f0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Je,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,c=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let h=0;h<s;h++)for(let T=0;T<s;T++){let y=(T/(s-1)-.5)*66,v=(h/(s-1)-.5)*66,I=jh(i,y,v),w=Math.sin(y*.18+v*.11)*Math.sin(v*.21-y*.07),C=c()-.5,D=1+w*(t?.004:.015)+C*(t?.025:.065)-I.ink,S=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],E=(h*s+T)*4;for(let W=0;W<3;W++)r[E+W]=js(S[W]*D+(220-S[W])*I.vein,0,255);r[E+3]=255;let V=js(138+C*(t?4:12)+w-I.cut*28,0,255);o.set([V,V,V,255],E)}let l=new qn(r,s,s);l.colorSpace=xt;let u=new qn(o,s,s);for(let h of[l,u])h.magFilter=h.minFilter=It,h.needsUpdate=!0;let d=new rt({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:l,bumpMap:i==="reference"?null:u,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(d.onBeforeCompile=h=>{let T=new Ve(t?"#9e9688":i==="split"?"#978f80":"#999182");h.vertexShader=`varying float stoneTop;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),h.fragmentShader=`varying float stoneTop;
`+h.fragmentShader,h.fragmentShader=h.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${T.r},${T.g},${T.b}),diffuseColor.rgb,stoneTop);`)}),d.customProgramCacheKey=()=>`slink-stone-top-${i}`;let f=new yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let h=new ia(3.5,10).modify(f);f.dispose(),f=h}f.translate(0,0,10);let p=f.attributes.position,x=f.attributes.uv;for(let h=0;h<p.count;h++){let T=p.getX(h),y=p.getY(h),v=p.getZ(h),I=js((v-10)/16.5,0,1);if(i!=="reference"){let w=Math.max(0,1-(T*T+y*y)/1800),C=Math.sin(T*.13+y*.035)*Math.cos(y*.1)*(t?.12:.7),D=t?w*5:i==="split"?w*1.3-Math.max(0,T*.17+y*.09-2)*.6:w*.6;v+=(D+C-jh(i,T,y).cut)*I}p.setZ(h,v),x.setXY(h,T/66+.5,y/66+.5)}f.deleteAttribute("normal");let _=Kh(f,1e-4);f.dispose(),f=_,f.computeVertexNormals();let m=new ze(f,d);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){f.dispose(),d.dispose(),l.dispose(),u.dispose()}}}var eu=["daisy","buttercup","meadow","poppy"],tu=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],sa=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function g0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function nu(i){let e=sa(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=eu[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&sa(e+":flower-mix")%3!==0){let r=eu[(e%4+1+sa(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of g0(i.stones||[],i.n)){let o=sa(e+":"+r.join(","));if(r.length===1){s[r[0]]=tu[o%tu.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Nl=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),Fl={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function x0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new fn(t)}function Qs(i,{seed:e=73}={}){let t=Fl[i];if(!t)throw Error("Unknown tile "+i);let n=new Je,s=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=(f,p={})=>new rt({color:f,roughness:.75,...p}),o=(f,p,x=0,_=0,m=0)=>{let h=new ze(f,p);return h.position.set(x,_,m),h.castShadow=h.receiveShadow=!0,n.add(h),h},a=r(t.color,{bumpMap:x0(73,t.kind==="earth"?.65:.12),bumpScale:t.grain||.18,roughness:t.kind==="earth"?.95:.65}),c=t.height+3.5,l,u;if(t.kind==="earth"){let f=73.5,p=5,x=-f/2,_=f/2,m=new _t;m.moveTo(x+p,x),m.lineTo(_-p,x),m.quadraticCurveTo(_,x,_,x+p),m.lineTo(_,_-p),m.quadraticCurveTo(_,_,_-p,_),m.lineTo(x+p,_),m.quadraticCurveTo(x,_,x,_-p),m.lineTo(x,x+p),m.quadraticCurveTo(x,x,x+p,x),m.closePath(),l=new Gt(m,{depth:t.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else l=new yn(78.5,78.5,c,4,7.5),u=(t.height-3.5)/2;let d=o(l,a,0,0,u);if(d.userData.surface=!0,t.kind==="earth"){let f=[r("#c59b6b"),r("#98714c"),r("#dbb78a")];for(let p=0;p<t.pebbles;p++){let x=(s()-.5)*59,_=(s()-.5)*59,m=.8+s()*1.2,h=o(new mt(1,9,6),f[p%3],x,_,t.height-.25);h.scale.set(m*1.6,m,m*.55),h.rotation.z=s()*6}for(let p=0;p<22;p++){let x=o(new mt(1,8,6),a,(s()-.5)*62,(s()-.5)*62,t.height-.35),_=1+s()*1.5;x.scale.set(_*1.6,_,.5)}}else if(t.kind!=="reference"){let f=[r("#d3f471"),r("#b1e443"),r("#87bf24")],p=(x,_,m)=>{let h=new _t;return h.moveTo(-m,0),h.quadraticCurveTo(-m*.8,x*.6,_,x),h.quadraticCurveTo(m*1.1,x*.45,m,0),h.closePath(),new Gt(h,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<t.tufts;x++){let _=(s()-.5)*59,m=(s()-.5)*59;for(let h=0;h<3;h++){let T=t.bladeHeight*(.6+s()*.4),y=o(p(T,(h-1)*T*.4,t.kind==="grass"&&i==="grass-velvet"?1.6:1.1),f[h],_+(h-1)*1.8,m,t.height-.15);y.rotation.x=Math.PI/2,y.rotateOnWorldAxis(new k(0,0,1),s()*Math.PI*2)}}if(t.kind==="clover")for(let x=0;x<6;x++){let _=(s()-.5)*50,m=(s()-.5)*50;for(let h=0;h<3;h++){let T=h*Math.PI*2/3,y=o(new mt(1,12,8),f[x%2],_+Math.cos(T)*2.3,m+Math.sin(T)*2.3,t.height+1.7);y.scale.set(3.3,2.6,.9),y.rotation.z=T}}a.emissive.set("#4c790c"),a.emissiveIntensity=.055}else{let f=r("#9fc53b");for(let p=0;p<4;p++){let x=p*Math.PI/2+.3,_=o(new mt(1,12,8),f,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);_.scale.set(4.4,2.6,.65),_.rotation.z=x}}return n.userData={variant:i,top:t.height,walkable:!0,footprint:Nl},n}function er(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var _0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function iu(i,{seed:e=73}={}){let t=_0[i];if(!t)throw Error("Unknown meadow "+i);let n=Qs("grass-clover",{seed:e}),s=n.children.find(w=>w.userData.surface),r=new Je;for(let w of[...n.children])w!==s&&r.add(w);er(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new mt(1,12,8),c=w=>new rt({color:w,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],u=[],d=(w,C,D,S,E)=>{let V=new ze(w,C);return V.position.set(D,S,E),V.castShadow=V.receiveShadow=!0,n.add(V),V};function f(w,C,D,S,E=3.3,V=2.6){let W=d(a,l[1],w,C,D);return W.scale.set(E,V,.85),W.rotation.z=S,W}for(let w=0;w<t.clover;w++){let C=(o()-.5)*52,D=(o()-.5)*52;for(let S=0;S<3;S++){let E=S*Math.PI*2/3+o()*.12;f(C+Math.cos(E)*2.3,D+Math.sin(E)*2.3,19.7,E)}}function p(w,C,D){for(let S=0;S<3;S++){let E=new _t,V=(S-1)*D*.35;E.moveTo(-1,0),E.quadraticCurveTo(-.8,D*.65,V,D),E.quadraticCurveTo(1,D*.45,1,0),E.closePath();let W=new Gt(E,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),$=d(W,l[S],w+(S-1)*1.6,C,17.8);$.rotation.x=Math.PI/2,$.rotateOnWorldAxis(new k(0,0,1),.6)}}for(let w=0;w<t.tufts;w++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let x=c("#fff3c4"),_=c("#f6b7a0"),m=c("#efb52e"),h=c("#709e29"),T=c("#edbd43"),y=c("#63502a"),v=new rt({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let w=0;w<(t.flowers||0);w++){let C=w?-16:16,D=w?-14:12,S=w?24:25.5,E=d(new nn(.6,.85,S-18,8),h,C,D,(18+S)/2);E.rotation.x=Math.PI/2;for(let W=0;W<5;W++){let $=W*Math.PI*2/5,K=d(a,w?_:x,C+Math.cos($)*3,D+Math.sin($)*3,S);K.scale.set(3.2,1.8,.8),K.rotation.z=$}if(d(a,m,C,D,S+.7).scale.set(1.9,1.9,1.2),f(C-2,D,20.5,-.5,3.2,1.4),t.insects)for(let W=0;W<t.insects;W++){let $=new Je;n.add($);let K=new ze(a,T);K.scale.set(.85,1.3,.8),$.add(K);let re=new ze(a,y);re.position.y=1.2,re.scale.setScalar(.6),$.add(re);let ne=[];for(let ce of[-1,1]){let q=new ze(a,v);q.position.set(ce*1,0,.5),q.scale.set(1.8,.75,.25),q.rotation.z=ce*.35,$.add(q),ne.push(q)}u.push({insect:$,wings:ne,x:C,y:D,phase:W*3.14,radius:8+W*2,z:S+5+W})}}n.userData={...n.userData,meadowVariant:i,animated:u.length>0};function I(w){for(let C of u){let D=w*.85+C.phase;C.insect.position.set(C.x+Math.cos(D)*C.radius,C.y+Math.sin(D)*C.radius*.65,C.z+Math.sin(w*1.8+C.phase)*1.2),C.insect.rotation.z=D,C.wings.forEach((S,E)=>S.rotation.y=Math.sin(w*28)*(E?1:-1)*.45)}}return I(0),{group:n,update:I,dispose(){er(n)}}}var su={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function ru(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new rt({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=su[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new me(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var y0=xt,tr=class i extends di{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new zs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(z,P){if(z.nodeType!==1)return;let M=v(z),g=!1,F=null;switch(z.nodeName){case"svg":P=x(z,P);break;case"style":r(z);break;case"g":P=x(z,P);break;case"path":P=x(z,P),z.hasAttribute("d")&&(F=s(z));break;case"rect":P=x(z,P),F=c(z);break;case"polygon":P=x(z,P),F=l(z);break;case"polyline":P=x(z,P),F=u(z);break;case"circle":P=x(z,P),F=d(z);break;case"ellipse":P=x(z,P),F=f(z);break;case"line":P=x(z,P),F=p(z);break;case"defs":g=!0;break;case"use":P=x(z,P);let Q=(z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ee=z.viewportElement.getElementById(Q);ee?n(ee,P):console.warn("SVGLoader: 'use node' references non-existent node id: "+Q);break;default:}F&&(P.fill!==void 0&&P.fill!=="none"&&F.color.setStyle(P.fill,y0),w(F,X),W.push(F),F.userData={node:z,style:P});let H=z.childNodes;for(let O=0;O<H.length;O++){let Q=H[O];g&&Q.nodeName!=="style"&&Q.nodeName!=="defs"||n(Q,P)}M&&(K.pop(),K.length>0?X.copy(K[K.length-1]):X.identity())}function s(z){let P=new on,M=new me,g=new me,F=new me,H=!0,O=!1,Q=z.getAttribute("d");if(Q===""||Q==="none")return null;let ee=Q.match(/[a-df-z][^a-df-z]*/ig);for(let R=0,B=ee.length;R<B;R++){let G=ee[R],Z=G.charAt(0),Y=G.slice(1).trim();H===!0&&(O=!0,H=!1);let U;switch(Z){case"M":U=m(Y);for(let A=0,J=U.length;A<J;A+=2)M.x=U[A+0],M.y=U[A+1],g.x=M.x,g.y=M.y,A===0?P.moveTo(M.x,M.y):P.lineTo(M.x,M.y),A===0&&F.copy(M);break;case"H":U=m(Y);for(let A=0,J=U.length;A<J;A++)M.x=U[A],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"V":U=m(Y);for(let A=0,J=U.length;A<J;A++)M.y=U[A],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"L":U=m(Y);for(let A=0,J=U.length;A<J;A+=2)M.x=U[A+0],M.y=U[A+1],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"C":U=m(Y);for(let A=0,J=U.length;A<J;A+=6)P.bezierCurveTo(U[A+0],U[A+1],U[A+2],U[A+3],U[A+4],U[A+5]),g.x=U[A+2],g.y=U[A+3],M.x=U[A+4],M.y=U[A+5],A===0&&O===!0&&F.copy(M);break;case"S":U=m(Y);for(let A=0,J=U.length;A<J;A+=4)P.bezierCurveTo(_(M.x,g.x),_(M.y,g.y),U[A+0],U[A+1],U[A+2],U[A+3]),g.x=U[A+0],g.y=U[A+1],M.x=U[A+2],M.y=U[A+3],A===0&&O===!0&&F.copy(M);break;case"Q":U=m(Y);for(let A=0,J=U.length;A<J;A+=4)P.quadraticCurveTo(U[A+0],U[A+1],U[A+2],U[A+3]),g.x=U[A+0],g.y=U[A+1],M.x=U[A+2],M.y=U[A+3],A===0&&O===!0&&F.copy(M);break;case"T":U=m(Y);for(let A=0,J=U.length;A<J;A+=2){let ge=_(M.x,g.x),Se=_(M.y,g.y);P.quadraticCurveTo(ge,Se,U[A+0],U[A+1]),g.x=ge,g.y=Se,M.x=U[A+0],M.y=U[A+1],A===0&&O===!0&&F.copy(M)}break;case"A":U=m(Y,[3,4],7);for(let A=0,J=U.length;A<J;A+=7){if(U[A+5]==M.x&&U[A+6]==M.y)continue;let ge=M.clone();M.x=U[A+5],M.y=U[A+6],g.x=M.x,g.y=M.y,o(P,U[A],U[A+1],U[A+2],U[A+3],U[A+4],ge,M),A===0&&O===!0&&F.copy(M)}break;case"m":U=m(Y);for(let A=0,J=U.length;A<J;A+=2)M.x+=U[A+0],M.y+=U[A+1],g.x=M.x,g.y=M.y,A===0?P.moveTo(M.x,M.y):P.lineTo(M.x,M.y),A===0&&F.copy(M);break;case"h":U=m(Y);for(let A=0,J=U.length;A<J;A++)M.x+=U[A],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"v":U=m(Y);for(let A=0,J=U.length;A<J;A++)M.y+=U[A],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"l":U=m(Y);for(let A=0,J=U.length;A<J;A+=2)M.x+=U[A+0],M.y+=U[A+1],g.x=M.x,g.y=M.y,P.lineTo(M.x,M.y),A===0&&O===!0&&F.copy(M);break;case"c":U=m(Y);for(let A=0,J=U.length;A<J;A+=6)P.bezierCurveTo(M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3],M.x+U[A+4],M.y+U[A+5]),g.x=M.x+U[A+2],g.y=M.y+U[A+3],M.x+=U[A+4],M.y+=U[A+5],A===0&&O===!0&&F.copy(M);break;case"s":U=m(Y);for(let A=0,J=U.length;A<J;A+=4)P.bezierCurveTo(_(M.x,g.x),_(M.y,g.y),M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3]),g.x=M.x+U[A+0],g.y=M.y+U[A+1],M.x+=U[A+2],M.y+=U[A+3],A===0&&O===!0&&F.copy(M);break;case"q":U=m(Y);for(let A=0,J=U.length;A<J;A+=4)P.quadraticCurveTo(M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3]),g.x=M.x+U[A+0],g.y=M.y+U[A+1],M.x+=U[A+2],M.y+=U[A+3],A===0&&O===!0&&F.copy(M);break;case"t":U=m(Y);for(let A=0,J=U.length;A<J;A+=2){let ge=_(M.x,g.x),Se=_(M.y,g.y);P.quadraticCurveTo(ge,Se,M.x+U[A+0],M.y+U[A+1]),g.x=ge,g.y=Se,M.x=M.x+U[A+0],M.y=M.y+U[A+1],A===0&&O===!0&&F.copy(M)}break;case"a":U=m(Y,[3,4],7);for(let A=0,J=U.length;A<J;A+=7){if(U[A+5]==0&&U[A+6]==0)continue;let ge=M.clone();M.x+=U[A+5],M.y+=U[A+6],g.x=M.x,g.y=M.y,o(P,U[A],U[A+1],U[A+2],U[A+3],U[A+4],ge,M),A===0&&O===!0&&F.copy(M)}break;case"Z":case"z":P.currentPath.autoClose=!0,P.currentPath.curves.length>0&&(M.copy(F),P.currentPath.currentPoint.copy(M),H=!0);break;default:console.warn(G)}O=!1}return P}function r(z){if(!(!z.sheet||!z.sheet.cssRules||!z.sheet.cssRules.length))for(let P=0;P<z.sheet.cssRules.length;P++){let M=z.sheet.cssRules[P];if(M.type!==1)continue;let g=M.selectorText.split(/,/gm).filter(Boolean).map(F=>F.trim());for(let F=0;F<g.length;F++){let H=Object.fromEntries(Object.entries(M.style).filter(([,O])=>O!==""));$[g[F]]=Object.assign($[g[F]]||{},H)}}}function o(z,P,M,g,F,H,O,Q){if(P==0||M==0){z.lineTo(Q.x,Q.y);return}g=g*Math.PI/180,P=Math.abs(P),M=Math.abs(M);let ee=(O.x-Q.x)/2,R=(O.y-Q.y)/2,B=Math.cos(g)*ee+Math.sin(g)*R,G=-Math.sin(g)*ee+Math.cos(g)*R,Z=P*P,Y=M*M,U=B*B,A=G*G,J=U/Z+A/Y;if(J>1){let ye=Math.sqrt(J);P=ye*P,M=ye*M,Z=P*P,Y=M*M}let ge=Z*A+Y*U,Se=(Z*Y-ge)/ge,N=Math.sqrt(Math.max(0,Se));F===H&&(N=-N);let b=N*P*G/M,te=-N*M*B/P,ue=Math.cos(g)*b-Math.sin(g)*te+(O.x+Q.x)/2,xe=Math.sin(g)*b+Math.cos(g)*te+(O.y+Q.y)/2,de=a(1,0,(B-b)/P,(G-te)/M),Re=a((B-b)/P,(G-te)/M,(-B-b)/P,(-G-te)/M)%(Math.PI*2);z.currentPath.absellipse(ue,xe,P,M,de,de+Re,H===0,g)}function a(z,P,M,g){let F=z*M+P*g,H=Math.sqrt(z*z+P*P)*Math.sqrt(M*M+g*g),O=Math.acos(Math.max(-1,Math.min(1,F/H)));return z*g-P*M<0&&(O=-O),O}function c(z){let P=y(z.getAttribute("x")||0),M=y(z.getAttribute("y")||0),g=y(z.getAttribute("rx")||z.getAttribute("ry")||0),F=y(z.getAttribute("ry")||z.getAttribute("rx")||0),H=y(z.getAttribute("width")),O=y(z.getAttribute("height")),Q=1-.551915024494,ee=new on;return ee.moveTo(P+g,M),ee.lineTo(P+H-g,M),(g!==0||F!==0)&&ee.bezierCurveTo(P+H-g*Q,M,P+H,M+F*Q,P+H,M+F),ee.lineTo(P+H,M+O-F),(g!==0||F!==0)&&ee.bezierCurveTo(P+H,M+O-F*Q,P+H-g*Q,M+O,P+H-g,M+O),ee.lineTo(P+g,M+O),(g!==0||F!==0)&&ee.bezierCurveTo(P+g*Q,M+O,P,M+O-F*Q,P,M+O-F),ee.lineTo(P,M+F),(g!==0||F!==0)&&ee.bezierCurveTo(P,M+F*Q,P+g*Q,M,P+g,M),ee}function l(z){function P(H,O,Q){let ee=y(O),R=y(Q);F===0?g.moveTo(ee,R):g.lineTo(ee,R),F++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,g=new on,F=0;return z.getAttribute("points").replace(M,P),g.currentPath.autoClose=!0,g}function u(z){function P(H,O,Q){let ee=y(O),R=y(Q);F===0?g.moveTo(ee,R):g.lineTo(ee,R),F++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,g=new on,F=0;return z.getAttribute("points").replace(M,P),g.currentPath.autoClose=!1,g}function d(z){let P=y(z.getAttribute("cx")||0),M=y(z.getAttribute("cy")||0),g=y(z.getAttribute("r")||0),F=new pn;F.absarc(P,M,g,0,Math.PI*2);let H=new on;return H.subPaths.push(F),H}function f(z){let P=y(z.getAttribute("cx")||0),M=y(z.getAttribute("cy")||0),g=y(z.getAttribute("rx")||0),F=y(z.getAttribute("ry")||0),H=new pn;H.absellipse(P,M,g,F,0,Math.PI*2);let O=new on;return O.subPaths.push(H),O}function p(z){let P=y(z.getAttribute("x1")||0),M=y(z.getAttribute("y1")||0),g=y(z.getAttribute("x2")||0),F=y(z.getAttribute("y2")||0),H=new on;return H.moveTo(P,M),H.lineTo(g,F),H.currentPath.autoClose=!1,H}function x(z,P){P=Object.assign({},P);let M={};if(z.hasAttribute("class")){let O=z.getAttribute("class").split(/\s/).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<O.length;Q++)M=Object.assign(M,$["."+O[Q]])}z.hasAttribute("id")&&(M=Object.assign(M,$["#"+z.getAttribute("id")]));function g(O,Q,ee){ee===void 0&&(ee=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),z.hasAttribute(O)&&(P[Q]=ee(z.getAttribute(O))),M[O]&&(P[Q]=ee(M[O])),z.style&&z.style[O]!==""&&(P[Q]=ee(z.style[O]))}function F(O){return Math.max(0,Math.min(1,y(O)))}function H(O){return Math.max(0,y(O))}return g("fill","fill"),g("fill-opacity","fillOpacity",F),g("fill-rule","fillRule"),g("opacity","opacity",F),g("stroke","stroke"),g("stroke-opacity","strokeOpacity",F),g("stroke-width","strokeWidth",H),g("stroke-linejoin","strokeLineJoin"),g("stroke-linecap","strokeLineCap"),g("stroke-miterlimit","strokeMiterLimit",H),g("visibility","visibility"),P}function _(z,P){return z-(P-z)}function m(z,P,M){if(typeof z!="string")throw new TypeError("Invalid input: "+typeof z);let g={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},F=0,H=1,O=2,Q=3,ee=F,R=!0,B="",G="",Z=[];function Y(ge,Se,N){let b=new SyntaxError('Unexpected character "'+ge+'" at index '+Se+".");throw b.partial=N,b}function U(){B!==""&&(G===""?Z.push(Number(B)):Z.push(Number(B)*Math.pow(10,Number(G)))),B="",G=""}let A,J=z.length;for(let ge=0;ge<J;ge++){if(A=z[ge],Array.isArray(P)&&P.includes(Z.length%M)&&g.FLAGS.test(A)){ee=H,B=A,U();continue}if(ee===F){if(g.WHITESPACE.test(A))continue;if(g.DIGIT.test(A)||g.SIGN.test(A)){ee=H,B=A;continue}if(g.POINT.test(A)){ee=O,B=A;continue}g.COMMA.test(A)&&(R&&Y(A,ge,Z),R=!0)}if(ee===H){if(g.DIGIT.test(A)){B+=A;continue}if(g.POINT.test(A)){B+=A,ee=O;continue}if(g.EXP.test(A)){ee=Q;continue}g.SIGN.test(A)&&B.length===1&&g.SIGN.test(B[0])&&Y(A,ge,Z)}if(ee===O){if(g.DIGIT.test(A)){B+=A;continue}if(g.EXP.test(A)){ee=Q;continue}g.POINT.test(A)&&B[B.length-1]==="."&&Y(A,ge,Z)}if(ee===Q){if(g.DIGIT.test(A)){G+=A;continue}if(g.SIGN.test(A)){if(G===""){G+=A;continue}G.length===1&&g.SIGN.test(G)&&Y(A,ge,Z)}}g.WHITESPACE.test(A)?(U(),ee=F,R=!1):g.COMMA.test(A)?(U(),ee=F,R=!0):g.SIGN.test(A)?(U(),ee=H,B=A):g.POINT.test(A)?(U(),ee=O,B=A):Y(A,ge,Z)}return U(),Z}let h=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(z){let P="px";if(typeof z=="string"||z instanceof String)for(let g=0,F=h.length;g<F;g++){let H=h[g];if(z.endsWith(H)){P=H,z=z.substring(0,z.length-H.length);break}}let M;return P==="px"&&t.defaultUnit!=="px"?M=T.in[t.defaultUnit]/t.defaultDPI:(M=T[P][t.defaultUnit],M<0&&(M=T[P].in*t.defaultDPI)),M*parseFloat(z)}function v(z){if(!(z.hasAttribute("transform")||z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))))return null;let P=I(z);return K.length>0&&P.premultiply(K[K.length-1]),X.copy(P),K.push(P),P}function I(z){let P=new We,M=re;if(z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))){let g=y(z.getAttribute("x")),F=y(z.getAttribute("y"));P.translate(g,F)}if(z.hasAttribute("transform")){let g=z.getAttribute("transform").split(")");for(let F=g.length-1;F>=0;F--){let H=g[F].trim();if(H==="")continue;let O=H.indexOf("("),Q=H.length;if(O>0&&O<Q){let ee=H.slice(0,O),R=m(H.slice(O+1));switch(M.identity(),ee){case"translate":if(R.length>=1){let B=R[0],G=0;R.length>=2&&(G=R[1]),M.translate(B,G)}break;case"rotate":if(R.length>=1){let B=0,G=0,Z=0;B=R[0]*Math.PI/180,R.length>=3&&(G=R[1],Z=R[2]),ne.makeTranslation(-G,-Z),ce.makeRotation(B),q.multiplyMatrices(ce,ne),ne.makeTranslation(G,Z),M.multiplyMatrices(ne,q)}break;case"scale":if(R.length>=1){let B=R[0],G=B;R.length>=2&&(G=R[1]),M.scale(B,G)}break;case"skewX":R.length===1&&M.set(1,Math.tan(R[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":R.length===1&&M.set(1,0,0,Math.tan(R[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":R.length===6&&M.set(R[0],R[2],R[4],R[1],R[3],R[5],0,0,1);break}}P.premultiply(M)}}return P}function w(z,P){function M(O){ie.set(O.x,O.y,1).applyMatrix3(P),O.set(ie.x,ie.y)}function g(O){let Q=O.xRadius,ee=O.yRadius,R=Math.cos(O.aRotation),B=Math.sin(O.aRotation),G=new k(Q*R,Q*B,0),Z=new k(-ee*B,ee*R,0),Y=G.applyMatrix3(P),U=Z.applyMatrix3(P),A=re.set(Y.x,U.x,0,Y.y,U.y,0,0,0,1),J=ne.copy(A).invert(),N=ce.copy(J).transpose().multiply(J).elements,b=V(N[0],N[1],N[4]),te=Math.sqrt(b.rt1),ue=Math.sqrt(b.rt2);if(O.xRadius=1/te,O.yRadius=1/ue,O.aRotation=Math.atan2(b.sn,b.cs),!((O.aEndAngle-O.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let de=ne.set(te,0,0,0,ue,0,0,0,1),Re=ce.set(b.cs,b.sn,0,-b.sn,b.cs,0,0,0,1),ye=de.multiply(Re).multiply(A),Te=Le=>{let{x:ve,y:Ae}=new k(Math.cos(Le),Math.sin(Le),0).applyMatrix3(ye);return Math.atan2(Ae,ve)};O.aStartAngle=Te(O.aStartAngle),O.aEndAngle=Te(O.aEndAngle),C(P)&&(O.aClockwise=!O.aClockwise)}}function F(O){let Q=S(P),ee=E(P);O.xRadius*=Q,O.yRadius*=ee;let R=Q>Number.EPSILON?Math.atan2(P.elements[1],P.elements[0]):Math.atan2(-P.elements[3],P.elements[4]);O.aRotation+=R,C(P)&&(O.aStartAngle*=-1,O.aEndAngle*=-1,O.aClockwise=!O.aClockwise)}let H=z.subPaths;for(let O=0,Q=H.length;O<Q;O++){let R=H[O].curves;for(let B=0;B<R.length;B++){let G=R[B];G.isLineCurve?(M(G.v1),M(G.v2)):G.isCubicBezierCurve?(M(G.v0),M(G.v1),M(G.v2),M(G.v3)):G.isQuadraticBezierCurve?(M(G.v0),M(G.v1),M(G.v2)):G.isEllipseCurve&&(le.set(G.aX,G.aY),M(le),G.aX=le.x,G.aY=le.y,D(P)?g(G):F(G))}}}function C(z){let P=z.elements;return P[0]*P[4]-P[1]*P[3]<0}function D(z){let P=z.elements,M=P[0]*P[3]+P[1]*P[4];if(M===0)return!1;let g=S(z),F=E(z);return Math.abs(M/(g*F))>Number.EPSILON}function S(z){let P=z.elements;return Math.sqrt(P[0]*P[0]+P[1]*P[1])}function E(z){let P=z.elements;return Math.sqrt(P[3]*P[3]+P[4]*P[4])}function V(z,P,M){let g,F,H,O,Q,ee=z+M,R=z-M,B=Math.sqrt(R*R+4*P*P);return ee>0?(g=.5*(ee+B),Q=1/g,F=z*Q*M-P*Q*P):ee<0?F=.5*(ee-B):(g=.5*B,F=-.5*B),R>0?H=R+B:H=R-B,Math.abs(H)>2*Math.abs(P)?(Q=-2*P/H,O=1/Math.sqrt(1+Q*Q),H=Q*O):Math.abs(P)===0?(H=1,O=0):(Q=-.5*H/P,H=1/Math.sqrt(1+Q*Q),O=Q*H),R>0&&(Q=H,H=-O,O=Q),{rt1:g,rt2:F,cs:H,sn:O}}let W=[],$={},K=[],re=new We,ne=new We,ce=new We,q=new We,le=new me,ie=new k,X=new We,ae=new DOMParser().parseFromString(e,"image/svg+xml");return n(ae.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:ae.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,m,h,T){let y=_.x,v=m.x,I=h.x,w=T.x,C=_.y,D=m.y,S=h.y,E=T.y,V=(w-I)*(C-S)-(E-S)*(y-I),W=(v-y)*(C-S)-(D-C)*(y-I),$=(E-S)*(v-y)-(w-I)*(D-C),K=V/$,re=W/$;if($===0&&V!==0||K<=0||K>=1||re<0||re>1)return null;if(V===0&&$===0){for(let ne=0;ne<2;ne++)if(o(ne===0?h:T,_,m),s.loc==n.ORIGIN){let ce=ne===0?h:T;return{x:ce.x,y:ce.y,t:s.t}}else if(s.loc==n.BETWEEN){let ce=+(y+s.t*(v-y)).toPrecision(10),q=+(C+s.t*(D-C)).toPrecision(10);return{x:ce,y:q,t:s.t}}return null}else{for(let q=0;q<2;q++)if(o(q===0?h:T,_,m),s.loc==n.ORIGIN){let le=q===0?h:T;return{x:le.x,y:le.y,t:s.t}}let ne=+(y+K*(v-y)).toPrecision(10),ce=+(C+K*(D-C)).toPrecision(10);return{x:ne,y:ce,t:K}}}function o(_,m,h){let T=h.x-m.x,y=h.y-m.y,v=_.x-m.x,I=_.y-m.y,w=T*I-v*y;if(_.x===m.x&&_.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===h.x&&_.y===h.y){s.loc=n.DESTINATION,s.t=1;return}if(w<-Number.EPSILON){s.loc=n.LEFT;return}if(w>Number.EPSILON){s.loc=n.RIGHT;return}if(T*v<0||y*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(T*T+y*y)<Math.sqrt(v*v+I*I)){s.loc=n.BEYOND;return}let C;T!==0?C=v/T:C=I/y,s.loc=n.BETWEEN,s.t=C}function a(_,m){let h=[],T=[];for(let y=1;y<_.length;y++){let v=_[y-1],I=_[y];for(let w=1;w<m.length;w++){let C=m[w-1],D=m[w],S=r(v,I,C,D);S!==null&&h.find(E=>E.t<=S.t+Number.EPSILON&&E.t>=S.t-Number.EPSILON)===void 0&&(h.push(S),T.push(new me(S.x,S.y)))}}return T}function c(_,m,h){let T=new me;m.getCenter(T);let y=[];return h.forEach(v=>{v.boundingBox.containsPoint(T)&&a(_,v.points).forEach(w=>{y.push({identifier:v.identifier,isCW:v.isCW,point:w})})}),y.sort((v,I)=>v.point.x-I.point.x),y}function l(_,m,h,T,y){(y==null||y==="")&&(y="nonzero");let v=new me;_.boundingBox.getCenter(v);let I=[new me(h,v.y),new me(T,v.y)],w=c(I,_.boundingBox,m);w.sort((W,$)=>W.point.x-$.point.x);let C=[],D=[];w.forEach(W=>{W.identifier===_.identifier?C.push(W):D.push(W)});let S=C[0].point.x,E=[],V=0;for(;V<D.length&&D[V].point.x<S;)E.length>0&&E[E.length-1]===D[V].identifier?E.pop():E.push(D[V].identifier),V++;if(E.push(_.identifier),y==="evenodd"){let W=E.length%2===0,$=E[E.length-2];return{identifier:_.identifier,isHole:W,for:$}}else if(y==="nonzero"){let W=!0,$=null,K=null;for(let re=0;re<E.length;re++){let ne=E[re];W?(K=m[ne].isCW,W=!1,$=ne):K!==m[ne].isCW&&(K=m[ne].isCW,W=!0)}return{identifier:_.identifier,isHole:W,for:$}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(_=>{let m=_.getPoints(),h=-999999999,T=999999999,y=-999999999,v=999999999;for(let I=0;I<m.length;I++){let w=m[I];w.y>h&&(h=w.y),w.y<T&&(T=w.y),w.x>y&&(y=w.x),w.x<v&&(v=w.x)}return d<=y&&(d=y+1),u>=v&&(u=v-1),{curves:_.curves,points:m,isCW:wt.isClockWise(m),identifier:-1,boundingBox:new Gs(new me(v,T),new me(y,h))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;let p=f.map(_=>l(_,f,u,d,e.userData?e.userData.style.fillRule:void 0)),x=[];return f.forEach(_=>{if(!p[_.identifier].isHole){let h=new _t;h.curves=_.curves,p.filter(y=>y.isHole&&y.for===_.identifier).forEach(y=>{let v=f[y.identifier],I=new pn;I.curves=v.curves,h.holes.push(I)}),x.push(h)}}),x}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let c=new pt;return c.setAttribute("position",new qe(r,3)),c.setAttribute("normal",new qe(o,3)),c.setAttribute("uv",new qe(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){let l=new me,u=new me,d=new me,f=new me,p=new me,x=new me,_=new me,m=new me,h=new me,T=new me,y=new me,v=new me,I=new me,w=new me,C=new me,D=new me,S=new me;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=R(e);let E=e.length;if(E<2)return 0;let V=e[0].equals(e[E-1]),W,$=e[0],K,re=t.strokeWidth/2,ne=1/(E-1),ce=0,q,le,ie,X,ae=!1,he=0,z=c*3,P=c*2;M(e[0],e[1],l).multiplyScalar(re),m.copy(e[0]).sub(l),h.copy(e[0]).add(l),T.copy(m),y.copy(h);for(let B=1;B<E;B++){W=e[B],B===E-1?V?K=e[1]:K=void 0:K=e[B+1];let G=l;if(M($,W,G),d.copy(G).multiplyScalar(re),v.copy(W).sub(d),I.copy(W).add(d),q=ce+ne,le=!1,K!==void 0){M(W,K,u),d.copy(u).multiplyScalar(re),w.copy(W).sub(d),C.copy(W).add(d),ie=!0,d.subVectors(K,$),G.dot(d)<0&&(ie=!1),B===1&&(ae=ie),d.subVectors(K,W),d.normalize();let Z=Math.abs(G.dot(d));if(Z>Number.EPSILON){let Y=re/Z;d.multiplyScalar(-Y),f.subVectors(W,$),p.copy(f).setLength(Y).add(d),D.copy(p).negate();let U=p.length(),A=f.length();f.divideScalar(A),x.subVectors(K,W);let J=x.length();switch(x.divideScalar(J),f.dot(D)<A&&x.dot(D)<J&&(le=!0),S.copy(p).add(W),D.add(W),X=!1,le?ie?(C.copy(D),I.copy(D)):(w.copy(D),v.copy(D)):H(),t.strokeLineJoin){case"bevel":O(ie,le,q);break;case"round":Q(ie,le),ie?F(W,v,w,q,0):F(W,C,I,q,1);break;case"miter":case"miter-clip":default:let ge=re*t.strokeMiterLimit/U;if(ge<1)if(t.strokeLineJoin!=="miter-clip"){O(ie,le,q);break}else Q(ie,le),ie?(x.subVectors(S,v).multiplyScalar(ge).add(v),_.subVectors(S,w).multiplyScalar(ge).add(w),g(v,q,0),g(x,q,0),g(W,q,.5),g(W,q,.5),g(x,q,0),g(_,q,0),g(W,q,.5),g(_,q,0),g(w,q,0)):(x.subVectors(S,I).multiplyScalar(ge).add(I),_.subVectors(S,C).multiplyScalar(ge).add(C),g(I,q,1),g(x,q,1),g(W,q,.5),g(W,q,.5),g(x,q,1),g(_,q,1),g(W,q,.5),g(_,q,1),g(C,q,1));else le?(ie?(g(h,ce,1),g(m,ce,0),g(S,q,0),g(h,ce,1),g(S,q,0),g(D,q,1)):(g(h,ce,1),g(m,ce,0),g(S,q,1),g(m,ce,0),g(D,q,0),g(S,q,1)),ie?w.copy(S):C.copy(S)):ie?(g(v,q,0),g(S,q,0),g(W,q,.5),g(W,q,.5),g(S,q,0),g(w,q,0)):(g(I,q,1),g(S,q,1),g(W,q,.5),g(W,q,.5),g(S,q,1),g(C,q,1)),X=!0;break}}else H()}else H();!V&&B===E-1&&ee(e[0],T,y,ie,!0,ce),ce=q,$=W,m.copy(w),h.copy(C)}if(!V)ee(W,v,I,ie,!1,q);else if(le&&r){let B=S,G=D;ae!==ie&&(B=D,G=S),ie?(X||ae)&&(G.toArray(r,0),G.toArray(r,9),X&&B.toArray(r,3)):(X||!ae)&&(G.toArray(r,3),G.toArray(r,9),X&&B.toArray(r,0))}return he;function M(B,G,Z){return Z.subVectors(G,B),Z.set(-Z.y,Z.x).normalize()}function g(B,G,Z){r&&(r[z]=B.x,r[z+1]=B.y,r[z+2]=0,o&&(o[z]=0,o[z+1]=0,o[z+2]=1),z+=3,a&&(a[P]=G,a[P+1]=Z,P+=2)),he+=3}function F(B,G,Z,Y,U){l.copy(G).sub(B).normalize(),u.copy(Z).sub(B).normalize();let A=Math.PI,J=l.dot(u);Math.abs(J)<1&&(A=Math.abs(Math.acos(J))),A/=n,d.copy(G);for(let ge=0,Se=n-1;ge<Se;ge++)f.copy(d).rotateAround(B,A),g(d,Y,U),g(f,Y,U),g(B,Y,.5),d.copy(f);g(f,Y,U),g(Z,Y,U),g(B,Y,.5)}function H(){g(h,ce,1),g(m,ce,0),g(v,q,0),g(h,ce,1),g(v,q,0),g(I,q,1)}function O(B,G,Z){G?B?(g(h,ce,1),g(m,ce,0),g(v,q,0),g(h,ce,1),g(v,q,0),g(D,q,1),g(v,Z,0),g(w,Z,0),g(D,Z,.5)):(g(h,ce,1),g(m,ce,0),g(I,q,1),g(m,ce,0),g(D,q,0),g(I,q,1),g(I,Z,1),g(D,Z,0),g(C,Z,1)):B?(g(v,Z,0),g(w,Z,0),g(W,Z,.5)):(g(I,Z,1),g(C,Z,0),g(W,Z,.5))}function Q(B,G){G&&(B?(g(h,ce,1),g(m,ce,0),g(v,q,0),g(h,ce,1),g(v,q,0),g(D,q,1),g(v,ce,0),g(W,q,.5),g(D,q,1),g(W,q,.5),g(w,ce,0),g(D,q,1)):(g(h,ce,1),g(m,ce,0),g(I,q,1),g(m,ce,0),g(D,q,0),g(I,q,1),g(I,ce,1),g(D,q,0),g(W,q,.5),g(W,q,.5),g(D,q,0),g(C,ce,1)))}function ee(B,G,Z,Y,U,A){switch(t.strokeLineCap){case"round":U?F(B,Z,G,A,.5):F(B,G,Z,A,.5);break;case"square":if(U)l.subVectors(G,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B),Y?(d.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(d.toArray(r,3),a[7]===1?f.toArray(r,9):d.toArray(r,9),f.toArray(r,0));else{l.subVectors(Z,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B);let J=r.length;Y?(d.toArray(r,J-3),f.toArray(r,J-6),f.toArray(r,J-12)):(f.toArray(r,J-6),d.toArray(r,J-3),f.toArray(r,J-12))}break;case"butt":default:break}}function R(B){let G=!1;for(let Y=1,U=B.length-1;Y<U;Y++)if(B[Y].distanceTo(B[Y+1])<s){G=!0;break}if(!G)return B;let Z=[];Z.push(B[0]);for(let Y=1,U=B.length-1;Y<U;Y++)B[Y].distanceTo(B[Y+1])>=s&&Z.push(B[Y]);return Z.push(B[B.length-1]),Z}}};window.SlinkGrowthModules={createTile:Qs,VARIANTS:Fl,TILE_SPEC:Nl,disposeTile:er};window.Slink3D=(()=>{let i=new na,e,t,n,s,r,o,a=new Vs,c=[],l=[],u=[],d,f,p,x=!1,_,m=[],h=[],T=0,y=0,v=(X,ae=.55,he={})=>new rt({color:X,roughness:ae,metalness:0,...he});function I(X,ae,he,z,P){let M=new _t;return M.moveTo(X+P,ae),M.lineTo(X+he-P,ae),M.quadraticCurveTo(X+he,ae,X+he,ae+P),M.lineTo(X+he,ae+z-P),M.quadraticCurveTo(X+he,ae+z,X+he-P,ae+z),M.lineTo(X+P,ae+z),M.quadraticCurveTo(X,ae+z,X,ae+z-P),M.lineTo(X,ae+P),M.quadraticCurveTo(X,ae,X+P,ae),M}function w(X,ae,he=0,z=0,P=0,M=r){let g=new ze(X,ae);return g.position.set(he,z,P),g.castShadow=!0,g.receiveShadow=!0,M.add(g),g}function C(X,ae,he,z,P,M,g,F,H=r){return w(new yn(X,ae,he,4,z),P,M,g,F,H)}function D(){let X=document.createElement("canvas");X.width=X.height=128;let ae=X.getContext("2d"),he=ae.createImageData(128,128),z=73;for(let M=0;M<he.data.length;M+=4){z=z*1664525+1013904223>>>0;let g=128+(z>>>27)%9;he.data[M]=he.data[M+1]=he.data[M+2]=g,he.data[M+3]=255}ae.putImageData(he,0,0);let P=new fn(X);return P.wrapS=P.wrapT=Oi,P}let S=()=>D();function E(){let X=D(),ae=X.image,he=ae.getContext("2d");he.fillStyle="#656565";for(let z=0;z<4;z++){let P=z*Math.PI/2+.5;he.save(),he.translate(64+Math.cos(P)*18,64+Math.sin(P)*18),he.rotate(P),he.beginPath(),he.ellipse(0,0,18,9,0,0,Math.PI*2),he.fill(),he.restore()}return he.beginPath(),he.arc(64,64,5,0,Math.PI*2),he.fill(),X.needsUpdate=!0,X}function V(X){let ae=document.createElement("canvas");ae.width=ae.height=128;let he=ae.getContext("2d");he.fillStyle="#77421a",he.font="bold 82px Trebuchet MS",he.textAlign="center",he.textBaseline="middle",he.fillText(String(X),64,69);let z=new fn(ae);return z.colorSpace=xt,z}function W(X,ae){let he=0;for(let P=0;P<X.length;P++){let M=X[P],g=X[(P+1)%X.length];he+=M.x*g.y-g.x*M.y}let z=he>0?1:-1;return X.map((P,M)=>{let g=X[(M+X.length-1)%X.length],F=X[(M+1)%X.length],H=P.clone().sub(g).normalize(),O=F.clone().sub(P).normalize(),Q=new me(H.y,-H.x).multiplyScalar(z),ee=new me(O.y,-O.x).multiplyScalar(z),R=Q.clone().add(ee).normalize();return P.clone().add(R.multiplyScalar(ae/Math.max(.25,R.dot(Q))))})}function $(X){let ae=new _t;return X.forEach((he,z)=>z?ae.lineTo(he.x,-he.y):ae.moveTo(he.x,-he.y)),ae.closePath(),ae}function K(X,ae){let he=new Set(X),z=[];for(;he.size;){let P=he.values().next().value,M=[P];he.delete(P);for(let g=0;g<M.length;g++){let F=M[g];for(let H of[F-ae,F+ae,F%ae?F-1:-1,F%ae<ae-1?F+1:-1])he.has(H)&&(he.delete(H),M.push(H))}z.push(M)}return z}function re(X,ae,he){let z=new Set(X),P=[],M=(F,H)=>F>=0&&H>=0&&F<ae&&z.has(H*ae+F);for(let F of X){let H=F%ae,O=Math.floor(F/ae),Q=20+H*80,ee=20+O*80;M(H,O-1)||P.push([[Q,ee],[Q+80,ee]]),M(H+1,O)||P.push([[Q+80,ee],[Q+80,ee+80]]),M(H,O+1)||P.push([[Q+80,ee+80],[Q,ee+80]]),M(H-1,O)||P.push([[Q,ee+80],[Q,ee]])}let g=[];for(;P.length;){let F=P.shift(),H=F[0],O=[H],Q=F[1];for(;Q.join()!=H.join();){O.push(Q);let ee=P.findIndex(R=>R[0].join()==Q.join());if(ee<0)break;Q=P.splice(ee,1)[0][1]}O=O.filter((ee,R)=>{let B=O[(R+O.length-1)%O.length],G=O[(R+1)%O.length];return!(B[0]===ee[0]&&G[0]===ee[0]||B[1]===ee[1]&&G[1]===ee[1])}),g.push(O.map(ee=>new me(...ee)))}return g.sort((F,H)=>Math.abs(wt.area(H))-Math.abs(wt.area(F))),g.map((F,H)=>{let O=W(F,H?he:-he),Q=new _t;return O.forEach((ee,R)=>{let B=O[(R+O.length-1)%O.length],G=O[(R+1)%O.length],Z=Math.min(10,ee.distanceTo(B)/3,ee.distanceTo(G)/3),Y=ee.clone().add(B.clone().sub(ee).normalize().multiplyScalar(Z)),U=ee.clone().add(G.clone().sub(ee).normalize().multiplyScalar(Z));R?Q.lineTo(Y.x,-Y.y):Q.moveTo(Y.x,-Y.y),Q.quadraticCurveTo(ee.x,-ee.y,U.x,-U.y)}),Q.closePath(),Q})}function ne(){o=document.createElement("canvas"),o.id="terrain3d",o.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(o),t=new jo({canvas:o,alpha:!0,antialias:!0,powerPreference:"high-performance"}),t.setPixelRatio(Math.min(devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.shadowMap.type=to,t.outputColorSpace=xt,t.toneMapping=co,t.toneMappingExposure=.88,n=new Ts,n.add(new Hs("#fff6dc","#a28d6c",1.65));let X=new $i("#fff4dc",3.3);X.position.set(-300,450,750),X.castShadow=!0,X.shadow.mapSize.set(2048,2048),Object.assign(X.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),X.shadow.bias=-3e-4,X.shadow.normalBias=.9,X.shadow.radius=4,n.add(X);let ae=new $i("#d4e8ff",.4);ae.position.set(500,-100,400),n.add(ae),r=new Je,n.add(r),e=Xh(),e.setSize(90),n.add(e.group),s=new fi,s.up.set(0,1,0),s.near=1,s.far=3e3,f=new ResizeObserver(()=>ce()),f.observe(document.getElementById("board"));let he=(P,M)=>{let g=o.getBoundingClientRect();return a.setFromCamera(new me((P-g.left)/g.width*2-1,-(M-g.top)/g.height*2+1),s),a.intersectObjects(c,!1)[0]?.object.userData.cell??-1},z=P=>{if(!x)return;let M=_||P,g=P.clientX-M.clientX,F=P.clientY-M.clientY,H=Math.max(1,Math.ceil(Math.hypot(g,F)/3));for(let O=1;O<=H;O++){let Q=he(M.clientX+g*O/H,M.clientY+F*O/H);Q>=0&&d.onMove(Q)}_={clientX:P.clientX,clientY:P.clientY}};o.addEventListener("pointerdown",P=>{P.preventDefault(),o.setPointerCapture(P.pointerId),x=!0,_=null,z(P),document.getElementById("board").focus({preventScroll:!0})}),o.addEventListener("pointermove",z);for(let P of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(P,()=>{x=!1,_=null});o.addEventListener("webglcontextlost",P=>{P.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),o.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function ce(){if(!d)return;let X=document.getElementById("board"),ae=X.clientWidth,he=X.clientHeight;if(!ae||!he)return;t.setSize(ae,he,!1);let z=new dn().setFromObject(r);z.max.z=Math.max(z.max.z,60);let P=z.getCenter(new k);s.position.set(P.x,P.y-430,P.z+1250),s.lookAt(P.x,P.y,0),s.updateMatrixWorld();let M=n.children.find(B=>B.isDirectionalLight&&B.castShadow);if(M){let B=Math.max(z.max.x-z.min.x,z.max.y-z.min.y)*.75+60;M.target.position.set(P.x,P.y,0),n.add(M.target),Object.assign(M.shadow.camera,{left:-B,right:B,top:B,bottom:-B}),M.shadow.camera.updateProjectionMatrix()}let g=s.matrixWorldInverse,F=new me(1/0,1/0),H=new me(-1/0,-1/0);for(let B of[z.min.x,z.max.x])for(let G of[z.min.y,z.max.y])for(let Z of[z.min.z,z.max.z]){let Y=new k(B,G,Z).applyMatrix4(g);F.min(Y),H.max(Y)}let O=(F.x+H.x)/2,Q=(F.y+H.y)/2,ee=Math.max((H.y-F.y)/2,(H.x-F.x)/2/(ae/he))+13,R=ee*ae/he;Object.assign(s,{left:O-R,right:O+R,top:Q+ee,bottom:Q-ee}),s.updateProjectionMatrix(),t.shadowMap.needsUpdate=!0,q()}function q(){t.render(n,s)}function le(X){if(requestAnimationFrame(le),!t||!d||document.hidden){y=X;return}if(X-y<33)return;T+=Math.min((X-y)/1e3,.1),y=X;let ae=i.sample(X/1e3);e.group.position.set(ae.x,ae.y,8.5+9.5*(m.find(he=>he.i===ae.cell)?.progress||0)),e.group.rotation.z=ae.heading,e.group.visible&&e.update(T,0,{active:ae.moving,travel:ae.travel,celebrationAge:ae.celebrationAge,celebrationTurn:ae.celebrationTurn,celebrationStyle:"gentle"}),o.dataset.creatureCell=ae.cell,o.dataset.creatureMoving=String(ae.moving),o.dataset.creatureX=ae.x,o.dataset.creatureY=ae.y,o.dataset.creatureHeading=ae.heading,o.dataset.creatureCelebration=ae.celebrationAge;for(let he of h)he.update(T);for(let he of m){he.meadow?.update(T);let z=Math.min((X-he.changedAt)/he.duration,1);he.progress=he.from+(he.target-he.from)*Math.max(0,z);let P=he.progress;he.grown.scale.z=(8.5+9.5*P)/18,he.grown.position.z=0,he.grown.visible=P>0,he.grown.traverse(M=>{M.isMesh&&(M.material.transparent=P<1,M.material.opacity=P,M.castShadow=P>.7)}),he.earth.visible=P<1}for(let he of u){let z=m.find(P=>P.i===he.i);he.goal.group.position.z=8.5+9.5*(z?.progress||0),he.goal.update(T,.033)}t.shadowMap.needsUpdate=!0,q()}requestAnimationFrame(le);function ie(X,ae,he){d={l:X,onMove:he};let z=new Set,P=new Set,M=new Set;r.traverse(U=>{U.geometry&&z.add(U.geometry);for(let A of[].concat(U.material||[])){P.add(A);for(let J of Object.values(A))J?.isTexture&&M.add(J)}}),r.clear(),z.forEach(U=>U.dispose()),P.forEach(U=>U.dispose()),M.forEach(U=>U.dispose()),c=[],l=[],u=[],m=[],h=[];let g=new tr,F=g.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+ae+'"/></svg>'),H=tr.createShapes(F.paths[0])[0].getPoints(24);H.pop();let O=$(W(H,11)),Q=v("#f6dfb5",.62,{bumpMap:S(),bumpScale:.18,side:Ft}),ee=[...X.water||[],...X.lava||[]],R=U=>({x:U%X.n*80+60,y:-(Math.floor(U/X.n)*80+60)}),B=[];for(let[U,A]of[["water",X.water||[]],["lava",X.lava||[]]])for(let J of K(A,X.n)){let ge=re(J,X.n,7);O.holes.push(ge[0]),B.push({type:U,group:J,shapes:ge})}let G=new Gt(O,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});w(G,Q,0,0,-24);for(let U of K(X.solution,X.n)){let A=re(U,X.n,0),J=A[0];J.holes.push(...A.slice(1)),w(new Os(J),v("#87623d",.8),0,0,3.2)}for(let U of X.solution){let A=R(U);m.push({i:U,p:A,id:null,group:null})}for(let{type:U,group:A,shapes:J}of B){let ge=R(A[0]),Se=window.SlinkCatalogueDesign,N=ru(U,{style:U==="water"?Se?.waterStyle||"sway":Se?.lavaStyle||"bubbles",center:[ge.x,ge.y]});h.push(N);let b=J[0];b.holes.push(...J.slice(1)),w(new Gt(b,{depth:3,bevelEnabled:!1,curveSegments:20}),N.material,0,0,-15)}let Z=nu(X),Y=new Map;for(let U of X.stones||[]){let A=Z.stones[U];Y.has(A)||Y.set(A,Qh(A,{seed:Z.seed}));let J=Y.get(A).group.clone(!0),ge=R(U);J.position.set(ge.x,ge.y,0),J.userData.cell=U,r.add(J),J.traverse(Se=>{Se.isMesh&&(Se.userData.cell=-1,c.push(Se))})}if(X.fence){let U=Vh({n:X.n,walls:X.walls,origin:[60,-60],style:X.fence.style,design:X.fence.design});r.add(U.group)}else for(let[U,A]of X.walls){let J=R(U),ge=R(A);C(J.x===ge.x?53:9,J.y===ge.y?53:9,18,3,v("#a49983",.85),(J.x+ge.x)/2,(J.y+ge.y)/2,17)}for(let[U,A]of X.marks.entries()){let J=R(A),ge=$h({species:Z.flowers[U],number:U+1,state:U===0?"next":"closed",layout:"compact"});ge.group.rotation.x=Math.PI/2,ge.group.position.set(J.x,J.y,8.5),r.add(ge.group),u.push({i:A,goal:ge})}t.shadowMap.needsUpdate=!0,ce()}return{diagnostics(){return t?{textures:t.info.memory.textures,geometries:t.info.memory.geometries,programs:t.info.programs.length,flowers:u.map(X=>X.goal.group.userData.species),bloomsReady:u.every(X=>X.goal.state==="bloom"&&X.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:r.children.filter(X=>X.userData.style&&X.userData.walkable===!1).map(X=>X.userData.style),fence:d?.l.fence?{...d.l.fence,spans:r.getObjectByName("wood-fence")?.children.filter(X=>X.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:o.dataset.creatureCell,moving:o.dataset.creatureMoving,heading:o.dataset.creatureHeading,celebrationAge:o.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(X,ae,he,z){try{t||ne(),d?.l!==X&&ie(X,he,z),i.sync(X,ae,performance.now()/1e3);let P=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==P.palette&&e.setPalette(P.palette),e.setSize(P.size),e.group.visible=P.enabled!==!1,o.dataset.creatureVisible=String(e.group.visible);let M=X.marks.find(g=>!ae.includes(g));for(let g of m){if(!g.group){if(g.earth=Qs("earth-loam",{seed:73+g.i*19}),g.meadow=iu(X.meadowVariants?.[g.i]||"classic",{seed:(X.meadowSeed||73)+g.i*19}),g.grown=g.meadow.group,X.marks.includes(g.i))for(let H of[...g.grown.children])!H.userData.surface&&H.position.x>0&&H.position.y<-3&&g.grown.remove(H);g.group=g.earth;for(let H of[g.earth,g.grown])H.position.set(g.p.x,g.p.y,0),r.add(H),H.traverse(O=>{O.isMesh&&O.userData.surface&&(O.userData.cell=g.i,c.push(O))});g.progress=0,g.target=0,g.from=0,g.changedAt=performance.now(),g.duration=300,g.grown.visible=!1}let F=ae.includes(g.i)?1:0;F!==g.target&&(g.from=g.progress,g.target=F,g.changedAt=performance.now(),g.duration=F?300:180)}for(let g of u){g.goal.setState(ae.includes(g.i)?"bloom":g.i===M?"next":"closed"),g.goal.setSize(window.SlinkMarkerSize||27);let F=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};g.goal.setInsects(F.enabled),g.goal.setVisitorSize("bee",F.bee),g.goal.setVisitorSize("bumblebee",F.bumblebee)}t.shadowMap.needsUpdate=!0,q()}catch(P){console.error("3D renderer:",P),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
