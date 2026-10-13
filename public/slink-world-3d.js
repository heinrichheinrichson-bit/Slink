(()=>{var mc=0,Ha=1,gc=2;var Ga=1,Qr=2,fn=3,bn=0,It=1,qt=2,An=0,ti=1,Wa=2,Xa=3,qa=4,_c=5,zn=100,xc=101,yc=102,vc=103,Mc=104,Sc=200,bc=201,Ec=202,Tc=203,Er=204,Tr=205,wc=206,Ac=207,Rc=208,Cc=209,Ic=210,Pc=211,Lc=212,Dc=213,Uc=214,eo=0,to=1,no=2,ni=3,io=4,so=5,ro=6,oo=7,Ya=0,Nc=1,Fc=2,Rn=0,Oc=1,Bc=2,zc=3,ao=4,kc=5,Vc=6,Hc=7;var Za=300,ui=301,fi=302,lo=303,co=304,ks=306,Ui=1e3,Bn=1001,wr=1002,Dt=1003,Gc=1004;var Vs=1005;var kt=1006,ho=1007;var Wn=1008;var sn=1009,Ja=1010,$a=1011,Zi=1012,uo=1013,Xn=1014,dn=1015,Ji=1016,fo=1017,po=1018,$i=1020,Ka=35902,ja=35899,Qa=1021,el=1022,Yt=1023,Ni=1026,Ki=1027,tl=1028,mo=1029,nl=1030,go=1031;var _o=1033,Hs=33776,Gs=33777,Ws=33778,Xs=33779,xo=35840,yo=35841,vo=35842,Mo=35843,So=36196,bo=37492,Eo=37496,To=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Io=37813,Po=37814,Lo=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,ko=36494,Vo=36495,Ho=36283,Go=36284,Wo=36285,Xo=36286;var ds=2300,Ar=2301,br=2302,Aa=2400,Ra=2401,Ca=2402;var Wc=3200,Xc=3201;var il=0,qc=1,Cn="",pt="srgb",ii="srgb-linear",ps="linear",tt="srgb";var ei=7680;var Ia=519,Yc=512,Zc=513,Jc=514,sl=515,$c=516,Kc=517,jc=518,Qc=519,Pa=35044;var rl="300 es",jt=2e3,ms=2001;var En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=1234567,cs=Math.PI/180,Fi=180/Math.PI;function di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function ol(i,e){return(i%e+e)%e}function su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ru(i,e,t){return i!==e?(t-i)/(e-i):0}function hs(i,e,t){return(1-t)*i+t*e}function ou(i,e,t,n){return hs(i,e,1-Math.exp(-t*n))}function au(i,e=1){return e-Math.abs(ol(i,e*2)-e)}function lu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uu(i,e){return i+Math.random()*(e-i)}function fu(i){return i*(.5-Math.random())}function du(i){i!==void 0&&(Bl=i);let e=Bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pu(i){return i*cs}function mu(i){return i*Fi}function gu(i){return(i&i-1)===0&&i!==0}function _u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var rn={DEG2RAD:cs,RAD2DEG:Fi,generateUUID:di,clamp:Ze,euclideanModulo:ol,mapLinear:su,inverseLerp:ru,lerp:hs,damp:ou,pingpong:au,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:uu,randFloatSpread:fu,seededRandom:du,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:xu,setQuaternionFromProperEuler:yu,normalize:Rt,denormalize:Li},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==m||u!==g){let p=1-a,h=c*d+l*m+u*g+f*_,T=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){let I=Math.sqrt(M),A=Math.atan2(I,h*T);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let y=a*T;if(c=c*p+d*y,l=l*p+m*y,u=u*p+g*y,f=f*p+_*y,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=I,l*=I,u*=I,f*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*f+c*m-l*d,e[t+1]=c*g+u*d+l*f-a*m,e[t+2]=l*g+u*m+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new q,zl=new Tn,Ve=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],T=s[1],M=s[4],y=s[7],I=s[2],A=s[5],P=s[8];return r[0]=o*_+a*T+c*I,r[3]=o*p+a*M+c*A,r[6]=o*h+a*y+c*P,r[1]=l*_+u*T+f*I,r[4]=l*p+u*M+f*A,r[7]=l*h+u*y+f*P,r[2]=d*_+m*T+g*I,r[5]=d*p+m*M+g*A,r[8]=d*h+m*y+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=t*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},na=new Ve;function al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){let i=gs("canvas");return i.style.display="block",i}var kl={};function Oi(i){i in kl||(kl[i]=!0,console.warn(i))}function th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Vl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){let i={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ii]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var Ke=vu();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vi,Rr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=gs("canvas")),vi.width=e.width,vi.height=e.height;let s=vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mu=0,Bi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,sa=new q,Ct=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=kt,o=Wn,a=Yt,c=sn,l=i.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=di(),this.name="",this.source=new Bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Za)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Za;Ct.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(m+1)/2,I=(h+1)/2,A=(u+d)/4,P=(f+_)/4,F=(g+p)/4;return M>y&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=P/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=F/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cr=class extends En{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ct(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Cr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_s=class extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),tr.subVectors(this.max,is),Mi.subVectors(e.a,is),Si.subVectors(e.b,is),bi.subVectors(e.c,is),Pn.subVectors(Si,Mi),Ln.subVectors(bi,Si),$n.subVectors(Mi,bi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-$n.z,$n.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,$n.z,0,-$n.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-$n.y,$n.x,0];return!ra(t,Mi,Si,bi,tr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Mi,Si,bi,tr))?!1:(nr.crossVectors(Pn,Ln),t=[nr.x,nr.y,nr.z],ra(t,Mi,Si,bi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gn=[new q,new q,new q,new q,new q,new q,new q,new q],Jt=new q,er=new cn,Mi=new q,Si=new q,bi=new q,Pn=new q,Ln=new q,$n=new q,is=new q,tr=new q,nr=new q,Kn=new q;function ra(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Kn.fromArray(i,r);let a=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var bu=new cn,ss=new q,oa=new q,si=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);let t=ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(oa)),this.expandByPoint(ss.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_n=new q,aa=new q,ir=new q,Dn=new q,la=new q,sr=new q,ca=new q,zi=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){aa.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(aa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ir),a=Dn.dot(this.direction),c=-Dn.dot(ir),l=Dn.lengthSq(),u=Math.abs(1-o*o),f,d,m,g;if(u>0)if(f=o*c-a,d=o*a-c,g=r*u,f>=0)if(d>=-g)if(d<=g){let _=1/u;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(aa).addScaledVector(ir,d),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){la.subVectors(t,e),sr.subVectors(n,e),ca.crossVectors(la,sr);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let c=a*this.direction.dot(sr.crossVectors(Dn,sr));if(c<0)return null;let l=a*this.direction.dot(la.cross(Dn));if(l<0||c+l>o)return null;let u=-a*Dn.dot(ca);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,r,o,a,c,l,u,f,d,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,f,d,m,g,_,p)}set(e,t,n,s,r,o,a,c,l,u,f,d,m,g,_,p){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*u,m=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,m=c*f,g=l*u,_=l*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,m=c*f,g=l*u,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,m=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Tu)}lookAt(e,t,n){let s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Un.crossVectors(n,Ot),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Un.crossVectors(n,Ot)),Un.normalize(),rr.crossVectors(Ot,Un),s[0]=Un.x,s[4]=rr.x,s[8]=Ot.x,s[1]=Un.y,s[5]=rr.y,s[9]=Ot.y,s[2]=Un.z,s[6]=rr.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],T=n[3],M=n[7],y=n[11],I=n[15],A=s[0],P=s[4],F=s[8],E=s[12],b=s[1],O=s[5],k=s[9],J=s[13],j=s[2],se=s[6],Q=s[10],oe=s[14],H=s[3],B=s[7],z=s[11],$=s[15];return r[0]=o*A+a*b+c*j+l*H,r[4]=o*P+a*O+c*se+l*B,r[8]=o*F+a*k+c*Q+l*z,r[12]=o*E+a*J+c*oe+l*$,r[1]=u*A+f*b+d*j+m*H,r[5]=u*P+f*O+d*se+m*B,r[9]=u*F+f*k+d*Q+m*z,r[13]=u*E+f*J+d*oe+m*$,r[2]=g*A+_*b+p*j+h*H,r[6]=g*P+_*O+p*se+h*B,r[10]=g*F+_*k+p*Q+h*z,r[14]=g*E+_*J+p*oe+h*$,r[3]=T*A+M*b+y*j+I*H,r[7]=T*P+M*O+y*se+I*B,r[11]=T*F+M*k+y*Q+I*z,r[15]=T*E+M*J+y*oe+I*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*m-n*c*m)+_*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+p*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*u-n*l*u)+h*(-s*a*u-t*c*f+t*a*d+s*o*f-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],T=f*p*l-_*d*l+_*c*m-a*p*m-f*c*h+a*d*h,M=g*d*l-u*p*l-g*c*m+o*p*m+u*c*h-o*d*h,y=u*_*l-g*f*l+g*a*m-o*_*m-u*a*h+o*f*h,I=g*f*c-u*_*c-g*a*d+o*_*d+u*a*p-o*f*p,A=t*T+n*M+s*y+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=T*P,e[1]=(_*d*r-f*p*r-_*s*m+n*p*m+f*s*h-n*d*h)*P,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*h+n*c*h)*P,e[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*m-n*c*m)*P,e[4]=M*P,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*h+t*d*h)*P,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*h-t*c*h)*P,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*P,e[8]=y*P,e[9]=(g*f*r-u*_*r-g*n*m+t*_*m+u*n*h-t*f*h)*P,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*h+t*a*h)*P,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*m-t*a*m)*P,e[12]=I*P,e[13]=(u*_*s-g*f*s+g*n*d-t*_*d-u*n*p+t*f*p)*P,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*P,e[15]=(o*f*s-u*a*s+u*n*c-t*f*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,d=r*l,m=r*u,g=r*f,_=o*u,p=o*f,h=a*f,T=c*l,M=c*u,y=c*f,I=n.x,A=n.y,P=n.z;return s[0]=(1-(_+h))*I,s[1]=(m+y)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(d+h))*A,s[6]=(p+T)*A,s[7]=0,s[8]=(g+M)*P,s[9]=(p-T)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),a=Ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);let l=1/r,u=1/o,f=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jt,c=!1){let l=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===jt)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ms)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jt,c=!1){let l=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===jt)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ms)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ei=new q,$t=new lt,Eu=new q(0,0,0),Tu=new q(1,1,1),Un=new q,rr=new q,Ot=new q,Gl=new lt,Wl=new Tn,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var ki=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wu=0,Xl=new q,Ti=new Tn,xn=new lt,or=new q,rs=new q,Au=new q,Ru=new Tn,ql=new q(1,0,0),Yl=new q(0,1,0),Zl=new q(0,0,1),Jl={type:"added"},Cu={type:"removed"},wi={type:"childadded",child:null},ha={type:"childremoved",child:null},St=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new q,t=new Qt,n=new Tn,s=new q(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ve}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(rs,or,this.up):xn.lookAt(or,rs,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(xn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new q(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new q,yn=new q,ua=new q,vn=new q,Ai=new q,Ri=new q,$l=new q,fa=new q,da=new q,pa=new q,ma=new ft,ga=new ft,_a=new ft,On=class i{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),yn.subVectors(n,t),ua.subVectors(e,t);let o=Kt.dot(Kt),a=Kt.dot(yn),c=Kt.dot(ua),l=yn.dot(yn),u=yn.dot(ua),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),_a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),yn.subVectors(e,t),Kt.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Kt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ai.subVectors(s,n),Ri.subVectors(r,n),fa.subVectors(e,n);let c=Ai.dot(fa),l=Ri.dot(fa);if(c<=0&&l<=0)return t.copy(n);da.subVectors(e,s);let u=Ai.dot(da),f=Ri.dot(da);if(u>=0&&f<=u)return t.copy(s);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ai,o);pa.subVectors(e,r);let m=Ai.dot(pa),g=Ri.dot(pa);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ri,a);let p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return $l.subVectors(r,s),a=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector($l,a);let h=1/(p+_+d);return o=_*h,a=d*h,t.copy(n).addScaledVector(Ai,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=ol(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xa(o,r,e+1/3),this.g=xa(o,r,e),this.b=xa(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Ke.workingToColorSpace(Et.copy(this),e),Math.round(Ze(Et.r*255,0,255))*65536+Math.round(Ze(Et.g*255,0,255))*256+Math.round(Ze(Et.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=pt){Ke.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ar);let n=hs(Nn.h,ar.h,t),s=hs(Nn.s,ar.s,t),r=hs(Nn.l,ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new We;We.NAMES=nh;var Iu=0,wn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ti,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new q,lr=new me,Pu=0,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}};var xs=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ys=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lu=0,Xt=new lt,ya=new St,Ci=new q,Bt=new cn,os=new cn,vt=new q,_t=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?ys:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Bt.min,os.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,os.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(os.min),Bt.expandByPoint(os.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)vt.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(e,l),vt.add(Ci)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new q,c[F]=new q;let l=new q,u=new q,f=new q,d=new me,m=new me,g=new me,_=new q,p=new q;function h(F,E,b){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(l),f.sub(l),m.sub(d),g.sub(d);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(O),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(O),a[F].add(_),a[E].add(_),a[b].add(_),c[F].add(p),c[E].add(p),c[b].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,E=T.length;F<E;++F){let b=T[F],O=b.start,k=b.count;for(let J=O,j=O+k;J<j;J+=3)h(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let M=new q,y=new q,I=new q,A=new q;function P(F){I.fromBufferAttribute(s,F),A.copy(I);let E=a[F];M.copy(E),M.sub(I.multiplyScalar(I.dot(E))).normalize(),y.crossVectors(A,E);let O=y.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,O)}for(let F=0,E=T.length;F<E;++F){let b=T[F],O=b.start,k=b.count;for(let J=O,j=O+k;J<j;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new q,r=new q,o=new q,a=new q,c=new q,l=new q,u=new q,f=new q;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new zt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=new lt,jn=new zi,cr=new si,jl=new q,hr=new q,ur=new q,fr=new q,va=new q,dr=new q,Ql=new q,pr=new q,Qe=class extends St{constructor(e=new _t,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(va.fromBufferAttribute(f,e),o?dr.addScaledVector(va,u):dr.addScaledVector(va.sub(t),u))}t.add(dr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(cr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(cr,jl)===null||jn.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Kl.copy(r).invert(),jn.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],h=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,I=M;y<I;y+=3){let A=a.getX(y),P=a.getX(y+1),F=a.getX(y+2);s=mr(this,h,e,n,l,u,f,A,P,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let T=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=mr(this,o,e,n,l,u,f,T,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],h=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,I=M;y<I;y+=3){let A=y,P=y+1,F=y+2;s=mr(this,h,e,n,l,u,f,A,P,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let T=p,M=p+1,y=p+2;s=mr(this,o,e,n,l,u,f,T,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Du(i,e,t,n,s,r,o,a){let c;if(e.side===It?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===bn,a),c===null)return null;pr.copy(a),pr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(pr);return l<t.near||l>t.far?null:{distance:l,point:pr.clone(),object:i}}function mr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,hr),i.getVertexPosition(c,ur),i.getVertexPosition(l,fr);let u=Du(i,e,t,n,hr,ur,fr,Ql);if(u){let f=new q;On.getBarycoord(Ql,hr,ur,fr,f),s&&(u.uv=On.getInterpolatedAttribute(s,a,c,l,f,new me)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,c,l,f,new me)),o&&(u.normal=On.getInterpolatedAttribute(o,a,c,l,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new q,materialIndex:0};On.getNormal(hr,ur,fr,d.normal),u.face=d,u.barycoord=f}return u}var kn=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function g(_,p,h,T,M,y,I,A,P,F,E){let b=y/P,O=I/F,k=y/2,J=I/2,j=A/2,se=P+1,Q=F+1,oe=0,H=0,B=new q;for(let z=0;z<Q;z++){let $=z*O-J;for(let ae=0;ae<se;ae++){let le=ae*b-k;B[_]=le*T,B[p]=$*M,B[h]=j,l.push(B.x,B.y,B.z),B[_]=0,B[p]=0,B[h]=A>0?1:-1,u.push(B.x,B.y,B.z),f.push(ae/P),f.push(1-z/F),oe+=1}}for(let z=0;z<F;z++)for(let $=0;$<P;$++){let ae=d+$+se*z,le=d+$+se*(z+1),L=d+($+1)+se*(z+1),U=d+($+1)+se*z;c.push(ae,le,U),c.push(le,L,U),H+=6}a.addGroup(m,H,E),m+=H,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=pi(i[t]);for(let s in n)e[s]=n[s]}return e}function Uu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ll(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var ih={clone:pi,merge:wt},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new q,ec=new me,tc=new me,Lt=class extends vs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ii=-90,Pi=1,Pr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Ii,Pi,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Ii,Pi,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Ii,Pi,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Ii,Pi,e,t);a.layers=this.layers,this.add(a);let c=new Lt(Ii,Pi,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Ii,Pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ms=class extends Ct{constructor(e=[],t=ui,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ms(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:An});r.uniforms.tEquirect.value=t;let o=new Qe(s,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=kt),new Pr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},rt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ou={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ss=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Hi=class extends Ct{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Dt,u=Dt,f,d){super(null,o,a,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ma=new q,Bu=new q,zu=new Ve,an=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ma.subVectors(n,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zu.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new si,ku=new me(.5,.5),gr=new q,Gi=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],d=r[6],m=r[7],g=r[8],_=r[9],p=r[10],h=r[11],T=r[12],M=r[13],y=r[14],I=r[15];if(s[0].setComponents(l-o,m-u,h-g,I-T).normalize(),s[1].setComponents(l+o,m+u,h+g,I+T).normalize(),s[2].setComponents(l+a,m+f,h+_,I+M).normalize(),s[3].setComponents(l-a,m-f,h-_,I-M).normalize(),n)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,m-d,h-p,I-y).normalize();else if(s[4].setComponents(l-c,m-d,h-p,I-y).normalize(),t===jt)s[5].setComponents(l+c,m+d,h+p,I+y).normalize();else if(t===ms)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);let t=ku.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wi=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dr=new q,Ur=new q,nc=new lt,as=new zi,_r=new si,Sa=new q,ic=new q,Nr=class extends St{constructor(e=new _t,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dr.fromBufferAttribute(t,s-1),Ur.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ur);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,e.ray.intersectsSphere(_r)===!1)return;nc.copy(s).invert(),as.copy(e.ray).applyMatrix4(nc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){let h=u.getX(_),T=u.getX(_+1),M=xr(this,e,as,c,h,T,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(m),h=xr(this,e,as,c,_,p,g-1);h&&t.push(h)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){let h=xr(this,e,as,c,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){let _=xr(this,e,as,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Dr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),t.distanceSqToSegment(Dr,Ur,Sa,ic)>n)return;Sa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sa);if(!(l<e.near||l>e.far))return{distance:l,point:ic.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var sc=new q,rc=new q,bs=class extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)sc.fromBufferAttribute(t,s),rc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sc.distanceTo(rc);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hn=class extends Ct{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Es=class extends Ct{constructor(e,t,n=Xn,s,r,o,a=Dt,c=Dt,l,u=Ni,f=1){if(u!==Ni&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vn=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],m=[],g=0,_=[],p=n/2,h=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(m,2));function T(){let y=new q,I=new q,A=0,P=(t-e)/n;for(let F=0;F<=r;F++){let E=[],b=F/r,O=b*(t-e)+e;for(let k=0;k<=s;k++){let J=k/s,j=J*c+a,se=Math.sin(j),Q=Math.cos(j);I.x=O*se,I.y=-b*n+p,I.z=O*Q,f.push(I.x,I.y,I.z),y.set(se,P,Q).normalize(),d.push(y.x,y.y,y.z),m.push(J,1-b),E.push(g++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){let b=_[E][F],O=_[E+1][F],k=_[E+1][F+1],J=_[E][F+1];(e>0||E!==0)&&(u.push(b,O,J),A+=3),(t>0||E!==r-1)&&(u.push(O,k,J),A+=3)}l.addGroup(h,A,0),h+=A}function M(y){let I=g,A=new me,P=new q,F=0,E=y===!0?e:t,b=y===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*b,0),d.push(0,b,0),m.push(.5,.5),g++;let O=g;for(let k=0;k<=s;k++){let j=k/s*c+a,se=Math.cos(j),Q=Math.sin(j);P.x=E*Q,P.y=p*b,P.z=E*se,f.push(P.x,P.y,P.z),d.push(0,b,0),A.x=se*.5+.5,A.y=Q*.5*b+.5,m.push(A.x,A.y),g++}for(let k=0;k<s;k++){let J=I+k,j=O+k;y===!0?u.push(j,j+1,J):u.push(j+1,j,J),F+=3}l.addGroup(h,F,y===!0?1:2),h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,m=(o-u)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new me:new q);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,s=[],r=[],o=[],a=new q,c=new lt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new q)}r[0]=new q,o[0]=new q;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ze(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ze(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xi=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*f+this.aX,l=d*f+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fr=class extends Xi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,m*=u,s(o,a,d,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var yr=new q,ba=new cl,Ea=new cl,Ta=new cl,Or=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new q){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),l=yr);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ba.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,_,p),Ea.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,_,p),Ta.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Ea.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),Ta.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(ba.calc(c),Ea.calc(c),Ta.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Vu(i,e){let t=1-i;return t*t*e}function Hu(i,e){return 2*(1-i)*i*e}function Gu(i,e){return i*i*e}function us(i,e,t,n){return Vu(i,e)+Hu(i,t)+Gu(i,n)}function Wu(i,e){let t=1-i;return t*t*t*e}function Xu(i,e){let t=1-i;return 3*t*t*i*e}function qu(i,e){return 3*(1-i)*i*i*e}function Yu(i,e){return i*i*i*e}function fs(i,e,t,n,s){return Wu(i,e)+Xu(i,t)+qu(i,n)+Yu(i,s)}var ws=class extends Vt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(e,s.x,r.x,o.x,a.x),fs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Br=class extends Vt{constructor(e=new q,t=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(e,s.x,r.x,o.x,a.x),fs(e,s.y,r.y,o.y,a.y),fs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},As=class extends Vt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends Vt{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rs=class extends Vt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(us(e,s.x,r.x,o.x),us(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends Vt{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(us(e,s.x,r.x,o.x),us(e,s.y,r.y,o.y),us(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cs=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(oc(a,c.x,l.x,u.x,f.x),oc(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},La=Object.freeze({__proto__:null,ArcCurve:Fr,CatmullRomCurve3:Or,CubicBezierCurve:ws,CubicBezierCurve3:Br,EllipseCurve:Xi,LineCurve:As,LineCurve3:zr,QuadraticBezierCurve:Rs,QuadraticBezierCurve3:kr,SplineCurve:Cs}),Vr=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new La[s.type]().fromJSON(s))}return this}},un=class extends Vr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new As(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Rs(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ws(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Xi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gt=class extends un{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new un().fromJSON(s))}return this}};function Zu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Qu(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let d=t;d<s;d+=t){let m=i[d],g=i[d+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Is(r,o,t,a,c,l,0),o}function sh(i,e,t,n,s){let r;if(s===uf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ac(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ac(o/n|0,i[o],i[o+1],r);return r&&qi(r,r.next)&&(Ls(r),r=r.next),r}function oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qi(t,t.next)||ut(t.prev,t,t.next)===0)){if(Ls(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Is(i,e,t,n,s,r,o){if(!i)return;!o&&r&&rf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?$u(i,n,s,r):Ju(i)){e.push(c.i,i.i,l.i),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ku(oi(i),e),Is(i,e,t,n,s,r,2)):o===2&&ju(i,e,t,n,s,r):Is(oi(i),e,t,n,s,r,1);break}}}function Ju(i){let e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),d=Math.max(s,r,o),m=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=m&&ls(s,a,r,c,o,l,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $u(i,e,t,n){let s=i.prev,r=i,o=i.next;if(ut(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,d=o.y,m=Math.min(a,c,l),g=Math.min(u,f,d),_=Math.max(a,c,l),p=Math.max(u,f,d),h=Da(m,g,e,t,n),T=Da(_,p,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=h&&y&&y.z<=T;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&ls(a,u,c,f,l,d,M.x,M.y)&&ut(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ls(a,u,c,f,l,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=h;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&ls(a,u,c,f,l,d,M.x,M.y)&&ut(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=T;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ls(a,u,c,f,l,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ku(i,e){let t=i;do{let n=t.prev,s=t.next.next;!qi(n,s)&&oh(n,t,t.next,s)&&Ps(n,s)&&Ps(s,n)&&(e.push(n.i,t.i,s.i),Ls(t),Ls(t.next),t=i=s),t=t.next}while(t!==i);return oi(t)}function ju(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lf(o,a)){let c=ah(o,a);o=oi(o,o.next),c=oi(c,c.next),Is(o,e,t,n,s,r,0),Is(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qu(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=sh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(af(l))}s.sort(ef);for(let r=0;r<s.length;r++)t=tf(s[r],t);return t}function ef(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function tf(i,e){let t=nf(i,e);if(!t)return e;let n=ah(t,i);return oi(n,n.next),oi(t,t.next)}function nf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(qi(i,t))return t;do{if(qi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&rh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Ps(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&sf(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function sf(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function rf(i,e,t,n){let s=i;do s.z===0&&(s.z=Da(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,of(s)}function of(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Da(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function af(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ls(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&rh(i,e,t,n,s,r,o,a)}function lf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cf(i,e)&&(Ps(i,e)&&Ps(e,i)&&hf(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||qi(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qi(i,e){return i.x===e.x&&i.y===e.y}function oh(i,e,t,n){let s=Mr(ut(i,e,t)),r=Mr(ut(i,e,n)),o=Mr(ut(t,n,i)),a=Mr(ut(t,n,e));return!!(s!==r&&o!==a||s===0&&vr(i,t,e)||r===0&&vr(i,n,e)||o===0&&vr(t,i,n)||a===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mr(i){return i>0?1:i<0?-1:0}function cf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&oh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ps(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function hf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ah(i,e){let t=Ua(i.i,i.x,i.y),n=Ua(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ac(i,e,t,n){let s=Ua(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ua(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Na=class{static triangulate(e,t,n=2){return Zu(e,t,n)}},Tt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lc(e),cc(n,e);let o=e.length;t.forEach(lc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,cc(n,t[c]);let a=Na.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function lc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var tn=class i extends _t{constructor(e=new gt([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:ff,M,y=!1,I,A,P,F;h&&(M=h.getSpacedPoints(u),y=!0,d=!1,I=h.computeFrenetFrames(u,!1),A=new q,P=new q,F=new q),d||(p=0,m=0,g=0,_=0);let E=a.extractPoints(l),b=E.shape,O=E.holes;if(!Tt.isClockWise(b)){b=b.reverse();for(let X=0,Y=O.length;X<Y;X++){let G=O[X];Tt.isClockWise(G)&&(O[X]=G.reverse())}}function J(X){let G=10000000000000001e-36,Z=X[0];for(let N=1;N<=X.length;N++){let w=N%X.length,re=X[w],be=re.x-Z.x,Ue=re.y-Z.y,D=be*be+Ue*Ue,S=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(Z.x),Math.abs(Z.y)),ne=G*S*S;if(D<=ne){X.splice(w,1),N--;continue}Z=re}}J(b),O.forEach(J);let j=O.length,se=b;for(let X=0;X<j;X++){let Y=O[X];b=b.concat(Y)}function Q(X,Y,G){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Y,G)}let oe=b.length;function H(X,Y,G){let Z,N,w,re=X.x-Y.x,be=X.y-Y.y,Ue=G.x-X.x,D=G.y-X.y,S=re*re+be*be,ne=re*D-be*Ue;if(Math.abs(ne)>Number.EPSILON){let fe=Math.sqrt(S),_e=Math.sqrt(Ue*Ue+D*D),pe=Y.x-be/fe,Ie=Y.y+re/fe,Me=G.x-D/_e,Pe=G.y+Ue/_e,Le=((Me-pe)*D-(Pe-Ie)*Ue)/(re*D-be*Ue);Z=pe+re*Le-X.x,N=Ie+be*Le-X.y;let xe=Z*Z+N*N;if(xe<=2)return new me(Z,N);w=Math.sqrt(xe/2)}else{let fe=!1;re>Number.EPSILON?Ue>Number.EPSILON&&(fe=!0):re<-Number.EPSILON?Ue<-Number.EPSILON&&(fe=!0):Math.sign(be)===Math.sign(D)&&(fe=!0),fe?(Z=-be,N=re,w=Math.sqrt(S)):(Z=re,N=be,w=Math.sqrt(S/2))}return new me(Z/w,N/w)}let B=[];for(let X=0,Y=se.length,G=Y-1,Z=X+1;X<Y;X++,G++,Z++)G===Y&&(G=0),Z===Y&&(Z=0),B[X]=H(se[X],se[G],se[Z]);let z=[],$,ae=B.concat();for(let X=0,Y=j;X<Y;X++){let G=O[X];$=[];for(let Z=0,N=G.length,w=N-1,re=Z+1;Z<N;Z++,w++,re++)w===N&&(w=0),re===N&&(re=0),$[Z]=H(G[Z],G[w],G[re]);z.push($),ae=ae.concat($)}let le;if(p===0)le=Tt.triangulateShape(se,O);else{let X=[],Y=[];for(let G=0;G<p;G++){let Z=G/p,N=m*Math.cos(Z*Math.PI/2),w=g*Math.sin(Z*Math.PI/2)+_;for(let re=0,be=se.length;re<be;re++){let Ue=Q(se[re],B[re],w);te(Ue.x,Ue.y,-N),Z===0&&X.push(Ue)}for(let re=0,be=j;re<be;re++){let Ue=O[re];$=z[re];let D=[];for(let S=0,ne=Ue.length;S<ne;S++){let fe=Q(Ue[S],$[S],w);te(fe.x,fe.y,-N),Z===0&&D.push(fe)}Z===0&&Y.push(D)}}le=Tt.triangulateShape(X,Y)}let L=le.length,U=g+_;for(let X=0;X<oe;X++){let Y=d?Q(b[X],ae[X],U):b[X];y?(P.copy(I.normals[0]).multiplyScalar(Y.x),A.copy(I.binormals[0]).multiplyScalar(Y.y),F.copy(M[0]).add(P).add(A),te(F.x,F.y,F.z)):te(Y.x,Y.y,0)}for(let X=1;X<=u;X++)for(let Y=0;Y<oe;Y++){let G=d?Q(b[Y],ae[Y],U):b[Y];y?(P.copy(I.normals[X]).multiplyScalar(G.x),A.copy(I.binormals[X]).multiplyScalar(G.y),F.copy(M[X]).add(P).add(A),te(F.x,F.y,F.z)):te(G.x,G.y,f/u*X)}for(let X=p-1;X>=0;X--){let Y=X/p,G=m*Math.cos(Y*Math.PI/2),Z=g*Math.sin(Y*Math.PI/2)+_;for(let N=0,w=se.length;N<w;N++){let re=Q(se[N],B[N],Z);te(re.x,re.y,f+G)}for(let N=0,w=O.length;N<w;N++){let re=O[N];$=z[N];for(let be=0,Ue=re.length;be<Ue;be++){let D=Q(re[be],$[be],Z);y?te(D.x,D.y+M[u-1].y,M[u-1].x+G):te(D.x,D.y,f+G)}}}v(),x();function v(){let X=s.length/3;if(d){let Y=0,G=oe*Y;for(let Z=0;Z<L;Z++){let N=le[Z];V(N[2]+G,N[1]+G,N[0]+G)}Y=u+p*2,G=oe*Y;for(let Z=0;Z<L;Z++){let N=le[Z];V(N[0]+G,N[1]+G,N[2]+G)}}else{for(let Y=0;Y<L;Y++){let G=le[Y];V(G[2],G[1],G[0])}for(let Y=0;Y<L;Y++){let G=le[Y];V(G[0]+oe*u,G[1]+oe*u,G[2]+oe*u)}}n.addGroup(X,s.length/3-X,0)}function x(){let X=s.length/3,Y=0;W(se,Y),Y+=se.length;for(let G=0,Z=O.length;G<Z;G++){let N=O[G];W(N,Y),Y+=N.length}n.addGroup(X,s.length/3-X,1)}function W(X,Y){let G=X.length;for(;--G>=0;){let Z=G,N=G-1;N<0&&(N=X.length-1);for(let w=0,re=u+p*2;w<re;w++){let be=oe*w,Ue=oe*(w+1),D=Y+Z+be,S=Y+N+be,ne=Y+N+Ue,fe=Y+Z+Ue;ce(D,S,ne,fe)}}}function te(X,Y,G){c.push(X),c.push(Y),c.push(G)}function V(X,Y,G){de(X),de(Y),de(G);let Z=s.length/3,N=T.generateTopUV(n,s,Z-3,Z-2,Z-1);C(N[0]),C(N[1]),C(N[2])}function ce(X,Y,G,Z){de(X),de(Y),de(Z),de(Y),de(G),de(Z);let N=s.length/3,w=T.generateSideWallUV(n,s,N-6,N-3,N-2,N-1);C(w[0]),C(w[1]),C(w[3]),C(w[1]),C(w[2]),C(w[3])}function de(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function C(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return df(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new La[s.type]().fromJSON(s)),new i(n,e.options)}},ff={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new me(r,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],h=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-f),new me(d,1-g),new me(_,1-h)]:[new me(a,1-c),new me(u,1-f),new me(m,1-g),new me(p,1-h)]}};function df(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ai=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){let T=h*d-o;for(let M=0;M<l;M++){let y=M*f-r;g.push(y,-T,0),_.push(0,0,1),p.push(M/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<a;T++){let M=T+l*h,y=T+l*(h+1),I=T+1+l*(h+1),A=T+1+l*h;m.push(M,y,A),m.push(y,I,A)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ds=class i extends _t{constructor(e=new gt([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function l(u){let f=s.length/3,d=u.extractPoints(t),m=d.shape,g=d.holes;Tt.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=g.length;p<h;p++){let T=g[p];Tt.isClockWise(T)===!0&&(g[p]=T.reverse())}let _=Tt.triangulateShape(m,g);for(let p=0,h=g.length;p<h;p++){let T=g[p];m=m.concat(T)}for(let p=0,h=m.length;p<h;p++){let T=m[p];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let p=0,h=_.length;p<h;p++){let T=_[p],M=T[0]+f,y=T[1]+f,I=T[2]+f;n.push(M,y,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return pf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function pf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ut=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new q,d=new q,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){let T=[],M=h/n,y=0;h===0&&o===0?y=.5/t:h===n&&c===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let A=I/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(A+y,1-M),T.push(l++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){let M=u[h][T+1],y=u[h][T],I=u[h+1][T],A=u[h+1][T+1];(h!==0||o>0)&&m.push(M,y,A),(h!==n-1||c<Math.PI)&&m.push(y,I,A)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mt=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Hr=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gr=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wr=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Aa,endingEnd:Aa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ra:r=e,a=2*t-n;break;case Ca:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ra:o=e,c=2*n-t;break;case Ca:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,h=-d*p+2*d*_-d*g,T=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-m)*p+(1.5+m)*_+.5*g,y=m*p-m*_;for(let I=0;I!==a;++I)r[I]=h*o[u+I]+T*o[l+I]+M*o[c+I]+y*o[f+I];return r}},Xr=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*u;return r}},qr=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ht=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&mf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ht.prototype.ValueTypeName="";Ht.prototype.TimeBufferType=Float32Array;Ht.prototype.ValueBufferType=Float32Array;Ht.prototype.DefaultInterpolation=Ar;var Hn=class extends Ht{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ds;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="color";var Zr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="number";var Jr=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Us=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jr(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ht{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ds;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="vector";var Fa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lh=new Kr,ci=class{constructor(e){this.manager=e!==void 0?e:lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn={},Oa=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fa.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Mn[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,p=new ReadableStream({start(h){T();function T(){f.read().then(({done:M,value:y})=>{if(M)h.close();else{_+=y.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let A=0,P=u.length;A<P;A++){let F=u[A];F.onProgress&&F.onProgress(I)}h.enqueue(y),T()}},M=>{h.error(M)})}}});return new Response(p)}else throw new Oa(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Fa.add(`file:${e}`,l);let u=Mn[e];delete Mn[e];for(let f=0,d=u.length;f<d;f++){let m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=Mn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let f=0,d=u.length;f<d;f++){let m=u[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Os=class extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wa=new lt,hc=new q,uc=new q,Ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var hi=class extends vs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},za=class extends Ba{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new za}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jr=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hl="\\[\\]\\.:\\/",gf=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",_f="[^"+hl.replace("\\.","")+"]",xf=/((?:WC+[\/:])*)/.source.replace("WC",ul),yf=/(WCOD+)?/.source.replace("WCOD",_f),vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),Sf=new RegExp("^"+xf+yf+vf+Mf+"$"),bf=["material","materials","bones","map"],ka=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gf,"")}static parseTrackName(e){let t=Sf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=ka;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l0=new Float32Array(1);var fc=new lt,Bs=class{constructor(e,t,n=0,s=1/0){this.ray=new zi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(e,t=!0,n=[]){return Va(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Va(e[s],this,n,t);return n.sort(dc),n}};function dc(i,e){return i.distance-e.distance}function Va(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Va(r[o],e,t,!0)}}var pc=new me,zs=class{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var nn=class{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new un,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let T=[];for(let M=0,y=h.length;M<y;M++){let I=h[M],A=new gt;A.curves=I.curves,T.push(A)}return T}function n(h,T){let M=T.length,y=!1;for(let I=M-1,A=0;A<M;I=A++){let P=T[I],F=T[A],E=F.x-P.x,b=F.y-P.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(P=T[A],E=-E,F=T[I],b=-b),h.y<P.y||h.y>F.y)continue;if(h.y===P.y){if(h.x===P.x)return!0}else{let O=b*(h.x-P.x)-E*(h.y-P.y);if(O===0)return!0;if(O<0)continue;y=!y}}else{if(h.y!==P.y)continue;if(F.x<=h.x&&h.x<=P.x||P.x<=h.x&&h.x<=F.x)return!0}}return y}let s=Tt.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new gt,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;let f=[],d=[],m=[],g=0,_;d[g]=void 0,m[g]=[];for(let h=0,T=r.length;h<T;h++)a=r[h],_=a.getPoints(),o=s(_),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new gt,p:_},d[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:_[0]});if(!d[0])return t(r);if(d.length>1){let h=!1,T=0;for(let M=0,y=d.length;M<y;M++)f[M]=[];for(let M=0,y=d.length;M<y;M++){let I=m[M];for(let A=0;A<I.length;A++){let P=I[A],F=!0;for(let E=0;E<d.length;E++)n(P.p,d[E].p)&&(M!==E&&T++,F?(F=!1,f[E].push(P)):h=!0);F&&f[M].push(P)}}T>0&&h===!1&&(m=f)}let p;for(let h=0,T=d.length;h<T;h++){c=d[h].s,l.push(c),p=m[h];for(let M=0,y=p.length;M<y;M++)c.holes.push(p[M].h)}return l}};function fl(i,e,t,n){let s=Ef(n);switch(t){case Qa:return i*e;case tl:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case el:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case _o:return i*e*4/s.components*s.byteLength;case Hs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case xo:case vo:return Math.max(i,8)*Math.max(e,8)/2;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zo:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ef(i){switch(i){case sn:case Ja:return{byteLength:1,components:1};case Zi:case $a:case Ji:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case Xn:case uo:case dn:return{byteLength:4,components:1};case Ka:case ja:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wf(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
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
#endif`,Td=`struct PhysicalMaterial {
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
}`,wd=`
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,em=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:If,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:Zf,color_vertex:Jf,common:$f,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:od,envmap_pars_fragment:ad,envmap_pars_vertex:ld,envmap_physical_pars_fragment:yd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:vd,lights_toon_pars_fragment:Md,lights_phong_fragment:Sd,lights_phong_pars_fragment:bd,lights_physical_fragment:Ed,lights_physical_pars_fragment:Td,lights_fragment_begin:wd,lights_fragment_maps:Ad,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Dd,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:zd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:ep,packing:tp,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:xp,tonemapping_pars_fragment:yp,transmission_fragment:vp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:wp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Ip,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:zp,meshbasic_vert:kp,meshbasic_frag:Vp,meshlambert_vert:Hp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Zp,meshphong_frag:Jp,meshphysical_vert:$p,meshphysical_frag:Kp,meshtoon_vert:jp,meshtoon_frag:Qp,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},Te={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},pn={basic:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:wt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:wt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:wt([Te.points,Te.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:wt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:wt([Te.common,Te.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:wt([Te.sprite,Te.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:wt([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:wt([Te.lights,Te.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};pn.physical={uniforms:wt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var qo={r:0,b:0,g:0},mi=new Qt,om=new lt;function am(i,e,t,n,s,r,o){let a=new We(0),c=r===!0?0:1,l,u,f=null,d=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1,I=g(M);I===null?h(a,c):I&&I.isColor&&(h(I,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===ks)?(u===void 0&&(u=new Qe(new kn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:pi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(mi)),u.material.toneMapped=Ke.getTransfer(I.colorSpace)!==tt,(f!==I||d!==I.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=I,d=I.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Qe(new ai(2,2),new en({name:"BackgroundMaterial",uniforms:pi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(I.colorSpace)!==tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=I,d=I.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function h(M,y){M.getRGB(qo,ll(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,h(a,c)},render:_,addToRenderList:p,dispose:T}}function lm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,O,k,J,j){let se=!1,Q=f(J,k,O);r!==Q&&(r=Q,l(r.object)),se=m(b,J,k,j),se&&g(b,J,k,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,y(b,O,k,J),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,O,k){let J=k.wireframe===!0,j=n[b.id];j===void 0&&(j={},n[b.id]=j);let se=j[O.id];se===void 0&&(se={},j[O.id]=se);let Q=se[J];return Q===void 0&&(Q=d(c()),se[J]=Q),Q}function d(b){let O=[],k=[],J=[];for(let j=0;j<t;j++)O[j]=0,k[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:J,object:b,attributes:{},index:null}}function m(b,O,k,J){let j=r.attributes,se=O.attributes,Q=0,oe=k.getAttributes();for(let H in oe)if(oe[H].location>=0){let z=j[H],$=se[H];if($===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),z===void 0||z.attribute!==$||$&&z.data!==$.data)return!0;Q++}return r.attributesNum!==Q||r.index!==J}function g(b,O,k,J){let j={},se=O.attributes,Q=0,oe=k.getAttributes();for(let H in oe)if(oe[H].location>=0){let z=se[H];z===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(z=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(z=b.instanceColor));let $={};$.attribute=z,z&&z.data&&($.data=z.data),j[H]=$,Q++}r.attributes=j,r.attributesNum=Q,r.index=J}function _(){let b=r.newAttributes;for(let O=0,k=b.length;O<k;O++)b[O]=0}function p(b){h(b,0)}function h(b,O){let k=r.newAttributes,J=r.enabledAttributes,j=r.attributeDivisors;k[b]=1,J[b]===0&&(i.enableVertexAttribArray(b),J[b]=1),j[b]!==O&&(i.vertexAttribDivisor(b,O),j[b]=O)}function T(){let b=r.newAttributes,O=r.enabledAttributes;for(let k=0,J=O.length;k<J;k++)O[k]!==b[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function M(b,O,k,J,j,se,Q){Q===!0?i.vertexAttribIPointer(b,O,k,j,se):i.vertexAttribPointer(b,O,k,J,j,se)}function y(b,O,k,J){_();let j=J.attributes,se=k.getAttributes(),Q=O.defaultAttributeValues;for(let oe in se){let H=se[oe];if(H.location>=0){let B=j[oe];if(B===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(B=b.instanceColor)),B!==void 0){let z=B.normalized,$=B.itemSize,ae=e.get(B);if(ae===void 0)continue;let le=ae.buffer,L=ae.type,U=ae.bytesPerElement,v=L===i.INT||L===i.UNSIGNED_INT||B.gpuType===uo;if(B.isInterleavedBufferAttribute){let x=B.data,W=x.stride,te=B.offset;if(x.isInstancedInterleavedBuffer){for(let V=0;V<H.locationSize;V++)h(H.location+V,x.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=x.meshPerAttribute*x.count)}else for(let V=0;V<H.locationSize;V++)p(H.location+V);i.bindBuffer(i.ARRAY_BUFFER,le);for(let V=0;V<H.locationSize;V++)M(H.location+V,$/H.locationSize,L,z,W*U,(te+$/H.locationSize*V)*U,v)}else{if(B.isInstancedBufferAttribute){for(let x=0;x<H.locationSize;x++)h(H.location+x,B.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let x=0;x<H.locationSize;x++)p(H.location+x);i.bindBuffer(i.ARRAY_BUFFER,le);for(let x=0;x<H.locationSize;x++)M(H.location+x,$/H.locationSize,L,z,$*U,$/H.locationSize*x*U,v)}}else if(Q!==void 0){let z=Q[oe];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(H.location,z);break;case 3:i.vertexAttrib3fv(H.location,z);break;case 4:i.vertexAttrib4fv(H.location,z);break;default:i.vertexAttrib1fv(H.location,z)}}}}T()}function I(){F();for(let b in n){let O=n[b];for(let k in O){let J=O[k];for(let j in J)u(J[j].object),delete J[j];delete O[k]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let O=n[b.id];for(let k in O){let J=O[k];for(let j in J)u(J[j].object),delete J[j];delete O[k]}delete n[b.id]}function P(b){for(let O in n){let k=n[O];if(k[b.id]===void 0)continue;let J=k[b.id];for(let j in J)u(J[j].object),delete J[j];delete k[b.id]}}function F(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function cm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,n,1)}function c(l,u,f,d){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Yt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let F=P===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!F)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:I,maxSamples:A}}function um(i){let e=this,t=null,n=0,s=!1,r=!1,o=new an,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let T=r?0:n,M=T*4,y=h.clippingState||null;c.value=y,y=u(g,d,M,m);for(let I=0;I!==M;++I)y[I]=t[I];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let h=m+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,y=m;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(T,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function fm(i){let e=new WeakMap;function t(o,a){return a===lo?o.mapping=ui:a===co&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===lo||a===co)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lr(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qi=4,ch=[.125,.215,.35,.446,.526,.582],xi=20,dl=new hi,hh=new We,pl=null,ml=0,gl=0,_l=!1,_i=(1+Math.sqrt(5))/2,ji=1/_i,uh=[new q(-_i,ji,0),new q(_i,ji,0),new q(-ji,0,_i),new q(ji,0,_i),new q(0,_i,-ji),new q(0,_i,ji),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],dm=new q,Jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=dm}=r;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=_l,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ji,format:Yt,colorSpace:ii,depthBuffer:!1},s=fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(r)),this._blurMaterial=mm(r,e,t)}return s}_compileMaterial(e){let t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,s,r){let c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(hh),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let _=new ri({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),p=new Qe(new kn,_),h=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,h=!0):(_.color.copy(hh),h=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let I=this._cubeSize;Yo(s,y*I,M>2?I:0,I,I),f.setRenderTarget(s),h&&f.render(p,c),f.render(e,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ui||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Qe(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):xi;p>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);let h=[],T=0;for(let P=0;P<xi;++P){let F=P/_,E=Math.exp(-F*F/2);h.push(E),P===0?T+=E:P<p&&(T+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let y=this._sizeLods[s],I=3*y*(s>M-Qi?s-M+Qi:0),A=4*(this._cubeSize-y);Yo(t,I,A,3*y,2*y),c.setRenderTarget(t),c.render(f,dl)}};function pm(i){let e=[],t=[],n=[],s=i,r=i-Qi+1+ch.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qi?c=ch[o-i+Qi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,T=new Float32Array(_*g*m),M=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let A=0;A<m;A++){let P=A%3*2/3-1,F=A>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];T.set(E,_*g*A),M.set(d,p*g*A);let b=[A,A,A,A,A,A];y.set(b,h*g*A)}let I=new _t;I.setAttribute("position",new zt(T,_)),I.setAttribute("uv",new zt(M,p)),I.setAttribute("faceIndex",new zt(y,h)),e.push(I),s>Qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fh(i,e,t){let n=new ln(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mm(i,e,t){let n=new Float32Array(xi),s=new q(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function dh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ph(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function gm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===lo||c===co,u=c===ui||c===fi;if(l||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jo(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Jo(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _m(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(f){let d=[],m=f.index,g=f.attributes.position,_=0;if(m!==null){let T=m.array;_=m.version;for(let M=0,y=T.length;M<y;M+=3){let I=T[M+0],A=T[M+1],P=T[M+2];d.push(I,A,A,P,P,I)}}else if(g!==void 0){let T=g.array;_=g.version;for(let M=0,y=T.length/3-1;M<y;M+=3){let I=M+0,A=M+1,P=M+2;d.push(I,A,A,P,P,I)}}else return;let p=new(al(d)?ys:xs)(d,1);p.version=_;let h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ym(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),t.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*o,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function f(d,m,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*_[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function vm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,e,t){let n=new WeakMap,s=new ft;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==f){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*I*4*f),P=new _s(A,y,I,f);P.type=dn,P.needsUpdate=!0;let F=M*4;for(let b=0;b<f;b++){let O=p[b],k=h[b],J=T[b],j=y*I*4*b;for(let se=0;se<O.count;se++){let Q=se*F;m===!0&&(s.fromBufferAttribute(O,se),A[j+Q+0]=s.x,A[j+Q+1]=s.y,A[j+Q+2]=s.z,A[j+Q+3]=0),g===!0&&(s.fromBufferAttribute(k,se),A[j+Q+4]=s.x,A[j+Q+5]=s.y,A[j+Q+6]=s.z,A[j+Q+7]=0),_===!0&&(s.fromBufferAttribute(J,se),A[j+Q+8]=s.x,A[j+Q+9]=s.y,A[j+Q+10]=s.z,A[j+Q+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new me(y,I)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Dh=new Ct,mh=new Es(1,1),Uh=new _s,Nh=new Ir,Fh=new Ms,gh=[],_h=[],xh=new Float32Array(16),yh=new Float32Array(9),vh=new Float32Array(4);function ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Am(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),yt(t,n)}}function Rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),yt(t,n)}}function Cm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),yt(t,n)}}function Im(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=sl,r=mh):r=Dh,t.setTexture2D(e||r,s)}function zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nh,s)}function km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fh,s)}function Vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uh,s)}function Hm(i){switch(i){case 5126:return bm;case 35664:return Em;case 35665:return Tm;case 35666:return wm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Im;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Vm}}function Gm(i,e){i.uniform1fv(this.addr,e)}function Wm(i,e){let t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Xm(i,e){let t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function qm(i,e){let t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){let t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zm(i,e){let t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jm(i,e){let t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Km(i,e){i.uniform2iv(this.addr,e)}function jm(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function eg(i,e){i.uniform1uiv(this.addr,e)}function tg(i,e){i.uniform2uiv(this.addr,e)}function ng(i,e){i.uniform3uiv(this.addr,e)}function ig(i,e){i.uniform4uiv(this.addr,e)}function sg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Dh,r[o])}function rg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nh,r[o])}function og(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fh,r[o])}function ag(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uh,r[o])}function lg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}var yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}},vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lg(t.type)}},Ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Mh(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){let n=i.name,s=n.length;for(xl.lastIndex=0;;){let r=xl.exec(n),o=xl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(t,l===void 0?new yl(a,i,e):new vl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ml(a),Mh(t,f)),t=f}}}var es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Sh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var hg=37297,ug=0;function fg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var bh=new Ve;function dg(i){Ke._getMatrix(bh,Ke.workingColorSpace,i);let e=`mat3( ${bh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case ps:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(e),a)}else return r}function pg(i,e){let t=dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mg(i,e){let t;switch(e){case Oc:t="Linear";break;case Bc:t="Reinhard";break;case zc:t="Cineon";break;case ao:t="ACESFilmic";break;case Vc:t="AgX";break;case Hc:t="Neutral";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new q;function gg(){Ke.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function xg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qs(i){return i!==""}function Th(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(vg,Sg)}var Mg=new Map;function Sg(i,e){let t=Ye[e];if(t===void 0){let n=Mg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(bg,Eg)}function Eg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ga?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case fi:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Nc:e="ENVMAP_BLENDING_MIX";break;case Fc:e="ENVMAP_BLENDING_ADD";break}return e}function Cg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ig(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Tg(t),l=wg(t),u=Ag(t),f=Rg(t),d=Cg(t),m=_g(t),g=xg(r),_=s.createProgram(),p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),h.length>0&&(h+=`
`)):(p=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),h=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Rn?mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,pg("linearToOutputTexel",t.outputColorSpace),gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=Sl(o),o=Th(o,t),o=wh(o,t),a=Sl(a),a=Th(a,t),a=wh(a,t),o=Ah(o),a=Ah(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=T+p+o,y=T+h+a,I=Sh(s,s.VERTEX_SHADER,M),A=Sh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,I),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(O){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_)||"",J=s.getShaderInfoLog(I)||"",j=s.getShaderInfoLog(A)||"",se=k.trim(),Q=J.trim(),oe=j.trim(),H=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,A);else{let z=Eh(s,I,"vertex"),$=Eh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+se+`
`+z+`
`+$)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||oe==="")&&(B=!1);B&&(O.diagnostics={runnable:H,programLog:se,vertexShader:{log:Q,prefix:p},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(I),s.deleteShader(A),F=new es(s,_),E=yg(s,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,hg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ug++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}var Pg=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new El(e),t.set(e,n)),n}},El=class{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}};function Lg(i,e,t,n,s,r,o){let a=new ki,c=new bl,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,b,O,k,J){let j=k.fog,se=J.geometry,Q=E.isMeshStandardMaterial?k.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),H=oe&&oe.mapping===ks?oe.image.height:null,B=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let z=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$=z!==void 0?z.length:0,ae=0;se.morphAttributes.position!==void 0&&(ae=1),se.morphAttributes.normal!==void 0&&(ae=2),se.morphAttributes.color!==void 0&&(ae=3);let le,L,U,v;if(B){let et=pn[B];le=et.vertexShader,L=et.fragmentShader}else le=E.vertexShader,L=E.fragmentShader,c.update(E),U=c.getVertexShaderID(E),v=c.getFragmentShaderID(E);let x=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),te=J.isInstancedMesh===!0,V=J.isBatchedMesh===!0,ce=!!E.map,de=!!E.matcap,C=!!oe,X=!!E.aoMap,Y=!!E.lightMap,G=!!E.bumpMap,Z=!!E.normalMap,N=!!E.displacementMap,w=!!E.emissiveMap,re=!!E.metalnessMap,be=!!E.roughnessMap,Ue=E.anisotropy>0,D=E.clearcoat>0,S=E.dispersion>0,ne=E.iridescence>0,fe=E.sheen>0,_e=E.transmission>0,pe=Ue&&!!E.anisotropyMap,Ie=D&&!!E.clearcoatMap,Me=D&&!!E.clearcoatNormalMap,Pe=D&&!!E.clearcoatRoughnessMap,Le=ne&&!!E.iridescenceMap,xe=ne&&!!E.iridescenceThicknessMap,we=fe&&!!E.sheenColorMap,He=fe&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,qe=!!E.specularIntensityMap,K=_e&&!!E.transmissionMap,Se=_e&&!!E.thicknessMap,Ee=!!E.gradientMap,De=!!E.alphaMap,ye=E.alphaTest>0,ge=!!E.alphaHash,Fe=!!E.extensions,Xe=Rn;E.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let st={shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:L,defines:E.defines,customVertexShaderID:U,customFragmentShaderID:v,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:V,batchingColor:V&&J._colorsTexture!==null,instancing:te,instancingColor:te&&J.instanceColor!==null,instancingMorph:te&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:x===null?i.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ii,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:de,envMap:C,envMapMode:C&&oe.mapping,envMapCubeUVHeight:H,aoMap:X,lightMap:Y,bumpMap:G,normalMap:Z,displacementMap:d&&N,emissiveMap:w,normalMapObjectSpace:Z&&E.normalMapType===qc,normalMapTangentSpace:Z&&E.normalMapType===il,metalnessMap:re,roughnessMap:be,anisotropy:Ue,anisotropyMap:pe,clearcoat:D,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:ne,iridescenceMap:Le,iridescenceThicknessMap:xe,sheen:fe,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:qe,transmission:_e,transmissionMap:K,thicknessMap:Se,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===ti&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:ge,combine:E.combine,mapUv:ce&&_(E.map.channel),aoMapUv:X&&_(E.aoMap.channel),lightMapUv:Y&&_(E.lightMap.channel),bumpMapUv:G&&_(E.bumpMap.channel),normalMapUv:Z&&_(E.normalMap.channel),displacementMapUv:N&&_(E.displacementMap.channel),emissiveMapUv:w&&_(E.emissiveMap.channel),metalnessMapUv:re&&_(E.metalnessMap.channel),roughnessMapUv:be&&_(E.roughnessMap.channel),anisotropyMapUv:pe&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:Oe&&_(E.specularMap.channel),specularColorMapUv:Ae&&_(E.specularColorMap.channel),specularIntensityMapUv:qe&&_(E.specularIntensityMap.channel),transmissionMapUv:K&&_(E.transmissionMap.channel),thicknessMapUv:Se&&_(E.thicknessMap.channel),alphaMapUv:De&&_(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Z||Ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!se.attributes.uv&&(ce||De),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:W,skinning:J.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:w&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qt,flipSided:E.side===It,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(T(b,E),M(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let b=g[E.type],O;if(b){let k=pn[b];O=ih.clone(k.uniforms)}else O=E.uniforms;return O}function I(E,b){let O;for(let k=0,J=u.length;k<J;k++){let j=u[k];if(j.cacheKey===b){O=j,++O.usedTimes;break}}return O===void 0&&(O=new Ig(i,b,E,r),u.push(O)),O}function A(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:I,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:F}}function Dg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ih(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,m,g,_,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function a(f,d,m,g,_,p){let h=o(f,d,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(f,d,m,g,_,p){let h=o(f,d,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Ug),n.length>1&&n.sort(d||Ch),s.length>1&&s.sort(d||Ch)}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Ng(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ih,i.set(n,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new We};break;case"SpotLight":t={position:new q,direction:new q,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function Og(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bg=0;function zg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kg(i){let e=new Fg,t=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new lt,o=new lt;function a(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,T=0,M=0,y=0,I=0,A=0,P=0;l.sort(zg);for(let E=0,b=l.length;E<b;E++){let O=l[E],k=O.color,J=O.intensity,j=O.distance,se=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=k.r*J,f+=k.g*J,d+=k.b*J;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(O.sh.coefficients[Q],J);P++}else if(O.isDirectionalLight){let Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,H=t.get(O);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=O.shadow.matrix,T++}n.directional[m]=Q,m++}else if(O.isSpotLight){let Q=e.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(k).multiplyScalar(J),Q.distance=j,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,n.spot[_]=Q;let oe=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,oe.updateMatrices(O),O.castShadow&&A++),n.spotLightMatrix[_]=oe.matrix,O.castShadow){let H=t.get(O);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=se,y++}_++}else if(O.isRectAreaLight){let Q=e.get(O);Q.color.copy(k).multiplyScalar(J),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=Q,p++}else if(O.isPointLight){let Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){let oe=O.shadow,H=t.get(O);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,H.shadowCameraNear=oe.camera.near,H.shadowCameraFar=oe.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=O.shadow.matrix,M++}n.point[g]=Q,g++}else if(O.isHemisphereLight){let Q=e.get(O);Q.skyColor.copy(O.color).multiplyScalar(J),Q.groundColor.copy(O.groundColor).multiplyScalar(J),n.hemi[h]=Q,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==M||F.numSpotShadows!==y||F.numSpotMaps!==I||F.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=M,F.numSpotShadows=y,F.numSpotMaps=I,F.numLightProbes=P,n.version=Bg++)}function c(l,u){let f=0,d=0,m=0,g=0,_=0,p=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){let M=l[h];if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(M.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ph(i){let e=new kg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Vg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ph(i),e.set(s,[a])):r>=o.length?(a=new Ph(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
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
}`;function Wg(i,e,t){let n=new Gi,s=new me,r=new me,o=new ft,a=new Hr({depthPacking:Xc}),c=new Gr,l={},u=t.maxTextureSize,f={[bn]:It,[It]:bn,[qt]:qt},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Hg,fragmentShader:Gg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let h=this.type;this.render=function(A,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),k=i.state;k.setBlending(An),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let J=h!==fn&&this.type===fn,j=h===fn&&this.type!==fn;for(let se=0,Q=A.length;se<Q;se++){let oe=A[se],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let B=H.getFrameExtents();if(s.multiply(B),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||J===!0||j===!0){let $=this.type!==fn?{minFilter:Dt,magFilter:Dt}:{};H.map!==null&&H.map.dispose(),H.map=new ln(s.x,s.y,$),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let z=H.getViewportCount();for(let $=0;$<z;$++){let ae=H.getViewport($);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),k.viewport(o),H.updateMatrices(oe,$),n=H.getFrustum(),y(P,F,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&T(H,F),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,b,O)};function T(A,P){let F=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,F,m,_,null)}function M(A,P,F,E){let b=null,O=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)b=O;else if(b=F.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=b.uuid,J=P.uuid,j=l[k];j===void 0&&(j={},l[k]=j);let se=j[J];se===void 0&&(se=b.clone(),j[J]=se,P.addEventListener("dispose",I)),b=se}if(b.visible=P.visible,b.wireframe=P.wireframe,E===fn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=i.properties.get(b);k.light=F}return b}function y(A,P,F,E,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let J=e.update(A),j=A.material;if(Array.isArray(j)){let se=J.groups;for(let Q=0,oe=se.length;Q<oe;Q++){let H=se[Q],B=j[H.materialIndex];if(B&&B.visible){let z=M(A,B,E,b);A.onBeforeShadow(i,A,P,F,J,z,H),i.renderBufferDirect(F,null,J,z,A,H),A.onAfterShadow(i,A,P,F,J,z,H)}}}else if(j.visible){let se=M(A,j,E,b);A.onBeforeShadow(i,A,P,F,J,se,null),i.renderBufferDirect(F,null,J,se,A,null),A.onAfterShadow(i,A,P,F,J,se,null)}}let k=A.children;for(let J=0,j=k.length;J<j;J++)y(k[J],P,F,E,b)}function I(A){A.target.removeEventListener("dispose",I);for(let F in l){let E=l[F],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var Xg={[eo]:to,[no]:ro,[io]:oo,[ni]:so,[to]:eo,[ro]:no,[oo]:io,[so]:ni};function qg(i,e){function t(){let K=!1,Se=new ft,Ee=null,De=new ft(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!K&&(i.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){K=ye},setClear:function(ye,ge,Fe,Xe,st){st===!0&&(ye*=Xe,ge*=Xe,Fe*=Xe),Se.set(ye,ge,Fe,Xe),De.equals(Se)===!1&&(i.clearColor(ye,ge,Fe,Xe),De.copy(Se))},reset:function(){K=!1,Ee=null,De.set(-1,0,0,0)}}}function n(){let K=!1,Se=!1,Ee=null,De=null,ye=null;return{setReversed:function(ge){if(Se!==ge){let Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Se=ge;let Xe=ye;ye=null,this.setClear(Xe)}},getReversed:function(){return Se},setTest:function(ge){ge?x(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!K&&(i.depthMask(ge),Ee=ge)},setFunc:function(ge){if(Se&&(ge=Xg[ge]),De!==ge){switch(ge){case eo:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case ni:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ge}},setLocked:function(ge){K=ge},setClear:function(ge){ye!==ge&&(Se&&(ge=1-ge),i.clearDepth(ge),ye=ge)},reset:function(){K=!1,Ee=null,De=null,ye=null,Se=!1}}}function s(){let K=!1,Se=null,Ee=null,De=null,ye=null,ge=null,Fe=null,Xe=null,st=null;return{setTest:function(et){K||(et?x(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(et){Se!==et&&!K&&(i.stencilMask(et),Se=et)},setFunc:function(et,mn,on){(Ee!==et||De!==mn||ye!==on)&&(i.stencilFunc(et,mn,on),Ee=et,De=mn,ye=on)},setOp:function(et,mn,on){(ge!==et||Fe!==mn||Xe!==on)&&(i.stencilOp(et,mn,on),ge=et,Fe=mn,Xe=on)},setLocked:function(et){K=et},setClear:function(et){st!==et&&(i.clearStencil(et),st=et)},reset:function(){K=!1,Se=null,Ee=null,De=null,ye=null,ge=null,Fe=null,Xe=null,st=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,T=null,M=null,y=null,I=null,A=null,P=new We(0,0,0),F=0,E=!1,b=null,O=null,k=null,J=null,j=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,oe=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=oe>=2);let B=null,z={},$=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),le=new ft().fromArray($),L=new ft().fromArray(ae);function U(K,Se,Ee,De){let ye=new Uint8Array(4),ge=i.createTexture();i.bindTexture(K,ge),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Ee;Fe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Se+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ge}let v={};v[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),v[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),v[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),v[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),x(i.DEPTH_TEST),o.setFunc(ni),G(!1),Z(Ha),x(i.CULL_FACE),X(An);function x(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function W(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function te(K,Se){return f[K]!==Se?(i.bindFramebuffer(K,Se),f[K]=Se,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function V(K,Se){let Ee=m,De=!1;if(K){Ee=d.get(Se),Ee===void 0&&(Ee=[],d.set(Se,Ee));let ye=K.textures;if(Ee.length!==ye.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Fe=ye.length;ge<Fe;ge++)Ee[ge]=i.COLOR_ATTACHMENT0+ge;Ee.length=ye.length,De=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,De=!0);De&&i.drawBuffers(Ee)}function ce(K){return g!==K?(i.useProgram(K),g=K,!0):!1}let de={[zn]:i.FUNC_ADD,[xc]:i.FUNC_SUBTRACT,[yc]:i.FUNC_REVERSE_SUBTRACT};de[vc]=i.MIN,de[Mc]=i.MAX;let C={[Sc]:i.ZERO,[bc]:i.ONE,[Ec]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[Ic]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[wc]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[Ac]:i.ONE_MINUS_DST_ALPHA,[Pc]:i.CONSTANT_COLOR,[Lc]:i.ONE_MINUS_CONSTANT_COLOR,[Dc]:i.CONSTANT_ALPHA,[Uc]:i.ONE_MINUS_CONSTANT_ALPHA};function X(K,Se,Ee,De,ye,ge,Fe,Xe,st,et){if(K===An){_===!0&&(W(i.BLEND),_=!1);return}if(_===!1&&(x(i.BLEND),_=!0),K!==_c){if(K!==p||et!==E){if((h!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),h=zn,y=zn),et)switch(K){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}T=null,M=null,I=null,A=null,P.set(0,0,0),F=0,p=K,E=et}return}ye=ye||Se,ge=ge||Ee,Fe=Fe||De,(Se!==h||ye!==y)&&(i.blendEquationSeparate(de[Se],de[ye]),h=Se,y=ye),(Ee!==T||De!==M||ge!==I||Fe!==A)&&(i.blendFuncSeparate(C[Ee],C[De],C[ge],C[Fe]),T=Ee,M=De,I=ge,A=Fe),(Xe.equals(P)===!1||st!==F)&&(i.blendColor(Xe.r,Xe.g,Xe.b,st),P.copy(Xe),F=st),p=K,E=!1}function Y(K,Se){K.side===qt?W(i.CULL_FACE):x(i.CULL_FACE);let Ee=K.side===It;Se&&(Ee=!Ee),G(Ee),K.blending===ti&&K.transparent===!1?X(An):X(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let De=K.stencilWrite;a.setTest(De),De&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),w(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?x(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(K){b!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),b=K)}function Z(K){K!==mc?(x(i.CULL_FACE),K!==O&&(K===Ha?i.cullFace(i.BACK):K===gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),O=K}function N(K){K!==k&&(Q&&i.lineWidth(K),k=K)}function w(K,Se,Ee){K?(x(i.POLYGON_OFFSET_FILL),(J!==Se||j!==Ee)&&(i.polygonOffset(Se,Ee),J=Se,j=Ee)):W(i.POLYGON_OFFSET_FILL)}function re(K){K?x(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function be(K){K===void 0&&(K=i.TEXTURE0+se-1),B!==K&&(i.activeTexture(K),B=K)}function Ue(K,Se,Ee){Ee===void 0&&(B===null?Ee=i.TEXTURE0+se-1:Ee=B);let De=z[Ee];De===void 0&&(De={type:void 0,texture:void 0},z[Ee]=De),(De.type!==K||De.texture!==Se)&&(B!==Ee&&(i.activeTexture(Ee),B=Ee),i.bindTexture(K,Se||v[K]),De.type=K,De.texture=Se)}function D(){let K=z[B];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function fe(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pe(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Le(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xe(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(K){le.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),le.copy(K))}function He(K){L.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),L.copy(K))}function Oe(K,Se){let Ee=l.get(Se);Ee===void 0&&(Ee=new WeakMap,l.set(Se,Ee));let De=Ee.get(K);De===void 0&&(De=i.getUniformBlockIndex(Se,K.name),Ee.set(K,De))}function Ae(K,Se){let De=l.get(Se).get(K);c.get(Se)!==De&&(i.uniformBlockBinding(Se,De,K.__bindingPointIndex),c.set(Se,De))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},B=null,z={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,T=null,M=null,y=null,I=null,A=null,P=new We(0,0,0),F=0,E=!1,b=null,O=null,k=null,J=null,j=null,le.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:x,disable:W,bindFramebuffer:te,drawBuffers:V,useProgram:ce,setBlending:X,setMaterial:Y,setFlipSided:G,setCullFace:Z,setLineWidth:N,setPolygonOffset:w,setScissorTest:re,activeTexture:be,bindTexture:Ue,unbindTexture:D,compressedTexImage2D:S,compressedTexImage3D:ne,texImage2D:Le,texImage3D:xe,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ie,scissor:we,viewport:He,reset:qe}}function Yg(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return m?new OffscreenCanvas(D,S):gs("canvas")}function _(D,S,ne){let fe=1,_e=Ue(D);if((_e.width>ne||_e.height>ne)&&(fe=ne/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let pe=Math.floor(fe*_e.width),Ie=Math.floor(fe*_e.height);f===void 0&&(f=g(pe,Ie));let Me=S?g(pe,Ie):f;return Me.width=pe,Me.height=Ie,Me.getContext("2d").drawImage(D,0,0,pe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+pe+"x"+Ie+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function p(D){return D.generateMipmaps}function h(D){i.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,S,ne,fe,_e=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=S;if(S===i.RED&&(ne===i.FLOAT&&(pe=i.R32F),ne===i.HALF_FLOAT&&(pe=i.R16F),ne===i.UNSIGNED_BYTE&&(pe=i.R8)),S===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(pe=i.R8UI),ne===i.UNSIGNED_SHORT&&(pe=i.R16UI),ne===i.UNSIGNED_INT&&(pe=i.R32UI),ne===i.BYTE&&(pe=i.R8I),ne===i.SHORT&&(pe=i.R16I),ne===i.INT&&(pe=i.R32I)),S===i.RG&&(ne===i.FLOAT&&(pe=i.RG32F),ne===i.HALF_FLOAT&&(pe=i.RG16F),ne===i.UNSIGNED_BYTE&&(pe=i.RG8)),S===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(pe=i.RG8UI),ne===i.UNSIGNED_SHORT&&(pe=i.RG16UI),ne===i.UNSIGNED_INT&&(pe=i.RG32UI),ne===i.BYTE&&(pe=i.RG8I),ne===i.SHORT&&(pe=i.RG16I),ne===i.INT&&(pe=i.RG32I)),S===i.RGB_INTEGER&&(ne===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),ne===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),ne===i.UNSIGNED_INT&&(pe=i.RGB32UI),ne===i.BYTE&&(pe=i.RGB8I),ne===i.SHORT&&(pe=i.RGB16I),ne===i.INT&&(pe=i.RGB32I)),S===i.RGBA_INTEGER&&(ne===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),ne===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),ne===i.UNSIGNED_INT&&(pe=i.RGBA32UI),ne===i.BYTE&&(pe=i.RGBA8I),ne===i.SHORT&&(pe=i.RGBA16I),ne===i.INT&&(pe=i.RGBA32I)),S===i.RGB&&(ne===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),ne===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),S===i.RGBA){let Ie=_e?ps:Ke.getTransfer(fe);ne===i.FLOAT&&(pe=i.RGBA32F),ne===i.HALF_FLOAT&&(pe=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(pe=Ie===tt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function y(D,S){let ne;return D?S===null||S===Xn||S===$i?ne=i.DEPTH24_STENCIL8:S===dn?ne=i.DEPTH32F_STENCIL8:S===Zi&&(ne=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xn||S===$i?ne=i.DEPTH_COMPONENT24:S===dn?ne=i.DEPTH_COMPONENT32F:S===Zi&&(ne=i.DEPTH_COMPONENT16),ne}function I(D,S){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Dt&&D.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function A(D){let S=D.target;S.removeEventListener("dispose",A),F(S),S.isVideoTexture&&u.delete(S)}function P(D){let S=D.target;S.removeEventListener("dispose",P),b(S)}function F(D){let S=n.get(D);if(S.__webglInit===void 0)return;let ne=D.source,fe=d.get(ne);if(fe){let _e=fe[S.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&E(D),Object.keys(fe).length===0&&d.delete(ne)}n.remove(D)}function E(D){let S=n.get(D);i.deleteTexture(S.__webglTexture);let ne=D.source,fe=d.get(ne);delete fe[S.__cacheKey],o.memory.textures--}function b(D){let S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(S.__webglFramebuffer[fe]))for(let _e=0;_e<S.__webglFramebuffer[fe].length;_e++)i.deleteFramebuffer(S.__webglFramebuffer[fe][_e]);else i.deleteFramebuffer(S.__webglFramebuffer[fe]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[fe])}else{if(Array.isArray(S.__webglFramebuffer))for(let fe=0;fe<S.__webglFramebuffer.length;fe++)i.deleteFramebuffer(S.__webglFramebuffer[fe]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let fe=0;fe<S.__webglColorRenderbuffer.length;fe++)S.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[fe]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ne=D.textures;for(let fe=0,_e=ne.length;fe<_e;fe++){let pe=n.get(ne[fe]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(ne[fe])}n.remove(D)}let O=0;function k(){O=0}function J(){let D=O;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),O+=1,D}function j(D){let S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function se(D,S){let ne=n.get(D);if(D.isVideoTexture&&re(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ne.__version!==D.version){let fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{v(ne,D,S);return}}else D.isExternalTexture&&(ne.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+S)}function Q(D,S){let ne=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){v(ne,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+S)}function oe(D,S){let ne=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){v(ne,D,S);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+S)}function H(D,S){let ne=n.get(D);if(D.version>0&&ne.__version!==D.version){x(ne,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+S)}let B={[Ui]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},z={[Dt]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},$={[Yc]:i.NEVER,[Qc]:i.ALWAYS,[Zc]:i.LESS,[sl]:i.LEQUAL,[Jc]:i.EQUAL,[jc]:i.GEQUAL,[$c]:i.GREATER,[Kc]:i.NOTEQUAL};function ae(D,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===ho||S.magFilter===Vs||S.magFilter===Wn||S.minFilter===kt||S.minFilter===ho||S.minFilter===Vs||S.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,B[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,B[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,B[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,z[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==Vs&&S.minFilter!==Wn||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(D,S){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",A));let fe=S.source,_e=d.get(fe);_e===void 0&&(_e={},d.set(fe,_e));let pe=j(S);if(pe!==D.__cacheKey){_e[pe]===void 0&&(_e[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),_e[pe].usedTimes++;let Ie=_e[D.__cacheKey];Ie!==void 0&&(_e[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(S)),D.__cacheKey=pe,D.__webglTexture=_e[pe].texture}return ne}function L(D,S,ne){return Math.floor(Math.floor(D/ne)/S)}function U(D,S,ne,fe){let pe=D.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,ne,fe,S.data);else{pe.sort((xe,we)=>xe.start-we.start);let Ie=0;for(let xe=1;xe<pe.length;xe++){let we=pe[Ie],He=pe[xe],Oe=we.start+we.count,Ae=L(He.start,S.width,4),qe=L(we.start,S.width,4);He.start<=Oe+1&&Ae===qe&&L(He.start+He.count-1,S.width,4)===Ae?we.count=Math.max(we.count,He.start+He.count-we.start):(++Ie,pe[Ie]=He)}pe.length=Ie+1;let Me=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let xe=0,we=pe.length;xe<we;xe++){let He=pe[xe],Oe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),qe=Oe%S.width,K=Math.floor(Oe/S.width),Se=Ae,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,qe,K,Se,Ee,ne,fe,S.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function v(D,S,ne){let fe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=i.TEXTURE_3D);let _e=le(D,S),pe=S.source;t.bindTexture(fe,D.__webglTexture,i.TEXTURE0+ne);let Ie=n.get(pe);if(pe.version!==Ie.__version||_e===!0){t.activeTexture(i.TEXTURE0+ne);let Me=Ke.getPrimaries(Ke.workingColorSpace),Pe=S.colorSpace===Cn?null:Ke.getPrimaries(S.colorSpace),Le=S.colorSpace===Cn||Me===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let xe=_(S.image,!1,s.maxTextureSize);xe=be(S,xe);let we=r.convert(S.format,S.colorSpace),He=r.convert(S.type),Oe=M(S.internalFormat,we,He,S.colorSpace,S.isVideoTexture);ae(fe,S);let Ae,qe=S.mipmaps,K=S.isVideoTexture!==!0,Se=Ie.__version===void 0||_e===!0,Ee=pe.dataReady,De=I(S,xe);if(S.isDepthTexture)Oe=y(S.format===Ki,S.type),Se&&(K?t.texStorage2D(i.TEXTURE_2D,1,Oe,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,we,He,null));else if(S.isDataTexture)if(qe.length>0){K&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,qe[0].width,qe[0].height);for(let ye=0,ge=qe.length;ye<ge;ye++)Ae=qe[ye],K?Ee&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,we,He,Ae.data);S.generateMipmaps=!1}else K?(Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,xe.width,xe.height),Ee&&U(S,xe,we,He)):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,we,He,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){K&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,qe[0].width,qe[0].height,xe.depth);for(let ye=0,ge=qe.length;ye<ge;ye++)if(Ae=qe[ye],S.format!==Yt)if(we!==null)if(K){if(Ee)if(S.layerUpdates.size>0){let Fe=fl(Ae.width,Ae.height,S.format,S.type);for(let Xe of S.layerUpdates){let st=Ae.data.subarray(Xe*Fe/Ae.data.BYTES_PER_ELEMENT,(Xe+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Xe,Ae.width,Ae.height,1,we,st)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,xe.depth,we,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,xe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,xe.depth,we,He,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,xe.depth,0,we,He,Ae.data)}else{K&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,qe[0].width,qe[0].height);for(let ye=0,ge=qe.length;ye<ge;ye++)Ae=qe[ye],S.format!==Yt?we!==null?K?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Ee&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,we,He,Ae.data)}else if(S.isDataArrayTexture)if(K){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,xe.width,xe.height,xe.depth),Ee)if(S.layerUpdates.size>0){let ye=fl(xe.width,xe.height,S.format,S.type);for(let ge of S.layerUpdates){let Fe=xe.data.subarray(ge*ye/xe.data.BYTES_PER_ELEMENT,(ge+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,xe.width,xe.height,1,we,He,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,we,He,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,xe.width,xe.height,xe.depth,0,we,He,xe.data);else if(S.isData3DTexture)K?(Se&&t.texStorage3D(i.TEXTURE_3D,De,Oe,xe.width,xe.height,xe.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,we,He,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,xe.width,xe.height,xe.depth,0,we,He,xe.data);else if(S.isFramebufferTexture){if(Se)if(K)t.texStorage2D(i.TEXTURE_2D,De,Oe,xe.width,xe.height);else{let ye=xe.width,ge=xe.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Oe,ye,ge,0,we,He,null),ye>>=1,ge>>=1}}else if(qe.length>0){if(K&&Se){let ye=Ue(qe[0]);t.texStorage2D(i.TEXTURE_2D,De,Oe,ye.width,ye.height)}for(let ye=0,ge=qe.length;ye<ge;ye++)Ae=qe[ye],K?Ee&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we,He,Ae):t.texImage2D(i.TEXTURE_2D,ye,Oe,we,He,Ae);S.generateMipmaps=!1}else if(K){if(Se){let ye=Ue(xe);t.texStorage2D(i.TEXTURE_2D,De,Oe,ye.width,ye.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,He,xe)}else t.texImage2D(i.TEXTURE_2D,0,Oe,we,He,xe);p(S)&&h(fe),Ie.__version=pe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function x(D,S,ne){if(S.image.length!==6)return;let fe=le(D,S),_e=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ne);let pe=n.get(_e);if(_e.version!==pe.__version||fe===!0){t.activeTexture(i.TEXTURE0+ne);let Ie=Ke.getPrimaries(Ke.workingColorSpace),Me=S.colorSpace===Cn?null:Ke.getPrimaries(S.colorSpace),Pe=S.colorSpace===Cn||Ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Le=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Le&&!xe?we[ge]=_(S.image[ge],!0,s.maxCubemapSize):we[ge]=xe?S.image[ge].image:S.image[ge],we[ge]=be(S,we[ge]);let He=we[0],Oe=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),qe=M(S.internalFormat,Oe,Ae,S.colorSpace),K=S.isVideoTexture!==!0,Se=pe.__version===void 0||fe===!0,Ee=_e.dataReady,De=I(S,He);ae(i.TEXTURE_CUBE_MAP,S);let ye;if(Le){K&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,He.width,He.height);for(let ge=0;ge<6;ge++){ye=we[ge].mipmaps;for(let Fe=0;Fe<ye.length;Fe++){let Xe=ye[Fe];S.format!==Yt?Oe!==null?K?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Xe.width,Xe.height,Oe,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,qe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Xe.width,Xe.height,Oe,Ae,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,qe,Xe.width,Xe.height,0,Oe,Ae,Xe.data)}}}else{if(ye=S.mipmaps,K&&Se){ye.length>0&&De++;let ge=Ue(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(xe){K?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,Oe,Ae,we[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,qe,we[ge].width,we[ge].height,0,Oe,Ae,we[ge].data);for(let Fe=0;Fe<ye.length;Fe++){let st=ye[Fe].image[ge].image;K?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,st.width,st.height,Oe,Ae,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,qe,st.width,st.height,0,Oe,Ae,st.data)}}else{K?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe,Ae,we[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,qe,Oe,Ae,we[ge]);for(let Fe=0;Fe<ye.length;Fe++){let Xe=ye[Fe];K?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Oe,Ae,Xe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,qe,Oe,Ae,Xe.image[ge])}}}p(S)&&h(i.TEXTURE_CUBE_MAP),pe.__version=_e.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function W(D,S,ne,fe,_e,pe){let Ie=r.convert(ne.format,ne.colorSpace),Me=r.convert(ne.type),Pe=M(ne.internalFormat,Ie,Me,ne.colorSpace),Le=n.get(S),xe=n.get(ne);if(xe.__renderTarget=S,!Le.__hasExternalTextures){let we=Math.max(1,S.width>>pe),He=Math.max(1,S.height>>pe);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,pe,Pe,we,He,S.depth,0,Ie,Me,null):t.texImage2D(_e,pe,Pe,we,He,0,Ie,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),w(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,_e,xe.__webglTexture,0,N(S)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,_e,xe.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(D,S,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){let fe=S.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,pe=y(S.stencilBuffer,_e),Ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=N(S);w(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,pe,S.width,S.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,pe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,D)}else{let fe=S.textures;for(let _e=0;_e<fe.length;_e++){let pe=fe[_e],Ie=r.convert(pe.format,pe.colorSpace),Me=r.convert(pe.type),Pe=M(pe.internalFormat,Ie,Me,pe.colorSpace),Le=N(S);ne&&w(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Pe,S.width,S.height):w(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Pe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let fe=n.get(S.depthTexture);fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),se(S.depthTexture,0);let _e=fe.__webglTexture,pe=N(S);if(S.depthTexture.format===Ni)w(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(S.depthTexture.format===Ki)w(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ce(D){let S=n.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let fe=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){let _e=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),S.__depthDisposeCallback=_e}S.__boundDepthTexture=fe}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");let fe=D.texture.mipmaps;fe&&fe.length>0?V(S.__webglFramebuffer[0],D):V(S.__webglFramebuffer,D)}else if(ne){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=i.createRenderbuffer(),te(S.__webglDepthbuffer[fe],D,!1);else{let _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,pe)}}else{let fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),te(S.__webglDepthbuffer,D,!1);else{let _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(D,S,ne){let fe=n.get(D);S!==void 0&&W(fe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&ce(D)}function C(D){let S=D.texture,ne=n.get(D),fe=n.get(S);D.addEventListener("dispose",P);let _e=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=S.version,o.memory.textures++),pe){ne.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){ne.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)ne.__webglFramebuffer[Me][Pe]=i.createFramebuffer()}else ne.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)ne.__webglFramebuffer[Me]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Me=0,Pe=_e.length;Me<Pe;Me++){let Le=n.get(_e[Me]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&w(D)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let Pe=_e[Me];ne.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Me]);let Le=r.convert(Pe.format,Pe.colorSpace),xe=r.convert(Pe.type),we=M(Pe.internalFormat,Le,xe,Pe.colorSpace,D.isXRRenderTarget===!0),He=N(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,we,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),te(ne.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),ae(i.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)W(ne.__webglFramebuffer[Me][Pe],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else W(ne.__webglFramebuffer[Me],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Pe=_e.length;Me<Pe;Me++){let Le=_e[Me],xe=n.get(Le),we=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,xe.__webglTexture),ae(we,Le),W(ne.__webglFramebuffer,D,Le,i.COLOR_ATTACHMENT0+Me,we,0),p(Le)&&h(we)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,fe.__webglTexture),ae(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)W(ne.__webglFramebuffer[Pe],D,S,i.COLOR_ATTACHMENT0,Me,Pe);else W(ne.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,Me,0);p(S)&&h(Me),t.unbindTexture()}D.depthBuffer&&ce(D)}function X(D){let S=D.textures;for(let ne=0,fe=S.length;ne<fe;ne++){let _e=S[ne];if(p(_e)){let pe=T(D),Ie=n.get(_e).__webglTexture;t.bindTexture(pe,Ie),h(pe),t.unbindTexture()}}}let Y=[],G=[];function Z(D){if(D.samples>0){if(w(D)===!1){let S=D.textures,ne=D.width,fe=D.height,_e=i.COLOR_BUFFER_BIT,pe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(D),Me=S.length>1;if(Me)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Pe=D.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let xe=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,ne,fe,0,0,ne,fe,_e,i.NEAREST),c===!0&&(Y.length=0,G.length=0,Y.push(i.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Y.push(pe),G.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let xe=n.get(S[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function N(D){return Math.min(s.maxSamples,D.samples)}function w(D){let S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(D){let S=o.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function be(D,S){let ne=D.colorSpace,fe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ne!==ii&&ne!==Cn&&(Ke.getTransfer(ne)===tt?(fe!==Yt||_e!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),S}function Ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=de,this.setupRenderTarget=C,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=W,this.useMultisampledRTT=w}function Zg(i,e){function t(n,s=Cn){let r,o=Ke.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ka)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ja)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ja)return i.BYTE;if(n===$a)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===uo)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===Qa)return i.ALPHA;if(n===el)return i.RGB;if(n===Yt)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===nl)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Hs||n===Gs||n===Ws||n===Xs)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===yo||n===vo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===bo||n===Eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===bo)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===ko||n===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:Jg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends En{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",p=new Tl,h={},T=t.getContextAttributes(),M=null,y=null,I=[],A=[],P=new me,F=null,E=new Lt;E.viewport=new ft;let b=new Lt;b.viewport=new ft;let O=[E,b],k=new jr,J=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(v){let x=I[v];return x===void 0&&(x=new Vi,I[v]=x),x.getTargetRaySpace()},this.getControllerGrip=function(v){let x=I[v];return x===void 0&&(x=new Vi,I[v]=x),x.getGripSpace()},this.getHand=function(v){let x=I[v];return x===void 0&&(x=new Vi,I[v]=x),x.getHandSpace()};function se(v){let x=A.indexOf(v.inputSource);if(x===-1)return;let W=I[x];W!==void 0&&(W.update(v.inputSource,v.frame,l||o),W.dispatchEvent({type:v.type,data:v.inputSource}))}function Q(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",oe);for(let v=0;v<I.length;v++){let x=A[v];x!==null&&(A[v]=null,I[v].disconnect(x))}J=null,j=null,p.reset();for(let v in h)delete h[v];e.setRenderTarget(M),m=null,d=null,f=null,s=null,y=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(v){r=v,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(v){a=v,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(v){l=v},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(v){if(s=v,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",oe),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,te=null,V=null;T.depth&&(V=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=T.stencil?Ki:Ni,te=T.stencil?$i:Xn);let ce={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ln(d.textureWidth,d.textureHeight,{format:Yt,type:sn,depthTexture:new Es(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let W={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ln(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),U.setContext(s),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(v){for(let x=0;x<v.removed.length;x++){let W=v.removed[x],te=A.indexOf(W);te>=0&&(A[te]=null,I[te].disconnect(W))}for(let x=0;x<v.added.length;x++){let W=v.added[x],te=A.indexOf(W);if(te===-1){for(let ce=0;ce<I.length;ce++)if(ce>=A.length){A.push(W),te=ce;break}else if(A[ce]===null){A[ce]=W,te=ce;break}if(te===-1)break}let V=I[te];V&&V.connect(W)}}let H=new q,B=new q;function z(v,x,W){H.setFromMatrixPosition(x.matrixWorld),B.setFromMatrixPosition(W.matrixWorld);let te=H.distanceTo(B),V=x.projectionMatrix.elements,ce=W.projectionMatrix.elements,de=V[14]/(V[10]-1),C=V[14]/(V[10]+1),X=(V[9]+1)/V[5],Y=(V[9]-1)/V[5],G=(V[8]-1)/V[0],Z=(ce[8]+1)/ce[0],N=de*G,w=de*Z,re=te/(-G+Z),be=re*-G;if(x.matrixWorld.decompose(v.position,v.quaternion,v.scale),v.translateX(be),v.translateZ(re),v.matrixWorld.compose(v.position,v.quaternion,v.scale),v.matrixWorldInverse.copy(v.matrixWorld).invert(),V[10]===-1)v.projectionMatrix.copy(x.projectionMatrix),v.projectionMatrixInverse.copy(x.projectionMatrixInverse);else{let Ue=de+re,D=C+re,S=N-be,ne=w+(te-be),fe=X*C/D*Ue,_e=Y*C/D*Ue;v.projectionMatrix.makePerspective(S,ne,fe,_e,Ue,D),v.projectionMatrixInverse.copy(v.projectionMatrix).invert()}}function $(v,x){x===null?v.matrixWorld.copy(v.matrix):v.matrixWorld.multiplyMatrices(x.matrixWorld,v.matrix),v.matrixWorldInverse.copy(v.matrixWorld).invert()}this.updateCamera=function(v){if(s===null)return;let x=v.near,W=v.far;p.texture!==null&&(p.depthNear>0&&(x=p.depthNear),p.depthFar>0&&(W=p.depthFar)),k.near=b.near=E.near=x,k.far=b.far=E.far=W,(J!==k.near||j!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),J=k.near,j=k.far),k.layers.mask=v.layers.mask|6,E.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;let te=v.parent,V=k.cameras;$(k,te);for(let ce=0;ce<V.length;ce++)$(V[ce],te);V.length===2?z(k,E,b):k.projectionMatrix.copy(E.projectionMatrix),ae(v,k,te)};function ae(v,x,W){W===null?v.matrix.copy(x.matrixWorld):(v.matrix.copy(W.matrixWorld),v.matrix.invert(),v.matrix.multiply(x.matrixWorld)),v.matrix.decompose(v.position,v.quaternion,v.scale),v.updateMatrixWorld(!0),v.projectionMatrix.copy(x.projectionMatrix),v.projectionMatrixInverse.copy(x.projectionMatrixInverse),v.isPerspectiveCamera&&(v.fov=Fi*2*Math.atan(1/v.projectionMatrix.elements[5]),v.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(v){c=v,d!==null&&(d.fixedFoveation=v),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=v)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(v){return h[v]};let le=null;function L(v,x){if(u=x.getViewerPose(l||o),g=x,u!==null){let W=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let te=!1;W.length!==k.cameras.length&&(k.cameras.length=0,te=!0);for(let C=0;C<W.length;C++){let X=W[C],Y=null;if(m!==null)Y=m.getViewport(X);else{let Z=f.getViewSubImage(d,X);Y=Z.viewport,C===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let G=O[C];G===void 0&&(G=new Lt,G.layers.enable(C),G.viewport=new ft,O[C]=G),G.matrix.fromArray(X.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(X.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Y.x,Y.y,Y.width,Y.height),C===0&&(k.matrix.copy(G.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),te===!0&&k.cameras.push(G)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let C=f.getDepthInformation(W[0]);C&&C.isValid&&C.texture&&p.init(C,s.renderState)}if(V&&V.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let C=0;C<W.length;C++){let X=W[C].camera;if(X){let Y=h[X];Y||(Y=new Ts,h[X]=Y);let G=f.getCameraImage(X);Y.sourceTexture=G}}}}for(let W=0;W<I.length;W++){let te=A[W],V=I[W];te!==null&&V!==void 0&&V.update(te,x,l||o)}le&&le(v,x),x.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:x}),g=null}let U=new Lh;U.setAnimationLoop(L),this.setAnimationLoop=function(v){le=v},this.dispose=function(){}}},gi=new Qt,Kg=new lt;function jg(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,ll(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,T,M,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,T,M):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let T=e.get(h),M=T.envMap,y=T.envMapRotation;M&&(p.envMap.value=M,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(gi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,T,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){let T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qg(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){let y=M.program;n.uniformBlockBinding(T,y)}function l(T,M){let y=s[T.id];y===void 0&&(g(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",p));let I=M.program;n.updateUBOMapping(T,I);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function u(T){let M=f();T.__bindingPointIndex=M;let y=i.createBuffer(),I=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let M=s[T.id],y=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,P=y.length;A<P;A++){let F=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,b=F.length;E<b;E++){let O=F[E];if(m(O,A,E,I)===!0){let k=O.__offset,J=Array.isArray(O.value)?O.value:[O.value],j=0;for(let se=0;se<J.length;se++){let Q=J[se],oe=_(Q);typeof Q=="number"||typeof Q=="boolean"?(O.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,k+j,O.__data)):Q.isMatrix3?(O.__data[0]=Q.elements[0],O.__data[1]=Q.elements[1],O.__data[2]=Q.elements[2],O.__data[3]=0,O.__data[4]=Q.elements[3],O.__data[5]=Q.elements[4],O.__data[6]=Q.elements[5],O.__data[7]=0,O.__data[8]=Q.elements[6],O.__data[9]=Q.elements[7],O.__data[10]=Q.elements[8],O.__data[11]=0):(Q.toArray(O.__data,j),j+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,y,I){let A=T.value,P=M+"_"+y;if(I[P]===void 0)return typeof A=="number"||typeof A=="boolean"?I[P]=A:I[P]=A.clone(),!0;{let F=I[P];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[P]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(T){let M=T.uniforms,y=0,I=16;for(let P=0,F=M.length;P<F;P++){let E=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,O=E.length;b<O;b++){let k=E[b],J=Array.isArray(k.value)?k.value:[k.value];for(let j=0,se=J.length;j<se;j++){let Q=J[j],oe=_(Q),H=y%I,B=H%oe.boundary,z=H+B;y+=B,z!==0&&I-z<oe.storage&&(y+=I-z),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=oe.storage}}}let A=y%I;return A>0&&(y+=I-A),T.__size=y,T.__cache={},this}function _(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){let M=T.target;M.removeEventListener("dispose",p);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}var $o=class{constructor(e={}){let{canvas:t=eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,h=null,T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,I=!1;this._outputColorSpace=pt;let A=0,P=0,F=null,E=-1,b=null,O=new ft,k=new ft,J=null,j=new We(0),se=0,Q=t.width,oe=t.height,H=1,B=null,z=null,$=new ft(0,0,Q,oe),ae=new ft(0,0,Q,oe),le=!1,L=new Gi,U=!1,v=!1,x=new lt,W=new q,te=new ft,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function de(){return F===null?H:1}let C=n;function X(R,ee){return t.getContext(R,ee)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ye,!1),C===null){let ee="webgl2";if(C=X(ee,R),C===null)throw X(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Y,G,Z,N,w,re,be,Ue,D,S,ne,fe,_e,pe,Ie,Me,Pe,Le,xe,we,He,Oe,Ae,qe;function K(){Y=new _m(C),Y.init(),Oe=new Zg(C,Y),G=new hm(C,Y,e,Oe),Z=new qg(C,Y),G.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),N=new vm(C),w=new Dg,re=new Yg(C,Y,Z,w,G,Oe,N),be=new fm(y),Ue=new gm(y),D=new wf(C),Ae=new lm(C,D),S=new xm(C,D,N,Ae),ne=new Sm(C,S,D,N),xe=new Mm(C,G,re),Me=new um(w),fe=new Lg(y,be,Ue,Y,G,Ae,Me),_e=new jg(y,w),pe=new Ng,Ie=new Vg(Y),Le=new am(y,be,Ue,Z,ne,m,c),Pe=new Wg(y,ne,G),qe=new Qg(C,N,G,Z),we=new cm(C,Y,N),He=new ym(C,Y,N),N.programs=fe.programs,y.capabilities=G,y.extensions=Y,y.properties=w,y.renderLists=pe,y.shadowMap=Pe,y.state=Z,y.info=N}K();let Se=new wl(y,C);this.xr=Se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let R=Y.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Y.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(Q,oe,!1))},this.getSize=function(R){return R.set(Q,oe)},this.setSize=function(R,ee,he=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,oe=ee,t.width=Math.floor(R*H),t.height=Math.floor(ee*H),he===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(Q*H,oe*H).floor()},this.setDrawingBufferSize=function(R,ee,he){Q=R,oe=ee,H=he,t.width=Math.floor(R*he),t.height=Math.floor(ee*he),this.setViewport(0,0,R,ee)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,ee,he,ue){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,ee,he,ue),Z.viewport(O.copy($).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,ee,he,ue){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,ee,he,ue),Z.scissor(k.copy(ae).multiplyScalar(H).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Z.setScissorTest(le=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,he=!0){let ue=0;if(R){let ie=!1;if(F!==null){let ve=F.texture.format;ie=ve===_o||ve===go||ve===mo}if(ie){let ve=F.texture.type,Re=ve===sn||ve===Xn||ve===Zi||ve===$i||ve===fo||ve===po,Ne=Le.getClearColor(),Ce=Le.getClearAlpha(),ke=Ne.r,Ge=Ne.g,Be=Ne.b;Re?(g[0]=ke,g[1]=Ge,g[2]=Be,g[3]=Ce,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ke,_[1]=Ge,_[2]=Be,_[3]=Ce,C.clearBufferiv(C.COLOR,0,_))}else ue|=C.COLOR_BUFFER_BIT}ee&&(ue|=C.DEPTH_BUFFER_BIT),he&&(ue|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Le.dispose(),pe.dispose(),Ie.dispose(),w.dispose(),be.dispose(),Ue.dispose(),ne.dispose(),Ae.dispose(),qe.dispose(),fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",on),Se.removeEventListener("sessionend",Ll),Zn.stop()};function Ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=N.autoReset,ee=Pe.enabled,he=Pe.autoUpdate,ue=Pe.needsUpdate,ie=Pe.type;K(),N.autoReset=R,Pe.enabled=ee,Pe.autoUpdate=he,Pe.needsUpdate=ue,Pe.type=ie}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){let ee=R.target;ee.removeEventListener("dispose",ge),Fe(ee)}function Fe(R){Xe(R),w.remove(R)}function Xe(R){let ee=w.get(R).programs;ee!==void 0&&(ee.forEach(function(he){fe.releaseProgram(he)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,he,ue,ie,ve){ee===null&&(ee=V);let Re=ie.isMesh&&ie.matrixWorld.determinant()<0,Ne=jh(R,ee,he,ue,ie);Z.setMaterial(ue,Re);let Ce=he.index,ke=1;if(ue.wireframe===!0){if(Ce=S.getWireframeAttribute(he),Ce===void 0)return;ke=2}let Ge=he.drawRange,Be=he.attributes.position,Je=Ge.start*ke,nt=(Ge.start+Ge.count)*ke;ve!==null&&(Je=Math.max(Je,ve.start*ke),nt=Math.min(nt,(ve.start+ve.count)*ke)),Ce!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Ce.count)):Be!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Be.count));let dt=nt-Je;if(dt<0||dt===1/0)return;Ae.setup(ie,ue,Ne,he,Ce);let ot,it=we;if(Ce!==null&&(ot=D.get(Ce),it=He,it.setIndex(ot)),ie.isMesh)ue.wireframe===!0?(Z.setLineWidth(ue.wireframeLinewidth*de()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(ie.isLine){let ze=ue.linewidth;ze===void 0&&(ze=1),Z.setLineWidth(ze*de()),ie.isLineSegments?it.setMode(C.LINES):ie.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else ie.isPoints?it.setMode(C.POINTS):ie.isSprite&&it.setMode(C.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))it.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let ze=ie._multiDrawStarts,ct=ie._multiDrawCounts,je=ie._multiDrawCount,Nt=Ce?D.get(Ce).bytesPerElement:1,yi=w.get(ue).currentProgram.getUniforms();for(let Ft=0;Ft<je;Ft++)yi.setValue(C,"_gl_DrawID",Ft),it.render(ze[Ft]/Nt,ct[Ft])}else if(ie.isInstancedMesh)it.renderInstances(Je,dt,ie.count);else if(he.isInstancedBufferGeometry){let ze=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ct=Math.min(he.instanceCount,ze);it.renderInstances(Je,dt,ct)}else it.render(Je,dt)};function st(R,ee,he){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=It,R.needsUpdate=!0,Qs(R,ee,he),R.side=bn,R.needsUpdate=!0,Qs(R,ee,he),R.side=qt):Qs(R,ee,he)}this.compile=function(R,ee,he=null){he===null&&(he=R),h=Ie.get(he),h.init(ee),M.push(h),he.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(h.pushLight(ie),ie.castShadow&&h.pushShadow(ie))}),R!==he&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(h.pushLight(ie),ie.castShadow&&h.pushShadow(ie))}),h.setupLights();let ue=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let ve=ie.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let Ne=ve[Re];st(Ne,he,ie),ue.add(Ne)}else st(ve,he,ie),ue.add(ve)}),h=M.pop(),ue},this.compileAsync=function(R,ee,he=null){let ue=this.compile(R,ee,he);return new Promise(ie=>{function ve(){if(ue.forEach(function(Re){w.get(Re).currentProgram.isReady()&&ue.delete(Re)}),ue.size===0){ie(R);return}setTimeout(ve,10)}Y.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let et=null;function mn(R){et&&et(R)}function on(){Zn.stop()}function Ll(){Zn.start()}let Zn=new Lh;Zn.setAnimationLoop(mn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(R){et=R,Se.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},Se.addEventListener("sessionstart",on),Se.addEventListener("sessionend",Ll),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(ee),ee=Se.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,ee,F),h=Ie.get(R,M.length),h.init(ee),M.push(h),x.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),L.setFromProjectionMatrix(x,jt,ee.reversedDepth),v=this.localClippingEnabled,U=Me.init(this.clippingPlanes,v),p=pe.get(R,T.length),p.init(),T.push(p),Se.enabled===!0&&Se.isPresenting===!0){let ve=y.xr.getDepthSensingMesh();ve!==null&&Qo(ve,ee,-1/0,y.sortObjects)}Qo(R,ee,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(B,z),ce=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ce&&Le.addToRenderList(p,R),this.info.render.frame++,U===!0&&Me.beginShadows();let he=h.state.shadowsArray;Pe.render(he,R,ee),U===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=p.opaque,ie=p.transmissive;if(h.setupLights(),ee.isArrayCamera){let ve=ee.cameras;if(ie.length>0)for(let Re=0,Ne=ve.length;Re<Ne;Re++){let Ce=ve[Re];Ul(ue,ie,R,Ce)}ce&&Le.render(R);for(let Re=0,Ne=ve.length;Re<Ne;Re++){let Ce=ve[Re];Dl(p,R,Ce,Ce.viewport)}}else ie.length>0&&Ul(ue,ie,R,ee),ce&&Le.render(R),Dl(p,R,ee);F!==null&&P===0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(y,R,ee),Ae.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(h=M[M.length-1],U===!0&&Me.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Qo(R,ee,he,ue){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||L.intersectsSprite(R)){ue&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(x);let Re=ne.update(R),Ne=R.material;Ne.visible&&p.push(R,Re,Ne,he,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||L.intersectsObject(R))){let Re=ne.update(R),Ne=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),te.copy(Re.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(x)),Array.isArray(Ne)){let Ce=Re.groups;for(let ke=0,Ge=Ce.length;ke<Ge;ke++){let Be=Ce[ke],Je=Ne[Be.materialIndex];Je&&Je.visible&&p.push(R,Re,Je,he,te.z,Be)}}else Ne.visible&&p.push(R,Re,Ne,he,te.z,null)}}let ve=R.children;for(let Re=0,Ne=ve.length;Re<Ne;Re++)Qo(ve[Re],ee,he,ue)}function Dl(R,ee,he,ue){let ie=R.opaque,ve=R.transmissive,Re=R.transparent;h.setupLightsView(he),U===!0&&Me.setGlobalState(y.clippingPlanes,he),ue&&Z.viewport(O.copy(ue)),ie.length>0&&js(ie,ee,he),ve.length>0&&js(ve,ee,he),Re.length>0&&js(Re,ee,he),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ul(R,ee,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ue.id]===void 0&&(h.state.transmissionRenderTarget[ue.id]=new ln(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Ji:sn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ve=h.state.transmissionRenderTarget[ue.id],Re=ue.viewport||O;ve.setSize(Re.z*y.transmissionResolutionScale,Re.w*y.transmissionResolutionScale);let Ne=y.getRenderTarget(),Ce=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(j),se=y.getClearAlpha(),se<1&&y.setClearColor(16777215,.5),y.clear(),ce&&Le.render(he);let Ge=y.toneMapping;y.toneMapping=Rn;let Be=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),h.setupLightsView(ue),U===!0&&Me.setGlobalState(y.clippingPlanes,ue),js(R,he,ue),re.updateMultisampleRenderTarget(ve),re.updateRenderTargetMipmap(ve),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let nt=0,dt=ee.length;nt<dt;nt++){let ot=ee[nt],it=ot.object,ze=ot.geometry,ct=ot.material,je=ot.group;if(ct.side===qt&&it.layers.test(ue.layers)){let Nt=ct.side;ct.side=It,ct.needsUpdate=!0,Nl(it,he,ue,ze,ct,je),ct.side=Nt,ct.needsUpdate=!0,Je=!0}}Je===!0&&(re.updateMultisampleRenderTarget(ve),re.updateRenderTargetMipmap(ve))}y.setRenderTarget(Ne,Ce,ke),y.setClearColor(j,se),Be!==void 0&&(ue.viewport=Be),y.toneMapping=Ge}function js(R,ee,he){let ue=ee.isScene===!0?ee.overrideMaterial:null;for(let ie=0,ve=R.length;ie<ve;ie++){let Re=R[ie],Ne=Re.object,Ce=Re.geometry,ke=Re.group,Ge=Re.material;Ge.allowOverride===!0&&ue!==null&&(Ge=ue),Ne.layers.test(he.layers)&&Nl(Ne,ee,he,Ce,Ge,ke)}}function Nl(R,ee,he,ue,ie,ve){R.onBeforeRender(y,ee,he,ue,ie,ve),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(y,ee,he,ue,R,ve),ie.transparent===!0&&ie.side===qt&&ie.forceSinglePass===!1?(ie.side=It,ie.needsUpdate=!0,y.renderBufferDirect(he,ee,ue,ie,R,ve),ie.side=bn,ie.needsUpdate=!0,y.renderBufferDirect(he,ee,ue,ie,R,ve),ie.side=qt):y.renderBufferDirect(he,ee,ue,ie,R,ve),R.onAfterRender(y,ee,he,ue,ie,ve)}function Qs(R,ee,he){ee.isScene!==!0&&(ee=V);let ue=w.get(R),ie=h.state.lights,ve=h.state.shadowsArray,Re=ie.state.version,Ne=fe.getParameters(R,ie.state,ve,ee,he),Ce=fe.getProgramCacheKey(Ne),ke=ue.programs;ue.environment=R.isMeshStandardMaterial?ee.environment:null,ue.fog=ee.fog,ue.envMap=(R.isMeshStandardMaterial?Ue:be).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",ge),ke=new Map,ue.programs=ke);let Ge=ke.get(Ce);if(Ge!==void 0){if(ue.currentProgram===Ge&&ue.lightsStateVersion===Re)return Ol(R,Ne),Ge}else Ne.uniforms=fe.getUniforms(R),R.onBeforeCompile(Ne,y),Ge=fe.acquireProgram(Ne,Ce),ke.set(Ce,Ge),ue.uniforms=Ne.uniforms;let Be=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=Me.uniform),Ol(R,Ne),ue.needsLights=eu(R),ue.lightsStateVersion=Re,ue.needsLights&&(Be.ambientLightColor.value=ie.state.ambient,Be.lightProbe.value=ie.state.probe,Be.directionalLights.value=ie.state.directional,Be.directionalLightShadows.value=ie.state.directionalShadow,Be.spotLights.value=ie.state.spot,Be.spotLightShadows.value=ie.state.spotShadow,Be.rectAreaLights.value=ie.state.rectArea,Be.ltc_1.value=ie.state.rectAreaLTC1,Be.ltc_2.value=ie.state.rectAreaLTC2,Be.pointLights.value=ie.state.point,Be.pointLightShadows.value=ie.state.pointShadow,Be.hemisphereLights.value=ie.state.hemi,Be.directionalShadowMap.value=ie.state.directionalShadowMap,Be.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Be.spotShadowMap.value=ie.state.spotShadowMap,Be.spotLightMatrix.value=ie.state.spotLightMatrix,Be.spotLightMap.value=ie.state.spotLightMap,Be.pointShadowMap.value=ie.state.pointShadowMap,Be.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=Ge,ue.uniformsList=null,Ge}function Fl(R){if(R.uniformsList===null){let ee=R.currentProgram.getUniforms();R.uniformsList=es.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function Ol(R,ee){let he=w.get(R);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function jh(R,ee,he,ue,ie){ee.isScene!==!0&&(ee=V),re.resetTextureUnits();let ve=ee.fog,Re=ue.isMeshStandardMaterial?ee.environment:null,Ne=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ii,Ce=(ue.isMeshStandardMaterial?Ue:be).get(ue.envMap||Re),ke=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Ge=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Be=!!he.morphAttributes.position,Je=!!he.morphAttributes.normal,nt=!!he.morphAttributes.color,dt=Rn;ue.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(dt=y.toneMapping);let ot=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,it=ot!==void 0?ot.length:0,ze=w.get(ue),ct=h.state.lights;if(U===!0&&(v===!0||R!==b)){let At=R===b&&ue.id===E;Me.setState(ue,R,At)}let je=!1;ue.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ct.state.version||ze.outputColorSpace!==Ne||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==Ce||ue.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Me.numPlanes||ze.numIntersection!==Me.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==Je||ze.morphColors!==nt||ze.toneMapping!==dt||ze.morphTargetsCount!==it)&&(je=!0):(je=!0,ze.__version=ue.version);let Nt=ze.currentProgram;je===!0&&(Nt=Qs(ue,ee,ie));let yi=!1,Ft=!1,ns=!1,ht=Nt.getUniforms(),Gt=ze.uniforms;if(Z.useProgram(Nt.program)&&(yi=!0,Ft=!0,ns=!0),ue.id!==E&&(E=ue.id,Ft=!0),yi||b!==R){Z.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ht.setValue(C,"projectionMatrix",R.projectionMatrix),ht.setValue(C,"viewMatrix",R.matrixWorldInverse);let Pt=ht.map.cameraPosition;Pt!==void 0&&Pt.setValue(C,W.setFromMatrixPosition(R.matrixWorld)),G.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ht.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ft=!0,ns=!0)}if(ie.isSkinnedMesh){ht.setOptional(C,ie,"bindMatrix"),ht.setOptional(C,ie,"bindMatrixInverse");let At=ie.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ht.setValue(C,"boneTexture",At.boneTexture,re))}ie.isBatchedMesh&&(ht.setOptional(C,ie,"batchingTexture"),ht.setValue(C,"batchingTexture",ie._matricesTexture,re),ht.setOptional(C,ie,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",ie._indirectTexture,re),ht.setOptional(C,ie,"batchingColorTexture"),ie._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",ie._colorsTexture,re));let Wt=he.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&xe.update(ie,he,Nt),(Ft||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,ht.setValue(C,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Gt.envMap.value=Ce,Gt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ee.environment!==null&&(Gt.envMapIntensity.value=ee.environmentIntensity),Ft&&(ht.setValue(C,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Qh(Gt,ns),ve&&ue.fog===!0&&_e.refreshFogUniforms(Gt,ve),_e.refreshMaterialUniforms(Gt,ue,H,oe,h.state.transmissionRenderTarget[R.id]),es.upload(C,Fl(ze),Gt,re)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(es.upload(C,Fl(ze),Gt,re),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ht.setValue(C,"center",ie.center),ht.setValue(C,"modelViewMatrix",ie.modelViewMatrix),ht.setValue(C,"normalMatrix",ie.normalMatrix),ht.setValue(C,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let At=ue.uniformsGroups;for(let Pt=0,ea=At.length;Pt<ea;Pt++){let Jn=At[Pt];qe.update(Jn,Nt),qe.bind(Jn,Nt)}}return Nt}function Qh(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function eu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,ee,he){let ue=w.get(R);ue.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),w.get(R.texture).__webglTexture=ee,w.get(R.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){let he=w.get(R);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};let tu=C.createFramebuffer();this.setRenderTarget=function(R,ee=0,he=0){F=R,A=ee,P=he;let ue=!0,ie=null,ve=!1,Re=!1;if(R){let Ce=w.get(R);if(Ce.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(C.FRAMEBUFFER,null),ue=!1;else if(Ce.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ce.__hasExternalTextures)re.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Be=R.depthTexture;if(Ce.__boundDepthTexture!==Be){if(Be!==null&&w.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}let ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let Ge=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[ee])?ie=Ge[ee][he]:ie=Ge[ee],ve=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?ie=w.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[he]:ie=Ge,O.copy(R.viewport),k.copy(R.scissor),J=R.scissorTest}else O.copy($).multiplyScalar(H).floor(),k.copy(ae).multiplyScalar(H).floor(),J=le;if(he!==0&&(ie=tu),Z.bindFramebuffer(C.FRAMEBUFFER,ie)&&ue&&Z.drawBuffers(R,ie),Z.viewport(O),Z.scissor(k),Z.setScissorTest(J),ve){let Ce=w.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce.__webglTexture,he)}else if(Re){let Ce=ee;for(let ke=0;ke<R.textures.length;ke++){let Ge=w.get(R.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,he,Ce)}}else if(R!==null&&he!==0){let Ce=w.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,he)}E=-1},this.readRenderTargetPixels=function(R,ee,he,ue,ie,ve,Re,Ne=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){Z.bindFramebuffer(C.FRAMEBUFFER,Ce);try{let ke=R.textures[Ne],Ge=ke.format,Be=ke.type;if(!G.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-ue&&he>=0&&he<=R.height-ie&&(R.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(ee,he,ue,ie,Oe.convert(Ge),Oe.convert(Be),ve))}finally{let ke=F!==null?w.get(F).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,ee,he,ue,ie,ve,Re,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(ee>=0&&ee<=R.width-ue&&he>=0&&he<=R.height-ie){Z.bindFramebuffer(C.FRAMEBUFFER,Ce);let ke=R.textures[Ne],Ge=ke.format,Be=ke.type;if(!G.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,ve.byteLength,C.STREAM_READ),R.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(ee,he,ue,ie,Oe.convert(Ge),Oe.convert(Be),0);let nt=F!==null?w.get(F).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,nt);let dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await th(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ve),C.deleteBuffer(Je),C.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,he=0){let ue=Math.pow(2,-he),ie=Math.floor(R.image.width*ue),ve=Math.floor(R.image.height*ue),Re=ee!==null?ee.x:0,Ne=ee!==null?ee.y:0;re.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,he,0,0,Re,Ne,ie,ve),Z.unbindTexture()};let nu=C.createFramebuffer(),iu=C.createFramebuffer();this.copyTextureToTexture=function(R,ee,he=null,ue=null,ie=0,ve=null){ve===null&&(ie!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=ie,ie=0):ve=0);let Re,Ne,Ce,ke,Ge,Be,Je,nt,dt,ot=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(he!==null)Re=he.max.x-he.min.x,Ne=he.max.y-he.min.y,Ce=he.isBox3?he.max.z-he.min.z:1,ke=he.min.x,Ge=he.min.y,Be=he.isBox3?he.min.z:0;else{let Wt=Math.pow(2,-ie);Re=Math.floor(ot.width*Wt),Ne=Math.floor(ot.height*Wt),R.isDataArrayTexture?Ce=ot.depth:R.isData3DTexture?Ce=Math.floor(ot.depth*Wt):Ce=1,ke=0,Ge=0,Be=0}ue!==null?(Je=ue.x,nt=ue.y,dt=ue.z):(Je=0,nt=0,dt=0);let it=Oe.convert(ee.format),ze=Oe.convert(ee.type),ct;ee.isData3DTexture?(re.setTexture3D(ee,0),ct=C.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(re.setTexture2DArray(ee,0),ct=C.TEXTURE_2D_ARRAY):(re.setTexture2D(ee,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ee.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ee.unpackAlignment);let je=C.getParameter(C.UNPACK_ROW_LENGTH),Nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ft=C.getParameter(C.UNPACK_SKIP_ROWS),ns=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);let ht=R.isDataArrayTexture||R.isData3DTexture,Gt=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){let Wt=w.get(R),At=w.get(ee),Pt=w.get(Wt.__renderTarget),ea=w.get(At.__renderTarget);Z.bindFramebuffer(C.READ_FRAMEBUFFER,Pt.__webglFramebuffer),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let Jn=0;Jn<Ce;Jn++)ht&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,w.get(R).__webglTexture,ie,Be+Jn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,w.get(ee).__webglTexture,ve,dt+Jn)),C.blitFramebuffer(ke,Ge,Re,Ne,Je,nt,Re,Ne,C.DEPTH_BUFFER_BIT,C.NEAREST);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||w.has(R)){let Wt=w.get(R),At=w.get(ee);Z.bindFramebuffer(C.READ_FRAMEBUFFER,nu),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,iu);for(let Pt=0;Pt<Ce;Pt++)ht?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,ie,Be+Pt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,ie),Gt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.__webglTexture,ve,dt+Pt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,At.__webglTexture,ve),ie!==0?C.blitFramebuffer(ke,Ge,Re,Ne,Je,nt,Re,Ne,C.COLOR_BUFFER_BIT,C.NEAREST):Gt?C.copyTexSubImage3D(ct,ve,Je,nt,dt+Pt,ke,Ge,Re,Ne):C.copyTexSubImage2D(ct,ve,Je,nt,ke,Ge,Re,Ne);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(ct,ve,Je,nt,dt,Re,Ne,Ce,it,ze,ot.data):ee.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,ve,Je,nt,dt,Re,Ne,Ce,it,ot.data):C.texSubImage3D(ct,ve,Je,nt,dt,Re,Ne,Ce,it,ze,ot):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ve,Je,nt,Re,Ne,it,ze,ot.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ve,Je,nt,ot.width,ot.height,it,ot.data):C.texSubImage2D(C.TEXTURE_2D,ve,Je,nt,Re,Ne,it,ze,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ns),ve===0&&ee.generateMipmaps&&C.generateMipmap(ct),Z.unbindTexture()},this.initRenderTarget=function(R){w.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){A=0,P=0,F=null,Z.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Oh={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function Bh({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=Oh[t]||Oh.front,s=n.radius,r=n.x,o=n.z,a=new rt,c=new rt;a.add(c),c.position.set(n.fx,0,n.fz);let l=new Ut(1,20,14),u=[],f=(z,$=.48)=>{let ae=new Mt({color:z,roughness:$});return u.push(ae),ae},d=f("#ffd05a"),m=f("#ffeaa2"),g=f("#538b2c"),_=f("#e5a32a");function p(z,$,ae,le,L,U,v,x){let W=new Qe(l,$);return W.position.set(ae,le,L),W.scale.set(U,v,x),W.castShadow=!0,W.receiveShadow=!0,z.add(W),W}p(c,g,0,5,0,2.2,7,2.2);for(let z of[-1,1]){let $=p(c,g,z*7,4,1,9,1.7,4);$.rotation.z=z*.27,$.rotation.y=z*.3}let h=[];for(let z=0;z<6;z++){let $=new rt;$.rotation.y=z*Math.PI/3,c.add($);let ae=p($,z%2?d:m,0,12,0,5,9,4);h.push(ae)}let T=p(c,_,0,12,0,5,3.5,5),M=f("#c5a777"),y=new Vn(s+1.6,s+1.6,2.6,40),I=new Qe(y,M);I.position.set(r,3,o),I.castShadow=!0,a.add(I);let A=new Vn(s,s,2.2,40),P=new Qe(A,f("#fff4da"));P.position.set(r,3.6,o),P.castShadow=!0,a.add(P);let F=document.createElement("canvas");F.width=F.height=128;let E=F.getContext("2d");E.fillStyle="#4b2a15",E.font="bold 100px Trebuchet MS",E.textAlign="center",E.textBaseline="middle",E.fillText(String(i),64,69);let b=new hn(F);b.colorSpace=pt,b.userData.transient=!0;let O=new ri({map:b,transparent:!0,depthWrite:!1}),k=new ai(s*1.72,s*1.72),J=new Qe(k,O);J.rotation.x=-Math.PI/2,J.position.set(r,4.74,o),a.add(J);let j=0,se=0,Q="";function oe(z){if(!["closed","next","bloom"].includes(z))throw Error("Unknown goal state");Q=z,se=z==="bloom"?1:z==="next"?.16:0,a.userData.state=z,M.color.set(z==="next"?"#f9bf39":"#c5a777"),M.emissive.set(z==="next"?"#d89514":"#000000"),M.emissiveIntensity=z==="next"?.15:0}function H(z,$=.016){j+=(se-j)*Math.min(1,$*7);let ae=j;for(let L of h)L.position.set(0,13-ae*3,2+ae*10),L.scale.set(5+ae*1.5,9-ae*6,4+ae*4),L.rotation.x=ae*-.25;T.visible=ae>.4,T.position.y=11.4;let le=Q==="next"?1+Math.sin(z*2.8)*.035:1;c.scale.setScalar(le),d.emissive.set("#ffc33e"),d.emissiveIntensity=Q==="next"?.08+Math.sin(z*2.8)*.04:0}oe(e),j=se,H(0,1),a.userData.goalNumber=i;function B(z){let $=z===33?13:z===40?15.7:10.5;I.scale.set(($+1.6)/(s+1.6),1,($+1.6)/(s+1.6)),P.scale.set($/s,1,$/s),J.scale.setScalar($/s),a.userData.markerSize=z}return{group:a,setState:oe,setSize:B,update:H,dispose(){l.dispose(),A.dispose(),y.dispose(),k.dispose(),b.dispose(),O.dispose(),u.forEach(z=>z.dispose())}}}var In=(i,e)=>rn.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Rl=[[-13,-9],[20,-10],[8,4],[-11,18]];function zh(i){i.x=rn.clamp(i.x,-16,24),i.z=rn.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function kh(i=73){let e=[{kind:"bee",position:new q(-12,25,10),velocity:new q,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new q(3,21.5,-7),velocity:new q,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new q((In(r.leg+1,a)-.5)*5,20.5,(In(r.leg+3,a)-.5)*5),r.visiting=!0;else{let f=Math.floor(In(r.leg,a)*4);f===r.station&&(f=(f+1+Math.floor(In(r.leg+9,a)*2))%4),r.station=f;let[d,m]=Rl[f];r.target=zh(new q(d+(In(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,m+(In(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],u=(f,d)=>Math.hypot(f.x-d.x,f.z-d.z);if(u(r.target,l.position)<13||l.target&&u(r.target,l.target)<13){let f=-1;for(let d=0;d<Rl.length;d++){let[m,g]=Rl[d],_=new q(m,24,g),p=u(_,l.position)+(l.target?u(_,l.target):0);p>f&&(f=p,r.target=_,r.station=d)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+In(l.leg,i+c)*1.3&&n(l,c);let u=l.target.clone().sub(l.position),f=Math.hypot(u.x,u.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):f<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+In(l.leg,i+c)*1.3:.12+In(l.leg,i+c)*.3);let d=u.clone();d.y=0,d.lengthSq()>0&&d.normalize().multiplyScalar(l.speed*Math.min(1,f/8));let m=d.sub(new q(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&m.addScaledVector(o,(c?-1:1)*(16-a)*11/a),m.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,m.clampLength(0,95),l.velocity.addScaledVector(m,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),zh(l.position)}}return{agents:e,update(r){let o=rn.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Cl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},e0=(i,e)=>rn.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function Vh({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Cl[i];if(!r)throw Error("Unknown flower species "+i);let o=Bh({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new rt;l.position.copy(c.position),a.add(l);let u=[],f=[],d=B=>{let z=new Mt({color:B,roughness:.56});return f.push(z),z},m=d("#538b2c"),g=r.colors.map(d),_=d(r.center),p=new Ut(1,20,12);u.push(p);function h(B,z,$,ae,le,L,U,v){let x=new Qe(p,z);return x.position.set($,ae,le),x.scale.set(L,U,v),x.castShadow=x.receiveShadow=!0,B.add(x),x}h(l,m,0,5,0,1.8,6,1.8);for(let B of[-1,1]){let z=h(l,m,B*6,3,0,8,1.4,3);z.rotation.z=B*.25}let T=[];for(let B=0;B<r.petals;B++){let z=new rt;z.position.y=12,z.rotation.y=B*Math.PI*2/r.petals,l.add(z);let $=new rt;z.add($);let ae=p;if(i==="poppy"){ae=p.clone();let L=ae.attributes.position;for(let U=0;U<L.count;U++){let v=L.getX(U),x=L.getZ(U);L.setY(U,L.getY(U)+Math.sin(Math.atan2(x,v)*5)*.26*Math.hypot(v,x))}ae.computeVertexNormals(),u.push(ae)}let le=new Qe(ae,g[B%2]);le.position.z=r.radius,le.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),le.castShadow=le.receiveShadow=!0,$.add(le),T.push($)}let M=h(l,_,0,13.8,0,r.heart,2.7,r.heart);for(let B=0;B<(i==="poppy"?9:7);B++){let z=B*Math.PI*2/(i==="poppy"?9:7);h(l,_,Math.cos(z)*r.heart*.7,16,Math.sin(z)*r.heart*.7,.65,.6,.65)}let y=new rt;y.name="flower-visitors",l.add(y);let I=d("#e9ad32"),A=d("#d6af50"),P=d("#60452b"),F=d("#fff6df");A.roughness=.95,F.transparent=!0,F.opacity=.72,F.depthWrite=!1;let E=[];for(let B=0;B<2;B++){let z=new rt;z.name=B?"bumblebee":"bee",z.scale.setScalar(1.8),y.add(z);let $=B?1.08:.7,ae=B?.98:.65;h(z,B?A:I,0,0,0,$,ae,1.2),h(z,P,0,0,1.05,B?.56:.48,B?.54:.48,.48);for(let L of[-.55,.15])h(z,P,0,0,L,$*1.02,ae*1.02,.18);if(B){let L=d("#f4e4b9");L.roughness=1,h(z,L,0,0,-.98,.72,.65,.38);let U=[],v=[],x=260;for(let ce=0;ce<x;ce++){let de=1-2*(ce+.5)/x,C=Math.sqrt(1-de*de),X=ce*2.39996323,Y=Math.cos(X)*C,G=Math.sin(X)*C,Z=new q(Y*$*1.015,de*ae*1.015,G*1.215),N=new q(Y/$,de/ae,G/1.2).normalize(),w=.12+e0(ce,91)*.12,re=Z.clone().addScaledVector(N,w);re.z-=.045,U.push(...Z.toArray(),...re.toArray());let be=new We(G<-.72?"#f4e4b9":Math.abs(G+.46)<.18||Math.abs(G-.12)<.17?"#635238":ce%3?"#d6af50":"#e7c776");v.push(...be.toArray(),...be.toArray())}let W=new _t;W.setAttribute("position",new $e(U,3)),W.setAttribute("color",new $e(v,3)),u.push(W);let te=new Wi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});f.push(te);let V=new bs(W,te);V.name="bumblebee-fur",z.add(V)}let le=[];for(let L of[-1,1]){let U=h(z,F,L*.95,.5,-.1,1.5,.16,.65);U.castShadow=!1,le.push(U)}E.push({insect:z,wings:le,seed:e*17+B*31+Object.keys(Cl).indexOf(i)*7,phase:B*2.7,a:new q,b:new q})}let b=!!s;function O(B){b=!!B,a.userData.insects=b}let k=kh(e*17+Object.keys(Cl).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function J(B,z=100){if(!["bee","bumblebee"].includes(B))throw Error("Unknown flower visitor");if(!Number.isFinite(z)||z<50||z>300)throw RangeError("Visitor size must be between 50 and 300 percent");E.find($=>$.insect.name===B).insect.scale.setScalar(1.8*z/100),a.userData.visitorSizes[B]=z}let j=t,se=t==="bloom"?1:0,Q=se;function oe(B){o.setState(B),j=B,se=B==="bloom"?1:0}function H(B,z=.016){o.update(B,z),Q+=(se-Q)*Math.min(1,z*7);let $=Q;c.scale.multiplyScalar(1-$),c.visible=$<.999,l.visible=$>.001,l.scale.setScalar($);for(let le of T)le.rotation.x=-(1-$)*1.1;M.scale.y=2.7*(.8+.2*$),y.visible=b&&j==="bloom"&&$>.94;let ae=k.update(z);for(let le=0;le<E.length;le++){let L=E[le],U=ae[le];L.insect.position.copy(U.position);let v=U.velocity.x,x=U.velocity.z,W=Math.hypot(v,x);if(W>.5){let te=Math.atan2(v,x),V=Math.atan2(Math.sin(te-L.insect.rotation.y),Math.cos(te-L.insect.rotation.y));L.insect.rotation.y+=V*Math.min(1,z*9),L.insect.rotation.z=rn.clamp(-V*.22,-.24,.24)}else L.insect.rotation.z*=Math.max(0,1-z*6);L.insect.rotation.x=-Math.min(.16,W*.009),L.wings.forEach((te,V)=>te.rotation.z=Math.sin(B*30+L.phase)*(V?1:-1)*.5)}}return O(s),H(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:oe,setInsects:O,setVisitorSize:J,setSize:o.setSize,update:H,get state(){return j},dispose(){o.dispose(),u.forEach(B=>B.dispose()),f.forEach(B=>B.dispose())}}}var Ys=new q;function Zt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ys.copy(e),Ys[n]=0,Ys.normalize();let l=.5*o/(o+a),u=1-Ys.angleTo(i)/c;return Math.sign(Ys[t])===1?u*l:a/(o+a)+l+l*(1-u)}var Yn=class i extends kn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new q,l=new q,u=new q(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,g=f.length/6,_=new q,p=.5/o;for(let h=0,T=0;h<f.length;h+=3,T+=2)switch(c.fromArray(f,h),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[h+0]=u.x*Math.sign(c.x)+l.x*r,f[h+1]=u.y*Math.sign(c.y)+l.y*r,f[h+2]=u.z*Math.sign(c.z)+l.z*r,d[h+0]=l.x,d[h+1]=l.y,d[h+2]=l.z,Math.floor(h/g)){case 0:_.set(1,0,0),m[T+0]=Zt(_,l,"z","y",r,n),m[T+1]=1-Zt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),m[T+0]=1-Zt(_,l,"z","y",r,n),m[T+1]=1-Zt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),m[T+0]=1-Zt(_,l,"x","z",r,e),m[T+1]=Zt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),m[T+0]=1-Zt(_,l,"x","z",r,e),m[T+1]=1-Zt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),m[T+0]=1-Zt(_,l,"x","y",r,e),m[T+1]=1-Zt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),m[T+0]=Zt(_,l,"x","y",r,e),m[T+1]=1-Zt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Hh(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let T=0,M=a.length;T<M;T++){let y=a[T],I=i.attributes[y];c[y]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let A=i.morphAttributes[y];A&&(l[y]||(l[y]=[]),A.forEach((P,F)=>{let E=new P.array.constructor(P.count*P.itemSize);l[y][F]=new P.constructor(E,P.itemSize,P.normalized)}))}let m=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=m*_;for(let T=0;T<r;T++){let M=n?n.getX(T):T,y="";for(let I=0,A=a.length;I<A;I++){let P=a[I],F=i.getAttribute(P),E=F.itemSize;for(let b=0;b<E;b++)y+=`${~~(F[f[b]](M)*_+p)},`}if(y in t)u.push(t[y]);else{for(let I=0,A=a.length;I<A;I++){let P=a[I],F=i.getAttribute(P),E=i.morphAttributes[P],b=F.itemSize,O=c[P],k=l[P];for(let J=0;J<b;J++){let j=f[J],se=d[J];if(O[se](o,F[j](M)),E)for(let Q=0,oe=E.length;Q<oe;Q++)k[Q][se](o,E[Q][j](M))}}t[y]=o,u.push(o),o++}}let h=i.clone();for(let T in i.attributes){let M=c[T];if(h.setAttribute(T,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),T in l)for(let y=0;y<l[T].length;y++){let I=l[T][y];h.morphAttributes[T][y]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return h.setIndex(u),h}var jo=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new q,r=new q,o=new q,a=new q,c=[s,r,o,a],l=new q,u=new q,f=new q,d=new q,m=[l,u,f,d],g=new We,_=new We,p=new We,h=new We,T=[g,_,p,h],M=new me,y=new me,I=new me,A=new me,P=[M,y,I,A],F=new me,E=new me,b=new me,O=new me,k=[F,E,b,O],J=e.attributes,j=J.normal!==void 0,se=J.color!==void 0,Q=J.uv!==void 0,oe=J.uv1!==void 0,H=J.position.array,B=j?J.normal.array:null,z=se?J.color.array:null,$=Q?J.uv.array:null,ae=oe?J.uv1.array:null,le=H,L=B,U=z,v=$,x=ae,W=0,te=!0;function V(de,C,X){let Y=c[de],G=c[C],Z=c[X];if(le.push(Y.x,Y.y,Y.z),le.push(G.x,G.y,G.z),le.push(Z.x,Z.y,Z.z),j){let N=m[de],w=m[C],re=m[X];L.push(N.x,N.y,N.z),L.push(w.x,w.y,w.z),L.push(re.x,re.y,re.z)}if(se){let N=T[de],w=T[C],re=T[X];U.push(N.r,N.g,N.b),U.push(w.r,w.g,w.b),U.push(re.r,re.g,re.b)}if(Q){let N=P[de],w=P[C],re=P[X];v.push(N.x,N.y),v.push(w.x,w.y),v.push(re.x,re.y)}if(oe){let N=k[de],w=k[C],re=k[X];x.push(N.x,N.y),x.push(w.x,w.y),x.push(re.x,re.y)}}for(;te&&W<t;){W++,te=!1,H=le,le=[],j&&(B=L,L=[]),se&&(z=U,U=[]),Q&&($=v,v=[]),oe&&(ae=x,x=[]);for(let de=0,C=0,X=H.length;de<X;de+=9,C+=6){s.fromArray(H,de+0),r.fromArray(H,de+3),o.fromArray(H,de+6),j&&(l.fromArray(B,de+0),u.fromArray(B,de+3),f.fromArray(B,de+6)),se&&(g.fromArray(z,de+0),_.fromArray(z,de+3),p.fromArray(z,de+6)),Q&&(M.fromArray($,C+0),y.fromArray($,C+2),I.fromArray($,C+4)),oe&&(F.fromArray(ae,C+0),E.fromArray(ae,C+2),b.fromArray(ae,C+4));let Y=s.distanceToSquared(r),G=r.distanceToSquared(o),Z=s.distanceToSquared(o);Y>n||G>n||Z>n?(te=!0,Y>=G&&Y>=Z?(a.lerpVectors(s,r,.5),j&&d.lerpVectors(l,u,.5),se&&h.lerpColors(g,_,.5),Q&&A.lerpVectors(M,y,.5),oe&&O.lerpVectors(F,E,.5),V(0,3,2),V(3,1,2)):G>=Y&&G>=Z?(a.lerpVectors(r,o,.5),j&&d.lerpVectors(u,f,.5),se&&h.lerpColors(_,p,.5),Q&&A.lerpVectors(y,I,.5),oe&&O.lerpVectors(E,b,.5),V(0,1,3),V(3,2,0)):(a.lerpVectors(s,o,.5),j&&d.lerpVectors(l,f,.5),se&&h.lerpColors(g,p,.5),Q&&A.lerpVectors(M,I,.5),oe&&O.lerpVectors(F,b,.5),V(0,1,3),V(3,1,2))):V(0,1,2)}}let ce=new _t;return ce.setAttribute("position",new $e(le,3)),j&&ce.setAttribute("normal",new $e(L,3)),se&&ce.setAttribute("color",new $e(U,3)),Q&&ce.setAttribute("uv",new $e(v,2)),oe&&ce.setAttribute("uv1",new $e(x,2)),ce}};var t0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},Zs=rn.clamp;function n0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=Zs(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var i0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function Gh(i,e,t){if(i==="split"){let n=Math.min(...i0.map(([s,r])=>n0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,c=e*Math.cos(a)+t*Math.sin(a),l=-e*Math.sin(a)+t*Math.cos(a),u=((c-10)/8.5)**2+(l/(s===6?3.2:4.7))**2;n=Math.max(n,Zs((1-u)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function Wh(i="fossil",{seed:e=73}={}){if(!t0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new rt,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,c=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let h=0;h<s;h++)for(let T=0;T<s;T++){let M=(T/(s-1)-.5)*66,y=(h/(s-1)-.5)*66,I=Gh(i,M,y),A=Math.sin(M*.18+y*.11)*Math.sin(y*.21-M*.07),P=c()-.5,F=1+A*(t?.004:.015)+P*(t?.025:.065)-I.ink,E=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],b=(h*s+T)*4;for(let k=0;k<3;k++)r[b+k]=Zs(E[k]*F+(220-E[k])*I.vein,0,255);r[b+3]=255;let O=Zs(138+P*(t?4:12)+A-I.cut*28,0,255);o.set([O,O,O,255],b)}let l=new Hi(r,s,s);l.colorSpace=pt;let u=new Hi(o,s,s);for(let h of[l,u])h.magFilter=h.minFilter=kt,h.needsUpdate=!0;let f=new Mt({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:l,bumpMap:i==="reference"?null:u,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(f.onBeforeCompile=h=>{let T=new We(t?"#9e9688":i==="split"?"#978f80":"#999182");h.vertexShader=`varying float stoneTop;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),h.fragmentShader=`varying float stoneTop;
`+h.fragmentShader,h.fragmentShader=h.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${T.r},${T.g},${T.b}),diffuseColor.rgb,stoneTop);`)}),f.customProgramCacheKey=()=>`slink-stone-top-${i}`;let d=new Yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let h=new jo(3.5,10).modify(d);d.dispose(),d=h}d.translate(0,0,10);let m=d.attributes.position,g=d.attributes.uv;for(let h=0;h<m.count;h++){let T=m.getX(h),M=m.getY(h),y=m.getZ(h),I=Zs((y-10)/16.5,0,1);if(i!=="reference"){let A=Math.max(0,1-(T*T+M*M)/1800),P=Math.sin(T*.13+M*.035)*Math.cos(M*.1)*(t?.12:.7),F=t?A*5:i==="split"?A*1.3-Math.max(0,T*.17+M*.09-2)*.6:A*.6;y+=(F+P-Gh(i,T,M).cut)*I}m.setZ(h,y),g.setXY(h,T/66+.5,M/66+.5)}d.deleteAttribute("normal");let _=Hh(d,1e-4);d.dispose(),d=_,d.computeVertexNormals();let p=new Qe(d,f);return p.castShadow=p.receiveShadow=!0,p.userData.cell=-1,n.add(p),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){d.dispose(),f.dispose(),l.dispose(),u.dispose()}}}var Xh=["daisy","buttercup","meadow","poppy"],qh=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],Yh=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function s0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function Zh(i){let e=Yh(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=Xh[e%4],n=i.marks.map(()=>t),s={};n.length>=4&&e%3===0&&(n[n.length-2]=Xh[(e%4+1)%4]);for(let r of s0(i.stones||[],i.n)){let o=Yh(e+":"+r.join(","));if(r.length===1){s[r[0]]=qh[o%qh.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Il=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),Pl={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function r0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new hn(t)}function Js(i,{seed:e=73}={}){let t=Pl[i];if(!t)throw Error("Unknown tile "+i);let n=new rt,s=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=(d,m={})=>new Mt({color:d,roughness:.75,...m}),o=(d,m,g=0,_=0,p=0)=>{let h=new Qe(d,m);return h.position.set(g,_,p),h.castShadow=h.receiveShadow=!0,n.add(h),h},a=r(t.color,{bumpMap:r0(73,t.kind==="earth"?.65:.12),bumpScale:t.grain||.18,roughness:t.kind==="earth"?.95:.65}),c=t.height+3.5,l,u;if(t.kind==="earth"){let d=73.5,m=5,g=-d/2,_=d/2,p=new gt;p.moveTo(g+m,g),p.lineTo(_-m,g),p.quadraticCurveTo(_,g,_,g+m),p.lineTo(_,_-m),p.quadraticCurveTo(_,_,_-m,_),p.lineTo(g+m,_),p.quadraticCurveTo(g,_,g,_-m),p.lineTo(g,g+m),p.quadraticCurveTo(g,g,g+m,g),p.closePath(),l=new tn(p,{depth:t.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else l=new Yn(78.5,78.5,c,4,7.5),u=(t.height-3.5)/2;let f=o(l,a,0,0,u);if(f.userData.surface=!0,t.kind==="earth"){let d=[r("#c59b6b"),r("#98714c"),r("#dbb78a")];for(let m=0;m<t.pebbles;m++){let g=(s()-.5)*59,_=(s()-.5)*59,p=.8+s()*1.2,h=o(new Ut(1,9,6),d[m%3],g,_,t.height-.25);h.scale.set(p*1.6,p,p*.55),h.rotation.z=s()*6}for(let m=0;m<22;m++){let g=o(new Ut(1,8,6),a,(s()-.5)*62,(s()-.5)*62,t.height-.35),_=1+s()*1.5;g.scale.set(_*1.6,_,.5)}}else if(t.kind!=="reference"){let d=[r("#d3f471"),r("#b1e443"),r("#87bf24")],m=(g,_,p)=>{let h=new gt;return h.moveTo(-p,0),h.quadraticCurveTo(-p*.8,g*.6,_,g),h.quadraticCurveTo(p*1.1,g*.45,p,0),h.closePath(),new tn(h,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let g=0;g<t.tufts;g++){let _=(s()-.5)*59,p=(s()-.5)*59;for(let h=0;h<3;h++){let T=t.bladeHeight*(.6+s()*.4),M=o(m(T,(h-1)*T*.4,t.kind==="grass"&&i==="grass-velvet"?1.6:1.1),d[h],_+(h-1)*1.8,p,t.height-.15);M.rotation.x=Math.PI/2,M.rotateOnWorldAxis(new q(0,0,1),s()*Math.PI*2)}}if(t.kind==="clover")for(let g=0;g<6;g++){let _=(s()-.5)*50,p=(s()-.5)*50;for(let h=0;h<3;h++){let T=h*Math.PI*2/3,M=o(new Ut(1,12,8),d[g%2],_+Math.cos(T)*2.3,p+Math.sin(T)*2.3,t.height+1.7);M.scale.set(3.3,2.6,.9),M.rotation.z=T}}a.emissive.set("#4c790c"),a.emissiveIntensity=.055}else{let d=r("#9fc53b");for(let m=0;m<4;m++){let g=m*Math.PI/2+.3,_=o(new Ut(1,12,8),d,21+Math.cos(g)*4,-20+Math.sin(g)*4,13.7);_.scale.set(4.4,2.6,.65),_.rotation.z=g}}return n.userData={variant:i,top:t.height,walkable:!0,footprint:Il},n}function $s(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var o0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function Jh(i,{seed:e=73}={}){let t=o0[i];if(!t)throw Error("Unknown meadow "+i);let n=Js("grass-clover",{seed:e}),s=n.children.find(A=>A.userData.surface),r=new rt;for(let A of[...n.children])A!==s&&r.add(A);$s(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new Ut(1,12,8),c=A=>new Mt({color:A,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],u=[],f=(A,P,F,E,b)=>{let O=new Qe(A,P);return O.position.set(F,E,b),O.castShadow=O.receiveShadow=!0,n.add(O),O};function d(A,P,F,E,b=3.3,O=2.6){let k=f(a,l[1],A,P,F);return k.scale.set(b,O,.85),k.rotation.z=E,k}for(let A=0;A<t.clover;A++){let P=(o()-.5)*52,F=(o()-.5)*52;for(let E=0;E<3;E++){let b=E*Math.PI*2/3+o()*.12;d(P+Math.cos(b)*2.3,F+Math.sin(b)*2.3,19.7,b)}}function m(A,P,F){for(let E=0;E<3;E++){let b=new gt,O=(E-1)*F*.35;b.moveTo(-1,0),b.quadraticCurveTo(-.8,F*.65,O,F),b.quadraticCurveTo(1,F*.45,1,0),b.closePath();let k=new tn(b,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),J=f(k,l[E],A+(E-1)*1.6,P,17.8);J.rotation.x=Math.PI/2,J.rotateOnWorldAxis(new q(0,0,1),.6)}}for(let A=0;A<t.tufts;A++)m((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&m(20,-19,10);let g=c("#fff3c4"),_=c("#f6b7a0"),p=c("#efb52e"),h=c("#709e29"),T=c("#edbd43"),M=c("#63502a"),y=new Mt({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let A=0;A<(t.flowers||0);A++){let P=A?-16:16,F=A?-14:12,E=A?24:25.5,b=f(new Vn(.6,.85,E-18,8),h,P,F,(18+E)/2);b.rotation.x=Math.PI/2;for(let k=0;k<5;k++){let J=k*Math.PI*2/5,j=f(a,A?_:g,P+Math.cos(J)*3,F+Math.sin(J)*3,E);j.scale.set(3.2,1.8,.8),j.rotation.z=J}if(f(a,p,P,F,E+.7).scale.set(1.9,1.9,1.2),d(P-2,F,20.5,-.5,3.2,1.4),t.insects)for(let k=0;k<t.insects;k++){let J=new rt;n.add(J);let j=new Qe(a,T);j.scale.set(.85,1.3,.8),J.add(j);let se=new Qe(a,M);se.position.y=1.2,se.scale.setScalar(.6),J.add(se);let Q=[];for(let oe of[-1,1]){let H=new Qe(a,y);H.position.set(oe*1,0,.5),H.scale.set(1.8,.75,.25),H.rotation.z=oe*.35,J.add(H),Q.push(H)}u.push({insect:J,wings:Q,x:P,y:F,phase:k*3.14,radius:8+k*2,z:E+5+k})}}n.userData={...n.userData,meadowVariant:i,animated:u.length>0};function I(A){for(let P of u){let F=A*.85+P.phase;P.insect.position.set(P.x+Math.cos(F)*P.radius,P.y+Math.sin(F)*P.radius*.65,P.z+Math.sin(A*1.8+P.phase)*1.2),P.insect.rotation.z=F,P.wings.forEach((E,b)=>E.rotation.y=Math.sin(A*28)*(b?1:-1)*.45)}}return I(0),{group:n,update:I,dispose(){$s(n)}}}var $h={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function Kh(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new Mt({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=$h[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new me(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var a0=pt,Ks=class i extends ci{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new Ns(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(L,U){if(L.nodeType!==1)return;let v=y(L),x=!1,W=null;switch(L.nodeName){case"svg":U=g(L,U);break;case"style":r(L);break;case"g":U=g(L,U);break;case"path":U=g(L,U),L.hasAttribute("d")&&(W=s(L));break;case"rect":U=g(L,U),W=c(L);break;case"polygon":U=g(L,U),W=l(L);break;case"polyline":U=g(L,U),W=u(L);break;case"circle":U=g(L,U),W=f(L);break;case"ellipse":U=g(L,U),W=d(L);break;case"line":U=g(L,U),W=m(L);break;case"defs":x=!0;break;case"use":U=g(L,U);let ce=(L.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),de=L.viewportElement.getElementById(ce);de?n(de,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+ce);break;default:}W&&(U.fill!==void 0&&U.fill!=="none"&&W.color.setStyle(U.fill,a0),A(W,$),k.push(W),W.userData={node:L,style:U});let te=L.childNodes;for(let V=0;V<te.length;V++){let ce=te[V];x&&ce.nodeName!=="style"&&ce.nodeName!=="defs"||n(ce,U)}v&&(j.pop(),j.length>0?$.copy(j[j.length-1]):$.identity())}function s(L){let U=new nn,v=new me,x=new me,W=new me,te=!0,V=!1,ce=L.getAttribute("d");if(ce===""||ce==="none")return null;let de=ce.match(/[a-df-z][^a-df-z]*/ig);for(let C=0,X=de.length;C<X;C++){let Y=de[C],G=Y.charAt(0),Z=Y.slice(1).trim();te===!0&&(V=!0,te=!1);let N;switch(G){case"M":N=p(Z);for(let w=0,re=N.length;w<re;w+=2)v.x=N[w+0],v.y=N[w+1],x.x=v.x,x.y=v.y,w===0?U.moveTo(v.x,v.y):U.lineTo(v.x,v.y),w===0&&W.copy(v);break;case"H":N=p(Z);for(let w=0,re=N.length;w<re;w++)v.x=N[w],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"V":N=p(Z);for(let w=0,re=N.length;w<re;w++)v.y=N[w],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"L":N=p(Z);for(let w=0,re=N.length;w<re;w+=2)v.x=N[w+0],v.y=N[w+1],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"C":N=p(Z);for(let w=0,re=N.length;w<re;w+=6)U.bezierCurveTo(N[w+0],N[w+1],N[w+2],N[w+3],N[w+4],N[w+5]),x.x=N[w+2],x.y=N[w+3],v.x=N[w+4],v.y=N[w+5],w===0&&V===!0&&W.copy(v);break;case"S":N=p(Z);for(let w=0,re=N.length;w<re;w+=4)U.bezierCurveTo(_(v.x,x.x),_(v.y,x.y),N[w+0],N[w+1],N[w+2],N[w+3]),x.x=N[w+0],x.y=N[w+1],v.x=N[w+2],v.y=N[w+3],w===0&&V===!0&&W.copy(v);break;case"Q":N=p(Z);for(let w=0,re=N.length;w<re;w+=4)U.quadraticCurveTo(N[w+0],N[w+1],N[w+2],N[w+3]),x.x=N[w+0],x.y=N[w+1],v.x=N[w+2],v.y=N[w+3],w===0&&V===!0&&W.copy(v);break;case"T":N=p(Z);for(let w=0,re=N.length;w<re;w+=2){let be=_(v.x,x.x),Ue=_(v.y,x.y);U.quadraticCurveTo(be,Ue,N[w+0],N[w+1]),x.x=be,x.y=Ue,v.x=N[w+0],v.y=N[w+1],w===0&&V===!0&&W.copy(v)}break;case"A":N=p(Z,[3,4],7);for(let w=0,re=N.length;w<re;w+=7){if(N[w+5]==v.x&&N[w+6]==v.y)continue;let be=v.clone();v.x=N[w+5],v.y=N[w+6],x.x=v.x,x.y=v.y,o(U,N[w],N[w+1],N[w+2],N[w+3],N[w+4],be,v),w===0&&V===!0&&W.copy(v)}break;case"m":N=p(Z);for(let w=0,re=N.length;w<re;w+=2)v.x+=N[w+0],v.y+=N[w+1],x.x=v.x,x.y=v.y,w===0?U.moveTo(v.x,v.y):U.lineTo(v.x,v.y),w===0&&W.copy(v);break;case"h":N=p(Z);for(let w=0,re=N.length;w<re;w++)v.x+=N[w],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"v":N=p(Z);for(let w=0,re=N.length;w<re;w++)v.y+=N[w],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"l":N=p(Z);for(let w=0,re=N.length;w<re;w+=2)v.x+=N[w+0],v.y+=N[w+1],x.x=v.x,x.y=v.y,U.lineTo(v.x,v.y),w===0&&V===!0&&W.copy(v);break;case"c":N=p(Z);for(let w=0,re=N.length;w<re;w+=6)U.bezierCurveTo(v.x+N[w+0],v.y+N[w+1],v.x+N[w+2],v.y+N[w+3],v.x+N[w+4],v.y+N[w+5]),x.x=v.x+N[w+2],x.y=v.y+N[w+3],v.x+=N[w+4],v.y+=N[w+5],w===0&&V===!0&&W.copy(v);break;case"s":N=p(Z);for(let w=0,re=N.length;w<re;w+=4)U.bezierCurveTo(_(v.x,x.x),_(v.y,x.y),v.x+N[w+0],v.y+N[w+1],v.x+N[w+2],v.y+N[w+3]),x.x=v.x+N[w+0],x.y=v.y+N[w+1],v.x+=N[w+2],v.y+=N[w+3],w===0&&V===!0&&W.copy(v);break;case"q":N=p(Z);for(let w=0,re=N.length;w<re;w+=4)U.quadraticCurveTo(v.x+N[w+0],v.y+N[w+1],v.x+N[w+2],v.y+N[w+3]),x.x=v.x+N[w+0],x.y=v.y+N[w+1],v.x+=N[w+2],v.y+=N[w+3],w===0&&V===!0&&W.copy(v);break;case"t":N=p(Z);for(let w=0,re=N.length;w<re;w+=2){let be=_(v.x,x.x),Ue=_(v.y,x.y);U.quadraticCurveTo(be,Ue,v.x+N[w+0],v.y+N[w+1]),x.x=be,x.y=Ue,v.x=v.x+N[w+0],v.y=v.y+N[w+1],w===0&&V===!0&&W.copy(v)}break;case"a":N=p(Z,[3,4],7);for(let w=0,re=N.length;w<re;w+=7){if(N[w+5]==0&&N[w+6]==0)continue;let be=v.clone();v.x+=N[w+5],v.y+=N[w+6],x.x=v.x,x.y=v.y,o(U,N[w],N[w+1],N[w+2],N[w+3],N[w+4],be,v),w===0&&V===!0&&W.copy(v)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(v.copy(W),U.currentPath.currentPoint.copy(v),te=!0);break;default:console.warn(Y)}V=!1}return U}function r(L){if(!(!L.sheet||!L.sheet.cssRules||!L.sheet.cssRules.length))for(let U=0;U<L.sheet.cssRules.length;U++){let v=L.sheet.cssRules[U];if(v.type!==1)continue;let x=v.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<x.length;W++){let te=Object.fromEntries(Object.entries(v.style).filter(([,V])=>V!==""));J[x[W]]=Object.assign(J[x[W]]||{},te)}}}function o(L,U,v,x,W,te,V,ce){if(U==0||v==0){L.lineTo(ce.x,ce.y);return}x=x*Math.PI/180,U=Math.abs(U),v=Math.abs(v);let de=(V.x-ce.x)/2,C=(V.y-ce.y)/2,X=Math.cos(x)*de+Math.sin(x)*C,Y=-Math.sin(x)*de+Math.cos(x)*C,G=U*U,Z=v*v,N=X*X,w=Y*Y,re=N/G+w/Z;if(re>1){let Me=Math.sqrt(re);U=Me*U,v=Me*v,G=U*U,Z=v*v}let be=G*w+Z*N,Ue=(G*Z-be)/be,D=Math.sqrt(Math.max(0,Ue));W===te&&(D=-D);let S=D*U*Y/v,ne=-D*v*X/U,fe=Math.cos(x)*S-Math.sin(x)*ne+(V.x+ce.x)/2,_e=Math.sin(x)*S+Math.cos(x)*ne+(V.y+ce.y)/2,pe=a(1,0,(X-S)/U,(Y-ne)/v),Ie=a((X-S)/U,(Y-ne)/v,(-X-S)/U,(-Y-ne)/v)%(Math.PI*2);L.currentPath.absellipse(fe,_e,U,v,pe,pe+Ie,te===0,x)}function a(L,U,v,x){let W=L*v+U*x,te=Math.sqrt(L*L+U*U)*Math.sqrt(v*v+x*x),V=Math.acos(Math.max(-1,Math.min(1,W/te)));return L*x-U*v<0&&(V=-V),V}function c(L){let U=M(L.getAttribute("x")||0),v=M(L.getAttribute("y")||0),x=M(L.getAttribute("rx")||L.getAttribute("ry")||0),W=M(L.getAttribute("ry")||L.getAttribute("rx")||0),te=M(L.getAttribute("width")),V=M(L.getAttribute("height")),ce=1-.551915024494,de=new nn;return de.moveTo(U+x,v),de.lineTo(U+te-x,v),(x!==0||W!==0)&&de.bezierCurveTo(U+te-x*ce,v,U+te,v+W*ce,U+te,v+W),de.lineTo(U+te,v+V-W),(x!==0||W!==0)&&de.bezierCurveTo(U+te,v+V-W*ce,U+te-x*ce,v+V,U+te-x,v+V),de.lineTo(U+x,v+V),(x!==0||W!==0)&&de.bezierCurveTo(U+x*ce,v+V,U,v+V-W*ce,U,v+V-W),de.lineTo(U,v+W),(x!==0||W!==0)&&de.bezierCurveTo(U,v+W*ce,U+x*ce,v,U+x,v),de}function l(L){function U(te,V,ce){let de=M(V),C=M(ce);W===0?x.moveTo(de,C):x.lineTo(de,C),W++}let v=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new nn,W=0;return L.getAttribute("points").replace(v,U),x.currentPath.autoClose=!0,x}function u(L){function U(te,V,ce){let de=M(V),C=M(ce);W===0?x.moveTo(de,C):x.lineTo(de,C),W++}let v=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new nn,W=0;return L.getAttribute("points").replace(v,U),x.currentPath.autoClose=!1,x}function f(L){let U=M(L.getAttribute("cx")||0),v=M(L.getAttribute("cy")||0),x=M(L.getAttribute("r")||0),W=new un;W.absarc(U,v,x,0,Math.PI*2);let te=new nn;return te.subPaths.push(W),te}function d(L){let U=M(L.getAttribute("cx")||0),v=M(L.getAttribute("cy")||0),x=M(L.getAttribute("rx")||0),W=M(L.getAttribute("ry")||0),te=new un;te.absellipse(U,v,x,W,0,Math.PI*2);let V=new nn;return V.subPaths.push(te),V}function m(L){let U=M(L.getAttribute("x1")||0),v=M(L.getAttribute("y1")||0),x=M(L.getAttribute("x2")||0),W=M(L.getAttribute("y2")||0),te=new nn;return te.moveTo(U,v),te.lineTo(x,W),te.currentPath.autoClose=!1,te}function g(L,U){U=Object.assign({},U);let v={};if(L.hasAttribute("class")){let V=L.getAttribute("class").split(/\s/).filter(Boolean).map(ce=>ce.trim());for(let ce=0;ce<V.length;ce++)v=Object.assign(v,J["."+V[ce]])}L.hasAttribute("id")&&(v=Object.assign(v,J["#"+L.getAttribute("id")]));function x(V,ce,de){de===void 0&&(de=function(X){return X.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),X}),L.hasAttribute(V)&&(U[ce]=de(L.getAttribute(V))),v[V]&&(U[ce]=de(v[V])),L.style&&L.style[V]!==""&&(U[ce]=de(L.style[V]))}function W(V){return Math.max(0,Math.min(1,M(V)))}function te(V){return Math.max(0,M(V))}return x("fill","fill"),x("fill-opacity","fillOpacity",W),x("fill-rule","fillRule"),x("opacity","opacity",W),x("stroke","stroke"),x("stroke-opacity","strokeOpacity",W),x("stroke-width","strokeWidth",te),x("stroke-linejoin","strokeLineJoin"),x("stroke-linecap","strokeLineCap"),x("stroke-miterlimit","strokeMiterLimit",te),x("visibility","visibility"),U}function _(L,U){return L-(U-L)}function p(L,U,v){if(typeof L!="string")throw new TypeError("Invalid input: "+typeof L);let x={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,te=1,V=2,ce=3,de=W,C=!0,X="",Y="",G=[];function Z(be,Ue,D){let S=new SyntaxError('Unexpected character "'+be+'" at index '+Ue+".");throw S.partial=D,S}function N(){X!==""&&(Y===""?G.push(Number(X)):G.push(Number(X)*Math.pow(10,Number(Y)))),X="",Y=""}let w,re=L.length;for(let be=0;be<re;be++){if(w=L[be],Array.isArray(U)&&U.includes(G.length%v)&&x.FLAGS.test(w)){de=te,X=w,N();continue}if(de===W){if(x.WHITESPACE.test(w))continue;if(x.DIGIT.test(w)||x.SIGN.test(w)){de=te,X=w;continue}if(x.POINT.test(w)){de=V,X=w;continue}x.COMMA.test(w)&&(C&&Z(w,be,G),C=!0)}if(de===te){if(x.DIGIT.test(w)){X+=w;continue}if(x.POINT.test(w)){X+=w,de=V;continue}if(x.EXP.test(w)){de=ce;continue}x.SIGN.test(w)&&X.length===1&&x.SIGN.test(X[0])&&Z(w,be,G)}if(de===V){if(x.DIGIT.test(w)){X+=w;continue}if(x.EXP.test(w)){de=ce;continue}x.POINT.test(w)&&X[X.length-1]==="."&&Z(w,be,G)}if(de===ce){if(x.DIGIT.test(w)){Y+=w;continue}if(x.SIGN.test(w)){if(Y===""){Y+=w;continue}Y.length===1&&x.SIGN.test(Y)&&Z(w,be,G)}}x.WHITESPACE.test(w)?(N(),de=W,C=!1):x.COMMA.test(w)?(N(),de=W,C=!0):x.SIGN.test(w)?(N(),de=te,X=w):x.POINT.test(w)?(N(),de=V,X=w):Z(w,be,G)}return N(),G}let h=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function M(L){let U="px";if(typeof L=="string"||L instanceof String)for(let x=0,W=h.length;x<W;x++){let te=h[x];if(L.endsWith(te)){U=te,L=L.substring(0,L.length-te.length);break}}let v;return U==="px"&&t.defaultUnit!=="px"?v=T.in[t.defaultUnit]/t.defaultDPI:(v=T[U][t.defaultUnit],v<0&&(v=T[U].in*t.defaultDPI)),v*parseFloat(L)}function y(L){if(!(L.hasAttribute("transform")||L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))))return null;let U=I(L);return j.length>0&&U.premultiply(j[j.length-1]),$.copy(U),j.push(U),U}function I(L){let U=new Ve,v=se;if(L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))){let x=M(L.getAttribute("x")),W=M(L.getAttribute("y"));U.translate(x,W)}if(L.hasAttribute("transform")){let x=L.getAttribute("transform").split(")");for(let W=x.length-1;W>=0;W--){let te=x[W].trim();if(te==="")continue;let V=te.indexOf("("),ce=te.length;if(V>0&&V<ce){let de=te.slice(0,V),C=p(te.slice(V+1));switch(v.identity(),de){case"translate":if(C.length>=1){let X=C[0],Y=0;C.length>=2&&(Y=C[1]),v.translate(X,Y)}break;case"rotate":if(C.length>=1){let X=0,Y=0,G=0;X=C[0]*Math.PI/180,C.length>=3&&(Y=C[1],G=C[2]),Q.makeTranslation(-Y,-G),oe.makeRotation(X),H.multiplyMatrices(oe,Q),Q.makeTranslation(Y,G),v.multiplyMatrices(Q,H)}break;case"scale":if(C.length>=1){let X=C[0],Y=X;C.length>=2&&(Y=C[1]),v.scale(X,Y)}break;case"skewX":C.length===1&&v.set(1,Math.tan(C[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":C.length===1&&v.set(1,0,0,Math.tan(C[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":C.length===6&&v.set(C[0],C[2],C[4],C[1],C[3],C[5],0,0,1);break}}U.premultiply(v)}}return U}function A(L,U){function v(V){z.set(V.x,V.y,1).applyMatrix3(U),V.set(z.x,z.y)}function x(V){let ce=V.xRadius,de=V.yRadius,C=Math.cos(V.aRotation),X=Math.sin(V.aRotation),Y=new q(ce*C,ce*X,0),G=new q(-de*X,de*C,0),Z=Y.applyMatrix3(U),N=G.applyMatrix3(U),w=se.set(Z.x,N.x,0,Z.y,N.y,0,0,0,1),re=Q.copy(w).invert(),D=oe.copy(re).transpose().multiply(re).elements,S=O(D[0],D[1],D[4]),ne=Math.sqrt(S.rt1),fe=Math.sqrt(S.rt2);if(V.xRadius=1/ne,V.yRadius=1/fe,V.aRotation=Math.atan2(S.sn,S.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let pe=Q.set(ne,0,0,0,fe,0,0,0,1),Ie=oe.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),Me=pe.multiply(Ie).multiply(w),Pe=Le=>{let{x:xe,y:we}=new q(Math.cos(Le),Math.sin(Le),0).applyMatrix3(Me);return Math.atan2(we,xe)};V.aStartAngle=Pe(V.aStartAngle),V.aEndAngle=Pe(V.aEndAngle),P(U)&&(V.aClockwise=!V.aClockwise)}}function W(V){let ce=E(U),de=b(U);V.xRadius*=ce,V.yRadius*=de;let C=ce>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);V.aRotation+=C,P(U)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}let te=L.subPaths;for(let V=0,ce=te.length;V<ce;V++){let C=te[V].curves;for(let X=0;X<C.length;X++){let Y=C[X];Y.isLineCurve?(v(Y.v1),v(Y.v2)):Y.isCubicBezierCurve?(v(Y.v0),v(Y.v1),v(Y.v2),v(Y.v3)):Y.isQuadraticBezierCurve?(v(Y.v0),v(Y.v1),v(Y.v2)):Y.isEllipseCurve&&(B.set(Y.aX,Y.aY),v(B),Y.aX=B.x,Y.aY=B.y,F(U)?x(Y):W(Y))}}}function P(L){let U=L.elements;return U[0]*U[4]-U[1]*U[3]<0}function F(L){let U=L.elements,v=U[0]*U[3]+U[1]*U[4];if(v===0)return!1;let x=E(L),W=b(L);return Math.abs(v/(x*W))>Number.EPSILON}function E(L){let U=L.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function b(L){let U=L.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function O(L,U,v){let x,W,te,V,ce,de=L+v,C=L-v,X=Math.sqrt(C*C+4*U*U);return de>0?(x=.5*(de+X),ce=1/x,W=L*ce*v-U*ce*U):de<0?W=.5*(de-X):(x=.5*X,W=-.5*X),C>0?te=C+X:te=C-X,Math.abs(te)>2*Math.abs(U)?(ce=-2*U/te,V=1/Math.sqrt(1+ce*ce),te=ce*V):Math.abs(U)===0?(te=1,V=0):(ce=-.5*te/U,te=1/Math.sqrt(1+ce*ce),V=ce*te),C>0&&(ce=te,te=-V,V=ce),{rt1:x,rt2:W,cs:te,sn:V}}let k=[],J={},j=[],se=new Ve,Q=new Ve,oe=new Ve,H=new Ve,B=new me,z=new q,$=new Ve,ae=new DOMParser().parseFromString(e,"image/svg+xml");return n(ae.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:ae.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,p,h,T){let M=_.x,y=p.x,I=h.x,A=T.x,P=_.y,F=p.y,E=h.y,b=T.y,O=(A-I)*(P-E)-(b-E)*(M-I),k=(y-M)*(P-E)-(F-P)*(M-I),J=(b-E)*(y-M)-(A-I)*(F-P),j=O/J,se=k/J;if(J===0&&O!==0||j<=0||j>=1||se<0||se>1)return null;if(O===0&&J===0){for(let Q=0;Q<2;Q++)if(o(Q===0?h:T,_,p),s.loc==n.ORIGIN){let oe=Q===0?h:T;return{x:oe.x,y:oe.y,t:s.t}}else if(s.loc==n.BETWEEN){let oe=+(M+s.t*(y-M)).toPrecision(10),H=+(P+s.t*(F-P)).toPrecision(10);return{x:oe,y:H,t:s.t}}return null}else{for(let H=0;H<2;H++)if(o(H===0?h:T,_,p),s.loc==n.ORIGIN){let B=H===0?h:T;return{x:B.x,y:B.y,t:s.t}}let Q=+(M+j*(y-M)).toPrecision(10),oe=+(P+j*(F-P)).toPrecision(10);return{x:Q,y:oe,t:j}}}function o(_,p,h){let T=h.x-p.x,M=h.y-p.y,y=_.x-p.x,I=_.y-p.y,A=T*I-y*M;if(_.x===p.x&&_.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===h.x&&_.y===h.y){s.loc=n.DESTINATION,s.t=1;return}if(A<-Number.EPSILON){s.loc=n.LEFT;return}if(A>Number.EPSILON){s.loc=n.RIGHT;return}if(T*y<0||M*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(T*T+M*M)<Math.sqrt(y*y+I*I)){s.loc=n.BEYOND;return}let P;T!==0?P=y/T:P=I/M,s.loc=n.BETWEEN,s.t=P}function a(_,p){let h=[],T=[];for(let M=1;M<_.length;M++){let y=_[M-1],I=_[M];for(let A=1;A<p.length;A++){let P=p[A-1],F=p[A],E=r(y,I,P,F);E!==null&&h.find(b=>b.t<=E.t+Number.EPSILON&&b.t>=E.t-Number.EPSILON)===void 0&&(h.push(E),T.push(new me(E.x,E.y)))}}return T}function c(_,p,h){let T=new me;p.getCenter(T);let M=[];return h.forEach(y=>{y.boundingBox.containsPoint(T)&&a(_,y.points).forEach(A=>{M.push({identifier:y.identifier,isCW:y.isCW,point:A})})}),M.sort((y,I)=>y.point.x-I.point.x),M}function l(_,p,h,T,M){(M==null||M==="")&&(M="nonzero");let y=new me;_.boundingBox.getCenter(y);let I=[new me(h,y.y),new me(T,y.y)],A=c(I,_.boundingBox,p);A.sort((k,J)=>k.point.x-J.point.x);let P=[],F=[];A.forEach(k=>{k.identifier===_.identifier?P.push(k):F.push(k)});let E=P[0].point.x,b=[],O=0;for(;O<F.length&&F[O].point.x<E;)b.length>0&&b[b.length-1]===F[O].identifier?b.pop():b.push(F[O].identifier),O++;if(b.push(_.identifier),M==="evenodd"){let k=b.length%2===0,J=b[b.length-2];return{identifier:_.identifier,isHole:k,for:J}}else if(M==="nonzero"){let k=!0,J=null,j=null;for(let se=0;se<b.length;se++){let Q=b[se];k?(j=p[Q].isCW,k=!1,J=Q):j!==p[Q].isCW&&(j=p[Q].isCW,k=!0)}return{identifier:_.identifier,isHole:k,for:J}}else console.warn('fill-rule: "'+M+'" is currently not implemented.')}let u=999999999,f=-999999999,d=e.subPaths.map(_=>{let p=_.getPoints(),h=-999999999,T=999999999,M=-999999999,y=999999999;for(let I=0;I<p.length;I++){let A=p[I];A.y>h&&(h=A.y),A.y<T&&(T=A.y),A.x>M&&(M=A.x),A.x<y&&(y=A.x)}return f<=M&&(f=M+1),u>=y&&(u=y-1),{curves:_.curves,points:p,isCW:Tt.isClockWise(p),identifier:-1,boundingBox:new zs(new me(y,T),new me(M,h))}});d=d.filter(_=>_.points.length>1);for(let _=0;_<d.length;_++)d[_].identifier=_;let m=d.map(_=>l(_,d,u,f,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(_=>{if(!m[_.identifier].isHole){let h=new gt;h.curves=_.curves,m.filter(M=>M.isHole&&M.for===_.identifier).forEach(M=>{let y=d[M.identifier],I=new un;I.curves=y.curves,h.holes.push(I)}),g.push(h)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let c=new _t;return c.setAttribute("position",new $e(r,3)),c.setAttribute("normal",new $e(o,3)),c.setAttribute("uv",new $e(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){let l=new me,u=new me,f=new me,d=new me,m=new me,g=new me,_=new me,p=new me,h=new me,T=new me,M=new me,y=new me,I=new me,A=new me,P=new me,F=new me,E=new me;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=C(e);let b=e.length;if(b<2)return 0;let O=e[0].equals(e[b-1]),k,J=e[0],j,se=t.strokeWidth/2,Q=1/(b-1),oe=0,H,B,z,$,ae=!1,le=0,L=c*3,U=c*2;v(e[0],e[1],l).multiplyScalar(se),p.copy(e[0]).sub(l),h.copy(e[0]).add(l),T.copy(p),M.copy(h);for(let X=1;X<b;X++){k=e[X],X===b-1?O?j=e[1]:j=void 0:j=e[X+1];let Y=l;if(v(J,k,Y),f.copy(Y).multiplyScalar(se),y.copy(k).sub(f),I.copy(k).add(f),H=oe+Q,B=!1,j!==void 0){v(k,j,u),f.copy(u).multiplyScalar(se),A.copy(k).sub(f),P.copy(k).add(f),z=!0,f.subVectors(j,J),Y.dot(f)<0&&(z=!1),X===1&&(ae=z),f.subVectors(j,k),f.normalize();let G=Math.abs(Y.dot(f));if(G>Number.EPSILON){let Z=se/G;f.multiplyScalar(-Z),d.subVectors(k,J),m.copy(d).setLength(Z).add(f),F.copy(m).negate();let N=m.length(),w=d.length();d.divideScalar(w),g.subVectors(j,k);let re=g.length();switch(g.divideScalar(re),d.dot(F)<w&&g.dot(F)<re&&(B=!0),E.copy(m).add(k),F.add(k),$=!1,B?z?(P.copy(F),I.copy(F)):(A.copy(F),y.copy(F)):te(),t.strokeLineJoin){case"bevel":V(z,B,H);break;case"round":ce(z,B),z?W(k,y,A,H,0):W(k,P,I,H,1);break;case"miter":case"miter-clip":default:let be=se*t.strokeMiterLimit/N;if(be<1)if(t.strokeLineJoin!=="miter-clip"){V(z,B,H);break}else ce(z,B),z?(g.subVectors(E,y).multiplyScalar(be).add(y),_.subVectors(E,A).multiplyScalar(be).add(A),x(y,H,0),x(g,H,0),x(k,H,.5),x(k,H,.5),x(g,H,0),x(_,H,0),x(k,H,.5),x(_,H,0),x(A,H,0)):(g.subVectors(E,I).multiplyScalar(be).add(I),_.subVectors(E,P).multiplyScalar(be).add(P),x(I,H,1),x(g,H,1),x(k,H,.5),x(k,H,.5),x(g,H,1),x(_,H,1),x(k,H,.5),x(_,H,1),x(P,H,1));else B?(z?(x(h,oe,1),x(p,oe,0),x(E,H,0),x(h,oe,1),x(E,H,0),x(F,H,1)):(x(h,oe,1),x(p,oe,0),x(E,H,1),x(p,oe,0),x(F,H,0),x(E,H,1)),z?A.copy(E):P.copy(E)):z?(x(y,H,0),x(E,H,0),x(k,H,.5),x(k,H,.5),x(E,H,0),x(A,H,0)):(x(I,H,1),x(E,H,1),x(k,H,.5),x(k,H,.5),x(E,H,1),x(P,H,1)),$=!0;break}}else te()}else te();!O&&X===b-1&&de(e[0],T,M,z,!0,oe),oe=H,J=k,p.copy(A),h.copy(P)}if(!O)de(k,y,I,z,!1,H);else if(B&&r){let X=E,Y=F;ae!==z&&(X=F,Y=E),z?($||ae)&&(Y.toArray(r,0),Y.toArray(r,9),$&&X.toArray(r,3)):($||!ae)&&(Y.toArray(r,3),Y.toArray(r,9),$&&X.toArray(r,0))}return le;function v(X,Y,G){return G.subVectors(Y,X),G.set(-G.y,G.x).normalize()}function x(X,Y,G){r&&(r[L]=X.x,r[L+1]=X.y,r[L+2]=0,o&&(o[L]=0,o[L+1]=0,o[L+2]=1),L+=3,a&&(a[U]=Y,a[U+1]=G,U+=2)),le+=3}function W(X,Y,G,Z,N){l.copy(Y).sub(X).normalize(),u.copy(G).sub(X).normalize();let w=Math.PI,re=l.dot(u);Math.abs(re)<1&&(w=Math.abs(Math.acos(re))),w/=n,f.copy(Y);for(let be=0,Ue=n-1;be<Ue;be++)d.copy(f).rotateAround(X,w),x(f,Z,N),x(d,Z,N),x(X,Z,.5),f.copy(d);x(d,Z,N),x(G,Z,N),x(X,Z,.5)}function te(){x(h,oe,1),x(p,oe,0),x(y,H,0),x(h,oe,1),x(y,H,0),x(I,H,1)}function V(X,Y,G){Y?X?(x(h,oe,1),x(p,oe,0),x(y,H,0),x(h,oe,1),x(y,H,0),x(F,H,1),x(y,G,0),x(A,G,0),x(F,G,.5)):(x(h,oe,1),x(p,oe,0),x(I,H,1),x(p,oe,0),x(F,H,0),x(I,H,1),x(I,G,1),x(F,G,0),x(P,G,1)):X?(x(y,G,0),x(A,G,0),x(k,G,.5)):(x(I,G,1),x(P,G,0),x(k,G,.5))}function ce(X,Y){Y&&(X?(x(h,oe,1),x(p,oe,0),x(y,H,0),x(h,oe,1),x(y,H,0),x(F,H,1),x(y,oe,0),x(k,H,.5),x(F,H,1),x(k,H,.5),x(A,oe,0),x(F,H,1)):(x(h,oe,1),x(p,oe,0),x(I,H,1),x(p,oe,0),x(F,H,0),x(I,H,1),x(I,oe,1),x(F,H,0),x(k,H,.5),x(k,H,.5),x(F,H,0),x(P,oe,1)))}function de(X,Y,G,Z,N,w){switch(t.strokeLineCap){case"round":N?W(X,G,Y,w,.5):W(X,Y,G,w,.5);break;case"square":if(N)l.subVectors(Y,X),u.set(l.y,-l.x),f.addVectors(l,u).add(X),d.subVectors(u,l).add(X),Z?(f.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(f.toArray(r,3),a[7]===1?d.toArray(r,9):f.toArray(r,9),d.toArray(r,0));else{l.subVectors(G,X),u.set(l.y,-l.x),f.addVectors(l,u).add(X),d.subVectors(u,l).add(X);let re=r.length;Z?(f.toArray(r,re-3),d.toArray(r,re-6),d.toArray(r,re-12)):(d.toArray(r,re-6),f.toArray(r,re-3),d.toArray(r,re-12))}break;case"butt":default:break}}function C(X){let Y=!1;for(let Z=1,N=X.length-1;Z<N;Z++)if(X[Z].distanceTo(X[Z+1])<s){Y=!0;break}if(!Y)return X;let G=[];G.push(X[0]);for(let Z=1,N=X.length-1;Z<N;Z++)X[Z].distanceTo(X[Z+1])>=s&&G.push(X[Z]);return G.push(X[X.length-1]),G}}};window.SlinkGrowthModules={createTile:Js,VARIANTS:Pl,TILE_SPEC:Il,disposeTile:$s};window.Slink3D=(()=>{let i,e,t,n,s,r=new Bs,o=[],a=[],c=[],l,u,f,d=!1,m,g=[],_=[],p=0,h=0,T=(B,z=.55,$={})=>new Mt({color:B,roughness:z,metalness:0,...$});function M(B,z,$,ae,le){let L=new gt;return L.moveTo(B+le,z),L.lineTo(B+$-le,z),L.quadraticCurveTo(B+$,z,B+$,z+le),L.lineTo(B+$,z+ae-le),L.quadraticCurveTo(B+$,z+ae,B+$-le,z+ae),L.lineTo(B+le,z+ae),L.quadraticCurveTo(B,z+ae,B,z+ae-le),L.lineTo(B,z+le),L.quadraticCurveTo(B,z,B+le,z),L}function y(B,z,$=0,ae=0,le=0,L=n){let U=new Qe(B,z);return U.position.set($,ae,le),U.castShadow=!0,U.receiveShadow=!0,L.add(U),U}function I(B,z,$,ae,le,L,U,v,x=n){return y(new Yn(B,z,$,4,ae),le,L,U,v,x)}function A(){let B=document.createElement("canvas");B.width=B.height=128;let z=B.getContext("2d"),$=z.createImageData(128,128),ae=73;for(let L=0;L<$.data.length;L+=4){ae=ae*1664525+1013904223>>>0;let U=128+(ae>>>27)%9;$.data[L]=$.data[L+1]=$.data[L+2]=U,$.data[L+3]=255}z.putImageData($,0,0);let le=new hn(B);return le.wrapS=le.wrapT=Ui,le}let P=()=>A();function F(){let B=A(),z=B.image,$=z.getContext("2d");$.fillStyle="#656565";for(let ae=0;ae<4;ae++){let le=ae*Math.PI/2+.5;$.save(),$.translate(64+Math.cos(le)*18,64+Math.sin(le)*18),$.rotate(le),$.beginPath(),$.ellipse(0,0,18,9,0,0,Math.PI*2),$.fill(),$.restore()}return $.beginPath(),$.arc(64,64,5,0,Math.PI*2),$.fill(),B.needsUpdate=!0,B}function E(B){let z=document.createElement("canvas");z.width=z.height=128;let $=z.getContext("2d");$.fillStyle="#77421a",$.font="bold 82px Trebuchet MS",$.textAlign="center",$.textBaseline="middle",$.fillText(String(B),64,69);let ae=new hn(z);return ae.colorSpace=pt,ae}function b(B,z){let $=0;for(let le=0;le<B.length;le++){let L=B[le],U=B[(le+1)%B.length];$+=L.x*U.y-U.x*L.y}let ae=$>0?1:-1;return B.map((le,L)=>{let U=B[(L+B.length-1)%B.length],v=B[(L+1)%B.length],x=le.clone().sub(U).normalize(),W=v.clone().sub(le).normalize(),te=new me(x.y,-x.x).multiplyScalar(ae),V=new me(W.y,-W.x).multiplyScalar(ae),ce=te.clone().add(V).normalize();return le.clone().add(ce.multiplyScalar(z/Math.max(.25,ce.dot(te))))})}function O(B){let z=new gt;return B.forEach(($,ae)=>ae?z.lineTo($.x,-$.y):z.moveTo($.x,-$.y)),z.closePath(),z}function k(B,z){let $=new Set(B),ae=[];for(;$.size;){let le=$.values().next().value,L=[le];$.delete(le);for(let U=0;U<L.length;U++){let v=L[U];for(let x of[v-z,v+z,v%z?v-1:-1,v%z<z-1?v+1:-1])$.has(x)&&($.delete(x),L.push(x))}ae.push(L)}return ae}function J(B,z,$){let ae=new Set(B),le=[],L=(v,x)=>v>=0&&x>=0&&v<z&&ae.has(x*z+v);for(let v of B){let x=v%z,W=Math.floor(v/z),te=20+x*80,V=20+W*80;L(x,W-1)||le.push([[te,V],[te+80,V]]),L(x+1,W)||le.push([[te+80,V],[te+80,V+80]]),L(x,W+1)||le.push([[te+80,V+80],[te,V+80]]),L(x-1,W)||le.push([[te,V+80],[te,V]])}let U=[];for(;le.length;){let v=le.shift(),x=v[0],W=[x],te=v[1];for(;te.join()!=x.join();){W.push(te);let V=le.findIndex(ce=>ce[0].join()==te.join());if(V<0)break;te=le.splice(V,1)[0][1]}W=W.filter((V,ce)=>{let de=W[(ce+W.length-1)%W.length],C=W[(ce+1)%W.length];return!(de[0]===V[0]&&C[0]===V[0]||de[1]===V[1]&&C[1]===V[1])}),U.push(W.map(V=>new me(...V)))}return U.sort((v,x)=>Math.abs(Tt.area(x))-Math.abs(Tt.area(v))),U.map((v,x)=>{let W=b(v,x?$:-$),te=new gt;return W.forEach((V,ce)=>{let de=W[(ce+W.length-1)%W.length],C=W[(ce+1)%W.length],X=Math.min(10,V.distanceTo(de)/3,V.distanceTo(C)/3),Y=V.clone().add(de.clone().sub(V).normalize().multiplyScalar(X)),G=V.clone().add(C.clone().sub(V).normalize().multiplyScalar(X));ce?te.lineTo(Y.x,-Y.y):te.moveTo(Y.x,-Y.y),te.quadraticCurveTo(V.x,-V.y,G.x,-G.y)}),te.closePath(),te})}function j(){s=document.createElement("canvas"),s.id="terrain3d",s.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(s),i=new $o({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0,i.shadowMap.type=Qr,i.outputColorSpace=pt,i.toneMapping=ao,i.toneMappingExposure=.88,e=new Ss,e.add(new Os("#fff6dc","#a28d6c",1.65));let B=new Yi("#fff4dc",3.3);B.position.set(-300,450,750),B.castShadow=!0,B.shadow.mapSize.set(2048,2048),Object.assign(B.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),B.shadow.bias=-3e-4,B.shadow.normalBias=.9,B.shadow.radius=4,e.add(B);let z=new Yi("#d4e8ff",.4);z.position.set(500,-100,400),e.add(z),n=new rt,e.add(n),t=new hi,t.up.set(0,1,0),t.near=1,t.far=3e3,u=new ResizeObserver(()=>se()),u.observe(document.getElementById("board"));let $=(le,L)=>{let U=s.getBoundingClientRect();return r.setFromCamera(new me((le-U.left)/U.width*2-1,-(L-U.top)/U.height*2+1),t),r.intersectObjects(o,!1)[0]?.object.userData.cell??-1},ae=le=>{if(!d)return;let L=m||le,U=le.clientX-L.clientX,v=le.clientY-L.clientY,x=Math.max(1,Math.ceil(Math.hypot(U,v)/3));for(let W=1;W<=x;W++){let te=$(L.clientX+U*W/x,L.clientY+v*W/x);te>=0&&l.onMove(te)}m={clientX:le.clientX,clientY:le.clientY}};s.addEventListener("pointerdown",le=>{le.preventDefault(),s.setPointerCapture(le.pointerId),d=!0,m=null,ae(le),document.getElementById("board").focus({preventScroll:!0})}),s.addEventListener("pointermove",ae);for(let le of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(le,()=>{d=!1,m=null});s.addEventListener("webglcontextlost",le=>{le.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),s.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function se(){if(!l)return;let B=document.getElementById("board"),z=B.clientWidth,$=B.clientHeight;if(!z||!$)return;i.setSize(z,$,!1);let ae=new cn().setFromObject(n);ae.max.z=Math.max(ae.max.z,60);let le=ae.getCenter(new q);t.position.set(le.x,le.y-430,le.z+1250),t.lookAt(le.x,le.y,0),t.updateMatrixWorld();let L=e.children.find(de=>de.isDirectionalLight&&de.castShadow);if(L){let de=Math.max(ae.max.x-ae.min.x,ae.max.y-ae.min.y)*.75+60;L.target.position.set(le.x,le.y,0),e.add(L.target),Object.assign(L.shadow.camera,{left:-de,right:de,top:de,bottom:-de}),L.shadow.camera.updateProjectionMatrix()}let U=t.matrixWorldInverse,v=new me(1/0,1/0),x=new me(-1/0,-1/0);for(let de of[ae.min.x,ae.max.x])for(let C of[ae.min.y,ae.max.y])for(let X of[ae.min.z,ae.max.z]){let Y=new q(de,C,X).applyMatrix4(U);v.min(Y),x.max(Y)}let W=(v.x+x.x)/2,te=(v.y+x.y)/2,V=Math.max((x.y-v.y)/2,(x.x-v.x)/2/(z/$))+13,ce=V*z/$;Object.assign(t,{left:W-ce,right:W+ce,top:te+V,bottom:te-V}),t.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0,Q()}function Q(){i.render(e,t)}function oe(B){if(requestAnimationFrame(oe),!i||!l||document.hidden){h=B;return}if(!(B-h<33)){p+=Math.min((B-h)/1e3,.1),h=B;for(let z of _)z.update(p);for(let z of g){z.meadow?.update(p);let $=Math.min((B-z.changedAt)/z.duration,1);z.progress=z.from+(z.target-z.from)*Math.max(0,$);let ae=z.progress;z.grown.scale.z=(8.5+9.5*ae)/18,z.grown.position.z=0,z.grown.visible=ae>0,z.grown.traverse(le=>{le.isMesh&&(le.material.transparent=ae<1,le.material.opacity=ae,le.castShadow=ae>.7)}),z.earth.visible=ae<1}for(let z of c){let $=g.find(ae=>ae.i===z.i);z.goal.group.position.z=8.5+9.5*($?.progress||0),z.goal.update(p,.033)}i.shadowMap.needsUpdate=!0,Q()}}requestAnimationFrame(oe);function H(B,z,$){l={l:B,onMove:$};let ae=new Set,le=new Set,L=new Set;n.traverse(G=>{G.geometry&&ae.add(G.geometry);for(let Z of[].concat(G.material||[])){le.add(Z);for(let N of Object.values(Z))N?.isTexture&&L.add(N)}}),n.clear(),ae.forEach(G=>G.dispose()),le.forEach(G=>G.dispose()),L.forEach(G=>G.dispose()),o=[],a=[],c=[],g=[],_=[];let U=new Ks,v=U.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+z+'"/></svg>'),x=Ks.createShapes(v.paths[0])[0].getPoints(24);x.pop();let W=O(b(x,11)),te=T("#f6dfb5",.62,{bumpMap:P(),bumpScale:.18,side:qt}),V=[...B.water||[],...B.lava||[]],ce=G=>({x:G%B.n*80+60,y:-(Math.floor(G/B.n)*80+60)}),de=[];for(let[G,Z]of[["water",B.water||[]],["lava",B.lava||[]]])for(let N of k(Z,B.n)){let w=J(N,B.n,7);W.holes.push(w[0]),de.push({type:G,group:N,shapes:w})}let C=new tn(W,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});y(C,te,0,0,-24);for(let G of k(B.solution,B.n)){let Z=J(G,B.n,0),N=Z[0];N.holes.push(...Z.slice(1)),y(new Ds(N),T("#87623d",.8),0,0,3.2)}for(let G of B.solution){let Z=ce(G);g.push({i:G,p:Z,id:null,group:null})}for(let{type:G,group:Z,shapes:N}of de){let w=ce(Z[0]),re=window.SlinkCatalogueDesign,be=Kh(G,{style:G==="water"?re?.waterStyle||"sway":re?.lavaStyle||"bubbles",center:[w.x,w.y]});_.push(be);let Ue=N[0];Ue.holes.push(...N.slice(1)),y(new tn(Ue,{depth:3,bevelEnabled:!1,curveSegments:20}),be.material,0,0,-15)}let X=Zh(B),Y=new Map;for(let G of B.stones||[]){let Z=X.stones[G];Y.has(Z)||Y.set(Z,Wh(Z,{seed:X.seed}));let N=Y.get(Z).group.clone(!0),w=ce(G);N.position.set(w.x,w.y,0),N.userData.cell=G,n.add(N),N.traverse(re=>{re.isMesh&&(re.userData.cell=-1,o.push(re))})}for(let[G,Z]of B.walls){let N=ce(G),w=ce(Z);I(N.x===w.x?53:9,N.y===w.y?53:9,18,3,T("#a49983",.85),(N.x+w.x)/2,(N.y+w.y)/2,17)}for(let[G,Z]of B.marks.entries()){let N=ce(Z),w=Vh({species:X.flowers[G],number:G+1,state:G===0?"next":"closed",layout:"compact"});w.group.rotation.x=Math.PI/2,w.group.position.set(N.x,N.y,8.5),n.add(w.group),c.push({i:Z,goal:w})}i.shadowMap.needsUpdate=!0,se()}return{diagnostics(){return i?{textures:i.info.memory.textures,geometries:i.info.memory.geometries,programs:i.info.programs.length,flowers:c.map(B=>B.goal.group.userData.species),bloomsReady:c.every(B=>B.goal.state==="bloom"&&B.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:n.children.filter(B=>B.userData.style&&B.userData.walkable===!1).map(B=>B.userData.style),visitors:{...window.SlinkVisitorSettings}}:null},update(B,z,$,ae){try{i||j(),l?.l!==B&&H(B,$,ae);let le=B.marks.find(L=>!z.includes(L));for(let L of g){if(!L.group){if(L.earth=Js("earth-loam",{seed:73+L.i*19}),L.meadow=Jh(B.meadowVariants?.[L.i]||"classic",{seed:(B.meadowSeed||73)+L.i*19}),L.grown=L.meadow.group,B.marks.includes(L.i))for(let v of[...L.grown.children])!v.userData.surface&&v.position.x>0&&v.position.y<-3&&L.grown.remove(v);L.group=L.earth;for(let v of[L.earth,L.grown])v.position.set(L.p.x,L.p.y,0),n.add(v),v.traverse(x=>{x.isMesh&&x.userData.surface&&(x.userData.cell=L.i,o.push(x))});L.progress=0,L.target=0,L.from=0,L.changedAt=performance.now(),L.duration=300,L.grown.visible=!1}let U=z.includes(L.i)?1:0;U!==L.target&&(L.from=L.progress,L.target=U,L.changedAt=performance.now(),L.duration=U?300:180)}for(let L of c){L.goal.setState(z.includes(L.i)?"bloom":L.i===le?"next":"closed"),L.goal.setSize(window.SlinkMarkerSize||27);let U=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};L.goal.setInsects(U.enabled),L.goal.setVisitorSize("bee",U.bee),L.goal.setVisitorSize("bumblebee",U.bumblebee)}i.shadowMap.needsUpdate=!0,Q()}catch(le){console.error("3D renderer:",le),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
