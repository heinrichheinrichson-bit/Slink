(()=>{var Uc=0,$a=1,Nc=2;var Ka=1,ro=2,ln=3,xn=0,Pt=1,qt=2,En=0,ii=1,Qa=2,ja=3,el=4,Fc=5,Bn=100,Oc=101,Bc=102,zc=103,kc=104,Hc=200,Vc=201,Gc=202,Wc=203,Pr=204,Lr=205,Xc=206,qc=207,Yc=208,Zc=209,Jc=210,$c=211,Kc=212,Qc=213,jc=214,oo=0,ao=1,lo=2,si=3,co=4,ho=5,uo=6,fo=7,tl=0,eh=1,th=2,Tn=0,nh=1,ih=2,sh=3,po=4,rh=5,oh=6,ah=7;var nl=300,pi=301,mi=302,mo=303,go=304,Ys=306,ki=1e3,On=1001,Dr=1002,Ut=1003,lh=1004;var Zs=1005;var Ct=1006,_o=1007;var Wn=1008;var sn=1009,il=1010,sl=1011,Ki=1012,xo=1013,Xn=1014,cn=1015,Qi=1016,vo=1017,yo=1018,ji=1020,rl=35902,ol=35899,al=1021,ll=1022,Yt=1023,Hi=1026,es=1027,cl=1028,Mo=1029,hl=1030,So=1031;var bo=1033,Js=33776,$s=33777,Ks=33778,Qs=33779,Eo=35840,To=35841,wo=35842,Ao=35843,Ro=36196,Co=37492,Io=37496,Po=37808,Lo=37809,Do=37810,Uo=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Ho=37818,Vo=37819,Go=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Zo=36283,Jo=36284,$o=36285,Ko=36286;var vs=2300,Ur=2301,Ir=2302,za=2400,ka=2401,Ha=2402;var ch=3200,hh=3201;var ul=0,uh=1,wn="",Rt="srgb",ri="srgb-linear",ys="linear",it="srgb";var ni=7680;var Va=519,dh=512,fh=513,ph=514,dl=515,mh=516,gh=517,_h=518,xh=519,Ga=35044;var fl="300 es",Qt=2e3,Ms=2001;var vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=1234567,ms=Math.PI/180,Vi=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function Nu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fu(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function Ou(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function Bu(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vu(i,e){return i+Math.random()*(e-i)}function Gu(i){return i*(.5-Math.random())}function Wu(i){i!==void 0&&(oc=i);let e=oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xu(i){return i*ms}function qu(i){return i*Vi}function Yu(i){return(i&i-1)===0&&i!==0}function Zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $u(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var An={DEG2RAD:ms,RAD2DEG:Vi,generateUUID:gi,clamp:Je,euclideanModulo:pl,mapLinear:Nu,inverseLerp:Fu,lerp:gs,damp:Ou,pingpong:Bu,smoothstep:zu,smootherstep:ku,randInt:Hu,randFloat:Vu,randFloatSpread:Gu,seededRandom:Wu,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Yu,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:$u,normalize:At,denormalize:Bi},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let R=Math.sqrt(b),T=Math.atan2(R,f*w);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let v=a*w;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new P,ac=new yn,Xe=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],b=s[4],v=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*_+a*w+c*R,r[3]=o*m+a*b+c*T,r[6]=o*f+a*v+c*C,r[1]=l*_+h*w+u*R,r[4]=l*m+h*b+u*T,r[7]=l*f+h*v+u*C,r[2]=d*_+p*w+g*R,r[5]=d*m+p*b+g*T,r[8]=d*f+p*v+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pa=new Xe;function ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=Ss("canvas");return i.style.display="block",i}var lc={};function Gi(i){i in lc||(lc[i]=!0,console.warn(i))}function yh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var cc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ku(){let i={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ri]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var je=Ku();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Nr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ss("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qu=0,Wi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ju=0,ga=new P,It=class i extends vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=Ct,o=Wn,a=Yt,c=sn,l=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=gi(),this.name="",this.source=new Wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=nl;It.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(p+1)/2,R=(f+1)/2,T=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return b>v&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=L/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr=class extends vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new It(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Fr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Or=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),lr.subVectors(this.max,cs),Ai.subVectors(e.a,cs),Ri.subVectors(e.b,cs),Ci.subVectors(e.c,cs),In.subVectors(Ri,Ai),Pn.subVectors(Ci,Ri),Qn.subVectors(Ai,Ci);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Pn.z,0,-Pn.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-Qn.y,Qn.x,0];return!_a(t,Ai,Ri,Ci,lr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Ai,Ri,Ci,lr))?!1:(cr.crossVectors(In,Pn),t=[cr.x,cr.y,cr.z],_a(t,Ai,Ri,Ci,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dn=[new P,new P,new P,new P,new P,new P,new P,new P],Jt=new P,ar=new zn,Ai=new P,Ri=new P,Ci=new P,In=new P,Pn=new P,Qn=new P,cs=new P,lr=new P,cr=new P,jn=new P;function _a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);let a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),c=e.dot(jn),l=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ed=new zn,hs=new P,xa=new P,oi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(xa)),this.expandByPoint(hs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fn=new P,va=new P,hr=new P,Ln=new P,ya=new P,ur=new P,Ma=new P,Es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(va);let r=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=Ln.dot(this.direction),c=-Ln.dot(hr),l=Ln.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(hr,d),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){ya.subVectors(t,e),ur.subVectors(n,e),Ma.crossVectors(ya,ur);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);let c=a*this.direction.dot(ur.crossVectors(Ln,ur));if(c<0)return null;let l=a*this.direction.dot(ya.cross(Ln));if(l<0||c+l>o)return null;let h=-a*Ln.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){let s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Dn.crossVectors(n,Ot),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Dn.crossVectors(n,Ot)),Dn.normalize(),dr.crossVectors(Ot,Dn),s[0]=Dn.x,s[4]=dr.x,s[8]=Ot.x,s[1]=Dn.y,s[5]=dr.y,s[9]=Ot.y,s[2]=Dn.z,s[6]=dr.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],b=n[7],v=n[11],R=n[15],T=s[0],C=s[4],L=s[8],M=s[12],y=s[1],I=s[5],U=s[9],z=s[13],H=s[2],V=s[6],W=s[10],re=s[14],G=s[3],ee=s[7],q=s[11],ae=s[15];return r[0]=o*T+a*y+c*H+l*G,r[4]=o*C+a*I+c*V+l*ee,r[8]=o*L+a*U+c*W+l*q,r[12]=o*M+a*z+c*re+l*ae,r[1]=h*T+u*y+d*H+p*G,r[5]=h*C+u*I+d*V+p*ee,r[9]=h*L+u*U+d*W+p*q,r[13]=h*M+u*z+d*re+p*ae,r[2]=g*T+_*y+m*H+f*G,r[6]=g*C+_*I+m*V+f*ee,r[10]=g*L+_*U+m*W+f*q,r[14]=g*M+_*z+m*re+f*ae,r[3]=w*T+b*y+v*H+R*G,r[7]=w*C+b*I+v*V+R*ee,r[11]=w*L+b*U+v*W+R*q,r[15]=w*M+b*z+v*re+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,b=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=t*w+n*b+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=w*C,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*C,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*C,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*C,e[4]=b*C,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*C,e[8]=v*C,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*C,e[12]=R*C,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,w=c*l,b=c*h,v=c*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+v)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-w)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);let l=1/r,h=1/o,u=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Qt)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ms)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qt,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Qt)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ms)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new P,$t=new ft,td=new P(0,0,0),nd=new P(1,1,1),Dn=new P,dr=new P,Ot=new P,uc=new ft,dc=new yn,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},id=0,fc=new P,Pi=new yn,pn=new ft,fr=new P,us=new P,sd=new P,rd=new yn,pc=new P(1,0,0),mc=new P(0,1,0),gc=new P(0,0,1),_c={type:"added"},od={type:"removed"},Li={type:"childadded",child:null},Sa={type:"childremoved",child:null},St=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new en,n=new yn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(us,fr,this.up):pn.lookAt(fr,us,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(pn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_c),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_c),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new P,mn=new P,ba=new P,gn=new P,Di=new P,Ui=new P,xc=new P,Ea=new P,Ta=new P,wa=new P,Aa=new ct,Ra=new ct,Ca=new ct,Fn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),mn.subVectors(n,t),ba.subVectors(e,t);let o=Kt.dot(Kt),a=Kt.dot(mn),c=Kt.dot(ba),l=mn.dot(mn),h=mn.dot(ba),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),mn.subVectors(e,t),Kt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Kt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ui.subVectors(r,n),Ea.subVectors(e,n);let c=Di.dot(Ea),l=Ui.dot(Ea);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,s);let h=Di.dot(Ta),u=Ui.dot(Ta);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Di,o);wa.subVectors(e,r);let p=Di.dot(wa),g=Ui.dot(wa);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ui,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(xc,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=pl(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ia(o,r,e+1/3),this.g=Ia(o,r,e),this.b=Ia(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.workingToColorSpace(Et.copy(this),e),Math.round(Je(Et.r*255,0,255))*65536+Math.round(Je(Et.g*255,0,255))*256+Math.round(Je(Et.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Rt){je.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(pr);let n=gs(Un.h,pr.h,t),s=gs(Un.s,pr.s,t),r=gs(Un.l,pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new qe;qe.NAMES=Mh;var ad=0,Mn=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ii,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ai=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new P,mr=new ge,ld=0,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ld++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}};var ws=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cd=0,Xt=new ft,Pa=new St,Ni=new P,Bt=new zn,ds=new zn,vt=new P,yt=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?As:ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Bt.min,ds.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,ds.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(ds.min),Bt.expandByPoint(ds.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vt.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(e,l),vt.add(Ni)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;let l=new P,h=new P,u=new P,d=new ge,p=new ge,g=new ge,_=new P,m=new P;function f(L,M,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[L].add(_),a[M].add(_),a[y].add(_),c[L].add(m),c[M].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){let y=w[L],I=y.start,U=y.count;for(let z=I,H=I+U;z<H;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new P,v=new P,R=new P,T=new P;function C(L){R.fromBufferAttribute(s,L),T.copy(R);let M=a[L];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);let I=v.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,M=w.length;L<M;++L){let y=w[L],I=y.start,U=y.count;for(let z=I,H=I+U;z<H;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=new ft,ei=new Es,gr=new oi,yc=new P,_r=new P,xr=new P,vr=new P,La=new P,yr=new P,Mc=new P,Mr=new P,We=class extends St{constructor(e=new yt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(La.fromBufferAttribute(u,e),o?yr.addScaledVector(La,h):yr.addScaledVector(La.sub(t),h))}t.add(yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),ei.copy(e.ray).recast(e.near),!(gr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(gr,yc)===null||ei.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(vc.copy(r).invert(),ei.copy(e.ray).applyMatrix4(vc),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,R=b;v<R;v+=3){let T=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);s=Sr(this,f,e,n,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Sr(this,o,e,n,l,h,u,w,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,R=b;v<R;v+=3){let T=v,C=v+1,L=v+2;s=Sr(this,f,e,n,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=m,b=m+1,v=m+2;s=Sr(this,o,e,n,l,h,u,w,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function hd(i,e,t,n,s,r,o,a){let c;if(e.side===Pt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:i}}function Sr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,_r),i.getVertexPosition(c,xr),i.getVertexPosition(l,vr);let h=hd(i,e,t,n,_r,xr,vr,Mc);if(h){let u=new P;Fn.getBarycoord(Mc,_r,xr,vr,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,c,l,u,new ge)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,c,l,u,new ge)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};Fn.getNormal(_r,xr,vr,d.normal),h.face=d,h.barycoord=u}return h}var kn=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(_,m,f,w,b,v,R,T,C,L,M){let y=v/C,I=R/L,U=v/2,z=R/2,H=T/2,V=C+1,W=L+1,re=0,G=0,ee=new P;for(let q=0;q<W;q++){let ae=q*I-z;for(let ve=0;ve<V;ve++){let Ne=ve*y-U;ee[_]=Ne*w,ee[m]=ae*b,ee[f]=H,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=T>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ve/C),u.push(1-q/L),re+=1}}for(let q=0;q<L;q++)for(let ae=0;ae<C;ae++){let ve=d+ae+V*q,Ne=d+ae+V*(q+1),Ae=d+(ae+1)+V*(q+1),Oe=d+(ae+1)+V*q;c.push(ve,Ne,Oe),c.push(Ne,Ae,Oe),G+=6}a.addGroup(p,G,M),p+=G,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){let e={};for(let t=0;t<i.length;t++){let n=_i(i[t]);for(let s in n)e[s]=n[s]}return e}function ud(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Sh={clone:_i,merge:Tt},dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new P,Sc=new ge,bc=new ge,Dt=class extends Rs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,bc),t.subVectors(bc,Sc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,Br=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let o=new Dt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let a=new Dt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);let c=new Dt(Fi,Oi,e,t);c.layers=this.layers,this.add(c);let l=new Dt(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cs=class extends It{constructor(e=[],t=pi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zr=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:En});r.uniforms.tEquirect.value=t;let o=new We(s,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Ct),new Br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Qe=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},pd={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Is=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var li=class extends It{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ut,h=Ut,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=new P,md=new P,gd=new Xe,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Da.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gd.getNormalMatrix(e),s=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new oi,_d=new ge(.5,.5),br=new P,qi=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],w=r[12],b=r[13],v=r[14],R=r[15];if(s[0].setComponents(l-o,p-h,f-g,R-w).normalize(),s[1].setComponents(l+o,p+h,f+g,R+w).normalize(),s[2].setComponents(l+a,p+u,f+_,R+b).normalize(),s[3].setComponents(l-a,p-u,f-_,R-b).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,p-d,f-m,R-v).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-v).normalize(),t===Qt)s[5].setComponents(l+c,p+d,f+m,R+v).normalize();else if(t===Ms)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){ti.center.set(0,0,0);let t=_d.distanceTo(e.center);return ti.radius=.7071067811865476+t,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kr=new P,Hr=new P,Ec=new ft,fs=new Es,Er=new oi,Ua=new P,Tc=new P,Vr=class extends St{constructor(e=new yt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kr.fromBufferAttribute(t,s-1),Hr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kr.distanceTo(Hr);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;Ec.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Ec);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=h.getX(_),w=h.getX(_+1),b=Tr(this,e,fs,c,f,w,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Tr(this,e,fs,c,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=Tr(this,e,fs,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Tr(this,e,fs,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(kr.fromBufferAttribute(a,s),Hr.fromBufferAttribute(a,r),t.distanceSqToSegment(kr,Hr,Ua,Tc)>n)return;Ua.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ua);if(!(l<e.near||l>e.far))return{distance:l,point:Tc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wc=new P,Ac=new P,Ps=class extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wc.fromBufferAttribute(t,s),Ac.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wc.distanceTo(Ac);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ci=class extends It{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ls=class extends It{constructor(e,t,n=Xn,s,r,o,a=Ut,c=Ut,l,h=Hi,u=1){if(h!==Hi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ds=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Hn=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function w(){let v=new P,R=new P,T=0,C=(t-e)/n;for(let L=0;L<=r;L++){let M=[],y=L/r,I=y*(t-e)+e;for(let U=0;U<=s;U++){let z=U/s,H=z*c+a,V=Math.sin(H),W=Math.cos(H);R.x=I*V,R.y=-y*n+m,R.z=I*W,u.push(R.x,R.y,R.z),v.set(V,C,W).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-y),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){let y=_[M][L],I=_[M+1][L],U=_[M+1][L+1],z=_[M][L+1];(e>0||M!==0)&&(h.push(y,I,z),T+=3),(t>0||M!==r-1)&&(h.push(I,U,z),T+=3)}l.addGroup(f,T,0),f+=T}function b(v){let R=g,T=new ge,C=new P,L=0,M=v===!0?e:t,y=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let H=U/s*c+a,V=Math.cos(H),W=Math.sin(H);C.x=M*W,C.y=m*y,C.z=M*V,u.push(C.x,C.y,C.z),d.push(0,y,0),T.x=V*.5+.5,T.y=W*.5*y+.5,p.push(T.x,T.y),g++}for(let U=0;U<s;U++){let z=R+U,H=I+U;v===!0?h.push(H,H+1,z):h.push(H+1,H,z),L+=3}l.addGroup(f,L,v===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ge:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,c=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Je(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends kt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gr=class extends Zi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _l(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wr=new P,Na=new _l,Fa=new _l,Oa=new _l,Sn=class extends kt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),l=wr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Na.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Fa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Oa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Oa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Na.calc(c),Fa.calc(c),Oa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function xd(i,e){let t=1-i;return t*t*e}function vd(i,e){return 2*(1-i)*i*e}function yd(i,e){return i*i*e}function _s(i,e,t,n){return xd(i,e)+vd(i,t)+yd(i,n)}function Md(i,e){let t=1-i;return t*t*t*e}function Sd(i,e){let t=1-i;return 3*t*t*i*e}function bd(i,e){return 3*(1-i)*i*i*e}function Ed(i,e){return i*i*i*e}function xs(i,e,t,n,s){return Md(i,e)+Sd(i,t)+bd(i,n)+Ed(i,s)}var Us=class extends kt{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,s.x,r.x,o.x,a.x),xs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends kt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,s.x,r.x,o.x,a.x),xs(e,s.y,r.y,o.y,a.y),xs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ns=class extends kt{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends kt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends kt{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends kt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y),_s(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bs=class extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Rc(a,c.x,l.x,h.x,u.x),Rc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Xr=Object.freeze({__proto__:null,ArcCurve:Gr,CatmullRomCurve3:Sn,CubicBezierCurve:Us,CubicBezierCurve3:Ji,EllipseCurve:Zi,LineCurve:Ns,LineCurve3:Wr,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:Os,SplineCurve:Bs}),qr=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xr[s.type]().fromJSON(s))}return this}},zs=class extends qr{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ns(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fs(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Us(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Bs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Zi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nn=class extends zs{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new zs().fromJSON(s))}return this}};function Td(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=bh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Id(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ks(r,o,t,a,c,l,0),o}function bh(i,e,t,n,s){let r;if(s===Hd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Cc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Cc(o/n|0,i[o],i[o+1],r);return r&&$i(r,r.next)&&(Vs(r),r=r.next),r}function hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($i(t,t.next)||dt(t.prev,t,t.next)===0)){if(Vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ks(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Nd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Ad(i,n,s,r):wd(i)){e.push(c.i,i.i,l.i),Vs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rd(hi(i),e),ks(i,e,t,n,s,r,2)):o===2&&Cd(i,e,t,n,s,r):ks(hi(i),e,t,n,s,r,1);break}}}function wd(i){let e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ps(s,a,r,c,o,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ad(i,e,t,n){let s=i.prev,r=i,o=i.next;if(dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),f=Wa(p,g,e,t,n),w=Wa(_,m,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=f&&v&&v.z<=w;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ps(a,h,c,u,l,d,b.x,b.y)&&dt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ps(a,h,c,u,l,d,v.x,v.y)&&dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ps(a,h,c,u,l,d,b.x,b.y)&&dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=w;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ps(a,h,c,u,l,d,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!$i(n,s)&&Th(n,t,t.next,s)&&Hs(n,s)&&Hs(s,n)&&(e.push(n.i,t.i,s.i),Vs(t),Vs(t.next),t=i=s),t=t.next}while(t!==i);return hi(t)}function Cd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bd(o,a)){let c=wh(o,a);o=hi(o,o.next),c=hi(c,c.next),ks(o,e,t,n,s,r,0),ks(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Id(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=bh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Od(l))}s.sort(Pd);for(let r=0;r<s.length;r++)t=Ld(s[r],t);return t}function Pd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ld(i,e){let t=Dd(i,e);if(!t)return e;let n=wh(t,i);return hi(n,n.next),hi(t,t.next)}function Dd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if($i(i,t))return t;do{if($i(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Eh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Hs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ud(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ud(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function Nd(i,e,t,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fd(s)}function Fd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Wa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Od(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Eh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ps(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Eh(i,e,t,n,s,r,o,a)}function Bd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zd(i,e)&&(Hs(i,e)&&Hs(e,i)&&kd(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||$i(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $i(i,e){return i.x===e.x&&i.y===e.y}function Th(i,e,t,n){let s=Rr(dt(i,e,t)),r=Rr(dt(i,e,n)),o=Rr(dt(t,n,i)),a=Rr(dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ar(i,t,e)||r===0&&Ar(i,n,e)||o===0&&Ar(t,i,n)||a===0&&Ar(t,e,n))}function Ar(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rr(i){return i>0?1:i<0?-1:0}function zd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Th(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Hs(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function kd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wh(i,e){let t=Xa(i.i,i.x,i.y),n=Xa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cc(i,e,t,n){let s=Xa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qa=class{static triangulate(e,t,n=2){return Td(e,t,n)}},jt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ic(e),Pc(n,e);let o=e.length;t.forEach(Ic);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Pc(n,t[c]);let a=qa.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ic(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ht=class i extends yt{constructor(e=new nn([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Vd,b,v=!1,R,T,C,L;f&&(b=f.getSpacedPoints(h),v=!0,d=!1,R=f.computeFrenetFrames(h,!1),T=new P,C=new P,L=new P),d||(m=0,p=0,g=0,_=0);let M=a.extractPoints(l),y=M.shape,I=M.holes;if(!jt.isClockWise(y)){y=y.reverse();for(let K=0,te=I.length;K<te;K++){let Z=I[K];jt.isClockWise(Z)&&(I[K]=Z.reverse())}}function z(K){let Z=10000000000000001e-36,$=K[0];for(let ue=1;ue<=K.length;ue++){let ne=ue%K.length,le=K[ne],we=le.x-$.x,Le=le.y-$.y,E=we*we+Le*Le,x=Math.max(Math.abs(le.x),Math.abs(le.y),Math.abs($.x),Math.abs($.y)),O=Z*x*x;if(E<=O){K.splice(ne,1),ue--;continue}$=le}}z(y),I.forEach(z);let H=I.length,V=y;for(let K=0;K<H;K++){let te=I[K];y=y.concat(te)}function W(K,te,Z){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(te,Z)}let re=y.length;function G(K,te,Z){let $,ue,ne,le=K.x-te.x,we=K.y-te.y,Le=Z.x-K.x,E=Z.y-K.y,x=le*le+we*we,O=le*E-we*Le;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(x),se=Math.sqrt(Le*Le+E*E),Q=te.x-we/Y,Me=te.y+le/Y,ce=Z.x-E/se,Re=Z.y+Le/se,Ce=((ce-Q)*E-(Re-Me)*Le)/(le*E-we*Le);$=Q+le*Ce-K.x,ue=Me+we*Ce-K.y;let de=$*$+ue*ue;if(de<=2)return new ge($,ue);ne=Math.sqrt(de/2)}else{let Y=!1;le>Number.EPSILON?Le>Number.EPSILON&&(Y=!0):le<-Number.EPSILON?Le<-Number.EPSILON&&(Y=!0):Math.sign(we)===Math.sign(E)&&(Y=!0),Y?($=-we,ue=le,ne=Math.sqrt(x)):($=le,ue=we,ne=Math.sqrt(x/2))}return new ge($/ne,ue/ne)}let ee=[];for(let K=0,te=V.length,Z=te-1,$=K+1;K<te;K++,Z++,$++)Z===te&&(Z=0),$===te&&($=0),ee[K]=G(V[K],V[Z],V[$]);let q=[],ae,ve=ee.concat();for(let K=0,te=H;K<te;K++){let Z=I[K];ae=[];for(let $=0,ue=Z.length,ne=ue-1,le=$+1;$<ue;$++,ne++,le++)ne===ue&&(ne=0),le===ue&&(le=0),ae[$]=G(Z[$],Z[ne],Z[le]);q.push(ae),ve=ve.concat(ae)}let Ne;if(m===0)Ne=jt.triangulateShape(V,I);else{let K=[],te=[];for(let Z=0;Z<m;Z++){let $=Z/m,ue=p*Math.cos($*Math.PI/2),ne=g*Math.sin($*Math.PI/2)+_;for(let le=0,we=V.length;le<we;le++){let Le=W(V[le],ee[le],ne);ie(Le.x,Le.y,-ue),$===0&&K.push(Le)}for(let le=0,we=H;le<we;le++){let Le=I[le];ae=q[le];let E=[];for(let x=0,O=Le.length;x<O;x++){let Y=W(Le[x],ae[x],ne);ie(Y.x,Y.y,-ue),$===0&&E.push(Y)}$===0&&te.push(E)}}Ne=jt.triangulateShape(K,te)}let Ae=Ne.length,Oe=g+_;for(let K=0;K<re;K++){let te=d?W(y[K],ve[K],Oe):y[K];v?(C.copy(R.normals[0]).multiplyScalar(te.x),T.copy(R.binormals[0]).multiplyScalar(te.y),L.copy(b[0]).add(C).add(T),ie(L.x,L.y,L.z)):ie(te.x,te.y,0)}for(let K=1;K<=h;K++)for(let te=0;te<re;te++){let Z=d?W(y[te],ve[te],Oe):y[te];v?(C.copy(R.normals[K]).multiplyScalar(Z.x),T.copy(R.binormals[K]).multiplyScalar(Z.y),L.copy(b[K]).add(C).add(T),ie(L.x,L.y,L.z)):ie(Z.x,Z.y,u/h*K)}for(let K=m-1;K>=0;K--){let te=K/m,Z=p*Math.cos(te*Math.PI/2),$=g*Math.sin(te*Math.PI/2)+_;for(let ue=0,ne=V.length;ue<ne;ue++){let le=W(V[ue],ee[ue],$);ie(le.x,le.y,u+Z)}for(let ue=0,ne=I.length;ue<ne;ue++){let le=I[ue];ae=q[ue];for(let we=0,Le=le.length;we<Le;we++){let E=W(le[we],ae[we],$);v?ie(E.x,E.y+b[h-1].y,b[h-1].x+Z):ie(E.x,E.y,u+Z)}}}N(),F();function N(){let K=s.length/3;if(d){let te=0,Z=re*te;for(let $=0;$<Ae;$++){let ue=Ne[$];he(ue[2]+Z,ue[1]+Z,ue[0]+Z)}te=h+m*2,Z=re*te;for(let $=0;$<Ae;$++){let ue=Ne[$];he(ue[0]+Z,ue[1]+Z,ue[2]+Z)}}else{for(let te=0;te<Ae;te++){let Z=Ne[te];he(Z[2],Z[1],Z[0])}for(let te=0;te<Ae;te++){let Z=Ne[te];he(Z[0]+re*h,Z[1]+re*h,Z[2]+re*h)}}n.addGroup(K,s.length/3-K,0)}function F(){let K=s.length/3,te=0;X(V,te),te+=V.length;for(let Z=0,$=I.length;Z<$;Z++){let ue=I[Z];X(ue,te),te+=ue.length}n.addGroup(K,s.length/3-K,1)}function X(K,te){let Z=K.length;for(;--Z>=0;){let $=Z,ue=Z-1;ue<0&&(ue=K.length-1);for(let ne=0,le=h+m*2;ne<le;ne++){let we=re*ne,Le=re*(ne+1),E=te+$+we,x=te+ue+we,O=te+ue+Le,Y=te+$+Le;xe(E,x,O,Y)}}}function ie(K,te,Z){c.push(K),c.push(te),c.push(Z)}function he(K,te,Z){Te(K),Te(te),Te(Z);let $=s.length/3,ue=w.generateTopUV(n,s,$-3,$-2,$-1);A(ue[0]),A(ue[1]),A(ue[2])}function xe(K,te,Z,$){Te(K),Te(te),Te($),Te(te),Te(Z),Te($);let ue=s.length/3,ne=w.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);A(ne[0]),A(ne[1]),A(ne[3]),A(ne[1]),A(ne[2]),A(ne[3])}function Te(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function A(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xr[s.type]().fromJSON(s)),new i(n,e.options)}},Vd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,c),new ge(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-u),new ge(d,1-g),new ge(_,1-f)]:[new ge(a,1-c),new ge(h,1-u),new ge(p,1-g),new ge(m,1-f)]}};function Gd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let w=f*d-o;for(let b=0;b<l;b++){let v=b*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let b=w+l*f,v=w+l*(f+1),R=w+1+l*(f+1),T=w+1+l*f;p.push(b,v,T),p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mt=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let w=[],b=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-b),w.push(l++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let b=h[f][w+1],v=h[f][w],R=h[f+1][w],T=h[f+1][w+1];(f!==0||o>0)&&p.push(b,v,T),(f!==n-1||c<Math.PI)&&p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bn=class i extends yt{constructor(e=new Os(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new ge,h=new P,u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),w(),f()}function m(b){h=e.getPointAt(b/t,h);let v=o.normals[b],R=o.binormals[b];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,L=Math.sin(C),M=-Math.cos(C);c.x=M*v.x+L*R.x,c.y=M*v.y+L*R.y,c.z=M*v.z+L*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let R=(s+1)*(b-1)+(v-1),T=(s+1)*b+(v-1),C=(s+1)*b+v,L=(s+1)*(b-1)+v;g.push(R,T,L),g.push(T,C,L)}}function w(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)l.x=b/t,l.y=v/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var mt=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yr=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zr=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jr=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:za,endingEnd:za}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ka:r=e,a=2*t-n;break;case Ha:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ka:o=e,c=2*n-t;break;case Ha:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let R=0;R!==a;++R)r[R]=f*o[h+R]+w*o[l+R]+b*o[c+R]+v*o[u+R];return r}},$r=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Kr=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case Ir:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Wd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vt.prototype.ValueTypeName="";Vt.prototype.TimeBufferType=Float32Array;Vt.prototype.ValueBufferType=Float32Array;Vt.prototype.DefaultInterpolation=Ur;var Vn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=vs;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="color";var jr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="number";var eo=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gs=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=vs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="vector";var no=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ah=new no,io=class{constructor(e){this.manager=e!==void 0?e:Ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Xs=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ba=new ft,Lc=new P,Dc=new P,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fi=class extends Rs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=class extends Ya{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Za}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var so=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xl="\\[\\]\\.:\\/",Xd=new RegExp("["+xl+"]","g"),vl="[^"+xl+"]",qd="[^"+xl.replace("\\.","")+"]",Yd=/((?:WC+[\/:])*)/.source.replace("WC",vl),Zd=/(WCOD+)?/.source.replace("WCOD",qd),Jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),$d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Kd=new RegExp("^"+Yd+Zd+Jd+$d+"$"),Qd=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xd,"")}static parseTrackName(e){let t=Kd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Ja;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G0=new Float32Array(1);function yl(i,e,t,n){let s=jd(n);switch(t){case al:return i*e;case cl:return i*e/s.components*s.byteLength;case Mo:return i*e/s.components*s.byteLength;case hl:return i*e*2/s.components*s.byteLength;case So:return i*e*2/s.components*s.byteLength;case ll:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case bo:return i*e*4/s.components*s.byteLength;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(i,8)*Math.max(e,8)/2;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(i){switch(i){case sn:case il:return{byteLength:1,components:1};case Ki:case sl:case Qi:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case Xn:case xo:case cn:return{byteLength:4,components:1};case rl:case ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Kh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:of,alphatest_fragment:af,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:Ef,color_vertex:Tf,common:wf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Cf,displacementmap_vertex:If,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Uf,envmap_fragment:Nf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Of,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Jf,envmap_vertex:zf,fog_vertex:kf,fog_pars_vertex:Hf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Yf,lights_pars_begin:Zf,lights_toon_fragment:$f,lights_toon_pars_fragment:Kf,lights_phong_fragment:Qf,lights_phong_pars_fragment:jf,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Ip,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:$p,transmission_pars_fragment:Kp,uv_pars_fragment:Qp,uv_pars_vertex:jp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:om,cube_frag:am,depth_vert:lm,depth_frag:cm,distanceRGBA_vert:hm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:wm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Im,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Um,sprite_frag:Nm},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},hn={basic:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Tt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Tt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Tt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Tt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Tt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Tt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Tt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Tt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Tt([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Tt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hn.physical={uniforms:Tt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Qo={r:0,b:0,g:0},xi=new en,Fm=new ft;function Om(i,e,t,n,s,r,o){let a=new qe(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,R=g(b);R===null?f(a,c):R&&R.isColor&&(f(R,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,v){let R=g(v);R&&(R.isCubeTexture||R.mapping===Ys)?(h===void 0&&(h=new We(new kn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:_i(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(xi)),h.material.toneMapped=je.getTransfer(R.colorSpace)!==it,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new We(new ui(2,2),new tn({name:"BackgroundMaterial",uniforms:_i(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=je.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,v){b.getRGB(Qo,gl(i)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m,dispose:w}}function Bm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,I,U,z,H){let V=!1,W=u(z,U,I);r!==W&&(r=W,l(r.object)),V=p(y,z,U,H),V&&g(y,z,U,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(y,I,U,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,I,U){let z=U.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let V=H[I.id];V===void 0&&(V={},H[I.id]=V);let W=V[z];return W===void 0&&(W=d(c()),V[z]=W),W}function d(y){let I=[],U=[],z=[];for(let H=0;H<t;H++)I[H]=0,U[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,I,U,z){let H=r.attributes,V=I.attributes,W=0,re=U.getAttributes();for(let G in re)if(re[G].location>=0){let q=H[G],ae=V[G];if(ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(y,I,U,z){let H={},V=I.attributes,W=0,re=U.getAttributes();for(let G in re)if(re[G].location>=0){let q=V[G];q===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));let ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),H[G]=ae,W++}r.attributes=H,r.attributesNum=W,r.index=z}function _(){let y=r.newAttributes;for(let I=0,U=y.length;I<U;I++)y[I]=0}function m(y){f(y,0)}function f(y,I){let U=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;U[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),H[y]!==I&&(i.vertexAttribDivisor(y,I),H[y]=I)}function w(){let y=r.newAttributes,I=r.enabledAttributes;for(let U=0,z=I.length;U<z;U++)I[U]!==y[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function b(y,I,U,z,H,V,W){W===!0?i.vertexAttribIPointer(y,I,U,H,V):i.vertexAttribPointer(y,I,U,z,H,V)}function v(y,I,U,z){_();let H=z.attributes,V=U.getAttributes(),W=I.defaultAttributeValues;for(let re in V){let G=V[re];if(G.location>=0){let ee=H[re];if(ee===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){let q=ee.normalized,ae=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;let Ne=ve.buffer,Ae=ve.type,Oe=ve.bytesPerElement,N=Ae===i.INT||Ae===i.UNSIGNED_INT||ee.gpuType===xo;if(ee.isInterleavedBufferAttribute){let F=ee.data,X=F.stride,ie=ee.offset;if(F.isInstancedInterleavedBuffer){for(let he=0;he<G.locationSize;he++)f(G.location+he,F.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<G.locationSize;he++)m(G.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let he=0;he<G.locationSize;he++)b(G.location+he,ae/G.locationSize,Ae,q,X*Oe,(ie+ae/G.locationSize*he)*Oe,N)}else{if(ee.isInstancedBufferAttribute){for(let F=0;F<G.locationSize;F++)f(G.location+F,ee.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let F=0;F<G.locationSize;F++)m(G.location+F);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let F=0;F<G.locationSize;F++)b(G.location+F,ae/G.locationSize,Ae,q,ae*Oe,ae/G.locationSize*F*Oe,N)}}else if(W!==void 0){let q=W[re];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(G.location,q);break;case 3:i.vertexAttrib3fv(G.location,q);break;case 4:i.vertexAttrib4fv(G.location,q);break;default:i.vertexAttrib1fv(G.location,q)}}}}w()}function R(){L();for(let y in n){let I=n[y];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let U in I){let z=I[U];for(let H in z)h(z[H].object),delete z[H];delete I[U]}delete n[y.id]}function C(y){for(let I in n){let U=n[I];if(U[y.id]===void 0)continue;let z=U[y.id];for(let H in z)h(z[H].object),delete z[H];delete U[y.id]}}function L(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function zm(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function km(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Yt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Hm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new on,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,b=w*4,v=f.clippingState||null;c.value=v,v=h(g,d,b,p);for(let R=0;R!==b;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vm(i){let e=new WeakMap;function t(o,a){return a===mo?o.mapping=pi:a===go&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mo||a===go)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new zr(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,Rh=[.125,.215,.35,.446,.526,.582],Mi=20,Ml=new fi,Ch=new qe,Sl=null,bl=0,El=0,Tl=!1,yi=(1+Math.sqrt(5))/2,ts=1/yi,Ih=[new P(-yi,ts,0),new P(yi,ts,0),new P(-ts,0,yi),new P(ts,0,yi),new P(0,yi,-ts),new P(0,yi,ts),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Gm=new P,ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Gm}=r;Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,bl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Qi,format:Yt,colorSpace:ri,depthBuffer:!1},s=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s,r){let c=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new ai({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new We(new kn,_),f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(Ch),f=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let R=this._cubeSize;jo(s,v*R,b>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ih[(s-r-1)%Ih.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new We(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let f=[],w=0;for(let C=0;C<Mi;++C){let L=C/_,M=Math.exp(-L*L/2);f.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let v=this._sizeLods[s],R=3*v*(s>b-ns?s-b+ns:0),T=4*(this._cubeSize-v);jo(t,R,T,3*v,2*v),c.setRenderTarget(t),c.render(u,Ml)}};function Wm(i){let e=[],t=[],n=[],s=i,r=i-ns+1+Rh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ns?c=Rh[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,L=T>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(M,_*g*T),b.set(d,m*g*T);let y=[T,T,T,T,T,T];v.set(y,f*g*T)}let R=new yt;R.setAttribute("position",new zt(w,_)),R.setAttribute("uv",new zt(b,m)),R.setAttribute("faceIndex",new zt(v,f)),e.push(R),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(i,e,t){let n=new an(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xm(i,e,t){let n=new Float32Array(Mi),s=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Lh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Dh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function qm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===mo||c===go,h=c===pi||c===mi;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ta(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ta(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ym(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let b=0,v=w.length;b<v;b+=3){let R=w[b+0],T=w[b+1],C=w[b+2];d.push(R,T,T,C,C,R)}}else if(g!==void 0){let w=g.array;_=g.version;for(let b=0,v=w.length/3-1;b<v;b+=3){let R=b+0,T=b+1,C=b+2;d.push(R,T,T,C,C,R)}}else return;let m=new(ml(d)?As:ws)(d,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jm(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $m(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*R*4*u),C=new bs(T,v,R,u);C.type=cn,C.needsUpdate=!0;let L=b*4;for(let y=0;y<u;y++){let I=m[y],U=f[y],z=w[y],H=v*R*4*y;for(let V=0;V<I.count;V++){let W=V*L;p===!0&&(s.fromBufferAttribute(I,V),T[H+W+0]=s.x,T[H+W+1]=s.y,T[H+W+2]=s.z,T[H+W+3]=0),g===!0&&(s.fromBufferAttribute(U,V),T[H+W+4]=s.x,T[H+W+5]=s.y,T[H+W+6]=s.z,T[H+W+7]=0),_===!0&&(s.fromBufferAttribute(z,V),T[H+W+8]=s.x,T[H+W+9]=s.y,T[H+W+10]=s.z,T[H+W+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ge(v,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Qh=new It,Uh=new Ls(1,1),jh=new bs,eu=new Or,tu=new Cs,Nh=[],Fh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),zh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),xt(t,n)}}function sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),xt(t,n)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),xt(t,n)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=dl,r=Uh):r=Qh,t.setTexture2D(e||r,s)}function mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||eu,s)}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tu,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jh,s)}function xg(i){switch(i){case 5126:return jm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(i,e){i.uniform1fv(this.addr,e)}function yg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Mg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Sg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function bg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Eg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wg(i,e){i.uniform1iv(this.addr,e)}function Ag(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Ig(i,e){i.uniform1uiv(this.addr,e)}function Pg(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Dg(i,e){i.uniform4uiv(this.addr,e)}function Ug(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qh,r[o])}function Ng(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||eu,r[o])}function Fg(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tu,r[o])}function Og(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jh,r[o])}function Bg(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var Al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}},Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}},Cl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function kh(i,e){i.seq.push(e),i.map[e.id]=e}function zg(i,e,t){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),o=wl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){kh(t,l===void 0?new Al(a,i,e):new Rl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Cl(a),kh(t,u)),t=u}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kg=37297,Hg=0;function Vg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vh=new Xe;function Gg(i){je._getMatrix(Vh,je.workingColorSpace,i);let e=`mat3( ${Vh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(e),a)}else return r}function Wg(i,e){let t=Gg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case sh:t="Cineon";break;case po:t="ACESFilmic";break;case oh:t="AgX";break;case ah:t="Neutral";break;case rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ea=new P;function qg(){je.getLuminanceCoefficients(ea);let i=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Zg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function js(i){return i!==""}function Wh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(i){return i.replace($g,Qg)}var Kg=new Map;function Qg(i,e){let t=Ze[e];if(t===void 0){let n=Kg.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(jg,e0)}function e0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function t0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function n0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function r0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=t0(t),l=n0(t),h=i0(t),u=s0(t),d=r0(t),p=Yg(t),g=Zg(r),_=s.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`)):(m=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Il(o),o=Wh(o,t),o=Xh(o,t),a=Il(a),a=Wh(a,t),a=Xh(a,t),o=qh(o),a=qh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=w+m+o,v=w+f+a,R=Hh(s,s.VERTEX_SHADER,b),T=Hh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(R)||"",H=s.getShaderInfoLog(T)||"",V=U.trim(),W=z.trim(),re=H.trim(),G=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{let q=Gh(s,R,"vertex"),ae=Gh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+q+`
`+ae)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||re==="")&&(ee=!1);ee&&(I.diagnostics={runnable:G,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:re,prefix:f}})}s.deleteShader(R),s.deleteShader(T),L=new is(s,_),M=Jg(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,kg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}var a0=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ll(e),t.set(e,n)),n}},Ll=class{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}};function l0(i,e,t,n,s,r,o){let a=new Ts,c=new Pl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,I,U,z){let H=U.fog,V=z.geometry,W=M.isMeshStandardMaterial?U.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),G=re&&re.mapping===Ys?re.image.height:null,ee=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=q!==void 0?q.length:0,ve=0;V.morphAttributes.position!==void 0&&(ve=1),V.morphAttributes.normal!==void 0&&(ve=2),V.morphAttributes.color!==void 0&&(ve=3);let Ne,Ae,Oe,N;if(ee){let nt=hn[ee];Ne=nt.vertexShader,Ae=nt.fragmentShader}else Ne=M.vertexShader,Ae=M.fragmentShader,c.update(M),Oe=c.getVertexShaderID(M),N=c.getFragmentShaderID(M);let F=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ie=z.isInstancedMesh===!0,he=z.isBatchedMesh===!0,xe=!!M.map,Te=!!M.matcap,A=!!re,K=!!M.aoMap,te=!!M.lightMap,Z=!!M.bumpMap,$=!!M.normalMap,ue=!!M.displacementMap,ne=!!M.emissiveMap,le=!!M.metalnessMap,we=!!M.roughnessMap,Le=M.anisotropy>0,E=M.clearcoat>0,x=M.dispersion>0,O=M.iridescence>0,Y=M.sheen>0,se=M.transmission>0,Q=Le&&!!M.anisotropyMap,Me=E&&!!M.clearcoatMap,ce=E&&!!M.clearcoatNormalMap,Re=E&&!!M.clearcoatRoughnessMap,Ce=O&&!!M.iridescenceMap,de=O&&!!M.iridescenceThicknessMap,Se=Y&&!!M.sheenColorMap,ze=Y&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,be=!!M.specularColorMap,Ye=!!M.specularIntensityMap,D=se&&!!M.transmissionMap,me=se&&!!M.thicknessMap,_e=!!M.gradientMap,Pe=!!M.alphaMap,fe=M.alphaTest>0,oe=!!M.alphaHash,Ue=!!M.extensions,Ge=Tn;M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let ot={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:Ae,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:he,batchingColor:he&&z._colorsTexture!==null,instancing:ie,instancingColor:ie&&z.instanceColor!==null,instancingMorph:ie&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ri,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:Te,envMap:A,envMapMode:A&&re.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:te,bumpMap:Z,normalMap:$,displacementMap:d&&ue,emissiveMap:ne,normalMapObjectSpace:$&&M.normalMapType===uh,normalMapTangentSpace:$&&M.normalMapType===ul,metalnessMap:le,roughnessMap:we,anisotropy:Le,anisotropyMap:Q,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Re,dispersion:x,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:de,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:be,specularIntensityMap:Ye,transmission:se,transmissionMap:D,thicknessMap:me,gradientMap:_e,opaque:M.transparent===!1&&M.blending===ii&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:oe,combine:M.combine,mapUv:xe&&_(M.map.channel),aoMapUv:K&&_(M.aoMap.channel),lightMapUv:te&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:$&&_(M.normalMap.channel),displacementMapUv:ue&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:le&&_(M.metalnessMap.channel),roughnessMapUv:we&&_(M.roughnessMap.channel),anisotropyMapUv:Q&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Fe&&_(M.specularMap.channel),specularColorMapUv:be&&_(M.specularColorMap.channel),specularIntensityMapUv:Ye&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:me&&_(M.thicknessMap.channel),alphaMapUv:Pe&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(xe||Pe),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function f(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(w(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let y=g[M.type],I;if(y){let U=hn[y];I=Sh.clone(U.uniforms)}else I=M.uniforms;return I}function R(M,y){let I;for(let U=0,z=h.length;U<z;U++){let H=h[U];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new o0(i,y,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function c0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function h0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||h0),n.length>1&&n.sort(d||Zh),s.length>1&&s.sort(d||Zh)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function u0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jh,i.set(n,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function d0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function f0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var p0=0;function m0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g0(i){let e=new d0,t=f0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new ft,o=new ft;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,b=0,v=0,R=0,T=0,C=0;l.sort(m0);for(let M=0,y=l.length;M<y;M++){let I=l[M],U=I.color,z=I.intensity,H=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*z,u+=U.g*z,d+=U.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],z);C++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,G=t.get(I);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;let re=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,re.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=re.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,v++}_++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let re=I.shadow,G=t.get(I);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=C,n.version=p0++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let b=l[f];if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function $h(i){let e=new g0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $h(i),e.set(s,[a])):r>=o.length?(a=new $h(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
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
}`;function y0(i,e,t){let n=new qi,s=new ge,r=new ge,o=new ct,a=new Yr({depthPacking:hh}),c=new Zr,l={},h=t.maxTextureSize,u={[xn]:Pt,[Pt]:xn,[qt]:qt},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:x0,fragmentShader:v0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let f=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(En),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=f!==ln&&this.type===ln,H=f===ln&&this.type!==ln;for(let V=0,W=T.length;V<W;V++){let re=T[V],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||z===!0||H===!0){let ae=this.type!==ln?{minFilter:Ut,magFilter:Ut}:{};G.map!==null&&G.map.dispose(),G.map=new an(s.x,s.y,ae),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let q=G.getViewportCount();for(let ae=0;ae<q;ae++){let ve=G.getViewport(ae);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),U.viewport(o),G.updateMatrices(re,ae),n=G.getFrustum(),v(C,L,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===ln&&w(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,I)};function w(T,C){let L=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,p,_,null)}function b(T,C,L,M){let y=null,I=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=y.uuid,z=C.uuid,H=l[U];H===void 0&&(H={},l[U]=H);let V=H[z];V===void 0&&(V=y.clone(),H[z]=V,C.addEventListener("dispose",R)),y=V}if(y.visible=C.visible,y.wireframe=C.wireframe,M===ln?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=L}return y}function v(T,C,L,M,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ln)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let z=e.update(T),H=T.material;if(Array.isArray(H)){let V=z.groups;for(let W=0,re=V.length;W<re;W++){let G=V[W],ee=H[G.materialIndex];if(ee&&ee.visible){let q=b(T,ee,M,y);T.onBeforeShadow(i,T,C,L,z,q,G),i.renderBufferDirect(L,null,z,q,T,G),T.onAfterShadow(i,T,C,L,z,q,G)}}}else if(H.visible){let V=b(T,H,M,y);T.onBeforeShadow(i,T,C,L,z,V,null),i.renderBufferDirect(L,null,z,V,T,null),T.onAfterShadow(i,T,C,L,z,V,null)}}let U=T.children;for(let z=0,H=U.length;z<H;z++)v(U[z],C,L,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(let L in l){let M=l[L],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var M0={[oo]:ao,[lo]:uo,[co]:fo,[si]:ho,[ao]:oo,[uo]:lo,[fo]:co,[ho]:si};function S0(i,e){function t(){let D=!1,me=new ct,_e=null,Pe=new ct(0,0,0,0);return{setMask:function(fe){_e!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){D=fe},setClear:function(fe,oe,Ue,Ge,ot){ot===!0&&(fe*=Ge,oe*=Ge,Ue*=Ge),me.set(fe,oe,Ue,Ge),Pe.equals(me)===!1&&(i.clearColor(fe,oe,Ue,Ge),Pe.copy(me))},reset:function(){D=!1,_e=null,Pe.set(-1,0,0,0)}}}function n(){let D=!1,me=!1,_e=null,Pe=null,fe=null;return{setReversed:function(oe){if(me!==oe){let Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),me=oe;let Ge=fe;fe=null,this.setClear(Ge)}},getReversed:function(){return me},setTest:function(oe){oe?F(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(oe){_e!==oe&&!D&&(i.depthMask(oe),_e=oe)},setFunc:function(oe){if(me&&(oe=M0[oe]),Pe!==oe){switch(oe){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case si:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=oe}},setLocked:function(oe){D=oe},setClear:function(oe){fe!==oe&&(me&&(oe=1-oe),i.clearDepth(oe),fe=oe)},reset:function(){D=!1,_e=null,Pe=null,fe=null,me=!1}}}function s(){let D=!1,me=null,_e=null,Pe=null,fe=null,oe=null,Ue=null,Ge=null,ot=null;return{setTest:function(nt){D||(nt?F(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(nt){me!==nt&&!D&&(i.stencilMask(nt),me=nt)},setFunc:function(nt,un,rn){(_e!==nt||Pe!==un||fe!==rn)&&(i.stencilFunc(nt,un,rn),_e=nt,Pe=un,fe=rn)},setOp:function(nt,un,rn){(oe!==nt||Ue!==un||Ge!==rn)&&(i.stencilOp(nt,un,rn),oe=nt,Ue=un,Ge=rn)},setLocked:function(nt){D=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){D=!1,me=null,_e=null,Pe=null,fe=null,oe=null,Ue=null,Ge=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,v=null,R=null,T=null,C=new qe(0,0,0),L=0,M=!1,y=null,I=null,U=null,z=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=re>=2);let ee=null,q={},ae=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ne=new ct().fromArray(ae),Ae=new ct().fromArray(ve);function Oe(D,me,_e,Pe){let fe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(D,oe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<_e;Ue++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(me+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return oe}let N={};N[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(i.DEPTH_TEST),o.setFunc(si),Z(!1),$($a),F(i.CULL_FACE),K(En);function F(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function X(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ie(D,me){return u[D]!==me?(i.bindFramebuffer(D,me),u[D]=me,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function he(D,me){let _e=p,Pe=!1;if(D){_e=d.get(me),_e===void 0&&(_e=[],d.set(me,_e));let fe=D.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ue=fe.length;oe<Ue;oe++)_e[oe]=i.COLOR_ATTACHMENT0+oe;_e.length=fe.length,Pe=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(_e)}function xe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Te={[Bn]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};Te[zc]=i.MIN,Te[kc]=i.MAX;let A={[Hc]:i.ZERO,[Vc]:i.ONE,[Gc]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Lr]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[$c]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[Qc]:i.CONSTANT_ALPHA,[jc]:i.ONE_MINUS_CONSTANT_ALPHA};function K(D,me,_e,Pe,fe,oe,Ue,Ge,ot,nt){if(D===En){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(F(i.BLEND),_=!0),D!==Fc){if(D!==m||nt!==M){if((f!==Bn||v!==Bn)&&(i.blendEquation(i.FUNC_ADD),f=Bn,v=Bn),nt)switch(D){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,b=null,R=null,T=null,C.set(0,0,0),L=0,m=D,M=nt}return}fe=fe||me,oe=oe||_e,Ue=Ue||Pe,(me!==f||fe!==v)&&(i.blendEquationSeparate(Te[me],Te[fe]),f=me,v=fe),(_e!==w||Pe!==b||oe!==R||Ue!==T)&&(i.blendFuncSeparate(A[_e],A[Pe],A[oe],A[Ue]),w=_e,b=Pe,R=oe,T=Ue),(Ge.equals(C)===!1||ot!==L)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ot),C.copy(Ge),L=ot),m=D,M=!1}function te(D,me){D.side===qt?X(i.CULL_FACE):F(i.CULL_FACE);let _e=D.side===Pt;me&&(_e=!_e),Z(_e),D.blending===ii&&D.transparent===!1?K(En):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function $(D){D!==Uc?(F(i.CULL_FACE),D!==I&&(D===$a?i.cullFace(i.BACK):D===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),I=D}function ue(D){D!==U&&(W&&i.lineWidth(D),U=D)}function ne(D,me,_e){D?(F(i.POLYGON_OFFSET_FILL),(z!==me||H!==_e)&&(i.polygonOffset(me,_e),z=me,H=_e)):X(i.POLYGON_OFFSET_FILL)}function le(D){D?F(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function we(D){D===void 0&&(D=i.TEXTURE0+V-1),ee!==D&&(i.activeTexture(D),ee=D)}function Le(D,me,_e){_e===void 0&&(ee===null?_e=i.TEXTURE0+V-1:_e=ee);let Pe=q[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},q[_e]=Pe),(Pe.type!==D||Pe.texture!==me)&&(ee!==_e&&(i.activeTexture(_e),ee=_e),i.bindTexture(D,me||N[D]),Pe.type=D,Pe.texture=me)}function E(){let D=q[ee];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){Ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ze(D){Ae.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ae.copy(D))}function Fe(D,me){let _e=l.get(me);_e===void 0&&(_e=new WeakMap,l.set(me,_e));let Pe=_e.get(D);Pe===void 0&&(Pe=i.getUniformBlockIndex(me,D.name),_e.set(D,Pe))}function be(D,me){let Pe=l.get(me).get(D);c.get(me)!==Pe&&(i.uniformBlockBinding(me,Pe,D.__bindingPointIndex),c.set(me,Pe))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,q={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,v=null,R=null,T=null,C=new qe(0,0,0),L=0,M=!1,y=null,I=null,U=null,z=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:X,bindFramebuffer:ie,drawBuffers:he,useProgram:xe,setBlending:K,setMaterial:te,setFlipSided:Z,setCullFace:$,setLineWidth:ue,setPolygonOffset:ne,setScissorTest:le,activeTexture:we,bindTexture:Le,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ce,texImage3D:de,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:ce,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Me,scissor:Se,viewport:ze,reset:Ye}}function b0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):Ss("canvas")}function _(E,x,O){let Y=1,se=Le(E);if((se.width>O||se.height>O)&&(Y=O/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(Y*se.width),Me=Math.floor(Y*se.height);u===void 0&&(u=g(Q,Me));let ce=x?g(Q,Me):u;return ce.width=Q,ce.height=Me,ce.getContext("2d").drawImage(E,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Me+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,O,Y,se=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=x;if(x===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let Me=se?ys:je.getTransfer(Y);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=Me===it?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(E,x){let O;return E?x===null||x===Xn||x===ji?O=i.DEPTH24_STENCIL8:x===cn?O=i.DEPTH32F_STENCIL8:x===Ki&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===ji?O=i.DEPTH_COMPONENT24:x===cn?O=i.DEPTH_COMPONENT32F:x===Ki&&(O=i.DEPTH_COMPONENT16),O}function R(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ut&&E.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function T(E){let x=E.target;x.removeEventListener("dispose",T),L(x),x.isVideoTexture&&h.delete(x)}function C(E){let x=E.target;x.removeEventListener("dispose",C),y(x)}function L(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,Y=d.get(O);if(Y){let se=Y[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(E),Object.keys(Y).length===0&&d.delete(O)}n.remove(E)}function M(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let O=E.source,Y=d.get(O);delete Y[x.__cacheKey],o.memory.textures--}function y(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let se=0;se<x.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let Y=0,se=O.length;Y<se;Y++){let Q=n.get(O[Y]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(E)}let I=0;function U(){I=0}function z(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function H(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){let O=n.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function W(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){N(O,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function re(E,x){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){N(O,E,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function G(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){F(O,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let ee={[ki]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},q={[Ut]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},ae={[dh]:i.NEVER,[xh]:i.ALWAYS,[fh]:i.LESS,[dl]:i.LEQUAL,[ph]:i.EQUAL,[_h]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function ve(E,x){if(x.type===cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ct||x.magFilter===_o||x.magFilter===Zs||x.magFilter===Wn||x.minFilter===Ct||x.minFilter===_o||x.minFilter===Zs||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ee[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,q[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,q[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==Zs&&x.minFilter!==Wn||x.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ne(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",T));let Y=x.source,se=d.get(Y);se===void 0&&(se={},d.set(Y,se));let Q=H(x);if(Q!==E.__cacheKey){se[Q]===void 0&&(se[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[Q].usedTimes++;let Me=se[E.__cacheKey];Me!==void 0&&(se[E.__cacheKey].usedTimes--,Me.usedTimes===0&&M(x)),E.__cacheKey=Q,E.__webglTexture=se[Q].texture}return O}function Ae(E,x,O){return Math.floor(Math.floor(E/O)/x)}function Oe(E,x,O,Y){let Q=E.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,Y,x.data);else{Q.sort((de,Se)=>de.start-Se.start);let Me=0;for(let de=1;de<Q.length;de++){let Se=Q[Me],ze=Q[de],Fe=Se.start+Se.count,be=Ae(ze.start,x.width,4),Ye=Ae(Se.start,x.width,4);ze.start<=Fe+1&&be===Ye&&Ae(ze.start+ze.count-1,x.width,4)===be?Se.count=Math.max(Se.count,ze.start+ze.count-Se.start):(++Me,Q[Me]=ze)}Q.length=Me+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let de=0,Se=Q.length;de<Se;de++){let ze=Q[de],Fe=Math.floor(ze.start/4),be=Math.ceil(ze.count/4),Ye=Fe%x.width,D=Math.floor(Fe/x.width),me=be,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ye,D,me,_e,O,Y,x.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function N(E,x,O){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let se=Ne(E,x),Q=x.source;t.bindTexture(Y,E.__webglTexture,i.TEXTURE0+O);let Me=n.get(Q);if(Q.version!==Me.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let ce=je.getPrimaries(je.workingColorSpace),Re=x.colorSpace===wn?null:je.getPrimaries(x.colorSpace),Ce=x.colorSpace===wn||ce===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let de=_(x.image,!1,s.maxTextureSize);de=we(x,de);let Se=r.convert(x.format,x.colorSpace),ze=r.convert(x.type),Fe=b(x.internalFormat,Se,ze,x.colorSpace,x.isVideoTexture);ve(Y,x);let be,Ye=x.mipmaps,D=x.isVideoTexture!==!0,me=Me.__version===void 0||se===!0,_e=Q.dataReady,Pe=R(x,de);if(x.isDepthTexture)Fe=v(x.format===es,x.type),me&&(D?t.texStorage2D(i.TEXTURE_2D,1,Fe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Fe,de.width,de.height,0,Se,ze,null));else if(x.isDataTexture)if(Ye.length>0){D&&me&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,Ye[0].width,Ye[0].height);for(let fe=0,oe=Ye.length;fe<oe;fe++)be=Ye[fe],D?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,ze,be.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,Se,ze,be.data);x.generateMipmaps=!1}else D?(me&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,de.width,de.height),_e&&Oe(x,de,Se,ze)):t.texImage2D(i.TEXTURE_2D,0,Fe,de.width,de.height,0,Se,ze,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Fe,Ye[0].width,Ye[0].height,de.depth);for(let fe=0,oe=Ye.length;fe<oe;fe++)if(be=Ye[fe],x.format!==Yt)if(Se!==null)if(D){if(_e)if(x.layerUpdates.size>0){let Ue=yl(be.width,be.height,x.format,x.type);for(let Ge of x.layerUpdates){let ot=be.data.subarray(Ge*Ue/be.data.BYTES_PER_ELEMENT,(Ge+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ge,be.width,be.height,1,Se,ot)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,de.depth,Se,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,be.width,be.height,de.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,de.depth,Se,ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,be.width,be.height,de.depth,0,Se,ze,be.data)}else{D&&me&&t.texStorage2D(i.TEXTURE_2D,Pe,Fe,Ye[0].width,Ye[0].height);for(let fe=0,oe=Ye.length;fe<oe;fe++)be=Ye[fe],x.format!==Yt?Se!==null?D?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,ze,be.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,Se,ze,be.data)}else if(x.isDataArrayTexture)if(D){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Fe,de.width,de.height,de.depth),_e)if(x.layerUpdates.size>0){let fe=yl(de.width,de.height,x.format,x.type);for(let oe of x.layerUpdates){let Ue=de.data.subarray(oe*fe/de.data.BYTES_PER_ELEMENT,(oe+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,Se,ze,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,ze,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,Se,ze,de.data);else if(x.isData3DTexture)D?(me&&t.texStorage3D(i.TEXTURE_3D,Pe,Fe,de.width,de.height,de.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,ze,de.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,Se,ze,de.data);else if(x.isFramebufferTexture){if(me)if(D)t.texStorage2D(i.TEXTURE_2D,Pe,Fe,de.width,de.height);else{let fe=de.width,oe=de.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Fe,fe,oe,0,Se,ze,null),fe>>=1,oe>>=1}}else if(Ye.length>0){if(D&&me){let fe=Le(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Fe,fe.width,fe.height)}for(let fe=0,oe=Ye.length;fe<oe;fe++)be=Ye[fe],D?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se,ze,be):t.texImage2D(i.TEXTURE_2D,fe,Fe,Se,ze,be);x.generateMipmaps=!1}else if(D){if(me){let fe=Le(de);t.texStorage2D(i.TEXTURE_2D,Pe,Fe,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ze,de)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Se,ze,de);m(x)&&f(Y),Me.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function F(E,x,O){if(x.image.length!==6)return;let Y=Ne(E,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let Q=n.get(se);if(se.version!==Q.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);let Me=je.getPrimaries(je.workingColorSpace),ce=x.colorSpace===wn?null:je.getPrimaries(x.colorSpace),Re=x.colorSpace===wn||Me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!Ce&&!de?Se[oe]=_(x.image[oe],!0,s.maxCubemapSize):Se[oe]=de?x.image[oe].image:x.image[oe],Se[oe]=we(x,Se[oe]);let ze=Se[0],Fe=r.convert(x.format,x.colorSpace),be=r.convert(x.type),Ye=b(x.internalFormat,Fe,be,x.colorSpace),D=x.isVideoTexture!==!0,me=Q.__version===void 0||Y===!0,_e=se.dataReady,Pe=R(x,ze);ve(i.TEXTURE_CUBE_MAP,x);let fe;if(Ce){D&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ye,ze.width,ze.height);for(let oe=0;oe<6;oe++){fe=Se[oe].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){let Ge=fe[Ue];x.format!==Yt?Fe!==null?D?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ge.width,Ge.height,Fe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,Ye,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ge.width,Ge.height,Fe,be,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,Ye,Ge.width,Ge.height,0,Fe,be,Ge.data)}}}else{if(fe=x.mipmaps,D&&me){fe.length>0&&Pe++;let oe=Le(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,Fe,be,Se[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,Se[oe].width,Se[oe].height,0,Fe,be,Se[oe].data);for(let Ue=0;Ue<fe.length;Ue++){let ot=fe[Ue].image[oe].image;D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,ot.width,ot.height,Fe,be,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,Ye,ot.width,ot.height,0,Fe,be,ot.data)}}else{D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,be,Se[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,Fe,be,Se[oe]);for(let Ue=0;Ue<fe.length;Ue++){let Ge=fe[Ue];D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Fe,be,Ge.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,Ye,Fe,be,Ge.image[oe])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),Q.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function X(E,x,O,Y,se,Q){let Me=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),Re=b(O.internalFormat,Me,ce,O.colorSpace),Ce=n.get(x),de=n.get(O);if(de.__renderTarget=x,!Ce.__hasExternalTextures){let Se=Math.max(1,x.width>>Q),ze=Math.max(1,x.height>>Q);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,Re,Se,ze,x.depth,0,Me,ce,null):t.texImage2D(se,Q,Re,Se,ze,0,Me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ne(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,de.__webglTexture,0,ue(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,de.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let Y=x.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,Q=v(x.stencilBuffer,se),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=ue(x);ne(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{let Y=x.textures;for(let se=0;se<Y.length;se++){let Q=Y[se],Me=r.convert(Q.format,Q.colorSpace),ce=r.convert(Q.type),Re=b(Q.internalFormat,Me,ce,Q.colorSpace),Ce=ue(x);O&&ne(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Re,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let se=Y.__webglTexture,Q=ue(x);if(x.depthTexture.format===Hi)ne(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(x.depthTexture.format===es)ne(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=Y}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let Y=E.texture.mipmaps;Y&&Y.length>0?he(x.__webglFramebuffer[0],E):he(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ie(x.__webglDepthbuffer[Y],E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Q)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ie(x.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(E,x,O){let Y=n.get(E);x!==void 0&&X(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&xe(E)}function A(E){let x=E.texture,O=n.get(E),Y=n.get(x);E.addEventListener("dispose",C);let se=E.textures,Q=E.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),Q){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let Re=0;Re<x.mipmaps.length;Re++)O.__webglFramebuffer[ce][Re]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ce=0,Re=se.length;ce<Re;ce++){let Ce=n.get(se[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ne(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){let Re=se[ce];O.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);let Ce=r.convert(Re.format,Re.colorSpace),de=r.convert(Re.type),Se=b(Re.internalFormat,Ce,de,Re.colorSpace,E.isXRRenderTarget===!0),ze=ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ve(i.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)X(O.__webglFramebuffer[ce][Re],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re);else X(O.__webglFramebuffer[ce],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Re=se.length;ce<Re;ce++){let Ce=se[ce],de=n.get(Ce),Se=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,de.__webglTexture),ve(Se,Ce),X(O.__webglFramebuffer,E,Ce,i.COLOR_ATTACHMENT0+ce,Se,0),m(Ce)&&f(Se)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),ve(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)X(O.__webglFramebuffer[Re],E,x,i.COLOR_ATTACHMENT0,ce,Re);else X(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ce,0);m(x)&&f(ce),t.unbindTexture()}E.depthBuffer&&xe(E)}function K(E){let x=E.textures;for(let O=0,Y=x.length;O<Y;O++){let se=x[O];if(m(se)){let Q=w(E),Me=n.get(se).__webglTexture;t.bindTexture(Q,Me),f(Q),t.unbindTexture()}}}let te=[],Z=[];function $(E){if(E.samples>0){if(ne(E)===!1){let x=E.textures,O=E.width,Y=E.height,se=i.COLOR_BUFFER_BIT,Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),ce=x.length>1;if(ce)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Re=E.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let de=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,se,i.NEAREST),c===!0&&(te.length=0,Z.length=0,te.push(i.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(te.push(Q),Z.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let de=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function ne(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function we(E,x){let O=E.colorSpace,Y=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ri&&O!==wn&&(je.getTransfer(O)===it?(Y!==Yt||se!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Le(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Te,this.setupRenderTarget=A,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ne}function E0(i,e){function t(n,s=wn){let r,o=je.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===sl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ll)return i.RGB;if(n===Yt)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===hl)return i.RG;if(n===So)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===Js||n===$s||n===Ks||n===Qs)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===To||n===wo||n===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Co||n===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Co)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Io)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===$o||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:T0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends vn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Dl,f={},w=t.getContextAttributes(),b=null,v=null,R=[],T=[],C=new ge,L=null,M=new Dt;M.viewport=new ct;let y=new Dt;y.viewport=new ct;let I=[M,y],U=new so,z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let F=R[N];return F===void 0&&(F=new Xi,R[N]=F),F.getTargetRaySpace()},this.getControllerGrip=function(N){let F=R[N];return F===void 0&&(F=new Xi,R[N]=F),F.getGripSpace()},this.getHand=function(N){let F=R[N];return F===void 0&&(F=new Xi,R[N]=F),F.getHandSpace()};function V(N){let F=T.indexOf(N.inputSource);if(F===-1)return;let X=R[F];X!==void 0&&(X.update(N.inputSource,N.frame,l||o),X.dispatchEvent({type:N.type,data:N.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",re);for(let N=0;N<R.length;N++){let F=T[N];F!==null&&(T[N]=null,R[N].disconnect(F))}z=null,H=null,m.reset();for(let N in f)delete f[N];e.setRenderTarget(b),p=null,d=null,u=null,s=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",re),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ie=null,he=null;w.depth&&(he=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=w.stencil?es:Hi,ie=w.stencil?ji:Xn);let xe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new an(d.textureWidth,d.textureHeight,{format:Yt,type:sn,depthTexture:new Ls(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let X={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new an(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(N){for(let F=0;F<N.removed.length;F++){let X=N.removed[F],ie=T.indexOf(X);ie>=0&&(T[ie]=null,R[ie].disconnect(X))}for(let F=0;F<N.added.length;F++){let X=N.added[F],ie=T.indexOf(X);if(ie===-1){for(let xe=0;xe<R.length;xe++)if(xe>=T.length){T.push(X),ie=xe;break}else if(T[xe]===null){T[xe]=X,ie=xe;break}if(ie===-1)break}let he=R[ie];he&&he.connect(X)}}let G=new P,ee=new P;function q(N,F,X){G.setFromMatrixPosition(F.matrixWorld),ee.setFromMatrixPosition(X.matrixWorld);let ie=G.distanceTo(ee),he=F.projectionMatrix.elements,xe=X.projectionMatrix.elements,Te=he[14]/(he[10]-1),A=he[14]/(he[10]+1),K=(he[9]+1)/he[5],te=(he[9]-1)/he[5],Z=(he[8]-1)/he[0],$=(xe[8]+1)/xe[0],ue=Te*Z,ne=Te*$,le=ie/(-Z+$),we=le*-Z;if(F.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(le),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),he[10]===-1)N.projectionMatrix.copy(F.projectionMatrix),N.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Le=Te+le,E=A+le,x=ue-we,O=ne+(ie-we),Y=K*A/E*Le,se=te*A/E*Le;N.projectionMatrix.makePerspective(x,O,Y,se,Le,E),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ae(N,F){F===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(F.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let F=N.near,X=N.far;m.texture!==null&&(m.depthNear>0&&(F=m.depthNear),m.depthFar>0&&(X=m.depthFar)),U.near=y.near=M.near=F,U.far=y.far=M.far=X,(z!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,H=U.far),U.layers.mask=N.layers.mask|6,M.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let ie=N.parent,he=U.cameras;ae(U,ie);for(let xe=0;xe<he.length;xe++)ae(he[xe],ie);he.length===2?q(U,M,y):U.projectionMatrix.copy(M.projectionMatrix),ve(N,U,ie)};function ve(N,F,X){X===null?N.matrix.copy(F.matrixWorld):(N.matrix.copy(X.matrixWorld),N.matrix.invert(),N.matrix.multiply(F.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(F.projectionMatrix),N.projectionMatrixInverse.copy(F.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Vi*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(N){return f[N]};let Ne=null;function Ae(N,F){if(h=F.getViewerPose(l||o),g=F,h!==null){let X=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ie=!1;X.length!==U.cameras.length&&(U.cameras.length=0,ie=!0);for(let A=0;A<X.length;A++){let K=X[A],te=null;if(p!==null)te=p.getViewport(K);else{let $=u.getViewSubImage(d,K);te=$.viewport,A===0&&(e.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(v))}let Z=I[A];Z===void 0&&(Z=new Dt,Z.layers.enable(A),Z.viewport=new ct,I[A]=Z),Z.matrix.fromArray(K.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(K.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(te.x,te.y,te.width,te.height),A===0&&(U.matrix.copy(Z.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ie===!0&&U.cameras.push(Z)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let A=u.getDepthInformation(X[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<X.length;A++){let K=X[A].camera;if(K){let te=f[K];te||(te=new Ds,f[K]=te);let Z=u.getCameraImage(K);te.sourceTexture=Z}}}}for(let X=0;X<R.length;X++){let ie=T[X],he=R[X];ie!==null&&he!==void 0&&he.update(ie,F,l||o)}Ne&&Ne(N,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}let Oe=new Kh;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(N){Ne=N},this.dispose=function(){}}},vi=new en,A0=new ft;function R0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),b=w.envMap,v=w.envMapRotation;b&&(m.envMap.value=b,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(vi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){let v=b.program;n.uniformBlockBinding(w,v)}function l(w,b){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));let R=b.program;n.updateUBOMapping(w,R);let T=e.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){let b=u();w.__bindingPointIndex=b;let v=i.createBuffer(),R=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=s[w.id],v=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=v.length;T<C;T++){let L=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=L.length;M<y;M++){let I=L[M];if(p(I,T,M,R)===!0){let U=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],H=0;for(let V=0;V<z.length;V++){let W=z[V],re=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,b,v,R){let T=w.value,C=b+"_"+v;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let L=R[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(w){let b=w.uniforms,v=0,R=16;for(let C=0,L=b.length;C<L;C++){let M=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,I=M.length;y<I;y++){let U=M[y],z=Array.isArray(U.value)?U.value:[U.value];for(let H=0,V=z.length;H<V;H++){let W=z[H],re=_(W),G=v%R,ee=G%re.boundary,q=G+ee;v+=ee,q!==0&&R-q<re.storage&&(v+=R-q),U.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=re.storage}}}let T=v%R;return T>0&&(v+=R-T),w.__size=v,w.__cache={},this}function _(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var na=class{constructor(e={}){let{canvas:t=vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,R=!1;this._outputColorSpace=Rt;let T=0,C=0,L=null,M=-1,y=null,I=new ct,U=new ct,z=null,H=new qe(0),V=0,W=t.width,re=t.height,G=1,ee=null,q=null,ae=new ct(0,0,W,re),ve=new ct(0,0,W,re),Ne=!1,Ae=new qi,Oe=!1,N=!1,F=new ft,X=new P,ie=new ct,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Te(){return L===null?G:1}let A=n;function K(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),A===null){let B="webgl2";if(A=K(B,S),A===null)throw K(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,Z,$,ue,ne,le,we,Le,E,x,O,Y,se,Q,Me,ce,Re,Ce,de,Se,ze,Fe,be,Ye;function D(){te=new Ym(A),te.init(),Fe=new E0(A,te),Z=new km(A,te,e,Fe),$=new S0(A,te),Z.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ue=new $m(A),ne=new c0,le=new b0(A,te,$,ne,Z,Fe,ue),we=new Vm(v),Le=new qm(v),E=new tf(A),be=new Bm(A,E),x=new Zm(A,E,ue,be),O=new Qm(A,x,E,ue),de=new Km(A,Z,le),ce=new Hm(ne),Y=new l0(v,we,Le,te,Z,be,ce),se=new R0(v,ne),Q=new u0,Me=new _0(te),Ce=new Om(v,we,Le,$,O,p,c),Re=new y0(v,O,Z),Ye=new C0(A,ue,Z,$),Se=new zm(A,te,ue),ze=new Jm(A,te,ue),ue.programs=Y.programs,v.capabilities=Z,v.extensions=te,v.properties=ne,v.renderLists=Q,v.shadowMap=Re,v.state=$,v.info=ue}D();let me=new Ul(v,A);this.xr=me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(W,re,!1))},this.getSize=function(S){return S.set(W,re)},this.setSize=function(S,B,J=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,re=B,t.width=Math.floor(S*G),t.height=Math.floor(B*G),J===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(W*G,re*G).floor()},this.setDrawingBufferSize=function(S,B,J){W=S,re=B,G=J,t.width=Math.floor(S*J),t.height=Math.floor(B*J),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ae)},this.setViewport=function(S,B,J,j){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,B,J,j),$.viewport(I.copy(ae).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(ve)},this.setScissor=function(S,B,J,j){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,B,J,j),$.scissor(U.copy(ve).multiplyScalar(G).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){$.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){q=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,J=!0){let j=0;if(S){let k=!1;if(L!==null){let pe=L.texture.format;k=pe===bo||pe===So||pe===Mo}if(k){let pe=L.texture.type,Ee=pe===sn||pe===Xn||pe===Ki||pe===ji||pe===vo||pe===yo,De=Ce.getClearColor(),Ie=Ce.getClearAlpha(),He=De.r,Ve=De.g,Be=De.b;Ee?(g[0]=He,g[1]=Ve,g[2]=Be,g[3]=Ie,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=Be,_[3]=Ie,A.clearBufferiv(A.COLOR,0,_))}else j|=A.COLOR_BUFFER_BIT}B&&(j|=A.DEPTH_BUFFER_BIT),J&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ce.dispose(),Q.dispose(),Me.dispose(),ne.dispose(),we.dispose(),Le.dispose(),O.dispose(),be.dispose(),Ye.dispose(),Y.dispose(),me.dispose(),me.removeEventListener("sessionstart",rn),me.removeEventListener("sessionend",ec),$n.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=ue.autoReset,B=Re.enabled,J=Re.autoUpdate,j=Re.needsUpdate,k=Re.type;D(),ue.autoReset=S,Re.enabled=B,Re.autoUpdate=J,Re.needsUpdate=j,Re.type=k}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){let B=S.target;B.removeEventListener("dispose",oe),Ue(B)}function Ue(S){Ge(S),ne.remove(S)}function Ge(S){let B=ne.get(S).programs;B!==void 0&&(B.forEach(function(J){Y.releaseProgram(J)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,J,j,k,pe){B===null&&(B=he);let Ee=k.isMesh&&k.matrixWorld.determinant()<0,De=Cu(S,B,J,j,k);$.setMaterial(j,Ee);let Ie=J.index,He=1;if(j.wireframe===!0){if(Ie=x.getWireframeAttribute(J),Ie===void 0)return;He=2}let Ve=J.drawRange,Be=J.attributes.position,$e=Ve.start*He,st=(Ve.start+Ve.count)*He;pe!==null&&($e=Math.max($e,pe.start*He),st=Math.min(st,(pe.start+pe.count)*He)),Ie!==null?($e=Math.max($e,0),st=Math.min(st,Ie.count)):Be!=null&&($e=Math.max($e,0),st=Math.min(st,Be.count));let pt=st-$e;if(pt<0||pt===1/0)return;be.setup(k,j,De,J,Ie);let at,rt=Se;if(Ie!==null&&(at=E.get(Ie),rt=ze,rt.setIndex(at)),k.isMesh)j.wireframe===!0?($.setLineWidth(j.wireframeLinewidth*Te()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(k.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),$.setLineWidth(ke*Te()),k.isLineSegments?rt.setMode(A.LINES):k.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else k.isPoints?rt.setMode(A.POINTS):k.isSprite&&rt.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ke=k._multiDrawStarts,ht=k._multiDrawCounts,et=k._multiDrawCount,Nt=Ie?E.get(Ie).bytesPerElement:1,Ti=ne.get(j).currentProgram.getUniforms();for(let Ft=0;Ft<et;Ft++)Ti.setValue(A,"_gl_DrawID",Ft),rt.render(ke[Ft]/Nt,ht[Ft])}else if(k.isInstancedMesh)rt.renderInstances($e,pt,k.count);else if(J.isInstancedBufferGeometry){let ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ht=Math.min(J.instanceCount,ke);rt.renderInstances($e,pt,ht)}else rt.render($e,pt)};function ot(S,B,J){S.transparent===!0&&S.side===qt&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,or(S,B,J),S.side=xn,S.needsUpdate=!0,or(S,B,J),S.side=qt):or(S,B,J)}this.compile=function(S,B,J=null){J===null&&(J=S),f=Me.get(J),f.init(B),b.push(f),J.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),S!==J&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let j=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let De=pe[Ee];ot(De,J,k),j.add(De)}else ot(pe,J,k),j.add(pe)}),f=b.pop(),j},this.compileAsync=function(S,B,J=null){let j=this.compile(S,B,J);return new Promise(k=>{function pe(){if(j.forEach(function(Ee){ne.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){k(S);return}setTimeout(pe,10)}te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let nt=null;function un(S){nt&&nt(S)}function rn(){$n.stop()}function ec(){$n.start()}let $n=new Kh;$n.setAnimationLoop(un),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){nt=S,me.setAnimationLoop(S),S===null?$n.stop():$n.start()},me.addEventListener("sessionstart",rn),me.addEventListener("sessionend",ec),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,L),f=Me.get(S,b.length),f.init(B),b.push(f),F.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ae.setFromProjectionMatrix(F,Qt,B.reversedDepth),N=this.localClippingEnabled,Oe=ce.init(this.clippingPlanes,N),m=Q.get(S,w.length),m.init(),w.push(m),me.enabled===!0&&me.isPresenting===!0){let pe=v.xr.getDepthSensingMesh();pe!==null&&ua(pe,B,-1/0,v.sortObjects)}ua(S,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,q),xe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,xe&&Ce.addToRenderList(m,S),this.info.render.frame++,Oe===!0&&ce.beginShadows();let J=f.state.shadowsArray;Re.render(J,S,B),Oe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,k=m.transmissive;if(f.setupLights(),B.isArrayCamera){let pe=B.cameras;if(k.length>0)for(let Ee=0,De=pe.length;Ee<De;Ee++){let Ie=pe[Ee];nc(j,k,S,Ie)}xe&&Ce.render(S);for(let Ee=0,De=pe.length;Ee<De;Ee++){let Ie=pe[Ee];tc(m,S,Ie,Ie.viewport)}}else k.length>0&&nc(j,k,S,B),xe&&Ce.render(S),tc(m,S,B);L!==null&&C===0&&(le.updateMultisampleRenderTarget(L),le.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,B),be.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],Oe===!0&&ce.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ua(S,B,J,j){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ae.intersectsSprite(S)){j&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(F);let Ee=O.update(S),De=S.material;De.visible&&m.push(S,Ee,De,J,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ae.intersectsObject(S))){let Ee=O.update(S),De=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ie.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ie.copy(Ee.boundingSphere.center)),ie.applyMatrix4(S.matrixWorld).applyMatrix4(F)),Array.isArray(De)){let Ie=Ee.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){let Be=Ie[He],$e=De[Be.materialIndex];$e&&$e.visible&&m.push(S,Ee,$e,J,ie.z,Be)}}else De.visible&&m.push(S,Ee,De,J,ie.z,null)}}let pe=S.children;for(let Ee=0,De=pe.length;Ee<De;Ee++)ua(pe[Ee],B,J,j)}function tc(S,B,J,j){let k=S.opaque,pe=S.transmissive,Ee=S.transparent;f.setupLightsView(J),Oe===!0&&ce.setGlobalState(v.clippingPlanes,J),j&&$.viewport(I.copy(j)),k.length>0&&rr(k,B,J),pe.length>0&&rr(pe,B,J),Ee.length>0&&rr(Ee,B,J),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function nc(S,B,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new an(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Qi:sn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let pe=f.state.transmissionRenderTarget[j.id],Ee=j.viewport||I;pe.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);let De=v.getRenderTarget(),Ie=v.getActiveCubeFace(),He=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(H),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),xe&&Ce.render(J);let Ve=v.toneMapping;v.toneMapping=Tn;let Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),Oe===!0&&ce.setGlobalState(v.clippingPlanes,j),rr(S,J,j),le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let st=0,pt=B.length;st<pt;st++){let at=B[st],rt=at.object,ke=at.geometry,ht=at.material,et=at.group;if(ht.side===qt&&rt.layers.test(j.layers)){let Nt=ht.side;ht.side=Pt,ht.needsUpdate=!0,ic(rt,J,j,ke,ht,et),ht.side=Nt,ht.needsUpdate=!0,$e=!0}}$e===!0&&(le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe))}v.setRenderTarget(De,Ie,He),v.setClearColor(H,V),Be!==void 0&&(j.viewport=Be),v.toneMapping=Ve}function rr(S,B,J){let j=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pe=S.length;k<pe;k++){let Ee=S[k],De=Ee.object,Ie=Ee.geometry,He=Ee.group,Ve=Ee.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),De.layers.test(J.layers)&&ic(De,B,J,Ie,Ve,He)}}function ic(S,B,J,j,k,pe){S.onBeforeRender(v,B,J,j,k,pe),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(v,B,J,j,S,pe),k.transparent===!0&&k.side===qt&&k.forceSinglePass===!1?(k.side=Pt,k.needsUpdate=!0,v.renderBufferDirect(J,B,j,k,S,pe),k.side=xn,k.needsUpdate=!0,v.renderBufferDirect(J,B,j,k,S,pe),k.side=qt):v.renderBufferDirect(J,B,j,k,S,pe),S.onAfterRender(v,B,J,j,k,pe)}function or(S,B,J){B.isScene!==!0&&(B=he);let j=ne.get(S),k=f.state.lights,pe=f.state.shadowsArray,Ee=k.state.version,De=Y.getParameters(S,k.state,pe,B,J),Ie=Y.getProgramCacheKey(De),He=j.programs;j.environment=S.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(S.isMeshStandardMaterial?Le:we).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",oe),He=new Map,j.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===Ee)return rc(S,De),Ve}else De.uniforms=Y.getUniforms(S),S.onBeforeCompile(De,v),Ve=Y.acquireProgram(De,Ie),He.set(Ie,Ve),j.uniforms=De.uniforms;let Be=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=ce.uniform),rc(S,De),j.needsLights=Pu(S),j.lightsStateVersion=Ee,j.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function sc(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=is.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function rc(S,B){let J=ne.get(S);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Cu(S,B,J,j,k){B.isScene!==!0&&(B=he),le.resetTextureUnits();let pe=B.fog,Ee=j.isMeshStandardMaterial?B.environment:null,De=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ri,Ie=(j.isMeshStandardMaterial?Le:we).get(j.envMap||Ee),He=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!J.morphAttributes.position,$e=!!J.morphAttributes.normal,st=!!J.morphAttributes.color,pt=Tn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=v.toneMapping);let at=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rt=at!==void 0?at.length:0,ke=ne.get(j),ht=f.state.lights;if(Oe===!0&&(N===!0||S!==y)){let wt=S===y&&j.id===M;ce.setState(j,S,wt)}let et=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ht.state.version||ke.outputColorSpace!==De||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Ie||j.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ce.numPlanes||ke.numIntersection!==ce.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ve||ke.morphTargets!==Be||ke.morphNormals!==$e||ke.morphColors!==st||ke.toneMapping!==pt||ke.morphTargetsCount!==rt)&&(et=!0):(et=!0,ke.__version=j.version);let Nt=ke.currentProgram;et===!0&&(Nt=or(j,B,k));let Ti=!1,Ft=!1,ls=!1,ut=Nt.getUniforms(),Gt=ke.uniforms;if($.useProgram(Nt.program)&&(Ti=!0,Ft=!0,ls=!0),j.id!==M&&(M=j.id,Ft=!0),Ti||y!==S){$.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(A,"projectionMatrix",S.projectionMatrix),ut.setValue(A,"viewMatrix",S.matrixWorldInverse);let Lt=ut.map.cameraPosition;Lt!==void 0&&Lt.setValue(A,X.setFromMatrixPosition(S.matrixWorld)),Z.logarithmicDepthBuffer&&ut.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ft=!0,ls=!0)}if(k.isSkinnedMesh){ut.setOptional(A,k,"bindMatrix"),ut.setOptional(A,k,"bindMatrixInverse");let wt=k.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(A,"boneTexture",wt.boneTexture,le))}k.isBatchedMesh&&(ut.setOptional(A,k,"batchingTexture"),ut.setValue(A,"batchingTexture",k._matricesTexture,le),ut.setOptional(A,k,"batchingIdTexture"),ut.setValue(A,"batchingIdTexture",k._indirectTexture,le),ut.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(A,"batchingColorTexture",k._colorsTexture,le));let Wt=J.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&de.update(k,J,Nt),(Ft||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,ut.setValue(A,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Gt.envMap.value=Ie,Gt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Gt.envMapIntensity.value=B.environmentIntensity),Ft&&(ut.setValue(A,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Iu(Gt,ls),pe&&j.fog===!0&&se.refreshFogUniforms(Gt,pe),se.refreshMaterialUniforms(Gt,j,G,re,f.state.transmissionRenderTarget[S.id]),is.upload(A,sc(ke),Gt,le)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(is.upload(A,sc(ke),Gt,le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(A,"center",k.center),ut.setValue(A,"modelViewMatrix",k.modelViewMatrix),ut.setValue(A,"normalMatrix",k.normalMatrix),ut.setValue(A,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let wt=j.uniformsGroups;for(let Lt=0,da=wt.length;Lt<da;Lt++){let Kn=wt[Lt];Ye.update(Kn,Nt),Ye.bind(Kn,Nt)}}return Nt}function Iu(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,B,J){let j=ne.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ne.get(S.texture).__webglTexture=B,ne.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let J=ne.get(S);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0};let Lu=A.createFramebuffer();this.setRenderTarget=function(S,B=0,J=0){L=S,T=B,C=J;let j=!0,k=null,pe=!1,Ee=!1;if(S){let Ie=ne.get(S);if(Ie.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(A.FRAMEBUFFER,null),j=!1;else if(Ie.__webglFramebuffer===void 0)le.setupRenderTarget(S);else if(Ie.__hasExternalTextures)le.rebindTextures(S,ne.get(S.texture).__webglTexture,ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Be=S.depthTexture;if(Ie.__boundDepthTexture!==Be){if(Be!==null&&ne.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(S)}}let He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);let Ve=ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?k=Ve[B][J]:k=Ve[B],pe=!0):S.samples>0&&le.useMultisampledRTT(S)===!1?k=ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[J]:k=Ve,I.copy(S.viewport),U.copy(S.scissor),z=S.scissorTest}else I.copy(ae).multiplyScalar(G).floor(),U.copy(ve).multiplyScalar(G).floor(),z=Ne;if(J!==0&&(k=Lu),$.bindFramebuffer(A.FRAMEBUFFER,k)&&j&&$.drawBuffers(S,k),$.viewport(I),$.scissor(U),$.setScissorTest(z),pe){let Ie=ne.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,J)}else if(Ee){let Ie=B;for(let He=0;He<S.textures.length;He++){let Ve=ne.get(S.textures[He]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+He,Ve.__webglTexture,J,Ie)}}else if(S!==null&&J!==0){let Ie=ne.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ie.__webglTexture,J)}M=-1},this.readRenderTargetPixels=function(S,B,J,j,k,pe,Ee,De=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){$.bindFramebuffer(A.FRAMEBUFFER,Ie);try{let He=S.textures[De],Ve=He.format,Be=He.type;if(!Z.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-j&&J>=0&&J<=S.height-k&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+De),A.readPixels(B,J,j,k,Fe.convert(Ve),Fe.convert(Be),pe))}finally{let He=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(S,B,J,j,k,pe,Ee,De=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie)if(B>=0&&B<=S.width-j&&J>=0&&J<=S.height-k){$.bindFramebuffer(A.FRAMEBUFFER,Ie);let He=S.textures[De],Ve=He.format,Be=He.type;if(!Z.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.bufferData(A.PIXEL_PACK_BUFFER,pe.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+De),A.readPixels(B,J,j,k,Fe.convert(Ve),Fe.convert(Be),0);let st=L!==null?ne.get(L).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,st);let pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await yh(A,pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pe),A.deleteBuffer($e),A.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,J=0){let j=Math.pow(2,-J),k=Math.floor(S.image.width*j),pe=Math.floor(S.image.height*j),Ee=B!==null?B.x:0,De=B!==null?B.y:0;le.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Ee,De,k,pe),$.unbindTexture()};let Du=A.createFramebuffer(),Uu=A.createFramebuffer();this.copyTextureToTexture=function(S,B,J=null,j=null,k=0,pe=null){pe===null&&(k!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let Ee,De,Ie,He,Ve,Be,$e,st,pt,at=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(J!==null)Ee=J.max.x-J.min.x,De=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,Ve=J.min.y,Be=J.isBox3?J.min.z:0;else{let Wt=Math.pow(2,-k);Ee=Math.floor(at.width*Wt),De=Math.floor(at.height*Wt),S.isDataArrayTexture?Ie=at.depth:S.isData3DTexture?Ie=Math.floor(at.depth*Wt):Ie=1,He=0,Ve=0,Be=0}j!==null?($e=j.x,st=j.y,pt=j.z):($e=0,st=0,pt=0);let rt=Fe.convert(B.format),ke=Fe.convert(B.type),ht;B.isData3DTexture?(le.setTexture3D(B,0),ht=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(le.setTexture2DArray(B,0),ht=A.TEXTURE_2D_ARRAY):(le.setTexture2D(B,0),ht=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);let et=A.getParameter(A.UNPACK_ROW_LENGTH),Nt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ti=A.getParameter(A.UNPACK_SKIP_PIXELS),Ft=A.getParameter(A.UNPACK_SKIP_ROWS),ls=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,He),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Be);let ut=S.isDataArrayTexture||S.isData3DTexture,Gt=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let Wt=ne.get(S),wt=ne.get(B),Lt=ne.get(Wt.__renderTarget),da=ne.get(wt.__renderTarget);$.bindFramebuffer(A.READ_FRAMEBUFFER,Lt.__webglFramebuffer),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let Kn=0;Kn<Ie;Kn++)ut&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(S).__webglTexture,k,Be+Kn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(B).__webglTexture,pe,pt+Kn)),A.blitFramebuffer(He,Ve,Ee,De,$e,st,Ee,De,A.DEPTH_BUFFER_BIT,A.NEAREST);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||ne.has(S)){let Wt=ne.get(S),wt=ne.get(B);$.bindFramebuffer(A.READ_FRAMEBUFFER,Du),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,Uu);for(let Lt=0;Lt<Ie;Lt++)ut?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Wt.__webglTexture,k,Be+Lt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Wt.__webglTexture,k),Gt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.__webglTexture,pe,pt+Lt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,wt.__webglTexture,pe),k!==0?A.blitFramebuffer(He,Ve,Ee,De,$e,st,Ee,De,A.COLOR_BUFFER_BIT,A.NEAREST):Gt?A.copyTexSubImage3D(ht,pe,$e,st,pt+Lt,He,Ve,Ee,De):A.copyTexSubImage2D(ht,pe,$e,st,He,Ve,Ee,De);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Gt?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(ht,pe,$e,st,pt,Ee,De,Ie,rt,ke,at.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(ht,pe,$e,st,pt,Ee,De,Ie,rt,at.data):A.texSubImage3D(ht,pe,$e,st,pt,Ee,De,Ie,rt,ke,at):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pe,$e,st,Ee,De,rt,ke,at.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pe,$e,st,at.width,at.height,rt,at.data):A.texSubImage2D(A.TEXTURE_2D,pe,$e,st,Ee,De,rt,ke,at);A.pixelStorei(A.UNPACK_ROW_LENGTH,et),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ti),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ls),pe===0&&B.generateMipmaps&&A.generateMipmap(ht),$.unbindTexture()},this.initRenderTarget=function(S){ne.get(S).__webglFramebuffer===void 0&&le.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?le.setTextureCube(S,0):S.isData3DTexture?le.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?le.setTexture2DArray(S,0):le.setTexture2D(S,0),$.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,$.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};function nu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let w=0,b=a.length;w<b;w++){let v=a[w],R=i.attributes[v];c[v]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let T=i.morphAttributes[v];T&&(l[v]||(l[v]=[]),T.forEach((C,L)=>{let M=new C.array.constructor(C.count*C.itemSize);l[v][L]=new C.constructor(M,C.itemSize,C.normalized)}))}let p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let w=0;w<r;w++){let b=n?n.getX(w):w,v="";for(let R=0,T=a.length;R<T;R++){let C=a[R],L=i.getAttribute(C),M=L.itemSize;for(let y=0;y<M;y++)v+=`${~~(L[u[y]](b)*_+m)},`}if(v in t)h.push(t[v]);else{for(let R=0,T=a.length;R<T;R++){let C=a[R],L=i.getAttribute(C),M=i.morphAttributes[C],y=L.itemSize,I=c[C],U=l[C];for(let z=0;z<y;z++){let H=u[z],V=d[z];if(I[V](o,L[H](b)),M)for(let W=0,re=M.length;W<re;W++)U[W][V](o,M[W][H](b))}}t[v]=o,h.push(o),o++}}let f=i.clone();for(let w in i.attributes){let b=c[w];if(f.setAttribute(w,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),w in l)for(let v=0;v<l[w].length;v++){let R=l[w][v];f.morphAttributes[w][v]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return f.setIndex(h),f}var I0={current:{name:"A \xB7 Schlanker Vergleich",outer:8,inset:6,corner:10,bevel:5,depth:22},soft:{name:"B \xB7 Modelliertes Elfenbein",outer:11,inset:6,corner:23,bevel:5,depth:26},plush:{name:"C \xB7 Warmer Formguss",outer:13,inset:6,corner:27,bevel:5,depth:28}},P0=(i,e)=>[i-e,i+e,i%e?i-1:-1,i%e<e-1?i+1:-1].filter(t=>t>=0&&t<e*e);function Fl(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[t.values().next().value];t.delete(s[0]);for(let r=0;r<s.length;r++)for(let o of P0(s[r],e))t.delete(o)&&s.push(o);n.push(s)}return n}function Ol(i,e,t){let n=new Set(i),s=[],r=(a,c)=>a>=0&&a<e&&c>=0&&c<e&&n.has(c*e+a);for(let a of n){let c=a%e,l=a/e|0,h=c*t,u=l*t;r(c,l-1)||s.push([[h,u],[h+t,u]]),r(c+1,l)||s.push([[h+t,u],[h+t,u+t]]),r(c,l+1)||s.push([[h+t,u+t],[h,u+t]]),r(c-1,l)||s.push([[h,u+t],[h,u]])}let o=[];for(;s.length;){let a=s.shift(),c=a[0],l=a[1],h=c,u=[c];for(;l[0]!==c[0]||l[1]!==c[1];){u.push(l);let d=[];for(let p=0;p<s.length;p++)if(s[p][0][0]===l[0]&&s[p][0][1]===l[1]){let g=l[0]-h[0],_=l[1]-h[1],m=s[p][1][0]-l[0],f=s[p][1][1]-l[1],w=g*f-_*m,b=g*m+_*f;d.push({k:p,rank:w>0?0:b>0?1:w<0?2:3})}if(!d.length)throw Error("Open frame contour");d.sort((p,g)=>p.rank-g.rank),h=l,l=s.splice(d[0].k,1)[0][1]}u=u.filter((d,p)=>{let g=u[(p+u.length-1)%u.length],_=u[(p+1)%u.length];return!(g[0]===d[0]&&d[0]===_[0]||g[1]===d[1]&&d[1]===_[1])}),o.push(u.map(([d,p])=>new ge(d,-p)))}return o.sort((a,c)=>Math.abs(jt.area(c))-Math.abs(jt.area(a)))}function rs(i,e){let t=jt.area(i)>0?1:-1;return i.map((n,s)=>{let r=i[(s+i.length-1)%i.length],o=i[(s+1)%i.length],a=n.clone().sub(r).normalize(),c=o.clone().sub(n).normalize(),l=new ge(a.y,-a.x).add(new ge(c.y,-c.x)).multiplyScalar(t).normalize(),h=new ge(a.y,-a.x).multiplyScalar(t);return n.clone().add(l.multiplyScalar(e/Math.max(.25,l.dot(h))))})}function qn(i,e){let t=new nn;return i.forEach((n,s)=>{let r=i[(s+i.length-1)%i.length],o=i[(s+1)%i.length],a=Math.min(e,n.distanceTo(r)*.45,n.distanceTo(o)*.45),c=n.clone().add(r.clone().sub(n).normalize().multiplyScalar(a)),l=n.clone().add(o.clone().sub(n).normalize().multiplyScalar(a));s?t.lineTo(c.x,c.y):t.moveTo(c.x,c.y),t.quadraticCurveTo(n.x,n.y,l.x,l.y)}),t.closePath(),t}function iu(i,e,t,n){i.color.set("#ffffff"),i.onBeforeCompile=s=>{s.uniforms.ivoryPits={value:n},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
 `)},i.customProgramCacheKey=()=>`ivory-casting-${t}-${e.depth}-${e.bevel}-${n.length}`}function Bl({n:i,cells:e,water:t=[],lava:n=[],stones:s=[],style:r="soft",pitch:o=80}={}){let a=I0[r];if(!a)throw Error("Unknown ivory style");let c=new Set(e);if(!Number.isInteger(i)||i<1||!e.length||e.some(v=>!Number.isInteger(v)||v<0||v>=i*i))throw Error("Invalid frame cells");let l=[...t,...n,...s];if(new Set(l).size!==l.length||l.some(v=>!c.has(v)))throw Error("Invalid obstacle cells");let h=new Uint8Array(16384*4),u=375;for(let v=0;v<16384;v++){u=u*1664525+1013904223>>>0;let R=110+(u>>>24)*.16;h.set([R,R,R,255],v*4)}let d=new li(h,128,128);d.wrapS=d.wrapT=ki,d.magFilter=d.minFilter=Ct,d.needsUpdate=!0;let p=new Qe,g=[],_=[],m=new mt({color:r==="plush"?"#f3dcb3":"#f7e5c3",roughness:.88,bumpMap:d,bumpScale:r==="current"?.12:.65}),f=new mt({color:"#d4ad7d",roughness:.9,bumpMap:d,bumpScale:.45});if(r!=="current"){let v=l.map(R=>new ct(R%i*o+o/2,-(Math.floor(R/i)*o+o/2),o/2-a.inset,o/2-a.inset));iu(m,a,r,v),iu(f,a,r,v)}for(let v of Fl(e,i)){let R=new Set(v),T=Ol(v,i,o),C=[],L=qn(rs(T[0],a.outer),a.corner);for(let M of T.slice(1))L.holes.push(qn(rs(M,-a.outer),a.corner));for(let[M,y]of[["water",t],["lava",n]])for(let I of Fl(y.filter(U=>R.has(U)),i)){let U=Ol(I,i,o),z=qn(rs(U[0],-a.inset).reverse(),16);L.holes.push(z);for(let V of U.slice(1))C.push(qn(rs(V,a.inset),16));let H=qn(rs(U[0],-a.inset+a.bevel),16+a.bevel);for(let V of U.slice(1))H.holes.push(qn(rs(V,a.inset-a.bevel),16+a.bevel));g.push({type:M,cells:I,shape:H,rimShape:z,surfaceZ:-20})}for(let M of[L,...C]){let y=new Ht(M,{depth:a.depth,bevelEnabled:!0,bevelThickness:a.bevel,bevelSize:a.bevel,bevelSegments:16,curveSegments:24,steps:1});y.translate(0,0,-a.depth-a.bevel+3);let I=y.attributes.position,U=y.attributes.uv;for(let V=0;V<I.count;V++){let W=I.getX(V),re=I.getY(V),G=I.getZ(V),ee=r==="current"?0:Math.sin(W*.043+re*.017)*.55+Math.sin(re*.067-W*.023)*.38;I.setZ(V,G+ee),U.setXY(V,W/90,re/90)}y.deleteAttribute("normal");let z=nu(y,.001);y.dispose(),y=z,y.computeVertexNormals(),_.push(y);let H=new We(y,[m,f]);H.castShadow=H.receiveShadow=!0,p.add(H)}}let w=new Set(l),b=Fl(e.filter(v=>!w.has(v)),i).map(v=>{let R=Ol(v,i,o),T=qn(R[0],10);for(let C of R.slice(1))T.holes.push(qn(C,10));return T});return p.userData={style:r,pitch:o,walkable:!1,spec:{...a}},{group:p,openings:g,walkableShapes:b,spec:a,dispose(){_.forEach(v=>v.dispose()),m.dispose(),f.dispose(),d.dispose()}}}var er=new P;function Zt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;er.copy(e),er[n]=0,er.normalize();let l=.5*o/(o+a),h=1-er.angleTo(i)/c;return Math.sign(er[t])===1?h*l:a/(o+a)+l+l*(1-h)}var sa=class i extends kn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new P,l=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new P,m=.5/o;for(let f=0,w=0;f<u.length;f+=3,w+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*r,u[f+1]=h.y*Math.sign(c.y)+l.y*r,u[f+2]=h.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/g)){case 0:_.set(1,0,0),p[w+0]=Zt(_,l,"z","y",r,n),p[w+1]=1-Zt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[w+0]=1-Zt(_,l,"z","y",r,n),p[w+1]=1-Zt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[w+0]=1-Zt(_,l,"x","z",r,e),p[w+1]=Zt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[w+0]=1-Zt(_,l,"x","z",r,e),p[w+1]=1-Zt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[w+0]=1-Zt(_,l,"x","y",r,e),p[w+1]=1-Zt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[w+0]=Zt(_,l,"x","y",r,e),p[w+1]=1-Zt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var L0=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),D0={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function U0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new ci(t)}function ra(i,{seed:e=73}={}){let t=D0[i];if(!t)throw Error("Unknown tile "+i);let n=new Qe,s=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=(d,p={})=>new mt({color:d,roughness:.75,...p}),o=(d,p,g=0,_=0,m=0)=>{let f=new We(d,p);return f.position.set(g,_,m),f.castShadow=f.receiveShadow=!0,n.add(f),f},a=r(t.color,{bumpMap:U0(73,t.kind==="earth"?.65:.12),bumpScale:t.grain||.18,roughness:t.kind==="earth"?.95:.65}),c=t.height+3.5,l,h;if(t.kind==="earth"){let d=73.5,p=5,g=-d/2,_=d/2,m=new nn;m.moveTo(g+p,g),m.lineTo(_-p,g),m.quadraticCurveTo(_,g,_,g+p),m.lineTo(_,_-p),m.quadraticCurveTo(_,_,_-p,_),m.lineTo(g+p,_),m.quadraticCurveTo(g,_,g,_-p),m.lineTo(g,g+p),m.quadraticCurveTo(g,g,g+p,g),m.closePath(),l=new Ht(m,{depth:t.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),h=-1}else l=new sa(78.5,78.5,c,4,7.5),h=(t.height-3.5)/2;let u=o(l,a,0,0,h);if(u.userData.surface=!0,t.kind==="earth"){let d=[r("#c59b6b"),r("#98714c"),r("#dbb78a")];for(let p=0;p<t.pebbles;p++){let g=(s()-.5)*59,_=(s()-.5)*59,m=.8+s()*1.2,f=o(new Mt(1,9,6),d[p%3],g,_,t.height-.25);f.scale.set(m*1.6,m,m*.55),f.rotation.z=s()*6}for(let p=0;p<22;p++){let g=o(new Mt(1,8,6),a,(s()-.5)*62,(s()-.5)*62,t.height-.35),_=1+s()*1.5;g.scale.set(_*1.6,_,.5)}}else if(t.kind!=="reference"){let d=[r("#d3f471"),r("#b1e443"),r("#87bf24")],p=(g,_,m)=>{let f=new nn;return f.moveTo(-m,0),f.quadraticCurveTo(-m*.8,g*.6,_,g),f.quadraticCurveTo(m*1.1,g*.45,m,0),f.closePath(),new Ht(f,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let g=0;g<t.tufts;g++){let _=(s()-.5)*59,m=(s()-.5)*59;for(let f=0;f<3;f++){let w=t.bladeHeight*(.6+s()*.4),b=o(p(w,(f-1)*w*.4,t.kind==="grass"&&i==="grass-velvet"?1.6:1.1),d[f],_+(f-1)*1.8,m,t.height-.15);b.rotation.x=Math.PI/2,b.rotateOnWorldAxis(new P(0,0,1),s()*Math.PI*2)}}if(t.kind==="clover")for(let g=0;g<6;g++){let _=(s()-.5)*50,m=(s()-.5)*50;for(let f=0;f<3;f++){let w=f*Math.PI*2/3,b=o(new Mt(1,12,8),d[g%2],_+Math.cos(w)*2.3,m+Math.sin(w)*2.3,t.height+1.7);b.scale.set(3.3,2.6,.9),b.rotation.z=w}}a.emissive.set("#4c790c"),a.emissiveIntensity=.055}else{let d=r("#9fc53b");for(let p=0;p<4;p++){let g=p*Math.PI/2+.3,_=o(new Mt(1,12,8),d,21+Math.cos(g)*4,-20+Math.sin(g)*4,13.7);_.scale.set(4.4,2.6,.65),_.rotation.z=g}}return n.userData={variant:i,top:t.height,walkable:!0,footprint:L0},n}function zl(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var N0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function kl(i,{seed:e=73}={}){let t=N0[i];if(!t)throw Error("Unknown meadow "+i);let n=ra("grass-clover",{seed:e}),s=n.children.find(T=>T.userData.surface),r=new Qe;for(let T of[...n.children])T!==s&&r.add(T);zl(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new Mt(1,12,8),c=T=>new mt({color:T,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],h=[],u=(T,C,L,M,y)=>{let I=new We(T,C);return I.position.set(L,M,y),I.castShadow=I.receiveShadow=!0,n.add(I),I};function d(T,C,L,M,y=3.3,I=2.6){let U=u(a,l[1],T,C,L);return U.scale.set(y,I,.85),U.rotation.z=M,U}for(let T=0;T<t.clover;T++){let C=(o()-.5)*52,L=(o()-.5)*52;for(let M=0;M<3;M++){let y=M*Math.PI*2/3+o()*.12;d(C+Math.cos(y)*2.3,L+Math.sin(y)*2.3,19.7,y)}}function p(T,C,L){for(let M=0;M<3;M++){let y=new nn,I=(M-1)*L*.35;y.moveTo(-1,0),y.quadraticCurveTo(-.8,L*.65,I,L),y.quadraticCurveTo(1,L*.45,1,0),y.closePath();let U=new Ht(y,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),z=u(U,l[M],T+(M-1)*1.6,C,17.8);z.rotation.x=Math.PI/2,z.rotateOnWorldAxis(new P(0,0,1),.6)}}for(let T=0;T<t.tufts;T++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=c("#fff3c4"),_=c("#f6b7a0"),m=c("#efb52e"),f=c("#709e29"),w=c("#edbd43"),b=c("#63502a"),v=new mt({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let T=0;T<(t.flowers||0);T++){let C=T?-16:16,L=T?-14:12,M=T?24:25.5,y=u(new Hn(.6,.85,M-18,8),f,C,L,(18+M)/2);y.rotation.x=Math.PI/2;for(let U=0;U<5;U++){let z=U*Math.PI*2/5,H=u(a,T?_:g,C+Math.cos(z)*3,L+Math.sin(z)*3,M);H.scale.set(3.2,1.8,.8),H.rotation.z=z}if(u(a,m,C,L,M+.7).scale.set(1.9,1.9,1.2),d(C-2,L,20.5,-.5,3.2,1.4),t.insects)for(let U=0;U<t.insects;U++){let z=new Qe;n.add(z);let H=new We(a,w);H.scale.set(.85,1.3,.8),z.add(H);let V=new We(a,b);V.position.y=1.2,V.scale.setScalar(.6),z.add(V);let W=[];for(let re of[-1,1]){let G=new We(a,v);G.position.set(re*1,0,.5),G.scale.set(1.8,.75,.25),G.rotation.z=re*.35,z.add(G),W.push(G)}h.push({insect:z,wings:W,x:C,y:L,phase:U*3.14,radius:8+U*2,z:M+5+U})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function R(T){for(let C of h){let L=T*.85+C.phase;C.insect.position.set(C.x+Math.cos(L)*C.radius,C.y+Math.sin(L)*C.radius*.65,C.z+Math.sin(T*1.8+C.phase)*1.2),C.insect.rotation.z=L,C.wings.forEach((M,y)=>M.rotation.y=Math.sin(T*28)*(y?1:-1)*.45)}}return R(0),{group:n,update:R,dispose(){zl(n)}}}var su={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function Hl(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new mt({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=su[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new ge(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var ru={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function ou({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=ru[t]||ru.front,s=n.radius,r=n.x,o=n.z,a=new Qe,c=new Qe;a.add(c),c.position.set(n.fx,0,n.fz);let l=new Mt(1,20,14),h=[],u=(q,ae=.48)=>{let ve=new mt({color:q,roughness:ae});return h.push(ve),ve},d=u("#ffd05a"),p=u("#ffeaa2"),g=u("#538b2c"),_=u("#e5a32a");function m(q,ae,ve,Ne,Ae,Oe,N,F){let X=new We(l,ae);return X.position.set(ve,Ne,Ae),X.scale.set(Oe,N,F),X.castShadow=!0,X.receiveShadow=!0,q.add(X),X}m(c,g,0,5,0,2.2,7,2.2);for(let q of[-1,1]){let ae=m(c,g,q*7,4,1,9,1.7,4);ae.rotation.z=q*.27,ae.rotation.y=q*.3}let f=[];for(let q=0;q<6;q++){let ae=new Qe;ae.rotation.y=q*Math.PI/3,c.add(ae);let ve=m(ae,q%2?d:p,0,12,0,5,9,4);f.push(ve)}let w=m(c,_,0,12,0,5,3.5,5),b=u("#c5a777"),v=new Hn(s+1.6,s+1.6,2.6,40),R=new We(v,b);R.position.set(r,3,o),R.castShadow=!0,a.add(R);let T=new Hn(s,s,2.2,40),C=new We(T,u("#fff4da"));C.position.set(r,3.6,o),C.castShadow=!0,a.add(C);let L=document.createElement("canvas");L.width=L.height=128;let M=L.getContext("2d");M.fillStyle="#4b2a15",M.font="bold 100px Trebuchet MS",M.textAlign="center",M.textBaseline="middle",M.fillText(String(i),64,69);let y=new ci(L);y.colorSpace=Rt,y.userData.transient=!0;let I=new ai({map:y,transparent:!0,depthWrite:!1}),U=new ui(s*1.72,s*1.72),z=new We(U,I);z.rotation.x=-Math.PI/2,z.position.set(r,4.74,o),a.add(z);let H=0,V=0,W="";function re(q){if(!["closed","next","bloom"].includes(q))throw Error("Unknown goal state");W=q,V=q==="bloom"?1:q==="next"?.16:0,a.userData.state=q,b.color.set(q==="next"?"#f9bf39":"#c5a777"),b.emissive.set(q==="next"?"#d89514":"#000000"),b.emissiveIntensity=q==="next"?.15:0}function G(q,ae=.016){H+=(V-H)*Math.min(1,ae*7);let ve=H;for(let Ae of f)Ae.position.set(0,13-ve*3,2+ve*10),Ae.scale.set(5+ve*1.5,9-ve*6,4+ve*4),Ae.rotation.x=ve*-.25;w.visible=ve>.4,w.position.y=11.4;let Ne=W==="next"?1+Math.sin(q*2.8)*.035:1;c.scale.setScalar(Ne),d.emissive.set("#ffc33e"),d.emissiveIntensity=W==="next"?.08+Math.sin(q*2.8)*.04:0}re(e),H=V,G(0,1),a.userData.goalNumber=i;function ee(q){let ae=q===33?13:q===40?15.7:10.5;R.scale.set((ae+1.6)/(s+1.6),1,(ae+1.6)/(s+1.6)),C.scale.set(ae/s,1,ae/s),z.scale.setScalar(ae/s),a.userData.markerSize=q}return{group:a,setState:re,setSize:ee,update:G,dispose(){l.dispose(),T.dispose(),v.dispose(),U.dispose(),y.dispose(),I.dispose(),h.forEach(q=>q.dispose())}}}var Cn=(i,e)=>An.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Vl=[[-13,-9],[20,-10],[8,4],[-11,18]];function au(i){i.x=An.clamp(i.x,-16,24),i.z=An.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function lu(i=73){let e=[{kind:"bee",position:new P(-12,25,10),velocity:new P,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new P(3,21.5,-7),velocity:new P,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new P((Cn(r.leg+1,a)-.5)*5,20.5,(Cn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let u=Math.floor(Cn(r.leg,a)*4);u===r.station&&(u=(u+1+Math.floor(Cn(r.leg+9,a)*2))%4),r.station=u;let[d,p]=Vl[u];r.target=au(new P(d+(Cn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Cn(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],h=(u,d)=>Math.hypot(u.x-d.x,u.z-d.z);if(h(r.target,l.position)<13||l.target&&h(r.target,l.target)<13){let u=-1;for(let d=0;d<Vl.length;d++){let[p,g]=Vl[d],_=new P(p,24,g),m=h(_,l.position)+(l.target?h(_,l.target):0);m>u&&(u=m,r.target=_,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+Cn(l.leg,i+c)*1.3&&n(l,c);let h=l.target.clone().sub(l.position),u=Math.hypot(h.x,h.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):u<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+Cn(l.leg,i+c)*1.3:.12+Cn(l.leg,i+c)*.3);let d=h.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(l.speed*Math.min(1,u/8));let p=d.sub(new P(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(c?-1:1)*(16-a)*11/a),p.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,p.clampLength(0,95),l.velocity.addScaledVector(p,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),au(l.position)}}return{agents:e,update(r){let o=An.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Gl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},F0=(i,e)=>An.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function cu({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Gl[i];if(!r)throw Error("Unknown flower species "+i);let o=ou({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new Qe;l.position.copy(c.position),a.add(l);let h=[],u=[],d=ee=>{let q=new mt({color:ee,roughness:.56});return u.push(q),q},p=d("#538b2c"),g=r.colors.map(d),_=d(r.center),m=new Mt(1,20,12);h.push(m);function f(ee,q,ae,ve,Ne,Ae,Oe,N){let F=new We(m,q);return F.position.set(ae,ve,Ne),F.scale.set(Ae,Oe,N),F.castShadow=F.receiveShadow=!0,ee.add(F),F}f(l,p,0,5,0,1.8,6,1.8);for(let ee of[-1,1]){let q=f(l,p,ee*6,3,0,8,1.4,3);q.rotation.z=ee*.25}let w=[];for(let ee=0;ee<r.petals;ee++){let q=new Qe;q.position.y=12,q.rotation.y=ee*Math.PI*2/r.petals,l.add(q);let ae=new Qe;q.add(ae);let ve=m;if(i==="poppy"){ve=m.clone();let Ae=ve.attributes.position;for(let Oe=0;Oe<Ae.count;Oe++){let N=Ae.getX(Oe),F=Ae.getZ(Oe);Ae.setY(Oe,Ae.getY(Oe)+Math.sin(Math.atan2(F,N)*5)*.26*Math.hypot(N,F))}ve.computeVertexNormals(),h.push(ve)}let Ne=new We(ve,g[ee%2]);Ne.position.z=r.radius,Ne.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Ne.castShadow=Ne.receiveShadow=!0,ae.add(Ne),w.push(ae)}let b=f(l,_,0,13.8,0,r.heart,2.7,r.heart);for(let ee=0;ee<(i==="poppy"?9:7);ee++){let q=ee*Math.PI*2/(i==="poppy"?9:7);f(l,_,Math.cos(q)*r.heart*.7,16,Math.sin(q)*r.heart*.7,.65,.6,.65)}let v=new Qe;v.name="flower-visitors",l.add(v);let R=d("#e9ad32"),T=d("#d6af50"),C=d("#60452b"),L=d("#fff6df");T.roughness=.95,L.transparent=!0,L.opacity=.72,L.depthWrite=!1;let M=[];for(let ee=0;ee<2;ee++){let q=new Qe;q.name=ee?"bumblebee":"bee",q.scale.setScalar(1.8),v.add(q);let ae=ee?1.08:.7,ve=ee?.98:.65;f(q,ee?T:R,0,0,0,ae,ve,1.2),f(q,C,0,0,1.05,ee?.56:.48,ee?.54:.48,.48);for(let Ae of[-.55,.15])f(q,C,0,0,Ae,ae*1.02,ve*1.02,.18);if(ee){let Ae=d("#f4e4b9");Ae.roughness=1,f(q,Ae,0,0,-.98,.72,.65,.38);let Oe=[],N=[],F=260;for(let xe=0;xe<F;xe++){let Te=1-2*(xe+.5)/F,A=Math.sqrt(1-Te*Te),K=xe*2.39996323,te=Math.cos(K)*A,Z=Math.sin(K)*A,$=new P(te*ae*1.015,Te*ve*1.015,Z*1.215),ue=new P(te/ae,Te/ve,Z/1.2).normalize(),ne=.12+F0(xe,91)*.12,le=$.clone().addScaledVector(ue,ne);le.z-=.045,Oe.push(...$.toArray(),...le.toArray());let we=new qe(Z<-.72?"#f4e4b9":Math.abs(Z+.46)<.18||Math.abs(Z-.12)<.17?"#635238":xe%3?"#d6af50":"#e7c776");N.push(...we.toArray(),...we.toArray())}let X=new yt;X.setAttribute("position",new tt(Oe,3)),X.setAttribute("color",new tt(N,3)),h.push(X);let ie=new Yi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});u.push(ie);let he=new Ps(X,ie);he.name="bumblebee-fur",q.add(he)}let Ne=[];for(let Ae of[-1,1]){let Oe=f(q,L,Ae*.95,.5,-.1,1.5,.16,.65);Oe.castShadow=!1,Ne.push(Oe)}M.push({insect:q,wings:Ne,seed:e*17+ee*31+Object.keys(Gl).indexOf(i)*7,phase:ee*2.7,a:new P,b:new P})}let y=!!s;function I(ee){y=!!ee,a.userData.insects=y}let U=lu(e*17+Object.keys(Gl).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function z(ee,q=100){if(!["bee","bumblebee"].includes(ee))throw Error("Unknown flower visitor");if(!Number.isFinite(q)||q<50||q>300)throw RangeError("Visitor size must be between 50 and 300 percent");M.find(ae=>ae.insect.name===ee).insect.scale.setScalar(1.8*q/100),a.userData.visitorSizes[ee]=q}let H=t,V=t==="bloom"?1:0,W=V;function re(ee){o.setState(ee),H=ee,V=ee==="bloom"?1:0}function G(ee,q=.016){o.update(ee,q),W+=(V-W)*Math.min(1,q*7);let ae=W;c.scale.multiplyScalar(1-ae),c.visible=ae<.999,l.visible=ae>.001,l.scale.setScalar(ae);for(let Ne of w)Ne.rotation.x=-(1-ae)*1.1;b.scale.y=2.7*(.8+.2*ae),v.visible=y&&H==="bloom"&&ae>.94;let ve=U.update(q);for(let Ne=0;Ne<M.length;Ne++){let Ae=M[Ne],Oe=ve[Ne];Ae.insect.position.copy(Oe.position);let N=Oe.velocity.x,F=Oe.velocity.z,X=Math.hypot(N,F);if(X>.5){let ie=Math.atan2(N,F),he=Math.atan2(Math.sin(ie-Ae.insect.rotation.y),Math.cos(ie-Ae.insect.rotation.y));Ae.insect.rotation.y+=he*Math.min(1,q*9),Ae.insect.rotation.z=An.clamp(-he*.22,-.24,.24)}else Ae.insect.rotation.z*=Math.max(0,1-q*6);Ae.insect.rotation.x=-Math.min(.16,X*.009),Ae.wings.forEach((ie,he)=>ie.rotation.z=Math.sin(ee*30+Ae.phase)*(he?1:-1)*.5)}}return I(s),G(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:re,setInsects:I,setVisitorSize:z,setSize:o.setSize,update:G,get state(){return H},dispose(){o.dispose(),h.forEach(ee=>ee.dispose()),u.forEach(ee=>ee.dispose())}}}function hu(i=-1,e="hops"){let t=d=>(d=Math.max(0,Math.min(1,d)),d*d*d*(d*(d*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="gentle"){let d=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=d*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:d*1.35,happy:d,roll:p,pitch:-d*.035,squash:d*.012,antenna:d*.3+Math.sin(i*8)*d*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(d,p,g)=>{let _=(i-d)/p;return _>0&&_<1?Math.sin(Math.PI*_)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(d,p)=>{let g=(i-d)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},c=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,l=a(.72,.3),h=a(1.35,.3),u=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:l*.055+h*.035+u*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:c*.65+r*.045,pitch:l*.035-r*.007-c*.013,roll:r*.005*Math.sin(i*3+.6)+c*.012}}function uu(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,c=o<.66,l,h=0,u=0;if(c)l=-a/2+o/.66*a,u=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,_=g*g*(3-2*g);l=a/2-a*_,h=Math.sin(g*Math.PI)**1.25*1.8,u=-Math.sin(g*Math.PI)*.2}let d=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,d*d*(3-2*d));return{y:l*p,z:h*p,pitch:u*p,stance:c,phase:o,fade:p}}function du(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,c=0,l=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,u=h*h*(3-2*h);a=o/2-o*u,c=Math.sin(h*Math.PI)*1.3,l=-Math.sin(h*Math.PI)*.16}return{y:a,z:c,pitch:l,stance:r<.66,phase:r}}var O0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}};function fu({seed:i=913}={}){let e=new Qe,t=new Qe,n=new Qe;e.add(t),t.add(n);let s=()=>(i=i*1664525+1013904223>>>0)/4294967296,r=(N,F=.8)=>new mt({color:N,roughness:F}),o=r("#dfa578"),a=r("#ffe5bd"),c=r("#e69b88"),l=r("#302529",.3),h=r("#fff9e7",.3),u=r("#428f8d",.35);function d(N,F,X,ie,he,xe,Te,A){let K=new We(new Mt(1,40,28),F);return K.position.set(X,ie,he),K.scale.set(xe,Te,A),K.castShadow=K.receiveShadow=!0,N.add(K),K}let p=[],g=[],_=[],m=[],f=[],w=[],b=new qe("#d5a078"),v=new qe("#ffe2b9");function R(N,F,X,ie,he=!1){let xe=d(n,o,...N,...F);xe.name="original-body-part",xe.userData.bodyCenter=[...N],xe.userData.bodyRadii=[...F];for(let Te=0;Te<X;Te++){let A=s()*2-1,K=s()*Math.PI*2,te=Math.sqrt(1-A*A),Z=new P(te*Math.cos(K),te*Math.sin(K),A),$=new P(Z.x*F[0],Z.y*F[1],Z.z*F[2]).add(new P(...N));if($.z<1)continue;let ue=he&&Z.y<-.4;if(ue){let Y=[-5.6,5.6].some(Q=>(($.x-Q)/4.6)**2+(($.z-23.4)/5.2)**2<1),se=($.x/5.9)**2+(($.z-16.5)/3.3)**2<1;if(Y||se)continue}let ne=new P(Z.x/F[0],Z.y/F[1],Z.z/F[2]).normalize(),le=new P(0,0,1);Math.abs(ne.z)>.9&&le.set(1,0,0);let we=new P().crossVectors(ne,le).normalize(),Le=new P(Z.x*.45,Z.y*.35,-.46),E=ie*(ue?.2:1)*(.6+s()*.65),x=.075+s()*.13,O=s()*.22;for(let Y=0;Y<2;Y++){let se=Y?new P().crossVectors(ne,we).normalize():we,Q=g.length/3;for(let Me=0;Me<=4;Me++){let ce=Me/4,Re=$.clone().addScaledVector(ne,E*ce*.88).addScaledVector(Le,E*ce*ce*.9),Ce=x*(1-ce*.93),de=b.clone().lerp(v,.28+ce*.58+O);for(let Se of[-1,1]){let ze=Re.clone().addScaledVector(se,Ce*Se);g.push(ze.x,ze.y,Math.max(.2,ze.z)),_.push(ne.x,ne.y,ne.z),m.push(de.r,de.g,de.b),p.push(.28+ce*.58+O),f.push(Se===-1?0:1,ce)}}for(let Me=0;Me<4;Me++){let ce=Q+Me*2;w.push(ce,ce+1,ce+2,ce+1,ce+3,ce+2)}}}}R([0,6,10],[10.5,15,9.7],15200,3.3),R([0,19,6],[7.4,9,5.7],4600,2.9),R([1,26,4],[4.7,7,3.4],2200,2.5);let T=new Qe;n.add(T),R([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let C=[],L=[],M=[],y=[];for(let[N,F]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let X=new Qe;X.name="soft-paw",X.userData.home={x:N,y:F},X.position.set(N,F,1.35),X.rotation.z=N<0?-.13:.13,t.add(X);let ie=new Mt(1,40,28),he=ie.attributes.position;for(let K=0;K<he.count;K++){let te=he.getX(K),Z=he.getY(K),$=he.getZ(K),ue=2.15*(1-.22*Math.max(0,Z)),ne=Z<-.35?.09*Math.cos(te*Math.PI*2.4)*-Z:0;he.setXYZ(K,te*ue,Z*3.4-ne,Math.max(-1.3,$*1.35)+Math.max(0,Z)*.45)}ie.computeVertexNormals();let xe=new We(ie,o);xe.castShadow=xe.receiveShadow=!0,X.add(xe);let Te=d(t,o,0,0,0,1,1,1);Te.name="rigid-upper-leg",M.push(Te);let A=d(t,o,0,0,0,1,1,1);A.name="rigid-lower-leg",y.push(A),L.push(new P(N*.86,F+1.4,6.1)),C.push(X)}let I=(N,F)=>-8-11.5*Math.sqrt(Math.max(.025,1-(N/13.1)**2-((F-20)/12.2)**2));function U(N,F,X,ie,he,xe,Te){let A=[],K=[];for(let ne=0;ne<=12;ne++)for(let le=0;le<=64;le++){let we=ne/12,Le=le/64*Math.PI*2,E=Math.cos(Le)*he*we,x=Math.sin(Le)*xe*we;A.push(E,I(X+E,ie+x)-Te-.27*(1-we*we),x)}for(let ne=0;ne<12;ne++)for(let le=0;le<64;le++){let we=ne*65+le,Le=we+64+1;K.push(we,Le,we+1,we+1,Le,Le+1)}let $=new yt;$.setAttribute("position",new tt(A,3)),$.setIndex(K),$.computeVertexNormals();let ue=new We($,F);return ue.position.set(X,0,ie),N.add(ue),ue}let z=new Qe;z.name="happy-crescent-eyes",T.add(z),z.visible=!1;for(let N of[-1,1]){let F=[];for(let X=0;X<=20;X++){let ie=N*5.6+(X/20-.5)*5.3,he=23.3+Math.sin(X/20*Math.PI)*1.35;F.push(new P(ie,I(ie,he)-.3,he))}z.add(new We(new bn(new Sn(F),24,.3,7,!1),l))}let H=[];for(let N of[-1,1]){let F=N*5.6,X=23.4,ie=new Qe;ie.name="embedded-eye",T.add(ie),U(ie,a,F,X,3.95,4.7,.11),U(ie,u,F,X-.1,2.65,3.25,.3),U(ie,l,F,X+.1,1.75,2.45,.49),d(ie,h,F-.8,I(F-.8,X+1.5)-.78,X+1.5,.72,.2,.82),d(ie,h,F+.65,I(F+.65,X-.65)-.78,X-.65,.26,.16,.3),H.push(ie);let he=[];for(let Te=0;Te<=64;Te++){let A=Te/64*Math.PI*2,K=F+Math.cos(A)*4.05,te=X+Math.sin(A)*4.8;he.push(new P(K,I(K,te)-.05,te))}T.add(new We(new bn(new Sn(he),80,.37,8,!1),o)),d(T,c,N*8.3,-17.2,16,2.05,.5,1.05);let xe=[];for(let Te=0;Te<=12;Te++){let A=N*5.6+(Te/12-.5)*4.5,K=28.7+Math.sin(Te/12*Math.PI)*.65;xe.push(new P(A,I(A,K)-.14,K))}T.add(new We(new bn(new Sn(xe),16,.26,6,!1),o))}d(T,a,0,-18.9,16.4,5.2,1.7,2.7),d(T,c,0,-20.6,17.7,1.65,1.05,1.1);let V=[];for(let N=0;N<=20;N++){let F=(N/20-.5)*6.6;V.push(new P(F,-20.35+Math.abs(F)*.14,14.7+.105*F*F))}let W=new We(new bn(new Sn(V),24,.22,6,!1),l);T.add(W);let re=[];for(let N of[-1,1]){let Te=function(A,K=!1,te=0){let Z=Math.sin(A*1.4+N*.7),$=Math.sin(A*2.2+N)*.12;X.v2.set(N*(1.7+Z*.35),-1.4+$,11.4),X.v3.set(N*(5.2+Z*.55+te),-1.9+Math.sin(A*1.2+N)*.35,10.2+$+te*.4+(K?Math.sin(A*5+N)*.15:0));let ue=X.computeFrenetFrames(26,!1),ne=ie.attributes.position,le=ie.attributes.normal;for(let we=0;we<=26;we++){let Le=we/26,E=X.getPoint(Le),x=.44*(1-Le)+.23*Le;for(let O=0;O<=8;O++){let Y=O/8*Math.PI*2,se=ue.normals[we].clone().multiplyScalar(-Math.cos(Y)).addScaledVector(ue.binormals[we],Math.sin(Y)),Q=E.clone().addScaledVector(se,x),Me=we*9+O;ne.setXYZ(Me,Q.x,Q.y,Q.z),le.setXYZ(Me,se.x,se.y,se.z)}}ne.needsUpdate=le.needsUpdate=!0,ie.computeBoundingSphere(),xe.position.copy(X.v3)},F=new Qe;F.name="soft-curved-antenna",F.position.set(N*6.7,-5,30),n.add(F);let X=new Ji(new P,new P(N*.25,-.2,4.6),new P(N*1.7,-1.4,11.4),new P(N*5.2,-1.9,10.2)),ie=new bn(X,26,.4,8,!1),he=new We(ie,o);F.add(he);let xe=d(F,a,N*5.2,-1.9,10.2,1.65,1.65,1.9);Te(0),re.push({group:F,flex:Te})}let G=new yt;G.setAttribute("position",new tt(g,3)),G.setAttribute("normal",new tt(_,3)),G.setAttribute("color",new tt(m,3)),G.setAttribute("uv",new tt(f,2)),G.setIndex(w);let ee=new Uint8Array(2048*4);for(let N=0;N<64;N++)for(let F=0;F<32;F++){let X=(N*32+F)*4,ie=Math.abs((F+.5)/32*2-1),he=Math.round(255*Math.pow(1-ie,.55)*(1-.75*Math.pow(N/63,4)));ee[X]=ee[X+1]=ee[X+2]=he,ee[X+3]=255}let q=new li(ee,32,64);q.needsUpdate=!0,q.magFilter=q.minFilter=Ct;let ae=new mt({vertexColors:!0,alphaMap:q,transparent:!0,opacity:.85,depthWrite:!1,side:qt,roughness:1}),ve=new We(G,ae);ve.name="curved-soft-fur",ve.frustumCulled=!1,n.add(ve);function Ne(N){let F=O0[N];if(!F)throw Error("Unknown creature palette "+N);o.color.set(F.coat),u.color.set(F.iris),b.set(F.root),v.set(F.tip);let X=G.attributes.color,ie=new qe;for(let he=0;he<p.length;he++)ie.copy(b).lerp(v,p[he]),X.setXYZ(he,ie.r,ie.g,ie.b);X.needsUpdate=!0,e.userData.palette=N}let Ae=new Qe;Ae.name="completion-pollen",Ae.visible=!1,e.add(Ae);let Oe=new Mt(.32,8,6);for(let N=0;N<9;N++){let F=new We(Oe,new mt({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));Ae.add(F)}return Ne("apricot"),{group:e,setPalette:Ne,update(N,F=0,X={}){let ie=hu(X.celebrationAge??-1,X.celebrationStyle),he=!ie.active&&(X.active??(F>0&&F<1));t.position.z=ie.lift,t.rotation.x=ie.pitch,t.rotation.y=ie.roll+ie.turnStep*Math.sin((X.celebrationAge??0)*16)*.018,t.scale.set(1+ie.squash*.4,1+ie.squash*.4,1-ie.squash),z.visible=ie.happy>.55,H.forEach(xe=>xe.visible=!z.visible),W.scale.x=1+ie.happy*.18,Ae.visible=ie.pollen>0,Ae.children.forEach((xe,Te)=>{let A=Math.min(1.8,Math.max(0,(X.celebrationAge??0)-1.5)),K=Te*2.4;xe.position.set(Math.cos(K)*(9+A*3)+Math.sin(A*2+Te)*.7,Math.sin(K)*(8+A*3),8+A*(8+Te*.4)),xe.material.opacity=ie.pollen*(.5+Te%3*.12)}),n.position.z=Math.sin(N*2)*.13+(he?Math.sin(F*Math.PI*16)*.22:0),n.rotation.y=he?Math.sin(F*Math.PI*16)*.012:Math.sin(N*.8)*.012,T.rotation.set(0,0,0),H.forEach(xe=>{xe.scale.set(1,1,1),xe.position.set(0,0,0)}),C.forEach((xe,Te)=>{let A=xe.userData.home,K=(X.celebrationAge??0)*17+Te*Math.PI/2,te=ie.turnStep*Math.max(0,Math.sin(K))*1.25,Z=he?X.travel!==void 0?du(X.travel,Te,e.scale.x):uu(X.progress??F,Te,{distance:X.distance??80,scale:e.scale.x}):{y:0,z:0,pitch:0};xe.position.set(A.x+ie.turnStep*Math.cos(K)*.65,A.y+Z.y+ie.turnStep*Math.sin(K)*.65+(ie.active?Math.sin((X.celebrationAge??0)*7+Te*Math.PI/2)*ie.tuck*.5:0),1.35+Z.z+te+ie.tuck*(Te<2?1:X.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((X.celebrationAge??0)*4+Te*1.6)*.12)),xe.rotation.x=Z.pitch-ie.tuck*(Te<2?.08:.035);let $=L[Te].clone();$.z+=n.position.z;let ue=new P(xe.position.x,xe.position.y+.65,xe.position.z+1.05),ne=ue.clone().sub($),le=Math.min(6.95,Math.max(.6,ne.length()));ne.normalize(),ue.copy($).addScaledVector(ne,le),xe.position.copy(ue).add(new P(0,-.65,-1.05));let we=3.8,Le=3.4,E=(we*we-Le*Le+le*le)/(2*le),x=Math.sqrt(Math.max(0,we*we-E*E)),O=new P(0,1,0).addScaledVector(ne,-ne.y).normalize(),Y=$.clone().addScaledVector(ne,E).addScaledVector(O,x);function se(Q,Me,ce,Re){let Ce=ce.clone().sub(Me);Q.position.copy(Me).addScaledVector(Ce,.5),Q.quaternion.setFromUnitVectors(new P(0,1,0),Ce.normalize()),Q.scale.set(Re,Me.distanceTo(ce)/2,Re)}se(M[Te],$,Y,1.2),se(y[Te],Y,ue,1.1)}),re.forEach((xe,Te)=>xe.flex(N,he,ie.antenna*(Te?.78:1)))},setSize(N){e.scale.setScalar(N/100)},dispose(){let N=new Set,F=new Set;e.traverse(X=>{X.geometry&&N.add(X.geometry),X.material&&F.add(X.material)}),N.forEach(X=>X.dispose()),F.forEach(X=>X.dispose()),q.dispose()}}}var B0={cast:"A \xB7 Elfenbeinguss",soft:"B \xB7 Weich modelliert",satin:"C \xB7 Matter Schliff"},pu=[];for(let i=0;i<8;i++)for(let[e,t]of[[-.32,8],[-.18,10],[.18,10],[.32,8]]){let n=(i+e)*Math.PI/4;pu.push((12+Math.cos(n)*t).toFixed(3)+","+(12+Math.sin(n)*t).toFixed(3))}var Wl={undo:'<path d="M9 4 3 10l6 6M3 10h10a6 6 0 0 1 0 12h-2" transform="translate(1 -1)"/>',hint:'<path d="M9 16c0-2-3.5-3.6-3.5-7.5a6.5 6.5 0 0 1 13 0c0 3.9-3.5 5.5-3.5 7.5ZM9 19h6M10 22h4M9.5 9.5 12 12l2.5-2.5M12 12v4"/>',reset:'<path d="M20 10a8.5 8.5 0 1 0-.5 7M20 3.5V10h-6.5"/>',home:'<path d="m3 10 9-7 9 7M5.5 8v13h5v-7h3v7h5V8"/>',settings:'<polygon points="'+pu.join(" ")+'"/><circle cx="12" cy="12" r="3.25"/>'},z0={undo:"Zur\xFCck",hint:"Tipp",reset:"Neu",home:"Startseite",settings:"Einstellungen"};function Xl({action:i="undo",variant:e="cast",compact:t=!1,gold:n=!1,engraved:s=!1,deep:r=!1,ink:o="#704a2c",label:a=z0[i]}={}){if(!Wl[i]||!B0[e])throw Error("Unknown ivory control");let c=document.createElement("button");if(c.type="button",c.className="ivory-control"+(t?" compact":""),c.dataset.action=i,c.dataset.variant=e,c.dataset.gold=String(n),c.dataset.engraved=String(s),c.dataset.deep=String(r),!/^#[0-9a-f]{6}$/i.test(o))throw Error("Invalid ink colour");c.style.setProperty("--ivory-ink",o),c.setAttribute("aria-label",a);let l=document.createElement("span");l.className="ivory-face",l.setAttribute("aria-hidden","true");let h=document.createElement("span");if(h.className="ivory-content",h.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g class="engrave-edge" transform="translate(0 .65)">'+Wl[i]+'</g><g class="engrave-ink">'+Wl[i]+"</g></svg>",!t){let u=document.createElement("span");u.className="ivory-label",u.textContent=a,h.append(u)}return c.append(l,h),c}var Ke=i=>document.getElementById(i),Zn=LEVELS,Yl,Zl=[];try{Yl=localStorage.getItem("slink-curated-v1-level-id");let i=typeof SLINK_LEGACY_IDS<"u"?SLINK_LEGACY_IDS:Zn.map(t=>t.id);Yl??=i[Number(localStorage.getItem("slink-curated-v1-level"))||0];let e=localStorage.getItem("slink-curated-v1-done-ids");Zl=e?JSON.parse(e):JSON.parse(localStorage.getItem("slink-curated-v1-done")||"[]").map(t=>i[t])}catch{}var k0=new Set(Zn.map(i=>i.id)),Yn=new Set((Array.isArray(Zl)?Zl:[]).filter(i=>k0.has(i))),$l=Zn.find(i=>i.id===Yl)||Zn[0],bi=[];for(let i of Zn){let e=bi.find(t=>t.set===i.set);e||(e={set:i.set,name:i.set.replace(/^\S+\s*·\s*/,""),levels:[],description:["Die ersten Schritte. Ein kleiner Anfang voller M\xF6glichkeiten.","Ein Umweg am Gartenzaun kann Wunder wirken.","Mit jedem Weg wird dein Garten ein wenig gr\xFCner.","Manchmal f\xFChrt der sch\xF6nste Weg au\xDFen herum.","Welcher Weg l\xE4sst wirklich alles bl\xFChen?","Kleine Inseln, ruhige Ufer und neue Wege.","Finde deinen Weg zwischen den blauen Becken.","Schmale Durchg\xE4nge. Gro\xDFe Aha-Momente.","Hinter jedem Zaun wartet ein neuer Gedanke.","Nimm dir Zeit. Manche Wege zeigen sich erst beim zweiten Blick.","Ein paar Z\xE4une. Viele M\xF6glichkeiten zum T\xFCfteln.","F\xFCr alle, die gern noch einen Gedanken weitergehen.","Um die Ecke gedacht, bis alles bl\xFCht.","Ein Garten f\xFCr geduldige Entdecker.","Deine letzte Lichtung wartet darauf, gr\xFCn zu werden."][bi.length]},bi.push(e)),e.levels.push(i)}var Jn=bi.find(i=>i.set===$l.set),Si=Jn,aa="path",la="home",mu=$l,Jl=matchMedia("(prefers-reduced-motion: reduce)").matches;function os(i){la=i;for(let e of["home","gardens","levels"])Ke(e+"Screen").hidden=e!==i;Ke("navHome").setAttribute("aria-current",i==="home"?"page":"false"),Ke("navGardens").setAttribute("aria-current",i!=="home"?"page":"false"),Kl.setAttribute("aria-label",i==="home"?"Aktuellen Garten ansehen":"Zur\xFCck"),Ke(i+"Screen").scrollTop=0,window.scrollTo({top:0,behavior:"instant"})}var Kl=Xl({action:"undo",compact:!0,variant:"satin",engraved:!0});Kl.onclick=()=>la==="levels"?os("gardens"):la==="gardens"?os("home"):Ql(Jn);Ke("backSlot").append(Kl);var gu=Xl({action:"settings",compact:!0,variant:"satin",engraved:!0});gu.onclick=()=>Ke("aboutDialog").showModal();Ke("settingsSlot").append(gu);Ke("continueText").textContent=Jn.name+" \xB7 R\xE4tsel "+(Jn.levels.indexOf($l)+1);Ke("totalDone").textContent=Yn.size+" / "+Zn.length;Ke("totalBar").style.width=Yn.size/Zn.length*100+"%";Ke("gardenSummary").textContent=bi.length+" G\xE4rten \xB7 "+Zn.length+" kleine Herausforderungen. Alle frei zug\xE4nglich.";var nr=document.createElement("button");nr.className="resume-garden";nr.innerHTML="<small>DEIN AKTUELLER GARTEN</small><strong></strong><span>Weiter entdecken \u2192</span>";nr.querySelector("strong").textContent=Jn.name;nr.onclick=()=>Ql(Jn);Ke("gardensScreen").insertBefore(nr,Ke("gardenCards"));Ke("continue").onclick=()=>location.href="slink.html";Ke("discover").onclick=Ke("navGardens").onclick=()=>os("gardens");Ke("navHome").onclick=()=>os("home");Ke("navFriend").onclick=()=>Ke("aboutDialog").showModal();function Ql(i){Si=i,Ke("chapterKicker").textContent="GARTEN "+String(bi.indexOf(i)+1).padStart(2,"0"),Ke("chapterTitle").textContent=i.name,Ke("chapterDescription").textContent=i.description;let e=i.levels.filter(t=>Yn.has(t.id)).length;Ke("chapterProgress").textContent=e+" von "+i.levels.length+" erbl\xFCht",Ke("chapterPercent").textContent=Math.round(e/i.levels.length*100)+" %",Ke("chapterBar").style.width=e/i.levels.length*100+"%",_u(),os("levels")}function H0(){return Si.levels.find(i=>!Yn.has(i.id))||Si.levels[0]}function _u(){let i=Ke("levelChoices");i.querySelector("svg")?._observer?.disconnect(),i.className=aa+"-view",i.replaceChildren();for(let[e,t]of Si.levels.entries()){let n=document.createElement("button");n.className="level-node"+(Yn.has(t.id)?" done":"")+(t.id===H0().id?" next":""),n.dataset.levelId=t.id,aa==="path"&&(n.style.transform="translateX("+[-53,0,53,0][e%4]+"px)"),n.textContent=e+1,n.setAttribute("aria-label","R\xE4tsel "+(e+1)+(Yn.has(t.id)?", erbl\xFCht":", noch offen")),n.onclick=()=>{mu=t,Ke("selectedGarden").textContent=Si.name,Ke("selectedTitle").textContent="R\xE4tsel "+(e+1),Ke("selectedInfo").textContent=t.solution.length+" Felder \xB7 "+t.marks.length+" Ziele \xB7 "+(Yn.has(t.id)?"Bereits erbl\xFCht. Noch einmal genie\xDFen?":t.difficulty),Ke("levelDialog").showModal()},i.append(n)}if(aa==="path"){let e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.classList.add("path-line"),e.setAttribute("aria-hidden","true"),i.prepend(e);let t=()=>{let s=i.clientWidth;if(!s)return;let r=Si.levels.length*75+40;e.setAttribute("viewBox","0 0 "+s+" "+r),e.style.height=r+"px";let o="";for(let a=0;a<Si.levels.length;a++){let c=s/2+[-53,0,53,0][a%4],l=52+a*75;if(!a)o="M"+c+" "+l;else{let h=s/2+[-53,0,53,0][(a-1)%4],u=l-75;o+=" C"+h+" "+(u+38)+" "+c+" "+(l-38)+" "+c+" "+l}}e.innerHTML='<path d="'+o+'"/>'};requestAnimationFrame(t);let n=new ResizeObserver(t);n.observe(i),e._observer=n}}for(let i of document.querySelectorAll("[data-view]"))i.onclick=()=>{aa=i.dataset.view,document.querySelectorAll("[data-view]").forEach(e=>e.setAttribute("aria-pressed",String(e===i))),_u()};Ke("jumpCurrent").onclick=()=>document.querySelector(".level-node.next").scrollIntoView({block:"center",behavior:Jl?"instant":"smooth"});Ke("playSelected").onclick=()=>{try{localStorage.setItem("slink-curated-v1-level-id",mu.id)}catch{}location.href="slink.html"};for(let i of document.querySelectorAll("[data-close]"))i.onclick=()=>Ke(i.dataset.close).close();function xu(i){let e=new na({canvas:i,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});return e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ro,e.toneMapping=po,e.toneMappingExposure=.88,e}function vu(){let i=new Is;i.add(new Xs("#fff6dc","#a28d6c",1.65));let e=new qs("#fff4dc",3.3);return e.position.set(-200,200,650),e.target.position.set(200,-200,0),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-400,right:400,top:400,bottom:-400,near:1,far:1500}),e.shadow.bias=-3e-4,e.shadow.normalBias=.4,i.add(e,e.target),i}function jl(i,e){let t=new fi(-i*52*e,i*52*e,i*52,-i*52,1,1800);return t.up.set(0,0,1),t.position.set(i*40,-i*40-470,1e3),t.lookAt(i*40,-i*40,10),t}var ca=Ke("gardenHero"),yu=xu(ca),as=vu(),Ei=5,Mu=[1,2,3,5,6,7,8,9,10,11,12,13,14,16,17,18,22],Su=[8,9],bu=Bl({n:Ei,cells:Mu,water:Su,lava:[],stones:[],style:"soft"});as.add(bu.group);var ha=[];for(let i of Mu.filter(e=>!Su.includes(e))){let e=kl(["classic","rich","flowers","tuft"][i%4],{seed:930+i});e.group.position.set(i%Ei*80+40,-Math.floor(i/Ei)*80-40,0),as.add(e.group),ha.push(e)}for(let i of bu.openings){let e=Hl("water",{style:"sway",center:[200,-200]}),t=new We(new Ht(i.shape,{depth:2,bevelEnabled:!1,curveSegments:20}),e.material);t.position.z=i.surfaceZ-2,as.add(t),ha.push(e)}for(let[i,e]of[[6,"daisy"],[13,"poppy"],[17,"daisy"]]){let t=cu({species:e,state:"bloom",insects:!1});t.group.rotation.x=Math.PI/2,t.group.position.set(i%Ei*80+40,-Math.floor(i/Ei)*80-40,12),t.setSize(27),as.add(t.group),ha.push(t)}var ir=fu();ir.setPalette("apricot");ir.group.scale.setScalar(2.1);ir.group.position.set(190,-230,22);as.add(ir.group);var Eu=jl(Ei,1.6);function Tu(){let i=ca.clientWidth,e=ca.clientHeight;yu.setSize(i,e,!1),Eu=jl(Ei,i/e)}new ResizeObserver(Tu).observe(ca);Tu();var ql=0;function wu(i){if(requestAnimationFrame(wu),document.hidden||la!=="home"||i-ql<40)return;let e=Math.min(.05,(i-ql)/1e3);ql=i,ha.forEach(t=>t.update(Jl?0:i/1e3,e)),ir.update(Jl?0:i/1e3,0,{active:!1}),yu.render(as,Eu)}requestAnimationFrame(wu);var tr=xu(document.createElement("canvas"));tr.setPixelRatio(1);tr.setSize(260,200,!1);var sr=vu(),V0=jl(3,1.3),Au=Bl({n:3,cells:[0,1,2,3,4,5,6,7,8],water:[2],lava:[],stones:[],style:"soft"});sr.add(Au.group);var Ru=[];for(let i of[0,1,3,4,5,6,7,8]){let e=ra("earth-loam",{seed:44+i}),t=kl(i%2?"rich":"flowers",{seed:44+i});for(let n of[e,t.group])n.position.set(i%3*80+40,-Math.floor(i/3)*80-40,0),sr.add(n);Ru.push({earth:e,grass:t.group})}for(let i of Au.openings){let e=Hl("water",{style:"sway",center:[120,-120]}),t=new We(new Ht(i.shape,{depth:2,bevelEnabled:!1}),e.material);t.position.z=i.surfaceZ-2,sr.add(t)}for(let[i,e]of bi.entries()){let t=e.levels.filter(u=>Yn.has(u.id)).length,n=t/e.levels.length;Ru.forEach((u,d)=>{u.grass.visible=d<Math.round(n*8),u.earth.visible=!u.grass.visible}),tr.render(sr,V0);let s=document.createElement("button");s.className="garden-card"+(e===Jn?" current":""),s.setAttribute("aria-label",e.name+", "+t+" von "+e.levels.length+" erbl\xFCht");let r=document.createElement("img");r.src=tr.domElement.toDataURL(),r.alt="";let o=document.createElement("span");o.className="kicker",o.textContent="GARTEN "+String(i+1).padStart(2,"0");let a=document.createElement("h2");a.textContent=e.name;let c=document.createElement("span");c.className="card-count",c.textContent=t+" / "+e.levels.length+" erbl\xFCht";let l=document.createElement("div");l.className="progress-track";let h=document.createElement("i");if(h.style.width=n*100+"%",l.append(h),s.append(r,o,a,c,l),e===Jn){let u=document.createElement("span");u.className="current-tag",u.textContent="DU BIST HIER",s.append(u)}s.onclick=()=>Ql(e),Ke("gardenCards").append(s)}var oa=new Set;sr.traverse(i=>{i.geometry&&!oa.has(i.geometry)&&(i.geometry.dispose(),oa.add(i.geometry));for(let e of Array.isArray(i.material)?i.material:i.material?[i.material]:[])oa.has(e)||(e.dispose(),oa.add(e))});tr.dispose();os("home");})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
