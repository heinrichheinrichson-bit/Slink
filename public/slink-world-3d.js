(()=>{function Wl(i,e,t,n,{threshold:s=5,tolerance:r=20}={}){let o=Math.floor((t-20)/80),a=Math.floor((-n-20)/80);if(o<0||a<0||o>=i||a>=i)return-1;let c=a*i+o,l=e.at(-1);if(l===void 0||c===l)return c;let h=o-l%i,d=a-Math.floor(l/i);if(Math.abs(h)+Math.abs(d)!==1)return-1;let f=l%i*80+60,p=-(Math.floor(l/i)*80+60),g=h?(t-f)*h:-(n-p)*d,x=Math.abs(h?n-p:t-f);return g>=40+80*s/100&&x<=Math.min(40,22+80*r/100)?c:l}var Sc=0,Ya=1,bc=2;var Za=1,to=2,gn=3,Rn=0,Dt=1,Ot=2,Ln=0,si=1,Ja=2,$a=3,Ka=4,Ec=5,Wn=100,wc=101,Tc=102,Ac=103,Rc=104,Cc=200,Ic=201,Pc=202,Lc=203,Rr=204,Cr=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Bc=211,zc=212,kc=213,Hc=214,no=0,io=1,so=2,ri=3,ro=4,oo=5,ao=6,lo=7,ja=0,Vc=1,Gc=2,Dn=0,Wc=1,Xc=2,qc=3,co=4,Yc=5,Zc=6,Jc=7;var Qa=300,pi=301,mi=302,ho=303,uo=304,Ws=306,Oi=1e3,Gn=1001,Ir=1002,Ft=1003,$c=1004;var Xs=1005;var Pt=1006,fo=1007;var Jn=1008;var hn=1009,el=1010,tl=1011,Ki=1012,po=1013,$n=1014,xn=1015,ji=1016,mo=1017,go=1018,Qi=1020,nl=35902,il=35899,sl=1021,rl=1022,$t=1023,Bi=1026,es=1027,ol=1028,xo=1029,al=1030,_o=1031;var yo=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,vo=35840,Mo=35841,So=35842,bo=35843,Eo=36196,wo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Io=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Ho=36492,Vo=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var gs=2300,Pr=2301,Ar=2302,Da=2400,Ua=2401,Na=2402;var Kc=3200,jc=3201;var ll=0,Qc=1,Un="",xt="srgb",oi="srgb-linear",xs="linear",nt="srgb";var ii=7680;var Fa=519,eh=512,th=513,nh=514,cl=515,ih=516,sh=517,rh=518,oh=519,Oa=35044;var hl="300 es",nn=2e3,_s=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=1234567,ds=Math.PI/180,zi=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function ul(i,e){return(i%e+e)%e}function yu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vu(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function Mu(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function Su(i,e=1){return e-Math.abs(ul(i,e*2)-e)}function bu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tu(i,e){return i+Math.random()*(e-i)}function Au(i){return i*(.5-Math.random())}function Ru(i){i!==void 0&&(Xl=i);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cu(i){return i*ds}function Iu(i){return i*zi}function Pu(i){return(i&i-1)===0&&i!==0}function Lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var un={DEG2RAD:ds,RAD2DEG:zi,generateUUID:gi,clamp:Ke,euclideanModulo:ul,mapLinear:yu,inverseLerp:vu,lerp:fs,damp:Mu,pingpong:Su,smoothstep:bu,smootherstep:Eu,randInt:wu,randFloat:Tu,randFloatSpread:Au,seededRandom:Ru,degToRad:Cu,radToDeg:Iu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Uu,normalize:It,denormalize:Ni},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==p||h!==g){let m=1-a,u=c*f+l*p+h*g+d*x,b=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let P=Math.sqrt(_),A=Math.atan2(P,u*b);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let y=a*b;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,d=d*m+x*y,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*p-l*f,e[t+1]=c*g+h*f+l*d-a*p,e[t+2]=l*g+h*p+a*f-c*d,e[t+3]=h*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa=new H,ql=new In,We=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],u=s[6],b=s[1],_=s[4],y=s[7],P=s[2],A=s[5],C=s[8];return r[0]=o*x+a*b+c*P,r[3]=o*m+a*_+c*A,r[6]=o*u+a*y+c*C,r[1]=l*x+h*b+d*P,r[4]=l*m+h*_+d*A,r[7]=l*u+h*y+d*C,r[2]=f*x+p*b+g*P,r[5]=f*m+p*_+g*A,r[8]=f*u+p*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},la=new We;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){let i=ys("canvas");return i.style.display="block",i}var Yl={};function ki(i){i in Yl||(Yl[i]=!0,console.warn(i))}function lh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Zl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){let i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Qe=Nu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Lr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=ys("canvas")),bi.width=e.width,bi.height=e.height;let s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fu=0,Hi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ou=0,ha=new H,Lt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=Pt,o=Jn,a=$t,c=hn,l=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=gi(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Qa;Lt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(p+1)/2,P=(u+1)/2,A=(h+f)/4,C=(d+x)/4,F=(g+m)/4;return _>y&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=C/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=F/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Dr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ur=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(r,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),rr.subVectors(this.max,os),Ei.subVectors(e.a,os),wi.subVectors(e.b,os),Ti.subVectors(e.c,os),Fn.subVectors(wi,Ei),On.subVectors(Ti,wi),Qn.subVectors(Ei,Ti);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ua(t,Ei,wi,Ti,rr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ei,wi,Ti,rr))?!1:(or.crossVectors(Fn,On),t=[or.x,or.y,or.z],ua(t,Ei,wi,Ti,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new H,new H,new H,new H,new H,new H,new H,new H],Qt=new H,sr=new fn,Ei=new H,wi=new H,Ti=new H,Fn=new H,On=new H,Qn=new H,os=new H,rr=new H,or=new H,ei=new H;function ua(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);let a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bu=new fn,as=new H,da=new H,ai=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(da)),this.expandByPoint(as.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new H,fa=new H,ar=new H,Bn=new H,pa=new H,lr=new H,ma=new H,Vi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fa.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(fa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=Bn.dot(this.direction),c=-Bn.dot(ar),l=Bn.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fa).addScaledVector(ar,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),lr.subVectors(n,e),ma.crossVectors(pa,lr);let o=this.direction.dot(ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);let c=a*this.direction.dot(lr.crossVectors(Bn,lr));if(c<0)return null;let l=a*this.direction.dot(pa.cross(Bn));if(l<0||c+l>o)return null;let h=-a*Bn.dot(ma);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,d,f,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*d,g=l*h,x=l*d;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*d,g=l*h,x=l*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*d,g=a*h,x=a*d;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,ku)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),zn.crossVectors(n,kt),zn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),zn.crossVectors(n,kt)),zn.normalize(),cr.crossVectors(kt,zn),s[0]=zn.x,s[4]=cr.x,s[8]=kt.x,s[1]=zn.y,s[5]=cr.y,s[9]=kt.y,s[2]=zn.z,s[6]=cr.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],_=n[7],y=n[11],P=n[15],A=s[0],C=s[4],F=s[8],E=s[12],w=s[1],V=s[5],X=s[9],$=s[13],te=s[2],se=s[6],ne=s[10],ae=s[14],q=s[3],le=s[7],ie=s[11],pe=s[15];return r[0]=o*A+a*w+c*te+l*q,r[4]=o*C+a*V+c*se+l*le,r[8]=o*F+a*X+c*ne+l*ie,r[12]=o*E+a*$+c*ae+l*pe,r[1]=h*A+d*w+f*te+p*q,r[5]=h*C+d*V+f*se+p*le,r[9]=h*F+d*X+f*ne+p*ie,r[13]=h*E+d*$+f*ae+p*pe,r[2]=g*A+x*w+m*te+u*q,r[6]=g*C+x*V+m*se+u*le,r[10]=g*F+x*X+m*ne+u*ie,r[14]=g*E+x*$+m*ae+u*pe,r[3]=b*A+_*w+y*te+P*q,r[7]=b*C+_*V+y*se+P*le,r[11]=b*F+_*X+y*ne+P*ie,r[15]=b*E+_*$+y*ae+P*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-t*c*d+t*a*f+s*o*d-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=d*m*l-x*f*l+x*c*p-a*m*p-d*c*u+a*f*u,_=g*f*l-h*m*l-g*c*p+o*m*p+h*c*u-o*f*u,y=h*x*l-g*d*l+g*a*p-o*x*p-h*a*u+o*d*u,P=g*d*c-h*x*c-g*a*f+o*x*f+h*a*m-o*d*m,A=t*b+n*_+s*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=b*C,e[1]=(x*f*r-d*m*r-x*s*p+n*m*p+d*s*u-n*f*u)*C,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*C,e[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*C,e[4]=_*C,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*C,e[8]=y*C,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*u-t*d*u)*C,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*C,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*p-t*a*p)*C,e[12]=P*C,e[13]=(h*x*s-g*d*s+g*n*f-t*x*f-h*n*m+t*d*m)*C,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*C,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,g=r*d,x=o*h,m=o*d,u=a*d,b=c*l,_=c*h,y=c*d,P=n.x,A=n.y,C=n.z;return s[0]=(1-(x+u))*P,s[1]=(p+y)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(f+u))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+_)*C,s[9]=(m-b)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let l=1/r,h=1/o,d=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=nn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===nn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_s)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=nn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===nn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===_s)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new H,en=new ht,zu=new H(0,0,0),ku=new H(1,1,1),zn=new H,cr=new H,kt=new H,$l=new ht,Kl=new In,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hu=0,jl=new H,Ri=new In,bn=new ht,hr=new H,ls=new H,Vu=new H,Gu=new In,Ql=new H(1,0,0),ec=new H(0,1,0),tc=new H(0,0,1),nc={type:"added"},Wu={type:"removed"},Ci={type:"childadded",child:null},ga={type:"childremoved",child:null},Et=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new sn,n=new In,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,hr,this.up):bn.lookAt(hr,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wu),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new H(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new H,En=new H,xa=new H,wn=new H,Ii=new H,Pi=new H,ic=new H,_a=new H,ya=new H,va=new H,Ma=new pt,Sa=new pt,ba=new pt,Vn=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),En.subVectors(n,t),xa.subVectors(e,t);let o=tn.dot(tn),a=tn.dot(En),c=tn.dot(xa),l=En.dot(En),h=En.dot(xa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ma.setScalar(0),Sa.setScalar(0),ba.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),En.subVectors(e,t),tn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Pi.subVectors(r,n),_a.subVectors(e,n);let c=Ii.dot(_a),l=Pi.dot(_a);if(c<=0&&l<=0)return t.copy(n);ya.subVectors(e,s);let h=Ii.dot(ya),d=Pi.dot(ya);if(h>=0&&d<=h)return t.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ii,o);va.subVectors(e,r);let p=Ii.dot(va),g=Pi.dot(va);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Pi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ic.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(ic,a);let u=1/(m+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Ii,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=ul(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ea(o,r,e+1/3),this.g=Ea(o,r,e),this.b=Ea(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=xt){Qe.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(ur);let n=fs(kn.h,ur.h,t),s=fs(kn.s,ur.s,t),r=fs(kn.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new He;He.NAMES=ch;var Xu=0,Pn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=si,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new H,dr=new me,qu=0,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}};var Ms=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ss=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yu=0,Yt=new ht,wa=new Et,Li=new H,Ht=new fn,cs=new fn,bt=new H,ct=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Ht.min,cs.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,cs.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(cs.min),Ht.expandByPoint(cs.max))}Ht.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bt.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(e,l),bt.add(Li)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new H,c[F]=new H;let l=new H,h=new H,d=new H,f=new me,p=new me,g=new me,x=new H,m=new H;function u(F,E,w){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,w),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),h.sub(l),d.sub(l),p.sub(f),g.sub(f);let V=1/(p.x*g.y-g.x*p.y);isFinite(V)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(V),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(V),a[F].add(x),a[E].add(x),a[w].add(x),c[F].add(m),c[E].add(m),c[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,E=b.length;F<E;++F){let w=b[F],V=w.start,X=w.count;for(let $=V,te=V+X;$<te;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}let _=new H,y=new H,P=new H,A=new H;function C(F){P.fromBufferAttribute(s,F),A.copy(P);let E=a[F];_.copy(E),_.sub(P.multiplyScalar(P.dot(E))).normalize(),y.crossVectors(A,E);let V=y.dot(c[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,V)}for(let F=0,E=b.length;F<E;++F){let w=b[F],V=w.start,X=w.count;for(let $=V,te=V+X;$<te;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,c=new H,l=new H,h=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new _t(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sc=new ht,ti=new Vi,fr=new ai,rc=new H,pr=new H,mr=new H,gr=new H,Ta=new H,xr=new H,oc=new H,_r=new H,ze=class extends Et{constructor(e=new ct,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Ta.fromBufferAttribute(d,e),o?xr.addScaledVector(Ta,h):xr.addScaledVector(Ta.sub(t),h))}t.add(xr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(fr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(fr,rc)===null||ti.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),ti.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,P=_;y<P;y+=3){let A=a.getX(y),C=a.getX(y+1),F=a.getX(y+2);s=yr(this,u,e,n,l,h,d,A,C,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=yr(this,o,e,n,l,h,d,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,P=_;y<P;y+=3){let A=y,C=y+1,F=y+2;s=yr(this,u,e,n,l,h,d,A,C,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let b=m,_=m+1,y=m+2;s=yr(this,o,e,n,l,h,d,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zu(i,e,t,n,s,r,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Rn,a),c===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:i}}function yr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);let h=Zu(i,e,t,n,pr,mr,gr,oc);if(h){let d=new H;Vn.getBarycoord(oc,pr,mr,gr,d),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,c,l,d,new me)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,c,l,d,new me)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,c,l,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new H,materialIndex:0};Vn.getNormal(pr,mr,gr,f.normal),h.face=f,h.barycoord=d}return h}var Xn=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function g(x,m,u,b,_,y,P,A,C,F,E){let w=y/C,V=P/F,X=y/2,$=P/2,te=A/2,se=C+1,ne=F+1,ae=0,q=0,le=new H;for(let ie=0;ie<ne;ie++){let pe=ie*V-$;for(let ve=0;ve<se;ve++){let Ie=ve*w-X;le[x]=Ie*b,le[m]=pe*_,le[u]=te,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[u]=A>0?1:-1,h.push(le.x,le.y,le.z),d.push(ve/C),d.push(1-ie/F),ae+=1}}for(let ie=0;ie<F;ie++)for(let pe=0;pe<C;pe++){let ve=f+pe+se*ie,Ie=f+pe+se*(ie+1),Z=f+(pe+1)+se*(ie+1),W=f+(pe+1)+se*ie;c.push(ve,Ie,W),c.push(Ie,Z,W),q+=6}a.addGroup(p,q,E),p+=q,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ju(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var hh={clone:xi,merge:Rt},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bs=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new H,ac=new me,lc=new me,Nt=class extends bs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,lc),t.subVectors(lc,ac)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ui=1,Nr=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Di,Ui,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Di,Ui,e,t);r.layers=this.layers,this.add(r);let o=new Nt(Di,Ui,e,t);o.layers=this.layers,this.add(o);let a=new Nt(Di,Ui,e,t);a.layers=this.layers,this.add(a);let c=new Nt(Di,Ui,e,t);c.layers=this.layers,this.add(c);let l=new Nt(Di,Ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Es=class extends Lt{constructor(e=[],t=pi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fr=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Ln});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Pt),new Nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ze=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},ju={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var qn=class extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ft,h=Ft,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=new H,Qu=new H,ed=new We,Zt=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Aa.subVectors(n,t).cross(Qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ed.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new ai,td=new me(.5,.5),vr=new H,Xi=class{constructor(e=new Zt,t=new Zt,n=new Zt,s=new Zt,r=new Zt,o=new Zt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],b=r[12],_=r[13],y=r[14],P=r[15];if(s[0].setComponents(l-o,p-h,u-g,P-b).normalize(),s[1].setComponents(l+o,p+h,u+g,P+b).normalize(),s[2].setComponents(l+a,p+d,u+x,P+_).normalize(),s[3].setComponents(l-a,p-d,u-x,P-_).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,p-f,u-m,P-y).normalize();else if(s[4].setComponents(l-c,p-f,u-m,P-y).normalize(),t===nn)s[5].setComponents(l+c,p+f,u+m,P+y).normalize();else if(t===_s)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);let t=td.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vr.x=s.normal.x>0?e.max.x:e.min.x,vr.y=s.normal.y>0?e.max.y:e.min.y,vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Or=new H,Br=new H,cc=new ht,hs=new Vi,Mr=new ai,Ra=new H,hc=new H,zr=class extends Et{constructor(e=new ct,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Or.fromBufferAttribute(t,s-1),Br.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;cc.copy(s).invert(),hs.copy(e.ray).applyMatrix4(cc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=h.getX(x),b=h.getX(x+1),_=Sr(this,e,hs,c,u,b,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),u=Sr(this,e,hs,c,x,m,g-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let u=Sr(this,e,hs,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Sr(this,e,hs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Or.fromBufferAttribute(a,s),Br.fromBufferAttribute(a,r),t.distanceSqToSegment(Or,Br,Ra,hc)>n)return;Ra.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ra);if(!(l<e.near||l>e.far))return{distance:l,point:hc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var uc=new H,dc=new H,Ts=class extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uc.fromBufferAttribute(t,s),dc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uc.distanceTo(dc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pn=class extends Lt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Lt{constructor(e,t,n=$n,s,r,o,a=Ft,c=Ft,l,h=Bi,d=1){if(h!==Bi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var on=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,x=[],m=n/2,u=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function b(){let y=new H,P=new H,A=0,C=(t-e)/n;for(let F=0;F<=r;F++){let E=[],w=F/r,V=w*(t-e)+e;for(let X=0;X<=s;X++){let $=X/s,te=$*c+a,se=Math.sin(te),ne=Math.cos(te);P.x=V*se,P.y=-w*n+m,P.z=V*ne,d.push(P.x,P.y,P.z),y.set(se,C,ne).normalize(),f.push(y.x,y.y,y.z),p.push($,1-w),E.push(g++)}x.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){let w=x[E][F],V=x[E+1][F],X=x[E+1][F+1],$=x[E][F+1];(e>0||E!==0)&&(h.push(w,V,$),A+=3),(t>0||E!==r-1)&&(h.push(V,X,$),A+=3)}l.addGroup(u,A,0),u+=A}function _(y){let P=g,A=new me,C=new H,F=0,E=y===!0?e:t,w=y===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;let V=g;for(let X=0;X<=s;X++){let te=X/s*c+a,se=Math.cos(te),ne=Math.sin(te);C.x=E*ne,C.y=m*w,C.z=E*se,d.push(C.x,C.y,C.z),f.push(0,w,0),A.x=se*.5+.5,A.y=ne*.5*w+.5,p.push(A.x,A.y),g++}for(let X=0;X<s;X++){let $=P+X,te=V+X;y===!0?h.push(te,te+1,$):h.push(te+1,te,$),F+=3}l.addGroup(u,F,y===!0?1:2),u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new me:new H);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],a=new H,c=new ht;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Vt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kr=class extends Yi{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var br=new H,Ca=new pl,Ia=new pl,Pa=new pl,an=class extends Vt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),l=br);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ca.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,x,m),Ia.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,x,m),Pa.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Ia.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Pa.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Ca.calc(c),Ia.calc(c),Pa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function nd(i,e){let t=1-i;return t*t*e}function id(i,e){return 2*(1-i)*i*e}function sd(i,e){return i*i*e}function ps(i,e,t,n){return nd(i,e)+id(i,t)+sd(i,n)}function rd(i,e){let t=1-i;return t*t*t*e}function od(i,e){let t=1-i;return 3*t*t*i*e}function ad(i,e){return 3*(1-i)*i*i*e}function ld(i,e){return i*i*i*e}function ms(i,e,t,n,s){return rd(i,e)+od(i,t)+ad(i,n)+ld(i,s)}var Cs=class extends Vt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zi=class extends Vt{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(e,s.x,r.x,o.x,a.x),ms(e,s.y,r.y,o.y,a.y),ms(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Is=class extends Vt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Vt{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends Vt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Vt{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ps(e,s.x,r.x,o.x),ps(e,s.y,r.y,o.y),ps(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(fc(a,c.x,l.x,h.x,d.x),fc(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Vr=Object.freeze({__proto__:null,ArcCurve:kr,CatmullRomCurve3:an,CubicBezierCurve:Cs,CubicBezierCurve3:Zi,EllipseCurve:Yi,LineCurve:Is,LineCurve3:Hr,QuadraticBezierCurve:Ps,QuadraticBezierCurve3:Ls,SplineCurve:Ds}),Gr=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Vr[s.type]().fromJSON(s))}return this}},mn=class extends Gr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Is(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ps(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Cs(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ds(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Yi(e,t,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yt=class extends mn{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mn().fromJSON(s))}return this}};function cd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=uh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=pd(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Us(r,o,t,a,c,l,0),o}function uh(i,e,t,n,s){let r;if(s===wd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=pc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=pc(o/n|0,i[o],i[o+1],r);return r&&Ji(r,r.next)&&(Fs(r),r=r.next),r}function ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||ft(t.prev,t,t.next)===0)){if(Fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Us(i,e,t,n,s,r,o){if(!i)return;!o&&r&&yd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?ud(i,n,s,r):hd(i)){e.push(c.i,i.i,l.i),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dd(ci(i),e),Us(i,e,t,n,s,r,2)):o===2&&fd(i,e,t,n,s,r):Us(ci(i),e,t,n,s,r,1);break}}}function hd(i){let e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&us(s,a,r,c,o,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ud(i,e,t,n){let s=i.prev,r=i,o=i.next;if(ft(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,p=Math.min(a,c,l),g=Math.min(h,d,f),x=Math.max(a,c,l),m=Math.max(h,d,f),u=Ba(p,g,e,t,n),b=Ba(x,m,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=u&&y&&y.z<=b;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,d,l,f,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,d,l,f,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,d,l,f,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&us(a,h,c,d,l,f,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&fh(n,t,t.next,s)&&Ns(n,s)&&Ns(s,n)&&(e.push(n.i,t.i,s.i),Fs(t),Fs(t.next),t=i=s),t=t.next}while(t!==i);return ci(t)}function fd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sd(o,a)){let c=ph(o,a);o=ci(o,o.next),c=ci(c,c.next),Us(o,e,t,n,s,r,0),Us(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=uh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Md(l))}s.sort(md);for(let r=0;r<s.length;r++)t=gd(s[r],t);return t}function md(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function gd(i,e){let t=xd(i,e);if(!t)return e;let n=ph(t,i);return ci(n,n.next),ci(t,t.next)}function xd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&dh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ns(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&_d(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function _d(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function yd(i,e,t,n){let s=i;do s.z===0&&(s.z=Ba(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vd(s)}function vd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ba(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Md(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function dh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function us(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&dh(i,e,t,n,s,r,o,a)}function Sd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bd(i,e)&&(Ns(i,e)&&Ns(e,i)&&Ed(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||Ji(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function fh(i,e,t,n){let s=wr(ft(i,e,t)),r=wr(ft(i,e,n)),o=wr(ft(t,n,i)),a=wr(ft(t,n,e));return!!(s!==r&&o!==a||s===0&&Er(i,t,e)||r===0&&Er(i,n,e)||o===0&&Er(t,i,n)||a===0&&Er(t,e,n))}function Er(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wr(i){return i>0?1:i<0?-1:0}function bd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function Ed(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ph(i,e){let t=za(i.i,i.x,i.y),n=za(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pc(i,e,t,n){let s=za(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function za(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ka=class{static triangulate(e,t,n=2){return cd(e,t,n)}},At=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mc(e),gc(n,e);let o=e.length;t.forEach(mc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,gc(n,t[c]);let a=ka.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function mc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gt=class i extends ct{constructor(e=new yt([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Td,_,y=!1,P,A,C,F;u&&(_=u.getSpacedPoints(h),y=!0,f=!1,P=u.computeFrenetFrames(h,!1),A=new H,C=new H,F=new H),f||(m=0,p=0,g=0,x=0);let E=a.extractPoints(l),w=E.shape,V=E.holes;if(!At.isClockWise(w)){w=w.reverse();for(let I=0,O=V.length;I<O;I++){let k=V[I];At.isClockWise(k)&&(V[I]=k.reverse())}}function $(I){let k=10000000000000001e-36,B=I[0];for(let D=1;D<=I.length;D++){let S=D%I.length,J=I[S],ee=J.x-B.x,ge=J.y-B.y,L=ee*ee+ge*ge,v=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(B.x),Math.abs(B.y)),Y=k*v*v;if(L<=Y){I.splice(S,1),D--;continue}B=J}}$(w),V.forEach($);let te=V.length,se=w;for(let I=0;I<te;I++){let O=V[I];w=w.concat(O)}function ne(I,O,k){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(O,k)}let ae=w.length;function q(I,O,k){let B,D,S,J=I.x-O.x,ee=I.y-O.y,ge=k.x-I.x,L=k.y-I.y,v=J*J+ee*ee,Y=J*L-ee*ge;if(Math.abs(Y)>Number.EPSILON){let j=Math.sqrt(v),ue=Math.sqrt(ge*ge+L*L),ce=O.x-ee/j,Ae=O.y+J/j,_e=k.x-L/ue,Re=k.y+ge/ue,Ce=((_e-ce)*L-(Re-Ae)*ge)/(J*L-ee*ge);B=ce+J*Ce-I.x,D=Ae+ee*Ce-I.y;let ye=B*B+D*D;if(ye<=2)return new me(B,D);S=Math.sqrt(ye/2)}else{let j=!1;J>Number.EPSILON?ge>Number.EPSILON&&(j=!0):J<-Number.EPSILON?ge<-Number.EPSILON&&(j=!0):Math.sign(ee)===Math.sign(L)&&(j=!0),j?(B=-ee,D=J,S=Math.sqrt(v)):(B=J,D=ee,S=Math.sqrt(v/2))}return new me(B/S,D/S)}let le=[];for(let I=0,O=se.length,k=O-1,B=I+1;I<O;I++,k++,B++)k===O&&(k=0),B===O&&(B=0),le[I]=q(se[I],se[k],se[B]);let ie=[],pe,ve=le.concat();for(let I=0,O=te;I<O;I++){let k=V[I];pe=[];for(let B=0,D=k.length,S=D-1,J=B+1;B<D;B++,S++,J++)S===D&&(S=0),J===D&&(J=0),pe[B]=q(k[B],k[S],k[J]);ie.push(pe),ve=ve.concat(pe)}let Ie;if(m===0)Ie=At.triangulateShape(se,V);else{let I=[],O=[];for(let k=0;k<m;k++){let B=k/m,D=p*Math.cos(B*Math.PI/2),S=g*Math.sin(B*Math.PI/2)+x;for(let J=0,ee=se.length;J<ee;J++){let ge=ne(se[J],le[J],S);he(ge.x,ge.y,-D),B===0&&I.push(ge)}for(let J=0,ee=te;J<ee;J++){let ge=V[J];pe=ie[J];let L=[];for(let v=0,Y=ge.length;v<Y;v++){let j=ne(ge[v],pe[v],S);he(j.x,j.y,-D),B===0&&L.push(j)}B===0&&O.push(L)}}Ie=At.triangulateShape(I,O)}let Z=Ie.length,W=g+x;for(let I=0;I<ae;I++){let O=f?ne(w[I],ve[I],W):w[I];y?(C.copy(P.normals[0]).multiplyScalar(O.x),A.copy(P.binormals[0]).multiplyScalar(O.y),F.copy(_[0]).add(C).add(A),he(F.x,F.y,F.z)):he(O.x,O.y,0)}for(let I=1;I<=h;I++)for(let O=0;O<ae;O++){let k=f?ne(w[O],ve[O],W):w[O];y?(C.copy(P.normals[I]).multiplyScalar(k.x),A.copy(P.binormals[I]).multiplyScalar(k.y),F.copy(_[I]).add(C).add(A),he(F.x,F.y,F.z)):he(k.x,k.y,d/h*I)}for(let I=m-1;I>=0;I--){let O=I/m,k=p*Math.cos(O*Math.PI/2),B=g*Math.sin(O*Math.PI/2)+x;for(let D=0,S=se.length;D<S;D++){let J=ne(se[D],le[D],B);he(J.x,J.y,d+k)}for(let D=0,S=V.length;D<S;D++){let J=V[D];pe=ie[D];for(let ee=0,ge=J.length;ee<ge;ee++){let L=ne(J[ee],pe[ee],B);y?he(L.x,L.y+_[h-1].y,_[h-1].x+k):he(L.x,L.y,d+k)}}}R(),T();function R(){let I=s.length/3;if(f){let O=0,k=ae*O;for(let B=0;B<Z;B++){let D=Ie[B];U(D[2]+k,D[1]+k,D[0]+k)}O=h+m*2,k=ae*O;for(let B=0;B<Z;B++){let D=Ie[B];U(D[0]+k,D[1]+k,D[2]+k)}}else{for(let O=0;O<Z;O++){let k=Ie[O];U(k[2],k[1],k[0])}for(let O=0;O<Z;O++){let k=Ie[O];U(k[0]+ae*h,k[1]+ae*h,k[2]+ae*h)}}n.addGroup(I,s.length/3-I,0)}function T(){let I=s.length/3,O=0;Q(se,O),O+=se.length;for(let k=0,B=V.length;k<B;k++){let D=V[k];Q(D,O),O+=D.length}n.addGroup(I,s.length/3-I,1)}function Q(I,O){let k=I.length;for(;--k>=0;){let B=k,D=k-1;D<0&&(D=I.length-1);for(let S=0,J=h+m*2;S<J;S++){let ee=ae*S,ge=ae*(S+1),L=O+B+ee,v=O+D+ee,Y=O+D+ge,j=O+B+ge;z(L,v,Y,j)}}}function he(I,O,k){c.push(I),c.push(O),c.push(k)}function U(I,O,k){G(I),G(O),G(k);let B=s.length/3,D=b.generateTopUV(n,s,B-3,B-2,B-1);M(D[0]),M(D[1]),M(D[2])}function z(I,O,k,B){G(I),G(O),G(B),G(O),G(k),G(B);let D=s.length/3,S=b.generateSideWallUV(n,s,D-6,D-3,D-2,D-1);M(S[0]),M(S[1]),M(S[3]),M(S[1]),M(S[2]),M(S[3])}function G(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function M(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ad(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vr[s.type]().fromJSON(s)),new i(n,e.options)}},Td={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new me(r,o),new me(a,c),new me(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-d),new me(f,1-g),new me(x,1-u)]:[new me(a,1-c),new me(h,1-d),new me(p,1-g),new me(m,1-u)]}};function Ad(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hi=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let b=u*f-o;for(let _=0;_<l;_++){let y=_*d-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<a;b++){let _=b+l*u,y=b+l*(u+1),P=b+1+l*(u+1),A=b+1+l*u;p.push(_,y,A),p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Os=class i extends ct{constructor(e=new yt([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function l(h){let d=s.length/3,f=h.extractPoints(t),p=f.shape,g=f.holes;At.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){let b=g[m];At.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=At.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){let b=g[m];p=p.concat(b)}for(let m=0,u=p.length;m<u;m++){let b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,u=x.length;m<u;m++){let b=x[m],_=b[0]+d,y=b[1]+d,P=b[2]+d;n.push(_,y,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Rd(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Rd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var mt=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new H,f=new H,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let b=[],_=u/n,y=0;u===0&&o===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let A=P/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+y,1-_),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let _=h[u][b+1],y=h[u][b],P=h[u+1][b],A=h[u+1][b+1];(u!==0||o>0)&&p.push(_,y,A),(u!==n-1||c<Math.PI)&&p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ln=class i extends ct{constructor(e=new Ls(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,c=new H,l=new me,h=new H,d=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),b(),u()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],P=o.binormals[_];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,F=Math.sin(C),E=-Math.cos(C);c.x=E*y.x+F*P.x,c.y=E*y.y+F*P.y,c.z=E*y.z+F*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function u(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let P=(s+1)*(_-1)+(y-1),A=(s+1)*_+(y-1),C=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(P,A,F),g.push(A,C,F)}}function b(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)l.x=_/t,l.y=y/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var rt=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wr=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xr=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Da,endingEnd:Da}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ua:r=e,a=2*t-n;break;case Na:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ua:o=e,c=2*n-t;break;case Na:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+b*o[l+P]+_*o[c+P]+y*o[d+P];return r}},Yr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},Zr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Cd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ar,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Pr;var Yn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=gs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="color";var $r=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="number";var Kr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bs=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Qr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mh=new Qr,di=class{constructor(e){this.manager=e!==void 0?e:mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},Va=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ha.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:s});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Tn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(u){b();function b(){d.read().then(({done:_,value:y})=>{if(_)u.close();else{x+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let A=0,C=h.length;A<C;A++){let F=h[A];F.onProgress&&F.onProgress(P)}u.enqueue(y),b()}},_=>{u.error(_)})}}});return new Response(m)}else throw new Va(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ha.add(`file:${e}`,l);let h=Tn[e];delete Tn[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Tn[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ks=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hs=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},La=new ht,xc=new H,_c=new H,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fi=class extends bs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wa=class extends Ga{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Wa}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var eo=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ml="\\[\\]\\.:\\/",Id=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",Pd="[^"+ml.replace("\\.","")+"]",Ld=/((?:WC+[\/:])*)/.source.replace("WC",gl),Dd=/(WCOD+)?/.source.replace("WCOD",Pd),Ud=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),Nd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Fd=new RegExp("^"+Ld+Dd+Ud+Nd+"$"),Od=["material","materials","bones","map"],Xa=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Id,"")}static parseTrackName(e){let t=Fd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Od.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Xa;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N0=new Float32Array(1);var yc=new ht,Vs=class{constructor(e,t,n=0,s=1/0){this.ray=new Vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(vc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qa(e[s],this,n,t);return n.sort(vc),n}};function vc(i,e){return i.distance-e.distance}function qa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)qa(r[o],e,t,!0)}}var Mc=new me,Gs=class{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var cn=class{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(u){let b=[];for(let _=0,y=u.length;_<y;_++){let P=u[_],A=new yt;A.curves=P.curves,b.push(A)}return b}function n(u,b){let _=b.length,y=!1;for(let P=_-1,A=0;A<_;P=A++){let C=b[P],F=b[A],E=F.x-C.x,w=F.y-C.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(C=b[A],E=-E,F=b[P],w=-w),u.y<C.y||u.y>F.y)continue;if(u.y===C.y){if(u.x===C.x)return!0}else{let V=w*(u.x-C.x)-E*(u.y-C.y);if(V===0)return!0;if(V<0)continue;y=!y}}else{if(u.y!==C.y)continue;if(F.x<=u.x&&u.x<=C.x||C.x<=u.x&&u.x<=F.x)return!0}}return y}let s=At.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new yt,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;let d=[],f=[],p=[],g=0,x;f[g]=void 0,p[g]=[];for(let u=0,b=r.length;u<b;u++)a=r[u],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new yt,p:x},f[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let u=!1,b=0;for(let _=0,y=f.length;_<y;_++)d[_]=[];for(let _=0,y=f.length;_<y;_++){let P=p[_];for(let A=0;A<P.length;A++){let C=P[A],F=!0;for(let E=0;E<f.length;E++)n(C.p,f[E].p)&&(_!==E&&b++,F?(F=!1,d[E].push(C)):u=!0);F&&d[_].push(C)}}b>0&&u===!1&&(p=d)}let m;for(let u=0,b=f.length;u<b;u++){c=f[u].s,l.push(c),m=p[u];for(let _=0,y=m.length;_<y;_++)c.holes.push(m[_].h)}return l}};function xl(i,e,t,n){let s=Bd(n);switch(t){case sl:return i*e;case ol:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case rl:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case So:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bd(i){switch(i){case hn:case el:return{byteLength:1,components:1};case Ki:case tl:case ji:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case $n:case po:case xn:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qd(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,qf=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:$d,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:xf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:yf,displacementmap_pars_vertex:vf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:If,fog_vertex:Pf,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:xm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},Pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:Rt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Rt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Rt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Rt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Rt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Rt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Rt([Pe.points,Pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Rt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Rt([Pe.common,Pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Rt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Rt([Pe.sprite,Pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Rt([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Rt([Pe.lights,Pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:Rt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Zo={r:0,b:0,g:0},_i=new sn,Am=new ht;function Rm(i,e,t,n,s,r,o){let a=new He(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,P=g(_);P===null?u(a,c):P&&P.isColor&&(u(P,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let P=g(y);P&&(P.isCubeTexture||P.mapping===Ws)?(h===void 0&&(h=new ze(new Xn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:xi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(_i)),h.material.toneMapped=Qe.getTransfer(P.colorSpace)!==nt,(d!==P||f!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ze(new hi(2,2),new rn({name:"BackgroundMaterial",uniforms:xi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(P.colorSpace)!==nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function u(_,y){_.getRGB(Zo,fl(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,u(a,c)},render:x,addToRenderList:m,dispose:b}}function Cm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,V,X,$,te){let se=!1,ne=d($,X,V);r!==ne&&(r=ne,l(r.object)),se=p(w,$,X,te),se&&g(w,$,X,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,y(w,V,X,$),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function d(w,V,X){let $=X.wireframe===!0,te=n[w.id];te===void 0&&(te={},n[w.id]=te);let se=te[V.id];se===void 0&&(se={},te[V.id]=se);let ne=se[$];return ne===void 0&&(ne=f(c()),se[$]=ne),ne}function f(w){let V=[],X=[],$=[];for(let te=0;te<t;te++)V[te]=0,X[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:$,object:w,attributes:{},index:null}}function p(w,V,X,$){let te=r.attributes,se=V.attributes,ne=0,ae=X.getAttributes();for(let q in ae)if(ae[q].location>=0){let ie=te[q],pe=se[q];if(pe===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;ne++}return r.attributesNum!==ne||r.index!==$}function g(w,V,X,$){let te={},se=V.attributes,ne=0,ae=X.getAttributes();for(let q in ae)if(ae[q].location>=0){let ie=se[q];ie===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));let pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),te[q]=pe,ne++}r.attributes=te,r.attributesNum=ne,r.index=$}function x(){let w=r.newAttributes;for(let V=0,X=w.length;V<X;V++)w[V]=0}function m(w){u(w,0)}function u(w,V){let X=r.newAttributes,$=r.enabledAttributes,te=r.attributeDivisors;X[w]=1,$[w]===0&&(i.enableVertexAttribArray(w),$[w]=1),te[w]!==V&&(i.vertexAttribDivisor(w,V),te[w]=V)}function b(){let w=r.newAttributes,V=r.enabledAttributes;for(let X=0,$=V.length;X<$;X++)V[X]!==w[X]&&(i.disableVertexAttribArray(X),V[X]=0)}function _(w,V,X,$,te,se,ne){ne===!0?i.vertexAttribIPointer(w,V,X,te,se):i.vertexAttribPointer(w,V,X,$,te,se)}function y(w,V,X,$){x();let te=$.attributes,se=X.getAttributes(),ne=V.defaultAttributeValues;for(let ae in se){let q=se[ae];if(q.location>=0){let le=te[ae];if(le===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){let ie=le.normalized,pe=le.itemSize,ve=e.get(le);if(ve===void 0)continue;let Ie=ve.buffer,Z=ve.type,W=ve.bytesPerElement,R=Z===i.INT||Z===i.UNSIGNED_INT||le.gpuType===po;if(le.isInterleavedBufferAttribute){let T=le.data,Q=T.stride,he=le.offset;if(T.isInstancedInterleavedBuffer){for(let U=0;U<q.locationSize;U++)u(q.location+U,T.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let U=0;U<q.locationSize;U++)m(q.location+U);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let U=0;U<q.locationSize;U++)_(q.location+U,pe/q.locationSize,Z,ie,Q*W,(he+pe/q.locationSize*U)*W,R)}else{if(le.isInstancedBufferAttribute){for(let T=0;T<q.locationSize;T++)u(q.location+T,le.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let T=0;T<q.locationSize;T++)m(q.location+T);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let T=0;T<q.locationSize;T++)_(q.location+T,pe/q.locationSize,Z,ie,pe*W,pe/q.locationSize*T*W,R)}}else if(ne!==void 0){let ie=ne[ae];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}b()}function P(){F();for(let w in n){let V=n[w];for(let X in V){let $=V[X];for(let te in $)h($[te].object),delete $[te];delete V[X]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;let V=n[w.id];for(let X in V){let $=V[X];for(let te in $)h($[te].object),delete $[te];delete V[X]}delete n[w.id]}function C(w){for(let V in n){let X=n[V];if(X[w.id]===void 0)continue;let $=X[w.id];for(let te in $)h($[te].object),delete $[te];delete X[w.id]}}function F(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Im(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Pm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==$t&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let F=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xn&&!F)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Zt,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,_=b*4,y=u.clippingState||null;c.value=y,y=h(g,f,_,p);for(let P=0;P!==_;++P)y[P]=t[P];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dm(i){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=pi:a===uo&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ho||a===uo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fr(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,gh=[.125,.215,.35,.446,.526,.582],Mi=20,_l=new fi,xh=new He,yl=null,vl=0,Ml=0,Sl=!1,vi=(1+Math.sqrt(5))/2,ts=1/vi,_h=[new H(-vi,ts,0),new H(vi,ts,0),new H(-ts,0,vi),new H(ts,0,vi),new H(0,vi,-ts),new H(0,vi,ts),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Um=new H,Ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Um}=r;yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,vl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:ji,format:$t,colorSpace:oi,depthBuffer:!1},s=yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Fm(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,s,r){let c=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(xh),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new li({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new ze(new Xn,x),u=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(xh),u=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let P=this._cubeSize;Jo(s,y*P,_>2?P:0,P,P),d.setRenderTarget(s),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_h[(s-r-1)%_h.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ze(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let u=[],b=0;for(let C=0;C<Mi;++C){let F=C/x,E=Math.exp(-F*F/2);u.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let y=this._sizeLods[s],P=3*y*(s>_-ns?s-_+ns:0),A=4*(this._cubeSize-y);Jo(t,P,A,3*y,2*y),c.setRenderTarget(t),c.render(d,_l)}};function Nm(i){let e=[],t=[],n=[],s=i,r=i-ns+1+gh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ns?c=gh[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,F=A>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];b.set(E,x*g*A),_.set(f,m*g*A);let w=[A,A,A,A,A,A];y.set(w,u*g*A)}let P=new ct;P.setAttribute("position",new _t(b,x)),P.setAttribute("uv",new _t(_,m)),P.setAttribute("faceIndex",new _t(y,u)),e.push(P),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yh(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fm(i,e,t){let n=new Float32Array(Mi),s=new H(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function vh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Mh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

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
	`}function Om(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ho||c===uo,h=c===pi||c===mi;if(l||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ko(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ko(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let _=0,y=b.length;_<y;_+=3){let P=b[_+0],A=b[_+1],C=b[_+2];f.push(P,A,A,C,C,P)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let P=_+0,A=_+1,C=_+2;f.push(P,A,A,C,C,P)}}else return;let m=new(dl(f)?Ss:Ms)(f,1);m.version=x;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function km(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Hm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vm(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*P*4*d),C=new vs(A,y,P,d);C.type=xn,C.needsUpdate=!0;let F=_*4;for(let w=0;w<d;w++){let V=m[w],X=u[w],$=b[w],te=y*P*4*w;for(let se=0;se<V.count;se++){let ne=se*F;p===!0&&(s.fromBufferAttribute(V,se),A[te+ne+0]=s.x,A[te+ne+1]=s.y,A[te+ne+2]=s.z,A[te+ne+3]=0),g===!0&&(s.fromBufferAttribute(X,se),A[te+ne+4]=s.x,A[te+ne+5]=s.y,A[te+ne+6]=s.z,A[te+ne+7]=0),x===!0&&(s.fromBufferAttribute($,se),A[te+ne+8]=s.x,A[te+ne+9]=s.y,A[te+ne+10]=s.z,A[te+ne+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new me(y,P)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var kh=new Lt,Sh=new As(1,1),Hh=new vs,Vh=new Ur,Gh=new Es,bh=[],Eh=[],wh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qo(i,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),St(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),St(t,n)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),St(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=cl,r=Sh):r=kh,t.setTexture2D(e||r,s)}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vh,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gh,s)}function lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hh,s)}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return Jm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,e){i.uniform1fv(this.addr,e)}function ug(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function dg(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function fg(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function pg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xg(i,e){i.uniform1iv(this.addr,e)}function _g(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function vg(i,e){i.uniform4iv(this.addr,e)}function Mg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function bg(i,e){i.uniform3uiv(this.addr,e)}function Eg(i,e){i.uniform4uiv(this.addr,e)}function wg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kh,r[o])}function Tg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vh,r[o])}function Ag(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gh,r[o])}function Rg(i,e,t){let n=this.cache,s=e.length,r=Qo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hh,r[o])}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return yg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function Ig(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),o=bl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rh(t,l===void 0?new El(a,i,e):new wl(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Tl(a),Rh(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ig(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pg=37297,Lg=0;function Dg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ih=new We;function Ug(i){Qe._getMatrix(Ih,Qe.workingColorSpace,i);let e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(e),a)}else return r}function Ng(i,e){let t=Ug(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fg(i,e){let t;switch(e){case Wc:t="Linear";break;case Xc:t="Reinhard";break;case qc:t="Cineon";break;case co:t="ACESFilmic";break;case Zc:t="AgX";break;case Jc:t="Neutral";break;case Yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new H;function Og(){Qe.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function zg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $s(i){return i!==""}function Lh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Hg,Gg)}var Vg=new Map;function Gg(i,e){let t=$e[e];if(t===void 0){let n=Vg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(Wg,Xg)}function Xg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function qg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Za?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===to?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Vc:e="ENVMAP_BLENDING_MIX";break;case Gc:e="ENVMAP_BLENDING_ADD";break}return e}function $g(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=qg(t),l=Yg(t),h=Zg(t),d=Jg(t),f=$g(t),p=Bg(t),g=zg(r),x=s.createProgram(),m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),u.length>0&&(u+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Al(o),o=Lh(o,t),o=Dh(o,t),a=Al(a),a=Lh(a,t),a=Dh(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=b+m+o,y=b+u+a,P=Ch(s,s.VERTEX_SHADER,_),A=Ch(s,s.FRAGMENT_SHADER,y);s.attachShader(x,P),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(V){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(P)||"",te=s.getShaderInfoLog(A)||"",se=X.trim(),ne=$.trim(),ae=te.trim(),q=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,A);else{let ie=Ph(s,P,"vertex"),pe=Ph(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+se+`
`+ie+`
`+pe)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ne===""||ae==="")&&(le=!1);le&&(V.diagnostics={runnable:q,programLog:se,vertexShader:{log:ne,prefix:m},fragmentShader:{log:ae,prefix:u}})}s.deleteShader(P),s.deleteShader(A),F=new is(s,x),E=kg(s,x)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Pg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}var jg=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}};function Qg(i,e,t,n,s,r,o){let a=new Gi,c=new Rl,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,V,X,$){let te=X.fog,se=$.geometry,ne=E.isMeshStandardMaterial?X.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),q=ae&&ae.mapping===Ws?ae.image.height:null,le=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ie=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pe=ie!==void 0?ie.length:0,ve=0;se.morphAttributes.position!==void 0&&(ve=1),se.morphAttributes.normal!==void 0&&(ve=2),se.morphAttributes.color!==void 0&&(ve=3);let Ie,Z,W,R;if(le){let tt=_n[le];Ie=tt.vertexShader,Z=tt.fragmentShader}else Ie=E.vertexShader,Z=E.fragmentShader,c.update(E),W=c.getVertexShaderID(E),R=c.getFragmentShaderID(E);let T=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),he=$.isInstancedMesh===!0,U=$.isBatchedMesh===!0,z=!!E.map,G=!!E.matcap,M=!!ae,I=!!E.aoMap,O=!!E.lightMap,k=!!E.bumpMap,B=!!E.normalMap,D=!!E.displacementMap,S=!!E.emissiveMap,J=!!E.metalnessMap,ee=!!E.roughnessMap,ge=E.anisotropy>0,L=E.clearcoat>0,v=E.dispersion>0,Y=E.iridescence>0,j=E.sheen>0,ue=E.transmission>0,ce=ge&&!!E.anisotropyMap,Ae=L&&!!E.clearcoatMap,_e=L&&!!E.clearcoatNormalMap,Re=L&&!!E.clearcoatRoughnessMap,Ce=Y&&!!E.iridescenceMap,ye=Y&&!!E.iridescenceThicknessMap,Ee=j&&!!E.sheenColorMap,Ue=j&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Te=!!E.specularColorMap,qe=!!E.specularIntensityMap,K=ue&&!!E.transmissionMap,Se=ue&&!!E.thicknessMap,we=!!E.gradientMap,De=!!E.alphaMap,Me=E.alphaTest>0,xe=!!E.alphaHash,Be=!!E.extensions,Ye=Dn;E.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let ot={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Ie,fragmentShader:Z,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:U,batchingColor:U&&$._colorsTexture!==null,instancing:he,instancingColor:he&&$.instanceColor!==null,instancingMorph:he&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:T===null?i.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:oi,alphaToCoverage:!!E.alphaToCoverage,map:z,matcap:G,envMap:M,envMapMode:M&&ae.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:O,bumpMap:k,normalMap:B,displacementMap:f&&D,emissiveMap:S,normalMapObjectSpace:B&&E.normalMapType===Qc,normalMapTangentSpace:B&&E.normalMapType===ll,metalnessMap:J,roughnessMap:ee,anisotropy:ge,anisotropyMap:ce,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,dispersion:v,iridescence:Y,iridescenceMap:Ce,iridescenceThicknessMap:ye,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:Te,specularIntensityMap:qe,transmission:ue,transmissionMap:K,thicknessMap:Se,gradientMap:we,opaque:E.transparent===!1&&E.blending===si&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:Me,alphaHash:xe,combine:E.combine,mapUv:z&&x(E.map.channel),aoMapUv:I&&x(E.aoMap.channel),lightMapUv:O&&x(E.lightMap.channel),bumpMapUv:k&&x(E.bumpMap.channel),normalMapUv:B&&x(E.normalMap.channel),displacementMapUv:D&&x(E.displacementMap.channel),emissiveMapUv:S&&x(E.emissiveMap.channel),metalnessMapUv:J&&x(E.metalnessMap.channel),roughnessMapUv:ee&&x(E.roughnessMap.channel),anisotropyMapUv:ce&&x(E.anisotropyMap.channel),clearcoatMapUv:Ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Fe&&x(E.specularMap.channel),specularColorMapUv:Te&&x(E.specularColorMap.channel),specularIntensityMapUv:qe&&x(E.specularIntensityMap.channel),transmissionMapUv:K&&x(E.transmissionMap.channel),thicknessMapUv:Se&&x(E.thicknessMap.channel),alphaMapUv:De&&x(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(B||ge),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!se.attributes.uv&&(z||De),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:$.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:z&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:S&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ot,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||U)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function u(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let V in E.defines)w.push(V),w.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(b(w,E),_(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function b(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function _(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let w=g[E.type],V;if(w){let X=_n[w];V=hh.clone(X.uniforms)}else V=E.uniforms;return V}function P(E,w){let V;for(let X=0,$=h.length;X<$;X++){let te=h[X];if(te.cacheKey===w){V=te,++V.usedTimes;break}}return V===void 0&&(V=new Kg(i,w,E,r),h.push(V)),V}function A(E){if(--E.usedTimes===0){let w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:F}}function e0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function t0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,p,g,x,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function a(d,f,p,g,x,m){let u=o(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function c(d,f,p,g,x,m){let u=o(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||t0),n.length>1&&n.sort(f||Fh),s.length>1&&s.sort(f||Fh)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function n0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Oh,i.set(n,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function i0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function s0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var r0=0;function o0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a0(i){let e=new i0,t=s0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let s=new H,r=new ht,o=new ht;function a(l){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,_=0,y=0,P=0,A=0,C=0;l.sort(o0);for(let E=0,w=l.length;E<w;E++){let V=l[E],X=V.color,$=V.intensity,te=V.distance,se=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=X.r*$,d+=X.g*$,f+=X.b*$;else if(V.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(V.sh.coefficients[ne],$);C++}else if(V.isDirectionalLight){let ne=e.get(V);if(ne.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ae=V.shadow,q=t.get(V);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=V.shadow.matrix,b++}n.directional[p]=ne,p++}else if(V.isSpotLight){let ne=e.get(V);ne.position.setFromMatrixPosition(V.matrixWorld),ne.color.copy(X).multiplyScalar($),ne.distance=te,ne.coneCos=Math.cos(V.angle),ne.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ne.decay=V.decay,n.spot[x]=ne;let ae=V.shadow;if(V.map&&(n.spotLightMap[P]=V.map,P++,ae.updateMatrices(V),V.castShadow&&A++),n.spotLightMatrix[x]=ae.matrix,V.castShadow){let q=t.get(V);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=se,y++}x++}else if(V.isRectAreaLight){let ne=e.get(V);ne.color.copy(X).multiplyScalar($),ne.halfWidth.set(V.width*.5,0,0),ne.halfHeight.set(0,V.height*.5,0),n.rectArea[m]=ne,m++}else if(V.isPointLight){let ne=e.get(V);if(ne.color.copy(V.color).multiplyScalar(V.intensity),ne.distance=V.distance,ne.decay=V.decay,V.castShadow){let ae=V.shadow,q=t.get(V);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=V.shadow.matrix,_++}n.point[g]=ne,g++}else if(V.isHemisphereLight){let ne=e.get(V);ne.skyColor.copy(V.color).multiplyScalar($),ne.groundColor.copy(V.groundColor).multiplyScalar($),n.hemi[u]=ne,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==b||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==P||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=p,F.pointLength=g,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=b,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=P,F.numLightProbes=C,n.version=r0++)}function c(l,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){let _=l[u];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Bh(i){let e=new a0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function l0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bh(i),e.set(s,[a])):r>=o.length?(a=new Bh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(i,e,t){let n=new Xi,s=new me,r=new me,o=new pt,a=new Wr({depthPacking:jc}),c=new Xr,l={},h=t.maxTextureSize,d={[Rn]:Dt,[Dt]:Rn,[Ot]:Ot},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let u=this.type;this.render=function(A,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),w=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ln),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let $=u!==gn&&this.type===gn,te=u===gn&&this.type!==gn;for(let se=0,ne=A.length;se<ne;se++){let ae=A[se],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||$===!0||te===!0){let pe=this.type!==gn?{minFilter:Ft,magFilter:Ft}:{};q.map!==null&&q.map.dispose(),q.map=new Jt(s.x,s.y,pe),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ie=q.getViewportCount();for(let pe=0;pe<ie;pe++){let ve=q.getViewport(pe);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),X.viewport(o),q.updateMatrices(ae,pe),n=q.getFrustum(),y(C,F,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===gn&&b(q,F),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,V)};function b(A,C){let F=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,F,p,x,null)}function _(A,C,F,E){let w=null,V=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)w=V;else if(w=F.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let X=w.uuid,$=C.uuid,te=l[X];te===void 0&&(te={},l[X]=te);let se=te[$];se===void 0&&(se=w.clone(),te[$]=se,C.addEventListener("dispose",P)),w=se}if(w.visible=C.visible,w.wireframe=C.wireframe,E===gn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=i.properties.get(w);X.light=F}return w}function y(A,C,F,E,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let $=e.update(A),te=A.material;if(Array.isArray(te)){let se=$.groups;for(let ne=0,ae=se.length;ne<ae;ne++){let q=se[ne],le=te[q.materialIndex];if(le&&le.visible){let ie=_(A,le,E,w);A.onBeforeShadow(i,A,C,F,$,ie,q),i.renderBufferDirect(F,null,$,ie,A,q),A.onAfterShadow(i,A,C,F,$,ie,q)}}}else if(te.visible){let se=_(A,te,E,w);A.onBeforeShadow(i,A,C,F,$,se,null),i.renderBufferDirect(F,null,$,se,A,null),A.onAfterShadow(i,A,C,F,$,se,null)}}let X=A.children;for(let $=0,te=X.length;$<te;$++)y(X[$],C,F,E,w)}function P(A){A.target.removeEventListener("dispose",P);for(let F in l){let E=l[F],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var d0={[no]:io,[so]:ao,[ro]:lo,[ri]:oo,[io]:no,[ao]:so,[lo]:ro,[oo]:ri};function f0(i,e){function t(){let K=!1,Se=new pt,we=null,De=new pt(0,0,0,0);return{setMask:function(Me){we!==Me&&!K&&(i.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){K=Me},setClear:function(Me,xe,Be,Ye,ot){ot===!0&&(Me*=Ye,xe*=Ye,Be*=Ye),Se.set(Me,xe,Be,Ye),De.equals(Se)===!1&&(i.clearColor(Me,xe,Be,Ye),De.copy(Se))},reset:function(){K=!1,we=null,De.set(-1,0,0,0)}}}function n(){let K=!1,Se=!1,we=null,De=null,Me=null;return{setReversed:function(xe){if(Se!==xe){let Be=e.get("EXT_clip_control");xe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Se=xe;let Ye=Me;Me=null,this.setClear(Ye)}},getReversed:function(){return Se},setTest:function(xe){xe?T(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(xe){we!==xe&&!K&&(i.depthMask(xe),we=xe)},setFunc:function(xe){if(Se&&(xe=d0[xe]),De!==xe){switch(xe){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=xe}},setLocked:function(xe){K=xe},setClear:function(xe){Me!==xe&&(Se&&(xe=1-xe),i.clearDepth(xe),Me=xe)},reset:function(){K=!1,we=null,De=null,Me=null,Se=!1}}}function s(){let K=!1,Se=null,we=null,De=null,Me=null,xe=null,Be=null,Ye=null,ot=null;return{setTest:function(tt){K||(tt?T(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!K&&(i.stencilMask(tt),Se=tt)},setFunc:function(tt,vn,dn){(we!==tt||De!==vn||Me!==dn)&&(i.stencilFunc(tt,vn,dn),we=tt,De=vn,Me=dn)},setOp:function(tt,vn,dn){(xe!==tt||Be!==vn||Ye!==dn)&&(i.stencilOp(tt,vn,dn),xe=tt,Be=vn,Ye=dn)},setLocked:function(tt){K=tt},setClear:function(tt){ot!==tt&&(i.clearStencil(tt),ot=tt)},reset:function(){K=!1,Se=null,we=null,De=null,Me=null,xe=null,Be=null,Ye=null,ot=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,_=null,y=null,P=null,A=null,C=new He(0,0,0),F=0,E=!1,w=null,V=null,X=null,$=null,te=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,ae=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),ne=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ne=ae>=2);let le=null,ie={},pe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ie=new pt().fromArray(pe),Z=new pt().fromArray(ve);function W(K,Se,we,De){let Me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(K,xe),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<we;Be++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Se+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return xe}let R={};R[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),T(i.DEPTH_TEST),o.setFunc(ri),k(!1),B(Ya),T(i.CULL_FACE),I(Ln);function T(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function Q(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function he(K,Se){return d[K]!==Se?(i.bindFramebuffer(K,Se),d[K]=Se,K===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),K===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function U(K,Se){let we=p,De=!1;if(K){we=f.get(Se),we===void 0&&(we=[],f.set(Se,we));let Me=K.textures;if(we.length!==Me.length||we[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Be=Me.length;xe<Be;xe++)we[xe]=i.COLOR_ATTACHMENT0+xe;we.length=Me.length,De=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,De=!0);De&&i.drawBuffers(we)}function z(K){return g!==K?(i.useProgram(K),g=K,!0):!1}let G={[Wn]:i.FUNC_ADD,[wc]:i.FUNC_SUBTRACT,[Tc]:i.FUNC_REVERSE_SUBTRACT};G[Ac]=i.MIN,G[Rc]=i.MAX;let M={[Cc]:i.ZERO,[Ic]:i.ONE,[Pc]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[Oc]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[Dc]:i.DST_ALPHA,[Lc]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Uc]:i.ONE_MINUS_DST_ALPHA,[Bc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Hc]:i.ONE_MINUS_CONSTANT_ALPHA};function I(K,Se,we,De,Me,xe,Be,Ye,ot,tt){if(K===Ln){x===!0&&(Q(i.BLEND),x=!1);return}if(x===!1&&(T(i.BLEND),x=!0),K!==Ec){if(K!==m||tt!==E){if((u!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),u=Wn,y=Wn),tt)switch(K){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $a:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}b=null,_=null,P=null,A=null,C.set(0,0,0),F=0,m=K,E=tt}return}Me=Me||Se,xe=xe||we,Be=Be||De,(Se!==u||Me!==y)&&(i.blendEquationSeparate(G[Se],G[Me]),u=Se,y=Me),(we!==b||De!==_||xe!==P||Be!==A)&&(i.blendFuncSeparate(M[we],M[De],M[xe],M[Be]),b=we,_=De,P=xe,A=Be),(Ye.equals(C)===!1||ot!==F)&&(i.blendColor(Ye.r,Ye.g,Ye.b,ot),C.copy(Ye),F=ot),m=K,E=!1}function O(K,Se){K.side===Ot?Q(i.CULL_FACE):T(i.CULL_FACE);let we=K.side===Dt;Se&&(we=!we),k(we),K.blending===si&&K.transparent===!1?I(Ln):I(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let De=K.stencilWrite;a.setTest(De),De&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),S(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?T(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(K){w!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),w=K)}function B(K){K!==Sc?(T(i.CULL_FACE),K!==V&&(K===Ya?i.cullFace(i.BACK):K===bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),V=K}function D(K){K!==X&&(ne&&i.lineWidth(K),X=K)}function S(K,Se,we){K?(T(i.POLYGON_OFFSET_FILL),($!==Se||te!==we)&&(i.polygonOffset(Se,we),$=Se,te=we)):Q(i.POLYGON_OFFSET_FILL)}function J(K){K?T(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function ee(K){K===void 0&&(K=i.TEXTURE0+se-1),le!==K&&(i.activeTexture(K),le=K)}function ge(K,Se,we){we===void 0&&(le===null?we=i.TEXTURE0+se-1:we=le);let De=ie[we];De===void 0&&(De={type:void 0,texture:void 0},ie[we]=De),(De.type!==K||De.texture!==Se)&&(le!==we&&(i.activeTexture(we),le=we),i.bindTexture(K,Se||R[K]),De.type=K,De.texture=Se)}function L(){let K=ie[le];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function j(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ue(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ce(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ee(K){Ie.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Ie.copy(K))}function Ue(K){Z.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Z.copy(K))}function Fe(K,Se){let we=l.get(Se);we===void 0&&(we=new WeakMap,l.set(Se,we));let De=we.get(K);De===void 0&&(De=i.getUniformBlockIndex(Se,K.name),we.set(K,De))}function Te(K,Se){let De=l.get(Se).get(K);c.get(Se)!==De&&(i.uniformBlockBinding(Se,De,K.__bindingPointIndex),c.set(Se,De))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ie={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,_=null,y=null,P=null,A=null,C=new He(0,0,0),F=0,E=!1,w=null,V=null,X=null,$=null,te=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:T,disable:Q,bindFramebuffer:he,drawBuffers:U,useProgram:z,setBlending:I,setMaterial:O,setFlipSided:k,setCullFace:B,setLineWidth:D,setPolygonOffset:S,setScissorTest:J,activeTexture:ee,bindTexture:ge,unbindTexture:L,compressedTexImage2D:v,compressedTexImage3D:Y,texImage2D:Ce,texImage3D:ye,updateUBOMapping:Fe,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:Re,texSubImage2D:j,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ae,scissor:Ee,viewport:Ue,reset:qe}}function p0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,v){return p?new OffscreenCanvas(L,v):ys("canvas")}function x(L,v,Y){let j=1,ue=ge(L);if((ue.width>Y||ue.height>Y)&&(j=Y/Math.max(ue.width,ue.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ce=Math.floor(j*ue.width),Ae=Math.floor(j*ue.height);d===void 0&&(d=g(ce,Ae));let _e=v?g(ce,Ae):d;return _e.width=ce,_e.height=Ae,_e.getContext("2d").drawImage(L,0,0,ce,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ce+"x"+Ae+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function m(L){return L.generateMipmaps}function u(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,v,Y,j,ue=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=v;if(v===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RG16UI),Y===i.UNSIGNED_INT&&(ce=i.RG32UI),Y===i.BYTE&&(ce=i.RG8I),Y===i.SHORT&&(ce=i.RG16I),Y===i.INT&&(ce=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),Y===i.UNSIGNED_INT&&(ce=i.RGB32UI),Y===i.BYTE&&(ce=i.RGB8I),Y===i.SHORT&&(ce=i.RGB16I),Y===i.INT&&(ce=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ce=i.RGBA32UI),Y===i.BYTE&&(ce=i.RGBA8I),Y===i.SHORT&&(ce=i.RGBA16I),Y===i.INT&&(ce=i.RGBA32I)),v===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),v===i.RGBA){let Ae=ue?xs:Qe.getTransfer(j);Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=Ae===nt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(L,v){let Y;return L?v===null||v===$n||v===Qi?Y=i.DEPTH24_STENCIL8:v===xn?Y=i.DEPTH32F_STENCIL8:v===Ki&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===Qi?Y=i.DEPTH_COMPONENT24:v===xn?Y=i.DEPTH_COMPONENT32F:v===Ki&&(Y=i.DEPTH_COMPONENT16),Y}function P(L,v){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ft&&L.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function A(L){let v=L.target;v.removeEventListener("dispose",A),F(v),v.isVideoTexture&&h.delete(v)}function C(L){let v=L.target;v.removeEventListener("dispose",C),w(v)}function F(L){let v=n.get(L);if(v.__webglInit===void 0)return;let Y=L.source,j=f.get(Y);if(j){let ue=j[v.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(L),Object.keys(j).length===0&&f.delete(Y)}n.remove(L)}function E(L){let v=n.get(L);i.deleteTexture(v.__webglTexture);let Y=L.source,j=f.get(Y);delete j[v.__cacheKey],o.memory.textures--}function w(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ue=0;ue<v.__webglFramebuffer[j].length;ue++)i.deleteFramebuffer(v.__webglFramebuffer[j][ue]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=L.textures;for(let j=0,ue=Y.length;j<ue;j++){let ce=n.get(Y[j]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(Y[j])}n.remove(L)}let V=0;function X(){V=0}function $(){let L=V;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),V+=1,L}function te(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function se(L,v){let Y=n.get(L);if(L.isVideoTexture&&J(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(Y,L,v);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function ne(L,v){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){R(Y,L,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function ae(L,v){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){R(Y,L,v);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function q(L,v){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){T(Y,L,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let le={[Oi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ie={[Ft]:i.NEAREST,[$c]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},pe={[eh]:i.NEVER,[oh]:i.ALWAYS,[th]:i.LESS,[cl]:i.LEQUAL,[nh]:i.EQUAL,[rh]:i.GEQUAL,[ih]:i.GREATER,[sh]:i.NOTEQUAL};function ve(L,v){if(v.type===xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===fo||v.magFilter===Xs||v.magFilter===Jn||v.minFilter===Pt||v.minFilter===fo||v.minFilter===Xs||v.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,le[v.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ie[v.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==Xs&&v.minFilter!==Jn||v.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(L,v){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",A));let j=v.source,ue=f.get(j);ue===void 0&&(ue={},f.set(j,ue));let ce=te(v);if(ce!==L.__cacheKey){ue[ce]===void 0&&(ue[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[ce].usedTimes++;let Ae=ue[L.__cacheKey];Ae!==void 0&&(ue[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(v)),L.__cacheKey=ce,L.__webglTexture=ue[ce].texture}return Y}function Z(L,v,Y){return Math.floor(Math.floor(L/Y)/v)}function W(L,v,Y,j){let ce=L.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Y,j,v.data);else{ce.sort((ye,Ee)=>ye.start-Ee.start);let Ae=0;for(let ye=1;ye<ce.length;ye++){let Ee=ce[Ae],Ue=ce[ye],Fe=Ee.start+Ee.count,Te=Z(Ue.start,v.width,4),qe=Z(Ee.start,v.width,4);Ue.start<=Fe+1&&Te===qe&&Z(Ue.start+Ue.count-1,v.width,4)===Te?Ee.count=Math.max(Ee.count,Ue.start+Ue.count-Ee.start):(++Ae,ce[Ae]=Ue)}ce.length=Ae+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ye=0,Ee=ce.length;ye<Ee;ye++){let Ue=ce[ye],Fe=Math.floor(Ue.start/4),Te=Math.ceil(Ue.count/4),qe=Fe%v.width,K=Math.floor(Fe/v.width),Se=Te,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,qe,K,Se,we,Y,j,v.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function R(L,v,Y){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);let ue=Ie(L,v),ce=v.source;t.bindTexture(j,L.__webglTexture,i.TEXTURE0+Y);let Ae=n.get(ce);if(ce.version!==Ae.__version||ue===!0){t.activeTexture(i.TEXTURE0+Y);let _e=Qe.getPrimaries(Qe.workingColorSpace),Re=v.colorSpace===Un?null:Qe.getPrimaries(v.colorSpace),Ce=v.colorSpace===Un||_e===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ye=x(v.image,!1,s.maxTextureSize);ye=ee(v,ye);let Ee=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type),Fe=_(v.internalFormat,Ee,Ue,v.colorSpace,v.isVideoTexture);ve(j,v);let Te,qe=v.mipmaps,K=v.isVideoTexture!==!0,Se=Ae.__version===void 0||ue===!0,we=ce.dataReady,De=P(v,ye);if(v.isDepthTexture)Fe=y(v.format===es,v.type),Se&&(K?t.texStorage2D(i.TEXTURE_2D,1,Fe,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ee,Ue,null));else if(v.isDataTexture)if(qe.length>0){K&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Fe,qe[0].width,qe[0].height);for(let Me=0,xe=qe.length;Me<xe;Me++)Te=qe[Me],K?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Te.width,Te.height,Ee,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,Me,Fe,Te.width,Te.height,0,Ee,Ue,Te.data);v.generateMipmaps=!1}else K?(Se&&t.texStorage2D(i.TEXTURE_2D,De,Fe,ye.width,ye.height),we&&W(v,ye,Ee,Ue)):t.texImage2D(i.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ee,Ue,ye.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){K&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Fe,qe[0].width,qe[0].height,ye.depth);for(let Me=0,xe=qe.length;Me<xe;Me++)if(Te=qe[Me],v.format!==$t)if(Ee!==null)if(K){if(we)if(v.layerUpdates.size>0){let Be=xl(Te.width,Te.height,v.format,v.type);for(let Ye of v.layerUpdates){let ot=Te.data.subarray(Ye*Be/Te.data.BYTES_PER_ELEMENT,(Ye+1)*Be/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ye,Te.width,Te.height,1,Ee,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Te.width,Te.height,ye.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Fe,Te.width,Te.height,ye.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Te.width,Te.height,ye.depth,Ee,Ue,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Fe,Te.width,Te.height,ye.depth,0,Ee,Ue,Te.data)}else{K&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Fe,qe[0].width,qe[0].height);for(let Me=0,xe=qe.length;Me<xe;Me++)Te=qe[Me],v.format!==$t?Ee!==null?K?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Te.width,Te.height,Ee,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,Me,Fe,Te.width,Te.height,0,Ee,Ue,Te.data)}else if(v.isDataArrayTexture)if(K){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Fe,ye.width,ye.height,ye.depth),we)if(v.layerUpdates.size>0){let Me=xl(ye.width,ye.height,v.format,v.type);for(let xe of v.layerUpdates){let Be=ye.data.subarray(xe*Me/ye.data.BYTES_PER_ELEMENT,(xe+1)*Me/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ye.width,ye.height,1,Ee,Ue,Be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ue,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,Ee,Ue,ye.data);else if(v.isData3DTexture)K?(Se&&t.texStorage3D(i.TEXTURE_3D,De,Fe,ye.width,ye.height,ye.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ue,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,Ee,Ue,ye.data);else if(v.isFramebufferTexture){if(Se)if(K)t.texStorage2D(i.TEXTURE_2D,De,Fe,ye.width,ye.height);else{let Me=ye.width,xe=ye.height;for(let Be=0;Be<De;Be++)t.texImage2D(i.TEXTURE_2D,Be,Fe,Me,xe,0,Ee,Ue,null),Me>>=1,xe>>=1}}else if(qe.length>0){if(K&&Se){let Me=ge(qe[0]);t.texStorage2D(i.TEXTURE_2D,De,Fe,Me.width,Me.height)}for(let Me=0,xe=qe.length;Me<xe;Me++)Te=qe[Me],K?we&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ee,Ue,Te):t.texImage2D(i.TEXTURE_2D,Me,Fe,Ee,Ue,Te);v.generateMipmaps=!1}else if(K){if(Se){let Me=ge(ye);t.texStorage2D(i.TEXTURE_2D,De,Fe,Me.width,Me.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,ye)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ee,Ue,ye);m(v)&&u(j),Ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function T(L,v,Y){if(v.image.length!==6)return;let j=Ie(L,v),ue=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);let ce=n.get(ue);if(ue.version!==ce.__version||j===!0){t.activeTexture(i.TEXTURE0+Y);let Ae=Qe.getPrimaries(Qe.workingColorSpace),_e=v.colorSpace===Un?null:Qe.getPrimaries(v.colorSpace),Re=v.colorSpace===Un||Ae===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,Ee=[];for(let xe=0;xe<6;xe++)!Ce&&!ye?Ee[xe]=x(v.image[xe],!0,s.maxCubemapSize):Ee[xe]=ye?v.image[xe].image:v.image[xe],Ee[xe]=ee(v,Ee[xe]);let Ue=Ee[0],Fe=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),qe=_(v.internalFormat,Fe,Te,v.colorSpace),K=v.isVideoTexture!==!0,Se=ce.__version===void 0||j===!0,we=ue.dataReady,De=P(v,Ue);ve(i.TEXTURE_CUBE_MAP,v);let Me;if(Ce){K&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,Ue.width,Ue.height);for(let xe=0;xe<6;xe++){Me=Ee[xe].mipmaps;for(let Be=0;Be<Me.length;Be++){let Ye=Me[Be];v.format!==$t?Fe!==null?K?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,Ye.width,Ye.height,Fe,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,qe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,Ye.width,Ye.height,Fe,Te,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,qe,Ye.width,Ye.height,0,Fe,Te,Ye.data)}}}else{if(Me=v.mipmaps,K&&Se){Me.length>0&&De++;let xe=ge(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,qe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ye){K?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee[xe].width,Ee[xe].height,Fe,Te,Ee[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,Ee[xe].width,Ee[xe].height,0,Fe,Te,Ee[xe].data);for(let Be=0;Be<Me.length;Be++){let ot=Me[Be].image[xe].image;K?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,ot.width,ot.height,Fe,Te,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,qe,ot.width,ot.height,0,Fe,Te,ot.data)}}else{K?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,Te,Ee[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,Fe,Te,Ee[xe]);for(let Be=0;Be<Me.length;Be++){let Ye=Me[Be];K?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Fe,Te,Ye.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,qe,Fe,Te,Ye.image[xe])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),ce.__version=ue.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Q(L,v,Y,j,ue,ce){let Ae=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),Re=_(Y.internalFormat,Ae,_e,Y.colorSpace),Ce=n.get(v),ye=n.get(Y);if(ye.__renderTarget=v,!Ce.__hasExternalTextures){let Ee=Math.max(1,v.width>>ce),Ue=Math.max(1,v.height>>ce);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ce,Re,Ee,Ue,v.depth,0,Ae,_e,null):t.texImage2D(ue,ce,Re,Ee,Ue,0,Ae,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),S(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ue,ye.__webglTexture,0,D(v)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ue,ye.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(L,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),v.depthBuffer){let j=v.depthTexture,ue=j&&j.isDepthTexture?j.type:null,ce=y(v.stencilBuffer,ue),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=D(v);S(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ce,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,L)}else{let j=v.textures;for(let ue=0;ue<j.length;ue++){let ce=j[ue],Ae=r.convert(ce.format,ce.colorSpace),_e=r.convert(ce.type),Re=_(ce.internalFormat,Ae,_e,ce.colorSpace),Ce=D(v);Y&&S(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Re,v.width,v.height):S(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(L,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),se(v.depthTexture,0);let ue=j.__webglTexture,ce=D(v);if(v.depthTexture.format===Bi)S(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(v.depthTexture.format===es)S(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function z(L){let v=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){let ue=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",ue)};j.addEventListener("dispose",ue),v.__depthDisposeCallback=ue}v.__boundDepthTexture=j}if(L.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let j=L.texture.mipmaps;j&&j.length>0?U(v.__webglFramebuffer[0],L):U(v.__webglFramebuffer,L)}else if(Y){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),he(v.__webglDepthbuffer[j],L,!1);else{let ue=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ce)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),he(v.__webglDepthbuffer,L,!1);else{let ue=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(L,v,Y){let j=n.get(L);v!==void 0&&Q(j.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&z(L)}function M(L){let v=L.texture,Y=n.get(L),j=n.get(v);L.addEventListener("dispose",C);let ue=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Ae=ue.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++),ce){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let Re=0;Re<v.mipmaps.length;Re++)Y.__webglFramebuffer[_e][Re]=i.createFramebuffer()}else Y.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<v.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let _e=0,Re=ue.length;_e<Re;_e++){let Ce=n.get(ue[_e]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&S(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){let Re=ue[_e];Y.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[_e]);let Ce=r.convert(Re.format,Re.colorSpace),ye=r.convert(Re.type),Ee=_(Re.internalFormat,Ce,ye,Re.colorSpace,L.isXRRenderTarget===!0),Ue=D(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Y.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ve(i.TEXTURE_CUBE_MAP,v);for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Q(Y.__webglFramebuffer[_e][Re],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else Q(Y.__webglFramebuffer[_e],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let _e=0,Re=ue.length;_e<Re;_e++){let Ce=ue[_e],ye=n.get(Ce),Ee=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ye.__webglTexture),ve(Ee,Ce),Q(Y.__webglFramebuffer,L,Ce,i.COLOR_ATTACHMENT0+_e,Ee,0),m(Ce)&&u(Ee)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,j.__webglTexture),ve(_e,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Q(Y.__webglFramebuffer[Re],L,v,i.COLOR_ATTACHMENT0,_e,Re);else Q(Y.__webglFramebuffer,L,v,i.COLOR_ATTACHMENT0,_e,0);m(v)&&u(_e),t.unbindTexture()}L.depthBuffer&&z(L)}function I(L){let v=L.textures;for(let Y=0,j=v.length;Y<j;Y++){let ue=v[Y];if(m(ue)){let ce=b(L),Ae=n.get(ue).__webglTexture;t.bindTexture(ce,Ae),u(ce),t.unbindTexture()}}}let O=[],k=[];function B(L){if(L.samples>0){if(S(L)===!1){let v=L.textures,Y=L.width,j=L.height,ue=i.COLOR_BUFFER_BIT,ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(L),_e=v.length>1;if(_e)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Re=L.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let ye=n.get(v[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,Y,j,0,0,Y,j,ue,i.NEAREST),c===!0&&(O.length=0,k.length=0,O.push(i.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(O.push(ce),k.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);let ye=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let v=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function D(L){return Math.min(s.maxSamples,L.samples)}function S(L){let v=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(L){let v=o.render.frame;h.get(L)!==v&&(h.set(L,v),L.update())}function ee(L,v){let Y=L.colorSpace,j=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==oi&&Y!==Un&&(Qe.getTransfer(Y)===nt?(j!==$t||ue!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=ne,this.setTexture3D=ae,this.setTextureCube=q,this.rebindTextures=G,this.setupRenderTarget=M,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=S}function m0(i,e){function t(n,s=Un){let r,o=Qe.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===el)return i.BYTE;if(n===tl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===$t)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===ol)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===al)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===Js)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Vo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:g0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pl=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Il,u={},b=t.getContextAttributes(),_=null,y=null,P=[],A=[],C=new me,F=null,E=new Nt;E.viewport=new pt;let w=new Nt;w.viewport=new pt;let V=[E,w],X=new eo,$=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let T=P[R];return T===void 0&&(T=new Wi,P[R]=T),T.getTargetRaySpace()},this.getControllerGrip=function(R){let T=P[R];return T===void 0&&(T=new Wi,P[R]=T),T.getGripSpace()},this.getHand=function(R){let T=P[R];return T===void 0&&(T=new Wi,P[R]=T),T.getHandSpace()};function se(R){let T=A.indexOf(R.inputSource);if(T===-1)return;let Q=P[T];Q!==void 0&&(Q.update(R.inputSource,R.frame,l||o),Q.dispatchEvent({type:R.type,data:R.inputSource}))}function ne(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ae);for(let R=0;R<P.length;R++){let T=A[R];T!==null&&(A[R]=null,P[R].disconnect(T))}$=null,te=null,m.reset();for(let R in u)delete u[R];e.setRenderTarget(_),p=null,f=null,d=null,s=null,y=null,W.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,he=null,U=null;b.depth&&(U=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=b.stencil?es:Bi,he=b.stencil?Qi:$n);let z={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Jt(f.textureWidth,f.textureHeight,{format:$t,type:hn,depthTexture:new As(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Q={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Jt(p.framebufferWidth,p.framebufferHeight,{format:$t,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(R){for(let T=0;T<R.removed.length;T++){let Q=R.removed[T],he=A.indexOf(Q);he>=0&&(A[he]=null,P[he].disconnect(Q))}for(let T=0;T<R.added.length;T++){let Q=R.added[T],he=A.indexOf(Q);if(he===-1){for(let z=0;z<P.length;z++)if(z>=A.length){A.push(Q),he=z;break}else if(A[z]===null){A[z]=Q,he=z;break}if(he===-1)break}let U=P[he];U&&U.connect(Q)}}let q=new H,le=new H;function ie(R,T,Q){q.setFromMatrixPosition(T.matrixWorld),le.setFromMatrixPosition(Q.matrixWorld);let he=q.distanceTo(le),U=T.projectionMatrix.elements,z=Q.projectionMatrix.elements,G=U[14]/(U[10]-1),M=U[14]/(U[10]+1),I=(U[9]+1)/U[5],O=(U[9]-1)/U[5],k=(U[8]-1)/U[0],B=(z[8]+1)/z[0],D=G*k,S=G*B,J=he/(-k+B),ee=J*-k;if(T.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ee),R.translateZ(J),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),U[10]===-1)R.projectionMatrix.copy(T.projectionMatrix),R.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let ge=G+J,L=M+J,v=D-ee,Y=S+(he-ee),j=I*M/L*ge,ue=O*M/L*ge;R.projectionMatrix.makePerspective(v,Y,j,ue,ge,L),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function pe(R,T){T===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(T.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let T=R.near,Q=R.far;m.texture!==null&&(m.depthNear>0&&(T=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),X.near=w.near=E.near=T,X.far=w.far=E.far=Q,($!==X.near||te!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),$=X.near,te=X.far),X.layers.mask=R.layers.mask|6,E.layers.mask=X.layers.mask&3,w.layers.mask=X.layers.mask&5;let he=R.parent,U=X.cameras;pe(X,he);for(let z=0;z<U.length;z++)pe(U[z],he);U.length===2?ie(X,E,w):X.projectionMatrix.copy(E.projectionMatrix),ve(R,X,he)};function ve(R,T,Q){Q===null?R.matrix.copy(T.matrixWorld):(R.matrix.copy(Q.matrixWorld),R.matrix.invert(),R.matrix.multiply(T.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(T.projectionMatrix),R.projectionMatrixInverse.copy(T.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=zi*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(R){return u[R]};let Ie=null;function Z(R,T){if(h=T.getViewerPose(l||o),g=T,h!==null){let Q=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let he=!1;Q.length!==X.cameras.length&&(X.cameras.length=0,he=!0);for(let M=0;M<Q.length;M++){let I=Q[M],O=null;if(p!==null)O=p.getViewport(I);else{let B=d.getViewSubImage(f,I);O=B.viewport,M===0&&(e.setRenderTargetTextures(y,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(y))}let k=V[M];k===void 0&&(k=new Nt,k.layers.enable(M),k.viewport=new pt,V[M]=k),k.matrix.fromArray(I.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(I.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(O.x,O.y,O.width,O.height),M===0&&(X.matrix.copy(k.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),he===!0&&X.cameras.push(k)}let U=s.enabledFeatures;if(U&&U.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let M=d.getDepthInformation(Q[0]);M&&M.isValid&&M.texture&&m.init(M,s.renderState)}if(U&&U.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let M=0;M<Q.length;M++){let I=Q[M].camera;if(I){let O=u[I];O||(O=new Rs,u[I]=O);let k=d.getCameraImage(I);O.sourceTexture=k}}}}for(let Q=0;Q<P.length;Q++){let he=A[Q],U=P[Q];he!==null&&U!==void 0&&U.update(he,T,l||o)}Ie&&Ie(R,T),T.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:T}),g=null}let W=new zh;W.setAnimationLoop(Z),this.setAnimationLoop=function(R){Ie=R},this.dispose=function(){}}},yi=new sn,_0=new ht;function y0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,fl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,b,_):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Dt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Dt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=e.get(u),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(yi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=_*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function l(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let P=_.program;n.updateUBOMapping(b,P);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){let _=d();b.__bindingPointIndex=_;let y=i.createBuffer(),P=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],y=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,C=y.length;A<C;A++){let F=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,w=F.length;E<w;E++){let V=F[E];if(p(V,A,E,P)===!0){let X=V.__offset,$=Array.isArray(V.value)?V.value:[V.value],te=0;for(let se=0;se<$.length;se++){let ne=$[se],ae=x(ne);typeof ne=="number"||typeof ne=="boolean"?(V.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,X+te,V.__data)):ne.isMatrix3?(V.__data[0]=ne.elements[0],V.__data[1]=ne.elements[1],V.__data[2]=ne.elements[2],V.__data[3]=0,V.__data[4]=ne.elements[3],V.__data[5]=ne.elements[4],V.__data[6]=ne.elements[5],V.__data[7]=0,V.__data[8]=ne.elements[6],V.__data[9]=ne.elements[7],V.__data[10]=ne.elements[8],V.__data[11]=0):(ne.toArray(V.__data,te),te+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,y,P){let A=b.value,C=_+"_"+y;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{let F=P[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(b){let _=b.uniforms,y=0,P=16;for(let C=0,F=_.length;C<F;C++){let E=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,V=E.length;w<V;w++){let X=E[w],$=Array.isArray(X.value)?X.value:[X.value];for(let te=0,se=$.length;te<se;te++){let ne=$[te],ae=x(ne),q=y%P,le=q%ae.boundary,ie=q+le;y+=le,ie!==0&&P-ie<ae.storage&&(y+=P-ie),X.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=ae.storage}}}let A=y%P;return A>0&&(y+=P-A),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var jo=class{constructor(e={}){let{canvas:t=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,b=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,P=!1;this._outputColorSpace=xt;let A=0,C=0,F=null,E=-1,w=null,V=new pt,X=new pt,$=null,te=new He(0),se=0,ne=t.width,ae=t.height,q=1,le=null,ie=null,pe=new pt(0,0,ne,ae),ve=new pt(0,0,ne,ae),Ie=!1,Z=new Xi,W=!1,R=!1,T=new ht,Q=new H,he=new pt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function G(){return F===null?q:1}let M=n;function I(N,re){return t.getContext(N,re)}try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Me,!1),M===null){let re="webgl2";if(M=I(re,N),M===null)throw I(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let O,k,B,D,S,J,ee,ge,L,v,Y,j,ue,ce,Ae,_e,Re,Ce,ye,Ee,Ue,Fe,Te,qe;function K(){O=new Bm(M),O.init(),Fe=new m0(M,O),k=new Pm(M,O,e,Fe),B=new f0(M,O),k.reversedDepthBuffer&&f&&B.buffers.depth.setReversed(!0),D=new Hm(M),S=new e0,J=new p0(M,O,B,S,k,Fe,D),ee=new Dm(y),ge=new Om(y),L=new qd(M),Te=new Cm(M,L),v=new zm(M,L,D,Te),Y=new Gm(M,v,L,D),ye=new Vm(M,k,J),_e=new Lm(S),j=new Qg(y,ee,ge,O,k,Te,_e),ue=new y0(y,S),ce=new n0,Ae=new l0(O),Ce=new Rm(y,ee,ge,B,Y,p,c),Re=new u0(y,Y,k),qe=new v0(M,D,k,B),Ee=new Im(M,O,D),Ue=new km(M,O,D),D.programs=j.programs,y.capabilities=k,y.extensions=O,y.properties=S,y.renderLists=ce,y.shadowMap=Re,y.state=B,y.info=D}K();let Se=new Pl(y,M);this.xr=Se,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let N=O.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=O.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(N){N!==void 0&&(q=N,this.setSize(ne,ae,!1))},this.getSize=function(N){return N.set(ne,ae)},this.setSize=function(N,re,de=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=N,ae=re,t.width=Math.floor(N*q),t.height=Math.floor(re*q),de===!0&&(t.style.width=N+"px",t.style.height=re+"px"),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(ne*q,ae*q).floor()},this.setDrawingBufferSize=function(N,re,de){ne=N,ae=re,q=de,t.width=Math.floor(N*de),t.height=Math.floor(re*de),this.setViewport(0,0,N,re)},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(pe)},this.setViewport=function(N,re,de,fe){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,re,de,fe),B.viewport(V.copy(pe).multiplyScalar(q).round())},this.getScissor=function(N){return N.copy(ve)},this.setScissor=function(N,re,de,fe){N.isVector4?ve.set(N.x,N.y,N.z,N.w):ve.set(N,re,de,fe),B.scissor(X.copy(ve).multiplyScalar(q).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(N){B.setScissorTest(Ie=N)},this.setOpaqueSort=function(N){le=N},this.setTransparentSort=function(N){ie=N},this.getClearColor=function(N){return N.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(N=!0,re=!0,de=!0){let fe=0;if(N){let oe=!1;if(F!==null){let be=F.texture.format;oe=be===yo||be===_o||be===xo}if(oe){let be=F.texture.type,Le=be===hn||be===$n||be===Ki||be===Qi||be===mo||be===go,Oe=Ce.getClearColor(),Ne=Ce.getClearAlpha(),Ge=Oe.r,Xe=Oe.g,ke=Oe.b;Le?(g[0]=Ge,g[1]=Xe,g[2]=ke,g[3]=Ne,M.clearBufferuiv(M.COLOR,0,g)):(x[0]=Ge,x[1]=Xe,x[2]=ke,x[3]=Ne,M.clearBufferiv(M.COLOR,0,x))}else fe|=M.COLOR_BUFFER_BIT}re&&(fe|=M.DEPTH_BUFFER_BIT),de&&(fe|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ce.dispose(),ce.dispose(),Ae.dispose(),S.dispose(),ee.dispose(),ge.dispose(),Y.dispose(),Te.dispose(),qe.dispose(),j.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",dn),Se.removeEventListener("sessionend",Bl),Kn.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let N=D.autoReset,re=Re.enabled,de=Re.autoUpdate,fe=Re.needsUpdate,oe=Re.type;K(),D.autoReset=N,Re.enabled=re,Re.autoUpdate=de,Re.needsUpdate=fe,Re.type=oe}function Me(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function xe(N){let re=N.target;re.removeEventListener("dispose",xe),Be(re)}function Be(N){Ye(N),S.remove(N)}function Ye(N){let re=S.get(N).programs;re!==void 0&&(re.forEach(function(de){j.releaseProgram(de)}),N.isShaderMaterial&&j.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,de,fe,oe,be){re===null&&(re=U);let Le=oe.isMesh&&oe.matrixWorld.determinant()<0,Oe=fu(N,re,de,fe,oe);B.setMaterial(fe,Le);let Ne=de.index,Ge=1;if(fe.wireframe===!0){if(Ne=v.getWireframeAttribute(de),Ne===void 0)return;Ge=2}let Xe=de.drawRange,ke=de.attributes.position,je=Xe.start*Ge,it=(Xe.start+Xe.count)*Ge;be!==null&&(je=Math.max(je,be.start*Ge),it=Math.min(it,(be.start+be.count)*Ge)),Ne!==null?(je=Math.max(je,0),it=Math.min(it,Ne.count)):ke!=null&&(je=Math.max(je,0),it=Math.min(it,ke.count));let gt=it-je;if(gt<0||gt===1/0)return;Te.setup(oe,fe,Oe,de,Ne);let at,st=Ee;if(Ne!==null&&(at=L.get(Ne),st=Ue,st.setIndex(at)),oe.isMesh)fe.wireframe===!0?(B.setLineWidth(fe.wireframeLinewidth*G()),st.setMode(M.LINES)):st.setMode(M.TRIANGLES);else if(oe.isLine){let Ve=fe.linewidth;Ve===void 0&&(Ve=1),B.setLineWidth(Ve*G()),oe.isLineSegments?st.setMode(M.LINES):oe.isLineLoop?st.setMode(M.LINE_LOOP):st.setMode(M.LINE_STRIP)}else oe.isPoints?st.setMode(M.POINTS):oe.isSprite&&st.setMode(M.TRIANGLES);if(oe.isBatchedMesh)if(oe._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount,oe._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))st.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let Ve=oe._multiDrawStarts,ut=oe._multiDrawCounts,et=oe._multiDrawCount,Bt=Ne?L.get(Ne).bytesPerElement:1,Si=S.get(fe).currentProgram.getUniforms();for(let zt=0;zt<et;zt++)Si.setValue(M,"_gl_DrawID",zt),st.render(Ve[zt]/Bt,ut[zt])}else if(oe.isInstancedMesh)st.renderInstances(je,gt,oe.count);else if(de.isInstancedBufferGeometry){let Ve=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ut=Math.min(de.instanceCount,Ve);st.renderInstances(je,gt,ut)}else st.render(je,gt)};function ot(N,re,de){N.transparent===!0&&N.side===Ot&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,ir(N,re,de),N.side=Rn,N.needsUpdate=!0,ir(N,re,de),N.side=Ot):ir(N,re,de)}this.compile=function(N,re,de=null){de===null&&(de=N),u=Ae.get(de),u.init(re),_.push(u),de.traverseVisible(function(oe){oe.isLight&&oe.layers.test(re.layers)&&(u.pushLight(oe),oe.castShadow&&u.pushShadow(oe))}),N!==de&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(re.layers)&&(u.pushLight(oe),oe.castShadow&&u.pushShadow(oe))}),u.setupLights();let fe=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let be=oe.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let Oe=be[Le];ot(Oe,de,oe),fe.add(Oe)}else ot(be,de,oe),fe.add(be)}),u=_.pop(),fe},this.compileAsync=function(N,re,de=null){let fe=this.compile(N,re,de);return new Promise(oe=>{function be(){if(fe.forEach(function(Le){S.get(Le).currentProgram.isReady()&&fe.delete(Le)}),fe.size===0){oe(N);return}setTimeout(be,10)}O.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tt=null;function vn(N){tt&&tt(N)}function dn(){Kn.stop()}function Bl(){Kn.start()}let Kn=new zh;Kn.setAnimationLoop(vn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(N){tt=N,Se.setAnimationLoop(N),N===null?Kn.stop():Kn.start()},Se.addEventListener("sessionstart",dn),Se.addEventListener("sessionend",Bl),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(re),re=Se.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,re,F),u=Ae.get(N,_.length),u.init(re),_.push(u),T.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Z.setFromProjectionMatrix(T,nn,re.reversedDepth),R=this.localClippingEnabled,W=_e.init(this.clippingPlanes,R),m=ce.get(N,b.length),m.init(),b.push(m),Se.enabled===!0&&Se.isPresenting===!0){let be=y.xr.getDepthSensingMesh();be!==null&&ra(be,re,-1/0,y.sortObjects)}ra(N,re,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,ie),z=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,z&&Ce.addToRenderList(m,N),this.info.render.frame++,W===!0&&_e.beginShadows();let de=u.state.shadowsArray;Re.render(de,N,re),W===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let fe=m.opaque,oe=m.transmissive;if(u.setupLights(),re.isArrayCamera){let be=re.cameras;if(oe.length>0)for(let Le=0,Oe=be.length;Le<Oe;Le++){let Ne=be[Le];kl(fe,oe,N,Ne)}z&&Ce.render(N);for(let Le=0,Oe=be.length;Le<Oe;Le++){let Ne=be[Le];zl(m,N,Ne,Ne.viewport)}}else oe.length>0&&kl(fe,oe,N,re),z&&Ce.render(N),zl(m,N,re);F!==null&&C===0&&(J.updateMultisampleRenderTarget(F),J.updateRenderTargetMipmap(F)),N.isScene===!0&&N.onAfterRender(y,N,re),Te.resetDefaultState(),E=-1,w=null,_.pop(),_.length>0?(u=_[_.length-1],W===!0&&_e.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ra(N,re,de,fe){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLight)u.pushLight(N),N.castShadow&&u.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Z.intersectsSprite(N)){fe&&he.setFromMatrixPosition(N.matrixWorld).applyMatrix4(T);let Le=Y.update(N),Oe=N.material;Oe.visible&&m.push(N,Le,Oe,de,he.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Z.intersectsObject(N))){let Le=Y.update(N),Oe=N.material;if(fe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),he.copy(N.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),he.copy(Le.boundingSphere.center)),he.applyMatrix4(N.matrixWorld).applyMatrix4(T)),Array.isArray(Oe)){let Ne=Le.groups;for(let Ge=0,Xe=Ne.length;Ge<Xe;Ge++){let ke=Ne[Ge],je=Oe[ke.materialIndex];je&&je.visible&&m.push(N,Le,je,de,he.z,ke)}}else Oe.visible&&m.push(N,Le,Oe,de,he.z,null)}}let be=N.children;for(let Le=0,Oe=be.length;Le<Oe;Le++)ra(be[Le],re,de,fe)}function zl(N,re,de,fe){let oe=N.opaque,be=N.transmissive,Le=N.transparent;u.setupLightsView(de),W===!0&&_e.setGlobalState(y.clippingPlanes,de),fe&&B.viewport(V.copy(fe)),oe.length>0&&nr(oe,re,de),be.length>0&&nr(be,re,de),Le.length>0&&nr(Le,re,de),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function kl(N,re,de,fe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[fe.id]===void 0&&(u.state.transmissionRenderTarget[fe.id]=new Jt(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?ji:hn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let be=u.state.transmissionRenderTarget[fe.id],Le=fe.viewport||V;be.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),Ne=y.getActiveCubeFace(),Ge=y.getActiveMipmapLevel();y.setRenderTarget(be),y.getClearColor(te),se=y.getClearAlpha(),se<1&&y.setClearColor(16777215,.5),y.clear(),z&&Ce.render(de);let Xe=y.toneMapping;y.toneMapping=Dn;let ke=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),u.setupLightsView(fe),W===!0&&_e.setGlobalState(y.clippingPlanes,fe),nr(N,de,fe),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),O.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,gt=re.length;it<gt;it++){let at=re[it],st=at.object,Ve=at.geometry,ut=at.material,et=at.group;if(ut.side===Ot&&st.layers.test(fe.layers)){let Bt=ut.side;ut.side=Dt,ut.needsUpdate=!0,Hl(st,de,fe,Ve,ut,et),ut.side=Bt,ut.needsUpdate=!0,je=!0}}je===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}y.setRenderTarget(Oe,Ne,Ge),y.setClearColor(te,se),ke!==void 0&&(fe.viewport=ke),y.toneMapping=Xe}function nr(N,re,de){let fe=re.isScene===!0?re.overrideMaterial:null;for(let oe=0,be=N.length;oe<be;oe++){let Le=N[oe],Oe=Le.object,Ne=Le.geometry,Ge=Le.group,Xe=Le.material;Xe.allowOverride===!0&&fe!==null&&(Xe=fe),Oe.layers.test(de.layers)&&Hl(Oe,re,de,Ne,Xe,Ge)}}function Hl(N,re,de,fe,oe,be){N.onBeforeRender(y,re,de,fe,oe,be),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(y,re,de,fe,N,be),oe.transparent===!0&&oe.side===Ot&&oe.forceSinglePass===!1?(oe.side=Dt,oe.needsUpdate=!0,y.renderBufferDirect(de,re,fe,oe,N,be),oe.side=Rn,oe.needsUpdate=!0,y.renderBufferDirect(de,re,fe,oe,N,be),oe.side=Ot):y.renderBufferDirect(de,re,fe,oe,N,be),N.onAfterRender(y,re,de,fe,oe,be)}function ir(N,re,de){re.isScene!==!0&&(re=U);let fe=S.get(N),oe=u.state.lights,be=u.state.shadowsArray,Le=oe.state.version,Oe=j.getParameters(N,oe.state,be,re,de),Ne=j.getProgramCacheKey(Oe),Ge=fe.programs;fe.environment=N.isMeshStandardMaterial?re.environment:null,fe.fog=re.fog,fe.envMap=(N.isMeshStandardMaterial?ge:ee).get(N.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&N.envMap===null?re.environmentRotation:N.envMapRotation,Ge===void 0&&(N.addEventListener("dispose",xe),Ge=new Map,fe.programs=Ge);let Xe=Ge.get(Ne);if(Xe!==void 0){if(fe.currentProgram===Xe&&fe.lightsStateVersion===Le)return Gl(N,Oe),Xe}else Oe.uniforms=j.getUniforms(N),N.onBeforeCompile(Oe,y),Xe=j.acquireProgram(Oe,Ne),Ge.set(Ne,Xe),fe.uniforms=Oe.uniforms;let ke=fe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ke.clippingPlanes=_e.uniform),Gl(N,Oe),fe.needsLights=mu(N),fe.lightsStateVersion=Le,fe.needsLights&&(ke.ambientLightColor.value=oe.state.ambient,ke.lightProbe.value=oe.state.probe,ke.directionalLights.value=oe.state.directional,ke.directionalLightShadows.value=oe.state.directionalShadow,ke.spotLights.value=oe.state.spot,ke.spotLightShadows.value=oe.state.spotShadow,ke.rectAreaLights.value=oe.state.rectArea,ke.ltc_1.value=oe.state.rectAreaLTC1,ke.ltc_2.value=oe.state.rectAreaLTC2,ke.pointLights.value=oe.state.point,ke.pointLightShadows.value=oe.state.pointShadow,ke.hemisphereLights.value=oe.state.hemi,ke.directionalShadowMap.value=oe.state.directionalShadowMap,ke.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ke.spotShadowMap.value=oe.state.spotShadowMap,ke.spotLightMatrix.value=oe.state.spotLightMatrix,ke.spotLightMap.value=oe.state.spotLightMap,ke.pointShadowMap.value=oe.state.pointShadowMap,ke.pointShadowMatrix.value=oe.state.pointShadowMatrix),fe.currentProgram=Xe,fe.uniformsList=null,Xe}function Vl(N){if(N.uniformsList===null){let re=N.currentProgram.getUniforms();N.uniformsList=is.seqWithValue(re.seq,N.uniforms)}return N.uniformsList}function Gl(N,re){let de=S.get(N);de.outputColorSpace=re.outputColorSpace,de.batching=re.batching,de.batchingColor=re.batchingColor,de.instancing=re.instancing,de.instancingColor=re.instancingColor,de.instancingMorph=re.instancingMorph,de.skinning=re.skinning,de.morphTargets=re.morphTargets,de.morphNormals=re.morphNormals,de.morphColors=re.morphColors,de.morphTargetsCount=re.morphTargetsCount,de.numClippingPlanes=re.numClippingPlanes,de.numIntersection=re.numClipIntersection,de.vertexAlphas=re.vertexAlphas,de.vertexTangents=re.vertexTangents,de.toneMapping=re.toneMapping}function fu(N,re,de,fe,oe){re.isScene!==!0&&(re=U),J.resetTextureUnits();let be=re.fog,Le=fe.isMeshStandardMaterial?re.environment:null,Oe=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:oi,Ne=(fe.isMeshStandardMaterial?ge:ee).get(fe.envMap||Le),Ge=fe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Xe=!!de.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),ke=!!de.morphAttributes.position,je=!!de.morphAttributes.normal,it=!!de.morphAttributes.color,gt=Dn;fe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=y.toneMapping);let at=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,st=at!==void 0?at.length:0,Ve=S.get(fe),ut=u.state.lights;if(W===!0&&(R===!0||N!==w)){let Ct=N===w&&fe.id===E;_e.setState(fe,N,Ct)}let et=!1;fe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ut.state.version||Ve.outputColorSpace!==Oe||oe.isBatchedMesh&&Ve.batching===!1||!oe.isBatchedMesh&&Ve.batching===!0||oe.isBatchedMesh&&Ve.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ve.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ve.instancing===!1||!oe.isInstancedMesh&&Ve.instancing===!0||oe.isSkinnedMesh&&Ve.skinning===!1||!oe.isSkinnedMesh&&Ve.skinning===!0||oe.isInstancedMesh&&Ve.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ve.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ve.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ve.instancingMorph===!1&&oe.morphTexture!==null||Ve.envMap!==Ne||fe.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==_e.numPlanes||Ve.numIntersection!==_e.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Xe||Ve.morphTargets!==ke||Ve.morphNormals!==je||Ve.morphColors!==it||Ve.toneMapping!==gt||Ve.morphTargetsCount!==st)&&(et=!0):(et=!0,Ve.__version=fe.version);let Bt=Ve.currentProgram;et===!0&&(Bt=ir(fe,re,oe));let Si=!1,zt=!1,rs=!1,dt=Bt.getUniforms(),Xt=Ve.uniforms;if(B.useProgram(Bt.program)&&(Si=!0,zt=!0,rs=!0),fe.id!==E&&(E=fe.id,zt=!0),Si||w!==N){B.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),dt.setValue(M,"projectionMatrix",N.projectionMatrix),dt.setValue(M,"viewMatrix",N.matrixWorldInverse);let Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(M,Q.setFromMatrixPosition(N.matrixWorld)),k.logarithmicDepthBuffer&&dt.setValue(M,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&dt.setValue(M,"isOrthographic",N.isOrthographicCamera===!0),w!==N&&(w=N,zt=!0,rs=!0)}if(oe.isSkinnedMesh){dt.setOptional(M,oe,"bindMatrix"),dt.setOptional(M,oe,"bindMatrixInverse");let Ct=oe.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),dt.setValue(M,"boneTexture",Ct.boneTexture,J))}oe.isBatchedMesh&&(dt.setOptional(M,oe,"batchingTexture"),dt.setValue(M,"batchingTexture",oe._matricesTexture,J),dt.setOptional(M,oe,"batchingIdTexture"),dt.setValue(M,"batchingIdTexture",oe._indirectTexture,J),dt.setOptional(M,oe,"batchingColorTexture"),oe._colorsTexture!==null&&dt.setValue(M,"batchingColorTexture",oe._colorsTexture,J));let qt=de.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ye.update(oe,de,Bt),(zt||Ve.receiveShadow!==oe.receiveShadow)&&(Ve.receiveShadow=oe.receiveShadow,dt.setValue(M,"receiveShadow",oe.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Xt.envMap.value=Ne,Xt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&re.environment!==null&&(Xt.envMapIntensity.value=re.environmentIntensity),zt&&(dt.setValue(M,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&pu(Xt,rs),be&&fe.fog===!0&&ue.refreshFogUniforms(Xt,be),ue.refreshMaterialUniforms(Xt,fe,q,ae,u.state.transmissionRenderTarget[N.id]),is.upload(M,Vl(Ve),Xt,J)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(is.upload(M,Vl(Ve),Xt,J),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&dt.setValue(M,"center",oe.center),dt.setValue(M,"modelViewMatrix",oe.modelViewMatrix),dt.setValue(M,"normalMatrix",oe.normalMatrix),dt.setValue(M,"modelMatrix",oe.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){let Ct=fe.uniformsGroups;for(let Ut=0,oa=Ct.length;Ut<oa;Ut++){let jn=Ct[Ut];qe.update(jn,Bt),qe.bind(jn,Bt)}}return Bt}function pu(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function mu(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(N,re,de){let fe=S.get(N);fe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),S.get(N.texture).__webglTexture=re,S.get(N.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:de,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,re){let de=S.get(N);de.__webglFramebuffer=re,de.__useDefaultFramebuffer=re===void 0};let gu=M.createFramebuffer();this.setRenderTarget=function(N,re=0,de=0){F=N,A=re,C=de;let fe=!0,oe=null,be=!1,Le=!1;if(N){let Ne=S.get(N);if(Ne.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(M.FRAMEBUFFER,null),fe=!1;else if(Ne.__webglFramebuffer===void 0)J.setupRenderTarget(N);else if(Ne.__hasExternalTextures)J.rebindTextures(N,S.get(N.texture).__webglTexture,S.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ke=N.depthTexture;if(Ne.__boundDepthTexture!==ke){if(ke!==null&&S.has(ke)&&(N.width!==ke.image.width||N.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(N)}}let Ge=N.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);let Xe=S.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Xe[re])?oe=Xe[re][de]:oe=Xe[re],be=!0):N.samples>0&&J.useMultisampledRTT(N)===!1?oe=S.get(N).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[de]:oe=Xe,V.copy(N.viewport),X.copy(N.scissor),$=N.scissorTest}else V.copy(pe).multiplyScalar(q).floor(),X.copy(ve).multiplyScalar(q).floor(),$=Ie;if(de!==0&&(oe=gu),B.bindFramebuffer(M.FRAMEBUFFER,oe)&&fe&&B.drawBuffers(N,oe),B.viewport(V),B.scissor(X),B.setScissorTest($),be){let Ne=S.get(N.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne.__webglTexture,de)}else if(Le){let Ne=re;for(let Ge=0;Ge<N.textures.length;Ge++){let Xe=S.get(N.textures[Ge]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,de,Ne)}}else if(N!==null&&de!==0){let Ne=S.get(N.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ne.__webglTexture,de)}E=-1},this.readRenderTargetPixels=function(N,re,de,fe,oe,be,Le,Oe=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=S.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){B.bindFramebuffer(M.FRAMEBUFFER,Ne);try{let Ge=N.textures[Oe],Xe=Ge.format,ke=Ge.type;if(!k.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-fe&&de>=0&&de<=N.height-oe&&(N.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Oe),M.readPixels(re,de,fe,oe,Fe.convert(Xe),Fe.convert(ke),be))}finally{let Ge=F!==null?S.get(F).__webglFramebuffer:null;B.bindFramebuffer(M.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(N,re,de,fe,oe,be,Le,Oe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=S.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(re>=0&&re<=N.width-fe&&de>=0&&de<=N.height-oe){B.bindFramebuffer(M.FRAMEBUFFER,Ne);let Ge=N.textures[Oe],Xe=Ge.format,ke=Ge.type;if(!k.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,je),M.bufferData(M.PIXEL_PACK_BUFFER,be.byteLength,M.STREAM_READ),N.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Oe),M.readPixels(re,de,fe,oe,Fe.convert(Xe),Fe.convert(ke),0);let it=F!==null?S.get(F).__webglFramebuffer:null;B.bindFramebuffer(M.FRAMEBUFFER,it);let gt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await lh(M,gt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,je),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,be),M.deleteBuffer(je),M.deleteSync(gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,re=null,de=0){let fe=Math.pow(2,-de),oe=Math.floor(N.image.width*fe),be=Math.floor(N.image.height*fe),Le=re!==null?re.x:0,Oe=re!==null?re.y:0;J.setTexture2D(N,0),M.copyTexSubImage2D(M.TEXTURE_2D,de,0,0,Le,Oe,oe,be),B.unbindTexture()};let xu=M.createFramebuffer(),_u=M.createFramebuffer();this.copyTextureToTexture=function(N,re,de=null,fe=null,oe=0,be=null){be===null&&(oe!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=oe,oe=0):be=0);let Le,Oe,Ne,Ge,Xe,ke,je,it,gt,at=N.isCompressedTexture?N.mipmaps[be]:N.image;if(de!==null)Le=de.max.x-de.min.x,Oe=de.max.y-de.min.y,Ne=de.isBox3?de.max.z-de.min.z:1,Ge=de.min.x,Xe=de.min.y,ke=de.isBox3?de.min.z:0;else{let qt=Math.pow(2,-oe);Le=Math.floor(at.width*qt),Oe=Math.floor(at.height*qt),N.isDataArrayTexture?Ne=at.depth:N.isData3DTexture?Ne=Math.floor(at.depth*qt):Ne=1,Ge=0,Xe=0,ke=0}fe!==null?(je=fe.x,it=fe.y,gt=fe.z):(je=0,it=0,gt=0);let st=Fe.convert(re.format),Ve=Fe.convert(re.type),ut;re.isData3DTexture?(J.setTexture3D(re,0),ut=M.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(J.setTexture2DArray(re,0),ut=M.TEXTURE_2D_ARRAY):(J.setTexture2D(re,0),ut=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,re.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,re.unpackAlignment);let et=M.getParameter(M.UNPACK_ROW_LENGTH),Bt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Si=M.getParameter(M.UNPACK_SKIP_PIXELS),zt=M.getParameter(M.UNPACK_SKIP_ROWS),rs=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,at.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,at.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ge),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xe),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ke);let dt=N.isDataArrayTexture||N.isData3DTexture,Xt=re.isDataArrayTexture||re.isData3DTexture;if(N.isDepthTexture){let qt=S.get(N),Ct=S.get(re),Ut=S.get(qt.__renderTarget),oa=S.get(Ct.__renderTarget);B.bindFramebuffer(M.READ_FRAMEBUFFER,Ut.__webglFramebuffer),B.bindFramebuffer(M.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let jn=0;jn<Ne;jn++)dt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,S.get(N).__webglTexture,oe,ke+jn),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,S.get(re).__webglTexture,be,gt+jn)),M.blitFramebuffer(Ge,Xe,Le,Oe,je,it,Le,Oe,M.DEPTH_BUFFER_BIT,M.NEAREST);B.bindFramebuffer(M.READ_FRAMEBUFFER,null),B.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||S.has(N)){let qt=S.get(N),Ct=S.get(re);B.bindFramebuffer(M.READ_FRAMEBUFFER,xu),B.bindFramebuffer(M.DRAW_FRAMEBUFFER,_u);for(let Ut=0;Ut<Ne;Ut++)dt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,qt.__webglTexture,oe,ke+Ut):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,qt.__webglTexture,oe),Xt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ct.__webglTexture,be,gt+Ut):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ct.__webglTexture,be),oe!==0?M.blitFramebuffer(Ge,Xe,Le,Oe,je,it,Le,Oe,M.COLOR_BUFFER_BIT,M.NEAREST):Xt?M.copyTexSubImage3D(ut,be,je,it,gt+Ut,Ge,Xe,Le,Oe):M.copyTexSubImage2D(ut,be,je,it,Ge,Xe,Le,Oe);B.bindFramebuffer(M.READ_FRAMEBUFFER,null),B.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Xt?N.isDataTexture||N.isData3DTexture?M.texSubImage3D(ut,be,je,it,gt,Le,Oe,Ne,st,Ve,at.data):re.isCompressedArrayTexture?M.compressedTexSubImage3D(ut,be,je,it,gt,Le,Oe,Ne,st,at.data):M.texSubImage3D(ut,be,je,it,gt,Le,Oe,Ne,st,Ve,at):N.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,be,je,it,Le,Oe,st,Ve,at.data):N.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,be,je,it,at.width,at.height,st,at.data):M.texSubImage2D(M.TEXTURE_2D,be,je,it,Le,Oe,st,Ve,at);M.pixelStorei(M.UNPACK_ROW_LENGTH,et),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Bt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Si),M.pixelStorei(M.UNPACK_SKIP_ROWS,zt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,rs),be===0&&re.generateMipmaps&&M.generateMipmap(ut),B.unbindTexture()},this.initRenderTarget=function(N){S.get(N).__webglFramebuffer===void 0&&J.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?J.setTextureCube(N,0):N.isData3DTexture?J.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?J.setTexture2DArray(N,0):J.setTexture2D(N,0),B.unbindTexture()},this.resetState=function(){A=0,C=0,F=null,B.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};function Xh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ct,l=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Wh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let g=Wh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Wh(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new _t(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+d,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function qh(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,_=a.length;b<_;b++){let y=a[b],P=i.attributes[y];c[y]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);let A=i.morphAttributes[y];A&&(l[y]||(l[y]=[]),A.forEach((C,F)=>{let E=new C.array.constructor(C.count*C.itemSize);l[y][F]=new C.constructor(E,C.itemSize,C.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let b=0;b<r;b++){let _=n?n.getX(b):b,y="";for(let P=0,A=a.length;P<A;P++){let C=a[P],F=i.getAttribute(C),E=F.itemSize;for(let w=0;w<E;w++)y+=`${~~(F[d[w]](_)*x+m)},`}if(y in t)h.push(t[y]);else{for(let P=0,A=a.length;P<A;P++){let C=a[P],F=i.getAttribute(C),E=i.morphAttributes[C],w=F.itemSize,V=c[C],X=l[C];for(let $=0;$<w;$++){let te=d[$],se=f[$];if(V[se](o,F[te](_)),E)for(let ne=0,ae=E.length;ne<ae;ne++)X[ne][se](o,E[ne][te](_))}}t[y]=o,h.push(o),o++}}let u=i.clone();for(let b in i.attributes){let _=c[b];if(u.setAttribute(b,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),b in l)for(let y=0;y<l[b].length;y++){let P=l[b][y];u.morphAttributes[b][y]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return u.setIndex(h),u}function Yh(i){let e=new Map,t=new Set;i.updateMatrixWorld(!0);for(let n of i.children){if(!n.isMesh||Array.isArray(n.material))return i;let s=e.get(n.material);s||e.set(n.material,s={geometries:[],surface:!1}),s.surface||=!!n.userData.surface;let r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();s.geometries.push(r.applyMatrix4(n.matrix)),t.add(n.geometry)}i.clear();for(let[n,s]of e){let r=Xh(s.geometries,!1);s.geometries.forEach(a=>a.dispose());let o=new ze(r,n);o.castShadow=o.receiveShadow=!0,o.userData.surface=s.surface,i.add(o)}return t.forEach(n=>n.dispose()),i}var Zh=new WeakMap,Dl=new WeakMap,M0=new He("#edf4b1");function Jh(i,e,t=.24){if(!i)return;let n=e?t:0;Zh.get(i)!==n&&(Zh.set(i,n),i.traverse(s=>{if(s.isMesh)for(let r of[].concat(s.material||[]))r.color&&(Dl.has(r)||Dl.set(r,r.color.clone()),r.color.copy(Dl.get(r)),e&&r.color.lerp(M0,t))}))}var Ks=new H;function jt(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ks.copy(e),Ks[n]=0,Ks.normalize();let l=.5*o/(o+a),h=1-Ks.angleTo(i)/c;return Math.sign(Ks[t])===1?h*l:a/(o+a)+l+l*(1-h)}var yn=class i extends Xn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new H,l=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,x=new H,m=.5/o;for(let u=0,b=0;u<d.length;u+=3,b+=2)switch(c.fromArray(d,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[u+0]=h.x*Math.sign(c.x)+l.x*r,d[u+1]=h.y*Math.sign(c.y)+l.y*r,d[u+2]=h.z*Math.sign(c.z)+l.z*r,f[u+0]=l.x,f[u+1]=l.y,f[u+2]=l.z,Math.floor(u/g)){case 0:x.set(1,0,0),p[b+0]=jt(x,l,"z","y",r,n),p[b+1]=1-jt(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),p[b+0]=1-jt(x,l,"z","y",r,n),p[b+1]=1-jt(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),p[b+0]=1-jt(x,l,"x","z",r,e),p[b+1]=jt(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),p[b+0]=1-jt(x,l,"x","z",r,e),p[b+1]=1-jt(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),p[b+0]=1-jt(x,l,"x","y",r,e),p[b+1]=1-jt(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),p[b+0]=jt(x,l,"x","y",r,e),p[b+1]=1-jt(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var S0={honey:{name:"Honigholz",wood:"#bd8046",end:"#e7b77a",grain:"#8b572e"},chestnut:{name:"Kastanie",wood:"#96603b",end:"#cf9a63",grain:"#714528"}},b0={rails:{name:"Gartenzaun"},picket:{name:"Lattenzaun"},cross:{name:"Kreuzzaun"},logs:{name:"Rundholzzaun"}};function E0(i,e,{pitch:t=80,origin:n=[40,-40]}={}){if(!Number.isInteger(i)||i<1)throw Error("Invalid grid size");let s=new Set;return e.map(([r,o])=>{if(!Number.isInteger(r)||!Number.isInteger(o)||r<0||o<0||r>=i*i||o>=i*i||Math.abs(r%i-o%i)+Math.abs(Math.floor(r/i)-Math.floor(o/i))!==1)throw Error("Fence requires side-adjacent cells");let a=[r,o].sort((h,d)=>h-d).join(":");if(s.has(a))return null;s.add(a);let c=n[0]+(r%i+o%i)*t/2,l=n[1]-(Math.floor(r/i)+Math.floor(o/i))*t/2;return{a:r,b:o,center:[c,l],ends:r%i===o%i?[[c-t/2,l],[c+t/2,l]]:[[c,l-t/2],[c,l+t/2]]}}).filter(Boolean)}function $h({n:i,walls:e,pitch:t=80,origin:n=[40,-40],baseZ:s=8.5,style:r="honey",design:o="rails"}={}){if(!b0[o])throw Error("Unknown fence design");let a=S0[r];if(!a)throw Error("Unknown fence style");let c=new Ze;c.name="wood-fence";let l=E0(i,e,{pitch:t,origin:n});c.userData={walls:l.map(u=>[u.a,u.b]),occupiedCells:[],style:r,design:o,pitch:t,baseZ:s};let h=new rt({color:a.wood,roughness:.83}),d=new rt({color:a.end,roughness:.8}),f=new rt({color:a.grain,roughness:.95}),p=new rt({color:"#665341",roughness:.7}),g=(u,b,_,y,P,A,C,F,E)=>{let w=new ze(new yn(b,_,y,3,P),A);return w.position.set(C,F,E),w.castShadow=w.receiveShadow=!0,u.add(w),w},x=(u,b,_=.12)=>{let y=new ze(new ln(new an(b),16,_,4,!1),f);u.add(y)},m=new Map;for(let u of l){for(let[_,y]of u.ends){let P=_+":"+y;if(m.has(P))continue;let A=new Ze;if(A.name="fence-post",A.position.set(_,y,s-2),c.add(A),m.set(P,A),o==="logs"){let C=new ze(new on(3.25,3.65,34,18),h);C.rotation.x=Math.PI/2,C.position.z=17,C.castShadow=C.receiveShadow=!0,A.add(C);let F=new ze(new mt(3.65,18,10),d);F.scale.z=.35,F.position.z=34,F.castShadow=!0,A.add(F)}else g(A,6.3,6.3,34,1.05,h,0,0,17),g(A,7.4,7.4,3.1,1.25,d,0,0,34);for(let C of[-1,1])for(let F=0;F<2;F++){let E=[];for(let w=0;w<=9;w++)E.push(new H(-1.7+F*2.5+Math.sin(w*.6+F)*.22,C*3.16,3+w*2.2));x(A,E,.1)}}let b=new Ze;if(b.name="fence-span",b.position.set(...u.center,s),u.a%i!==u.b%i&&(b.rotation.z=Math.PI/2),b.userData.cells=[u.a,u.b],c.add(b),o==="rails")for(let _ of[16,24]){g(b,t-4.5,4.2,5.1,.95,h,0,0,_);for(let y of[-1,1]){for(let A=0;A<2;A++){let C=[];for(let F=0;F<=12;F++){let E=-t/2+5+F*(t-10)/12;C.push(new H(E,y*2.12,_-.9+A*1.7+Math.sin(F*.65+_)*.2))}x(b,C,.1)}for(let A of[-t/2+5.8,t/2-5.8]){let C=new ze(new mt(.56,8,6),p);C.scale.y=.3,C.position.set(A,y*2.28,_),b.add(C)}let P=[];for(let A=0;A<=24;A++){let C=A/24*Math.PI*2;P.push(new H(11+Math.cos(C)*1.6,y*2.14,_+Math.sin(C)*.65))}x(b,P,.1)}}else if(o==="picket"){for(let _ of[15,25])g(b,t-4.5,3.2,3.6,.8,h,0,1.2,_);for(let _=0;_<5;_++){let y=(_-2)*(t-14)/5,P=7.2,A=new yt;A.moveTo(-P/2,11),A.lineTo(P/2,11),A.lineTo(P/2,27),A.bezierCurveTo(P/2,32,-P/2,32,-P/2,27),A.closePath();let C=new ze(new Gt(A,{depth:2.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:3,curveSegments:12,steps:1}),_%2?d:h);C.rotation.x=Math.PI/2,C.position.set(y,-.7,0),C.castShadow=C.receiveShadow=!0,b.add(C);for(let F of[15,25]){let E=new ze(new mt(.48,8,6),p);E.scale.y=.3,E.position.set(y,-3.65,F),b.add(E)}x(b,[new H(y-1.2,-3.91,13),new H(y-1,-3.91,21),new H(y-1.4,-3.91,27)],.095)}}else if(o==="cross"){for(let A of[13,29])g(b,t-4.5,4,3.6,.8,h,0,0,A);let _=t-12,y=Math.atan2(16,_),P=Math.hypot(_,16);for(let A of[-1,1]){let C=new Ze;C.position.set(0,A*1.35,21),C.rotation.y=A*y,b.add(C),g(C,P,2.5,3.6,.75,d,0,0,0);for(let F of[-1,1])x(C,[new H(-P/2+2,F*1.27,-.5),new H(0,F*1.27,-.25),new H(P/2-2,F*1.27,-.55)],.1)}for(let A of[-1,1]){let C=new ze(new mt(.65,10,8),p);C.scale.y=.3,C.position.set(0,A*2.75,21),b.add(C)}}else for(let _ of[16,26]){let y=new ze(new on(2.3,2.3,t-4.5,18),h);y.rotation.z=Math.PI/2,y.position.z=_,y.castShadow=y.receiveShadow=!0,b.add(y);for(let P of[-1,1])for(let A of[-.9,.9]){let C=[];for(let F=0;F<=12;F++)C.push(new H(-t/2+4+F*(t-8)/12,P*Math.sqrt(2.3**2-A**2),_+A+Math.sin(F*.7)*.1));x(b,C,.1)}}}return{group:c,edges:l,dispose(){let u=new Set,b=new Set;c.traverse(_=>{_.geometry&&u.add(_.geometry),_.material&&b.add(_.material)}),u.forEach(_=>_.dispose()),b.forEach(_=>_.dispose())}}}function ea(i=-1,e="hops"){let t=f=>(f=Math.max(0,Math.min(1,f)),f*f*f*(f*(f*6-15)+10)),n={active:!1,lift:0,tuck:0,happy:0,look:0,squash:0,pollen:0,antenna:0,pitch:0,roll:0,turnStep:0};if(i<0||i>3.7)return n;if(e==="gentle"){let f=t((i-.75)/.55)*(1-t((i-2.5)/.65)),p=f*Math.sin((i-.85)*7)*.018;return{...n,active:!0,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,lift:0,tuck:f*1.35,happy:f,roll:p,pitch:-f*.035,squash:f*.012,antenna:f*.3+Math.sin(i*8)*f*.13,pollen:t((i-1.5)/.35)*(1-t((i-2.9)/.6))}}let s=(f,p,g)=>{let x=(i-f)/p;return x>0&&x<1?Math.sin(Math.PI*x)**2*g:0},r=s(.92,.5,2.8)+s(1.55,.8,6.2),o=t((i-.78)/.26)*(1-t((i-3.05)/.55)),a=(f,p)=>{let g=(i-f)/p;return g>0&&g<1?Math.sin(g*Math.PI)**2:0},c=i>2.35?Math.sin((i-2.35)*10)*Math.exp(-(i-2.35)*3.5):0,l=a(.72,.3),h=a(1.35,.3),d=a(1.32,.3)+a(2.25,.4);return{active:!0,lift:r,tuck:Math.min(1,r/3.5)*1.7,happy:o,look:t((i-.12)/.72),turnStep:Math.sin(Math.PI*Math.max(0,Math.min(1,(i-.06)/.85)))**2,squash:l*.055+h*.035+d*.065,pollen:t((i-2.35)/.2)*(1-t((i-2.9)/.7)),antenna:c*.65+r*.045,pitch:l*.035-r*.007-c*.013,roll:r*.005*Math.sin(i*3+.6)+c*.012}}function Kh(i,e,{distance:t=80,scale:n=1,cycles:s=4}={}){let o=(i*s+([0,3].includes(e)?.18:.68))%1,a=t/n/s*.66,c=o<.66,l,h=0,d=0;if(c)l=-a/2+o/.66*a,d=o/.66>.82?(o/.66-.82)*.5:0;else{let g=(o-.66)/.33999999999999997,x=g*g*(3-2*g);l=a/2-a*x,h=Math.sin(g*Math.PI)**1.25*1.8,d=-Math.sin(g*Math.PI)*.2}let f=Math.min(1,i/.08,(1-i)/.08),p=Math.max(0,f*f*(3-2*f));return{y:l*p,z:h*p,pitch:d*p,stance:c,phase:o,fade:p}}function jh(i,e,t=1){let r=(i/(12*t)+([0,3].includes(e)?.18:.68))%1,o=12*.66,a,c=0,l=0;if(r<.66)a=-o/2+r/.66*o;else{let h=(r-.66)/.33999999999999997,d=h*h*(3-2*h);a=o/2-o*d,c=Math.sin(h*Math.PI)*1.3,l=-Math.sin(h*Math.PI)*.16}return{y:a,z:c,pitch:l,stance:r<.66,phase:r}}var w0={apricot:{name:"Aprikose",coat:"#dfa578",root:"#d5a078",tip:"#ffe2b9",iris:"#428f8d"},coral:{name:"Koralle",coat:"#e78f85",root:"#d78582",tip:"#ffd4b9",iris:"#428f8d"},lavender:{name:"Lavendel",coat:"#a99bd0",root:"#a08fc3",tip:"#e6d8fa",iris:"#598e9c"},lagoon:{name:"Lagune",coat:"#75b9bf",root:"#6ca7b0",tip:"#caf0e7",iris:"#ae8051"}};function Qh({seed:i=913,presentation:e="ground"}={}){let t=new Ze,n=new Ze,s=new Ze;t.add(n),n.add(s);let r=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=(z,G=.8)=>new rt({color:z,roughness:G}),a=o("#dfa578"),c=o("#ffe5bd"),l=o("#e69b88"),h=o("#302529",.3),d=o("#fff9e7",.3),f=o("#428f8d",.35);function p(z,G,M,I,O,k,B,D){let S=new ze(new mt(1,40,28),G);return S.position.set(M,I,O),S.scale.set(k,B,D),S.castShadow=S.receiveShadow=!0,z.add(S),S}let g=e==="peek"?22e3:44e3,x=g*20;function m(z,G){let M=new z(G),I=0;return{push(...O){for(let k=0;k<O.length;k++)M[I++]=O[k]},get length(){return I},view(){return M.subarray(0,I)}}}let u=m(Float64Array,x),b=m(Float32Array,x*3),_=m(Float32Array,x*3),y=m(Float32Array,x*3),P=m(Float32Array,x*2),A=m(Uint32Array,g*48),C=new He("#d5a078"),F=new He("#ffe2b9");function E(z,G,M,I,O=!1){let k=p(s,a,...z,...G);k.name="original-body-part",k.userData.bodyCenter=[...z],k.userData.bodyRadii=[...G];for(let B=0;B<M;B++){let D=r()*2-1,S=r()*Math.PI*2,J=Math.sqrt(1-D*D),ee=new H(J*Math.cos(S),J*Math.sin(S),D),ge=new H(ee.x*G[0],ee.y*G[1],ee.z*G[2]).add(new H(...z));if(ge.z<1)continue;let L=O&&ee.y<-.4;if(L){let Re=[-5.6,5.6].some(ye=>((ge.x-ye)/4.6)**2+((ge.z-23.4)/5.2)**2<1),Ce=(ge.x/5.9)**2+((ge.z-16.5)/3.3)**2<1;if(Re||Ce)continue}let v=new H(ee.x/G[0],ee.y/G[1],ee.z/G[2]).normalize(),Y=new H(0,0,1);Math.abs(v.z)>.9&&Y.set(1,0,0);let j=new H().crossVectors(v,Y).normalize(),ue=new H(ee.x*.45,ee.y*.35,-.46),ce=I*(L?.2:1)*(.6+r()*.65),Ae=.075+r()*.13,_e=r()*.22;for(let Re=0;Re<2;Re++){let Ce=Re?new H().crossVectors(v,j).normalize():j,ye=b.length/3;for(let Ee=0;Ee<=4;Ee++){let Ue=Ee/4,Fe=ce*Ue*.88,Te=ce*Ue*Ue*.9,qe=ge.x+v.x*Fe+ue.x*Te,K=ge.y+v.y*Fe+ue.y*Te,Se=ge.z+v.z*Fe+ue.z*Te,we=Ae*(1-Ue*.93),De=.28+Ue*.58+_e;for(let Me of[-1,1]){let xe=we*Me;b.push(qe+Ce.x*xe,K+Ce.y*xe,Math.max(.2,Se+Ce.z*xe)),_.push(v.x,v.y,v.z),y.push(C.r+(F.r-C.r)*De,C.g+(F.g-C.g)*De,C.b+(F.b-C.b)*De),u.push(De),P.push(Me===-1?0:1,Ue)}}for(let Ee=0;Ee<4;Ee++){let Ue=ye+Ee*2;A.push(Ue,Ue+1,Ue+2,Ue+1,Ue+3,Ue+2)}}}}e!=="peek"&&(E([0,6,10],[10.5,15,9.7],15200,3.3),E([0,19,6],[7.4,9,5.7],4600,2.9),E([1,26,4],[4.7,7,3.4],2200,2.5));let w=new Ze;s.add(w),E([0,-8,20],[13.1,11.5,12.2],22e3,2.9,!0);let V=[],X=[],$=[],te=[];for(let[z,G]of[[-8,-6],[8,-6],[-8,11],[8,11]]){let M=new Ze;M.name="soft-paw",M.userData.home={x:z,y:G},M.position.set(z,G,1.35),M.rotation.z=z<0?-.13:.13,n.add(M);let I=new mt(1,40,28),O=I.attributes.position;for(let S=0;S<O.count;S++){let J=O.getX(S),ee=O.getY(S),ge=O.getZ(S),L=2.15*(1-.22*Math.max(0,ee)),v=ee<-.35?.09*Math.cos(J*Math.PI*2.4)*-ee:0;O.setXYZ(S,J*L,ee*3.4-v,Math.max(-1.3,ge*1.35)+Math.max(0,ee)*.45)}I.computeVertexNormals();let k=new ze(I,a);k.castShadow=k.receiveShadow=!0,M.add(k);let B=p(n,a,0,0,0,1,1,1);B.name="rigid-upper-leg",$.push(B);let D=p(n,a,0,0,0,1,1,1);D.name="rigid-lower-leg",te.push(D),X.push(new H(z*.86,G+1.4,6.1)),V.push(M)}let se=(z,G)=>-8-11.5*Math.sqrt(Math.max(.025,1-(z/13.1)**2-((G-20)/12.2)**2));function ne(z,G,M,I,O,k,B){let D=[],S=[];for(let v=0;v<=12;v++)for(let Y=0;Y<=64;Y++){let j=v/12,ue=Y/64*Math.PI*2,ce=Math.cos(ue)*O*j,Ae=Math.sin(ue)*k*j;D.push(ce,se(M+ce,I+Ae)-B-.27*(1-j*j),Ae)}for(let v=0;v<12;v++)for(let Y=0;Y<64;Y++){let j=v*65+Y,ue=j+64+1;S.push(j,ue,j+1,j+1,ue,ue+1)}let ge=new ct;ge.setAttribute("position",new Je(D,3)),ge.setIndex(S),ge.computeVertexNormals();let L=new ze(ge,G);return L.position.set(M,0,I),z.add(L),L}let ae=new Ze;ae.name="happy-crescent-eyes",w.add(ae),ae.visible=!1;for(let z of[-1,1]){let G=[];for(let M=0;M<=20;M++){let I=z*5.6+(M/20-.5)*5.3,O=23.3+Math.sin(M/20*Math.PI)*1.35;G.push(new H(I,se(I,O)-.3,O))}ae.add(new ze(new ln(new an(G),24,.3,7,!1),h))}let q=[];for(let z of[-1,1]){let G=z*5.6,M=23.4,I=new Ze;I.name="embedded-eye",w.add(I),ne(I,c,G,M,3.95,4.7,.11),ne(I,f,G,M-.1,2.65,3.25,.3),ne(I,h,G,M+.1,1.75,2.45,.49),p(I,d,G-.8,se(G-.8,M+1.5)-.78,M+1.5,.72,.2,.82),p(I,d,G+.65,se(G+.65,M-.65)-.78,M-.65,.26,.16,.3),q.push(I);let O=[];for(let B=0;B<=64;B++){let D=B/64*Math.PI*2,S=G+Math.cos(D)*4.05,J=M+Math.sin(D)*4.8;O.push(new H(S,se(S,J)-.05,J))}w.add(new ze(new ln(new an(O),80,.37,8,!1),a)),p(w,l,z*8.3,-17.2,16,2.05,.5,1.05);let k=[];for(let B=0;B<=12;B++){let D=z*5.6+(B/12-.5)*4.5,S=28.7+Math.sin(B/12*Math.PI)*.65;k.push(new H(D,se(D,S)-.14,S))}w.add(new ze(new ln(new an(k),16,.26,6,!1),a))}p(w,c,0,-18.9,16.4,5.2,1.7,2.7),p(w,l,0,-20.6,17.7,1.65,1.05,1.1);let le=[];for(let z=0;z<=20;z++){let G=(z/20-.5)*6.6;le.push(new H(G,-20.35+Math.abs(G)*.14,14.7+.105*G*G))}let ie=new ze(new ln(new an(le),24,.22,6,!1),h);w.add(ie);let pe=[];for(let z of[-1,1]){let B=function(D,S=!1,J=0){let ee=Math.sin(D*1.4+z*.7),ge=Math.sin(D*2.2+z)*.12;M.v2.set(z*(1.7+ee*.35),-1.4+ge,11.4),M.v3.set(z*(5.2+ee*.55+J),-1.9+Math.sin(D*1.2+z)*.35,10.2+ge+J*.4+(S?Math.sin(D*5+z)*.15:0));let L=M.computeFrenetFrames(26,!1),v=I.attributes.position,Y=I.attributes.normal;for(let j=0;j<=26;j++){let ue=j/26,ce=M.getPoint(ue),Ae=.44*(1-ue)+.23*ue;for(let _e=0;_e<=8;_e++){let Re=_e/8*Math.PI*2,Ce=L.normals[j].clone().multiplyScalar(-Math.cos(Re)).addScaledVector(L.binormals[j],Math.sin(Re)),ye=ce.clone().addScaledVector(Ce,Ae),Ee=j*9+_e;v.setXYZ(Ee,ye.x,ye.y,ye.z),Y.setXYZ(Ee,Ce.x,Ce.y,Ce.z)}}v.needsUpdate=Y.needsUpdate=!0,I.computeBoundingSphere(),k.position.copy(M.v3)},G=new Ze;G.name="soft-curved-antenna",G.position.set(z*6.7,-5,30),s.add(G);let M=new Zi(new H,new H(z*.25,-.2,4.6),new H(z*1.7,-1.4,11.4),new H(z*5.2,-1.9,10.2)),I=new ln(M,26,.4,8,!1),O=new ze(I,a);G.add(O);let k=p(G,c,z*5.2,-1.9,10.2,1.65,1.65,1.9);B(0),pe.push({group:G,flex:B})}let ve=new ct;ve.setAttribute("position",new _t(b.view(),3)),ve.setAttribute("normal",new _t(_.view(),3)),ve.setAttribute("color",new _t(y.view(),3)),ve.setAttribute("uv",new _t(P.view(),2)),ve.setIndex(new _t(A.view(),1));let Ie=u.view(),Z=new Uint8Array(2048*4);for(let z=0;z<64;z++)for(let G=0;G<32;G++){let M=(z*32+G)*4,I=Math.abs((G+.5)/32*2-1),O=Math.round(255*Math.pow(1-I,.55)*(1-.75*Math.pow(z/63,4)));Z[M]=Z[M+1]=Z[M+2]=O,Z[M+3]=255}let W=new qn(Z,32,64);W.needsUpdate=!0,W.magFilter=W.minFilter=Pt;let R=new rt({vertexColors:!0,alphaMap:W,transparent:!0,opacity:.85,depthWrite:!1,side:Ot,roughness:1}),T=new ze(ve,R);T.name="curved-soft-fur",T.frustumCulled=!1,s.add(T);function Q(z){let G=w0[z];if(!G)throw Error("Unknown creature palette "+z);a.color.set(G.coat),f.color.set(G.iris),C.set(G.root),F.set(G.tip);let M=ve.attributes.color,I=new He;for(let O=0;O<Ie.length;O++)I.copy(C).lerp(F,Ie[O]),M.setXYZ(O,I.r,I.g,I.b);M.needsUpdate=!0,t.userData.palette=z}let he=new Ze;he.name="completion-pollen",he.visible=!1,t.add(he);let U=new mt(.32,8,6);for(let z=0;z<9;z++){let G=new ze(U,new rt({color:"#ffd475",emissive:"#e8a63b",emissiveIntensity:.45,transparent:!0,opacity:0,depthWrite:!1}));he.add(G)}return Q("apricot"),{group:t,setPalette:Q,update(z,G=0,M={}){let I=ea(M.celebrationAge??-1,M.celebrationStyle),O=!I.active&&(M.active??(G>0&&G<1));if(n.position.z=I.lift,n.rotation.x=I.pitch,n.rotation.y=I.roll+I.turnStep*Math.sin((M.celebrationAge??0)*16)*.018,n.scale.set(1+I.squash*.4,1+I.squash*.4,1-I.squash),ae.visible=I.happy>.55,q.forEach(k=>k.visible=!ae.visible),ie.scale.x=1+I.happy*.18,he.visible=I.pollen>0,he.children.forEach((k,B)=>{let D=Math.min(1.8,Math.max(0,(M.celebrationAge??0)-1.5)),S=B*2.4;k.position.set(Math.cos(S)*(9+D*3)+Math.sin(D*2+B)*.7,Math.sin(S)*(8+D*3),8+D*(8+B*.4)),k.material.opacity=I.pollen*(.5+B%3*.12)}),s.position.z=Math.sin(z*2)*.13+(O?Math.sin(G*Math.PI*16)*.22:0),s.rotation.y=O?Math.sin(G*Math.PI*16)*.012:Math.sin(z*.8)*.012,w.rotation.set(0,0,0),q.forEach(k=>{k.scale.set(1,1,1),k.position.set(0,0,0)}),V.forEach((k,B)=>{let D=k.userData.home,S=(M.celebrationAge??0)*17+B*Math.PI/2,J=I.turnStep*Math.max(0,Math.sin(S))*1.25,ee=O?M.travel!==void 0?jh(M.travel,B,t.scale.x):Kh(M.progress??G,B,{distance:M.distance??80,scale:t.scale.x}):{y:0,z:0,pitch:0};k.position.set(D.x+I.turnStep*Math.cos(S)*.65,D.y+ee.y+I.turnStep*Math.sin(S)*.65+(I.active?Math.sin((M.celebrationAge??0)*7+B*Math.PI/2)*I.tuck*.5:0),1.35+ee.z+J+I.tuck*(B<2?1:M.celebrationStyle==="gentle"?0:.62)*(1+Math.sin((M.celebrationAge??0)*4+B*1.6)*.12)),k.rotation.x=ee.pitch-I.tuck*(B<2?.08:.035);let ge=X[B].clone();ge.z+=s.position.z;let L=new H(k.position.x,k.position.y+.65,k.position.z+1.05),v=L.clone().sub(ge),Y=Math.min(6.95,Math.max(.6,v.length()));v.normalize(),L.copy(ge).addScaledVector(v,Y),k.position.copy(L).add(new H(0,-.65,-1.05));let j=3.8,ue=3.4,ce=(j*j-ue*ue+Y*Y)/(2*Y),Ae=Math.sqrt(Math.max(0,j*j-ce*ce)),_e=new H(0,1,0).addScaledVector(v,-v.y).normalize(),Re=ge.clone().addScaledVector(v,ce).addScaledVector(_e,Ae);function Ce(ye,Ee,Ue,Fe){let Te=Ue.clone().sub(Ee);ye.position.copy(Ee).addScaledVector(Te,.5),ye.quaternion.setFromUnitVectors(new H(0,1,0),Te.normalize()),ye.scale.set(Fe,Ee.distanceTo(Ue)/2,Fe)}Ce($[B],ge,Re,1.2),Ce(te[B],Re,L,1.1)}),pe.forEach((k,B)=>k.flex(z,O,I.antenna*(B?.78:1))),e==="peek"){let B=new H(0,-8,20),D=M.peekGreetingAge??-1,S=D>=0&&D<1.3?Math.sin(D/1.3*Math.PI):0;s.rotation.set(-.62,Math.sin(z*.65)*.012,Math.sin(Math.max(0,D)*4)*.05*S);let J=B.clone().applyEuler(s.rotation);s.position.copy(B).sub(J),s.position.z+=Math.sin(z*1.8)*.12,n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),V.forEach((L,v)=>{L.visible=v<2,L.position.set(v===0?-12:12,-17,10),L.rotation.set(.12,0,v===0?-.16:.16)}),$.forEach(L=>L.visible=!1),te.forEach(L=>L.visible=!1);let ee=z%7.3,ge=ee>4.9&&ee<5.03||ee>5.22&&ee<5.3;q.forEach(L=>L.visible=!ge),ae.visible=ge}},setSize(z){t.scale.setScalar(z/100)},dispose(){let z=new Set,G=new Set;t.traverse(M=>{M.geometry&&z.add(M.geometry),M.material&&G.add(M.material)}),z.forEach(M=>M.dispose()),G.forEach(M=>M.dispose()),W.dispose()}}}var ta=class{constructor(e=0,t=0){this.reset(e,t)}reset(e,t){this.x=e,this.y=t,this.toX=e,this.toY=t,this.start=0,this.duration=0,this.lastTarget=null,this.points=[[e,t]],this.remaining=[],this.segmentStart=[e,t]}sample(e){let t=this.duration?Math.max(0,Math.min(1,(e-this.start)/this.duration)):1,n=t*t*(3-2*t),s=this.points.slice(1).map((o,a)=>Math.abs(o[0]-this.points[a][0])+Math.abs(o[1]-this.points[a][1])),r=s.reduce((o,a)=>o+a,0)*n;this.remaining=[];for(let o=0;o<s.length;o++){let a=this.points[o],c=this.points[o+1],l=s[o];if(r<=l&&l>0){let h=r/l;this.x=a[0]+(c[0]-a[0])*h,this.y=a[1]+(c[1]-a[1])*h,this.segmentStart=a,this.remaining=this.points.slice(o+1);break}r-=l}return(t===1||!s.length)&&(this.x=this.toX,this.y=this.toY,this.remaining=[],this.segmentStart=[this.x,this.y]),{x:this.x,y:this.y,moving:t<1&&s.length>0}}target(e,t,n){if(e===this.toX&&t===this.toY||e!==this.toX&&t!==this.toY)return!1;let s=this.sample(n),r=a=>a[0]===e&&a[1]===t,o=this.remaining.map(a=>[...a]);if(r(this.segmentStart))o=[[e,t]];else{let a=o.findIndex(r);a>=0?o=o.slice(0,a+1):o.push([e,t])}return this.points=[[s.x,s.y],...o],this.toX=e,this.toY=t,this.duration=this.lastTarget===null?.22:Math.max(.07,Math.min(.22,n-this.lastTarget)),this.duration=Math.min(.5,Math.max(.035,this.duration*(this.durationScale??1))),this.lastTarget=n,this.start=n,!0}};var na=class{constructor(){this.transition=new ta,this.level=null,this.path=[],this.heading=0,this.joyStarted=-1,this.joyFacing=0,this.complete=!1,this.travel=0,this.lastTime=null,this.lastPoint=null}sync(e,t,n){let s=l=>[l%e.n*80+60,-(Math.floor(l/e.n)*80+60)];if(this.level!==e||!t.length){let[l,h]=s(e.marks[0]);this.transition.reset(l,h),this.path=[],this.heading=0,this.joyStarted=-1,this.complete=!1,this.travel=0,this.lastPoint=[l,h],this.lastTime=n,this.level=e}let a=this.path.at(-1),c=t.at(-1);if(c!==void 0&&c!==a){let[l,h]=s(c);if(a!==void 0){let[d,f]=s(a);this.heading=Math.atan2(l-d,-(h-f)),this.transition.target(l,h,n)}else this.transition.reset(l,h);this.joyStarted=-1}this.path=[...t],this.complete=t.length===e.solution.length}sample(e){let t=this.transition.sample(e),n=this.lastTime===null?0:Math.max(0,Math.min(.1,e-this.lastTime));this.lastPoint&&(this.travel+=Math.min(Math.hypot(t.x-this.lastPoint[0],t.y-this.lastPoint[1]),n*36)),this.lastPoint=[t.x,t.y],this.lastTime=e,this.complete&&!t.moving&&this.joyStarted<0&&(this.joyStarted=e,this.joyFacing=this.heading);let s=this.joyStarted<0?-1:e-this.joyStarted,r=ea(s,"gentle"),o=Math.atan2(Math.sin(-this.joyFacing),Math.cos(-this.joyFacing));return{...t,heading:this.joyStarted<0?this.heading:r.active?this.joyFacing+o*r.look:0,celebrationAge:s,celebrationTurn:o,travel:this.travel,complete:this.complete,cell:this.path.at(-1)??this.level?.marks[0]}}};var eu={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function tu({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=eu[t]||eu.front,s=n.radius,r=n.x,o=n.z,a=new Ze,c=new Ze;a.add(c),c.position.set(n.fx,0,n.fz);let l=new mt(1,20,14),h=[],d=(ie,pe=.48)=>{let ve=new rt({color:ie,roughness:pe});return h.push(ve),ve},f=d("#ffd05a"),p=d("#ffeaa2"),g=d("#538b2c"),x=d("#e5a32a");function m(ie,pe,ve,Ie,Z,W,R,T){let Q=new ze(l,pe);return Q.position.set(ve,Ie,Z),Q.scale.set(W,R,T),Q.castShadow=!0,Q.receiveShadow=!0,ie.add(Q),Q}m(c,g,0,5,0,2.2,7,2.2);for(let ie of[-1,1]){let pe=m(c,g,ie*7,4,1,9,1.7,4);pe.rotation.z=ie*.27,pe.rotation.y=ie*.3}let u=[];for(let ie=0;ie<6;ie++){let pe=new Ze;pe.rotation.y=ie*Math.PI/3,c.add(pe);let ve=m(pe,ie%2?f:p,0,12,0,5,9,4);u.push(ve)}let b=m(c,x,0,12,0,5,3.5,5),_=d("#c5a777"),y=new on(s+1.6,s+1.6,2.6,40),P=new ze(y,_);P.position.set(r,3,o),P.castShadow=!0,a.add(P);let A=new on(s,s,2.2,40),C=new ze(A,d("#fff4da"));C.position.set(r,3.6,o),C.castShadow=!0,a.add(C);let F=document.createElement("canvas");F.width=F.height=128;let E=F.getContext("2d");E.fillStyle="#4b2a15",E.font="bold 100px Trebuchet MS",E.textAlign="center",E.textBaseline="middle",E.fillText(String(i),64,69);let w=new pn(F);w.colorSpace=xt,w.userData.transient=!0;let V=new li({map:w,transparent:!0,depthWrite:!1}),X=new hi(s*1.72,s*1.72),$=new ze(X,V);$.rotation.x=-Math.PI/2,$.position.set(r,4.74,o),a.add($);let te=0,se=0,ne="";function ae(ie){if(!["closed","next","bloom"].includes(ie))throw Error("Unknown goal state");ne=ie,se=ie==="bloom"?1:ie==="next"?.16:0,a.userData.state=ie,_.color.set(ie==="next"?"#f9bf39":"#c5a777"),_.emissive.set(ie==="next"?"#d89514":"#000000"),_.emissiveIntensity=ie==="next"?.15:0}function q(ie,pe=.016){te+=(se-te)*Math.min(1,pe*7);let ve=te;for(let Z of u)Z.position.set(0,13-ve*3,2+ve*10),Z.scale.set(5+ve*1.5,9-ve*6,4+ve*4),Z.rotation.x=ve*-.25;b.visible=ve>.4,b.position.y=11.4;let Ie=ne==="next"?1+Math.sin(ie*2.8)*.035:1;c.scale.setScalar(Ie),f.emissive.set("#ffc33e"),f.emissiveIntensity=ne==="next"?.08+Math.sin(ie*2.8)*.04:0}ae(e),te=se,q(0,1),a.userData.goalNumber=i;function le(ie){let pe=ie===33?13:ie===40?15.7:10.5;P.scale.set((pe+1.6)/(s+1.6),1,(pe+1.6)/(s+1.6)),C.scale.set(pe/s,1,pe/s),$.scale.setScalar(pe/s),a.userData.markerSize=ie}return{group:a,setState:ae,setSize:le,update:q,dispose(){l.dispose(),A.dispose(),y.dispose(),X.dispose(),w.dispose(),V.dispose(),h.forEach(ie=>ie.dispose())}}}var Nn=(i,e)=>un.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1),Ul=[[-13,-9],[20,-10],[8,4],[-11,18]];function nu(i){i.x=un.clamp(i.x,-16,24),i.z=un.clamp(i.z,-14,22);let e=Math.max(0,(i.x+i.z-14)/2);return i.x-=e,i.z-=e,i}function iu(i=73){let e=[{kind:"bee",position:new H(-12,25,10),velocity:new H,speed:19,leg:0,wait:0,station:-1},{kind:"bumblebee",position:new H(3,21.5,-7),velocity:new H,speed:9,leg:0,wait:0,station:-1}],t=0;function n(r,o){r.leg++,r.age=0;let a=i+o*113;if(r.kind==="bumblebee"?r.leg%2===1:r.leg%5===0)r.target=new H((Nn(r.leg+1,a)-.5)*5,20.5,(Nn(r.leg+3,a)-.5)*5),r.visiting=!0;else{let d=Math.floor(Nn(r.leg,a)*4);d===r.station&&(d=(d+1+Math.floor(Nn(r.leg+9,a)*2))%4),r.station=d;let[f,p]=Ul[d];r.target=nu(new H(f+(Nn(r.leg+2,a)-.5)*3,r.kind==="bee"?24.5:23,p+(Nn(r.leg+4,a)-.5)*3)),r.visiting=!1}let l=e[1-o],h=(d,f)=>Math.hypot(d.x-f.x,d.z-f.z);if(h(r.target,l.position)<13||l.target&&h(r.target,l.target)<13){let d=-1;for(let f=0;f<Ul.length;f++){let[p,g]=Ul[f],x=new H(p,24,g),m=h(x,l.position)+(l.target?h(x,l.target):0);m>d&&(d=m,r.target=x,r.station=f)}r.visiting=!1}}e.forEach(n);function s(r){t+=r;let o=e[0].position.clone().sub(e[1].position);o.y=0;let a=o.length();for(let c=0;c<2;c++){let l=e[c];l.age+=r,l.wait<=0&&l.age>(l.kind==="bee"?4.2:6.2)+Nn(l.leg,i+c)*1.3&&n(l,c);let h=l.target.clone().sub(l.position),d=Math.hypot(h.x,h.z);l.wait>0?(l.wait-=r,l.wait<=0&&n(l,c)):d<1&&l.velocity.length()<2&&(l.wait=l.visiting?(l.kind==="bumblebee"?1.2:.45)+Nn(l.leg,i+c)*1.3:.12+Nn(l.leg,i+c)*.3);let f=h.clone();f.y=0,f.lengthSq()>0&&f.normalize().multiplyScalar(l.speed*Math.min(1,d/8));let p=f.sub(new H(l.velocity.x,0,l.velocity.z)).multiplyScalar(5.5);a<16&&a>.001&&p.addScaledVector(o,(c?-1:1)*(16-a)*11/a),p.y=(l.target.y+Math.sin(t*4.1+c*2.3)*.16-l.position.y)*16-l.velocity.y*7,p.clampLength(0,95),l.velocity.addScaledVector(p,r),l.velocity.clampLength(0,l.speed*1.1),l.position.addScaledVector(l.velocity,r),nu(l.position)}}return{agents:e,update(r){let o=un.clamp(r,0,.1);for(;o>1e-8;){let a=Math.min(.008333333333333333,o);s(a),o-=a}return e}}}var Nl={daisy:{name:"G\xE4nsebl\xFCmchen",petals:10,colors:["#fff6dc","#ffffff"],center:"#edb62c",width:2.9,length:7.8,radius:10.8,heart:4.5},buttercup:{name:"Butterblume",petals:5,colors:["#ffd133","#ffe567"],center:"#dca119",width:6.5,length:8,radius:9.2,heart:3.3},meadow:{name:"Wiesenbl\xFCte",petals:5,colors:["#df68bf","#ed8cd1"],center:"#ffdc63",width:6.8,length:8.1,radius:9.4,heart:3.5},poppy:{name:"Kleiner Mohn",petals:4,colors:["#f16d51","#ff8a68"],center:"#50343c",width:8.7,length:9.2,radius:8.8,heart:4.1}},T0=(i,e)=>un.euclideanModulo(Math.sin(i*127.1+e*311.7)*43758.5453,1);function su({species:i="daisy",number:e=1,state:t="closed",layout:n="compact",insects:s=!0}={}){let r=Nl[i];if(!r)throw Error("Unknown flower species "+i);let o=tu({number:e,state:t,layout:n}),a=o.group,c=a.children[0],l=new Ze;l.position.copy(c.position),a.add(l);let h=[],d=[],f=le=>{let ie=new rt({color:le,roughness:.56});return d.push(ie),ie},p=f("#538b2c"),g=r.colors.map(f),x=f(r.center),m=new mt(1,20,12);h.push(m);function u(le,ie,pe,ve,Ie,Z,W,R){let T=new ze(m,ie);return T.position.set(pe,ve,Ie),T.scale.set(Z,W,R),T.castShadow=T.receiveShadow=!0,le.add(T),T}u(l,p,0,5,0,1.8,6,1.8);for(let le of[-1,1]){let ie=u(l,p,le*6,3,0,8,1.4,3);ie.rotation.z=le*.25}let b=[];for(let le=0;le<r.petals;le++){let ie=new Ze;ie.position.y=12,ie.rotation.y=le*Math.PI*2/r.petals,l.add(ie);let pe=new Ze;ie.add(pe);let ve=m;if(i==="poppy"){ve=m.clone();let Z=ve.attributes.position;for(let W=0;W<Z.count;W++){let R=Z.getX(W),T=Z.getZ(W);Z.setY(W,Z.getY(W)+Math.sin(Math.atan2(T,R)*5)*.26*Math.hypot(R,T))}ve.computeVertexNormals(),h.push(ve)}let Ie=new ze(ve,g[le%2]);Ie.position.z=r.radius,Ie.scale.set(r.width,i==="poppy"?1.5:1.2,r.length),Ie.castShadow=Ie.receiveShadow=!0,pe.add(Ie),b.push(pe)}let _=u(l,x,0,13.8,0,r.heart,2.7,r.heart);for(let le=0;le<(i==="poppy"?9:7);le++){let ie=le*Math.PI*2/(i==="poppy"?9:7);u(l,x,Math.cos(ie)*r.heart*.7,16,Math.sin(ie)*r.heart*.7,.65,.6,.65)}let y=new Ze;y.name="flower-visitors",l.add(y);let P=f("#e9ad32"),A=f("#d6af50"),C=f("#60452b"),F=f("#fff6df");A.roughness=.95,F.transparent=!0,F.opacity=.72,F.depthWrite=!1;let E=[];for(let le=0;le<2;le++){let ie=new Ze;ie.name=le?"bumblebee":"bee",ie.scale.setScalar(1.8),y.add(ie);let pe=le?1.08:.7,ve=le?.98:.65;u(ie,le?A:P,0,0,0,pe,ve,1.2),u(ie,C,0,0,1.05,le?.56:.48,le?.54:.48,.48);for(let Z of[-.55,.15])u(ie,C,0,0,Z,pe*1.02,ve*1.02,.18);if(le){let Z=f("#f4e4b9");Z.roughness=1,u(ie,Z,0,0,-.98,.72,.65,.38);let W=[],R=[],T=260;for(let z=0;z<T;z++){let G=1-2*(z+.5)/T,M=Math.sqrt(1-G*G),I=z*2.39996323,O=Math.cos(I)*M,k=Math.sin(I)*M,B=new H(O*pe*1.015,G*ve*1.015,k*1.215),D=new H(O/pe,G/ve,k/1.2).normalize(),S=.12+T0(z,91)*.12,J=B.clone().addScaledVector(D,S);J.z-=.045,W.push(...B.toArray(),...J.toArray());let ee=new He(k<-.72?"#f4e4b9":Math.abs(k+.46)<.18||Math.abs(k-.12)<.17?"#635238":z%3?"#d6af50":"#e7c776");R.push(...ee.toArray(),...ee.toArray())}let Q=new ct;Q.setAttribute("position",new Je(W,3)),Q.setAttribute("color",new Je(R,3)),h.push(Q);let he=new qi({vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1});d.push(he);let U=new Ts(Q,he);U.name="bumblebee-fur",ie.add(U)}let Ie=[];for(let Z of[-1,1]){let W=u(ie,F,Z*.95,.5,-.1,1.5,.16,.65);W.castShadow=!1,Ie.push(W)}E.push({insect:ie,wings:Ie,seed:e*17+le*31+Object.keys(Nl).indexOf(i)*7,phase:le*2.7,a:new H,b:new H})}let w=!!s;function V(le){w=!!le,a.userData.insects=w}let X=iu(e*17+Object.keys(Nl).indexOf(i)*7);a.userData.visitorSizes={bee:100,bumblebee:100};function $(le,ie=100){if(!["bee","bumblebee"].includes(le))throw Error("Unknown flower visitor");if(!Number.isFinite(ie)||ie<50||ie>300)throw RangeError("Visitor size must be between 50 and 300 percent");E.find(pe=>pe.insect.name===le).insect.scale.setScalar(1.8*ie/100),a.userData.visitorSizes[le]=ie}let te=t,se=t==="bloom"?1:0,ne=se;function ae(le){o.setState(le),te=le,se=le==="bloom"?1:0}function q(le,ie=.016){o.update(le,ie),ne+=(se-ne)*Math.min(1,ie*7);let pe=ne;c.scale.multiplyScalar(1-pe),c.visible=pe<.999,l.visible=pe>.001,l.scale.setScalar(pe);for(let Ie of b)Ie.rotation.x=-(1-pe)*1.1;_.scale.y=2.7*(.8+.2*pe),y.visible=w&&te==="bloom"&&pe>.94;let ve=X.update(ie);for(let Ie=0;Ie<E.length;Ie++){let Z=E[Ie],W=ve[Ie];Z.insect.position.copy(W.position);let R=W.velocity.x,T=W.velocity.z,Q=Math.hypot(R,T);if(Q>.5){let he=Math.atan2(R,T),U=Math.atan2(Math.sin(he-Z.insect.rotation.y),Math.cos(he-Z.insect.rotation.y));Z.insect.rotation.y+=U*Math.min(1,ie*9),Z.insect.rotation.z=un.clamp(-U*.22,-.24,.24)}else Z.insect.rotation.z*=Math.max(0,1-ie*6);Z.insect.rotation.x=-Math.min(.16,Q*.009),Z.wings.forEach((he,U)=>he.rotation.z=Math.sin(le*30+Z.phase)*(U?1:-1)*.5)}}return V(s),q(0,1),a.userData.species=i,a.userData.decorative=!0,{group:a,setState:ae,setInsects:V,setVisitorSize:$,setSize:o.setSize,update:q,get state(){return te},dispose(){o.dispose(),h.forEach(le=>le.dispose()),d.forEach(le=>le.dispose())}}}var ia=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,s=new H,r=new H,o=new H,a=new H,c=[s,r,o,a],l=new H,h=new H,d=new H,f=new H,p=[l,h,d,f],g=new He,x=new He,m=new He,u=new He,b=[g,x,m,u],_=new me,y=new me,P=new me,A=new me,C=[_,y,P,A],F=new me,E=new me,w=new me,V=new me,X=[F,E,w,V],$=e.attributes,te=$.normal!==void 0,se=$.color!==void 0,ne=$.uv!==void 0,ae=$.uv1!==void 0,q=$.position.array,le=te?$.normal.array:null,ie=se?$.color.array:null,pe=ne?$.uv.array:null,ve=ae?$.uv1.array:null,Ie=q,Z=le,W=ie,R=pe,T=ve,Q=0,he=!0;function U(G,M,I){let O=c[G],k=c[M],B=c[I];if(Ie.push(O.x,O.y,O.z),Ie.push(k.x,k.y,k.z),Ie.push(B.x,B.y,B.z),te){let D=p[G],S=p[M],J=p[I];Z.push(D.x,D.y,D.z),Z.push(S.x,S.y,S.z),Z.push(J.x,J.y,J.z)}if(se){let D=b[G],S=b[M],J=b[I];W.push(D.r,D.g,D.b),W.push(S.r,S.g,S.b),W.push(J.r,J.g,J.b)}if(ne){let D=C[G],S=C[M],J=C[I];R.push(D.x,D.y),R.push(S.x,S.y),R.push(J.x,J.y)}if(ae){let D=X[G],S=X[M],J=X[I];T.push(D.x,D.y),T.push(S.x,S.y),T.push(J.x,J.y)}}for(;he&&Q<t;){Q++,he=!1,q=Ie,Ie=[],te&&(le=Z,Z=[]),se&&(ie=W,W=[]),ne&&(pe=R,R=[]),ae&&(ve=T,T=[]);for(let G=0,M=0,I=q.length;G<I;G+=9,M+=6){s.fromArray(q,G+0),r.fromArray(q,G+3),o.fromArray(q,G+6),te&&(l.fromArray(le,G+0),h.fromArray(le,G+3),d.fromArray(le,G+6)),se&&(g.fromArray(ie,G+0),x.fromArray(ie,G+3),m.fromArray(ie,G+6)),ne&&(_.fromArray(pe,M+0),y.fromArray(pe,M+2),P.fromArray(pe,M+4)),ae&&(F.fromArray(ve,M+0),E.fromArray(ve,M+2),w.fromArray(ve,M+4));let O=s.distanceToSquared(r),k=r.distanceToSquared(o),B=s.distanceToSquared(o);O>n||k>n||B>n?(he=!0,O>=k&&O>=B?(a.lerpVectors(s,r,.5),te&&f.lerpVectors(l,h,.5),se&&u.lerpColors(g,x,.5),ne&&A.lerpVectors(_,y,.5),ae&&V.lerpVectors(F,E,.5),U(0,3,2),U(3,1,2)):k>=O&&k>=B?(a.lerpVectors(r,o,.5),te&&f.lerpVectors(h,d,.5),se&&u.lerpColors(x,m,.5),ne&&A.lerpVectors(y,P,.5),ae&&V.lerpVectors(E,w,.5),U(0,1,3),U(3,2,0)):(a.lerpVectors(s,o,.5),te&&f.lerpVectors(l,d,.5),se&&u.lerpColors(g,m,.5),ne&&A.lerpVectors(_,P,.5),ae&&V.lerpVectors(F,w,.5),U(0,1,3),U(3,1,2))):U(0,1,2)}}let z=new ct;return z.setAttribute("position",new Je(Ie,3)),te&&z.setAttribute("normal",new Je(Z,3)),se&&z.setAttribute("color",new Je(W,3)),ne&&z.setAttribute("uv",new Je(R,2)),ae&&z.setAttribute("uv1",new Je(T,2)),z}};var A0={reference:{name:"A \xB7 Grundform",description:"Die unbearbeitete Grundform als Vergleich."},split:{name:"B \xB7 Feiner Felsriss",description:"Der Riss ist schmaler, heller und weniger tief."},pebble:{name:"C \xB7 Findling \xB7 vorgemerkt",description:"Bereinigte Oberfl\xE4che: ruhiger Grundton, feine Quarzader, ohne wolkige Flecken."},fossil:{name:"D \xB7 Blattstein",description:"Ein vertieftes vierbl\xE4ttriges Relief. Ruhiger Stein mit einem wiedererkennbaren Akzent."},plain:{name:"E \xB7 Ruhiger Kiesel",description:"Dieselbe Findlingsform, ganz ohne Motiv. Nur eine feine mineralische Oberfl\xE4che."},strata:{name:"F \xB7 Quarzlinien",description:"Zwei feine, geschwungene Mineraladern auf derselben ruhigen Findlingsform."},dimples:{name:"G \xB7 Muldenstein",description:"Drei kleine, weich ausgeschliffene Mulden statt Linien oder Bl\xE4ttern."},rosette:{name:"H \xB7 Steinbl\xFCte",description:"Eine kleine sechsbl\xE4ttrige Vertiefung. Dieselbe Findlingsform wie C, E, F und G."}},js=un.clamp;function R0(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=js(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(i-t[0]-s*o,e-t[1]-r*o)}var C0=[[[-24,22],[-8,10]],[[-8,10],[2,-4]],[[2,-4],[18,-14]],[[18,-14],[27,-25]],[[-8,10],[-22,-1]],[[2,-4],[19,7]]];function ru(i,e,t){if(i==="split"){let n=Math.min(...C0.map(([s,r])=>R0(e+Math.sin(t*.8)*.22,t+Math.sin(e*.7)*.2,s,r)));return{cut:.8*Math.exp(-n*n/.45),ink:.19*Math.exp(-n*n/.55),vein:0}}if(i==="fossil"||i==="rosette"){let n=0,s=i==="rosette"?6:4;for(let o=0;o<s;o++){let a=.25+o*Math.PI*2/s,c=e*Math.cos(a)+t*Math.sin(a),l=-e*Math.sin(a)+t*Math.cos(a),h=((c-10)/8.5)**2+(l/(s===6?3.2:4.7))**2;n=Math.max(n,js((1-h)*2,0,1))}let r=1.1*Math.exp(-(e*e+t*t)/8);return{cut:n*2.4+r,ink:n*.3+r*.14,vein:0}}if(i==="pebble"){let n=Math.abs(e*.48+t-5-Math.sin(e*.13)*3);return{cut:0,ink:0,vein:Math.exp(-n*n/2.5)*.7}}if(i==="strata"){let n=Math.min(Math.abs(t-e*.3-8-Math.sin(e*.09)*2),Math.abs(t-e*.3+9-Math.sin(e*.09+.5)*2));return{cut:0,ink:0,vein:Math.exp(-n*n/1.1)*.5}}if(i==="dimples"){let n=0;for(let[s,r,o]of[[-11,8,4.7],[10,5,3.8],[2,-12,5]]){let a=Math.hypot(e-s,t-r)/o;n=Math.max(n,Math.max(0,1-a*a)**2)}return{cut:n*2.3,ink:n*.18,vein:0}}return{cut:0,ink:0,vein:0}}function ou(i="fossil",{seed:e=73}={}){if(!A0[i])throw Error("Unknown stone style "+i);let t=["pebble","plain","strata","dimples","rosette"].includes(i),n=new Ze,s=256,r=new Uint8Array(s*s*4),o=new Uint8Array(s*s*4),a=e>>>0,c=()=>(a=a*1664525+1013904223>>>0)/4294967296;for(let u=0;u<s;u++)for(let b=0;b<s;b++){let _=(b/(s-1)-.5)*66,y=(u/(s-1)-.5)*66,P=ru(i,_,y),A=Math.sin(_*.18+y*.11)*Math.sin(y*.21-_*.07),C=c()-.5,F=1+A*(t?.004:.015)+C*(t?.025:.065)-P.ink,E=i==="split"?[151,143,128]:t?[158,150,136]:[153,145,130],w=(u*s+b)*4;for(let X=0;X<3;X++)r[w+X]=js(E[X]*F+(220-E[X])*P.vein,0,255);r[w+3]=255;let V=js(138+C*(t?4:12)+A-P.cut*28,0,255);o.set([V,V,V,255],w)}let l=new qn(r,s,s);l.colorSpace=xt;let h=new qn(o,s,s);for(let u of[l,h])u.magFilter=u.minFilter=Pt,u.needsUpdate=!0;let d=new rt({color:i==="reference"?"#928675":"#ffffff",roughness:.86,map:i==="reference"?null:l,bumpMap:i==="reference"?null:h,bumpScale:i==="fossil"||i==="rosette"?.5:t?.08:.2});i!=="reference"&&(d.onBeforeCompile=u=>{let b=new He(t?"#9e9688":i==="split"?"#978f80":"#999182");u.vertexShader=`varying float stoneTop;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
stoneTop=smoothstep(.25,.85,normal.z);`),u.fragmentShader=`varying float stoneTop;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=mix(vec3(${b.r},${b.g},${b.b}),diffuseColor.rgb,stoneTop);`)}),d.customProgramCacheKey=()=>`slink-stone-top-${i}`;let f=new yn(66,66,33,i==="reference"?5:6,t?12:8);if(i!=="reference"){let u=new ia(3.5,10).modify(f);f.dispose(),f=u}f.translate(0,0,10);let p=f.attributes.position,g=f.attributes.uv;for(let u=0;u<p.count;u++){let b=p.getX(u),_=p.getY(u),y=p.getZ(u),P=js((y-10)/16.5,0,1);if(i!=="reference"){let A=Math.max(0,1-(b*b+_*_)/1800),C=Math.sin(b*.13+_*.035)*Math.cos(_*.1)*(t?.12:.7),F=t?A*5:i==="split"?A*1.3-Math.max(0,b*.17+_*.09-2)*.6:A*.6;y+=(F+C-ru(i,b,_).cut)*P}p.setZ(u,y),g.setXY(u,b/66+.5,_/66+.5)}f.deleteAttribute("normal");let x=qh(f,1e-4);f.dispose(),f=x,f.computeVertexNormals();let m=new ze(f,d);return m.castShadow=m.receiveShadow=!0,m.userData.cell=-1,n.add(m),n.userData={style:i,walkable:!1,pitch:80},{group:n,style:i,dispose(){f.dispose(),d.dispose(),l.dispose(),h.dispose()}}}var au=["daisy","buttercup","meadow","poppy"],lu=["plain","pebble","plain","strata","plain","dimples","fossil","split","rosette","reference"],sa=i=>{let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0};function I0(i,e){let t=new Set(i),n=[];for(;t.size;){let s=[Math.min(...t)];t.delete(s[0]);for(let r=0;r<s.length;r++){let o=s[r];for(let a of[o-e,o+e,o%e?o-1:-1,o%e<e-1?o+1:-1])t.delete(a)&&s.push(a)}n.push(s.sort((r,o)=>r-o))}return n}function cu(i){let e=sa(i.id||JSON.stringify([i.n,i.solution,i.marks])),t=au[e%4],n=i.marks.map(()=>t),s={};if(n.length>=2&&sa(e+":flower-mix")%3!==0){let r=au[(e%4+1+sa(e+":flower-palette")%3)%4];for(let o=1;o<n.length;o+=2)n[o]=r}for(let r of I0(i.stones||[],i.n)){let o=sa(e+":"+r.join(","));if(r.length===1){s[r[0]]=lu[o%lu.length];continue}for(let a of r)s[a]="plain";if(o%4!==0){let a=["pebble","strata","dimples","rosette"][o%4];s[r[o%r.length]]=a}}return{seed:e,flowers:n,stones:s}}var Fl=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),Ol={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function P0(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let o=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=255}return n.putImageData(s,0,0),new pn(t)}function Qs(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=Ol[i];if(!n)throw Error("Unknown tile "+i);let s=new Ze,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=(p,g={})=>new rt({color:p,roughness:.75,...g}),a=(p,g,x=0,m=0,u=0)=>{let b=new ze(p,g);return b.position.set(x,m,u),b.castShadow=b.receiveShadow=!0,s.add(b),b},c=o(n.color,{bumpMap:P0(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),l=n.height+3.5,h,d;if(n.kind==="earth"){let p=73.5,g=5,x=-p/2,m=p/2,u=new yt;u.moveTo(x+g,x),u.lineTo(m-g,x),u.quadraticCurveTo(m,x,m,x+g),u.lineTo(m,m-g),u.quadraticCurveTo(m,m,m-g,m),u.lineTo(x+g,m),u.quadraticCurveTo(x,m,x,m-g),u.lineTo(x,x+g),u.quadraticCurveTo(x,x,x+g,x),u.closePath(),h=new Gt(u,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),d=-1}else h=new yn(78.5,78.5,l,4,7.5),d=(n.height-3.5)/2;let f=a(h,c,0,0,d);if(f.userData.surface=!0,!t)if(n.kind==="earth"){let p=[o("#c59b6b"),o("#98714c"),o("#dbb78a")];for(let g=0;g<n.pebbles;g++){let x=(r()-.5)*59,m=(r()-.5)*59,u=.8+r()*1.2,b=a(new mt(1,9,6),p[g%3],x,m,n.height-.25);b.scale.set(u*1.6,u,u*.55),b.rotation.z=r()*6}for(let g=0;g<22;g++){let x=a(new mt(1,8,6),c,(r()-.5)*62,(r()-.5)*62,n.height-.35),m=1+r()*1.5;x.scale.set(m*1.6,m,.5)}}else if(n.kind!=="reference"){let p=[o("#d3f471"),o("#b1e443"),o("#87bf24")],g=(x,m,u)=>{let b=new yt;return b.moveTo(-u,0),b.quadraticCurveTo(-u*.8,x*.6,m,x),b.quadraticCurveTo(u*1.1,x*.45,u,0),b.closePath(),new Gt(b,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let x=0;x<n.tufts;x++){let m=(r()-.5)*59,u=(r()-.5)*59;for(let b=0;b<3;b++){let _=n.bladeHeight*(.6+r()*.4),y=a(g(_,(b-1)*_*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),p[b],m+(b-1)*1.8,u,n.height-.15);y.rotation.x=Math.PI/2,y.rotateOnWorldAxis(new H(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let x=0;x<6;x++){let m=(r()-.5)*50,u=(r()-.5)*50;for(let b=0;b<3;b++){let _=b*Math.PI*2/3,y=a(new mt(1,12,8),p[x%2],m+Math.cos(_)*2.3,u+Math.sin(_)*2.3,n.height+1.7);y.scale.set(3.3,2.6,.9),y.rotation.z=_}}c.emissive.set("#4c790c"),c.emissiveIntensity=.055}else{let p=o("#9fc53b");for(let g=0;g<4;g++){let x=g*Math.PI/2+.3,m=a(new mt(1,12,8),p,21+Math.cos(x)*4,-20+Math.sin(x)*4,13.7);m.scale.set(4.4,2.6,.65),m.rotation.z=x}}return n.kind!=="earth"&&n.kind!=="reference"&&(c.emissive.set("#4c790c"),c.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:Fl},s}function er(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var L0={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function hu(i,{seed:e=73}={}){let t=L0[i];if(!t)throw Error("Unknown meadow "+i);let n=Qs("grass-clover",{seed:e,surfaceOnly:!0}),s=n.children.find(A=>A.userData.surface),r=new Ze;for(let A of[...n.children])A!==s&&r.add(A);er(r);let o=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=new mt(1,12,8),c=A=>new rt({color:A,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],h=[],d=(A,C,F,E,w)=>{let V=new ze(A,C);return V.position.set(F,E,w),V.castShadow=V.receiveShadow=!0,n.add(V),V};function f(A,C,F,E,w=3.3,V=2.6){let X=d(a,l[1],A,C,F);return X.scale.set(w,V,.85),X.rotation.z=E,X}for(let A=0;A<t.clover;A++){let C=(o()-.5)*52,F=(o()-.5)*52;for(let E=0;E<3;E++){let w=E*Math.PI*2/3+o()*.12;f(C+Math.cos(w)*2.3,F+Math.sin(w)*2.3,19.7,w)}}function p(A,C,F){for(let E=0;E<3;E++){let w=new yt,V=(E-1)*F*.35;w.moveTo(-1,0),w.quadraticCurveTo(-.8,F*.65,V,F),w.quadraticCurveTo(1,F*.45,1,0),w.closePath();let X=new Gt(w,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),$=d(X,l[E],A+(E-1)*1.6,C,17.8);$.rotation.x=Math.PI/2,$.rotateOnWorldAxis(new H(0,0,1),.6)}}for(let A=0;A<t.tufts;A++)p((o()-.5)*50,(o()-.5)*50,3.5+o()*1.8);t.tall&&p(20,-19,10);let g=c("#fff3c4"),x=c("#f6b7a0"),m=c("#efb52e"),u=c("#709e29"),b=c("#edbd43"),_=c("#63502a"),y=new rt({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let A=0;A<(t.flowers||0);A++){let C=A?-16:16,F=A?-14:12,E=A?24:25.5,w=d(new on(.6,.85,E-18,8),u,C,F,(18+E)/2);w.rotation.x=Math.PI/2;for(let X=0;X<5;X++){let $=X*Math.PI*2/5,te=d(a,A?x:g,C+Math.cos($)*3,F+Math.sin($)*3,E);te.scale.set(3.2,1.8,.8),te.rotation.z=$}if(d(a,m,C,F,E+.7).scale.set(1.9,1.9,1.2),f(C-2,F,20.5,-.5,3.2,1.4),t.insects)for(let X=0;X<t.insects;X++){let $=new Ze;n.add($);let te=new ze(a,b);te.scale.set(.85,1.3,.8),$.add(te);let se=new ze(a,_);se.position.y=1.2,se.scale.setScalar(.6),$.add(se);let ne=[];for(let ae of[-1,1]){let q=new ze(a,y);q.position.set(ae*1,0,.5),q.scale.set(1.8,.75,.25),q.rotation.z=ae*.35,$.add(q),ne.push(q)}h.push({insect:$,wings:ne,x:C,y:F,phase:X*3.14,radius:8+X*2,z:E+5+X})}}n.userData={...n.userData,meadowVariant:i,animated:h.length>0};function P(A){for(let C of h){let F=A*.85+C.phase;C.insect.position.set(C.x+Math.cos(F)*C.radius,C.y+Math.sin(F)*C.radius*.65,C.z+Math.sin(A*1.8+C.phase)*1.2),C.insect.rotation.z=F,C.wings.forEach((E,w)=>E.rotation.y=Math.sin(A*28)*(w?1:-1)*.45)}}return P(0),{group:n,update:P,dispose(){er(n)}}}var uu={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function du(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},o=new rt({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),a=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=uu[i]?.[n]||a;return o.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new me(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},o.customProgramCacheKey=()=>i+"-"+n+"-2",{material:o,update(l){r.value=e?l:0},dispose(){o.dispose()},type:i}}var D0=xt,tr=class i extends di{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,o=new zs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(Z,W){if(Z.nodeType!==1)return;let R=y(Z),T=!1,Q=null;switch(Z.nodeName){case"svg":W=g(Z,W);break;case"style":r(Z);break;case"g":W=g(Z,W);break;case"path":W=g(Z,W),Z.hasAttribute("d")&&(Q=s(Z));break;case"rect":W=g(Z,W),Q=c(Z);break;case"polygon":W=g(Z,W),Q=l(Z);break;case"polyline":W=g(Z,W),Q=h(Z);break;case"circle":W=g(Z,W),Q=d(Z);break;case"ellipse":W=g(Z,W),Q=f(Z);break;case"line":W=g(Z,W),Q=p(Z);break;case"defs":T=!0;break;case"use":W=g(Z,W);let z=(Z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),G=Z.viewportElement.getElementById(z);G?n(G,W):console.warn("SVGLoader: 'use node' references non-existent node id: "+z);break;default:}Q&&(W.fill!==void 0&&W.fill!=="none"&&Q.color.setStyle(W.fill,D0),A(Q,pe),X.push(Q),Q.userData={node:Z,style:W});let he=Z.childNodes;for(let U=0;U<he.length;U++){let z=he[U];T&&z.nodeName!=="style"&&z.nodeName!=="defs"||n(z,W)}R&&(te.pop(),te.length>0?pe.copy(te[te.length-1]):pe.identity())}function s(Z){let W=new cn,R=new me,T=new me,Q=new me,he=!0,U=!1,z=Z.getAttribute("d");if(z===""||z==="none")return null;let G=z.match(/[a-df-z][^a-df-z]*/ig);for(let M=0,I=G.length;M<I;M++){let O=G[M],k=O.charAt(0),B=O.slice(1).trim();he===!0&&(U=!0,he=!1);let D;switch(k){case"M":D=m(B);for(let S=0,J=D.length;S<J;S+=2)R.x=D[S+0],R.y=D[S+1],T.x=R.x,T.y=R.y,S===0?W.moveTo(R.x,R.y):W.lineTo(R.x,R.y),S===0&&Q.copy(R);break;case"H":D=m(B);for(let S=0,J=D.length;S<J;S++)R.x=D[S],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"V":D=m(B);for(let S=0,J=D.length;S<J;S++)R.y=D[S],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"L":D=m(B);for(let S=0,J=D.length;S<J;S+=2)R.x=D[S+0],R.y=D[S+1],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"C":D=m(B);for(let S=0,J=D.length;S<J;S+=6)W.bezierCurveTo(D[S+0],D[S+1],D[S+2],D[S+3],D[S+4],D[S+5]),T.x=D[S+2],T.y=D[S+3],R.x=D[S+4],R.y=D[S+5],S===0&&U===!0&&Q.copy(R);break;case"S":D=m(B);for(let S=0,J=D.length;S<J;S+=4)W.bezierCurveTo(x(R.x,T.x),x(R.y,T.y),D[S+0],D[S+1],D[S+2],D[S+3]),T.x=D[S+0],T.y=D[S+1],R.x=D[S+2],R.y=D[S+3],S===0&&U===!0&&Q.copy(R);break;case"Q":D=m(B);for(let S=0,J=D.length;S<J;S+=4)W.quadraticCurveTo(D[S+0],D[S+1],D[S+2],D[S+3]),T.x=D[S+0],T.y=D[S+1],R.x=D[S+2],R.y=D[S+3],S===0&&U===!0&&Q.copy(R);break;case"T":D=m(B);for(let S=0,J=D.length;S<J;S+=2){let ee=x(R.x,T.x),ge=x(R.y,T.y);W.quadraticCurveTo(ee,ge,D[S+0],D[S+1]),T.x=ee,T.y=ge,R.x=D[S+0],R.y=D[S+1],S===0&&U===!0&&Q.copy(R)}break;case"A":D=m(B,[3,4],7);for(let S=0,J=D.length;S<J;S+=7){if(D[S+5]==R.x&&D[S+6]==R.y)continue;let ee=R.clone();R.x=D[S+5],R.y=D[S+6],T.x=R.x,T.y=R.y,o(W,D[S],D[S+1],D[S+2],D[S+3],D[S+4],ee,R),S===0&&U===!0&&Q.copy(R)}break;case"m":D=m(B);for(let S=0,J=D.length;S<J;S+=2)R.x+=D[S+0],R.y+=D[S+1],T.x=R.x,T.y=R.y,S===0?W.moveTo(R.x,R.y):W.lineTo(R.x,R.y),S===0&&Q.copy(R);break;case"h":D=m(B);for(let S=0,J=D.length;S<J;S++)R.x+=D[S],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"v":D=m(B);for(let S=0,J=D.length;S<J;S++)R.y+=D[S],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"l":D=m(B);for(let S=0,J=D.length;S<J;S+=2)R.x+=D[S+0],R.y+=D[S+1],T.x=R.x,T.y=R.y,W.lineTo(R.x,R.y),S===0&&U===!0&&Q.copy(R);break;case"c":D=m(B);for(let S=0,J=D.length;S<J;S+=6)W.bezierCurveTo(R.x+D[S+0],R.y+D[S+1],R.x+D[S+2],R.y+D[S+3],R.x+D[S+4],R.y+D[S+5]),T.x=R.x+D[S+2],T.y=R.y+D[S+3],R.x+=D[S+4],R.y+=D[S+5],S===0&&U===!0&&Q.copy(R);break;case"s":D=m(B);for(let S=0,J=D.length;S<J;S+=4)W.bezierCurveTo(x(R.x,T.x),x(R.y,T.y),R.x+D[S+0],R.y+D[S+1],R.x+D[S+2],R.y+D[S+3]),T.x=R.x+D[S+0],T.y=R.y+D[S+1],R.x+=D[S+2],R.y+=D[S+3],S===0&&U===!0&&Q.copy(R);break;case"q":D=m(B);for(let S=0,J=D.length;S<J;S+=4)W.quadraticCurveTo(R.x+D[S+0],R.y+D[S+1],R.x+D[S+2],R.y+D[S+3]),T.x=R.x+D[S+0],T.y=R.y+D[S+1],R.x+=D[S+2],R.y+=D[S+3],S===0&&U===!0&&Q.copy(R);break;case"t":D=m(B);for(let S=0,J=D.length;S<J;S+=2){let ee=x(R.x,T.x),ge=x(R.y,T.y);W.quadraticCurveTo(ee,ge,R.x+D[S+0],R.y+D[S+1]),T.x=ee,T.y=ge,R.x=R.x+D[S+0],R.y=R.y+D[S+1],S===0&&U===!0&&Q.copy(R)}break;case"a":D=m(B,[3,4],7);for(let S=0,J=D.length;S<J;S+=7){if(D[S+5]==0&&D[S+6]==0)continue;let ee=R.clone();R.x+=D[S+5],R.y+=D[S+6],T.x=R.x,T.y=R.y,o(W,D[S],D[S+1],D[S+2],D[S+3],D[S+4],ee,R),S===0&&U===!0&&Q.copy(R)}break;case"Z":case"z":W.currentPath.autoClose=!0,W.currentPath.curves.length>0&&(R.copy(Q),W.currentPath.currentPoint.copy(R),he=!0);break;default:console.warn(O)}U=!1}return W}function r(Z){if(!(!Z.sheet||!Z.sheet.cssRules||!Z.sheet.cssRules.length))for(let W=0;W<Z.sheet.cssRules.length;W++){let R=Z.sheet.cssRules[W];if(R.type!==1)continue;let T=R.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<T.length;Q++){let he=Object.fromEntries(Object.entries(R.style).filter(([,U])=>U!==""));$[T[Q]]=Object.assign($[T[Q]]||{},he)}}}function o(Z,W,R,T,Q,he,U,z){if(W==0||R==0){Z.lineTo(z.x,z.y);return}T=T*Math.PI/180,W=Math.abs(W),R=Math.abs(R);let G=(U.x-z.x)/2,M=(U.y-z.y)/2,I=Math.cos(T)*G+Math.sin(T)*M,O=-Math.sin(T)*G+Math.cos(T)*M,k=W*W,B=R*R,D=I*I,S=O*O,J=D/k+S/B;if(J>1){let _e=Math.sqrt(J);W=_e*W,R=_e*R,k=W*W,B=R*R}let ee=k*S+B*D,ge=(k*B-ee)/ee,L=Math.sqrt(Math.max(0,ge));Q===he&&(L=-L);let v=L*W*O/R,Y=-L*R*I/W,j=Math.cos(T)*v-Math.sin(T)*Y+(U.x+z.x)/2,ue=Math.sin(T)*v+Math.cos(T)*Y+(U.y+z.y)/2,ce=a(1,0,(I-v)/W,(O-Y)/R),Ae=a((I-v)/W,(O-Y)/R,(-I-v)/W,(-O-Y)/R)%(Math.PI*2);Z.currentPath.absellipse(j,ue,W,R,ce,ce+Ae,he===0,T)}function a(Z,W,R,T){let Q=Z*R+W*T,he=Math.sqrt(Z*Z+W*W)*Math.sqrt(R*R+T*T),U=Math.acos(Math.max(-1,Math.min(1,Q/he)));return Z*T-W*R<0&&(U=-U),U}function c(Z){let W=_(Z.getAttribute("x")||0),R=_(Z.getAttribute("y")||0),T=_(Z.getAttribute("rx")||Z.getAttribute("ry")||0),Q=_(Z.getAttribute("ry")||Z.getAttribute("rx")||0),he=_(Z.getAttribute("width")),U=_(Z.getAttribute("height")),z=1-.551915024494,G=new cn;return G.moveTo(W+T,R),G.lineTo(W+he-T,R),(T!==0||Q!==0)&&G.bezierCurveTo(W+he-T*z,R,W+he,R+Q*z,W+he,R+Q),G.lineTo(W+he,R+U-Q),(T!==0||Q!==0)&&G.bezierCurveTo(W+he,R+U-Q*z,W+he-T*z,R+U,W+he-T,R+U),G.lineTo(W+T,R+U),(T!==0||Q!==0)&&G.bezierCurveTo(W+T*z,R+U,W,R+U-Q*z,W,R+U-Q),G.lineTo(W,R+Q),(T!==0||Q!==0)&&G.bezierCurveTo(W,R+Q*z,W+T*z,R,W+T,R),G}function l(Z){function W(he,U,z){let G=_(U),M=_(z);Q===0?T.moveTo(G,M):T.lineTo(G,M),Q++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new cn,Q=0;return Z.getAttribute("points").replace(R,W),T.currentPath.autoClose=!0,T}function h(Z){function W(he,U,z){let G=_(U),M=_(z);Q===0?T.moveTo(G,M):T.lineTo(G,M),Q++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new cn,Q=0;return Z.getAttribute("points").replace(R,W),T.currentPath.autoClose=!1,T}function d(Z){let W=_(Z.getAttribute("cx")||0),R=_(Z.getAttribute("cy")||0),T=_(Z.getAttribute("r")||0),Q=new mn;Q.absarc(W,R,T,0,Math.PI*2);let he=new cn;return he.subPaths.push(Q),he}function f(Z){let W=_(Z.getAttribute("cx")||0),R=_(Z.getAttribute("cy")||0),T=_(Z.getAttribute("rx")||0),Q=_(Z.getAttribute("ry")||0),he=new mn;he.absellipse(W,R,T,Q,0,Math.PI*2);let U=new cn;return U.subPaths.push(he),U}function p(Z){let W=_(Z.getAttribute("x1")||0),R=_(Z.getAttribute("y1")||0),T=_(Z.getAttribute("x2")||0),Q=_(Z.getAttribute("y2")||0),he=new cn;return he.moveTo(W,R),he.lineTo(T,Q),he.currentPath.autoClose=!1,he}function g(Z,W){W=Object.assign({},W);let R={};if(Z.hasAttribute("class")){let U=Z.getAttribute("class").split(/\s/).filter(Boolean).map(z=>z.trim());for(let z=0;z<U.length;z++)R=Object.assign(R,$["."+U[z]])}Z.hasAttribute("id")&&(R=Object.assign(R,$["#"+Z.getAttribute("id")]));function T(U,z,G){G===void 0&&(G=function(I){return I.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),I}),Z.hasAttribute(U)&&(W[z]=G(Z.getAttribute(U))),R[U]&&(W[z]=G(R[U])),Z.style&&Z.style[U]!==""&&(W[z]=G(Z.style[U]))}function Q(U){return Math.max(0,Math.min(1,_(U)))}function he(U){return Math.max(0,_(U))}return T("fill","fill"),T("fill-opacity","fillOpacity",Q),T("fill-rule","fillRule"),T("opacity","opacity",Q),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",Q),T("stroke-width","strokeWidth",he),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",he),T("visibility","visibility"),W}function x(Z,W){return Z-(W-Z)}function m(Z,W,R){if(typeof Z!="string")throw new TypeError("Invalid input: "+typeof Z);let T={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,he=1,U=2,z=3,G=Q,M=!0,I="",O="",k=[];function B(ee,ge,L){let v=new SyntaxError('Unexpected character "'+ee+'" at index '+ge+".");throw v.partial=L,v}function D(){I!==""&&(O===""?k.push(Number(I)):k.push(Number(I)*Math.pow(10,Number(O)))),I="",O=""}let S,J=Z.length;for(let ee=0;ee<J;ee++){if(S=Z[ee],Array.isArray(W)&&W.includes(k.length%R)&&T.FLAGS.test(S)){G=he,I=S,D();continue}if(G===Q){if(T.WHITESPACE.test(S))continue;if(T.DIGIT.test(S)||T.SIGN.test(S)){G=he,I=S;continue}if(T.POINT.test(S)){G=U,I=S;continue}T.COMMA.test(S)&&(M&&B(S,ee,k),M=!0)}if(G===he){if(T.DIGIT.test(S)){I+=S;continue}if(T.POINT.test(S)){I+=S,G=U;continue}if(T.EXP.test(S)){G=z;continue}T.SIGN.test(S)&&I.length===1&&T.SIGN.test(I[0])&&B(S,ee,k)}if(G===U){if(T.DIGIT.test(S)){I+=S;continue}if(T.EXP.test(S)){G=z;continue}T.POINT.test(S)&&I[I.length-1]==="."&&B(S,ee,k)}if(G===z){if(T.DIGIT.test(S)){O+=S;continue}if(T.SIGN.test(S)){if(O===""){O+=S;continue}O.length===1&&T.SIGN.test(O)&&B(S,ee,k)}}T.WHITESPACE.test(S)?(D(),G=Q,M=!1):T.COMMA.test(S)?(D(),G=Q,M=!0):T.SIGN.test(S)?(D(),G=he,I=S):T.POINT.test(S)?(D(),G=U,I=S):B(S,ee,k)}return D(),k}let u=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(Z){let W="px";if(typeof Z=="string"||Z instanceof String)for(let T=0,Q=u.length;T<Q;T++){let he=u[T];if(Z.endsWith(he)){W=he,Z=Z.substring(0,Z.length-he.length);break}}let R;return W==="px"&&t.defaultUnit!=="px"?R=b.in[t.defaultUnit]/t.defaultDPI:(R=b[W][t.defaultUnit],R<0&&(R=b[W].in*t.defaultDPI)),R*parseFloat(Z)}function y(Z){if(!(Z.hasAttribute("transform")||Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))))return null;let W=P(Z);return te.length>0&&W.premultiply(te[te.length-1]),pe.copy(W),te.push(W),W}function P(Z){let W=new We,R=se;if(Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))){let T=_(Z.getAttribute("x")),Q=_(Z.getAttribute("y"));W.translate(T,Q)}if(Z.hasAttribute("transform")){let T=Z.getAttribute("transform").split(")");for(let Q=T.length-1;Q>=0;Q--){let he=T[Q].trim();if(he==="")continue;let U=he.indexOf("("),z=he.length;if(U>0&&U<z){let G=he.slice(0,U),M=m(he.slice(U+1));switch(R.identity(),G){case"translate":if(M.length>=1){let I=M[0],O=0;M.length>=2&&(O=M[1]),R.translate(I,O)}break;case"rotate":if(M.length>=1){let I=0,O=0,k=0;I=M[0]*Math.PI/180,M.length>=3&&(O=M[1],k=M[2]),ne.makeTranslation(-O,-k),ae.makeRotation(I),q.multiplyMatrices(ae,ne),ne.makeTranslation(O,k),R.multiplyMatrices(ne,q)}break;case"scale":if(M.length>=1){let I=M[0],O=I;M.length>=2&&(O=M[1]),R.scale(I,O)}break;case"skewX":M.length===1&&R.set(1,Math.tan(M[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":M.length===1&&R.set(1,0,0,Math.tan(M[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":M.length===6&&R.set(M[0],M[2],M[4],M[1],M[3],M[5],0,0,1);break}}W.premultiply(R)}}return W}function A(Z,W){function R(U){ie.set(U.x,U.y,1).applyMatrix3(W),U.set(ie.x,ie.y)}function T(U){let z=U.xRadius,G=U.yRadius,M=Math.cos(U.aRotation),I=Math.sin(U.aRotation),O=new H(z*M,z*I,0),k=new H(-G*I,G*M,0),B=O.applyMatrix3(W),D=k.applyMatrix3(W),S=se.set(B.x,D.x,0,B.y,D.y,0,0,0,1),J=ne.copy(S).invert(),L=ae.copy(J).transpose().multiply(J).elements,v=V(L[0],L[1],L[4]),Y=Math.sqrt(v.rt1),j=Math.sqrt(v.rt2);if(U.xRadius=1/Y,U.yRadius=1/j,U.aRotation=Math.atan2(v.sn,v.cs),!((U.aEndAngle-U.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ce=ne.set(Y,0,0,0,j,0,0,0,1),Ae=ae.set(v.cs,v.sn,0,-v.sn,v.cs,0,0,0,1),_e=ce.multiply(Ae).multiply(S),Re=Ce=>{let{x:ye,y:Ee}=new H(Math.cos(Ce),Math.sin(Ce),0).applyMatrix3(_e);return Math.atan2(Ee,ye)};U.aStartAngle=Re(U.aStartAngle),U.aEndAngle=Re(U.aEndAngle),C(W)&&(U.aClockwise=!U.aClockwise)}}function Q(U){let z=E(W),G=w(W);U.xRadius*=z,U.yRadius*=G;let M=z>Number.EPSILON?Math.atan2(W.elements[1],W.elements[0]):Math.atan2(-W.elements[3],W.elements[4]);U.aRotation+=M,C(W)&&(U.aStartAngle*=-1,U.aEndAngle*=-1,U.aClockwise=!U.aClockwise)}let he=Z.subPaths;for(let U=0,z=he.length;U<z;U++){let M=he[U].curves;for(let I=0;I<M.length;I++){let O=M[I];O.isLineCurve?(R(O.v1),R(O.v2)):O.isCubicBezierCurve?(R(O.v0),R(O.v1),R(O.v2),R(O.v3)):O.isQuadraticBezierCurve?(R(O.v0),R(O.v1),R(O.v2)):O.isEllipseCurve&&(le.set(O.aX,O.aY),R(le),O.aX=le.x,O.aY=le.y,F(W)?T(O):Q(O))}}}function C(Z){let W=Z.elements;return W[0]*W[4]-W[1]*W[3]<0}function F(Z){let W=Z.elements,R=W[0]*W[3]+W[1]*W[4];if(R===0)return!1;let T=E(Z),Q=w(Z);return Math.abs(R/(T*Q))>Number.EPSILON}function E(Z){let W=Z.elements;return Math.sqrt(W[0]*W[0]+W[1]*W[1])}function w(Z){let W=Z.elements;return Math.sqrt(W[3]*W[3]+W[4]*W[4])}function V(Z,W,R){let T,Q,he,U,z,G=Z+R,M=Z-R,I=Math.sqrt(M*M+4*W*W);return G>0?(T=.5*(G+I),z=1/T,Q=Z*z*R-W*z*W):G<0?Q=.5*(G-I):(T=.5*I,Q=-.5*I),M>0?he=M+I:he=M-I,Math.abs(he)>2*Math.abs(W)?(z=-2*W/he,U=1/Math.sqrt(1+z*z),he=z*U):Math.abs(W)===0?(he=1,U=0):(z=-.5*he/W,he=1/Math.sqrt(1+z*z),U=z*he),M>0&&(z=he,he=-U,U=z),{rt1:T,rt2:Q,cs:he,sn:U}}let X=[],$={},te=[],se=new We,ne=new We,ae=new We,q=new We,le=new me,ie=new H,pe=new We,ve=new DOMParser().parseFromString(e,"image/svg+xml");return n(ve.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:X,xml:ve.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,m,u,b){let _=x.x,y=m.x,P=u.x,A=b.x,C=x.y,F=m.y,E=u.y,w=b.y,V=(A-P)*(C-E)-(w-E)*(_-P),X=(y-_)*(C-E)-(F-C)*(_-P),$=(w-E)*(y-_)-(A-P)*(F-C),te=V/$,se=X/$;if($===0&&V!==0||te<=0||te>=1||se<0||se>1)return null;if(V===0&&$===0){for(let ne=0;ne<2;ne++)if(o(ne===0?u:b,x,m),s.loc==n.ORIGIN){let ae=ne===0?u:b;return{x:ae.x,y:ae.y,t:s.t}}else if(s.loc==n.BETWEEN){let ae=+(_+s.t*(y-_)).toPrecision(10),q=+(C+s.t*(F-C)).toPrecision(10);return{x:ae,y:q,t:s.t}}return null}else{for(let q=0;q<2;q++)if(o(q===0?u:b,x,m),s.loc==n.ORIGIN){let le=q===0?u:b;return{x:le.x,y:le.y,t:s.t}}let ne=+(_+te*(y-_)).toPrecision(10),ae=+(C+te*(F-C)).toPrecision(10);return{x:ne,y:ae,t:te}}}function o(x,m,u){let b=u.x-m.x,_=u.y-m.y,y=x.x-m.x,P=x.y-m.y,A=b*P-y*_;if(x.x===m.x&&x.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===u.x&&x.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(A<-Number.EPSILON){s.loc=n.LEFT;return}if(A>Number.EPSILON){s.loc=n.RIGHT;return}if(b*y<0||_*P<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(y*y+P*P)){s.loc=n.BEYOND;return}let C;b!==0?C=y/b:C=P/_,s.loc=n.BETWEEN,s.t=C}function a(x,m){let u=[],b=[];for(let _=1;_<x.length;_++){let y=x[_-1],P=x[_];for(let A=1;A<m.length;A++){let C=m[A-1],F=m[A],E=r(y,P,C,F);E!==null&&u.find(w=>w.t<=E.t+Number.EPSILON&&w.t>=E.t-Number.EPSILON)===void 0&&(u.push(E),b.push(new me(E.x,E.y)))}}return b}function c(x,m,u){let b=new me;m.getCenter(b);let _=[];return u.forEach(y=>{y.boundingBox.containsPoint(b)&&a(x,y.points).forEach(A=>{_.push({identifier:y.identifier,isCW:y.isCW,point:A})})}),_.sort((y,P)=>y.point.x-P.point.x),_}function l(x,m,u,b,_){(_==null||_==="")&&(_="nonzero");let y=new me;x.boundingBox.getCenter(y);let P=[new me(u,y.y),new me(b,y.y)],A=c(P,x.boundingBox,m);A.sort((X,$)=>X.point.x-$.point.x);let C=[],F=[];A.forEach(X=>{X.identifier===x.identifier?C.push(X):F.push(X)});let E=C[0].point.x,w=[],V=0;for(;V<F.length&&F[V].point.x<E;)w.length>0&&w[w.length-1]===F[V].identifier?w.pop():w.push(F[V].identifier),V++;if(w.push(x.identifier),_==="evenodd"){let X=w.length%2===0,$=w[w.length-2];return{identifier:x.identifier,isHole:X,for:$}}else if(_==="nonzero"){let X=!0,$=null,te=null;for(let se=0;se<w.length;se++){let ne=w[se];X?(te=m[ne].isCW,X=!1,$=ne):te!==m[ne].isCW&&(te=m[ne].isCW,X=!0)}return{identifier:x.identifier,isHole:X,for:$}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,d=-999999999,f=e.subPaths.map(x=>{let m=x.getPoints(),u=-999999999,b=999999999,_=-999999999,y=999999999;for(let P=0;P<m.length;P++){let A=m[P];A.y>u&&(u=A.y),A.y<b&&(b=A.y),A.x>_&&(_=A.x),A.x<y&&(y=A.x)}return d<=_&&(d=_+1),h>=y&&(h=y-1),{curves:x.curves,points:m,isCW:At.isClockWise(m),identifier:-1,boundingBox:new Gs(new me(y,b),new me(_,u))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;let p=f.map(x=>l(x,f,h,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(x=>{if(!p[x.identifier].isHole){let u=new yt;u.curves=x.curves,p.filter(_=>_.isHole&&_.for===x.identifier).forEach(_=>{let y=f[_.identifier],P=new mn;P.curves=y.curves,u.holes.push(P)}),g.push(u)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;let c=new ct;return c.setAttribute("position",new Je(r,3)),c.setAttribute("normal",new Je(o,3)),c.setAttribute("uv",new Je(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){let l=new me,h=new me,d=new me,f=new me,p=new me,g=new me,x=new me,m=new me,u=new me,b=new me,_=new me,y=new me,P=new me,A=new me,C=new me,F=new me,E=new me;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=M(e);let w=e.length;if(w<2)return 0;let V=e[0].equals(e[w-1]),X,$=e[0],te,se=t.strokeWidth/2,ne=1/(w-1),ae=0,q,le,ie,pe,ve=!1,Ie=0,Z=c*3,W=c*2;R(e[0],e[1],l).multiplyScalar(se),m.copy(e[0]).sub(l),u.copy(e[0]).add(l),b.copy(m),_.copy(u);for(let I=1;I<w;I++){X=e[I],I===w-1?V?te=e[1]:te=void 0:te=e[I+1];let O=l;if(R($,X,O),d.copy(O).multiplyScalar(se),y.copy(X).sub(d),P.copy(X).add(d),q=ae+ne,le=!1,te!==void 0){R(X,te,h),d.copy(h).multiplyScalar(se),A.copy(X).sub(d),C.copy(X).add(d),ie=!0,d.subVectors(te,$),O.dot(d)<0&&(ie=!1),I===1&&(ve=ie),d.subVectors(te,X),d.normalize();let k=Math.abs(O.dot(d));if(k>Number.EPSILON){let B=se/k;d.multiplyScalar(-B),f.subVectors(X,$),p.copy(f).setLength(B).add(d),F.copy(p).negate();let D=p.length(),S=f.length();f.divideScalar(S),g.subVectors(te,X);let J=g.length();switch(g.divideScalar(J),f.dot(F)<S&&g.dot(F)<J&&(le=!0),E.copy(p).add(X),F.add(X),pe=!1,le?ie?(C.copy(F),P.copy(F)):(A.copy(F),y.copy(F)):he(),t.strokeLineJoin){case"bevel":U(ie,le,q);break;case"round":z(ie,le),ie?Q(X,y,A,q,0):Q(X,C,P,q,1);break;case"miter":case"miter-clip":default:let ee=se*t.strokeMiterLimit/D;if(ee<1)if(t.strokeLineJoin!=="miter-clip"){U(ie,le,q);break}else z(ie,le),ie?(g.subVectors(E,y).multiplyScalar(ee).add(y),x.subVectors(E,A).multiplyScalar(ee).add(A),T(y,q,0),T(g,q,0),T(X,q,.5),T(X,q,.5),T(g,q,0),T(x,q,0),T(X,q,.5),T(x,q,0),T(A,q,0)):(g.subVectors(E,P).multiplyScalar(ee).add(P),x.subVectors(E,C).multiplyScalar(ee).add(C),T(P,q,1),T(g,q,1),T(X,q,.5),T(X,q,.5),T(g,q,1),T(x,q,1),T(X,q,.5),T(x,q,1),T(C,q,1));else le?(ie?(T(u,ae,1),T(m,ae,0),T(E,q,0),T(u,ae,1),T(E,q,0),T(F,q,1)):(T(u,ae,1),T(m,ae,0),T(E,q,1),T(m,ae,0),T(F,q,0),T(E,q,1)),ie?A.copy(E):C.copy(E)):ie?(T(y,q,0),T(E,q,0),T(X,q,.5),T(X,q,.5),T(E,q,0),T(A,q,0)):(T(P,q,1),T(E,q,1),T(X,q,.5),T(X,q,.5),T(E,q,1),T(C,q,1)),pe=!0;break}}else he()}else he();!V&&I===w-1&&G(e[0],b,_,ie,!0,ae),ae=q,$=X,m.copy(A),u.copy(C)}if(!V)G(X,y,P,ie,!1,q);else if(le&&r){let I=E,O=F;ve!==ie&&(I=F,O=E),ie?(pe||ve)&&(O.toArray(r,0),O.toArray(r,9),pe&&I.toArray(r,3)):(pe||!ve)&&(O.toArray(r,3),O.toArray(r,9),pe&&I.toArray(r,0))}return Ie;function R(I,O,k){return k.subVectors(O,I),k.set(-k.y,k.x).normalize()}function T(I,O,k){r&&(r[Z]=I.x,r[Z+1]=I.y,r[Z+2]=0,o&&(o[Z]=0,o[Z+1]=0,o[Z+2]=1),Z+=3,a&&(a[W]=O,a[W+1]=k,W+=2)),Ie+=3}function Q(I,O,k,B,D){l.copy(O).sub(I).normalize(),h.copy(k).sub(I).normalize();let S=Math.PI,J=l.dot(h);Math.abs(J)<1&&(S=Math.abs(Math.acos(J))),S/=n,d.copy(O);for(let ee=0,ge=n-1;ee<ge;ee++)f.copy(d).rotateAround(I,S),T(d,B,D),T(f,B,D),T(I,B,.5),d.copy(f);T(f,B,D),T(k,B,D),T(I,B,.5)}function he(){T(u,ae,1),T(m,ae,0),T(y,q,0),T(u,ae,1),T(y,q,0),T(P,q,1)}function U(I,O,k){O?I?(T(u,ae,1),T(m,ae,0),T(y,q,0),T(u,ae,1),T(y,q,0),T(F,q,1),T(y,k,0),T(A,k,0),T(F,k,.5)):(T(u,ae,1),T(m,ae,0),T(P,q,1),T(m,ae,0),T(F,q,0),T(P,q,1),T(P,k,1),T(F,k,0),T(C,k,1)):I?(T(y,k,0),T(A,k,0),T(X,k,.5)):(T(P,k,1),T(C,k,0),T(X,k,.5))}function z(I,O){O&&(I?(T(u,ae,1),T(m,ae,0),T(y,q,0),T(u,ae,1),T(y,q,0),T(F,q,1),T(y,ae,0),T(X,q,.5),T(F,q,1),T(X,q,.5),T(A,ae,0),T(F,q,1)):(T(u,ae,1),T(m,ae,0),T(P,q,1),T(m,ae,0),T(F,q,0),T(P,q,1),T(P,ae,1),T(F,q,0),T(X,q,.5),T(X,q,.5),T(F,q,0),T(C,ae,1)))}function G(I,O,k,B,D,S){switch(t.strokeLineCap){case"round":D?Q(I,k,O,S,.5):Q(I,O,k,S,.5);break;case"square":if(D)l.subVectors(O,I),h.set(l.y,-l.x),d.addVectors(l,h).add(I),f.subVectors(h,l).add(I),B?(d.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(d.toArray(r,3),a[7]===1?f.toArray(r,9):d.toArray(r,9),f.toArray(r,0));else{l.subVectors(k,I),h.set(l.y,-l.x),d.addVectors(l,h).add(I),f.subVectors(h,l).add(I);let J=r.length;B?(d.toArray(r,J-3),f.toArray(r,J-6),f.toArray(r,J-12)):(f.toArray(r,J-6),d.toArray(r,J-3),f.toArray(r,J-12))}break;case"butt":default:break}}function M(I){let O=!1;for(let B=1,D=I.length-1;B<D;B++)if(I[B].distanceTo(I[B+1])<s){O=!0;break}if(!O)return I;let k=[];k.push(I[0]);for(let B=1,D=I.length-1;B<D;B++)I[B].distanceTo(I[B+1])>=s&&k.push(I[B]);return k.push(I[I.length-1]),k}}};window.SlinkGrowthModules={createTile:Qs,VARIANTS:Ol,TILE_SPEC:Fl,disposeTile:er};window.Slink3D=(()=>{let i=new na,e,t=!1,n=null,s=!1,r,o,a,c,l,h=new Vs,d=[],f=[],p=[],g,x,m,u=!1,b,_=[],y=[],P=0,A=0,C=(U,z=.55,G={})=>new rt({color:U,roughness:z,metalness:0,...G});function F(U,z,G,M,I){let O=new yt;return O.moveTo(U+I,z),O.lineTo(U+G-I,z),O.quadraticCurveTo(U+G,z,U+G,z+I),O.lineTo(U+G,z+M-I),O.quadraticCurveTo(U+G,z+M,U+G-I,z+M),O.lineTo(U+I,z+M),O.quadraticCurveTo(U,z+M,U,z+M-I),O.lineTo(U,z+I),O.quadraticCurveTo(U,z,U+I,z),O}function E(U,z,G=0,M=0,I=0,O=c){let k=new ze(U,z);return k.position.set(G,M,I),k.castShadow=!0,k.receiveShadow=!0,O.add(k),k}function w(U,z,G,M,I,O,k,B,D=c){return E(new yn(U,z,G,4,M),I,O,k,B,D)}function V(){let U=document.createElement("canvas");U.width=U.height=128;let z=U.getContext("2d"),G=z.createImageData(128,128),M=73;for(let O=0;O<G.data.length;O+=4){M=M*1664525+1013904223>>>0;let k=128+(M>>>27)%9;G.data[O]=G.data[O+1]=G.data[O+2]=k,G.data[O+3]=255}z.putImageData(G,0,0);let I=new pn(U);return I.wrapS=I.wrapT=Oi,I}let X=()=>V();function $(){let U=V(),z=U.image,G=z.getContext("2d");G.fillStyle="#656565";for(let M=0;M<4;M++){let I=M*Math.PI/2+.5;G.save(),G.translate(64+Math.cos(I)*18,64+Math.sin(I)*18),G.rotate(I),G.beginPath(),G.ellipse(0,0,18,9,0,0,Math.PI*2),G.fill(),G.restore()}return G.beginPath(),G.arc(64,64,5,0,Math.PI*2),G.fill(),U.needsUpdate=!0,U}function te(U){let z=document.createElement("canvas");z.width=z.height=128;let G=z.getContext("2d");G.fillStyle="#77421a",G.font="bold 82px Trebuchet MS",G.textAlign="center",G.textBaseline="middle",G.fillText(String(U),64,69);let M=new pn(z);return M.colorSpace=xt,M}function se(U,z){let G=0;for(let I=0;I<U.length;I++){let O=U[I],k=U[(I+1)%U.length];G+=O.x*k.y-k.x*O.y}let M=G>0?1:-1;return U.map((I,O)=>{let k=U[(O+U.length-1)%U.length],B=U[(O+1)%U.length],D=I.clone().sub(k).normalize(),S=B.clone().sub(I).normalize(),J=new me(D.y,-D.x).multiplyScalar(M),ee=new me(S.y,-S.x).multiplyScalar(M),ge=J.clone().add(ee).normalize();return I.clone().add(ge.multiplyScalar(z/Math.max(.25,ge.dot(J))))})}function ne(U){let z=new yt;return U.forEach((G,M)=>M?z.lineTo(G.x,-G.y):z.moveTo(G.x,-G.y)),z.closePath(),z}function ae(U,z){let G=new Set(U),M=[];for(;G.size;){let I=G.values().next().value,O=[I];G.delete(I);for(let k=0;k<O.length;k++){let B=O[k];for(let D of[B-z,B+z,B%z?B-1:-1,B%z<z-1?B+1:-1])G.has(D)&&(G.delete(D),O.push(D))}M.push(O)}return M}function q(U,z,G){let M=new Set(U),I=[],O=(B,D)=>B>=0&&D>=0&&B<z&&M.has(D*z+B);for(let B of U){let D=B%z,S=Math.floor(B/z),J=20+D*80,ee=20+S*80;O(D,S-1)||I.push([[J,ee],[J+80,ee]]),O(D+1,S)||I.push([[J+80,ee],[J+80,ee+80]]),O(D,S+1)||I.push([[J+80,ee+80],[J,ee+80]]),O(D-1,S)||I.push([[J,ee+80],[J,ee]])}let k=[];for(;I.length;){let B=I.shift(),D=B[0],S=[D],J=B[1];for(;J.join()!=D.join();){S.push(J);let ee=I.findIndex(ge=>ge[0].join()==J.join());if(ee<0)break;J=I.splice(ee,1)[0][1]}S=S.filter((ee,ge)=>{let L=S[(ge+S.length-1)%S.length],v=S[(ge+1)%S.length];return!(L[0]===ee[0]&&v[0]===ee[0]||L[1]===ee[1]&&v[1]===ee[1])}),k.push(S.map(ee=>new me(...ee)))}return k.sort((B,D)=>Math.abs(At.area(D))-Math.abs(At.area(B))),k.map((B,D)=>{let S=se(B,D?G:-G),J=new yt;return S.forEach((ee,ge)=>{let L=S[(ge+S.length-1)%S.length],v=S[(ge+1)%S.length],Y=Math.min(10,ee.distanceTo(L)/3,ee.distanceTo(v)/3),j=ee.clone().add(L.clone().sub(ee).normalize().multiplyScalar(Y)),ue=ee.clone().add(v.clone().sub(ee).normalize().multiplyScalar(Y));ge?J.lineTo(j.x,-j.y):J.moveTo(j.x,-j.y),J.quadraticCurveTo(ee.x,-ee.y,ue.x,-ue.y)}),J.closePath(),J})}function le(){l=document.createElement("canvas"),l.id="terrain3d",l.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(l),r=new jo({canvas:l,alpha:!0,antialias:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!1,r.shadowMap.needsUpdate=!0,r.shadowMap.type=to,r.outputColorSpace=xt,r.toneMapping=co,r.toneMappingExposure=.88,o=new ws,o.add(new Hs("#fff6dc","#a28d6c",1.65));let U=new $i("#fff4dc",3.3);U.position.set(-300,450,750),U.castShadow=!0,U.shadow.mapSize.set(2048,2048),Object.assign(U.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),U.shadow.bias=-3e-4,U.shadow.normalBias=.9,U.shadow.radius=4,o.add(U);let z=new $i("#d4e8ff",.4);z.position.set(500,-100,400),o.add(z),c=new Ze,o.add(c),e=Qh(),e.setSize(90),o.add(e.group),a=new fi,a.up.set(0,1,0),a.near=1,a.far=3e3,x=new ResizeObserver(()=>ie()),x.observe(document.getElementById("board"));let G=(B,D)=>{let S=l.getBoundingClientRect();return h.setFromCamera(new me((B-S.left)/S.width*2-1,-(D-S.top)/S.height*2+1),a),h.intersectObjects(d,!1)[0]?.object.userData.cell??-1},M=new Zt(new H(0,0,1),-8.5),I=new H,O=(B,D)=>{let S=l.getBoundingClientRect();return h.setFromCamera(new me((B-S.left)/S.width*2-1,-(D-S.top)/S.height*2+1),a),h.ray.intersectPlane(M,I)?Wl(g.l.n,window.SlinkAcceptedPath||[],I.x,I.y,window.SlinkTouchSettings):-1},k=B=>{if(!u)return;let D=performance.now();window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},input:Math.round(Math.max(0,D-B.timeStamp))};let S=b||B,J=B.clientX-S.clientX,ee=B.clientY-S.clientY,ge=Math.max(1,Math.ceil(Math.hypot(J,ee)/3));for(let L=1;L<=ge;L++){let v=O(S.clientX+J*L/ge,S.clientY+ee*L/ge);v>=0&&g.onMove(v)}b={clientX:B.clientX,clientY:B.clientY},window.SlinkTouchMetrics.handler=Math.round((performance.now()-D)*10)/10};l.addEventListener("pointerdown",B=>{B.preventDefault(),l.setPointerCapture(B.pointerId),u=!0,t=G(B.clientX,B.clientY)===(window.SlinkAcceptedPath||[]).at(-1)||h.intersectObject(e.group,!0).length>0,b=null,k(B),document.getElementById("board").focus({preventScroll:!0})}),l.addEventListener("pointermove",B=>{let D=B.getCoalescedEvents?.();for(let S of D?.length?D:[B])k(S)});for(let B of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(B,()=>{u=!1,t=!1,b=null});l.addEventListener("webglcontextlost",B=>{B.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),l.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function ie(U=!1){if(!g)return;let z=document.getElementById("board"),G=z.clientWidth,M=z.clientHeight;if(!G||!M)return;r.setSize(G,M,!1);let I=new fn().setFromObject(c);I.max.z=Math.max(I.max.z,60);let O=I.getCenter(new H);a.position.set(O.x,O.y-430,O.z+1250),a.lookAt(O.x,O.y,0),a.updateMatrixWorld();let k=o.children.find(v=>v.isDirectionalLight&&v.castShadow);if(k){let v=Math.max(I.max.x-I.min.x,I.max.y-I.min.y)*.75+60;k.target.position.set(O.x,O.y,0),o.add(k.target),Object.assign(k.shadow.camera,{left:-v,right:v,top:v,bottom:-v}),k.shadow.camera.updateProjectionMatrix()}let B=a.matrixWorldInverse,D=new me(1/0,1/0),S=new me(-1/0,-1/0);for(let v of[I.min.x,I.max.x])for(let Y of[I.min.y,I.max.y])for(let j of[I.min.z,I.max.z]){let ue=new H(v,Y,j).applyMatrix4(B);D.min(ue),S.max(ue)}let J=(D.x+S.x)/2,ee=(D.y+S.y)/2,ge=Math.max((S.y-D.y)/2,(S.x-D.x)/2/(G/M))+13,L=ge*G/M;Object.assign(a,{left:J-L,right:J+L,top:ee+ge,bottom:ee-ge}),a.updateProjectionMatrix(),r.shadowMap.needsUpdate=!0,U||pe()}function pe(){r.render(o,a)}function ve(U){if(requestAnimationFrame(ve),!r||!g||document.hidden||window.SlinkPrewarmPaused||document.getElementById("win")?.hidden===!1){A=U;return}if(U-A<33)return;P+=Math.min((U-A)/1e3,.1),A=U,i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220;let z=i.sample(U/1e3);!z.moving&&window.SlinkTouchAcceptedAt!==void 0&&(window.SlinkTouchMetrics={...window.SlinkTouchMetrics||{},arrival:Math.round(performance.now()-window.SlinkTouchAcceptedAt)},window.SlinkTouchAcceptedAt=void 0),e.group.position.set(z.x,z.y,8.5+9.5*(_.find(M=>M.i===z.cell)?.progress||0)),e.group.rotation.z=z.heading,e.group.visible&&e.update(P,0,{active:z.moving,travel:z.travel,celebrationAge:z.celebrationAge,celebrationTurn:z.celebrationTurn,celebrationStyle:"gentle"}),l.dataset.creatureCell=z.cell,l.dataset.creatureMoving=String(z.moving),l.dataset.creatureX=z.x,l.dataset.creatureY=z.y,l.dataset.creatureHeading=z.heading,l.dataset.creatureCelebration=z.celebrationAge;for(let M of y)M.update(P);let G=window.SlinkBacktrackHighlight?.enabled!==!1&&t?(window.SlinkAcceptedPath||[]).at(-2):void 0;l.dataset.highlightedCell=G??"";for(let M of _){if(Jh(M.grown,M.i===G,window.SlinkBacktrackHighlight?.strength??.24),M.meadow?.update(P),!M.grown)continue;let I=Math.min((U-M.changedAt)/M.duration,1);M.progress=M.from+(M.target-M.from)*Math.max(0,I);let O=M.progress;M.grown.scale.z=(8.5+9.5*O)/18,M.grown.position.z=0,M.grown.visible=O>0,M.lastOpacity!==O&&(M.lastOpacity=O,M.grown.traverse(k=>{k.isMesh&&(k.material.transparent=O<1,k.material.opacity=O,k.castShadow=O>.7)})),M.earth.visible=O<1}for(let M of p){let I=_.find(O=>O.i===M.i);M.goal.group.position.z=8.5+9.5*(I?.progress||0),M.goal.update(P,.033)}r.shadowMap.needsUpdate=!0,pe()}requestAnimationFrame(ve);function Ie(U){let z=new Set,G=new Set,M=new Set;U.traverse(I=>{I.geometry&&z.add(I.geometry);for(let O of[].concat(I.material||[])){G.add(O);for(let k of Object.values(O))k?.isTexture&&M.add(k)}}),U.clear(),z.forEach(I=>I.dispose()),G.forEach(I=>I.dispose()),M.forEach(I=>I.dispose())}function Z(){return{root:c,current:g,targets:d,grass:f,coins:p,tiles:_,liquids:y}}function W(U){({root:c,current:g,targets:d,grass:f,coins:p,tiles:_,liquids:y}=U)}function R(U,z,G){g={l:U,onMove:G},Ie(c),d=[],f=[],p=[],_=[],y=[];let M=new tr,I=M.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+z+'"/></svg>'),O=tr.createShapes(I.paths[0])[0].getPoints(24);O.pop();let k=ne(se(O,11)),B=C("#f6dfb5",.62,{bumpMap:X(),bumpScale:.18,side:Ot}),D=[...U.water||[],...U.lava||[]],S=v=>({x:v%U.n*80+60,y:-(Math.floor(v/U.n)*80+60)}),J=[];for(let[v,Y]of[["water",U.water||[]],["lava",U.lava||[]]])for(let j of ae(Y,U.n)){let ue=q(j,U.n,7);k.holes.push(ue[0]),J.push({type:v,group:j,shapes:ue})}let ee=new Gt(k,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});E(ee,B,0,0,-24);for(let v of ae(U.solution,U.n)){let Y=q(v,U.n,0),j=Y[0];j.holes.push(...Y.slice(1)),E(new Os(j),C("#87623d",.8),0,0,3.2)}for(let v of U.solution){let Y=S(v);_.push({i:v,p:Y,id:null,group:null})}for(let{type:v,group:Y,shapes:j}of J){let ue=S(Y[0]),ce=window.SlinkCatalogueDesign,Ae=du(v,{style:v==="water"?ce?.waterStyle||"sway":ce?.lavaStyle||"bubbles",center:[ue.x,ue.y]});y.push(Ae);let _e=j[0];_e.holes.push(...j.slice(1)),E(new Gt(_e,{depth:3,bevelEnabled:!1,curveSegments:20}),Ae.material,0,0,-15)}let ge=cu(U),L=new Map;for(let v of U.stones||[]){let Y=ge.stones[v];L.has(Y)||L.set(Y,ou(Y,{seed:ge.seed}));let j=L.get(Y).group.clone(!0),ue=S(v);j.position.set(ue.x,ue.y,0),j.userData.cell=v,c.add(j),j.traverse(ce=>{ce.isMesh&&(ce.userData.cell=-1,d.push(ce))})}if(U.fence){let v=$h({n:U.n,walls:U.walls,origin:[60,-60],style:U.fence.style,design:U.fence.design});c.add(v.group)}else for(let[v,Y]of U.walls){let j=S(v),ue=S(Y);w(j.x===ue.x?53:9,j.y===ue.y?53:9,18,3,C("#a49983",.85),(j.x+ue.x)/2,(j.y+ue.y)/2,17)}for(let[v,Y]of U.marks.entries()){let j=S(Y),ue=su({species:ge.flowers[v],number:v+1,state:v===0?"next":"closed",layout:"compact"});if(new URLSearchParams(location.search).has("preview")){let ce=new URLSearchParams(location.search).get("flower-anchor"),Ae={front:[-25,-22],back:[-25,22],compact:[-18,-10]}[ce];if(Ae)for(let _e of[ue.group.children[0],ue.group.children[4]])_e.position.x=Ae[0],_e.position.z=-Ae[1];if(ce==="compact"){let _e=ue.group.children[4],Re=new Ze;Re.scale.set(.85,.62,.85);for(let Ce of[..._e.children])Re.add(Ce);_e.add(Re)}}ue.group.rotation.x=Math.PI/2,ue.group.position.set(j.x,j.y,8.5),c.add(ue.group),p.push({i:Y,goal:ue})}r.shadowMap.needsUpdate=!0,s||ie(!0)}function T(U){U.earth=Yh(Qs("earth-loam",{seed:73+U.i*19})),U.group=U.earth,U.earth.position.set(U.p.x,U.p.y,0),c.add(U.earth),U.earth.traverse(z=>{z.isMesh&&z.userData.surface&&(z.userData.cell=U.i,d.push(z))}),U.progress=0,U.target=0,U.from=0,U.changedAt=performance.now(),U.duration=300}function Q(U,z){if(!r||!g||n?.current.l===U)return!1;n&&(Ie(n.root),n=null);let G=Z(),M=performance.now(),I=e.group.visible,O=r.getRenderTarget(),k,B;s=!0,W({root:new Ze,current:null,targets:[],grass:[],coins:[],tiles:[],liquids:[]}),B=c;try{R(U,z,()=>{});for(let S of _)T(S);for(let S of p)S.goal.setSize(window.SlinkMarkerSize||27);n=Z(),o.remove(G.root),o.add(c),e.group.visible=!1;let D=[];return c.traverse(S=>{S.isMesh&&(D.push([S,S.frustumCulled]),S.frustumCulled=!1)}),r.compile(o,a),k=new Jt(128,128),k.texture.colorSpace=r.outputColorSpace,r.setRenderTarget(k),r.shadowMap.needsUpdate=!0,pe(),D.forEach(([S,J])=>S.frustumCulled=J),l.dataset.nextPrepared=U.id,l.dataset.nextPrepareMs=Math.round(performance.now()-M),!0}catch(D){return console.warn("Next puzzle preparation:",D),Ie(B),n=null,!1}finally{r.setRenderTarget(O),k?.dispose(),o.remove(B),o.add(G.root),e.group.visible=I,W(G),s=!1,r.shadowMap.needsUpdate=!0}}function he(U,z){o.remove(c),Ie(c),W(n),n=null,g={l:U,onMove:z},o.add(c),ie(!0),l.dataset.nextPrepared="",l.dataset.usedPrepared=U.id}return{prepare:Q,diagnostics(){return r?{textures:r.info.memory.textures,geometries:r.info.memory.geometries,programs:r.info.programs.length,flowers:p.map(U=>U.goal.group.userData.species),bloomsReady:p.every(U=>U.goal.state==="bloom"&&U.goal.group.getObjectByName("flower-visitors").visible===!!(window.SlinkVisitorSettings?.enabled??!0)),stoneStyles:c.children.filter(U=>U.userData.style&&U.userData.walkable===!1).map(U=>U.userData.style),fence:g?.l.fence?{...g.l.fence,spans:c.getObjectByName("wood-fence")?.children.filter(U=>U.name==="fence-span").length}:null,creature:{visible:e.group.visible,cell:l.dataset.creatureCell,moving:l.dataset.creatureMoving,heading:l.dataset.creatureHeading,celebrationAge:l.dataset.creatureCelebration},visitors:{...window.SlinkVisitorSettings}}:null},update(U,z,G,M){try{let I=performance.now(),O=g?.l!==U;r||le();let k=performance.now();O&&(n?.current.l===U?he(U,M):(n&&(Ie(n.root),n=null),R(U,G,M),l.dataset.usedPrepared=""));let B=performance.now();z.at(-1)!==window.SlinkAcceptedPath?.at(-1)&&(window.SlinkTouchAcceptedAt=performance.now()),window.SlinkAcceptedPath=[...z],i.transition.durationScale=(window.SlinkTouchSettings?.follow??220)/220,i.sync(U,z,performance.now()/1e3);let D=window.SlinkCreatureSettings||{palette:"apricot",size:90};e.group.userData.palette!==D.palette&&e.setPalette(D.palette),e.setSize(D.size),e.group.visible=D.enabled!==!1,l.dataset.creatureVisible=String(e.group.visible);let S=U.marks.find(ee=>!z.includes(ee));for(let ee of _){ee.group||T(ee);let ge=z.includes(ee.i)?1:0;if(ge&&!ee.grown){if(ee.meadow=hu(U.meadowVariants?.[ee.i]||"classic",{seed:(U.meadowSeed||73)+ee.i*19}),ee.grown=ee.meadow.group,U.marks.includes(ee.i))for(let L of[...ee.grown.children])!L.userData.surface&&L.position.x>0&&L.position.y<-3&&ee.grown.remove(L);ee.grown.position.set(ee.p.x,ee.p.y,0),c.add(ee.grown),ee.grown.traverse(L=>{L.isMesh&&L.userData.surface&&(L.userData.cell=ee.i,d.push(L))}),ee.grown.visible=!1}ge!==ee.target&&(ee.from=ee.progress,ee.target=ge,ee.changedAt=performance.now(),ee.duration=ge?300:180)}for(let ee of p){ee.goal.setState(z.includes(ee.i)?"bloom":ee.i===S?"next":"closed"),ee.goal.setSize(window.SlinkMarkerSize||27);let ge=window.SlinkVisitorSettings||{enabled:!0,bee:100,bumblebee:100};ee.goal.setInsects(ge.enabled),ee.goal.setVisitorSize("bee",ge.bee),ee.goal.setVisitorSize("bumblebee",ge.bumblebee)}if(O){let ee=i.sample(performance.now()/1e3);e.group.position.set(ee.x,ee.y,8.5),e.group.rotation.z=ee.heading,e.update(P,0,{active:!1})}let J=performance.now();return r.shadowMap.needsUpdate=!0,pe(),O&&(l.dataset.startup=JSON.stringify({install:Math.round(k-I),terrain:Math.round(B-k),tiles:Math.round(J-B),firstRender:Math.round(performance.now()-J),total:Math.round(performance.now()-I)})),!0}catch(I){return console.error("3D renderer:",I),document.getElementById("field").classList.remove("has-3d"),!1}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
